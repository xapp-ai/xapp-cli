"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGraphQLClient = getGraphQLClient;
/*! Copyright (c) 2022, XAPP AI*/
const core_1 = require("@urql/core");
function getGraphQLClient(token, url = "https://api.xapp.ai") {
    const client = new core_1.Client({
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
//# sourceMappingURL=getGraphQLClient.js.map