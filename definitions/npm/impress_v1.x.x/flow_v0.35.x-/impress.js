// @flow
/**
 * Flowtype definitions for impress
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Impress {
    init(): void,
        getStep(step: any): any,
        goto(element: any, duration?: number): any,
        prev(): any,
        next(): any
}
declare function impress(): Impress