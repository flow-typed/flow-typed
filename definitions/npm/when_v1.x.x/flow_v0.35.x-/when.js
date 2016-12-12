

declare module 'when' {
			declare function When<T>(value: When.Promise<T>): When.Promise<T>

	declare function When<T>(value: When.Thenable<T>): When.Promise<T>

	declare function When<T>(value: T): When.Promise<T>

	declare function When<T, U>(value: When.Promise<T>, transform: (val: T) => U): When.Promise<U>

	declare function When<T, U>(value: When.Thenable<T>, transform: (val: T) => U): When.Promise<U>

	declare function When<T, U>(value: T, transform: (val: T) => U): When.Promise<U>

		declare module.exports: undefined


}

declare module '_' {
		declare interface Fn0<T> {
		(): T
	}

	declare interface Fn1<A1, T> {
		(a1: A1): T
	}

	declare interface Fn2<A1, A2, T> {
		(a1: A1, a2: A2): T
	}

	declare interface Fn3<A1, A2, A3, T> {
		(a1: A1, a2: A2, a3: A3): T
	}

	declare interface Fn4<A1, A2, A3, A4, T> {
		(a1: A1, a2: A2, a3: A3, a4: A4): T
	}

	declare interface Fn5<A1, A2, A3, A4, A5, T> {
		(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): T
	}

	declare interface Fn6<A1, A2, A3, A4, A5, A6, T> {
		(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): T
	}

	declare interface LiftedFn0<T> {
		
	}

	declare interface LiftedFn1<A1, T> {
		
	}

	declare interface LiftedFn2<A1, A2, T> {
		
	}

	declare interface LiftedFn3<A1, A2, A3, T> {
		
	}

	declare interface LiftedFn4<A1, A2, A3, A4, T> {
		
	}

	declare interface LiftedFn5<A1, A2, A3, A4, A5, T> {
		
	}

	declare interface NodeCallback<T> {
		(err: any, result: T): void
	}

	declare interface NodeFn0<T> {
		
	}

	declare interface NodeFn1<A1, T> {
		
	}

	declare interface NodeFn2<A1, A2, T> {
		
	}

	declare interface NodeFn3<A1, A2, A3, T> {
		
	}

	declare interface NodeFn4<A1, A2, A3, A4, T> {
		
	}

	declare interface NodeFn5<A1, A2, A3, A4, A5, T> {
		
	}

			
}

declare module 'npm$namespace$When' {
		declare interface Descriptor<T> {
		state: string,
		value?: T,
		reason?: any
	}

	declare interface Deferred<T> {
		notify(update: any): void,
		promise: Promise<T>,
		reject(reason: any): void,
		resolve(value?: T): void,
		resolve(value?: Promise<T>): void
	}

	declare interface Promise<T> {
		catch<U>(onRejected?: (reason: any) => U | Promise<U>): Promise<U>,
		catch<U>(
		filter: (reason: any) => boolean, onRejected?: (reason: any) => U | Promise<U>
	): Promise<U>,
		catch<U>(
		exceptionType: any, onRejected?: (reason: any) => U | Promise<U>
	): Promise<U>,
		finally(onFulfilledOrRejected: Function): Promise<T>,
		ensure(onFulfilledOrRejected: Function): Promise<T>,
		inspect(): Snapshot<T>,
		yield<U>(value: U | Promise<U>): Promise<U>,
		else(value: T): Promise<T>,
		orElse(value: T): Promise<T>,
		tap(onFulfilledSideEffect: (value: T) => void): Promise<T>,
		delay(milliseconds: number): Promise<T>,
		timeout(milliseconds: number, reason?: any): Promise<T>,
		with(thisArg: any): Promise<T>,
		withThis(thisArg: any): Promise<T>,
		otherwise<U>(onRejected?: (reason: any) => U | Promise<U>): Promise<U>,
		otherwise<U>(
		predicate: (reason: any) => boolean, onRejected?: (reason: any) => U | Promise<U>
	): Promise<U>,
		otherwise<U>(
		exceptionType: any, onRejected?: (reason: any) => U | Promise<U>
	): Promise<U>,
		then<U>(
		onFulfilled: (value: T) => U | Promise<U>, onRejected?: (reason: any) => U | Promise<U>, onProgress?: (update: any) => void
	): Promise<U>,
		spread<T>(onFulfilled: _.Fn0<Promise<T> | T>): Promise<T>,
		spread<A1, T>(onFulfilled: _.Fn1<A1, Promise<T> | T>): Promise<T>,
		spread<A1, A2, T>(onFulfilled: _.Fn2<A1, A2, Promise<T> | T>): Promise<T>,
		spread<A1, A2, A3, T>(onFulfilled: _.Fn3<A1, A2, A3, Promise<T> | T>): Promise<T>,
		spread<A1, A2, A3, A4, T>(
		onFulfilled: _.Fn4<A1, A2, A3, A4, Promise<T> | T>
	): Promise<T>,
		spread<A1, A2, A3, A4, A5, T>(
		onFulfilled: _.Fn5<A1, A2, A3, A4, A5, Promise<T> | T>
	): Promise<T>,
		done<U>(onFulfilled: (value: T) => void, onRejected?: (reason: any) => void): void,
		fold<U, V>(
		combine: (value1: T, value2: V) => U | Promise<U>, value2: V | Promise<V>
	): Promise<U>
	}

	declare interface Thenable<T> {
		then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U): Thenable<U>
	}

	declare interface Snapshot<T> {
		state: string,
		value?: T,
		reason?: any
	}

	declare function attempt<T>(f: _.Fn0<T>): Promise<T>

	declare function attempt<A1, T>(f: _.Fn1<A1, T>, arg1: A1 | Promise<A1>): Promise<T>

	declare function attempt<A1, A2, T>(
		f: _.Fn2<A1, A2, T>, arg1: A1 | Promise<A1>, arg2: A2 | Promise<A2>
	): Promise<T>

	declare function attempt<A1, A2, A3, T>(
		f: _.Fn3<A1, A2, A3, T>, arg1: A1 | Promise<A1>, arg2: A2 | Promise<A2>, arg3: A3 | Promise<A3>
	): Promise<T>

	declare function attempt<A1, A2, A3, A4, T>(
		f: _.Fn4<A1, A2, A3, A4, T>, arg1: A1 | Promise<A1>, arg2: A2 | Promise<A2>, arg3: A3 | Promise<A3>, arg4: A4 | Promise<A4>
	): Promise<T>

	declare function attempt<A1, A2, A3, A4, A5, T>(
		f: _.Fn5<A1, A2, A3, A4, A5, T>, arg1: A1 | Promise<A1>, arg2: A2 | Promise<A2>, arg3: A3 | Promise<A3>, arg4: A4 | Promise<A4>, arg5: A5 | Promise<A5>
	): Promise<T>

	declare function lift<T>(f: _.Fn0<T>): _.LiftedFn0<T>

	declare function lift<A1, T>(f: _.Fn1<A1, T>): _.LiftedFn1<A1, T>

	declare function lift<A1, A2, T>(f: _.Fn2<A1, A2, T>): _.LiftedFn2<A1, A2, T>

	declare function lift<A1, A2, A3, T>(f: _.Fn3<A1, A2, A3, T>): _.LiftedFn3<A1, A2, A3, T>

	declare function lift<A1, A2, A3, A4, T>(f: _.Fn4<A1, A2, A3, A4, T>): _.LiftedFn4<A1, A2, A3, A4, T>

	declare function lift<A1, A2, A3, A4, A5, T>(
		f: _.Fn5<A1, A2, A3, A4, A5, T>
	): _.LiftedFn5<A1, A2, A3, A4, A5, T>

	declare function promise<T>(
		resolver: (resolve: (value: T) => void, reject: (reason: any) => void) => void
	): Promise<T>

	declare function reject<T>(reason: any): Promise<T>

	declare function all<T>(promisesOrValues: any[]): Promise<T>

	declare function map<T>(
		promisesOrValues: any[], mapFunc: (value: any, index?: Number) => any
	): Promise<T>

	declare function reduce<T>(
		promisesOrValues: any[], reduceFunc: (reduction: T, value: any, index?: Number) => T | Promise<T>, initialValue: T
	): Promise<T>

	declare function reduceRight<T>(
		promisesOrValues: any[], reduceFunc: (reduction: T, value: any, index?: Number) => T | Promise<T>, initialValue: T
	): Promise<T>

	declare function settle<T>(promisesOrValues: any[]): Promise<Descriptor<T>[]>

	declare function iterate<U>(
		f: (seed: U) => U | Promise<U>, predicate: (value: U) => boolean, handler: (value: U) => Promise<any> | void, seed: U | Promise<U>
	): Promise<U>

	declare function unfold<T, U>(
		unspool: (
		seed: U
	) => [T | Promise<T>, U | Promise<U>] | Promise<[T | Promise<T>, U | Promise<U>]>, predicate: (value: U) => boolean | Promise<boolean>, handler: (value: T) => Promise<any> | void, seed: U | Promise<U>
	): Promise<void>

	declare function defer<T>(): Deferred<T>

	declare function join<T>(...promises: Promise<T>[]): Promise<T[]>

	declare function join<T>(...promises: any[]): Promise<T[]>

	declare function resolve<T>(promise: Promise<T>): Promise<T>

	declare function resolve<T>(foreign: Thenable<T>): Promise<T>

	declare function resolve<T>(value?: T): Promise<T>

		
}

declare module 'when/node' {
		declare interface Resolver<T> {
		reject(reason: any): void,
		resolve(value?: T): void,
		resolve(value?: when.Promise<T>): void
	}

	declare function lift<T>(fn: _.NodeFn0<T>): _.LiftedFn0<T>

	declare function lift<A1, T>(fn: _.NodeFn1<A1, T>): _.LiftedFn1<A1, T>

	declare function lift<A1, A2, T>(fn: _.NodeFn2<A1, A2, T>): _.LiftedFn2<A1, A2, T>

	declare function lift<A1, A2, A3, T>(fn: _.NodeFn3<A1, A2, A3, T>): _.LiftedFn3<A1, A2, A3, T>

	declare function lift<A1, A2, A3, A4, T>(
		fn: _.NodeFn4<A1, A2, A3, A4, T>
	): _.LiftedFn4<A1, A2, A3, A4, T>

	declare function lift<A1, A2, A3, A4, A5, T>(
		fn: _.NodeFn5<A1, A2, A3, A4, A5, T>
	): _.LiftedFn5<A1, A2, A3, A4, A5, T>

	declare function call<T>(fn: _.NodeFn0<T>): when.Promise<T>

	declare function call<A1, T>(fn: _.NodeFn1<A1, T>, arg1: A1 | when.Promise<A1>): when.Promise<T>

	declare function call<A1, A2, T>(
		fn: _.NodeFn2<A1, A2, T>, arg1: A1 | when.Promise<A1>, arg2: A2 | when.Promise<A2>
	): when.Promise<T>

	declare function call<A1, A2, A3, T>(
		fn: _.NodeFn3<A1, A2, A3, T>, arg1: A1 | when.Promise<A1>, arg2: A2 | when.Promise<A2>, arg3: A3 | when.Promise<A3>
	): when.Promise<T>

	declare function call<A1, A2, A3, A4, T>(
		fn: _.NodeFn4<A1, A2, A3, A4, T>, arg1: A1 | when.Promise<A1>, arg2: A2 | when.Promise<A2>, arg3: A3 | when.Promise<A3>, arg4: A4 | when.Promise<A4>
	): when.Promise<T>

	declare function call<A1, A2, A3, A4, A5, T>(
		fn: _.NodeFn5<A1, A2, A3, A4, A5, T>, arg1: A1 | when.Promise<A1>, arg2: A2 | when.Promise<A2>, arg3: A3 | when.Promise<A3>, arg4: A4 | when.Promise<A4>, arg5: A5 | when.Promise<A5>
	): when.Promise<T>

	declare function apply<T>(fn: _.NodeFn0<T>, args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(fn: _.NodeFn1<any, T>, args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(fn: _.NodeFn2<any, any, T>, args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(fn: _.NodeFn3<any, any, any, T>, args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(
		fn: _.NodeFn4<any, any, any, any, T>, args: any[] | IArguments
	): when.Promise<T>

	declare function apply<T>(
		fn: _.NodeFn5<any, any, any, any, any, T>, args: any[] | IArguments
	): when.Promise<T>

	declare function liftAll(
		srcApi: any, transform?: (destApi: any, liftedFunc: Function, name: string) => any, destApi?: any
	): any

	declare function liftCallback<TArg>(
		callback: (err: any, arg: TArg) => void
	): (value: when.Promise<TArg>) => when.Promise<TArg>

	declare function bindCallback<TArg>(
		arg: when.Promise<TArg>, callback: (err: any, arg: TArg) => void
	): when.Promise<TArg>

	declare function createCallback<TArg>(resolver: Resolver<TArg>): (err: any, arg: TArg) => void

		
}