/*! Copyright (c) 2022, XAPP AI*/
import { Client } from "@urql/core";

import { getConfigProfile } from "../getConfig";

export function getGraphQLClient(token: string): Client {

    const profile = getConfigProfile();

    let url: string;

    if (profile) {
        url = profile.basePath || "https://api.xapp.ai"
    } else {
        url = "https://api.xapp.ai"
    }

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