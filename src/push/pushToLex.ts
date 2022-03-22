/*! Copyright (c) 2019, XAPPmedia */
import { TranslateToLexImportExportBot, LexImportExportBot, LexImportExportResource } from "@xapp/stentor-lex-lib";
import { GetImportResponse, LexService, StartImportResponse } from "@xapp/stentor-service-lex";
import AdmZip = require("adm-zip");
import { isIntent } from "stentor-guards";
import { Intent } from "stentor-models";
import log from "stentor-logger";
import { getAppIntentEntities } from "../getAppIntentEntities";

const DELAY_IN_MS = 1000;


/**
 * Private helper to add a delay to the promise chain
 *
 * @param t
 */
function delay(t: number, v?: any): Promise<void> {
    return new Promise((resolve) => {
        // tslint:disable-next-line:no-null-keyword
        setTimeout(resolve.bind(null, v), t);
    });
}

/**
 * Push to LEX
 *
 * Note: This currently uses the IMPORT method, not individual updates.  It also will overwrite any changes
 * that were made on the LEX console.
 *
 * @param options
 */
export async function pushToLex(options?: { appId?: string; lang?: string; awsRole?: string }): Promise<void> {
    const { appId, awsRole } = options;
    const { app, intents = [], entities = [] } = await getAppIntentEntities(appId);
    const filtered: Intent[] = intents.filter((potential) => {
        return isIntent(potential);
    });

    log.info(`Pushing ${app.name} with ${filtered.length} intents and ${entities.length} entities to LEX.`);

    // OK! Translate to the LexImportExportBot format
    const translator = new TranslateToLexImportExportBot();

    const bot = translator.translate({ app, intents: filtered, entities });

    const resource: LexImportExportResource<LexImportExportBot> = {
        resource: bot,
        metadata: {
            schemaVersion: "1.0",
            importType: "LEX",
            importFormat: "JSON",
        },
    };

    // create archive
    const zip = new AdmZip();
    // add in-memory file
    const json = JSON.stringify(resource, undefined, 2);
    zip.addFile("bot.json", Buffer.alloc(json.length, json));
    // get in-memory zip
    const zipBuffer = zip.toBuffer();
    // Push the buffer to LEX
    const lex = new LexService({
        config: {
            credentials: {
                role: {
                    arn: awsRole,
                    externalId: undefined, // cross-account use not supported for non-user credentials yet.
                },
            },
        },
    });
    const response = await lex.startImport(zipBuffer, "OVERWRITE_LATEST");

    // Check on it
    async function getStatus(response: GetImportResponse | StartImportResponse): Promise<GetImportResponse> {
        if (response.importStatus === "IN_PROGRESS") {
            return lex.getImport(response.importId).then(async (data) => {
                return delay(DELAY_IN_MS).then(() => {
                    if (data.importStatus === "IN_PROGRESS") {
                        log.info(`Still in progress, checking again...`);
                    }
                    return getStatus(data);
                });
            });
        } else {
            // Get Out, exit condition
            return response;
        }
    }

    let importStatus: GetImportResponse;

    if (response.importStatus === "IN_PROGRESS") {
        // Check on it, delay the first one
        importStatus = await delay(DELAY_IN_MS).then(() => {
            return getStatus(response);
        });
    }

    if (importStatus.importStatus === "FAILED") {
        log.warn("Push failed");
        log.info("Failure reasons:");
        log.info(JSON.stringify(importStatus.failureReason, undefined, 2));
    } else if (importStatus.importStatus === "COMPLETE") {
        log.info(`Push to LEX complete.`);
    } else {
        log.info(`Status of import ${importStatus.importStatus}`);
    }
}


