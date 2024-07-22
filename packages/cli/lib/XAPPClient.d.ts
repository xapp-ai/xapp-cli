import { Entity, Intent } from "stentor-models";
import { AddHandlerInput, BaseAppChannel, ChatWidgetAppChannelInput, GetAnalyticsAndEventsQuery, GetAnalyticsAndEventsQueryVariables, GetAppOverviewQuery, GetAppSchedulesQuery, GetAppsForOrgQuery, GetEventsQuery, GetEventsQueryVariables, GetProfileQuery, Handler, LexV2ConnectAppChannel, LexV2ConnectAppChannelInput, UpdateAppInput, UpdateHandlerInput, UpdateStatusMutation, WebCrawlMonthlySchedule, WebCrawlSchedule, WebCrawlWeeklySchedule } from "./graphql/models";
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
        sources: {
            webUrl: string;
            webUrlPatterns: string[];
        }[];
    };
    channels: {
        id: string;
        type: string;
    }[];
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
export declare class XAPPClient {
    private client;
    constructor(props: XAPPClientProps);
    /**
     * Get profile of the current signed in user.
     *
     * @returns Profile of the current signed in user.
     */
    getProfile(): Promise<GetProfileQuery>;
    /**
     * Create an app
     *
     * @param app
     * @returns
     */
    createApp(app: App): Promise<App>;
    updateApp(app: UpdateAppInput): Promise<GraphqlApp>;
    /**
     * Sets the status of the app.
     *
     * @param appId
     * @param status - String or "Submitted for Review", "Live",
     * @param notes
     * @returns
     */
    setAppStatus(appId: string, status: string, notes?: string): Promise<UpdateStatusMutation>;
    /**
     * Get a specific app.
     * @param appId
     * @param start
     * @param end
     * @returns
     */
    getApp(appId: string, start?: string, end?: string, env?: string[]): Promise<GetAppOverviewQuery>;
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
    getAppsForOrg(organizationId: string, size?: number, from?: number, byStatusType?: string[]): Promise<GetAppsForOrgQuery>;
    getAppAnalytics(appId: string, start?: string, end?: string, options?: Pick<GetAnalyticsAndEventsQueryVariables, "byTag" | "byChannel" | "byRequestIntentId">): Promise<GetAnalyticsAndEventsQuery>;
    getAppEvents(appId: string, start?: string, end?: string, options?: Pick<GetEventsQueryVariables, "size" | "from" | "byTag" | "byRequestIntentId" | "byChannel" | "byEnv">): Promise<GetEventsQuery>;
    /**
     * Export an app and all of its intents, handlers, entities.
     *
     * @param appId
     * @param organizationId
     * @returns
     */
    exportApp(appId: string, organizationId: string): Promise<ExportApp>;
    /**
     * Import an App from a publicly available URL.
     *
     * The app and it's assets must be uploaded in JSON format to a publically available URL.
     *
     * @param url
     * @param organizationId
     * @returns
     */
    importApp(url: string, organizationId: string): Promise<ImportApp>;
    getAppChannels(appId: string): Promise<Channel[]>;
    getAppChannel(appId: string, channelId: string): Promise<BaseAppChannel>;
    createChatWidgetChannel(appId: string, channel: ChatWidgetAppChannelInput): Promise<Channel>;
    updateChatWidgetChannel(appId: string, channel: ChatWidgetAppChannelInput): Promise<Channel>;
    /**
     * Create a Lex Channel for the App
     * @param appId
     * @param channel
     * @returns
     */
    createLexChannel(appId: string, channel: LexV2ConnectAppChannelInput): Promise<LexV2ConnectAppChannel>;
    /**
     * Adds a surefire integration to an app.
     *
     * @param appId
     * @param token
     * @param endpoint
     * @param dataMap
     * @returns
     */
    addSurefireIntegration(appId: string, token: string, endpoint: string, dataMap: string): Promise<boolean>;
    getDocuments(appId: string, size?: number, from?: number): Promise<Pick<GraphqlApp, "contentSources" | "content">>;
    getFAQs(appId: string, size?: number, from?: number): Promise<Pick<GraphqlApp, "faq">>;
    startCrawl(appId: string, url: string, pattern: string[], channelId: string): Promise<void>;
    scheduleCrawl(appId: string, url: string, pattern: string[], daysOfWeek?: string[]): Promise<WebCrawlSchedule | WebCrawlMonthlySchedule | WebCrawlWeeklySchedule>;
    getSchedules(appId: string): Promise<GetAppSchedulesQuery>;
    /**
     * Get a specific handler
     *
     * @param appId
     * @param intentId
     * @returns
     */
    getHandler(appId: string, intentId: string): Promise<Handler>;
    /**
     * Update an existing handler
     */
    updateHandler(appId: string, handlerId: string, handler: Handler | UpdateHandlerInput): Promise<Handler>;
    /**
     * Create a new handler
     */
    createHandler(appId: string, handler: Handler | AddHandlerInput): Promise<Handler>;
    /**
     * Create an intent
     *
     * @param appId
     * @param intent
     * @returns
     */
    createIntent(appId: string, intent: Intent): Promise<Intent>;
    /**
     * Get an intent by intentId
     *
     * @param appId
     * @param intentId
     * @returns
     */
    getIntent(appId: string, intentId: string): Promise<Intent>;
    updateIntent(appId: string, intent: Intent): Promise<Pick<Intent, "intentId" | "name">>;
    /**
     * Create an entity
     *
     * @param appId
     * @param entity
     * @returns
     */
    createEntity(appId: string, entity: Entity): Promise<Pick<Entity, "entityId" | "displayName">>;
    getEntity(appId: string, entityId: string): Promise<Entity>;
    updateEntity(appId: string, entity: Entity): Promise<Entity>;
}
