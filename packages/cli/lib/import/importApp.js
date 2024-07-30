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
exports.importApp = importApp;
/*! Copyright (c) 2022, XAPP AI*/
const client_1 = require("@xapp/client");
const stentor_logger_1 = require("stentor-logger");
const getUserToken_1 = require("../getUserToken");
const getConfig_1 = require("../getConfig");
function importApp(uri, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { organizationId } = options;
        if (!uri) {
            throw new Error(`uri is required to import an app.`);
        }
        if (!organizationId) {
            throw new Error(`organizationId is required to import an app.`);
        }
        const token = yield (0, getUserToken_1.getUserToken)();
        const profile = yield (0, getConfig_1.getConfigProfile)();
        const studioClient = new client_1.XAPPClient({
            userToken: token,
            url: profile.basePath
        });
        (0, stentor_logger_1.log)().info(`Importing app to ${organizationId}`);
        let imported;
        try {
            imported = yield studioClient.importApp(uri, organizationId);
            (0, stentor_logger_1.log)().info(`App ${imported.name} imported to ${imported.organizationId}/${imported.appId}`);
        }
        catch (e) {
            (0, stentor_logger_1.log)().error(`Unabled to import app, error:\n${e.message}`);
        }
    });
}
//# sourceMappingURL=importApp.js.map