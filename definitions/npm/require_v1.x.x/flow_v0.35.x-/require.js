

declare module 'require' {
		declare interface RequireError {
		requireType: string,
		requireModules: string[],
		originalError: Error
	}

	declare interface RequireShim {
		deps?: string[],
		exports?: string,
		init?: (...dependencies: any[]) => any
	}

	declare interface RequireConfig {
		baseUrl?: string,
		paths?: {
		[key: string]: any
	},
		shim?: {
		[key: string]: RequireShim
	},
		map?: {
		[id: string]: {
		[id: string]: string
	}
	},
		bundles?: {
		[key: string]: string[]
	},
		config?: {
		[id: string]: {
		
	}
	},
		packages?: {
		
	},
		waitSeconds?: number,
		context?: string,
		deps?: string[],
		callback?: (...modules: any[]) => void,
		enforceDefine?: boolean,
		xhtml?: boolean,
		urlArgs?: string | ((id: string, url: string) => string),
		scriptType?: string,
		skipDataMain?: boolean,
		onNodeCreated?: (
		node: HTMLScriptElement, config: RequireConfig, moduleName: string, url: string
	) => void
	}

	declare interface RequireModule {
		config(): {
		
	}
	}

	declare interface RequireMap {
		prefix: string,
		name: string,
		parentMap: RequireMap,
		url: string,
		originalName: string,
		fullName: string
	}

	declare interface Require {
		config(config: RequireConfig): Require,
		(module: string): any,
		(modules: string[]): void,
		(modules: string[], ready: Function): void,
		(modules: string[], ready: Function, errback: Function): void,
		toUrl(module: string): string,
		defined(module: string): boolean,
		specified(module: string): boolean,
		onError(err: RequireError, errback?: (err: RequireError) => void): void,
		undef(module: string): void,
		onResourceLoad(context: Object, map: RequireMap, depArray: RequireMap[]): void
	}

	declare interface RequireDefine {
		(config: {
		[key: string]: any
	}): void,
		(func: () => any): void,
		(deps: string[], ready: Function): void,
		(ready: (
		require: Require, exports: {
		[key: string]: any
	}, module: RequireModule
	) => any): void,
		(name: string, deps: string[], ready: Function): void,
		(name: string, ready: Function): void,
		amd: Object
	}

			
}

declare module 'module' {
					declare module.exports: undefined


}