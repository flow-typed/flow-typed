/**
 * Flowtype definitions for rx-node
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare
var npm$namespace$RxNode: {
    toEventEmitter: typeof RxNode$toEventEmitter,
    fromStream: typeof RxNode$fromStream,
    fromReadableStream: typeof RxNode$fromReadableStream,
    fromReadLineStream: typeof RxNode$fromReadLineStream,
    fromWritableStream: typeof RxNode$fromWritableStream,
    fromTransformStream: typeof RxNode$fromTransformStream,
    writeToStream: typeof RxNode$writeToStream,
}
declare
export type RxNode$PublishableEventEmitter = {
    publish(): void
}


/**
 * Converts the given observable sequence to an event emitter with the given event name.
 * The errors are handled on the 'error' event and completion on the 'end' event.
You must call publish in order to invoke the subscription on the Observable sequence.
 * @param  The observable sequence to convert to an EventEmitter.
 * @param  The event name to emit onNext calls.
 * @returns  An EventEmitter which emits the given eventName for each onNext call in addition to 'error' and 'end' events.
*/
declare
function RxNode$toEventEmitter<T>(
    observable: Rx.Observable<T>,
    eventName: string): RxNode$PublishableEventEmitter


/**
 * Converts a flowing stream to an Observable sequence.
 * @param  A stream to convert to a observable sequence.
 * @param  Event that notifies about closed stream. ("end" by default)
 * @param  Event that notifies about incoming data. ("data" by default)
 * @returns  An observable sequence which fires on each 'data' event as well as handling 'error' and finish events like `end` or `finish`.
 */
declare
function RxNode$fromStream<T>(
        stream: NodeJS.ReadableStream,
        finishEventName?: string,
        dataEventName?: string): Rx.Observable<T >


    /**
     * Converts a flowing readable stream to an Observable sequence.
     * @param  A stream to convert to a observable sequence.
     * @param  Event that notifies about incoming data. ("data" by default)
     * @returns  An observable sequence which fires on each 'data' event as well as handling 'error' and 'end' events.
     */
    declare
function RxNode$fromReadableStream<T>(stream: NodeJS.ReadableStream, dataEventName?: string): Rx.Observable<T >


    /**
     * Converts a flowing readline stream to an Observable sequence.
     * @param  A stream to convert to a observable sequence.
     * @returns  An observable sequence which fires on each 'data' event as well as handling 'error' and 'end' events.
     */
    declare
function RxNode$fromReadLineStream<T>(stream: NodeJS.ReadableStream): Rx.Observable<T >


    /**
     * Converts a flowing writeable stream to an Observable sequence.
     * @param  A stream to convert to a observable sequence.
     * @returns  An observable sequence which fires on each 'data' event as well as handling 'error' and 'finish' events.
     */
    declare
function RxNode$fromWritableStream<T>(stream: NodeJS.WritableStream): Rx.Observable<T >


    /**
     * Converts a flowing transform stream to an Observable sequence.
     * @param  A stream to convert to a observable sequence.
     * @param  Event that notifies about incoming data. ("data" by default)
     * @returns  An observable sequence which fires on each 'data' event as well as handling 'error' and 'finish' events.
     */
    declare
function RxNode$fromTransformStream<T>(stream: NodeJS.ReadWriteStream, dataEventName?: string): Rx.Observable<T >


    /**
     * Writes an observable sequence to a stream
     * @param  Observable sequence to write to a stream.
     * @param  The stream to write to.
     * @param  The encoding of the item to write.
     * @returns  The subscription handle.
     */
    declare
function RxNode$writeToStream<T>(
    observable: Rx.Observable<T>,
    stream: NodeJS.WritableStream,
    encoding: string): Rx.Disposabledeclare module 'rx-node' {
    declare module.exports: typeof RxNode
}