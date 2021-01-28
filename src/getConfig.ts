/*! Copyright (c) 2020, XAPPmedia */
import { readFileSync } from "fs";

import { Config } from "./Config";
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