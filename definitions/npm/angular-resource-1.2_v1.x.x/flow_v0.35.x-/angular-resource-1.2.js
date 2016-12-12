

declare module 'angular-resource-1.2' {
		declare interface Array<T> {
		$promise: ng.IPromise<Array<T>>,
		$resolved: boolean
	}

			
}

declare module 'resource' {
		declare interface IResourceService {
		(url: string, paramDefaults?: any, actionDescriptors?: any): IResourceClass<IResource<any>>,
		(url: string, paramDefaults?: any, actionDescriptors?: any): U,
		(url: string, paramDefaults?: any, actionDescriptors?: any): IResourceClass<T>
	}

	declare interface IActionDescriptor {
		method: string,
		isArray?: boolean,
		params?: any,
		headers?: any
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
		$get(): ng.IPromise<T>,
		$get(params?: Object, success?: Function, error?: Function): ng.IPromise<T>,
		$get(success: Function, error?: Function): ng.IPromise<T>,
		$query(): ng.IPromise<IResourceArray<T>>,
		$query(
		params?: Object, success?: Function, error?: Function
	): ng.IPromise<IResourceArray<T>>,
		$query(success: Function, error?: Function): ng.IPromise<IResourceArray<T>>,
		$save(): ng.IPromise<T>,
		$save(params?: Object, success?: Function, error?: Function): ng.IPromise<T>,
		$save(success: Function, error?: Function): ng.IPromise<T>,
		$remove(): ng.IPromise<T>,
		$remove(params?: Object, success?: Function, error?: Function): ng.IPromise<T>,
		$remove(success: Function, error?: Function): ng.IPromise<T>,
		$delete(): ng.IPromise<T>,
		$delete(params?: Object, success?: Function, error?: Function): ng.IPromise<T>,
		$delete(success: Function, error?: Function): ng.IPromise<T>,
		$promise: ng.IPromise<T>,
		$resolved: boolean
	}

	declare interface IResourceArray<T> {
		$promise: ng.IPromise<IResourceArray<T>>,
		$resolved: boolean
	}

	declare interface IResourceServiceFactoryFunction<T> {
		($resource: ng.resource.IResourceService): IResourceClass<T>,
		($resource: ng.resource.IResourceService): U
	}

			
}

declare module 'npm$namespace$ng' {
		declare interface IModule {
		factory(
		name: string, resourceServiceFactoryFunction: ng.resource.IResourceServiceFactoryFunction<any>
	): IModule
	}

			
}