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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportToDialogflow = exportToDialogflow;
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const v1_1 = require("@xapp/stentor-dialogflow/lib/v1");
const fs_1 = require("fs");
const path_1 = require("path");
const getAppIntentEntities_1 = require("../getAppIntentEntities");
/**
 * Create a Dialogflow zip from the intents and the app
 *
 * @param organizationId
 * @param appId
 * @param tableVersion
 * @param newSkill
 * @returns {Promise<TResult>}
 */
function exportToDialogflow(output, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId } = options;
        const { app, intents } = yield (0, getAppIntentEntities_1.getAppIntentEntities)(appId);
        stentor_logger_1.default.info(`Exporting ${app.appId} to Dialogflow`);
        stentor_logger_1.default.info(`Found ${app.name} with ${intents.length} intents/handlers`);
        const path = (0, path_1.resolve)(output);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
        }
        // Setup the root directory
        const exportDirName = `${app.appId}-${new Date().getTime()}`;
        const exportPath = (0, path_1.resolve)(path, exportDirName);
        (0, fs_1.mkdirSync)(exportPath);
        stentor_logger_1.default.info(`Exporting ${app.name} to ${exportPath}`);
        // Start the translations
        // Agent Translator
        const appTranslator = new v1_1.TranslateToDialogflowExportAgent();
        const dialogflowAgent = appTranslator.translate(app);
        // Intent & Entity Translators
        const intentTranslator = new v1_1.TranslateToDialogflowExportIntent();
        const entityTranslator = new v1_1.TranslateToDialogflowExportEntity();
        // These will keep track of all the files
        const exportIntents = [];
        let exportEntities = [];
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
        const intentFolder = (0, path_1.resolve)(exportPath, "intents");
        if (exportIntents.length > 0) {
            (0, fs_1.mkdirSync)(intentFolder);
        }
        const entityFolder = (0, path_1.resolve)(exportPath, "entities");
        if (exportEntities.length > 0) {
            (0, fs_1.mkdirSync)(entityFolder);
        }
        // Start with the agent
        (0, fs_1.writeFileSync)(exportPath + "/agent.json", JSON.stringify(dialogflowAgent, undefined, 2));
        // and a simple package file
        const packageFile = {
            version: "1.0.0"
        };
        (0, fs_1.writeFileSync)(exportPath + "/package.json", JSON.stringify(packageFile, undefined, 2));
        exportIntents.forEach(intent => {
            const exportIntent = intent.intent;
            const exportIntentPath = intentFolder + "/" + exportIntent.name + ".json";
            stentor_logger_1.default.info("Creating intent file: " + exportIntentPath);
            (0, fs_1.writeFileSync)(exportIntentPath, JSON.stringify(exportIntent, undefined, "  "));
            const userSays = intent.userSays;
            const exportUserSaysPath = intentFolder + "/" + exportIntent.name + "_usersays_en.json";
            stentor_logger_1.default.info(`Creating usersays file: ${exportUserSaysPath}`);
            (0, fs_1.writeFileSync)(exportUserSaysPath, JSON.stringify(userSays, undefined, 2));
        });
        exportEntities.forEach(entity => {
            const exportEntity = entity.entity;
            const exportEntityPath = `${entityFolder}/${exportEntity.name}.json`;
            stentor_logger_1.default.info("Creating entity file: " + exportEntityPath);
            (0, fs_1.writeFileSync)(exportEntityPath, JSON.stringify(exportEntity, undefined, 2));
            const entries = entity.entries;
            const exportEntriesPath = `${entityFolder}/${exportEntity.name}_entries_en.json`;
            stentor_logger_1.default.info(`Creating entries file: ${exportEntriesPath}`);
            (0, fs_1.writeFileSync)(exportEntriesPath, JSON.stringify(entries, undefined, 2));
        });
    });
}
//# sourceMappingURL=exportToDialogflow.js.map