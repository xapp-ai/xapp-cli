/*! Copyright (c) 2022, XAPP AI*/
import { Intent } from "stentor-models";
export declare function intentToTypes(intent: Intent, availableEntities: {
    [type: string]: string;
}): string;
