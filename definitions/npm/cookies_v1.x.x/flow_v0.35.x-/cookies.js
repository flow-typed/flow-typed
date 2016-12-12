

declare module 'cookies' {
		declare interface ICookies {
		get(name: string): string,
		get(name: string, opts: IOptions): string,
		set(name: string, value: string): ICookies,
		set(name: string, value: string, opts: IOptions): ICookies
	}

	declare interface IOptions {
		maxAge?: number,
		expires?: Date,
		path?: string,
		domain?: string,
		secure?: boolean,
		secureProxy?: boolean,
		httpOnly?: boolean,
		signed?: boolean,
		overwrite?: boolean
	}

	declare interface CookiesStatic {
		new (request: http.IncomingMessage, response: http.ServerResponse): cookies.ICookies,
		new (
		request: http.IncomingMessage, response: http.ServerResponse, keys?: Array<string>
	): cookies.ICookies
	}

			declare module.exports: CookiesStatic


}