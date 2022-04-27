/*! Copyright (c) 2022, XAPP AI*/
import { writeFileSync } from "fs";
import * as moment from "moment";

import { Config } from "./Config";
import { getConfigPath } from "./getConfigPath";

/**
 * Saves the config file to the home directory.
 *
 * @param config - Config to be saved
 */
export function saveConfig(config: Config): void {
    config.modified = moment().toISOString();
    const configPath = getConfigPath();
    const buffer = Buffer.from(JSON.stringify(config, undefined, 2));
    writeFileSync(configPath, buffer);
}