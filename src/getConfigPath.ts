/*! Copyright (c) 2022, XAPP AI*/
import log from "stentor-logger";
import * as moment from "moment";
import { homedir } from "os";
import { join } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";

import { Config } from "./Config";


function getRootConfigPath(name = ".xapp"): string {
    return join(homedir(), name);
}

/**
 * Returns the path to the config object, it will create the root directory
 * if it doesn't exist.
 *
 * @param name - Path to the config object
 */
export function getConfigPath(name = ".xapp"): string {
    const configPath = join(homedir(), name, "cli_config");

    if (!existsSync(configPath)) {
        // Create one
        log.info("Configuration did not exist, creating initial one....");
        const rootConfigPath = getRootConfigPath();
        mkdirSync(rootConfigPath);

        const created = moment().toISOString();
        const config: Config = {
            profiles: {
                default: {}
            },
            created,
            modified: created
        };

        const buffer = Buffer.from(JSON.stringify(config, undefined, 2));
        writeFileSync(configPath, buffer);
    }

    return configPath;
}
