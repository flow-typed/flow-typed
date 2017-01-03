// @flow
/**
 * Flowtype definitions for bluebird-retry
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'bluebird-retry' {
    declare module.exports: typeof retry
    declare     export interface retry$Options {
        interval?: number,
            backoff?: number,
            max_interval?: number,
            timeout?: number,
            max_tries?: number
    }
}