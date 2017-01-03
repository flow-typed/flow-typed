// @flow
/**
 * Flowtype definitions for jsesc
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'jsesc' {
    declare module.exports: typeof jsesc
    declare     var version: string;

    declare interface jsesc$Opts {
        quotes?: string,
            wrap?: boolean,
            es6?: boolean,
            escapeEverything?: boolean,
            compact?: boolean,
            indent?: string,
            json?: boolean
    }
}