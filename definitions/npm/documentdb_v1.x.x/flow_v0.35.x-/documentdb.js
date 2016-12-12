

declare module 'documentdb' {
		declare interface FeedOptions {
		maxItemCount?: number,
		continuation?: string,
		sessionToken?: string
	}

	declare interface RequestOptions {
		preTriggerInclude?: string,
		postTriggerInclude?: string,
		accessCondition?: {
		type: string,
		condition: string
	},
		indexingDirective?: string,
		consistencyLevel?: string,
		sessionToken?: string,
		resourceTokenExpirySeconds?: number,
		disableAutomaticIdGeneration?: boolean
	}

	declare interface SqlParameter {
		name: string,
		value: any
	}

	declare interface SqlQuerySpec {
		query: string,
		parameters: SqlParameter[]
	}

	declare interface QueryError {
		code: number,
		body: string
	}

	declare interface RequestCallback<TResult> {
		(error: QueryError, resource: TResult, responseHeaders: any): void
	}

	declare interface QueryIterator<TResultRow> {
		current(): TResultRow,
		executeNext(
		callback: (error: QueryError, result: TResultRow[], responseHeaders?: any) => void
	): void,
		forEach(
		iteratorFunction: (error: QueryError, element: TResultRow, responseHeaders?: any) => void
	): void,
		hasMoreResults(): boolean,
		nextItem(
		callback: (error: QueryError, item: TResultRow, responseHeaders?: any) => void
	): void,
		reset(): void,
		toArray(
		callback: (error: QueryError, result: TResultRow[], responseHeaders?: any) => void
	): void
	}

	declare interface UniqueId {
		id: string
	}

	declare interface AbstractMeta {
		_self: string,
		_ts: string,
		_rid?: string,
		_etag?: string,
		_attachments?: string
	}

	declare interface NewDocument<TContent> {
		
	}

	declare interface RetrievedDocument<TContent> {
		
	}

	declare interface DatabaseMeta {
		
	}

	declare interface CollectionMeta {
		
	}

	declare interface ProcedureMeta {
		body: string
	}

	declare interface TriggerMeta {
		body: string,
		triggerType: string,
		triggerOperation: string
	}

	declare export interface AuthOptions {
		masterKey?: string,
		resourceTokens?: any,
		permissionFeed?: any[]
	}

	declare export interface Procedure {
		body(...params: any[]): void
	}

	declare export interface Trigger {
		triggerType: string,
		triggerOperation: string,
		body(...params: any[]): void
	}

	declare export interface Collection {
		indexingPolicy?: IndexingPolicy
	}

	declare interface IndexingPath {
		IndexType: string,
		Path: string,
		NumericPrecision: number,
		StringPrecision: number
	}

	declare interface IndexingPolicy {
		automatic: boolean,
		indexingMode: string,
		IncludedPath: IndexingPath[],
		ExcludedPaths: string[]
	}

		declare export class DocumentClient  {
		constructor(urlConnection: string, auth: AuthOptions, connectionPolicy?: any, consistencyLevel?: string): this;
		createDatabase(
		body: UniqueId, options: RequestOptions, callback: RequestCallback<DatabaseMeta>
	): void;
		createCollection(
		databaseLink: string, body: Collection, options: RequestOptions, callback: RequestCallback<CollectionMeta>
	): void;
		createStoredProcedure(
		collectionLink: string, procedure: Procedure, options: RequestOptions, callback: RequestCallback<ProcedureMeta>
	): void;
		createTrigger(
		collectionLink: string, trigger: Trigger, options: RequestOptions, callback: RequestCallback<TriggerMeta>
	): void;
		createDocument<TDocument>(
		collectionSelfLink: string, document: NewDocument<TDocument>, options: RequestOptions, callback: RequestCallback<RetrievedDocument<TDocument>>
	): void;
		executeStoredProcedure<TDocument>(
		procedureLink: string, params: any[], callback: RequestCallback<TDocument>
	): void;
		queryDatabases(query: string | SqlQuerySpec): QueryIterator<DatabaseMeta>;
		queryCollections(
		databaseLink: string, query: string | SqlQuerySpec
	): QueryIterator<CollectionMeta>;
		queryStoredProcedures(
		collectionLink: string, query: string | SqlQuerySpec
	): QueryIterator<ProcedureMeta>;
		queryDocuments<TDocument>(
		collectionLink: string, query: string | SqlQuerySpec, options?: FeedOptions
	): QueryIterator<RetrievedDocument<TDocument>>;
		queryTriggers(
		collectionLink: string, query: string | SqlQuerySpec, options?: FeedOptions
	): QueryIterator<TriggerMeta>;
		deleteDocument(
		documentLink: string, options: RequestOptions, callback: RequestCallback<void>
	): void;
		deleteDatabase(
		databaseLink: string, options: RequestOptions, callback: RequestCallback<void>
	): void;
		deleteCollection(
		collectionLink: string, options: RequestOptions, callback: RequestCallback<void>
	): void;
		deleteStoredProcedure(
		procedureLink: string, options: RequestOptions, callback: RequestCallback<void>
	): void;
		replaceDocument<TDocument>(
		documentLink: string, document: NewDocument<TDocument>, options: RequestOptions, callback: RequestCallback<RetrievedDocument<TDocument>>
	): void;
		replaceStoredProcedure(
		procedureLink: string, procedure: Procedure, options: RequestOptions, callback: RequestCallback<ProcedureMeta>
	): void
	}

	
}