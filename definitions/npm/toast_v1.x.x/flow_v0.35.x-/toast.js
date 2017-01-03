// @flow
/**
 * Flowtype definitions for toast
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface ngCordova$IToastService {
    showShortTop(message: string): angular.IPromise<any>,
        showShortCenter(message: string): angular.IPromise<any>,
        showShortBottom(message: string): angular.IPromise<any>,
        showLongTop(message: string): angular.IPromise<any>,
        showLongCenter(message: string): angular.IPromise<any>,
        showLongBottom(message: string): angular.IPromise<any>,
        show(message: string, duration: string, position: string): angular.IPromise<any >
}