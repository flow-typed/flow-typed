/**
 * Flowtype definitions for logat
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'logat' {
    declare interface LogOptionsI {
        logLevel?: number,
            logMethod?: number,
            logFileName?: string
    }
    declare class Logger mixins NodeJS.EventEmitter {
        error(...args: any[]): void;
        warn(...args: any[]): void;
        info(...args: any[]): void;
        debug(...args: any[]): void;
        getOptions(): LogOptionsI;
        setOptions(options: LogOptionsI): void
    }
    declare module.exports: typeof NO PRINT IMPLEMENTED: NewExpression
}