/*! Copyright (c) 2022, XAPP AI*/

import { TranslateToLexImportExportBot, LexImportExportBot, LexImportExportResource } from "@xapp/stentor-lex-lib";
import { GetImportResponse, LexService, StartImportResponse } from "@xapp/stentor-service-lex";
import AdmZip = require("adm-zip");
import { readFile, writeFile } from "fs";
import { promisify } from "util";
import { resolve } from "path";
import { log } from "stentor-logger";
import { isIntent } from "stentor-guards";
import { Intent } from "stentor-models";
import { getStentorApp } from "../getStentorApp";

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
export async function pushToLex(options?: { appId?: string; lang?: string; awsRole?: string; output?: string }): Promise<void> {
    const { appId, awsRole, output } = options;
    const { app, intents = [], entities = [] } = await getStentorApp(appId, { withChannels: true });
    const filtered: Intent[] = intents.filter((potential) => {
        return isIntent(potential);
    });

    log().info(`Pushing ${app.name} with ${filtered.length} intents and ${entities.length} entities to LEX.`);

    // OK! Translate to the LexImportExportBot format
    const translator = new TranslateToLexImportExportBot();

    const bot = translator.translate({ app, intents: filtered, entities });

    const resource: LexImportExportResource<LexImportExportBot> = {
        resource: bot,
        metadata: {
            schemaVersion: "1.0",
            importType: "LEX",
            importFormat: "JSON"
        }
    };

    // create archive
    const zip = new AdmZip();
    // add in-memory file
    const json = JSON.stringify(resource, undefined, 2);
    zip.addFile("bot.json", Buffer.from(json)); // Buffer.alloc(json.length, json));

    let zipBuffer: Buffer;

    if (output) {
        const path = resolve(output);

        log().info(`Outputting to ${app.name} to ${path}`);

        // Create a consolidated JSON object that will be exported
        const exportFilePath = resolve(path, `${appId}-lex-bot.json`);

        const pWriteFile = promisify(writeFile);
        await pWriteFile(exportFilePath, json);

        const exportedZipPath = resolve(path, `${appId}-lex-bot.zip`);
        zip.writeZip(exportedZipPath);
        zip.test();

        const pReadFile = promisify(readFile);

        zipBuffer = await pReadFile(exportedZipPath);
    } else {
        zipBuffer = zip.toBuffer();
    }

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
    let response: StartImportResponse;

    try {
        response = await lex.startImport(zipBuffer, "OVERWRITE_LATEST");
    } catch (e) {
        log().error(`Error starting import ${e}`);
        return;
    }

    // Check on it
    async function getStatus(response: GetImportResponse | StartImportResponse): Promise<GetImportResponse> {
        if (response.importStatus === "IN_PROGRESS") {
            return lex.getImport(response.importId).then(async (data) => {
                return delay(DELAY_IN_MS).then(() => {
                    if (data.importStatus === "IN_PROGRESS") {
                        log().info(`Still in progress, checking again...`);
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
        log().warn("Push failed");
        log().info("Failure reasons:");
        log().info(JSON.stringify(importStatus.failureReason, undefined, 2));
    } else if (importStatus.importStatus === "COMPLETE") {
        log().info(`Push to LEX complete.`);
    } else {
        log().info(`Status of import ${importStatus.importStatus}`);
    }
}


