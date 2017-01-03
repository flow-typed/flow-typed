// @flow
/**
 * Flowtype definitions for pg-types
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'pg-types' {
    declare interface TypeParser {
        (value: any): any
    }
    declare     export function getTypeParser(oid: number, format: string): TypeParser
    declare     export function setTypeParser(oid: number, format: string, parseFn: TypeParser): void

    declare     var npm$namespace$arrayParser: {
        create: typeof arrayParser$create,
    }
    declare     export function arrayParser$create(source: any, transform: TypeParser): {
        parse: () => any[]
    }
}