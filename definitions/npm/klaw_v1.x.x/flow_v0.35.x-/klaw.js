/**
 * Flowtype definitions for klaw
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'klaw' {


    declare module.exports: typeof K
    declare interface K$Item {
        path: string,
            stats: fs.Stats
    }

    declare type K$QueueMethod = "shift" | "pop";

    declare type K$Options = {
        queueMethod?: K$QueueMethod,
        pathSorter?: (a: Array<K$Item>) => Array<K$Item>,
        fs?: any,
        filter?: (a: K$Item) => boolean
    } & ReadableOptions


    declare type K$Event = "close" |
        "data" |
        "end" |
        "readable" |
        "error";

    declare interface K$Walker {
        on(event: K$Event, listener: Function): this,
            on(event: "close", listener: () => void): this,
            on(event: "data", listener: (item: K$Item) => void): this,
            on(event: "end", listener: () => void): this,
            on(event: "readable", listener: () => void): this,
            on(event: "error", listener: (err: Error) => void): this,
            read(): K$Item
    }
}