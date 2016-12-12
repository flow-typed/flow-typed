

declare module 'azure-mobile-apps' {
		declare interface AzureMobileApps {
		(configuration?: Azure.MobileApps.Configuration): Azure.MobileApps.Platforms.Express.MobileApp,
		table(): Azure.MobileApps.Platforms.Express.Table,
		api(definition?: Azure.MobileApps.ApiDefinition): Azure.MobileApps.ApiDefinition,
		logger: Azure.MobileApps.Logger,
		query: Azure.MobileApps.Query
	}

			declare module.exports: AzureMobileApps


}

declare module 'azure-mobile-apps/src/logger' {
					declare module.exports: Logger


}

declare module 'azure-mobile-apps/src/query' {
					declare module.exports: Query


}

declare module 'Express' {
		declare interface MobileApp {
		configuration: Configuration,
		tables: Tables,
		table(): Table,
		api: Api,
		use(...middleware: Middleware[]): MobileApp,
		use(middleware: Middleware[]): MobileApp
	}

	declare interface Api {
		add(name: string, definition: ApiDefinition): void,
		import(fileOrFolder: string): void
	}

	declare interface Table {
		use(...middleware: Middleware[]): Table,
		use(middleware: Middleware[]): Table,
		read: TableOperation,
		update: TableOperation,
		insert: TableOperation,
		delete: TableOperation,
		undelete: TableOperation
	}

	declare interface TableOperation {
		(operationHandler: (context: Context) => void): Table,
		use(...middleware: Middleware[]): Table,
		use(middleware: Middleware[]): Table,
		access?: AccessType
	}

	declare interface Tables {
		configuration: Configuration,
		add(name: string, definition?: Table | TableDefinition): void,
		import(fileOrFolder: string): void,
		initialize(): Thenable<any>
	}

			
}

declare module 'Data' {
		declare interface Table {
		read(query: QueryJs): Thenable<any[]>,
		update(item: any, query: QueryJs): Thenable<any>,
		insert(item: any): Thenable<any>,
		delete(query: QueryJs, version: string): Thenable<any>,
		undelete(query: QueryJs, version: string): Thenable<any>,
		truncate(): Thenable<void>,
		initialize(): Thenable<void>,
		schema(): Thenable<Column[]>
	}

	declare interface Column {
		name: string,
		type: string
	}

			
}

declare module 'MobileApps' {
	declare type AccessType = "anonymous" | "authenticated" | "disabled";

	declare interface User {
		id: string,
		claims: any[],
		token: string,
		getIdentity(provider: string): Thenable<any>
	}

	declare interface Auth {
		validate(token: string): Thenable<User>,
		decode(token: string): User,
		sign(payload: any): string
	}

	declare interface Configuration {
		platform?: string,
		basePath?: string,
		configFile?: string,
		promiseConstructor?: (resolve: (result: any) => void, reject: (error: any) => void) => Thenable<any>,
		apiRootPath?: string,
		tableRootPath?: string,
		notificationRootPath?: string,
		swaggerPath?: string,
		authStubRoute?: string,
		debug?: boolean,
		version?: string,
		apiVersion?: string,
		homePage?: boolean,
		swagger?: boolean,
		maxTop?: number,
		pageSize?: number,
		logging?: Configuration.Logging,
		data?: Configuration.Data,
		auth?: Configuration.Auth,
		cors?: Configuration.Cors,
		notifications?: Configuration.Notifications,
		webhook?: Webhook
	}

	declare interface Query {
		create(tableName: string): QueryJs,
		fromRequest(req: Express.Request): QueryJs,
		toOData(query: QueryJs): OData
	}

	declare interface QueryJs {
		includeTotalCount(): QueryJs,
		includeDeleted(): QueryJs,
		orderBy(properties: string): QueryJs,
		orderByDescending(properties: string): QueryJs,
		select(properties: string): QueryJs,
		skip(count: number): QueryJs,
		take(count: number): QueryJs,
		where(filter: any): QueryJs,
		id?: string | number,
		single?: boolean
	}

	declare interface OData {
		table: string,
		filters?: string,
		ordering?: string,
		orderClauses?: string,
		skip?: number,
		take?: number,
		selections?: string,
		includeTotalCount?: boolean
	}

	declare interface Context {
		query: QueryJs,
		id: string | number,
		item: any,
		req: Express.Request,
		res: Express.Response,
		data: ContextData,
		tables: (tableName: string) => Data.Table,
		user: User,
		push: typeof nh,
		logger: Logger,
		execute(): Thenable<any>,
		next(error: string | Error): any
	}

	declare interface ContextData {
		(table: TableDefinition): Data.Table,
		execute(q: SqlQueryDefinition): Thenable<any>
	}

	declare interface SqlQueryDefinition {
		sql: string,
		parameters?: SqlParameterDefinition[]
	}

	declare interface SqlParameterDefinition {
		name: string,
		value: any
	}

	declare interface TableDefinition {
		access?: AccessType,
		authorize?: boolean,
		autoIncrement?: boolean,
		columns?: any,
		databaseTableName?: string,
		dynamicSchema?: boolean,
		maxTop?: number,
		name?: string,
		pageSize?: number,
		schema?: string,
		softDelete?: boolean,
		userIdColumn?: string,
		filters?: [(query: QueryJs, context: Context) => void | QueryJs],
		transforms?: [(item: any, context: Context) => void | any],
		hooks?: [(results: any, context: Context) => void],
		perUser?: boolean,
		recordsExpire?: Duration,
		webhook?: Webhook | boolean
	}

	declare interface Duration {
		milliseconds?: number,
		seconds?: number,
		minutes?: number,
		hours?: number,
		days?: number,
		weeks?: number,
		months?: number,
		years?: number
	}

	declare interface Webhook {
		url: string
	}

	declare interface ApiDefinition {
		authorize?: boolean,
		get?: Middleware | Middleware[],
		post?: Middleware | Middleware[],
		patch?: Middleware | Middleware[],
		put?: Middleware | Middleware[],
		delete?: Middleware | Middleware[]
	}

	declare interface Thenable<R> {
		then<U>(
		onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>
	): Thenable<U>,
		then<U>(
		onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void
	): Thenable<U>,
		catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>,
		catch<U>(onRejected?: (error: any) => void): Thenable<U>
	}

	declare interface Logger {
		log(level: string, ...message: any[]): void,
		silly(...message: any[]): void,
		debug(...message: any[]): void,
		verbose(...message: any[]): void,
		info(...message: any[]): void,
		warn(...message: any[]): void,
		error(...message: any[]): void
	}

	declare interface Middleware {
		(req: Express.Request, res: Express.Response, next: NextMiddleware): void
	}

	declare interface NextMiddleware {
		(error?: any): void
	}

			
}

declare module 'Configuration' {
		declare interface Data {
		provider: string,
		user?: string,
		password?: string,
		server?: string,
		port?: number,
		database?: string,
		connectionTimeout?: string,
		options?: {
		encrypt: boolean
	},
		schema?: string,
		dynamicSchema?: boolean,
		filename?: string
	}

	declare interface Auth {
		secret: string,
		validateTokens?: boolean
	}

	declare interface Logging {
		level?: string,
		transports?: LoggingTransport[]
	}

	declare interface LoggingTransport {
		
	}

	declare interface Cors {
		exposeHeaders: string,
		maxAge?: number,
		hostnames: string[]
	}

	declare interface Notifications {
		hubName: string,
		connectionString?: string,
		endpoint?: string,
		sharedAccessKeyName?: string,
		sharedAccessKeyValue?: string
	}

			
}

declare module 'npm$namespace$Express' {
		declare interface Request {
		azureMobile: Azure.MobileApps.Context
	}

	declare interface Response {
		results?: any
	}

			
}