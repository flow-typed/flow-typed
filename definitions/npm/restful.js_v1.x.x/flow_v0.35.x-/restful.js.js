

declare module 'restful.js' {
		declare export interface Headers {
		[key: string]: any
	}

	declare export interface Api {
		all(name: string): CollectionEndpoint,
		allUrl(name: string, url: string): CollectionEndpoint,
		one(name: string, id: any): MemberEndpoint,
		oneUrl(name: string, url: string): MemberEndpoint,
		protocol(protocol: string): Api,
		protocol(): string,
		baseUrl(protocol: string): Api,
		baseUrl(): string,
		port(port: number): Api,
		port(): number,
		prefixUrl(prefix: string): Api,
		prefixUrl(): string,
		customUrl(url: string): Api,
		customUrl(): string
	}

	declare export interface MemberEndpoint {
		all(name: string): CollectionEndpoint,
		allUrl(name: string, url: string): CollectionEndpoint,
		one(name: string, id: any): MemberEndpoint,
		oneUrl(name: string, url: string): MemberEndpoint,
		get<T>(params?: any, headers?: Headers): Promise<MemberResponse<T>>,
		put<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>,
		delete<T>(data?: any, headers?: Headers): Promise<MemberResponse<T>>,
		patch<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>,
		head<T>(headers?: any): Promise<MemberResponse<T>>,
		customUrl(url: string): MemberEndpoint,
		customUrl(): string
	}

	declare export interface CollectionEndpoint {
		get<T>(id: any, params?: any, headers?: Headers): Promise<MemberResponse<T>>,
		getAll<T>(params?: any, headers?: Headers): Promise<CollectionResponse<T>>,
		post<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>,
		put<T>(id: any, data: any, headers?: Headers): Promise<MemberResponse<T>>,
		delete<T>(id: any, data?: any, headers?: Headers): Promise<MemberResponse<T>>,
		patch<T>(id: any, data: any, headers?: Headers): Promise<MemberResponse<T>>,
		head<T>(id: any, headers?: Headers): Promise<MemberResponse<T>>
	}

	declare export interface Endpoint<Self> {
		url(): string,
		addResponseInterceptor(interceptor: ResponseInterceptor): Self,
		responseInterceptors(): ResponseInterceptor[],
		addRequestInterceptor(interceptor: RequestInterceptor): Self,
		requestInterceptors(): RequestInterceptor[],
		addFullResponseInterceptor(interceptor: ResponseInterceptor): Self,
		fullResponseInterceptors(): ResponseInterceptor[],
		addFullRequestInterceptor(interceptor: FullRequestInterceptor): Self,
		fullRequestInterceptors(): FullRequestInterceptor[],
		header(name: string, value: any): Self,
		headers(): Headers
	}

	declare export interface MemberResponse<T> {
		(): {
		data: T,
		headers: Headers,
		status: number,
		statusText: string
	},
		body(): ResponseBody<T>
	}

	declare export interface CollectionResponse<T> {
		(): {
		data: T[],
		headers: Headers,
		status: number,
		statusText: string
	},
		body(): ResponseBody<T>[]
	}

	declare export interface ResponseBase {
		status(): number,
		headers(): Headers,
		config(): any
	}

	declare export interface ResponseBody<T> {
		data(): T,
		(): T,
		all(entity: string): CollectionEndpoint,
		one(entity: string, id: any): MemberEndpoint,
		save(headers?: Headers): void,
		remove(headers?: Headers): void,
		url(): string,
		id(): any
	}

	declare export interface RequestInterceptor {
		(data: any, headers: Headers, method: string, url: string): any
	}

	declare export interface FullRequestInterceptor {
		(params: any, headers: Headers, data: any, method: string, url: string): FullRequestInterceptorReturnValue
	}

	declare export interface FullRequestInterceptorReturnValue {
		params?: any,
		headers?: Headers,
		data?: any,
		method?: string,
		url?: string
	}

	declare export interface ResponseInterceptor {
		(data: any, headers: Headers, method: string, url: string): ResponseInterceptorReturnValue
	}

	declare export interface ResponseInterceptorReturnValue {
		headers?: Headers,
		data?: any,
		method?: string,
		url?: string
	}

	declare export default function restful(endpoint: string): Api

		
}