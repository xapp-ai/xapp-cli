/*! Copyright (c) 2022, XAPP AI*/

export interface App {
    appId: string;
    name: string;
    organizationId: string;
    invocationName?: string;
    //
    actionsOnGoogleId?: string;
}

// This is a very simple version
export interface Channel {
    type: string;
    id: string;
    [key: string]: unknown;
}
