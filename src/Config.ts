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
}

export interface Config {
    /**
     * Profiles for different OC Studio environments.
     */
    profiles: {
        default: ConfigProfile;
        [name: string]: ConfigProfile;
    };
    /**
     * The current profile, defaults to `default`
     */
    currentProfile?: string;
    created: string;
    modified: string;
}
