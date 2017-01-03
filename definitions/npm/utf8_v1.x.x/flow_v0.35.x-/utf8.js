// @flow
/**
 * Flowtype definitions for utf8
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'utf8' {
    declare     var version: string;

    /**
     * Encodes any given JavaScript string (string) as UTF-8, and returns the UTF-8-encoded version of the string.
     * It throws an error if the input string contains a non-scalar value, i.e. a lone surrogate.
     * @param  
     */
    declare     function encode(inputString: string): string

    /**
     * Decodes any given UTF-8-encoded string (byteString) as UTF-8, and returns the UTF-8-decoded version of the string.
     * It throws an error when malformed UTF-8 is detected.
     * @param  
     */
    declare     function decode(byteString: string): string
}