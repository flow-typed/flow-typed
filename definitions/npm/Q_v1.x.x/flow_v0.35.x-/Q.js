

declare module 'Q' {
			declare function Q<T>(promise: Q.IPromise<T>): Q.Promise<T>

	declare function Q<T>(value: T): Q.Promise<T>

	declare function Q(): Q.Promise<void>

		
}

declare module 'npm$namespace$Q' {
	declare type IWhenable<T> = IPromise<T> | T;

	declare interface IPromise<T> {
		then<U>(
		onFulfill?: (value: T) => IWhenable<U>, onReject?: (error: any) => IWhenable<U>
	): IPromise<U>
	}

	declare interface Deferred<T> {
		promise: Promise<T>,
		resolve(value?: IWhenable<T>): void,
		reject(reason: any): void,
		notify(value: any): void,
		makeNodeResolver(): (reason: any, value: T) => void
	}

	declare interface Promise<T> {
		fin(finallyCallback: () => any): Promise<T>,
		finally(finallyCallback: () => any): Promise<T>,
		then<U>(
		onFulfill?: (value: T) => IWhenable<U>, onReject?: (error: any) => IWhenable<U>, onProgress?: Function
	): Promise<U>,
		spread<U>(
		onFulfill: (...args: any[]) => IWhenable<U>, onReject?: (reason: any) => IWhenable<U>
	): Promise<U>,
		fail<U>(onRejected: (reason: any) => IWhenable<U>): Promise<U>,
		catch<U>(onRejected: (reason: any) => IWhenable<U>): Promise<U>,
		progress(onProgress: (progress: any) => any): Promise<T>,
		done(
		onFulfilled?: (value: T) => any, onRejected?: (reason: any) => any, onProgress?: (progress: any) => any
	): void,
		nodeify(callback: (reason: any, value: any) => void): Promise<T>,
		get<U>(propertyName: String): Promise<U>,
		set<U>(propertyName: String, value: any): Promise<U>,
		delete<U>(propertyName: String): Promise<U>,
		post<U>(methodName: String, args: any[]): Promise<U>,
		invoke<U>(methodName: String, ...args: any[]): Promise<U>,
		fapply<U>(args: any[]): Promise<U>,
		fcall<U>(...args: any[]): Promise<U>,
		keys(): Promise<string[]>,
		thenResolve<U>(value: U): Promise<U>,
		thenReject(reason: any): Promise<T>,
		tap(onFulfilled: (value: T) => any): Promise<T>,
		timeout(ms: number, message?: string): Promise<T>,
		delay(ms: number): Promise<T>,
		isFulfilled(): boolean,
		isRejected(): boolean,
		isPending(): boolean,
		valueOf(): any,
		inspect(): PromiseState<T>
	}

	declare interface PromiseState<T> {
		state: string,
		value?: T,
		reason?: any
	}

	declare export function when(): Promise<void>

	declare export function when<T>(value: IWhenable<T>): Promise<T>

	declare export function when<T, U>(
		value: IWhenable<T>, onFulfilled: (val: T) => IWhenable<U>, onRejected?: (reason: any) => IWhenable<U>, onProgress?: (progress: any) => any
	): Promise<U>

	declare export function fbind<T>(
		method: (...args: any[]) => IWhenable<T>, ...args: any[]
	): (...args: any[]) => Promise<T>

	declare export function fcall<T>(method: (...args: any[]) => T, ...args: any[]): Promise<T>

	declare export function send<T>(obj: any, functionName: string, ...args: any[]): Promise<T>

	declare export function invoke<T>(obj: any, functionName: string, ...args: any[]): Promise<T>

	declare export function mcall<T>(obj: any, functionName: string, ...args: any[]): Promise<T>

	declare export function denodeify<T>(nodeFunction: Function, ...args: any[]): (...args: any[]) => Promise<T>

	declare export function nbind<T>(
		nodeFunction: Function, thisArg: any, ...args: any[]
	): (...args: any[]) => Promise<T>

	declare export function nfbind<T>(nodeFunction: Function, ...args: any[]): (...args: any[]) => Promise<T>

	declare export function nfcall<T>(nodeFunction: Function, ...args: any[]): Promise<T>

	declare export function nfapply<T>(nodeFunction: Function, args: any[]): Promise<T>

	declare export function ninvoke<T>(nodeModule: any, functionName: string, ...args: any[]): Promise<T>

	declare export function npost<T>(nodeModule: any, functionName: string, args: any[]): Promise<T>

	declare export function nsend<T>(nodeModule: any, functionName: string, ...args: any[]): Promise<T>

	declare export function nmcall<T>(nodeModule: any, functionName: string, ...args: any[]): Promise<T>

	declare export function all<A, B, C, D, E, F>(
		promises: IWhenable<[IWhenable<A>, IWhenable<B>, IWhenable<C>, IWhenable<D>, IWhenable<E>, IWhenable<F>]>
	): Promise<[A, B, C, D, E, F]>

	declare export function all<A, B, C, D, E>(
		promises: IWhenable<[IWhenable<A>, IWhenable<B>, IWhenable<C>, IWhenable<D>, IWhenable<E>]>
	): Promise<[A, B, C, D, E]>

	declare export function all<A, B, C, D>(
		promises: IWhenable<[IWhenable<A>, IWhenable<B>, IWhenable<C>, IWhenable<D>]>
	): Promise<[A, B, C, D]>

	declare export function all<A, B, C>(
		promises: IWhenable<[IWhenable<A>, IWhenable<B>, IWhenable<C>]>
	): Promise<[A, B, C]>

	declare export function all<A, B>(promises: IWhenable<[IWhenable<A>, IWhenable<B>]>): Promise<[A, B]>

	declare export function all<T>(promises: IWhenable<IWhenable<T>[]>): Promise<T[]>

	declare export function race<T>(promises: IWhenable<T>[]): Promise<T>

	declare export function allSettled<T>(promises: IWhenable<IWhenable<T>[]>): Promise<PromiseState<T>[]>

	declare export function allResolved<T>(promises: IWhenable<IWhenable<T>[]>): Promise<Promise<T>[]>

	declare export function spread<T, U>(
		promises: IWhenable<T>[], onFulfilled: (...args: T[]) => IWhenable<U>, onRejected?: (reason: any) => IWhenable<U>
	): Promise<U>

	declare export function timeout<T>(promise: Promise<T>, ms: number, message?: string): Promise<T>

	declare export function delay<T>(promise: Promise<T>, ms: number): Promise<T>

	declare export function delay<T>(value: T, ms: number): Promise<T>

	declare export function delay(ms: number): Promise<void>

	declare export function isFulfilled(promise: Promise<any>): boolean

	declare export function isRejected(promise: Promise<any>): boolean

	declare export function isPending(promise: Promise<any>): boolean

	declare export function defer<T>(): Deferred<T>

	declare export function reject<T>(reason?: any): Promise<T>

	declare export function Promise<T>(
		resolver: (
		resolve: (val: IWhenable<T>) => void, reject: (reason: any) => void, notify: (progress: any) => void
	) => void
	): Promise<T>

	declare export function promised<T>(callback: (...args: any[]) => T): (...args: any[]) => Promise<T>

	declare export function isPromise(object: any): boolean

	declare export function isPromiseAlike(object: any): boolean

	declare export function isPending(object: any): boolean

	declare export function nearer<T>(promise: Promise<T>): T

	declare export function async<T>(generatorFunction: any): (...args: any[]) => Promise<T>

	declare export function nextTick(callback: Function): void

	declare export function resolve<T>(object: IWhenable<T>): Promise<T>

	declare export function noConflict(): typeof Q

		
}

declare module 'q' {
					declare module.exports: undefined


}