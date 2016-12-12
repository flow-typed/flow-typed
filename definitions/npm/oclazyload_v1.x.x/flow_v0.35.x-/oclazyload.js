

declare module 'oclazyload' {
					
}

declare module 'npm$namespace$oc' {
		declare interface ILazyLoad {
		load(
		module: string | ITypedModuleConfig | IModuleConfig | (string | ITypedModuleConfig | IModuleConfig)[], config?: IOptionsConfig
	): ng.IPromise<any>,
		setModuleConfig(config: IModuleConfig): IModuleConfig,
		getModuleConfig(name: string): IModuleConfig,
		getModules(): string[],
		isLoaded(moduleName: string | string[]): boolean,
		inject(moduleName: string | string[]): ng.IPromise<any>,
		toggleWatch(watch: boolean): void
	}

	declare interface ITypedModuleConfig {
		type: string,
		path: string
	}

	declare interface IModuleConfig {
		name?: string,
		files: string[]
	}

	declare interface IOptionsConfig {
		cache?: boolean,
		reconfig?: boolean,
		rerun?: boolean,
		serie?: boolean,
		insertBefore?: string
	}

	declare interface ILazyLoadProvider {
		config(config: IProviderConfig): void
	}

	declare interface IProviderConfig {
		debug?: boolean,
		events?: boolean,
		modules?: IModuleConfig[]
	}

			
}

declare module 'npm$namespace$angular' {
		declare interface IAngularStatic {
		module(
		name: string, requires?: (string | oc.IModuleConfig)[], configFn?: Function
	): IModule
	}

			
}