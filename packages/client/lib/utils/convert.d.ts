/*! Copyright (c) 2023, XAPP AI*/
import { Handler } from "stentor-models";
import { Handler as GraphQLHandler } from "../graphql/models";
/**
 * Converts the GraphQL style Handler to the stentor-models pattern.
 *
 * @param graphql
 */
export declare function convertGraphQLHandler(graphql: GraphQLHandler): Handler;
export declare function convertToGraphQLHandler(handler: Handler): Omit<GraphQLHandler, "validation">;
