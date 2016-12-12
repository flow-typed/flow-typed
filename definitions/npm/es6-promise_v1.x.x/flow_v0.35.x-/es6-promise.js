

declare module 'es6-promise' {
		declare interface Thenable<T> {
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>
	): Thenable<U>,
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void
	): Thenable<U>
	}

		declare class Promise<T> extends Thenable<T> {
		constructor(callback: (
		resolve: (value?: T | Thenable<T>) => void, reject: (error?: any) => void
	) => void): this;
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>
	): Promise<U>;
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void
	): Promise<U>;
		catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$Promise' {
			declare function resolve<T>(value?: T | Thenable<T>): Promise<T>

	declare function reject(error: any): Promise<any>

	declare function reject<T>(error: T): Promise<T>

	declare function all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
		values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable<T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]
	): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>

	declare function all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
		values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable<T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]
	): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>

	declare function all<T1, T2, T3, T4, T5, T6, T7, T8>(
		values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable<T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]
	): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>

	declare function all<T1, T2, T3, T4, T5, T6, T7>(
		values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable<T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]
	): Promise<[T1, T2, T3, T4, T5, T6, T7]>

	declare function all<T1, T2, T3, T4, T5, T6>(
		values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable<T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]
	): Promise<[T1, T2, T3, T4, T5, T6]>

	declare function all<T1, T2, T3, T4, T5>(
		values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable<T4>, T5 | Thenable<T5>]
	): Promise<[T1, T2, T3, T4, T5]>

	declare function all<T1, T2, T3, T4>(
		values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable<T4>]
	): Promise<[T1, T2, T3, T4]>

	declare function all<T1, T2, T3>(
		values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]
	): Promise<[T1, T2, T3]>

	declare function all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>

	declare function all<T>(values: (T | Thenable<T>)[]): Promise<T[]>

	declare function race<T>(promises: (T | Thenable<T>)[]): Promise<T>

		
}

declare module 'rsvp' {
			declare export function polyfill(): void

		
}