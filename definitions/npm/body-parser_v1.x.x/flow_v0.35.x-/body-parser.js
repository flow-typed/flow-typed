// @flow
/**
 * Flowtype definitions for body-parser
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'body-parser' {

    declare module.exports: typeof bodyParser

    declare     var npm$namespace$bodyParser: {
        json: typeof bodyParser$json,
        raw: typeof bodyParser$raw,
        text: typeof bodyParser$text,
        urlencoded: typeof bodyParser$urlencoded,
    }
    declare     export function bodyParser$json(
        options?: {

            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean,

            /**
             * maximum request body size. (default: '100kb')
             */
            limit?: any,

            /**
             * request content-type to parse, passed directly to the type-is library. (default: 'json')
             */
            type?: any,

            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (
                req: express.Request,
                res: express.Response,
                buf: Buffer,
                encoding: string) => void,

            /**
             * only parse objects and arrays. (default: true)
             */
            strict?: boolean,

            /**
             * passed to JSON.parse().
             */
            reviver?: (key: string, value: any) => any
        }): express.RequestHandler

    declare     export function bodyParser$raw(
        options?: {

            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean,

            /**
             * maximum request body size. (default: '100kb')
             */
            limit?: any,

            /**
             * request content-type to parse, passed directly to the type-is library. (default: 'application/octet-stream')
             */
            type?: any,

            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (
                req: express.Request,
                res: express.Response,
                buf: Buffer,
                encoding: string) => void
        }): express.RequestHandler

    declare     export function bodyParser$text(
        options?: {

            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean,

            /**
             * maximum request body size. (default: '100kb')
             */
            limit?: any,

            /**
             * request content-type to parse, passed directly to the type-is library. (default: 'text/plain')
             */
            type?: any,

            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (
                req: express.Request,
                res: express.Response,
                buf: Buffer,
                encoding: string) => void,

            /**
             * the default charset to parse as, if not specified in content-type. (default: 'utf-8')
             */
            defaultCharset?: string
        }): express.RequestHandler

    declare     export function bodyParser$urlencoded(
        options: {

            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean,

            /**
             * maximum request body size. (default: '100kb')
             */
            limit?: any,

            /**
             * request content-type to parse, passed directly to the type-is library. (default: 'urlencoded')
             */
            type?: any,

            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (
                req: express.Request,
                res: express.Response,
                buf: Buffer,
                encoding: string) => void,

            /**
             * parse extended syntax with the qs module.
             */
            extended: boolean
        }): express.RequestHandler
}