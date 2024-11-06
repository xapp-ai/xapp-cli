/*! Copyright (c) 2024, XAPP AI*/
import { ConfigProfile, getConfig } from "@xapp/client";
import { saveConfig } from "./saveConfig";

/**
 * Saves current profile on the config
 * @param profile 
 */
export function saveCurrentProfile(profile: ConfigProfile): void {

    const config = getConfig();
    const currentProfile = !!config.currentProfile ? config.currentProfile : "default";

    config.profiles[currentProfile] = profile;

    saveConfig(config);

    // debugging

    /*
    const expectedAccess = profile.token.access_token;

    const configUpdated = getConfig();

    const newAccess = configUpdated.profiles[currentProfile].token.access_token;

    if (newAccess !== expectedAccess) {
        console.log('access token did not match');
    } else {
        console.log('access token matched');
        console.log('looking for access token:', expectedAccess);
    } */
}