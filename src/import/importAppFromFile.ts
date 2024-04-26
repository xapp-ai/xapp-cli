/*! Copyright (c) 2022, XAPP AI*/
import { resolve } from "path";
import { existsSync, readFileSync } from "fs";

import { log } from "stentor-logger";
import { App, Intent, Handler, Entity } from "stentor-models";

import { UpdateAppInput } from "../graphql/models.js"
import { getXAPPClient } from "../getXAPPClient.js";
import { getUserToken } from "../getUserToken.js";

/**
 * Imports an app from the provided file
 * 
 * @param file 
 * @param options 
 */
export async function importAppFromFile(file: string, options: { appId: string }): Promise<void> {

    const { appId } = options;
    const path = resolve(file);

    if (!existsSync(path)) {
        throw new Error(`File ${file} does not exist.  Please provide an existing path to create the export within.`);
    }

    const importedFile = readFileSync(path, "utf8");

    let imported: { app: App; handlers?: (Intent | Handler)[]; intents?: (Intent | Handler)[]; entities: Entity[] };

    try {
        imported = JSON.parse(importedFile);
    } catch (e) {
        throw new Error(`Unable to parse contents of file at ${path}`);
    }

    const { app, intents, handlers, entities } = imported;

    const combinedIntentsAndHandlers = (intents || []).concat(handlers);

    log().info(`Importing ${app.name} to app ID "${appId}", ${combinedIntentsAndHandlers.length} intents & handlers with ${entities.length} entities`);

    // Lets start writing
    const token = await getUserToken();
    const client = await getXAPPClient(token, appId);

    // Get the existing app, we will need it for the organizationId
    // It is also a test of if the user has access to this app.
    let existingApp: Partial<App>;
    try {
        const data = await client.getApp(appId);
        existingApp = data.app;
    } catch (e) {
        log().error(`Unable to access app with ID ${appId}, ensure you have the correct app ID`);
        throw e;
    }

    // clean it up
    delete existingApp.channels;
    delete existingApp.channels;
    delete existingApp.dialogflowClientToken;
    delete existingApp.dialogflowDeveloperToken;
    delete existingApp.endPoint;
    delete existingApp.platformData;
    delete existingApp.nlu;
    // and this
    delete app.channels;
    delete app.channels;
    delete app.dialogflowClientToken;
    delete app.dialogflowDeveloperToken;
    delete app.endPoint;
    delete app.platformData;
    delete app.nlu;

    const organizationId = existingApp.organizationId;
    // Update the app!
    // The app must already exist
    const appToUpdate: Omit<UpdateAppInput, "platformData"> = { ...existingApp, ...app, appId, organizationId };

    client.updateApp(appToUpdate);
    log().info(`App updated`);

    // Entities
    const entityCreatePromises = entities.map((entity) => {
        delete entity.appId;
        delete entity.dialogflowId;
        return client.createEntity(appId, entity);
    });

    let entityResults: Pick<Entity, "entityId" | "displayName">[];
    try {
        entityResults = await Promise.all(entityCreatePromises);
    } catch (e) {
        log().error(`Unable to import entities.`);
        throw e;
    }

    log().info(`Imported ${entityResults.length} entities.`);

    const intentAndHandlerPromises = combinedIntentsAndHandlers.map((intent) => {
        delete intent.appId;
        delete intent.organizationId;
        delete intent.dialogflowId;
        delete intent.slotTypes;
        return client.createIntent(appId, intent);
    });

    let intentAndHandlerResults: Intent[];
    try {
        intentAndHandlerResults = await Promise.all(intentAndHandlerPromises);
    } catch (e) {
        log().error(`Unable to import intents and handlers.`)
    }

    log().info(`Imported ${intentAndHandlerResults.length} intents and handlers.`);

}