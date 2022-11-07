/*! Copyright (c) 2022, XAPP AI*/
import open from "open";
import path from "path";
import fs from "fs";
import log from "stentor-logger";
import express from "express";
import { WidgetEnv } from "@xapp/stentor-chat-widget";
import { Response } from "stentor-models";

import { getAppId } from "../getAppId";
import { getUserToken } from "../getUserToken";
import { getXAPPClient } from "../getXAPPClient";


export async function serve(props?: { url?: string, port?: string, appId?: string, key?: string }): Promise<void> {

    const url = props?.url || 'http://localhost:8080';
    const port = props?.port || "3000";

    const appId = props.appId || getAppId();

    const config: WidgetEnv = {
        connection: {
            serverUrl: url,
            type: "direct"
        },
        serverUrl: url,
        hooks: {
            onResponse: (response: Response) => {
                console.log('Hook.onResponse');
                console.log(response);
                console.log(response.data);
            }
        }
    };

    const token = await getUserToken();
    const client = getXAPPClient(token, appId);
    const channels = await client.getAppChannels(appId);

    // find a chat-widget channel
    let key = props.key;
    if (!key) {
        const widgetChannels = channels.filter((channel) => {
            return channel.type === "chat-widget";
        });

        if (widgetChannels.length > 0) {
            const widget = widgetChannels[0];
            if (widget && (widget as any).key) {
                key = (widget as any).key
            }
        }
    }

    const app = express();

    app.get("/", (req, res) => {
        fs.readFile(path.resolve(__dirname, "../../assets/index.html"), "utf8", (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send("An error occurred");
            }

            data = data.replace(`{{name}}`, appId);
            data = data.replace(`{{key}}`, key);
            data = data.replace(`{{config}}`, JSON.stringify(config));

            return res.send(data);
        });
    });

    app.use(
        express.static(path.resolve(__dirname, ".", "dist"), { maxAge: "30d" })
    );

    app.listen(port, () => {
        log.info(`Temporary server setup listening on port ${port} to serve the widget locally.`);
        open(`http://localhost:${port}`);
    });
}