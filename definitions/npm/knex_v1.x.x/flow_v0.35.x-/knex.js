

declare module 'knex' {
	declare type Callback = Function;

	declare type Client = Function;

	declare type Value = string | number | boolean | Date | Array<string> | Array<number> | Array<Date> | Array<boolean> | Buffer | Knex.Raw;

	declare type ColumnName = string | Knex.Raw | Knex.QueryBuilder;

	declare type TableName = string | Knex.Raw | Knex.QueryBuilder;

	declare interface Knex {
		(tableName?: string): Knex.QueryBuilder,
		VERSION: string,
		___knex__: string,
		raw: Knex.RawBuilder,
		transaction: <R>(transactionScope: ((trx: Knex.Transaction) => void)) => Promise<any>,
		destroy(callback: Function): void,
		destroy(): Promise<void>,
		schema: Knex.SchemaBuilder,
		client: any,
		migrate: Knex.Migrator,
		seed: any,
		fn: Knex.FunctionHelper,
		on(eventName: string, callback: Function): Knex.QueryBuilder
	}

	declare function Knex(config: Knex.Config): Knex

		declare module.exports: undefined


}

declare module 'Knex' {
		declare interface QueryInterface {
		select: Select,
		as: As,
		columns: Select,
		column: Select,
		from: Table,
		into: Table,
		table: Table,
		distinct: Distinct,
		join: Join,
		joinRaw: JoinRaw,
		innerJoin: Join,
		leftJoin: Join,
		leftOuterJoin: Join,
		rightJoin: Join,
		rightOuterJoin: Join,
		outerJoin: Join,
		fullOuterJoin: Join,
		crossJoin: Join,
		where: Where,
		andWhere: Where,
		orWhere: Where,
		whereNot: Where,
		andWhereNot: Where,
		orWhereNot: Where,
		whereRaw: WhereRaw,
		orWhereRaw: WhereRaw,
		andWhereRaw: WhereRaw,
		whereWrapped: WhereWrapped,
		havingWrapped: WhereWrapped,
		whereExists: WhereExists,
		orWhereExists: WhereExists,
		whereNotExists: WhereExists,
		orWhereNotExists: WhereExists,
		whereIn: WhereIn,
		orWhereIn: WhereIn,
		whereNotIn: WhereIn,
		orWhereNotIn: WhereIn,
		whereNull: WhereNull,
		orWhereNull: WhereNull,
		whereNotNull: WhereNull,
		orWhereNotNull: WhereNull,
		whereBetween: WhereBetween,
		orWhereBetween: WhereBetween,
		andWhereBetween: WhereBetween,
		whereNotBetween: WhereBetween,
		orWhereNotBetween: WhereBetween,
		andWhereNotBetween: WhereBetween,
		groupBy: GroupBy,
		groupByRaw: RawQueryBuilder,
		orderBy: OrderBy,
		orderByRaw: RawQueryBuilder,
		union: Union,
		unionAll(callback: Function): QueryBuilder,
		having: Having,
		andHaving: Having,
		havingRaw: RawQueryBuilder,
		orHaving: Having,
		orHavingRaw: RawQueryBuilder,
		offset(offset: number): QueryBuilder,
		limit(limit: number): QueryBuilder,
		count(columnName?: string): QueryBuilder,
		min(columnName: string): QueryBuilder,
		max(columnName: string): QueryBuilder,
		sum(columnName: string): QueryBuilder,
		avg(columnName: string): QueryBuilder,
		increment(columnName: string, amount?: number): QueryBuilder,
		decrement(columnName: string, amount?: number): QueryBuilder,
		first(...columns: string[]): QueryBuilder,
		debug(enabled?: boolean): QueryBuilder,
		pluck(column: string): QueryBuilder,
		insert(data: any, returning?: string | string[]): QueryBuilder,
		update(data: any, returning?: string | string[]): QueryBuilder,
		update(columnName: string, value: Value, returning?: string | string[]): QueryBuilder,
		returning(column: string | string[]): QueryBuilder,
		del(returning?: string | string[]): QueryBuilder,
		delete(returning?: string | string[]): QueryBuilder,
		truncate(): QueryBuilder,
		transacting(trx: Transaction): QueryBuilder,
		connection(connection: any): QueryBuilder,
		clone(): QueryBuilder
	}

	declare interface As {
		(columnName: string): QueryBuilder
	}

	declare interface Select {
		
	}

	declare interface Table {
		(tableName: string): QueryBuilder,
		(callback: Function): QueryBuilder
	}

	declare interface Distinct {
		
	}

	declare interface Join {
		(raw: Raw): QueryBuilder,
		(tableName: TableName, callback: (joinClause: JoinClause) => any): QueryBuilder,
		(tableName: TableName, columns: {
		[key: string]: string | Raw
	}): QueryBuilder,
		(tableName: TableName, raw: Raw): QueryBuilder,
		(tableName: TableName, column1: string, column2: string): QueryBuilder,
		(tableName: TableName, column1: string, raw: Raw): QueryBuilder,
		(tableName: TableName, column1: string, operator: string, column2: string): QueryBuilder
	}

	declare interface JoinClause {
		on(raw: Raw): JoinClause,
		on(callback: Function): JoinClause,
		on(columns: {
		[key: string]: string | Raw
	}): JoinClause,
		on(column1: string, column2: string): JoinClause,
		on(column1: string, raw: Raw): JoinClause,
		on(column1: string, operator: string, column2: string): JoinClause,
		andOn(raw: Raw): JoinClause,
		andOn(callback: Function): JoinClause,
		andOn(columns: {
		[key: string]: string | Raw
	}): JoinClause,
		andOn(column1: string, column2: string): JoinClause,
		andOn(column1: string, raw: Raw): JoinClause,
		andOn(column1: string, operator: string, column2: string): JoinClause,
		orOn(raw: Raw): JoinClause,
		orOn(callback: Function): JoinClause,
		orOn(columns: {
		[key: string]: string | Raw
	}): JoinClause,
		orOn(column1: string, column2: string): JoinClause,
		orOn(column1: string, raw: Raw): JoinClause,
		orOn(column1: string, operator: string, column2: string): JoinClause,
		using(
		column: string | string[] | Raw | {
		[key: string]: string | Raw
	}
	): JoinClause,
		type(type: string): JoinClause
	}

	declare interface JoinRaw {
		(tableName: string, binding?: Value): QueryBuilder
	}

	declare interface Where {
		(raw: Raw): QueryBuilder,
		(callback: (queryBuilder: QueryBuilder) => any): QueryBuilder,
		(object: Object): QueryBuilder,
		(columnName: string, value: Value): QueryBuilder,
		(columnName: string, operator: string, value: Value): QueryBuilder,
		(columnName: string, operator: string, query: QueryBuilder): QueryBuilder
	}

	declare interface WhereRaw {
		(condition: boolean): QueryBuilder
	}

	declare interface WhereWrapped {
		(callback: Function): QueryBuilder
	}

	declare interface WhereNull {
		(columnName: string): QueryBuilder
	}

	declare interface WhereIn {
		(columnName: string, values: Value[]): QueryBuilder,
		(columnName: string, callback: Function): QueryBuilder,
		(columnName: string, query: QueryBuilder): QueryBuilder
	}

	declare interface WhereBetween {
		(columnName: string, range: [Value, Value]): QueryBuilder
	}

	declare interface WhereExists {
		(callback: Function): QueryBuilder,
		(query: QueryBuilder): QueryBuilder
	}

	declare interface WhereNull {
		(columnName: string): QueryBuilder
	}

	declare interface WhereIn {
		(columnName: string, values: Value[]): QueryBuilder
	}

	declare interface GroupBy {
		
	}

	declare interface OrderBy {
		(columnName: string, direction?: string): QueryBuilder
	}

	declare interface Union {
		(callback: Function, wrap?: boolean): QueryBuilder,
		(callbacks: Function[], wrap?: boolean): QueryBuilder,
		(...callbacks: Function[]): QueryBuilder
	}

	declare interface Having {
		(tableName: string, column1: string, operator: string, column2: string): QueryBuilder
	}

	declare interface ColumnNameQueryBuilder {
		(...columnNames: ColumnName[]): QueryBuilder,
		(columnNames: ColumnName[]): QueryBuilder
	}

	declare interface RawQueryBuilder {
		(sql: string, ...bindings: Value[]): QueryBuilder,
		(sql: string, bindings: Value[]): QueryBuilder,
		(raw: Raw): QueryBuilder
	}

	declare interface Raw {
		wrap(before: string, after: string): Raw
	}

	declare interface RawBuilder {
		(value: Value): Raw,
		(sql: string, ...bindings: Value[]): Raw,
		(sql: string, bindings: Value[]): Raw,
		(sql: string, bindings: Object): Raw
	}

	declare interface QueryBuilder {
		or: QueryBuilder,
		and: QueryBuilder,
		columnInfo(column?: string): Promise<ColumnInfo>,
		forUpdate(): QueryBuilder,
		forShare(): QueryBuilder,
		toSQL(): Sql,
		on(event: string, callback: Function): QueryBuilder
	}

	declare interface Sql {
		method: string,
		options: any,
		bindings: Value[],
		sql: string
	}

	declare interface ChainableInterface {
		toQuery(): string,
		options(options: any): QueryBuilder,
		stream(options?: any, callback?: (builder: QueryBuilder) => any): QueryBuilder,
		stream(callback?: (builder: QueryBuilder) => any): QueryBuilder,
		pipe(writable: any): QueryBuilder,
		exec(callback: Function): QueryBuilder
	}

	declare interface Transaction {
		commit: any,
		rollback: any,
		raw: Knex.RawBuilder
	}

	declare interface SchemaBuilder {
		createTable(
		tableName: string, callback: (tableBuilder: CreateTableBuilder) => any
	): SchemaBuilder,
		createTableIfNotExists(
		tableName: string, callback: (tableBuilder: CreateTableBuilder) => any
	): SchemaBuilder,
		renameTable(oldTableName: string, newTableName: string): Promise<void>,
		dropTable(tableName: string): SchemaBuilder,
		hasTable(tableName: string): Promise<boolean>,
		hasColumn(tableName: string, columnName: string): Promise<boolean>,
		table(
		tableName: string, callback: (tableBuilder: AlterTableBuilder) => any
	): Promise<void>,
		dropTableIfExists(tableName: string): Promise<void>,
		raw(statement: string): SchemaBuilder,
		withSchema(schemaName: string): SchemaBuilder
	}

	declare interface TableBuilder {
		increments(columnName?: string): ColumnBuilder,
		bigIncrements(columnName?: string): ColumnBuilder,
		dropColumn(columnName: string): TableBuilder,
		dropColumns(...columnNames: string[]): TableBuilder,
		renameColumn(from: string, to: string): ColumnBuilder,
		integer(columnName: string): ColumnBuilder,
		bigInteger(columnName: string): ColumnBuilder,
		text(columnName: string, textType?: string): ColumnBuilder,
		string(columnName: string, length?: number): ColumnBuilder,
		float(columnName: string, precision?: number, scale?: number): ColumnBuilder,
		decimal(columnName: string, precision?: number, scale?: number): ColumnBuilder,
		boolean(columnName: string): ColumnBuilder,
		date(columnName: string): ColumnBuilder,
		dateTime(columnName: string): ColumnBuilder,
		time(columnName: string): ColumnBuilder,
		timestamp(columnName: string): ColumnBuilder,
		timestamps(): ColumnBuilder,
		binary(columnName: string): ColumnBuilder,
		enum(columnName: string, values: Value[]): ColumnBuilder,
		enu(columnName: string, values: Value[]): ColumnBuilder,
		json(columnName: string): ColumnBuilder,
		jsonb(columnName: string): ColumnBuilder,
		uuid(columnName: string): ColumnBuilder,
		comment(val: string): TableBuilder,
		specificType(columnName: string, type: string): ColumnBuilder,
		primary(columnNames: string[]): TableBuilder,
		index(columnNames: string[], indexName?: string, indexType?: string): TableBuilder,
		unique(columnNames: string[], indexName?: string): TableBuilder,
		foreign(column: string): ForeignConstraintBuilder,
		foreign(columns: string[]): MultikeyForeignConstraintBuilder,
		dropForeign(columnNames: string[], foreignKeyName?: string): TableBuilder,
		dropUnique(columnNames: string[], indexName?: string): TableBuilder,
		dropPrimary(constraintName?: string): TableBuilder
	}

	declare interface CreateTableBuilder {
		
	}

	declare interface MySqlTableBuilder {
		engine(val: string): CreateTableBuilder,
		charset(val: string): CreateTableBuilder,
		collate(val: string): CreateTableBuilder
	}

	declare interface AlterTableBuilder {
		
	}

	declare interface MySqlAlterTableBuilder {
		
	}

	declare interface ColumnBuilder {
		index(indexName?: string): ColumnBuilder,
		primary(): ColumnBuilder,
		unique(): ColumnBuilder,
		references(columnName: string): ReferencingColumnBuilder,
		onDelete(command: string): ColumnBuilder,
		onUpdate(command: string): ColumnBuilder,
		defaultTo(value: Value): ColumnBuilder,
		unsigned(): ColumnBuilder,
		notNullable(): ColumnBuilder,
		nullable(): ColumnBuilder,
		comment(value: string): ColumnBuilder
	}

	declare interface ForeignConstraintBuilder {
		references(columnName: string): ReferencingColumnBuilder
	}

	declare interface MultikeyForeignConstraintBuilder {
		references(columnNames: string[]): ReferencingColumnBuilder
	}

	declare interface PostgreSqlColumnBuilder {
		index(indexName?: string, indexType?: string): ColumnBuilder
	}

	declare interface ReferencingColumnBuilder {
		inTable(tableName: string): ColumnBuilder
	}

	declare interface AlterColumnBuilder {
		
	}

	declare interface MySqlAlterColumnBuilder {
		first(): AlterColumnBuilder,
		after(columnName: string): AlterColumnBuilder
	}

	declare interface ColumnInfo {
		defaultValue: Value,
		type: string,
		maxLength: number,
		nullable: boolean
	}

	declare interface Config {
		debug?: boolean,
		client?: string,
		dialect?: string,
		connection?: string | ConnectionConfig | MariaSqlConnectionConfig | Sqlite3ConnectionConfig | SocketConnectionConfig,
		pool?: PoolConfig,
		migrations?: MigratorConfig,
		acquireConnectionTimeout?: number,
		useNullAsDefault?: boolean,
		searchPath?: string
	}

	declare interface ConnectionConfig {
		host: string,
		user: string,
		password: string,
		database: string,
		debug?: boolean
	}

	declare interface MariaSqlConnectionConfig {
		user?: string,
		password?: string,
		host?: string,
		port?: number,
		unixSocket?: string,
		protocol?: string,
		db?: string,
		keepQueries?: boolean,
		multiStatements?: boolean,
		connTimeout?: number,
		pingInterval?: number,
		secureAuth?: boolean,
		compress?: boolean,
		ssl?: boolean | MariaSslConfiguration,
		local_infile?: boolean,
		read_default_file?: string,
		read_default_group?: string,
		charset?: string,
		streamHWM?: number
	}

	declare interface MariaSslConfiguration {
		key?: string,
		cert?: string,
		ca?: string,
		capath?: string,
		cipher?: string,
		rejectUnauthorized?: boolean
	}

	declare interface Sqlite3ConnectionConfig {
		filename: string,
		debug?: boolean
	}

	declare interface SocketConnectionConfig {
		socketPath: string,
		user: string,
		password: string,
		database: string,
		debug?: boolean
	}

	declare interface PoolConfig {
		name?: string,
		create?: Function,
		afterCreate?: Function,
		destroy?: Function,
		beforeDestroy?: Function,
		min?: number,
		max?: number,
		refreshIdle?: boolean,
		idleTimeoutMillis?: number,
		reapIntervalMillis?: number,
		returnToHead?: boolean,
		priorityRange?: number,
		validate?: Function,
		log?: boolean
	}

	declare interface MigratorConfig {
		directory?: string,
		extension?: string,
		tableName?: string,
		disableTransactions?: boolean
	}

	declare interface Migrator {
		make(name: string, config?: MigratorConfig): Promise<string>,
		latest(config?: MigratorConfig): Promise<any>,
		rollback(config?: MigratorConfig): Promise<any>,
		status(config?: MigratorConfig): Promise<number>,
		currentVersion(config?: MigratorConfig): Promise<string>
	}

	declare interface FunctionHelper {
		now(): Raw
	}

			
}