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
exports.refreshToken = refreshToken;
exports.login = login;
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const crypto_1 = require("crypto");
const express_1 = __importDefault(require("express"));
const open_1 = __importDefault(require("open"));
const request_1 = __importDefault(require("request"));
const getConfig_1 = require("./getConfig");
const saveConfig_1 = require("./saveConfig");
const DEFAULT_LISTENING_PORT = 8787;
/**
 * Open the login page, setup a server to receive the redirect with the code and return it.
 *
 * @param challenge The challenge code to be used later for verification.
 */
function getCode(challenge) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const profile = (0, getConfig_1.getConfigProfile)();
            const basePath = profile.basePath || 'https://api.xapp.ai';
            const authPath = profile.authPath || 'https://auth.xapp.ai';
            const clientId = profile.clientId || '1h8mjojsn6k3vup08uk91rgagm';
            const path = profile.path || 'authorize';
            const port = profile.port || DEFAULT_LISTENING_PORT;
            const redirect = `http://localhost:${port}/${path}`;
            const get = `${authPath}/authorize?audience=${basePath}&scope=studio/api&response_type=code&client_id=${clientId}&redirect_uri=${redirect}&code_challenge=${challenge}&code_challenge_method=S256&state=XAPP_CLI`;
            // Start the server to listen
            const app = (0, express_1.default)();
            const server = app.listen(port, () => stentor_logger_1.default.info(`Temporary server setup listening on port ${port} to catch the redirect URL.`));
            app.get(`/${path}`, (req, res) => {
                if (req.query.code) {
                    res.send("Received access code, please return to the console.  You may close this page.");
                    server.close();
                    resolve(`${req.query.code}`);
                }
                else {
                    res.send("Could not retrieve token.");
                    server.close();
                    reject("Unable to get code from login page");
                }
            });
            // Open the url
            stentor_logger_1.default.info(`Opening the login page in a browser.`);
            stentor_logger_1.default.debug(`${get}`);
            (0, open_1.default)(get);
        });
    });
}
/**
 * Trade in the code for the token.
 *
 * @param code
 * @param verifier
 */
function getToken(code, verifier) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const profile = (0, getConfig_1.getConfigProfile)();
            const authPath = profile.authPath || 'https://auth.xapp.ai';
            const clientId = profile.clientId || '1h8mjojsn6k3vup08uk91rgagm';
            const port = profile.port || DEFAULT_LISTENING_PORT;
            const path = profile.path || "authorize";
            const tokenPath = profile.tokenPath || "oauth2/token";
            const clientSecret = profile.clientSecret || undefined;
            const grant_type = profile.grantType || "authorization_code";
            // Exchange it for a token, code based on example provided by Auth0
            const options = {
                method: "POST",
                url: `${authPath}/${tokenPath}`,
                headers: { "content-type": "application/x-www-form-urlencoded" },
                form: {
                    grant_type,
                    client_id: clientId,
                    code_verifier: `${verifier}`,
                    code: `${code}`,
                    redirect_uri: `http://localhost:${port}/${path}`
                }
            };
            if (clientSecret && typeof options.form === "object") {
                options.form.client_secret = clientSecret;
            }
            (0, request_1.default)(options, (error, response, body) => {
                const code = response.statusCode;
                if (code !== 200) {
                    reject(new Error(body));
                    return;
                }
                if (error) {
                    reject(error);
                }
                else {
                    const token = JSON.parse(body);
                    // Another opportunity for an error
                    if (token.error) {
                        reject(new Error(`${token.error} ${token.error_description}`));
                    }
                    else {
                        resolve(token);
                    }
                }
            });
        });
    });
}
function refreshToken(refreshToken) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const profile = (0, getConfig_1.getConfigProfile)();
            const authPath = profile.authPath || 'https://auth.xapp.ai';
            const clientId = profile.clientId || '1h8mjojsn6k3vup08uk91rgagm';
            const tokenPath = profile.tokenPath || "oauth2/token";
            const clientSecret = profile.clientSecret || undefined;
            const url = `${authPath}/${tokenPath}`;
            stentor_logger_1.default.info(`Attempting to refresh token from ${url} with client_id ${clientId} token path ${tokenPath} and client secret ${clientSecret}`);
            const options = {
                method: "POST",
                url,
                headers: { "content-type": "application/x-www-form-urlencoded" },
                form: {
                    grant_type: "refresh_token",
                    client_id: clientId,
                    client_secret: clientSecret,
                    refresh_token: refreshToken
                }
            };
            (0, request_1.default)(options, (error, response, body) => {
                const code = response.statusCode;
                if (code !== 200) {
                    reject(new Error(body));
                    return;
                }
                if (error) {
                    reject(error);
                }
                else {
                    const token = JSON.parse(body);
                    // Another opportunity for an error
                    if (token.error) {
                        reject(new Error(`${token.error} ${token.error_description}`));
                    }
                    else {
                        stentor_logger_1.default.info(`Token refreshed successfully!`);
                        resolve(token);
                    }
                }
            });
        });
    });
}
/**
 * Logs the user in.
 */
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        function base64URLEncode(str) {
            return str
                .toString("base64")
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=/g, "");
        }
        const length = 32;
        const verifier = base64URLEncode((0, crypto_1.randomBytes)(length));
        function sha256(buffer) {
            return (0, crypto_1.createHash)("sha256")
                .update(buffer)
                .digest();
        }
        const challenge = base64URLEncode(sha256(verifier));
        stentor_logger_1.default.info(`Ok, logging you in.`);
        const code = yield getCode(challenge);
        stentor_logger_1.default.info(`Got the code from the redirect, converting it to an access token.`);
        let token;
        try {
            token = yield getToken(code, verifier);
        }
        catch (e) {
            stentor_logger_1.default.warn(`Error retrieving access token: ${e}`);
            throw e;
        }
        stentor_logger_1.default.info(`And got the token, saving it to use in the future.`);
        // Save it on the config
        const config = (0, getConfig_1.getConfig)();
        const currentProfile = config.currentProfile || "default";
        config.profiles[currentProfile] = Object.assign(Object.assign({}, config.profiles[currentProfile]), { token });
        (0, saveConfig_1.saveConfig)(config);
        stentor_logger_1.default.info(`You are logged in. Enjoy`);
        // Return it
        return token.access_token;
    });
}
//# sourceMappingURL=login.js.map