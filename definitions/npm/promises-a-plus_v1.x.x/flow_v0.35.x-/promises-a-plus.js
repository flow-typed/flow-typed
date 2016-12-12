

declare module 'promises-a-plus' {
					
}

declare module 'npm$namespace$PromisesAPlus' {
		declare interface PromiseCtor {
		(resolver: (
		resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void
	) => void): Thenable<T>
	}

	declare interface PromiseImpl {
		new <T>(
		resolver: (
		resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void
	) => void
	): Thenable<T>
	}

	declare interface Thenable<T> {
		then<R>(
		onFulfill?: (value: T) => Thenable<R> | R, onReject?: (error: any) => Thenable<R> | R
	): Thenable<R>
	}

			
}