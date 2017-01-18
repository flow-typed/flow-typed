/**
 * Flowtype definitions for express-myconnection
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface mysql$IConnection {}

declare export interface mysql$IError {}
declare export interface Express$Request {
    getConnection?: (callback: (err: mysql$IError, connection: mysql$IConnection) => void) => void
}
declare module 'express-myconnection' {
    declare module.exports: typeof connection
}