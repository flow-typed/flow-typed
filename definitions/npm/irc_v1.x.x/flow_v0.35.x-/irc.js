/**
 * Flowtype definitions for irc
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'irc' {
    declare module 'colors' {

        /**
         * Takes a color by name, text, and optionally what color to return.
         * @param color - name of color
         * @param text - text to color
         * @param reset_color - color to set after text
         */
        declare     export function wrap(color: string, text: string, reset_color?: string): string
        declare     export var codes: {
            [index: string]: string
        };
    }

    declare module.exports: typeof NodeIRC
}