import type { System } from 'npm$namespace$SystemJSLoader'

declare module 'systemjs' {
					declare module.exports: System


}

declare module 'npm$namespace$SystemJSLoader' {
	declare type ModulesList = {
		[bundleName: string]: Array<string>
	};

	declare type PackageList<T> = {
		[packageName: string]: T
	};

	declare type ModuleFormat = "esm" | "cjs" | "amd" | "global" | "register";

	declare type Transpiler = "plugin-traceur" | "plugin-babel" | "plugin-typescript" | "traceur" | "babel" | "typescript" | boolean;

	declare type ConfigMap = PackageList<string>;

	declare type ConfigMeta = PackageList<MetaConfig>;

	declare interface MetaConfig {
		format?: ModuleFormat,
		exports?: string,
		deps?: Array<string>,
		globals?: string,
		loader?: string,
		sourceMap?: any,
		scriptLoad?: boolean,
		nonce?: string,
		integrity?: string,
		crossOrigin?: string,
		esmExports?: boolean,
		build?: boolean
	}

	declare interface PackageConfig {
		main?: string,
		format?: ModuleFormat,
		defaultExtension?: boolean | string,
		map?: ConfigMap,
		meta?: ConfigMeta
	}

	declare interface TraceurOptions {
		properTailCalls?: boolean,
		symbols?: boolean,
		arrayComprehension?: boolean,
		asyncFunctions?: boolean,
		asyncGenerators?: any,
		forOn?: boolean,
		generatorComprehension?: boolean
	}

	declare interface Config {
		[customName: string]: any,
		baseURL?: string,
		babelOptions?: any,
		bundles?: ModulesList,
		defaultJSExtensions?: boolean,
		depCache?: ModulesList,
		map?: ConfigMap,
		meta?: ConfigMeta,
		packages?: PackageList<PackageConfig>,
		paths?: PackageList<string>,
		traceurOptions?: TraceurOptions,
		transpiler?: Transpiler,
		trace?: boolean,
		typescriptOptions?: any
	}

	declare interface SystemJSSystemFields {
		env: string,
		loaderErrorStack: boolean,
		packageConfigPaths: Array<string>,
		pluginFirst: boolean,
		version: string,
		warnings: boolean
	}

	declare interface System {
		amdDefine: Function,
		amdRequire: Function,
		config(config: Config): void,
		constructor(): System,
		delete(moduleName: string): void,
		get(moduleName: string): any,
		get<TModule>(moduleName: string): TModule,
		has(moduleName: string): boolean,
		import(moduleName: string, normalizedParentName?: string): Promise<any>,
		import<TModule>(moduleName: string, normalizedParentName?: string): Promise<TModule>,
		newModule(object: any): any,
		newModule<TModule>(object: any): TModule,
		register(name: string, deps: Array<string>, declare: Function): void,
		register(deps: Array<string>, declare: Function): void,
		registerDynamic(
		name: string, deps: Array<string>, executingRequire: boolean, declare: Function
	): void,
		registerDynamic(deps: Array<string>, executingRequire: boolean, declare: Function): void,
		set(moduleName: string, module: any): void,
		_nodeRequire: Function,
		loads: PackageList<any>
	}

			
}