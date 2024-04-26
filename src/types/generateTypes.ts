/*! Copyright (c) 2022, XAPP AI*/
import { existsSync, writeFileSync } from "fs";
import { resolve } from "path";

import { isIntent } from "stentor-guards";
import { log } from "stentor-logger";
import { existsAndNotEmpty } from "stentor-utils";

import { getStentorApp } from "../getStentorApp.js";
import { intentToTypes } from "./utils/intentToTypes.js";
import { entityToTypes } from "./utils/entityToTypes.js";

export interface GenerateTypesOptions {
    header?: string;
    file?: string;
    max?: string;
}

export async function generateTypes(output: string, appId: string = undefined, options: GenerateTypesOptions): Promise<void> {

    const { app, intents, handlers, entities } = await getStentorApp(appId);

    // Resolve the path
    const path = resolve(output);

    if (!existsSync(path)) {
        throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
    }

    // Find the handlers that have utterances, add them
    if (existsAndNotEmpty(handlers)) {
        handlers.forEach((handler) => {
            if (isIntent(handler)) {
                const found = intents.find((intent) => {
                    return intent.intentId === handler.intentId;
                })

                if (!found && handler.intentId !== "LaunchRequest" && handler.intentId !== "InputUnknown") {
                    intents.push(handler);
                }
            }
        })
    }

    const requestsPath = resolve(path, options?.file || 'studio.ts');

    log().info(`Exporting types for ${app.name} to ${requestsPath}`);

    let requests = "";

    if (options && options.header) {
        requests += `${options.header}\n`;
    }
    const HEADER = `/* This is a generated file */`;
    const IMPORTS = `import { IntentRequest, Request, RequestSlot, RequestSlotMap } from "stentor";`;

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

    writeFileSync(requestsPath, requests);
}