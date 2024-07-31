import { Config, ConfigProfile } from "./Config";
/**
 * Gets the config.  Will create a new one if one does not exist.
 */
export declare function getConfig(): Config;
/**
 * Get the current profile for configuration which OC Studio environment to communicate with.
 *
 * @returns Current profile used to configure all network calls
 */
export declare function getConfigProfile(): ConfigProfile | undefined;
