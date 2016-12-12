import type { DSHttpAdapter } from 'npm$namespace$JSData'

declare module 'js-data-http' {
					declare module.exports: DSHttpAdapter


}

declare module 'npm$namespace$JSData' {
		declare interface DSHttpAdapterOptions {
		serialize?: (resourceName: string, data: any) => any,
		deserialize?: (resourceName: string, data: any) => any,
		queryTransform?: (resourceName: string, params: DSFilterParams) => any,
		httpConfig?: any,
		forceTrailingSlash?: boolean,
		log?: boolean | ((message?: any, ...optionalParams: any[]) => void),
		error?: boolean | ((message?: any, ...optionalParams: any[]) => void),
		basePath?: string,
		verbsUseBasePath?: string
	}

	declare interface DSHttpAdapterPromiseResolveType {
		data: any,
		headers: any,
		status: number,
		config: any
	}

	declare interface DSHttpAdapter {
		new (options?: DSHttpAdapterOptions): DSHttpAdapter,
		defaults: DSHttpAdapterOptions,
		http: any,
		HTTP(options?: Object): JSDataPromise<DSHttpAdapterPromiseResolveType>,
		DEL(
		url: string, data?: Object, options?: Object
	): JSDataPromise<DSHttpAdapterPromiseResolveType>,
		GET(
		url: string, data?: Object, options?: Object
	): JSDataPromise<DSHttpAdapterPromiseResolveType>,
		POST(
		url: string, data?: Object, options?: Object
	): JSDataPromise<DSHttpAdapterPromiseResolveType>,
		PUT(
		url: string, data?: Object, options?: Object
	): JSDataPromise<DSHttpAdapterPromiseResolveType>
	}

			
}