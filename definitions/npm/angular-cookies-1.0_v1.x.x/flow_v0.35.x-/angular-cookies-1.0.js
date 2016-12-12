

declare module 'angular-cookies-1.0' {
					
}

declare module 'cookies' {
		declare interface ICookiesService {
		
	}

	declare interface ICookieStoreService {
		get(key: string): any,
		put(key: string, value: any): void,
		remove(key: string): void
	}

			
}