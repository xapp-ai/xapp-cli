/*! Copyright (c) 2022, XAPP AI*/
import { Client } from "@urql/core";
import { Entity, Intent } from "stentor-models";

import { getGraphQLClient } from "./graphql/getGraphQLClient";
import {
    AddChatWidgetChannelDocument,
    AddFormWidgetChannelDocument,
    AddHandlerInput,
    AddLexV2ChannelDocument,
    AddScheduledCrawlDocument,
    AddSurefireIntegrationDocument,
    BaseAppChannel,
    ChatWidgetAppChannelInput,
    CreateHandlerDocument,
    FormWidgetAppChannelInput,
    GetAnalyticsAndEventsDocument,
    GetAnalyticsAndEventsQuery,
    GetAnalyticsAndEventsQueryVariables,
    GetAppChannelDocument,
    GetAppContentDocument,
    GetAppOverviewDocument,
    GetAppOverviewQuery,
    GetAppSchedulesDocument,
    GetAppSchedulesQuery,
    GetAppsForOrgDocument,
    GetAppsForOrgQuery,
    GetEventsDocument,
    GetEventsQuery,
    GetEventsQueryVariables,
    GetHandlerDocument,
    GetOrgsDocument,
    GetOrgsQuery,
    GetProfileDocument,
    GetProfileQuery,
    Handler,
    LexV2ConnectAppChannel,
    LexV2ConnectAppChannelInput,
    StartCrawlDocument,
    UpdateAppByDocument,
    UpdateAppInput,
    UpdateHandlerDocument,
    UpdateHandlerInput,
    UpdateStatusDocument,
    UpdateStatusMutation,
    WebCrawlMonthlySchedule,
    WebCrawlSchedule,
    WebCrawlWeeklySchedule,
} from "./graphql/models";
import {
    AddAppMutation,
    AddEntityMutation,
    AddIntentMutation,
    ExportApp as ExportAppMutation,
    ImportApp as ImportAppMutation,
    UpdateEntityMutation,
    UpdateIntentMutation,
} from "./graphql/mutations";
import { GetIntent, GetEntity, GetAppWithChannels } from "./graphql/queries";
import { App, Channel, ExportApp, GraphqlApp, ImportApp } from "./models";
import { cleanForAddHandler, cleanForUpdateHandler, cleanObj, removeKey } from "./utils/clean";
import { DocumentNode } from "graphql";

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

export interface AppAnalytics {
    user?: {
        totalUsers: number;
        totalSessions: number;
        returningUsers: number;
        newUsers: number;
    };
}

export interface AppOverview {
    appId: string;
    organizationId: string;
    name: string;
    invocationName?: string;
    status: {
        type: string;
        email: string;
    };
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
    analytics?: AppAnalytics;
    faq: {
        total: number;
    };
    content: {
        total: number;
    };
    contentSources: {
        total: number;
        sources: { webUrl: string; webUrlPatterns: string[] }[];
    };
    channels: { id: string; type: string }[];
}

export interface AppEventsTotal {
    appId: string;
    name: string;
    analytics: AppAnalytics;
    events: {
        total: number;
    };
}

export interface XAPPClientProps {
    userToken: string;
    url?: string;
}

export {
    Handler,
    UpdateAppInput,
    UpdateHandlerInput,
    ChatWidgetAppChannelInput,
    FormWidgetAppChannelInput,
    LexV2ConnectAppChannelInput,
    BaseAppChannel,
    LexV2ConnectAppChannel,
};

export class XAPPClient {
    private client: Client;

    public constructor(props: XAPPClientProps) {
        this.client = getGraphQLClient(props.userToken, props.url);
    }

    /**
     * Get profile of the current signed in user.
     *
     * @returns Profile of the current signed in user.
     */
    public getProfile(): Promise<GetProfileQuery> {
        return this.client
            .query(GetProfileDocument, {})
            .toPromise()
            .then((response) => {
                return response.data;
            });
    }

    //
    // Orgs
    //

    public getOrgs(): Promise<GetOrgsQuery> {
        return this.client
            .query(GetOrgsDocument, {})
            .toPromise()
            .then((response) => {
                return response.data;
            });
    }

    //
    // APP
    //

    /**
     * Create an app
     *
     * @param app
     * @returns
     */
    public createApp(app: Partial<App>): Promise<App> {
        return this.client
            .mutation(AddAppMutation, {
                app,
            })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.addApp;
                } else {
                    const error = response.error || `Unable to create app, unknown error`;
                    throw error;
                }
            });
    }

    public updateApp(app: UpdateAppInput): Promise<GraphqlApp> {
        return this.client
            .mutation(UpdateAppByDocument, {
                appId: app.appId,
                app,
            })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.updateApp;
                } else {
                    const error = response.error || `Unable to update app, unknown error`;
                    throw error;
                }
            });
    }

    /**
     * Sets the status of the app.
     *
     * @param appId
     * @param status - String or "Submitted for Review", "Live",
     * @param notes
     * @returns
     */
    public setAppStatus(appId: string, status: string, notes?: string): Promise<UpdateStatusMutation> {
        return this.client
            .mutation(UpdateStatusDocument, {
                appId,
                type: status,
                notes,
            })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data;
                } else {
                    const error = response.error || `Unable to update app status, unknown error`;
                    throw error;
                }
            });
    }

    /**
     * Get a specific app.
     * @param appId
     * @param start
     * @param end
     * @returns
     */
    public getApp(appId: string, start?: string, end?: string, env?: string[]): Promise<GetAppOverviewQuery> {
        if (!start) {
            const now = new Date();
            end = now.toISOString();
            const lastWeek = new Date();
            lastWeek.setDate(now.getDate() - 7);
            start = lastWeek.toISOString();
        }

        // GetApp
        return this.client
            .query(GetAppOverviewDocument, {
                appId,
                start,
                end,
                env,
            })
            .toPromise()
            .then((response) => {
                return response.data;
            });
    }

    /**
     * Get apps for a specific organization.
     *
     * By default, it only returns 10.
     *
     * @param organizationId
     * @param from - Used for pagination, the offset of number of apps
     * @param size - Total number of apps to return per page
     * @returns
     */
    public getAppsForOrg(
        organizationId: string,
        size = 10,
        from = 0,
        byStatusType?: string[]
    ): Promise<GetAppsForOrgQuery> {
        return this.client
            .query(GetAppsForOrgDocument, {
                organizationId,
                from,
                size,
                byStatusType,
            })
            .toPromise()
            .then((response) => {
                return response.data;
            });
    }

    public getAppAnalytics(
        appId: string,
        start?: string,
        end?: string,
        options?: Pick<GetAnalyticsAndEventsQueryVariables, "byTag" | "byChannel" | "byRequestIntentId">
    ): Promise<GetAnalyticsAndEventsQuery> {
        if (!start) {
            const now = new Date();
            end = now.toISOString();
            const lastWeek = new Date();
            lastWeek.setDate(now.getDate() - 7);
            start = lastWeek.toISOString();
        }

        const variables: GetAnalyticsAndEventsQueryVariables = {
            appId,
            startDate: start,
            endDate: end,
            ...options,
        };

        return this.client
            .query(GetAnalyticsAndEventsDocument, variables)
            .toPromise()
            .then((response) => {
                return response.data;
            });
    }

    public getAppEvents(
        appId: string,
        start?: string,
        end?: string,
        options?: Pick<GetEventsQueryVariables, "size" | "from" | "byTag" | "byRequestIntentId" | "byChannel" | "byEnv">
    ): Promise<GetEventsQuery> {
        if (!start) {
            const now = new Date();
            end = now.toISOString();
            const lastWeek = new Date();
            lastWeek.setDate(now.getDate() - 7);
            start = lastWeek.toISOString();
        }

        const variables: GetEventsQueryVariables = {
            appId,
            startDate: start,
            endDate: end,
            ...options,
        };

        return this.client
            .query(GetEventsDocument, variables)
            .toPromise()
            .then((response) => {
                return response.data;
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
        return this.client
            .mutation(ExportAppMutation, {
                appId,
                organizationId,
            })
            .toPromise()
            .then((response) => {
                const url = response.data.app.update.exportApp.url;
                return fetch(url);
            })
            .then((response) => {
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
        return this.client
            .mutation(ImportAppMutation, {
                organizationId,
                appUrl: url,
            })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return {
                        appId: response.data.app.importApp.appId,
                        organizationId: response.data.app.importApp.organizationId,
                        name: response.data.app.importApp.name,
                    };
                } else {
                    const error = response.error || `Unable to import app, unknown error`;
                    throw error;
                }
            });
    }

    ///
    /// Channels
    ///

    public getAppChannels(appId: string): Promise<Channel[]> {
        return this.client
            .query(GetAppWithChannels, {
                appId,
            })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.app.channels;
                } else {
                    const error = response.error || `Unabled to get app channels, unknown error`;
                    throw error;
                }
            });
    }

    public getAppChannel(appId: string, channelId: string): Promise<BaseAppChannel> {
        return this.client
            .query(GetAppChannelDocument, {
                appId,
                channelId,
            })
            .toPromise()
            .then<BaseAppChannel>((response) => {
                if (response.data?.app) {
                    return response.data.app.channel;
                } else {
                    const error = response.error || `Unabled to get app channel, unknown error`;
                    throw error;
                }
            });
    }

    public createChatWidgetChannel(appId: string, channel: ChatWidgetAppChannelInput): Promise<Channel> {
        return this.client
            .mutation(AddChatWidgetChannelDocument, { appId, channel })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.addChatWidgetChannel;
                } else {
                    const error = response.error || `Unable to create chat widget channel, unknown error`;
                    throw error;
                }
            });
    }

    public updateChatWidgetChannel(appId: string, channel: ChatWidgetAppChannelInput): Promise<Channel> {
        // need to clean off __typename
        const cleaned = cleanObj(removeKey(removeKey(channel, "__typename"), "key"));

        return this.client
            .mutation(AddChatWidgetChannelDocument, { appId, channel: cleaned })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.addChatWidgetChannel;
                } else {
                    const error = response.error || `Unable to update chat widget channel, unknown error`;
                    throw error;
                }
            });
    }

    /**
     * Creates a Form Widget Channel
     * @param appId
     * @param channel
     * @returns
     */
    public createFormWidgetChannel(appId: string, channel: FormWidgetAppChannelInput): Promise<Channel> {
        return this.client
            .mutation(AddFormWidgetChannelDocument, { appId, channel })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.app.update.channel.addFormWidgetChannel;
                } else {
                    const error = response.error || `Unable to create form widget channel, unknown error`;
                    throw error;
                }
            });
    }

    /**
     * Create a Lex Channel for the App
     * @param appId
     * @param channel
     * @returns
     */
    public createLexChannel(appId: string, channel: LexV2ConnectAppChannelInput): Promise<LexV2ConnectAppChannel> {
        const cleaned = cleanObj(removeKey(removeKey(channel, "__typename"), "key"));

        return this.client
            .mutation(AddLexV2ChannelDocument, { appId, channel: cleaned })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.addLexV2ConnectChannel;
                } else {
                    const error = response.error || `Unable to create Lex channel, unknown error`;
                    throw error;
                }
            });
    }

    /**
     * Adds a surefire integration to an app.
     *
     * @param appId
     * @param token
     * @param endpoint
     * @param dataMap
     * @returns
     */
    public addSurefireIntegration(appId: string, token: string, endpoint: string, dataMap: string): Promise<boolean> {
        return this.client
            .mutation(AddSurefireIntegrationDocument, {
                appId,
                token,
                endpoint,
                dataMap,
            })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.app.update.integration.isLinked;
                } else {
                    const error = response.error || `Unable to add Surefire integration, unknown error`;
                    throw error;
                }
            });
    }

    ///
    /// DOCUMENTS
    ///

    public getDocuments(appId: string, size = 10, from = 0): Promise<Pick<GraphqlApp, "contentSources" | "content">> {
        return this.client
            .query(GetAppContentDocument, { appId, size, from })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.app;
                } else {
                    const error = response.error || `Unable to get documents, unknown error`;
                    throw error;
                }
            });
    }

    public getFAQs(appId: string, size = 10, from = 0): Promise<Pick<GraphqlApp, "faq">> {
        return this.client
            .query(GetAppContentDocument, { appId, size, from })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.app;
                } else {
                    const error = response.error || `Unable to get FAQs, unknown error`;
                    throw error;
                }
            });
    }

    public startCrawl(appId: string, url: string, pattern: string[], channelId: string): Promise<void> {
        return this.client.mutation(StartCrawlDocument, { appId, url, pattern, channelId }).toPromise().then();
    }

    public scheduleCrawl(
        appId: string,
        url: string,
        pattern: string[],
        daysOfWeek?: string[]
    ): Promise<WebCrawlSchedule | WebCrawlMonthlySchedule | WebCrawlWeeklySchedule> {
        return this.client
            .mutation(AddScheduledCrawlDocument, { appId, url, pattern, daysOfWeek })
            .toPromise()
            .then((response) => {
                return response.data;
            });
    }

    public getSchedules(appId: string): Promise<GetAppSchedulesQuery> {
        return this.client
            .query(GetAppSchedulesDocument, { appId })
            .toPromise()
            .then((response) => {
                return response.data;
            });
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
        return this.client
            .query(GetHandlerDocument, {
                appId,
                intentId,
            })
            .toPromise()
            .then((response) => {
                return response?.data?.handler;
            });
    }

    /**
     * Update an existing handler
     */
    public updateHandler(appId: string, handlerId: string, handler: Handler | UpdateHandlerInput): Promise<Handler> {
        const cleaned = cleanForUpdateHandler(handler);

        return this.client
            .mutation(UpdateHandlerDocument, {
                appId,
                handlerId,
                handler: cleaned,
            })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.updateHandler;
                } else {
                    const error = response.error || `Unable to update handler, unknown error`;
                    throw error;
                }
            });
    }

    /**
     * Create a new handler
     */
    public createHandler(appId: string, handler: Handler | AddHandlerInput): Promise<Handler> {
        const cleaned = cleanForAddHandler(handler);

        return this.client
            .mutation(CreateHandlerDocument, {
                appId,
                handler: cleaned,
            })
            .toPromise()
            .then((response) => {
                if (response.data) {
                    return response.data.addHandler;
                } else {
                    const error = response.error || `Unable to create handler, unknown error`;
                    throw error;
                }
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
        return this.client
            .mutation(AddIntentMutation, {
                appId,
                intent,
            })
            .toPromise()
            .then((response) => {
                return response.data.addIntent;
            });
    }

    /**
     * Get an intent by intentId
     *
     * @param appId
     * @param intentId
     * @returns
     */
    public getIntent(appId: string, intentId: string): Promise<Intent> {
        return this.client
            .query(GetIntent, {
                appId,
                intentId,
            })
            .toPromise()
            .then((response) => {
                return response.data.intent;
            });
    }

    public updateIntent(appId: string, intent: Intent): Promise<Pick<Intent, "intentId" | "name">> {
        return this.client
            .mutation(UpdateIntentMutation, {
                appId,
                intentId: intent.intentId,
                intent,
            })
            .toPromise()
            .then((response) => {
                return response.data.updateIntent;
            });
    }

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
    public createEntity(appId: string, entity: Partial<Entity>): Promise<Pick<Entity, "entityId" | "displayName">> {
        return this.client
            .mutation(AddEntityMutation, {
                entity: {
                    appId,
                    ...entity,
                },
            })
            .toPromise()
            .then((response) => {
                return response.data.addEntity;
            });
    }

    public getEntity(appId: string, entityId: string): Promise<Entity> {
        return this.client
            .query(GetEntity, {
                appId,
                entityId,
            })
            .toPromise()
            .then((response) => {
                return response.data.entity;
            });
    }

    public updateEntity(appId: string, entity: Entity): Promise<Entity> {
        return this.client
            .mutation(UpdateEntityMutation, {
                appId,
                entityId: entity.entityId,
                entity,
            })
            .toPromise()
            .then((response) => {
                return response.data.updateEntity;
            });
    }

    /**
     * Pass through any query and corresponding variables.
     *
     * Leverage exported gql function to wrap the graphql query.
     */
    public query<T>(document: DocumentNode, variables: any): Promise<T> {
        return this.client
            .query(document, variables)
            .toPromise()
            .then((response) => {
                return response.data;
            });
    }

    /**
     * Pass through any mutation and corresponding variables.
     *
     * Leverage exported gql function to wrap the graphql mutation.
     */
    public mutation<T>(document: DocumentNode, variables: any): Promise<T> {
        return this.client
            .mutation(document, variables)
            .toPromise()
            .then((response) => {
                return response.data;
            });
    }
}
