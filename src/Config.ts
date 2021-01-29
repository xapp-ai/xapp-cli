/*! Copyright (c) 2019, XAPPmedia */
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
}

export interface Config {
    profiles: {
        default: ConfigProfile;
        [name: string]: ConfigProfile;
    };
    created: string;
    modified: string;
}
