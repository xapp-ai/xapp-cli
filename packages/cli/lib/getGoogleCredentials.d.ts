/*! Copyright (c) 2022, XAPP AI*/
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
export declare function getGoogleCredentials(credentialsPath: string): GoogleCredentials;
