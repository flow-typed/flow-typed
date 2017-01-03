/**
 * Flowtype definitions for connect-flash
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface Express$Request {
    flash(message: string): any,
        flash(event: string, message: string): any
}
declare module 'connect-flash' {
    declare interface IConnectFlashOptions {
        unsafe?: boolean
    }
    declare module.exports: typeof e
}