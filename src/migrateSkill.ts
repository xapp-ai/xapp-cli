/*! Copyright (c) 2019, XAPPmedia */
import { TranslateAlexaSkillManifest } from "@xapp/stentor-alexa";
import { App } from "stentor-models";
import { AlexaSkillManagementService } from "@xapp/stentor-service-smapi";
import { getOVAIClient } from "./getOVAIClient";
import { getSMAPITokenAndVendorId } from "./getSMAPITokenAndVendor";
import { getUserToken } from "./getUserToken";
import { OVAIApp } from "@xapp/ovai-lib";

export async function migrateSkill(alexaId: string, organizationId: string, appId: string): Promise<App> {
    // First request the skill from Amazon
    const credentials = getSMAPITokenAndVendorId();
    const askManagement = new AlexaSkillManagementService({ token: credentials.token });
    const skill = await askManagement.getSkill(alexaId);
    // Then, translate it to our skill
    const translator = new TranslateAlexaSkillManifest({ appId, alexaSkillId: alexaId });
    const app = translator.translate(skill);
    const ovaiApp: OVAIApp = { ...app, organizationId };
    // And upload it.
    const token = await getUserToken();
    const client = getOVAIClient(token);
    return client.createApp(ovaiApp);
}
