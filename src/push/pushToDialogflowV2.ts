/*! Copyright (c) 2022, XAPP AI*/

import { log } from "stentor-logger";
import { DialogflowV2Service } from "@xapp/stentor-service-dialogflow";

import { getAppIntentEntities } from "../getAppIntentEntities.js";
import { getGoogleCredentials } from "../getGoogleCredentials.js";

export async function pushToDialogflowV2(
    credentialsPath: string,
    options?: {
        appId?: string;
        id?: string;
        lang?: string;
        beta?: boolean;
    }
): Promise<void> {
    const { appId, beta } = options;
    const { app, intents, entities } = await getAppIntentEntities(appId);
    log().info(`Pushing ${app.name} with ${intents.length} intents & ${entities.length} entities.`);

    const actionsOnGoogleId: string = options.id;

    if (!actionsOnGoogleId) {
        throw new Error("Actions on Google ID required for pushing to Dialogflow V2");
    }

    if (!credentialsPath) {
        throw new Error("Credentials are required for DialogflowV2");
    }

    const credentials = getGoogleCredentials(credentialsPath);

    const service = new DialogflowV2Service({
        projectId: actionsOnGoogleId,
        useBeta: beta,
        credentials: {
            client_email: credentials.client_email,
            private_key: credentials.private_key
        }
    });


    try {
        const result = await service.updateModel(intents, entities);
        log().info(result);
    } catch (e) {
        log().error(`Error updating model`);
        log().error(e);
    }
}
