

declare module 'sequelize' {
	declare type FindOptionsAttriburesArray = Array<string | [string, string] | fn | [fn, string] | cast | [cast, string]>;

	declare interface BelongsToGetAssociationMixinOptions {
		scope?: string | boolean
	}

	declare interface BelongsToGetAssociationMixin<TInstance> {
		(options?: BelongsToGetAssociationMixinOptions): Promise<TInstance>
	}

	declare interface BelongsToSetAssociationMixinOptions {
		save?: boolean
	}

	declare interface BelongsToSetAssociationMixin<TInstance, TInstancePrimaryKey> {
		(newAssociation?: TInstance | TInstancePrimaryKey, options?: BelongsToSetAssociationMixinOptions | InstanceSaveOptions): Promise<void>
	}

	declare interface BelongsToCreateAssociationMixinOptions {
		
	}

	declare interface BelongsToCreateAssociationMixin<TAttributes> {
		(values?: TAttributes, options?: BelongsToCreateAssociationMixinOptions | CreateOptions | BelongsToSetAssociationMixinOptions): Promise<void>
	}

	declare interface HasOneGetAssociationMixinOptions {
		scope?: string | boolean
	}

	declare interface HasOneGetAssociationMixin<TInstance> {
		(options?: HasOneGetAssociationMixinOptions): Promise<TInstance>
	}

	declare interface HasOneSetAssociationMixinOptions {
		save?: boolean
	}

	declare interface HasOneSetAssociationMixin<TInstance, TInstancePrimaryKey> {
		(newAssociation?: TInstance | TInstancePrimaryKey, options?: HasOneSetAssociationMixinOptions | HasOneGetAssociationMixinOptions | InstanceSaveOptions): Promise<void>
	}

	declare interface HasOneCreateAssociationMixinOptions {
		
	}

	declare interface HasOneCreateAssociationMixin<TAttributes> {
		(values?: TAttributes, options?: HasOneCreateAssociationMixinOptions | HasOneSetAssociationMixinOptions | CreateOptions): Promise<void>
	}

	declare interface HasManyGetAssociationsMixinOptions {
		where?: WhereOptions,
		scope?: string | boolean
	}

	declare interface HasManyGetAssociationsMixin<TInstance> {
		(options?: HasManyGetAssociationsMixinOptions): Promise<TInstance[]>
	}

	declare interface HasManySetAssociationsMixinOptions {
		validate?: boolean
	}

	declare interface HasManySetAssociationsMixin<TInstance, TInstancePrimaryKey> {
		(newAssociations?: Array<TInstance | TInstancePrimaryKey>, options?: HasManySetAssociationsMixinOptions | FindOptions | InstanceUpdateOptions): Promise<void>
	}

	declare interface HasManyAddAssociationsMixinOptions {
		validate?: boolean
	}

	declare interface HasManyAddAssociationsMixin<TInstance, TInstancePrimaryKey> {
		(newAssociations?: Array<TInstance | TInstancePrimaryKey>, options?: HasManyAddAssociationsMixinOptions | InstanceUpdateOptions): Promise<void>
	}

	declare interface HasManyAddAssociationMixinOptions {
		validate?: boolean
	}

	declare interface HasManyAddAssociationMixin<TInstance, TInstancePrimaryKey> {
		(newAssociation?: TInstance | TInstancePrimaryKey, options?: HasManyAddAssociationMixinOptions | InstanceUpdateOptions): Promise<void>
	}

	declare interface HasManyCreateAssociationMixinOptions {
		
	}

	declare interface HasManyCreateAssociationMixin<TAttributes> {
		(values?: TAttributes, options?: HasManyCreateAssociationMixinOptions | CreateOptions): Promise<void>
	}

	declare interface HasManyRemoveAssociationMixinOptions {
		
	}

	declare interface HasManyRemoveAssociationMixin<TInstance, TInstancePrimaryKey> {
		(oldAssociated?: TInstance | TInstancePrimaryKey, options?: HasManyRemoveAssociationMixinOptions | InstanceUpdateOptions): Promise<void>
	}

	declare interface HasManyRemoveAssociationsMixinOptions {
		
	}

	declare interface HasManyRemoveAssociationsMixin<TInstance, TInstancePrimaryKey> {
		(oldAssociateds?: Array<TInstance | TInstancePrimaryKey>, options?: HasManyRemoveAssociationsMixinOptions | InstanceUpdateOptions): Promise<void>
	}

	declare interface HasManyHasAssociationMixinOptions {
		
	}

	declare interface HasManyHasAssociationMixin<TInstance, TInstancePrimaryKey> {
		(target: TInstance | TInstancePrimaryKey, options?: HasManyHasAssociationMixinOptions | HasManyGetAssociationsMixinOptions): Promise<boolean>
	}

	declare interface HasManyHasAssociationsMixinOptions {
		
	}

	declare interface HasManyHasAssociationsMixin<TInstance, TInstancePrimaryKey> {
		(targets: Array<TInstance | TInstancePrimaryKey>, options?: HasManyHasAssociationsMixinOptions | HasManyGetAssociationsMixinOptions): Promise<boolean>
	}

	declare interface HasManyCountAssociationsMixinOptions {
		where?: WhereOptions,
		scope?: string | boolean
	}

	declare interface HasManyCountAssociationsMixin {
		(options?: HasManyCountAssociationsMixinOptions): Promise<number>
	}

	declare interface BelongsToManyGetAssociationsMixinOptions {
		where?: WhereOptions,
		scope?: string | boolean
	}

	declare interface BelongsToManyGetAssociationsMixin<TInstance> {
		(options?: BelongsToManyGetAssociationsMixinOptions): Promise<TInstance[]>
	}

	declare interface BelongsToManySetAssociationsMixinOptions {
		validate?: boolean
	}

	declare interface BelongsToManySetAssociationsMixin<TInstance, TInstancePrimaryKey, TJoinTableAttributes> {
		(newAssociations?: Array<TInstance | TInstancePrimaryKey>, options?: BelongsToManySetAssociationsMixinOptions | FindOptions | BulkCreateOptions | InstanceUpdateOptions | InstanceDestroyOptions | TJoinTableAttributes): Promise<void>
	}

	declare interface BelongsToManyAddAssociationsMixinOptions {
		validate?: boolean
	}

	declare interface BelongsToManyAddAssociationsMixin<TInstance, TInstancePrimaryKey, TJoinTableAttributes> {
		(newAssociations?: Array<TInstance | TInstancePrimaryKey>, options?: BelongsToManyAddAssociationsMixinOptions | FindOptions | BulkCreateOptions | InstanceUpdateOptions | InstanceDestroyOptions | TJoinTableAttributes): Promise<void>
	}

	declare interface BelongsToManyAddAssociationMixinOptions {
		validate?: boolean
	}

	declare interface BelongsToManyAddAssociationMixin<TInstance, TInstancePrimaryKey, TJoinTableAttributes> {
		(newAssociation?: TInstance | TInstancePrimaryKey, options?: BelongsToManyAddAssociationMixinOptions | FindOptions | BulkCreateOptions | InstanceUpdateOptions | InstanceDestroyOptions | TJoinTableAttributes): Promise<void>
	}

	declare interface BelongsToManyCreateAssociationMixinOptions {
		
	}

	declare interface BelongsToManyCreateAssociationMixin<TAttributes, TJoinTableAttributes> {
		(values?: TAttributes, options?: BelongsToManyCreateAssociationMixinOptions | CreateOptions | TJoinTableAttributes): Promise<void>
	}

	declare interface BelongsToManyRemoveAssociationMixinOptions {
		
	}

	declare interface BelongsToManyRemoveAssociationMixin<TInstance, TInstancePrimaryKey> {
		(oldAssociated?: TInstance | TInstancePrimaryKey, options?: BelongsToManyRemoveAssociationMixinOptions | InstanceDestroyOptions): Promise<void>
	}

	declare interface BelongsToManyRemoveAssociationsMixinOptions {
		
	}

	declare interface BelongsToManyRemoveAssociationsMixin<TInstance, TInstancePrimaryKey> {
		(oldAssociateds?: Array<TInstance | TInstancePrimaryKey>, options?: BelongsToManyRemoveAssociationsMixinOptions | InstanceDestroyOptions): Promise<void>
	}

	declare interface BelongsToManyHasAssociationMixinOptions {
		
	}

	declare interface BelongsToManyHasAssociationMixin<TInstance, TInstancePrimaryKey> {
		(target: TInstance | TInstancePrimaryKey, options?: BelongsToManyHasAssociationMixinOptions | BelongsToManyGetAssociationsMixinOptions): Promise<boolean>
	}

	declare interface BelongsToManyHasAssociationsMixinOptions {
		
	}

	declare interface BelongsToManyHasAssociationsMixin<TInstance, TInstancePrimaryKey> {
		(targets: Array<TInstance | TInstancePrimaryKey>, options?: BelongsToManyHasAssociationsMixinOptions | BelongsToManyGetAssociationsMixinOptions): Promise<boolean>
	}

	declare interface BelongsToManyCountAssociationsMixinOptions {
		where?: WhereOptions,
		scope?: string | boolean
	}

	declare interface BelongsToManyCountAssociationsMixin {
		(options?: BelongsToManyCountAssociationsMixinOptions): Promise<number>
	}

	declare interface AssociationForeignKeyOptions {
		name?: string
	}

	declare interface AssociationOptions {
		hooks?: boolean,
		as?: string | {
		singular: string,
		plural: string
	},
		foreignKey?: string | AssociationForeignKeyOptions,
		onDelete?: string,
		onUpdate?: string,
		constraints?: boolean,
		foreignKeyConstraint?: boolean
	}

	declare interface AssociationScope {
		[scopeName: string]: any
	}

	declare interface AssociationOptionsManyToMany {
		scope?: AssociationScope
	}

	declare interface AssociationOptionsHasOne {
		keyType?: DataTypeAbstract
	}

	declare interface AssociationOptionsBelongsTo {
		targetKey?: string,
		keyType?: DataTypeAbstract
	}

	declare interface AssociationOptionsHasMany {
		keyType?: DataTypeAbstract
	}

	declare interface AssociationOptionsBelongsToMany {
		through: Model<any, any> | string | ThroughOptions,
		otherKey?: string | AssociationForeignKeyOptions
	}

	declare interface ThroughOptions {
		model: Model<any, any>,
		scope?: AssociationScope,
		unique?: boolean
	}

	declare interface Associations {
		hasOne(target: Model<any, any>, options?: AssociationOptionsHasOne): void,
		belongsTo(target: Model<any, any>, options?: AssociationOptionsBelongsTo): void,
		hasMany(target: Model<any, any>, options?: AssociationOptionsHasMany): void,
		belongsToMany(target: Model<any, any>, options: AssociationOptionsBelongsToMany): void
	}

	declare interface DataTypeAbstract {
		dialectTypes: string
	}

	declare interface DataTypeAbstractString<T> {
		(options?: {
		length: number
	}): T,
		(length: number): T,
		BINARY: T
	}

	declare interface DataTypeString {
		
	}

	declare interface DataTypeChar {
		
	}

	declare interface DataTypeText {
		(options?: {
		length: string
	}): DataTypeText,
		(length: string): DataTypeText
	}

	declare interface DataTypeAbstractNumber<T> {
		UNSIGNED: T,
		ZEROFILL: T
	}

	declare interface DataTypeNumber {
		
	}

	declare interface DataTypeInteger {
		(options?: {
		length: number
	}): DataTypeInteger,
		(length: number): DataTypeInteger
	}

	declare interface DataTypeBigInt {
		(options?: {
		length: number
	}): DataTypeBigInt,
		(length: number): DataTypeBigInt
	}

	declare interface DataTypeFloat {
		(options?: {
		length: number,
		decimals?: number
	}): DataTypeFloat,
		(length: number, decimals?: number): DataTypeFloat
	}

	declare interface DataTypeReal {
		(options?: {
		length: number,
		decimals?: number
	}): DataTypeReal,
		(length: number, decimals?: number): DataTypeReal
	}

	declare interface DataTypeDouble {
		(options?: {
		length: number,
		decimals?: number
	}): DataTypeDouble,
		(length: number, decimals?: number): DataTypeDouble
	}

	declare interface DataTypeDecimal {
		(options?: {
		precision: number,
		scale?: number
	}): DataTypeDecimal,
		(precision: number, scale?: number): DataTypeDecimal
	}

	declare interface DataTypeBoolean {
		
	}

	declare interface DataTypeTime {
		
	}

	declare interface DataTypeDate {
		(options?: {
		length?: number
	}): DataTypeDate,
		(length?: number): DataTypeDate
	}

	declare interface DataTypeDateOnly {
		
	}

	declare interface DataTypeHStore {
		
	}

	declare interface DataTypeJSONType {
		
	}

	declare interface DataTypeJSONB {
		
	}

	declare interface DataTypeNow {
		
	}

	declare interface DataTypeBlob {
		(options?: {
		length: string
	}): DataTypeBlob,
		(length: string): DataTypeBlob
	}

	declare interface DataTypeRange {
		(options?: {
		subtype: DataTypeAbstract
	}): DataTypeRange,
		(subtype: DataTypeAbstract): DataTypeRange
	}

	declare interface DataTypeUUID {
		
	}

	declare interface DataTypeUUIDv1 {
		
	}

	declare interface DataTypeUUIDv4 {
		
	}

	declare interface DataTypeVirtual {
		new (subtype: DataTypeAbstract, requireAttributes?: Array<string>): DataTypeVirtual
	}

	declare interface DataTypeEnum {
		(options?: {
		values: string | string[]
	}): DataTypeEnum,
		(values: string | string[]): DataTypeEnum,
		(...args: string[]): DataTypeEnum
	}

	declare interface DataTypeArray {
		(options: {
		type: DataTypeAbstract
	}): DataTypeArray,
		(type: DataTypeAbstract): DataTypeArray
	}

	declare interface DataTypeGeometry {
		(type: string, srid?: number): DataTypeGeometry
	}

	declare interface DataTypes {
		ABSTRACT: DataTypeAbstract,
		STRING: DataTypeString,
		CHAR: DataTypeChar,
		TEXT: DataTypeText,
		NUMBER: DataTypeNumber,
		INTEGER: DataTypeInteger,
		BIGINT: DataTypeBigInt,
		FLOAT: DataTypeFloat,
		TIME: DataTypeTime,
		DATE: DataTypeDate,
		DATEONLY: DataTypeDateOnly,
		BOOLEAN: DataTypeBoolean,
		NOW: DataTypeNow,
		BLOB: DataTypeBlob,
		DECIMAL: DataTypeDecimal,
		NUMERIC: DataTypeDecimal,
		UUID: DataTypeUUID,
		UUIDV1: DataTypeUUIDv1,
		UUIDV4: DataTypeUUIDv4,
		HSTORE: DataTypeHStore,
		JSON: DataTypeJSONType,
		JSONB: DataTypeJSONB,
		VIRTUAL: DataTypeVirtual,
		ARRAY: DataTypeArray,
		NONE: DataTypeVirtual,
		ENUM: DataTypeEnum,
		RANGE: DataTypeRange,
		REAL: DataTypeReal,
		DOUBLE: DataTypeDouble,
		DOUBLE PRECISION: DataTypeDouble,
		GEOMETRY: DataTypeGeometry
	}

	declare interface DeferrableAbstract {
		toString(): string,
		toSql(): string
	}

	declare interface DeferrableInitiallyDeferred {
		(): DeferrableInitiallyDeferred
	}

	declare interface DeferrableInitiallyImmediate {
		(): DeferrableInitiallyImmediate
	}

	declare interface DeferrableNot {
		(): DeferrableNot
	}

	declare interface DeferrableSetDeferred {
		(constraints: string[]): DeferrableSetDeferred
	}

	declare interface DeferrableSetImmediate {
		(constraints: string[]): DeferrableSetImmediate
	}

	declare interface Deferrable {
		INITIALLY_DEFERRED: DeferrableInitiallyDeferred,
		INITIALLY_IMMEDIATE: DeferrableInitiallyImmediate,
		NOT: DeferrableNot,
		SET_DEFERRED: DeferrableSetDeferred,
		SET_IMMEDIATE: DeferrableSetImmediate
	}

	declare interface BaseError {
		
	}

	declare interface ValidationError {
		new (message: string, errors?: ValidationErrorItem[]): ValidationError,
		get(path: string): ValidationErrorItem[],
		errors: ValidationErrorItem[]
	}

	declare interface ValidationErrorItem {
		new (
		message: string, type: string, path: string, value: string
	): ValidationErrorItem,
		message: string,
		type: string,
		path: string,
		value: string
	}

	declare interface DatabaseError {
		new (parent: Error): DatabaseError
	}

	declare interface TimeoutError {
		new (parent: Error): TimeoutError
	}

	declare interface UniqueConstraintError {
		new (
		options: {
		parent?: Error,
		message?: string,
		errors?: Object
	}
	): UniqueConstraintError
	}

	declare interface ForeignKeyConstraintError {
		new (
		options: {
		parent?: Error,
		message?: string,
		index?: string,
		fields?: string[],
		table?: string
	}
	): ForeignKeyConstraintError
	}

	declare interface ExclusionConstraintError {
		new (
		options: {
		parent?: Error,
		message?: string,
		constraint?: string,
		fields?: string[],
		table?: string
	}
	): ExclusionConstraintError
	}

	declare interface ConnectionError {
		new (parent: Error): ConnectionError
	}

	declare interface ConnectionRefusedError {
		new (parent: Error): ConnectionRefusedError
	}

	declare interface AccessDeniedError {
		new (parent: Error): AccessDeniedError
	}

	declare interface HostNotFoundError {
		new (parent: Error): HostNotFoundError
	}

	declare interface HostNotReachableError {
		new (parent: Error): HostNotReachableError
	}

	declare interface InvalidConnectionError {
		new (parent: Error): InvalidConnectionError
	}

	declare interface ConnectionTimedOutError {
		new (parent: Error): ConnectionTimedOutError
	}

	declare interface Errors {
		Error: BaseError,
		ValidationError: ValidationError,
		ValidationErrorItem: ValidationErrorItem,
		DatabaseError: DatabaseError,
		TimeoutError: TimeoutError,
		UniqueConstraintError: UniqueConstraintError,
		ExclusionConstraintError: ExclusionConstraintError,
		ForeignKeyConstraintError: ForeignKeyConstraintError,
		ConnectionError: ConnectionError,
		ConnectionRefusedError: ConnectionRefusedError,
		AccessDeniedError: AccessDeniedError,
		HostNotFoundError: HostNotFoundError,
		HostNotReachableError: HostNotReachableError,
		InvalidConnectionError: InvalidConnectionError,
		ConnectionTimedOutError: ConnectionTimedOutError
	}

	declare interface HooksDefineOptions<TInstance> {
		beforeValidate?: (instance: TInstance, options: Object, fn?: Function) => any,
		afterValidate?: (instance: TInstance, options: Object, fn?: Function) => any,
		beforeCreate?: (attributes: TInstance, options: Object, fn?: Function) => any,
		afterCreate?: (attributes: TInstance, options: Object, fn?: Function) => any,
		beforeDestroy?: (instance: TInstance, options: Object, fn?: Function) => any,
		beforeDelete?: (instance: TInstance, options: Object, fn?: Function) => any,
		afterDestroy?: (instance: TInstance, options: Object, fn?: Function) => any,
		afterDelete?: (instance: TInstance, options: Object, fn?: Function) => any,
		beforeUpdate?: (instance: TInstance, options: Object, fn?: Function) => any,
		afterUpdate?: (instance: TInstance, options: Object, fn?: Function) => any,
		beforeBulkCreate?: (instances: TInstance[], options: Object, fn?: Function) => any,
		afterBulkCreate?: (instances: TInstance[], options: Object, fn?: Function) => any,
		beforeBulkDestroy?: (options: Object, fn?: Function) => any,
		beforeBulkDelete?: (options: Object, fn?: Function) => any,
		afterBulkDestroy?: (options: Object, fn?: Function) => any,
		afterBulkDelete?: (options: Object, fn?: Function) => any,
		beforeBulkUpdate?: (options: Object, fn?: Function) => any,
		afterBulkUpdate?: (options: Object, fn?: Function) => any,
		beforeFind?: (options: Object, fn?: Function) => any,
		beforeFindAfterExpandIncludeAll?: (options: Object, fn?: Function) => any,
		beforeFindAfterOptions?: (options: Object, fn?: Function) => any,
		afterFind?: (
		instancesOrInstance: TInstance[] | TInstance, options: Object, fn?: Function
	) => any
	}

	declare interface Hooks<TInstance> {
		addHook(hookType: string, name: string, fn: Function): Hooks<TInstance>,
		addHook(hookType: string, fn: Function): Hooks<TInstance>,
		hook(hookType: string, name: string, fn: Function): Hooks<TInstance>,
		hook(hookType: string, fn: Function): Hooks<TInstance>,
		removeHook(hookType: string, name: string): Hooks<TInstance>,
		hasHook(hookType: string): boolean,
		hasHooks(hookType: string): boolean,
		beforeValidate(
		name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void
	): void,
		beforeValidate(fn: (instance: TInstance, options: Object, fn?: Function) => void): void,
		afterValidate(
		name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void
	): void,
		afterValidate(fn: (instance: TInstance, options: Object, fn?: Function) => void): void,
		beforeCreate(
		name: string, fn: (attributes: TInstance, options: Object, fn?: Function) => void
	): void,
		beforeCreate(fn: (attributes: TInstance, options: Object, fn?: Function) => void): void,
		afterCreate(
		name: string, fn: (attributes: TInstance, options: Object, fn?: Function) => void
	): void,
		afterCreate(fn: (attributes: TInstance, options: Object, fn?: Function) => void): void,
		beforeDestroy(
		name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void
	): void,
		beforeDestroy(fn: (instance: TInstance, options: Object, fn?: Function) => void): void,
		beforeDelete(
		name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void
	): void,
		beforeDelete(fn: (instance: TInstance, options: Object, fn?: Function) => void): void,
		afterDestroy(
		name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void
	): void,
		afterDestroy(fn: (instance: TInstance, options: Object, fn?: Function) => void): void,
		afterDelete(
		name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void
	): void,
		afterDelete(fn: (instance: TInstance, options: Object, fn?: Function) => void): void,
		beforeUpdate(
		name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void
	): void,
		beforeUpdate(fn: (instance: TInstance, options: Object, fn?: Function) => void): void,
		afterUpdate(
		name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void
	): void,
		afterUpdate(fn: (instance: TInstance, options: Object, fn?: Function) => void): void,
		beforeBulkCreate(
		name: string, fn: (instances: TInstance[], options: Object, fn?: Function) => void
	): void,
		beforeBulkCreate(fn: (instances: TInstance[], options: Object, fn?: Function) => void): void,
		afterBulkCreate(
		name: string, fn: (instances: TInstance[], options: Object, fn?: Function) => void
	): void,
		afterBulkCreate(fn: (instances: TInstance[], options: Object, fn?: Function) => void): void,
		beforeBulkDestroy(name: string, fn: (options: Object, fn?: Function) => void): void,
		beforeBulkDestroy(fn: (options: Object, fn?: Function) => void): void,
		beforeBulkDelete(name: string, fn: (options: Object, fn?: Function) => void): void,
		beforeBulkDelete(fn: (options: Object, fn?: Function) => void): void,
		afterBulkDestroy(name: string, fn: (options: Object, fn?: Function) => void): void,
		afterBulkDestroy(fn: (options: Object, fn?: Function) => void): void,
		afterBulkDelete(name: string, fn: (options: Object, fn?: Function) => void): void,
		afterBulkDelete(fn: (options: Object, fn?: Function) => void): void,
		beforeBulkUpdate(name: string, fn: (options: Object, fn?: Function) => void): void,
		beforeBulkUpdate(fn: (options: Object, fn?: Function) => void): void,
		afterBulkUpdate(name: string, fn: (options: Object, fn?: Function) => void): void,
		afterBulkUpdate(fn: (options: Object, fn?: Function) => void): void,
		beforeFind(name: string, fn: (options: Object, fn?: Function) => void): void,
		beforeFind(fn: (options: Object, fn?: Function) => void): void,
		beforeFindAfterExpandIncludeAll(name: string, fn: (options: Object, fn?: Function) => void): void,
		beforeFindAfterExpandIncludeAll(fn: (options: Object, fn?: Function) => void): void,
		beforeFindAfterOptions(name: string, fn: (options: Object, fn?: Function) => void): void,
		beforeFindAfterOptions(fn: (options: Object, fn?: Function) => void): void,
		afterFind(
		name: string, fn: (
		instancesOrInstance: TInstance[] | TInstance, options: Object, fn?: Function
	) => void
	): void,
		afterFind(
		fn: (
		instancesOrInstance: TInstance[] | TInstance, options: Object, fn?: Function
	) => void
	): void,
		beforeDefine(
		name: string, fn: (attributes: DefineAttributes, options: Object) => void
	): void,
		beforeDefine(fn: (attributes: DefineAttributes, options: Object) => void): void,
		afterDefine(name: string, fn: (model: Model<TInstance, any>) => void): void,
		afterDefine(fn: (model: Model<TInstance, any>) => void): void,
		beforeInit(name: string, fn: (config: Object, options: Object) => void): void,
		beforeInit(fn: (config: Object, options: Object) => void): void,
		afterInit(name: string, fn: (sequelize: Sequelize) => void): void,
		afterInit(fn: (sequelize: Sequelize) => void): void
	}

	declare interface InstanceIncrementDecrementOptions {
		by?: number,
		logging?: boolean | Function,
		transaction?: Transaction,
		where?: WhereOptions | Array<col | and | or | string>
	}

	declare interface InstanceRestoreOptions {
		logging?: boolean | Function,
		transaction?: Transaction
	}

	declare interface InstanceDestroyOptions {
		force?: boolean,
		logging?: boolean | Function,
		transaction?: Transaction
	}

	declare interface InstanceUpdateOptions {
		where?: WhereOptions | Array<col | and | or | string>
	}

	declare interface InstanceSetOptions {
		raw?: boolean,
		reset?: boolean
	}

	declare interface InstanceSaveOptions {
		silent?: boolean
	}

	declare interface Instance<TAttributes> {
		isNewRecord: boolean,
		Model: Model<this, TAttributes>,
		sequelize: Sequelize,
		where(): Object,
		getDataValue(key: string): any,
		setDataValue(key: string, value: any): void,
		get(key: string, options?: {
		plain?: boolean,
		clone?: boolean
	}): any,
		get(options?: {
		plain?: boolean,
		clone?: boolean
	}): TAttributes,
		set(key: string, value: any, options?: InstanceSetOptions): this,
		set(keys: Object, options?: InstanceSetOptions): this,
		setAttributes(key: string, value: any, options?: InstanceSetOptions): this,
		setAttributes(keys: Object, options?: InstanceSetOptions): this,
		changed(key: string): boolean,
		changed(): boolean | string[],
		previous(key: string): any,
		save(options?: InstanceSaveOptions): Promise<this>,
		reload(options?: FindOptions): Promise<this>,
		validate(options?: {
		skip?: string[]
	}): Promise<ValidationError>,
		update(key: string, value: any, options?: InstanceUpdateOptions): Promise<this>,
		update(keys: Object, options?: InstanceUpdateOptions): Promise<this>,
		updateAttributes(key: string, value: any, options?: InstanceUpdateOptions): Promise<this>,
		updateAttributes(keys: Object, options?: InstanceUpdateOptions): Promise<this>,
		destroy(options?: InstanceDestroyOptions): Promise<void>,
		restore(options?: InstanceRestoreOptions): Promise<void>,
		increment(
		fields: string | string[] | Object, options?: InstanceIncrementDecrementOptions
	): Promise<this>,
		decrement(
		fields: string | string[] | Object, options?: InstanceIncrementDecrementOptions
	): Promise<this>,
		equals(other: Instance<any>): boolean,
		equalsOneOf(others: Instance<any>[]): boolean,
		toJSON(): TAttributes
	}

	declare interface LoggingOptions {
		logging?: boolean | Function,
		benchmark?: boolean
	}

	declare interface SearchPathOptions {
		transaction?: Transaction,
		searchPath?: string
	}

	declare interface ReturningOptions {
		returning?: boolean
	}

	declare interface FieldsOptions {
		validate?: boolean,
		fields?: string[]
	}

	declare interface DropOptions {
		cascade?: boolean
	}

	declare interface SchemaOptions {
		schemaDelimeter?: string
	}

	declare interface GetTableNameOptions {
		
	}

	declare interface AddScopeOptions {
		override: boolean
	}

	declare interface ScopeOptions {
		method: string | any[]
	}

	declare interface WhereNested {
		$and: Array<WhereOptions | WhereLogic>,
		$or: Array<WhereOptions | WhereLogic>
	}

	declare interface WherePGStatement {
		$any: Array<string | number>,
		$all: Array<string | number>
	}

	declare interface WhereGeometryOptions {
		type: string,
		coordinates: Array<number[] | number>
	}

	declare interface WhereLogic {
		$ne: string | number | WhereLogic,
		$in: Array<string | number> | literal,
		$not: boolean | string | number | WhereOptions,
		$notIn: Array<string | number> | literal,
		$gte: number | string | Date,
		$gt: number | string | Date,
		$lte: number | string | Date,
		$lt: number | string | Date,
		$like: string | WherePGStatement,
		$iLike: string | WherePGStatement,
		$ilike: string | WherePGStatement,
		$notLike: string | WherePGStatement,
		$notILike: string | WherePGStatement,
		$between: [number, number],
		..: [number, number],
		$notBetween: [number, number],
		!..: [number, number],
		$overlap: [number, number],
		&&: [number, number],
		$contains: any,
		@>: any,
		$contained: any,
		<@: any
	}

	declare interface WhereOptions {
		[field: string]: string | number | WhereLogic | WhereOptions | col | and | or | WhereGeometryOptions | Array<string | number> | Object
	}

	declare interface IncludeThroughOptions {
		where?: WhereOptions,
		attributes?: string[]
	}

	declare interface IncludeAssociation {
		source: Model<any, any>,
		target: Model<any, any>,
		identifier: string
	}

	declare interface IncludeOptions {
		model?: Model<any, any>,
		as?: string,
		association?: IncludeAssociation,
		where?: WhereOptions,
		attributes?: string[],
		required?: boolean,
		through?: IncludeThroughOptions,
		include?: Array<Model<any, any> | IncludeOptions>
	}

	declare interface FindOptions {
		where?: WhereOptions | Array<col | and | or | string>,
		attributes?: FindOptionsAttriburesArray | {
		include?: FindOptionsAttriburesArray,
		exclude?: Array<string>
	},
		paranoid?: boolean,
		include?: Array<Model<any, any> | IncludeOptions>,
		order?: string | col | literal | Array<string | number | Model<any, any> | {
		model: Model<any, any>,
		as?: string
	}> | Array<string | col | literal | Array<string | number | Model<any, any> | {
		model: Model<any, any>,
		as?: string
	}>>,
		limit?: number,
		offset?: number,
		lock?: string | {
		level: string,
		of: Model<any, any>
	},
		raw?: boolean,
		having?: WhereOptions,
		group?: string | string[] | Object
	}

	declare interface CountOptions {
		where?: WhereOptions | string[],
		include?: Array<Model<any, any> | IncludeOptions>,
		distinct?: boolean,
		attributes?: Array<string | [string, string]>,
		group?: Object
	}

	declare interface BuildOptions {
		raw?: boolean,
		isNewRecord?: boolean,
		include?: Array<Model<any, any> | IncludeOptions>
	}

	declare interface CreateOptions {
		onDuplicate?: string
	}

	declare interface FindOrInitializeOptions<TAttributes> {
		where: string | WhereOptions,
		defaults?: TAttributes,
		transaction?: Transaction
	}

	declare interface FindCreateFindOptions<TAttributes> {
		where: string | WhereOptions,
		defaults?: TAttributes
	}

	declare interface UpsertOptions {
		
	}

	declare interface BulkCreateOptions {
		hooks?: boolean,
		individualHooks?: boolean,
		ignoreDuplicates?: boolean,
		updateOnDuplicate?: string[]
	}

	declare interface TruncateOptions {
		cascade?: boolean
	}

	declare interface DestroyOptions {
		where?: WhereOptions,
		hooks?: boolean,
		individualHooks?: boolean,
		limit?: number,
		force?: boolean,
		truncate?: boolean
	}

	declare interface RestoreOptions {
		where?: WhereOptions,
		hooks?: boolean,
		individualHooks?: boolean,
		limit?: number,
		transaction?: Transaction
	}

	declare interface UpdateOptions {
		where: WhereOptions,
		hooks?: boolean,
		sideEffects?: boolean,
		individualHooks?: boolean,
		limit?: number,
		transaction?: Transaction,
		silent?: boolean
	}

	declare interface AggregateOptions {
		where?: WhereOptions,
		dataType?: DataTypeAbstract | string,
		distinct?: boolean,
		transaction?: Transaction,
		plain?: boolean
	}

	declare interface Model<TInstance, TAttributes> {
		Instance(): TInstance,
		removeAttribute(attribute: string): void,
		sync(options?: SyncOptions): Promise<this>,
		drop(options?: DropOptions): Promise<void>,
		schema(schema: string, options?: SchemaOptions): this,
		getTableName(options?: GetTableNameOptions): string | Object,
		addScope(name: string, scope: FindOptions | Function, options?: AddScopeOptions): void,
		scope(options?: string | string[] | ScopeOptions | WhereOptions): this,
		findAll(options?: FindOptions): Promise<TInstance[]>,
		all(optionz?: FindOptions): Promise<TInstance[]>,
		findById(identifier?: number | string, options?: FindOptions): Promise<TInstance>,
		findByPrimary(identifier?: number | string, options?: FindOptions): Promise<TInstance>,
		findOne(options?: FindOptions): Promise<TInstance>,
		find(options?: FindOptions): Promise<TInstance>,
		aggregate(
		field: string, aggregateFunction: string, options?: AggregateOptions
	): Promise<Object>,
		count(options?: CountOptions): Promise<number>,
		findAndCount(options?: FindOptions): Promise<{
		rows: TInstance[],
		count: number
	}>,
		findAndCountAll(options?: FindOptions): Promise<{
		rows: TInstance[],
		count: number
	}>,
		max(field: string, options?: AggregateOptions): Promise<any>,
		min(field: string, options?: AggregateOptions): Promise<any>,
		sum(field: string, options?: AggregateOptions): Promise<number>,
		build(record?: TAttributes, options?: BuildOptions): TInstance,
		bulkBuild(records: TAttributes[], options?: BuildOptions): TInstance[],
		create(values?: TAttributes, options?: CreateOptions): Promise<TInstance>,
		findOrInitialize(options: FindOrInitializeOptions<TAttributes>): Promise<[TInstance, boolean]>,
		findOrBuild(options: FindOrInitializeOptions<TAttributes>): Promise<[TInstance, boolean]>,
		findOrCreate(options: FindOrInitializeOptions<TAttributes>): Promise<[TInstance, boolean]>,
		findCreateFind(options: FindCreateFindOptions<TAttributes>): Promise<TInstance>,
		upsert(values: TAttributes, options?: UpsertOptions): Promise<boolean>,
		insertOrUpdate(values: TAttributes, options?: UpsertOptions): Promise<boolean>,
		bulkCreate(records: TAttributes[], options?: BulkCreateOptions): Promise<TInstance[]>,
		truncate(options?: TruncateOptions): Promise<void>,
		destroy(options?: DestroyOptions): Promise<number>,
		restore(options?: RestoreOptions): Promise<void>,
		update(values: TAttributes, options: UpdateOptions): Promise<[number, TInstance[]]>,
		describe(): Promise<Object>,
		unscoped(): this
	}

	declare interface QueryInterfaceOptions {
		logging?: boolean | Function
	}

	declare interface QueryInterface {
		QueryGenerator: any,
		sequelize: Sequelize,
		createSchema(schema?: string, options?: QueryInterfaceOptions): Promise<void>,
		dropSchema(schema?: string, options?: QueryInterfaceOptions): Promise<void>,
		dropAllSchemas(options?: QueryInterfaceOptions): Promise<void>,
		showAllSchemas(options?: QueryOptions): Promise<Object>,
		databaseVersion(options?: QueryInterfaceOptions): Promise<string>,
		createTable(
		tableName: string | {
		schema?: string,
		tableName?: string
	}, attributes: DefineAttributes, options?: QueryOptions
	): Promise<void>,
		dropTable(tableName: string, options?: QueryOptions): Promise<void>,
		dropAllTables(options?: QueryOptions): Promise<void>,
		dropAllEnums(options?: QueryOptions): Promise<void>,
		renameTable(before: string, after: string, options?: QueryInterfaceOptions): Promise<void>,
		showAllTables(options?: QueryOptions): Promise<string[]>,
		describeTable(
		tableName: string | {
		schema?: string,
		tableName?: string
	}, options?: string | {
		schema?: string,
		schemaDelimeter?: string,
		logging?: boolean | Function
	}
	): Promise<Object>,
		addColumn(
		table: string, key: string, attribute: DefineAttributeColumnOptions | DataTypeAbstract, options?: QueryInterfaceOptions
	): Promise<void>,
		removeColumn(
		table: string, attribute: string, options?: QueryInterfaceOptions
	): Promise<void>,
		changeColumn(
		tableName: string | {
		schema?: string,
		tableName?: string
	}, attributeName: string, dataTypeOrOptions?: string | DataTypeAbstract | DefineAttributeColumnOptions, options?: QueryInterfaceOptions
	): Promise<void>,
		renameColumn(
		tableName: string | {
		schema?: string,
		tableName?: string
	}, attrNameBefore: string, attrNameAfter: string, options?: QueryInterfaceOptions
	): Promise<void>,
		addIndex(
		tableName: string | Object, attributes: string[], options?: QueryOptions, rawTablename?: string
	): Promise<void>,
		showIndex(tableName: string | Object, options?: QueryOptions): Promise<Object>,
		nameIndexes(indexes: string[], rawTablename: string): Promise<void>,
		getForeignKeysForTables(tableNames: string, options?: QueryInterfaceOptions): Promise<Object>,
		removeIndex(
		tableName: string, indexNameOrAttributes: string[] | string, options?: QueryInterfaceOptions
	): Promise<void>,
		insert(
		instance: Instance<any>, tableName: string, values: Object, options?: QueryOptions
	): Promise<Object>,
		upsert(
		tableName: string, values: Object, updateValues: Object, model: Model<any, any>, options?: QueryOptions
	): Promise<Object>,
		bulkInsert(
		tableName: string, records: Object[], options?: QueryOptions, attributes?: string[] | string
	): Promise<Object>,
		update(
		instance: Instance<any>, tableName: string, values: Object, identifier: Object, options?: QueryOptions
	): Promise<Object>,
		bulkUpdate(
		tableName: string, values: Object, identifier: Object, options?: QueryOptions, attributes?: string[] | string
	): Promise<Object>,
		delete(
		instance: Instance<any>, tableName: string, identifier: Object, options?: QueryOptions
	): Promise<Object>,
		bulkDelete(
		tableName: string, identifier: Object, options?: QueryOptions, model?: Model<any, any>
	): Promise<Object>,
		select(
		model: Model<any, any>, tableName: string, options?: QueryOptions
	): Promise<Object[]>,
		increment(
		instance: Instance<any>, tableName: string, values: Object, identifier: Object, options?: QueryOptions
	): Promise<Object>,
		rawSelect(
		tableName: string, options: QueryOptions, attributeSelector: string | string[], model?: Model<any, any>
	): Promise<string[]>,
		createTrigger(
		tableName: string, triggerName: string, timingType: string, fireOnArray: any[], functionName: string, functionParams: any[], optionsArray: string[], options?: QueryInterfaceOptions
	): Promise<void>,
		dropTrigger(
		tableName: string, triggerName: string, options?: QueryInterfaceOptions
	): Promise<void>,
		renameTrigger(
		tableName: string, oldTriggerName: string, newTriggerName: string, options?: QueryInterfaceOptions
	): Promise<void>,
		createFunction(
		functionName: string, params: any[], returnType: string, language: string, body: string, options?: QueryOptions
	): Promise<void>,
		dropFunction(
		functionName: string, params: any[], options?: QueryInterfaceOptions
	): Promise<void>,
		renameFunction(
		oldFunctionName: string, params: any[], newFunctionName: string, options?: QueryInterfaceOptions
	): Promise<void>,
		quoteIdentifier(identifier: string, force: boolean): string,
		quoteTable(identifier: string): string,
		quoteIdentifiers(identifiers: string, force: boolean): string,
		escape(value?: string | number | Date): string,
		setAutocommit(
		transaction: Transaction, value: boolean, options?: QueryOptions
	): Promise<void>,
		setIsolationLevel(transaction: Transaction, value: string, options?: QueryOptions): Promise<void>,
		startTransaction(transaction: Transaction, options?: QueryOptions): Promise<void>,
		deferConstraints(transaction: Transaction, options?: QueryOptions): Promise<void>,
		commitTransaction(transaction: Transaction, options?: QueryOptions): Promise<void>,
		rollbackTransaction(transaction: Transaction, options?: QueryOptions): Promise<void>
	}

	declare interface QueryTypes {
		SELECT: string,
		INSERT: string,
		UPDATE: string,
		BULKUPDATE: string,
		BULKDELETE: string,
		DELETE: string,
		UPSERT: string,
		VERSION: string,
		SHOWTABLES: string,
		SHOWINDEXES: string,
		DESCRIBE: string,
		RAW: string,
		FOREIGNKEYS: string
	}

	declare interface ColumnOptions {
		allowNull?: boolean,
		field?: string,
		defaultValue?: any
	}

	declare interface DefineAttributeColumnReferencesOptions {
		model?: string | Model<any, any>,
		key?: string,
		deferrable?: Deferrable
	}

	declare interface DefineAttributeColumnOptions {
		type: string | DataTypeAbstract,
		unique?: boolean | string | {
		name: string,
		msg: string
	},
		primaryKey?: boolean,
		autoIncrement?: boolean,
		comment?: string,
		references?: DefineAttributeColumnReferencesOptions,
		onUpdate?: string,
		onDelete?: string,
		get?: () => any,
		set?: (val: any) => void,
		validate?: DefineValidateOptions,
		values?: string[]
	}

	declare interface DefineAttributes {
		[name: string]: string | DataTypeAbstract | DefineAttributeColumnOptions
	}

	declare interface QueryOptions {
		raw?: boolean,
		type?: string,
		nest?: boolean,
		plain?: boolean,
		replacements?: Object | string[],
		bind?: Object | string[],
		useMaster?: boolean,
		logging?: boolean | Function,
		instance?: Instance<any>,
		model?: Model<any, any>,
		retry?: {
		match?: string[],
		max?: number
	},
		supportsSearchPath?: boolean,
		mapToModel?: boolean,
		fieldMap?: {
		[key: string]: string
	}
	}

	declare interface DefineValidateOptions {
		is?: string | Array<string | RegExp> | RegExp | {
		msg: string,
		args: string | Array<string | RegExp> | RegExp
	},
		not?: string | Array<string | RegExp> | RegExp | {
		msg: string,
		args: string | Array<string | RegExp> | RegExp
	},
		isEmail?: boolean | {
		msg: string
	},
		isUrl?: boolean | {
		msg: string
	},
		isIP?: boolean | {
		msg: string
	},
		isIPv4?: boolean | {
		msg: string
	},
		isIPv6?: boolean | {
		msg: string
	},
		isAlpha?: boolean | {
		msg: string
	},
		isAlphanumeric?: boolean | {
		msg: string
	},
		isNumeric?: boolean | {
		msg: string
	},
		isInt?: boolean | {
		msg: string
	},
		isFloat?: boolean | {
		msg: string
	},
		isDecimal?: boolean | {
		msg: string
	},
		isLowercase?: boolean | {
		msg: string
	},
		isUppercase?: boolean | {
		msg: string
	},
		notNull?: boolean | {
		msg: string
	},
		isNull?: boolean | {
		msg: string
	},
		notEmpty?: boolean | {
		msg: string
	},
		equals?: string | {
		msg: string
	},
		contains?: string | {
		msg: string
	},
		notIn?: string[][] | {
		msg: string,
		args: string[][]
	},
		isIn?: string[][] | {
		msg: string,
		args: string[][]
	},
		notContains?: string[] | string | {
		msg: string,
		args: string[] | string
	},
		len?: [number, number] | {
		msg: string,
		args: [number, number]
	},
		isUUID?: number | {
		msg: string,
		args: number
	},
		isDate?: boolean | {
		msg: string,
		args: boolean
	},
		isAfter?: string | {
		msg: string,
		args: string
	},
		isBefore?: string | {
		msg: string,
		args: string
	},
		max?: number | {
		msg: string,
		args: number
	},
		min?: number | {
		msg: string,
		args: number
	},
		isArray?: boolean | {
		msg: string,
		args: boolean
	},
		isCreditCard?: boolean | {
		msg: string,
		args: boolean
	},
		[name: string]: any
	}

	declare interface DefineIndexesOptions {
		name?: string,
		index?: string,
		method?: string,
		unique?: boolean,
		concurrently?: boolean,
		fields?: Array<string | {
		attribute: string,
		length: number,
		order: string,
		collate: string
	}>
	}

	declare interface DefineNameOptions {
		singular?: string,
		plural?: string
	}

	declare interface DefineGetterMethodsOptions {
		[name: string]: () => any
	}

	declare interface DefineSetterMethodsOptions {
		[name: string]: (val: any) => void
	}

	declare interface DefineScopeOptions {
		[scopeName: string]: FindOptions | Function
	}

	declare interface DefineOptions<TInstance> {
		defaultScope?: FindOptions,
		scopes?: DefineScopeOptions,
		omitNull?: boolean,
		timestamps?: boolean,
		paranoid?: boolean,
		underscored?: boolean,
		underscoredAll?: boolean,
		freezeTableName?: boolean,
		name?: DefineNameOptions,
		indexes?: DefineIndexesOptions[],
		createdAt?: string | boolean,
		deletedAt?: string | boolean,
		updatedAt?: string | boolean,
		tableName?: string,
		getterMethods?: DefineGetterMethodsOptions,
		setterMethods?: DefineSetterMethodsOptions,
		instanceMethods?: Object,
		classMethods?: Object,
		schema?: string,
		engine?: string,
		charset?: string,
		comment?: string,
		collate?: string,
		initialAutoIncrement?: string,
		hooks?: HooksDefineOptions<TInstance>,
		validate?: DefineValidateOptions
	}

	declare interface SyncOptions {
		force?: boolean,
		match?: RegExp,
		logging?: Function | boolean,
		schema?: string
	}

	declare interface SetOptions {
		
	}

	declare interface PoolOptions {
		max?: number,
		min?: number,
		idle?: number,
		validateConnection?: (client?: any) => boolean
	}

	declare interface ReplicationOptions {
		read?: {
		host?: string,
		port?: string | number,
		username?: string,
		password?: string,
		database?: string
	},
		write?: {
		host?: string,
		port?: string | number,
		username?: string,
		password?: string,
		database?: string
	}
	}

	declare interface Options {
		dialect?: string,
		dialectModulePath?: string,
		dialectOptions?: Object,
		storage?: string,
		host?: string,
		port?: number,
		protocol?: string,
		define?: DefineOptions<any>,
		query?: QueryOptions,
		set?: SetOptions,
		sync?: SyncOptions,
		timezone?: string,
		logging?: boolean | Function,
		omitNull?: boolean,
		native?: boolean,
		replication?: ReplicationOptions,
		pool?: PoolOptions,
		quoteIdentifiers?: boolean,
		isolationLevel?: string,
		transactionType?: string
	}

	declare interface SequelizeStaticAndInstance {
		Utils: Utils,
		Promise: typeof Promise,
		QueryTypes: QueryTypes,
		Validator: Validator,
		Model: Model<any, any>,
		Transaction: TransactionStatic,
		Deferrable: Deferrable,
		Instance: Instance<any>,
		fn(fn: string, ...args: any[]): fn,
		col(col: string): col,
		cast(val: any, type: string): cast,
		literal(val: any): literal,
		asIs(val: any): literal,
		and(...args: Array<string | Object>): and,
		or(...args: Array<string | Object>): or,
		json(conditionsOrPath: string | Object, value?: string | number | boolean): json,
		where(attr: Object, comparator: string, logic: string | Object): where,
		where(attr: Object, logic: string | Object): where,
		condition(attr: Object, logic: string | Object): where
	}

	declare interface SequelizeStatic {
		new (
		database: string, username: string, password: string, options?: Options
	): Sequelize,
		new (database: string, username: string, options?: Options): Sequelize,
		new (uri: string, options?: Options): Sequelize,
		cls: any
	}

	declare interface QueryOptionsTransactionRequired {
		
	}

	declare interface ModelsHashInterface {
		[name: string]: Model<any, any>
	}

	declare interface Sequelize {
		Sequelize: SequelizeStatic,
		models: ModelsHashInterface,
		getDialect(): string,
		getQueryInterface(): QueryInterface,
		define<TInstance, TAttributes>(
		modelName: string, attributes: DefineAttributes, options?: DefineOptions<TInstance>
	): Model<TInstance, TAttributes>,
		model<TInstance, TAttributes>(modelName: string): Model<TInstance, TAttributes>,
		isDefined(modelName: string): boolean,
		import<TInstance, TAttributes>(
		path: string, defineFunction?: (sequelize: Sequelize, dataTypes: DataTypes) => Model<TInstance, TAttributes>
	): Model<TInstance, TAttributes>,
		query(
		sql: string | {
		query: string,
		values: any[]
	}, options?: QueryOptions
	): Promise<any>,
		set(variables: Object, options: QueryOptionsTransactionRequired): Promise<any>,
		escape(value: string): string,
		createSchema(schema: string, options: {
		logging?: boolean | Function
	}): Promise<any>,
		showAllSchemas(options: {
		logging?: boolean | Function
	}): Promise<any>,
		dropSchema(schema: string, options: {
		logging?: boolean | Function
	}): Promise<any>,
		dropAllSchemas(options: {
		logging?: boolean | Function
	}): Promise<any>,
		sync(options?: SyncOptions): Promise<any>,
		truncate(options?: DestroyOptions): Promise<any>,
		drop(options?: DropOptions): Promise<any>,
		authenticate(options?: QueryOptions): Promise<void>,
		validate(options?: QueryOptions): Promise<ValidationError>,
		transaction(
		options: TransactionOptions, autoCallback: (t: Transaction) => Promise<any>
	): Promise<any>,
		transaction(autoCallback: (t: Transaction) => Promise<any>): Promise<any>,
		transaction(): Promise<Transaction>,
		close(): void,
		databaseVersion(): Promise<string>
	}

	declare interface Validator {
		notEmpty(str: string): boolean,
		len(str: string, min: number, max: number): boolean,
		isUrl(str: string): boolean,
		isIPv6(str: string): boolean,
		isIPv4(str: string): boolean,
		notIn(str: string, values: string[]): boolean,
		regex(str: string, pattern: string, modifiers: string): boolean,
		notRegex(str: string, pattern: string, modifiers: string): boolean,
		isDecimal(str: string): boolean,
		min(str: string, val: number): boolean,
		max(str: string, val: number): boolean,
		not(str: string, pattern: string, modifiers: string): boolean,
		contains(str: string, element: string[]): boolean,
		notContains(str: string, element: string[]): boolean,
		is(str: string, pattern: string, modifiers: string): boolean
	}

	declare interface Transaction {
		LOCK: TransactionLock,
		commit(): Promise<void>,
		rollback(): Promise<void>
	}

	declare interface TransactionStatic {
		ISOLATION_LEVELS: TransactionIsolationLevels,
		TYPES: TransactionTypes,
		LOCK: TransactionLock
	}

	declare interface TransactionIsolationLevels {
		READ_UNCOMMITTED: string,
		READ_COMMITTED: string,
		REPEATABLE_READ: string,
		SERIALIZABLE: string
	}

	declare interface TransactionTypes {
		DEFERRED: string,
		IMMEDIATE: string,
		EXCLUSIVE: string
	}

	declare interface TransactionLock {
		UPDATE: string,
		SHARE: string,
		KEY_SHARE: string,
		NO_KEY_UPDATE: string
	}

	declare interface TransactionOptions {
		autocommit?: boolean,
		isolationLevel?: string,
		type?: string,
		logging?: Function
	}

	declare interface fn {
		clone: fnStatic
	}

	declare interface fnStatic {
		new (fn: string, ...args: any[]): fn
	}

	declare interface col {
		col: string
	}

	declare interface colStatic {
		new (col: string): col
	}

	declare interface cast {
		val: any,
		type: string
	}

	declare interface castStatic {
		new (val: any, type: string): cast
	}

	declare interface literal {
		val: any
	}

	declare interface literalStatic {
		new (val: any): literal
	}

	declare interface and {
		args: any[]
	}

	declare interface andStatic {
		new (...args: Array<string | Object>): and
	}

	declare interface or {
		args: any[]
	}

	declare interface orStatic {
		new (...args: Array<string | Object>): or
	}

	declare interface json {
		conditions?: Object,
		path?: string,
		value?: string | number | boolean
	}

	declare interface jsonStatic {
		new (conditionsOrPath: string | Object, value?: string | number | boolean): json
	}

	declare interface where {
		attribute: Object,
		comparator?: string,
		logic: string | Object
	}

	declare interface whereStatic {
		new (attr: Object, comparator: string, logic: string | Object): where,
		new (attr: Object, logic: string | Object): where
	}

	declare interface SequelizeLoDash {
		camelizeIf(str: string, condition: boolean): string,
		underscoredIf(str: string, condition: boolean): string,
		compactLite<T>(arr: T[]): T[],
		matchesDots(dots: string | string[], value: Object): (item: Object) => boolean
	}

	declare interface Utils {
		_: SequelizeLoDash,
		mergeDefaults: typeof undefined,
		lowercaseFirst(str: string): string,
		uppercaseFirst(str: string): string,
		spliceStr(str: string, index: number, count: number, add: string): string,
		camelize(str: string): string,
		format(arr: any[], dialect?: string): string,
		formatNamedParameters(sql: string, parameters: any, dialect?: string): string,
		cloneDeep<T>(obj: T, fn?: (value: T) => any): T,
		mapOptionFieldNames<T>(options: T, Model: Model<any, any>): T,
		mapValueFieldNames(dataValues: Object, fields: string[], Model: Model<any, any>): Object,
		argsArePrimaryKeys(args: any[], primaryKeys: Object): boolean,
		canTreatArrayAsAnd(arr: any[]): boolean,
		combineTableNames(tableName1: string, tableName2: string): string,
		singularize(s: string): string,
		pluralize(s: string): string,
		removeCommentsFromFunctionString(s: string): string,
		toDefaultValue(value: DataTypeAbstract): any,
		toDefaultValue(value: () => DataTypeAbstract): any,
		defaultValueSchemable(value: any): boolean,
		removeNullValuesFromHash(hash: Object, omitNull?: boolean, options?: Object): any,
		inherit(subClass: Object, superClass: Object): Object,
		stack(): string,
		sliceArgs(args: any[], begin?: number): any[],
		now(dialect: string): Date,
		tick(f: Function): void,
		addTicks(s: string, tickChar?: string): string,
		removeTicks(s: string, tickChar?: string): string,
		fn: fnStatic,
		col: colStatic,
		cast: castStatic,
		literal: literalStatic,
		and: andStatic,
		or: orStatic,
		json: jsonStatic,
		where: whereStatic,
		validateParameter(value: Object, expectation: Object, options?: Object): boolean,
		formatReferences(obj: Object): Object,
		Promise: typeof Promise
	}

			declare module.exports: SequelizeStatic


}