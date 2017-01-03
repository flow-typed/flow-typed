/**
 * Flowtype definitions for method-override
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface Express$Request {
    originalMethod?: string
}
declare module 'method-override' {
    declare export interface e$MethodOverrideOptions {
        methods: string[]
    }
    declare module.exports: typeof e
}