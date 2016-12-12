

declare module 'nedb' {
				declare class NeDBDataStore  {
		constructor(): this;
		constructor(path: string): this;
		constructor(options: NeDB.DataStoreOptions): this;
		persistence: NeDB.Persistence;
		loadDatabase(cb?: (err: Error) => void): void;
		getAllData(): Array<any>;
		resetIndexes(newData: any): void;
		ensureIndex(options: NeDB.EnsureIndexOptions, cb?: (err: Error) => void): void;
		removeIndex(fieldName: string, cb?: (err: Error) => void): void;
		addToIndexes<T>(doc: T): void;
		addToIndexes<T>(doc: Array<T>): void;
		removeFromIndexes<T>(doc: T): void;
		removeFromIndexes<T>(doc: Array<T>): void;
		updateIndexes<T>(oldDoc: T, newDoc: T): void;
		updateIndexes<T>(updates: Array<{
		oldDoc: T,
		newDoc: T
	}>): void;
		getCandidates(query: any): void;
		insert<T>(newDoc: T, cb?: (err: Error, document: T) => void): void;
		count(query: any, callback: (err: Error, n: number) => void): void;
		count(query: any): NeDB.CursorCount;
		find<T>(
		query: any, projection: T, callback: (err: Error, documents: Array<T>) => void
	): void;
		find<T>(query: any, projection: T): NeDB.Cursor<T>;
		find<T>(query: any, callback: (err: Error, documents: Array<T>) => void): void;
		find<T>(query: any): NeDB.Cursor<T>;
		findOne<T>(
		query: any, projection: T, callback: (err: Error, document: T) => void
	): void;
		findOne<T>(query: any, callback: (err: Error, document: T) => void): void;
		update(
		query: any, updateQuery: any, options?: NeDB.UpdateOptions, cb?: (err: Error, numberOfUpdated: number, upsert: boolean) => void
	): void;
		update<T>(
		query: any, updateQuery: any, options?: NeDB.UpdateOptions, cb?: (
		err: Error, numberOfUpdated: number, affectedDocuments: any, upsert: boolean
	) => void
	): void;
		remove(
		query: any, options: NeDB.RemoveOptions, cb?: (err: Error, n: number) => void
	): void;
		remove(query: any, cb?: (err: Error, n: number) => void): void
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$NeDB' {
		declare interface Cursor<T> {
		sort(query: any): Cursor<T>,
		skip(n: number): Cursor<T>,
		limit(n: number): Cursor<T>,
		projection(query: any): Cursor<T>,
		exec(callback: (err: Error, documents: Array<T>) => void): void
	}

	declare interface CursorCount {
		exec(callback: (err: Error, count: number) => void): void
	}

	declare interface DataStoreOptions {
		filename?: string,
		inMemoryOnly?: boolean,
		nodeWebkitAppName?: boolean,
		autoload?: boolean,
		onload?: (error: Error) => any,
		afterSerialization?: (line: string) => string,
		beforeDeserialization?: (line: string) => string,
		corruptAlertThreshold?: number
	}

	declare interface UpdateOptions {
		multi?: boolean,
		upsert?: boolean,
		returnUpdatedDocs?: boolean
	}

	declare interface RemoveOptions {
		multi?: boolean
	}

	declare interface EnsureIndexOptions {
		fieldName: string,
		unique?: boolean,
		sparse?: boolean
	}

	declare interface Persistence {
		compactDatafile(): void,
		setAutocompactionInterval(interval: number): void,
		stopAutocompaction(): void
	}

			
}