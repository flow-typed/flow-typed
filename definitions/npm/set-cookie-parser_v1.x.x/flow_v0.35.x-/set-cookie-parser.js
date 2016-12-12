

declare module 'set-cookie-parser' {
			declare function SetCookieParser(input: string | string[] | http.IncomingMessage): SetCookieParser.Cookie[]

		declare module.exports: undefined


}

declare module 'SetCookieParser' {
		declare interface Cookie {
		name: string,
		value: string,
		path?: string,
		expires?: Date,
		maxAge?: number,
		domain?: string,
		secure?: boolean,
		httpOnly?: boolean
	}

	declare function parse(input: string | string[] | http.IncomingMessage): Cookie[]

		
}