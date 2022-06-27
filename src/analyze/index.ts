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

    const now = new Date();
    const end = now.toISOString();
    const lastWeek = new Date();
    lastWeek.setDate(now.getDate() - 7);
    const start = lastWeek.toISOString();

    // Temporary to get organizationId
    const app = await client.getApp(appId, start, end);

    const { entities, intents, handlers } = app;



    log.info(`name: ${app.name}`)
    log.info(`Summary...`)
    log.info(`\t${entities.total} entities`);
    log.info(`\t${intents.total} intents`);
    log.info(`\t${handlers.total} handlers`);
    log.info(`Last 7 days...`)
    log.info(`\t${app.analytics.user.totalUsers} total users`);
    log.info(`\t${app.analytics.user.newUsers} new users`);
    log.info(`\t${app.analytics.user.totalSessions} total sessions`);

    const noAnswerFlags = await client.getAppEvents(appId, start, end, {
        byTag: ["KB_NO_ANSWER"]
    });

    const noAnswerTotal = noAnswerFlags.app.events.total;

    const events = noAnswerFlags.app.events.events;

    log.info(`\t${noAnswerTotal} no answered`);

    const unansweredQueries = events.map((event) => {
        return event.stentorRequest.rawQuery;
    });

    log.info(unansweredQueries.reduce((prev, curr) => {
        return `${prev}\n\t\t"${curr}"`;
    }, "Sample of unanswered..."));
}
