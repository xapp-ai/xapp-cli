import { App } from "@xapp/client";
import { Entity, Handler, Intent } from "stentor-models";
export interface FullApp {
    app: App;
    intents?: Intent[];
    handlers?: Handler[];
    entities?: Entity[];
    token: string;
}
/**
 * Fetch the app, intents, and entities
 *
 * @deprecated - Use getStentorApp.  The handlers returned by this are not perfect.
 * @param appId
 * @param options
 * @returns
 */
export declare function getAppIntentEntities(appId?: string, options?: {
    excludeHandlers?: boolean;
    excludeEntities?: boolean;
    excludeIntents?: boolean;
}): Promise<FullApp>;
/**
 * Fetch the app from an export file
 *
 * @returns {Promise<FullApp>}
 * @param appId
 * @param fileName
 */
export declare function getAppIntentEntitiesFromExport(appId: string, fileName: string): Promise<FullApp>;
