/*! Copyright (c) 2022, XAPP AI*/

import { log } from "stentor-logger";
import { existsSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getStentorApp } from "../getStentorApp";

import { existsAndNotEmpty } from "stentor-utils";
import { intentToTypes } from "./utils/intentToTypes";
import { entityToTypes } from "./utils/entityToTypes";

export interface GenerateTypesOptions {
    header?: string;
    file?: string;
    max?: string;
}

export async function generateTypes(output: string, appId: string = undefined, options: GenerateTypesOptions): Promise<void> {

    const { app, intents, entities } = await getStentorApp(appId);

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
    const IMPORTS = `import { IntentRequest, Request, RequestSlotMap } from "stentor";`;

    requests += `${HEADER}\n${IMPORTS}\n\n`;

    // Entities first
    const availableEntities: { [type: string]: string } = {};
    if (existsAndNotEmpty(entities)) {
        entities.forEach((entity) => {
            const max = Number.isNaN(Number(options.max)) ? undefined : Number(options.max);
            const entityType = entityToTypes(entity, max);
            if (entityType) {
                requests += `${entityType}\n\n`;
                // add is as available for use later
                availableEntities[entity.entityId] = `${entity.entityId}_VALUES`;
            }
        })
    }

    // Go through the intents and generate intents
    if (existsAndNotEmpty(intents)) {
        intents.forEach((intent) => {
            // convert the intent
            requests += intentToTypes(intent, availableEntities);
            requests += `\n\n`;
        });
    }

    // print it to a file
    const requestsPath = resolve(path, options?.file || 'studio.ts');
    writeFileSync(requestsPath, requests);

}