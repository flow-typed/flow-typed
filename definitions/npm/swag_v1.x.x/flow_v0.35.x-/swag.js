/**
 * Flowtype definitions for swag
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface SwagStatic {
    registerHelpers(handlebars: typeof Handlebars): void
}
declare
var Swag: SwagStatic;
declare module 'swag' {
    declare module.exports: typeof Swag
}