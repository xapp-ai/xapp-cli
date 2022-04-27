/*! Copyright (c) 2022, XAPP AI*/
import {
    TranslateDialogflowV2Intent,
    TranslateDialogflowV2EntityType
} from "@xapp/stentor-dialogflow";
import { DialogflowV2Service } from "@xapp/stentor-service-dialogflow";
import { log } from "stentor-logger";
import { getGoogleCredentials } from "../getGoogleCredentials";
import { getAppIntentEntities } from "../getAppIntentEntities";

import { getXAPPClient } from "../getXAPPClient";
import { getUserToken } from "../getUserToken";

export async function pullFromDialogflowV2(
    credentialsPath: string,
    options?: {
        appId?: string;
        lang?: string;
    }
): Promise<void> {
    log().warn('It only imports from Dialogflow and does not setup a link for further development.')

    const { appId } = options;
    const { app } = await getAppIntentEntities(appId);
    const { organizationId } = app;

    log().info(`Pulling ${app.name} from Dialogflow V2`);

    if (!credentialsPath) {
        throw new Error("Credentials are required for DialogflowV2");
    }

    const credentials = getGoogleCredentials(credentialsPath);

    const service = new DialogflowV2Service({
        projectId: credentials.project_id,
        credentials: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            client_email: credentials.client_email,
            // eslint-disable-next-line @typescript-eslint/camelcase
            private_key: credentials.private_key
        }
    });

    const entityTypes = await service.getEntityTypes();

    log().debug(`Retrieved ${entityTypes.length} entities`);

    const intents = await service.getIntents();

    log().debug(`Retrieved ${intents.length} intents`);

    const token = await getUserToken();

    const client = getXAPPClient(token, appId);

    const intentTranslator = new TranslateDialogflowV2Intent({ appId, organizationId });

    const writeIntents = intents.map((intent) => {
        return client.createIntent(appId, intentTranslator.translate(intent));
    });

    const intentResults = await Promise.all(writeIntents);
    log().debug(`Wrote ${intentResults.length} intents`);

    const entityTranslator = new TranslateDialogflowV2EntityType();

    const writeEntities = entityTypes.map((entityType) => {
        return client.createEntity(appId, entityTranslator.translate(entityType));
    });

    const entityResults = await Promise.all(writeEntities);
    log().debug(`Wrote ${entityResults.length} entities`);
}