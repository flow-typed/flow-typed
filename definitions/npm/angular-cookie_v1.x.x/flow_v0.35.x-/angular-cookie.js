

declare module 'angular-cookie' {
					
}

declare module 'cookie' {
		declare interface CookieService {
		(): any,
		(key: string): any,
		(key: string, value: any, options?: CookieOptions): any,
		remove(key: string, options?: CookieOptions): void
	}

	declare interface CookieOptions {
		domain?: string,
		path?: string,
		expires?: number,
		expirationUnit?: string,
		secure?: boolean,
		encode?: (value: any) => any,
		decode?: (value: any) => any
	}

			
}