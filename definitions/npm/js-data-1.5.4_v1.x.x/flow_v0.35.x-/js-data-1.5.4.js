

declare module 'js-data-1.5.4' {
					
}

declare module 'npm$namespace$JSData' {
	declare type DSFilterArg = DSFilterParams | Object;

	declare interface JSDataPromise<R> {
		then<U>(
		onFulfilled?: (value: R) => U | JSDataPromise<U>, onRejected?: (error: any) => U | JSDataPromise<U>
	): JSDataPromise<U>,
		catch<U>(onRejected?: (error: any) => U | JSDataPromise<U>): JSDataPromise<U>,
		finally<U>(finallyCb?: () => U): JSDataPromise<U>
	}

	declare interface DS {
		new (config?: DSConfiguration): DS,
		errors: DSErrors,
		definitions: any,
		adapters: any,
		defaults: DSConfiguration,
		create<T>(
		resourceName: string, attrs: Object, options?: DSConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		destroy(
		resourceName: string, id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<any>,
		destroyAll(
		resourceName: string, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<any>,
		find<T>(
		resourceName: string, id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		findAll<T>(
		resourceName: string, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		loadRelations<T>(
		resourceName: string, idOrInstance: string | number | Object, relations: string | Array<string>, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		update<T>(
		resourceName: string, id: string | number, attrs: Object, options?: DSSaveConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		updateAll<T>(
		resourceName: string, attrs: Object, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		reap(resourceName: string, options?: DSConfiguration): JSDataPromise<any>,
		refresh<T>(
		resourceName: string, id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		save<T>(
		resourceName: string, id: string | number, options?: DSSaveConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		changeHistory(resourceName: string, id?: string | number): Array<Object>,
		changes(resourceName: string, id: string | number): Object,
		compute(resourceName: string, idOrInstance: number | string | Object): void,
		createInstance<T>(
		resourceName: string, attrs?: T, options?: DSAdapterOperationConfiguration
	): T & DSInstanceShorthands<T>,
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
		get<T>(
		resourceName: string, id: string | number, options?: DSConfiguration
	): T & DSInstanceShorthands<T>,
		getAll<T>(
		resourceName: string, ids?: Array<string | number>
	): Array<T & DSInstanceShorthands<T>>,
		hasChanges(resourceName: string, id: string | number): boolean,
		inject<T>(
		resourceName: string, item: T, options?: DSConfiguration
	): T & DSInstanceShorthands<T>,
		inject<T>(
		resourceName: string, items: Array<T>, options?: DSConfiguration
	): Array<T & DSInstanceShorthands<T>>,
		is(resourceName: string, object: Object): boolean,
		lastModified(resourceName: string, id?: string | number): number,
		lastSaved(resourceName: string, id?: string | number): number,
		link<T>(
		resourceName: string, id: string | number, relations?: Array<string>
	): T & DSInstanceShorthands<T>,
		linkAll<T>(
		resourceName: string, params: DSFilterArg, relations?: Array<string>
	): T & DSInstanceShorthands<T>,
		linkInverse<T>(
		resourceName: string, id: string | number, relations?: Array<string>
	): T & DSInstanceShorthands<T>,
		previous<T>(resourceName: string, id: string | number): T & DSInstanceShorthands<T>,
		revert<T>(resourceName: string, id: string | number): T & DSInstanceShorthands<T>,
		unlinkInverse<T>(
		resourceName: string, id: string | number, relations?: Array<string>
	): T & DSInstanceShorthands<T>,
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

	declare interface DSConfiguration {
		actions?: Object,
		allowSimpleWhere?: boolean,
		basePath?: string,
		bypassCache?: boolean,
		cacheResponse?: boolean,
		defaultAdapter?: string,
		defaultFilter?: (
		collection: Array<any>, resourceName: string, params: DSFilterArg, options: DSConfiguration
	) => Array<any>,
		eagerEject?: boolean,
		endpoint?: string,
		error?: boolean | ((message?: any, ...optionalParams: any[]) => void),
		fallbackAdapters?: Array<string>,
		findAllFallbackAdapters?: Array<string>,
		findAllStrategy?: string,
		findBelongsTo?: boolean,
		findFallbackAdapters?: Array<string>,
		findHasOne?: boolean,
		findHasMany?: boolean,
		findInverseLinks?: boolean,
		findStrategy?: string,
		idAttribute?: string,
		ignoredChanges?: Array<RegExp | string>,
		keepChangeHistory?: boolean,
		loadFromServer?: boolean,
		log?: boolean | ((message?: any, ...optionalParams: any[]) => void),
		maxAge?: number,
		notify?: boolean,
		reapAction?: string,
		reapInterval?: number,
		resetHistoryOnInject?: boolean,
		strategy?: string,
		upsert?: boolean,
		useClass?: boolean,
		useFilter?: boolean
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

	declare interface DSResourceDefinitionConfiguration {
		name: string,
		computed?: any,
		methods?: any,
		relations?: {
		hasMany?: Object,
		hasOne?: Object,
		belongsTo?: Object
	}
	}

	declare interface DSResourceDefinition<T> {
		create<TInject>(
		attrs: TInject, options?: DSConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		destroy(
		id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<void>,
		destroyAll(
		params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<void>,
		find(
		id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		findAll(
		params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		loadRelations(
		idOrInstance: string | number | Object, relations: string | Array<string>, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		update(
		id: string | number, attrs: Object, options?: DSSaveConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		updateAll(
		attrs: Object, params?: DSFilterArg, options?: DSAdapterOperationConfiguration
	): JSDataPromise<Array<T & DSInstanceShorthands<T>>>,
		reap(options?: DSConfiguration): JSDataPromise<void>,
		refresh(
		id: string | number, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		save(
		id: string | number, options?: DSSaveConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		changeHistory(id?: string | number): Array<Object>,
		changes(id: string | number): Object,
		compute(idOrInstance: number | string | Object): void,
		createInstance<TInject>(
		attrs?: TInject, options?: DSAdapterOperationConfiguration
	): T & DSInstanceShorthands<T>,
		digest(): void,
		eject(id: string | number, options?: DSConfiguration): T & DSInstanceShorthands<T>,
		ejectAll(
		params: DSFilterArg, options?: DSConfiguration
	): Array<T & DSInstanceShorthands<T>>,
		filter(
		params: DSFilterArg, options?: DSConfiguration
	): Array<T & DSInstanceShorthands<T>>,
		get(id: string | number, options?: DSConfiguration): T & DSInstanceShorthands<T>,
		getAll(ids?: Array<string | number>): Array<T & DSInstanceShorthands<T>>,
		hasChanges(id: string | number): boolean,
		inject(item: T, options?: DSConfiguration): T & DSInstanceShorthands<T>,
		inject(items: Array<T>, options?: DSConfiguration): Array<T & DSInstanceShorthands<T>>,
		is(object: Object): boolean,
		lastModified(id?: string | number): number,
		lastSaved(id?: string | number): number,
		link(id: string | number, relations?: Array<string>): T & DSInstanceShorthands<T>,
		linkAll(params: DSFilterArg, relations?: Array<string>): T & DSInstanceShorthands<T>,
		linkInverse(id: string | number, relations?: Array<string>): T & DSInstanceShorthands<T>,
		previous(id: string | number): T & DSInstanceShorthands<T>,
		unlinkInverse(id: string | number, relations?: Array<string>): T & DSInstanceShorthands<T>
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
		DSCreate(options?: DSConfiguration): JSDataPromise<T & DSInstanceShorthands<T>>,
		DSLoadRelations(
		relations: string | Array<string>, options?: DSAdapterOperationConfiguration
	): JSDataPromise<T & DSInstanceShorthands<T>>,
		DSChangeHistory(): Array<Object>,
		DSChanges(): Object,
		DSHasChanges(): boolean,
		DSLastModified(): number,
		DSLastSaved(): number,
		DSLink(relations?: Array<string>): T & DSInstanceShorthands<T>,
		DSLinkInverse(relations?: Array<string>): T & DSInstanceShorthands<T>,
		DSPrevious(): T & DSInstanceShorthands<T>,
		DSUnlinkInverse(relations?: Array<string>): T & DSInstanceShorthands<T>
	}

	declare interface DSFilterParams {
		where?: Object,
		limit?: number,
		skip?: number,
		offset?: number,
		orderBy?: string | Array<string> | Array<Array<string>>,
		sort?: string | Array<string> | Array<Array<string>>
	}

	declare interface IDSResourceLifecycleValidateEventHandlers {
		beforeValidate?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void,
		validate?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void,
		afterValidate?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void
	}

	declare interface IDSResourceLifecycleCreateEventHandlers {
		beforeCreate?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void,
		afterCreate?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void
	}

	declare interface IDSResourceLifecycleCreateInstanceEventHandlers {
		beforeCreateInstance?: (resourceName: string, data: any) => void,
		afterCreateInstance?: (resourceName: string, data: any) => void
	}

	declare interface IDSResourceLifecycleUpdateEventHandlers {
		beforeUpdate?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void,
		afterUpdate?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void
	}

	declare interface IDSResourceLifecycleDestroyEventHandlers {
		beforeDestroy?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void,
		afterDestroy?: (resourceName: string, data: any, cb: (err: any, data?: any) => void) => void
	}

	declare interface IDSResourceLifecycleInjectEventHandlers {
		beforeInject?: (resourceName: string, data: any) => void,
		afterInject?: (resourceName: string, data: any) => void
	}

	declare interface IDSResourceLifecycleEjectEventHandlers {
		beforeEject?: (resourceName: string, data: any) => void,
		afterEject?: (resourceName: string, data: any) => void
	}

	declare interface IDSResourceLifecycleReapEventHandlers {
		beforeReap?: (resourceName: string, data: any) => void,
		afterReap?: (resourceName: string, data: any) => void
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
		create<T>(
		config: DSResourceDefinition<T>, attrs: Object, options?: DSConfiguration
	): JSDataPromise<T>,
		destroy<T>(
		config: DSResourceDefinition<T>, id: string | number, options?: DSConfiguration
	): JSDataPromise<any>,
		destroyAll<T>(
		config: DSResourceDefinition<T>, params: DSFilterArg, options?: DSConfiguration
	): JSDataPromise<any>,
		find<T>(
		config: DSResourceDefinition<T>, id: string | number, options?: DSConfiguration
	): JSDataPromise<T>,
		findAll<T>(
		config: DSResourceDefinition<T>, params?: DSFilterArg, options?: DSConfiguration
	): JSDataPromise<T>,
		update<T>(
		config: DSResourceDefinition<T>, id: string | number, attrs: Object, options?: DSConfiguration
	): JSDataPromise<T>,
		updateAll<T>(
		config: DSResourceDefinition<T>, attrs: Object, params?: DSFilterArg, options?: DSConfiguration
	): JSDataPromise<T>
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

declare module 'js-data' {
					declare module.exports: undefined


}