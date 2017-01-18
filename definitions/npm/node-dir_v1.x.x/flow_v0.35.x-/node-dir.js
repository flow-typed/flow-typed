/**
 * Flowtype definitions for node-dir
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'node-dir' {

    declare export interface Options {
        encoding?: string,
            exclude?: RegExp | string[],
            excludeDir?: RegExp | string[],
            match?: RegExp | string[],
            matchDir?: RegExp | string[],
            recursive?: boolean,
            reverse?: boolean,
            shortName?: boolean,
            sort?: boolean,
            doneOnErr?: boolean
    }
    declare export interface FileCallback {
        (error: any, content: string | Buffer, next: () => void): void
    }
    declare export interface FileNamedCallback {
        (error: any, content: string | Buffer, filename: string, next: () => void): void
    }
    declare export interface StreamCallback {
        (error: any, stream: ReadStream, next: () => void): void
    }
    declare export interface FinishedCallback {
        (error: any, files: string[]): void
    }
    declare export interface PathsResult {
        files: string[],
            dirs: string[]
    }
    declare export function readFiles(
        dir: string,
        fileCallback: FileCallback,
        finishedCallback?: FinishedCallback): void
    declare export function readFilesStream(
        dir: string,
        options: Options,
        streamCallback: StreamCallback,
        finishedCallback?: FinishedCallback): void
    declare export function files(dir: string, callback: (error: any, files: string[]) => void): void
    declare export function subdirs(dir: string, callback: (error: any, subdirs: string[]) => void): void
    declare export function paths(dir: string, callback: (error: any, paths: PathsResult) => void): void
}