

declare module 'cachefactory' {
					declare module.exports: ICacheFactory


}

declare module 'CacheFactory' {
		declare export interface IStoreImplementation {
		getItem(key: string): string,
		setItem(key: string, value: string): void,
		removeItem(key: string): void
	}

	declare export interface CacheGetOptions {
		onExpire(key: string, value: any): any
	}

	declare export interface CachePutOptions {
		maxAge?: number,
		storeOnReject?: boolean,
		storeOnResolve?: boolean,
		created?: Date,
		access?: Date,
		expires?: Date
	}

	declare export interface CacheTouchOptions {
		
	}

	declare export interface CacheOptions {
		cacheFlushInterval?: number,
		capacity?: number,
		deleteOnExpire?: string,
		disabled?: boolean,
		maxAge?: number,
		recycleFreq?: number,
		storeOnReject?: boolean,
		storeOnResolve?: boolean,
		storageImpl?: IStoreImplementation,
		storageMode?: string,
		storagePrefix?: string,
		onExpire(key: string, value: any): any
	}

	declare export interface ICache {
		$$id: string,
		get<T>(key: string, options?: CacheGetOptions): T,
		put<T>(key: string, value: T, options?: CachePutOptions): void,
		remove<T>(key: string): T,
		removeAll(): void,
		removeExpired(): {
		[key: string]: any
	},
		destroy(): void,
		info(): CacheInfo,
		info(key: string): CacheItemInfo,
		keySet(): any,
		keys(): Array<string>,
		enable(): void,
		disable(): void,
		touch(key?: string, options?: CacheTouchOptions): void,
		setCacheFlushInterval(cacheFlushInterval: number): void,
		setCapacity(capacity: number): void,
		setDeleteOnExpire(deleteOnExpire: string): void,
		setMaxAge(maxAge: number): void,
		setOnExpire(onExpire: Function): void,
		setRecycleFreq(recycleFreq: number): void,
		setStorageMode(storageMode: string): void,
		setOptions(options: CacheOptions, strict?: boolean): void,
		values(): Array<any>
	}

	declare export interface ICacheFactory {
		BinaryHeap: IBinaryHeap,
		utils: IUtils,
		defaults: CacheOptions,
		(cacheId: string, options?: CacheOptions): ICache,
		createCache(cacheId: string, options?: CacheOptions): ICache,
		get(cacheId: string, options?: CacheOptions): ICache,
		info(): CacheInfo,
		keySet(): {
		[key: string]: ICache
	},
		keys(): Array<string>,
		destroy(cacheId: string): void,
		destroyAll(): void,
		clearAll(): void,
		enableAll(): void,
		disableAll(): void,
		touchAll(): void,
		removeExpiredFromAll(): Array<{
		[key: string]: Array<{
		[key: string]: any
	}>
	}>
	}

	declare export interface IUtils {
		isNumber(value: any): boolean,
		isString(value: any): boolean,
		isObject(value: any): boolean,
		isFunction(value: any): boolean,
		equals(a: any, b: any): boolean,
		fromJson(value: any): {
		
	},
		Promise: any
	}

	declare export interface HeapItem {
		key: string,
		accessed: Date
	}

	declare export interface IBinaryHeap {
		(w?: IWeightFunc, c?: ICompareFunc): void,
		heap: Array<HeapItem>,
		weightFunc: IWeightFunc,
		compareFunc: ICompareFunc,
		push(node: HeapItem): void,
		pop(): HeapItem,
		peek(): HeapItem,
		remove(node: HeapItem): HeapItem,
		removeAll(): void,
		size(): Number
	}

	declare export interface IWeightFunc {
		(x: T): T
	}

	declare export interface ICompareFunc {
		(x: T, y: T): boolean
	}

	declare export interface CacheInfo {
		size: Number,
		caches: {
		[key: string]: any
	},
		capacity: Number,
		maxAge: Number,
		deleteOnExpire: string,
		onExpire: Function,
		cacheFlushInterval: Number,
		recycleFreq: Number,
		storageMode: string,
		storageImpl: IStoreImplementation,
		disabled: boolean,
		storagePrefix: string,
		storeOnResolve: boolean,
		storeOnReject: boolean
	}

	declare export interface CacheItemInfo {
		created: Date,
		accessed: Date,
		expires: Date,
		isExpired: boolean
	}

			
}