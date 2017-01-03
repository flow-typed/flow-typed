// @flow
/**
 * Flowtype definitions for temp
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'temp' {


    declare     export interface AffixOptions {
        prefix?: string,
            suffix?: string,
            dir?: string
    }
    declare     export var dir: string;
    declare     export function track(value?: boolean): typeof temp
    declare     export function mkdir(affixes: string, callback?: (err: any, dirPath: string) => void): void
    declare     export function mkdirSync(affixes: string): string
    declare     export function open(
        affixes: string,
        callback?: (err: any, result: {
            path: string,
            fd: number
        }) => void): void
    declare     export function openSync(affixes: string): {
        path: string,
        fd: number
    }
    declare     export function path(affixes: string, defaultPrefix?: string): string
    declare     export function cleanup(callback?: (result: boolean | {
        files: number,
        dirs?: number
    }) => void): void
    declare     export function cleanupSync(): boolean | {
        files: number,
        dirs: number
    }
    declare     export function createWriteStream(affixes: string): fs.WriteStream
}