"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertGraphQLHandler = convertGraphQLHandler;
exports.convertToGraphQLHandler = convertToGraphQLHandler;
const stentor_utils_1 = require("stentor-utils");
/**
 * Converts the GraphQL style Handler to the stentor-models pattern.
 *
 * @param graphql
 */
function convertGraphQLHandler(graphql) {
    const { appId, intentId, organizationId, type, data, content: graphqlContent } = graphql;
    const content = {};
    graphqlContent.forEach((responseGroup) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore It isn't perfect but close enough
        content[responseGroup.key] = responseGroup.handlerResponse;
    });
    const handler = {
        intentId,
        appId,
        organizationId,
        type,
        data,
        content
    };
    return handler;
}
function convertToGraphQLHandler(handler) {
    const { name, appId, intentId, organizationId, type, data, content } = handler;
    const graphqlContent = Object.keys(content || {}).map((key) => {
        const rawContent = content[key];
        // filter 
        const handlerResponse = rawContent.map((response) => {
            const displays = (response.displays || []).filter((display) => {
                return !!display.type;
            }).map((display) => {
                return display;
            });
            // Make sure we have good suggestion chips
            const responseOutput = (0, stentor_utils_1.toResponseOutput)(response.outputSpeech);
            const suggestions = (responseOutput.suggestions || []).map((suggestion) => {
                if (typeof suggestion === "string") {
                    return {
                        title: suggestion
                    };
                }
                else if (typeof suggestion === "object") {
                    return suggestion;
                }
            });
            const outputSpeech = Object.assign(Object.assign({}, responseOutput), { suggestions, locales: {} });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore It isn't perfect but close enough, segments are the problem now
            const resp = Object.assign(Object.assign({}, response), { outputSpeech,
                displays });
            const repromptOutput = (0, stentor_utils_1.toResponseOutput)(response.reprompt);
            if (repromptOutput) {
                const repromptSuggestions = (repromptOutput.suggestions || []).map((suggestion) => {
                    if (typeof suggestion === "string") {
                        return {
                            title: suggestion
                        };
                    }
                    else if (typeof suggestion === "object") {
                        return suggestion;
                    }
                });
                const reprompt = Object.assign(Object.assign({}, repromptOutput), { suggestions: repromptSuggestions, locales: {} });
                resp.reprompt = reprompt;
            }
            return resp;
        });
        return {
            key,
            handlerResponse
        };
    });
    const graphqlHandler = {
        name,
        intentId,
        appId,
        organizationId,
        type,
        data,
        content: graphqlContent
    };
    return graphqlHandler;
}
//# sourceMappingURL=convert.js.map