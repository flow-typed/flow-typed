/**
 * Flowtype definitions for seedrandom
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type seedrandomStateType = boolean | (() => prng);
declare interface prng {
    new(seed?: string, options?: seedRandomOptions, callback?: any): prng,
    (): number,
    quick(): number,
        int32(): number,
        double(): number,
        state(): () => prng
}
declare interface seedrandom_prng {
    (seed?: string, options?: seedRandomOptions, callback?: any): prng,
    alea: (
            seed?: string,
            options?: seedRandomOptions,
            callback?: seedrandomCallback) => prng,
        xor128: (
            seed?: string,
            options?: seedRandomOptions,
            callback?: seedrandomCallback) => prng,
        tychei: (
            seed?: string,
            options?: seedRandomOptions,
            callback?: seedrandomCallback) => prng,
        xorwow: (
            seed?: string,
            options?: seedRandomOptions,
            callback?: seedrandomCallback) => prng,
        xor4096: (
            seed?: string,
            options?: seedRandomOptions,
            callback?: seedrandomCallback) => prng,
        xorshift7: (
            seed?: string,
            options?: seedRandomOptions,
            callback?: seedrandomCallback) => prng,
        quick: (
            seed?: string,
            options?: seedRandomOptions,
            callback?: seedrandomCallback) => prng
}
declare interface seedrandomCallback {
    (prng?: prng, shortseed?: string, global?: boolean, state?: seedrandomStateType): prng
}
declare interface seedRandomOptions {
    entropy?: boolean,
        global?: boolean,
        state?: seedrandomStateType,
        pass?: seedrandomCallback
}
declare
var seedrandom: seedrandom_prng;
declare module 'seedrandom' {
    declare module.exports: typeof seedrandom
}