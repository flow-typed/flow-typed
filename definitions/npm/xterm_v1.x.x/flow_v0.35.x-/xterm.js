/**
 * Flowtype definitions for xterm
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'Xterm' {
    declare interface IOptions {
        colors?: string[],
            theme?: string,
            convertEol?: boolean,
            termName?: string,
            geometry?: number[],
            cursorBlink?: boolean,
            visualBell?: boolean,
            popOnBell?: boolean,
            scrollback?: number,
            debug?: boolean,
            cancelEvents?: boolean
    }
}
declare interface XtermConstructor {
    new(options?: Xterm.IOptions): Xterm,
    (options?: Xterm.IOptions): Xterm
}
declare var Xterm: XtermConstructor;
declare module 'xterm' {
    declare module.exports: typeof Xterm
}