

declare module 'bluebird-2.0' {
		declare interface PromiseCancelHandlerSetter {
		(handler: () => void): void
	}

	declare interface PromiseConstructor {
		new <T>(
		callback: (
		resolve: (thenableOrResult?: T | PromiseLike<T>) => void, reject: (error: any) => void, onCancel?: PromiseCancelHandlerSetter
	) => void
	): Promise<T>,
		config(
		options: {
		warnings?: boolean | {
		wForgottenReturn?: boolean
	},
		longStackTraces?: boolean,
		cancellation?: boolean,
		monitoring?: boolean
	}
	): void,
		RangeError(): RangeError,
		CancellationError(): Promise.CancellationError,
		TimeoutError(): Promise.TimeoutError,
		TypeError(): Promise.TypeError,
		RejectionError(): Promise.RejectionError,
		OperationalError(): Promise.OperationalError,
		setScheduler(scheduler: (callback: (...args: any[]) => void) => void): void,
		try<T>(fn: () => T | PromiseLike<T>, args?: any[], ctx?: any): Promise<T>,
		attempt<T>(fn: () => T | PromiseLike<T>, args?: any[], ctx?: any): Promise<T>,
		method(fn: Function): Function,
		resolve<T>(value: T | PromiseLike<T>): Promise<T>,
		resolve(): Promise<void>,
		reject(reason: any): Promise<any>,
		reject<T>(reason: any): Promise<T>,
		defer<T>(): Promise.Resolver<T>,
		cast<T>(value: T | PromiseLike<T>): Promise<T>,
		bind(thisArg: any): Promise<void>,
		is(value: any): boolean,
		longStackTraces(): void,
		delay<T>(ms: number, value: T | PromiseLike<T>): Promise<T>,
		delay(ms: number): Promise<void>,
		promisify<T>(
		func: (callback: (err: any, result: T) => void) => void, receiver?: any
	): () => Promise<T>,
		promisify<T, A1>(
		func: (arg1: A1, callback: (err: any, result: T) => void) => void, receiver?: any
	): (arg1: A1) => Promise<T>,
		promisify<T, A1, A2>(
		func: (arg1: A1, arg2: A2, callback: (err: any, result: T) => void) => void, receiver?: any
	): (arg1: A1, arg2: A2) => Promise<T>,
		promisify<T, A1, A2, A3>(
		func: (arg1: A1, arg2: A2, arg3: A3, callback: (err: any, result: T) => void) => void, receiver?: any
	): (arg1: A1, arg2: A2, arg3: A3) => Promise<T>,
		promisify<T, A1, A2, A3, A4>(
		func: (
		arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, result: T) => void
	) => void, receiver?: any
	): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Promise<T>,
		promisify<T, A1, A2, A3, A4, A5>(
		func: (
		arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, result: T) => void
	) => void, receiver?: any
	): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Promise<T>,
		promisify(nodeFunction: Function, receiver?: any): Function,
		promisifyAll(target: Object, options?: Promise.PromisifyAllOptions): any,
		fromNode(
		resolver: (callback: (err: any, result?: any) => void) => void, options?: {
		multiArgs?: boolean
	}
	): Promise<any>,
		fromCallback(
		resolver: (callback: (err: any, result?: any) => void) => void, options?: {
		multiArgs?: boolean
	}
	): Promise<any>,
		coroutine<T>(generatorFunction: Function): Function,
		spawn<T>(generatorFunction: Function): Promise<T>,
		noConflict(): typeof Promise,
		onPossiblyUnhandledRejection(handler: (reason: any) => any): void,
		all<T>(values: PromiseLike<PromiseLike<T>[]>): Promise<T[]>,
		all<T>(values: PromiseLike<T[]>): Promise<T[]>,
		all<T>(values: PromiseLike<T>[]): Promise<T[]>,
		all<T1, T2, T3, T4, T5>(
		values: [PromiseLike<T1>, PromiseLike<T2>, PromiseLike<T3>, PromiseLike<T4>, PromiseLike<T5>]
	): Promise<[T1, T2, T3, T4, T5]>,
		all<T1, T2, T3, T4>(
		values: [PromiseLike<T1>, PromiseLike<T2>, PromiseLike<T3>, PromiseLike<T4>]
	): Promise<[T1, T2, T3, T4]>,
		all<T1, T2, T3>(
		values: [PromiseLike<T1>, PromiseLike<T2>, PromiseLike<T3>]
	): Promise<[T1, T2, T3]>,
		all<T1, T2>(values: [PromiseLike<T1>, PromiseLike<T2>]): Promise<[T1, T2]>,
		all<T>(values: T[]): Promise<T[]>,
		props(object: Promise<Object>): Promise<Object>,
		props(object: Object): Promise<Object>,
		settle<T>(values: PromiseLike<PromiseLike<T>[]>): Promise<Promise.Inspection<T>[]>,
		settle<T>(values: PromiseLike<T[]>): Promise<Promise.Inspection<T>[]>,
		settle<T>(values: PromiseLike<T>[]): Promise<Promise.Inspection<T>[]>,
		settle<T>(values: T[]): Promise<Promise.Inspection<T>[]>,
		any<T>(values: PromiseLike<PromiseLike<T>[]>): Promise<T>,
		any<T>(values: PromiseLike<T[]>): Promise<T>,
		any<T>(values: PromiseLike<T>[]): Promise<T>,
		any<T>(values: T[]): Promise<T>,
		race<T>(values: PromiseLike<PromiseLike<T>[]>): Promise<T>,
		race<T>(values: PromiseLike<T[]>): Promise<T>,
		race<T>(values: PromiseLike<T>[]): Promise<T>,
		race<T>(values: T[]): Promise<T>,
		some<T>(values: PromiseLike<PromiseLike<T>[]>, count: number): Promise<T[]>,
		some<T>(values: PromiseLike<T[]>, count: number): Promise<T[]>,
		some<T>(values: PromiseLike<T>[], count: number): Promise<T[]>,
		some<T>(values: T[], count: number): Promise<T[]>,
		join<T>(...values: PromiseLike<T>[]): Promise<T[]>,
		join<T>(...values: T[]): Promise<T[]>,
		map<T, U>(
		values: PromiseLike<PromiseLike<T>[]>, mapper: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>, options?: Promise.ConcurrencyOption
	): Promise<U[]>,
		map<T, U>(
		values: PromiseLike<T[]>, mapper: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>, options?: Promise.ConcurrencyOption
	): Promise<U[]>,
		map<T, U>(
		values: PromiseLike<T>[], mapper: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>, options?: Promise.ConcurrencyOption
	): Promise<U[]>,
		map<T, U>(
		values: T[], mapper: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>, options?: Promise.ConcurrencyOption
	): Promise<U[]>,
		mapSeries<R, U>(
		values: PromiseLike<PromiseLike<R>[]>, mapper: (item: R, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<U[]>,
		mapSeries<R, U>(
		values: PromiseLike<R[]>, mapper: (item: R, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<U[]>,
		mapSeries<R, U>(
		values: PromiseLike<R>[], mapper: (item: R, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<U[]>,
		mapSeries<R, U>(
		values: R[], mapper: (item: R, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<U[]>,
		reduce<T, U>(
		values: PromiseLike<PromiseLike<T>[]>, reducer: (total: U, current: T, index: number, arrayLength: number) => U | PromiseLike<U>, initialValue?: U
	): Promise<U>,
		reduce<T, U>(
		values: PromiseLike<T[]>, reducer: (total: U, current: T, index: number, arrayLength: number) => U | PromiseLike<U>, initialValue?: U
	): Promise<U>,
		reduce<T, U>(
		values: PromiseLike<T>[], reducer: (total: U, current: T, index: number, arrayLength: number) => U | PromiseLike<U>, initialValue?: U
	): Promise<U>,
		reduce<T, U>(
		values: T[], reducer: (total: U, current: T, index: number, arrayLength: number) => U | PromiseLike<U>, initialValue?: U
	): Promise<U>,
		filter<T>(
		values: PromiseLike<PromiseLike<T>[]>, filterer: (item: T, index: number, arrayLength: number) => boolean | PromiseLike<boolean>, option?: Promise.ConcurrencyOption
	): Promise<T[]>,
		filter<T>(
		values: PromiseLike<T[]>, filterer: (item: T, index: number, arrayLength: number) => boolean | PromiseLike<boolean>, option?: Promise.ConcurrencyOption
	): Promise<T[]>,
		filter<T>(
		values: PromiseLike<T>[], filterer: (item: T, index: number, arrayLength: number) => boolean | PromiseLike<boolean>, option?: Promise.ConcurrencyOption
	): Promise<T[]>,
		filter<T>(
		values: T[], filterer: (item: T, index: number, arrayLength: number) => boolean | PromiseLike<boolean>, option?: Promise.ConcurrencyOption
	): Promise<T[]>,
		each<T, U>(
		values: PromiseLike<PromiseLike<T>[]>, iterator: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<T[]>,
		each<T, U>(
		values: PromiseLike<T>[], iterator: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<T[]>,
		each<T, U>(
		values: T[] | PromiseLike<T[]>, iterator: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<T[]>
	}

	declare interface Promise<T> {
		then<U>(
		onFulfill: (value: T) => U | PromiseLike<U>, onReject?: (error: any) => U | PromiseLike<U>, onProgress?: (note: any) => any
	): Promise<U>,
		then<U>(
		onFulfill: (value: T) => U | PromiseLike<U>, onReject?: (error: any) => void | PromiseLike<void>, onProgress?: (note: any) => any
	): Promise<U>,
		catch(
		onReject?: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>
	): Promise<T>,
		caught(
		onReject?: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>
	): Promise<T>,
		catch<U>(onReject?: (error: any) => U | PromiseLike<U>): Promise<U | T>,
		caught<U>(onReject?: (error: any) => U | PromiseLike<U>): Promise<U | T>,
		catch(
		predicate: (error: any) => boolean, onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>
	): Promise<T>,
		caught(
		predicate: (error: any) => boolean, onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>
	): Promise<T>,
		catch<U>(
		predicate: (error: any) => boolean, onReject: (error: any) => U | PromiseLike<U>
	): Promise<U | T>,
		caught<U>(
		predicate: (error: any) => boolean, onReject: (error: any) => U | PromiseLike<U>
	): Promise<U | T>,
		catch(
		ErrorClass: Function, onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>
	): Promise<T>,
		caught(
		ErrorClass: Function, onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>
	): Promise<T>,
		catch<U>(
		ErrorClass: Function, onReject: (error: any) => U | PromiseLike<U>
	): Promise<U | T>,
		caught<U>(
		ErrorClass: Function, onReject: (error: any) => U | PromiseLike<U>
	): Promise<U | T>,
		error<U>(onReject: (reason: any) => PromiseLike<U>): Promise<U>,
		error<U>(onReject: (reason: any) => U): Promise<U>,
		finally<U>(handler: () => U | PromiseLike<U>): Promise<T>,
		lastly<U>(handler: () => U | PromiseLike<U>): Promise<T>,
		bind(thisArg: any): Promise<T>,
		done<U>(
		onFulfilled?: (value: T) => PromiseLike<U>, onRejected?: (error: any) => U | PromiseLike<U>, onProgress?: (note: any) => any
	): void,
		done<U>(
		onFulfilled?: (value: T) => U, onRejected?: (error: any) => U | PromiseLike<U>, onProgress?: (note: any) => any
	): void,
		tap<U>(onFulFill: (value: T) => U | PromiseLike<U>): Promise<T>,
		progressed(handler: (note: any) => any): Promise<T>,
		delay(ms: number): Promise<T>,
		timeout(ms: number, message?: string): Promise<T>,
		nodeify(
		callback: (err: any, value?: T) => void, options?: Promise.SpreadOption
	): Promise<T>,
		nodeify(...sink: any[]): Promise<T>,
		cancellable(): Promise<T>,
		cancel<U>(reason?: any): Promise<U>,
		fork<U>(
		onFulfilled?: (value: T) => U | PromiseLike<U>, onRejected?: (error: any) => U | PromiseLike<U>, onProgress?: (note: any) => any
	): Promise<U>,
		uncancellable(): Promise<T>,
		isCancellable(): boolean,
		isFulfilled(): boolean,
		isRejected(): boolean,
		isPending(): boolean,
		isResolved(): boolean,
		value(): T,
		reason(): any,
		inspect(): Promise.Inspection<T>,
		call(propertyName: string, ...args: any[]): Promise<any>,
		return(): Promise<any>,
		thenReturn(): Promise<any>,
		return<U>(value: U): Promise<U>,
		thenReturn<U>(value: U): Promise<U>,
		throw(reason: Error): Promise<T>,
		thenThrow(reason: Error): Promise<T>,
		toString(): string,
		toJSON(): Object,
		spread<U>(
		onFulfill: Function, onReject?: (reason: any) => U | PromiseLike<U>
	): Promise<U>,
		all<U>(): Promise<U[]>,
		props(): Promise<Object>,
		settle<U>(): Promise<Promise.Inspection<U>[]>,
		any<U>(): Promise<U>,
		some<U>(count: number): Promise<U[]>,
		race<U>(): Promise<U>,
		map<Q, U>(
		mapper: (item: Q, index: number, arrayLength: number) => U | PromiseLike<U>, options?: Promise.ConcurrencyOption
	): Promise<U[]>,
		mapSeries<Q, U>(
		mapper: (item: Q, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<U[]>,
		reduce<Q, U>(
		reducer: (memo: U, item: Q, index: number, arrayLength: number) => U | PromiseLike<U>, initialValue?: U
	): Promise<U>,
		filter<U>(
		filterer: (item: U, index: number, arrayLength: number) => boolean | PromiseLike<boolean>, options?: Promise.ConcurrencyOption
	): Promise<U[]>,
		each<T, U>(
		iterator: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>
	): Promise<T[]>
	}

			
}

declare module 'npm$namespace$Promise' {
		declare export interface RangeError {
		
	}

	declare export interface CancellationError {
		
	}

	declare export interface TimeoutError {
		
	}

	declare export interface TypeError {
		
	}

	declare export interface RejectionError {
		
	}

	declare export interface OperationalError {
		
	}

	declare export interface ConcurrencyOption {
		concurrency: number
	}

	declare export interface SpreadOption {
		spread: boolean
	}

	declare export interface PromisifyAllOptions {
		suffix?: string,
		filter?: (
		name: string, func: Function, target?: any, passesDefaultFilter?: boolean
	) => boolean,
		promisifier?: (originalMethod: Function) => () => PromiseLike<any>
	}

	declare export interface Resolver<T> {
		promise: Promise<T>,
		resolve(value: T): void,
		resolve(): void,
		reject(reason: any): void,
		progress(value: any): void,
		callback: (err: any, value: T, ...values: T[]) => void
	}

	declare export interface Inspection<T> {
		isFulfilled(): boolean,
		isRejected(): boolean,
		isPending(): boolean,
		value(): T,
		reason(): any
	}

			
}

declare module 'bluebird' {
					declare module.exports: undefined


}