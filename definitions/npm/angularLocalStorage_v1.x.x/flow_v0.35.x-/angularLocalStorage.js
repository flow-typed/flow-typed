

declare module 'angularLocalStorage' {
					
}

declare module 'localStorage' {
		declare interface ILocalStorageService {
		set(key: string, value: any): any,
		get(key: string): any,
		remove(key: string): boolean,
		clearAll(): void,
		bind(
		$scope: ng.IScope, key: string, opts?: {
		defaultValue?: any,
		storeName?: string
	}
	): any,
		unbind($scope: ng.IScope, key: string, storeName?: string): void
	}

			
}