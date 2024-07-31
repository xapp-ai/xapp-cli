"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityToTypes = entityToTypes;
function entityToTypes(entity, max = 20) {
    let entityType = "";
    // Only add if we have a manageable number of values
    if (entity.type !== "REGEX" && entity.values.length <= max) {
        const name = `${entity.entityId}_VALUES`;
        entityType += `export type ${name} = `;
        entity.values.forEach((value, index) => {
            if (index === 0) {
                entityType += `"${value.name}"`;
            }
            else {
                entityType += ` | "${value.name}"`;
            }
        });
        entityType += `;`;
    }
    return entityType;
}
//# sourceMappingURL=entityToTypes.js.map