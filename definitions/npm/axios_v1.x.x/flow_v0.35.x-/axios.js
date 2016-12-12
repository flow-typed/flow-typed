import type { AxiosStatic } from 'npm$namespace$Axios'

declare module 'axios' {
					declare module.exports: AxiosStatic


}

declare module 'npm$namespace$Axios' {
	declare type InterceptorId = number;

	declare interface IThenable<R> {
		then<U>(
		onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => U | IThenable<U>
	): IThenable<U>,
		then<U>(
		onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => void
	): IThenable<U>
	}

	declare interface IPromise<R> {
		then<U>(
		onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => U | IThenable<U>
	): IPromise<U>,
		then<U>(
		onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => void
	): IPromise<U>,
		catch<U>(onRejected?: (error: any) => U | IThenable<U>): IPromise<U>
	}

	declare interface AxiosHttpBasicAuth {
		username: string,
		password: string
	}

	declare interface AxiosXHRConfigBase<T> {
		baseURL?: string,
		headers?: {
		[key: string]: any
	},
		params?: Object,
		paramsSerializer?: (params: Object) => string,
		timeout?: number,
		withCredentials?: boolean,
		auth?: AxiosHttpBasicAuth,
		responseType?: string,
		xsrfCookieName?: string,
		xsrfHeaderName?: string,
		transformRequest?: (<U>(data: T) => U) | [<U>(data: T) => U],
		transformResponse?: <U>(data: T) => U
	}

	declare interface AxiosXHRConfig<T> {
		url: string,
		method?: string,
		data?: T
	}

	declare interface AxiosXHRConfigDefaults<T> {
		headers: {
		common: {
		[index: string]: string
	},
		patch: {
		[index: string]: string
	},
		post: {
		[index: string]: string
	},
		put: {
		[index: string]: string
	}
	}
	}

	declare interface AxiosXHR<T> {
		data: T,
		status: number,
		statusText: string,
		headers: Object,
		config: AxiosXHRConfig<T>
	}

	declare interface Interceptor {
		request: RequestInterceptor,
		response: ResponseInterceptor
	}

	declare interface RequestInterceptor {
		use<U>(
		fulfilledFn: (config: AxiosXHRConfig<U>) => AxiosXHRConfig<U>
	): InterceptorId,
		use<U>(
		fulfilledFn: (config: AxiosXHRConfig<U>) => AxiosXHRConfig<U>, rejectedFn: (error: any) => any
	): InterceptorId,
		eject(interceptorId: InterceptorId): void
	}

	declare interface ResponseInterceptor {
		use<T>(
		fulfilledFn: (config: Axios.AxiosXHR<T>) => Axios.AxiosXHR<T>
	): InterceptorId,
		use<T>(
		fulfilledFn: (config: Axios.AxiosXHR<T>) => Axios.AxiosXHR<T>, rejectedFn: (error: any) => any
	): InterceptorId,
		eject(interceptorId: InterceptorId): void
	}

	declare interface AxiosInstance {
		(config: AxiosXHRConfig<T>): IPromise<AxiosXHR<T>>,
		new <T>(config: AxiosXHRConfig<T>): IPromise<AxiosXHR<T>>,
		request<T>(config: AxiosXHRConfig<T>): IPromise<AxiosXHR<T>>,
		interceptors: Interceptor,
		defaults: AxiosXHRConfigDefaults<any>,
		all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>, T3 | IPromise<AxiosXHR<T3>>, T4 | IPromise<AxiosXHR<T4>>, T5 | IPromise<AxiosXHR<T5>>, T6 | IPromise<AxiosXHR<T6>>, T7 | IPromise<AxiosXHR<T7>>, T8 | IPromise<AxiosXHR<T8>>, T9 | IPromise<AxiosXHR<T9>>, T10 | IPromise<AxiosXHR<T10>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>, AxiosXHR<T3>, AxiosXHR<T4>, AxiosXHR<T5>, AxiosXHR<T6>, AxiosXHR<T7>, AxiosXHR<T8>, AxiosXHR<T9>, AxiosXHR<T10>]>,
		all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>, T3 | IPromise<AxiosXHR<T3>>, T4 | IPromise<AxiosXHR<T4>>, T5 | IPromise<AxiosXHR<T5>>, T6 | IPromise<AxiosXHR<T6>>, T7 | IPromise<AxiosXHR<T7>>, T8 | IPromise<AxiosXHR<T8>>, T9 | IPromise<AxiosXHR<T9>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>, AxiosXHR<T3>, AxiosXHR<T4>, AxiosXHR<T5>, AxiosXHR<T6>, AxiosXHR<T7>, AxiosXHR<T8>, AxiosXHR<T9>]>,
		all<T1, T2, T3, T4, T5, T6, T7, T8>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>, T3 | IPromise<AxiosXHR<T3>>, T4 | IPromise<AxiosXHR<T4>>, T5 | IPromise<AxiosXHR<T5>>, T6 | IPromise<AxiosXHR<T6>>, T7 | IPromise<AxiosXHR<T7>>, T8 | IPromise<AxiosXHR<T8>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>, AxiosXHR<T3>, AxiosXHR<T4>, AxiosXHR<T5>, AxiosXHR<T6>, AxiosXHR<T7>, AxiosXHR<T8>]>,
		all<T1, T2, T3, T4, T5, T6, T7>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>, T3 | IPromise<AxiosXHR<T3>>, T4 | IPromise<AxiosXHR<T4>>, T5 | IPromise<AxiosXHR<T5>>, T6 | IPromise<AxiosXHR<T6>>, T7 | IPromise<AxiosXHR<T7>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>, AxiosXHR<T3>, AxiosXHR<T4>, AxiosXHR<T5>, AxiosXHR<T6>, AxiosXHR<T7>]>,
		all<T1, T2, T3, T4, T5, T6>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>, T3 | IPromise<AxiosXHR<T3>>, T4 | IPromise<AxiosXHR<T4>>, T5 | IPromise<AxiosXHR<T5>>, T6 | IPromise<AxiosXHR<T6>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>, AxiosXHR<T3>, AxiosXHR<T4>, AxiosXHR<T5>, AxiosXHR<T6>]>,
		all<T1, T2, T3, T4, T5>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>, T3 | IPromise<AxiosXHR<T3>>, T4 | IPromise<AxiosXHR<T4>>, T5 | IPromise<AxiosXHR<T5>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>, AxiosXHR<T3>, AxiosXHR<T4>, AxiosXHR<T5>]>,
		all<T1, T2, T3, T4>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>, T3 | IPromise<AxiosXHR<T3>>, T4 | IPromise<AxiosXHR<T4>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>, AxiosXHR<T3>, AxiosXHR<T4>]>,
		all<T1, T2, T3>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>, T3 | IPromise<AxiosXHR<T3>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>, AxiosXHR<T3>]>,
		all<T1, T2>(
		values: [T1 | IPromise<AxiosXHR<T1>>, T2 | IPromise<AxiosXHR<T2>>]
	): IPromise<[AxiosXHR<T1>, AxiosXHR<T2>]>,
		spread<T1, T2, U>(fn: (t1: T1, t2: T2) => U): (arr: ([T1, T2])) => U,
		get<T>(url: string, config?: AxiosXHRConfigBase<T>): IPromise<AxiosXHR<T>>,
		delete<T>(url: string, config?: AxiosXHRConfigBase<T>): IPromise<AxiosXHR<T>>,
		head<T>(url: string, config?: AxiosXHRConfigBase<T>): IPromise<AxiosXHR<T>>,
		post<T>(
		url: string, data?: any, config?: AxiosXHRConfigBase<T>
	): IPromise<AxiosXHR<T>>,
		put<T>(
		url: string, data?: any, config?: AxiosXHRConfigBase<T>
	): IPromise<AxiosXHR<T>>,
		patch<T>(
		url: string, data?: any, config?: AxiosXHRConfigBase<T>
	): IPromise<AxiosXHR<T>>
	}

	declare interface AxiosStatic {
		create<T>(config: AxiosXHRConfigBase<T>): AxiosInstance
	}

			
}