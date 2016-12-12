

declare module 'angular-resource-1.3' {
		declare interface Array<T> {
		$promise: angular.IPromise<Array<T>>,
		$resolved: boolean
	}

			
}

declare module 'angular-resource' {
					declare module.exports: undefined


}

declare module 'resource' {
		declare interface IResourceOptions {
		stripTrailingSlashes?: boolean
	}

	declare interface IResourceService {
		(url: string, paramDefaults?: any, actions?: any, options?: IResourceOptions): IResourceClass<IResource<any>>,
		(url: string, paramDefaults?: any, actions?: any, options?: IResourceOptions): U,
		(url: string, paramDefaults?: any, actions?: any, options?: IResourceOptions): IResourceClass<T>
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
		timeout?: number | angular.IPromise<any>,
		withCredentials?: boolean,
		responseType?: string,
		interceptor?: any
	}

	declare interface IResourceClass<T> {
		new (dataOrParams?: any): T,
		get(): T,
		get(params: Object): T,
		get(success: Function, error?: Function): T,
		get(params: Object, success: Function, error?: Function): T,
		get(params: Object, data: Object, success?: Function, error?: Function): T,
		query(): IResourceArray<T>,
		query(params: Object): IResourceArray<T>,
		query(success: Function, error?: Function): IResourceArray<T>,
		query(params: Object, success: Function, error?: Function): IResourceArray<T>,
		query(
		params: Object, data: Object, success?: Function, error?: Function
	): IResourceArray<T>,
		save(): T,
		save(data: Object): T,
		save(success: Function, error?: Function): T,
		save(data: Object, success: Function, error?: Function): T,
		save(params: Object, data: Object, success?: Function, error?: Function): T,
		remove(): T,
		remove(params: Object): T,
		remove(success: Function, error?: Function): T,
		remove(params: Object, success: Function, error?: Function): T,
		remove(params: Object, data: Object, success?: Function, error?: Function): T,
		delete(): T,
		delete(params: Object): T,
		delete(success: Function, error?: Function): T,
		delete(params: Object, success: Function, error?: Function): T,
		delete(params: Object, data: Object, success?: Function, error?: Function): T
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
		$promise: angular.IPromise<T>,
		$resolved: boolean,
		toJSON: () => {
		[index: string]: any
	}
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