

declare module 'tedious' {
		declare export interface ColumnType {
		name: string
	}

	declare export interface ColumnMetaData {
		colName: string,
		type: ColumnType,
		precision?: number,
		scale?: number,
		dataLength?: number
	}

	declare export interface DebugOptions {
		packet?: boolean,
		data?: boolean,
		payload?: boolean,
		token?: boolean
	}

	declare export interface TediousType {
		type: string,
		name: string
	}

	declare export interface TediousTypes {
		BigInt: TediousType,
		Binary: TediousType,
		Bit: TediousType,
		BitN: TediousType,
		Char: TediousType,
		Date: TediousType,
		DateN: TediousType,
		DateTime2: TediousType,
		DateTime2N: TediousType,
		DateTime: TediousType,
		DateTimeN: TediousType,
		DateTimeOffset: TediousType,
		DateTimeOffsetN: TediousType,
		Decimal: TediousType,
		DecimalN: TediousType,
		Float: TediousType,
		FloatN: TediousType,
		Image: TediousType,
		Int: TediousType,
		IntN: TediousType,
		Money: TediousType,
		MoneyN: TediousType,
		NChar: TediousType,
		NText: TediousType,
		NVarChar: TediousType,
		Null: TediousType,
		Numeric: TediousType,
		NumericN: TediousType,
		Real: TediousType,
		SmallDateTime: TediousType,
		SmallInt: TediousType,
		SmallMoney: TediousType,
		TVP: TediousType,
		Text: TediousType,
		Time: TediousType,
		TimeN: TediousType,
		TinyInt: TediousType,
		UDT: TediousType,
		UniqueIdentifier: TediousType,
		UniqueIdentifierN: TediousType,
		VarBinary: TediousType,
		VarChar: TediousType,
		Xml: TediousType
	}

	declare export interface ConnectionOptions {
		port?: number,
		instanceName?: string,
		database?: string,
		fallbackToDefaultDb?: boolean,
		connectTimeout?: number,
		requestTimeout?: number,
		cancelTimeout?: number,
		packetSize?: number,
		useUTC?: boolean,
		abortTransactionOnError?: boolean,
		localAddress?: string,
		useColumnNames?: boolean,
		camelCaseColumns?: boolean,
		columnNameReplacer?: (columnName: string, index: number, columnMetaData: ColumnMetaData) => string,
		debug?: DebugOptions,
		isolationLevel?: ISOLATION_LEVEL,
		connectionIsolationLevel?: ISOLATION_LEVEL,
		readOnlyIntent?: boolean,
		encrypt?: boolean,
		cryptoCredentialsDetails?: Object,
		rowCollectionOnDone?: boolean,
		rowCollectionOnRequestCompletion?: boolean,
		tdsVersion?: number
	}

	declare export interface ConnectionConfig {
		userName?: string,
		password?: string,
		server?: string,
		domain?: string,
		options?: ConnectionOptions
	}

	declare export interface ParameterOptions {
		length?: number,
		precision?: number,
		scale?: number
	}

	declare export interface ColumnValue {
		metadata: ColumnMetaData,
		value: any
	}

	declare export interface BulkLoadColumnOpts {
		nullable: boolean,
		objName?: string
	}

	declare export interface BulkLoad {
		addColumn(name: string, type: TediousType, options: BulkLoadColumnOpts): void,
		addRow(row: Object): void,
		addRow(columnArray: any[]): void,
		addRow(...args: any[]): void,
		getTableCreationSql(): string
	}

	declare export interface InfoObject {
		number: number,
		state: any,
		class: number,
		message: string,
		procName: string,
		lineNumber: number
	}

		declare export class Request extends events$EventEmitter {
		constructor(sql: string, callback: (error: Error, rowCount: number, rows: any[]) => void): this;
		addParameter(name: string, type: TediousType, value: any, options?: ParameterOptions): void;
		addOutputParameter(name: string, type: TediousType, value?: any, options?: ParameterOptions): void
	}

	declare export class Connection extends events$EventEmitter {
		constructor(config: ConnectionConfig): this;
		beginTransaction(
		callback: (error?: Error) => void, name?: string, isolationLevel?: ISOLATION_LEVEL
	): void;
		commitTransaction(callback: (error: Error) => void): void;
		rollbackTransaction(callback: (error: Error) => void): void;
		saveTransaction(callback: (error: Error) => void): void;
		transaction(
		callback: (error: Error, done: (error?: Error) => void) => void, name?: string, isolationLevel?: ISOLATION_LEVEL
	): void;
		prepare(request: Request): void;
		unprepare(request: Request): void;
		callProcedure(request: Request): void;
		execSql(request: Request): void;
		execSqlBatch(request: Request): void;
		execute(request: Request, parameters: {
		
	}): void;
		newBulkLoad(
		tableName: string, callback: (error: Error, rowCount: number) => void
	): BulkLoad;
		execBulkLoad(bulkLoad: BulkLoad): void;
		reset(callback: (error: Error) => void): void;
		cancel(): void;
		close(): void
	}

	
}