import type { Static } from 'npm$namespace$Simple'

declare module 'simple-mock' {
					declare module.exports: Static


}

declare module 'npm$namespace$Simple' {
	declare type Fn<T> = {
		(...args: any[]): T
	};

	declare export interface Static {
		restore(): void,
		mock<T>(obj: any, key: string, fn: Fn<T>): Stub<T>,
		mock<T>(obj: any, key: string, mockValue: T): T,
		mock(obj: any, key: string): Stub<any>,
		mock<T>(obj: any, key: string): Stub<T>,
		spy<T>(fn: Fn<T>): Spy<T>,
		mock<T>(fn: Fn<T>): Spy<T>,
		stub(): Stub<any>,
		stub<T>(): Stub<T>,
		mock(): Stub<any>,
		mock<T>(): Stub<T>,
		Promise?: PromiseConstructorLike
	}

	declare interface Calls<T> {
		args: any[],
		arg: any,
		context: any,
		returned: T,
		threw: Error,
		k: number
	}

	declare export interface Spy<T> {
		(...args: any[]): T,
		called: boolean,
		callCount: number,
		calls: Calls<T>[],
		firstCall: Calls<T>,
		lastCall: Calls<T>,
		reset(): void
	}

	declare interface Action<T> {
		cbArgs: ArrayLike<any>,
		returnValue: T,
		throwError: Error
	}

	declare export interface Stub<T> {
		callFn<R>(fn: Fn<R>): Stub<R>,
		callOriginal(): Stub<T>,
		returnWith<R>(val: R): Stub<R>,
		throwWith(err: Error): Stub<T>,
		callback(...args: any[]): Stub<T>,
		callbackWith(...args: any[]): Stub<T>,
		callbackAtIndex(cbArgumentIndex: number, ...args: any[]): Stub<T>,
		callbackArgWith(cbArgumentIndex: number, ...args: any[]): Stub<T>,
		inThisContext(obj: any): Stub<T>,
		resolveWith<V>(val: V): Stub<PromiseLike<V>>,
		rejectWith<V>(val: V): Stub<PromiseLike<V>>,
		actions: Action<T>[],
		loop: boolean
	}

			
}