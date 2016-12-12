

declare module 'couchbase' {
		declare interface ClusterConstructorOptions {
		certpath: string
	}

	declare interface CreateBucketOptions {
		name?: string,
		authType?: string,
		bucketType?: string,
		ramQuotaMB?: number,
		replicaNumber?: number
	}

	declare interface ClusterManager {
		createBucket(name: string, callback: Function): void,
		createBucket(name: string, opts: any, callback: Function): void,
		listBuckets(callback: Function): void,
		removeBucket(name: string, callback: Function): void
	}

	declare interface CouchbaseError {
		code: errors
	}

	declare interface AppendOptions {
		cas?: Bucket.CAS,
		persist_to?: number,
		replicate_to?: number
	}

	declare interface PrependOptions {
		
	}

	declare interface RemoveOptions {
		
	}

	declare interface ReplaceOptions {
		expiry?: number
	}

	declare interface UpsertOptions {
		
	}

	declare interface TouchOptions {
		persist_to?: number,
		replicate_to?: number
	}

	declare interface CounterOptions {
		initial?: number,
		expiry?: number,
		persist_to?: number,
		replicate_to?: number
	}

	declare interface GetAndLockOptions {
		lockTime?: number
	}

	declare interface GetReplicaOptions {
		index?: number
	}

	declare interface InsertOptions {
		expiry?: number,
		persist_to?: number,
		replicate_to?: number
	}

	declare interface BucketManager {
		flush(callback: Function): void,
		getDesignDocument(name: string, callback: Function): void,
		getDesignDocuments(callback: Function): void,
		insertDesignDocument(name: string, data: any, callback: Function): void,
		removeDesignDocument(name: string, callback: Function): void,
		upsertDesignDocument(name: string, data: any, callback: Function): void
	}

	declare interface Bucket {
		clientVersion: string,
		configThrottle: number,
		connectionTimeout: number,
		durabilityInterval: number,
		durabilityTimeout: number,
		lcbVersion: string,
		managementTimeout: number,
		nodeConnectionTimeout: number,
		operationTimeout: number,
		viewTimeout: number,
		append(key: any | Buffer, fragment: any, callback: Bucket.OpCallback): void,
		append(
		key: any | Buffer, fragment: any, options: AppendOptions, callback: Bucket.OpCallback
	): void,
		counter(key: any | Buffer, delta: number, callback: Bucket.OpCallback): void,
		counter(
		key: any | Buffer, delta: number, options: CounterOptions, callback: Bucket.OpCallback
	): void,
		disconnect(): void,
		enableN1ql(hosts: string | string[]): void,
		get(key: any | Buffer, callback: Bucket.OpCallback): void,
		get(key: any | Buffer, options: any, callback: Bucket.OpCallback): void,
		getAndLock(key: any, callback: Bucket.OpCallback): void,
		getAndLock(key: any, options: GetAndLockOptions, callback: Bucket.OpCallback): void,
		getAndTouch(
		key: any | Buffer, expiry: number, options: any, callback: Bucket.OpCallback
	): void,
		getAndTouch(key: any | Buffer, expiry: number, callback: Bucket.OpCallback): void,
		getMulti(key: any[] | Buffer[], callback: Bucket.MultiGetCallback): void,
		getReplica(key: any | Buffer, callback: Bucket.OpCallback): void,
		getReplica(
		key: any | Buffer, options: GetReplicaOptions, callback: Bucket.OpCallback
	): void,
		insert(key: any | Buffer, value: any, callback: Bucket.OpCallback): void,
		insert(
		key: any | Buffer, value: any, options: InsertOptions, callback: Bucket.OpCallback
	): void,
		manager(): BucketManager,
		prepend(key: any, fragment: any, callback: Bucket.OpCallback): void,
		prepend(
		key: any, fragment: any, options: PrependOptions, callback: Bucket.OpCallback
	): void,
		query(
		query: ViewQuery | N1qlQuery, callback: Bucket.QueryCallback
	): Bucket.ViewQueryResponse | Bucket.N1qlQueryResponse,
		query(
		query: ViewQuery | N1qlQuery, params: Object | Array<any>, callback: Bucket.QueryCallback
	): Bucket.ViewQueryResponse | Bucket.N1qlQueryResponse,
		remove(key: any | Buffer, callback: Bucket.OpCallback): void,
		remove(key: any | Buffer, options: RemoveOptions, callback: Bucket.OpCallback): void,
		replace(key: any | Buffer, value: any, callback: Bucket.OpCallback): void,
		replace(
		key: any | Buffer, value: any, options: ReplaceOptions, callback: Bucket.OpCallback
	): void,
		setTranscoder(encoder: Bucket.EncoderFunction, decoder: Bucket.DecoderFunction): void,
		touch(
		key: any | Buffer, expiry: number, options: TouchOptions, callback: Bucket.OpCallback
	): void,
		unlock(key: any | Buffer, cas: Bucket.CAS, callback: Bucket.OpCallback): void,
		unlock(
		key: any | Buffer, cas: Bucket.CAS, options: any, callback: Bucket.OpCallback
	): void,
		upsert(key: any | Buffer, value: any, callback: Bucket.OpCallback): void,
		upsert(
		key: any | Buffer, value: any, options: UpsertOptions, callback: Bucket.OpCallback
	): void
	}

		declare class Cluster  {
		constructor(cnstr?: string, options?: ClusterConstructorOptions): this;
		manager(): ClusterManager;
		manager(username: string, password: string): ClusterManager;
		openBucket(name?: string): Bucket;
		openBucket(name?: string, password?: string): Bucket;
		openBucket(name?: string, callback?: Function): Bucket;
		openBucket(name?: string, password?: string, callback?: Function): Bucket
	}

	declare class ViewQuery  {
		from(ddoc: string, name: string): ViewQuery;
		from(ddoc: string, name: string): ViewQuery;
		custom(opts: any): ViewQuery;
		full_set(full_set: boolean): ViewQuery;
		group(group: boolean): ViewQuery;
		group_level(group_level: number): ViewQuery;
		id_range(start: any, end: any): ViewQuery;
		include_docs(include_docs: boolean): ViewQuery;
		key(key: any): ViewQuery;
		keys(key: any[]): ViewQuery;
		limit(limit: number): ViewQuery;
		on_error(mode: ViewQuery.ErrorMode): ViewQuery;
		order(order: ViewQuery.Order): ViewQuery;
		range(start: any | any[], end: any | any[], inclusive_end?: boolean): ViewQuery;
		reduce(reduce: boolean): ViewQuery;
		skip(skip: number): ViewQuery;
		stale(stale: ViewQuery.Update): ViewQuery
	}

	declare class N1qlQuery  {
		fromString(str: string): N1qlStringQuery;
		toString(): string
	}

	declare class N1qlStringQuery extends N1qlQuery {
		adhoc(adhoc: boolean): N1qlStringQuery;
		consistency(val: N1qlQuery.Consistency): N1qlStringQuery;
		toObject(): any;
		toString(): string
	}

	declare class SpatialQuery  {
		from(ddoc: string, name: string): SpatialQuery;
		from(ddoc: string, name: string): SpatialQuery;
		bbox(bbox: number[]): SpatialQuery;
		custom(opts: any): SpatialQuery;
		limit(limit: number): SpatialQuery;
		skip(skip: number): SpatialQuery;
		stale(stale: SpatialQuery.Update): SpatialQuery
	}

	
}

declare module 'Bucket' {
		declare interface QueryCallback {
		(error: CouchbaseError, rows: any[], meta: Bucket.ViewQueryResponse.Meta): void
	}

	declare interface OpCallback {
		(error: CouchbaseError | number, result: any): void
	}

	declare interface MultiGetCallback {
		(error: number, results: any[]): void
	}

	declare interface EncoderFunction {
		(value: any): Bucket.TranscoderDoc
	}

	declare interface DecoderFunction {
		(doc: Bucket.TranscoderDoc): any
	}

	declare interface CAS {
		
	}

	declare interface N1qlQueryResponse {
		
	}

	declare interface ViewQueryResponse {
		
	}

		declare class TranscoderDoc  {
		value: Buffer;
		flags: number
	}

	
}

declare module 'N1qlQueryResponse' {
		declare interface Meta {
		requestID: number
	}

			
}

declare module 'ViewQueryResponse' {
		declare interface Meta {
		total_rows: number
	}

			
}