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
exports.getUserToken = getUserToken;
/*! Copyright (c) 2022, XAPP AI*/
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const getConfig_1 = require("./getConfig");
const saveConfig_1 = require("./saveConfig");
const login_1 = require("./login");
function getTokenExpiration(token) {
    const payload = token.split('.')[1];
    const base64 = Buffer.from(payload, 'base64').toString('binary');
    const decodedPayload = JSON.parse(base64);
    return decodedPayload.exp;
}
function isTokenExpired(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const { exp } = JSON.parse(jsonPayload);
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    return currentTimestamp >= exp;
}
/**
 * Helper function to get the XAPP auth token.
 */
function getUserToken() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const profile = (0, getConfig_1.getConfigProfile)();
        let token;
        if ((_a = profile === null || profile === void 0 ? void 0 : profile.token) === null || _a === void 0 ? void 0 : _a.access_token) {
            // see if it is expired
            if (isTokenExpired(profile.token.access_token)) {
                stentor_logger_1.default.info("Token is expired, refreshing it for you free of charge...");
                // refresh the token
                const refreshed = yield (0, login_1.refreshToken)(profile.token.refresh_token);
                token = refreshed.access_token;
                // update the config
                const config = (0, getConfig_1.getConfig)();
                const currentProfile = config.currentProfile || "default";
                config.profiles[currentProfile] = Object.assign(Object.assign({}, config.profiles[currentProfile]), { token: refreshed });
                (0, saveConfig_1.saveConfig)(config);
                // token = await login();
            }
            else {
                const expiration = getTokenExpiration(profile.token.access_token);
                stentor_logger_1.default.info(`Current token is still valid, it expires ${new Date(expiration * 1000).toISOString()}`);
                token = profile.token.access_token;
            }
            token = (_b = profile === null || profile === void 0 ? void 0 : profile.token) === null || _b === void 0 ? void 0 : _b.access_token;
        }
        else {
            token = yield (0, login_1.login)();
        }
        return token;
    });
}
//# sourceMappingURL=getUserToken.js.map