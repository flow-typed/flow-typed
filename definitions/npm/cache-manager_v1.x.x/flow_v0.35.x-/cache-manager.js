

declare module 'cache-manager' {
		declare interface CachingConfig {
		ttl: number
	}

	declare interface StoreConfig {
		store: string,
		max?: number,
		isCacheableValue?: (value: any) => boolean
	}

	declare interface Cache {
		set<T>(
		key: string, value: T, options: CachingConfig, callback?: (error: any) => void
	): void,
		set<T>(key: string, value: T, ttl: number, callback?: (error: any) => void): void,
		wrap<T>(
		key: string, wrapper: (callback: (error: any, result: T) => void) => void, options: CachingConfig, callback: (error: any, result: T) => void
	): void,
		wrap<T>(
		key: string, wrapper: (callback: (error: any, result: T) => void) => void, callback: (error: any, result: T) => void
	): void,
		get<T>(key: string, callback: (error: any, result: T) => void): void,
		del(key: string, callback?: (error: any) => void): void
	}

			declare module.exports: undefined


}

declare module 'cacheManager' {
			declare function caching(IConfig: StoreConfig): Cache

	declare function multiCaching(Caches: Cache[]): Cache

		
}