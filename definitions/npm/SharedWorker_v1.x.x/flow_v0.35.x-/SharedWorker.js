// @flow
/**
 * Flowtype definitions for SharedWorker
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type SharedWorker$AbstractWorker = {
    onerror: (ev: ErrorEvent) => any
} & EventTarget


declare export type SharedWorker$SharedWorker = {

    /**
     * the value it was assigned by the object's constructor.
     * It represents the MessagePort for communicating with the shared worker.
     * @type  
     */
    port: MessagePort
} & SharedWorker$AbstractWorker
declare var SharedWorker: {
    prototype: SharedWorker$SharedWorker,
    new(stringUrl: string, name?: string): SharedWorker$SharedWorker
};