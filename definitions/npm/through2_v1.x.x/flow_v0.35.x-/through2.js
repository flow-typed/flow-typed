/**
 * Flowtype definitions for through2
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'through2' {
    declare type TransformCallback = (err?: any, data?: any) => void;
    declare type TransformFunction = (chunk: any, enc: string, callback: TransformCallback) => void;
    declare type FlushCallback = (flushCallback: () => void) => void;
    declare module.exports: typeof through2

    declare var npm$namespace$through2: {
        obj: typeof through2$obj,
        ctor: typeof through2$ctor,
    }
    declare export type through2$Through2Constructor = {
        new(opts?: stream.DuplexOptions): stream.Transform,
        (opts?: stream.DuplexOptions): stream.Transform
    }


    /**
     * Convenvience method for creating object streams
     */
    declare export function through2$obj(transform?: TransformFunction, flush?: FlushCallback): stream.Transform


    /**
     * Creates a constructor for a custom Transform. This is useful when you
     * want to use the same transform logic in multiple instances.
     */
    declare export function through2$ctor(
        opts?: stream.DuplexOptions,
        transfrom?: TransformFunction,
        flush?: FlushCallback): through2$Through2Constructor
}