/**
 * Flowtype definitions for buffers
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'buffers' {
    declare interface BuffersStatics {
        new(bufs?: Buffer[] | Buffers): Buffers,
        (bufs?: Buffer[] | Buffers): Buffers,
        prototype: Buffers
    }
    declare module.exports: typeof Buffers
    declare var Buffers: BuffersStatics;
}