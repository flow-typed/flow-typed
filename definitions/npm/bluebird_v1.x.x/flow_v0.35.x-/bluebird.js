

declare module 'bluebird' {
				declare class Bluebird<R> extends Bluebird$Thenable<R> {
		constructor(callback: (
		resolve: (thenableOrResult?: R | Bluebird.Thenable<R>) => void, reject: (error?: any) => void, onCancel?: (callback: () => void) => void
	) => void): this;
		then<U1, U2>(
		onFulfill: (value: R) => U1 | Bluebird.Thenable<U1>, onReject: (error: any) => U2 | Bluebird.Thenable<U2>
	): Bluebird<U1 | U2>;
		then<U>(
		onFulfill: (value: R) => U | Bluebird.Thenable<U>, onReject: (error: any) => U | Bluebird.Thenable<U>
	): Bluebird<U>;
		then<U>(onFulfill: (value: R) => U | Bluebird.Thenable<U>): Bluebird<U>;
		then(): Bluebird<R>;
		catch(
		onReject?: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>
	): Bluebird<R>;
		caught(
		onReject?: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>
	): Bluebird<R>;
		catch<U>(onReject?: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;
		caught<U>(onReject?: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;
		catch(
		predicate: (error: any) => boolean, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>
	): Bluebird<R>;
		caught(
		predicate: (error: any) => boolean, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>
	): Bluebird<R>;
		catch<U>(
		predicate: (error: any) => boolean, onReject: (error: any) => U | Bluebird.Thenable<U>
	): Bluebird<U | R>;
		caught<U>(
		predicate: (error: any) => boolean, onReject: (error: any) => U | Bluebird.Thenable<U>
	): Bluebird<U | R>;
		catch<E>(
		ErrorClass: NO PRINT IMPLEMENTED: ConstructorType, onReject: (error: E) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>
	): Bluebird<R>;
		caught<E>(
		ErrorClass: NO PRINT IMPLEMENTED: ConstructorType, onReject: (error: E) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>
	): Bluebird<R>;
		catch<E, U>(
		ErrorClass: NO PRINT IMPLEMENTED: ConstructorType, onReject: (error: E) => U | Bluebird.Thenable<U>
	): Bluebird<U | R>;
		caught<E, U>(
		ErrorClass: NO PRINT IMPLEMENTED: ConstructorType, onReject: (error: E) => U | Bluebird.Thenable<U>
	): Bluebird<U | R>;
		catch(
		predicate: Object, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>
	): Bluebird<R>;
		caught(
		predicate: Object, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>
	): Bluebird<R>;
		catch<U>(
		predicate: Object, onReject: (error: any) => U | Bluebird.Thenable<U>
	): Bluebird<U | R>;
		caught<U>(
		predicate: Object, onReject: (error: any) => U | Bluebird.Thenable<U>
	): Bluebird<U | R>;
		error<U>(onReject: (reason: any) => U | Bluebird.Thenable<U>): Bluebird<U>;
		finally<U>(handler: () => U | Bluebird.Thenable<U>): Bluebird<R>;
		lastly<U>(handler: () => U | Bluebird.Thenable<U>): Bluebird<R>;
		bind(thisArg: any): Bluebird<R>;
		done<U>(
		onFulfilled?: (value: R) => U | Bluebird.Thenable<U>, onRejected?: (error: any) => U | Bluebird.Thenable<U>
	): void;
		tap<U>(onFulFill: (value: R) => Bluebird.Thenable<U>): Bluebird<R>;
		tap<U>(onFulfill: (value: R) => U): Bluebird<R>;
		delay(ms: number): Bluebird<R>;
		timeout(ms: number, message?: string | Error): Bluebird<R>;
		nodeify(callback: (err: any, value?: R) => void, options?: Bluebird.SpreadOption): this;
		nodeify(...sink: any[]): this;
		asCallback(callback: (err: any, value?: R) => void, options?: Bluebird.SpreadOption): this;
		asCallback(...sink: any[]): this;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isPending(): boolean;
		isCancelled(): boolean;
		isResolved(): boolean;
		value(): R;
		reason(): any;
		reflect(): Bluebird<Bluebird.Inspection<R>>;
		reflect(): Bluebird<Bluebird.Inspection<any>>;
		call(propertyName: string, ...args: any[]): Bluebird<any>;
		get<U>(key: string | number): Bluebird<U>;
		return(): Bluebird<any>;
		thenReturn(): Bluebird<any>;
		return<U>(value: U): Bluebird<U>;
		thenReturn<U>(value: U): Bluebird<U>;
		throw(reason: Error): Bluebird<R>;
		thenThrow(reason: Error): Bluebird<R>;
		toString(): string;
		toJSON(): Object;
		spread<U, W>(
		fulfilledHandler: (...values: W[]) => U | Bluebird.Thenable<U>
	): Bluebird<U>;
		spread<U>(fulfilledHandler: Function): Bluebird<U>;
		all<U>(): Bluebird<U[]>;
		props(): Bluebird<Object>;
		any<U>(): Bluebird<U>;
		some<U>(count: number): Bluebird<U[]>;
		race<U>(): Bluebird<U>;
		map<Q, U>(
		mapper: (item: Q, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption
	): Bluebird<U[]>;
		reduce<Q, U>(
		reducer: (
		memo: U, item: Q, index: number, arrayLength: number
	) => U | Bluebird.Thenable<U>, initialValue?: U
	): Bluebird<U>;
		filter<U>(
		filterer: (
		item: U, index: number, arrayLength: number
	) => boolean | Bluebird.Thenable<boolean>, options?: Bluebird.ConcurrencyOption
	): Bluebird<U[]>;
		each<R, U>(
		iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>
	): Bluebird<R[]>;
		mapSeries<R, U>(
		iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>
	): Bluebird<U[]>;
		cancel(): void;
		suppressUnhandledRejections(): void;
		try<R>(fn: () => R | Bluebird.Thenable<R>): Bluebird<R>;
		attempt<R>(fn: () => R | Bluebird.Thenable<R>): Bluebird<R>;
		method(fn: Function): Function;
		resolve(): Bluebird<void>;
		resolve<R>(value: R | Bluebird.Thenable<R>): Bluebird<R>;
		reject(reason: any): Bluebird<any>;
		reject<R>(reason: any): Bluebird<R>;
		defer<R>(): Bluebird.Resolver<R>;
		cast<R>(value: R | Bluebird.Thenable<R>): Bluebird<R>;
		bind(thisArg: any): Bluebird<void>;
		is(value: any): boolean;
		longStackTraces(): void;
		delay<R>(ms: number, value: R | Bluebird.Thenable<R>): Bluebird<R>;
		delay(ms: number): Bluebird<void>;
		promisify<T>(
		func: (callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions
	): () => Bluebird<T>;
		promisify<T, A1>(
		func: (arg1: A1, callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions
	): (arg1: A1) => Bluebird<T>;
		promisify<T, A1, A2>(
		func: (arg1: A1, arg2: A2, callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions
	): (arg1: A1, arg2: A2) => Bluebird<T>;
		promisify<T, A1, A2, A3>(
		func: (arg1: A1, arg2: A2, arg3: A3, callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions
	): (arg1: A1, arg2: A2, arg3: A3) => Bluebird<T>;
		promisify<T, A1, A2, A3, A4>(
		func: (
		arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, result: T) => void
	) => void, options?: Bluebird.PromisifyOptions
	): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Bluebird<T>;
		promisify<T, A1, A2, A3, A4, A5>(
		func: (
		arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, result: T) => void
	) => void, options?: Bluebird.PromisifyOptions
	): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Bluebird<T>;
		promisify(nodeFunction: Function, options?: Bluebird.PromisifyOptions): Function;
		promisifyAll(target: Object, options?: Bluebird.PromisifyAllOptions): Object;
		fromNode(
		resolver: (callback: (err: any, result?: any) => void) => void, options?: Bluebird.FromNodeOptions
	): Bluebird<any>;
		fromNode<T>(
		resolver: (callback: (err: any, result?: T) => void) => void, options?: Bluebird.FromNodeOptions
	): Bluebird<T>;
		fromCallback(
		resolver: (callback: (err: any, result?: any) => void) => void, options?: Bluebird.FromNodeOptions
	): Bluebird<any>;
		fromCallback<T>(
		resolver: (callback: (err: any, result?: T) => void) => void, options?: Bluebird.FromNodeOptions
	): Bluebird<T>;
		coroutine<R>(generatorFunction: Function): Function;
		onPossiblyUnhandledRejection(handler: (reason: any) => any): void;
		all<T1, T2, T3, T4, T5>(
		values: [Bluebird.Thenable<T1> | T1, Bluebird.Thenable<T2> | T2, Bluebird.Thenable<T3> | T3, Bluebird.Thenable<T4> | T4, Bluebird.Thenable<T5> | T5]
	): Bluebird<[T1, T2, T3, T4, T5]>;
		all<T1, T2, T3, T4>(
		values: [Bluebird.Thenable<T1> | T1, Bluebird.Thenable<T2> | T2, Bluebird.Thenable<T3> | T3, Bluebird.Thenable<T4> | T4]
	): Bluebird<[T1, T2, T3, T4]>;
		all<T1, T2, T3>(
		values: [Bluebird.Thenable<T1> | T1, Bluebird.Thenable<T2> | T2, Bluebird.Thenable<T3> | T3]
	): Bluebird<[T1, T2, T3]>;
		all<T1, T2>(
		values: [Bluebird.Thenable<T1> | T1, Bluebird.Thenable<T2> | T2]
	): Bluebird<[T1, T2]>;
		all<T1>(values: [Bluebird.Thenable<T1> | T1]): Bluebird<[T1]>;
		all<R>(
		values: Bluebird.Thenable<(Bluebird.Thenable<R> | R)[]> | (Bluebird.Thenable<R> | R)[]
	): Bluebird<R[]>;
		props(object: Bluebird<Object>): Bluebird<Object>;
		props(object: Object): Bluebird<Object>;
		any<R>(
		values: Bluebird.Thenable<(Bluebird.Thenable<R> | R)[]> | (Bluebird.Thenable<R> | R)[]
	): Bluebird<R>;
		race<R>(
		values: Bluebird.Thenable<(Bluebird.Thenable<R> | R)[]> | (Bluebird.Thenable<R> | R)[]
	): Bluebird<R>;
		some<R>(
		values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, count: number
	): Bluebird<R[]>;
		some<R>(values: Bluebird.Thenable<R[]>, count: number): Bluebird<R[]>;
		some<R>(values: Bluebird.Thenable<R>[], count: number): Bluebird<R[]>;
		some<R>(values: R[], count: number): Bluebird<R[]>;
		join<R, A1>(
		arg1: A1 | Bluebird.Thenable<A1>, handler: (arg1?: A1) => R | Bluebird.Thenable<R>
	): Bluebird<R>;
		join<R, A1, A2>(
		arg1: A1 | Bluebird.Thenable<A1>, arg2: A2 | Bluebird.Thenable<A2>, handler: (arg1?: A1, arg2?: A2) => R | Bluebird.Thenable<R>
	): Bluebird<R>;
		join<R, A1, A2, A3>(
		arg1: A1 | Bluebird.Thenable<A1>, arg2: A2 | Bluebird.Thenable<A2>, arg3: A3 | Bluebird.Thenable<A3>, handler: (arg1?: A1, arg2?: A2, arg3?: A3) => R | Bluebird.Thenable<R>
	): Bluebird<R>;
		join<R, A1, A2, A3, A4>(
		arg1: A1 | Bluebird.Thenable<A1>, arg2: A2 | Bluebird.Thenable<A2>, arg3: A3 | Bluebird.Thenable<A3>, arg4: A4 | Bluebird.Thenable<A4>, handler: (arg1?: A1, arg2?: A2, arg3?: A3, arg4?: A4) => R | Bluebird.Thenable<R>
	): Bluebird<R>;
		join<R, A1, A2, A3, A4, A5>(
		arg1: A1 | Bluebird.Thenable<A1>, arg2: A2 | Bluebird.Thenable<A2>, arg3: A3 | Bluebird.Thenable<A3>, arg4: A4 | Bluebird.Thenable<A4>, arg5: A5 | Bluebird.Thenable<A5>, handler: (
		arg1?: A1, arg2?: A2, arg3?: A3, arg4?: A4, arg5?: A5
	) => R | Bluebird.Thenable<R>
	): Bluebird<R>;
		join<R>(...values: (R | Bluebird.Thenable<R>)[]): Bluebird<R[]>;
		map<R, U>(
		values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, mapper: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption
	): Bluebird<U[]>;
		map<R, U>(
		values: Bluebird.Thenable<R[]>, mapper: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption
	): Bluebird<U[]>;
		map<R, U>(
		values: Bluebird.Thenable<R>[], mapper: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption
	): Bluebird<U[]>;
		map<R, U>(
		values: R[], mapper: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption
	): Bluebird<U[]>;
		reduce<R, U>(
		values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, reducer: (
		total: U, current: R, index: number, arrayLength: number
	) => U | Bluebird.Thenable<U>, initialValue?: U
	): Bluebird<U>;
		reduce<R, U>(
		values: Bluebird.Thenable<R[]>, reducer: (
		total: U, current: R, index: number, arrayLength: number
	) => U | Bluebird.Thenable<U>, initialValue?: U
	): Bluebird<U>;
		reduce<R, U>(
		values: Bluebird.Thenable<R>[], reducer: (
		total: U, current: R, index: number, arrayLength: number
	) => U | Bluebird.Thenable<U>, initialValue?: U
	): Bluebird<U>;
		reduce<R, U>(
		values: R[], reducer: (
		total: U, current: R, index: number, arrayLength: number
	) => U | Bluebird.Thenable<U>, initialValue?: U
	): Bluebird<U>;
		filter<R>(
		values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, filterer: (
		item: R, index: number, arrayLength: number
	) => boolean | Bluebird.Thenable<boolean>, option?: Bluebird.ConcurrencyOption
	): Bluebird<R[]>;
		filter<R>(
		values: Bluebird.Thenable<R[]>, filterer: (
		item: R, index: number, arrayLength: number
	) => boolean | Bluebird.Thenable<boolean>, option?: Bluebird.ConcurrencyOption
	): Bluebird<R[]>;
		filter<R>(
		values: Bluebird.Thenable<R>[], filterer: (
		item: R, index: number, arrayLength: number
	) => boolean | Bluebird.Thenable<boolean>, option?: Bluebird.ConcurrencyOption
	): Bluebird<R[]>;
		filter<R>(
		values: R[], filterer: (
		item: R, index: number, arrayLength: number
	) => boolean | Bluebird.Thenable<boolean>, option?: Bluebird.ConcurrencyOption
	): Bluebird<R[]>;
		each<R, U>(
		values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>
	): Bluebird<R[]>;
		each<R, U>(
		values: Bluebird.Thenable<R>[], iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>
	): Bluebird<R[]>;
		each<R, U>(
		values: R[] | Bluebird.Thenable<R[]>, iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>
	): Bluebird<R[]>;
		mapSeries<R, U>(
		values: (R | Bluebird.Thenable<R>)[] | Bluebird.Thenable<(R | Bluebird.Thenable<R>)[]>, iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>
	): Bluebird<U[]>;
		disposer(
		disposeFn: (arg: R, promise: Bluebird<R>) => void | Bluebird.Thenable<void>
	): Bluebird.Disposer<R>;
		using<R, T>(
		disposer: Bluebird.Disposer<R>, executor: (transaction: R) => Bluebird.Thenable<T>
	): Bluebird<T>;
		using<R1, R2, T>(
		disposer: Bluebird.Disposer<R1>, disposer2: Bluebird.Disposer<R2>, executor: (transaction1: R1, transaction2: R2) => Bluebird.Thenable<T>
	): Bluebird<T>;
		using<R1, R2, R3, T>(
		disposer: Bluebird.Disposer<R1>, disposer2: Bluebird.Disposer<R2>, disposer3: Bluebird.Disposer<R3>, executor: (transaction1: R1, transaction2: R2, transaction3: R3) => Bluebird.Thenable<T>
	): Bluebird<T>;
		onPossiblyUnhandledRejection(handler?: (error: Error, promise: Bluebird<any>) => void): void;
		config(
		options: {
		warnings?: boolean | {
		wForgottenReturn: boolean
	},
		longStackTraces?: boolean,
		cancellation?: boolean,
		monitoring?: boolean
	}
	): void
	}

	declare module.exports: undefined


}

declare module 'Bluebird' {
		declare export interface ConcurrencyOption {
		concurrency: number
	}

	declare export interface SpreadOption {
		spread: boolean
	}

	declare export interface FromNodeOptions {
		multiArgs?: boolean
	}

	declare export interface PromisifyOptions {
		context?: any,
		multiArgs?: boolean
	}

	declare export interface PromisifyAllOptions {
		suffix?: string,
		filter?: (
		name: string, func: Function, target?: any, passesDefaultFilter?: boolean
	) => boolean,
		promisifier?: (originalMethod: Function) => () => Thenable<any>
	}

	declare export interface Thenable<R> {
		then<U>(
		onFulfilled: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>
	): Thenable<U>,
		then<U>(
		onFulfilled: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void | Thenable<void>
	): Thenable<U>
	}

	declare export interface Resolver<R> {
		promise: Bluebird<R>,
		resolve(value: R): void,
		resolve(): void,
		reject(reason: any): void,
		callback: (err: any, value: R, ...values: R[]) => void
	}

	declare export interface Inspection<R> {
		isFulfilled(): boolean,
		isRejected(): boolean,
		isCancelled(): boolean,
		isPending(): boolean,
		value(): R,
		reason(): any
	}

	declare export function getNewLibraryCopy(): typeof Bluebird

	declare export function noConflict(): typeof Bluebird

	declare export function setScheduler(scheduler: (callback: (...args: any[]) => void) => void): void

	declare export class OperationalError extends Error {
		
	}

	declare export class TimeoutError extends Error {
		
	}

	declare export class CancellationError extends Error {
		
	}

	declare export class AggregateError extends Error {
		
	}

	declare export class Disposer<R>  {
		
	}

	
}