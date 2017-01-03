// @flow
/**
 * Flowtype definitions for express-graphql
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'express-graphql' {


    /**
     * Used to configure the graphQLHTTP middleware by providing a schema
     * and other configuration options.
     */
    declare     export type graphqlHTTP$Options = ((req: Request) => graphqlHTTP$OptionsObj) | graphqlHTTP$OptionsObj;

    declare     export type graphqlHTTP$OptionsObj = {

        /**
         * A GraphQL schema from graphql-js.
         */
        schema: Object,

        /**
         * A value to pass as the context to the graphql() function.
         */
        context?: Object,

        /**
         * An object to pass as the rootValue to the graphql() function.
         */
        rootValue?: Object,

        /**
         * A boolean to configure whether the output should be pretty-printed.
         */
        pretty?: boolean,

        /**
         * An optional function which will be used to format any errors produced by
         * fulfilling a GraphQL operation. If no function is provided, GraphQL's
        default spec-compliant `formatError` function will be used.
        */
        formatError?: Function,

        /**
         * A boolean to optionally enable GraphiQL mode.
         */
        graphiql?: boolean
    };

    declare type graphqlHTTP$Middleware = (request: Request, response: Response) => void;
    declare module.exports: typeof graphqlHTTP
}