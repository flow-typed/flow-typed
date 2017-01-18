/**
 * Flowtype definitions for hypertext-application-language
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * Describe a HAL Link object
 * 
https://tools.ietf.org/html/draft-kelly-json-hal-06#section-5
*/
declare interface Hal$Link {
    deprecation?: string,
        href: string,
        hreflang?: string,
        name?: string,
        profile?: string,
        templated?: boolean,
        title?: string,
        type?: string
}