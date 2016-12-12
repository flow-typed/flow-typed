

declare module 'express-brute-memcached' {
		declare interface MemcachedStoreOptions {
		prefix: string,
		maxKeySize: number,
		maxExpiration: number,
		maxValue: number,
		poolSize: number,
		algorithm: string,
		reconnect: number,
		timeout: number,
		retries: number,
		failures: number,
		retry: number,
		remove: boolean,
		failOverServers: Array<any>,
		keyCompression: boolean,
		idle: number
	}

		declare export default class MemcachedStore  {
		constructor(hosts: string | Array<string>, options?: MemcachedStoreOptions): this
	}

	
}