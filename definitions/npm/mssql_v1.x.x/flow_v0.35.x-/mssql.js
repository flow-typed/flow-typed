

declare module 'mssql' {
	declare type sqlTypeWithNoParams = {
		type: sqlTypeFactoryWithNoParams
	};

	declare type sqlTypeWithLength = {
		type: sqlTypeFactoryWithLength,
		length: number
	};

	declare type sqlTypeWithScale = {
		type: sqlTypeFactoryWithScale,
		scale: number
	};

	declare type sqlTypeWithPrecisionScale = {
		type: sqlTypeFactoryWithPrecisionScale,
		precision: number,
		scale: number
	};

	declare type sqlTypeWithTvpType = {
		type: sqlTypeFactoryWithTvpType,
		tvpType: any
	};

	declare type sqlTypeFactoryWithNoParams = () => sqlTypeWithNoParams;

	declare type sqlTypeFactoryWithLength = (length?: number) => sqlTypeWithLength;

	declare type sqlTypeFactoryWithScale = (scale?: number) => sqlTypeWithScale;

	declare type sqlTypeFactoryWithPrecisionScale = (precision?: number, scale?: number) => sqlTypeWithPrecisionScale;

	declare type sqlTypeFactoryWithTvpType = (tvpType: any) => sqlTypeWithTvpType;

	declare type recordSet = any;

	declare type IIsolationLevel = number;

	declare interface IMap {
		register(jstype: any, sql: any): void
	}

	declare export interface IOptions {
		encrypt: boolean
	}

	declare export interface IPool {
		min: number,
		max: number,
		idleTimeoutMillis: number
	}

	declare export interface config {
		driver?: string,
		user?: string,
		password?: string,
		server: string,
		port?: number,
		domain?: string,
		database: string,
		connectionTimeout?: number,
		requestTimeout?: number,
		stream?: boolean,
		options?: IOptions,
		pool?: IPool
	}

	declare interface IRequestParameters {
		[name: string]: {
		name: string,
		type: any,
		io: number,
		value: any,
		length: number,
		scale: number,
		precision: number,
		tvpType: any
	}
	}

		declare export class Connection extends events$EventEmitter {
		connected: boolean;
		connecting: boolean;
		driver: string;
		constructor(config: config, callback?: (err?: any) => void): this;
		connect(): Promise<void>;
		connect(callback: (err: any) => void): void;
		close(): Promise<void>;
		close(callback: (err: any) => void): void
	}

	declare export class ConnectionError extends Error {
		constructor(message: string, code?: any): this;
		name: string;
		message: string;
		code: string
	}

	declare class columns  {
		add(name: string, type: any, options: any): void
	}

	declare class rows  {
		add(...row: any[]): void
	}

	declare export class Table  {
		create: boolean;
		columns: columns;
		rows: rows;
		constructor(tableName: string): this
	}

	declare export class Request extends events$EventEmitter {
		connection: Connection;
		transaction: Transaction;
		pstatement: PreparedStatement;
		parameters: IRequestParameters;
		verbose: boolean;
		multiple: boolean;
		canceled: boolean;
		stream: any;
		constructor(connection?: Connection): this;
		constructor(transaction: Transaction): this;
		constructor(preparedStatement: PreparedStatement): this;
		execute(procedure: string): Promise<recordSet>;
		execute<Entity>(
		procedure: string, callback: (
		err?: any, recordsets?: Entity[], returnValue?: any, rowsAffected?: number
	) => void
	): void;
		input(name: string, value: any): void;
		input(name: string, type: any, value: any): void;
		output(name: string, type: any, value?: any): void;
		pipe(stream: NodeJS.WritableStream): void;
		query(command: string): Promise<void>;
		query<Entity>(command: string): Promise<Entity[]>;
		query(
		command: string, callback: (err?: any, recordset?: any, rowsAffected?: number) => void
	): void;
		query<Entity>(
		command: string, callback: (err?: any, recordset?: Entity[]) => void
	): void;
		batch(batch: string): Promise<recordSet>;
		batch<Entity>(batch: string): Promise<Entity[]>;
		batch(batch: string, callback: (err?: any, recordset?: any) => void): void;
		batch<Entity>(
		batch: string, callback: (err?: any, recordset?: Entity[]) => void
	): void;
		bulk(table: Table): Promise<void>;
		bulk(table: Table, callback: (err: any, rowCount: any) => void): void;
		cancel(): void
	}

	declare export class RequestError extends Error {
		constructor(message: string, code?: any): this;
		name: string;
		message: string;
		code: string
	}

	declare export class Transaction extends events$EventEmitter {
		connection: Connection;
		isolationLevel: IIsolationLevel;
		constructor(connection?: Connection): this;
		begin(isolationLevel?: IIsolationLevel): Promise<void>;
		begin(isolationLevel?: IIsolationLevel, callback?: (err?: any) => void): void;
		commit(): Promise<void>;
		commit(callback: (err?: any) => void): void;
		rollback(): Promise<void>;
		rollback(callback: (err?: any) => void): void
	}

	declare export class TransactionError extends Error {
		constructor(message: string, code?: any): this;
		name: string;
		message: string;
		code: string
	}

	declare export class PreparedStatement extends events$EventEmitter {
		connection: Connection;
		transaction: Transaction;
		prepared: boolean;
		statement: string;
		parameters: IRequestParameters;
		multiple: boolean;
		stream: any;
		constructor(connection?: Connection): this;
		input(name: string, type: any): void;
		output(name: string, type: any): void;
		prepare(statement?: string): Promise<void>;
		prepare(statement?: string, callback?: (err?: any) => void): void;
		execute(values: Object): Promise<recordSet>;
		execute<Entity>(values: Object): Promise<Entity[]>;
		execute(
		values: Object, callback: (err: any, recordSet: recordSet, rowsAffected: number) => void
	): void;
		execute<Entity>(
		values: Object, callback: (err: any, recordSet: Entity[]) => void
	): void;
		unprepare(): Promise<void>;
		unprepare(callback: (err?: any) => void): void
	}

	declare export class PreparedStatementError extends Error {
		constructor(message: string, code?: any): this;
		name: string;
		message: string;
		code: string
	}

	
}