

declare module 'msnodesql' {
		declare interface OpenCallback {
		(err?: Error, connection?: Connection): void
	}

	declare interface QueryCallback<T> {
		(err?: Error, results?: T[], more?: boolean): void
	}

	declare interface QueryRawCallback {
		(err?: Error, results?: QueryRawResult, more?: boolean): void
	}

	declare interface QueryRawResult {
		meta: QueryRawColumn[],
		rows: any[][]
	}

	declare interface QueryRawColumn {
		name?: string
	}

	declare interface ErrorCallback {
		(err: Error): void
	}

	declare interface Connection {
		query(query: string): StreamEvents,
		query(query: string, callback: QueryCallback<any>): StreamEvents,
		query(query: string, params: any[]): StreamEvents,
		query(query: string, params: any[], callback: QueryCallback<any>): StreamEvents,
		query<T>(query: string, callback: QueryCallback<T>): StreamEvents,
		query<T>(query: string, params: any[], callback: QueryCallback<T>): StreamEvents,
		queryRaw(query: string): StreamEvents,
		queryRaw(query: string, callback: QueryRawCallback): StreamEvents,
		queryRaw(query: string, params: any[]): StreamEvents,
		queryRaw(query: string, params: any[], callback: QueryRawCallback): StreamEvents,
		beginTransaction(callback?: ErrorCallback),
		commit(callback?: ErrorCallback),
		rollback(callback?: ErrorCallback),
		close(callback?: ErrorCallback),
		close(immediately: boolean, callback?: ErrorCallback)
	}

	declare interface StreamEvents {
		
	}

	declare export function open(connectionString: string, callback?: OpenCallback): Connection

	declare export function query(connectionString: string, query: string): StreamEvents

	declare export function query(
		connectionString: string, query: string, callback: QueryCallback<any>
	): StreamEvents

	declare export function query(connectionString: string, query: string, params: any[]): StreamEvents

	declare export function query(
		connectionString: string, query: string, params: any[], callback: QueryCallback<any>
	): StreamEvents

	declare export function query<T>(
		connectionString: string, query: string, callback: QueryCallback<T>
	): StreamEvents

	declare export function query<T>(
		connectionString: string, query: string, params: any[], callback: QueryCallback<T>
	): StreamEvents

	declare export function queryRaw(connectionString: string, query: string): StreamEvents

	declare export function queryRaw(
		connectionString: string, query: string, callback: QueryRawCallback
	): StreamEvents

	declare export function queryRaw(connectionString: string, query: string, params: any[]): StreamEvents

	declare export function queryRaw(
		connectionString: string, query: string, params: any[], callback: QueryRawCallback
	): StreamEvents

		
}