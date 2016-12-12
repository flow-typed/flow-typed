

declare module 'async-lock' {
		declare interface AsyncLockDoneCallback {
		(err?: Error, ret?: any): void
	}

	declare interface AsyncLockOptions {
		timeout?: number,
		maxPending?: number,
		domainReentrant?: boolean,
		Promise?: any
	}

		declare class AsyncLock  {
		constructor(options?: AsyncLockOptions): this;
		acquire(
		key: string | string[], fn: (done: AsyncLockDoneCallback) => any, cb: AsyncLockDoneCallback, opts?: AsyncLockOptions
	): void;
		acquire(
		key: string | string[], fn: (done: AsyncLockDoneCallback) => any, opts?: AsyncLockOptions
	): PromiseLike<any>;
		isBusy(): boolean
	}

	declare module.exports: undefined


}