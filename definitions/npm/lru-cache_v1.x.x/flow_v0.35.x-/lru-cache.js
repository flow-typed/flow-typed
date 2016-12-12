

declare module 'lru-cache' {
			declare function LRU<T>(opts: LRU.Options<T>): LRU.Cache<T>

	declare function LRU<T>(max: number): LRU.Cache<T>

		declare module.exports: undefined


}

declare module 'LRU' {
		declare interface Options<T> {
		max?: number,
		maxAge?: number,
		length?: (value: T) => number,
		dispose?: (key: any, value: T) => void,
		stale?: boolean
	}

	declare interface Cache<T> {
		set(key: any, value: T, maxAge?: number): void,
		get(key: any): T,
		peek(key: any): T,
		has(key: any): boolean,
		del(key: any): void,
		reset(): void,
		prune(): void,
		forEach(iter: (value: T, key: any, cache: Cache<T>) => void, thisp?: any): void,
		itemCount: number,
		length: number,
		keys(): any[],
		values(): T[]
	}

			
}