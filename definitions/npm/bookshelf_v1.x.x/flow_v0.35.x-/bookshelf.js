

declare module 'bookshelf' {
		declare interface Bookshelf {
		VERSION: string,
		knex: Knex,
		Model: typeof undefined,
		Collection: typeof undefined,
		plugin(name: string | string[] | Function, options?: any): Bookshelf,
		transaction<T>(callback: (transaction: Knex.Transaction) => T): T
	}

	declare function Bookshelf(knex: Knex): Bookshelf

		declare module.exports: undefined


}

declare module 'Bookshelf' {
		declare interface IModelBase {
		hasTimestamps?: boolean | string[],
		tableName?: string
	}

	declare interface ModelOptions {
		tableName?: string,
		hasTimestamps?: boolean,
		parse?: boolean
	}

	declare interface LoadOptions {
		withRelated: (string | WithRelatedQuery)[]
	}

	declare interface FetchOptions {
		require?: boolean,
		columns?: string | string[],
		withRelated?: (string | WithRelatedQuery)[]
	}

	declare interface WithRelatedQuery {
		[index: string]: (query: Knex.QueryBuilder) => Knex.QueryBuilder
	}

	declare interface FetchAllOptions {
		require?: boolean
	}

	declare interface SaveOptions {
		method?: string,
		defaults?: string,
		patch?: boolean,
		require?: boolean
	}

	declare interface DestroyOptions {
		require?: boolean
	}

	declare interface SerializeOptions {
		shallow?: boolean,
		omitPivot?: boolean
	}

	declare interface SetOptions {
		unset?: boolean
	}

	declare interface TimestampOptions {
		method?: string
	}

	declare interface SyncOptions {
		transacting?: Knex.Transaction,
		debug?: boolean
	}

	declare interface CollectionOptions<T> {
		comparator?: boolean | string | ((a: T, b: T) => number)
	}

	declare interface CollectionAddOptions {
		at?: number,
		merge?: boolean
	}

	declare interface CollectionFetchOptions {
		require?: boolean,
		withRelated?: string | string[]
	}

	declare interface CollectionFetchOneOptions {
		require?: boolean,
		columns?: string | string[]
	}

	declare interface CollectionSetOptions {
		add?: boolean,
		remove?: boolean,
		merge?: boolean
	}

	declare interface PivotOptions {
		query?: Function | any,
		require?: boolean
	}

	declare interface EventOptions {
		silent?: boolean
	}

	declare interface EventFunction<T> {
		(model: T, attrs: any, options: any): Promise<any> | void
	}

	declare interface CollectionCreateOptions {
		
	}

		declare class Events<T>  {
		on(event?: string, callback?: EventFunction<T>, context?: any): void;
		off(event?: string): void;
		trigger(event?: string, ...args: any[]): void;
		triggerThen(name: string, ...args: any[]): Promise<any>;
		once(event: string, callback: EventFunction<T>, context?: any): void
	}

	declare class ModelBase<T> extends Events<T | Collection<T>>, IModelBase {
		idAttribute: string;
		id: any;
		attributes: any;
		constructor(attributes?: any, options?: ModelOptions): this;
		clear(): T;
		clone(): T;
		escape(attribute: string): string;
		format(attributes: any): any;
		get(attribute: string): any;
		has(attribute: string): boolean;
		hasChanged(attribute?: string): boolean;
		isNew(): boolean;
		parse(response: Object): Object;
		previousAttributes(): any;
		previous(attribute: string): any;
		related<R>(relation: string): R | Collection<R>;
		serialize(options?: SerializeOptions): any;
		set(attribute?: {
		[key: string]: any
	}, options?: SetOptions): T;
		set(attribute: string, value?: any, options?: SetOptions): T;
		timestamp(options?: TimestampOptions): any;
		toJSON(options?: SerializeOptions): any;
		unset(attribute: string): T;
		invert<R>(): R;
		keys(): string[];
		omit<R>(predicate?: Lodash.ObjectIterator<any, boolean>, thisArg?: any): R;
		omit<R>(...attributes: string[]): R;
		pairs(): any[][];
		pick<R>(predicate?: Lodash.ObjectIterator<any, boolean>, thisArg?: any): R;
		pick<R>(...attributes: string[]): R;
		values(): any[]
	}

	declare class Model<T> extends ModelBase<T> {
		collection<T>(models?: T[], options?: CollectionOptions<T>): Collection<T>;
		count(column?: string, options?: SyncOptions): Promise<number>;
		extend<T>(prototypeProperties?: any, classProperties?: any): Function;
		fetchAll<T>(): Promise<Collection<T>>;
		forge<T>(attributes?: any, options?: ModelOptions): T;
		where<T>(properties: {
		[key: string]: any
	}): T;
		where<T>(
		key: string, operatorOrValue: string | number | boolean, valueIfOperator?: string | number | boolean
	): T;
		belongsTo<R>(target: {
		new (...args: any[]): R
	}, foreignKey?: string): R;
		belongsToMany<R>(
		target: {
		new (...args: any[]): R
	}, table?: string, foreignKey?: string, otherKey?: string
	): Collection<R>;
		count(column?: string, options?: SyncOptions): Promise<number>;
		destroy(options?: DestroyOptions): Promise<T>;
		fetch(options?: FetchOptions): Promise<T>;
		fetchAll(options?: FetchAllOptions): Promise<Collection<T>>;
		hasMany<R>(target: {
		new (...args: any[]): R
	}, foreignKey?: string): Collection<R>;
		hasOne<R>(target: {
		new (...args: any[]): R
	}, foreignKey?: string): R;
		load(relations: string | string[], options?: LoadOptions): Promise<T>;
		morphMany<R>(
		target: {
		new (...args: any[]): R
	}, name?: string, columnNames?: string[], morphValue?: string
	): Collection<R>;
		morphOne<R>(
		target: {
		new (...args: any[]): R
	}, name?: string, columnNames?: string[], morphValue?: string
	): R;
		morphTo(name: string, columnNames?: string[], ...target: typeof Model[]): T;
		morphTo(name: string, ...target: typeof Model[]): T;
		query(): Knex.QueryBuilder;
		query(callback: (qb: Knex.QueryBuilder) => void): T;
		query(...query: string[]): T;
		query(query: {
		[key: string]: any
	}): T;
		refresh(options?: FetchOptions): Promise<T>;
		resetQuery(): T;
		save(key?: string, val?: any, options?: SaveOptions): Promise<T>;
		save(attrs?: {
		[key: string]: any
	}, options?: SaveOptions): Promise<T>;
		through<R>(interim: typeof Model, throughForeignKey?: string, otherKey?: string): R;
		where(properties: {
		[key: string]: any
	}): T;
		where(
		key: string, operatorOrValue: string | number | boolean, valueIfOperator?: string | number | boolean
	): T;
		NotFoundError: createError.Error<Error>;
		NoRowsUpdatedError: createError.Error<Error>;
		NoRowsDeletedError: createError.Error<Error>
	}

	declare class CollectionBase<T> extends Events<T> {
		length: number;
		constructor(models?: T[], options?: CollectionOptions<T>): this;
		add(
		models: T[] | {
		[key: string]: any
	}[], options?: CollectionAddOptions
	): Collection<T>;
		at(index: number): T;
		clone(): Collection<T>;
		fetch(options?: CollectionFetchOptions): Promise<Collection<T>>;
		findWhere(match: {
		[key: string]: any
	}): T;
		get(id: any): T;
		invokeThen(name: string, ...args: any[]): Promise<any>;
		parse(response: any): any;
		pluck(attribute: string): any[];
		pop(): void;
		push(model: any): Collection<T>;
		reduceThen<R>(
		iterator: (prev: R, cur: T, idx: number, array: T[]) => R, initialValue: R, context: any
	): Promise<R>;
		remove(model: T, options?: EventOptions): T;
		remove(model: T[], options?: EventOptions): T[];
		reset(model: any[], options?: CollectionAddOptions): T[];
		serialize(options?: SerializeOptions): any[];
		set(
		models: T[] | {
		[key: string]: any
	}[], options?: CollectionSetOptions
	): Collection<T>;
		shift(options?: EventOptions): void;
		slice(begin?: number, end?: number): void;
		toJSON(options?: SerializeOptions): any[];
		unshift(model: any, options?: CollectionAddOptions): void;
		where(match: {
		[key: string]: any
	}, firstOnly: boolean): T | Collection<T>;
		all(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): boolean;
		all<R>(predicate?: R): boolean;
		any(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): boolean;
		any<R>(predicate?: R): boolean;
		chain(): Lodash.LoDashExplicitObjectWrapper<T>;
		collect(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): T[];
		collect<R>(predicate?: R): T[];
		contains(value: any, fromIndex?: number): boolean;
		countBy(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): Lodash.Dictionary<number>;
		countBy<R>(predicate?: R): Lodash.Dictionary<number>;
		detect(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): T;
		detect<R>(predicate?: R): T;
		difference(...values: T[]): T[];
		drop(n?: number): T[];
		each(callback?: Lodash.ListIterator<T, void>, thisArg?: any): Lodash.List<T>;
		each(
		callback?: Lodash.DictionaryIterator<T, void>, thisArg?: any
	): Lodash.Dictionary<T>;
		each(callback?: Lodash.ObjectIterator<T, void>, thisArg?: any): T;
		every(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): boolean;
		every<R>(predicate?: R): boolean;
		filter(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): T[];
		filter<R>(predicate?: R): T[];
		find(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): T;
		find<R>(predicate?: R): T;
		first(): T;
		foldl<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		foldr<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		forEach(callback?: Lodash.ListIterator<T, void>, thisArg?: any): Lodash.List<T>;
		forEach(
		callback?: Lodash.DictionaryIterator<T, void>, thisArg?: any
	): Lodash.Dictionary<T>;
		forEach(callback?: Lodash.ObjectIterator<T, void>, thisArg?: any): T;
		groupBy(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): Lodash.Dictionary<T[]>;
		groupBy<R>(predicate?: R): Lodash.Dictionary<T[]>;
		head(): T;
		include(value: any, fromIndex?: number): boolean;
		indexOf(value: any, fromIndex?: number): number;
		initial(): T[];
		inject<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		invoke(methodName: string | Function, ...args: any[]): any;
		isEmpty(): boolean;
		keys(): string[];
		last(): T;
		lastIndexOf(value: any, fromIndex?: number): number;
		map<U>(predicate?: Lodash.ListIterator<T, U> | string, thisArg?: any): U[];
		map<U>(predicate?: Lodash.DictionaryIterator<T, U> | string, thisArg?: any): U[];
		map<U>(predicate?: string): U[];
		max(predicate?: Lodash.ListIterator<T, boolean> | string, thisArg?: any): T;
		max<R>(predicate?: R): T;
		min(predicate?: Lodash.ListIterator<T, boolean> | string, thisArg?: any): T;
		min<R>(predicate?: R): T;
		reduce<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		reduceRight<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		reject(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): T[];
		reject<R>(predicate?: R): T[];
		rest(): T[];
		select(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): T[];
		select<R>(predicate?: R): T[];
		shuffle(): T[];
		size(): number;
		some(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): boolean;
		some<R>(predicate?: R): boolean;
		sortBy(
		predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any
	): T[];
		sortBy<R>(predicate?: R): T[];
		tail(): T[];
		take(n?: number): T[];
		toArray(): T[];
		without(...values: any[]): T[]
	}

	declare class Collection<T> extends CollectionBase<T> {
		extend<T>(prototypeProperties?: any, classProperties?: any): Function;
		forge<T>(attributes?: any, options?: ModelOptions): T;
		attach(ids: any | any[], options?: SyncOptions): Promise<Collection<T>>;
		count(column?: string, options?: SyncOptions): Promise<number>;
		create(
		model: {
		[key: string]: any
	}, options?: CollectionCreateOptions
	): Promise<T>;
		detach(ids: any[], options?: SyncOptions): Promise<any>;
		detach(options?: SyncOptions): Promise<any>;
		fetchOne(options?: CollectionFetchOneOptions): Promise<T>;
		load(relations: string | string[], options?: SyncOptions): Promise<Collection<T>>;
		query(): Knex.QueryBuilder;
		query(callback: (qb: Knex.QueryBuilder) => void): Collection<T>;
		query(...query: string[]): Collection<T>;
		query(query: {
		[key: string]: any
	}): Collection<T>;
		resetQuery(): Collection<T>;
		through<R>(
		interim: typeof Model, throughForeignKey?: string, otherKey?: string
	): Collection<R>;
		updatePivot(attributes: any, options?: PivotOptions): Promise<number>;
		withPivot(columns: string[]): Collection<T>;
		EmptyError: createError.Error<Error>
	}

	
}