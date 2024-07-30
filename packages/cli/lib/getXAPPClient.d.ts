/*! Copyright (c) 2022, XAPP AI*/
import { XAPPClient } from "@xapp/client";
/**
 * Helper function to get a Studio API client.
 *
 * @param token User auth token.
 * @param appId
 */
export declare function getXAPPClient(token?: string, appId?: string): Promise<XAPPClient>;
