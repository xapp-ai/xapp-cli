"use strict";
/*! Copyright (c) 2022, XAPP AI*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleCredentials = getGoogleCredentials;
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * Helper function to get the Google Credentials from specified path.
 *
 * @param credentialsPath
 */
function getGoogleCredentials(credentialsPath) {
    if (typeof credentialsPath !== "string") {
        throw new TypeError("Path to Service Account credentials was undefined");
    }
    const path = (0, path_1.resolve)(process.cwd(), credentialsPath);
    const credentialsData = (0, fs_1.readFileSync)(path, "utf8");
    const credentials = JSON.parse(credentialsData);
    return credentials;
}
//# sourceMappingURL=getGoogleCredentials.js.map