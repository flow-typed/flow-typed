import type { ProtractorHttpMock } from 'npm$namespace$mock'

declare module 'protractor-http-mock' {
					declare module.exports: ProtractorHttpMock


}

declare module 'npm$namespace$mock' {
		declare interface ProtractorHttpMock {
		(mocks?: Array<requests.AllRequests<TResponse, TPayload>>, plugins?: Array<Plugin>, skipDefaults?: boolean): ProtractorHttpMock,
		(mocks?: Array<requests.AllRequests<TResponse, TPayload>>, plugins?: Array<string>, skipDefaults?: boolean): ProtractorHttpMock,
		(mocks: Array<string>, plugins?: Array<Plugin>, skipDefaults?: boolean): ProtractorHttpMock,
		(mocks: Array<string>, plugins?: Array<string>, skipDefaults?: boolean): ProtractorHttpMock,
		teardown(): void,
		requestsMade(): webdriver.promise.Promise<Array<ReceivedRequest>>,
		clearRequests(): webdriver.promise.Promise<boolean>,
		config: {
		rootDirectory?: string,
		protractorConfig?: string
	},
		add<T1, T2>(
		mocks: Array<requests.AllRequests<T1, T2>>
	): webdriver.promise.Promise<boolean>,
		remove<T1, T2>(
		mocks: Array<requests.AllRequests<T1, T2>>
	): webdriver.promise.Promise<boolean>
	}

	declare interface ReceivedRequest {
		url: string,
		method: requests.Method
	}

	declare interface Plugin {
		match<T1, T2>(
		mockRequest: requests.AllRequests<T1, T2>, requestConfig: requests.AllRequests<T1, T2>
	): boolean
	}

	declare interface Plugin {
		match<T1, T2>(
		mockRequest: requests.AllRequests<T1, T2>, requestConfig: requests.AllRequests<T1, T2>
	): boolean
	}

			
}

declare module 'requests' {
	declare type Method = "GET" | "POST" | "DELETE" | "PUT" | "HEAD" | "PATCH" | "JSONP";

	declare type AllRequests<T1, T2> = Get<T1> | PostData<T1, T2> | Post<T1> | Head<T1> | Delete<T1> | Put<T1> | Patch<T1> | Jsonp<T1>;

	declare interface Get<TResponse> {
		request: {
		method: Method,
		path: string,
		regex?: boolean,
		params?: Object,
		queryString?: Object,
		headers?: Object,
		interceptedRequest?: boolean,
		interceptedAnonymousRequest?: boolean
	},
		response: {
		status?: number,
		data: TResponse
	}
	}

	declare interface PostData<TResponse, TPayload> {
		request: {
		method: Method,
		path: string,
		regex?: boolean,
		data: TPayload
	},
		response: {
		status?: number,
		data: TResponse
	}
	}

	declare interface Post<TResponse> {
		request: {
		method: Method,
		path: string,
		regex?: boolean
	},
		response: {
		status?: number,
		data: TResponse
	}
	}

	declare interface Head<TResponse> {
		request: {
		method: Method,
		path: string,
		regex?: boolean
	},
		response: {
		status?: number,
		data: TResponse
	}
	}

	declare interface Delete<TResponse> {
		request: {
		method: Method,
		path: string,
		regex?: boolean
	},
		response: {
		status?: number,
		data: TResponse
	}
	}

	declare interface Put<TResponse> {
		request: {
		method: Method,
		path: string,
		regex?: boolean
	},
		response: {
		status?: number,
		data: TResponse
	}
	}

	declare interface Patch<TResponse> {
		request: {
		method: Method,
		path: string,
		regex?: boolean
	},
		response: {
		status?: number,
		data: TResponse
	}
	}

	declare interface Jsonp<TResponse> {
		request: {
		method: Method,
		path: string,
		regex?: boolean
	},
		response: {
		status?: number,
		data: TResponse
	}
	}

			
}