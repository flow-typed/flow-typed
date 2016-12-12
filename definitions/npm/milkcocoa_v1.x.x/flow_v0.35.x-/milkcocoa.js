

declare module 'milkcocoa' {
					
}

declare module 'npm$namespace$milkcocoa' {
		declare interface DataStore {
		push(object: {
		
	}, callback?: (data: DataStoreCallbackData) => void): void,
		set(id: string, data: {
		
	}): void,
		remove(id: string): void,
		send(object: {
		
	}): void,
		on(event: string, callback: (data: DataStoreCallbackData) => void): void,
		off(event: string): void,
		get(id: string, callback: (data: {
		
	}) => void): void,
		query(condition?: {
		
	}): Query,
		child(path: string): DataStore,
		parent(): DataStore,
		root(): DataStore
	}

	declare interface DataStoreCallbackData {
		err: string,
		path: string,
		id: string,
		value: any
	}

	declare interface Query {
		done(callback: (data: any) => void): void,
		limit(number: number): Query,
		skip(index: number): Query,
		sort(mode: string): Query
	}

	declare interface User {
		id: string,
		email: string,
		option: {
		
	}
	}

		declare class MilkCocoa  {
		constructor(host: string, callback?: Function): this;
		dataStore(path: string): DataStore;
		addAccount(
		email: string, password: string, options?: {
		
	}, callback?: (err: MilkCocoa.Error.AddAccount, user: User) => void
	): void;
		login(
		email: string, password: string, callback: (err: MilkCocoa.Error.Login, user: User) => void
	): void;
		logout(callback?: (err: string) => void): void;
		getCurrentUser(
		callback: (err: MilkCocoa.Error.GetCurrentUser, user: {
		id: string
	}) => void
	): void
	}

	
}