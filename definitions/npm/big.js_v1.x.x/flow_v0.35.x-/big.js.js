/**
 * Flowtype definitions for big.js
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type BigJsLibrary$BigJS = {

    /**
     * The maximum number of decimal places of the results of operations involving division.
     * It is relevant only to the div and sqrt methods, and the pow method when the exponent is negative.
     * @default  40 
     */
    DP: number,

    /**
     * The rounding mode used in the above operations and by round, toExponential, toFixed and toPrecision.
     * Default is RoundTowardsNearestAwayFromZero
     * @default  1 
     */
    RM: RoundingMode
} & BigJsLibrary$BigJS_Constructors


declare type BigJsLibrary$BigNumberInputType = number | string | BigJsLibrary$BigJS;

declare interface BigJsLibrary$BigJS_Constructors {
    new(value: BigJsLibrary$BigNumberInputType): BigJsLibrary$BigJS,
    (value: BigJsLibrary$BigNumberInputType): BigJsLibrary$BigJS,

    /**
     * A decimal value.  
     */
    (): BigJsLibrary$BigJS
}
declare module 'big.js' {
    declare var bigjs: BigJsLibrary$BigJS;
    declare module.exports: typeof bigjs
}
declare
var Big: BigJsLibrary$BigJS;