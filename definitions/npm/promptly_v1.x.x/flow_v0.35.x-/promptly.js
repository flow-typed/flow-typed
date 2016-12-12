

declare module 'promptly' {
		declare interface Callback {
		(err: Error, value: string): void
	}

	declare export interface Options {
		default?: string,
		trim?: boolean,
		validator?: any,
		retry?: boolean,
		silent?: boolean,
		input?: NodeJS.ReadableStream,
		output?: NodeJS.WritableStream
	}

	declare export function prompt(message: string, fn?: Callback): any

	declare export function prompt(message: string, opts: Options, fn?: Callback): any

	declare export function password(message: string, fn?: Callback): any

	declare export function password(message: string, opts: Options, fn?: Callback): any

	declare export function confirm(message: string, fn?: Callback): any

	declare export function confirm(message: string, opts: Options, fn?: Callback): any

	declare export function choose(message: string, choices: string[], fn?: Callback): any

	declare export function choose(message: string, choices: string[], opts: Options, fn?: Callback): any

		
}