

declare module 'mongodb-1.4.9' {
					
}

declare module 'mongodb' {
		declare export interface SocketOptions {
		timeout?: number,
		noDelay?: boolean,
		keepAlive?: number,
		encoding?: string
	}

	declare export interface ServerOptions {
		auto_reconnect?: boolean,
		poolSize?: number,
		socketOptions?: any
	}

	declare export interface PKFactory {
		counter: number,
		createPk: () => number
	}

	declare export interface DbCreateOptions {
		w?: any,
		wtimeout?: number,
		fsync?: boolean,
		journal?: boolean,
		readPreference?: string,
		native_parser?: boolean,
		forceServerObjectId?: boolean,
		pkFactory?: PKFactory,
		serializeFunctions?: boolean,
		raw?: boolean,
		recordQueryStats?: boolean,
		retryMiliSeconds?: number,
		numberOfRetries?: number,
		logger?: Object,
		slaveOk?: number,
		promoteLongs?: boolean
	}

	declare export interface CollectionCreateOptions {
		readPreference?: string,
		slaveOk?: boolean,
		serializeFunctions?: boolean,
		raw?: boolean,
		pkFactory?: PKFactory
	}

	declare export interface CollStats {
		ns: string,
		count: number,
		size: number,
		avgObjSize: number,
		storageSize: number,
		numExtents: number,
		nindexes: number,
		lastExtentSize: number,
		paddingFactor: number,
		flags: number,
		totalIndexSize: number,
		indexSizes: {
		_id_: number,
		username: number
	}
	}

	declare export interface Collection {
		new (
		db: Db, collectionName: string, pkFactory?: Object, options?: CollectionCreateOptions
	): Collection,
		insert(query: any, callback?: (err: Error, result: any) => void): void,
		insert(
		query: any, options: {
		safe?: any,
		continueOnError?: boolean,
		keepGoing?: boolean,
		serializeFunctions?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		insertOne(doc: any, callback?: (err: Error, result: any) => void): void,
		insertOne(
		doc: any, options: {
		w?: any,
		wtimeout?: number,
		j?: boolean,
		serializeFunctions?: boolean,
		forceServerObjectId?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		insertMany(docs: any, callback?: (err: Error, result: any) => void): void,
		insertMany(
		docs: any, options: {
		w?: any,
		wtimeout?: number,
		j?: boolean,
		serializeFunctions?: boolean,
		forceServerObjectId?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		remove(selector: Object, callback?: (err: Error, result: any) => void): void,
		remove(
		selector: Object, options: {
		safe?: any,
		single?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		deleteOne(filter: any, callback?: (err: Error, result: any) => void): void,
		deleteOne(
		filter: any, options: {
		w?: any,
		wtimeout?: number,
		j?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		deleteMany(filter: any, callback?: (err: Error, result: any) => void): void,
		deleteMany(
		filter: any, options: {
		w?: any,
		wtimeout?: number,
		j?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		rename(newName: String, callback?: (err: Error, result: any) => void): void,
		save(doc: any, callback: (err: Error, result: any) => void): void,
		save(
		doc: any, options: {
		w?: any,
		wtimeout?: number,
		j?: boolean
	}, callback: (err: Error, result: any) => void
	): void,
		update(
		selector: Object, document: any, callback?: (err: Error, result: any) => void
	): void,
		update(
		selector: Object, document: any, options: {
		safe?: boolean,
		upsert?: any,
		multi?: boolean,
		serializeFunctions?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		updateOne(
		filter: Object, update: any, callback?: (err: Error, result: any) => void
	): void,
		updateOne(
		filter: Object, update: any, options: {
		upsert?: boolean,
		w?: any,
		wtimeout?: number,
		j?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		updateMany(
		filter: Object, update: any, callback?: (err: Error, result: any) => void
	): void,
		updateMany(
		filter: Object, update: any, options: {
		upsert?: boolean,
		w?: any,
		wtimeout?: number,
		j?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		distinct(key: string, query: Object, callback?: (err: Error, result: any) => void): void,
		distinct(
		key: string, query: Object, options: {
		readPreference: string
	}, callback?: (err: Error, result: any) => void
	): void,
		count(callback?: (err: Error, result: any) => void): void,
		count(query: Object, callback?: (err: Error, result: any) => void): void,
		count(
		query: Object, options: {
		readPreference: string
	}, callback?: (err: Error, result: any) => void
	): void,
		drop(callback?: (err: Error, result: any) => void): void,
		findAndModify(
		query: Object, sort: any[], doc: Object, callback?: (err: Error, result: any) => void
	): void,
		findAndModify(
		query: Object, sort: any[], doc: Object, options: {
		safe?: any,
		remove?: boolean,
		upsert?: boolean,
		new?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		findAndRemove(
		query: Object, sort?: any[], callback?: (err: Error, result: any) => void
	): void,
		findAndRemove(
		query: Object, sort?: any[], options?: {
		safe: any
	}, callback?: (err: Error, result: any) => void
	): void,
		findOneAndDelete(filter: any, callback?: (err: Error, result: any) => void): void,
		findOneAndDelete(
		filter: any, options: {
		projection?: any,
		sort?: any,
		maxTimeMS?: number
	}, callback?: (err: Error, result: any) => void
	): void,
		findOneAndReplace(
		filter: any, replacement: any, callback?: (err: Error, result: any) => void
	): void,
		findOneAndReplace(
		filter: any, replacement: any, options: {
		projection?: any,
		sort?: any,
		maxTimeMS?: number,
		upsert?: boolean,
		returnOriginal?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		findOneAndUpdate(filter: any, update: any, callback?: (err: Error, result: any) => void): void,
		findOneAndUpdate(
		filter: any, update: any, options: {
		projection?: any,
		sort?: any,
		maxTimeMS?: number,
		upsert?: boolean,
		returnOriginal?: boolean
	}, callback?: (err: Error, result: any) => void
	): void,
		find(callback?: (err: Error, result: Cursor) => void): Cursor,
		find(selector: Object, callback?: (err: Error, result: Cursor) => void): Cursor,
		find(
		selector: Object, fields: any, callback?: (err: Error, result: Cursor) => void
	): Cursor,
		find(
		selector: Object, options: CollectionFindOptions, callback?: (err: Error, result: Cursor) => void
	): Cursor,
		find(
		selector: Object, fields: any, options: CollectionFindOptions, callback?: (err: Error, result: Cursor) => void
	): Cursor,
		find(
		selector: Object, fields: any, skip: number, limit: number, callback?: (err: Error, result: Cursor) => void
	): Cursor,
		find(
		selector: Object, fields: any, skip: number, limit: number, timeout: number, callback?: (err: Error, result: Cursor) => void
	): Cursor,
		findOne(callback?: (err: Error, result: any) => void): Cursor,
		findOne(selector: Object, callback?: (err: Error, result: any) => void): Cursor,
		findOne(
		selector: Object, fields: any, callback?: (err: Error, result: any) => void
	): Cursor,
		findOne(
		selector: Object, options: CollectionFindOptions, callback?: (err: Error, result: any) => void
	): Cursor,
		findOne(
		selector: Object, fields: any, options: CollectionFindOptions, callback?: (err: Error, result: any) => void
	): Cursor,
		findOne(
		selector: Object, fields: any, skip: number, limit: number, callback?: (err: Error, result: any) => void
	): Cursor,
		findOne(
		selector: Object, fields: any, skip: number, limit: number, timeout: number, callback?: (err: Error, result: any) => void
	): Cursor,
		createIndex(fieldOrSpec: any, callback?: (err: Error, indexName: string) => void): void,
		createIndex(
		fieldOrSpec: any, options: IndexOptions, callback?: (err: Error, indexName: string) => void
	): void,
		ensureIndex(fieldOrSpec: any, callback?: (err: Error, indexName: string) => void): void,
		ensureIndex(
		fieldOrSpec: any, options: IndexOptions, callback?: (err: Error, indexName: string) => void
	): void,
		indexInformation(options: any, callback?: Function): void,
		dropIndex(name: string, callback?: Function): void,
		dropAllIndexes(callback?: Function): void,
		reIndex(callback?: Function): void,
		mapReduce(
		map: Function, reduce: Function, options: MapReduceOptions, callback?: Function
	): void,
		group(
		keys: Object, condition: Object, initial: Object, reduce: Function, finalize: Function, command: boolean, options: {
		readPreference: string
	}, callback?: Function
	): void,
		options(callback?: Function): void,
		isCapped(callback?: Function): void,
		indexExists(indexes: string, callback?: Function): void,
		geoNear(x: number, y: number, callback?: Function): void,
		geoNear(x: number, y: number, options: Object, callback?: Function): void,
		geoHaystackSearch(x: number, y: number, callback?: Function): void,
		geoHaystackSearch(x: number, y: number, options: Object, callback?: Function): void,
		indexes(callback?: Function): void,
		aggregate(pipeline: any[], callback?: (err: Error, results: any) => void): void,
		aggregate(
		pipeline: any[], options: {
		readPreference: string
	}, callback?: (err: Error, results: any) => void
	): void,
		stats(callback?: (err: Error, results: CollStats) => void): void,
		stats(
		options: {
		readPreference: string,
		scale: number
	}, callback?: (err: Error, results: CollStats) => void
	): void,
		hint: any
	}

	declare export interface MapReduceOptions {
		out?: Object,
		query?: Object,
		sort?: Object,
		limit?: number,
		keeptemp?: boolean,
		finalize?: any,
		scope?: Object,
		jsMode?: boolean,
		verbose?: boolean,
		readPreference?: string
	}

	declare export interface IndexOptions {
		w?: any,
		wtimeout?: number,
		fsync?: boolean,
		journal?: boolean,
		unique?: boolean,
		sparse?: boolean,
		background?: boolean,
		dropDups?: boolean,
		min?: number,
		max?: number,
		v?: number,
		expireAfterSeconds?: number,
		name?: string
	}

	declare export interface CollectionFindOptions {
		limit?: number,
		sort?: any,
		fields?: Object,
		skip?: number,
		hint?: Object,
		explain?: boolean,
		snapshot?: boolean,
		timeout?: boolean,
		tailtable?: boolean,
		tailableRetryInterval?: number,
		numberOfRetries?: number,
		awaitdata?: boolean,
		oplogReplay?: boolean,
		exhaust?: boolean,
		batchSize?: number,
		returnKey?: boolean,
		maxScan?: number,
		min?: number,
		max?: number,
		showDiskLoc?: boolean,
		comment?: String,
		raw?: boolean,
		readPreference?: String,
		partial?: boolean
	}

	declare export interface MongoCollectionOptions {
		safe?: any,
		serializeFunctions?: any,
		strict?: boolean,
		raw?: boolean,
		pkFactory?: any,
		readPreference?: string
	}

		declare export class MongoClient  {
		constructor(serverConfig: any, options: any): this;
		connect(uri: string, callback?: (err: Error, db: Db) => void): void;
		connect(uri: string, options: any, callback?: (err: Error, db: Db) => void): void
	}

	declare export class Server  {
		constructor(host: string, port: number, opts?: ServerOptions): this;
		connect(): any
	}

	declare export class Db  {
		constructor(databaseName: string, serverConfig: Server, dbOptions?: DbCreateOptions): this;
		db(dbName: string): Db;
		open(callback?: (err: Error, db: Db) => void): void;
		close(forceClose?: boolean, callback?: (err: Error, result: any) => void): void;
		admin(callback?: (err: Error, result: any) => void): any;
		collectionsInfo(collectionName: string, callback?: (err: Error, result: any) => void): void;
		collectionNames(
		collectionName: string, options: any, callback?: (err: Error, result: any) => void
	): void;
		collection(collectionName: string): Collection;
		collection(
		collectionName: string, callback?: (err: Error, collection: Collection) => void
	): Collection;
		collection(
		collectionName: string, options: MongoCollectionOptions, callback?: (err: Error, collection: Collection) => void
	): Collection;
		collections(callback?: (err: Error, collections: Collection[]) => void): void;
		eval(
		code: any, parameters: any[], options?: any, callback?: (err: Error, result: any) => void
	): void;
		logout(callback?: (err: Error, result: any) => void): void;
		logout(options: any, callback?: (err: Error, result: any) => void): void;
		authenticate(
		userName: string, password: string, callback?: (err: Error, result: any) => void
	): void;
		authenticate(
		userName: string, password: string, options: any, callback?: (err: Error, result: any) => void
	): void;
		addUser(
		username: string, password: string, callback?: (err: Error, result: any) => void
	): void;
		addUser(
		username: string, password: string, options: any, callback?: (err: Error, result: any) => void
	): void;
		removeUser(username: string, callback?: (err: Error, result: any) => void): void;
		removeUser(
		username: string, options: any, callback?: (err: Error, result: any) => void
	): void;
		createCollection(
		collectionName: string, callback?: (err: Error, result: Collection) => void
	): void;
		createCollection(
		collectionName: string, options: CollectionCreateOptions, callback?: (err: Error, result: any) => void
	): void;
		command(selector: Object, callback?: (err: Error, result: any) => void): void;
		command(
		selector: Object, options: any, callback?: (err: Error, result: any) => void
	): void;
		dropCollection(collectionName: string, callback?: (err: Error, result: any) => void): void;
		renameCollection(
		fromCollection: string, toCollection: string, callback?: (err: Error, result: any) => void
	): void;
		lastError(
		options: Object, connectionOptions: any, callback?: (err: Error, result: any) => void
	): void;
		previousError(options: Object, callback?: (err: Error, result: any) => void): void;
		executeDbCommand(command_hash: any, callback?: (err: Error, result: any) => void): void;
		executeDbCommand(
		command_hash: any, options: any, callback?: (err: Error, result: any) => void
	): void;
		executeDbAdminCommand(command_hash: any, callback?: (err: Error, result: any) => void): void;
		executeDbAdminCommand(
		command_hash: any, options: any, callback?: (err: Error, result: any) => void
	): void;
		resetErrorHistory(callback?: (err: Error, result: any) => void): void;
		resetErrorHistory(options: any, callback?: (err: Error, result: any) => void): void;
		createIndex(
		collectionName: any, fieldOrSpec: any, options: IndexOptions, callback?: Function
	): void;
		ensureIndex(
		collectionName: any, fieldOrSpec: any, options: IndexOptions, callback?: Function
	): void;
		cursorInfo(options: any, callback?: Function): void;
		dropIndex(collectionName: string, indexName: string, callback?: Function): void;
		reIndex(collectionName: string, callback?: Function): void;
		indexInformation(collectionName: string, options: any, callback?: Function): void;
		dropDatabase(callback?: (err: Error, result: any) => void): void;
		stats(options: any, callback?: Function): void;
		_registerHandler(
		db_command: any, raw: any, connection: any, exhaust: any, callback?: Function
	): void;
		_reRegisterHandler(newId: any, object: any, callback?: Function): void;
		_callHandler(id: any, document: any, err: any): any;
		_hasHandler(id: any): any;
		_removeHandler(id: any): any;
		_findHandler(id: any): {
		id: string,
		callback?: Function
	};
		___executeQueryCommand(self: any, db_command: any, options: any, callback?: any): void;
		DEFAULT_URL: string;
		connect(
		url: string, options: {
		uri_decode_auth?: boolean
	}, callback?: (err: Error, result: any) => void
	): void;
		addListener(event: string, handler: (param: any) => any): any
	}

	declare export class ObjectID  {
		constructor(s?: string): this;
		toHexString(): string;
		equals(otherID: ObjectID): boolean;
		getTimestamp(): Date;
		createFromTime(time: number): ObjectID;
		createFromHexString(hexString: string): ObjectID;
		isValid(id: string): Boolean;
		generate(time?: number): string
	}

	declare export class Binary  {
		constructor(buffer: Buffer, subType?: number): this;
		put(byte_value: any): void;
		write(buffer: any, offset: number): void;
		read(position: number, length: number): Buffer;
		value(): string;
		length(): number
	}

	declare export class ReadPreference  {
		PRIMARY: string;
		PRIMARY_PREFERRED: string;
		SECONDARY: string;
		SECONDARY_PREFERRED: string;
		NEAREST: string
	}

	declare export class Cursor  {
		rewind(): Cursor;
		toArray(callback?: (err: Error, results: any[]) => any): void;
		each(callback?: (err: Error, item: any) => void): void;
		count(applySkipLimit: boolean, callback?: (err: Error, count: number) => void): void;
		sort(keyOrList: any, callback?: (err: Error, result: any) => void): Cursor;
		sort(
		keyOrList: String, direction: string, callback: (err: Error, result: any) => void
	): Cursor;
		limit(limit: number, callback?: (err: Error, result: any) => void): Cursor;
		setReadPreference(preference: string, callback?: Function): Cursor;
		skip(skip: number, callback?: (err: Error, result: any) => void): Cursor;
		batchSize(batchSize: number, callback?: (err: Error, result: any) => void): Cursor;
		nextObject(callback?: (err: Error, doc: any) => void): void;
		explain(callback?: (err: Error, result: any) => void): void;
		stream(): CursorStream;
		close(callback?: (err: Error, result: any) => void): void;
		isClosed(): boolean;
		INIT: number;
		OPEN: number;
		CLOSED: number;
		GET_MORE: number
	}

	declare export class CursorStream  {
		constructor(cursor: Cursor): this;
		pause(): any;
		resume(): any;
		destroy(): any
	}

	
}