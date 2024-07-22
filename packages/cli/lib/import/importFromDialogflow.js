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
exports.importFromDialogflow = importFromDialogflow;
/*! Copyright (c) 2022, XAPP AI*/
const stentor_service_dialogflow_1 = require("@xapp/stentor-service-dialogflow");
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const getConfig_1 = require("../getConfig");
const getGoogleCredentials_1 = require("../getGoogleCredentials");
const getUserToken_1 = require("../getUserToken");
const getGraphQLClient_1 = require("../graphql/getGraphQLClient");
const mutations_1 = require("../graphql/mutations");
function importFromDialogflow(credentialsPath, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { organizationId } = options;
        if (!organizationId) {
            throw new Error("Organization ID is required to import the agent from Dialogflow");
        }
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
        const { app, intents, entities } = yield service.import();
        stentor_logger_1.default.info(`Retrieved ${app.name} with ${intents.length} intents & ${entities.length} entities.`);
        stentor_logger_1.default.info(`Creating app on organization with ID ${organizationId}`);
        const token = yield (0, getUserToken_1.getUserToken)();
        const profile = yield (0, getConfig_1.getConfigProfile)();
        const client = (0, getGraphQLClient_1.getGraphQLClient)(token, profile.basePath);
        const appReturn = yield client.mutation(mutations_1.AddAppMutation, {
            app: {
                organizationId,
                name: app.name,
                description: app.description
            }
        }).toPromise();
        const newApp = appReturn.data.addApp;
        const { appId } = newApp;
        stentor_logger_1.default.info(`App ${newApp.name} created with id ${newApp.appId}`);
        const addIntentPromises = intents.map((rawIntent) => {
            const intent = Object.assign({}, rawIntent);
            delete intent.dialogflowId;
            return client.mutation(mutations_1.AddIntentMutation, {
                appId,
                intent
            }).toPromise();
        });
        const intentReturns = yield Promise.all(addIntentPromises);
        stentor_logger_1.default.info(`${intentReturns.length} intents added`);
        const addEntityPromises = entities.map((rawEntity) => {
            const entity = Object.assign({}, rawEntity);
            delete entity.dialogflowId;
            return client.mutation(mutations_1.AddEntityMutation, {
                entity: {
                    appId,
                    displayName: entity.displayName,
                    type: entity.type,
                    values: entity.values
                }
            }).toPromise();
        });
        const entityReturns = yield Promise.all(addEntityPromises);
        stentor_logger_1.default.info(`${entityReturns.length} entities added`);
        // TODO: ADD THE CHANNEL!!!
    });
}
//# sourceMappingURL=importFromDialogflow.js.map