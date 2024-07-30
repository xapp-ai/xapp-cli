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
exports.getXAPPClient = getXAPPClient;
/*! Copyright (c) 2022, XAPP AI*/
const client_1 = require("@xapp/client");
const getAppId_1 = require("./getAppId");
const getConfig_1 = require("./getConfig");
const getUserToken_1 = require("./getUserToken");
/**
 * Helper function to get a Studio API client.
 *
 * @param token User auth token.
 * @param appId
 */
function getXAPPClient(token, appId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!appId) {
            appId = (0, getAppId_1.getAppId)();
        }
        // we aren't doing anything with appId?
        if (!token) {
            token = yield (0, getUserToken_1.getUserToken)();
        }
        const profile = yield (0, getConfig_1.getConfigProfile)();
        // Profile can be undefined here so we set the default if it doesn't exist
        const url = profile ? profile.basePath : "https://api.xapp.ai";
        return new client_1.XAPPClient({
            userToken: token,
            url
        });
    });
}
//# sourceMappingURL=getXAPPClient.js.map