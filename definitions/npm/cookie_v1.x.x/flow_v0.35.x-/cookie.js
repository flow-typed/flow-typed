/**
 * Flowtype definitions for cookie
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface CookieSerializeOptions {
    encode?: (val: string) => string,
        path?: string,
        expires?: Date,
        maxAge?: number,
        domain?: string,
        secure?: boolean,
        httpOnly?: boolean
}
declare interface CookieParseOptions {
    decode?: (val: string) => string
}
declare interface CookieStatic {
    serialize(name: string, val: string, options?: CookieSerializeOptions): string,
        parse(str: string, options?: CookieParseOptions): {
            [key: string]: string
        }
}
declare module 'cookie' {
    declare var cookie: CookieStatic;
    declare module.exports: typeof cookie
}