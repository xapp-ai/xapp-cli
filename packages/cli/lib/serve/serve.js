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
exports.serve = serve;
/*! Copyright (c) 2022, XAPP AI*/
const open_1 = __importDefault(require("open"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const express_1 = __importDefault(require("express"));
const getAppId_1 = require("../getAppId");
const getUserToken_1 = require("../getUserToken");
const getXAPPClient_1 = require("../getXAPPClient");
function serve(props) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = (props === null || props === void 0 ? void 0 : props.url) || 'http://localhost:8080';
        const port = (props === null || props === void 0 ? void 0 : props.port) || "3000";
        const appId = props.appId || (0, getAppId_1.getAppId)();
        stentor_logger_1.default.info(`Starting widget server for ${appId} at http://localhost:${port}...`);
        stentor_logger_1.default.info(`Setting widget server URL to ${url}`);
        const config = {
            connection: {
                serverUrl: url,
                type: "direct"
            },
            serverUrl: url,
            attributes: {
                environment: "development"
            }
        };
        const token = yield (0, getUserToken_1.getUserToken)();
        const client = yield (0, getXAPPClient_1.getXAPPClient)(token, appId);
        const channels = yield client.getAppChannels(appId);
        // find a chat-widget channel
        let key = props.key;
        if (!key) {
            const widgetChannels = channels.filter((channel) => {
                return channel.type === "chat-widget";
            });
            if (widgetChannels.length > 0) {
                const widget = widgetChannels[0];
                if (widget && widget.key) {
                    key = widget.key;
                }
            }
        }
        const app = (0, express_1.default)();
        app.get("/", (req, res) => {
            fs_1.default.readFile(path_1.default.resolve(__dirname, "../../assets/index.html"), "utf8", (err, data) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send("An error occurred");
                }
                data = data.replace(`{{name}}`, appId);
                data = data.replace(`{{key}}`, key);
                data = data.replace(`{{config}}`, JSON.stringify(config));
                return res.send(data);
            });
        });
        app.use(express_1.default.static(path_1.default.resolve(__dirname, ".", "dist"), { maxAge: "30d" }));
        app.listen(port, () => {
            stentor_logger_1.default.info(`Temporary server setup listening on port ${port} to serve the widget locally.`);
            (0, open_1.default)(`http://localhost:${port}`);
        });
    });
}
//# sourceMappingURL=serve.js.map