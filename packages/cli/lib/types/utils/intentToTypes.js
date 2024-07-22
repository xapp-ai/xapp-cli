"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intentToTypes = intentToTypes;
const stentor_utils_1 = require("stentor-utils");
const slotsToTypes_1 = require("./slotsToTypes");
const FS = "    ";
function intentToTypes(intent, availableEntities) {
    const name = `${intent.intentId}IntentRequest`;
    let intentType = "";
    let slotMapType;
    if ((0, stentor_utils_1.existsAndNotEmpty)(intent.slots)) {
        slotMapType = `${name}SlotMap`;
        const slotTypes = (0, slotsToTypes_1.slotsToTypes)(intent.slots, slotMapType, availableEntities);
        intentType += slotTypes;
        intentType += `\n\n`;
    }
    intentType += `export interface ${name} extends IntentRequest {\n`;
    intentType += `${FS}intentId: "${intent.intentId}";\n`;
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
//# sourceMappingURL=intentToTypes.js.map