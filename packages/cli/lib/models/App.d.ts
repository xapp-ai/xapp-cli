/*! Copyright (c) 2022, XAPP AI*/
import { App as _GraphqlApp } from "../graphql/models";
export type GraphqlApp = Omit<_GraphqlApp, "_id" | "cmsTokens" | "faqQuery">;
export interface App {
    appId: string;
    name: string;
    organizationId: string;
    invocationName?: string;
    actionsOnGoogleId?: string;
    businessDescription?: string;
    businessHighValueLeadDescription?: string;
}
export interface Channel {
    type: string;
    id: string;
    [key: string]: unknown;
}
