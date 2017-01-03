// @flow
/**
 * Flowtype definitions for finalhandler
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'finalhandler' {

    declare module.exports: typeof finalHandler
    declare     export interface finalHandler$Options {
        message?: boolean | ((err: any, status: number) => string),
            onerror?: (err: any, req: ServerRequest, res: ServerResponse) => void,
            stacktrace?: boolean
    }
}