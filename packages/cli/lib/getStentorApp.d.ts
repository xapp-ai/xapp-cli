/*! Copyright (c) 2022, XAPP AI */
import { ExportApp } from "@xapp/client";
export declare function getStentorApp(appId?: string, options?: {
    withChannels?: boolean;
    token?: string;
}): Promise<ExportApp>;
