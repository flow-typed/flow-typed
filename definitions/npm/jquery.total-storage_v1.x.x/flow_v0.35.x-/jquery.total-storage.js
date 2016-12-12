

declare module 'jquery.total-storage' {
		declare interface JQueryTotalStorage {
		(key: string, value?: any, options?: JQueryTotalStorageOptions): any,
		setItem(key: string, value: any): any,
		getItem(key: string): any,
		getAll(): any[],
		deleteItem(key: string): boolean
	}

	declare interface JQueryTotalStorageOptions {
		
	}

	declare interface JQueryStatic {
		totalStorage: JQueryTotalStorage
	}

			
}