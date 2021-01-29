/*! Copyright (c) 2019, XAPPmedia */
import { log } from "stentor-logger";
import {
    Intent as DialogflowIntent,
    isFallbackIntent,
    isWelcomeIntent,
    TranslateDialogflowIntent
} from "@xapp/stentor-dialogflow/lib/v1";
import { INPUT_UNKNOWN_ID, LAUNCH_REQUEST_ID } from "stentor-constants";
import { mergeIntents } from "stentor-interaction-model";
import { Intent } from "stentor-models";
import { DialogflowService } from "@xapp/stentor-service-dialogflow";
import { getAppIntentEntities } from "../getAppIntentEntities";
import { getXAPPClient } from "../getXAPPClient";

export async function pushToDialogflow(options?: {
    appId?: string;
    developerToken?: string;
    lang?: string;
}): Promise<void> {
    const { appId, lang } = options;
    let { developerToken } = options;
    const { app, intents, token } = await getAppIntentEntities(appId);

    console.info(`Found ${app.name} with ${intents.length} intents`);

    if (!developerToken) {
        // see if we can grab one off the app
        if (app.dialogflowDeveloperToken) {
            developerToken = app.dialogflowDeveloperToken;
        }

        if (!developerToken) {
            throw new Error("You must pass your Dialogflow developer token for the agent.");
        }
    }

    const dialogflowService = new DialogflowService({ token: developerToken });

    interface IntentsMap {
        [id: string]: Intent;
    }
    const intentsMap = intents.reduce(
        (map, intent) => {
            return { ...map, [intent.intentId]: intent };
        },
        {} as IntentsMap
    );

    const intentsToUpdateInStentor: Intent[] = [];

    const intentsWithDialogflowId: Intent[] = intents.filter(intent => {
        return !!intent.dialogflowId;
    });
    log().debug(`  ${intentsWithDialogflowId.length} already exist with a Dialogflow ID`);

    let intentsToAddToDialogflow: Intent[] = [];

    // Create a map of the existing intents that already have dialogflowIds, mapping them by the Dialogflow ID
    interface DialogflowIdMap {
        [dialogflowId: string]: Intent;
    }
    // These already have dialogflow IDs, we update these instead of creating new ones
    const existingIntentsWithDialogflowIdMap: DialogflowIdMap = intentsWithDialogflowId.reduce(
        (map, intent) => {
            if (intent.dialogflowId) {
                if (!map[intent.dialogflowId]) {
                    map[intent.dialogflowId] = intent;
                } else {
                    console.info(
                        `Found duplicate dialogflowIds (${intent.dialogflowId}) which was on intent ${intent.intentId}`
                    );
                }
            }
            return map;
        },
        {} as DialogflowIdMap
    );

    log().debug(`Mapped the dialogflow intents out ${Object.keys(existingIntentsWithDialogflowIdMap).length}`);

    // Grab all the intent descriptors
    const existingDialogflowIntentDescriptors = await dialogflowService.getIntents(lang);

    // If we got any intent descriptors, update the ones that already exist on dialogflow
    if (Array.isArray(existingDialogflowIntentDescriptors) && existingDialogflowIntentDescriptors.length > 0) {
        log().debug(`Found ${existingDialogflowIntentDescriptors.length} existing intents on Dialogflow`);

        const existingIntents: Intent[] = [];
        // This will be used to find the ones without a match
        const existingIntentsWithoutMatchOnDialogflow = { ...existingIntentsWithDialogflowIdMap };

        const getIntentPromises: Promise<DialogflowIntent>[] = [];

        existingDialogflowIntentDescriptors.forEach(dialogflowIntentDescriptor => {
            // If we have one in the map of existing intents...
            if (existingIntentsWithDialogflowIdMap[dialogflowIntentDescriptor.id]) {
                getIntentPromises.push(dialogflowService.getIntent(dialogflowIntentDescriptor.id, lang));
                // this one has a match, remove it
                delete existingIntentsWithoutMatchOnDialogflow[dialogflowIntentDescriptor.id];

                // or if it is a welcome intent
            } else if (isWelcomeIntent(dialogflowIntentDescriptor)) {
                // Welcome Intents will match by LaunchRequest
                log().debug("Welcome Intent found, checking to see if we have one to associate it with...");
                // We need to merge it with the LaunchRequest
                if (intentsMap[LAUNCH_REQUEST_ID]) {
                    log().debug("    and we have an existing LaunchRequest to merge with");
                    getIntentPromises.push(dialogflowService.getIntent(dialogflowIntentDescriptor.id, lang));
                    const launch = intentsMap[LAUNCH_REQUEST_ID];
                    launch.dialogflowId = dialogflowIntentDescriptor.id;
                    // add it to the map
                    existingIntentsWithDialogflowIdMap[launch.dialogflowId] = launch;
                    // add it to the existing array
                    intentsWithDialogflowId.push(launch);
                    // add it to the list that needs updating
                    intentsToUpdateInStentor.push(launch);
                }
                // or a fallback intent
            } else if (isFallbackIntent(dialogflowIntentDescriptor)) {
                log().debug("Fallback Intent found, checking to see if we have one to associate it with...");
                // We need to merge it with the LaunchRequest
                if (intentsMap[INPUT_UNKNOWN_ID]) {
                    log().debug("    and we have an existing InputUnknown to merge with.");
                    getIntentPromises.push(dialogflowService.getIntent(dialogflowIntentDescriptor.id, lang));
                    const inputUnknown = intentsMap[INPUT_UNKNOWN_ID];
                    inputUnknown.dialogflowId = dialogflowIntentDescriptor.id;
                    // add it to the map
                    existingIntentsWithDialogflowIdMap[inputUnknown.dialogflowId] = inputUnknown;
                    // add it to the existing array
                    intentsWithDialogflowId.push(inputUnknown);
                    // add it to the list that needs updating
                    intentsToUpdateInStentor.push(inputUnknown);
                }
            } else {
                // TODO: Do these need to be added back to STENTOR?
                log().debug(
                    `No match for ${dialogflowIntentDescriptor.name}, this exists on Dialogflow but not in stentor`
                );
            }
        });

        const existingDialogflowIntents = await Promise.all(getIntentPromises);

        existingDialogflowIntents.forEach(dialogflowFullIntent => {
            const translatedIntent = new TranslateDialogflowIntent().translate(dialogflowFullIntent);
            const existingStentorIntent = existingIntentsWithDialogflowIdMap[translatedIntent.dialogflowId];
            const mergedIntent = mergeIntents(existingStentorIntent, translatedIntent);
            existingIntents.push(mergedIntent);
        });

        log().debug(`Updating ${existingIntents.length} intents`);
        // Push the existing
        const updatePromises: Promise<string>[] = existingIntents.map(intent => {
            return dialogflowService.putIntent(intent, lang);
        });

        let updateResults: string[] = [];
        try {
            updateResults = await Promise.all(updatePromises);
        } catch (e) {
            console.error("Error updating intents in Dialogflow.");
            throw e;
        }

        log().debug(`Updated ${updateResults.length} intents`);

        log().debug(
            `${Object.keys(existingIntentsWithoutMatchOnDialogflow).length
            } did not have a match on dialogflow, adding them back to the need to be added list`
        );
        // Now, go through the ones without a match on dialogflow, delete the old dialogflowId
        // and them to the list of intents that need to be added new to Dialogflow
        Object.keys(existingIntentsWithoutMatchOnDialogflow).forEach(dialogflowId => {
            const intent = existingIntentsWithoutMatchOnDialogflow[dialogflowId];
            delete intent.dialogflowId;
            intentsToAddToDialogflow.push(intent);
        });
    }

    // Find the ones we need to add to dialogflow
    const intentsWithoutDialogflowId = intents.filter(intent => {
        const hasDialogflowId = !!intent.dialogflowId;
        const hasUtterancePatterns = Array.isArray(intent.utterancePatterns) && intent.utterancePatterns.length > 0;
        // They need to NOT HAVE a dialogflowId and they need to HAVE utterancePatterns
        return !hasDialogflowId && hasUtterancePatterns;
    });

    intentsToAddToDialogflow = intentsToAddToDialogflow.concat(intentsWithoutDialogflowId);

    // Create the new ones
    log().debug(`Creating ${intentsToAddToDialogflow.length} intents`);

    const createIntentsPromises: Promise<Intent>[] = [];
    intentsToAddToDialogflow.forEach(intent => {
        createIntentsPromises.push(dialogflowService.createIntent(intent, lang));
    });

    const createIntentsResults = await Promise.all(createIntentsPromises);
    log().debug(`Created ${createIntentsResults.length} intents`);

    const client = getXAPPClient(token, appId);
    const updateExistingPromises: Promise<Intent>[] = [];
    const updateList = createIntentsResults.concat(intentsToUpdateInStentor);
    updateList.forEach(intent => {
        updateExistingPromises.push(client.updateIntent(intent));
    });

    log().debug(`Updating ${updateExistingPromises.length} in stentor with dialogflow Ids`);
    const updateResults = await Promise.all(updateExistingPromises);
    log().debug(`Updated ${updateResults.length} intents with new dialogflow Ids`);
}
