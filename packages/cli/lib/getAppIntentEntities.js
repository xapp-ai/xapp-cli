"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getAppIntentEntities = getAppIntentEntities;
exports.getAppIntentEntitiesFromExport = getAppIntentEntitiesFromExport;
/*! Copyright (c) 2022, XAPP AI*/
const fs = __importStar(require("fs"));
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const getAppId_1 = require("./getAppId");
const getUserToken_1 = require("./getUserToken");
const getXAPPClient_1 = require("./getXAPPClient");
const convert_1 = require("./utils/convert");
/**
 * Fetch the app, intents, and entities
 *
 * @deprecated - Use getStentorApp.  The handlers returned by this are not perfect.
 * @param appId
 * @param options
 * @returns
 */
function getAppIntentEntities(appId_1) {
    return __awaiter(this, arguments, void 0, function* (appId, options = {}) {
        const token = yield (0, getUserToken_1.getUserToken)();
        if (!appId) {
            appId = (0, getAppId_1.getAppId)();
        }
        const { excludeEntities, excludeHandlers, excludeIntents } = options;
        stentor_logger_1.default.info(`Retrieving app with ID: ${appId}`);
        const client = yield (0, getXAPPClient_1.getXAPPClient)(token, appId);
        const data = yield client.getApp(appId);
        const app = data.app;
        if (!app) {
            throw new Error(`Unable to find app with ID ${appId}`);
        }
        const value = { app, token };
        if (!excludeIntents) {
            const getIntentsPromise = app.intents.intents.map((intent) => {
                return client.getIntent(appId, intent.intentId);
            });
            let intents;
            try {
                intents = yield Promise.all(getIntentsPromise);
            }
            catch (err) {
                stentor_logger_1.default.error("Error retrieving intents. Try running $xapp login again");
                stentor_logger_1.default.error(err);
            }
            value.intents = intents;
        }
        if (!excludeEntities) {
            const getEntitiesPromise = app.entities.entities.map((entity) => {
                return client.getEntity(appId, entity.entityId);
            });
            let entities;
            try {
                entities = yield Promise.all(getEntitiesPromise);
            }
            catch (err) {
                stentor_logger_1.default.error("Error retrieving entities. Try running $xapp login again");
                stentor_logger_1.default.error(err);
            }
            value.entities = entities;
        }
        if (!excludeHandlers) {
            const getHandlersPromise = app.handlers.handlers.map((handler) => {
                return client.getHandler(appId, handler.intentId);
            });
            let handlers;
            try {
                const graphQLHandlers = yield Promise.all(getHandlersPromise);
                // convert these to the normal handler
                handlers = graphQLHandlers.map((value) => {
                    return (0, convert_1.convertGraphQLHandler)(value);
                });
            }
            catch (err) {
                stentor_logger_1.default.error("Error retrieving handlers. Try running $xapp login again");
                stentor_logger_1.default.error(err);
            }
            value.handlers = handlers;
        }
        return value;
    });
}
/**
 * Fetch the app from an export file
 *
 * @returns {Promise<FullApp>}
 * @param appId
 * @param fileName
 */
function getAppIntentEntitiesFromExport(appId, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const app = JSON.parse(fs.readFileSync(fileName, "utf8"));
        if (app.app.appId != appId) {
            throw new Error(`This isn't the App you're looking for. App Id in file: ${app.app.appId}`);
        }
        return app;
    });
}
//# sourceMappingURL=getAppIntentEntities.js.map