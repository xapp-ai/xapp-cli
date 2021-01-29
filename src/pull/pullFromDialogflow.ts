/*! Copyright (c) 2019, XAPPmedia */
import { log } from "stentor-logger";
import {
    Entity,
    Intent as DialogflowIntent,
    TranslateDialogflowEntity,
    TranslateDialogflowIntent
} from "@xapp/stentor-dialogflow/lib/v1";
import { mergeIntents, MergeIntentsResults } from "stentor-interaction-model";
import { Intent, SlotType } from "stentor-models";
import { DialogflowService } from "@xapp/stentor-service-dialogflow";
import { getAppIntentEntities } from "../getAppIntentEntities";
import { getXAPPClient } from "../getXAPPClient";

/**
 * Pulls intent information from Dialogflow and merges with the
 * intents in stentor.
 *
 * @export
 * @param {string} organizationId
 * @param {string} appId
 * @param {string} [tableVersion="dev"]
 * @returns {Promise<void>}
 */
export async function pullFromDialogflow(options?: {
    developerToken?: string;
    appId: string;
    write: boolean;
}): Promise<void> {
    const { appId, write } = options;
    let { developerToken } = options;
    const { app, intents, token } = await getAppIntentEntities(appId);

    if (!developerToken) {
        developerToken = app.dialogflowDeveloperToken;
        if (!developerToken) {
            throw new Error("Dialogflow developer token must exist on the app.");
        }
    }

    // First get all the intent descriptors out of dialogflow
    const dialogflowService = new DialogflowService({ token: developerToken });
    const existingIntentDescriptors = await dialogflowService.getIntents();
    log().info(`Found ${existingIntentDescriptors.length} intents on Dialogflow`);
    // Grab all of the full intents, we will need them.
    const fullIntentPromises: Promise<DialogflowIntent>[] = [];
    existingIntentDescriptors.forEach(existingIntentDescriptor => {
        fullIntentPromises.push(dialogflowService.getIntent(developerToken, existingIntentDescriptor.id));
    });
    const dialogFlowIntents = await Promise.all(fullIntentPromises);
    log().info(`Received ${dialogFlowIntents.length} from Dialogflow`);
    // Translate them all
    const intentsFromDialogflow: Intent[] = [];
    dialogFlowIntents.forEach(dialogflowIntent => {
        const intentTranslator = new TranslateDialogflowIntent();
        const translatedIntent = intentTranslator.translate(dialogflowIntent);
        if (!translatedIntent) {
            log().info(`Could not translate ${dialogflowIntent.name}`);
            return;
        } else {
            intentsFromDialogflow.push(translatedIntent);
        }
    });
    // Go through the translated ones, find one that corresponds to it, merge it, prep for write
    const intentsToWrite: Intent[] = [];
    const intentsToWritePromises: Promise<Intent>[] = [];
    intentsFromDialogflow.forEach(intentFromDialogflow => {
        // find the corresponding intent, first by dialogflowId, then by intentId
        log().info(`Looking for corresponding intent to ${intentFromDialogflow.intentId}`);
        let correspondingIntent = intents.find(intent => {
            return intent.dialogflowId === intentFromDialogflow.dialogflowId;
        });

        if (!correspondingIntent) {
            log().info(`Could not find corresponding by dialogflowId, looking by intentId...`);
            correspondingIntent = intents.find(intent => {
                return intent.intentId === intentFromDialogflow.intentId;
            });
        } else {
            log().info(`Found one based on dialogflowId ${correspondingIntent.dialogflowId}`);
        }

        const results: MergeIntentsResults = {};
        let intentToWrite: Intent;

        if (!correspondingIntent) {
            log().info("Could not find a corresponding intent, we have a new one...");
            intentToWrite = intentFromDialogflow;
        } else {
            log().info(`Found one based on intentId ${correspondingIntent.intentId}, merging...`);
            intentToWrite = mergeIntents(correspondingIntent, intentFromDialogflow, results);
        }

        intentsToWrite.push(intentToWrite);

        if (write) {
            const client = getXAPPClient(token);
            intentsToWritePromises.push(client.updateIntent(intentToWrite));
        } else {
            log().info(`!NOT WRITING intent ${intentToWrite.intentId}`);
            log().info(JSON.stringify(intentToWrite, undefined, 2));
        }
    });
    // Write the intents
    let intentWriteResults: Intent[];
    try {
        intentWriteResults = await Promise.all(intentsToWritePromises);
    } catch (error) {
        console.error(`Error writing intents`);
        console.error(error);
    }
    log().info(`Wrote ${intentWriteResults.length} intents`);

    // THIS CONCLUDES INTENT WRITING

    // Time to get the entities!
    const entityDescriptors = await dialogflowService.getEntities(developerToken);
    const entityPromises: Promise<Entity>[] = [];
    entityDescriptors.forEach(entityDescriptor => {
        entityPromises.push(dialogflowService.getEntity(developerToken, entityDescriptor.id));
    });
    const entities = await Promise.all(entityPromises);
    log().info(`Retrieved ${entities.length} entities from Dialogflow`);

    const slotsFromDialogflow: SlotType[] = [];
    entities.forEach(entity => {
        const translator = new TranslateDialogflowEntity();
        const slotType = translator.translate(entity);
        slotsFromDialogflow.push(slotType);
    });

    log().info("YOU WILL NEED TO MANUALLY PASTE THE FOLLOWING TO A SINGLE INTENT");
    slotsFromDialogflow.forEach((slotType, index) => {
        log().info(`========= ${index} =========`);
        log().info(JSON.stringify(slotType, undefined, 2));
    });
}
