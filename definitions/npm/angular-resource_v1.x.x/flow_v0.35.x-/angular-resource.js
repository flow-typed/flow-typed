

declare module 'angular-resource' {
		declare interface Array<T> {
		$promise: angular.IPromise<Array<T>>,
		$resolved: boolean
	}

			declare module.exports: undefined


}

declare module 'resource' {
		declare interface IResourceOptions {
		stripTrailingSlashes?: boolean,
		cancellable?: boolean
	}

	declare interface IResourceService {
		(url: string, paramDefaults?: any, actions?: IActionHash, options?: IResourceOptions): IResourceClass<IResource<any>>,
		(url: string, paramDefaults?: any, actions?: IActionHash, options?: IResourceOptions): U,
		(url: string, paramDefaults?: any, actions?: IActionHash, options?: IResourceOptions): IResourceClass<T>
	}

	declare interface IActionHash {
		[action: string]: IActionDescriptor
	}

	declare interface IActionDescriptor {
		method: string,
		params?: any,
		url?: string,
		isArray?: boolean,
		transformRequest?: angular.IHttpRequestTransformer | angular.IHttpRequestTransformer[],
		transformResponse?: angular.IHttpResponseTransformer | angular.IHttpResponseTransformer[],
		headers?: any,
		cache?: boolean | angular.ICacheObject,
		timeout?: number,
		cancellable?: boolean,
		withCredentials?: boolean,
		responseType?: string,
		interceptor?: IHttpInterceptor
	}

	declare interface IResourceMethod<T> {
		(): T,
		(params: Object): T,
		(success: Function, error?: Function): T,
		(params: Object, success: Function, error?: Function): T,
		(params: Object, data: Object, success?: Function, error?: Function): T
	}

	declare interface IResourceArrayMethod<T> {
		(): IResourceArray<T>,
		(params: Object): IResourceArray<T>,
		(success: Function, error?: Function): IResourceArray<T>,
		(params: Object, success: Function, error?: Function): IResourceArray<T>,
		(params: Object, data: Object, success?: Function, error?: Function): IResourceArray<T>
	}

	declare interface IResourceClass<T> {
		new (dataOrParams?: any): T & IResource<T>,
		get: IResourceMethod<T>,
		query: IResourceArrayMethod<T>,
		save: IResourceMethod<T>,
		remove: IResourceMethod<T>,
		delete: IResourceMethod<T>
	}

	declare interface IResource<T> {
		$get(): angular.IPromise<T>,
		$get(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$get(success: Function, error?: Function): angular.IPromise<T>,
		$query(): angular.IPromise<IResourceArray<T>>,
		$query(
		params?: Object, success?: Function, error?: Function
	): angular.IPromise<IResourceArray<T>>,
		$query(success: Function, error?: Function): angular.IPromise<IResourceArray<T>>,
		$save(): angular.IPromise<T>,
		$save(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$save(success: Function, error?: Function): angular.IPromise<T>,
		$remove(): angular.IPromise<T>,
		$remove(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$remove(success: Function, error?: Function): angular.IPromise<T>,
		$delete(): angular.IPromise<T>,
		$delete(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$delete(success: Function, error?: Function): angular.IPromise<T>,
		$cancelRequest(): void,
		$promise: angular.IPromise<T>,
		$resolved: boolean,
		toJSON(): T
	}

	declare interface IResourceArray<T> {
		$promise: angular.IPromise<IResourceArray<T>>,
		$resolved: boolean
	}

	declare interface IResourceServiceFactoryFunction<T> {
		($resource: angular.resource.IResourceService): IResourceClass<T>,
		($resource: angular.resource.IResourceService): U
	}

	declare interface IResourceServiceProvider {
		defaults: IResourceOptions
	}

			
}

declare module 'npm$namespace$angular' {
		declare interface IModule {
		factory(
		name: string, resourceServiceFactoryFunction: angular.resource.IResourceServiceFactoryFunction<any>
	): IModule
	}

			
}

declare module 'auto' {
		declare interface IInjectorService {
		get(name: "$resource"): ng.resource.IResourceService
	}

			
}