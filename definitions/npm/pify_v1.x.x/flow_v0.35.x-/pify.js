// @flow
/**
 * Flowtype definitions for pify
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'pify' {
    declare interface PifyOptions {
        multiArgs?: boolean,
            include?: [string | RegExp],
            exclude?: [string | RegExp],
            excludeMain?: boolean
    }
    declare module.exports: typeof pify

}