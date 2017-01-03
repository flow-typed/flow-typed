/**
 * Flowtype definitions for component-emitter
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Emitter {
    (obj?: Object): Emitter,
    on(event: string, listener: Function): Emitter,
        once(event: string, listener: Function): Emitter,
        off(event?: string, listener?: Function): Emitter,
        emit(event: string, ...args: any[]): boolean,
        listeners(event: string): Function[],
        hasListeners(event: string): boolean
}
declare module 'component-emitter' {
    declare var Emitter: Emitter;
}