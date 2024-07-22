/*! Copyright (c) 2022, XAPP AI*/
export interface ExportOptions {
    /**
     * The app ID that will be exported
     */
    appId: string;
    /**
     * If provided, it will also split out all the resources into separate files in unique directories for handlers, intents, entities
     */
    split?: boolean;
    /**
     * WIf provided, it will also export the channels to a /channels directory.
     */
    channels?: boolean;
}
