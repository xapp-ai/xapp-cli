import { XAPPClient } from "./XAPPClient";
/**
 * Helper function to get a Studio API client.
 *
 * @param token User auth token.
 * @param appId
 */
export declare function getXAPPClient(token?: string, appId?: string): Promise<XAPPClient>;
