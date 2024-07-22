/*! Copyright (c) 2023, XAPP AI*/
import { AddHandlerInput, Handler, UpdateHandlerInput } from "../graphql/models";
/**
 * Removes all empty strings, nulls, and undefined(s) from the provided object.
 *
 * It does not modify the original.
 *
 * @param obj
 */
export declare function cleanObj(obj: any): any;
/**
 * @deprecated Use removeKeyStrict insted
 * Removes all instances of the key from the object.
 *
 * It does not modify the original
 *
 * @param obj
 * @param key
 */
export declare function removeKey<T extends object>(obj: T, key: string): T;
export declare function removeKeyStrict<T extends object, TKey extends keyof T>(obj: T, key: TKey): Omit<T, TKey>;
export type CleanGQL<T> = T extends null ? null : T extends undefined ? null : T extends Date ? Date : T extends Array<infer R> ? CleanGQL<R>[] : T extends object ? {
    [key in keyof Omit<T, "__typename">]: CleanGQL<T[key]>;
} : T;
export declare function prepareDataGQL<T>(obj: T): CleanGQL<T>;
export declare function cleanForUpdateHandler(handler: Handler | UpdateHandlerInput): UpdateHandlerInput;
export declare function cleanForAddHandler(handler: Handler | AddHandlerInput): AddHandlerInput;
