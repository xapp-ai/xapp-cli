/*! Copyright (c) 2019, XAPPmedia */
import { log } from "stentor-logger";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getAppIntentEntities } from "../getAppIntentEntities";

/**
 * Exports an app to the provided directory.
 */
export async function exportApp(output: string, options?: { appId: string, full?: boolean }): Promise<void> {
    const { appId, full } = options;
    const { app, intents, entities, handlers } = await getAppIntentEntities(appId);

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

    // OK!  if they want individual di
    if (full) {
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
}
