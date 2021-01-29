/*! Copyright (c) 2019, XAPPmedia */
import { log } from "stentor-logger";
import { TranslateToActionsOnGoogleActionPackage } from "@xapp/stentor-actions-on-google";
import { generateEndpointMap, getEndpointForPlatform } from "@xapp/stentor-app";
import { filterOutIntents } from "stentor-utils";
import { existsSync, mkdirSync, unlinkSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getAppIntentEntities } from "../getAppIntentEntities";

export async function pushToActionsOnGoogle(targetDirectory: string, appId?: string): Promise<void> {
    const { app, intents } = await getAppIntentEntities(appId);

    if (!app.actionsOnGoogleId) {
        console.info(`WARNING, you need a project id set on the app`);
    }

    console.info(
        `An API to push to Actions On Google does not exist yet, instead we will output the package to ${targetDirectory}`
    );

    // Get the endpoint for AoG
    // first check on the app, otherwise create it

    const path = resolve(targetDirectory);

    if (!existsSync(path)) {
        throw new Error(
            `Path ${targetDirectory} does not exist.  Please provide an existing path to create the export within.`
        );
    }

    // create the directory for the app-id
    const exportPath = resolve(path, app.appId);
    if (!existsSync(exportPath)) {
        console.info("Creating export directory..");
        mkdirSync(exportPath);
    }

    const packagePath = resolve(exportPath, `action.json`);
    const instructionsPath = resolve(exportPath, `readme.md`);

    // clean out the instructions and action package
    if (existsSync(packagePath)) {
        unlinkSync(packagePath);
    }
    if (existsSync(instructionsPath)) {
        unlinkSync(instructionsPath);
    }

    // Get the endpoint
    let endpoint = getEndpointForPlatform(app, "actions-on-google");
    if (!endpoint) {
        console.warn("Need to generate endpoint...");
        const map = generateEndpointMap(app);
        endpoint = map["actions-on-google"].url;
    }

    // Create the action package
    const handlerTranslator = new TranslateToActionsOnGoogleActionPackage(endpoint);
    const handlers = filterOutIntents(intents);
    const actionPackage = handlerTranslator.translate(handlers);

    // save the actions in the folder
    // save the app by appId
    writeFileSync(packagePath, JSON.stringify(actionPackage, undefined, 2));

    // Pull out necessary config values
    // like the dialogflow client token
    const dialogflowClientToken: string = app.dialogflowClientToken || "9c34733274c743b18d9860995d22a1ba";

    // generate the instructions
    const instructions: string =
        "# Instructions\n\n" +
        "To upload:\n" +
        "\n```\n" +
        `cd ${targetDirectory}\n` +
        `gactions update --action_package ${app.appId + "/action.json"} --project ${app.actionsOnGoogleId}` +
        "\n```\n" +
        "Copy and paste the data streams:\n" +
        "\n```" +
        `
{
    "appId": "${app.appId}",
    "dialogflow": {
        "authToken": "${dialogflowClientToken}",
        "type": "dialogflow",
        "url": "https://api.dialogflow.com/v1/query"
    }
}
` +
        "```\n";
    log().debug(`Writing instructions to ${instructionsPath}`);
    writeFileSync(instructionsPath, instructions);
}
