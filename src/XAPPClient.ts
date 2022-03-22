/*! Copyright (c) 2019, XAPPmedia */
import { Client } from "@urql/core";
import { getGraphQLClient } from "./graphql/getGraphQLClient";

import { Handler, Entity, Intent } from "stentor-models";
import { AddAppMutation, AddEntityMutation, AddIntentMutation, UpdateAppMutation, UpdateEntityMutation, UpdateIntentMutation } from "./graphql/mutations";
import { GetApp, GetIntent, GetHandler, GetEntity, ExportApp as ExportAppQuery } from "./graphql/queries";
import { App, ExportApp } from "./models";

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
     * Handler
     */
    public getHandler(appId: string, intentId: string): Promise<Handler> {
        return this.client.query(GetHandler, {
            appId,
            intentId
        }).toPromise().then((response) => {
            return response.data.handler;
        });
    }

    /**
     * Intent
     */
    public createIntent(appId: string, intent: Intent): Promise<Intent> {
        return this.client.mutation(AddIntentMutation, {
            appId,
            intent
        }).toPromise().then((response) => {
            return response.data.addIntent;
        });
    };

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

    /**
     * ENTITY
     */

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

    exportApp(appId: string, organizationId: string): Promise<ExportApp> {
        return this.client.mutation(ExportAppQuery, {
            appId,
            organizationId
        }).toPromise().then((response) => {
            const url = response.data.app.update.exportApp.url;
            return fetch(url);
        }).then((response) => {
            return response.json();
        });
    }
}
