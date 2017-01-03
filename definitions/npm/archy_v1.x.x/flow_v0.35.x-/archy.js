// @flow
/**
 * Flowtype definitions for archy
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'archy' {
    declare module.exports: typeof archy
    declare interface archy$Data {
        label: string,
            nodes?: (archy$Data | string)[]
    }

    declare interface archy$Options {
        unicode?: boolean
    }
}