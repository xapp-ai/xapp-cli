/*! Copyright (c) 2022, XAPP AI*/

import log from "stentor-logger";
import { getAppId } from "../getAppId";
import { getUserToken } from "../getUserToken";
import { getXAPPClient } from "../getXAPPClient";

export async function info(appId: string): Promise<void> {

    const token = await getUserToken();

    if (!appId) {
        appId = getAppId();
    }

    const client = getXAPPClient(token, appId);

    // Temporary to get organizationId
    const app = await client.getApp(appId);

    const { entities, intents, handlers } = app;

    log.info(`name: ${app.name}`)
    log.info(`\t${entities.total} entities`);
    log.info(`\t${intents.total} intents`);
    log.info(`\t${handlers.total} handlers`);
    log.info(`Last 7 days...`)
    log.info(`\t${app.analytics.user.totalUsers} total users`);
    log.info(`\t${app.analytics.user.newUsers} new users`);
    log.info(`\t${app.analytics.user.totalSessions} total sessions`);
}
