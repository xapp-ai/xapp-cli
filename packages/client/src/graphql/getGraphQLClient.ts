/*! Copyright (c) 2022, XAPP AI*/
import { Client } from "@urql/core";


export function getGraphQLClient(token: string, url = "https://api.xapp.ai"): Client {

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