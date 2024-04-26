/*! Copyright (c) 2022, XAPP AI*/

import { log } from "stentor-logger";
import { hasAudioPlayerHandlerProps } from "@xapp/stentor-handler-media";
import { TranslateToAlexaInteractionModel, TranslateToAlexaSkillManifest } from "@xapp/stentor-alexa";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getStentorApp } from "../getStentorApp.js";
import { ExportOptions } from "../models/options.js";

export async function exportToAlexa(targetDirectory: string, options?: ExportOptions): Promise<void> {
    const { appId } = options;

    // Resolve the path
    const path = resolve(targetDirectory);

    if (!existsSync(path)) {
        throw new Error(
            `Path ${targetDirectory} does not exist.  Please provide an existing path to create the export within.`
        );
    }

    const { app, intents, entities, handlers } = await getStentorApp(appId);

    const exportDirName = `${app.organizationId}-${app.appId}-alexa-${new Date().getTime()}`;
    const exportPath = resolve(path, exportDirName);
    mkdirSync(exportPath);

    log().info(`Exporting ${app.name} for Alexa to ${exportPath}`);
    log().info(`Found ${intents.length} intents, ${entities.length} entities, and ${handlers.length} handlers.`);

    const playsAudio = hasAudioPlayerHandlerProps(intents);
    const alexaSkill = new TranslateToAlexaSkillManifest({ playsMedia: playsAudio }).translate({ app, intents });
    const invocationName = typeof app.invocationName === "string" ? app.invocationName : app.invocationName[0];
    const alexaInteractionModel = new TranslateToAlexaInteractionModel({ invocationName }).translate({
        intents,
        entities
    });

    // Write the files to the directory
    const skillPath = resolve(exportPath, `${app.appId}-${new Date().getTime()}.json`);
    writeFileSync(skillPath, JSON.stringify(alexaSkill, undefined, 2));

    const modelPath = resolve(exportPath, `model-${new Date().getTime()}.json`);
    writeFileSync(modelPath, JSON.stringify(alexaInteractionModel, undefined, 2));
}
