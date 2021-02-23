/*! Copyright (c) 2019, XAPPmedia */
import log from "stentor-logger";
import { createHash, randomBytes } from "crypto";
import * as express from "express";
import * as open from "open";
import * as request from "request";
import { getConfig } from "./getConfig";
import { saveConfig } from "./saveConfig";
import { TokenResponse } from "./TokenResponse";

const DEFAULT_LISTENING_PORT = 8787;

/**
 * Logs the user in.
 */
export async function login(): Promise<string> {
    function base64URLEncode(str: Buffer) {
        return str
            .toString("base64")
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
    }
    const length = 32;
    const verifier = base64URLEncode(randomBytes(length));

    function sha256(buffer: string) {
        return createHash("sha256")
            .update(buffer)
            .digest();
    }
    const challenge = base64URLEncode(sha256(verifier));
    log.info(`Ok, logging you in.`);
    const code = await getCode(challenge);
    log.info(`Got the code from the redirect, converting it to an access token.`);
    let token: TokenResponse;
    try {
        token = await getToken(code, verifier);
    } catch (e) {
        log.warn(`Error retrieving access token: ${e}`);
        throw e;
    }
    log.info(`And got the token, saving it to use in the future.`);
    // Save it on the config
    const config = getConfig();
    config.profiles.default = { ...config.profiles.default, token };
    saveConfig(config);
    log.info(`You are logged in.`);
    // Return it
    return token.access_token;
}

/**
 * Open the login page, setup a server to receive the redirect with the code and return it.
 *
 * @param challenge The challenge code to be used later for verification.
 */
async function getCode(challenge: string): Promise<string> {
    return new Promise((resolve, reject) => {

        const config = getConfig();

        const basePath = config.profiles.default.basePath || 'https://api.xapp.ai';
        const authPath = config.profiles.default.authPath || 'https://auth.xapp.ai';
        const clientId = config.profiles.default.clientId || '1jla9939g04f6ip54b51sgc0mu';
        const port = config.profiles.default.port || DEFAULT_LISTENING_PORT;

        const get = `${authPath}/authorize?audience=${basePath}&scope=studio/api&response_type=code&client_id=${clientId}&redirect_uri=http://localhost:${port}/authorize&code_challenge=${challenge}&code_challenge_method=S256&state=XAPP_CLI`;
        // Start the server to listen
        const app = express();

        const server = app.listen(port, () =>
            log.info(`Temporary server setup listening on port ${port} to catch the redirect URL.`)
        );

        app.get("/authorize", (req, res) => {
            if (req.query.code) {
                res.send("Received access code, please return to the console.");
                server.close();
                resolve(`${req.query.code}`);
            } else {
                res.send("Could not retrieve token.");
                server.close();
                reject("Unable to get code from login page");
            }
        });
        // Open the url
        log.info(`Opening the login page in a browser.`);
        open(get);
    });
}

/**
 * Trade in the code for the token.
 *
 * @param code
 * @param verifier
 */
async function getToken(code: string, verifier: string): Promise<TokenResponse> {
    return new Promise((resolve, reject) => {
        const config = getConfig();
        const authPath = config.profiles.default.authPath || 'https://auth.xapp.ai';
        const clientId = config.profiles.default.clientId || '1jla9939g04f6ip54b51sgc0mu';
        const port = config.profiles.default.port || DEFAULT_LISTENING_PORT;
        // Exchange it for a token, code based on example provided by Auth0
        const options = {
            method: "POST",
            url: `${authPath}/oauth2/token`,
            headers: { "content-type": "application/x-www-form-urlencoded" },
            form: {
                grant_type: "authorization_code",
                client_id: clientId,
                code_verifier: `${verifier}`,
                code: `${code}`,
                redirect_uri: `http://localhost:${port}/authorize`
            }
        };

        request(options, (error, response, body) => {

            const code = response.statusCode;

            if (code !== 200) {
                reject(new Error(body));
                return;
            }
            if (error) {
                reject(error);
            } else {
                const token = JSON.parse(body);
                // Another opportunity for an error
                if (token.error) {
                    reject(new Error(`${token.error} ${token.error_description}`));
                } else {
                    resolve(token);
                }
            }
        });
    });
}
