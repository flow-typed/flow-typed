/**
 * Flowtype definitions for traverse
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'traverse' {
    declare interface Traverse {
        get(paths: string[]): any,
            has(paths: string[]): boolean,
            set(paths: string[], value: any): any,
            map(cb: (v: any) => void): any,
            forEach(cb: (v: any) => void): any,
            reduce(cb: (acc: any, v: any) => void, init?: any): any,
            paths(): string[],
            nodes(): any[],
            clone(): any
    }
    declare module.exports: typeof traverse
}