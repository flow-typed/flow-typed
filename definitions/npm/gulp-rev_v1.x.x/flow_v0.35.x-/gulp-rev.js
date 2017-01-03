/**
 * Flowtype definitions for gulp-rev
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gulp-rev' {
    declare interface IOptions {
        base?: string,
            cwd?: string,
            merge?: boolean
    }
    declare interface IRev {
        (): NodeJS.ReadWriteStream,
            manifest(): NodeJS.ReadWriteStream,
            manifest(path?: string): NodeJS.ReadWriteStream,
            manifest(options?: IOptions): NodeJS.ReadWriteStream,
            manifest(path?: string, options?: IOptions): NodeJS.ReadWriteStream
    }
    declare var rev: IRev;
    declare module.exports: typeof rev
}