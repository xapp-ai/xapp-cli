"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigPath = getConfigPath;
/*! Copyright (c) 2022, XAPP AI*/
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const moment_1 = __importDefault(require("moment"));
const os_1 = require("os");
const path_1 = require("path");
const fs_1 = require("fs");
function getRootConfigPath(name = ".xapp") {
    return (0, path_1.join)((0, os_1.homedir)(), name);
}
/**
 * Returns the path to the config object, it will create the root directory
 * if it doesn't exist.
 *
 * @param name - Path to the config object
 */
function getConfigPath(name = ".xapp") {
    const configPath = (0, path_1.join)((0, os_1.homedir)(), name, "cli_config");
    if (!(0, fs_1.existsSync)(configPath)) {
        // Create one
        stentor_logger_1.default.info("Configuration did not exist, creating initial one....");
        const rootConfigPath = getRootConfigPath();
        (0, fs_1.mkdirSync)(rootConfigPath);
        const created = (0, moment_1.default)().toISOString();
        const config = {
            profiles: {
                default: {}
            },
            created,
            modified: created
        };
        const buffer = Buffer.from(JSON.stringify(config, undefined, 2));
        (0, fs_1.writeFileSync)(configPath, buffer);
    }
    return configPath;
}
//# sourceMappingURL=getConfigPath.js.map