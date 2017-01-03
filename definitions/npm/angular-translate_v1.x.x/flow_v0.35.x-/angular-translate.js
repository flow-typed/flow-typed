// @flow
/**
 * Flowtype definitions for angular-translate
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'angular-translate' {
    declare module.exports: typeof ngt
}
declare interface angular$IFilterService {
    (name: "translate"): {
        (translationId: string, interpolateParams?: any, interpolation?: string): string
    }
}