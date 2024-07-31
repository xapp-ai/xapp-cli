/*! Copyright (c) 2024, XAPP AI*/
import { TokenResponse } from "@xapp/client";
import log from "stentor-logger";

import request from "request";

import { getConfigProfile } from "./getConfig";

export async function refreshToken(refreshToken: string): Promise<TokenResponse> {
    return new Promise((resolve, reject) => {

        const profile = getConfigProfile();

        const authPath = profile.authPath || 'https://auth.xapp.ai';
        const clientId = profile.clientId || '1h8mjojsn6k3vup08uk91rgagm';
        const tokenPath = profile.tokenPath || "oauth2/token"
        const clientSecret: string = profile.clientSecret || undefined;

        const url = `${authPath}/${tokenPath}`;

        log.info(`Attempting to refresh token from ${url} with client_id ${clientId} token path ${tokenPath} and client secret ${clientSecret}`);

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
                    log.info(`Token refreshed successfully!`);
                    resolve(token);
                }
            }
        });
    });
}