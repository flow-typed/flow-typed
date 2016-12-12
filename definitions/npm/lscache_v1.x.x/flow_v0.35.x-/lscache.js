

declare module 'lscache' {
		declare interface LSCache {
		set(key: string, value: any, time?: number): void,
		get(key: string): any,
		remove(key: string): void,
		flush(): void,
		flushExpired(): void,
		setBucket(bucket: string): void,
		resetBucket(): void
	}

			declare module.exports: LSCache


}