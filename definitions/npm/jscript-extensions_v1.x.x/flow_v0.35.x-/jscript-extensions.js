// @flow
/**
 * Flowtype definitions for jscript-extensions
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface VarDate {}
declare interface DateConstructor {
    new(vd: VarDate): Date
}
declare interface Date {
    getVarDate: () => VarDate
}