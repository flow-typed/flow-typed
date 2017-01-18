/**
 * Flowtype definitions for uri-templates
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'uri-templates' {
    declare module.exports: typeof utpl
    declare export interface utpl$URITemplate {
        fillFromObject(vars: Object): string,
            fill(callback: (varName: string) => string): string,
            fromUri(uri: string): Object
    }
}