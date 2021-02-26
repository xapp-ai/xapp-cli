/*! Copyright (c) 2019, XAPPmedia */
import { StudioApp } from "./App";
import { generateClient, StentorClient } from "@xapp/stentor-api-client";
import { HeaderProcessor, RequestHTTPClient } from "@xapp/stentor-api-client";
import { Entity, Intent } from "stentor-models";

export interface XAPPClientProps {
    userToken: string;
    basePath?: string;
    appId?: string;
}

export class XAPPClient {
    private client: StentorClient;

    private appId: string;

    constructor(props: XAPPClientProps) {
        if (typeof props.appId === "string") {
            this.appId = props.appId;
        }

        let basePath: string = "https://api.xapp.ai";
        if (typeof props.basePath === "string" && props.basePath) {
            basePath = props.basePath;
        }

        const addUserToken: HeaderProcessor = headers => {
            return {
                ...headers,
                ["x-xapp-usertoken"]: props.userToken
            };
        };
        this.client = generateClient(
            new RequestHTTPClient({
                basePath,
                headerProcessor: addUserToken
            })
        );
    }

    createApp(app: StudioApp): Promise<StudioApp> {
        return this.client.createApp(app).then(response => {
            return response.app;
        });
    }

    updateApp(app: StudioApp): Promise<StudioApp> {
        return this.client.updateApp(app.appId, { set: app }).then(response => {
            return response.app;
        });
    }

    getApp(appId: string): Promise<StudioApp> {
        return this.client.getApp(appId).then(response => {
            return response.app;
        });
    }

    createIntent(id: { appId: string, organizationId: string }, intent: Intent): Promise<Intent> {
        return this.client.createAppIntent(id, intent).then(response => {
            return response.appIntent;
        });
    };

    updateIntent(intent: Intent, optionalAppId?: string): Promise<Intent> {
        const appId: string = typeof optionalAppId === "string" ? optionalAppId : this.appId;

        return this.client
            .updateAppIntent(appId, intent.intentId, {
                set: intent
            })
            .then(response => {
                return response.appIntent;
            });
    };

    createEntity(id: { appId: string, organizationId: string }, entity: Entity): Promise<Entity> {
        return this.client.createEntity(id.appId, { entities: entity }).then(response => {
            return response.entities;
        });
    };

    updateEntity(entity: Entity): Promise<Entity> {
        const appId: string = typeof entity.appId === "string" ? entity.appId : this.appId;
        const entityId: string = entity.entityId;
        return this.client
            .updateEntity(
                { entityId, appId },
                {
                    set: entity
                }
            )
            .then(response => {
                return response.entity;
            });
    }
}
