import type { SimpleStorage } from 'npm$namespace$simplestoragejs'

declare module 'simplestorage.js' {
					declare module.exports: SimpleStorage


}

declare module 'npm$namespace$simplestoragejs' {
		declare export interface SimpleStorage {
		version: string,
		canUse(): boolean,
		set(key: string, value: any, options?: SetOptions): boolean | Error,
		get(key: string): any,
		hasKey(key: string): boolean,
		deleteKey(key: string): boolean | Error,
		setTTL(key: string, ttl: number): boolean | Error,
		getTTL(key: string): number | boolean,
		flush(): boolean | Error,
		index(): [string] | boolean,
		storageSize(): number
	}

	declare export interface SetOptions {
		TTL?: number
	}

			
}