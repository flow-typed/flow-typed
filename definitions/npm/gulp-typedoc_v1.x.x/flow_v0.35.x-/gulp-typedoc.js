/**
 * Flowtype definitions for gulp-typedoc
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gulp-typedoc' {
    declare interface Options {
        out: string,
            mode?: string,
            json?: string,
            exclude?: string,
            includeDeclarations?: boolean,
            externalPattern?: string,
            excludeExternals?: boolean,
            module?: string,
            target?: string,
            theme?: string,
            name?: string,
            readme?: string,
            hideGenerator?: boolean,
            gaID?: string,
            gaSite?: string,
            verbose?: boolean
    }
    declare module.exports: typeof typedoc
}