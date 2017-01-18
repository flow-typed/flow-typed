/**
 * Flowtype definitions for gulp-ruby-sass
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gulp-ruby-sass' {

    /**
     * The interface includes all options that available for sass executable.
     * Options are converted from dashed to camelCase
     * @interface  SassOptions
     */
    declare interface SassOptions {
        loadPath?: string | string[],
            require?: string,
            compass?: boolean,
            style?: string,
            force?: boolean,
            stopOnError?: boolean,
            scss?: boolean,
            defaultEncoding?: string,
            unixNewlines?: boolean,
            debugInfo?: boolean,
            lineNumbers?: boolean,
            lineComments?: boolean,
            check?: boolean,
            precision?: number,
            cacheLocation?: string,
            noCache?: boolean,
            trace?: boolean,
            quiet?: boolean,
            sourcemap?: any,
            watch?: string,
            update?: string,
            stdin?: boolean,
            interactive?: boolean
    }

    /**
     * The interface includes the node-ruby-sass only options.
     * Attention: sourcemap option type differs from the same SassOption's type.
     * @interface  Options
     * @extends  SassOptions
     */
    declare type Options = {
        verbose?: boolean,
        bundleExec?: boolean,
        sourcemap?: boolean,
        container?: string
    } & SassOptions

    declare module.exports: typeof sass

}