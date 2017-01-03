/**
 * Flowtype definitions for redlock
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'redlock' {


    declare interface Redlock$Callback<T>{
        (err: any, value?: T): void
    }

    declare interface Redlock$Lock {
        redlock: Redlock,
            resource: string,
            value: any,
            expiration: number,
            unlock(callback?: Redlock$Callback<void>): Promise<void>,
            extend(ttl: number, callback?: Redlock$Callback<Redlock$Lock>): Promise<Redlock$Lock >
    }

    declare interface Redlock$Options {
        driftFactor?: number,
            retryCount?: number,
            retryDelay?: number
    }

    declare type Redlock$LockError = {} & Error

    declare module.exports: typeof Redlock
}