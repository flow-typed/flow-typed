

declare module 'angular-cookies-1.2' {
					
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