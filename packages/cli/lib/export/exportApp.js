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
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportApp = exportApp;
/*! Copyright (c) 2022, XAPP AI*/
const stentor_logger_1 = require("stentor-logger");
const fs_1 = require("fs");
const path_1 = require("path");
const getStentorApp_1 = require("../getStentorApp");
const getXAPPClient_1 = require("../getXAPPClient");
const getUserToken_1 = require("../getUserToken");
/**
 * Exports an app to the provided directory.
 */
function exportApp(output, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId, channels, split } = options;
        const { app, intents, entities, handlers } = yield (0, getStentorApp_1.getStentorApp)(appId);
        // Resolve the path
        const path = (0, path_1.resolve)(output);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
        }
        // folder name is app name plus date
        const exportDirName = `${app.organizationId}-${app.appId}-${new Date().getTime()}`;
        const exportPath = (0, path_1.resolve)(path, exportDirName);
        (0, fs_1.mkdirSync)(exportPath);
        (0, stentor_logger_1.log)().info(`Exporting ${app.name} to ${exportPath}`);
        // Create a consolidated JSON object that will be exported
        const exportFilePath = (0, path_1.resolve)(exportPath, `${appId}.json`);
        (0, fs_1.writeFileSync)(exportFilePath, JSON.stringify({ app, intents, handlers, entities }, undefined, 2));
        // OK!  if they want individual directories
        if (split) {
            // save the app by appId
            const appPath = (0, path_1.resolve)(exportPath, `app.json`);
            (0, fs_1.writeFileSync)(appPath, JSON.stringify(app, undefined, 2));
            // entities
            const entitiesPath = (0, path_1.resolve)(exportPath, "entities");
            (0, fs_1.mkdirSync)(entitiesPath);
            entities.forEach((entity) => {
                const entityPath = (0, path_1.resolve)(entitiesPath, `${entity.entityId}.json`);
                (0, fs_1.writeFileSync)(entityPath, JSON.stringify(entity, undefined, 2));
            });
            // put the intents and handlers in their own directory
            const intentsPath = (0, path_1.resolve)(exportPath, "intents");
            (0, fs_1.mkdirSync)(intentsPath);
            intents.forEach((intent) => {
                const intentPath = (0, path_1.resolve)(intentsPath, `${intent.intentId}.json`);
                (0, fs_1.writeFileSync)(intentPath, JSON.stringify(intent, undefined, 2));
            });
            const handlersPath = (0, path_1.resolve)(exportPath, "handlers");
            (0, fs_1.mkdirSync)(handlersPath);
            handlers.forEach((handler) => {
                const handlerPath = (0, path_1.resolve)(handlersPath, `${handler.intentId}.json`);
                (0, fs_1.writeFileSync)(handlerPath, JSON.stringify(handler, undefined, 2));
            });
        }
        if (channels) {
            // Ok! find the channel
            const token = yield (0, getUserToken_1.getUserToken)();
            const client = yield (0, getXAPPClient_1.getXAPPClient)(token, appId);
            const channels = yield client.getAppChannels(appId);
            (0, stentor_logger_1.log)().info(`Found ${channels.length} channels`);
            // Find the channel
            // entities
            const channelsPath = (0, path_1.resolve)(exportPath, "channels");
            (0, fs_1.mkdirSync)(channelsPath);
            channels.forEach((channel) => {
                const entityPath = (0, path_1.resolve)(channelsPath, `${channel.id}.json`);
                (0, fs_1.writeFileSync)(entityPath, JSON.stringify(channel, undefined, 2));
            });
        }
    });
}
//# sourceMappingURL=exportApp.js.map