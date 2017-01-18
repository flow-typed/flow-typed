/**
 * Flowtype definitions for purl-jquery
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JQueryStatic {

    /**
     * Parse the current page URL 
     */
    url(): purl.Url,

        /**
         * Pass in a URI as a string and parse that 
         * @param someUrl the url to be parsed
         */
        url(someUrl: string): purl.Url
}
declare interface JQuery {

    /**
     * extract the URL from the selected element and parse that - will work on any element with a `src`, `href` or `action` attribute.
     */
    url(): purl.Url
}