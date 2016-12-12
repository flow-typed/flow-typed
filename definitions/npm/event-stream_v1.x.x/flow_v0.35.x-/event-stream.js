

declare module 'event-stream' {
			declare export function map(asyncFunction: Function): stream.Stream

	declare export function mapSync(syncFunction: Function): stream.Stream

	declare export function split(matcher: string | RegExp): stream.Stream

	declare export function join(separator: string): stream.Stream

	declare export function concat(...stream: stream.Stream[]): stream.Stream

	declare export function concat(streamArray: stream.Stream[]): stream.Stream

	declare export function merge(...stream: stream.Stream[]): stream.Stream

	declare export function merge(streamArray: stream.Stream[]): stream.Stream

	declare export function replace(from: string | RegExp, to: string | RegExp): stream.Stream

	declare export function parse(): any

	declare export function stringify(): stream.Stream

	declare export function readable(asyncFunction: Function): stream.Stream

	declare export function readArray(array: any[]): stream.Stream

	declare export function writeArray(callback: Function): stream.Stream

	declare export function pause(): stream.Stream | void

	declare export function duplex(writeStream: stream.Writable, readStream: stream.Readable): stream.Stream

	declare export function child(child_process: any): stream.Stream

	declare export function wait(callback: Function): stream.Stream

		
}