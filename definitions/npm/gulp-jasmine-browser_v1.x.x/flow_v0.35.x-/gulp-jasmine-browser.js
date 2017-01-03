// @flow
/**
 * Flowtype definitions for gulp-jasmine-browser
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gulp-jasmine-browser' {
    declare interface IJasmineBrowser {
        specRunner(options?: any): NodeJS.ReadWriteStream,
            server(options?: any): NodeJS.ReadWriteStream,
            headless(options?: any): NodeJS.ReadWriteStream
    }
    declare     var jasmineBrowser: IJasmineBrowser;
    declare module.exports: typeof jasmineBrowser
}