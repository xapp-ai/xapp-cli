/*! Copyright (c) 2022, XAPP AI*/
import log from "stentor-logger";

import { getConfigProfile, getConfig } from "./getConfig";
import { saveConfig } from "./saveConfig";
import { login, refreshToken } from "./login";

function getTokenExpiration(token: string): number {
    const payload = token.split('.')[1];
    const base64 = Buffer.from(payload, 'base64').toString('binary');
    const decodedPayload = JSON.parse(base64);
    return decodedPayload.exp;
}

function isTokenExpired(token: string): boolean {
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
export async function getUserToken(): Promise<string> {

    const profile = getConfigProfile();

    let token: string;

    if (profile?.token?.access_token) {
        // see if it is expired
        if (isTokenExpired(profile.token.access_token)) {
            log.info("Token is expired, refreshing it for you free of charge...");

            // refresh the token
            const refreshed = await refreshToken(profile.token.refresh_token);
            token = refreshed.access_token;

            // update the config
            const config = getConfig();
            const currentProfile: string = config.currentProfile || "default";
            config.profiles[currentProfile] = { ...config.profiles[currentProfile], token: refreshed };
            saveConfig(config);

            // token = await login();
        } else {
            const expiration = getTokenExpiration(profile.token.access_token);
            log.info(`Current token is still valid, it expires ${new Date(expiration * 1000).toISOString()}`);
            token = profile.token.access_token;
        }
        token = profile?.token?.access_token;
    } else {
        token = await login();
    }

    return token;
}
