

declare module 'bluebird-1.0' {
				declare class Promise<R> extends Promise$Thenable<R> {
		constructor(callback: (
		resolve: (thenableOrResult: R | Promise.Thenable<R>) => void, reject: (error: any) => void
	) => void): this;
		then<U>(
		onFulfill: (value: R) => Promise.Thenable<U>, onReject: (error: any) => Promise.Thenable<U>, onProgress?: (note: any) => any
	): Promise<U>;
		then<U>(
		onFulfill: (value: R) => Promise.Thenable<U>, onReject?: (error: any) => U, onProgress?: (note: any) => any
	): Promise<U>;
		then<U>(
		onFulfill: (value: R) => U, onReject: (error: any) => Promise.Thenable<U>, onProgress?: (note: any) => any
	): Promise<U>;
		then<U>(
		onFulfill?: (value: R) => U, onReject?: (error: any) => U, onProgress?: (note: any) => any
	): Promise<U>;
		catch<U>(onReject?: (error: any) => Promise.Thenable<U>): Promise<U>;
		caught<U>(onReject?: (error: any) => Promise.Thenable<U>): Promise<U>;
		catch<U>(onReject?: (error: any) => U): Promise<U>;
		caught<U>(onReject?: (error: any) => U): Promise<U>;
		catch<U>(
		predicate: (error: any) => boolean, onReject: (error: any) => Promise.Thenable<U>
	): Promise<U>;
		caught<U>(
		predicate: (error: any) => boolean, onReject: (error: any) => Promise.Thenable<U>
	): Promise<U>;
		catch<U>(predicate: (error: any) => boolean, onReject: (error: any) => U): Promise<U>;
		caught<U>(predicate: (error: any) => boolean, onReject: (error: any) => U): Promise<U>;
		catch<U>(
		ErrorClass: Function, onReject: (error: any) => Promise.Thenable<U>
	): Promise<U>;
		caught<U>(
		ErrorClass: Function, onReject: (error: any) => Promise.Thenable<U>
	): Promise<U>;
		catch<U>(ErrorClass: Function, onReject: (error: any) => U): Promise<U>;
		caught<U>(ErrorClass: Function, onReject: (error: any) => U): Promise<U>;
		error<U>(onReject: (reason: any) => Promise.Thenable<U>): Promise<U>;
		error<U>(onReject: (reason: any) => U): Promise<U>;
		finally(handler: (value: R) => Promise.Thenable<R>): Promise<R>;
		finally(handler: (value: R) => R): Promise<R>;
		finally(handler: (value: R) => void): Promise<R>;
		lastly(handler: (value: R) => Promise.Thenable<R>): Promise<R>;
		lastly(handler: (value: R) => R): Promise<R>;
		lastly(handler: (value: R) => void): Promise<R>;
		bind(thisArg: any): Promise<R>;
		done<U>(
		onFulfilled: (value: R) => Promise.Thenable<U>, onRejected: (error: any) => Promise.Thenable<U>, onProgress?: (note: any) => any
	): Promise<U>;
		done<U>(
		onFulfilled: (value: R) => Promise.Thenable<U>, onRejected?: (error: any) => U, onProgress?: (note: any) => any
	): Promise<U>;
		done<U>(
		onFulfilled: (value: R) => U, onRejected: (error: any) => Promise.Thenable<U>, onProgress?: (note: any) => any
	): Promise<U>;
		done<U>(
		onFulfilled?: (value: R) => U, onRejected?: (error: any) => U, onProgress?: (note: any) => any
	): Promise<U>;
		progressed(handler: (note: any) => any): Promise<R>;
		delay(ms: number): Promise<R>;
		timeout(ms: number, message?: string): Promise<R>;
		nodeify(callback: (err: any, value?: R) => void): Promise<R>;
		nodeify(...sink: any[]): void;
		cancellable(): Promise<R>;
		cancel<U>(reason?: any): Promise<U>;
		fork<U>(
		onFulfilled: (value: R) => Promise.Thenable<U>, onRejected: (error: any) => Promise.Thenable<U>, onProgress?: (note: any) => any
	): Promise<U>;
		fork<U>(
		onFulfilled: (value: R) => Promise.Thenable<U>, onRejected?: (error: any) => U, onProgress?: (note: any) => any
	): Promise<U>;
		fork<U>(
		onFulfilled: (value: R) => U, onRejected: (error: any) => Promise.Thenable<U>, onProgress?: (note: any) => any
	): Promise<U>;
		fork<U>(
		onFulfilled?: (value: R) => U, onRejected?: (error: any) => U, onProgress?: (note: any) => any
	): Promise<U>;
		uncancellable(): Promise<R>;
		isCancellable(): boolean;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isPending(): boolean;
		isResolved(): boolean;
		inspect(): Promise.Inspection<R>;
		call(propertyName: string, ...args: any[]): Promise<any>;
		return(): Promise<any>;
		thenReturn(): Promise<any>;
		return<U>(value: U): Promise<U>;
		thenReturn<U>(value: U): Promise<U>;
		throw(reason: Error): Promise<R>;
		thenThrow(reason: Error): Promise<R>;
		toString(): string;
		toJSON(): Object;
		spread<U>(
		onFulfill: Function, onReject?: (reason: any) => Promise.Thenable<U>
	): Promise<U>;
		spread<U>(onFulfill: Function, onReject?: (reason: any) => U): Promise<U>;
		all<U>(): Promise<U[]>;
		props(): Promise<Object>;
		settle<U>(): Promise<Promise.Inspection<U>[]>;
		any<U>(): Promise<U>;
		some<U>(count: number): Promise<U[]>;
		race<U>(): Promise<U>;
		map<Q, U>(
		mapper: (item: Q, index: number, arrayLength: number) => Promise.Thenable<U>
	): Promise<U[]>;
		map<Q, U>(mapper: (item: Q, index: number, arrayLength: number) => U): Promise<U[]>;
		reduce<Q, U>(
		reducer: (memo: U, item: Q, index: number, arrayLength: number) => Promise.Thenable<U>, initialValue?: U
	): Promise<U>;
		reduce<Q, U>(
		reducer: (memo: U, item: Q, index: number, arrayLength: number) => U, initialValue?: U
	): Promise<U>;
		filter<U>(
		filterer: (item: U, index: number, arrayLength: number) => Promise.Thenable<boolean>
	): Promise<U[]>;
		filter<U>(
		filterer: (item: U, index: number, arrayLength: number) => boolean
	): Promise<U[]>;
		try<R>(fn: () => R | Promise.Thenable<R>, args?: any[], ctx?: any): Promise<R>;
		attempt<R>(fn: () => R | Promise.Thenable<R>, args?: any[], ctx?: any): Promise<R>;
		method(fn: Function): Function;
		resolve(): Promise<void>;
		resolve<R>(value: Promise.Thenable<R>): Promise<R>;
		resolve<R>(value: R): Promise<R>;
		reject(reason: any): Promise<any>;
		reject<R>(reason: any): Promise<R>;
		defer<R>(): Promise.Resolver<R>;
		cast<R>(value: Promise.Thenable<R>): Promise<R>;
		cast<R>(value: R): Promise<R>;
		bind(thisArg: any): Promise<void>;
		is(value: any): boolean;
		longStackTraces(): void;
		delay<R>(value: Promise.Thenable<R>, ms: number): Promise<R>;
		delay<R>(value: R, ms: number): Promise<R>;
		delay(ms: number): Promise<void>;
		promisify(nodeFunction: Function, receiver?: any): Function;
		promisifyAll(target: Object): any;
		coroutine<R>(generatorFunction: Function): Function;
		spawn<R>(generatorFunction: Function): Promise<R>;
		noConflict(): typeof Promise;
		onPossiblyUnhandledRejection(handler: (reason: any) => any): void;
		all<R>(values: Promise.Thenable<Promise.Thenable<R>[]>): Promise<R[]>;
		all<R>(values: Promise.Thenable<R[]>): Promise<R[]>;
		all<R>(values: Promise.Thenable<R>[]): Promise<R[]>;
		all<R>(values: R[]): Promise<R[]>;
		props(object: Promise<Object>): Promise<Object>;
		props(object: Object): Promise<Object>;
		settle<R>(
		values: Promise.Thenable<Promise.Thenable<R>[]>
	): Promise<Promise.Inspection<R>[]>;
		settle<R>(values: Promise.Thenable<R[]>): Promise<Promise.Inspection<R>[]>;
		settle<R>(values: Promise.Thenable<R>[]): Promise<Promise.Inspection<R>[]>;
		settle<R>(values: R[]): Promise<Promise.Inspection<R>[]>;
		any<R>(values: Promise.Thenable<Promise.Thenable<R>[]>): Promise<R>;
		any<R>(values: Promise.Thenable<R[]>): Promise<R>;
		any<R>(values: Promise.Thenable<R>[]): Promise<R>;
		any<R>(values: R[]): Promise<R>;
		race<R>(values: Promise.Thenable<Promise.Thenable<R>[]>): Promise<R>;
		race<R>(values: Promise.Thenable<R[]>): Promise<R>;
		race<R>(values: Promise.Thenable<R>[]): Promise<R>;
		race<R>(values: R[]): Promise<R>;
		some<R>(
		values: Promise.Thenable<Promise.Thenable<R>[]>, count: number
	): Promise<R[]>;
		some<R>(values: Promise.Thenable<R[]>, count: number): Promise<R[]>;
		some<R>(values: Promise.Thenable<R>[], count: number): Promise<R[]>;
		some<R>(values: R[], count: number): Promise<R[]>;
		join<R>(...values: Promise.Thenable<R>[]): Promise<R[]>;
		join<R>(...values: R[]): Promise<R[]>;
		map<R, U>(
		values: Promise.Thenable<Promise.Thenable<R>[]>, mapper: (item: R, index: number, arrayLength: number) => Promise.Thenable<U>
	): Promise<U[]>;
		map<R, U>(
		values: Promise.Thenable<Promise.Thenable<R>[]>, mapper: (item: R, index: number, arrayLength: number) => U
	): Promise<U[]>;
		map<R, U>(
		values: Promise.Thenable<R[]>, mapper: (item: R, index: number, arrayLength: number) => Promise.Thenable<U>
	): Promise<U[]>;
		map<R, U>(
		values: Promise.Thenable<R[]>, mapper: (item: R, index: number, arrayLength: number) => U
	): Promise<U[]>;
		map<R, U>(
		values: Promise.Thenable<R>[], mapper: (item: R, index: number, arrayLength: number) => Promise.Thenable<U>
	): Promise<U[]>;
		map<R, U>(
		values: Promise.Thenable<R>[], mapper: (item: R, index: number, arrayLength: number) => U
	): Promise<U[]>;
		map<R, U>(
		values: R[], mapper: (item: R, index: number, arrayLength: number) => Promise.Thenable<U>
	): Promise<U[]>;
		map<R, U>(
		values: R[], mapper: (item: R, index: number, arrayLength: number) => U
	): Promise<U[]>;
		reduce<R, U>(
		values: Promise.Thenable<Promise.Thenable<R>[]>, reducer: (
		total: U, current: R, index: number, arrayLength: number
	) => Promise.Thenable<U>, initialValue?: U
	): Promise<U>;
		reduce<R, U>(
		values: Promise.Thenable<Promise.Thenable<R>[]>, reducer: (total: U, current: R, index: number, arrayLength: number) => U, initialValue?: U
	): Promise<U>;
		reduce<R, U>(
		values: Promise.Thenable<R[]>, reducer: (
		total: U, current: R, index: number, arrayLength: number
	) => Promise.Thenable<U>, initialValue?: U
	): Promise<U>;
		reduce<R, U>(
		values: Promise.Thenable<R[]>, reducer: (total: U, current: R, index: number, arrayLength: number) => U, initialValue?: U
	): Promise<U>;
		reduce<R, U>(
		values: Promise.Thenable<R>[], reducer: (
		total: U, current: R, index: number, arrayLength: number
	) => Promise.Thenable<U>, initialValue?: U
	): Promise<U>;
		reduce<R, U>(
		values: Promise.Thenable<R>[], reducer: (total: U, current: R, index: number, arrayLength: number) => U, initialValue?: U
	): Promise<U>;
		reduce<R, U>(
		values: R[], reducer: (
		total: U, current: R, index: number, arrayLength: number
	) => Promise.Thenable<U>, initialValue?: U
	): Promise<U>;
		reduce<R, U>(
		values: R[], reducer: (total: U, current: R, index: number, arrayLength: number) => U, initialValue?: U
	): Promise<U>;
		filter<R>(
		values: Promise.Thenable<Promise.Thenable<R>[]>, filterer: (item: R, index: number, arrayLength: number) => Promise.Thenable<boolean>
	): Promise<R[]>;
		filter<R>(
		values: Promise.Thenable<Promise.Thenable<R>[]>, filterer: (item: R, index: number, arrayLength: number) => boolean
	): Promise<R[]>;
		filter<R>(
		values: Promise.Thenable<R[]>, filterer: (item: R, index: number, arrayLength: number) => Promise.Thenable<boolean>
	): Promise<R[]>;
		filter<R>(
		values: Promise.Thenable<R[]>, filterer: (item: R, index: number, arrayLength: number) => boolean
	): Promise<R[]>;
		filter<R>(
		values: Promise.Thenable<R>[], filterer: (item: R, index: number, arrayLength: number) => Promise.Thenable<boolean>
	): Promise<R[]>;
		filter<R>(
		values: Promise.Thenable<R>[], filterer: (item: R, index: number, arrayLength: number) => boolean
	): Promise<R[]>;
		filter<R>(
		values: R[], filterer: (item: R, index: number, arrayLength: number) => Promise.Thenable<boolean>
	): Promise<R[]>;
		filter<R>(
		values: R[], filterer: (item: R, index: number, arrayLength: number) => boolean
	): Promise<R[]>
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

	declare export interface Thenable<R> {
		then<U>(
		onFulfilled: (value: R) => Thenable<U>, onRejected: (error: any) => Thenable<U>
	): Thenable<U>,
		then<U>(
		onFulfilled: (value: R) => Thenable<U>, onRejected?: (error: any) => U
	): Thenable<U>,
		then<U>(
		onFulfilled: (value: R) => U, onRejected: (error: any) => Thenable<U>
	): Thenable<U>,
		then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Thenable<U>
	}

	declare export interface Resolver<R> {
		promise: Promise<R>,
		resolve(value: R): void,
		resolve(): void,
		reject(reason: any): void,
		progress(value: any): void,
		callback: (err: any, value: R, ...values: R[]) => void
	}

	declare export interface Inspection<R> {
		isFulfilled(): boolean,
		isRejected(): boolean,
		isPending(): boolean,
		value(): R,
		error(): any
	}

			
}

declare module 'bluebird' {
					declare module.exports: undefined


}