

declare module 'jstorage' {
		declare interface JStorageOptions {
		TTL: number
	}

	declare interface JStorageReadonlyStore {
		[key: string]: any
	}

	declare interface JStorageStatic {
		set<TValue>(key: string, value: TValue, options?: JStorageOptions): TValue,
		get<TValue>(key: string, defaultIfNotFound?: TValue): TValue,
		deleteKey(key: string): boolean,
		setTTL(key: string, ttl: number): boolean,
		getTTL(key: string): number,
		flush(): boolean,
		storageObj(): JStorageReadonlyStore,
		index(): string[],
		storageSize(): number,
		currentBackend(): Storage,
		storageAvailable(): boolean,
		listenKeyChange(key: string, callback: (key: string, value: any) => void): void,
		listenKeyChange<TValue>(key: string, callback: (key: string, value: TValue) => void): void,
		stopListening(key: string, callback?: Function): void,
		subscribe(channel: string, callback: (channel: string, value: any) => void): void,
		subscribe<TValue>(
		channel: string, callback: (channel: string, value: TValue) => void
	): void,
		publish(channel: string, payload: any): void,
		reInit(): void
	}

	declare interface JQueryStatic {
		jStorage: JStorageStatic
	}

			
}