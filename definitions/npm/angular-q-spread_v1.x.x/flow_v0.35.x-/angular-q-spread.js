

declare module 'angular-q-spread' {
					
}

declare module 'angular' {
		declare interface IPromise<T> {
		spread<TResult>(
		successCallback: (...promiseValues: any[]) => IPromise<TResult> | TResult, errorCallback?: (reason: any) => any
	): IPromise<TResult>
	}

			
}