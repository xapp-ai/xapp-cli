/*! Copyright (c) 2019, XAPPmedia */
import log from "stentor-logger";
import { getConfig } from "./getConfig";
import { saveConfig } from "./saveConfig";

/**
 * Log the user out.
 */
export async function logout(): Promise<void> {


    const config = getConfig();

    if (!config) {
        log.info("I didn't need to log you out, I couldn't find a config file with your credentials.");
    }

    if (config.currentProfile) {
        delete config.profiles[config.currentProfile].token;
    } else {
        delete config.profiles.default.token;
    }

    saveConfig(config);

    log.info("You are now logged out.");
}
