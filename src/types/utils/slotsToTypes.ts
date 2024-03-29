/*! Copyright (c) 2022, XAPP AI*/
import { Slot } from "stentor-models";
import { existsAndNotEmpty } from "stentor-utils";


const FS = "    ";

export function slotsToTypes(slots: Slot[], name: string, availableEntities: { [type: string]: string }): string {

    let slotType = `export interface ${name} extends RequestSlotMap {\n`;

    if (existsAndNotEmpty(slots)) {
        slots.forEach((slot) => {

            const slotName = slot.name;

            let type: string;

            switch (slot.type) {
                default:
                    // Try to grab it out of the map
                    type = availableEntities[slot.type] || "string";
            }

            slotType += `${FS}${slotName}?: RequestSlot<${type}>; \n`;
        });
    }

    // close it off
    slotType += `} `;

    return slotType;
}