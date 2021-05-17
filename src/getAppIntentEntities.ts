/*! Copyright (c) 2019, XAPPmedia */
import log from "stentor-logger";
import { Entity, Handler, Intent } from "stentor-models";
import { App } from "./models";
import { getAppId } from "./getAppId";
import { getUserToken } from "./getUserToken";
import { getXAPPClient } from "./getXAPPClient";

/**
 * Fetch the app, intents, and entities
 *
 * @param appId
 * @returns 
 */
export async function getAppIntentEntities(
    appId?: string
): Promise<{ app: App; intents: Intent[]; handlers: Handler[]; entities: Entity[]; token: string }> {
    const token = await getUserToken();

    if (!appId) {
        appId = getAppId();
    }

    log.info(`Retrieving app with ID: ${appId}`);

    const client = getXAPPClient(token, appId);

    const app = await client.getApp(appId);

    if (!app) {
        throw new Error(`Unable to find app with ID ${appId}`);
    }

    const getIntentsPromise = app.intents.intents.map((intent) => {
        return client.getIntent(appId, intent.intentId);
    });

    let intents: Intent[];

    try {
        intents = await Promise.all(getIntentsPromise);
    } catch (err) {
        log.error("Error retrieving intents. Try running $xapp login again");
        log.error(err);
    }

    const getEntitiesPromise = app.entities.entities.map((entity) => {
        return client.getEntity(appId, entity.entityId);
    });

    let entities: Entity[];

    try {
        entities = await Promise.all(getEntitiesPromise);
    } catch (err) {
        log.error("Error retrieving entities. Try running $xapp login again");
        log.error(err);
    }

    const getHandlersPromise = app.handlers.handlers.map((handler) => {
        return client.getHandler(appId, handler.intentId);
    });

    let handlers: Handler[];

    try {
        handlers = await Promise.all(getHandlersPromise);
    } catch (err) {
        log.error("Error retrieving handlers. Try running $xapp login again");
        log.error(err);
    }

    return { app, intents, entities, handlers, token };
}
