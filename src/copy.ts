/*! Copyright (c) 2022, XAPP AI*/

import { log } from "stentor-logger";
import { Handler, Intent } from "stentor-models";
import { getAppIntentEntities } from "./getAppIntentEntities.js";
import { getXAPPClient } from "./getXAPPClient.js";
import { Options } from "./Options.js";

export async function copy(appId: string, newAppId: string, intentId: string | undefined, options: Options): Promise<void> {
    if (!newAppId) {
        throw Error("New APP Id undefined");
    }

    const { intents, token } = await getAppIntentEntities(appId);
    const client = await getXAPPClient(token);

    const data = await client.getApp(newAppId);
    const newApp = data.app;

    const existingIntentsMap = intents.reduce<any>((map, intent) => {
        const id = intent.intentId;
        map[id] = intent;
        return map;
    }, {});

    const intentsToWrite: (Intent | Handler)[] = [];

    intents.forEach(intent => {
        const intentId = intent.intentId;
        if (!existingIntentsMap[intentId]) {
            intentsToWrite.push({
                ...intent,
                appId: newAppId,
                organizationId: newApp.organizationId
            });
        } else {
            // do not copy over if it already exists
            log().info(`Intent with id ${intentId} already exists, ignoring...`);
        }
    });

    log().info(`Writing ${intentsToWrite.length} intents to ${newAppId}`);

    if (options.dryRun) {
        for (const intent of intentsToWrite) {
            log().info(
                `Writing intent ${intent.intentId} to app ${intent.appId} of organization ${intent.organizationId}`
            );
        }
    } else {
        try {
            const writePromises = intentsToWrite.map(intent => {
                return client.updateIntent(appId, intent);
            });

            const results = await Promise.all(writePromises);
            log().info(`Wrote ${results.length} intents`);
        } catch (error) {
            console.error(error);
        }
    }
}
