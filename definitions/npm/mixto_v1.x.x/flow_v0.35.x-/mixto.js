// @flow
/**
 * Flowtype definitions for mixto
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Mixto$IMixinStatic {
    includeInto(constructor: any): void,
        extend(object: any): void
}
declare module 'mixto' {
    declare     var _tmp: Mixto$IMixinStatic;
    declare module.exports: typeof _tmp
}