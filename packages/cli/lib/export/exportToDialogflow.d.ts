/*! Copyright (c) 2022, XAPP AI*/
import { ExportOptions } from "@xapp/client";
/**
 * Create a Dialogflow zip from the intents and the app
 *
 * @param organizationId
 * @param appId
 * @param tableVersion
 * @param newSkill
 * @returns {Promise<TResult>}
 */
export declare function exportToDialogflow(output: string, options: ExportOptions): Promise<void>;
