

declare module 'angular-httpi' {
					
}

declare module 'npm$namespace$Httpi' {
		declare export interface HttpiPayload {
		method?: string,
		url?: string,
		params?: {
		
	},
		data?: {
		
	},
		keepTrailingSlash?: boolean
	}

	declare export interface HttpiFactory {
		(config: HttpiPayload): ng.IHttpPromise<{
		
	}>,
		resource(url: string): HttpiResource
	}

		declare export class HttpiResource  {
		constructor(http: ng.IHttpService, url: string): this;
		delete<T>(config: HttpiPayload): ng.IHttpPromise<T>;
		get<T>(config: HttpiPayload): ng.IHttpPromise<T>;
		head<T>(config: HttpiPayload): ng.IHttpPromise<T>;
		jsonp<T>(config: HttpiPayload): ng.IHttpPromise<T>;
		post<T>(config: HttpiPayload): ng.IHttpPromise<T>;
		put<T>(config: HttpiPayload): ng.IHttpPromise<T>;
		setKeepTrailingSlash(newKeepTrailingSlash: boolean): HttpiResource
	}

	
}