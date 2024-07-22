/*! Copyright (c) 2022, XAPP AI*/

import { TokenResponse } from "./TokenResponse";

export interface ConfigProfile {
    /**
     * Authentication tokens
     */
    token?: TokenResponse;
    /**
     * Base path for API calls
     */
    basePath?: string;
    /**
     * Base path for AUTH
     */
    authPath?: string;
    /**
     * The client id used when logging in.
     */
    clientId?: string;
    /**
     * Optional client secret
     */
    clientSecret?: string;
    /**
     * The redirect URL path for the OAUTH 2.0 server
     */
    path?: string;
    /**
     * The redirect URL port for the OAUTH 2.0 server
     */
    port?: number;
    /**
     * Path on authPath for retreiving the token.
     */
    tokenPath?: string;
    /**
     * Defaults to 'authorization_code'
     */
    grantType?: "client_credentials" | "authorization_code"
}

export interface Config {
    /**
     * Profiles for different OC Studio environments.
     */
    profiles: {
        /**
         * The default profile
         */
        default: ConfigProfile;
        [name: string]: ConfigProfile;
    };
    /**
     * The current profile, defaults to `default`
     */
    currentProfile?: string;
    /**
     * When the config was created by the CLI
     */
    created: string;
    /**
     * When the config was last modified by the CLI
     */
    modified: string;
}
