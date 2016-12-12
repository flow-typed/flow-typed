

declare module 'lovefield' {
					
}

declare module 'npm$namespace$lf' {
	declare type ValueLiteral = string | number | boolean | Date;

	declare export interface Binder {
		getIndex(): number
	}

	declare export interface Predicate {
		
	}

	declare export interface Row {
		
	}

	declare export interface PredicateProvider {
		eq(operand: ValueLiteral | schema.Column | Binder): Predicate,
		neq(operand: ValueLiteral | schema.Column | Binder): Predicate,
		lt(operand: ValueLiteral | schema.Column | Binder): Predicate,
		lte(operand: ValueLiteral | schema.Column | Binder): Predicate,
		gt(operand: ValueLiteral | schema.Column | Binder): Predicate,
		gte(operand: ValueLiteral | schema.Column | Binder): Predicate,
		match(operand: RegExp | Binder): Predicate,
		between(from: ValueLiteral | Binder, to: ValueLiteral | Binder): Predicate,
		in(values: Binder | Array<ValueLiteral>): Predicate,
		isNull(): Predicate,
		isNotNull(): Predicate
	}

	declare export interface Transaction {
		attach(query: query.Builder): Promise<Array<Object>>,
		begin(scope: Array<schema.Table>): Promise<void>,
		commit(): Promise<void>,
		exec(queries: Array<query.Builder>): Promise<Array<Array<Object>>>,
		rollback(): Promise<void>
	}

	declare export interface Database {
		close(): void,
		createTransaction(type?: TransactionType): Transaction,
		delete(): query.Delete,
		export(): Promise<Object>,
		getSchema(): schema.Database,
		import(data: Object): Promise<void>,
		insertOrReplace(): query.Insert,
		insert(): query.Insert,
		observe(query: query.Select, callback: Function): void,
		select(...columns: schema.Column[]): query.Select,
		unobserve(query: query.Select, callback: Function): void,
		update(table: schema.Table): query.Update
	}

	declare function bind(index: number): Binder

		
}

declare module 'query' {
		declare export interface Builder {
		bind(...values: any[]): Builder,
		exec(): Promise<Array<Object>>,
		explain(): string,
		toSql(): string
	}

	declare export interface Delete {
		from(table: schema.Table): Delete,
		where(predicate: Predicate): Delete
	}

	declare export interface Insert {
		into(table: schema.Table): Insert,
		values(rows: Array<Row> | Binder | Array<Binder>): Insert
	}

	declare export interface Select {
		from(...tables: schema.Table[]): Select,
		groupBy(...columns: schema.Column[]): Select,
		innerJoin(table: schema.Table, predicate: Predicate): Select,
		leftOuterJoin(table: schema.Table, predicate: Predicate): Select,
		limit(numberOfRows: Binder | number): Select,
		orderBy(column: schema.Column, order?: Order): Select,
		skip(numberOfRows: Binder | number): Select,
		where(predicate: Predicate): Select
	}

	declare export interface Update {
		set(column: schema.Column, value: any): Update,
		where(predicate: Predicate): Update
	}

			
}

declare module 'raw' {
		declare export interface BackStore {
		getRawDBInstance(): any,
		getRawTransaction(): any,
		dropTable(tableName: string): Promise<void>,
		addTableColumn(
		tableName: string, columnName: string, defaultValue: string | boolean | number | Date | ArrayBuffer
	): Promise<void>,
		dropTableColumn(tableName: string, columnName: string): Promise<void>,
		renameTableColumn(tableName: string, oldColumnName: string, newColumnName: string): Promise<void>,
		createRow(payload: Object): Row,
		getVersion(): number,
		dump(): Array<Object>
	}

			
}

declare module 'schema' {
	declare type RawForeignKeySpec = {
		local: string,
		ref: string,
		action: lf.ConstraintAction,
		timing: lf.ConstraintTiming
	};

	declare export interface DatabasePragma {
		enableBundledMode: boolean
	}

	declare export interface Database {
		name(): string,
		pragma(): DatabasePragma,
		tables(): Array<schema.Table>,
		table(tableName: string): schema.Table,
		version(): number
	}

	declare export interface Column {
		as(name: string): Column,
		getName(): string,
		getNormalizedName(): string
	}

	declare export interface Table {
		as(name: string): Table,
		createRow(value: Object): Row,
		getName(): string
	}

	declare export interface ConnectOptions {
		onUpgrade?: (rawDb: raw.BackStore) => Promise<void>,
		storeType?: DataStoreType,
		webSqlDbSize?: number
	}

	declare export interface Builder {
		connect(options: ConnectOptions): Promise<lf.Database>,
		createTable(tableName: string): TableBuilder,
		getSchema(): Database,
		setPragma(pragma: DatabasePragma): void
	}

	declare export interface IndexedColumn {
		autoIncrement: boolean,
		name: string,
		order: Order
	}

	declare export interface TableBuilder {
		addColumn(name: string, type: lf.Type): TableBuilder,
		addForeignKey(name: string, spec: RawForeignKeySpec): TableBuilder,
		addIndex(
		name: string, columns: Array<string> | Array<IndexedColumn>, unique?: boolean, order?: Order
	): TableBuilder,
		addNullable(columns: Array<string>): TableBuilder,
		addPrimaryKey(columns: Array<string> | Array<IndexedColumn>, autoInc?: boolean): TableBuilder,
		addUnique(name: string, columns: Array<string>): TableBuilder
	}

	declare function create(dbName: string, dbVersion: number): Builder

		
}

declare module 'op' {
			declare function and(...args: Predicate[]): Predicate

	declare function not(operand: Predicate): Predicate

	declare function or(...args: Predicate[]): Predicate

		
}

declare module 'fn' {
			declare function avg(column: schema.Column): schema.Column

	declare function count(column?: schema.Column): schema.Column

	declare function distinct(column: schema.Column): schema.Column

	declare function geomean(column: schema.Column): schema.Column

	declare function max(column: schema.Column): schema.Column

	declare function min(column: schema.Column): schema.Column

	declare function stddev(column: schema.Column): schema.Column

	declare function sum(column: schema.Column): schema.Column

		
}

declare module 'lf' {
					declare module.exports: undefined


}