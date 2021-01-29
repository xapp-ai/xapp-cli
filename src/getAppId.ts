/*! Copyright (c) 2019, XAPPmedia */
require("dotenv").config(); // process the .env file

/**
 * Helper function to get the appId from the .env file.
 */
export function getAppId(): string {
    const appId = process.env.STENTOR_APP_ID;

    if (!appId) {
        throw new Error("STENTOR_APP_ID not set in .env file.");
    }

    return appId;
}
