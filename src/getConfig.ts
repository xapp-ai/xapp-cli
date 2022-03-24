/*! Copyright (c) 2022, XAPP AI*/
/*! Copyright (c) 2020, XAPPmedia */
import { readFileSync } from "fs";

import { Config, ConfigProfile } from "./Config";
import { getConfigPath } from "./getConfigPath";

/**
 * Gets the config.  Will create a new one if one does not exist.
 */
export function getConfig(): Config {

    const configPath = getConfigPath();

    let config: Config;

    const configData = readFileSync(configPath, "UTF-8");
    try {
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
export function getConfigProfile(): ConfigProfile {
    const config = getConfig();

    return !!config.currentProfile ? config.profiles[config.currentProfile] : config.profiles.default;

}