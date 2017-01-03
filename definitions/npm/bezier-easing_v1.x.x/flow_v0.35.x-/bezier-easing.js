/**
 * Flowtype definitions for bezier-easing
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Easing {
    (x: number): number
}
declare function BezierEasing(mX1: number, mY1: number, mX2: number, mY2: number): Easing