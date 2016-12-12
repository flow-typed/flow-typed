

declare module 'jquery.cookie' {
		declare interface JQueryCookieOptions {
		expires?: any,
		path?: string,
		domain?: string,
		secure?: boolean
	}

	declare interface JQueryCookieStatic {
		raw?: boolean,
		json?: boolean,
		defaults?: JQueryCookieOptions,
		(): {
		[key: string]: string
	},
		(name: string): any,
		(name: string, value: string): void,
		(name: string, converter: (value: string) => any): any,
		(name: string, value: string, options: JQueryCookieOptions): void,
		(name: string, value: any): void,
		(name: string, value: any, options: JQueryCookieOptions): void
	}

	declare interface JQueryStatic {
		cookie?: JQueryCookieStatic,
		removeCookie(name: string): boolean,
		removeCookie(name: string, options: JQueryCookieOptions): boolean
	}

			
}