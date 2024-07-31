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
exports.copy = copy;
const stentor_logger_1 = require("stentor-logger");
const getAppIntentEntities_1 = require("./getAppIntentEntities");
const getXAPPClient_1 = require("./getXAPPClient");
function copy(appId, newAppId, intentId, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!newAppId) {
            throw Error("New APP Id undefined");
        }
        const { intents, token } = yield (0, getAppIntentEntities_1.getAppIntentEntities)(appId);
        const client = yield (0, getXAPPClient_1.getXAPPClient)(token);
        const data = yield client.getApp(newAppId);
        const newApp = data.app;
        const existingIntentsMap = intents.reduce((map, intent) => {
            const id = intent.intentId;
            map[id] = intent;
            return map;
        }, {});
        const intentsToWrite = [];
        intents.forEach(intent => {
            const intentId = intent.intentId;
            if (!existingIntentsMap[intentId]) {
                intentsToWrite.push(Object.assign(Object.assign({}, intent), { appId: newAppId, organizationId: newApp.organizationId }));
            }
            else {
                // do not copy over if it already exists
                (0, stentor_logger_1.log)().info(`Intent with id ${intentId} already exists, ignoring...`);
            }
        });
        (0, stentor_logger_1.log)().info(`Writing ${intentsToWrite.length} intents to ${newAppId}`);
        if (options.dryRun) {
            for (const intent of intentsToWrite) {
                (0, stentor_logger_1.log)().info(`Writing intent ${intent.intentId} to app ${intent.appId} of organization ${intent.organizationId}`);
            }
        }
        else {
            try {
                const writePromises = intentsToWrite.map(intent => {
                    return client.updateIntent(appId, intent);
                });
                const results = yield Promise.all(writePromises);
                (0, stentor_logger_1.log)().info(`Wrote ${results.length} intents`);
            }
            catch (error) {
                console.error(error);
            }
        }
    });
}
//# sourceMappingURL=copy.js.map