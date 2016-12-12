

declare module 'cassandra-driver' {
	declare type Callback = Function;

	declare type ResultCallback = (err: Error, result: types.ResultSet) => void;

	declare interface ClientOptions {
		contactPoints: Array<string>,
		keyspace: string,
		policies?: {
		addressResolution?: policies.addressResolution.AddressTranslator,
		loadBalancing?: policies.loadBalancing.LoadBalancingPolicy,
		reconnection?: policies.reconnection.ReconnectionPolicy,
		retry?: policies.retry.RetryPolicy
	},
		queryOptions?: QueryOptions,
		pooling?: {
		heartBeatInterval: number,
		coreConnectionsPerHost: {
		[key: number]: number
	},
		warmup: boolean
	},
		protocolOptions?: {
		port: number,
		maxSchemaAgreementWaitSeconds: number,
		maxVersion: number
	},
		socketOptions?: {
		connectTimeout: number,
		defunctReadTimeoutThreshold: number,
		keepAlive: boolean,
		keepAliveDelay: number,
		readTimeout: number,
		tcpNoDelay: boolean,
		coalescingThreshold: number
	},
		authProvider?: auth.AuthProvider,
		sslOptions?: any,
		encoding?: {
		map: Function,
		set: Function,
		copyBuffer: boolean,
		useUndefinedAsUnset: boolean
	}
	}

	declare interface QueryOptions {
		autoPage?: boolean,
		captureStackTrace?: boolean,
		consistency?: number,
		customPayload?: any,
		fetchSize?: number,
		hints?: Array<string> | Array<Array<string>>,
		logged?: boolean,
		pageState?: Buffer | string,
		prepare?: boolean,
		readTimeout?: number,
		retry?: policies.retry.RetryPolicy,
		retryOnTimeout?: boolean,
		routingIndexes?: Array<number>,
		routingKey?: Buffer | Array<Buffer>,
		routingNames?: Array<string>,
		serialConsistency?: number,
		timestamp?: number | _Long,
		traceQuery?: boolean
	}

	declare interface ClientStatic {
		new (options?: ClientOptions): Client
	}

	declare interface Client {
		hosts: HostMap,
		keyspace: string,
		metadata: metadata.Metadata,
		batch(
		queries: Array<string> | Array<{
		query: string,
		params?: any
	}>, options: QueryOptions, callback: ResultCallback
	): void,
		connect(callback: Callback): void,
		eachRow(
		query: string, params?: any, options?: QueryOptions, rowCallback?: Callback, callback?: Callback
	): void,
		execute(
		query: string, params?: any, options?: QueryOptions, callback?: ResultCallback
	): void,
		getReplicas(keyspace: string, token: Buffer): Array<any>,
		shutdown(callback?: Callback): void,
		stream(
		query: string, params?: any, options?: QueryOptions, callback?: Callback
	): NodeJS.ReadableStream
	}

	declare interface HostStatic {
		new (address: string, protocolVersion: number, options: ClientOptions): Host
	}

	declare interface Host {
		address: string,
		cassandraVersion: string,
		dataCenter: string,
		rack: string,
		tokens: Array<string>,
		canBeConsideredAsUp(): boolean,
		getCassandraVersion(): Array<number>,
		isUp(): boolean
	}

	declare interface HostMapStatic {
		new (): HostMap
	}

	declare interface HostMap {
		length: number,
		forEach(callback: Callback): void,
		get(key: string): Host,
		keys(): Array<string>,
		remove(key: string): void,
		removeMultiple(keys: Array<string>): void,
		set(key: string, value: Host): void,
		values(): Array<Host>
	}

	declare interface EncoderStatic {
		new (protocolVersion: number, options: ClientOptions): Encoder
	}

	declare interface Encoder {
		decode(buffer: Buffer, type: {
		code: number,
		info?: any
	}): void,
		encode(
		value: any, typeInfo?: string | number | {
		code: number,
		info?: any
	}
	): Buffer
	}

			
}

declare module 'addressResolution' {
		declare interface AddressTranslator {
		translate(address: string, port: number, callback: Callback): void
	}

	declare interface EC2MultiRegionTranslatorStatic {
		new (): EC2MultiRegionTranslator
	}

	declare interface EC2MultiRegionTranslator {
		logError(address: string, err: Error): void
	}

			
}

declare module 'loadBalancing' {
		declare interface LoadBalancingPolicy {
		init(client: Client, hosts: HostMap, callback: Callback): void,
		getDistance(host: Host): types.distance,
		newQueryPlan(keyspace: string, queryOptions: any, callback: Callback): void
	}

	declare interface DCAwareRoundRobinPolicyStatic {
		new (localDc?: string, usedHostsPerRemoteDc?: number): DCAwareRoundRobinPolicy
	}

	declare interface DCAwareRoundRobinPolicy {
		localHostsArray: Array<Host>,
		remoteHostsArray: Array<Host>
	}

	declare interface RoundRobinPolicyStatic {
		new (): RoundRobinPolicy
	}

	declare interface RoundRobinPolicy {
		
	}

	declare interface TokenAwarePolicyStatic {
		new (childPolicy: LoadBalancingPolicy): TokenAwarePolicy
	}

	declare interface TokenAwarePolicy {
		
	}

	declare interface WhiteListPolicyStatic {
		new (childPolicy: LoadBalancingPolicy, whiteList: Array<string>): WhiteListPolicy
	}

	declare interface WhiteListPolicy {
		
	}

			
}

declare module 'reconnection' {
		declare interface ReconnectionPolicy {
		newSchedule(): {
		next: Function
	}
	}

	declare interface ConstantReconnectionPolicyStatic {
		new (delay: number): ConstantReconnectionPolicy
	}

	declare interface ConstantReconnectionPolicy {
		
	}

	declare interface ExponentialReconnectionPolicyStatic {
		new (
		baseDelay: number, maxDelay: number, startWithNoDelay: boolean
	): ExponentialReconnectionPolicy
	}

	declare interface ExponentialReconnectionPolicy {
		
	}

			
}

declare module 'retry' {
		declare interface DecisionInfo {
		decision: number,
		consistency: number
	}

	declare interface RequestInfo {
		request: any,
		nbRetry: number
	}

	declare interface RetryPolicyStatic {
		new (): RetryPolicy,
		retryDecision: any
	}

	declare interface RetryPolicy {
		onReadTimeout(
		requestInfo: RequestInfo, consistency: types.consistencies, received: number, blockFor: number, isDataPresent: boolean
	): DecisionInfo,
		onUnavailable(
		requestInfo: RequestInfo, consistency: types.consistencies, required: number, alive: number
	): DecisionInfo,
		onWriteTimeout(
		requestInfo: RequestInfo, consistency: types.consistencies, received: number, blockFor: number, writeType: string
	): DecisionInfo,
		rethrowResult(): {
		decision: retryDecision
	},
		retryResult(
		
	): {
		decision: retryDecision,
		consistency: types.consistencies,
		useCurrentHost: boolean
	}
	}

			
}

declare module 'types' {
		declare interface responseErrorCodes {
		[key: string]: number
	}

	declare interface unset {
		unset: boolean
	}

	declare interface BigDecimalStatic {
		new (unscaledValue: number, scale: number): BigDecimal,
		fromBuffer(buf: Buffer): BigDecimal,
		toBuffer(value: BigDecimal): Buffer,
		fromString(value: string): BigDecimal,
		fromNumber(value: number): BigDecimal
	}

	declare interface BigDecimal {
		equals(other: BigDecimal): boolean,
		inspect(): string,
		notEquals(other: BigDecimal): boolean,
		compare(other: BigDecimal): number,
		subtract(other: BigDecimal): BigDecimal,
		add(other: BigDecimal): BigDecimal,
		greaterThan(other: BigDecimal): boolean,
		isNegative(): boolean,
		isZero(): boolean,
		toString(): string,
		toNumber(): number,
		toJSON(): string
	}

	declare interface InetAddressStatic {
		new (buffer: Buffer): InetAddress,
		fromString(value: string): InetAddress
	}

	declare interface InetAddress {
		equals(other: InetAddress): boolean,
		getBuffer(): Buffer,
		inspect(): string,
		toString(): string,
		toJSON(): string,
		length: number,
		version: number
	}

	declare interface IntegerStatic {
		new (bits: Array<number>, sign: number): Integer,
		fromInt(value: number): Integer,
		fromNumber(value: number): Integer,
		fromBits(bits: Array<number>): Integer,
		fromString(str: string, opt_radix?: number): Integer,
		fromBuffer(bits: Buffer): Integer,
		toBuffer(value: Integer): Buffer,
		ZERO: Integer,
		ONE: Integer
	}

	declare interface Integer {
		toInt(): number,
		toNumber(): number,
		toString(opt_radix?: number): string,
		getBits(index: number): number,
		getBitsUnsigned(index: number): number,
		getSign(): number,
		isZero(): boolean,
		isNegative(): boolean,
		isOdd(): boolean,
		equals(other: Integer): boolean,
		notEquals(other: Integer): boolean,
		greaterThan(other: Integer): boolean,
		greaterThanOrEqual(other: Integer): boolean,
		lessThan(other: Integer): boolean,
		lessThanOrEqual(other: Integer): boolean,
		compare(other: Integer): number,
		shorten(numBits: number): Integer,
		negate(): Integer,
		add(other: Integer): Integer,
		subtract(other: Integer): Integer,
		multiply(other: Integer): Integer,
		divide(other: Integer): Integer,
		modulo(other: Integer): Integer,
		not(): Integer,
		and(other: Integer): Integer,
		or(other: Integer): Integer,
		xor(other: Integer): Integer,
		shiftLeft(numBits: number): Integer,
		shiftRight(numBits: number): Integer,
		inspect(): string,
		abs(): Integer,
		toJSON(): string
	}

	declare interface LocalDateStatic {
		new (year: number, month: number, day: number): LocalDate,
		now(): LocalDate,
		utcNow(): LocalDate,
		fromDate(date: Date): LocalDate,
		fromString(value: string): LocalDate,
		fromBuffer(buffer: Buffer): LocalDate
	}

	declare interface LocalDate {
		_value: number,
		year: number,
		month: number,
		day: number,
		equals(other: LocalDate): boolean,
		inspect(): string,
		toBuffer(): Buffer,
		toString(): string,
		toJSON(): string
	}

	declare interface LocalTimeStatic {
		new (totalNanoseconds: _Long): LocalTime,
		fromString(value: string): LocalTime,
		now(nanoseconds?: number): LocalTime,
		fromDate(date: Date, nanoseconds: number): LocalTime,
		fromMilliseconds(milliseconds: number, nanoseconds?: number): LocalTime,
		fromBuffer(value: Buffer): LocalTime
	}

	declare interface LocalTime {
		hour: number,
		minute: number,
		second: number,
		nanosecond: number,
		compare(other: LocalTime): boolean,
		equals(other: LocalTime): boolean,
		getTotalNanoseconds(): _Long,
		inspect(): string,
		toBuffer(): Buffer,
		toString(): string,
		toJSON(): string
	}

	declare interface ResultSetStatic {
		new (
		response: any, host: string, triedHost: {
		[key: string]: any
	}, consistency: consistencies
	): ResultSet
	}

	declare interface ResultSet {
		info: {
		queriedHost: Host,
		triedHosts: {
		[key: string]: string
	},
		achievedConsistency: consistencies,
		traceId: Uuid,
		warnings: Array<string>,
		customPayload: any
	},
		rows: Array<Row>,
		rowLength: number,
		columns: Array<{
		[key: string]: string
	}>,
		pageState: string,
		nextPage: any,
		first(): Row,
		getPageState(): string,
		getColumns(): Array<{
		[key: string]: string
	}>
	}

	declare interface ResultStreamStatic {
		new (opt: any): ResultSet
	}

	declare interface ResultStream {
		buffer: Buffer,
		paused: boolean,
		_valve(readNext: Function): void,
		add(chunk: Buffer): void
	}

	declare interface RowStatic {
		new (columns: Array<{
		[key: string]: string
	}>): Row
	}

	declare interface Row {
		get(columnName: string | number): {
		[key: string]: any
	},
		values(): Array<{
		[key: string]: any
	}>,
		keys(): Array<string>,
		forEach(callback: Callback): void
	}

	declare interface TimeUuidStatic {
		new (
		value?: Date, ticks?: number, nodeId?: string | Buffer, clockId?: string | Buffer
	): TimeUuid,
		fromDate(
		date: Date, ticks?: number, nodeId?: string | Buffer, clockId?: string | Buffer
	): TimeUuid,
		fromString(value: string): TimeUuid,
		min(date: Date, ticks?: number): TimeUuid,
		max(date: Date, ticks?: number): TimeUuid,
		now(nodeId?: string | Buffer, clockId?: string | Buffer): TimeUuid
	}

	declare interface TimeUuid {
		getDatePrecision(): {
		date: Date,
		ticks: number
	},
		getDate(): Date,
		getNodeId(): Buffer,
		getNodeIdString(): string
	}

	declare interface TupleStatic {
		new (...arguments: Array<any>): Tuple,
		fromArray(elements: Array<any>): Tuple
	}

	declare interface Tuple {
		elements: Array<any>,
		length: number,
		get(index: number): any,
		toString(): string,
		toJSON(): string,
		values(): Array<any>
	}

	declare interface UuidStatic {
		new (buffer: Buffer): Uuid,
		fromString(value: string): Uuid,
		random(): Uuid
	}

	declare interface Uuid {
		buffer: Buffer,
		getBuffer(): Buffer,
		equals(other: types.Uuid): boolean,
		toString(): string,
		inspect(): string,
		toJSON(): string
	}

	declare function generateTimestamp(date?: Date, microseconds?: number): _Long

	declare function timeuuid(
		options?: {
		msecs: number | Date,
		node: Buffer,
		clockseq: number,
		nsecs: number
	}, buffer?: Buffer, offset?: number
	): string

		
}

declare module 'auth' {
		declare interface AuthenticatorStatic {
		new (): Authenticator
	}

	declare interface Authenticator {
		evaluateChallenge(challenge: Buffer, callback: Callback): void,
		initialResponse(callback: Callback): void,
		onAuthenticationSuccess(token?: Buffer): void
	}

	declare interface AuthProvider {
		newAuthenticator(endpoint: string, name: string): void
	}

	declare interface PlainTextAuthProviderStatic {
		new (username: string, password: string): PlainTextAuthProvider
	}

	declare interface PlainTextAuthProvider {
		newAuthenticator(endpoint: string, name: string): void
	}

			
}

declare module 'errors' {
				declare class DriverError  {
		constructor(message: string, constructor?: any): this
	}

	declare class ArgumentError extends DriverError {
		constructor(message: string): this
	}

	declare class AuthenticationError extends DriverError {
		constructor(message: string): this
	}

	declare class DriverInternalError extends DriverError {
		constructor(message: string): this
	}

	declare class NoHostAvailableError extends DriverError {
		constructor(innerErrors: any, message?: string): this
	}

	declare class NotSupportedError extends DriverError {
		constructor(message: string): this
	}

	declare class OperationTimedOutError extends DriverError {
		
	}

	declare class ResponseError extends DriverError {
		constructor(code: number, message: string): this
	}

	
}

declare module 'metadata' {
	declare type caching = "all" | "keys_only" | "rows_only" | "none";

	declare interface AggregateStatic {
		new (): Aggregate
	}

	declare interface Aggregate {
		argumentTypes: Array<{
		code: number,
		info: any
	}>,
		finalFunction: string,
		initCondition: string,
		keyspaceName: string,
		returnType: string,
		signature: Array<string>,
		stateFunction: string,
		stateType: string
	}

	declare interface DataTypeInfo {
		code: number,
		info: string | DataTypeInfo | Array<DataTypeInfo>,
		options: {
		frozen: boolean,
		reversed: boolean
	}
	}

	declare interface ColumnInfo {
		name: string,
		type: DataTypeInfo
	}

	declare interface DataCollection {
		bloomFilterFalsePositiveChance: number,
		caching: caching,
		clusterKeys: Array<{
		c: ColumnInfo,
		index: number,
		order: string
	}>,
		clusteringOrder: Array<string>,
		columns: Array<ColumnInfo>,
		columnsByName: {
		[key: string]: ColumnInfo
	},
		comment: string,
		compactionClass: string,
		compactionOptions: any,
		compression: any,
		crcCheckChange?: number,
		defaultTtl: number,
		extensions: any,
		gcGraceSeconds: number,
		localReadRepairChance: number,
		maxIndexInterval?: number,
		minIndexInterval?: number,
		name: string,
		partitionKeys: Array<{
		c: ColumnInfo,
		index: number
	}>,
		populateCacheOnFlush: boolean,
		readRepairChance: number,
		speculateRetry: string
	}

	declare interface IndexStatic {
		new (name: string, target: string, kind: IndexType, options: Object): Index,
		fromRows(indexRows: Array<types.Row>): Array<Index>,
		fromColumnRows(
		columnRows: Array<types.Row>, columnsByName: {
		[key: string]: ColumnInfo
	}
	): Array<Index>
	}

	declare interface Index {
		kind: IndexType,
		name: string,
		options: Object,
		target: string,
		isCompositesKind(): boolean,
		isCustomKind(): boolean,
		isKeysKind(): boolean
	}

	declare interface MaterializedViewStatic {
		new (name: string): MaterializedView
	}

	declare interface MaterializedView {
		
	}

	declare interface MetadataStatic {
		new (options: ClientOptions, controlConnection: any): Metadata
	}

	declare interface Metadata {
		clearPrepared(): void,
		getAggregate(
		keyspaceName: string, name: string, signature: Array<string> | Array<{
		code: number,
		info: any
	}>, callback: Callback
	): void,
		getAggregates(keyspaceName: string, name: string, callback: Callback): void,
		getFunction(
		keyspaceName: string, name: string, signature: Array<string> | Array<{
		code: number,
		info: any
	}>, callback: Callback
	): void,
		getFunctions(keyspaceName: string, name: string, callback: Callback): void,
		getMaterializedView(keyspaceName: string, name: string, callback: Callback): void,
		getReplicas(keyspaceName: string, tokenBuffer: Buffer): Array<any>,
		getTable(keyspaceName: string, name: string, callback: Callback): void,
		getTrace(traceId: types.Uuid, callback: Callback): void,
		getUdt(keyspaceName: string, name: string, callback: Callback): void,
		refreshKeyspace(name: string, callback?: Callback): void,
		refreshKeyspaces(callback?: Callback): void
	}

	declare interface SchemaFunctionStatic {
		new (): SchemaFunction
	}

	declare interface SchemaFunction {
		argumentNames: Array<string>,
		argumentTypes: Array<{
		code: number,
		info: any
	}>,
		body: string,
		calledOnNullInput: boolean,
		keyspaceName: string,
		language: string,
		name: string,
		returnType: string,
		signature: Array<string>
	}

	declare interface TableMetadataStatic {
		new (name: string): TableMetadata
	}

	declare interface TableMetadata {
		indexes: Array<Index>,
		indexInterval?: number,
		isCompact: boolean,
		memtableFlushPeriod: number,
		replicateOnWrite: boolean
	}

			
}