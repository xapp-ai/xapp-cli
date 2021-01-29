/*! Copyright (c) 2019, XAPPmedia */
import log from "stentor-logger";
import { existsSync, readFileSync, writeFileSync } from "fs";
import * as moment from "moment";
import { homedir } from "os";
import { join } from "path";
import { Config } from "./Config";

/**
 * Log the user out.
 */
export async function logout(): Promise<void> {
    const configPath = join(homedir(), ".xapp", "cli_config");

    if (existsSync(configPath)) {
        let config: Config;

        const configData = readFileSync(configPath, "UTF-8");
        try {
            config = JSON.parse(configData);
        } catch (e) {
            throw Error(`Error reading config from ${configPath}`);
        }

        // Just using the default right now.
        delete config.profiles.default.token;
        config.modified = moment().toISOString();

        const buffer = Buffer.from(JSON.stringify(config, undefined, 2));
        writeFileSync(configPath, buffer);
        log.info("You are now logged out.");
    } else {
        log.info("I didn't need to log you out, I couldn't find a config file with your credentials.");
    }
}
