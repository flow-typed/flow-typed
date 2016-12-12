import type { RequireFunction, Module } from 'npm$namespace$___WebpackModuleApi'

declare module 'webpack-env' {
					
}

declare module 'npm$namespace$___WebpackModuleApi' {
	declare type ModuleId = string | number;

	declare interface RequireContext {
		keys(): string[],
		(id: string): T,
		resolve(id: string): string
	}

	declare interface RequireFunction {
		(path: string): T,
		(paths: string[], callback: (...modules: any[]) => void): void,
		ensure: (
		paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string
	) => void,
		context: (path: string, deep?: boolean, filter?: RegExp) => RequireContext,
		resolve(path: string): number,
		resolveWeak(path: string): number,
		include(path: string): void,
		cache: {
		[id: string]: any
	}
	}

	declare interface Module {
		exports: any,
		require(id: string): any,
		id: string,
		filename: string,
		loaded: boolean,
		parent: any,
		children: any[],
		hot: Hot
	}

	declare interface Hot {
		accept(
		dependencies: string[], callback: (updatedDependencies: ModuleId[]) => void
	): void,
		accept(dependency: string, callback: () => void): void,
		accept(errHandler?: (err: Error) => void): void,
		decline(dependencies: string[]): void,
		decline(dependency: string): void,
		decline(): void,
		dispose<T>(callback: (data: T) => void): void,
		addDisposeHandler<T>(callback: (data: T) => void): void,
		removeDisposeHandler<T>(callback: (data: T) => void): void,
		check(
		autoApply: boolean, callback: (err: Error, outdatedModules: ModuleId[]) => void
	): void,
		check(callback: (err: Error, outdatedModules: ModuleId[]) => void): void,
		apply(
		options: AcceptOptions, callback: (err: Error, outdatedModules: ModuleId[]) => void
	): void,
		apply(callback: (err: Error, outdatedModules: ModuleId[]) => void): void,
		status(): string,
		status(callback: (status: string) => void): void,
		addStatusHandler(callback: (status: string) => void): void,
		removeStatusHandler(callback: (status: string) => void): void,
		active: boolean,
		data: {
		
	}
	}

	declare interface AcceptOptions {
		ignoreUnaccepted?: boolean,
		autoApply?: boolean
	}

			
}