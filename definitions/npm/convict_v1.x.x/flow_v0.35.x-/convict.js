// @flow
/**
 * Flowtype definitions for convict
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'convict' {
    declare interface convict$Format {
        name?: string,
            validate?: (val: any) => void,
            coerce?: (val: any) => any
    }

    declare interface convict$Schema {
        [name: string]: convict$Schema | {
            default: any,
            doc?: string,

            /**
             * From the implementation:
             * 
              format can be a:
               - predefine type, as seen below
               - an array of enumerated values, e.g. ["production", "development", "testing"]
               - built-in JavaScript type, i.e. Object, Array, String, Number, Boolean
               - or if omitted, the Object.prototype.toString.call of the default value

            The docs also state that any function that validates is ok too
            */
            format?: string | Array<any>| Function,
            env?: string,
            arg?: string
        }
    }

    declare interface convict$Config {
        get(name: string): any,
            default (name: string): any,
            has(name: string): boolean,
            set(name: string, value: any): void,
            load(conf: Object): void,
            loadFile(file: string): void,
            loadFile(files: string[]): void,
            validate(options?: {
                strict?: boolean
            }): void,

            /**
             * Exports all the properties (that is the keys and their current values) as a {JSON} {Object}
             * @returns  A {JSON} compliant {Object}
             */
            getProperties(): Object,

            /**
             * Exports the schema as a {JSON} {Object}
             * @returns  A {JSON} compliant {Object}
             */
            getSchema(): Object,

            /**
             * Exports all the properties (that is the keys and their current values) as a JSON string.
             * @returns  a string representing this object
             */
            toString(): string,

            /**
             * Exports the schema as a JSON string.
             * @returns  a string representing the schema of this {Config}
             */
            getSchemaString(): string
    }
    declare module.exports: typeof convict
    declare     var convict: convict;
}