/**
 * Flowtype definitions for jquery.rowGrid
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JQueryRowGridJSOptions {
    minMargin?: number,
        maxMargin?: number,
        itemSelector: string
}
declare interface JQuery {
    rowGrid(options?: JQueryRowGridJSOptions): JQuery,
        rowGrid(appended: string): JQuery
}