import type { TraversonMethods } from 'npm$namespace$Traverson'

declare module 'traverson' {
					declare module.exports: TraversonMethods


}

declare module 'npm$namespace$Traverson' {
		declare interface TraversonMethods {
		from(uri: string): Builder,
		registerMediaType(name: string, handler: any): TraversonMethods
	}

	declare interface Builder {
		withRequestOptions(options: any): Builder,
		withTemplateParameters(parameters: any): Builder,
		json(): Builder,
		jsonHal(): Builder,
		setMediaType(type_name: string): Builder,
		follow(first_pattern: string, ...rest_patterns: string[]): Builder,
		get(callback: (err: any, document: any, traversal?: Traversal) => void): InAction,
		getResource(callback: (err: any, document: any, traversal?: Traversal) => void): InAction,
		getUrl(callback: (err: any, document: any, traversal?: Traversal) => void): InAction,
		post(
		data: any, callback: (err: any, document: any, traversal?: Traversal) => void
	): InAction,
		put(
		data: any, callback: (err: any, document: any, traversal?: Traversal) => void
	): InAction,
		patch(
		data: any, callback: (err: any, document: any, traversal?: Traversal) => void
	): InAction,
		delete(callback: (err: any, document: any, traversal?: Traversal) => void): InAction,
		newRequest(): Builder
	}

	declare interface Json {
		parseJson(): any
	}

	declare interface Traversal {
		continue(): Builder
	}

	declare interface InAction {
		abort(): void
	}

			
}