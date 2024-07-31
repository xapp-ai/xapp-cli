"use strict";
/*! Copyright (c) 2022, XAPP AI*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppId = getAppId;
require("dotenv").config(); // process the .env file
/**
 * Helper function to get the appId from the .env file.
 */
function getAppId() {
    const appId = process.env.STUDIO_APP_ID || process.env.STENTOR_APP_ID;
    if (!appId) {
        throw new Error("STUDIO_APP_ID or STENTOR_APP_ID not set in .env file or on environment variables.");
    }
    return appId;
}
//# sourceMappingURL=getAppId.js.map