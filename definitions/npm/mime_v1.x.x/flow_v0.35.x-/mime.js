/**
 * Flowtype definitions for mime
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'mime' {
    declare export function lookup(path: string): string
    declare export function extension(mime: string): string
    declare export function load(filepath: string): void
    declare export function define(mimes: Object): void
    declare interface Charsets {
        lookup(mime: string): string
    }
    declare export var charsets: Charsets;
    declare export var default_type: string;
}