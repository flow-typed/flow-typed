/**
 * Flowtype definitions for mkdirp
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'mkdirp' {
    declare module.exports: typeof mkdirp

    declare var npm$namespace$mkdirp: {
        sync: typeof mkdirp$sync,
    }
    declare function mkdirp$sync(dir: string, flags?: any): string
}