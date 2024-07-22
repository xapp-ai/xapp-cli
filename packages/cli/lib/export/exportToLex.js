"use strict";
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
exports.exportToLex = exportToLex;
/*! Copyright (c) 2022, XAPP AI*/
const stentor_guards_1 = require("stentor-guards");
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const stentor_lex_lib_1 = require("@xapp/stentor-lex-lib");
const fs_1 = require("fs");
const path_1 = require("path");
const getAppIntentEntities_1 = require("../getAppIntentEntities");
function exportToLex(output, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId } = options;
        const { app, intents, entities } = yield (0, getAppIntentEntities_1.getAppIntentEntities)(appId);
        const filtered = intents.filter((potential) => {
            return (0, stentor_guards_1.isIntent)(potential);
        });
        stentor_logger_1.default.info(`Exporting ${app.appId} to Lex`);
        stentor_logger_1.default.info(`Found ${app.name} with ${filtered.length} intents and ${entities.length} entities.`);
        const path = (0, path_1.resolve)(output);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
        }
        // Setup the root directory
        const exportDirName = `${app.appId}-lex-${new Date().getTime()}`;
        const exportPath = (0, path_1.resolve)(path, exportDirName);
        (0, fs_1.mkdirSync)(exportPath);
        stentor_logger_1.default.info(`Exporting ${app.name} to ${exportPath}`);
        const bot = new stentor_lex_lib_1.TranslateToLexImportExportBot().translate({ app, intents: filtered, entities });
        const resource = {
            resource: bot,
            metadata: {
                schemaVersion: "1.0",
                importType: "LEX",
                importFormat: "JSON"
            }
        };
        // Write the file
        (0, fs_1.writeFileSync)(exportPath + `/${app.appId}-lex.json`, JSON.stringify(resource, undefined, 2));
        stentor_logger_1.default.info(`Export complete.`);
    });
}
//# sourceMappingURL=exportToLex.js.map