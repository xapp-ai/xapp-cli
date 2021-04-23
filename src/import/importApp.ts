import { resolve } from "path";
import { existsSync, readFileSync } from "fs";

import { log } from "stentor-logger";
import { App, Intent, Handler, Entity } from "stentor-models";

import { getXAPPClient } from "../getXAPPClient";
import { getUserToken } from "../getUserToken";

/**
 * Imports an app from the provided file
 * 
 * @param file 
 * @param options 
 */
export async function importApp(file: string, options: { appId: string }): Promise<void> {

    const { appId } = options;
    const path = resolve(file);

    if (!existsSync(path)) {
        throw new Error(`File ${file} does not exist.  Please provide an existing path to create the export within.`);
    }

    const importedFile = readFileSync(path, "utf8");

    let imported: { app: App, handlers?: (Intent | Handler)[], intents?: (Intent | Handler)[], entities: Entity[] };

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
    const client = getXAPPClient(token, appId);

    // Get the existing app, we will need it for the organizationId
    // It is also a test of if the user has access to this app.
    let existingApp: App;
    try {
        existingApp = await client.getApp(appId);
    } catch (e) {
        log().error(`Unable to access app with ID ${appId}, ensure you have the correct app ID`);
        throw e;
    }

    const organizationId = existingApp.organizationId;
    // Update the app!
    // The app must already exist
    const appToUpdate = { ...existingApp, ...app, appId, organizationId };
    // clean it up
    delete appToUpdate.channels;
    delete appToUpdate.dialogflowClientToken;
    delete appToUpdate.dialogflowDeveloperToken;
    delete appToUpdate.endPoint;
    delete appToUpdate.platformData;
    delete appToUpdate.nlu;

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