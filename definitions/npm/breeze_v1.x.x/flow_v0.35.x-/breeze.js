

declare module 'breeze' {
					declare module.exports: undefined


}

declare module 'core' {
		declare export interface ErrorCallback {
		(error: Error): void
	}

	declare export interface IEnum {
		contains(object: any): boolean,
		fromName(name: string): EnumSymbol,
		getNames(): string[],
		getSymbols(): EnumSymbol[]
	}

	declare export function objectForEach(obj: Object, kvfn: (key: string, value: any) => void): void

	declare export function extend(target: Object, source: Object): Object

	declare export function propEq(propertyName: string, value: any): (obj: Object) => boolean

	declare export function pluck(propertyName: string): (obj: Object) => any

	declare export function arrayEquals(a1: any[], a2: any[], equalsFn: (e1: any, e2: any) => boolean): boolean

	declare export function arrayFirst(a1: any[], predicate: (e: any) => boolean): any

	declare export function arrayIndexOf(a1: any[], predicate: (e: any) => boolean): number

	declare export function arrayRemoveItem(array: any[], item: any, shouldRemoveMultiple: boolean): any

	declare export function arrayRemoveItem(
		array: any[], predicate: (e: any) => boolean, shouldRemoveMultiple: boolean
	): any

	declare export function arrayZip(a1: any[], a2: any[], callback: (e1: any, e2: any) => any): any[]

	declare export function requireLib(libnames: string, errMessage: string): Object

	declare export function using(obj: Object, property: string, tempValue: any, fn: () => any): any

	declare export function memoize(fn: (...any: any[]) => any): any

	declare export function getUuid(): string

	declare export function durationToSeconds(duration: string): number

	declare export function isDate(o: any): boolean

	declare export function isGuid(o: any): boolean

	declare export function isDuration(o: any): boolean

	declare export function isFunction(o: any): boolean

	declare export function isEmpty(o: any): boolean

	declare export function isNumeric(o: any): boolean

	declare export function stringStartsWith(str: string, prefix: string): boolean

	declare export function stringEndsWith(str: string, suffix: string): boolean

	declare export function formatString(format: string, ...args: any[]): string

	declare export class Enum extends IEnum {
		constructor(name: string, methodObj?: any): this;
		addSymbol(propertiesObj?: any): EnumSymbol;
		contains(object: any): boolean;
		fromName(name: string): EnumSymbol;
		getNames(): string[];
		getSymbols(): EnumSymbol[];
		isSymbol(object: any): boolean;
		resolveSymbols(): void
	}

	declare export class EnumSymbol  {
		parentEnum: IEnum;
		getName(): string;
		toString(): string
	}

	declare export class Event  {
		constructor(name: string, publisher: any, defaultErrorCallback?: ErrorCallback): this;
		enable(eventName: string, target: any): void;
		enable(eventName: string, target: any, isEnabled: boolean): void;
		enable(eventName: string, target: any, isEnabled: Function): void;
		isEnabled(eventName: string, target: any): boolean;
		publish(data: any, publishAsync?: boolean, errorCallback?: ErrorCallback): void;
		publishAsync(data: any, errorCallback?: ErrorCallback): void;
		subscribe(callback?: (data: any) => void): number;
		unsubscribe(unsubKey: number): boolean;
		clear(): void
	}

	
}

declare module 'npm$namespace$breeze' {
		declare export interface Entity {
		entityAspect: EntityAspect,
		entityType: EntityType
	}

	declare export interface ComplexObject {
		complexAspect: ComplexAspect,
		complexType: ComplexType
	}

	declare export interface IProperty {
		name: string,
		nameOnServer: string,
		displayName: string,
		parentType: IStructuralType,
		validators: Validator[],
		isDataProperty: boolean,
		isNavigationProperty: boolean
	}

	declare export interface IStructuralType {
		complexProperties: DataProperty[],
		dataProperties: DataProperty[],
		name: string,
		namespace: string,
		shortName: string,
		unmappedProperties: DataProperty[],
		validators: Validator[]
	}

	declare export interface DataPropertyOptions {
		complexTypeName?: string,
		concurrencyMode?: string,
		custom?: any,
		dataType?: DataTypeSymbol,
		defaultValue?: any,
		displayName?: string,
		isNullable?: boolean,
		isPartOfKey?: boolean,
		isScalar?: boolean,
		isUnmapped?: boolean,
		maxLength?: number,
		name?: string,
		nameOnServer?: string,
		validators?: Validator[]
	}

	declare export interface DataServiceOptions {
		serviceName?: string,
		adapterName?: string,
		uriBuilderName?: string,
		hasServerMetadata?: boolean,
		jsonResultsAdapter?: JsonResultsAdapter,
		useJsonp?: boolean
	}

	declare export interface QueryContext {
		url: string,
		query: EntityQuery | string,
		entityManager: EntityManager,
		dataService: DataService,
		queryOptions: QueryOptions
	}

	declare export interface NodeContext {
		nodeType: string
	}

	declare export interface DataType {
		Binary: DataTypeSymbol,
		Boolean: DataTypeSymbol,
		Byte: DataTypeSymbol,
		DateTime: DataTypeSymbol,
		DateTimeOffset: DataTypeSymbol,
		Decimal: DataTypeSymbol,
		Double: DataTypeSymbol,
		Guid: DataTypeSymbol,
		Int16: DataTypeSymbol,
		Int32: DataTypeSymbol,
		Int64: DataTypeSymbol,
		Single: DataTypeSymbol,
		String: DataTypeSymbol,
		Time: DataTypeSymbol,
		Undefined: DataTypeSymbol,
		toDataType(typeName: string): DataTypeSymbol,
		parseDateFromServer(date: any): Date,
		defaultValue: any,
		isNumeric: boolean,
		isInteger: boolean,
		parse: (val: any, sourceTypeName: string) => any,
		fmtOData: (val: any) => any,
		getNext?: () => any,
		normalize?: (val: any) => any,
		getConcurrencyValue?: (val: any) => any,
		parseRawValue?: (val: any) => any
	}

	declare export interface EntityAction {
		AcceptChanges: EntityActionSymbol,
		Attach: EntityActionSymbol,
		AttachOnImport: EntityActionSymbol,
		AttachOnQuery: EntityActionSymbol,
		Clear: EntityActionSymbol,
		Detach: EntityActionSymbol,
		EntityStateChange: EntityActionSymbol,
		MergeOnImport: EntityActionSymbol,
		MergeOnSave: EntityActionSymbol,
		MergeOnQuery: EntityActionSymbol,
		PropertyChange: EntityActionSymbol,
		RejectChanges: EntityActionSymbol
	}

	declare export interface EntityByKeyResult {
		entity: Entity,
		entityKey: EntityKey,
		fromCache: boolean
	}

	declare export interface ExportEntitiesOptions {
		asString: boolean,
		includeMetadata: boolean
	}

	declare export interface EntityManagerOptions {
		serviceName?: string,
		dataService?: DataService,
		metadataStore?: MetadataStore,
		queryOptions?: QueryOptions,
		saveOptions?: SaveOptions,
		validationOptions?: ValidationOptions,
		keyGeneratorCtor?: Function
	}

	declare export interface EntityManagerProperties {
		serviceName?: string,
		dataService?: DataService,
		metadataStore?: MetadataStore,
		queryOptions?: QueryOptions,
		saveOptions?: SaveOptions,
		validationOptions?: ValidationOptions,
		keyGeneratorCtor?: Function
	}

	declare export interface ExecuteQuerySuccessCallback {
		(data: QueryResult): void
	}

	declare export interface ExecuteQueryErrorCallback {
		(error: {
		query: EntityQuery,
		httpResponse: HttpResponse,
		entityManager: EntityManager,
		message?: string,
		stack?: string
	}): void
	}

	declare export interface SaveChangesSuccessCallback {
		(saveResult: SaveResult): void
	}

	declare export interface EntityError {
		entity: Entity,
		errorMessage: string,
		errorName: string,
		isServerError: boolean,
		propertyName: string
	}

	declare export interface SaveChangesErrorCallback {
		(error: {
		entityErrors: EntityError[],
		httpResponse: HttpResponse,
		message: string,
		stack?: string,
		status?: number
	}): void
	}

	declare export interface OrderByClause {
		
	}

	declare export interface EntityState {
		Added: EntityStateSymbol,
		Deleted: EntityStateSymbol,
		Detached: EntityStateSymbol,
		Modified: EntityStateSymbol,
		Unchanged: EntityStateSymbol
	}

	declare export interface EntityTypeOptions {
		shortName?: string,
		namespace?: string,
		autoGeneratedKeyType?: AutoGeneratedKeyType,
		defaultResourceName?: string,
		dataProperties?: DataProperty[],
		navigationProperties?: NavigationProperty[]
	}

	declare export interface EntityTypeProperties {
		autoGeneratedKeyType?: AutoGeneratedKeyType,
		defaultResourceName?: string,
		serializerFn?: (dataProperty: DataProperty, value: any) => any
	}

	declare export interface FetchStrategy {
		FromLocalCache: FetchStrategySymbol,
		FromServer: FetchStrategySymbol
	}

	declare export interface FilterQueryOp {
		Contains: FilterQueryOpSymbol,
		EndsWith: FilterQueryOpSymbol,
		Equals: FilterQueryOpSymbol,
		GreaterThan: FilterQueryOpSymbol,
		GreaterThanOrEqual: FilterQueryOpSymbol,
		IsTypeOf: FilterQueryOpSymbol,
		LessThan: FilterQueryOpSymbol,
		LessThanOrEqual: FilterQueryOpSymbol,
		NotEquals: FilterQueryOpSymbol,
		StartsWith: FilterQueryOpSymbol,
		Any: FilterQueryOpSymbol,
		All: FilterQueryOpSymbol
	}

	declare export interface MergeStrategy {
		OverwriteChanges: MergeStrategySymbol,
		PreserveChanges: MergeStrategySymbol,
		SkipMerge: MergeStrategySymbol,
		Disallowed: MergeStrategySymbol
	}

	declare export interface MetadataStoreOptions {
		namingConvention?: NamingConvention,
		localQueryComparisonOptions?: LocalQueryComparisonOptions
	}

	declare export interface NamingConventionOptions {
		serverPropertyNameToClient?: (name: string) => string,
		clientPropertyNameToServer?: (name: string) => string
	}

	declare export interface NavigationPropertyOptions {
		name?: string,
		nameOnServer?: string,
		entityTypeName: string,
		isScalar?: boolean,
		associationName?: string,
		foreignKeyNames?: string[],
		foreignKeyNamesOnServer?: string[],
		validators?: Validator[]
	}

	declare export interface IRecursiveArray<T> {
		[i: number]: T | IRecursiveArray<T>
	}

	declare export interface PredicateMethod {
		(predicates: Predicate[]): Predicate,
		(...predicates: Predicate[]): Predicate,
		(property: string, operator: string, value: any, valueIsLiteral?: boolean): Predicate,
		(property: string, operator: FilterQueryOpSymbol, value: any, valueIsLiteral?: boolean): Predicate,
		(property: string, filterop: FilterQueryOpSymbol, property2: string, filterop2: FilterQueryOpSymbol, value: any): Predicate,
		(property: string, filterop: string, property2: string, filterop2: string, value: any): Predicate
	}

	declare export interface QueryOptionsConfiguration {
		fetchStrategy?: FetchStrategySymbol,
		mergeStrategy?: MergeStrategySymbol
	}

	declare export interface HttpResponse {
		config: any,
		data: Entity[],
		error?: any,
		saveContext?: any,
		status: number,
		getHeaders(headerName: string): string
	}

	declare export interface QueryResult {
		results: Entity[],
		query: EntityQuery,
		httpResponse: HttpResponse,
		entityManager?: EntityManager,
		inlineCount?: number,
		retrievedEntities?: Entity[]
	}

	declare export interface SaveOptionsConfiguration {
		allowConcurrentSaves?: boolean,
		resourceName?: string,
		dataService?: DataService,
		tag?: Object
	}

	declare export interface SaveResult {
		entities: Entity[],
		keyMappings: any,
		XHR: XMLHttpRequest
	}

	declare export interface ValidationOptionsConfiguration {
		validateOnAttach?: boolean,
		validateOnSave?: boolean,
		validateOnQuery?: boolean,
		validateOnPropertyChange?: boolean
	}

	declare export interface ValidatorFunction {
		(value: any, context: ValidatorFunctionContext): void
	}

	declare export interface ValidatorFunctionContext {
		value: any,
		validatorName: string,
		displayName: string,
		messageTemplate: string,
		message?: string
	}

		declare export class AutoGeneratedKeyType  {
		Identity: AutoGeneratedKeyType;
		KeyGenerator: AutoGeneratedKeyType;
		None: AutoGeneratedKeyType
	}

	declare export class ComplexAspect  {
		complexObject: ComplexObject;
		getEntityAspect(): EntityAspect;
		parent: Object;
		parentProperty: DataProperty;
		getPropertyPath(propName: string): string;
		originalValues: Object
	}

	declare export class ComplexType extends IStructuralType {
		complexProperties: DataProperty[];
		dataProperties: DataProperty[];
		name: string;
		namespace: string;
		shortName: string;
		unmappedProperties: DataProperty[];
		validators: Validator[];
		addProperty(dataProperty: DataProperty): ComplexType;
		getProperties(): DataProperty[]
	}

	declare export class DataProperty extends IProperty {
		complexTypeName: string;
		concurrencyMode: string;
		dataType: DataTypeSymbol;
		defaultValue: any;
		isComplexProperty: boolean;
		isDataProperty: boolean;
		isInherited: boolean;
		isNavigationProperty: boolean;
		isNullable: boolean;
		isPartOfKey: boolean;
		isUnmapped: boolean;
		maxLength: number;
		name: string;
		nameOnServer: string;
		displayName: string;
		parentType: IStructuralType;
		relatedNavigationProperty: NavigationProperty;
		validators: Validator[];
		constructor(config: DataPropertyOptions): this
	}

	declare export class DataService  {
		adapterInstance: DataServiceAdapter;
		adapterName: string;
		hasServerMetadata: boolean;
		serviceName: string;
		uriBuilderName: string;
		jsonResultsAdapter: JsonResultsAdapter;
		useJsonp: boolean;
		constructor(config: DataServiceOptions): this;
		using(config: DataServiceOptions): DataService
	}

	declare export class DataServiceAdapter  {
		checkForRecomposition(
		interfaceInitializedArgs: {
		interfaceName: string,
		isDefault: boolean
	}
	): void;
		initialize(): void;
		fetchMetadata(
		metadataStore: MetadataStore, dataService: DataService
	): breeze.promises.IPromise<any>;
		executeQuery(
		mappingContext: {
		getUrl: () => string,
		query: EntityQuery,
		dataService: DataService
	}
	): breeze.promises.IPromise<any>;
		saveChanges(
		saveContext: {
		resourceName: string,
		dataService: DataService
	}, saveBundle: Object
	): breeze.promises.IPromise<SaveResult>;
		JsonResultsAdapter: JsonResultsAdapter
	}

	declare export class JsonResultsAdapter  {
		name: string;
		extractResults: (data: {
		
	}) => {
		
	};
		visitNode: (
		node: {
		
	}, queryContext: QueryContext, nodeContext: NodeContext
	) => {
		entityType?: EntityType,
		nodeId?: any,
		nodeRefId?: any,
		ignore?: boolean
	};
		constructor(config: {
		name: string,
		extractResults?: (data: {
		
	}) => {
		
	},
		visitNode: (
		node: {
		
	}, queryContext: QueryContext, nodeContext: NodeContext
	) => {
		entityType?: EntityType,
		nodeId?: any,
		nodeRefId?: any,
		ignore?: boolean
	}
	}): this
	}

	declare export class DataTypeSymbol extends undefined$EnumSymbol {
		defaultValue: any;
		isNumeric: boolean;
		isDate: boolean
	}

	declare export class EntityActionSymbol extends undefined$EnumSymbol {
		
	}

	declare export class EntityAspect  {
		entity: Entity;
		entityManager: EntityManager;
		entityState: EntityStateSymbol;
		isBeingSaved: boolean;
		originalValues: Object;
		extraMetadata: Object;
		propertyChanged: PropertyChangedEvent;
		validationErrorsChanged: ValidationErrorsChangedEvent;
		acceptChanges(): void;
		addValidationError(validationError: ValidationError): void;
		clearValidationErrors(): void;
		getKey(forceRefresh?: boolean): EntityKey;
		getValidationErrors(): ValidationError[];
		getValidationErrors(property: string): ValidationError[];
		getValidationErrors(property: IProperty): ValidationError[];
		hasValidationErrors: boolean;
		isNavigationPropertyLoaded(navigationProperty: string): boolean;
		isNavigationPropertyLoaded(navigationProperty: NavigationProperty): boolean;
		loadNavigationProperty(
		navigationProperty: string, callback?: Function, errorCallback?: Function
	): breeze.promises.IPromise<QueryResult>;
		loadNavigationProperty(
		navigationProperty: NavigationProperty, callback?: Function, errorCallback?: Function
	): breeze.promises.IPromise<QueryResult>;
		rejectChanges(): void;
		removeValidationError(validator: Validator): void;
		removeValidationError(validator: Validator, property: DataProperty): void;
		removeValidationError(validator: Validator, property: NavigationProperty): void;
		removeValidationError(validationError: ValidationError): void;
		setAdded(): void;
		setDeleted(): void;
		setDetached(): void;
		setModified(): void;
		setUnchanged(): void;
		setEntityState(entityState: EntityStateSymbol): void;
		validateEntity(): boolean;
		validateProperty(property: string, context?: any): boolean;
		validateProperty(property: DataProperty, context?: any): boolean;
		validateProperty(property: NavigationProperty, context?: any): boolean
	}

	declare export class PropertyChangedEventArgs  {
		entity: Entity;
		property: IProperty;
		propertyName: string;
		oldValue: any;
		newValue: any;
		parent: any
	}

	declare export class PropertyChangedEvent extends undefined$Event {
		subscribe(callback?: (data: PropertyChangedEventArgs) => void): number
	}

	declare export class ValidationErrorsChangedEventArgs  {
		entity: Entity;
		added: ValidationError[];
		removed: ValidationError[]
	}

	declare export class ValidationErrorsChangedEvent extends undefined$Event {
		subscribe(callback?: (data: ValidationErrorsChangedEventArgs) => void): number
	}

	declare export class EntityKey  {
		constructor(entityType: EntityType, keyValue: any): this;
		constructor(entityType: EntityType, keyValues: any[]): this;
		equals(entityKey: EntityKey): boolean;
		equals(k1: EntityKey, k2: EntityKey): boolean;
		entityType: EntityType;
		values: any[]
	}

	declare export class EntityManager  {
		dataService: DataService;
		keyGeneratorCtor: Function;
		metadataStore: MetadataStore;
		queryOptions: QueryOptions;
		saveOptions: SaveOptions;
		serviceName: string;
		validationOptions: ValidationOptions;
		entityChanged: EntityChangedEvent;
		hasChangesChanged: HasChangesChangedEvent;
		validationErrorsChanged: ValidationErrorsChangedEvent;
		constructor(config?: EntityManagerOptions): this;
		constructor(config?: string): this;
		acceptChanges(): void;
		addEntity(entity: Entity): Entity;
		attachEntity(
		entity: Entity, entityState?: EntityStateSymbol, mergeStrategy?: MergeStrategySymbol
	): Entity;
		clear(): void;
		createEmptyCopy(): EntityManager;
		createEntity(
		typeName: string, config?: {
		
	}, entityState?: EntityStateSymbol, mergeStrategy?: MergeStrategySymbol
	): Entity;
		createEntity(
		entityType: EntityType, config?: {
		
	}, entityState?: EntityStateSymbol, mergeStrategy?: MergeStrategySymbol
	): Entity;
		detachEntity(entity: Entity): boolean;
		executeQuery(
		query: string, callback?: ExecuteQuerySuccessCallback, errorCallback?: ExecuteQueryErrorCallback
	): breeze.promises.IPromise<QueryResult>;
		executeQuery(
		query: EntityQuery, callback?: ExecuteQuerySuccessCallback, errorCallback?: ExecuteQueryErrorCallback
	): breeze.promises.IPromise<QueryResult>;
		executeQueryLocally(query: EntityQuery): Entity[];
		exportEntities(entities?: Entity[], includeMetadata?: boolean): string;
		exportEntities(entities?: Entity[], options?: ExportEntitiesOptions): any;
		fetchEntityByKey(
		typeName: string, keyValue: any, checkLocalCacheFirst?: boolean
	): breeze.promises.IPromise<EntityByKeyResult>;
		fetchEntityByKey(
		typeName: string, keyValues: any[], checkLocalCacheFirst?: boolean
	): breeze.promises.IPromise<EntityByKeyResult>;
		fetchEntityByKey(entityKey: EntityKey): breeze.promises.IPromise<EntityByKeyResult>;
		fetchMetadata(
		callback?: (schema: any) => void, errorCallback?: breeze.core.ErrorCallback
	): breeze.promises.IPromise<any>;
		generateTempKeyValue(entity: Entity): any;
		getChanges(): Entity[];
		getChanges(entityTypeName: string): Entity[];
		getChanges(entityTypeNames: string[]): Entity[];
		getChanges(entityType: EntityType): Entity[];
		getChanges(entityTypes: EntityType[]): Entity[];
		getEntities(entityTypeName: string, entityState?: EntityStateSymbol): Entity[];
		getEntities(entityTypeNames?: string[], entityState?: EntityStateSymbol): Entity[];
		getEntities(entityTypeName?: string, entityStates?: EntityStateSymbol[]): Entity[];
		getEntities(entityTypeNames?: string[], entityStates?: EntityStateSymbol[]): Entity[];
		getEntities(entityType: EntityType, entityState?: EntityStateSymbol): Entity[];
		getEntities(entityTypes?: EntityType[], entityState?: EntityStateSymbol): Entity[];
		getEntities(entityType?: EntityType, entityStates?: EntityStateSymbol[]): Entity[];
		getEntities(entityTypes?: EntityType[], entityStates?: EntityStateSymbol[]): Entity[];
		getEntityByKey(typeName: string, keyValue: any): Entity;
		getEntityByKey(typeName: string, keyValues: any[]): Entity;
		getEntityByKey(entityKey: EntityKey): Entity;
		hasChanges(): boolean;
		hasChanges(entityTypeName: string): boolean;
		hasChanges(entityTypeNames: string[]): boolean;
		hasChanges(entityType: EntityType): boolean;
		hasChanges(entityTypes: EntityType[]): boolean;
		importEntities(
		exportedString: string, config?: {
		mergeStrategy?: MergeStrategySymbol,
		metadataVersionFn?: (any: any) => void
	}
	): EntityManager;
		importEntities(
		exportedData: Object, config?: {
		mergeStrategy?: MergeStrategySymbol,
		metadataVersionFn?: (any: any) => void
	}
	): EntityManager;
		importEntities(
		exportedString: string, config?: {
		mergeStrategy?: MergeStrategySymbol,
		metadataVersionFn?: (any: any) => void
	}
	): {
		entities: Entity[],
		tempKeyMapping: {
		[key: string]: EntityKey
	}
	};
		importEntities(
		exportedData: Object, config?: {
		mergeStrategy?: MergeStrategySymbol,
		metadataVersionFn?: (any: any) => void
	}
	): {
		entities: Entity[],
		tempKeyMapping: {
		[key: string]: EntityKey
	}
	};
		rejectChanges(): Entity[];
		saveChanges(
		entities?: Entity[], saveOptions?: SaveOptions, callback?: SaveChangesSuccessCallback, errorCallback?: SaveChangesErrorCallback
	): breeze.promises.IPromise<SaveResult>;
		setProperties(config: EntityManagerProperties): void
	}

	declare export class EntityChangedEventArgs  {
		entity: Entity;
		entityAction: EntityActionSymbol;
		args: Object
	}

	declare export class EntityChangedEvent extends undefined$Event {
		subscribe(callback?: (data: EntityChangedEventArgs) => void): number
	}

	declare export class HasChangesChangedEventArgs  {
		entityManager: EntityManager;
		hasChanges: boolean
	}

	declare export class HasChangesChangedEvent extends undefined$Event {
		subscribe(callback?: (data: HasChangesChangedEventArgs) => void): number
	}

	declare export class EntityQuery  {
		entityManager: EntityManager;
		orderByClause: OrderByClause;
		parameters: Object;
		queryOptions: QueryOptions;
		resourceName: string;
		resultEntityType: EntityType;
		skipCount: number;
		takeCount: number;
		wherePredicate: Predicate;
		constructor(resourceName?: string): this;
		constructor(tree: Object): this;
		execute(
		callback?: ExecuteQuerySuccessCallback, errorCallback?: ExecuteQueryErrorCallback
	): breeze.promises.IPromise<QueryResult>;
		executeLocally(): Entity[];
		expand(propertyPaths: string[]): EntityQuery;
		expand(propertyPaths: string): EntityQuery;
		from(resourceName: string): EntityQuery;
		from(resourceName: string): EntityQuery;
		fromEntities(entity: Entity): EntityQuery;
		fromEntities(entities: Entity[]): EntityQuery;
		fromEntityKey(entityKey: EntityKey): EntityQuery;
		fromEntityNavigation(entity: Entity, navigationProperty: NavigationProperty): EntityQuery;
		inlineCount(enabled?: boolean): EntityQuery;
		noTracking(enabled?: boolean): EntityQuery;
		orderBy(propertyPaths: string, isDescending?: boolean): EntityQuery;
		orderBy(propertyPaths: string[], isDescending?: boolean): EntityQuery;
		orderByDesc(propertyPaths: string): EntityQuery;
		orderByDesc(propertyPaths: string[]): EntityQuery;
		select(propertyPaths: string): EntityQuery;
		select(propertyPaths: string[]): EntityQuery;
		skip(count: number): EntityQuery;
		take(count: number): EntityQuery;
		top(count: number): EntityQuery;
		toType(typeName: string): EntityQuery;
		toType(type: EntityType): EntityQuery;
		using(obj: EntityManager): EntityQuery;
		using(obj: DataService): EntityQuery;
		using(obj: JsonResultsAdapter): EntityQuery;
		using(obj: QueryOptions): EntityQuery;
		using(obj: MergeStrategySymbol): EntityQuery;
		using(obj: FetchStrategySymbol): EntityQuery;
		where(predicate: Predicate): EntityQuery;
		where(property: string, operator: string, value: any): EntityQuery;
		where(property: string, operator: FilterQueryOpSymbol, value: any): EntityQuery;
		where(
		property: string, filterop: FilterQueryOpSymbol, property2: string, filterop2: FilterQueryOpSymbol, value: any
	): EntityQuery;
		where(
		property: string, filterop: string, property2: string, filterop2: string, value: any
	): EntityQuery;
		where(predicate: FilterQueryOpSymbol): EntityQuery;
		withParameters(params: Object): EntityQuery;
		toJSON(): string
	}

	declare export class EntityStateSymbol extends undefined$EnumSymbol {
		isAdded(): boolean;
		isAddedModifiedOrDeleted(): boolean;
		isDeleted(): boolean;
		isDetached(): boolean;
		isModified(): boolean;
		isUnchanged(): boolean;
		isUnchangedOrModified(): boolean
	}

	declare export class EntityType extends IStructuralType {
		autoGeneratedKeyType: AutoGeneratedKeyType;
		baseEntityType: EntityType;
		complexProperties: DataProperty[];
		concurrencyProperties: DataProperty[];
		dataProperties: DataProperty[];
		defaultResourceName: string;
		foreignKeyProperties: DataProperty[];
		isAbstract: boolean;
		keyProperties: DataProperty[];
		metadataStore: MetadataStore;
		name: string;
		namespace: string;
		navigationProperties: NavigationProperty[];
		shortName: string;
		unmappedProperties: DataProperty[];
		validators: Validator[];
		constructor(config: MetadataStore): this;
		constructor(config: EntityTypeOptions): this;
		addProperty(property: IProperty): void;
		addValidator(validator: Validator, property?: IProperty): void;
		createEntity(initialValues?: Object): Entity;
		getCtor(): Function;
		getDataProperty(propertyName: string): DataProperty;
		getNavigationProperty(propertyName: string): NavigationProperty;
		getProperties(): IProperty[];
		getProperty(propertyPath: string, throwIfNotFound?: boolean): IProperty;
		getPropertyNames(): string[];
		getSelfAndSubtypes(): EntityType[];
		isSubtypeOf(entityType: EntityType): boolean;
		setProperties(config: EntityTypeProperties): void;
		toString(): string
	}

	declare export class FetchStrategySymbol extends undefined$EnumSymbol {
		
	}

	declare export class FilterQueryOpSymbol extends undefined$EnumSymbol {
		
	}

	declare export class LocalQueryComparisonOptions  {
		caseInsensitiveSQL: LocalQueryComparisonOptions;
		defaultInstance: LocalQueryComparisonOptions;
		constructor(config: {
		name?: string,
		isCaseSensitive?: boolean,
		usesSql92CompliantStringComparison?: boolean
	}): this;
		setAsDefault(): void
	}

	declare export class MergeStrategySymbol extends undefined$EnumSymbol {
		
	}

	declare export class MetadataStore  {
		constructor(): this;
		constructor(config?: MetadataStoreOptions): this;
		namingConvention: NamingConvention;
		addDataService(dataService: DataService, shouldOverwrite?: boolean): void;
		addEntityType(structuralType: IStructuralType): void;
		exportMetadata(): string;
		fetchMetadata(
		dataService: string, callback?: (data: any) => void, errorCallback?: breeze.core.ErrorCallback
	): breeze.promises.IPromise<any>;
		fetchMetadata(
		dataService: DataService, callback?: (data: any) => void, errorCallback?: breeze.core.ErrorCallback
	): breeze.promises.IPromise<any>;
		getDataService(serviceName: string): DataService;
		getEntityType(entityTypeName: string, okIfNotFound?: boolean): IStructuralType;
		getEntityTypes(): IStructuralType[];
		hasMetadataFor(serviceName: string): boolean;
		importMetadata(exportedString: string): MetadataStore;
		importMetadata(exportedString: string, allowMerge?: boolean): MetadataStore;
		isEmpty(): boolean;
		registerEntityTypeCtor(
		entityTypeName: string, entityCtor: Function, initializationFn?: (entity: Entity) => void, noTrackingFn?: (node: Object, entityType: EntityType) => Object
	): void;
		trackUnmappedType(entityCtor: Function, interceptor?: Function): void;
		setEntityTypeForResourceName(resourceName: string, entityType: EntityType): void;
		setEntityTypeForResourceName(resourceName: string, entityTypeName: string): void;
		getEntityTypeNameForResourceName(resourceName: string): string;
		setProperties(config: {
		name?: string,
		serializerFn?: Function
	}): void
	}

	declare export class NamingConvention  {
		camelCase: NamingConvention;
		defaultInstance: NamingConvention;
		none: NamingConvention;
		constructor(config: NamingConventionOptions): this;
		clientPropertyNameToServer(clientPropertyName: string): string;
		clientPropertyNameToServer(clientPropertyName: string, property: IProperty): string;
		serverPropertyNameToClient(serverPropertyName: string): string;
		serverPropertyNameToClient(serverPropertyName: string, property: IProperty): string;
		setAsDefault(): NamingConvention
	}

	declare export class NavigationProperty extends IProperty {
		associationName: string;
		entityType: EntityType;
		foreignKeyNames: string[];
		inverse: NavigationProperty;
		isDataProperty: boolean;
		isNavigationProperty: boolean;
		isScalar: boolean;
		name: string;
		nameOnServer: string;
		displayName: string;
		parentType: IStructuralType;
		relatedDataProperties: DataProperty[];
		validators: Validator[];
		constructor(config: NavigationPropertyOptions): this
	}

	declare export class Predicate  {
		constructor(): this;
		constructor(property: string, operator: string, value: any): this;
		constructor(property: string, operator: FilterQueryOpSymbol, value: any): this;
		constructor(property: string, operator: string, value: {
		value: any,
		isLiteral?: boolean,
		dataType?: breeze.DataType
	}): this;
		constructor(property: string, operator: FilterQueryOpSymbol, value: {
		value: any,
		isLiteral?: boolean,
		dataType?: breeze.DataType
	}): this;
		constructor(property: string, filterop: FilterQueryOpSymbol, property2: string, filterop2: FilterQueryOpSymbol, value: any): this;
		constructor(property: string, filterop: string, property2: string, filterop2: string, value: any): this;
		constructor(passthru: string): this;
		constructor(predicate: Predicate): this;
		constructor(anArray: IRecursiveArray<string | number | FilterQueryOpSymbol | Predicate>): this;
		and: PredicateMethod;
		and: PredicateMethod;
		create: PredicateMethod;
		isPredicate(o: any): boolean;
		not(predicate: Predicate): Predicate;
		not(): Predicate;
		or: PredicateMethod;
		or: PredicateMethod;
		toFunction(): Function;
		toString(): string;
		validate(entityType: EntityType): void;
		toJSON(): string
	}

	declare export class QueryOptions  {
		defaultInstance: QueryOptions;
		fetchStrategy: FetchStrategySymbol;
		mergeStrategy: MergeStrategySymbol;
		includeDeleted: boolean;
		constructor(config?: QueryOptionsConfiguration): this;
		setAsDefault(): void;
		using(config: QueryOptionsConfiguration): QueryOptions;
		using(config: MergeStrategySymbol): QueryOptions;
		using(config: FetchStrategySymbol): QueryOptions
	}

	declare export class SaveOptions  {
		allowConcurrentSaves: boolean;
		resourceName: string;
		dataService: DataService;
		tag: Object;
		defaultInstance: SaveOptions;
		constructor(config?: {
		allowConcurrentSaves?: boolean,
		resourceName?: string,
		dataService?: DataService,
		tag?: any
	}): this;
		setAsDefault(): SaveOptions;
		using(config: SaveOptionsConfiguration): SaveOptions
	}

	declare export class ValidationError  {
		key: string;
		context: any;
		errorMessage: string;
		property: IProperty;
		propertyName: string;
		validator: Validator;
		getKey: (validator: Validator, property: string) => string;
		constructor(validator: Validator, context: any, errorMessage: string, key: string): this
	}

	declare export class ValidationOptions  {
		defaultInstance: ValidationOptions;
		validateOnAttach: boolean;
		validateOnPropertyChange: boolean;
		validateOnQuery: boolean;
		validateOnSave: boolean;
		constructor(config?: ValidationOptionsConfiguration): this;
		setAsDefault(): ValidationOptions;
		using(config: ValidationOptionsConfiguration): ValidationOptions
	}

	declare export class Validator  {
		messageTemplates: any;
		context: any;
		name: string;
		constructor(name: string, validatorFn: ValidatorFunction, context?: any): this;
		bool(): Validator;
		byte(context?: {
		messageTemplate?: string
	}): Validator;
		date(): Validator;
		duration(): Validator;
		number(context?: {
		messageTemplate?: string
	}): Validator;
		double(context?: {
		messageTemplate?: string
	}): Validator;
		single(context?: {
		messageTemplate?: string
	}): Validator;
		guid(): Validator;
		int16(context?: {
		messageTemplate?: string
	}): Validator;
		int32(context?: {
		messageTemplate?: string
	}): Validator;
		int64(context?: {
		messageTemplate?: string
	}): Validator;
		integer(context?: {
		messageTemplate?: string
	}): Validator;
		maxLength(context: {
		maxLength: number,
		messageTemplate?: string
	}): Validator;
		required(context?: {
		messageTemplate?: string
	}): Validator;
		string(): Validator;
		stringLength(
		context: {
		maxLength: number,
		minLength: number,
		messageTemplate?: string
	}
	): Validator;
		creditCard(context?: {
		messageTemplate?: string
	}): Validator;
		regularExpression(context: {
		expression: RegExp,
		messageTemplate?: string
	}): Validator;
		emailAddress(context?: {
		messageTemplate?: string
	}): Validator;
		phone(context?: {
		messageTemplate?: string
	}): Validator;
		url(context?: {
		messageTemplate?: string
	}): Validator;
		none(): Validator;
		fromJSON(json: string): Validator;
		register(validator: Validator): void;
		registerFactory(fn: () => Validator, name: string): void;
		makeRegExpValidator(
		validatorName: string, expression: RegExp, defaultMessage: string, context?: any
	): Validator;
		validate(value: any, context?: any): ValidationError;
		getMessage(): string
	}

	
}

declare module 'config' {
		declare export interface Adapter {
		getRoutePrefix: Function
	}

	declare export interface AdapterInstancesConfig {
		ajax?: string,
		dataService?: string,
		modelLibary?: string,
		uriBuilder?: string
	}

	declare export function getAdapter(interfaceName: string, adapterName?: string): Function

	declare export function getAdapterInstance(interfaceName: string, adapterName?: string): Object

	declare export function initializeAdapterInstance(interfaceName: string, adapterName: string, isDefault?: boolean): Adapter

	declare export function initializeAdapterInstances(config: AdapterInstancesConfig): Object[]

	declare export function registerAdapter(interfaceName: string, adapterCtor: Function): void

	declare export function registerFunction(fn: Function, fnName: string): void

	declare export function registerType(ctor: Function, typeName: string): void

	declare export function setQ(q: breeze.promises.IPromiseService): void

		
}

declare module 'promises' {
		declare export interface IPromise<T> {
		then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => U): IPromise<U>,
		then<U>(
		onFulfill: (value: T) => IPromise<U>, onReject?: (reason: any) => U
	): IPromise<U>,
		then<U>(
		onFulfill: (value: T) => U, onReject?: (reason: any) => IPromise<U>
	): IPromise<U>,
		then<U>(
		onFulfill: (value: T) => IPromise<U>, onReject?: (reason: any) => IPromise<U>
	): IPromise<U>,
		catch<U>(onRejected: (reason: any) => U): IPromise<U>,
		catch<U>(onRejected: (reason: any) => IPromise<U>): IPromise<U>,
		finally(finallyCallback: () => any): IPromise<T>
	}

	declare export interface IDeferred<T> {
		promise: IPromise<T>,
		resolve(value: T): void,
		reject(reason: any): void
	}

	declare export interface IPromiseService {
		defer<T>(): IDeferred<T>,
		reject(reason?: any): IPromise<any>,
		resolve<T>(object: T): IPromise<T>,
		resolve<T>(object: IPromise<T>): IPromise<T>
	}

			
}