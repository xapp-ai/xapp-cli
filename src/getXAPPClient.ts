/*! Copyright (c) 2022, XAPP AI*/

import { getAppId } from "./getAppId";
import { XAPPClient } from "./XAPPClient";

/**
 * Helper function to get a Studio API client.
 *
 * @param token User auth token.
 * @param appId
 */
export function getXAPPClient(token: string, appId?: string): XAPPClient {
    if (!appId) {
        appId = getAppId();
    }

    return new XAPPClient({
        userToken: token
    });
}
