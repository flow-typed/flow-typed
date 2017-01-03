/**
 * Flowtype definitions for angular-resource-1.3
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'angular-resource' {
    declare var _: string;
    declare module.exports: typeof _
}
declare interface angular$IModule {

    /**
     * creating a resource service factory 
     */
    factory(
        name: string,
        resourceServiceFactoryFunction: undefined.IResourceServiceFactoryFunction<any>): angular$IModule
}
declare interface Array<T>{

    /**
     * the promise of the original server interaction that created this collection. 
     */
    $promise: angular$IPromise<Array<T >> ,
    $resolved: boolean
}