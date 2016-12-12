

declare module 'ngkookies' {
					
}

declare module 'kookies' {
	declare type Options = {
		expires?: number | Date,
		path?: string,
		domain?: string,
		secure?: boolean
	};

	declare type Config = {
		raw?: boolean,
		json?: boolean
	};

	declare interface IKookiesService {
		set(name: string, value: string, optopns?: Options): void,
		get(): any,
		get(name: string): any,
		get(name: string, converter: any): any,
		get<T>(name: string, converter: any): T,
		remove(name: string, options?: Options): boolean
	}

	declare interface IKookiesProvider {
		config: Config,
		setConfig(config: Config): void,
		defaults: Options,
		setDefaults(options: Options): void
	}

			
}