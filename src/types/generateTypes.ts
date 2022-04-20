/*! Copyright (c) 2022, XAPP AI*/

import { log } from "stentor-logger";
import { existsSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getStentorApp } from "../getStentorApp";

import { existsAndNotEmpty } from "stentor-utils";
import { intentToTypes } from "./utils/intentToTypes";

export interface GenerateTypesOptions {
    header?: string;
}

export async function generateTypes(output: string, appId: string = undefined, options: GenerateTypesOptions): Promise<void> {

    const { app, intents } = await getStentorApp(appId);

    // Resolve the path
    const path = resolve(output);

    if (!existsSync(path)) {
        throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
    }

    log().info(`Exporting types for ${app.name} to ${path}`);

    let requests = "";

    if (options && options.header) {
        requests += `${options.header}\n`;
    }
    const HEADER = `/* This is a generated file */`;
    const IMPORTS = `import { IntentRequest, RequestSlotMap } from "stentor";`;

    requests += `${HEADER}\n${IMPORTS}\n\n`;

    // Go through the intents and generate intents
    if (existsAndNotEmpty(intents)) {
        intents.forEach((intent) => {
            // convert the intent
            requests += intentToTypes(intent);
            requests += `\n\n`;
        });
    }

    // print it to a file
    const requestsPath = resolve(path, 'requests.ts');
    writeFileSync(requestsPath, requests);

}