// @flow
/**
 * Flowtype definitions for merge2
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'merge2' {
    declare interface IOptions {
        end?: boolean,
            objectMode?: boolean
    }
    declare type IMerge2Stream = {
        add(
            ...args: Array<NodeJS.ReadWriteStream | IMerge2Stream | Array<NodeJS.ReadWriteStream | IMerge2Stream | IOptions >> ): IMerge2Stream
    }
    declare interface IMerge2 {
        (...args: Array<NodeJS.ReadWriteStream | IMerge2Stream | Array<NodeJS.ReadWriteStream | IMerge2Stream>| IOptions>): IMerge2Stream
    }
    declare     var _tmp: IMerge2;
    declare module.exports: typeof _tmp
}