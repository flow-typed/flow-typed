

declare module 'js-data' {
					declare module.exports: undefined


}

declare module 'npm$namespace$JSData' {
	declare type DSFilterArg = DSFilterParams | Object;

	declare type DSSyncLifecycleHookHandler = (resource: DSResourceDefinition<any>, data: any) => void;

	declare type DSAsyncLifecycleHookHandler = (resource: DSResourceDefinition<any>, data: any) => JSDataPromise<any>;

	declare type DSAsyncLifecycleHookHandlerCb = (
		resource: DSResourceDefinition<any>, data: any, cb: (err: Error, data: any) => void
	) => void;

	declare interface JSDataPromise<R> {
		then<U>(
		onFulfilled?: (value: R) => U | JSDataPromise<U>, onRejected?: (error: any) => U | JSDataPromise<U>
	): JSDataPromise<U>,
		catch<U>(onRejected?: (error: any) => U | JSDataPromise<U>): JSDataPromise<U>,
		finally(finallyCb?: () => any): JSDataPromise<R>
	}

	declare interface DSConfiguration {
		actions?: Object,
		allowSimpleWhere?: boolean,
		basePath?: string,
		bypassCache?: boolean,
		cacheResponse?: boolean,
		clearEmptyQueries?: boolean,
		debug?: boolean,
		defaultAdapter?: string,
		defaultFilter?: (
		collection: Array<any>, resourceName: string, params: DSFilterArg, options: DSConfiguration
	) => Array<any>,
		defaultValues?: Object,
		eagerEject?: boolean,
		endpoint?: string,
		error?: boolean | ((message?: any, ...optionalParams: any[]) => void),
		fallbackAdapters?: Array<string>,
		findAllFallbackAdapters?: Array<string>,
		findAllStrategy?: string,
		findFallbackAdapters?: Array<string>,
		findStrategy?: string,
		findStrictCache?: boolean,
		idAttribute?: string,
		ignoredChanges?: Array<RegExp | string>,
		ignoreMissing?: boolean,
		instanceEvents?: boolean,
		keepChangeHistory?: boolean,
		linkRelations?: boolean,
		log?: boolean | ((message?: any, ...optionalParams: any[]) => void),
		maxAge?: number,
		notify?: boolean,
		omit?: Array<string | RegExp>,
		onConflict?: string,
		reapAction?: string,
		reapInterval?: number,
		relationsEnumerable?: boolean,
		resetHistoryOnInject?: boolean,
		returnMeta?: boolean,
		scopes?: Object,
		strategy?: string,
		upsert?: boolean,
		useClass?: boolean | any,
		useFilter?: boolean,
		watchChanges?: boolean
	}

	declare interface DSResourceDefinitionConfiguration {
		computed?: any,
		meta?: any,
		methods?: any,
		name: string,
		relations?: {
		hasMany?: Object,
		hasOne?: Object,
		belongsTo?: Object
	}
	}

	declare interface DSFilterParams {
		where?: Object,
		limit?: number,
		skip?: number,
		offset?: number,
		orderBy?: string | Array<string> | Array<Array<string>>,
		sort?: string | Array<string> | Array<Array<string>>
	}

	declare interface DSAdapterOperationConfiguration {
		adapter?: string,
		params?: {
		[paramName: string]: string | number | boolean
	}
	}

	declare interface DSSaveConfiguration {
		changesOnly?: boolean
	}

	declare interface DSCollection<T> {
		fetch(
		params?: DSFilterArg, options?: DSConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		params: DSFilterArg,
		resourceName: string
	}

	declare interface DSEvents {
		on(name: string, handler: (...args: any[]) => void): void,
		off(name: string, handler: (...args: any[]) => void): void,
		emit(name: string, ...args: any[]): void
	}

	declare interface DS {
		new (config?: DSConfiguration): DS,
		errors: DSErrors,
		definitions: any,
		adapters: any,
		defaults: DSConfiguration,
		changeHistory(resourceName: string, id: string | number): Array<Object>,
		changes(
		resourceName: string, id: string | number, options?: {
		ignoredChanges: Array<string | RegExp>
	}
	): Object,
		clear<T>(): Array<T & DSInstanceShorthands<T>>,
		compute<T>(
		resourceName: string, idOrInstance: number | string | T
	): T & DSInstanceShorthands<T>,
		create<T>(
		resourceName: string, attrs: Object, options?: DSConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		createCollection<T>(
		resourceName: string, array?: Array<T>, params?: DSFilterArg, options?: DSConfiguration
	): DSCollection<T & DSInstanceShorthands<T>>,
		createInstance<T>(
		resourceName: string, attrs?: Object, options?: DSConfiguration
	): T & DSInstanceShorthands<T>,
		destroy(
		resourceName: string, id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<void>,
		destroyAll(
		resourceName: string, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<void>,
		digest(): void,
		eject<T>(
		resourceName: string, id: string | number, options?: DSConfiguration
	): T & DSInstanceShorthands<T>,
		ejectAll<T>(
		resourceName: string, params: DSFilterArg, options?: DSConfiguration
	): Array<T & DSInstanceShorthands<T>>,
		filter<T>(
		resourceName: string, params: DSFilterArg, options?: DSConfiguration
	): Array<T & DSInstanceShorthands<T>>,
		find<T>(
		resourceName: string, id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		findAll<T>(
		resourceName: string, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		get<T>(resourceName: string, id: string | number): T & DSInstanceShorthands<T>,
		getAll<T>(
		resourceName: string, ids?: Array<string | number>
	): Array<T & DSInstanceShorthands<T>>,
		hasChanges(resourceName: string, id: string | number): boolean,
		inject<TInject, U>(
		resourceName: string, attrs: TInject, options?: DSConfiguration
	): U & DSInstanceShorthands<U>,
		inject<TInject, U>(
		resourceName: string, items: Array<TInject>, options?: DSConfiguration
	): Array<U & DSInstanceShorthands<U>>,
		is(resourceName: string, object: Object): boolean,
		lastModified(resourceName: string, id?: string | number): number,
		lastSaved(resourceName: string, id?: string | number): number,
		loadRelations<T>(
		resourceName: string, idOrInstance: string | number, relations: string | Array<string>, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		previous<T>(resourceName: string, id: string | number): T & DSInstanceShorthands<T>,
		reap(resourceName: string): JSDataPromise<void>,
		refresh<T>(
		resourceName: string, id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		refreshAll<T>(
		resourceName: string, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		revert<T>(resourceName: string, id: string | number): T & DSInstanceShorthands<T>,
		save<T>(
		resourceName: string, id: string | number, options?: DSSaveConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		update<T>(
		resourceName: string, id: string | number, attrs: Object, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		updateAll<T>(
		resourceName: string, attrs: Object, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		defineResource<T>(
		resourceNameOrDefinition: string | DSResourceDefinitionConfiguration
	): DSResourceDefinition<T>,
		defineResource<T, TActions>(
		resourceNameOrDefinition: string | DSResourceDefinitionConfiguration
	): DSResourceDefinition<T> & TActions,
		registerAdapter(
		adapterId: string, adapter: IDSAdapter, options?: {
		default: boolean
	}
	): void
	}

	declare interface DSResourceDefinition<T> {
		changeHistory(id: string | number): Array<Object>,
		changes(
		id: string | number, options?: {
		ignoredChanges: Array<string | RegExp>
	}
	): Object,
		clear(): Array<T & DSInstanceShorthands<T>>,
		compute(idOrInstance: number | string | T): T & DSInstanceShorthands<T>,
		create(
		attrs: Object, options?: DSConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		createCollection(
		array?: Array<T>, params?: DSFilterArg, options?: DSConfiguration
	): DSCollection<T & DSInstanceShorthands<T>>,
		createInstance(attrs?: Object, options?: DSConfiguration): T & DSInstanceShorthands<T>,
		destroy(
		id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<void>,
		destroyAll(
		params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<void>,
		digest(): void,
		eject(id: string | number, options?: DSConfiguration): T & DSInstanceShorthands<T>,
		ejectAll(
		params: DSFilterArg, options?: DSConfiguration
	): Array<T & DSInstanceShorthands<T>>,
		filter(
		params: DSFilterArg, options?: DSConfiguration
	): Array<T & DSInstanceShorthands<T>>,
		find(
		id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		findAll(
		params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		get(id: string | number): T & DSInstanceShorthands<T>,
		getAll(ids?: Array<string | number>): Array<T & DSInstanceShorthands<T>>,
		hasChanges(id: string | number): boolean,
		inject<TInject>(
		attrs: TInject, options?: DSConfiguration
	): T & DSInstanceShorthands<T>,
		inject<TInject>(
		items: Array<TInject>, options?: DSConfiguration
	): Array<T & DSInstanceShorthands<T>>,
		is(object: Object): boolean,
		lastModified(id?: string | number): number,
		lastSaved(id?: string | number): number,
		loadRelations(
		idOrInstance: string | number, relations: string | Array<string>, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		previous(id: string | number): T & DSInstanceShorthands<T>,
		reap(): JSDataPromise<void>,
		refresh(
		id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		refreshAll(
		params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		revert(id: string | number): T & DSInstanceShorthands<T>,
		save(
		id: string | number, options?: DSSaveConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		update(
		id: string | number, attrs: Object, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		updateAll(
		attrs: Object, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>
	}

	declare export interface DSInstanceShorthands<T> {
		DSCompute(): void,
		DSRefresh(
		options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		DSSave(options?: DSSaveConfiguration): JSDataPromise<T & DSInstanceShorthands<T>>,
		DSUpdate(
		options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		DSDestroy(options?: DSAdapterOperationConfiguration): JSDataPromise<void>,
		DSCreate(
		options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		DSLoadRelations(
		relations: string | Array<string>, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		DSChangeHistory(): Array<Object>,
		DSChanges(): Object,
		DSHasChanges(): boolean,
		DSLastModified(): number,
		DSLastSaved(): number,
		DSPrevious(): T & DSInstanceShorthands<T>,
		DSRevert(): T & DSInstanceShorthands<T>
	}

	declare interface IDSResourceLifecycleValidateEventHandlers {
		beforeValidate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb,
		validate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb,
		afterValidate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb
	}

	declare interface IDSResourceLifecycleCreateEventHandlers {
		beforeCreate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb,
		afterCreate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb
	}

	declare interface IDSResourceLifecycleUpdateEventHandlers {
		beforeUpdate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb,
		afterUpdate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb
	}

	declare interface IDSResourceLifecycleDestroyEventHandlers {
		beforeDestroy?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb,
		afterDestroy?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb
	}

	declare interface IDSResourceLifecycleCreateInstanceEventHandlers {
		beforeCreateInstance?: DSSyncLifecycleHookHandler,
		afterCreateInstance?: DSSyncLifecycleHookHandler
	}

	declare interface IDSResourceLifecycleInjectEventHandlers {
		beforeInject?: DSSyncLifecycleHookHandler,
		afterInject?: DSSyncLifecycleHookHandler
	}

	declare interface IDSResourceLifecycleEjectEventHandlers {
		beforeEject?: DSSyncLifecycleHookHandler,
		afterEject?: DSSyncLifecycleHookHandler
	}

	declare interface IDSResourceLifecycleReapEventHandlers {
		beforeReap?: DSSyncLifecycleHookHandler,
		afterReap?: DSSyncLifecycleHookHandler
	}

	declare interface IDSResourceLifecycleFindEventHandlers {
		afterFind?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb
	}

	declare interface IDSResourceLifecycleFindAllEventHandlers {
		afterFindAll?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb
	}

	declare interface IDSResourceLifecycleLoadRelationsEventHandlers {
		afterLoadRelations?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb
	}

	declare interface IDSResourceLifecycleCreateCollectionEventHandlers {
		beforeCreateCollection?: DSSyncLifecycleHookHandler,
		afterCreateCollection?: DSSyncLifecycleHookHandler
	}

	declare interface IDSResourceLifecycleEventHandlers {
		
	}

	declare interface DSErrors {
		IllegalArgumentError: DSError,
		IA: DSError,
		RuntimeError: DSError,
		R: DSError,
		NonexistentResourceError: DSError,
		NER: DSError
	}

	declare interface DSError {
		new (message?: string): DSError,
		message: string,
		type: string
	}

	declare interface IDSAdapter {
		create(
		config: DSResourceDefinition<any>, attrs: Object, options?: DSConfiguration
	): JSDataPromise<any>,
		destroy(
		config: DSResourceDefinition<any>, id: string | number, options?: DSConfiguration
	): JSDataPromise<void>,
		destroyAll(
		config: DSResourceDefinition<any>, params: DSFilterArg, options?: DSConfiguration
	): JSDataPromise<void>,
		find(
		config: DSResourceDefinition<any>, id: string | number, options?: DSConfiguration
	): JSDataPromise<any>,
		findAll(
		config: DSResourceDefinition<any>, params?: DSFilterArg, options?: DSConfiguration
	): JSDataPromise<any>,
		update(
		config: DSResourceDefinition<any>, id: string | number, attrs: Object, options?: DSConfiguration
	): JSDataPromise<any>,
		updateAll(
		config: DSResourceDefinition<any>, attrs: Object, params?: DSFilterArg, options?: DSConfiguration
	): JSDataPromise<any>
	}

	declare interface DSActionConfig {
		adapter?: string,
		endpoint?: string,
		pathname?: string,
		method?: string
	}

	declare interface DSActionFn {
		(id: string | number, options?: Object): JSDataPromise<T>
	}

			
}