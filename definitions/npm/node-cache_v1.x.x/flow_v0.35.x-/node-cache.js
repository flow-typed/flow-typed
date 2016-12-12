

declare module 'node-cache' {
				declare class NodeCache extends events$EventEmitter, NodeCacheTypes$NodeCache {
		data: Data;
		options: Options;
		stats: Stats;
		constructor(options?: Options): this;
		get<T>(key: string, cb?: Callback<T>): T;
		mget<T>(
		keys: string[], cb?: Callback<{
		[key: string]: T
	}>
	): {
		[key: string]: T
	};
		set<T>(
		key: string, value: T, ttl: number | string, cb?: Callback<boolean>
	): boolean;
		set<T>(key: string, value: T, cb?: Callback<boolean>): boolean;
		del(keys: string | string[], cb?: Callback<number>): number;
		ttl(key: string, ttl: number, cb?: Callback<boolean>): boolean;
		ttl(key: string, cb?: Callback<boolean>, ttl?: number): boolean;
		keys(cb?: Callback<string[]>): string[];
		getStats(): Stats;
		flushAll(): void;
		close(): void
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$NodeCacheTypes' {
		declare interface NodeCache {
		data: Data,
		options: Options,
		stats: Stats,
		get<T>(key: string, cb?: Callback<T>): T,
		mget<T>(
		keys: string[], cb?: Callback<{
		[key: string]: T
	}>
	): {
		[key: string]: T
	},
		set<T>(
		key: string, value: T, ttl: number | string, cb?: Callback<boolean>
	): boolean,
		set<T>(key: string, value: T, cb?: Callback<boolean>): boolean,
		del(keys: string | string[], cb?: Callback<number>): number,
		ttl(key: string, ttl: number, cb?: Callback<boolean>): boolean,
		ttl(key: string, cb?: Callback<boolean>, ttl?: number): boolean,
		keys(cb?: Callback<string[]>): string[],
		getStats(): Stats,
		flushAll(): void,
		close(): void
	}

	declare interface Data {
		[key: string]: WrappedValue<any>
	}

	declare interface Options {
		forceString?: boolean,
		objectValueSize?: number,
		arrayValueSize?: number,
		stdTTL?: number,
		checkperiod?: number,
		useClones?: boolean
	}

	declare interface Stats {
		hits: number,
		misses: number,
		keys: number,
		ksize: number,
		vsize: number
	}

	declare interface WrappedValue<T> {
		t: number,
		v: T
	}

	declare interface Callback<T> {
		(err: any, data: T): void
	}

			
}