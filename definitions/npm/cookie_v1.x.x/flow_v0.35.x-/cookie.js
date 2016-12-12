

declare module 'cookie' {
		declare interface CookieSerializeOptions {
		encode?: (val: string) => string,
		path?: string,
		expires?: Date,
		maxAge?: number,
		domain?: string,
		secure?: boolean,
		httpOnly?: boolean
	}

	declare interface CookieParseOptions {
		decode?: (val: string) => string
	}

	declare interface CookieStatic {
		serialize(name: string, val: string, options?: CookieSerializeOptions): string,
		parse(str: string, options?: CookieParseOptions): {
		[key: string]: string
	}
	}

			declare module.exports: CookieStatic


}