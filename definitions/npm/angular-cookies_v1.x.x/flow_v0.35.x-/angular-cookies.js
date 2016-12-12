

declare module 'angular-cookies' {
					declare module.exports: undefined


}

declare module 'cookies' {
		declare interface ICookiesOptions {
		path?: string,
		domain?: string,
		expires?: string | Date,
		secure?: boolean
	}

	declare interface ICookiesService {
		[index: string]: any
	}

	declare interface ICookiesService {
		get(key: string): string,
		getObject(key: string): any,
		getObject<T>(key: string): T,
		getAll(): any,
		put(key: string, value: string, options?: ICookiesOptions): void,
		putObject(key: string, value: any, options?: ICookiesOptions): void,
		remove(key: string, options?: ICookiesOptions): void
	}

	declare interface ICookieStoreService {
		get(key: string): any,
		put(key: string, value: any): void,
		remove(key: string): void
	}

			
}