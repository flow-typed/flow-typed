

declare module 'oracledb' {
	declare export type TRet<T> = T | IPromise<T>;

	declare export type TFunc<T, R> = (value: T) => TRet<R>;

	declare export interface IPromise<T> {
		catch<R>(onReject: TFunc<any, R>): IPromise<R>,
		then<R>(onResolve?: TFunc<T, R>, onReject?: TFunc<any, R>): IPromise<R>
	}

	declare export interface ILob {
		chunkSize: number,
		length: number,
		pieceSize: number,
		offset?: number,
		type: string,
		release(): void,
		read(callback: (err: any, chunk: string | Buffer) => void): void,
		write(data: Buffer, callback: (err: any) => void): void
	}

	declare export interface Lob {
		iLob: ILob,
		chunkSize: number,
		length: number,
		pieceSize: number,
		type: number,
		constructor(iLob: ILob, opts: stream.DuplexOptions): Lob,
		constructor(iLob: ILob): Lob,
		close(callback: (err: any) => void): void,
		close(): void
	}

	declare export interface IConnectionAttributes {
		user?: string,
		password?: string,
		connectString: string,
		stmtCacheSize?: number,
		externalAuth?: boolean
	}

	declare export interface IPoolAttributes {
		poolMax?: number,
		poolMin?: number,
		poolIncrement?: number,
		poolTimeout?: number
	}

	declare export interface IExecuteOptions {
		autoCommit?: boolean,
		extendedMetaData?: boolean,
		fetchInfo?: Object,
		maxRows?: number,
		outFormat?: number,
		prefetchRows?: number,
		resultSet?: boolean
	}

	declare export interface IExecuteReturn {
		metaData?: Array<IMetaData>,
		outBinds?: Array<any> | Object,
		resultSet?: IResultSet,
		rows?: Array<Array<any>> | Array<any>,
		rowsAffected?: number
	}

	declare export interface IMetaData {
		name: string,
		fetchType?: number,
		dbType?: number,
		byteSize?: number,
		precision?: number,
		scale: number,
		nullable?: boolean
	}

	declare export interface IResultSet {
		metaData?: Array<IMetaData>,
		close(callback: (err: any) => void): void,
		close(): IPromise<void>,
		getRow(callback: (err: any, row: Array<any> | Object) => void): void,
		getRow(): IPromise<Array<any> | Object>,
		toQueryStream(): stream.Readable
	}

	declare export interface IConnection {
		action: string,
		clientId: string,
		module: string,
		oracleServerVersion: number,
		stmtCacheSize: number,
		break(callback: (err: any) => void): void,
		break(): IPromise<void>,
		close(callback: (err: any) => void): void,
		close(): IPromise<void>,
		commit(callback: (err: any) => void): void,
		commit(): IPromise<void>,
		execute(
		sql: string, bindParams: Object | Array<any>, options: IExecuteOptions, callback: (err: any, value: IExecuteReturn) => void
	): void,
		execute(
		sql: string, bindParams: Object | Array<any>, callback: (err: any, value: IExecuteReturn) => void
	): void,
		execute(
		sql: string, options: IExecuteOptions, callback: (err: any, value: IExecuteReturn) => void
	): void,
		execute(sql: string, callback: (err: any, value: IExecuteReturn) => void): void,
		execute(
		sql: string, bindParams?: Object | Array<any>, options?: IExecuteOptions
	): IPromise<IExecuteReturn>,
		queryStream(
		sql: string, bindParams?: Object | Array<any>, options?: IExecuteOptions
	): stream.Readable,
		release(callback: (err: any) => void): void,
		release(): IPromise<void>,
		rollback(callback: (err: any) => void): void,
		rollback(): IPromise<void>
	}

	declare export interface IConnectionPool {
		connectionsInUse: number,
		connectionsOpen: number,
		poolIncrement: number,
		poolMax: number,
		poolMin: number,
		poolTimeout: number,
		queueRequests: number,
		queueTimeout: number,
		stmtCacheSize: number,
		close(callback: (err: any) => void): void,
		close(): IPromise<void>,
		getConnection(callback: (err: any, connection: IConnection) => void): void,
		getConnection(): IPromise<IConnection>,
		terminate(callback: (err: any) => void): void,
		terminate(): IPromise<void>
	}

	declare export function newLob(iLob: ILob): Lob

	declare export function createPool(
		poolAttributes: IPoolAttributes, callback: (err: any, connection: IConnectionPool) => void
	): void

	declare export function createPool(poolAttributes: IPoolAttributes): IPromise<IConnectionPool>

	declare export function getConnection(
		connectionAttributes: IConnectionAttributes, callback: (err: any, connection: IConnection) => void
	): void

	declare export function getConnection(connectionAttributes: IConnectionAttributes): IPromise<IConnection>

		
}