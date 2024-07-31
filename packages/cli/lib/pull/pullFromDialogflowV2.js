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
exports.pullFromDialogflowV2 = pullFromDialogflowV2;
/*! Copyright (c) 2022, XAPP AI*/
const stentor_dialogflow_1 = require("@xapp/stentor-dialogflow");
const stentor_service_dialogflow_1 = require("@xapp/stentor-service-dialogflow");
const stentor_logger_1 = require("stentor-logger");
const getGoogleCredentials_1 = require("../getGoogleCredentials");
const getAppIntentEntities_1 = require("../getAppIntentEntities");
const getXAPPClient_1 = require("../getXAPPClient");
const getUserToken_1 = require("../getUserToken");
function pullFromDialogflowV2(credentialsPath, options) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, stentor_logger_1.log)().warn('It only imports from Dialogflow and does not setup a link for further development.');
        const { appId } = options;
        const { app } = yield (0, getAppIntentEntities_1.getAppIntentEntities)(appId);
        const { organizationId } = app;
        (0, stentor_logger_1.log)().info(`Pulling ${app.name} from Dialogflow V2`);
        if (!credentialsPath) {
            throw new Error("Credentials are required for DialogflowV2");
        }
        const credentials = (0, getGoogleCredentials_1.getGoogleCredentials)(credentialsPath);
        const service = new stentor_service_dialogflow_1.DialogflowV2Service({
            projectId: credentials.project_id,
            credentials: {
                client_email: credentials.client_email,
                private_key: credentials.private_key
            }
        });
        const entityTypes = yield service.getEntityTypes();
        (0, stentor_logger_1.log)().debug(`Retrieved ${entityTypes.length} entities`);
        const intents = yield service.getIntents();
        (0, stentor_logger_1.log)().debug(`Retrieved ${intents.length} intents`);
        const token = yield (0, getUserToken_1.getUserToken)();
        const client = yield (0, getXAPPClient_1.getXAPPClient)(token, appId);
        const intentTranslator = new stentor_dialogflow_1.TranslateDialogflowV2Intent({ appId, organizationId });
        const writeIntents = intents.map((intent) => {
            return client.createIntent(appId, intentTranslator.translate(intent));
        });
        const intentResults = yield Promise.all(writeIntents);
        (0, stentor_logger_1.log)().debug(`Wrote ${intentResults.length} intents`);
        const entityTranslator = new stentor_dialogflow_1.TranslateDialogflowV2EntityType();
        const writeEntities = entityTypes.map((entityType) => {
            return client.createEntity(appId, entityTranslator.translate(entityType));
        });
        const entityResults = yield Promise.all(writeEntities);
        (0, stentor_logger_1.log)().debug(`Wrote ${entityResults.length} entities`);
    });
}
//# sourceMappingURL=pullFromDialogflowV2.js.map