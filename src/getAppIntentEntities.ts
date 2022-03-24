/*! Copyright (c) 2022, XAPP AI*/

import log from "stentor-logger";
import { Entity, Handler, Intent } from "stentor-models";
import { App } from "./models";
import { getAppId } from "./getAppId";
import { getUserToken } from "./getUserToken";
import { getXAPPClient } from "./getXAPPClient";

import * as fs from "fs";

export interface FullApp { app: App; intents?: Intent[]; handlers?: Handler[]; entities?: Entity[]; token: string }

/**
 * Fetch the app, intents, and entities
 *
 * @param appId
 * @param options
 * @returns
 */
export async function getAppIntentEntities(
    appId?: string,
    options: {
        excludeHandlers?: boolean;
        excludeEntities?: boolean;
        excludeIntents?: boolean;
    } = {}
): Promise<FullApp> {
    const token = await getUserToken();

    if (!appId) {
        appId = getAppId();
    }

    const { excludeEntities, excludeHandlers, excludeIntents } = options;

    log.info(`Retrieving app with ID: ${appId}`);

    const client = getXAPPClient(token, appId);

    const app = await client.getApp(appId);

    if (!app) {
        throw new Error(`Unable to find app with ID ${appId}`);
    }

    const value: FullApp = { app, token };

    if (!excludeIntents) {

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

        value.intents = intents;
    }

    if (!excludeEntities) {
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

        value.entities = entities;
    }

    if (!excludeHandlers) {
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

        value.handlers = handlers;
    }

    return value;
}

/**
 * Fetch the app from an export file
 *
 * @returns {Promise<FullApp>}
 * @param appId
 * @param fileName
 */
export async function getAppIntentEntitiesFromExport(
    appId: string,
    fileName: string
): Promise<FullApp> {
    const app: FullApp = JSON.parse(fs.readFileSync(fileName, "utf8"));

    if (app.app.appId != appId) {
        throw new Error(`This isn't the App you're looking for. App Id in file: ${app.app.appId}`);
    }

    return app;
}
