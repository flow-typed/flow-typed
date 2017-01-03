/**
 * Flowtype definitions for gulp-sourcemaps
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gulp-sourcemaps' {
    declare interface InitOptions {
        loadMaps?: boolean,
            debug?: boolean
    }
    declare interface WriteMapper {
        (file: string): string
    }
    declare interface WriteOptions {
        addComment?: boolean,
            includeContent?: boolean,
            sourceRoot?: string | WriteMapper,
            sourceMappingURLPrefix?: string | WriteMapper
    }
    declare export function init(opts?: InitOptions): NodeJS.ReadWriteStream
    declare export function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream
}