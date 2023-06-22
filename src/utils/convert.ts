/*! Copyright (c) 2023, XAPP AI*/
import { Content, Handler } from "stentor-models";
import { Handler as GraphQLHandler } from "../graphql/models";

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