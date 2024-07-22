"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XAPPClient = void 0;
const getGraphQLClient_1 = require("./graphql/getGraphQLClient");
const models_1 = require("./graphql/models");
const mutations_1 = require("./graphql/mutations");
const queries_1 = require("./graphql/queries");
const clean_1 = require("./utils/clean");
class XAPPClient {
    constructor(props) {
        this.client = (0, getGraphQLClient_1.getGraphQLClient)(props.userToken, props.url);
    }
    /**
     * Get profile of the current signed in user.
     *
     * @returns Profile of the current signed in user.
     */
    getProfile() {
        return this.client.query(models_1.GetProfileDocument, {}).toPromise().then((response) => {
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
    createApp(app) {
        return this.client.mutation(mutations_1.AddAppMutation, {
            app
        }).toPromise().then((response) => {
            if (response.data) {
                return response.data.addApp;
            }
            else {
                const error = response.error || `Unable to create app, unknown error`;
                throw error;
            }
        });
    }
    updateApp(app) {
        return this.client.mutation(models_1.UpdateAppByDocument, {
            appId: app.appId,
            app
        }).toPromise().then((response) => {
            if (response.data) {
                return response.data.updateApp;
            }
            else {
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
    setAppStatus(appId, status, notes) {
        return this.client.mutation(models_1.UpdateStatusDocument, {
            appId,
            type: status,
            notes
        }).toPromise().then((response) => {
            if (response.data) {
                return response.data;
            }
            else {
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
    getApp(appId, start, end, env) {
        if (!start) {
            const now = new Date();
            end = now.toISOString();
            const lastWeek = new Date();
            lastWeek.setDate(now.getDate() - 7);
            start = lastWeek.toISOString();
        }
        // GetApp
        return this.client.query(models_1.GetAppOverviewDocument, {
            appId,
            start,
            end,
            env
        }).toPromise().then((response) => {
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
    getAppsForOrg(organizationId, size = 10, from = 0, byStatusType) {
        return this.client.query(models_1.GetAppsForOrgDocument, {
            organizationId,
            from,
            size,
            byStatusType
        }).toPromise().then((response) => {
            return response.data;
        });
    }
    getAppAnalytics(appId, start, end, options) {
        if (!start) {
            const now = new Date();
            end = now.toISOString();
            const lastWeek = new Date();
            lastWeek.setDate(now.getDate() - 7);
            start = lastWeek.toISOString();
        }
        const variables = Object.assign({ appId, startDate: start, endDate: end }, options);
        return this.client.query(models_1.GetAnalyticsAndEventsDocument, variables).toPromise().then((response) => {
            return response.data;
        });
    }
    getAppEvents(appId, start, end, options) {
        if (!start) {
            const now = new Date();
            end = now.toISOString();
            const lastWeek = new Date();
            lastWeek.setDate(now.getDate() - 7);
            start = lastWeek.toISOString();
        }
        const variables = Object.assign({ appId, startDate: start, endDate: end }, options);
        return this.client.query(models_1.GetEventsDocument, variables).toPromise().then((response) => {
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
    exportApp(appId, organizationId) {
        return this.client.mutation(mutations_1.ExportApp, {
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
    importApp(url, organizationId) {
        return this.client.mutation(mutations_1.ImportApp, {
            organizationId,
            appUrl: url
        }).toPromise().then((response) => {
            if (response.data) {
                return {
                    appId: response.data.app.importApp.appId,
                    organizationId: response.data.app.importApp.organizationId,
                    name: response.data.app.importApp.name
                };
            }
            else {
                const error = response.error || `Unable to import app, unknown error`;
                throw error;
            }
        });
    }
    ///
    /// Channels
    ///
    getAppChannels(appId) {
        return this.client.query(queries_1.GetAppWithChannels, {
            appId
        }).toPromise().then((response) => {
            if (response.data) {
                return response.data.app.channels;
            }
            else {
                const error = response.error || `Unabled to get app channels, unknown error`;
                throw error;
            }
        });
    }
    getAppChannel(appId, channelId) {
        return this.client.query(models_1.GetAppChannelDocument, {
            appId,
            channelId
        }).toPromise().then((response) => {
            var _a;
            if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.app) {
                return response.data.app.channel;
            }
            else {
                const error = response.error || `Unabled to get app channel, unknown error`;
                throw error;
            }
        });
    }
    createChatWidgetChannel(appId, channel) {
        return this.client.mutation(models_1.AddChatWidgetChannelDocument, { appId, channel })
            .toPromise().then((response) => {
            if (response.data) {
                return response.data.addChatWidgetChannel;
            }
            else {
                const error = response.error || `Unable to create chat widget channel, unknown error`;
                throw error;
            }
        });
    }
    updateChatWidgetChannel(appId, channel) {
        // need to clean off __typename
        const cleaned = (0, clean_1.cleanObj)((0, clean_1.removeKey)((0, clean_1.removeKey)(channel, "__typename"), "key"));
        return this.client.mutation(models_1.AddChatWidgetChannelDocument, { appId, channel: cleaned })
            .toPromise().then((response) => {
            if (response.data) {
                return response.data.addChatWidgetChannel;
            }
            else {
                const error = response.error || `Unable to update chat widget channel, unknown error`;
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
    createLexChannel(appId, channel) {
        const cleaned = (0, clean_1.cleanObj)((0, clean_1.removeKey)((0, clean_1.removeKey)(channel, "__typename"), "key"));
        return this.client.mutation(models_1.AddLexV2ChannelDocument, { appId, channel: cleaned }).toPromise().then((response) => {
            if (response.data) {
                return response.data.addLexV2ConnectChannel;
            }
            else {
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
    addSurefireIntegration(appId, token, endpoint, dataMap) {
        return this.client.mutation(models_1.AddSurefireIntegrationDocument, { appId, token, endpoint, dataMap }).toPromise().then((response) => {
            if (response.data) {
                return response.data.app.update.integration.isLinked;
            }
            else {
                const error = response.error || `Unable to add Surefire integration, unknown error`;
                throw error;
            }
        });
    }
    ///
    /// DOCUMENTS
    ///
    getDocuments(appId, size = 10, from = 0) {
        return this.client.query(models_1.GetAppContentDocument, { appId, size, from }).toPromise().then((response) => {
            if (response.data) {
                return response.data.app;
            }
            else {
                const error = response.error || `Unable to get documents, unknown error`;
                throw error;
            }
        });
    }
    getFAQs(appId, size = 10, from = 0) {
        return this.client.query(models_1.GetAppContentDocument, { appId, size, from }).toPromise().then((response) => {
            if (response.data) {
                return response.data.app;
            }
            else {
                const error = response.error || `Unable to get FAQs, unknown error`;
                throw error;
            }
        });
    }
    startCrawl(appId, url, pattern, channelId) {
        return this.client.mutation(models_1.StartCrawlDocument, { appId, url, pattern, channelId }).toPromise().then();
    }
    scheduleCrawl(appId, url, pattern, daysOfWeek) {
        return this.client.mutation(models_1.AddScheduledCrawlDocument, { appId, url, pattern, daysOfWeek }).toPromise().then((response) => {
            return response.data;
        });
    }
    getSchedules(appId) {
        return this.client.query(models_1.GetAppSchedulesDocument, { appId }).toPromise().then((response) => {
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
    getHandler(appId, intentId) {
        return this.client.query(models_1.GetHandlerDocument, {
            appId,
            intentId
        }).toPromise().then((response) => {
            return response.data.handler;
        });
    }
    /**
     * Update an existing handler
     */
    updateHandler(appId, handlerId, handler) {
        const cleaned = (0, clean_1.cleanForUpdateHandler)(handler);
        return this.client.mutation(models_1.UpdateHandlerDocument, {
            appId,
            handlerId,
            handler: cleaned
        }).toPromise().then((response) => {
            if (response.data) {
                return response.data.updateHandler;
            }
            else {
                const error = response.error || `Unable to update handler, unknown error`;
                throw error;
            }
        });
    }
    /**
     * Create a new handler
     */
    createHandler(appId, handler) {
        const cleaned = (0, clean_1.cleanForAddHandler)(handler);
        return this.client.mutation(models_1.CreateHandlerDocument, {
            appId,
            handler: cleaned
        }).toPromise().then((response) => {
            if (response.data) {
                return response.data.addHandler;
            }
            else {
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
    createIntent(appId, intent) {
        return this.client.mutation(mutations_1.AddIntentMutation, {
            appId,
            intent
        }).toPromise().then((response) => {
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
    getIntent(appId, intentId) {
        return this.client.query(queries_1.GetIntent, {
            appId,
            intentId
        }).toPromise().then((response) => {
            return response.data.intent;
        });
    }
    updateIntent(appId, intent) {
        return this.client.mutation(mutations_1.UpdateIntentMutation, {
            appId,
            intentId: intent.intentId,
            intent
        }).toPromise().then((response) => {
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
    createEntity(appId, entity) {
        return this.client.mutation(mutations_1.AddEntityMutation, {
            entity: Object.assign({ appId }, entity)
        }).toPromise().then((response) => {
            return response.data.addEntity;
        });
    }
    getEntity(appId, entityId) {
        return this.client.query(queries_1.GetEntity, {
            appId,
            entityId
        }).toPromise().then((response) => {
            return response.data.entity;
        });
    }
    updateEntity(appId, entity) {
        return this.client.mutation(mutations_1.UpdateEntityMutation, {
            appId,
            entityId: entity.entityId,
            entity
        }).toPromise().then((response) => {
            return response.data.updateEntity;
        });
    }
}
exports.XAPPClient = XAPPClient;
//# sourceMappingURL=XAPPClient.js.map