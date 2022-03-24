/*! Copyright (c) 2022, XAPP AI*/

import { log } from "stentor-logger";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getStentorApp } from "../getStentorApp";
import { ExportOptions } from "../models/options";
import { getXAPPClient } from "../getXAPPClient";
import { getUserToken } from "../getUserToken";

/**
 * Exports an app to the provided directory.
 */
export async function exportApp(output: string, options?: ExportOptions): Promise<void> {
    const { appId, channels, split } = options;
    const { app, intents, entities, handlers } = await getStentorApp(appId);

    // Resolve the path
    const path = resolve(output);

    if (!existsSync(path)) {
        throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
    }

    // folder name is app name plus date
    const exportDirName = `${app.organizationId}-${app.appId}-${new Date().getTime()}`;
    const exportPath = resolve(path, exportDirName);
    mkdirSync(exportPath);

    log().info(`Exporting ${app.name} to ${exportPath}`);

    // Create a consolidated JSON object that will be exported
    const exportFilePath = resolve(exportPath, `${appId}.json`);
    writeFileSync(exportFilePath, JSON.stringify({ app, intents, handlers, entities }, undefined, 2));

    // OK!  if they want individual directories
    if (split) {
        // save the app by appId
        const appPath = resolve(exportPath, `app.json`);
        writeFileSync(appPath, JSON.stringify(app, undefined, 2));

        // entities
        const entitiesPath = resolve(exportPath, "entities");
        mkdirSync(entitiesPath);
        entities.forEach((entity) => {
            const entityPath = resolve(entitiesPath, `${entity.entityId}.json`);
            writeFileSync(entityPath, JSON.stringify(entity, undefined, 2));
        });

        // put the intents and handlers in their own directory
        const intentsPath = resolve(exportPath, "intents");
        mkdirSync(intentsPath);
        intents.forEach((intent) => {
            const intentPath = resolve(intentsPath, `${intent.intentId}.json`);
            writeFileSync(intentPath, JSON.stringify(intent, undefined, 2));
        });

        const handlersPath = resolve(exportPath, "handlers");
        mkdirSync(handlersPath);
        handlers.forEach((handler) => {
            const handlerPath = resolve(handlersPath, `${handler.intentId}.json`);
            writeFileSync(handlerPath, JSON.stringify(handler, undefined, 2));
        });
    }

    if (channels) {
        // Ok! find the channel
        const token = await getUserToken();
        const client = getXAPPClient(token, appId);
        const channels = await client.getAppChannels(appId);

        log().info(`Found ${channels.length} channels`);


        // Find the channel
        // entities
        const channelsPath = resolve(exportPath, "channels");
        mkdirSync(channelsPath);
        channels.forEach((channel) => {
            const entityPath = resolve(channelsPath, `${channel.id}.json`);
            writeFileSync(entityPath, JSON.stringify(channel, undefined, 2));
        });
    }
}
