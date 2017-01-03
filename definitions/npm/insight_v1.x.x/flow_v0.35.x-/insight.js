// @flow
/**
 * Flowtype definitions for insight
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface insight$IOptions {
    trackingCode: string,
        trackingProvider?: string,
        packageName: string,
        packageVersion?: string,
        config?: insight$IConfigstore
}

declare interface insight$IConfigstore {
    path: string,
        all: any,
        get(key: string): any,
        set(key: string, val: any): void,
        del(key: string): void
}
declare module 'insight' {
    declare module.exports: typeof Insight
}