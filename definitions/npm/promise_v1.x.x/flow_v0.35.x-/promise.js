import type { Ipromise } from 'npm$namespace$Promise'

declare module 'promise' {
					declare module.exports: Ipromise


}

declare module 'npm$namespace$Promise' {
		declare export interface Ipromise {
		new <T>(
		resolver: (resolve: (value: T) => void, reject: (reason: any) => void) => void
	): IThenable<T>,
		resolve: <T>(value: T) => IThenable<T>,
		reject: <T>(value: T) => IThenable<T>,
		all: (array: Array<IThenable<any>>) => IThenable<Array<any>>,
		denodeify: (fn: Function) => (...args: any[]) => IThenable<any>,
		nodeify: (fn: Function) => Function
	}

	declare export interface IThenable<T> {
		then<R>(
		onFulfilled?: (value: T) => IThenable<R> | R, onRejected?: (error: any) => IThenable<R> | R
	): IThenable<R>,
		catch<R>(onRejected?: (error: any) => IThenable<R> | R): IThenable<R>,
		done<R>(
		onFulfilled?: (value: T) => IThenable<R> | R, onRejected?: (error: any) => IThenable<R> | R
	): IThenable<R>,
		nodeify<R>(callback: Function): IThenable<R>
	}

			
}