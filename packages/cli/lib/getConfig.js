"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = getConfig;
exports.getConfigProfile = getConfigProfile;
/*! Copyright (c) 2022, XAPP AI*/
const fs_1 = require("fs");
const stentor_logger_1 = require("stentor-logger");
const getConfigPath_1 = require("./getConfigPath");
/**
 * Gets the config.  Will create a new one if one does not exist.
 */
function getConfig() {
    const configPath = (0, getConfigPath_1.getConfigPath)();
    let config;
    try {
        const configData = (0, fs_1.readFileSync)(configPath, "utf-8");
        config = JSON.parse(configData);
    }
    catch (e) {
        throw Error(`Error reading config from ${configPath}`);
    }
    return config;
}
/**
 * Get the current profile for configuration which OC Studio environment to communicate with.
 *
 * @returns Current profile used to configure all network calls
 */
function getConfigProfile() {
    let config;
    try {
        config = getConfig();
    }
    catch (e) {
        (0, stentor_logger_1.log)().info(`Unable to get config from file`);
    }
    if (!config) {
        return undefined;
    }
    return !!config.currentProfile ? config.profiles[config.currentProfile] : config.profiles.default;
}
//# sourceMappingURL=getConfig.js.map