

declare module 'storejs' {
		declare interface StoreJSStatic {
		set(key: string, value: any): any,
		get(key: string): any,
		remove(key: string): void,
		clear(): void,
		enabled: boolean,
		disabled: boolean,
		transact(key: string, defaultValue: any, transactionFn?: (val: any) => void): void,
		getAll(): any,
		serialize(value: any): string,
		deserialize(value: string): any
	}

			
}