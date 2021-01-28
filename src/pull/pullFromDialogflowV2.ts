/*! Copyright (c) 2020, XAPPmedia */

import { DialogflowV2Service } from "@xapp/stentor-service-dialogflow";
import { log } from "stentor-logger";
import { getGoogleCredentials } from "../getGoogleCredentials";
import { getAppIntentEntities } from "../getAppIntentEntities";

export async function pullFromDialogflowV2(
    credentialsPath: string,
    options?: {
        appId?: string;
        lang?: string;
    }
): Promise<void> {
    log().warn('Pulling from DialogflowV2 is not fully supported, currently is just prints the number of entities and intents retrieved.');

    const { appId } = options;
    const { app } = await getAppIntentEntities(appId);

    log().info(`Pulling ${app.name} from Dialogflow V2`);

    if (!credentialsPath) {
        throw new Error("Credentials are required for DialogflowV2");
    }

    const credentials = getGoogleCredentials(credentialsPath);

    const service = new DialogflowV2Service({
        projectId: app.actionsOnGoogleId,
        credentials: {
            client_email: credentials.client_email,
            private_key: credentials.private_key
        }
    });

    const entityTypes = await service.getEntityTypes();

    log().debug(`Retrieved ${entityTypes.length} entities`);

    const intents = await service.getIntents();

    log().debug(`Retrieved ${intents.length} intents`);

}