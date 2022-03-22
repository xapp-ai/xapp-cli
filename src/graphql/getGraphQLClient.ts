/*! Copyright (c) 2022, XAPP AI*/
/*! Copyright (c) 2021, XAPPmedia */
import { Client } from "@urql/core";

import { getConfigProfile } from "../getConfig";

export function getGraphQLClient(token: string): Client {

    const profile = getConfigProfile();

    const url: string = profile.basePath || "https://api.xapp.ai"

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