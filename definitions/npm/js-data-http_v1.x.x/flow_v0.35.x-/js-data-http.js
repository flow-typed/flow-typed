// @flow
/**
 * Flowtype definitions for js-data-http
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JSData$DSHttpAdapterOptions {
    serialize?: (resourceName: string, data: any) => any,
        deserialize?: (resourceName: string, data: any) => any,
        queryTransform?: (resourceName: string, params: DSFilterParams) => any,
        httpConfig?: any,
        forceTrailingSlash?: boolean,
        log?: boolean | ((message?: any, ...optionalParams: any[]) => void),
        error?: boolean | ((message?: any, ...optionalParams: any[]) => void),
        basePath?: string,
        verbsUseBasePath?: string
}

declare interface JSData$DSHttpAdapterPromiseResolveType {
    data: any,
        headers: any,
        status: number,
        config: any
}

declare type JSData$DSHttpAdapter = {
    new(options?: JSData$DSHttpAdapterOptions): JSData$DSHttpAdapter,
    defaults: JSData$DSHttpAdapterOptions,
    http: any,
    HTTP(options?: Object): JSDataPromise<JSData$DSHttpAdapterPromiseResolveType>,
    DEL(
        url: string,
        data?: Object,
        options?: Object): JSDataPromise<JSData$DSHttpAdapterPromiseResolveType>,
    GET(
        url: string,
        data?: Object,
        options?: Object): JSDataPromise<JSData$DSHttpAdapterPromiseResolveType>,
    POST(
        url: string,
        data?: Object,
        options?: Object): JSDataPromise<JSData$DSHttpAdapterPromiseResolveType>,
    PUT(
        url: string,
        data?: Object,
        options?: Object): JSDataPromise<JSData$DSHttpAdapterPromiseResolveType >
} & IDSAdapter
declare var DSHttpAdapter: JSData$DSHttpAdapter;
declare module 'js-data-http' {
    declare module.exports: typeof DSHttpAdapter
}