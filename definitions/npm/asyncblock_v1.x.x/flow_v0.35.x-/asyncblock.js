/**
 * Flowtype definitions for asyncblock
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'asyncblock' {
    declare module.exports: typeof asyncblock

    declare var npm$namespace$asyncblock: {
        nostack: typeof asyncblock$nostack,
    }
    declare export function asyncblock$nostack<T>(
        f: (flow: asyncblock$IFlow) => void,
        callback?: (err: any, res: T) => void): void

    declare export interface asyncblock$IFlow {
        add(responseFormat?: string[]): asyncblock$IExecuteFunction,
            add(key: string, responseFormat?: string[]): asyncblock$IExecuteFunction,
            add(key: number, responseFormat?: string[]): asyncblock$IExecuteFunction,
            add(options: asyncblock$IFlowOptions): asyncblock$IExecuteFunction,
            callback(responseFormat?: string[]): asyncblock$IExecuteFunction,
            callback(key: string, responseFormat?: string[]): asyncblock$IExecuteFunction,
            callback(key: number, responseFormat?: string[]): asyncblock$IExecuteFunction,
            callback(options: asyncblock$IFlowOptions): asyncblock$IExecuteFunction,
            wait<T>(key?: string): T,
            wait<T>(key?: number): T,
            get<T>(key: string): T,
            set(key: string, responseFormat?: string[]): asyncblock$IExecuteFunction,
            set(options: asyncblock$IFlowOptions): asyncblock$IExecuteFunction,
            del(key: string): void,
            sync<T>(task: any): T,
            queue(toExecute: asyncblock$IExecuteFunction): void,
            queue(key: string, toExecute: asyncblock$IExecuteFunction): void,
            queue(key: number, toExecute: asyncblock$IExecuteFunction): void,
            queue(responseFormat: string[], toExecute: asyncblock$IExecuteFunction): void,
            queue(
                key: string,
                responseFormat: string[],
                toExecute: asyncblock$IExecuteFunction): void,
            queue(
                key: number,
                responseFormat: string[],
                toExecute: asyncblock$IExecuteFunction): void,
            queue(options: asyncblock$IFlowOptions, toExecute: asyncblock$IExecuteFunction): void,
            doneAdding(): void,
            forceWait<T>(): T,
            maxParallel: number,
            errorCallback: (err: any) => void,
            taskTimeout: number,
            timeoutIsError: boolean
    }

    declare export interface asyncblock$IFlowOptions {
        ignoreError?: boolean,
            key?: string,
            responseFormat?: string[],
            timeout?: number,
            timeoutIsError?: boolean,
            dontWait?: boolean,
            firstArgIsError?: boolean
    }

    declare export interface asyncblock$IExecuteFunction {
        (err: any, res1: T1, res2: T2, res3: T3): any,
        (err: any, res1: T1, res2: T2): any,
        (err: any, res: T): any,
        (err: any): any,
        (res1: T1, res2: T2, res3: T3): any,
        (res1: T1, res2: T2): any,
        (res: T): any
    }
}