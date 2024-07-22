/*! Copyright (c) 2022, XAPP AI*/

import { existsSync, mkdirSync } from "fs";
import { resolve } from "path";

import { createObjectCsvWriter, } from "csv-writer";
import { log } from "stentor-logger";

import { XAPPClient } from "../XAPPClient";
import { getUserToken } from "../getUserToken";
import { getConfigProfile } from "../getConfig";

export interface ExportOrgOptions {
    delimiter?: string;
}

export async function exportOrg(organizationId: string, output: string, options: ExportOrgOptions): Promise<void> {

    if (!organizationId) {
        throw new Error(`Organization is required for exporting.`);
    }

    // Resolve the path
    const path = resolve(output);

    if (!existsSync(path)) {
        throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
    }

    const exportDirName = `${organizationId}-${new Date().getTime()}`;
    const exportPath = resolve(path, exportDirName);
    mkdirSync(exportPath);

    const token = await getUserToken();
    const profile = await getConfigProfile();

    const client = new XAPPClient({
        userToken: token,
        url: profile.basePath
    });

    log().info(`Retreiving apps for ${organizationId}...`)
    const orgApps = await client.getAppsForOrg(organizationId, 1000);

    const total = orgApps.org.apps.total;

    log().info(`Retrieved ${total} app(s).`);

    if (total === 0) {
        log().info(`No apps found for ${organizationId}`);
        return;
    }

    interface AppExportRecord {
        name: string;
        organizationId: string;
        appId: string;
        status: string;
        statusTime: string;
        studioLink: string;
    }

    interface ObjectHeader {
        title: string;
        id: keyof AppExportRecord
    }

    const header: ObjectHeader[] = [
        { title: "Name", id: "name" },
        { title: "organizationId", id: "organizationId" },
        { title: "appId", id: "appId" },
        { title: "Link", id: "studioLink" },
        { title: "Status", id: "status" },
        { title: "Status Time", id: "statusTime" }
    ];

    const fieldDelimiter: string = options?.delimiter || ",";

    const csvWriter = createObjectCsvWriter({
        path: `${exportPath}/${organizationId}-apps-${new Date().toISOString()}.csv`,
        header,
        fieldDelimiter
    });

    log().info(`Retrieved ${total} app(s).`);

    const apps = orgApps.org.apps.apps;

    for (const app of apps) {

        const record: AppExportRecord = {
            name: app.name,
            appId: app.appId,
            organizationId: app.organizationId,
            studioLink: `https://studio.xapp.ai/${app.organizationId}/${app.appId}`,
            status: app.status?.type || undefined,
            statusTime: app.status?.timestamp || undefined,
        };

        await csvWriter.writeRecords([record]);
    }

    log().info(`CSV available at ${exportPath}`);
}