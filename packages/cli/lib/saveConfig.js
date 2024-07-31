"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveConfig = saveConfig;
/*! Copyright (c) 2022, XAPP AI*/
const fs_1 = require("fs");
const moment_1 = __importDefault(require("moment"));
const getConfigPath_1 = require("./getConfigPath");
/**
 * Saves the config file to the home directory.
 *
 * @param config - Config to be saved
 */
function saveConfig(config) {
    config.modified = (0, moment_1.default)().toISOString();
    const configPath = (0, getConfigPath_1.getConfigPath)();
    const buffer = Buffer.from(JSON.stringify(config, undefined, 2));
    (0, fs_1.writeFileSync)(configPath, buffer);
}
//# sourceMappingURL=saveConfig.js.map