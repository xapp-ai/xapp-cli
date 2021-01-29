/*! Copyright (c) 2019, XAPPmedia */
import { getAppId } from "./getAppId";
import { getConfig } from "./getConfig";
import { XAPPClient } from "./XAPPClient";

/**
 * Helper function to get a OVAI client.
 *
 * @param token User auth token.
 * @param appId
 */
export function getXAPPClient(token: string, appId?: string) {
    if (!appId) {
        appId = getAppId();
    }

    const config = getConfig();

    return new XAPPClient({
        userToken: token,
        appId,
        basePath: config.profiles.default.basePath
    });
}
