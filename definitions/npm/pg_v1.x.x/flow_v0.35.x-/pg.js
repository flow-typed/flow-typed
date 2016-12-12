

declare module 'pg' {
		declare export interface ConnectionConfig {
		user?: string,
		database?: string,
		password?: string,
		port?: number,
		host?: string
	}

	declare export interface Defaults {
		poolSize?: number,
		poolIdleTimeout?: number,
		reapIntervalMillis?: number,
		binary?: boolean,
		parseInt8?: boolean
	}

	declare export interface ClientConfig {
		ssl?: boolean
	}

	declare export interface PoolConfig {
		max?: number,
		min?: number,
		refreshIdle?: boolean,
		idleTimeoutMillis?: number,
		reapIntervalMillis?: number,
		returnToHead?: boolean
	}

	declare export interface QueryConfig {
		name?: string,
		text: string,
		values?: any[]
	}

	declare export interface QueryResult {
		command: string,
		rowCount: number,
		oid: number,
		rows: any[]
	}

	declare export interface ResultBuilder {
		addRow(row: any): void
	}

	declare export function connect(
		connection: string, callback: (err: Error, client: Client, done: (err?: any) => void) => void
	): void

	declare export function connect(
		config: ClientConfig, callback: (err: Error, client: Client, done: (err?: any) => void) => void
	): void

	declare export function end(): void

	declare export class Pool extends events$EventEmitter {
		constructor(): this;
		constructor(config: PoolConfig): this;
		connect(): Promise<Client>;
		connect(callback: (err: Error, client: Client, done: () => void) => void): void;
		end(): Promise<void>;
		query(queryText: string): Promise<QueryResult>;
		query(queryText: string, values: any[]): Promise<QueryResult>;
		query(queryText: string, callback: (err: Error, result: QueryResult) => void): void;
		query(
		queryText: string, values: any[], callback: (err: Error, result: QueryResult) => void
	): void;
		on(event: "error", listener: (err: Error, client: Client) => void): this;
		on(event: "connect", listener: (client: Client) => void): this;
		on(event: "acquire", listener: (client: Client) => void): this;
		on(event: string, listener: Function): this
	}

	declare export class Client extends events$EventEmitter {
		constructor(connection: string): this;
		constructor(config: ClientConfig): this;
		connect(callback?: (err: Error) => void): void;
		end(): void;
		release(): void;
		query(queryText: string): Promise<QueryResult>;
		query(queryText: string, values: any[]): Promise<QueryResult>;
		query(queryText: string, callback?: (err: Error, result: QueryResult) => void): Query;
		query(
		config: QueryConfig, callback?: (err: Error, result: QueryResult) => void
	): Query;
		query(
		queryText: string, values: any[], callback?: (err: Error, result: QueryResult) => void
	): Query;
		copyFrom(queryText: string): stream.Writable;
		copyTo(queryText: string): stream.Readable;
		pauseDrain(): void;
		resumeDrain(): void;
		on(event: "drain", listener: () => void): this;
		on(event: "error", listener: (err: Error) => void): this;
		on(event: "notification", listener: (message: any) => void): this;
		on(event: "notice", listener: (message: any) => void): this;
		on(event: string, listener: Function): this
	}

	declare export class Query extends events$EventEmitter {
		on(event: "row", listener: (row: any, result?: ResultBuilder) => void): this;
		on(event: "error", listener: (err: Error) => void): this;
		on(event: "end", listener: (result: ResultBuilder) => void): this;
		on(event: string, listener: Function): this
	}

	declare export class Events extends events$EventEmitter {
		on(event: "error", listener: (err: Error, client: Client) => void): this;
		on(event: string, listener: Function): this
	}

	
}