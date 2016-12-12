

declare module 'sequelize-2.0.0' {
					
}

declare module 'sequelize' {
		declare interface SequelizeStaticAndInstance {
		Utils: Utils,
		Promise: Promise,
		Validator: Validator,
		QueryTypes: QueryTypes,
		Error: Error,
		ValidationError: ValidationError,
		fn(fn: string, ...args: Array<any>): any,
		col(col: string): Col,
		cast(val: any, type: string): Cast,
		literal(val: any): Literal,
		and(...args: Array<any>): And,
		or(...args: Array<any>): Or,
		where(attr: string, condition: any): Where
	}

	declare interface SequelizeStatic {
		new (database: string, username: string): Sequelize,
		new (database: string, username: string, password: string): Sequelize,
		new (
		database: string, username: string, password: string, options: Options
	): Sequelize,
		new (database: string, username: string, options: Options): Sequelize,
		new (connectionString: string, options?: Options): Sequelize
	}

	declare interface Sequelize {
		config: Config,
		options: Options,
		models: any,
		modelManager: ModelManager,
		daoFactoryManager: ModelManager,
		transactionManager: TransactionManager,
		importCache: any,
		Transaction: TransactionStatic,
		getDialect(): string,
		getQueryInterface(): QueryInterface,
		getMigrator(options?: MigratorOptions, force?: boolean): Migrator,
		define<TInstance, TPojo>(
		daoName: string, attributes: any, options?: DefineOptions
	): Model<TInstance, TPojo>,
		model<TInstance, TPojo>(daoName: string): Model<TInstance, TPojo>,
		isDefined(daoName: string): boolean,
		import<TInstance, TPojo>(path: string): Model<TInstance, TPojo>,
		query(
		sql: string, callee?: Model<any, any>, options?: QueryOptions, replacements?: any
	): EventEmitter,
		query<TInstance, TPojo>(
		sql: string, callee?: Model<TInstance, TPojo>, options?: QueryOptions
	): EventEmitterT<Model<TInstance, TPojo>>,
		createSchema(schema: string): EventEmitter,
		showAllSchemas(): EventEmitter,
		dropSchema(schema: string): EventEmitter,
		dropAllSchemas(): EventEmitter,
		sync(options?: SyncOptions): EventEmitter,
		drop(options: DropOptions): EventEmitter,
		authenticate(): EventEmitter,
		validate(): EventEmitter,
		transaction(callback: (transaction: Transaction) => boolean): Promise,
		transaction(
		options?: TransactionOptions, callback?: (transaction: Transaction) => void
	): PromiseT<Transaction>,
		close(): void
	}

	declare interface Config {
		database?: string,
		username?: string,
		password?: string,
		host?: string,
		port?: number,
		pool?: PoolOptions,
		protocol?: string,
		queue?: boolean,
		native?: boolean,
		ssl?: boolean,
		replication?: ReplicationOptions,
		dialectModulePath?: string,
		maxConcurrentQueries?: number,
		dialectOptions?: any
	}

	declare interface Model<TInstance, TPojo> {
		sequelize: Sequelize,
		name: string,
		tableName: string,
		options: DefineOptions,
		attributes: any,
		rawAttributes: any,
		modelManager: ModelManager,
		daoFactoryManager: ModelManager,
		associations: any,
		scopeObj: any,
		sync(options?: SyncOptions): PromiseT<Model<TInstance, TPojo>>,
		drop(options?: DropOptions): Promise,
		schema(schema: string, options?: SchemaOptions): Model<TInstance, TPojo>,
		getTableName(): any,
		scope(options: any): Model<TInstance, TPojo>,
		findAll(options?: FindOptions, queryOptions?: QueryOptions): PromiseT<Array<TInstance>>,
		find(options?: FindOptions, queryOptions?: QueryOptions): PromiseT<TInstance>,
		find(id?: number, queryOptions?: QueryOptions): PromiseT<TInstance>,
		aggregate<V>(field: string, aggregateFunction: string, options: FindOptions): PromiseT<V>,
		count(options?: FindOptions): PromiseT<number>,
		findAndCountAll(
		findOptions?: FindOptions, queryOptions?: QueryOptions
	): PromiseT<FindAndCountResult<TInstance>>,
		max<V>(field: string, options?: FindOptions): PromiseT<V>,
		min<V>(field: string, options?: FindOptions): PromiseT<V>,
		sum(field: string, options?: FindOptions): PromiseT<number>,
		build(values: TPojo, options?: BuildOptions): TInstance,
		create(values: TPojo, options?: CopyOptions): PromiseT<TInstance>,
		findOrInitialize(where: any, defaults?: TPojo, options?: QueryOptions): PromiseT<TInstance>,
		findOrCreate(
		where: any, defaults?: TPojo, options?: FindOrCreateOptions
	): PromiseT<TInstance>,
		bulkCreate(records: Array<TPojo>, options?: BulkCreateOptions): PromiseT<Array<TInstance>>,
		destroy(where?: any, options?: DestroyOptions): Promise,
		update(attrValueHash: TPojo, where: any, options?: UpdateOptions): Promise,
		describe(): PromiseT<any>,
		dataset(): any
	}

	declare interface Instance<TInstance, TPojo> {
		isNewRecord: boolean,
		Model: Model<TInstance, TPojo>,
		sequelize: Sequelize,
		isDeleted: boolean,
		values: TPojo,
		isDirty: boolean,
		primaryKeyValues: TPojo,
		getDataValue(key: string): any,
		setDataValue(key: string, value: any): void,
		get(key?: string): any,
		set(key: string, value: any, options?: SetOptions): void,
		changed(key: string): any,
		changed(): Array<string>,
		previous(key: string): any,
		save(fields?: Array<string>, options?: SaveOptions): PromiseT<TInstance>,
		reload(options?: FindOptions): PromiseT<TInstance>,
		validate(options?: ValidateOptions): PromiseT<Error>,
		updateAttributes(updates: TPojo, options: SaveOptions): PromiseT<TInstance>,
		destroy(options?: DestroyInstanceOptions): Promise,
		increment(fields: any, options?: IncrementOptions): Promise,
		decrement(fields: any, options?: IncrementOptions): Promise,
		equal(other: TInstance): boolean,
		equalsOneOf(others: Array<TInstance>): boolean,
		toJSON(): TPojo
	}

	declare interface Transaction {
		commit(): Transaction,
		rollback(): Transaction
	}

	declare interface TransactionStatic {
		ISOLATION_LEVELS: TransactionIsolationLevels,
		LOCK: TransactionLocks
	}

	declare interface TransactionIsolationLevels {
		READ_UNCOMMITTED: string,
		READ_COMMITTED: string,
		REPEATABLE_READ: string,
		SERIALIZABLE: string
	}

	declare interface TransactionLocks {
		UPDATE: string,
		SHARE: string
	}

	declare interface Hooks {
		addHook(hooktype: string, name: string, fn: (...args: Array<any>) => void): boolean,
		addHook(hooktype: string, fn: (...args: Array<any>) => void): boolean,
		beforeValidate<T>(
		name: string, validator: (dao: T, callback: (err?: Error) => void) => void
	): void,
		beforeValidate<T>(validator: (dao: T, callback: (err?: Error) => void) => void): void,
		afterValidate<T>(
		name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void
	): void,
		afterValidate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void,
		beforeCreate<T>(
		name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void
	): void,
		beforeCreate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void,
		afterCreate<T>(
		name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void
	): void,
		afterCreate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void,
		beforeDestroy<T>(
		name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void
	): void,
		beforeDestroy<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void,
		afterDestroy<T>(
		name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void
	): void,
		afterDestroy<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void,
		beforeUpdate<T>(
		name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void
	): void,
		beforeUpdate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void,
		afterUpdate<T>(
		name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void
	): void,
		afterUpdate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void,
		beforeBulkCreate<T>(
		name: string, validator: (
		daos: Array<T>, fields: Array<string>, callback: (err?: Error, dao?: T) => void
	) => void
	): void,
		beforeBulkCreate<T>(
		validator: (
		daos: Array<T>, fields: Array<string>, callback: (err?: Error, dao?: T) => void
	) => void
	): void,
		afterBulkCreate<T>(
		name: string, validator: (
		daos: Array<T>, fields: Array<string>, callback: (err?: Error, dao?: T) => void
	) => void
	): void,
		afterBulkCreate<T>(
		validator: (
		daos: Array<T>, fields: Array<string>, callback: (err?: Error, dao?: T) => void
	) => void
	): void,
		beforeBulkDestroy<T>(
		name: string, validator: (where: any, callback: (err?: Error, where?: any) => void) => void
	): void,
		beforeBulkDestroy<T>(
		validator: (where: any, callback: (err?: Error, where?: any) => void) => void
	): void,
		afterBulkDestroy<T>(
		name: string, validator: (where: any, callback: (err?: Error, where?: any) => void) => void
	): void,
		afterBulkDestroy<T>(
		validator: (where: any, callback: (err?: Error, where?: any) => void) => void
	): void,
		beforeBulkUpdate<T>(
		name: string, validator: (
		instances: Array<T>, where: any, callback: (err?: Error, instances?: Array<T>, where?: any) => void
	) => void
	): void,
		beforeBulkUpdate<T>(
		validator: (
		instances: Array<T>, where: any, callback: (err?: Error, instances?: Array<T>, where?: any) => void
	) => void
	): void,
		afterBulkUpdate<T>(
		name: string, validator: (
		instances: Array<T>, where: any, callback: (err?: Error, instances?: Array<T>, where?: any) => void
	) => void
	): void,
		afterBulkUpdate<T>(
		validator: (
		instances: Array<T>, where: any, callback: (err?: Error, instances?: Array<T>, where?: any) => void
	) => void
	): void
	}

	declare interface Associations {
		hasOne<TInstance, TPojo>(
		target: Model<TInstance, TPojo>, options?: AssociationOptions
	): void,
		belongsTo<TInstance, TPojo>(
		target: Model<TInstance, TPojo>, options?: AssociationOptions
	): void,
		belongsToMany<TInstance, TPojo>(
		target: Model<TInstance, TPojo>, options?: AssociationOptions
	): void,
		hasMany<TInstance, TPojo>(
		target: Model<TInstance, TPojo>, options?: AssociationOptions
	): void
	}

	declare interface Validator {
		
	}

	declare interface ValidationError {
		
	}

	declare interface QueryChainer {
		add(
		emitterOrKlass: any, method?: string, params?: any, options?: any
	): QueryChainer,
		run(): EventEmitter,
		runSerially(options?: QueryChainerRunSeriallyOptions): EventEmitter
	}

	declare interface QueryInterface {
		QueryGenerator: QueryGenerator,
		createSchema(schema?: string): EventEmitter,
		dropSchema(schema: string): EventEmitter,
		dropAllSchemas(): EventEmitter,
		showAllSchemas(options?: QueryOptions): EventEmitter,
		createTable(tableName: string, attributes: any, options?: QueryOptions): any,
		dropTable(tableName: string, options?: QueryOptions): EventEmitter,
		dropAllTables(options?: QueryOptions): EventEmitter,
		dropAllEnums(options?: QueryOptions): EventEmitter,
		renameTable(before: string, after: string): EventEmitter,
		showAllTables(options?: QueryOptions): EventEmitter,
		describeTable(tableName: string, options?: QueryOptions): EventEmitter,
		addColumn(tableName: string, attributeName: any, dataTypeOrOptions?: any): EventEmitter,
		removeColumn(tableName: string, attributeName: string): EventEmitter,
		changeColumn(tableName: string, attributeName: string, dataTypeOrOptions: any): EventEmitter,
		renameColumn(tableName: string, attrNameBefore: string, attrNameAfter: string): EventEmitter,
		addIndex(
		tableName: string, attributes: Array<any>, options?: QueryOptions
	): EventEmitter,
		showIndex(tableName: string, options?: QueryOptions): EventEmitter,
		getForeignKeysForTables(tableNames: Array<string>): EventEmitter,
		removeIndex(tableName: string, attributes: Array<string>): EventEmitter,
		removeIndex(tableName: string, indexName: string): EventEmitter,
		insert<TModel>(
		dao: TModel, tableName: string, values: any, options?: QueryOptions
	): EventEmitter,
		bulkInsert(
		tableName: string, records: Array<any>, options?: QueryOptions, attributes?: any
	): EventEmitter,
		update<TModel>(
		dao: TModel, tableName: string, values: Array<any>, where: any, options?: QueryOptions
	): EventEmitter,
		bulkUpdate(
		tableName: string, values: Array<any>, where: any, options?: QueryOptions, attributes?: any
	): EventEmitter,
		delete<TModel>(
		dao: TModel, tableName: string, where: any, options?: QueryOptions
	): EventEmitter,
		bulkDelete(tableName: string, where: any, options?: QueryOptions): EventEmitter,
		bulkDelete<TModel>(
		tableName: string, where: any, options: QueryOptions, model: TModel
	): EventEmitter,
		select<TModel>(
		factory: TModel, tableName: string, scope?: any, queryOptions?: QueryOptions
	): EventEmitter,
		increment<TModel>(
		dao: TModel, tableName: string, values: Array<any>, where: any, options?: QueryOptions
	): EventEmitter,
		rawSelect<TModel>(
		tableName: string, options: QueryOptions, attributeSelector: string, model: TModel
	): EventEmitter,
		createTrigger(
		tableName: string, triggerName: string, timingType: string, fireOnArray: Array<any>, functionName: string, functionParams: Array<any>, optionsArray: Array<string>
	): EventEmitter,
		dropTrigger(tableName: string, triggerName: string): EventEmitter,
		renameTrigger(
		tableName: string, oldTriggerName: string, newTriggerName: string
	): EventEmitter,
		createFunction(
		functionName: string, params: Array<any>, returnType: string, language: string, body: string, options?: QueryOptions
	): EventEmitter,
		dropFunction(functionName: string, params: Array<any>): EventEmitter,
		renameFunction(
		oldFunctionName: string, params: Array<any>, newFunctionName: string
	): EventEmitter,
		quoteIdentifier(identifier: string, force: boolean): EventEmitter,
		quoteTable(tableName: string): EventEmitter,
		quoteIdentifiers(identifiers: string, force: boolean): EventEmitter,
		escape(value: string): EventEmitter,
		setAutocommit(transaction: Transaction, value: boolean): EventEmitter,
		setIsolationLevel(transaction: Transaction, value: string): EventEmitter,
		startTransaction(transaction: Transaction, options?: QueryOptions): EventEmitter,
		commitTransaction(transaction: Transaction, options?: QueryOptions): EventEmitter,
		rollbackTransaction(transaction: Transaction, options?: QueryOptions): EventEmitter
	}

	declare interface QueryGenerator {
		createSchema(schemaName: string): string,
		dropSchema(schemaName: string): string,
		showSchemasQuery(): string,
		addSchema<TInstance, TPojo>(param: Model<TInstance, TPojo>): Schema,
		createTableQuery(
		tableName: string, attributes: Array<any>, options?: CreateTableQueryOptions
	): string,
		describeTableQuery(tableName: string, schema: string, schemaDelimiter: string): string,
		dropTableQuery(tableName: string, options?: {
		cascade: string
	}): string,
		renameTableQuery(before: string, after: string): string,
		showTablesQuery(): string,
		addColumnQuery(tableName: string, attributes: any): string,
		removeColumnQuery(tableName: string, attributeName: string): string,
		changeColumnQuery(tableName: string, attributes: any): string,
		renameColumnQuery(tableName: string, attrNameBefore: string, attrNameAfter: string): string,
		insertQuery(table: string, valueHash: any, modelAttributes: any): string,
		bulkInsertQuery(tableName: string, attrValueHashes: any): string,
		updateQuery(
		tableName: string, attrValueHash: any, where: any, options: InsertOptions, attributes: any
	): string,
		deleteQuery(tableName: string, where: any, options: DestroyOptions): string,
		deleteQuery<TInstance, TPojo>(
		tableName: string, where: any, options: DestroyOptions, model: Model<TInstance, TPojo>
	): string,
		incrementQuery(tableName: string, attrValueHash: any, where: any, options?: any): string,
		addIndexQuery(tableName: string, attributes: Array<any>, options?: IndexOptions): string,
		showIndexQuery(tableName: string, options?: any): string,
		removeIndexQuery(tableName: string, indexNameOrAttributes: string): string,
		removeIndexQuery(tableName: string, indexNameOrAttributes: Array<string>): string,
		attributesToSQL(attributes: Array<any>): string,
		findAutoIncrementField<TInstance, TPojo>(factory: Model<TInstance, TPojo>): Array<string>,
		quoteTable(param: any, as: boolean): string,
		quote(obj: any, parent: any, force: boolean): string,
		createTrigger(
		tableName: string, triggerName: string, timingType: string, fireOnArray: TriggerOptions, functionName: string, functionParams: Array<TriggerParam>
	): string,
		dropTrigger(tableName: string, triggerName: string): string,
		renameTrigger(tableName: string, oldTriggerName: string, newTriggerName: string): string,
		createFunction(
		functionName: string, params: Array<TriggerParam>, returnType: string, language: string, body: string, options?: Array<string>
	): string,
		dropFunction(functionName: string, params: Array<TriggerParam>): string,
		renameFunction(
		oldFunctionName: string, params: Array<TriggerParam>, newFunctionName: string
	): string,
		quoteIdentifier(identifier: string, force?: boolean): string,
		quoteIdentifiers(identifiers: string, force?: boolean): string,
		escape(value: any, field: any): string,
		getForeignKeysQuery(tableName: string, schemaName: string): string,
		dropForeignKeyQuery(tableName: string, foreignKey: string): string,
		selectQuery<TInstance, TPojo>(
		tableName: string, options: SelectOptions, model?: Model<TInstance, TPojo>
	): string,
		selectQuery<TInstance, TPojo>(
		tableName: Array<string>, options: SelectOptions, model?: Model<TInstance, TPojo>
	): string,
		selectQuery<TInstance, TPojo>(
		tableName: Array<Array<string>>, options: SelectOptions, model?: Model<TInstance, TPojo>
	): string,
		setAutocommitQuery(value: boolean): string,
		setIsolationLevelQuery(value: string): string,
		startTransactionQuery(options?: any): string,
		commitTransactionQuery(options?: any): string,
		rollbackTransactionQuery(options?: any): string,
		addLimitAndOffset(options: SelectOptions, query?: string): string,
		getWhereConditions<TInstance, TPojo>(
		smth: any, tableName: string, factory: Model<TInstance, TPojo>, options?: any, prepend?: boolean
	): string,
		prependTableNameToHash(tableName: string, hash?: any): string,
		findAssociation<TInstance, TPojo>(attribute: string, dao: Model<TInstance, TPojo>): string,
		getAssociationFilterDAO<TInstance, TPojo>(filterStr: string, dao: Model<TInstance, TPojo>): string,
		isAssociationFilter<TInstance, TPojo>(
		filterStr: string, dao: Model<TInstance, TPojo>, options?: any
	): string,
		getAssociationFilterColumn<TInstance, TPojo>(
		filterStr: string, dao: Model<TInstance, TPojo>, options?: {
		include: boolean
	}
	): string,
		getConditionalJoins<TInstance, TPojo>(
		options: {
		where?: any
	}, originalDao: Model<TInstance, TPojo>
	): string,
		arrayValue(
		value: Array<string>, key: string, _key: string, factory?: any, logicResult?: any
	): string,
		hashToWhereConditions<TInstance, TPojo>(
		hash: any, dao: Model<TInstance, TPojo>, options?: HashToWhereConditionsOption
	): string,
		booleanValue(value: boolean): string
	}

	declare interface Schema {
		tableName: string,
		table: string,
		name: string,
		schema: string,
		delimiter: string
	}

	declare interface QueryTypes {
		SELECT: string,
		BULKUPDATE: string,
		BULKDELETE: string
	}

	declare interface ModelManager {
		daos: Array<Model<any, any>>,
		sequelize: Sequelize,
		addDAO<TInstance, TPojo>(dao: Model<TInstance, TPojo>): Model<TInstance, TPojo>,
		removeDAO<TInstance, TPojo>(dao: Model<TInstance, TPojo>): void,
		getDAO<TInstance, TPojo>(
		daoName: string, options?: ModelMangerGetDaoOptions
	): Model<TInstance, TPojo>,
		all: Array<Model<any, any>>,
		forEachDAO(
		iterator: (dao: Model<any, any>, name: string) => void, options?: ModelManagerForEachDaoOptions
	): void
	}

	declare interface TransactionManager {
		sequelize: Sequelize,
		connectorManagers: any,
		getConnectorManager(uuid?: string): ConnectorManager,
		releaseConnectionManager(uuid?: string): void,
		query(sql: string, callee?: Model<any, any>, options?: QueryOptions): EventEmitter,
		query<TInstance, TPojo>(
		sql: string, callee?: Model<TInstance, TPojo>, options?: QueryOptions
	): EventEmitter
	}

	declare interface ConnectorManager {
		query(sql: string, callee?: Model<any, any>, options?: QueryOptions): EventEmitter,
		afterTransactionSetup(callback: () => void): void,
		connect(): void,
		disconnect(): void,
		reconnect(): void,
		cleanup(): void
	}

	declare interface Migrator {
		queryInterface: QueryInterface,
		migrate(options?: MigratorOptions): EventEmitter,
		getUndoneMigrations(callback: (err: Error, result: Array<Migrator>) => void): void,
		findOrCreateMetaDAO(syncOptions?: SyncOptions): EventEmitter,
		exec(filename: string, options?: MigratorExecOptions): EventEmitter,
		getLastMigrationFromDatabase(): EventEmitter,
		getLastMigrationIdFromDatabase(): EventEmitter,
		getFormattedDateString(s: string): string,
		stringToDate(s: string): Date,
		saveSuccessfulMigration(
		from: Migration, to: Migration, callback: (metaData: MetaInstance) => void
	): void,
		deleteUndoneMigration(from: Migration, to: Migration, callback: () => void): void,
		execute(options?: MigrationExecuteOptions): EventEmitter,
		isBefore(date: Date, options?: MigrationCompareOptions): boolean,
		isAfter(date: Date, options?: MigrationCompareOptions): boolean
	}

	declare interface Migration {
		migrator: Migrator,
		path: string,
		filename: string,
		migrationId: number,
		date: Date,
		queryInterface: QueryInterface,
		migration: (
		err: Error, migration: Migration, dataTypes: any, callback: (err: Error) => void
	) => void
	}

	declare interface EventEmitter {
		
	}

	declare interface EventEmitterT<R> {
		new (handler: (emitter: EventEmitterT<R>) => void): EventEmitterT<R>,
		run(): EventEmitterT<R>,
		success(onSuccess: (result: R) => void): EventEmitterT<R>,
		ok(onSuccess: (result: R) => void): EventEmitterT<R>,
		error(onError: (err: Error) => void): EventEmitterT<R>,
		fail(onError: (err: Error) => void): EventEmitterT<R>,
		failure(onError: (err: Error) => void): EventEmitterT<R>,
		done(onDone: (err: Error, result: R) => void): EventEmitterT<R>,
		complete(onDone: (err: Error, result: R) => void): EventEmitterT<R>,
		sql(onSQL: (sql: string) => void): EventEmitterT<R>,
		proxy(emitter: EventEmitterT<R>, options?: ProxyOptions): EventEmitterT<R>
	}

	declare interface Options {
		dialect?: string,
		dialectModulePath?: string,
		dialectOptions?: Object,
		host?: string,
		port?: number,
		protocol?: string,
		define?: DefineOptions,
		query?: QueryOptions,
		sync?: SyncOptions,
		timezone?: string,
		logging?: any,
		omitNull?: boolean,
		queue?: boolean,
		maxConcurrentQueries?: number,
		native?: boolean,
		replication?: ReplicationOptions,
		pool?: PoolOptions,
		quoteIdentifiers?: boolean,
		language?: string
	}

	declare interface PoolOptions {
		maxConnections?: number,
		minConnections?: number,
		maxIdleTime?: number,
		validateConnection?: (client?: any) => boolean
	}

	declare interface AttributeOptions {
		type?: string,
		allowNull?: boolean,
		defaultValue?: any,
		unique?: any,
		primaryKey?: boolean,
		field?: string,
		autoIncrement?: boolean,
		comment?: string,
		references?: any,
		referencesKey?: string,
		onUpdate?: string,
		onDelete?: string,
		get?: () => any,
		set?: (value?: any) => void,
		validate?: any
	}

	declare interface ForeignKeyAttributeOptions {
		fieldName: string
	}

	declare interface DefineOptions {
		defaultScope?: FindOptions,
		scopes?: any,
		omitNull?: boolean,
		timestamps?: boolean,
		paranoid?: boolean,
		underscored?: boolean,
		underscoredAll?: boolean,
		freezeTableName?: boolean,
		createdAt?: any,
		updatedAt?: any,
		deletedAt?: any,
		tableName?: string,
		getterMethods?: any,
		setterMethods?: any,
		instanceMethods?: any,
		classMethods?: any,
		schema?: string,
		schemaDelimiter?: string,
		engine?: string,
		charset?: string,
		comment?: string,
		collate?: string,
		whereCollection?: any,
		language?: string,
		hooks?: Hooks,
		validate?: any,
		indexes?: Array<DefineIndexOptions>
	}

	declare interface DefineIndexOptions {
		name?: string,
		type: string,
		method: string,
		unique?: boolean,
		concurrently?: boolean,
		fields: Array<any>
	}

	declare interface QueryOptions {
		raw?: boolean,
		transaction?: Transaction,
		type?: string,
		lock?: string,
		dataType?: any,
		logging?: any,
		plain?: boolean
	}

	declare interface SyncOptions {
		force?: boolean,
		logging?: any,
		schema?: string
	}

	declare interface ReplicationOptions {
		read?: Array<Server>,
		write?: Server
	}

	declare interface Server {
		host?: string,
		port?: number,
		database?: string,
		username?: string,
		password?: string
	}

	declare interface DropOptions {
		cascade?: boolean
	}

	declare interface SchemaOptions {
		schemaDelimiter?: string
	}

	declare interface FindOptions {
		where?: any,
		attributes?: Array<any>,
		include?: any,
		order?: any,
		limit?: number,
		offset?: number
	}

	declare interface BuildOptions {
		raw?: boolean,
		isNewRecord?: boolean,
		isDirty?: boolean,
		include?: Array<any>
	}

	declare interface CopyOptions {
		fields?: Array<string>,
		transaction?: Transaction
	}

	declare interface FindOrCreateOptions {
		
	}

	declare interface BulkCreateOptions {
		fields?: Array<string>,
		validate?: boolean,
		hooks?: boolean,
		ignoreDuplicates?: boolean
	}

	declare interface DestroyOptions {
		hooks?: boolean,
		limit?: number,
		truncate?: boolean
	}

	declare interface DestroyInstanceOptions {
		force: boolean
	}

	declare interface InsertOptions {
		limit?: number,
		returning?: string,
		allowNull?: string
	}

	declare interface UpdateOptions {
		validate?: boolean,
		hooks?: boolean,
		limit?: number
	}

	declare interface SetOptions {
		raw?: boolean,
		reset?: boolean,
		include?: any
	}

	declare interface SaveOptions {
		fields?: any,
		silent?: boolean,
		transaction?: Transaction
	}

	declare interface ValidateOptions {
		skip: Array<string>
	}

	declare interface IncrementOptions {
		by?: number,
		transaction?: Transaction
	}

	declare interface IndexOptions {
		indicesType?: string,
		indexType?: string,
		indexName?: string,
		parser?: any
	}

	declare interface ProxyOptions {
		events: Array<string>
	}

	declare interface AssociationOptions {
		hooks?: boolean,
		through?: any,
		as?: string,
		foreignKey?: any,
		onDelete?: string,
		onUpdate?: string,
		constraints?: boolean
	}

	declare interface TriggerOptions {
		insert?: Array<string>,
		update?: Array<string>,
		delete?: Array<string>,
		truncate?: Array<string>
	}

	declare interface TriggerParam {
		type: string,
		direction?: string,
		name?: string
	}

	declare interface SelectOptions {
		limit?: number,
		offset?: number,
		attributes?: Array<any>,
		hasIncludeWhere?: boolean,
		hasIncludeRequired?: boolean,
		hasMultiAssociation?: boolean,
		tableAs?: string,
		table?: string,
		include?: Array<any>,
		includeIgnoreAttributes?: boolean,
		where?: any,
		group?: any,
		having?: any,
		order?: any,
		lock?: string
	}

	declare interface HashToWhereConditionsOption {
		include?: boolean,
		keysEscaped?: boolean
	}

	declare interface ModelMangerGetDaoOptions {
		attribute: string
	}

	declare interface ModelManagerForEachDaoOptions {
		reverse: boolean
	}

	declare interface MigratorOptions {
		force: boolean
	}

	declare interface FindAndCountResult<T> {
		rows?: Array<T>,
		count?: number
	}

	declare interface Col {
		col: string
	}

	declare interface Cast {
		val: any,
		type: string
	}

	declare interface Literal {
		val: any
	}

	declare interface And {
		args: Array<any>
	}

	declare interface Or {
		args: Array<any>
	}

	declare interface Where {
		attribute: string,
		logic: any
	}

	declare interface TransactionOptions {
		autocommit?: boolean,
		isolationLevel?: string
	}

	declare interface QueryChainerRunSeriallyOptions {
		skipOnError: boolean
	}

	declare interface CreateTableQueryOptions {
		comment?: string,
		uniqueKeys?: Array<any>,
		charset?: string
	}

	declare interface MigratorExecOptions {
		before?: (migrator: Migrator) => void,
		after?: (migrator: Migrator) => void,
		success?: (migrator: Migrator) => void
	}

	declare interface MigrationExecuteOptions {
		method: string
	}

	declare interface MigrationCompareOptions {
		withoutEquals: boolean
	}

	declare interface Promise {
		on(evt: string, fct: () => void): void,
		emit(type: string, ...value: Array<any>): void,
		success(onSuccess: () => void): Promise,
		ok(onSuccess: () => void): Promise,
		error(onError: (err?: Error) => void): Promise,
		fail(onError: (err?: Error) => void): Promise,
		failure(onError: (err?: Error) => void): Promise,
		done(handler: (err: Error, result?: any) => void): Promise,
		complete(handler: (err: Error, result?: any) => void): Promise,
		sql(onSQL: (sql: string) => void): Promise,
		proxy(promise: Promise, options?: ProxyOptions): Promise,
		then(
		onFulfilled?: (result?: any) => void, onRejected?: (result?: any) => void
	): Promise,
		then(
		onFulfilled?: (result?: any) => Promise, onRejected?: (result?: any) => Promise
	): Promise,
		then<R>(
		onFulfilled?: (result?: any) => PromiseT<R>, onRejected?: (result?: any) => PromiseT<R>
	): PromiseT<R>,
		then<R>(
		onFulfilled?: (result?: any) => PromiseT<R>, onRejected?: (result?: any) => void
	): PromiseT<R>,
		then<R>(
		onFulfilled?: (result?: any) => void, onRejected?: (result?: any) => PromiseT<R>
	): PromiseT<R>,
		then<R1, R2>(
		onFulfilled?: (result?: any) => PromiseT<R1>, onRejected?: (result?: any) => PromiseT<R2>
	): Promise,
		spread(
		onFulfilled?: (...results: Array<any>) => Promise, onRejected?: (...results: Array<any>) => Promise
	): Promise,
		spread(
		onFulfilled?: (...results: Array<any>) => void, onRejected?: (...results: Array<any>) => void
	): Promise,
		spread(
		onFulfilled?: (...results: Array<any>) => Promise, onRejected?: (...results: Array<any>) => void
	): Promise,
		spread(
		onFulfilled?: (...results: Array<any>) => void, onRejected?: (...results: Array<any>) => Promise
	): Promise,
		spread<R>(
		onFulfilled?: (...results: Array<any>) => PromiseT<R>, onRejected?: (...results: Array<any>) => PromiseT<R>
	): PromiseT<R>,
		spread<R>(
		onFulfilled?: (...results: Array<any>) => void, onRejected?: (...results: Array<any>) => PromiseT<R>
	): PromiseT<R>,
		spread<R>(
		onFulfilled?: (...results: Array<any>) => PromiseT<R>, onRejected?: (...results: Array<any>) => void
	): PromiseT<R>,
		spread<R1, R2>(
		onFulfilled?: (...results: Array<any>) => PromiseT<R1>, onRejected?: (...results: Array<any>) => PromiseT<R2>
	): Promise,
		catch(onRejected: (result?: any) => Promise): Promise,
		catch<R>(onRejected: (result?: any) => PromiseT<R>): PromiseT<R>,
		catch(onRejected: (result?: any) => void): Promise
	}

	declare interface PromiseT<T> {
		on(evt: string, fct: (t: T) => void): void,
		emit(type: string, ...value: Array<T>): void,
		success(onSuccess: (t: T) => void): PromiseT<T>,
		ok(onSuccess: (t: T) => void): PromiseT<T>,
		done(handler: (err: Error, result: T) => void): PromiseT<T>,
		complete(handler: (err: Error, result: T) => void): PromiseT<T>,
		sql(onSQL: (sql: string) => void): PromiseT<T>,
		proxy(promise: PromiseT<T>, options?: ProxyOptions): PromiseT<T>,
		then(onFulfilled?: (result?: T) => void, onRejected?: (result?: T) => void): Promise,
		then(
		onFulfilled?: (result?: T) => Promise, onRejected?: (result?: T) => Promise
	): Promise,
		then<R>(
		onFulfilled?: (result?: T) => PromiseT<R>, onRejected?: (result?: T) => PromiseT<R>
	): PromiseT<R>,
		then<R>(
		onFulfilled?: (result?: T) => PromiseT<R>, onRejected?: (result?: T) => void
	): PromiseT<R>,
		then<R>(
		onFulfilled?: (result?: T) => void, onRejected?: (result?: T) => PromiseT<R>
	): PromiseT<R>,
		then<R1, R2>(
		onFulfilled?: (result?: T) => PromiseT<R1>, onRejected?: (result?: T) => PromiseT<R2>
	): Promise,
		catch(onRejected: (result?: T) => Promise): Promise,
		catch<R>(onRejected: (result?: T) => PromiseT<R>): PromiseT<R>,
		catch(onRejected: (result?: T) => void): Promise
	}

	declare interface Utils {
		_: Lodash,
		format(arr: Array<any>, dialect?: string): string,
		formatNamedParameters(sql: string, parameters: any, dialect?: string): string,
		injectScope(scope: string, merge: boolean): any,
		smartWhere(whereArg: any, dialect: string): any,
		compileSmartWhere(obj: any, dialect: string): Array<any>,
		getWhereLogic(logic: string, val?: any): string,
		isHash(obj: any): boolean,
		hasChanged(attrValue: any, value: any): boolean,
		argsArePrimaryKeys(args: Array<any>, primaryKeys: any): boolean,
		combineTableNames(table1: string, table2: string): string,
		singularize(s: string, language?: string): string,
		pluralize(s: string, language: string): string,
		mergeDefaults: typeof undefined,
		lowercaseFirst(str: string): string,
		uppercaseFirst(str: string): string,
		spliceStr(str: string, index: number, count: number, add: string): string,
		camelize(str: string): string,
		removeCommentsFromFunctionString(s: string): string,
		toDefaultValue(value: any): any,
		defaultValueSchemable(value: any): boolean,
		setAttributes(hash: any, identifier: string, instance: any, prefix: string): any,
		removeNullValuesFromHash(hash: any, omitNull: boolean, options: any): any,
		firstValueOfHash(obj: any): any,
		inherit(subClass: any, superClass: any): any,
		stack(): string,
		now(dialect: string): Date,
		tick(f: Function): void,
		addTicks(s: string, tickChar?: string): string,
		removeTicks(s: string, tickChar?: string): string,
		generateUUID(): string,
		validateParameter(value: any, expectation: any): boolean,
		CustomEventEmitter: EventEmitter,
		Promise: Promise,
		QueryChainer: QueryChainer,
		Lingo: any
	}

	declare interface Lodash {
		camelizeIf(str: string, condition: boolean): string,
		camelizeIf(str: string, condition: any): string,
		underscoredIf(str: string, condition: boolean): string,
		underscoredIf(str: string, condition: any): string,
		compactLite<T>(arr: Array<T>): Array<T>
	}

	declare interface MetaPojo {
		from: string,
		to: string
	}

	declare interface MetaInstance {
		
	}

	declare interface DataTypeStringBase {
		BINARY: DataTypeString
	}

	declare interface DataTypeNumberBase {
		UNSIGNED: boolean,
		ZEROFILL: boolean
	}

	declare interface DataTypeString {
		
	}

	declare interface DataTypeChar {
		
	}

	declare interface DataTypeInteger {
		
	}

	declare interface DataTypeBigInt {
		
	}

	declare interface DataTypeFloat {
		
	}

	declare interface DataTypeBlob {
		
	}

	declare interface DataTypeDecimal {
		PRECISION: number,
		SCALE: number
	}

	declare interface DataTypeVirtual {
		
	}

	declare interface DataTypeEnum {
		(...values: Array<string>): DataTypeEnum
	}

	declare interface DataTypeArray {
		
	}

	declare interface DataTypeHstore {
		
	}

	declare interface DataTypes {
		STRING: DataTypeString,
		CHAR: DataTypeChar,
		TEXT: string,
		INTEGER: DataTypeInteger,
		BIGINT: DataTypeBigInt,
		DATE: string,
		BOOLEAN: string,
		FLOAT: DataTypeFloat,
		NOW: string,
		BLOB: DataTypeBlob,
		DECIMAL: DataTypeDecimal,
		UUID: string,
		UUIDV1: string,
		UUIDV4: string,
		VIRTUAL: DataTypeVirtual,
		NONE: DataTypeVirtual,
		ENUM: DataTypeEnum,
		ARRAY: DataTypeArray,
		HSTORE: DataTypeHstore
	}

			declare module.exports: SequelizeStatic


}