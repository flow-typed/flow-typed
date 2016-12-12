

declare module 'lockr' {
		declare interface LockrStatic {
		prefix: string,
		set(key: string, value: string | number | Object): void,
		set<T>(key: string, value: Array<T>): void,
		rm(key: string): void,
		get<T>(key: string, defaultValue?: T): T,
		sadd(key: string, value: string | number | Object): void,
		sadd<T>(key: string, value: Array<T>): void,
		smembers(key: string): (string | number | Object)[],
		smembers<T>(key: string): Array<T>,
		sismember(key: string, value: string | number | Object): boolean,
		sismember<T>(key: string, value: Array<T>): boolean,
		srem(key: string, value: string | number | Object): void,
		srem<T>(key: string, value: Array<T>): void,
		getAll(): (string | number | Object)[],
		flush(): void
	}

			declare module.exports: LockrStatic


}