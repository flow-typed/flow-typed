

declare module 'typescript-deferred' {
		declare export interface ImmediateSuccessCB<T, TP> {
		(value: T): TP
	}

	declare export interface ImmediateErrorCB<TP> {
		(err: any): TP
	}

	declare export interface DeferredSuccessCB<T, TP> {
		(value: T): ThenableInterface<TP>
	}

	declare export interface DeferredErrorCB<TP> {
		(error: any): ThenableInterface<TP>
	}

	declare export interface ThenableInterface<T> {
		then<TP>(
		successCB?: DeferredSuccessCB<T, TP>, errorCB?: DeferredErrorCB<TP>
	): ThenableInterface<TP>,
		then<TP>(
		successCB?: DeferredSuccessCB<T, TP>, errorCB?: ImmediateErrorCB<TP>
	): ThenableInterface<TP>,
		then<TP>(
		successCB?: ImmediateSuccessCB<T, TP>, errorCB?: DeferredErrorCB<TP>
	): ThenableInterface<TP>,
		then<TP>(
		successCB?: ImmediateSuccessCB<T, TP>, errorCB?: ImmediateErrorCB<TP>
	): ThenableInterface<TP>
	}

	declare export interface PromiseInterface<T> {
		then<TP>(
		successCB?: DeferredSuccessCB<T, TP>, errorCB?: DeferredErrorCB<TP>
	): PromiseInterface<TP>,
		then<TP>(
		successCB?: DeferredSuccessCB<T, TP>, errorCB?: ImmediateErrorCB<TP>
	): PromiseInterface<TP>,
		then<TP>(
		successCB?: ImmediateSuccessCB<T, TP>, errorCB?: DeferredErrorCB<TP>
	): PromiseInterface<TP>,
		then<TP>(
		successCB?: ImmediateSuccessCB<T, TP>, errorCB?: ImmediateErrorCB<TP>
	): PromiseInterface<TP>,
		otherwise(errorCB?: DeferredErrorCB<T>): PromiseInterface<T>,
		otherwise(errorCB?: ImmediateErrorCB<T>): PromiseInterface<T>,
		always<TP>(errorCB?: DeferredErrorCB<TP>): PromiseInterface<TP>,
		always<TP>(errorCB?: ImmediateErrorCB<TP>): PromiseInterface<TP>
	}

	declare export interface DeferredInterface<T> {
		resolve(value?: ThenableInterface<T>): DeferredInterface<T>,
		resolve(value?: T): DeferredInterface<T>,
		reject(error?: any): DeferredInterface<T>,
		promise: PromiseInterface<T>
	}

	declare export function create<T>(): DeferredInterface<T>

	declare export function when<T>(value?: ThenableInterface<T>): PromiseInterface<T>

	declare export function when<T>(value?: T): PromiseInterface<T>

		
}