"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotsToTypes = slotsToTypes;
const stentor_utils_1 = require("stentor-utils");
const FS = "    ";
function slotsToTypes(slots, name, availableEntities) {
    let slotType = `export interface ${name} extends RequestSlotMap {\n`;
    if ((0, stentor_utils_1.existsAndNotEmpty)(slots)) {
        slots.forEach((slot) => {
            const slotName = slot.name;
            let type;
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
//# sourceMappingURL=slotsToTypes.js.map