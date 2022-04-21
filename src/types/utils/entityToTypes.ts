/*! Copyright (c) 2022, XAPP AI*/
import { Entity } from "stentor-models";

export function entityToTypes(entity: Entity, max = 20): string {
    let entityType = "";

    // Only add if we have a manageable number of values
    if (entity.type !== "REGEX" && entity.values.length <= max) {
        const name = `${entity.entityId}_VALUES`;
        entityType += `export type ${name} = `;
        entity.values.forEach((value, index) => {
            if (index === 0) {
                entityType += `"${value.name}"`;
            } else {
                entityType += ` | "${value.name}"`
            }
        });

        entityType += `;`;
    }

    return entityType;
}