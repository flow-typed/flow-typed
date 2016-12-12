

declare module 'mongoose' {
	declare type Mongoose = typeof mongoose;

	declare type MongooseThenable = typeof mongoose & {
		then<TRes>(
		onFulfill?: () => void | TRes | PromiseLike<TRes>, onRejected?: (err: mongodb.MongoError) => void | TRes | PromiseLike<TRes>
	): Promise<TRes>,
		catch<TRes>(
		onRejected?: (err: mongodb.MongoError) => void | TRes | PromiseLike<TRes>
	): Promise<TRes>
	};

	declare interface QueryStream {
		constructor(
		query: Query<any>, options?: {
		transform?: Function,
		[other: string]: any
	}
	): QueryStream,
		destroy(err?: NativeError): void,
		pause(): void,
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T,
		resume(): void,
		paused: boolean,
		readable: boolean
	}

	declare interface ConnectionOptionsBase {
		db?: any,
		server?: any,
		replset?: any,
		user?: string,
		pass?: string,
		auth?: any
	}

	declare interface ConnectionOpenOptions {
		config?: {
		autoIndex?: boolean
	}
	}

	declare interface ConnectionOpenSetOptions {
		mongos?: boolean
	}

	declare interface ConnectionOptions {
		
	}

	declare interface Collection {
		new (name: string, conn: Connection, opts?: Object): Collection,
		$format(arg: any): string,
		$print(name: any, i: any, args: any[]): void,
		getIndexes(): any
	}

	declare interface QueryCursor<T> {
		constructor(query: Query<T>, options: Object): QueryCursor<T>,
		close(callback?: (error: any, result: any) => void): Promise<any>,
		eachAsync(fn: (doc: T) => any, callback?: (err: any) => void): Promise<T>,
		next(callback?: (err: any) => void): Promise<any>
	}

	declare interface SchemaOptions {
		autoIndex?: boolean,
		bufferCommands?: boolean,
		capped?: boolean,
		collection?: string,
		emitIndexErrors?: boolean,
		id?: boolean,
		_id?: boolean,
		minimize?: boolean,
		read?: string,
		safe?: boolean,
		shardKey?: boolean,
		strict?: boolean,
		toJSON?: Object,
		toObject?: Object,
		typeKey?: string,
		useNestedStrict?: boolean,
		validateBeforeSave?: boolean,
		versionKey?: string,
		skipVersioning?: Object,
		timestamps?: Object
	}

	declare interface MongooseDocumentOptionals {
		id?: string
	}

	declare interface DocumentToObjectOptions {
		getters?: boolean,
		virtuals?: boolean,
		minimize?: boolean,
		transform?: (doc: any, ret: Object, options: Object) => any,
		depopulate?: boolean,
		versionKey?: boolean,
		retainKeyOrder?: boolean
	}

	declare interface QueryFindOneAndRemoveOptions {
		sort?: any,
		maxTimeMS?: number,
		passRawResult?: boolean
	}

	declare interface QueryFindOneAndUpdateOptions {
		new?: boolean,
		upsert?: boolean,
		fields?: Object | string,
		runValidators?: boolean,
		setDefaultsOnInsert?: boolean,
		context?: string
	}

	declare interface QueryUpdateOptions {
		context?: string
	}

	declare interface Model<T> {
		new (doc?: Object): T,
		findById(
		id: Object | string | number, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findById(
		id: Object | string | number, projection: Object, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findById(
		id: Object | string | number, projection: Object, options: Object, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		model(name: string): Model<T>,
		$where(argument: string | Function): DocumentQuery<T, T>,
		aggregate(...aggregations: Object[]): Aggregate<Object[]>,
		aggregate(...aggregationsWithCallback: Object[]): Promise<Object[]>,
		count(
		conditions: Object, callback?: (err: any, count: number) => void
	): Query<number>,
		create(docs: any[], callback?: (err: any, res: T[]) => void): Promise<T[]>,
		create(...docs: Object[]): Promise<T>,
		create(...docsWithCallback: Object[]): Promise<T>,
		discriminator<U>(name: string, schema: Schema): Model<U>,
		distinct(field: string, callback?: (err: any, res: any[]) => void): Query<any[]>,
		distinct(
		field: string, conditions: Object, callback?: (err: any, res: any[]) => void
	): Query<any[]>,
		ensureIndexes(callback?: (err: any) => void): Promise<void>,
		ensureIndexes(options: Object, callback?: (err: any) => void): Promise<void>,
		find(callback?: (err: any, res: T[]) => void): DocumentQuery<T[], T>,
		find(
		conditions: Object, callback?: (err: any, res: T[]) => void
	): DocumentQuery<T[], T>,
		find(
		conditions: Object, projection: Object, callback?: (err: any, res: T[]) => void
	): DocumentQuery<T[], T>,
		find(
		conditions: Object, projection: Object, options: Object, callback?: (err: any, res: T[]) => void
	): DocumentQuery<T[], T>,
		findByIdAndRemove(): DocumentQuery<T, T>,
		findByIdAndRemove(
		id: Object | number | string, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findByIdAndRemove(
		id: Object | number | string, options: {
		sort?: Object,
		select?: Object
	}, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findByIdAndUpdate(): DocumentQuery<T, T>,
		findByIdAndUpdate(
		id: Object | number | string, update: Object, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findByIdAndUpdate(
		id: Object | number | string, update: Object, options: ModelFindByIdAndUpdateOptions, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findOne(
		conditions?: Object, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findOne(
		conditions: Object, projection: Object, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findOne(
		conditions: Object, projection: Object, options: Object, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findOneAndRemove(): DocumentQuery<T, T>,
		findOneAndRemove(conditions: Object, callback?: (err: any, res: T) => void): DocumentQuery<T, T>,
		findOneAndRemove(
		conditions: Object, options: {
		sort?: Object,
		maxTimeMS?: number,
		select?: Object
	}, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findOneAndUpdate(): DocumentQuery<T, T>,
		findOneAndUpdate(
		conditions: Object, update: Object, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		findOneAndUpdate(
		conditions: Object, update: Object, options: ModelFindOneAndUpdateOptions, callback?: (err: any, res: T) => void
	): DocumentQuery<T, T>,
		geoNear(
		point: number[] | {
		type: string,
		coordinates: number[]
	}, options: {
		lean?: boolean,
		[other: string]: any
	}, callback?: (err: any, res: T[], stats: any) => void
	): DocumentQuery<T[], T>,
		geoSearch(
		conditions: Object, options: {
		near: number[],
		maxDistance: number,
		limit?: number,
		lean?: boolean
	}, callback?: (err: any, res: T[]) => void
	): DocumentQuery<T[], T>,
		hydrate(obj: Object): T,
		insertMany(docs: any[], callback?: (error: any, docs: T[]) => void): Promise<T[]>,
		insertMany(doc: any, callback?: (error: any, doc: T) => void): Promise<T>,
		insertMany(...docsWithCallback: Object[]): Promise<T>,
		mapReduce<Key, Value>(
		o: ModelMapReduceOption<T, Key, Value>, callback?: (err: any, res: any) => void
	): Promise<any>,
		populate(
		docs: Object[], options: ModelPopulateOptions | ModelPopulateOptions[], callback?: (err: any, res: T[]) => void
	): Promise<T[]>,
		populate<T>(
		docs: Object, options: ModelPopulateOptions | ModelPopulateOptions[], callback?: (err: any, res: T) => void
	): Promise<T>,
		remove(conditions: Object, callback?: (err: any) => void): Query<void>,
		update(
		conditions: Object, doc: Object, callback?: (err: any, raw: any) => void
	): Query<any>,
		update(
		conditions: Object, doc: Object, options: ModelUpdateOptions, callback?: (err: any, raw: any) => void
	): Query<any>,
		where(path: string, val?: Object): Query<any>
	}

	declare interface Document {
		increment(): this,
		model(name: string): Model<this>,
		remove(fn?: (err: any, product: this) => void): Promise<this>,
		save(fn?: (err: any, product: this, numAffected: number) => void): Promise<this>,
		___v?: number
	}

	declare interface ModelProperties {
		base: typeof mongoose,
		baseModelName: String,
		collection: Collection,
		db: Connection,
		discriminators: any,
		modelName: string,
		schema: Schema
	}

	declare interface ModelFindByIdAndUpdateOptions {
		new?: boolean,
		upsert?: boolean,
		runValidators?: boolean,
		setDefaultsOnInsert?: boolean,
		sort?: Object,
		select?: Object
	}

	declare interface ModelFindOneAndUpdateOptions {
		fields?: Object | string,
		maxTimeMS?: number,
		passRawResult?: boolean
	}

	declare interface ModelPopulateOptions {
		path: string,
		select?: any,
		match?: Object,
		model?: string,
		options?: Object
	}

	declare interface ModelUpdateOptions {
		safe?: boolean,
		upsert?: boolean,
		multi?: boolean,
		runValidators?: boolean,
		setDefaultsOnInsert?: boolean,
		strict?: boolean,
		overwrite?: boolean,
		[other: string]: any
	}

	declare interface ModelMapReduceOption<T, Key, Val> {
		map: Function | string,
		reduce: (key: Key, vals: T[]) => Val,
		query?: Object,
		sort?: Object,
		limit?: number,
		keeptemp?: boolean,
		finalize?: (key: Key, val: Val) => Val,
		scope?: Object,
		jsMode?: boolean,
		verbose?: boolean,
		readPreference?: string,
		out?: {
		inline?: number,
		replace?: string,
		reduce?: string,
		merge?: string
	}
	}

	declare interface MapReduceResult<Key, Val> {
		_id: Key,
		value: Val
	}

	declare interface CollectionBase {
		ensureIndex(...args: any[]): any,
		findAndModify(...args: any[]): any,
		getIndexes(...args: any[]): any,
		collectionName: string,
		conn: Connection,
		name: string
	}

	declare export function connect(
		uris: string, options?: ConnectionOptions, callback?: (err: mongodb.MongoError) => void
	): MongooseThenable

	declare export function connect(uris: string, callback?: (err: mongodb.MongoError) => void): MongooseThenable

	declare export function createConnection(): Connection

	declare export function createConnection(uri: string, options?: ConnectionOptions): Connection

	declare export function createConnection(
		host: string, database_name: string, port?: number, options?: ConnectionOptions
	): Connection

	declare export function disconnect(fn?: (error: any) => void): MongooseThenable

	declare export function get(key: string): any

	declare export function model<T>(
		name: string, schema?: Schema, collection?: string, skipInit?: boolean
	): Model<T>

	declare export function model<T, U>(
		name: string, schema?: Schema, collection?: string, skipInit?: boolean
	): U

	declare export function modelNames(): string[]

	declare export function plugin(fn: Function, opts?: Object): typeof mongoose

	declare export function set(key: string, value: any): void

	declare class NativeBuffer extends global$Buffer {
		
	}

	declare class NativeDate extends global$Date {
		
	}

	declare class NativeError extends global$Error {
		
	}

	declare class CastError extends Error {
		constructor(type: string, value: any, path: string, reason?: NativeError): this
	}

	declare class ConnectionBase extends events$EventEmitter {
		constructor(base: typeof mongoose): this;
		open(
		connection_string: string, database?: string, port?: number, options?: ConnectionOpenOptions, callback?: (err: any) => void
	): any;
		openSet(
		uris: string, database?: string, options?: ConnectionOpenSetOptions, callback?: (err: any) => void
	): any;
		close(callback?: (err: any) => void): Promise<void>;
		collection(name: string, options?: Object): Collection;
		model<T>(name: string, schema?: Schema, collection?: string): Model<T>;
		model<T, U>(name: string, schema?: Schema, collection?: string): U;
		modelNames(): string[];
		config: Object;
		db: mongodb.Db;
		collections: {
		[index: string]: Collection
	};
		readyState: number
	}

	declare class Connection extends ConnectionBase {
		useDb(name: string): Connection;
		STATES: Object
	}

	declare class ValidationError extends Error {
		toString(): string
	}

	declare class Error extends global$Error {
		constructor(msg: string): this;
		messages: Object;
		Messages: Object
	}

	declare class VirtualType  {
		constructor(options: Object, name: string): this;
		applyGetters(value: Object, scope: Object): any;
		applySetters(value: Object, scope: Object): any;
		get(fn: Function): this;
		set(fn: Function): this
	}

	declare class Schema extends events$EventEmitter {
		constructor(definition?: Object, options?: SchemaOptions): this;
		add(obj: Object, prefix?: string): void;
		eachPath(fn: (path: string, type: SchemaType) => void): this;
		get(key: string): any;
		index(
		fields: Object, options?: {
		expires?: string,
		[other: string]: any
	}
	): this;
		indexes(): any[];
		method(method: string, fn: Function): this;
		method(methodObj: {
		[name: string]: Function
	}): this;
		path(path: string): SchemaType;
		path(path: string, constructor: any): this;
		pathType(path: string): string;
		plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this;
		post<T>(method: string, fn: (doc: T) => void, ...args: any[]): this;
		post<T>(
		method: string, fn: (doc: T, next: (err?: NativeError) => void, ...otherArgs: any[]) => void
	): this;
		pre(
		method: string, fn: (next: (err?: NativeError) => void) => void, errorCb?: (err: Error) => void
	): this;
		pre(
		method: string, parallel: boolean, fn: (next: (err?: NativeError) => void, done: () => void) => void, errorCb?: (err: Error) => void
	): this;
		queue(name: string, args: any[]): this;
		remove(path: string | string[]): void;
		requiredPaths(invalidate?: boolean): string[];
		set(key: string): any;
		set(key: string, value: any): this;
		static(name: string, fn: Function): this;
		static(nameObj: {
		[name: string]: Function
	}): this;
		virtual(name: string, options?: Object): VirtualType;
		virtualpath(name: string): VirtualType;
		indexTypes: string[];
		reserved: Object;
		methods: any;
		statics: any
	}

	declare class MongooseDocument extends MongooseDocumentOptionals {
		$isDefault(path?: string): boolean;
		depopulate(path: string): void;
		equals(doc: MongooseDocument): boolean;
		execPopulate(): Promise<this>;
		get(path: string, type?: any): any;
		init(doc: MongooseDocument, fn?: () => void): this;
		init(doc: MongooseDocument, opts: Object, fn?: () => void): this;
		inspect(options?: Object): any;
		invalidate(
		path: string, errorMsg: string | NativeError, value: any, kind?: string
	): ValidationError | boolean;
		isDirectModified(path: string): boolean;
		isInit(path: string): boolean;
		isModified(path?: string): boolean;
		isSelected(path: string): boolean;
		markModified(path: string): void;
		modifiedPaths(): string[];
		populate(callback: (err: any, res: this) => void): this;
		populate(path: string, callback?: (err: any, res: this) => void): this;
		populate(options: ModelPopulateOptions, callback?: (err: any, res: this) => void): this;
		populated(path: string): any;
		set(path: string, val: any, options?: Object): void;
		set(path: string, val: any, type: any, options?: Object): void;
		set(value: Object): void;
		toJSON(options?: DocumentToObjectOptions): Object;
		toObject(options?: DocumentToObjectOptions): Object;
		toString(): string;
		unmarkModified(path: string): void;
		update(doc: Object, callback?: (err: any, raw: any) => void): Query<any>;
		update(
		doc: Object, options: ModelUpdateOptions, callback?: (err: any, raw: any) => void
	): Query<any>;
		validate(callback?: (err: any) => void): Promise<void>;
		validate(optional: Object, callback?: (err: any) => void): Promise<void>;
		validateSync(pathsToValidate: string | string[]): Error;
		errors: Object;
		_id: any;
		isNew: boolean;
		schema: Schema
	}

	declare class Query<T> extends DocumentQuery<T, any> {
		
	}

	declare class DocumentQuery<T, DocType> extends mquery {
		$where(js: string | Function): this;
		all(val: number): this;
		all(path: string, val: number): this;
		and(array: Object[]): this;
		batchSize(val: number): this;
		box(val: Object): this;
		box(lower: number[], upper: number[]): this;
		cast(model: any, obj?: Object): Object;
		catch<TRes>(reject?: (err: any) => void | TRes | PromiseLike<TRes>): Promise<TRes>;
		center(area: Object): this;
		center(path: string, area: Object): this;
		centerSphere(path: string, val: Object): this;
		centerSphere(val: Object): this;
		circle(area: Object): this;
		circle(path: string, area: Object): this;
		comment(val: string): this;
		count(callback?: (err: any, count: number) => void): Query<number>;
		count(criteria: Object, callback?: (err: any, count: number) => void): Query<number>;
		cursor(options?: Object): QueryCursor<DocType>;
		distinct(callback?: (err: any, res: any[]) => void): Query<any[]>;
		distinct(field: string, callback?: (err: any, res: any[]) => void): Query<any[]>;
		distinct(
		field: string, criteria: Object | Query<any>, callback?: (err: any, res: any[]) => void
	): Query<any[]>;
		elemMatch(criteria: (elem: Query<any>) => void): this;
		elemMatch(criteria: Object): this;
		elemMatch(path: string | Object | Function, criteria: (elem: Query<any>) => void): this;
		elemMatch(path: string | Object | Function, criteria: Object): this;
		equals(val: Object): this;
		exec(callback?: (err: any, res: T) => void): Promise<T>;
		exec(
		operation: string | Function, callback?: (err: any, res: T) => void
	): Promise<T>;
		exists(val?: boolean): this;
		exists(path: string, val?: boolean): this;
		find(
		callback?: (err: any, res: DocType[]) => void
	): DocumentQuery<DocType[], DocType>;
		find(
		criteria: Object, callback?: (err: any, res: DocType[]) => void
	): DocumentQuery<DocType[], DocType>;
		findOne(callback?: (err: any, res: DocType) => void): DocumentQuery<DocType, DocType>;
		findOne(
		criteria: Object, callback?: (err: any, res: DocType) => void
	): DocumentQuery<DocType, DocType>;
		findOneAndRemove(
		callback?: (error: any, doc: DocType, result: any) => void
	): DocumentQuery<DocType, DocType>;
		findOneAndRemove(
		conditions: Object, callback?: (error: any, doc: DocType, result: any) => void
	): DocumentQuery<DocType, DocType>;
		findOneAndRemove(
		conditions: Object, options: QueryFindOneAndRemoveOptions, callback?: (error: any, doc: DocType, result: any) => void
	): DocumentQuery<DocType, DocType>;
		findOneAndUpdate(callback?: (err: any, doc: DocType) => void): DocumentQuery<DocType, DocType>;
		findOneAndUpdate(
		update: Object, callback?: (err: any, doc: DocType) => void
	): DocumentQuery<DocType, DocType>;
		findOneAndUpdate(
		query: Object | Query<any>, update: Object, callback?: (err: any, doc: DocType) => void
	): DocumentQuery<DocType, DocType>;
		findOneAndUpdate(
		query: Object | Query<any>, update: Object, options: QueryFindOneAndUpdateOptions, callback?: (err: any, doc: DocType) => void
	): DocumentQuery<DocType, DocType>;
		geometry(object: {
		type: string,
		coordinates: any[]
	}): this;
		getQuery(): any;
		getUpdate(): any;
		gt(val: number): this;
		gt(path: string, val: number): this;
		gte(val: number): this;
		gte(path: string, val: number): this;
		hint(val: Object): this;
		in(val: any[]): this;
		in(path: string, val: any[]): this;
		intersects(arg?: Object): this;
		lean(bool?: boolean): Query<Object>;
		limit(val: number): this;
		lt(val: number): this;
		lt(path: string, val: number): this;
		lte(val: number): this;
		lte(path: string, val: number): this;
		maxDistance(val: number): this;
		maxDistance(path: string, val: number): this;
		maxscan(val: number): this;
		maxScan(val: number): this;
		merge(source: Object | Query<any>): this;
		mod(val: number[]): this;
		mod(path: string, val: number[]): this;
		ne(val: any): this;
		ne(path: string, val: any): this;
		near(val: Object): this;
		near(path: string, val: Object): this;
		nearSphere(val: Object): this;
		nearSphere(path: string, val: Object): this;
		nin(val: any[]): this;
		nin(path: string, val: any[]): this;
		nor(array: Object[]): this;
		or(array: Object[]): this;
		polygon(...coordinatePairs: number[][]): this;
		polygon(path: string, ...coordinatePairs: number[][]): this;
		populate(
		path: string | Object, select?: string | Object, model?: any, match?: Object, options?: Object
	): this;
		populate(options: ModelPopulateOptions): this;
		read(pref: string, tags?: Object[]): this;
		regex(val: RegExp): this;
		regex(path: string, val: RegExp): this;
		remove(callback?: (err: any) => void): Query<mongodb.WriteOpResult>;
		remove(
		criteria: Object | Query<any>, callback?: (err: any) => void
	): Query<mongodb.WriteOpResult>;
		select(arg: string | Object): this;
		selected(): boolean;
		selectedExclusively(): boolean;
		selectedInclusively(): boolean;
		setOptions(options: Object): this;
		size(val: number): this;
		size(path: string, val: number): this;
		skip(val: number): this;
		slaveOk(v?: boolean): this;
		slice(val: number | number[]): this;
		slice(path: string, val: number | number[]): this;
		snapshot(v?: boolean): this;
		sort(arg: string | Object): this;
		stream(options?: {
		transform?: Function
	}): QueryStream;
		tailable(
		bool?: boolean, opts?: {
		numberOfRetries?: number,
		tailableRetryInterval?: number
	}
	): this;
		then<TRes>(
		resolve?: (res: T) => void | TRes | PromiseLike<TRes>, reject?: (err: any) => void | TRes | PromiseLike<TRes>
	): Promise<TRes>;
		toConstructor<T>(): NO PRINT IMPLEMENTED: ConstructorType;
		toConstructor<T, Doc>(): NO PRINT IMPLEMENTED: ConstructorType;
		update(callback?: (err: any, affectedRows: number) => void): Query<number>;
		update(
		doc: Object, callback?: (err: any, affectedRows: number) => void
	): Query<number>;
		update(
		criteria: Object, doc: Object, callback?: (err: any, affectedRows: number) => void
	): Query<number>;
		update(
		criteria: Object, doc: Object, options: QueryUpdateOptions, callback?: (err: any, affectedRows: number) => void
	): Query<number>;
		where(path?: string | Object, val?: any): this;
		within(val?: Object): this;
		within(coordinate: number[], ...coordinatePairs: number[][]): this;
		use$geoWithin: boolean
	}

	declare class mquery  {
		
	}

	declare class Aggregate<T>  {
		constructor(ops?: Object | any[], ...args: any[]): this;
		addCursorFlag(flag: string, value: boolean): this;
		allowDiskUse(value: boolean, tags?: any[]): this;
		append(...ops: Object[]): this;
		cursor(options: Object): this;
		exec(callback?: (err: any, result: T) => void): Promise<T> | any;
		explain(callback?: (err: any, result: T) => void): Promise<T>;
		group(arg: Object): this;
		limit(num: number): this;
		lookup(options: Object): this;
		match(arg: Object): this;
		model(model: any): this;
		near(parameters: Object): this;
		project(arg: string | Object): this;
		read(pref: string, tags?: Object[]): this;
		sample(size: number): this;
		skip(num: number): this;
		sort(arg: string | Object): this;
		then<TRes>(
		resolve?: (val: T) => void | TRes | PromiseLike<TRes>, reject?: (err: any) => void | TRes | PromiseLike<TRes>
	): Promise<TRes>;
		unwind(...fields: string[]): this
	}

	declare class SchemaType  {
		constructor(path: string, options?: Object, instance?: string): this;
		default(val: any): any;
		get(fn: Function): this;
		index(options: Object | boolean | string): this;
		required(required: boolean, message?: string): this;
		select(val: boolean): this;
		set(fn: Function): this;
		sparse(bool: boolean): this;
		text(bool: boolean): this;
		unique(bool: boolean): this;
		validate(obj: RegExp | Function | Object, errorMsg?: string, type?: string): this
	}

	
}

declare module 'Types' {
	declare type ObjectIdConstructor = typeof undefined & {
		(s?: string | number): mongodb.ObjectID
	};

	declare interface ObjectId {
		
	}

		declare class Subdocument extends MongooseDocument {
		ownerDocument(): MongooseDocument;
		remove(callback?: (err: any) => void): void;
		remove(options: Object, callback?: (err: any) => void): void
	}

	declare class Array<T> extends global$Array<T> {
		$shift(): T;
		remove(...args: any[]): this;
		$pop(): T;
		addToSet(...args: any[]): T[];
		indexOf(obj: any): number;
		inspect(): any;
		nonAtomicPush(...args: any[]): number;
		pop(): T;
		pull(...args: any[]): this;
		push(...args: any[]): number;
		set(i: number, val: any): this;
		shift(): T;
		splice(...args: any[]): T[];
		toObject(options?: Object): T[];
		unshift(...args: any[]): number
	}

	declare class DocumentArray<T> extends Types$Array<T> {
		create(obj: Object): T;
		id(id: ObjectId | string | number | NativeBuffer): T;
		inspect(): T[];
		toObject(options?: Object): T[]
	}

	declare class Buffer extends global$Buffer {
		copy(target: NativeBuffer, ...nodeBufferArgs: any[]): number;
		equals(other: NativeBuffer): boolean;
		subtype(subtype: number): void;
		toObject(subtype?: number): mongodb.Binary;
		write(string: string, ...nodeBufferArgs: any[]): number
	}

	declare class Embedded extends MongooseDocument {
		inspect(): Object;
		invalidate(path: string, err: string | NativeError): boolean;
		ownerDocument(): MongooseDocument;
		parent(): MongooseDocument;
		parentArray(): DocumentArray<MongooseDocument>;
		remove(options?: {
		noop?: boolean
	}, fn?: (err: any) => void): this;
		markModified(path: string): void
	}

	declare class Array extends SchemaType {
		constructor(key: string, cast?: SchemaType, options?: Object): this;
		checkRequired<T>(value: T): boolean;
		schemaName: string
	}

	declare class String extends SchemaType {
		constructor(key: string, options?: Object): this;
		checkRequired(value: any, doc: MongooseDocument): boolean;
		enum(args: string | string[] | Object): this;
		lowercase(): this;
		match(regExp: RegExp, message?: string): this;
		maxlength(value: number, message?: string): this;
		minlength(value: number, message?: string): this;
		trim(): this;
		uppercase(): this;
		schemaName: string
	}

	declare class DocumentArray extends Array {
		constructor(key: string, schema: Schema, options?: Object): this;
		schemaName: string
	}

	declare class Number extends SchemaType {
		constructor(key: string, options?: Object): this;
		checkRequired(value: any, doc: MongooseDocument): boolean;
		max(maximum: number, message?: string): this;
		min(value: number, message?: string): this;
		schemaName: string
	}

	declare class Date extends SchemaType {
		constructor(key: string, options?: Object): this;
		checkRequired(value: any, doc: MongooseDocument): boolean;
		expires(when: number | string): this;
		max(maximum: NativeDate, message?: string): this;
		min(value: NativeDate, message?: string): this;
		schemaName: string
	}

	declare class Buffer extends SchemaType {
		constructor(key: string, options?: Object): this;
		checkRequired(value: any, doc: MongooseDocument): boolean;
		schemaName: string
	}

	declare class Boolean extends SchemaType {
		constructor(path: string, options?: Object): this;
		checkRequired(value: any): boolean;
		schemaName: string
	}

	declare class ObjectId extends SchemaType {
		constructor(key: string, options?: Object): this;
		auto(turnOn: boolean): this;
		checkRequired(value: any, doc: MongooseDocument): boolean;
		schemaName: string
	}

	declare class Mixed extends SchemaType {
		constructor(path: string, options?: Object): this;
		schemaName: string
	}

	declare class Embedded extends SchemaType {
		constructor(schema: Schema, key: string, options?: Object): this
	}

	
}