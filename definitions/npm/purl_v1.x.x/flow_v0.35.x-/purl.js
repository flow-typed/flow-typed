/**
 * Flowtype definitions for purl
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface purl$ParameterMap {
    [parameterName: string]: string
}

declare
export interface purl$Url {

    /**
     * The .attr() method is used to return information on various parts of the URL.
     */
    attr(option: string): string,

        /**
         * The .param() method is used to return the values of querystring parameters.
         */
        param(): purl$ParameterMap,
        param(parameterName: string): string,

        /**
         * The .segment() method is used to return values of individual segments from the URL's path.
         * Pass in an integer value to get the value of that segment - note however that the count is not zero-indexed like an array - i.e. .segment(1) returns the first segment, not the second one.
        You can also pass in negative values, in which case it will count back from the end of the path rather than forwards from the start.
        */
        segment(position: number): string,

        /**
         * Gets a parameter from the fragment segment
         */
        fparam(): purl$ParameterMap,
        fparam(parameterName: string): string,

        /**
         * Gets the fragment segment at the especified position.
         */
        fsegment(position: number): string
}
declare module 'purl' {
    declare module.exports: typeof purl
}