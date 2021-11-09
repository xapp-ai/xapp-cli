/*! Copyright (c) 2019, XAPPmedia */
import { isHandler } from "stentor-guards";
import { log } from "stentor-logger";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getAppIntentEntities } from "../getAppIntentEntities";

/**
 * Exports an app to the provided directory.
 *
 * @export
 * @param {string} organizationId
 * @param {string} appId
 * @param {string} targetDirectory
 * @param {string} [tableVersion="dev"]
 * @returns {Promise<void>}
 */
export async function exportApp(output: string, options?: { appId: string, individual?: boolean }): Promise<void> {
    const { appId, individual } = options;
    const { app, intents, entities } = await getAppIntentEntities(appId);

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
    writeFileSync(exportFilePath, JSON.stringify({ app, handlers: intents, entities }, undefined, 2));

    // OK!  if they want individual di
    if (individual) {
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
        const handlersPath = resolve(exportPath, "handlers");
        mkdirSync(handlersPath);
        // now write all the intents
        intents.forEach(props => {
            let rootPath = intentsPath;
            if (isHandler(props)) {
                rootPath = handlersPath;
            }

            const intentPath = resolve(rootPath, `${props.intentId}.json`);
            writeFileSync(intentPath, JSON.stringify(props, undefined, 2));
        });
    }
}
