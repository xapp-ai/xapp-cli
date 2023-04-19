/*! Copyright (c) 2022, XAPP AI*/

import { getAppId } from "./getAppId";
import { XAPPClient } from "./XAPPClient";
import { getConfigProfile } from "./getConfig";
import { getUserToken } from "./getUserToken";

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

    return new XAPPClient({
        userToken: token,
        url: profile.basePath
    });
}
