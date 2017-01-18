/**
 * Flowtype definitions for verror
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'verror' {
    declare module.exports: typeof VError
    declare class SError mixins VError {}
    declare class MultiError mixins VError {
        constructor(errors: Error[]): this
    }
    declare class WError mixins Error {
        cause(): Error;
        constructor(cause: Error, message: string, ...params: any[]): this;
        constructor(message: string, ...params: any[]): this
    }
}