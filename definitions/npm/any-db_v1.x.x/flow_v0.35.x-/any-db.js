

declare module 'any-db' {
		declare export interface ConnectOpts {
		adapter: string
	}

	declare export interface Adapter {
		name: string,
		createConnection(
		opts: ConnectOpts, callback?: (error: Error, result: Connection) => void
	): Connection,
		createQuery(
		text: string, params?: any[], callback?: (error: Error, result: ResultSet) => void
	): Query,
		createQuery(query: Query): Query
	}

	declare export interface Field {
		name: string
	}

	declare export interface ResultSet {
		rowCount: number,
		rows: any[],
		fields: Field[],
		fieldCount?: number,
		lastInsertId?: any,
		affectedRows?: number,
		changedRows?: number
	}

	declare export interface Query {
		text: string,
		values: any[],
		callback: (error: Error, results: ResultSet) => void
	}

	declare export interface Queryable {
		adapter: Adapter,
		query(
		text: string, params?: any[], callback?: (error: Error, results: ResultSet) => void
	): Query
	}

	declare export interface Connection {
		end(callback?: (error: Error) => void): void
	}

	declare export interface ConnectionStatic {
		new (): Connection,
		name: string,
		createConnection(): void,
		createPool(): void
	}

	declare export interface ConnectionPool {
		query(
		text: string, params?: any[], callback?: (error: Error, results: ResultSet) => void
	): Query,
		acquire(callback: (error: Error, result: Connection) => void): void,
		release(connection: Connection): void,
		close(callback?: (error: Error) => void): void
	}

	declare export interface PoolConfig {
		min?: number,
		max?: number,
		idleTimeout?: number,
		reapInterval?: number,
		refreshIdle?: boolean,
		onConnect?: (
		connection: Connection, ready: (error: Error, result: Connection) => void
	) => void,
		reset?: (connection: Connection, done: (error: Error) => void) => void,
		shouldDestroyConnection?: (error: Error) => boolean
	}

	declare export function createConnection(
		url: string, callback?: (error: Error, connection: Connection) => void
	): Connection

	declare export function createConnection(
		opts: ConnectOpts, callback?: (error: Error, connection: Connection) => void
	): Connection

	declare export function createPool(url: string, config: PoolConfig): ConnectionPool

	declare export function createPool(opts: ConnectOpts, config: PoolConfig): ConnectionPool

		
}