

declare module 'websql' {
		declare interface Window {
		
	}

	declare interface WorkerUtils {
		
	}

	declare interface DOMString {
		
	}

	declare interface ObjectArray {
		
	}

	declare interface WindowDatabase {
		openDatabase(
		name: DOMString, version: DOMString, displayName: DOMString, estimatedSize: number, creationCallback?: DatabaseCallback
	): Database
	}

	declare interface WorkerUtilsDatabase {
		openDatabase(
		name: DOMString, version: DOMString, displayName: DOMString, estimatedSize: number, creationCallback?: DatabaseCallback
	): Database,
		openDatabaseSync(
		name: DOMString, version: DOMString, displayName: DOMString, estimatedSize: number, creationCallback?: DatabaseCallback
	): DatabaseSync
	}

	declare interface DatabaseCallback {
		(database: Database): void
	}

	declare interface Database {
		version: DOMString,
		transaction(
		callback: SQLTransactionCallback, errorCallback?: SQLTransactionErrorCallback, successCallback?: SQLVoidCallback
	): void,
		readTransaction(
		callback: SQLTransactionCallback, errorCallback?: SQLTransactionErrorCallback, successCallback?: SQLVoidCallback
	): void,
		changeVersion(
		oldVersion: DOMString, newVersion: DOMString, callback?: SQLTransactionCallback, errorCallback?: SQLTransactionErrorCallback, successCallback?: SQLVoidCallback
	): void
	}

	declare interface SQLVoidCallback {
		(): void
	}

	declare interface SQLTransactionCallback {
		(transaction: SQLTransaction): void
	}

	declare interface SQLTransactionErrorCallback {
		(error: SQLError): void
	}

	declare interface SQLTransaction {
		executeSql(
		sqlStatement: DOMString, arguments?: ObjectArray, callback?: SQLStatementCallback, errorCallback?: SQLStatementErrorCallback
	): void
	}

	declare interface SQLStatementCallback {
		(transaction: SQLTransaction, resultSet: SQLResultSet): void
	}

	declare interface SQLStatementErrorCallback {
		(transaction: SQLTransaction, error: SQLError): boolean
	}

	declare interface DatabaseSync {
		version: DOMString,
		transaction(callback: SQLTransactionSyncCallback): void,
		readTransaction(callback: SQLTransactionSyncCallback): void,
		changeVersion(
		oldVersion: DOMString, newVersion: DOMString, callback: SQLTransactionSyncCallback
	): void
	}

	declare interface SQLTransactionSyncCallback {
		(transaction: SQLTransactionSync): void
	}

	declare interface SQLTransactionSync {
		executeSql(sqlStatement: DOMString, arguments?: ObjectArray): SQLResultSet
	}

	declare interface SQLResultSet {
		insertId: number,
		rowsAffected: number,
		rows: SQLResultSetRowList
	}

	declare interface SQLResultSetRowList {
		length: number,
		item(index: number): any
	}

		declare class SQLError  {
		UNKNOWN_ERR: number;
		DATABASE_ERR: number;
		VERSION_ERR: number;
		TOO_LARGE_ERR: number;
		QUOTA_ERR: number;
		SYNTAX_ERR: number;
		CONSTRAINT_ERR: number;
		TIMEOUT_ERR: number;
		code: number;
		message: DOMString
	}

	declare class SQLException  {
		UNKNOWN_ERR: number;
		DATABASE_ERR: number;
		VERSION_ERR: number;
		TOO_LARGE_ERR: number;
		QUOTA_ERR: number;
		SYNTAX_ERR: number;
		CONSTRAINT_ERR: number;
		TIMEOUT_ERR: number;
		code: number;
		message: DOMString
	}

	
}