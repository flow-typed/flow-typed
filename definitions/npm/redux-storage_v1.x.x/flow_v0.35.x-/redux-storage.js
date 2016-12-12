

declare module 'redux-storage' {
		declare export interface StorageEngine {
		load(): PromiseLike<any>,
		save(state: any): PromiseLike<any>
	}

	declare export interface StateMerger {
		(oldState: any, newState: any): any
	}

	declare interface Loader<TState> {
		(store: Store<TState>): PromiseLike<any>
	}

	declare export function reducer<TState>(reducer: Reducer<TState>, merger?: StateMerger): Reducer<TState>

	declare export function createMiddleware(
		engine: StorageEngine, actionBlacklist?: string[], actionWhitelist?: string[]
	): Middleware

	declare export function createLoader<TState>(engine: StorageEngine): Loader<TState>

		
}

declare module 'redux-storage-decorator-filter' {
		declare interface FilterList {
		[key: number]: string | string[]
	}

	declare export default function StorageEngine(
		engine: StorageEngine, whitelist?: FilterList, blacklist?: FilterList
	): StorageEngine

		
}

declare module 'redux-storage-engine-localstorage' {
		declare export interface LocalStorageEngine {
		
	}

	declare export default function createEngine(key: string): LocalStorageEngine

		
}

declare module 'redux-storage-engine-reactnativeasyncstorage' {
		declare export interface ReactNativeAsyncStorageEngine {
		
	}

	declare export default function createEngine(key: string): ReactNativeAsyncStorageEngine

		
}

declare module 'redux-storage-merger-immutablejs' {
					declare module.exports: StateMerger


}