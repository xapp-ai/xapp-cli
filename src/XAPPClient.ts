/*! Copyright (c) 2022, XAPP AI*/
import { Client } from "@urql/core";
import { Handler, Entity, Intent } from "stentor-models";

import { getGraphQLClient } from "./graphql/getGraphQLClient";
import {
    AddChatWidgetChannelDocument,
    ChatWidgetAppChannelInput,
    GetAppContentDocument,
    GetProfileDocument,
    GetProfileQuery,
    StartCrawlDocument
} from "./graphql/models";
import {
    AddAppMutation,
    AddEntityMutation,
    AddIntentMutation,
    ExportApp as ExportAppMutation,
    ImportApp as ImportAppMutation,
    UpdateAppMutation,
    UpdateEntityMutation,
    UpdateIntentMutation
} from "./graphql/mutations";
import { GetApp, GetIntent, GetHandler, GetEntity, GetAppWithChannels } from "./graphql/queries";
import { App, Channel, ExportApp, GraphqlApp, ImportApp } from "./models";

export interface HandlerDescription {
    intentId: string;
    name: string;
    type: string;
}

export interface HandlerDescription {
    intentId: string;
    name: string;
    type: string;
}

export interface IntentDescription {
    intentId: string;
    name: string;
}

export interface EntityDescription {
    entityId: string;
    displayName: string;
}

export interface AppOverview {
    appId: string;
    organizationId: string;
    name: string;
    invocationName?: string;
    handlers: {
        total: number;
        handlers: HandlerDescription[];
    };
    intents: {
        total: number;
        intents: IntentDescription[];
    };
    entities: {
        total: number;
        entities: EntityDescription[];
    };
}

export interface XAPPClientProps {
    userToken: string;
}

export class XAPPClient {
    private client: Client;

    public constructor(props: XAPPClientProps) {
        this.client = getGraphQLClient(props.userToken);
    }

    public getProfile(): Promise<GetProfileQuery> {
        return this.client.query(GetProfileDocument, {}).toPromise().then((response) => {
            return response.data;
        });
    }

    //
    // APP
    //

    public createApp(app: App): Promise<App> {
        return this.client.mutation(AddAppMutation, {
            app
        }).toPromise().then((response) => {
            return response.data.addApp;
        });
    }

    public updateApp(app: App): Promise<App> {
        return this.client.mutation(UpdateAppMutation, {
            appId: app.appId,
            app
        }).toPromise().then((response) => {
            return response.data.updateApp;
        });
    }

    public getApp(appId: string, start?: string, end?: string): Promise<AppOverview> {
        if (!start) {
            const now = new Date();
            start = now.toISOString();
            const lastWeek = new Date();
            lastWeek.setDate(now.getDate() - 7);
            end = lastWeek.toISOString();
        }

        return this.client.query(GetApp, {
            appId,
            start,
            end
        }).toPromise().then((response) => {
            return response.data.app;
        });
    }
    /**
     * Export an app and all of its intents, handlers, entities.
     * 
     * @param appId 
     * @param organizationId 
     * @returns 
     */
    public exportApp(appId: string, organizationId: string): Promise<ExportApp> {
        return this.client.mutation(ExportAppMutation, {
            appId,
            organizationId
        }).toPromise().then((response) => {
            const url = response.data.app.update.exportApp.url;
            return fetch(url);
        }).then((response) => {
            return response.json();
        });
    }
    /**
     * Import an App from a publicly available URL.
     * 
     * The app and it's assets must be uploaded in JSON format to a publically available URL.
     * 
     * @param url 
     * @param organizationId 
     * @returns 
     */
    public importApp(url: string, organizationId: string): Promise<ImportApp> {
        return this.client.mutation(ImportAppMutation, {
            organizationId,
            appUrl: url
        }).toPromise().then((response) => {
            if (response.data) {
                return {
                    appId: response.data.app.importApp.appId,
                    organizationId: response.data.app.importApp.organizationId,
                    name: response.data.app.importApp.name
                }
            } else {
                const error = response.error || `Unable to import app, unknown error`;
                throw error;
            }
        });
    }

    public getAppChannels(appId: string): Promise<Channel[]> {
        return this.client.query(GetAppWithChannels, {
            appId
        }).toPromise().then((response) => {
            return response.data.app.channels;
        });
    }

    public createChatWidgetChannel(appId: string, channel: ChatWidgetAppChannelInput): Promise<Channel> {
        return this.client.mutation(AddChatWidgetChannelDocument, { appId, channel })
            .toPromise().then((response) => {
                return response.data.addChatWidgetChannel;
            });
    }

    public updateChatWidgetChannel(appId: string, channel: ChatWidgetAppChannelInput): Promise<Channel> {
        return this.client.mutation(AddChatWidgetChannelDocument, { appId, channel })
            .toPromise().then((response) => {
                return response.data.addChatWidgetChannel;
            });
    }

    public getDocuments(appId: string, size = 10, from = 0): Promise<Pick<GraphqlApp, "contentSources" | "content">> {
        return this.client.query(GetAppContentDocument, { appId, size, from }).toPromise().then((response) => {
            return response.data.app;
        });
    }

    public getFAQs(appId: string, size = 10, from = 0): Promise<Pick<GraphqlApp, "faq">> {
        return this.client.query(GetAppContentDocument, { appId, size, from }).toPromise().then((response) => {
            return response.data.app;
        });
    }

    public startCrawl(appId: string, url: string, pattern: string[], channelId: string): Promise<void> {
        return this.client.mutation(StartCrawlDocument, { appId, url, pattern, channelId }).toPromise().then();
    }

    //
    // HANDLER
    //

    /**
     * Get a specific handler
     * 
     * @param appId 
     * @param intentId 
     * @returns 
     */
    public getHandler(appId: string, intentId: string): Promise<Handler> {
        return this.client.query(GetHandler, {
            appId,
            intentId
        }).toPromise().then((response) => {
            return response.data.handler;
        });
    }

    //
    // INTENT
    //

    /**
     * Create an intent
     * 
     * @param appId 
     * @param intent 
     * @returns 
     */
    public createIntent(appId: string, intent: Intent): Promise<Intent> {
        return this.client.mutation(AddIntentMutation, {
            appId,
            intent
        }).toPromise().then((response) => {
            return response.data.addIntent;
        });
    };

    /**
     * Get an intent by intentId
     * 
     * @param appId 
     * @param intentId 
     * @returns 
     */
    public getIntent(appId: string, intentId: string): Promise<Intent> {
        return this.client.query(GetIntent, {
            appId,
            intentId
        }).toPromise().then((response) => {
            return response.data.intent;
        });
    };

    public updateIntent(appId: string, intent: Intent): Promise<Pick<Intent, "intentId" | "name">> {
        return this.client.mutation(UpdateIntentMutation, {
            appId,
            intentId: intent.intentId,
            intent
        }).toPromise().then((response) => {
            return response.data.updateIntent
        });
    };

    //
    // ENTITY
    //

    /**
     * Create an entity
     * 
     * @param appId 
     * @param entity 
     * @returns 
     */
    public createEntity(appId: string, entity: Entity): Promise<Pick<Entity, "entityId" | "displayName">> {
        return this.client.mutation(AddEntityMutation, {
            entity: {
                appId,
                ...entity
            }
        }).toPromise().then((response) => {
            return response.data.addEntity;
        });
    };

    public getEntity(appId: string, entityId: string): Promise<Entity> {
        return this.client.query(GetEntity, {
            appId,
            entityId
        }).toPromise().then((response) => {
            return response.data.entity;
        });
    }

    public updateEntity(appId: string, entity: Entity): Promise<Entity> {
        return this.client.mutation(UpdateEntityMutation, {
            appId,
            entityId: entity.entityId,
            entity
        }).toPromise().then((response) => {
            return response.data.updateEntity;
        });
    }
}
