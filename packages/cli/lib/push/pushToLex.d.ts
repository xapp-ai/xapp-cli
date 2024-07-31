/*! Copyright (c) 2022, XAPP AI*/
/**
 * Push to LEX
 *
 * Note: This currently uses the IMPORT method, not individual updates.  It also will overwrite any changes
 * that were made on the LEX console.
 *
 * @param options
 */
export declare function pushToLex(options?: {
    appId?: string;
    lang?: string;
    awsRole?: string;
    output?: string;
}): Promise<void>;
