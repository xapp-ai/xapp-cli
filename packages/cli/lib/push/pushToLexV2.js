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
exports.pushToLexV2 = pushToLexV2;
const stentor_service_lex_1 = require("@xapp/stentor-service-lex");
const stentor_guards_1 = require("stentor-guards");
const getAppIntentEntities_1 = require("../getAppIntentEntities");
const getStentorApp_1 = require("../getStentorApp");
const stentor_logger_1 = __importDefault(require("stentor-logger"));
function sleep(ms) {
    stentor_logger_1.default.info("Snoozing for ms milliseconds ... zzzzz");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
/**
 * Push to LEX V2
 *
 * @param options
 */
function pushToLexV2(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId, fulfillment, file, botName, id: botId } = options;
        let awsRole = options.awsRole;
        if (!botName && !botId) {
            throw new Error("Please specify bot name (--botName) or bot id (--id)");
        }
        const { app, intents = [], entities = [], handlers = [] } = file ? yield (0, getAppIntentEntities_1.getAppIntentEntitiesFromExport)(appId, file) : yield (0, getStentorApp_1.getStentorApp)(appId, { withChannels: true });
        // We can push v1 too
        const lexChannel = app.channels.find((ch) => {
            return ch.type === "lex-connect" || ch.type === "lex-v2";
        });
        let kendraRole;
        let kendraIndexARN;
        let fulfillmentARN;
        if (lexChannel) {
            kendraRole = lexChannel.kendraRole;
            kendraIndexARN = lexChannel.kendraIndexARN;
            fulfillmentARN = lexChannel.lexFulfillmentLambdaARN;
            if (!awsRole && lexChannel.managementRole) {
                awsRole = lexChannel.managementRole;
            }
        }
        else {
            throw new Error(`This app doesn't have a Lex channel: ${appId}`);
        }
        const filteredHandlers = handlers.filter((potential) => {
            if (potential.intentId === "InputUnknown") {
                // We can't push these because they come built-in and you can't delete them.  Great.
                return false;
            }
            return (0, stentor_guards_1.isIntent)(potential);
        });
        const mergedIntents = intents.concat(filteredHandlers);
        const lexSyncerV2 = new stentor_service_lex_1.LexServiceV2({
            botId,
            botName,
            fulfillmentARN: fulfillment || fulfillmentARN,
            kendraRole,
            kendraIndexARN,
            credentials: {
                region: "us-east-1",
                role: {
                    arn: awsRole,
                    externalId: lexChannel ? lexChannel.managementRoleExternalId : undefined, // cross-account use not supported for non-user credentials yet.
                },
            }
        });
        stentor_logger_1.default.info(`Syncing app ${app.appId} with ${mergedIntents.length} intents and ${entities.length} entities to LEX V2`);
        let responseStatus = yield lexSyncerV2.sync(app.appId, mergedIntents, entities);
        stentor_logger_1.default.info(`Synced app ${app.appId} finished with status\n ${JSON.stringify(responseStatus, undefined, 2)}}`);
        if (responseStatus.state !== "FAILED") {
            yield sleep(3);
            responseStatus = yield lexSyncerV2.getStatus();
            stentor_logger_1.default.info(`App ${app.appId} new status\n ${JSON.stringify(responseStatus, undefined, 2)}}`);
            yield sleep(3);
            const nluResponse = lexSyncerV2.query("hello");
            stentor_logger_1.default.info(`App ${app.appId} nlu response\n ${JSON.stringify(nluResponse, undefined, 2)}}`);
        }
        else {
            stentor_logger_1.default.info(`FAILED`);
            stentor_logger_1.default.info(responseStatus.message);
        }
    });
}
//# sourceMappingURL=pushToLexV2.js.map