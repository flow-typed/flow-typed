// @flow
/**
 * Flowtype definitions for ng-facebook
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'ngFacebook' {
    declare interface IFacebookProvider {
        setAppId(appId: string): IFacebookProvider,
            getAppId(): string,
            setVersion(version: string): IFacebookProvider,
            getVersion(): string,
            setPermissions(permissions: string | Array<string>): IFacebookProvider,
            getPermissions(): string,
            setCustomInit(customInit: FBInitParams): IFacebookProvider,
            getCustomInit(): FBInitParams
    }
    declare interface IFacebookService {
        config<T>(property: string): T,
            init(): void,
            setCache<T>(attr: string, val: T): void,
            getCache<T>(attr: string): T,
            clearCache(): void,
            isConnected(): boolean,
            getAuthResponse(): {},
            getLoginStatus(force?: boolean): angular$IPromise<{}>,
            login(permissions?: string, rerequest?: boolean): angular$IPromise<{}>,
            logout(): angular$IPromise<void>,
            ui(params: FBUIParams): angular$IPromise<any>,
            api(path: string): angular$IPromise<{}>,
            api(path: string, method: string): angular$IPromise<{}>,
            api(path: string, params: Object): angular$IPromise<{}>,
            api(path: string, method: string, params: Object): angular$IPromise<{}>,
            cachedApi(path: string): angular$IPromise<any >
    }
}