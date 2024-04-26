/*! Copyright (c) 2023, XAPP AI*/
import { Content, Handler } from "stentor-models";
import { toResponseOutput } from "stentor-utils";

import {
    Handler as GraphQLHandler,
    HandlerContent,
    HandlerResponse,
    BaseDisplay,
    ResponseOutput,
    SuggestionType,
    SuggestionObject
} from "../graphql/models.js";


/**
 * Converts the GraphQL style Handler to the stentor-models pattern.
 * 
 * @param graphql 
 */
export function convertGraphQLHandler(graphql: GraphQLHandler): Handler {

    const { appId, intentId, organizationId, type, data, content: graphqlContent } = graphql;

    const content: Content = {}

    graphqlContent.forEach((responseGroup) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore It isn't perfect but close enough
        content[responseGroup.key] = responseGroup.handlerResponse;
    });

    const handler: Handler = {
        intentId,
        appId,
        organizationId,
        type,
        data,
        content
    }

    return handler;
}

export function convertToGraphQLHandler(handler: Handler): Omit<GraphQLHandler, "validation"> {

    const { name, appId, intentId, organizationId, type, data, content } = handler;

    const graphqlContent: HandlerContent[] = Object.keys(content).map((key) => {

        const rawContent = content[key];

        // filter 
        const handlerResponse: HandlerResponse[] = rawContent.map((response) => {

            const displays: BaseDisplay[] = (response.displays || []).filter((display) => {
                return !!(display as BaseDisplay).type;
            }).map((display) => {
                return display as BaseDisplay;
            });

            // Make sure we have good suggestion chips

            const responseOutput = toResponseOutput(response.outputSpeech);

            const suggestions: SuggestionType[] = (responseOutput.suggestions || []).map((suggestion) => {
                if (typeof suggestion === "string") {
                    return {
                        title: suggestion
                    } as SuggestionObject;
                } else if (typeof suggestion === "object") {
                    return suggestion as SuggestionType;
                }
            });

            const outputSpeech: ResponseOutput = {
                ...responseOutput,
                suggestions,
                locales: {}
            };



            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore It isn't perfect but close enough, segments are the problem now
            const resp: HandlerResponse = {
                ...response,
                outputSpeech,
                displays
            };

            const repromptOutput = toResponseOutput(response.reprompt);
            if (repromptOutput) {
                const repromptSuggestions: SuggestionType[] = (repromptOutput.suggestions || []).map((suggestion) => {
                    if (typeof suggestion === "string") {
                        return {
                            title: suggestion
                        } as SuggestionObject;
                    } else if (typeof suggestion === "object") {
                        return suggestion as SuggestionType;
                    }
                });

                const reprompt: ResponseOutput = {
                    ...repromptOutput,
                    suggestions: repromptSuggestions,
                    locales: {}
                };

                resp.reprompt = reprompt;
            }

            return resp;
        });
        return {
            key,
            handlerResponse
        }
    });

    const graphqlHandler: Omit<GraphQLHandler, "validation"> = {
        name,
        intentId,
        appId,
        organizationId,
        type,
        data,
        content: graphqlContent
    }

    return graphqlHandler;
}