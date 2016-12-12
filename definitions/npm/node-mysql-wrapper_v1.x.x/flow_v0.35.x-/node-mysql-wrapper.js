

declare module 'node-mysql-wrapper' {
	declare type DeleteAnswer = {
		affectedRows: number,
		table: string
	};

	declare type RawRules = {
		table: string,
		begin: string,
		orderBy: string,
		orderByDesc: string,
		groupBy: string,
		limit: number,
		limitStart: number,
		limitEnd: number,
		end: string
	};

	declare type TableToSearchPart = {
		tableName: string,
		propertyName: string
	};

	declare type PropertyChangedCallback = (args: PropertyChangedArgs) => any;

	declare interface Map<T> {
		[index: string]: T
	}

	declare interface IQuery<T> {
		_table: Table<T>,
		execute(rawCriteria: any, callback?: (_results: any) => any): Promise<any>
	}

	declare interface IQueryConstructor<T> {
		new (_table: Table<T>): IQuery<T>
	}

	declare interface ICriteriaParts {
		rawCriteriaObject: any,
		tables: TableToSearchPart[],
		noDatabaseProperties: string[],
		whereClause: string,
		selectFromClause<T>(_table: Table<T>): string
	}

	declare function wrap(
		mysqlUrlOrObjectOrMysqlAlreadyConnection: Mysql.IConnection | string, ...useTables: any[]
	): Database

	declare function connect(
		mysqlUrlOrObjectOrMysqlAlreadyConnection: Mysql.IConnection | string, ...useTables: any[]
	): Database

	declare function observable<T>(obj: T): T & ObservableObject

	declare class Helper  {
		constructor(): this;
		copyObject<T>(object: T): T;
		toObjectProperty(columnKey: string): string;
		toRowProperty(objectKey: string): string;
		forEachValue<T, U>(map: T, callback: (value: T) => U): U;
		forEachKey<T, U>(map: Map<T>, callback: (key: string) => U): U;
		isFunction(functionToCheck: any): boolean;
		hasRules(obj: any): boolean
	}

	declare class CriteriaParts extends ICriteriaParts {
		rawCriteriaObject: any;
		tables: TableToSearchPart[];
		noDatabaseProperties: string[];
		whereClause: string;
		constructor(rawCriteriaObject: any, tables: TableToSearchPart[], noDatabaseProperties: string[], whereClause: string): this;
		selectFromClause<T>(_table: Table<T>): string
	}

	declare class CriteriaDivider<T>  {
		constructor(table: Table<T>): this;
		build(rawCriteriaObject: any): CriteriaParts
	}

	declare class SelectQueryRules  {
		manuallyEndClause: string;
		manuallyBeginClause: string;
		exceptColumns: string[];
		orderByColumn: string;
		orderByDescColumn: string;
		groupByColumn: string;
		limitStart: number;
		limitEnd: number;
		tableName: string;
		build(): SelectQueryRules;
		except(...columns: string[]): SelectQueryRules;
		exclude(...columns: string[]): SelectQueryRules;
		orderBy(columnKey: string, descending?: boolean): SelectQueryRules;
		groupBy(columnKey: string): SelectQueryRules;
		limit(limitRowsOrStart: number, limitEnd?: number): SelectQueryRules;
		appendToBegin(manualAfterWhereString: string): SelectQueryRules;
		appendToEnd(manualAfterWhereString: string): SelectQueryRules;
		append(appendToCurrent: string): SelectQueryRules;
		clearOrderBy(): SelectQueryRules;
		clearGroupBy(): SelectQueryRules;
		clearLimit(): SelectQueryRules;
		clearEndClause(): SelectQueryRules;
		clearBeginClause(): SelectQueryRules;
		clear(): SelectQueryRules;
		from(parentRule: SelectQueryRules): SelectQueryRules;
		isEmpty(): boolean;
		toString(): string;
		toRawObject(): RawRules;
		toString(rules: SelectQueryRules): string;
		toRawObject(rules: SelectQueryRules): RawRules;
		fromRawObject(obj: RawRules): SelectQueryRules
	}

	declare class CriteriaBuilder<T>  {
		constructor(primaryTable: Table<T>): this;
		constructor(primaryTable: Table<T>, tableName: string, parentBuilder: CriteriaBuilder<any>): this;
		constructor(primaryTable: Table<T>, tablePropertyName?: string, parentBuilder?: CriteriaBuilder<any>): this;
		except(...columns: string[]): CriteriaBuilder<T>;
		exclude(...columns: string[]): CriteriaBuilder<T>;
		where(key: string, value: any): CriteriaBuilder<T>;
		orderBy(column: string, desceding?: boolean): CriteriaBuilder<T>;
		limit(start: number, end?: number): CriteriaBuilder<T>;
		join(realTableName: string, foreignColumnName: string): CriteriaBuilder<T>;
		joinAs(
		tableNameProperty: string, realTableName: string, foreignColumnName: string
	): CriteriaBuilder<T>;
		at(tableNameProperty: string): CriteriaBuilder<T>;
		parent(): CriteriaBuilder<T>;
		original(): CriteriaBuilder<T>;
		build(): any;
		from<T>(table: Table<T>): CriteriaBuilder<T>
	}

	declare class SelectQuery<T> extends IQuery<T> {
		_table: Table<T>;
		constructor(_table: Table<T>): this;
		promise(rawCriteria: any, callback?: (_results: T[]) => any): Promise<T[]>;
		execute(rawCriteria: any, callback?: (_results: T[]) => any): Promise<T[]>
	}

	declare class SaveQuery<T> extends IQuery<T> {
		_table: Table<T>;
		constructor(_table: Table<T>): this;
		execute(
		criteriaRawJsObject: any, callback?: (_result: T | any) => any
	): Promise<T | any>
	}

	declare class DeleteQuery<T> extends IQuery<T> {
		_table: Table<T>;
		constructor(_table: Table<T>): this;
		execute(
		criteriaOrID: any | number | string, callback?: (_result: DeleteAnswer) => any
	): Promise<DeleteAnswer>
	}

	declare class PropertyChangedArgs  {
		propertyName: string;
		oldValue: any;
		constructor(propertyName: string, oldValue: any): this
	}

	declare class ObservableObject  {
		RESERVED_PROPERTY_NAMES: string[];
		constructor(): this;
		constructor(obj?: any): this;
		onPropertyChanged(listener: PropertyChangedCallback): void;
		notifyPropertyChanged(propertyName: string, oldValue: any): void;
		_forget(): void;
		toJSON(...excludeProperties: string[]): any
	}

	declare class CollectionChangedEventArgs<T>  {
		action: CollectionChangedAction;
		oldItems: (T | (T & ObservableObject))[];
		newItems: (T | (T & ObservableObject))[];
		oldStartingIndex: number;
		newStartingIndex: number;
		constructor(action: CollectionChangedAction, oldItems?: (T | (T & ObservableObject))[], newItems?: (T | (T & ObservableObject))[], oldStartingIndex?: number, newStartingIndex?: number): this
	}

	declare class BaseCollection<T>  {
		listeners: ((eventArgs: CollectionChangedEventArgs<T>) => void)[];
		constructor(table: Table<T>): this;
		length: number;
		items: (T | (T & ObservableObject))[];
		indexOf(item: T | string | number): number;
		findItem(itemId: string | number): T;
		getItem(index: number): T;
		getItemObservable(index: number): T & ObservableObject;
		addItem(...items: (T | (T & ObservableObject))[]): (T | (T & ObservableObject));
		removeItem(...items: (T | (T & ObservableObject))[]): BaseCollection<T>;
		removeItemById(id: number | string): BaseCollection<T>;
		forgetItem(...items: (T | (T & ObservableObject))[]): BaseCollection<T>;
		reset(): BaseCollection<T>;
		notifyCollectionChanged(evtArgs: CollectionChangedEventArgs<T>): void;
		onCollectionChanged(callback: (eventArgs: CollectionChangedEventArgs<T>) => void): void
	}

	declare class ObservableCollection<T>  {
		local: BaseCollection<T>;
		constructor(table: Table<T>, fetchAllFromDatabase?: boolean, callbackWhenReady?: Function): this;
		items: (T & ObservableObject)[];
		onCollectionChanged(callback: (eventArgs: CollectionChangedEventArgs<T>) => void): void;
		startListeningToDatabase(): void;
		find(criteriaRawJsObject?: any, callback?: (_results: T[]) => any): Promise<T[]>;
		findOne(criteriaRawJsObject: any, callback?: (_result: T) => any): Promise<T>;
		findById(id: number | string, callback?: (result: T) => any): Promise<T>;
		findAll(tableRules?: RawRules, callback?: (_results: T[]) => any): Promise<T[]>;
		insert(criteriaRawJsObject: any, callback?: (_result: any) => any): Promise<T | any>;
		update(criteriaRawJsObject: any, callback?: (_result: any) => any): Promise<T | any>;
		save(criteriaRawJsObject: any, callback?: (_result: any) => any): Promise<T | any>;
		remove(
		criteriaOrID: any | number | string, callback?: (_result: DeleteAnswer) => any
	): Promise<DeleteAnswer>;
		delete(
		criteriaOrID: any | number | string, callback?: (_result: DeleteAnswer) => any
	): Promise<DeleteAnswer>
	}

	declare class MeteorCollection<T>  {
		table: Table<T>;
		constructor(table: Table<T>, name?: string): this;
		startListeningToDatabase(): void;
		rawCollection: Mongo.Collection<T>;
		fill(criteriaRawJsObject: any): void;
		fillAll(): void;
		fillOne(criteriaRawJsObject: any): void;
		allow(
		options: {
		insert?: (userId: string, doc: T) => boolean,
		update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean,
		remove?: (userId: string, doc: T) => boolean,
		fetch?: string[],
		transform?: Function
	}
	): boolean;
		deny(
		options: {
		insert?: (userId: string, doc: T) => boolean,
		update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean,
		remove?: (userId: string, doc: T) => boolean,
		fetch?: string[],
		transform?: Function
	}
	): boolean;
		find(
		selector?: any, options?: {
		sort?: any,
		skip?: number,
		limit?: number,
		fields?: any,
		reactive?: boolean,
		transform?: Function
	}
	): Mongo.Cursor<T>;
		findOne(
		selector?: any, options?: {
		sort?: any,
		skip?: number,
		fields?: any,
		reactive?: boolean,
		transform?: Function
	}
	): T
	}

	declare class Connection extends EventEmitter {
		connection: Mysql.IConnection;
		eventTypes: string[];
		tableNamesToUseOnly: any[];
		tables: Table<any>[];
		constructor(connection: string | Mysql.IConnection | Mysql.IConnectionConfig): this;
		create(connection: string | Mysql.IConnection | Mysql.IConnectionConfig): void;
		attach(connection: Mysql.IConnection): void;
		end(callback?: (error: any) => void): void;
		destroy(): void;
		clearBinaryLogs(): Promise<void>;
		link(readyCallback?: () => void): Promise<void>;
		useOnly(...tables: any[]): void;
		fetchDatabaseInformation(): Promise<void>;
		escape(val: string): string;
		notice(tableWhichCalled: string, queryStr: string, rawRows: any[]): void;
		watch(tableName: string, evtType: any, callback: (rawRows: any[]) => void): void;
		unwatch(
		tableName: string, evtType: string, callbackToRemove: (rawResults: any[]) => void
	): void;
		query(
		queryStr: string, callback: (err: Mysql.IError, results: any) => any, queryArguments?: any[]
	): void;
		table<T>(tableName: string): Table<T>
	}

	declare class Table<T>  {
		constructor(tableName: string, connection: Connection): this;
		columns: string[];
		primaryKey: string;
		connection: Connection;
		name: string;
		rules: SelectQueryRules;
		criteriaDivider: CriteriaDivider<T>;
		criteria: CriteriaBuilder<T>;
		on(evtType: string, callback: (rawResults: any[]) => void): void;
		off(evtType: string, callbackToRemove: (rawResults: any[]) => void): void;
		has(extendedFunctionName: string): boolean;
		extend(functionName: string, theFunction: (...args: any[]) => any): void;
		objectFromRow(row: any): any;
		rowFromObject(obj: any): any;
		getRowAsArray(jsObject: any): Array<any>;
		getPrimaryKeyValue(jsObject: any): number | string;
		find(criteriaRawJsObject: any): Promise<T[]>;
		find(criteriaRawJsObject: any, callback: ((_results: T[]) => any)): Promise<T[]>;
		find(criteriaRawJsObject: any, callback?: (_results: T[]) => any): Promise<T[]>;
		findSingle(criteriaRawJsObject: any, callback?: (_result: T) => any): Promise<T>;
		findById(id: number | string): Promise<T>;
		findById(id: number | string, callback?: (result: T) => any): Promise<T>;
		findAll(): Promise<T[]>;
		findAll(tableRules: RawRules): Promise<T[]>;
		findAll(tableRules?: RawRules, callback?: (_results: T[]) => any): Promise<T[]>;
		save(criteriaRawJsObject: any): Promise<any>;
		save(criteriaRawJsObject: any, callback?: (_result: any) => any): Promise<any>;
		remove(id: number | string): Promise<DeleteAnswer>;
		remove(criteriaRawObject: any): Promise<DeleteAnswer>;
		remove(
		criteriaOrID: any | number | string, callback?: (_result: DeleteAnswer) => any
	): Promise<DeleteAnswer>
	}

	declare class MeteorTable<T>  {
		table: Table<T>;
		constructor(table: Table<T>): this;
		insert(doc: T, callback?: (_result: T) => void): T;
		remove(selector: any, callback?: () => DeleteAnswer): DeleteAnswer;
		update(
		selector: any, modifier: any, options?: {
		multi?: boolean,
		upsert?: boolean
	}, callback?: (result: T) => any
	): number;
		collection(nameOfCollection?: string, fillWithCriteria?: any): Mongo.Collection<T>
	}

	declare class Database  {
		connection: Connection;
		isReady: boolean;
		readyListenerCallbacks: Function[];
		constructor(connection?: Connection): this;
		when(..._promises: Promise<any>[]): Promise<any>;
		setConnection(connection: Connection): void;
		useOnly(...useTables: any[]): void;
		has(tableName: string, functionName?: string): boolean;
		ready(callback?: () => void): void;
		table<T>(tableName: string): Table<T>;
		noticeReady(): void;
		removeReadyListener(callback: () => void): void;
		query(
		queryStr: string, callback: (err: Mysql.IError, results: any) => any, queryArguments?: any[]
	): void;
		destroy(): void;
		end(maybeAcallbackError: (err: any) => void): void;
		newTableRules(tableName: string): SelectQueryRules;
		buildRules(): SelectQueryRules;
		buildRules(parentRules?: SelectQueryRules): SelectQueryRules;
		collection<T>(tableName: string, callbackWhenReady?: Function): ObservableCollection<T>;
		meteorTable<T>(tableName: string): MeteorTable<T>
	}

	
}