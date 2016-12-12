

declare module 'google-apps-script.cache' {
					
}

declare module 'Cache' {
		declare export interface Cache {
		get(key: string): string,
		getAll(keys: String[]): Object,
		put(key: string, value: string): void,
		put(key: string, value: string, expirationInSeconds: Integer): void,
		putAll(values: Object): void,
		putAll(values: Object, expirationInSeconds: Integer): void,
		remove(key: string): void,
		removeAll(keys: String[]): void
	}

	declare export interface CacheService {
		getDocumentCache(): Cache,
		getScriptCache(): Cache,
		getUserCache(): Cache
	}

			
}