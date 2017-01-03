/**
 * Flowtype definitions for js-data-angular
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JSData$DSProvider {
    defaults: DSConfiguration
}

declare interface JSData$DS {
    bindAll<T>(
            resourceName: string,
            params: DSFilterParams,
            scope: ng.IScope,
            expr: string,
            cb?: (err: DSError, items: Array<T & DSInstanceShorthands<T >> ) => void): Function,
        bindOne<T>(
            resourceName: string,
            id: string | number,
            scope: ng.IScope,
            expr: string,
            cb?: (err: DSError, item: T & DSInstanceShorthands<T>) => void): Function
}

declare interface JSData$DSResourceDefinition<T>{
    bindAll(
        params: DSFilterParams,
        scope: ng.IScope,
        expr: string,
        cb?: (err: DSError, items: Array<T & DSInstanceShorthands<T >> ) => void): Function,
    bindOne(
        id: string | number,
        scope: ng.IScope,
        expr: string,
        cb?: (err: DSError, item: T & DSInstanceShorthands<T>) => void): Function
}