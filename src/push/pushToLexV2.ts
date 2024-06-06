/*! Copyright (c) 2022, XAPP AI*/

import { LexServiceV2, LexSyncStatusV2 } from "@xapp/stentor-service-lex";
import { isIntent } from "stentor-guards";
import { Handler } from "stentor-models";
import { getAppIntentEntitiesFromExport } from "../getAppIntentEntities";
import { getStentorApp } from "../getStentorApp";

import log from "stentor-logger";

function sleep(ms: number): Promise<void> {
    log.info("Snoozing for ms milliseconds ... zzzzz");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

/**
 * Push to LEX V2
 *
 * @param options
 */
export async function pushToLexV2(options?: { appId?: string; lang?: string; awsRole?: string; fulfillment?: string; file?: string; botName?: string, id?: string }): Promise<void> {
    const { appId, fulfillment, file, botName, id: botId } = options;
    let awsRole = options.awsRole;

    if (!botName && !botId) {
        throw new Error("Please specify bot name (--botName) or bot id (--id)");
    }

    const { app, intents = [], entities = [], handlers = [] } =
        file ? await getAppIntentEntitiesFromExport(appId, file) : await getStentorApp(appId, { withChannels: true });

    // We can push v1 too
    const lexChannel = (app as any).channels.find((ch: { type: string }) => {
        return ch.type === "lex-connect" || ch.type === "lex-v2";
    });

    console.log(lexChannel);

    let kendraRole: string;
    let kendraIndexARN: string;
    let fulfillmentARN: string;

    if (lexChannel) {
        kendraRole = (lexChannel as any).kendraRole;
        kendraIndexARN = (lexChannel as any).kendraIndexARN;
        fulfillmentARN = (lexChannel as any).lexFulfillmentLambdaARN;

        if (!awsRole && (lexChannel as any).managementRole) {
            awsRole = (lexChannel as any).managementRole;
        }

    } else {
        throw new Error(`This app doesn't have a Lex channel: ${appId}`);
    }

    const filteredHandlers: Handler[] = handlers.filter((potential) => {

        if (potential.intentId === "InputUnknown") {
            // We can't push these because they come built-in and you can't delete them.  Great.
            return false;
        }

        return isIntent(potential);
    });

    const mergedIntents = intents.concat(filteredHandlers);

    const lexSyncerV2 = new LexServiceV2({
        botId,
        botName,
        fulfillmentARN: fulfillment || fulfillmentARN,
        kendraRole,
        kendraIndexARN,
        credentials: {
            region: "us-east-1",
            role: {
                arn: awsRole,
                externalId: lexChannel ? (lexChannel as any).managementRoleExternalId : undefined, // cross-account use not supported for non-user credentials yet.
            },
        }
    });

    log.info(`Syncing app ${app.appId} with ${mergedIntents.length} intents and ${entities.length} entities to LEX V2`);
    let responseStatus: LexSyncStatusV2 = await lexSyncerV2.sync(app.appId, mergedIntents, entities);
    log.info(`Synced app ${app.appId} finished with status\n ${JSON.stringify(responseStatus, undefined, 2)}}`);

    if (responseStatus.state !== "FAILED") {
        await sleep(3);
        responseStatus = await lexSyncerV2.getStatus();
        log.info(`App ${app.appId} new status\n ${JSON.stringify(responseStatus, undefined, 2)}}`);
        await sleep(3);
        const nluResponse = lexSyncerV2.query("hello");
        log.info(`App ${app.appId} nlu response\n ${JSON.stringify(nluResponse, undefined, 2)}}`);
    } else {
        log.info(`FAILED`);
        log.info(responseStatus.message);
    }
}
