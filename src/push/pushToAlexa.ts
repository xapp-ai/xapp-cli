/*! Copyright (c) 2019, XAPPmedia */
import log from "stentor-logger";
import { hasAudioPlayerHandlerProps, OVAIApp } from "@xapp/ovai-lib";
import { AlexaSkillManagementService } from "@xapp/stentor-service-smapi";
import { getAppIntentEntities } from "../getAppIntentEntities";
import { getOVAIClient } from "../getOVAIClient";
import { getSMAPITokenAndVendorId } from "../getSMAPITokenAndVendor";

// First read all the intents from the DB
// Second, read the app info from the DB
// Construct the Skill.json info
// Construct the AlexaModel info
// Submit!

export async function pushToAlexa(options?: { appId?: string }): Promise<void> {
    const { appId } = options;
    const { app, intents, entities, token } = await getAppIntentEntities(appId);

    const organizationId: string = app.organizationId;

    const playsMedia = hasAudioPlayerHandlerProps(intents);

    log.info(`Found ${app.name} with ${intents.length} intents and ${entities.length} entities.`);

    const credentials = getSMAPITokenAndVendorId();
    const askManagement = new AlexaSkillManagementService({ token: credentials.token });
    const invocationName = typeof app.invocationName === "string" ? app.invocationName : app.invocationName[0];

    // #1 See if the skill ID exists
    if (!app.alexaSkillId) {
        // if not, create it.
        log.info("Need to first create the skill within AMAZON");
        const skillResponse = await askManagement.createSkill(credentials.vendorId, { app, intents }, { playsMedia });
        // Augment with the organization ID
        const appToUpdate: OVAIApp = { ...skillResponse.app, organizationId };
        log.info("Skill created " + skillResponse.app.alexaSkillId);
        const client = getOVAIClient(token, appId);
        await client.updateApp(appToUpdate);
        log.info("App updated on OVAI");
    }
    // # 3 Update the skill within amazon
    log.info("Updating existing skill at " + app.alexaSkillId);
    try {
        await askManagement.updateSkill(app.alexaSkillId, { app, intents }, { playsMedia });
    } catch (err) {
        log.error("Error updating skill");
        log.error(err.stack);
    }

    // # 4 Build the interaction model
    log.info("Skill updated... updating model...");
    try {
        await askManagement.updateInteractionModel(
            app.alexaSkillId,
            invocationName,
            intents,
            entities,
            app.defaultLocale
        );
    } catch (err) {
        log.error("Error updating model");
        log.error(err.stack);
    }
}
