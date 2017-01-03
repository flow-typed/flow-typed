// @flow
/**
 * Flowtype definitions for jwt-decode
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JwtDecode$JwtDecodeStatic {
    (token: string): any
}
declare module 'jwt-decode' {
    declare     var jwtDecode: JwtDecode$JwtDecodeStatic;
    declare module.exports: typeof jwtDecode
}