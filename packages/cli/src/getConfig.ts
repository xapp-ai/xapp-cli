/*! Copyright (c) 2022, XAPP AI*/
import { readFileSync } from "fs";
import { log } from "stentor-logger";

import { Config, ConfigProfile } from "./Config";
import { getConfigPath } from "./getConfigPath";

/**
 * Gets the config.  Will create a new one if one does not exist.
 */
export function getConfig(): Config {

    const configPath = getConfigPath();

    let config: Config;

    try {
        const configData = readFileSync(configPath, "utf-8");
        config = JSON.parse(configData);
    } catch (e) {
        throw Error(`Error reading config from ${configPath}`);
    }

    return config;
}

/**
 * Get the current profile for configuration which OC Studio environment to communicate with.
 * 
 * @returns Current profile used to configure all network calls
 */
export function getConfigProfile(): ConfigProfile | undefined {

    let config: Config;
    try {
        config = getConfig();
    } catch (e) {
        log().info(`Unable to get config from file`);
    }

    if (!config) {
        return undefined;
    }

    return !!config.currentProfile ? config.profiles[config.currentProfile] : config.profiles.default;

}