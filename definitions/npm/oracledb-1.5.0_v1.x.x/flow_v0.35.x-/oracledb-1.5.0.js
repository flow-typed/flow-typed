

declare module 'oracledb-1.5.0' {
					
}

declare module 'oracledb' {
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
		type: string,
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
		maxRows?: number,
		prefetchRows?: number,
		outFormat?: number,
		resultSet?: boolean,
		autoCommit?: boolean
	}

	declare export interface IExecuteReturn {
		rowsAffected?: number,
		outBinds?: Array<any> | Object,
		metaData?: Array<IMetaData>,
		rows?: Array<Array<any>> | Array<any>,
		resultSet?: IResultSet
	}

	declare export interface IMetaData {
		name: string
	}

	declare export interface IResultSet {
		metaData?: Array<IMetaData>,
		close(callback: (err: any) => void): void,
		getRow(callback: (err: any, row: Array<any> | Object) => void): void,
		getRows(
		rowCount: number, callback: (err: any, rows: Array<Array<any>> | Array<Object>) => void
	): void
	}

	declare export interface IConnection {
		stmtCacheSize: number,
		clientId: string,
		module: string,
		action: string,
		oracleServerVersion: number,
		execute(
		sql: string, binds: Object | Array<any>, options: IExecuteOptions, callback: (err: any, value: IExecuteReturn) => void
	): void,
		execute(
		sql: string, binds: Object | Array<any>, callback: (err: any, value: IExecuteReturn) => void
	): void,
		execute(
		sql: string, options: IExecuteOptions, callback: (err: any, value: IExecuteReturn) => void
	): void,
		execute(sql: string, callback: (err: any, value: IExecuteReturn) => void): void,
		release(callback: (err: any) => void): void,
		commit(callback: (err: any) => void): void,
		rollback(callback: (err: any) => void): void,
		break(callback: (err: any) => void): void
	}

	declare export interface IConnectionPool {
		poolMax: number,
		poolMin: number,
		poolIncrement: number,
		poolTimeout: number,
		connectionsOpen: number,
		connectionsInUse: number,
		stmtCacheSize: number,
		terminate(callback: (err: any) => void): void,
		getConnection(callback: (err: any, connection: IConnection) => void): void
	}

	declare export function newLob(iLob: ILob): Lob

	declare export function getConnection(
		connectionAttributes: IConnectionAttributes, callback: (err: any, connection: IConnection) => void
	): void

	declare export function createPool(
		poolAttributes: IPoolAttributes, callback: (err: any, connection: IConnectionPool) => void
	): void

		
}