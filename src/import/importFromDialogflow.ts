/*! Copyright (c) 2021, XAPPmedia */
import { DialogflowV2Service } from "@xapp/stentor-service-dialogflow";
import log from "stentor-logger";

import { getGoogleCredentials } from "../getGoogleCredentials";
import { getUserToken } from "../getUserToken";
import { getGraphQLClient } from "../graphql/getGraphQLClient";
import { AddAppMutation, AddEntityMutation, AddIntentMutation } from "../graphql/mutations";

export async function importFromDialogflow(credentialsPath: string, options: { organizationId: string }): Promise<void> {

    const { organizationId } = options;

    if (!organizationId) {
        throw new Error("Organization ID is required to import the agent from Dialogflow");
    }

    if (!credentialsPath) {
        throw new Error("Credentials are required for DialogflowV2");
    }

    const credentials = getGoogleCredentials(credentialsPath);

    const service = new DialogflowV2Service({
        projectId: credentials.project_id,
        credentials: {
            client_email: credentials.client_email,
            private_key: credentials.private_key
        }
    });

    const { app, intents, entities } = await service.import();

    log.info(`Retrieved ${app.name} with ${intents.length} intents & ${entities.length} entities.`);

    log.info(`Creating app on organization with ID ${organizationId}`);

    const token = await getUserToken();

    const client = getGraphQLClient(token);

    const appReturn = await client.mutation(AddAppMutation, {
        app: {
            organizationId,
            name: app.name,
            description: app.description
        }
    }).toPromise();

    const newApp = appReturn.data.addApp as { appId: string, name: string, organizationId: string };
    const { appId } = newApp;
    log.info(`App ${newApp.name} created with id ${newApp.appId}`);

    const addIntentPromises = intents.map((rawIntent) => {
        const intent = { ...rawIntent };
        delete intent.dialogflowId;
        return client.mutation(AddIntentMutation, {
            appId,
            intent
        }).toPromise();
    });

    const intentReturns = await Promise.all(addIntentPromises);

    log.info(`${intentReturns.length} intents added`);

    const addEntityPromises = entities.map((rawEntity) => {
        const entity = { ...rawEntity };
        delete entity.dialogflowId;
        return client.mutation(AddEntityMutation, {
            entity: {
                appId,
                displayName: entity.displayName,
                type: entity.type,
                values: entity.values
            }
        }).toPromise();
    });

    const entityReturns = await Promise.all(addEntityPromises);

    log.info(`${entityReturns.length} entities added`);

    // TODO: ADD THE CHANNEL!!!

}