/*! Copyright (c) 2022, XAPP AI*/
import log from "stentor-logger";

import { XAPPClient, getUserToken } from "@xapp/client";

import { login } from "./login";
import { refreshToken } from "./refreshToken";
import { getConfigProfile } from "./getConfig";
import { saveCurrentProfile } from "./saveCurrentProfile";

/**
 * Helper function to get a Studio API client.
 *
 * @param token User auth token.
 * @param appId
 */
export async function getXAPPClient(token?: string): Promise<XAPPClient> {

    // we aren't doing anything with appId?

    if (!token) {
        const tokenResponse = await getUserToken({ login, refreshToken });

        const profile = getConfigProfile();
        // update it with new token info
        const newProfile = { ...profile, token: { ...profile.token, ...tokenResponse } };
        saveCurrentProfile(newProfile);

        token = newProfile.token.access_token;
    }

    const profile = await getConfigProfile();

    // Profile can be undefined here so we set the default if it doesn't exist
    const url = (profile && !!profile.basePath) ? profile.basePath : "https://api.xapp.ai";

    if (url !== "https://api.xapp.ai") {
        log.info(`Using custom API URL: ${url}`);
    }

    return new XAPPClient({
        userToken: token,
        url
    });
}
