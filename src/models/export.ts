/*! Copyright (c) 2022, XAPP AI*/
import { App, Intent, Handler, Entity } from "stentor-models";

export interface ExportApp {
    app: App;
    intents: Intent[];
    handlers: Handler[];
    entities: Entity[];
}