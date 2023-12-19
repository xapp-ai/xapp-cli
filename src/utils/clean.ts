/*! Copyright (c) 2023, XAPP AI*/

/**
 * Removes all empty strings, nulls, and undefined(s) from the provided object.
 *
 * It does not modify the original.
 *
 * @param obj
 */
export function cleanObj(obj: any): any {
    const cleanMe = { ...obj };

    for (const key in cleanMe) {
        if (cleanMe.hasOwnProperty(key)) {
            const item = cleanMe[key];
            const type = typeof item;
            if (type === "string") {
                // if it is an empty string,
                // delete it
                if (item === "") {
                    delete cleanMe[key];
                }
            } else if (!item) {
                // of it if is undefined,
                // delete it
                delete cleanMe[key];
            }
        }
    }

    return cleanMe;
}

/**
 * @deprecated Use removeKeyStrict insted
 * Removes all instances of the key from the object.
 *
 * It does not modify the original
 *
 * @param obj
 * @param key
 */
export function removeKey<T extends object>(obj: T, key: string): T {
    return JSON.parse(JSON.stringify(obj, (k, v) => (k === key ? undefined : v)));
}

export function removeKeyStrict<T extends object, TKey extends keyof T>(obj: T, key: TKey): Omit<T, TKey> {
    return JSON.parse(JSON.stringify(obj, (k, v) => (k === key ? undefined : v)));
}