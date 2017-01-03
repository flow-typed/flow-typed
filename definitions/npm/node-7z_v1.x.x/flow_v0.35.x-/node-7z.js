// @flow
/**
 * Flowtype definitions for node-7z
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'node-7z' {
    declare type PromiseWithProgress<T>= {
        progress(progress: (files: Array<string>) => void): this
    } & Promise

    declare interface CommandLineSwitches {
        raw?: Array<string>, [key: string]: any
    }
    declare interface FileSpec {
        path: string,
            type: string,
            method: string,
            physicalSize: number
    }
    declare module.exports: typeof Zip
}