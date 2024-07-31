/*! Copyright (c) 2022, XAPP AI*/
import { ImportApp } from "@xapp/client";
import { log } from "stentor-logger";

import { getXAPPClient } from "../getXAPPClient";

export async function importApp(uri: string, options: ImportApp): Promise<void> {

    const { organizationId } = options;

    if (!uri) {
        throw new Error(`uri is required to import an app.`);
    }

    if (!organizationId) {
        throw new Error(`organizationId is required to import an app.`);
    }

    const studioClient = await getXAPPClient();

    log().info(`Importing app to ${organizationId}`);

    let imported: ImportApp;

    try {
        imported = await studioClient.importApp(uri, organizationId);
        log().info(`App ${imported.name} imported to ${imported.organizationId}/${imported.appId}`);
    } catch (e) {
        log().error(`Unabled to import app, error:\n${e.message}`);
    }
}