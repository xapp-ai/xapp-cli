/*! Copyright (c) 2019, XAPPmedia */
import { isGlobalHandler } from "stentor-guards";
import log from "stentor-logger";
import { Handler } from "stentor-models";
import { getAppIntentEntities } from "../getAppIntentEntities";

export async function info(appId: string): Promise<void> {

    const { app, intents, handlers, entities } = await getAppIntentEntities(appId);

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
