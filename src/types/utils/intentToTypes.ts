/*! Copyright (c) 2022, XAPP AI*/
import { Intent } from "stentor-models";
import { existsAndNotEmpty } from "stentor-utils";
import { slotsToTypes } from "./slotsToTypes";

const FS = "    ";

export function intentToTypes(intent: Intent): string {

    const name = `${intent.intentId}IntentRequest`;

    let intentType = "";

    let slotMapType: string;

    if (existsAndNotEmpty(intent.slots)) {
        slotMapType = `${name}SlotMap`;
        const slotTypes = slotsToTypes(intent.slots, slotMapType);
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

    return intentType;

}