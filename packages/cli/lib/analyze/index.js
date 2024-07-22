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
exports.info = info;
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const getAppId_1 = require("../getAppId");
const getUserToken_1 = require("../getUserToken");
const getXAPPClient_1 = require("../getXAPPClient");
function info(appId, handlerId) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const token = yield (0, getUserToken_1.getUserToken)();
        if (!appId) {
            appId = (0, getAppId_1.getAppId)();
        }
        const client = yield (0, getXAPPClient_1.getXAPPClient)(token, appId);
        const now = new Date();
        const end = now.toISOString();
        const lastWeek = new Date();
        lastWeek.setDate(now.getDate() - 7);
        const start = lastWeek.toISOString();
        // Temporary to get organizationId
        const data = yield client.getApp(appId, start, end);
        const app = data.app;
        if (!app) {
            stentor_logger_1.default.info(`Cannot find app with id: ${appId}`);
            return;
        }
        const { entities, intents, handlers } = app;
        stentor_logger_1.default.info(`name: ${app.name}`);
        stentor_logger_1.default.info(`Summary...`);
        stentor_logger_1.default.info(`\t${entities.total} entities`);
        stentor_logger_1.default.info(`\t${intents.total} intents`);
        stentor_logger_1.default.info(`\t${handlers.total} handlers`);
        if ((_a = app.analytics) === null || _a === void 0 ? void 0 : _a.user) {
            stentor_logger_1.default.info(`Last 7 days...`);
            stentor_logger_1.default.info(`\t${app.analytics.user.totalUsers} total users`);
            stentor_logger_1.default.info(`\t${app.analytics.user.newUsers} new users`);
            stentor_logger_1.default.info(`\t${app.analytics.user.totalSessions} total sessions`);
        }
        else {
            stentor_logger_1.default.info(`No usage in the last 7 days...`);
        }
        const noAnswerFlags = yield client.getAppEvents(appId, start, end, {
            byTag: ["KB_NO_ANSWER"]
        });
        const noAnswerTotal = noAnswerFlags.app.events.total;
        const events = noAnswerFlags.app.events.events;
        stentor_logger_1.default.info(`\t${noAnswerTotal} no answered`);
        const unansweredQueries = events.map((event) => {
            return event.stentorRequest.rawQuery;
        });
        stentor_logger_1.default.info(unansweredQueries.reduce((prev, curr) => {
            return `${prev}\n\t\t"${curr}"`;
        }, "Sample of unanswered..."));
        if (handlerId) {
            stentor_logger_1.default.info(`Retrieving handler with ID ${handlerId}`);
            const handler = yield client.getHandler(appId, handlerId);
            stentor_logger_1.default.info(`Handler info: ${handlerId} ${handler.name} ${handler.type}`);
        }
    });
}
//# sourceMappingURL=index.js.map