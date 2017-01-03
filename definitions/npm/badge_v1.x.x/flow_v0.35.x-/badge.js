/**
 * Flowtype definitions for badge
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
export interface ngCordova$IBadgeService {
    hasPermission(): ng.IPromise<boolean>,
        promptForPermission(): ng.IPromise<any>,
        set(badge: number, callback?: Function, scope?: {}): ng.IPromise<any>,
        get(): ng.IPromise<number>,
        clear(callback?: Function, scope?: {}): ng.IPromise<any>,
        increase(count?: number, callback?: Function, scope?: {}): ng.IPromise<any>,
        decrease(count?: number, callback?: Function, scope?: {}): ng.IPromise<any >
}