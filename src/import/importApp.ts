/*! Copyright (c) 2022, XAPP AI*/
import { log } from "stentor-logger";
import { ImportApp } from "../models";
import { getUserToken } from "../getUserToken";
import { XAPPClient } from "../XAPPClient";

export async function importApp(uri: string, options: ImportApp): Promise<void> {

    const { organizationId } = options;

    if (!uri) {
        throw new Error(`uri is required to import an app.`);
    }

    if (!organizationId) {
        throw new Error(`organizationId is required to import an app.`);
    }

    const userToken = await getUserToken();
    const studioClient = new XAPPClient({ userToken });

    log().info(`Importing app to ${organizationId}`);

    let imported: ImportApp;

    try {
        imported = await studioClient.importApp(uri, organizationId);
        log().info(`App ${imported.name} imported to ${imported.organizationId}/${imported.appId}`);
    } catch (e) {
        log().error(`Unabled to import app, error:\n${e.message}`);
    }
}