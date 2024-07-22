"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObj = cleanObj;
exports.removeKey = removeKey;
exports.removeKeyStrict = removeKeyStrict;
exports.prepareDataGQL = prepareDataGQL;
exports.cleanForUpdateHandler = cleanForUpdateHandler;
exports.cleanForAddHandler = cleanForAddHandler;
/**
 * Removes all empty strings, nulls, and undefined(s) from the provided object.
 *
 * It does not modify the original.
 *
 * @param obj
 */
function cleanObj(obj) {
    const cleanMe = Object.assign({}, obj);
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
            }
            else if (!item) {
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
function removeKey(obj, key) {
    return JSON.parse(JSON.stringify(obj, (k, v) => (k === key ? undefined : v)));
}
function removeKeyStrict(obj, key) {
    return JSON.parse(JSON.stringify(obj, (k, v) => (k === key ? undefined : v)));
}
function prepareDataGQL(obj) {
    if (obj) {
        if (Array.isArray(obj)) {
            return obj.map(prepareDataGQL);
        }
        if (typeof obj === "object") {
            const res = {};
            for (const key in obj) {
                if (key === "__typename") {
                    continue;
                }
                if (obj.hasOwnProperty(key)) {
                    res[key] = prepareDataGQL(obj[key]);
                }
            }
            return res;
        }
    }
    if (obj === undefined) {
        // tslint:disable-next-line:no-null-keyword
        return null;
    }
    return obj;
}
function isHandler(handler) {
    return handler.organizationId !== undefined;
}
function cleanForUpdateHandler(handler) {
    const cleaned = prepareDataGQL(handler);
    if (isHandler(cleaned)) {
        delete cleaned.organizationId;
        delete cleaned.appId;
        delete cleaned.validation;
        delete cleaned.dialogflowId;
        delete cleaned.updatedAt;
        delete cleaned.createdAt;
        delete cleaned.intentId;
    }
    return cleaned;
}
function cleanForAddHandler(handler) {
    const cleaned = prepareDataGQL(handler);
    if (isHandler(cleaned)) {
        delete cleaned.organizationId;
        delete cleaned.appId;
        delete cleaned.validation;
        delete cleaned.dialogflowId;
        delete cleaned.updatedAt;
        delete cleaned.createdAt;
        //  delete cleaned.intentId;
    }
    return cleaned;
}
//# sourceMappingURL=clean.js.map