import type { Static } from 'npm$namespace$BackboneFetchCache'

declare module 'backbone-fetch-cache' {
					declare module.exports: undefined


}

declare module 'npm$namespace$BackboneFetchCache' {
	declare type GetCacheKeyOptions = string | {
		url: string
	} | GetCacheKeyObject;

	declare interface SuperMethods {
		modelFetch(options?: Backbone.ModelFetchOptions): JQueryXHR,
		modelSync(...arg: any[]): JQueryXHR,
		collectionFetch(options?: Backbone.CollectionFetchOptions): JQueryXHR
	}

	declare interface GetCacheOptions {
		data?: any,
		url?: string
	}

	declare interface SetCacheOptions {
		cache: boolean,
		expires: boolean | number,
		prefill: boolean,
		prefillExpires: boolean | number
	}

	declare interface Cache {
		expires: number,
		lastSync: number,
		prefillExpires: number,
		value: any
	}

	declare interface GetCacheKeyObject {
		getCacheKey?: (opts?: GetCacheOptions) => string,
		url?: () => string
	}

	declare interface Static {
		enabled: boolean,
		localStorage: boolean,
		clearItem(...args: any[]): any,
		getCache(key: () => string, opts?: GetCacheOptions): Cache,
		getCache(key: GetCacheKeyOptions, opts?: GetCacheOptions): Cache,
		getCacheKey(key: () => string, opts?: GetCacheOptions): string,
		getCacheKey(key: GetCacheKeyOptions, opts?: GetCacheOptions): string,
		getLastSync(key: () => string, opts?: GetCacheOptions): number,
		getLastSync(key: GetCacheKeyOptions, opts?: GetCacheOptions): number,
		getLocalStorage(): void,
		getLocalStorageKey(): string,
		priorityFn(a: Cache, b: Cache): number,
		reset(): void,
		setCache(instance: () => string, opts?: SetCacheOptions, attrs?: any): void,
		setCache(instance: GetCacheKeyOptions, opts?: SetCacheOptions, attrs?: any): void,
		setLocalStorage(...args: any[]): any,
		_superMethods: SuperMethods
	}

			
}

declare module 'Backbone' {
		declare interface ModelFetchWithCacheOptions {
		cache?: boolean,
		context?: any,
		expires?: number,
		prefill?: boolean,
		prefillExpires?: number,
		prefillSuccess?: (self: any, attributes: any, opts: ModelFetchWithCacheOptions) => void
	}

	declare interface CollectionFetchWithCacheOptions {
		prefillSuccess?: (self: any) => void
	}

	declare interface ModelWithCache {
		fetch(options?: ModelFetchWithCacheOptions): JQueryXHR
	}

	declare interface CollectionWithCache {
		fetch(options?: CollectionFetchWithCacheOptions): JQueryXHR
	}

			
}