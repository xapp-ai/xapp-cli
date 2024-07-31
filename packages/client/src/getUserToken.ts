/*! Copyright (c) 2022, XAPP AI*/
import log from "stentor-logger";

import { getConfigProfile } from "./getConfig";
import { TokenResponse } from "./TokenResponse";

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

export interface UserTokenOptions {
    /**
     * Logs the user in through OAUTH2.0 workflow and returns a token
     * 
     * This typically sets up some kind of localhost listener to capture the token.
     * 
     * @returns 
     */
    login?: () => Promise<TokenResponse>;
    /**
     * Refreshes the user token using the refresh token
     * 
     * @param refreshToken 
     * @returns 
     */
    refreshToken?: (refreshToken: string) => Promise<TokenResponse>;
}

/**
 * Helper function to get the XAPP auth token.
 */
export async function getUserToken(opts?: UserTokenOptions): Promise<TokenResponse> {

    const profile = getConfigProfile();

    const defaultLogin: () => Promise<TokenResponse> = async () => {
        return Promise.reject("No login function provided, unable to get new token.  ");
    }

    const defaultRefreshToken: (refreshToken: string) => Promise<TokenResponse> = async () => {
        return Promise.reject("No refresh token function provided, unable to refresh token.  ");
    }


    const login = opts?.login || defaultLogin;

    const refreshToken = opts?.refreshToken || defaultRefreshToken;

    let token: TokenResponse;

    if (profile?.token?.access_token) {
        // see if it is expired
        if (isTokenExpired(profile.token.access_token)) {
            if (profile.token.refresh_token) {
                log.info("Token is expired, refreshing it for you free of charge...");

                // refresh the token
                token = await refreshToken(profile.token.refresh_token);

            } else {
                log.info("Token was expired, but no refresh token was found. Logging in again...");
                token = await login();
            }
        } else {
            const expiration = getTokenExpiration(profile.token.access_token);
            log.info(`Current token is still valid, it expires ${new Date(expiration * 1000).toISOString()}`);
            token = profile.token;
        }
        token = profile?.token;
    } else {
        token = await login();
    }

    return token;
}
