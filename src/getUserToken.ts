/*! Copyright (c) 2019, XAPPmedia */
import { readFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";
import { Config } from "./Config";
import { login } from "./login";

/**
 * Helper function to get the XAPP auth token.
 */
export async function getUserToken(): Promise<string> {
    const configPath = join(homedir(), ".xapp", "cli_config");
    const configData = readFileSync(configPath, "UTF-8");
    const config: Config = JSON.parse(configData);

    let token: string;

    if (
        config &&
        config.profiles.default &&
        config.profiles.default.token &&
        config.profiles.default.token.access_token
    ) {
        token = config.profiles.default.token.access_token;
    } else {
        token = await login();
    }

    return token;
}
