/*! Copyright (c) 2021, XAPPmedia */
import { Client } from "@urql/core";

import { getConfig } from "../getConfig";

export function getGraphQLClient(token: string): Client {

    const config = getConfig();

    const url: string = config.profiles.default.basePath || "https://api.xapp.ai"

    const client = new Client({
        fetchOptions: {
            headers: {
                "Content-Type": "application/json",
                "x-xapp-usertoken": token
            }
        },
        url: `${url}/graphql`
    });

    return client;
}