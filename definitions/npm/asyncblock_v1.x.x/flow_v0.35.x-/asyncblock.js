

declare module 'asyncblock' {
		declare export interface IFlow {
		add(responseFormat?: string[]): IExecuteFunction,
		add(key: string, responseFormat?: string[]): IExecuteFunction,
		add(key: number, responseFormat?: string[]): IExecuteFunction,
		add(options: IFlowOptions): IExecuteFunction,
		callback(responseFormat?: string[]): IExecuteFunction,
		callback(key: string, responseFormat?: string[]): IExecuteFunction,
		callback(key: number, responseFormat?: string[]): IExecuteFunction,
		callback(options: IFlowOptions): IExecuteFunction,
		wait<T>(key?: string): T,
		wait<T>(key?: number): T,
		get<T>(key: string): T,
		set(key: string, responseFormat?: string[]): IExecuteFunction,
		set(options: IFlowOptions): IExecuteFunction,
		del(key: string): void,
		sync<T>(task: any): T,
		queue(toExecute: IExecuteFunction): void,
		queue(key: string, toExecute: IExecuteFunction): void,
		queue(key: number, toExecute: IExecuteFunction): void,
		queue(responseFormat: string[], toExecute: IExecuteFunction): void,
		queue(key: string, responseFormat: string[], toExecute: IExecuteFunction): void,
		queue(key: number, responseFormat: string[], toExecute: IExecuteFunction): void,
		queue(options: IFlowOptions, toExecute: IExecuteFunction): void,
		doneAdding(): void,
		forceWait<T>(): T,
		maxParallel: number,
		errorCallback: (err: any) => void,
		taskTimeout: number,
		timeoutIsError: boolean
	}

	declare export interface IFlowOptions {
		ignoreError?: boolean,
		key?: string,
		responseFormat?: string[],
		timeout?: number,
		timeoutIsError?: boolean,
		dontWait?: boolean,
		firstArgIsError?: boolean
	}

	declare export interface IExecuteFunction {
		(err: any, res1: T1, res2: T2, res3: T3): any,
		(err: any, res1: T1, res2: T2): any,
		(err: any, res: T): any,
		(err: any): any,
		(res1: T1, res2: T2, res3: T3): any,
		(res1: T1, res2: T2): any,
		(res: T): any
	}

	declare function asyncblock<T>(
		f: (flow: asyncblock.IFlow) => void, callback?: (err: any, res: T) => void
	): void

	declare export function nostack<T>(
		f: (flow: asyncblock.IFlow) => void, callback?: (err: any, res: T) => void
	): void

		declare module.exports: undefined


}