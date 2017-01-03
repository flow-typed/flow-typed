/**
 * Flowtype definitions for fuse
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare class Fuse {
    constructor(list: any[], options?: fuse$IFuseOptions): this;
    search(pattern: string): any[]
}
declare type fuse$IFuseOptions = {
    caseSensitive?: boolean,
    include?: string[],
    shouldSort?: boolean,
    searchFn?: any,
    sortFn?: (a: {
        score: number
    }, b: {
        score: number
    }) => number,
    getFn?: (obj: any, path: string) => any,
    keys?: string[] | {
        name: string,
        weight: number
    }[],
    verbose?: boolean
} & fuse$ISearchOptions


declare interface fuse$ISearchOptions {
    location?: number,
        distance?: number,
        threshold?: number,
        maxPatternLength?: number
}