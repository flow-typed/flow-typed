/**
 * Flowtype definitions for react-fontawesome
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'react-fontawesome' {
    declare type FontAwesomeSize = "lg" |
        "2x" |
        "3x" |
        "4x" |
        "5x";
    declare interface FontAwesomeProps {
        border?: boolean,
            className?: string,
            fixedWidth?: boolean,
            flip?: boolean,
            inverse?: boolean,
            name: string,
            pulse?: boolean,
            rotate?: number,
            size?: FontAwesomeSize,
            spin?: boolean,
            stack?: string,
            style?: React.CSSProperties
    }
    declare module.exports: typeof FontAwesome
}