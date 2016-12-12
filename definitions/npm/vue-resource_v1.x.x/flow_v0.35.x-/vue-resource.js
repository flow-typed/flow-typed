

declare module 'vue-resource' {
					declare module.exports: undefined


}

declare module 'npm$namespace$vuejs' {
		declare interface HttpHeaders {
		put?: {
		[key: string]: string
	},
		post?: {
		[key: string]: string
	},
		patch?: {
		[key: string]: string
	},
		delete?: {
		[key: string]: string
	},
		common?: {
		[key: string]: string
	},
		custom?: {
		[key: string]: string
	},
		[key: string]: any
	}

	declare interface HttpResponse {
		data: Object,
		ok: boolean,
		status: number,
		statusText: string,
		headers: Function,
		text(): string,
		json(): any,
		blob(): Blob
	}

	declare interface HttpOptions {
		url?: string,
		method?: string,
		body?: any,
		params?: any,
		headers?: any,
		before(request: any): any,
		progress(event: any): any,
		credentials?: boolean,
		emulateHTTP?: boolean,
		emulateJSON?: boolean
	}

	declare interface $http {
		(url: string, data?: any, options?: HttpOptions): PromiseLike<HttpResponse>,
		(url: string, options?: HttpOptions): PromiseLike<HttpResponse>
	}

	declare interface HttpInterceptor {
		request(request: HttpOptions): HttpOptions,
		response(response: HttpResponse): HttpResponse
	}

	declare interface Http {
		options: HttpOptions & {
		root: string
	},
		headers: HttpHeaders,
		interceptors: (HttpInterceptor | (() => HttpInterceptor))[],
		get: $http,
		post: $http,
		put: $http,
		patch: $http,
		delete: $http,
		jsonp: $http
	}

	declare interface ResourceActions {
		get: {
		method: string
	},
		save: {
		method: string
	},
		query: {
		method: string
	},
		update: {
		method: string
	},
		remove: {
		method: string
	},
		delete: {
		method: string
	}
	}

	declare interface ResourceMethod {
		(params: any, data?: any, success?: Function, error?: Function): PromiseLike<HttpResponse>,
		(params: any, success?: Function, error?: Function): PromiseLike<HttpResponse>,
		(success?: Function, error?: Function): PromiseLike<HttpResponse>
	}

	declare interface ResourceMethods {
		get: ResourceMethod,
		save: ResourceMethod,
		query: ResourceMethod,
		update: ResourceMethod,
		remove: ResourceMethod,
		delete: ResourceMethod
	}

	declare interface $resource {
		(url: string, params?: Object, actions?: any, options?: HttpOptions): ResourceMethods
	}

	declare interface Resource {
		actions: ResourceActions
	}

	declare interface Vue {
		$http: {
		(options: HttpOptions): PromiseLike<HttpResponse>,
		get: $http,
		post: $http,
		put: $http,
		patch: $http,
		delete: $http,
		jsonp: $http
	},
		$resource: $resource
	}

	declare interface VueStatic {
		http: Http,
		resource: Resource
	}

	declare interface ComponentOption {
		http?: (HttpOptions & {
		headers?: HttpHeaders
	} & {
		[key: string]: any
	})
	}

			
}