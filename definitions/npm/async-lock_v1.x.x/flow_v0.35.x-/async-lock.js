/**
 * Flowtype definitions for async-lock
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'async-lock' {
    declare interface AsyncLockDoneCallback {
        (err?: Error, ret?: any): void
    }
    declare interface AsyncLockOptions {
        timeout?: number,
            maxPending?: number,
            domainReentrant?: boolean,
            Promise?: any
    }
    declare module.exports: typeof AsyncLock

}