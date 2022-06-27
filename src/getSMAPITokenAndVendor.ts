/*! Copyright (c) 2022, XAPP AI*/

import { readFileSync } from "fs";
import * as moment from "moment";
import { homedir } from "os";
import { join } from "path";

export function getSMAPITokenAndVendorId(): { token: string; vendorId: string } {
    const configPath = join(homedir(), ".ask", "cli_config");
    const config = readFileSync(configPath, "utf-8");
    const obj = JSON.parse(config);

    const expirationDate = obj.profiles.default.token.expires_at;
    const expires = moment(expirationDate);

    if (expires.isBefore(moment())) {
        throw new Error("TOKEN EXPIRED, run $ ask init");
    }

    const token = obj.profiles.default.token.access_token;
    const vendorId = obj.profiles.default.vendor_id;

    return { token, vendorId };
}
