/*! Copyright (c) 2022, XAPP AI*/
import { getAppId } from "./getAppId.js";
import { XAPPClient } from "./XAPPClient.js";
import { getConfigProfile } from "./getConfig.js";
import { getUserToken } from "./getUserToken.js";

/**
 * Helper function to get a Studio API client.
 *
 * @param token User auth token.
 * @param appId
 */
export async function getXAPPClient(token?: string, appId?: string): Promise<XAPPClient> {
    if (!appId) {
        appId = getAppId();
    }
    // we aren't doing anything with appId?

    if (!token) {
        token = await getUserToken();
    }

    const profile = await getConfigProfile();

    // Profile can be undefined here so we set the default if it doesn't exist
    const url = profile ? profile.basePath : "https://api.xapp.ai";

    return new XAPPClient({
        userToken: token,
        url
    });
}
