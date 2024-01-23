/*! Copyright (c) 2023, XAPP AI*/
import { Handler, UpdateHandlerInput } from "../graphql/models"

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

export type CleanGQL<T> =
    T extends null ? null :
    T extends undefined ? null :
    T extends Date ? Date :
    T extends Array<infer R> ? CleanGQL<R>[] :
    T extends object ? {
        [key in keyof Omit<T, "__typename">]: CleanGQL<T[key]>
    } :
    T;

export function prepareDataGQL<T>(obj: T): CleanGQL<T> {
    if (obj) {
        if (Array.isArray(obj)) {
            return obj.map(prepareDataGQL) as any as CleanGQL<T>;
        }
        if (typeof obj === "object") {
            const res: T = {} as T;
            for (const key in obj) {
                if (key === "__typename") {
                    continue;
                }
                if (obj.hasOwnProperty(key)) {
                    res[key] = prepareDataGQL(obj[key]) as any;
                }
            }
            return res as any as CleanGQL<T>;
        }
    }

    if (obj === undefined) {
        // tslint:disable-next-line:no-null-keyword
        return null;
    }

    return obj as any as CleanGQL<T>;
}

function isHandler(handler: Handler | UpdateHandlerInput): handler is Handler {
    return (handler as Handler).organizationId !== undefined;
}

export function cleanHandler(handler: Handler | UpdateHandlerInput): UpdateHandlerInput {
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