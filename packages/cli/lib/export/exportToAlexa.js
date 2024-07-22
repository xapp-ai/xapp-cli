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
exports.exportToAlexa = exportToAlexa;
const stentor_logger_1 = require("stentor-logger");
const stentor_handler_media_1 = require("@xapp/stentor-handler-media");
const stentor_alexa_1 = require("@xapp/stentor-alexa");
const fs_1 = require("fs");
const path_1 = require("path");
const getStentorApp_1 = require("../getStentorApp");
function exportToAlexa(targetDirectory, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId } = options;
        // Resolve the path
        const path = (0, path_1.resolve)(targetDirectory);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(`Path ${targetDirectory} does not exist.  Please provide an existing path to create the export within.`);
        }
        const { app, intents, entities, handlers } = yield (0, getStentorApp_1.getStentorApp)(appId);
        const exportDirName = `${app.organizationId}-${app.appId}-alexa-${new Date().getTime()}`;
        const exportPath = (0, path_1.resolve)(path, exportDirName);
        (0, fs_1.mkdirSync)(exportPath);
        (0, stentor_logger_1.log)().info(`Exporting ${app.name} for Alexa to ${exportPath}`);
        (0, stentor_logger_1.log)().info(`Found ${intents.length} intents, ${entities.length} entities, and ${handlers.length} handlers.`);
        const playsAudio = (0, stentor_handler_media_1.hasAudioPlayerHandlerProps)(intents);
        const alexaSkill = new stentor_alexa_1.TranslateToAlexaSkillManifest({ playsMedia: playsAudio }).translate({ app, intents });
        const invocationName = typeof app.invocationName === "string" ? app.invocationName : app.invocationName[0];
        const alexaInteractionModel = new stentor_alexa_1.TranslateToAlexaInteractionModel({ invocationName }).translate({
            intents,
            entities
        });
        // Write the files to the directory
        const skillPath = (0, path_1.resolve)(exportPath, `${app.appId}-${new Date().getTime()}.json`);
        (0, fs_1.writeFileSync)(skillPath, JSON.stringify(alexaSkill, undefined, 2));
        const modelPath = (0, path_1.resolve)(exportPath, `model-${new Date().getTime()}.json`);
        (0, fs_1.writeFileSync)(modelPath, JSON.stringify(alexaInteractionModel, undefined, 2));
    });
}
//# sourceMappingURL=exportToAlexa.js.map