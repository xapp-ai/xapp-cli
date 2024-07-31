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
exports.generateTypes = generateTypes;
/*! Copyright (c) 2022, XAPP AI*/
const stentor_utils_1 = require("stentor-utils");
const stentor_guards_1 = require("stentor-guards");
const stentor_logger_1 = require("stentor-logger");
const fs_1 = require("fs");
const path_1 = require("path");
const entityToTypes_1 = require("./utils/entityToTypes");
const intentToTypes_1 = require("./utils/intentToTypes");
const getStentorApp_1 = require("../getStentorApp");
function generateTypes(output_1) {
    return __awaiter(this, arguments, void 0, function* (output, appId = undefined, options) {
        const { app, intents, handlers, entities } = yield (0, getStentorApp_1.getStentorApp)(appId);
        // Resolve the path
        const path = (0, path_1.resolve)(output);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
        }
        // Find the handlers that have utterances, add them
        if ((0, stentor_utils_1.existsAndNotEmpty)(handlers)) {
            handlers.forEach((handler) => {
                if ((0, stentor_guards_1.isIntent)(handler)) {
                    const found = intents.find((intent) => {
                        return intent.intentId === handler.intentId;
                    });
                    if (!found && handler.intentId !== "LaunchRequest" && handler.intentId !== "InputUnknown") {
                        intents.push(handler);
                    }
                }
            });
        }
        const requestsPath = (0, path_1.resolve)(path, (options === null || options === void 0 ? void 0 : options.file) || 'studio.ts');
        (0, stentor_logger_1.log)().info(`Exporting types for ${app.name} to ${requestsPath}`);
        let requests = "";
        if (options && options.header) {
            requests += `${options.header}\n`;
        }
        const HEADER = `/* This is a generated file */`;
        const IMPORTS = `import { IntentRequest, Request, RequestSlot, RequestSlotMap } from "stentor";`;
        requests += `${HEADER}\n${IMPORTS}\n\n`;
        // Entities first
        const availableEntities = {};
        if ((0, stentor_utils_1.existsAndNotEmpty)(entities)) {
            entities.forEach((entity) => {
                const max = Number.isNaN(Number(options.max)) ? undefined : Number(options.max);
                const entityType = (0, entityToTypes_1.entityToTypes)(entity, max);
                if (entityType) {
                    requests += `${entityType}\n\n`;
                    // add is as available for use later
                    availableEntities[entity.entityId] = `${entity.entityId}_VALUES`;
                }
            });
        }
        // Go through the intents and generate intents
        if ((0, stentor_utils_1.existsAndNotEmpty)(intents)) {
            intents.forEach((intent) => {
                // convert the intent
                requests += (0, intentToTypes_1.intentToTypes)(intent, availableEntities);
                requests += `\n\n`;
            });
        }
        (0, fs_1.writeFileSync)(requestsPath, requests);
    });
}
//# sourceMappingURL=generateTypes.js.map