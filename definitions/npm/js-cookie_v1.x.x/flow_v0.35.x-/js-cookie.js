import type { CookiesStatic } from 'npm$namespace$Cookies'

declare module 'js-cookie' {
					declare module.exports: CookiesStatic


}

declare module 'npm$namespace$Cookies' {
		declare interface CookieAttributes {
		expires?: number | Date,
		path?: string,
		domain?: string,
		secure?: boolean
	}

	declare interface CookiesStatic {
		defaults: CookieAttributes,
		set(name: string, value: string | any, options?: CookieAttributes): void,
		get(name: string): string,
		get(): {
		[key: string]: string
	},
		getJSON(name: string): any,
		getJSON(): {
		[key: string]: any
	},
		remove(name: string, options?: CookieAttributes): void,
		noConflict(): CookiesStatic,
		withConverter(converter: (value: string, name: string) => string): CookiesStatic
	}

			
}