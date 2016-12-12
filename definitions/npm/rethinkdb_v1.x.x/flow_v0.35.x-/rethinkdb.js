

declare module 'rethinkdb' {
		declare interface Row {
		(name: string): Expression<any>
	}

	declare interface ConnectionOptions {
		host?: string,
		port?: number,
		db?: string,
		user?: string,
		password?: string,
		timeout?: number,
		ssl?: {
		ca: Buffer[]
	}
	}

	declare interface NoReplyWait {
		noreplyWait: boolean
	}

	declare interface Connection {
		open: boolean,
		close(cb: (err: Error) => void): void,
		close(opts: NoReplyWait, cb: (err: Error) => void): void,
		close(): Promise<void>,
		close(opts: NoReplyWait): Promise<void>,
		reconnect(cb: (err: Error, conn: Connection) => void): void,
		reconnect(opts: NoReplyWait, cb: (err: Error, conn: Connection) => void): void,
		reconnect(opts?: NoReplyWait): Promise<Connection>,
		use(dbName: string): void,
		addListener(event: string, cb: Function): void,
		on(event: string, cb: Function): void
	}

	declare interface Db {
		tableCreate(name: string, options?: TableOptions): Operation<CreateResult>,
		tableDrop(name: string): Operation<DropResult>,
		tableList(): Operation<string[]>,
		table(name: string, options?: GetTableOptions): Table
	}

	declare interface TableOptions {
		primary_key?: string,
		durability?: string,
		cache_size?: number,
		datacenter?: string
	}

	declare interface GetTableOptions {
		useOutdated: boolean
	}

	declare interface Writeable {
		update(obj: Object, options?: UpdateOptions): Operation<WriteResult>,
		replace(obj: Object, options?: UpdateOptions): Operation<WriteResult>,
		replace(expr: ExpressionFunction<any>): Operation<WriteResult>,
		delete(options?: UpdateOptions): Operation<WriteResult>
	}

	declare interface ChangesOptions {
		squash: boolean | number,
		changefeedQueueSize: number,
		includeInitial: boolean,
		includeStates: boolean,
		includeOffsets: boolean,
		includeTypes: boolean
	}

	declare interface HasFields<T> {
		hasFields(selector: BooleanMap): T,
		hasFields(...fields: string[]): T
	}

	declare interface Table {
		indexCreate(name: string, index?: ExpressionFunction<any>): Operation<CreateResult>,
		indexDrop(name: string): Operation<DropResult>,
		indexList(): Operation<string[]>,
		insert(obj: any[], options?: InsertOptions): Operation<WriteResult>,
		insert(obj: any, options?: InsertOptions): Operation<WriteResult>,
		get(key: string): Sequence,
		getAll(key: string, index?: Index): Sequence,
		getAll(...keys: string[]): Sequence,
		changes(opts?: ChangesOptions): Sequence
	}

	declare interface Sequence {
		between(lower: any, upper: any, index?: Index): Sequence,
		filter(rql: ExpressionFunction<boolean>): Sequence,
		filter(rql: Expression<boolean>): Sequence,
		filter(obj: {
		[key: string]: any
	}): Sequence,
		innerJoin(sequence: Sequence, join: JoinFunction<boolean>): Sequence,
		outerJoin(sequence: Sequence, join: JoinFunction<boolean>): Sequence,
		eqJoin(leftAttribute: string, rightSequence: Sequence, index?: Index): Sequence,
		eqJoin(
		leftAttribute: ExpressionFunction<any>, rightSequence: Sequence, index?: Index
	): Sequence,
		zip(): Sequence,
		map(transform: ExpressionFunction<any>): Sequence,
		withFields(...selectors: any[]): Sequence,
		concatMap(transform: ExpressionFunction<any>): Sequence,
		orderBy(...keys: string[]): Sequence,
		orderBy(...sorts: Sort[]): Sequence,
		skip(n: number): Sequence,
		limit(n: number): Sequence,
		slice(start: number, end?: number): Sequence,
		nth(n: number): Expression<any>,
		indexesOf(obj: any): Sequence,
		isEmpty(): Expression<boolean>,
		union(sequence: Sequence): Sequence,
		sample(n: number): Sequence,
		reduce(r: ReduceFunction<any>, base?: any): Expression<any>,
		count(): Expression<number>,
		distinct(): Sequence,
		groupedMapReduce(
		group: ExpressionFunction<any>, map: ExpressionFunction<any>, reduce: ReduceFunction<any>, base?: any
	): Sequence,
		groupBy(...aggregators: Aggregator[]): Expression<Object>,
		contains(prop: string): Expression<boolean>,
		pluck(...props: string[]): Sequence,
		without(...props: string[]): Sequence
	}

	declare interface ExpressionFunction<U> {
		(doc: Expression<any>): Expression<U>
	}

	declare interface JoinFunction<U> {
		(left: Expression<any>, right: Expression<any>): Expression<U>
	}

	declare interface ReduceFunction<U> {
		(acc: Expression<any>, val: Expression<any>): Expression<U>
	}

	declare interface InsertOptions {
		upsert: boolean,
		durability: string,
		return_vals: boolean
	}

	declare interface UpdateOptions {
		non_atomic: boolean,
		durability: string,
		return_vals: boolean
	}

	declare interface WriteResult {
		inserted: number,
		replaced: number,
		unchanged: number,
		errors: number,
		deleted: number,
		skipped: number,
		first_error: Error,
		generated_keys: string[]
	}

	declare interface JoinResult {
		left: any,
		right: any
	}

	declare interface CreateResult {
		created: number
	}

	declare interface DropResult {
		dropped: number
	}

	declare interface Index {
		index: string,
		left_bound?: string,
		right_bound?: string
	}

	declare interface BooleanMap {
		[key: string]: Boolean | BooleanMap
	}

	declare interface Expression<T> {
		(prop: string): Expression<any>,
		merge(query: Expression<Object>): Expression<Object>,
		append(prop: string): Expression<Object>,
		contains(prop: string): Expression<boolean>,
		and(b: boolean | Expression<boolean>): Expression<boolean>,
		or(b: boolean | Expression<boolean>): Expression<boolean>,
		eq(v: any | Expression<any>): Expression<boolean>,
		ne(v: any | Expression<any>): Expression<boolean>,
		not(): Expression<boolean>,
		gt(value: T): Expression<boolean>,
		ge(value: T): Expression<boolean>,
		lt(value: T): Expression<boolean>,
		le(value: T): Expression<boolean>,
		add(n: number): Expression<number>,
		sub(n: number, ...numbers: number[]): Expression<number>,
		sub(date: Time): Expression<number>,
		mul(n: number): Expression<number>,
		div(n: number): Expression<number>,
		mod(n: number): Expression<number>,
		default(value: T): Expression<T>
	}

	declare interface OperationOptions {
		readMode: "single" | "majority" | "outdated",
		timeFormat: "native" | "raw",
		profile: boolean,
		durability: "hard" | "soft",
		groupFormat: "native" | "raw",
		noreply: boolean,
		db: string,
		arrayLimit: number,
		binaryFormat: "native" | "raw",
		minBatchRows: number,
		maxBatchRows: number,
		maxBatchBytes: number,
		maxBatchSeconds: number,
		firstBatchScaledownFactor: number
	}

	declare interface Operation<T> {
		run(
		conn: Connection, opts: OperationOptions, cb: (err: Error, result: T) => void
	): void,
		run(conn: Connection, cb: (err: Error, result: T) => void): void,
		run(conn: Connection, opts: OperationOptions): Promise<T>,
		run(conn: Connection): Promise<T>
	}

	declare interface Aggregator {
		
	}

	declare interface Sort {
		
	}

	declare interface ReqlType {
		$reql_type$: string
	}

	declare interface Time {
		$reql_type$: "TIME",
		epoch_time: number,
		timezone: string
	}

	declare interface Binary {
		$reql_type$: "BINARY",
		data: string
	}

	declare interface ReqlError {
		
	}

	declare interface ReqlDriverError {
		
	}

	declare export function connect(
		opts: ConnectionOptions, cb: (err: ReqlDriverError, conn: Connection) => void
	): void

	declare export function connect(host: string, cb: (err: ReqlDriverError, conn: Connection) => void): void

	declare export function connect(opts: ConnectionOptions): Promise<Connection>

	declare export function connect(host: string): Promise<Connection>

	declare export function dbCreate(name: string): Operation<CreateResult>

	declare export function dbDrop(name: string): Operation<DropResult>

	declare export function dbList(): Operation<string[]>

	declare export function db(name: string): Db

	declare export function table(name: string, options?: {
		useOutdated: boolean
	}): Table

	declare export function asc(property: string): Sort

	declare export function desc(property: string): Sort

	declare export function sum(prop: string): Aggregator

	declare export function avg(prop: string): Aggregator

	declare export function expr(stuff: any): Expression<any>

	declare export function now(): Expression<Time>

	declare export function branch(
		test: Expression<boolean>, trueBranch: Expression<any>, falseBranch: Expression<any>
	): Expression<any>

	declare export function js(jsString: string, opts?: {
		timeout: number
	}): Operation<any>

	declare export function uuid(input?: string): Operation<string>

	declare export class Cursor  {
		hasNext(): boolean;
		each(cb: (err: Error, row: any) => void, done?: () => void): void;
		each<T>(cb: (err: Error, row: T) => void, done?: () => void): void;
		each(cb: (err: Error, row: any) => boolean, done?: () => void): void;
		each<T>(cb: (err: Error, row: T) => boolean, done?: () => void): void;
		next(cb: (err: Error, row: any) => void): void;
		next<T>(cb: (err: Error, row: T) => void): void;
		toArray(cb: (err: Error, rows: any[]) => void): void;
		toArray<T>(cb: (err: Error, rows: T[]) => void): void;
		toArray(): Promise<any[]>;
		toArray<T>(): Promise<T[]>;
		close(cb: (err: Error) => void): void;
		close(): Promise<void>
	}

	
}