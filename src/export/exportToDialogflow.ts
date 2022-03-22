/*! Copyright (c) 2022, XAPP AI*/

import log from "stentor-logger";
import {
    ExportEntityAndEntityEntries,
    ExportIntentAndIntentUserSays,
    TranslateToDialogflowExportAgent,
    TranslateToDialogflowExportEntity,
    TranslateToDialogflowExportIntent
} from "@xapp/stentor-dialogflow/lib/v1";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getAppIntentEntities } from "../getAppIntentEntities";
import { ExportOptions } from "../models/options";

/**
 * Create a Dialogflow zip from the intents and the app
 *
 * @param organizationId
 * @param appId
 * @param tableVersion
 * @param newSkill
 * @returns {Promise<TResult>}
 */
export async function exportToDialogflow(output: string, options: ExportOptions): Promise<void> {
    const { appId } = options;
    const { app, intents } = await getAppIntentEntities(appId);
    log.info(`Exporting ${app.appId} to Dialogflow`);
    log.info(`Found ${app.name} with ${intents.length} intents/handlers`);

    const path = resolve(output);
    if (!existsSync(path)) {
        throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
    }

    // Setup the root directory
    const exportDirName = `${app.appId}-${new Date().getTime()}`;
    const exportPath = resolve(path, exportDirName);
    mkdirSync(exportPath);
    log.info(`Exporting ${app.name} to ${exportPath}`);

    // Start the translations

    // Agent Translator
    const appTranslator = new TranslateToDialogflowExportAgent();
    const dialogflowAgent = appTranslator.translate(app);

    // Intent & Entity Translators
    const intentTranslator = new TranslateToDialogflowExportIntent();
    const entityTranslator = new TranslateToDialogflowExportEntity();

    // These will keep track of all the files
    const exportIntents: ExportIntentAndIntentUserSays[] = [];
    let exportEntities: ExportEntityAndEntityEntries[] = [];

    if (Array.isArray(intents)) {
        intents.forEach(intent => {
            const exportIntent = intentTranslator.translate(intent);
            if (exportIntent) {
                exportIntents.push(exportIntent);
            }
            const exportEntitiesForIntent = entityTranslator.translate(intent);
            exportEntities = exportEntities.concat(exportEntitiesForIntent);
        });
    }

    // NOTE: Only create the directories if we have items, the Dialogflow import doesn't like empty dirs.
    const intentFolder = resolve(exportPath, "intents");
    if (exportIntents.length > 0) {
        mkdirSync(intentFolder);
    }
    const entityFolder = resolve(exportPath, "entities");
    if (exportEntities.length > 0) {
        mkdirSync(entityFolder);
    }

    // Start with the agent
    writeFileSync(exportPath + "/agent.json", JSON.stringify(dialogflowAgent, undefined, 2));
    // and a simple package file
    const packageFile = {
        version: "1.0.0"
    };
    writeFileSync(exportPath + "/package.json", JSON.stringify(packageFile, undefined, 2));

    exportIntents.forEach(intent => {
        const exportIntent = intent.intent;
        const exportIntentPath = intentFolder + "/" + exportIntent.name + ".json";
        log.info("Creating intent file: " + exportIntentPath);
        writeFileSync(exportIntentPath, JSON.stringify(exportIntent, undefined, "  "));

        const userSays = intent.userSays;
        const exportUserSaysPath = intentFolder + "/" + exportIntent.name + "_usersays_en.json";
        log.info(`Creating usersays file: ${exportUserSaysPath}`);
        writeFileSync(exportUserSaysPath, JSON.stringify(userSays, undefined, 2));
    });

    exportEntities.forEach(entity => {
        const exportEntity = entity.entity;
        const exportEntityPath = `${entityFolder}/${exportEntity.name}.json`;
        log.info("Creating entity file: " + exportEntityPath);
        writeFileSync(exportEntityPath, JSON.stringify(exportEntity, undefined, 2));

        const entries = entity.entries;
        const exportEntriesPath = `${entityFolder}/${exportEntity.name}_entries_en.json`;
        log.info(`Creating entries file: ${exportEntriesPath}`);
        writeFileSync(exportEntriesPath, JSON.stringify(entries, undefined, 2));
    });
}
