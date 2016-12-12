

declare module 'pinkyswear' {
		declare interface PinkySwearStatic {
		(extend: (promise: PinkySwear.GenericPromise<T>) => PinkySwear.GenericPromise<T>): PinkySwear.GenericPromise<T>,
		(): PinkySwear.GenericPromise<T>,
		(extend: (promise: PinkySwear.Promise) => PinkySwear.Promise): PinkySwear.Promise,
		(): PinkySwear.Promise
	}

			
}

declare module 'npm$namespace$PinkySwear' {
		declare interface Promise {
		(): boolean,
		(fulfilled: boolean, ...values: any[]): Promise,
		then(): Promise,
		then(onFulfilled?: () => Promise, onRejected?: () => void): Promise,
		then(onFulfilled?: () => void, onRejected?: () => void): Promise,
		then(onFulfilled?: () => any, onRejected?: () => void): Promise,
		then(
		onFulfilled?: (...values: any[]) => Promise, onRejected?: (...values: any[]) => void
	): Promise,
		then(
		onFulfilled?: (...values: any[]) => void, onRejected?: (...values: any[]) => void
	): Promise,
		then(
		onFulfilled?: (...values: any[]) => any, onRejected?: (...values: any[]) => void
	): Promise,
		then(
		onFulfilled?: (...values: any[]) => Promise, onRejected?: (error?: TypeError) => void
	): Promise,
		then(
		onFulfilled?: (...values: any[]) => void, onRejected?: (error: TypeError) => void
	): Promise,
		then(
		onFulfilled?: (...values: any[]) => any, onRejected?: (error: TypeError) => void
	): Promise
	}

	declare interface GenericPromise<T> {
		(fulfilled: boolean, value: T): boolean,
		then<G>(
		onFulfilled?: (value: T) => G, onRejected?: (value: T) => void
	): GenericPromise<G>,
		then<G>(
		onFulfilled?: (value: T) => GenericPromise<G>, onRejected?: (value: T) => void
	): GenericPromise<G>,
		then(onFulfilled?: (value: T) => void, onRejected?: (value: T) => void): Promise,
		then<G>(
		onFulfilled?: (value: T) => G, onRejected?: (error: TypeError) => void
	): GenericPromise<G>,
		then<G>(
		onFulfilled?: (value: T) => GenericPromise<G>, onRejected?: (error: TypeError) => void
	): GenericPromise<G>,
		then(
		onFulfilled?: (value: T) => void, onRejected?: (error: TypeError) => void
	): Promise
	}

			
}