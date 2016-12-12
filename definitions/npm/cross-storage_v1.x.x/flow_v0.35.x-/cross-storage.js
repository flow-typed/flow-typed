

declare module 'cross-storage' {
	declare type CrossStorageMethod = "get" | "set" | "del" | "getKeys" | "clear";

	declare interface CrossStorageClientOptions {
		timeout?: number,
		promise?: any,
		frameId?: string
	}

	declare interface SubDomain {
		origin: RegExp,
		allow: CrossStorageMethod[]
	}

		declare export class CrossStorageClient  {
		constructor(hubUrl: string, opts: CrossStorageClientOptions): this;
		onConnect(): Promise<void>;
		set(key: string, value: any, ttl?: number): Promise<void>;
		get(key: string): Promise<any>;
		get(...keys: string[]): Promise<any[]>;
		del(...keys: string[]): Promise<void>;
		getKeys(): Promise<string[]>;
		clear(): Promise<void>;
		close(): void
	}

	declare export class CrossStorageHub  {
		init(subdomains: SubDomain[]): void
	}

	
}