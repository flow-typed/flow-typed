

declare module 'jsdeferred' {
		declare interface Loop {
		begin?: number,
		end?: number,
		step?: number
	}

	declare interface ConnectOption {
		target: any,
		args?: any[],
		ok?: number,
		ng?: number
	}

	declare interface RetryOption {
		wait: number
	}

	declare interface DeferredizedFunction {
		(...arg: any[]): Deferred
	}

	declare interface DeferredizedFunctionWithNumber {
		(n: number): Deferred
	}

	declare interface FunctionWithNumber {
		(i: number, o?: any): any
	}

	declare interface ErrorCallback {
		(d: Deferred, ...args: any[]): any
	}

	declare interface JQueryXHR {
		next(fun: Function): Deferred
	}

	declare function chain(...args: any[]): Deferred

	declare function wait(n: number): Deferred

	declare function call(fun?: Function, ...args: any[]): Deferred

	declare function parallel(dl: any): Deferred

	declare function earlier(dl: any): Deferred

	declare function loop(n: number, fun: FunctionWithNumber): Deferred

	declare function loop(n: Loop, fun: FunctionWithNumber): Deferred

	declare function repeat(n: number, fun: FunctionWithNumber): Deferred

	declare function next(fun: Function): Deferred

	declare class Deferred  {
		methods: string[];
		isDeferred(obj: any): boolean;
		next(fun: Function): Deferred;
		chain(...args: any[]): Deferred;
		wait(n: number): Deferred;
		call(fun?: Function, ...args: any[]): Deferred;
		parallel(dl: any): Deferred;
		earlier(dl: any): Deferred;
		loop(n: number, fun: FunctionWithNumber): Deferred;
		loop(n: Loop, fun: FunctionWithNumber): Deferred;
		repeat(n: number, fun: FunctionWithNumber): Deferred;
		register(name: string, fun: DeferredizedFunction): void;
		connect(funo: any, options: string): DeferredizedFunction;
		connect(funo: Function, options?: ConnectOption): DeferredizedFunction;
		retry(
		retryCount: number, funcDeferred: DeferredizedFunctionWithNumber, options?: RetryOption
	): Deferred;
		define(obj?: any, list?: string[]): any;
		constructor(): this;
		next(fun: Function): Deferred;
		wait(n: number): Deferred;
		error(fun: ErrorCallback): Deferred;
		call(val?: any): Deferred;
		fail(err: any): Deferred;
		cancel(): Deferred;
		parallel(dl: any): Deferred;
		loop(n: number, fun: FunctionWithNumber): Deferred;
		loop(n: Loop, fun: FunctionWithNumber): Deferred
	}

	
}