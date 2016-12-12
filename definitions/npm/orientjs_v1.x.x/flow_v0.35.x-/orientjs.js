

declare module 'orientjs' {
			declare function ojs(config: any): ojs.OrientJs

		declare module.exports: undefined


}

declare module 'errors' {
		declare interface BaseError {
		name: string,
		init(name: string): void
	}

	declare interface OperationError {
		message: string,
		date: any
	}

	declare interface RequestError {
		
	}

			
}

declare module 'Migration' {
		declare interface Migration {
		name: string,
		server: Server,
		db: Db,
		configure(config?: any): void,
		up(): Promise<any>,
		down(): Promise<any>
	}

	declare function Manager(config: any): void

	declare class MigrationManager  {
		constructor(config?: any): this;
		name: string;
		server: Server;
		db: Db;
		dir: string;
		className: string;
		create(param: string): Promise<string>;
		generateMigration(config: any): string;
		list(): Promise<string[]>;
		listAvailable(): Promise<string[]>;
		ensureStructure: Promise<MigrationManager>;
		listApplied(): Promise<any[]>;
		up(limit?: number): Promise<any>;
		down(limit?: number): Promise<any>;
		loadMigration(name: string): Migration;
		applyMigration(name: string): Promise<any>;
		revertMigration(name: string): Promise<any>
	}

	
}

declare module 'ojs' {
		declare interface Logger {
		error?: Function,
		log?: Function,
		debug?: Function
	}

	declare interface RID {
		cluster?: number,
		position?: number,
		valueOf(): string,
		isValid(): boolean,
		equals(rid: string): boolean,
		equals(rid: RID): boolean,
		parse(input: string): boolean,
		parse(input: string): RID,
		parse(input: string): RID[],
		isValid(input: string): boolean,
		isValid(input: RID): boolean,
		isValid(input: any): boolean,
		toRid(cluster: number, position: number): any
	}

	declare interface Property {
		class: Class,
		name: string,
		originalName: string,
		type: any,
		mandatory: boolean,
		readonly: boolean,
		notNull: boolean,
		collate: string,
		linkedClass: Class,
		regexp: RegExp,
		min: any,
		max: any,
		configure(config?: any): void,
		reload(): Promise<Property>,
		rename(newName: string): Promise<Property>,
		list(): Promise<Property[]> & Promise<any[]>,
		create(config: string, reload?: boolean): Promise<Property> & Promise<any>,
		create(config?: any, reload?: boolean): Promise<Property> & Promise<any>,
		create(...config: any[]): Promise<Property[]> & Promise<any>,
		get(name: string): Promise<Property> & Promise<any>,
		update(config: any, reload?: boolean): Promise<Property> & Promise<any>,
		drop(name: string): Promise<Class>,
		alter(name: string, setting?: any): Promise<Class> & Promise<any>,
		rename(oldName: string, newName: string): Promise<any>
	}

	declare interface Class {
		db: Db,
		name: string,
		shortName: string,
		defaultClusterId: any,
		superClass: string,
		originalName: string,
		clusterIds: number[],
		configure(config?: any): void,
		list(
		limit: number, offset: number
	): Promise<Class[]> & Promise<any> & Promise<any[]>,
		list(config: any): Promise<Class[]> & Promise<any> & Promise<any[]>,
		list(refresh: boolean): Promise<Class[]> & Promise<any> & Promise<any[]>,
		find(attributes: any, limit: number, offset: number): Promise<any[]>,
		create(record: Record): Promise<Record> & Promise<any>,
		create(
		name: string, parentName?: string, cluster?: string, isAbstract?: boolean
	): Promise<Class> & Promise<any>,
		update(cls: any, reload: boolean): Promise<Class> & Promise<any>,
		reload(): Promise<Class[]>,
		drop(name: string): Promise<Db>,
		get(name: string, refresh?: boolean): Promise<Class> & Promise<any>,
		cacheData(classes: Class[] & any[]): Db,
		property: Property
	}

	declare interface Cluster {
		name: string,
		location: string,
		list(refresh?: boolean): Promise<any[]>,
		create(name: string, location?: string): Promise<Cluster> & Promise<any>,
		get(nameOrId: string, refresh?: boolean): Promise<Cluster> & Promise<any>,
		get(nameOrId: number, refresh?: boolean): Promise<Cluster> & Promise<any>,
		getByName(name: string, refresh?: boolean): Promise<Cluster> & Promise<any>,
		getById(id: string, refresh?: boolean): Promise<Cluster> & Promise<any>,
		drop(name: string): Promise<Db>,
		count(name: string): Promise<Number>,
		range(name: string): Promise<any>,
		cacheData(clusters: Cluster[] & any[]): Db
	}

	declare interface RecordMeta {
		@rid: string | RID,
		@version: string | number
	}

	declare interface Record {
		rid: RID,
		create(record: any, options?: any): Promise<Record>,
		get(record: Record | RID | string, options?: any): Promise<Record | Buffer>,
		resolveReferences(records: Record[] & any[]): any,
		meta(record: Record | RID | string, options?: any): Promise<RecordMeta>,
		update(): Promise<Record> & Promise<any>,
		update(record: Record | RID | string, options?: any): Promise<Record>,
		delete(): Promise<Record> & Promise<any>,
		delete(record: Record | RID | string, options?: any): Promise<Record>
	}

	declare interface Index {
		cached: boolean,
		db: Db,
		name: string,
		algorithm: string,
		clusters: Cluster[],
		type: string,
		configure(config: any): void,
		add(args: any): Promise<Index[]>,
		add(args: any[]): Promise<Index[]>,
		get(key: string): Promise<RID>,
		set(key: string, value: string): Promise<Index>,
		set(key: string, value: RID): Promise<Index>,
		delete(name: string): Promise<Index>,
		select(): Statement,
		list(refresh?: boolean): Promise<Index[]>,
		create(config: any): Promise<Index>,
		drop(name: string): Promise<Db>,
		get(name: string, refresh?: boolean): Promise<Index>,
		cacheData(indices: any[]): Promise<Db>
	}

	declare interface Statement {
		select(param: string | string[]): Statement,
		traverse(param: string | string[]): Statement,
		strategy(param: string): Statement,
		insert(param: string | string[]): Statement,
		update(param: string | string[]): Statement,
		delete(param: string | string[]): Statement,
		into(param: string): Statement,
		create(paramtype: string, paramname: string): Statement,
		from(param: string): Statement,
		from(param: any): Statement,
		to(param: any): Statement,
		set(param: any): Statement,
		content(param: any): Statement,
		increment(property: string, value: any): Statement,
		add(property: string, value: any): Statement,
		remove(property: string, value: any): Statement,
		put(property: string, keysValues: any): Statement,
		upsert(condition?: any, params?: any, comparisonOperator?: string): Statement,
		where(params: any): Statement,
		while(param: any): Statement,
		containsText(param: any): Statement,
		and(param: any): Statement,
		or(param: any): Statement,
		group(param: any): Statement,
		order(param: any): Statement,
		skip(value: number): Statement,
		offset(value: number): Statement,
		limit(value: number): Statement,
		fetch(param: any): Statement,
		let(name: string, value: string): Statement,
		let(name: string, value: Statement): Statement,
		lock(param: any): Statement,
		commit(retryLimit?: number): Statement,
		retry(retryLimit?: number): Statement,
		wait(waitLimit: number): Statement,
		return(value: string): Statement,
		lucene(property: string, luceneQuery: string): Statement,
		lucene(property: any, luceneQuery: string): Statement,
		near(
		latitudeProperty: string, longitudeProperty: string, longitude: number, latitude: number, maxDistanceInKms: number
	): Statement,
		near(
		prop: any, maxDistanceInKms: number, longitude: number, latitude: number
	): Statement,
		within(
		latitudeProperty: string, longitudeProperty: string, box: Array<Number>
	): Statement,
		addParams(key: string, value: any): Statement,
		addParams(value: any): Statement,
		token(value: any): Statement,
		buildStatement(): string
	}

	declare interface Query<T> {
		transform<T>(transformer: any): Query<T>,
		column(name: string): Query<T>,
		defaults(defaults: any): Query<T>,
		one<T>(params?: any): Promise<T>,
		all<T>(params?: any): Promise<T[]>,
		scalar<T>(params?: any): Promise<T>,
		exec<T>(params?: any): Promise<T>,
		one(params?: any): Promise<any>,
		all(params?: any): Promise<any[]>,
		scalar(params?: any): Promise<any>,
		exec(params?: any): Promise<any>
	}

	declare interface Transaction {
		db: Db,
		id: number,
		commit(): Promise<any>,
		create(record: any): Transaction,
		update(record: any): Transaction,
		delete(record: any): Transaction
	}

	declare interface DbConnectionConfig {
		useToken: boolean,
		name: string,
		username: string,
		password: string,
		sessionId: number,
		forcePrepare: boolean,
		server: Server,
		type: string,
		storage: string,
		token: any,
		transformers: any
	}

	declare interface DbConfig {
		name: string,
		type: string,
		storage: string
	}

	declare interface Db {
		sessionId: number,
		forcePrepare: boolean,
		name: string,
		server: Server,
		type: string,
		storage: string,
		token: any,
		dataSegments: any[],
		transactionId: number,
		transformers: any,
		transformerFunctions: any,
		class: Class,
		cluster: Cluster,
		record: Record,
		index: Index,
		configure(config: DbConfig): Db,
		init(): void,
		open(): Promise<Db>,
		close(): Promise<Db>,
		send(operation: number, data: any): Promise<any>,
		reload(): Promise<Db>,
		begin(): Transaction,
		exec(query: string, options?: any): Promise<any>,
		query(command: string, options?: any): Promise<any>,
		liveQuery(command: string, options?: any): Promise<any>,
		normalizeResult(result: any): any,
		normalizeResultContent(content: any): any,
		registerTransformer(className: string, transformer: Function): Db,
		transformDocument(document: any): any,
		createQuery(): Statement,
		create(params?: any): Statement,
		create(paramtype: string, paramname: string): Statement,
		select(params?: any): Statement,
		traverse(params?: any): Statement,
		insert(params?: any): Statement,
		update(params?: any): Statement,
		delete(params?: any): Statement,
		let(params?: any): Statement,
		insert(param: string | string[]): Statement,
		update(param: string | string[]): Statement,
		delete(param: string | string[]): Statement,
		let(name: string, value: string | Statement): Statement,
		escape(input: string): string,
		createUserContext(token: any): any,
		createFn(name: string, fn: Function, options?: any): Promise<any>,
		createFn(fn: Function, options?: any): Promise<any>
	}

	declare interface ServerConfig {
		constructor(config?: any): ServerConfig,
		useToken: boolean,
		host: string,
		port: number,
		username: string,
		password: string
	}

	declare interface ServerConfiguration {
		get(name: string): string,
		set(key: string, value: string): string,
		list(): any
	}

	declare interface Server {
		config: ServerConfiguration,
		logger: Logger,
		init(): void,
		configure(): Server,
		configureLogger(logger: Logger): Server,
		send(operation: number, options: any): any,
		close(): Server,
		use(config: string): Db,
		use(config?: any): Db,
		create(config: string): Promise<Db>,
		create(config: DbConfig): Promise<Db>,
		create(config: any): Promise<Db>,
		drop(config: string): Promise<Db>,
		drop(config: DbConfig): Promise<Db>,
		list(): Promise<Db[]>,
		exists(name: string, storageType?: string): Promise<boolean>,
		freeze(name: string, storageType?: string): any,
		release(name: string, storageType?: string): any
	}

	declare interface OrientJs {
		
	}

			
}