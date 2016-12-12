

declare module 'mongoose-promise' {
					
}

declare module 'mongoose' {
	declare type Promise<T> = MongoosePromise<T>;

			declare class MongoosePromise<T> extends mpromise<T, any> {
		constructor(fn?: (err: any, arg: T) => void): this;
		constructor(fn?: (err: any, ...args: T[]) => void): this;
		addBack(listener: (err: any, arg: T) => void): this;
		addBack(listener: (err: any, ...args: T[]) => void): this;
		addCallback(listener: (arg: T) => void): this;
		addCallback(listener: (...args: T[]) => void): this;
		addErrback(listener: (err: any) => void): this;
		catch<TRes>(
		onReject?: (err: any) => void | TRes | PromiseLike<TRes>
	): MongoosePromise<TRes>;
		end(): void;
		error(err: any): this;
		on(event: string, listener: Function): this;
		reject(reason: Object | string | Error): this;
		resolve(err?: any, val?: Object): this;
		then<TRes>(
		onFulFill: (arg: T) => void | TRes | PromiseLike<TRes>, onReject?: (err: any) => void | TRes | PromiseLike<TRes>
	): MongoosePromise<TRes>;
		then<TRes>(
		onFulfill: (...args: T[]) => void | TRes | PromiseLike<TRes>, onReject?: (err: any) => void | TRes | PromiseLike<TRes>
	): MongoosePromise<TRes>;
		complete(args: T): this;
		complete(...args: T[]): this;
		fulfill(...args: T[]): this;
		fulfill(arg: T): this;
		ES6<TRes>(
		resolver: (
		complete: (...args: TRes[]) => void | TRes | PromiseLike<TRes>, error: (e: any) => void | TRes | PromiseLike<TRes>
	) => void
	): MongoosePromise<TRes>
	}

	
}