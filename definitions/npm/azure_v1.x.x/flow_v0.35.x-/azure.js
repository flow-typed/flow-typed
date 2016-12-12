

declare module 'azure' {
		declare interface RoleEnvironmentInterface {
		incorrectCallbackErr: string,
		clientId: string,
		VersionEndpointFixedPath: string,
		EnvironmentVariables: {
		[key: string]: string,
		VersionEndpointEnvironmentName: string
	},
		getCurrentRoleInstance(callback: SimpleCallback<RoleInstance>): void,
		getDeploymentId(callback: SimpleCallback<string>): void,
		isAvailable(callback: SimpleCallback<boolean>): void,
		isEmulated(callback: SimpleCallback<boolean>): void,
		getRoles(callback: SimpleCallback<Dictionary<Role>>): void,
		getConfigurationSettings(callback: SimpleCallback<Dictionary<string>>): void,
		getLocalResources(callback: SimpleCallback<Dictionary<RoleLocalResource>>): void,
		requestRecycle(callback: ErrorCallback): void,
		setStatus(roleInstanceStatus: string, expirationUtc: Date, callback: ErrorCallback): void,
		clearStatus(callback: ErrorCallback): void
	}

	declare export interface Filter {
		handle(requestOptions: any, next: Function): void
	}

	declare export interface WebResponse {
		isSuccessful: boolean,
		statusCode: number,
		body: {
		entry: {
		id: string,
		title: any,
		updated: string,
		author: {
		name: any
	},
		link: any,
		category: any,
		content: any
	}
	},
		headers: any,
		md5: any
	}

	declare export interface SimpleCallback<T> {
		(error: Error, result: T): void
	}

	declare export interface ErrorCallback {
		(error: Error): void
	}

	declare export interface StorageCallbackVoid {
		(err: Error, response: WebResponse): void
	}

	declare export interface StorageCallback<T> {
		(err: Error, result: T, response: WebResponse): void
	}

	declare export interface StorageServiceStatsCallback {
		
	}

	declare export interface StorageServicePropertiesCallback {
		
	}

	declare export interface TimeoutIntervalOptions {
		locationMode?: string,
		timeoutIntervalInMs?: number,
		maximumExecutionTimeInMs?: number
	}

	declare export interface MetadataOptions {
		metadata?: StorageMetadata
	}

	declare export interface StorageAclOptions {
		leaseId?: string,
		signedIdentifiers: SignedIdentifier[]
	}

	declare export interface Dictionary<T> {
		[key: string]: T
	}

	declare export interface StorageServiceProperties {
		Logging: {
		Version: number,
		Delete: boolean,
		Read: boolean,
		Write: boolean,
		RetentionPolicy: {
		Enabled: boolean,
		Days: number
	}
	},
		Metrics: {
		Version: number,
		Enabled: boolean,
		IncludeAPIs: boolean,
		RetentionPolicy: {
		Enabled: boolean,
		Days: number
	}
	},
		DefaultServiceVersion: string
	}

	declare export interface StorageServiceStats {
		GeoReplication: {
		Status: string,
		LastSyncTime: Date
	}
	}

	declare export interface SignedIdentifier {
		Id: string,
		AccessPolicy: SharedAccessPolicy
	}

	declare export interface StorageMetadata {
		[key: string]: string
	}

	declare export interface ContinuationToken {
		nextMarker: string,
		targetLocation: string
	}

	declare export interface SharedAccessPolicy {
		Id?: string,
		AccessPolicy: {
		Start?: Date,
		Expiry: Date,
		Permission?: string
	}
	}

	declare export interface TableRequestCallback {
		(error: Error, tableResult: {
		TableName: string
	}, response: WebResponse): void
	}

	declare export interface CreateTableIfNotExistsCallback {
		(error: Error, created: boolean, response: WebResponse): void
	}

	declare export interface DeleteTableCallback {
		(error: Error, successful: boolean, response: WebResponse): void
	}

	declare export interface QueryTablesCallback {
		(error: Error, queryTablesResult: TableResult[], resultsContinuation: QueryResultContinuation, response: WebResponse): void
	}

	declare export interface QueryResultContinuation {
		tableService: TableService
	}

	declare export interface QueryTablesOptions {
		nextTableName?: string
	}

	declare export interface TableResult {
		TableName: string
	}

	declare export interface QueryEntityCallback {
		(error: Error, entity: Entity, response: WebResponse): void
	}

	declare export interface QueryEntitiesCallback {
		(error: Error, entities: Entity[], resultContinuation: QueryEntitiesResultContinuation, response: WebResponse): void
	}

	declare export interface QueryEntitiesResultContinuation {
		tableQuery: TableQuery,
		nextPartitionKey: string,
		nextRowKey: string,
		getNextPage(callback?: QueryEntitiesCallback): void,
		hasNextPage(): boolean
	}

	declare export interface ModifyEntityCallback {
		(error: Error, entity: Entity, response: WebResponse): void
	}

	declare export interface DeleteEntityCallback {
		(error: Error, successful: boolean, response: WebResponse): void
	}

	declare export interface UpdateEntityOptions {
		checkEtag?: boolean
	}

	declare export interface Entity {
		PartitionKey: string,
		RowKey: string,
		Timestamp?: Date,
		etag?: string,
		[property: string]: string | number | boolean | Date
	}

	declare export interface LeaseIdOptions {
		leaseId?: string
	}

	declare export interface AccessConditionsOptions {
		accessConditions?: StorageAccessCondition
	}

	declare export interface LeaseAccessConditionsOptions {
		accessConditions?: StorageAccessCondition
	}

	declare export interface ListContainersOptions {
		prefix?: string,
		maxresults?: number,
		marker: string,
		include?: string
	}

	declare export interface ListContainersCallback {
		(err: Error, containers: ContainerResult[], continuationToken: ContinuationToken, response: WebResponse): void
	}

	declare export interface CreateContainerOptions {
		metadata?: StorageMetadata,
		publicAccessLevel?: string
	}

	declare export interface GetContainerPropertiesOptions {
		leaseId?: string
	}

	declare export interface GetContainerMetadataOptions {
		accessConditions?: StorageAccessCondition
	}

	declare export interface ListBlobsOptions {
		prefix?: string,
		delimiter?: string
	}

	declare export interface ListBlobsCallback {
		(err: Error, blobs: BlobResult[], continuationToken: ContinuationToken, response: WebResponse): void
	}

	declare export interface GetBlobPropertiesOptions {
		snapshotId?: string
	}

	declare export interface SetBlobPropertiesOptions {
		contentType?: string,
		contentEncoding?: string,
		contentLanguage?: string,
		contentMD5?: string,
		cacheControl?: string,
		contentDisposition?: string
	}

	declare export interface ReadBlobOptions {
		rangeStart?: string,
		rangeEnd?: string,
		useTransactionalMD5?: boolean,
		disableContentMD5Validation?: boolean
	}

	declare export interface GetBlobToTextCallback {
		(err: Error, text: string, result: BlobResult, response: WebResponse): void
	}

	declare export interface DeleteBlobOptions {
		deleteSnapshots?: string
	}

	declare export interface BlobSnapshotOptions {
		metadata?: StorageMetadata
	}

	declare export interface CopyBlobOptions {
		sourceLeaseId?: string,
		sourceAccessConditions: StorageAccessCondition
	}

	declare export interface UploadBlobOptions {
		metadata?: StorageMetadata,
		speedSummary?: SpeedSummary,
		parallelOperationThreadCount?: number,
		storeBlobContentMD5?: boolean,
		useTransactionalMD5?: boolean
	}

	declare export interface CreatePagesOptions {
		contentMD5?: string,
		useTransactionalMD5?: boolean
	}

	declare export interface PageRangeOptions {
		snapshotId?: string,
		rangeStart?: number,
		rangeEnd?: number
	}

	declare export interface UploadBlockBlobOptions {
		blockIdPrefix?: string
	}

	declare export interface CreateBlockOptions {
		contentMD5?: string,
		useTransactionalMD5?: boolean
	}

	declare export interface LeaseOptions {
		leaseDuration?: string,
		proposedLeaseId?: string
	}

	declare export interface BreakLeaseOptions {
		leaseBreakPeriod?: number
	}

	declare export interface SharedAccessSignatureResult {
		baseUrl: string,
		path: string,
		queryString: {
		se: string,
		sp: string,
		sr: string,
		sv: string,
		sig: string
	},
		url: () => string
	}

	declare export interface BlobHeaders {
		cacheControl?: string,
		contentType?: string,
		contentEncoding?: string,
		contentLanguage?: string,
		contentDisposition?: string
	}

	declare export interface PageRange {
		start: number,
		end: number
	}

	declare export interface BlockList {
		LatestBlocks: string[],
		CommittedBlocks: string[],
		UncommittedBlocks: string[]
	}

	declare export interface StorageAccessCondition {
		If-Modified-Since: Date,
		If-Unmodified-Since: Date,
		If-Match: string,
		If-None-Match: string
	}

	declare export interface ListQueuesOptions {
		prefix?: string,
		maxresults?: number,
		marker: string,
		include?: string
	}

	declare export interface ListQueuesCallback {
		(err: Error, queues: QueueResult[], continuationToken: ContinuationToken, response: WebResponse): void
	}

	declare export interface CreateQueueMessageOptions {
		messagettl?: number,
		visibilitytimeout?: number
	}

	declare export interface PeekQueueMessagesOptions {
		numofmessages?: number
	}

	declare export interface GetQueueMessagesOptions {
		peekonly?: boolean,
		visibilitytimeout?: number
	}

	declare export interface UpdateQueueMessagesOptions {
		messagetext?: string
	}

	declare export interface Role {
		name: string,
		instances: {
		[instanceId: string]: RoleInstance
	}
	}

	declare export interface RoleInstance {
		id: string,
		faultDomain: string,
		updateDomain: string,
		endpoints: {
		[endpoint: string]: RoleInstanceEndpoint
	}
	}

	declare export interface RoleInstanceEndpoint {
		protocol: string,
		address: string,
		port: number
	}

	declare export interface RoleLocalResource {
		name: string,
		path: string,
		maximumSizeInMegabytes: number
	}

	declare export interface ConnectionStringParseOptions {
		skipLowerCase: boolean
	}

	declare export interface ClusterCreationOptions {
		name: string,
		location: string,
		defaultStorageAccountName: string,
		defaultStorageAccountKey: string,
		defaultStorageContainer: string,
		user: string,
		password: string,
		nodes: number,
		additionalStorageAccounts?: {
		name: string,
		key: string
	}[],
		oozieMetastore?: {
		server: string,
		database: string,
		user: string,
		password: string
	},
		hiveMetastore?: {
		server: string,
		database: string,
		user: string,
		password: string
	}
	}

	declare export interface Requirement {
		SettingName: string,
		SettingPredicate: Function
	}

	declare export interface ValidatorFunction {
		(userSettings: Dictionary<any>): any
	}

	declare export function createTableService(): TableService

	declare export function createTableService(connectionString: string): TableService

	declare export function createTableService(
		storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string
	): TableService

	declare export function createBlobService(): BlobService

	declare export function createBlobService(connectionString: string): BlobService

	declare export function createBlobService(
		storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string
	): BlobService

	declare export function createQueueService(): QueueService

	declare export function createQueueService(connectionString: string): QueueService

	declare export function createQueueService(
		storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string
	): QueueService

	declare export function createServiceBusService(): ServiceBusService

	declare export function createServiceBusService(connectionString: string): ServiceBusService

	declare export function createServiceBusService(
		namespace: string, accessKey?: string, issuer?: string, acsNamespace?: string, host?: string, authenticationProvider?: string
	): ServiceBusService

	declare export function createSqlService(
		serverName: string, administratorLogin: string, administratorLoginPassword: string, host?: string, acsHost?: string, authenticationProvider?: string
	): SqlService

	declare export function createServiceManagementService(
		subscriptionId: string, authentication: string, hostOptions: string
	): ServiceManagementService

	declare export function createSqlManagementService(
		subscriptionId: string, authentication: string, hostOptions: string
	): SqlManagementService

	declare export function isEmulated(): boolean

	declare export class TableService extends BatchServiceClient {
		incorrectTableNameErr: string;
		incorrectCallbackErr: string;
		incorrectTableQuery: string;
		incorrectPartitionErr: string;
		constructor(): this;
		constructor(connectionString: string): this;
		constructor(storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string): this;
		getServiceProperties(callback: StorageServicePropertiesCallback): void;
		getServiceProperties(
		options: TimeoutIntervalOptions, callback: StorageServicePropertiesCallback
	): void;
		setServiceProperties(
		serviceProperties: StorageServiceProperties, callback: StorageCallbackVoid
	): void;
		setServiceProperties(
		serviceProperties: StorageServiceProperties, options: TimeoutIntervalOptions, callback: StorageCallbackVoid
	): void;
		getTable(table: string, callback?: TableRequestCallback): void;
		getTable(
		table: string, options: TimeoutIntervalOptions, callback?: TableRequestCallback
	): void;
		createTable(table: string, callback?: TableRequestCallback): void;
		createTable(
		table: string, options: TimeoutIntervalOptions, callback?: TableRequestCallback
	): void;
		createTableIfNotExists(table: string, callback?: CreateTableIfNotExistsCallback): void;
		createTableIfNotExists(
		table: string, options: TimeoutIntervalOptions, callback?: CreateTableIfNotExistsCallback
	): void;
		deleteTable(table: string, callback?: DeleteTableCallback): void;
		deleteTable(
		table: string, options: TimeoutIntervalOptions, callback?: DeleteTableCallback
	): void;
		queryTables(callback?: QueryTablesCallback): void;
		queryTables(options: QueryTablesOptions, callback?: QueryTablesCallback): void;
		queryEntity(
		table: string, partitionKey: string, rowKey: string, callback?: QueryEntityCallback
	): void;
		queryEntity(
		table: string, partitionKey: string, rowKey: string, options: TimeoutIntervalOptions, callback?: QueryEntityCallback
	): void;
		queryEntities(tableQuery: TableQuery, callback?: QueryEntitiesCallback): void;
		queryEntities(
		tableQuery: TableQuery, options: TimeoutIntervalOptions, callback?: QueryEntitiesCallback
	): void;
		insertEntity(
		tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback
	): void;
		insertEntity(
		tableName: string, entityDescriptor: Entity, options: TimeoutIntervalOptions, callback?: ModifyEntityCallback
	): void;
		insertOrReplaceEntity(
		tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback
	): void;
		insertOrReplaceEntity(
		tableName: string, entityDescriptor: Entity, options: TimeoutIntervalOptions, callback?: ModifyEntityCallback
	): void;
		updateEntity(
		tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback
	): void;
		updateEntity(
		tableName: string, entityDescriptor: Entity, options: UpdateEntityOptions, callback?: ModifyEntityCallback
	): void;
		mergeEntity(
		tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback
	): void;
		mergeEntity(
		tableName: string, entityDescriptor: Entity, options: UpdateEntityOptions, callback?: ModifyEntityCallback
	): void;
		insertOrMergeEntity(
		tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback
	): void;
		insertOrMergeEntity(
		tableName: string, entityDescriptor: Entity, options: UpdateEntityOptions, callback?: ModifyEntityCallback
	): void;
		deleteEntity(
		tableName: string, entityDescriptor: Entity, callback?: DeleteEntityCallback
	): void;
		deleteEntity(
		tableName: string, entityDescriptor: Entity, options: UpdateEntityOptions, callback?: DeleteEntityCallback
	): void
	}

	declare export class BlobService extends StorageServiceClient {
		singleBlobPutThresholdInBytes: number;
		parallelOperationThreadCount: number;
		SpeedSummary: typeof SpeedSummary;
		constructor(): this;
		constructor(connectionString: string): this;
		constructor(storageAccount: string, storageAccessKey: string, host?: string, sasToken?: string): this;
		getServiceProperties(callback: StorageServicePropertiesCallback): void;
		getServiceProperties(
		options: TimeoutIntervalOptions, callback: StorageServicePropertiesCallback
	): void;
		setServiceProperties(
		serviceProperties: StorageServiceProperties, callback: StorageCallbackVoid
	): void;
		setServiceProperties(
		serviceProperties: StorageServiceProperties, options: TimeoutIntervalOptions, callback: StorageCallbackVoid
	): void;
		listContainers(callback: ListContainersCallback): void;
		listContainers(options: ListContainersOptions, callback: ListContainersCallback): void;
		createContainer(container: string, callback: StorageCallback<ContainerResult>): void;
		createContainer(
		container: string, options: CreateContainerOptions, callback: StorageCallback<ContainerResult>
	): void;
		createContainerIfNotExists(container: string, callback: StorageCallback<boolean>): void;
		createContainerIfNotExists(
		container: string, options: CreateContainerOptions, callback: StorageCallback<boolean>
	): void;
		getContainerProperties(container: string, callback: StorageCallback<ContainerResult>): void;
		getContainerProperties(
		container: string, options: GetContainerPropertiesOptions, callback: StorageCallback<ContainerResult>
	): void;
		getContainerMetadata(container: string, callback: StorageCallback<ContainerResult>): void;
		getContainerMetadata(
		container: string, options: GetContainerPropertiesOptions, callback: StorageCallback<ContainerResult>
	): void;
		setContainerMetadata(
		container: string, metadata: StorageMetadata, callback: StorageCallback<ContainerResult>
	): void;
		setContainerMetadata(
		container: string, metadata: StorageMetadata, options: AccessConditionsOptions, callback: StorageCallback<ContainerResult>
	): void;
		getContainerAcl(container: string, callback: StorageCallback<ContainerResult>): void;
		getContainerAcl(
		container: string, options: GetContainerPropertiesOptions, callback: StorageCallback<ContainerResult>
	): void;
		setContainerAcl(
		container: string, publicAccessLevel: string, callback: StorageCallback<ContainerResult>
	): void;
		setContainerAcl(
		container: string, publicAccessLevel: string, options: StorageAclOptions, callback: StorageCallback<ContainerResult>
	): void;
		deleteContainer(container: string, callback: StorageCallbackVoid): void;
		deleteContainer(
		container: string, options: LeaseIdOptions, callback: StorageCallbackVoid
	): void;
		listBlobs(container: string, callback: ListBlobsCallback): void;
		listBlobs(
		container: string, options: ListBlobsOptions, callback: ListBlobsCallback
	): void;
		getBlobProperties(container: string, blob: string, callback: StorageCallback<BlobResult>): void;
		getBlobProperties(
		container: string, blob: string, options: GetBlobPropertiesOptions, callback: StorageCallback<BlobResult>
	): void;
		setBlobProperties(container: string, blob: string, callback: StorageCallback<BlobResult>): void;
		setBlobProperties(
		container: string, blob: string, options: SetBlobPropertiesOptions, callback: StorageCallback<BlobResult>
	): void;
		setBlobMetadata(
		container: string, blob: string, metadata: StorageMetadata, callback: StorageCallback<BlobResult>
	): void;
		setBlobMetadata(
		container: string, blob: string, metadata: StorageMetadata, options: GetBlobPropertiesOptions, callback: StorageCallback<BlobResult>
	): void;
		getBlob(
		container: string, blob: string, callback: StorageCallback<BlobResult>
	): stream.Readable;
		getBlob(
		container: string, blob: string, options: ReadBlobOptions, callback: StorageCallback<BlobResult>
	): stream.Readable;
		getBlobToFile(
		container: string, blob: string, localFileName: string, callback: StorageCallback<BlobResult>
	): void;
		getBlobToFile(
		container: string, blob: string, localFileName: string, options: ReadBlobOptions, callback: StorageCallback<BlobResult>
	): void;
		getBlobToStream(
		container: string, blob: string, stream: stream.Writable, callback: StorageCallback<BlobResult>
	): void;
		getBlobToStream(
		container: string, blob: string, stream: stream.Writable, options: ReadBlobOptions, callback: StorageCallback<BlobResult>
	): void;
		getBlobToText(container: string, blob: string, callback: GetBlobToTextCallback): void;
		getBlobToText(
		container: string, blob: string, options: ReadBlobOptions, callback: GetBlobToTextCallback
	): void;
		deleteBlob(container: string, blob: string, callback: StorageCallback<boolean>): void;
		deleteBlob(
		container: string, blob: string, options: DeleteBlobOptions, callback: StorageCallback<boolean>
	): void;
		createBlobSnapshot(container: string, blob: string, callback: StorageCallback<string>): void;
		createBlobSnapshot(
		container: string, blob: string, options: BlobSnapshotOptions, callback: StorageCallback<string>
	): void;
		copyBlob(
		sourceUri: string, targetContainer: string, targetBlob: string, callback: StorageCallback<BlobResult>
	): void;
		copyBlob(
		sourceUri: string, targetContainer: string, targetBlob: string, options: CopyBlobOptions, callback: StorageCallback<BlobResult>
	): void;
		abortCopyBlob(
		container: string, blob: string, copyId: string, callback: StorageCallbackVoid
	): void;
		abortCopyBlob(
		container: string, blob: string, copyId: string, options: LeaseIdOptions, callback: StorageCallbackVoid
	): void;
		generateSharedAccessSignature(
		container: string, blob: string, sharedAccessPolicy: SharedAccessPolicy
	): SharedAccessSignatureResult;
		getBlobUrl(container: string): string;
		getBlobUrl(container: string, blob: string): string;
		getBlobUrl(
		container: string, blob: string, sharedAccessPolicy: SharedAccessPolicy
	): string;
		createBlob(
		container: string, blob: string, blobType: string, callback: StorageCallback<string>
	): stream.Writable;
		createBlob(
		container: string, blob: string, blobType: string, options: UploadBlockBlobOptions, callback: StorageCallback<string>
	): stream.Writable;
		createPageBlob(
		container: string, blob: string, length: number, callback: StorageCallbackVoid
	): void;
		createPageBlob(
		container: string, blob: string, length: number, options: SetBlobPropertiesOptions, callback: StorageCallbackVoid
	): void;
		createBlobPagesFromStream(
		container: string, blob: string, readStream: stream.Readable, rangeStart: number, rangeEnd: number, callback: StorageCallback<BlobResult>
	): void;
		createBlobPagesFromStream(
		container: string, blob: string, readStream: stream.Readable, rangeStart: number, rangeEnd: number, options: CreatePagesOptions, callback: StorageCallback<BlobResult>
	): void;
		createBlobPagesFromText(
		container: string, blob: string, text: string, rangeStart: number, rangeEnd: number, callback: StorageCallback<BlobResult>
	): void;
		createBlobPagesFromText(
		container: string, blob: string, text: string, rangeStart: number, rangeEnd: number, options: CreatePagesOptions, callback: StorageCallback<BlobResult>
	): void;
		listBlobRegions(container: string, blob: string, callback: StorageCallback<PageRange[]>): void;
		listBlobRegions(
		container: string, blob: string, options: PageRangeOptions, callback: StorageCallback<PageRange[]>
	): void;
		clearBlobPages(
		container: string, blob: string, rangeStart: number, rangeEnd: number, callback: StorageCallbackVoid
	): void;
		clearBlobPages(
		container: string, blob: string, rangeStart: number, rangeEnd: number, options: LeaseAccessConditionsOptions, callback: StorageCallbackVoid
	): void;
		resizePageBlob(
		container: string, blob: string, size: number, callback: StorageCallback<BlobResult>
	): void;
		resizePageBlob(
		container: string, blob: string, size: number, options: LeaseAccessConditionsOptions, callback: StorageCallback<BlobResult>
	): void;
		setPageBlobSequenceNumber(
		container: string, blob: string, sequenceNumberAction: string, sequenceNumber: string, callback: StorageCallback<BlobResult>
	): void;
		setPageBlobSequenceNumber(
		container: string, blob: string, sequenceNumberAction: string, sequenceNumber: string, options: AccessConditionsOptions, callback: StorageCallback<BlobResult>
	): void;
		putBlockBlobFromFile(
		container: string, blob: string, localFileName: string, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		putBlockBlobFromFile(
		container: string, blob: string, localFileName: string, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		createBlockBlobFromFile(
		container: string, blob: string, localFileName: string, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		createBlockBlobFromFile(
		container: string, blob: string, localFileName: string, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		putBlockBlobFromStream(
		container: string, blob: string, stream: stream.Stream, streamLength: number, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		putBlockBlobFromStream(
		container: string, blob: string, stream: stream.Stream, streamLength: number, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		createBlockBlobFromStream(
		container: string, blob: string, stream: stream.Stream, streamLength: number, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		createBlockBlobFromStream(
		container: string, blob: string, stream: stream.Stream, streamLength: number, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		createBlockBlobFromText(
		container: string, blob: string, text: string, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		createBlockBlobFromText(
		container: string, blob: string, text: string, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>
	): SpeedSummary;
		createBlobBlockFromStream(
		blockId: string, container: string, blob: string, readStream: stream.Stream, streamLength: number, callback: StorageCallbackVoid
	): void;
		createBlobBlockFromStream(
		blockId: string, container: string, blob: string, readStream: stream.Stream, streamLength: number, options: CreateBlockOptions, callback: StorageCallbackVoid
	): void;
		createBlobBlockFromText(
		blockId: string, container: string, blob: string, text: string, callback: StorageCallbackVoid
	): void;
		createBlobBlockFromText(
		blockId: string, container: string, blob: string, text: string, options: CreateBlockOptions, callback: StorageCallbackVoid
	): void;
		commitBlobBlocks(
		container: string, blob: string, blockList: BlockList, callback: StorageCallback<BlockList>
	): void;
		commitBlobBlocks(
		container: string, blob: string, blockList: BlockList, options: CreateBlockOptions, callback: StorageCallback<BlockList>
	): void;
		listBlobBlocks(
		container: string, blob: string, blockListType: string, callback: StorageCallback<BlockList>
	): void;
		listBlobBlocks(
		container: string, blob: string, blockListType: string, options: GetBlobPropertiesOptions, callback: StorageCallback<BlockList>
	): void;
		generateBlockIdPrefix(): string;
		getBlockId(prefix: string, number: number): string;
		acquireLease(container: string, blob: string, callback: StorageCallback<LeaseResult>): void;
		acquireLease(
		container: string, blob: string, options: LeaseOptions, callback: StorageCallback<LeaseResult>
	): void;
		renewLease(
		container: string, blob: string, leaseId: string, callback: StorageCallback<LeaseResult>
	): void;
		renewLease(
		container: string, blob: string, leaseId: string, options: AccessConditionsOptions, callback: StorageCallback<LeaseResult>
	): void;
		releaseLease(
		container: string, blob: string, leaseId: string, callback: StorageCallback<LeaseResult>
	): void;
		releaseLease(
		container: string, blob: string, leaseId: string, options: AccessConditionsOptions, callback: StorageCallback<LeaseResult>
	): void;
		breakLease(
		container: string, blob: string, leaseId: string, callback: StorageCallback<LeaseResult>
	): void;
		breakLease(
		container: string, blob: string, leaseId: string, options: BreakLeaseOptions, callback: StorageCallback<LeaseResult>
	): void
	}

	declare export class QueueService extends StorageServiceClient {
		authenticationProvider: SharedKey;
		constructor(): this;
		constructor(connectionString: string): this;
		constructor(storageAccount: string, storageAccessKey: string, host?: string, sasToken?: string): this;
		getServiceProperties(callback: StorageServicePropertiesCallback): void;
		getServiceProperties(
		options: TimeoutIntervalOptions, callback: StorageServicePropertiesCallback
	): void;
		setServiceProperties(
		serviceProperties: StorageServiceProperties, callback: StorageCallbackVoid
	): void;
		setServiceProperties(
		serviceProperties: StorageServiceProperties, options: TimeoutIntervalOptions, callback: StorageCallbackVoid
	): void;
		listQueues(callback: ListQueuesCallback): void;
		listQueues(options: ListQueuesOptions, callback: ListQueuesCallback): void;
		createQueue(queue: string, callback: StorageCallback<QueueResult>): void;
		createQueue(
		queue: string, options: MetadataOptions, callback: StorageCallback<QueueResult>
	): void;
		createQueueIfNotExists(queue: string, callback: StorageCallback<boolean>): void;
		createQueueIfNotExists(
		queue: string, options: MetadataOptions, callback: StorageCallback<boolean>
	): void;
		deleteQueue(queue: string, callback: StorageCallback<boolean>): void;
		deleteQueue(
		queue: string, options: TimeoutIntervalOptions, callback: StorageCallback<boolean>
	): void;
		getQueueMetadata(queue: string, callback: StorageCallback<QueueResult>): void;
		getQueueMetadata(
		queue: string, options: TimeoutIntervalOptions, callback: StorageCallback<QueueResult>
	): void;
		setQueueMetadata(
		queue: string, metadata: StorageMetadata, callback: StorageCallback<QueueResult>
	): void;
		setQueueMetadata(
		queue: string, metadata: StorageMetadata, options: TimeoutIntervalOptions, callback: StorageCallback<QueueResult>
	): void;
		createMessage(
		queue: string, messageText: string, callback: StorageCallback<QueueMessageResult>
	): void;
		createMessage(
		queue: string, messageText: string, options: CreateQueueMessageOptions, callback: StorageCallback<QueueMessageResult>
	): void;
		getMessages(queue: string, callback: StorageCallback<QueueMessageResult[]>): void;
		getMessages(
		queue: string, options: GetQueueMessagesOptions, callback: StorageCallback<QueueMessageResult[]>
	): void;
		peekMessages(queue: string, callback: StorageCallback<QueueMessageResult[]>): void;
		peekMessages(
		queue: string, options: PeekQueueMessagesOptions, callback: StorageCallback<QueueMessageResult[]>
	): void;
		deleteMessage(
		queue: string, messageId: string, popreceipt: string, callback: StorageCallback<boolean>
	): void;
		deleteMessage(
		queue: string, messageId: string, popreceipt: string, options: TimeoutIntervalOptions, callback: StorageCallback<boolean>
	): void;
		clearMessages(queue: string, callback: StorageCallbackVoid): void;
		clearMessages(
		queue: string, options: TimeoutIntervalOptions, callback: StorageCallbackVoid
	): void;
		updateMessage(
		queue: string, messageId: string, popreceipt: string, visibilitytimeout: number, callback: StorageCallback<QueueMessageResult>
	): void;
		updateMessage(
		queue: string, messageId: string, popreceipt: string, visibilitytimeout: number, options: UpdateQueueMessagesOptions, callback: StorageCallback<QueueMessageResult>
	): void
	}

	declare export class ServiceBusService  {
		
	}

	declare export class SqlService  {
		
	}

	declare export class ServiceManagementService  {
		
	}

	declare export class SqlManagementService  {
		
	}

	declare export class WebResource  {
		rawResponse: boolean;
		queryString: Dictionary<string>;
		constructor(): this;
		get(path: string): WebResource;
		put(path: string): WebResource;
		post(path: string): WebResource;
		merge(path: string): WebResource;
		head(path: string): WebResource;
		del(path: string): WebResource;
		withProperty(name: string, value: string): WebResource;
		withRawResponse(rawResponse: boolean): WebResource;
		withHeadersOnly(headersOnly: boolean): WebResource;
		withQueryOption(name: string, value: string, defaultValue: string): WebResource;
		withQueryOptions(queryOptions: Dictionary<string>): WebResource;
		withHeader(name: string, value: string): WebResource;
		withHeaders(headers: Dictionary<string>): WebResource;
		withBody(body: any): WebResource;
		addOptionalMetadataHeaders(metadata: StorageMetadata): WebResource;
		validResponse(statusCode: number): boolean;
		pipeInput(inputStream: stream.Stream, destStream: stream.Stream): stream.Stream
	}

	declare export class ServiceClient extends events$EventEmitter {
		EnvironmentVariables: any;
		DEVSTORE_STORAGE_ACCOUNT: string;
		DEVSTORE_STORAGE_ACCESS_KEY: string;
		DEVSTORE_BLOB_HOST: string;
		DEVSTORE_QUEUE_HOST: string;
		DEVSTORE_TABLE_HOST: string;
		CLOUD_BLOB_HOST: string;
		CLOUD_QUEUE_HOST: string;
		CLOUD_TABLE_HOST: string;
		CLOUD_SERVICEBUS_HOST: string;
		CLOUD_ACCESS_CONTROL_HOST: string;
		CLOUD_SERVICE_MANAGEMENT_HOST: string;
		CLOUD_DATABASE_HOST: string;
		DEFAULT_SERVICEBUS_ISSUER: string;
		DEFAULT_WRAP_NAMESPACE_SUFFIX: string;
		DEFAULT_PROTOCOL: string;
		constructor(host: string, authenticationProvider: any): this;
		setHost(host: string): void;
		performRequest(
		webResource: WebResource, outputData: string, options: any, callback: Function
	): void;
		performRequestOutputStream(
		webResource: WebResource, outputStream: any, options: any, callback: Function
	): void;
		performRequestInputStream(
		webResource: WebResource, outputData: string, inputStream: any, options: any, callback: Function
	): void;
		withFilter(newFilter: Filter): ServiceClient;
		parseMetadataHeaders(headers: any): any;
		isEmulated(): boolean;
		setProxy(proxyUrl: string, proxyPort: number): void
	}

	declare export class BatchServiceClient extends StorageServiceClient {
		operations: any[];
		constructor(storageAccount: string, storageAccessKey: string, host: string, usePathstyleUri: boolean, authenticationProvider: any): this;
		beginBatch(): void;
		isInBatch(): boolean;
		rollback(): void;
		hasOperations(): boolean;
		addOperation(webResource: WebResource, outputData: any): void;
		commitBatch(callback: (error: any, operationResponses: any[], response: any) => void): void;
		commitBatch(
		options: any, callback: (error: any, operationResponses: any[], response: any) => void
	): void;
		processResponse(responseObject: any, requestOperations: any[]): any[];
		processOperation(webResource: WebResource, rawResponse: string): any
	}

	declare export class ServiceManagementClient  {
		
	}

	declare export class TableQuery  {
		select(...fields: string[]): TableQuery;
		from(table: string): TableQuery;
		whereKeys(partitionKey: string, rowKey: string): TableQuery;
		whereNextKeys(partitionKey: string, rowKey: string): TableQuery;
		where(condition: string, ...values: string[]): TableQuery;
		and(condition: string, ...args: string[]): TableQuery;
		or(condition: string, ...args: string[]): TableQuery;
		top(integer: number): TableQuery;
		toQueryObject(): any;
		toPath(): string
	}

	declare export class BlobResult  {
		blob: string;
		container: string;
		etag: string;
		lastModified: string;
		contentType: string;
		contentEncoding: string;
		contentLanguage: string;
		contentMD5: string;
		cacheControl: string;
		contentRange: string;
		contentTypeHeader: string;
		contentEncodingHeader: string;
		contentLanguageHeader: string;
		contentMD5Header: string;
		cacheControlHeader: string;
		contentLength: number;
		contentLengthHeader: number;
		contentDisposition: string;
		contentDispositionHeader: string;
		range: string;
		rangeHeader: string;
		getContentMd5: string;
		acceptRanges: string;
		blobType: string;
		leaseStatus: string;
		leaseId: string;
		leaseDuration: string;
		leaseState: string;
		sequenceNumber: string;
		copyStatus: string;
		copyCompletionTime: string;
		copyStatusDescription: string;
		copyId: string;
		copyProgress: number;
		requestId: string;
		metadata: StorageMetadata;
		constructor(): this;
		constructor(container: string): this;
		constructor(container: string, blob: string): this;
		parse(blobXml: any): BlobResult;
		setHeadersFromBlob(webResource: WebResource, blob: BlobResult): void;
		getPropertiesFromHeaders(headers: any): void
	}

	declare export class ContainerResult  {
		name: string;
		publicAccessLevel: string;
		etag: string;
		lastModified: string;
		leaseStatus: string;
		leaseDuration: string;
		leaseState: string;
		requestId: string;
		metadata: StorageMetadata;
		signedIdentifiers: SignedIdentifier[];
		constructor(): this;
		constructor(name: string): this;
		constructor(name: string, publicAccessLevel: string): this;
		parse(containerXml: any): ContainerResult;
		getPropertiesFromHeaders(headers: any): void
	}

	declare export class LeaseResult  {
		container: string;
		blob: string;
		id: string;
		time: string;
		etag: string;
		lastModified: string;
		constructor(): this;
		constructor(container: string): this;
		constructor(container: string, blob: string): this;
		constructor(container: string, blob: string, id: string): this;
		constructor(container: string, blob: string, id: string, time: string): this;
		getPropertiesFromHeaders(header: any): void
	}

	declare export class QueueResult  {
		name: string;
		metadata: StorageMetadata;
		approximatemessagecount: number;
		constructor(): this;
		constructor(name: string): this;
		constructor(name: string, metadata: StorageMetadata): this;
		parse(messageXml: any): QueueResult;
		getPropertiesFromHeaders(headers: any): void
	}

	declare export class QueueMessageResult  {
		queue: string;
		insertiontime: string;
		expirationtime: string;
		timenextvisible: string;
		messagetext: string;
		dequeuecount: string;
		messageid: string;
		popreceipt: string;
		metadata: StorageMetadata;
		constructor(): this;
		constructor(queue: string): this;
		constructor(queue: string, messageid: string): this;
		constructor(queue: string, messageid: string, popreceipt: string): this;
		constructor(queue: string, messageid: string, popreceipt: string, metadata: StorageMetadata): this;
		serialize(messageJs: string): string;
		parse(messageXml: any): QueueMessageResult;
		getPropertiesFromHeaders(headers: any): void
	}

	declare export class SpeedSummary  {
		name: string;
		totalSize: number;
		completeSize: number;
		_startTime: Date;
		_timeWindowInSeconds: number;
		_timeWindow: number;
		_totalWindowSize: number;
		_speedTracks: number[];
		_speedTrackPtr: number;
		constructor(name: string): this;
		getElapsedSeconds(): string;
		getElapsedSeconds(humanReadable: boolean): number;
		getCompletePercent(): number;
		getCompletePercent(len: number): number;
		getAverageSpeed(): string;
		getAverageSpeed(humanReadable: boolean): number;
		getSpeed(): string;
		getSpeed(humanReadable: boolean): number;
		getSpeed(size: number): (error: Error, value: any) => void;
		getTotalSize(): string;
		getTotalSize(humanReadable: boolean): number;
		getCompleteSize(): string;
		getCompleteSize(humanReadable: boolean): number
	}

	declare export class LinearRetryPolicyFilter extends Filter {
		constructor(retryCount?: number, retryInterval?: number): this;
		retryCount: number;
		retryInterval: number;
		handle(requestOptions: any, next: Function): void
	}

	declare export class ExponentialRetryPolicyFilter extends Filter {
		constructor(retryCount?: number, retryInterval?: number, minRetryInterval?: number, maxRetryInterval?: number): this;
		retryCount: number;
		retryInterval: number;
		minRetryInterval: number;
		maxRetryInterval: number;
		handle(requestOptions: any, next: Function): void
	}

	declare export class HmacSha256Sign  {
		
	}

	declare export class SharedAccessSignature  {
		storageAccount: string;
		storageAccessKey: string;
		permissionSet: string[];
		signer: HmacSha256Sign;
		constructor(storageAccount: string, storageAccessKey: string, permissionSet: string[]): this;
		generateSignedQueryString(
		path: string, queryString: Dictionary<string>, resourceType: string, sharedAccessPolicy: SharedAccessPolicy
	): Dictionary<string>;
		signRequest(webResource: WebResource, callback: ErrorCallback): void;
		_generateSignature(
		path: string, resourceType: string, sharedAccessPolicy: SharedAccessPolicy
	): string;
		_permissionMatchesRequest(
		sharedAccessSignature: string, webResource: WebResource, resourceType: string, requiredPermissions: string[]
	): string
	}

	declare export class SharedKey  {
		storageAccount: string;
		storageAccessKey: string;
		usePathStyleUri: string;
		signer: HmacSha256Sign;
		constructor(storageAccount: string, storageAccessKey: string, usePathStyleUri: boolean): this;
		signRequest(webResource: WebResource, callback: ErrorCallback): void;
		_getCanonicalizedResource(webResource: WebResource): string;
		_getCanonicalizedHeaders(webResource: WebResource): string
	}

	declare export class SharedKeyLite  {
		storageAccount: string;
		storageAccessKey: string;
		usePathStyleUri: string;
		signer: HmacSha256Sign;
		constructor(storageAccount: string, storageAccessKey: string, usePathStyleUri: boolean): this;
		signRequest(webResource: WebResource, callback: ErrorCallback): void;
		_getCanonicalizedResource(webResource: WebResource): string;
		_getCanonicalizedHeaders(webResource: WebResource): string
	}

	declare export class SharedKeyTable  {
		storageAccount: string;
		storageAccessKey: string;
		usePathStyleUri: string;
		signer: HmacSha256Sign;
		constructor(storageAccount: string, storageAccessKey: string, usePathStyleUri: boolean): this;
		signRequest(webResource: WebResource, callback: ErrorCallback): void;
		_getCanonicalizedResource(webResource: WebResource): string
	}

	declare export class SharedKeyLiteTable  {
		torageAccount: string;
		storageAccessKey: string;
		usePathStyleUri: string;
		signer: HmacSha256Sign;
		constructor(storageAccount: string, storageAccessKey: string, usePathStyleUri: boolean): this;
		signRequest(webResource: WebResource, callback: ErrorCallback): void;
		_getCanonicalizedResource(webResource: WebResource): string
	}

	declare export class Logger  {
		level: string;
		loggerFunction: (level: string, message: string) => void;
		LogLevels: {
		EMERGENCY: string,
		ALERT: string,
		CRITICAL: string,
		ERROR: string,
		WARNING: string,
		NOTICE: string,
		INFO: string,
		DEBUG: string
	};
		logPriority: string[];
		log(level: string, message: string): void;
		emergency(message: string): void;
		alert(message: string): void;
		critical(message: string): void;
		error(message: string): void;
		warning(message: string): void;
		notice(message: string): void;
		info(message: string): void;
		debug(message: string): void;
		defaultLoggerFunction(level: string, message: string): void
	}

	declare export class ConnectionStringParser  {
		_value: string;
		_pos: number;
		_state: string;
		constructor(connectionString: string): this;
		_parse(options: ConnectionStringParseOptions): Dictionary<string>;
		_extractKey(): string;
		_extractString(quote: string): string;
		_extractValue(): string;
		_skipWhitespaces(): void;
		_skipOperator(operator: string): void;
		parse(connectionString: string): Dictionary<string>
	}

	declare export class StorageServiceSettings  {
		_name: string;
		_key: string;
		_blobEndpointUri: string;
		_queueEndpointUri: string;
		_tableEndpointUri: string;
		_usePathStyleUri: boolean;
		constructor(name: string, key: string, blobEndpointUri: string, queueEndpointUri: string, tableEndpointUri: string, usePathStyleUri: boolean): this;
		_getDevelopmentStorageAccount(): StorageServiceSettings;
		_getDevelopmentStorageAccount(proxy: string): StorageServiceSettings;
		getDevelopmentStorageAccountSettings(): StorageServiceSettings;
		_getDefaultServiceEndpoint(settings: Dictionary<string>, dns: string): string;
		_createStorageServiceSettings(
		settings: Dictionary<string>, blobEndpointUri: string, queueEndpointUri: string, tableEndpointUri: string
	): StorageServiceSettings;
		createFromSettings(settings: Dictionary<string>): StorageServiceSettings;
		createFromConnectionString(connectionString: string): StorageServiceSettings;
		createExplicitlyOrFromEnvironment(
		storageAccount: string, storageAccessKey: string, host: string
	): StorageServiceSettings;
		isDevelopmentStorage(storageAccount: string, storageAccessKey: string, parsedHost: string): boolean;
		createFromConfig(config: any): StorageServiceSettings;
		customizeConfig(config: any): void
	}

	declare export class ServiceBusSettings  {
		
	}

	declare export class ServiceManagementSettinsg  {
		
	}

	declare class StorageServiceClient extends ServiceClient {
		incorrectStorageAccountErr: string;
		incorrectStorageAccessKeyErr: string;
		getStorageSettings(connectionString: string): StorageServiceSettings;
		getStorageSettings(
		storageAccount?: string, storageAccessKey?: string, host?: string
	): StorageServiceSettings;
		apiVersion: string;
		usePathStyleUri: string;
		constructor(storageAccount: string, storageAccessKey: string, host: string, usePathStyleUri: boolean, authenticationProvider: any): this
	}

	
}

declare module 'ISO8061Date' {
			declare export function format(date: Date): string

	declare export function parse(stringDateTime: string): Date

		
}

declare module 'ServiceSettings' {
			declare export function noMatchConnectionString(connectionString: string): void

	declare export function noMatchSettings(settings: any): void

	declare export function parseAndValidateKeys(connectionString: string, validKeys: string[]): string[]

	declare export function getValidator(
		requirements: Dictionary<Requirement>, isRequired: boolean, atLeastOne: boolean
	): ValidatorFunction

	declare export function setting(name: string): string[]

	declare export function atLeastOne(...args: any[]): ValidatorFunction

	declare export function optional(...args: any[]): ValidatorFunction

	declare export function allRequired(...args: any[]): ValidatorFunction

	declare export function settingWithFunc(name: string, predicate: Function): Requirement[]

	declare export function matchedSpecification(settings: Dictionary<any>): boolean

	declare export function parseHost(uri: string): url.Url

	declare export class NoMatchError extends Error {
		name: string;
		message: string;
		constr: any;
		constructor(): this;
		constructor(message: string): this;
		constructor(message: string, constr: any): this
	}

	
}

declare module 'Validate' {
			declare export function isValidUri(uri: string): boolean

	declare export function isValidHDInsightCreationObject(clusterCreationObject: ClusterCreationOptions): void

	declare export function isValidHDInsightCreationObject(clusterCreationObject: ClusterCreationOptions, callback: ErrorCallback): void

	declare export function isValidUuid(uuid: string): void

	declare export function isValidUuid(uuid: string, callback: ErrorCallback): void

	declare export function isBase64Encoded(key: string): boolean

	declare export function isValidFunction(functionObject: any, functionName: string): void

	declare export function namespaceNameIsValid(name: string): boolean

	declare export function namespaceNameIsValid(name: string, callback: ErrorCallback): boolean

	declare export function containerNameIsValid(containerName: string): boolean

	declare export function containerNameIsValid(containerName: string, callback: ErrorCallback): boolean

	declare export function blobNameIsValid(containerName: string, blob: string): boolean

	declare export function blobNameIsValid(containerName: string, blob: string, callback: ErrorCallback): boolean

	declare export function tableNameIsValid(tableName: string): boolean

	declare export function tableNameIsValid(tableName: string, callback: ErrorCallback): boolean

	declare export function queueNameIsValid(queueName: string): boolean

	declare export function queueNameIsValid(queueName: string, callback: ErrorCallback): boolean

	declare export function pageRangesAreValid(rangeStart: number, rangeEnd: number, writeBlockSizeInBytes: number): boolean

	declare export function pageRangesAreValid(
		rangeStart: number, rangeEnd: number, writeBlockSizeInBytes: number, callback: ErrorCallback
	): boolean

	declare export function validateArgs(functionName: string, validationRules: Function): boolean

		
}

declare module 'date' {
			declare export function daysFromNow(days: number): Date

	declare export function hoursFromNow(hours: number): Date

	declare export function minutesFromNow(minutes: number): Date

	declare export function secondsFromNow(seconds: number): Date

		
}