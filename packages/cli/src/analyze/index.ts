/*! Copyright (c) 2022, XAPP AI*/

import log from "stentor-logger";
import { getAppId } from "../getAppId";
import { getXAPPClient } from "../getXAPPClient";

export async function info(appId: string, handlerId?: string): Promise<void> {
    if (!appId) {
        appId = getAppId();
    }

    const client = await getXAPPClient();

    const now = new Date();
    const end = now.toISOString();
    const lastWeek = new Date();
    lastWeek.setDate(now.getDate() - 7);
    const start = lastWeek.toISOString();

    // Temporary to get organizationId
    const data = await client.getApp(appId, start, end);
    const app = data.app;

    if (!app) {
        log.info(`Cannot find app with id: ${appId}`);

        // get a little more info to help with debugging

        const profile = await client.getProfile();

        log.info(`Profile: ${JSON.stringify(profile, undefined, 2)}`);

        const orgs = await client.getOrgs();

        log.info(`Orgs: ${JSON.stringify(orgs, undefined, 2)}`);

        return;
    }

    const { entities, intents, handlers } = app;

    log.info(`name: ${app.name}`);
    log.info(`Summary...`);
    log.info(`\t${entities.total} entities`);
    log.info(`\t${intents.total} intents`);
    log.info(`\t${handlers.total} handlers`);

    if (app.analytics?.user) {
        log.info(`Last 7 days...`);
        log.info(`\t${app.analytics.user.totalUsers} total users`);
        log.info(`\t${app.analytics.user.newUsers} new users`);
        log.info(`\t${app.analytics.user.totalSessions} total sessions`);
    } else {
        log.info(`No usage in the last 7 days...`);
    }

    const noAnswerFlags = await client.getAppEvents(appId, start, end, {
        byTag: ["KB_NO_ANSWER"],
    });

    const noAnswerTotal = noAnswerFlags.app.events.total;

    const events = noAnswerFlags.app.events.events;

    log.info(`\t${noAnswerTotal} no answered`);

    const unansweredQueries = events.map((event) => {
        return event.stentorRequest.rawQuery;
    });

    log.info(
        unansweredQueries.reduce((prev, curr) => {
            return `${prev}\n\t\t"${curr}"`;
        }, "Sample of unanswered...")
    );

    if (handlerId) {
        log.info(`Retrieving handler with ID ${handlerId}`);
        const handler = await client.getHandler(appId, handlerId);

        log.info(`Handler info: ${handlerId} ${handler.name} ${handler.type}`);
    }
}
