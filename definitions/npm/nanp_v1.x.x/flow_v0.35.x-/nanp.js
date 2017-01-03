/**
 * Flowtype definitions for nanp
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Nanp {

    /**
     * Test if a string is a North American Number Plan (phone) number.
     * @param  The phone number being tested.
     * @returns  True if the given phoneNumber is a NANP number.
     */
    (string: string): boolean,

    /**
     * Removes all parenthesis, dashes, dots, spaces.
     * Removes leading `1` or `+1` only on strings longer than 10 digits 
     * @param  The phone number that is being stripped.
     * @returns  
     */
    strip(phoneNumber: string): string
}
declare
var nanp: Nanp;
declare module 'nanp' {
    declare module.exports: typeof nanp
}