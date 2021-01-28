/*! Copyright (c) 2019, XAPPmedia */
import { getAppId } from "./getAppId";
import { getConfig } from "./getConfig";
import { OVAIClient } from "./OVAIClient";

/**
 * Helper function to get a OVAI client.
 *
 * @param token User auth token.
 * @param appId
 */
export function getOVAIClient(token: string, appId?: string) {
    if (!appId) {
        appId = getAppId();
    }

    const config = getConfig();

    return new OVAIClient({
        userToken: token,
        appId,
        basePath: config.profiles.default.basePath
    });
}
