

declare module 'gulp-load-plugins' {
		declare interface IOptions {
		pattern?: string[],
		config?: string,
		scope?: string[],
		replaceString?: RegExp,
		camelize?: boolean,
		lazy?: boolean,
		rename?: IPluginNameMappings
	}

	declare interface IPluginNameMappings {
		[npmPackageName: string]: string
	}

	declare interface IGulpPlugins {
		
	}

	declare function gulpLoadPlugins<T>(options?: IOptions): T

		declare module.exports: undefined


}