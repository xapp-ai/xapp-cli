/*! Copyright (c) 2020, XAPPmedia */
import { isIntent } from "stentor-guards";
import log from "stentor-logger";
import { Intent } from "stentor-models";
import {
    TranslateToLexImportExportBot,
    LexImportExportBot,
    LexImportExportResource
} from "@xapp/stentor-lex-lib";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getAppIntentEntities } from "../getAppIntentEntities";

export async function exportToLex(output: string, options: { appId: string }): Promise<void> {

    const { appId } = options;
    const { app, intents, entities } = await getAppIntentEntities(appId);

    const filtered: Intent[] = intents.filter((potential) => {
        return isIntent(potential);
    });
    log.info(`Exporting ${app.appId} to Lex`);
    log.info(`Found ${app.name} with ${filtered.length} intents and ${entities.length} entities.`);

    const path = resolve(output);
    if (!existsSync(path)) {
        throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
    }

    // Setup the root directory
    const exportDirName = `${app.appId}-lex-${new Date().getTime()}`;
    const exportPath = resolve(path, exportDirName);
    mkdirSync(exportPath);
    log.info(`Exporting ${app.name} to ${exportPath}`);

    const bot = new TranslateToLexImportExportBot().translate({ app, intents: filtered, entities });

    const resource: LexImportExportResource<LexImportExportBot> = {
        resource: bot,
        metadata: {
            schemaVersion: "1.0",
            importType: "LEX",
            importFormat: "JSON"
        }
    };

    // Write the file
    writeFileSync(exportPath + `/${app.appId}-lex.json`, JSON.stringify(resource, undefined, 2));

    log.info(`Export complete.`);

}