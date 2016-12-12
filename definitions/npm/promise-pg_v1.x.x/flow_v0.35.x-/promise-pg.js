

declare module 'promise-pg' {
		declare export interface ClientConfig {
		
	}

	declare export interface QueryConfig {
		buffer?: boolean
	}

	declare export interface QueryResult {
		
	}

	declare export interface ResultBuilder {
		
	}

	declare export function connect(connection: string): Q.Promise<Client>

	declare export function connect(connection: pg.ClientConfig): Q.Promise<Client>

	declare export function end(): Q.Promise<void>

	declare export class Client  {
		constructor(connection: string): this;
		constructor(config: ClientConfig): this;
		raw: pg.Client;
		connect(): Q.Promise<void>;
		end(): Q.Promise<void>;
		query(queryText: string): Query;
		query(config: QueryConfig): Query;
		query(queryText: string, values: any[]): Query;
		copyFrom(queryText: string): stream.Writable;
		copyTo(queryText: string): stream.Readable;
		pauseDrain(): void;
		resumeDrain(): void;
		on(event: "drain", listener: () => void): Client;
		on(event: "error", listener: (err: Error) => void): Client;
		on(event: "notification", listener: (message: any) => void): Client;
		on(event: "notice", listener: (message: any) => void): Client;
		on(event: string, listener: Function): Client;
		transaction(task: () => Q.Promise<any>): Q.Promise<any>
	}

	declare export class Query extends pg$Query {
		promise: Q.Promise<QueryResult>
	}

	
}