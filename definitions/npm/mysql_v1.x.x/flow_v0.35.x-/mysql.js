

declare module 'mysql' {
		declare interface IMySql {
		createConnection(connectionUri: string): IConnection,
		createConnection(config: IConnectionConfig): IConnection,
		createPool(config: IPoolConfig): IPool,
		createPoolCluster(config?: IPoolClusterConfig): IPoolCluster,
		escape(value: any): string,
		format(sql: string): string,
		format(sql: string, values: Array<any>): string,
		format(sql: string, values: any): string
	}

	declare interface IConnectionStatic {
		createQuery(sql: string): IQuery,
		createQuery(sql: string, callback: (err: IError, ...args: any[]) => void): IQuery,
		createQuery(sql: string, values: Array<any>): IQuery,
		createQuery(
		sql: string, values: Array<any>, callback: (err: IError, ...args: any[]) => void
	): IQuery
	}

	declare interface IConnection {
		config: IConnectionConfig,
		threadId: number,
		beginTransaction(callback: (err: IError) => void): void,
		connect(): void,
		connect(callback: (err: IError, ...args: any[]) => void): void,
		connect(options: any, callback?: (err: IError, ...args: any[]) => void): void,
		commit(callback: (err: IError) => void): void,
		changeUser(options: IConnectionOptions): void,
		changeUser(options: IConnectionOptions, callback: (err: IError) => void): void,
		query: IQueryFunction,
		end(): void,
		end(callback: (err: IError, ...args: any[]) => void): void,
		end(options: any, callback: (err: IError, ...args: any[]) => void): void,
		destroy(): void,
		pause(): void,
		release(): void,
		resume(): void,
		escape(value: any): string,
		escapeId(value: string): string,
		escapeId(values: Array<string>): string,
		format(sql: string): string,
		format(sql: string, values: Array<any>): string,
		format(sql: string, values: any): string,
		on(ev: string, callback: (...args: any[]) => void): IConnection,
		on(ev: "error", callback: (err: IError) => void): IConnection,
		rollback(callback: () => void): void
	}

	declare interface IPool {
		config: IPoolConfig,
		getConnection(callback: (err: IError, connection: IConnection) => void): void,
		query: IQueryFunction,
		end(): void,
		end(callback: (err: IError, ...args: any[]) => void): void,
		on(ev: string, callback: (...args: any[]) => void): IPool,
		on(ev: "connection", callback: (connection: IConnection) => void): IPool,
		on(ev: "error", callback: (err: IError) => void): IPool
	}

	declare interface IPoolCluster {
		config: IPoolClusterConfig,
		add(config: IPoolConfig): void,
		add(group: string, config: IPoolConfig): void,
		end(): void,
		getConnection(callback: (err: IError, connection: IConnection) => void): void,
		getConnection(group: string, callback: (err: IError, connection: IConnection) => void): void,
		getConnection(
		group: string, selector: string, callback: (err: IError, connection: IConnection) => void
	): void,
		of(pattern: string): IPool,
		of(pattern: string, selector: string): IPool,
		on(ev: string, callback: (...args: any[]) => void): IPoolCluster,
		on(ev: "remove", callback: (nodeId: number) => void): IPoolCluster,
		on(ev: "connection", callback: (connection: IConnection) => void): IPoolCluster,
		on(ev: "error", callback: (err: IError) => void): IPoolCluster
	}

	declare interface IQuery {
		sql: string,
		start(): void,
		determinePacket(firstByte: number, parser: any): any,
		stream(options: IStreamOptions): stream.Readable,
		pipe(callback: (...args: any[]) => void): IQuery,
		on(ev: string, callback: (...args: any[]) => void): IQuery,
		on(ev: "error", callback: (err: IError) => void): IQuery,
		on(ev: "fields", callback: (fields: any, index: number) => void): IQuery,
		on(ev: "result", callback: (row: any, index: number) => void): IQuery,
		on(ev: "end", callback: () => void): IQuery
	}

	declare interface IQueryFunction {
		(sql: string): IQuery,
		(sql: string, callback: (err: IError, ...args: any[]) => void): IQuery,
		(sql: string, values: Array<any>): IQuery,
		(sql: string, values: Array<any>, callback: (err: IError, ...args: any[]) => void): IQuery,
		(sql: string, values: any): IQuery,
		(sql: string, values: any, callback: (err: IError, ...args: any[]) => void): IQuery,
		(options: IQueryOptions): IQuery,
		(options: IQueryOptions, callback: (err: IError, ...args: any[]) => void): IQuery,
		(options: IQueryOptions, values: Array<any>): IQuery,
		(options: IQueryOptions, values: Array<any>, callback: (err: IError, ...args: any[]) => void): IQuery,
		(options: IQueryOptions, values: any): IQuery,
		(options: IQueryOptions, values: any, callback: (err: IError, ...args: any[]) => void): IQuery
	}

	declare interface IQueryOptions {
		sql: string,
		timeout?: number,
		nestTables?: any,
		typeCast?: any
	}

	declare interface IStreamOptions {
		highWaterMark?: number,
		objectMode?: any
	}

	declare interface IConnectionOptions {
		user?: string,
		password?: string,
		database?: string,
		charset?: string
	}

	declare interface IConnectionConfig {
		host?: string,
		port?: number,
		localAddress?: string,
		socketPath?: string,
		timezone?: string,
		connectTimeout?: number,
		stringifyObjects?: boolean,
		insecureAuth?: boolean,
		typeCast?: any,
		queryFormat?: (query: string, values: any) => void,
		supportBigNumbers?: boolean,
		bigNumberStrings?: boolean,
		dateStrings?: boolean,
		debug?: any,
		trace?: boolean,
		multipleStatements?: boolean,
		flags?: Array<string>,
		ssl?: any
	}

	declare interface IPoolConfig {
		acquireTimeout?: number,
		waitForConnections?: boolean,
		connectionLimit?: number,
		queueLimit?: number
	}

	declare interface IPoolClusterConfig {
		canRetry?: boolean,
		removeNodeErrorCount?: number,
		restoreNodeTimeout?: number,
		defaultSelector?: string
	}

	declare interface ISslCredentials {
		pfx?: string,
		key?: string,
		passphrase?: string,
		cert?: string,
		ca?: Array<string>,
		crl?: Array<string>,
		ciphers?: string
	}

	declare interface IError {
		code: string,
		errno: number,
		sqlStateMarker?: string,
		sqlState?: string,
		fieldCount?: number,
		stack?: string,
		fatal: boolean
	}

	declare function createConnection(connectionUri: string): IConnection

	declare function createConnection(config: IConnectionConfig): IConnection

	declare function createPool(config: IPoolConfig): IPool

	declare function createPoolCluster(config?: IPoolClusterConfig): IPoolCluster

	declare function escape(value: any): string

	declare function format(sql: string): string

	declare function format(sql: string, values: Array<any>): string

	declare function format(sql: string, values: any): string

		
}