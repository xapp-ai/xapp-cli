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
exports.getStentorApp = getStentorApp;
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const getAppId_1 = require("./getAppId");
const getUserToken_1 = require("./getUserToken");
const getXAPPClient_1 = require("./getXAPPClient");
function getStentorApp(appId_1) {
    return __awaiter(this, arguments, void 0, function* (appId, options = { withChannels: false }) {
        const withChannels = !!options.withChannels;
        const token = options.token || (yield (0, getUserToken_1.getUserToken)());
        if (!appId) {
            appId = (0, getAppId_1.getAppId)();
        }
        stentor_logger_1.default.info(`Retrieving app with ID: ${appId}`);
        const client = yield (0, getXAPPClient_1.getXAPPClient)(token, appId);
        // Temporary to get organizationId
        const data = yield client.getApp(appId);
        const app = data.app;
        const { organizationId } = app;
        const exported = yield client.exportApp(appId, organizationId);
        // Also temporary
        exported.app.appId = appId;
        exported.app.organizationId = organizationId;
        if (withChannels) {
            // Ok! find the channel
            const token = yield (0, getUserToken_1.getUserToken)();
            const client = yield (0, getXAPPClient_1.getXAPPClient)(token, appId);
            const channels = yield client.getAppChannels(appId);
            exported.app.channels = channels;
        }
        return exported;
    });
}
//# sourceMappingURL=getStentorApp.js.map