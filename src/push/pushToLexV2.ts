/*! Copyright (c) 2019, XAPPmedia */
import { LexServiceV2, LexSyncStatusV2 } from "@xapp/stentor-service-lex";
import { isHandler, isIntent } from "stentor-guards";
import { Handler } from "stentor-models";
import { getAppIntentEntities, getAppIntentEntitiesFromExport } from "../getAppIntentEntities";

import log from "stentor-logger";

/**
 * Push to LEX V2
 *
 * @param options
 */
export async function pushToLexV2(options?: { appId?: string; lang?: string; awsRole?: string, fulfillment?: string, file?: string, botName?: string }): Promise<void> {
    const { appId, awsRole, fulfillment, file, botName } = options;

    if (!botName) {
        throw new Error("Please specify bot name");
    }

    if (file) {
        throw new Error("Pushing from export is not implemented (yet)");
    }

    const { app, intents = [], entities = [], handlers = [] } =
        file ? await getAppIntentEntitiesFromExport(appId, file) : await getAppIntentEntities(appId);

    // We can push v1 too
    const lexChannel = (app as any).channels.find((ch: { type: string; }) => {
        return ch.type === "lex-connect" || ch.type === "lex-v2";
    });

    let kendraRole: string;
    let kendraIndexARN: string;
    let fulfillmentARN : string;

    if (lexChannel) {
        kendraRole = (lexChannel as any).kendraRole;
        kendraIndexARN = (lexChannel as any).kendraIndexARN;
        fulfillmentARN = (lexChannel as any).lexFulfillmentLambdaARN;
    } else {
        throw new Error(`This app doesn't have a Lex channel: ${appId}`);
    }

    const filteredHandlers: Handler[] = handlers.filter((potential) => {
        // Include the Kendra handler
        if (isHandler(potential)) {
            let nluOverrideType;

            // Accept all
            if (!!potential.nlu && typeof potential.nlu === "object") {
                if (potential.nlu["lex"]) {
                    nluOverrideType = potential.nlu["lex"].type;
                } else if (potential.nlu["lex-connect"]) {
                    nluOverrideType = potential.nlu["lex-connect"].type;
                } else if (potential.nlu["lex-v2"]) {
                    nluOverrideType = potential.nlu["lex-v2"].type;
                }
            }

            if (nluOverrideType === "AMAZON.KendraSearchIntent") {
                if (!this.props.kendraIndexARN || !this.props.kendraRole) {
                    throw new TypeError(
                        `For AMAZON.KendraSearchIntent, you must have both kendraIndexARN and kendraRole set in the channel.`
                    );
                }

                return true;
            }
        }

        return isIntent(potential);
    });

    const mergedIntents = intents.concat(filteredHandlers);

    const lexSyncerV2 = new LexServiceV2({
        botName,
        fulfillmentARN: fulfillment || fulfillmentARN,
        kendraRole,
        kendraIndexARN,
        credentials: {
            region: "us-east-1",
            role: {
                arn: awsRole,
                externalId: undefined, // cross-account use not supported for non-user credentials yet.
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
    }
}

function sleep(ms: number): Promise<void> {
    log.info("Snoozing for ms milliseconds ... zzzzz");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
