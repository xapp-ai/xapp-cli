/*! Copyright (c) 2019, XAPPmedia */
import { OVAIApp } from "@xapp/ovai-lib";
import { generateClient, StentorClient } from "@xapp/stentor-api-client";
import { HeaderProcessor, RequestHTTPClient } from "@xapp/stentor-api-client";
import { Entity, Intent } from "stentor-models";

export interface OVAIClientProps {
    userToken: string;
    basePath?: string;
    appId?: string;
}

export class OVAIClient {
    private client: StentorClient;

    private appId: string;

    constructor(props: OVAIClientProps) {
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

    createApp(app: OVAIApp): Promise<OVAIApp> {
        return this.client.createApp(app).then(response => {
            return response.app;
        });
    }

    updateApp(app: OVAIApp): Promise<OVAIApp> {
        return this.client.updateApp(app.appId, { set: app }).then(response => {
            return response.app;
        });
    }

    getApp(appId: string): Promise<OVAIApp> {
        return this.client.getApp(appId).then(response => {
            return response.app;
        });
    }

    updateIntent(intent: Intent, optionalAppId?: string): Promise<Intent> {
        const appId: string = typeof optionalAppId === "string" ? optionalAppId : this.appId;

        return this.client
            .updateAppIntent(appId, intent.intentId, {
                set: intent
            })
            .then(response => {
                return response.appIntent;
            });
    }

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
