import type { OboeFunction } from 'npm$namespace$oboe'

declare module 'oboe' {
					declare module.exports: OboeFunction


}

declare module 'npm$namespace$oboe' {
		declare interface OboeFunction {
		drop: Object,
		(url: string): Oboe,
		(options: Options): Oboe,
		(stream: NodeJS.ReadableStream): Oboe
	}

	declare interface Oboe {
		done(callback: (result: any) => void): Oboe,
		fail(callback: (result: FailReason) => void): Oboe,
		node(pattern: string, callback: CallbackSignature): Oboe,
		node(patterns: PatternMap): Oboe,
		on(event: string, pattern: string, callback: CallbackSignature): Oboe,
		on(eventPattern: string, callback: CallbackSignature): Oboe,
		path(pattern: string, callback: CallbackSignature): Oboe,
		path(listeners: any): Oboe,
		removeListener(eventPattern: string, callback: CallbackSignature): Oboe,
		removeListener(event: string, pattern: string, callback: CallbackSignature): Oboe,
		start(callback: (status: number, headers: Object) => void): Oboe,
		abort(): void,
		source: string
	}

	declare interface CallbackSignature {
		(node: any, pathOrHeaders: any, ancestors: Object[]): any
	}

	declare interface Options {
		url: string,
		method?: string,
		headers?: Object,
		body?: any,
		cached?: boolean,
		withCredentials?: boolean
	}

	declare interface FailReason {
		thrown?: Error,
		statusCode?: number,
		body?: string,
		jsonBody?: Object
	}

	declare interface PatternMap {
		[pattern: string]: CallbackSignature
	}

			
}