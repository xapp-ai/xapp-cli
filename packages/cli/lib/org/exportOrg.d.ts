/*! Copyright (c) 2022, XAPP AI*/
export interface ExportOrgOptions {
    delimiter?: string;
}
export declare function exportOrg(organizationId: string, output: string, options: ExportOrgOptions): Promise<void>;
