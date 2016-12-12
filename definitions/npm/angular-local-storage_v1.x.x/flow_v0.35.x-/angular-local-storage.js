

declare module 'angular-local-storage' {
					
}

declare module 'storage' {
		declare interface ILocalStorageServiceProvider {
		setPrefix(prefix: string): ILocalStorageServiceProvider,
		setStorageType(storageType: string): ILocalStorageServiceProvider,
		setStorageCookie(exp: number, path: string): ILocalStorageServiceProvider,
		setStorageCookieDomain(domain: string): ILocalStorageServiceProvider,
		setNotify(setItem: boolean, removeItem: boolean): ILocalStorageServiceProvider
	}

	declare interface ICookie {
		isSupported: boolean,
		set(key: string, val: string): boolean,
		set(key: string, val: string, daysToExpiry: number): boolean,
		get(key: string): string,
		remove(key: string): boolean,
		clearAll(): any
	}

	declare interface ILocalStorageService {
		isSupported: boolean,
		getStorageType(): string,
		set<T>(key: string, value: T): boolean,
		get<T>(key: string): T,
		keys(): string[],
		remove(key: string): boolean,
		clearAll(regularExpression?: RegExp): boolean,
		bind(scope: angular.IScope, property: string, value?: any, key?: string): Function,
		deriveKey(key: string): string,
		length(): number,
		cookie: ICookie
	}

			
}