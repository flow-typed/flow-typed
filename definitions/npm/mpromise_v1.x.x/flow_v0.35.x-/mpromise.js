

declare module 'mpromise' {
		declare interface IFulfillFunction<F> {
		(...args: F[]): void,
		(arg: F): void
	}

	declare interface IRejectFunction<R> {
		(err: R): void
	}

	declare interface IResolveFunction<F, R> {
		(err: R, ...args: F[]): void,
		(err: R, arg: F): void
	}

		declare class Promise<F, R>  {
		constructor(fn?: IResolveFunction<F, R>): this;
		FAILURE: string;
		SUCCESS: string;
		fulfill(...args: F[]): Promise<F, R>;
		fulfill(arg: F): Promise<F, R>;
		reject(reason: R): Promise<F, R>;
		resolve(reason: R, ...args: F[]): Promise<F, R>;
		resolve(reason: R, arg: F): Promise<F, R>;
		onFulfill(callback: IFulfillFunction<F>): Promise<F, R>;
		onReject(callback: IRejectFunction<R>): Promise<F, R>;
		onResolve(callback: IResolveFunction<F, R>): Promise<F, R>;
		then<F, R>(
		onFulfilled: IFulfillFunction<F>, onRejected?: IRejectFunction<R>
	): Promise<F, R>;
		end(): void;
		chain(promise: Promise<F, R>): Promise<F, R>
	}

	declare module.exports: undefined


}