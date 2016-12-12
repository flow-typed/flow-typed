

declare module 'redux-saga' {
	declare export type Saga = <T>(getState?: () => T) => Iterable<any>;

	declare export type Predicate = (action: any) => boolean;

	declare export type Pattern = string | string[] | Predicate;

	declare interface SagaMiddleware {
		run(saga: Saga, ...args: any[]): void
	}

	declare export interface Task<T> {
		name: string,
		isRunning(): boolean,
		result(): T,
		error(): any,
		cancel(): void
	}

	declare export default function SagaMiddleware(...sagas: Saga[]): SagaMiddleware

	declare export function takeEvery(
		pattern: Pattern, saga: Saga, ...args: any[]
	): {
		undefined(): IterableIterator<any>
	}

	declare export function takeLatest(
		pattern: Pattern, saga: Saga, ...args: any[]
	): {
		undefined(): IterableIterator<any>
	}

	declare export function delay(ms: number): Promise<boolean>

	declare export function delay<T>(ms: number, val: T): Promise<T>

	declare export function isCancelError(e: any): boolean

	declare export class SagaCancellationException  {
		
	}

	
}

declare module 'redux-saga/effects' {
	declare export type Effect = {
		
	};

	declare type EffectFunction<T1, T2, T3> = (
		arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]
	) => Promise<any> | Iterable<any>;

	declare interface EffectFunctionContext<T1, T2, T3> {
		0: any,
		1: EffectFunction<T1, T2, T3>
	}

	declare export function take(pattern?: Pattern): Effect

	declare export function put(action: any): Effect

	declare export function race(effects: {
		[key: string]: any
	}): Effect

	declare export function call<T1, T2, T3>(
		fn: EffectFunction<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]
	): Effect

	declare export function call<T1, T2, T3>(
		fn: EffectFunctionContext<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]
	): Effect

	declare export function apply<T1, T2, T3>(
		context: any, fn: EffectFunction<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]
	): Effect

	declare export function fork(effect: Effect): Effect

	declare export function fork<T1, T2, T3>(
		fn: EffectFunction<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]
	): Effect

	declare export function fork<T1, T2, T3>(
		fn: EffectFunctionContext<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]
	): Effect

	declare export function join(task: Task<any>): Effect

	declare export function select(selector?: (state: any, ...args: any[]) => any, ...args: any[]): Effect

	declare export function cancel(task: Task<any>): Effect

		
}

declare module 'redux-saga/lib/proc' {
			declare export default function proc(
		iterator: Iterable<any>, subscribe?: (cb: Function) => Function, dispatch?: (action: any) => any, monitor?: (action: any) => void, parentEffectId?: any, name?: string
	): Task<any>

		
}

declare module 'redux-saga/lib/runSaga' {
		declare interface IO {
		dispatch: (action: any) => any,
		subscribe: (cb: Function) => Function
	}

	declare export function storeIO(store: Store<any>): IO

	declare export function runSaga(iterator: Iterable<any>, io: IO, monitor?: (action: any) => void): Task<any>

		
}

declare module 'redux-saga/lib/emitter' {
			declare export default function emitter(): {
		subscribe(cb: Function): Function,
		emit(item: any): void
	}

		
}