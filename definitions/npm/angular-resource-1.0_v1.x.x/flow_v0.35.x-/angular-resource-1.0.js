

declare module 'angular-resource-1.0' {
					
}

declare module 'resource' {
		declare interface IResourceService {
		(url: string, paramDefaults?: any, actionDescriptors?: any): IResourceClass
	}

	declare interface IActionDescriptor {
		method: string,
		isArray?: boolean,
		params?: any,
		headers?: any
	}

	declare interface IResourceClass {
		get: IActionCall,
		save: IActionCall,
		query: IActionCall,
		remove: IActionCall,
		delete: IActionCall
	}

	declare interface IActionCall {
		(): IResource,
		(dataOrParams: any): IResource,
		(dataOrParams: any, success: Function): IResource,
		(success: Function, error?: Function): IResource,
		(params: any, data: any, success?: Function, error?: Function): IResource
	}

	declare interface IResource {
		$save: IActionCall,
		$remove: IActionCall,
		$delete: IActionCall,
		$query: IActionCall,
		$get: IActionCall
	}

	declare interface IResourceServiceFactoryFunction {
		($resource: ng.resource.IResourceService): ng.resource.IResourceClass
	}

			
}

declare module 'npm$namespace$ng' {
		declare interface IModule {
		factory(
		name: string, resourceServiceFactoryFunction: ng.resource.IResourceServiceFactoryFunction
	): IModule
	}

			
}