/**
 * Flowtype definitions for autosize
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface autosize$AutosizeStatic {
    (el: Element): void,
    (el: NodeList): void
}
declare
var autosize: autosize$AutosizeStatic;
declare module 'autosize' {
    declare module.exports: typeof autosize
}