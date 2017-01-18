/**
 * Flowtype definitions for url-template
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface UrlTemplate$TemplateParser {
    parse(template: string): UrlTemplate$Template
}

declare interface UrlTemplate$Template {
    expand(parameters: any): string
}
declare module 'url-template' {
    declare var urlTemplate: UrlTemplate$TemplateParser;
    declare module.exports: typeof urlTemplate
}