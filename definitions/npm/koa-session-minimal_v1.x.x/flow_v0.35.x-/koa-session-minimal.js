// @flow
/**
 * Flowtype definitions for koa-session-minimal
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'koa-session-minimal' {
    declare module 'koa' {
        declare interface Request {
            session: any,
                sessionHandler: {
                    regenerateId: () => void
                }
        }
    }


    declare module.exports: typeof session

}