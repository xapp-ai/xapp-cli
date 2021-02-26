import { App } from "stentor-models";

export interface StudioApp extends App {
    organizationId: string;
    appId: string;
}