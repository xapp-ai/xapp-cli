/*! Copyright (c) 2022, XAPP AI*/
import { XAPPClient, getUserToken, getConfig } from "@xapp/client";

import { login } from "./login";
import { refreshToken } from "./refreshToken";
import { getConfigProfile } from "./getConfig";
import { saveConfig } from "./saveConfig";

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

        // update the config
        const config = getConfig();
        const currentProfile: string = config.currentProfile || "default";
        config.profiles[currentProfile] = { ...config.profiles[currentProfile], token: tokenResponse };
        saveConfig(config);

        token = tokenResponse.access_token;
    }

    const profile = await getConfigProfile();

    // Profile can be undefined here so we set the default if it doesn't exist
    const url = profile ? profile.basePath : "https://api.xapp.ai";

    return new XAPPClient({
        userToken: token,
        url
    });
}
