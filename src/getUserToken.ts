/*! Copyright (c) 2022, XAPP AI*/

import { getConfigProfile } from "./getConfig";
import { login } from "./login";

/**
 * Helper function to get the XAPP auth token.
 */
export async function getUserToken(): Promise<string> {

    const profile = getConfigProfile();

    let token: string;

    if (profile?.token?.access_token) {
        token = profile?.token?.access_token;
    } else {
        token = await login();
    }

    return token;
}
