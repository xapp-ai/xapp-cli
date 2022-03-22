/*! Copyright (c) 2022, XAPP AI*/

import { readFileSync } from "fs";
import { resolve } from "path";

export interface GoogleCredentials {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
}

/**
 * Helper function to get the Google Credentials from specified path.
 *
 * @param credentialsPath
 */
export function getGoogleCredentials(credentialsPath: string): GoogleCredentials {
    if (typeof credentialsPath !== "string") {
        throw new TypeError("Path to Service Account credentials was undefined");
    }

    const path = resolve(process.cwd(), credentialsPath);
    const credentialsData = readFileSync(path, "utf8");
    const credentials: GoogleCredentials = JSON.parse(credentialsData);

    return credentials;
}
