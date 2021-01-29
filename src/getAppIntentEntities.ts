/*! Copyright (c) 2019, XAPPmedia */
import log from "stentor-logger";
import { OVAIApp } from "@xapp/ovai-lib";
import { generateClient } from "@xapp/stentor-api-client";
import { HeaderProcessor, RequestHTTPClient } from "@xapp/stentor-api-client";
import { Entity, Handler, Intent } from "stentor-models";
import { getAppId } from "./getAppId";
import { getConfig } from "./getConfig";
import { getUserToken } from "./getUserToken";

/**
 * Fetch the app, intents, and entities
 *
 * @param appId
 * @param tableVersion
 * @returns {Promise<TResult>}
 */
export async function getAppIntentEntities(
    appId?: string
): Promise<{ app: OVAIApp; intents: (Intent | Handler)[]; entities: Entity[]; token: string }> {
    const token = await getUserToken();

    if (!appId) {
        appId = getAppId();
    }

    log.info(`Retrieving app with ID: ${appId}`);

    const addUserToken: HeaderProcessor = headers => {
        return {
            ...headers,
            ["x-xapp-usertoken"]: token
        };
    };

    const config = getConfig();
    const basePath = config.profiles.default.basePath || "https://api.xapp.ai";

    const client = generateClient(
        new RequestHTTPClient({
            basePath,
            headerProcessor: addUserToken
        })
    );

    const getAppPromise = client.getApp(appId).then(response => {
        // Note: api-client needs the new definitions so we can remove this caste
        return response.app;
    });

    const getIntentsPromise = client.getAppIntents(appId).then(response => {
        return response.appIntents;
    });

    const getEntityPromise = client.getEntities(appId).then(response => {
        return response.entities;
    });

    let results: [OVAIApp, Intent[], Entity[]];

    try {
        results = await Promise.all([getAppPromise, getIntentsPromise, getEntityPromise]);
    } catch (err) {
        log.error("Error retrieving app, intent, & entity data.  Try running $xapp login again");
        log.error(err);
    }
    const app = results[0];
    const intents = results[1];
    const entities = results[2];

    if (!app) {
        throw new Error(`Unable to find app with ID ${appId}`);
    }

    return { app, intents, entities, token };
}
