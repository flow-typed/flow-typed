/**
 * Flowtype definitions for electron-json-storage
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'electron-json-storage' {
    declare export function get(key: string, callback: (error: any, data: Object) => void): void
    declare export function set(key: string, json: Object, callback: (error: any) => void): void
    declare export function has(key: string, callback: (error: any, hasKey: boolean) => void): void
    declare export function keys(callback: (error: any, keys: string[]) => void): void
    declare export function remove(key: string, callback: (error: any) => void): void
    declare export function clear(callback: (error: any) => void): void
}