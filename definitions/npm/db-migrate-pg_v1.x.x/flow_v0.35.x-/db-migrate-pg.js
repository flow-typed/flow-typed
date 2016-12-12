

declare module 'db-migrate-pg' {
		declare export interface CreateDatabaseOptions {
		
	}

	declare export interface DropDatabaseOptions {
		ifExists?: boolean
	}

	declare export interface CreateSequenceOptions {
		temp?: boolean
	}

	declare export interface SwitchDatabaseOptions {
		database?: string
	}

	declare export interface DropSequenceOptions {
		ifExists?: boolean,
		cascade?: boolean,
		restrict?: boolean
	}

	declare export interface ColumnConstraint {
		foreignKey: (callback: DbMigrateBase.CallbackFunction) => void,
		constraints: string
	}

	declare export interface ColumnConstraintOptions {
		emitPrimaryKey?: boolean
	}

		declare export class PgDriver extends DbMigrateBase$Base {
		constructor(connection: pg.Client, schema: string, intern: DbMigrateBase.InternalOptions): this;
		createDatabase(
		dbName: string, optionsOrCb: CreateDatabaseOptions | DbMigrateBase.CallbackFunction, callback?: DbMigrateBase.CallbackFunction
	): void;
		dropDatabase(
		dbName: string, optionsOrCb: DropDatabaseOptions | DbMigrateBase.CallbackFunction, callback?: DbMigrateBase.CallbackFunction
	): void;
		createSequence(
		sqName: string, optionsOrCb: CreateSequenceOptions | DbMigrateBase.CallbackFunction, callback?: DbMigrateBase.CallbackFunction
	): void;
		switchDatabase(
		options: string | SwitchDatabaseOptions, callback: DbMigrateBase.CallbackFunction
	): void;
		dropSequence(
		dbName: string, optionsOrCb: DropSequenceOptions | DbMigrateBase.CallbackFunction, callback?: DbMigrateBase.CallbackFunction
	): void;
		createColumnConstraint(
		spec: DbMigrateBase.ColumnSpec, options: ColumnConstraintOptions, tableName: string, columnName: string
	): ColumnConstraint;
		createDatabaseAsync(dbName: string, options?: CreateDatabaseOptions): Promise<any>;
		dropDatabaseAsync(dbName: string, options?: DropDatabaseOptions): Promise<any>;
		createSequenceAsync(sqName: string, options?: CreateSequenceOptions): Promise<any>;
		switchDatabaseAsync(options: string | SwitchDatabaseOptions): Promise<any>;
		dropSequenceAsync(dbName: string, options?: DropSequenceOptions): Promise<any>
	}

	
}