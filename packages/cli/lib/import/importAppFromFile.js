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
exports.importAppFromFile = importAppFromFile;
/*! Copyright (c) 2022, XAPP AI*/
const path_1 = require("path");
const fs_1 = require("fs");
const stentor_logger_1 = require("stentor-logger");
const getXAPPClient_1 = require("../getXAPPClient");
const getUserToken_1 = require("../getUserToken");
/**
 * Imports an app from the provided file
 *
 * @param file
 * @param options
 */
function importAppFromFile(file, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId } = options;
        const path = (0, path_1.resolve)(file);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(`File ${file} does not exist.  Please provide an existing path to create the export within.`);
        }
        const importedFile = (0, fs_1.readFileSync)(path, "utf8");
        let imported;
        try {
            imported = JSON.parse(importedFile);
        }
        catch (e) {
            throw new Error(`Unable to parse contents of file at ${path}`);
        }
        const { app, intents, handlers, entities } = imported;
        const combinedIntentsAndHandlers = (intents || []).concat(handlers);
        (0, stentor_logger_1.log)().info(`Importing ${app.name} to app ID "${appId}", ${combinedIntentsAndHandlers.length} intents & handlers with ${entities.length} entities`);
        // Lets start writing
        const token = yield (0, getUserToken_1.getUserToken)();
        const client = yield (0, getXAPPClient_1.getXAPPClient)(token, appId);
        // Get the existing app, we will need it for the organizationId
        // It is also a test of if the user has access to this app.
        let existingApp;
        try {
            const data = yield client.getApp(appId);
            existingApp = data.app;
        }
        catch (e) {
            (0, stentor_logger_1.log)().error(`Unable to access app with ID ${appId}, ensure you have the correct app ID`);
            throw e;
        }
        // clean it up
        delete existingApp.channels;
        delete existingApp.channels;
        delete existingApp.dialogflowClientToken;
        delete existingApp.dialogflowDeveloperToken;
        delete existingApp.endPoint;
        delete existingApp.platformData;
        delete existingApp.nlu;
        // and this
        delete app.channels;
        delete app.channels;
        delete app.dialogflowClientToken;
        delete app.dialogflowDeveloperToken;
        delete app.endPoint;
        delete app.platformData;
        delete app.nlu;
        const organizationId = existingApp.organizationId;
        // Update the app!
        // The app must already exist
        const appToUpdate = Object.assign(Object.assign(Object.assign({}, existingApp), app), { appId, organizationId });
        client.updateApp(appToUpdate);
        (0, stentor_logger_1.log)().info(`App updated`);
        // Entities
        const entityCreatePromises = entities.map((entity) => {
            delete entity.appId;
            delete entity.dialogflowId;
            return client.createEntity(appId, entity);
        });
        let entityResults;
        try {
            entityResults = yield Promise.all(entityCreatePromises);
        }
        catch (e) {
            (0, stentor_logger_1.log)().error(`Unable to import entities.`);
            throw e;
        }
        (0, stentor_logger_1.log)().info(`Imported ${entityResults.length} entities.`);
        const intentAndHandlerPromises = combinedIntentsAndHandlers.map((intent) => {
            delete intent.appId;
            delete intent.organizationId;
            delete intent.dialogflowId;
            delete intent.slotTypes;
            return client.createIntent(appId, intent);
        });
        let intentAndHandlerResults;
        try {
            intentAndHandlerResults = yield Promise.all(intentAndHandlerPromises);
        }
        catch (e) {
            (0, stentor_logger_1.log)().error(`Unable to import intents and handlers.`);
        }
        (0, stentor_logger_1.log)().info(`Imported ${intentAndHandlerResults.length} intents and handlers.`);
    });
}
//# sourceMappingURL=importAppFromFile.js.map