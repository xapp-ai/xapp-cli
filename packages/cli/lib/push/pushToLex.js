"use strict";
/*! Copyright (c) 2022, XAPP AI*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushToLex = pushToLex;
const stentor_lex_lib_1 = require("@xapp/stentor-lex-lib");
const stentor_service_lex_1 = require("@xapp/stentor-service-lex");
const AdmZip = require("adm-zip");
const fs_1 = require("fs");
const util_1 = require("util");
const path_1 = require("path");
const stentor_logger_1 = require("stentor-logger");
const stentor_guards_1 = require("stentor-guards");
const getStentorApp_1 = require("../getStentorApp");
const DELAY_IN_MS = 1000;
/**
 * Private helper to add a delay to the promise chain
 *
 * @param t
 */
function delay(t, v) {
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
function pushToLex(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId, awsRole, output } = options;
        const { app, intents = [], entities = [] } = yield (0, getStentorApp_1.getStentorApp)(appId, { withChannels: true });
        const filtered = intents.filter((potential) => {
            return (0, stentor_guards_1.isIntent)(potential);
        });
        (0, stentor_logger_1.log)().info(`Pushing ${app.name} with ${filtered.length} intents and ${entities.length} entities to LEX.`);
        // OK! Translate to the LexImportExportBot format
        const translator = new stentor_lex_lib_1.TranslateToLexImportExportBot();
        const bot = translator.translate({ app, intents: filtered, entities });
        const resource = {
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
        let zipBuffer;
        if (output) {
            const path = (0, path_1.resolve)(output);
            (0, stentor_logger_1.log)().info(`Outputting to ${app.name} to ${path}`);
            // Create a consolidated JSON object that will be exported
            const exportFilePath = (0, path_1.resolve)(path, `${appId}-lex-bot.json`);
            const pWriteFile = (0, util_1.promisify)(fs_1.writeFile);
            yield pWriteFile(exportFilePath, json);
            const exportedZipPath = (0, path_1.resolve)(path, `${appId}-lex-bot.zip`);
            zip.writeZip(exportedZipPath);
            zip.test();
            const pReadFile = (0, util_1.promisify)(fs_1.readFile);
            zipBuffer = yield pReadFile(exportedZipPath);
        }
        else {
            zipBuffer = zip.toBuffer();
        }
        // Push the buffer to LEX
        const lex = new stentor_service_lex_1.LexService({
            config: {
                credentials: {
                    role: {
                        arn: awsRole,
                        externalId: undefined, // cross-account use not supported for non-user credentials yet.
                    },
                },
            },
        });
        let response;
        try {
            response = yield lex.startImport(zipBuffer, "OVERWRITE_LATEST");
        }
        catch (e) {
            (0, stentor_logger_1.log)().error(`Error starting import ${e}`);
            return;
        }
        // Check on it
        function getStatus(response) {
            return __awaiter(this, void 0, void 0, function* () {
                if (response.importStatus === "IN_PROGRESS") {
                    return lex.getImport(response.importId).then((data) => __awaiter(this, void 0, void 0, function* () {
                        return delay(DELAY_IN_MS).then(() => {
                            if (data.importStatus === "IN_PROGRESS") {
                                (0, stentor_logger_1.log)().info(`Still in progress, checking again...`);
                            }
                            return getStatus(data);
                        });
                    }));
                }
                else {
                    // Get Out, exit condition
                    return response;
                }
            });
        }
        let importStatus;
        if (response.importStatus === "IN_PROGRESS") {
            // Check on it, delay the first one
            importStatus = yield delay(DELAY_IN_MS).then(() => {
                return getStatus(response);
            });
        }
        if (importStatus.importStatus === "FAILED") {
            (0, stentor_logger_1.log)().warn("Push failed");
            (0, stentor_logger_1.log)().info("Failure reasons:");
            (0, stentor_logger_1.log)().info(JSON.stringify(importStatus.failureReason, undefined, 2));
        }
        else if (importStatus.importStatus === "COMPLETE") {
            (0, stentor_logger_1.log)().info(`Push to LEX complete.`);
        }
        else {
            (0, stentor_logger_1.log)().info(`Status of import ${importStatus.importStatus}`);
        }
    });
}
//# sourceMappingURL=pushToLex.js.map