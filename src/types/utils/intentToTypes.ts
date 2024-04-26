/*! Copyright (c) 2022, XAPP AI*/
import { Intent } from "stentor-models";
import { existsAndNotEmpty } from "stentor-utils";

import { slotsToTypes } from "./slotsToTypes.js";

const FS = "    ";

export function intentToTypes(intent: Intent, availableEntities: { [type: string]: string }): string {

    const name = `${intent.intentId}IntentRequest`;

    let intentType = "";

    let slotMapType: string;

    if (existsAndNotEmpty(intent.slots)) {
        slotMapType = `${name}SlotMap`;
        const slotTypes = slotsToTypes(intent.slots, slotMapType, availableEntities);
        intentType += slotTypes
        intentType += `\n\n`;
    }

    intentType += `export interface ${name} extends IntentRequest {\n`;
    intentType += `${FS}intentId: "${intent.intentId}";\n`

    if (slotMapType) {
        intentType += `${FS}slots: ${slotMapType};\n`;
    }

    // close it off
    intentType += `}`;

    // Add the guard
    intentType += `\n\n`;

    intentType += `export function is${name}(request: Request): request is ${name} {\n`;
    intentType += `${FS}return !!request && (request as IntentRequest).intentId === "${intent.intentId}";\n`;
    intentType += `}`;

    return intentType;

}