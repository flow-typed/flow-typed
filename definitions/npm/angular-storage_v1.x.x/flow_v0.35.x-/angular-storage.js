

declare module 'angular-storage' {
					
}

declare module 'storage' {
		declare interface IStoreService {
		getNamespacedStore(
		namespace: string, storage?: string, delimiter?: string
	): INamespacedStoreService
	}

	declare interface INamespacedStoreService {
		set(name: string, value: any): void,
		get(name: string): any,
		remove(name: string): void
	}

	declare interface IStoreProvider {
		setStore(storage: string): void
	}

			
}