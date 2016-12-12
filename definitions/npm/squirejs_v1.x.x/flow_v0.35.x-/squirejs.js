

declare module 'squirejs' {
					
}

declare module 'Squire' {
				declare class Squire  {
		constructor(): this;
		constructor(context: string): this;
		mock(name: string, mock: any): Squire;
		mock(mocks: {
		[name: string]: any
	}): Squire;
		require(dependencies: string[], callback: Function, errback?: Function): Squire;
		store(name: string | string[]): Squire;
		clean(): Squire;
		clean(name: string | string[]): Squire;
		remove(): String;
		run(dependencies: string[], test: Function): (done: Function) => void
	}

	declare module.exports: undefined


}

declare module 'Helpers' {
			declare export function returns<T>(what: T): () => T

	declare export function constructs<T>(what: T): () => (() => T)

		
}