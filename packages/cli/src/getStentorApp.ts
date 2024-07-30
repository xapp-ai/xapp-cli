/*! Copyright (c) 2022, XAPP AI */
import { ExportApp } from "@xapp/client";
import log from "stentor-logger";

import { getAppId } from "./getAppId";
import { getUserToken } from "./getUserToken";
import { getXAPPClient } from "./getXAPPClient";

export async function getStentorApp(appId?: string, options: { withChannels?: boolean, token?: string } = { withChannels: false }): Promise<ExportApp> {

    const withChannels = !!options.withChannels;

    const token = options.token || await getUserToken();

    if (!appId) {
        appId = getAppId();
    }

    log.info(`Retrieving app with ID: ${appId}`);

    const client = await getXAPPClient(token, appId);

    // Temporary to get organizationId
    const data = await client.getApp(appId);
    const app = data.app;

    const { organizationId } = app;

    const exported = await client.exportApp(appId, organizationId);

    // Also temporary
    exported.app.appId = appId;
    exported.app.organizationId = organizationId

    if (withChannels) {
        // Ok! find the channel
        const token = await getUserToken();
        const client = await getXAPPClient(token, appId);
        const channels = await client.getAppChannels(appId);

        exported.app.channels = channels;
    }

    return exported;
}