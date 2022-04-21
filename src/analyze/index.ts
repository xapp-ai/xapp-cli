/*! Copyright (c) 2022, XAPP AI*/

import { isGlobalHandler } from "stentor-guards";
import log from "stentor-logger";
import { Handler } from "stentor-models";
import { getStentorApp } from "../getStentorApp";

export async function info(appId: string): Promise<void> {

    const { app, intents, handlers, entities } = await getStentorApp(appId);

    log.info(`name: ${app.name}`)
    log.info(`\t${entities.length} entities`);
    log.info(`\t${intents.length} intents`);
    log.info(`\t${handlers.length} handlers`);

    // Go through and find all the global handlers
    const globalHandlers: Handler[] = handlers.filter(handler => {
        return isGlobalHandler(handler);
    });

    log.info(`\t${globalHandlers.length} global handlers`);
}
