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
exports.exportOrg = exportOrg;
const fs_1 = require("fs");
const path_1 = require("path");
const csv_writer_1 = require("csv-writer");
const stentor_logger_1 = require("stentor-logger");
const XAPPClient_1 = require("../XAPPClient");
const getUserToken_1 = require("../getUserToken");
const getConfig_1 = require("../getConfig");
function exportOrg(organizationId, output, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (!organizationId) {
            throw new Error(`Organization is required for exporting.`);
        }
        // Resolve the path
        const path = (0, path_1.resolve)(output);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
        }
        const exportDirName = `${organizationId}-${new Date().getTime()}`;
        const exportPath = (0, path_1.resolve)(path, exportDirName);
        (0, fs_1.mkdirSync)(exportPath);
        const token = yield (0, getUserToken_1.getUserToken)();
        const profile = yield (0, getConfig_1.getConfigProfile)();
        const client = new XAPPClient_1.XAPPClient({
            userToken: token,
            url: profile.basePath
        });
        (0, stentor_logger_1.log)().info(`Retreiving apps for ${organizationId}...`);
        const orgApps = yield client.getAppsForOrg(organizationId, 1000);
        const total = orgApps.org.apps.total;
        (0, stentor_logger_1.log)().info(`Retrieved ${total} app(s).`);
        if (total === 0) {
            (0, stentor_logger_1.log)().info(`No apps found for ${organizationId}`);
            return;
        }
        const header = [
            { title: "Name", id: "name" },
            { title: "organizationId", id: "organizationId" },
            { title: "appId", id: "appId" },
            { title: "Link", id: "studioLink" },
            { title: "Status", id: "status" },
            { title: "Status Time", id: "statusTime" }
        ];
        const fieldDelimiter = (options === null || options === void 0 ? void 0 : options.delimiter) || ",";
        const csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
            path: `${exportPath}/${organizationId}-apps-${new Date().toISOString()}.csv`,
            header,
            fieldDelimiter
        });
        (0, stentor_logger_1.log)().info(`Retrieved ${total} app(s).`);
        const apps = orgApps.org.apps.apps;
        for (const app of apps) {
            const record = {
                name: app.name,
                appId: app.appId,
                organizationId: app.organizationId,
                studioLink: `https://studio.xapp.ai/${app.organizationId}/${app.appId}`,
                status: ((_a = app.status) === null || _a === void 0 ? void 0 : _a.type) || undefined,
                statusTime: ((_b = app.status) === null || _b === void 0 ? void 0 : _b.timestamp) || undefined,
            };
            yield csvWriter.writeRecords([record]);
        }
        (0, stentor_logger_1.log)().info(`CSV available at ${exportPath}`);
    });
}
//# sourceMappingURL=exportOrg.js.map