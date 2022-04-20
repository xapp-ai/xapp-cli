/*! Copyright (c) 2022, XAPP AI*/
import { Slot } from "stentor-models";
import { existsAndNotEmpty } from "stentor-utils";


const FS = "    ";

export function slotsToTypes(slots: Slot[], name: string): string {

    let slotType = `export interface ${name} extends RequestSlotMap {\n`;

    if (existsAndNotEmpty(slots)) {
        slots.forEach((slot) => {

            const slotName = slot.name;

            let type: string;

            switch (slot.type) {
                default:
                    type = "string";
            }

            slotType += `${FS}${slotName}?: {\n`;
            slotType += `${FS}${FS}name: "${slotName}";\n`;
            slotType += `${FS}${FS}value: ${type};\n`;
            slotType += `${FS}};\n`;
        });
    }

    // close it off
    slotType += `}`;

    return slotType;
}