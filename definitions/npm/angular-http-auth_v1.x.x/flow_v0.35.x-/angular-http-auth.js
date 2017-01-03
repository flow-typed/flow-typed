// @flow
/**
 * Flowtype definitions for angular-http-auth
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'httpAuth' {
    declare interface IAuthService {
        loginConfirmed(data?: any, configUpdater?: Function): void,
            loginCancelled(data?: any, reason?: any): void
    }
    declare interface IHttpBuffer {
        append(
                config: ng.IRequestConfig,
                deferred: {
                    resolve(data: any): void,
                    reject(data: any): void
                }): void,
            rejectAll(reason?: any): void,
            retryAll(updater?: Function): void
    }
}