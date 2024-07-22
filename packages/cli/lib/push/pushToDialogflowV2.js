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
exports.pushToDialogflowV2 = pushToDialogflowV2;
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const stentor_service_dialogflow_1 = require("@xapp/stentor-service-dialogflow");
const getAppIntentEntities_1 = require("../getAppIntentEntities");
const getGoogleCredentials_1 = require("../getGoogleCredentials");
function pushToDialogflowV2(credentialsPath, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId, beta } = options;
        const { app, intents, entities } = yield (0, getAppIntentEntities_1.getAppIntentEntities)(appId);
        stentor_logger_1.default.info(`Pushing ${app.name} with ${intents.length} intents & ${entities.length} entities.`);
        const actionsOnGoogleId = options.id;
        if (!actionsOnGoogleId) {
            throw new Error("Actions on Google ID required for pushing to Dialogflow V2");
        }
        if (!credentialsPath) {
            throw new Error("Credentials are required for DialogflowV2");
        }
        const credentials = (0, getGoogleCredentials_1.getGoogleCredentials)(credentialsPath);
        const service = new stentor_service_dialogflow_1.DialogflowV2Service({
            projectId: actionsOnGoogleId,
            useBeta: beta,
            credentials: {
                client_email: credentials.client_email,
                private_key: credentials.private_key
            }
        });
        try {
            const result = yield service.updateModel(intents, entities);
            stentor_logger_1.default.info(result);
        }
        catch (e) {
            stentor_logger_1.default.error(`Error updating model`);
            stentor_logger_1.default.error(e);
        }
    });
}
//# sourceMappingURL=pushToDialogflowV2.js.map