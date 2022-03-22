/*! Copyright (c) 2019, XAPPmedia */
import log from "stentor-logger";
import { createHash, randomBytes } from "crypto";
import * as express from "express";
import * as open from "open";
import * as request from "request";
import { getConfig, getConfigProfile } from "./getConfig";
import { saveConfig } from "./saveConfig";
import { TokenResponse } from "./TokenResponse";

const DEFAULT_LISTENING_PORT = 8787;

/**
 * Open the login page, setup a server to receive the redirect with the code and return it.
 *
 * @param challenge The challenge code to be used later for verification.
 */
async function getCode(challenge: string): Promise<string> {
    return new Promise((resolve, reject) => {

        const profile = getConfigProfile();

        const basePath = profile.basePath || 'https://api.xapp.ai';
        const authPath = profile.authPath || 'https://auth.xapp.ai';
        const clientId = profile.clientId || '1jla9939g04f6ip54b51sgc0mu';

        const path = profile.path || 'authorize';
        const port = profile.port || DEFAULT_LISTENING_PORT;
        const redirect = `http://localhost:${port}/${path}`;

        const get = `${authPath}/authorize?audience=${basePath}&scope=studio/api&response_type=code&client_id=${clientId}&redirect_uri=${redirect}&code_challenge=${challenge}&code_challenge_method=S256&state=XAPP_CLI`;
        // Start the server to listen
        const app = express();

        const server = app.listen(port, () =>
            log.info(`Temporary server setup listening on port ${port} to catch the redirect URL.`)
        );

        app.get(`/${path}`, (req, res) => {
            if (req.query.code) {
                res.send("Received access code, please return to the console.  You may close this page.");
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

        const profile = getConfigProfile();

        const authPath = profile.authPath || 'https://auth.xapp.ai';
        const clientId = profile.clientId || '1jla9939g04f6ip54b51sgc0mu';
        const port = profile.port || DEFAULT_LISTENING_PORT;
        const path = profile.path || "authorize";
        const tokenPath = profile.tokenPath || "oauth2/token"
        // Exchange it for a token, code based on example provided by Auth0
        const options = {
            method: "POST",
            url: `${authPath}/${tokenPath}`,
            headers: { "content-type": "application/x-www-form-urlencoded" },
            form: {
                // eslint-disable-next-line @typescript-eslint/camelcase
                grant_type: "authorization_code",
                // eslint-disable-next-line @typescript-eslint/camelcase
                client_id: clientId,
                // eslint-disable-next-line @typescript-eslint/camelcase
                code_verifier: `${verifier}`,
                code: `${code}`,
                // eslint-disable-next-line @typescript-eslint/camelcase
                redirect_uri: `http://localhost:${port}/${path}`
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

/**
 * Logs the user in.
 */
export async function login(): Promise<string> {
    function base64URLEncode(str: Buffer): string {
        return str
            .toString("base64")
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
    }
    const length = 32;
    const verifier = base64URLEncode(randomBytes(length));

    function sha256(buffer: string): Buffer {
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
    const currentProfile: string = config.currentProfile || "default";
    config.profiles[currentProfile] = { ...config.profiles[currentProfile], token };
    saveConfig(config);

    log.info(`You are logged in. Enjoy`);
    // Return it
    return token.access_token;
}