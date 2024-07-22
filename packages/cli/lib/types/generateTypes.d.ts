/*! Copyright (c) 2022, XAPP AI*/
export interface GenerateTypesOptions {
    header?: string;
    file?: string;
    max?: string;
}
export declare function generateTypes(output: string, appId: string, options: GenerateTypesOptions): Promise<void>;
