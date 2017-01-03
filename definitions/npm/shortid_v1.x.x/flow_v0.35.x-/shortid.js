// @flow
/**
 * Flowtype definitions for shortid
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'shortid' {
    declare     export function generate(): string
    declare     export function characters(string: string): string
    declare     export function isValid(id: any): boolean
    declare     export function worker(integer: number): void
    declare     export function seed(float: number): void
}