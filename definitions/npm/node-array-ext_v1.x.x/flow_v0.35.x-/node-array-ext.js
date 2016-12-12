

declare module 'node-array-ext' {
			declare export function asyncEach<T>(
		array: Array<T>, each: (i: number, element: T, done: (err?: Error) => void) => void, finish: (err?: Error) => void
	): void

	declare export function awaitEach<T>(
		array: Array<T>, each: (i: number, element: T, done: (err?: Error) => void) => void, finish: (err?: Error) => void
	): void

		
}