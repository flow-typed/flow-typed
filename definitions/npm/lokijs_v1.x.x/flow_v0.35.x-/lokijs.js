

declare module 'lokijs' {
		declare interface Loki {
		autosave: boolean,
		autosaveInterval: number,
		autosaveHandle: number,
		collections: LokiCollection<any>[],
		databaseVersion: number,
		engineVersion: number,
		ENV: string,
		events: {
		[id: string]: ((...args: any[]) => void)[]
	},
		filename: string,
		options: LokiConfigureOptions,
		persistenceAdapter: LokiPersistenceInterface,
		persistenceMethod: string,
		verbose: boolean,
		new (filename: string, options: LokiConfigureOptions): Loki,
		getIndexedAdapter(): LokiPersistenceInterface,
		configureOptions(options: LokiConfigureOptions, initialConfig?: boolean): void,
		anonym<T>(docs: T | T[], indexesArray?: LokiCollectionOptions): LokiCollection<T>,
		addCollection<T>(name: string, options?: LokiCollectionOptions): LokiCollection<T>,
		loadCollection(collection: LokiCollection<any>): void,
		getCollection<T>(collectionName: string): LokiCollection<T>,
		listCollections(): {
		name: string,
		type: string,
		count: number
	}[],
		removeCollection(collectionName: string): void,
		getName(): string,
		serializeReplacer<T>(key: "autosaveHandle", value: T): T,
		serializeReplacer<T>(key: "persistenceAdapter", value: T): T,
		serializeReplacer<T>(key: "constraints", value: T): T,
		serializeReplacer<T>(key: string, value: T): T,
		serialize(): string,
		toJson(): string,
		loadJSON(
		serializedDb: string, options?: {
		[collectionName: string]: {
		inflate?: (src: any, dst: any) => void,
		proto: any
	}
	}
	): void,
		loadJSONObject(
		dbObject: Loki, options?: {
		[collectionName: string]: {
		inflate?: (src: any, dst: any) => void,
		proto: any
	}
	}
	): void,
		close(callback?: (...args: any[]) => void): void,
		generateChangesNotification(arrayOfCollectionNames?: string[]): LokiCollectionChange[],
		serializeChanges(collectionNamesArray?: string[]): string,
		clearChanges(): void,
		loadDatabase(
		options: {
		[collectionName: string]: {
		inflate?: (src: any, dst: any) => void,
		proto: any
	}
	}, callback?: (err: any, data: any) => void
	): void,
		saveDatabase(callback?: (err: any) => void): void,
		save(callback?: (err: any) => void): void,
		deleteDatabase(options: any, callback: (err: any, data: any) => void): void,
		autosaveDirty(): boolean,
		autosaveClearFlags(): void,
		autosaveEnable(options?: LokiConfigureOptions, callback?: (err: any) => void): void,
		autosaveDisable(): void
	}

	declare interface LokiEventEmitter {
		events: {
		[eventName: string]: ((...args: any[]) => void)[]
	},
		new (): LokiEventEmitter,
		asyncListeners: boolean,
		on<U>(eventName: string, listener: U): U,
		emit(eventName: string, data?: any): void,
		removeListener(eventName: string, listener: (...args: any[]) => void): void
	}

	declare interface LokiPersistenceInterface {
		loadDatabase(dbname: string, callback: (dataOrErr: string | Error) => void): void,
		saveDatabase(
		dbname: string, dbstring: string, callback: (resOrErr: void | Error) => void
	): void,
		deleteDatabase(dbname: string, callback?: (resOrErr: void | Error) => void): void,
		mode?: string,
		exportDatabase(filename: string, param: any, callback?: (err: any) => void): void
	}

	declare interface LokiFsAdapter {
		fs: any,
		loadDatabase(dbname: string, callback: (err: Error, data: string) => void): void,
		saveDatabase(dbname: string, dbstring: string, callback: (err: any) => void): void,
		deleteDatabase(dbname: string, callback: (resOrErr: void | Error) => void): void
	}

	declare interface LokiLocalStorageAdapter {
		loadDatabase(dbname: string, callback: (dataOrErr: string | Error) => void): void,
		saveDatabase(
		dbname: string, dbstring: string, callback: (resOrErr: void | Error) => void
	): void,
		deleteDatabase(dbname: string, callback: (resOrErr: void | Error) => void): void
	}

	declare interface LokiResultset<E> {
		collection: LokiCollection<E>,
		filterInitialized: boolean,
		filteredrows: string[],
		options: LokiResultsetOptions<E>,
		searchIsChained: boolean,
		new <E>(
		collection: LokiCollection<E>, options: LokiResultsetOptions<E>
	): LokiResultset<E> | E[],
		reset(): LokiResultset<E>,
		toJSON(): LokiResultset<E>,
		limit(qty: number): LokiResultset<E>,
		offset(pos: number): LokiResultset<E>,
		copy(): LokiResultset<E>,
		branch(): LokiResultset<E>,
		transform(transform?: string | any[], parameters?: any): LokiResultset<E>,
		sort(comparefun: (a: E, b: E) => number): LokiResultset<E>,
		simplesort(propname: string, isdesc?: boolean): LokiResultset<E>,
		compoundsort(properties: ([string, boolean] | [string])[]): LokiResultset<E>,
		calculateRange(op: "$eq", prop: string, val: any): [number, number],
		calculateRange(op: "$dteq", prop: string, val: any): [number, number],
		calculateRange(op: "$gt", prop: string, val: any): [number, number],
		calculateRange(op: "$gte", prop: string, val: any): [number, number],
		calculateRange(op: "$lt", prop: string, val: any): [number, number],
		calculateRange(op: "$lte", prop: string, val: any): [number, number],
		calculateRange(op: string, prop: string, val: any): [number, number],
		findOr(expressionArray: LokiQuery[]): LokiResultset<E>,
		$or(expressionArray: LokiQuery[]): LokiResultset<E>,
		findAnd(expressionArray: LokiQuery[]): LokiResultset<E>,
		$and(expressionArray: LokiQuery[]): LokiResultset<E>,
		find(query: LokiQuery, firstOnly?: boolean): LokiResultset<E>,
		where(fun: (obj: E) => boolean): LokiResultset<E>,
		count(): number,
		data(options?: {
		forceClones?: string,
		forceCloneMethod?: string
	}): E[],
		update(updateFunction: (obj: E) => void): LokiResultset<E>,
		remove(): LokiResultset<E>,
		mapReduce<T, U>(
		mapFunction: (value: E, index: number, array: E[]) => T, reduceFunction: (array: T[]) => U
	): U,
		eqJoin<T>(
		joinData: T[] | LokiResultset<T>, leftJoinKey: string | ((obj: E) => string), rightJoinKey: string | ((obj: T) => string)
	): LokiResultset<{
		left: E,
		right: T
	}>,
		eqJoin<T, U>(
		joinData: T[] | LokiResultset<T>, leftJoinKey: string | ((obj: E) => string), rightJoinKey: string | ((obj: T) => string), mapFun?: (a: E, b: T) => U
	): LokiResultset<U>,
		map<T>(mapFun: (currentValue: E, index: number, array: E[]) => T): LokiResultset<T>
	}

	declare interface LokiDynamicView<E> {
		cachedresultset: LokiResultset<E>,
		collection: LokiCollection<E>,
		events: {
		[id: string]: ((...args: any[]) => void)[]
	},
		filterPipeline: LokiFilter<E>[],
		minRebuildInterval: number,
		name: string,
		options: LokiDynamicViewOptions,
		persistent: boolean,
		rebuildPending: boolean,
		resultset: LokiResultset<E>,
		resultdata: E[],
		resultsdirty: boolean,
		sortFunction: (a: E, b: E) => number,
		sortCriteria: ([string, boolean] | [string])[],
		sortDirty: boolean,
		sortPriority: string,
		new <E>(
		collection: LokiCollection<E>, name: string, options?: LokiDynamicViewOptions
	): LokiDynamicView<E>,
		rematerialize(options?: {
		removeWhereFilters?: boolean
	}): LokiDynamicView<E>,
		branchResultset(transform?: string | any[], parameters?: any): LokiResultset<E>,
		toJSON(): LokiDynamicView<E>,
		removeFilters(): void,
		applySort(comparefun: (a: E, b: E) => number): LokiDynamicView<E>,
		applySimpleSort(propname: string, isdesc?: boolean): LokiDynamicView<E>,
		applySortCriteria(criteria: ([string, boolean] | [string])[]): LokiDynamicView<E>,
		startTransaction(): LokiDynamicView<E>,
		commit(): LokiDynamicView<E>,
		rollback(): LokiDynamicView<E>,
		_indexOfFilterWithId(uid: string | number): number,
		_addFilter(filter: LokiFilter<E>): void,
		reapplyFilters(): LokiDynamicView<E>,
		applyFilter(filter: LokiFilter<E>): LokiDynamicView<E>,
		applyFind(query: LokiQuery, uid?: string | number): LokiDynamicView<E>,
		applyWhere(fun: (obj: E) => boolean, uid?: string | number): LokiDynamicView<E>,
		removeFilter(uid: string | number): LokiDynamicView<E>,
		count(): number,
		data(): E[],
		queueRebuildEvent(): void,
		queueSortPhase(): void,
		performSortPhase(options?: {
		suppressRebuildEvent?: boolean
	}): void,
		evaluateDocument(objIndex: number, isNew?: boolean): void,
		removeDocument(objIndex: number): void,
		mapReduce<T, U>(
		mapFunction: (item: E, index: number, array: E[]) => T, reduceFunction: (array: T[]) => U
	): U
	}

	declare interface LokiCollection<E> {
		autoupdate: boolean,
		asyncListeners: boolean,
		binaryIndices: {
		[id: string]: {
		name: string,
		dirty: boolean,
		values: number[]
	}
	},
		cachedIndex: number[],
		cachedBinaryIndex: {
		[id: string]: {
		name: string,
		dirty: boolean,
		values: number[]
	}
	},
		cachedData: E[],
		changes: LokiCollectionChange[],
		cloneMethod: string,
		cloneObjects: boolean,
		console: {
		log: () => void,
		warn: () => void,
		error: () => void
	},
		constraints: {
		unique: {
		[id: string]: LokiUniqueIndex<E>
	},
		exact: {
		[id: string]: LokiExactIndex<E>
	}
	},
		data: E[],
		dirty: boolean,
		disableChangesApi: boolean,
		DynamicViews: LokiDynamicView<E>[],
		events: {
		[id: string]: ((...args: any[]) => void)[]
	},
		idIndex: number[],
		maxId: number,
		name: string,
		transactional: boolean,
		objType: string,
		transforms: {
		[id: string]: any
	},
		uniqueNames: string[],
		options: LokiCollectionOptions,
		ttl: {
		age: number,
		ttlInterval: number,
		daemon: number
	},
		new <E>(name: string, options?: LokiCollectionOptions): LokiCollection<E>,
		getChanges(): LokiCollectionChange[],
		setChangesApi(enabled: boolean): void,
		flushChanges(): void,
		observerCallback: (changes: {
		object: any
	}[]) => void,
		addAutoUpdateObserver(object: any): void,
		removeAutoUpdateObserver(object: any): void,
		addTransform(name: string, transform: any): void,
		setTransform(name: string, transform: any): void,
		removeTransform(name: string): void,
		byExample(template: any): {
		$and: any[]
	},
		findObject(template: any): E,
		findObjects(template: any): E[],
		ttlDaemonFuncGen(): () => void,
		setTTL(age: number, interval: number): void,
		prepareFullDocIndex(): number[],
		ensureIndex(property: string, force?: boolean): void,
		ensureUniqueIndex(field: string): LokiUniqueIndex<E>,
		ensureAllIndexes(force?: boolean): void,
		flagBinaryIndexesDirty(): void,
		flagBinaryIndexDirty(index: string): void,
		count(query?: LokiQuery): number,
		ensureId(): void,
		ensureIdAsync(callback: () => void): void,
		addDynamicView(name: string, options?: LokiDynamicViewOptions): LokiDynamicView<E>,
		removeDynamicView(name: string): void,
		getDynamicView(name: string): LokiDynamicView<E>,
		findAndUpdate(filterFunction: (obj: E) => boolean, updateFunction: (obj: E) => E): void,
		insert(doc: E): E,
		insert(doc: E[]): E[],
		insertOne(doc: E): E,
		clear(): void,
		update(doc: E): E,
		update(doc: E[]): void,
		add(obj: E): E,
		removeWhere(query: ((obj: E) => boolean) | LokiQuery): void,
		removeDataOnly(): void,
		remove(doc: E): E,
		remove(doc: number): E,
		remove(doc: number[]): void,
		remove(doc: E[]): void,
		get(id: number | string): E,
		get(id: number | string, returnPosition?: boolean): E | [E, number],
		by(field: string): (value: any) => E,
		by(field: string, value: string): E,
		findOne(query: LokiQuery): E,
		chain(transform?: string | any[], parameters?: any): LokiResultset<E>,
		find(): E[],
		find(query: LokiQuery): LokiResultset<E>,
		findOneUnindexed(prop: string, value: any): E,
		startTransaction(): void,
		commit(): void,
		rollback(): void,
		async(fun: () => void, callback: () => void): void,
		where(fun: (obj: E) => boolean): LokiResultset<E>,
		mapReduce<U, V>(
		mapFunction: (item: E, index: number, array: E[]) => U, reduceFunction: (array: U[]) => V
	): V,
		eqJoin<T>(
		joinData: T[] | LokiResultset<T>, leftJoinProp: string | ((obj: E) => string), rightJoinProp: string | ((obj: T) => string)
	): LokiResultset<{
		left: E,
		right: T
	}>,
		eqJoin<T, U>(
		joinData: T[] | LokiResultset<T>, leftJoinProp: string | ((obj: E) => string), rightJoinProp: string | ((obj: T) => string), mapFun?: (a: E, b: T) => U
	): LokiResultset<U>,
		stages: {
		[id: string]: any
	},
		getStage(name: string): E[],
		commitLog: {
		timestamp: number,
		message: any,
		data: E
	}[],
		stage(stageName: string, obj: E): E,
		commitStage(stageName: string, message: any): void,
		no_op(): void,
		extract(field: string): any[],
		max(field: string): number,
		min(field: string): number,
		maxRecord(field: string): {
		index: number,
		value: any
	},
		minRecord(field: string): {
		index: number,
		value: any
	},
		extractNumerical(field: string): number[],
		avg(field: string): number,
		stdDev(field: string): number,
		mode(field: string): string | number,
		median(field: string): number
	}

	declare interface LokiOps {
		$eq(a: any, b: any): boolean,
		$ne(a: any, b: any): boolean,
		$dteq(a: any, b: any): boolean,
		$gt(a: any, b: any): boolean,
		$gte(a: any, b: any): boolean,
		$lt(a: any, b: any): boolean,
		$lte(a: any, b: any): boolean,
		$in(a: any, b: {
		indexOf: (value: any) => boolean
	}): boolean,
		$nin(a: any, b: {
		indexOf: (value: any) => boolean
	}): boolean,
		$keyin(a: string, b: any): boolean,
		$nkeyin(a: string, b: any): boolean,
		$definedin(a: any, b: any): boolean,
		$undefinedin(a: any, b: any): boolean,
		$regex(a: any, b: RegExp | {
		test: (str: string) => boolean
	}): boolean,
		$containsString(a: string | any, b: string): boolean,
		$containsNone(a: any, b: any): boolean,
		$containsAny(a: any, b: any | any[]): boolean,
		$contains(a: any, b: any | any[]): boolean,
		$type(a: any, b: any): boolean,
		$size(a: any, b: any): boolean,
		$len(a: any, b: any): boolean,
		$not(a: any, b: any): boolean,
		$and(a: any, b: any[]): boolean,
		$or(a: any, b: any[]): boolean
	}

	declare interface LokiKeyValueStore<K, V> {
		keys: K[],
		values: V[],
		sort(a: any, b: any): number,
		setSort(fun: (a: K, b: K) => number): void,
		bs(): LokiBSonSort<K>,
		set(key: K, value: V): void,
		get(key: K): V
	}

	declare interface LokiUniqueIndex<E> {
		field: string,
		keyMap: {
		[id: string]: E
	},
		lokiMap: {
		[id: number]: any
	},
		new <E>(uniqueField: string): LokiUniqueIndex<E>,
		set(obj: E): void,
		get(key: string): E,
		byId(id: number): E,
		update(obj: E): void,
		remove(key: string): void,
		clear(): void
	}

	declare interface LokiExactIndex<E> {
		index: {
		[id: string]: E[]
	},
		field: string,
		new <E>(exactField: string): LokiExactIndex<E>,
		set(key: string, val: E): void,
		remove(key: string, val: E): void,
		get(key: string): E[],
		clear(key?: any): void
	}

	declare interface LokiSortedIndex<K, V> {
		field: string,
		keys: K[],
		values: V[][],
		new <K, V>(sortedField: string): LokiSortedIndex<K, V>,
		sort(a: any, b: any): number,
		bs(): LokiBSonSort<any>,
		setSort(fun: (a: any, b: any) => number): void,
		set(key: K, value: V): void,
		get(key: K): V[],
		getLt(key: K): V[],
		getGt(key: K): V[],
		getAll(key: K, start: number, end: number): V[],
		getPos(key: K): {
		found: boolean,
		index: number
	},
		remove(key: K, value: V): void,
		clear(): void
	}

	declare interface LokiConfigureOptions {
		adapter?: LokiPersistenceInterface,
		autoload?: boolean,
		autoloadCallback?: (dataOrErr: any | Error) => void,
		autosave?: boolean,
		autosaveCallback?: (err: any) => void,
		autosaveInterval?: number,
		env?: string,
		persistenceMethod?: string,
		verbose?: boolean
	}

	declare interface LokiCollectionOptions {
		asyncListeners?: boolean,
		autoupdate?: boolean,
		clone?: boolean,
		cloneMethod?: string,
		disableChangesApi?: boolean,
		exact?: string[],
		indices?: string | string[],
		transactional?: boolean,
		unique?: string | string[]
	}

	declare interface LokiDynamicViewOptions {
		minRebuildInterval?: number,
		persistent?: boolean,
		sortPriority: string
	}

	declare interface LokiResultsetOptions<E> {
		firstOnly?: boolean,
		queryObj?: LokiQuery,
		queryFunc?: (item: E) => boolean
	}

	declare interface LokiQuery {
		
	}

	declare interface LokiFilter<E> {
		type: string,
		val: LokiQuery | ((obj: E, index: number, array: E[]) => boolean),
		uid: number | string
	}

	declare interface LokiElementMetaData {
		created: number,
		revision: number
	}

	declare interface LokiCollectionChange {
		name: string,
		operation: string,
		obj: any
	}

	declare interface LokiBSonSort<T> {
		(fun: (a: T, b: T) => number): (array: T[], item: T) => {
		found: boolean,
		index: number
	}
	}

	declare interface LokiIndexedAdapter {
		app: string,
		catalog: LokiCatalog,
		new (appname: string): LokiIndexedAdapter,
		checkAvailability(): boolean,
		loadDatabase(dbname: string, callback?: (data: any) => void): void,
		loadKey(dbname: string, callback?: (data: any) => void): void,
		saveDatabase(dbname: string, dbstring: string, callback?: (err: Error | void) => void): void,
		saveKey(dbname: string, dbstring: string, callback?: (err: Error | void) => void): void,
		deleteDatabase(dbname: string): void,
		deleteKey(dbname: string): void,
		getDatabaseList(callback: (names: string[]) => void): void,
		getKeyList(callback: (names: string[]) => void): void,
		getCatalogSummary(
		callback: (entries: {
		app: string,
		key: string,
		size: number
	}) => void
	): void
	}

	declare interface LokiCatalog {
		db: IDBDatabase,
		new (callback: (cat: LokiCatalog) => void): LokiCatalog,
		initializeLokiCatalog(callback: (cat: LokiCatalog) => void): void,
		getAppKey(app: string, key: string, callback: (resObj: any) => void): void,
		getAppKeyById<T>(id: any, callback: (result: any, data: T) => void, data: T): void,
		setAppKey(
		app: string, key: string, val: any, callback: (res: {
		success: boolean
	}) => void
	): void,
		deleteAppKey(id: any, callback: (res: {
		success: boolean
	}) => void): void,
		getAppKeys(app: string, callback: (data: any[]) => void): void,
		getAllKeys(callback: (data: any[]) => void): void
	}

	declare interface LokiCryptedFileAdapter {
		secret: string,
		new (): LokiCryptedFileAdapter,
		setSecret(secret: string): void,
		loadDatabase(dbname: string, callback: (decryptedDataOrErr: string | any) => void): void,
		saveDatabase(dbname: string, dbstring: string, callback: (err: any) => void): void
	}

	declare interface LokiCryptedFileAdapterEncryptResult {
		cipher: string,
		keyDerivation: string,
		keyLength: number,
		iterations: number,
		iv: string,
		salt: string,
		value: string
	}

	declare interface LokiJquerySyncAdapter {
		options: LokiJquerySyncAdapterOptions,
		new (options: LokiJquerySyncAdapterOptions): LokiJquerySyncAdapter,
		saveDatabase(
		name: string, data: any, callback?: (data: any, textStatus: string, xhr: XMLHttpRequest) => any
	): void,
		loadDatabase(
		name: string, callback?: (data: any, textStatus: string, xhr: XMLHttpRequest) => any
	): void
	}

	declare interface LokiJquerySyncAdapterOptions {
		ajaxLib: {
		ajax(options: any): any
	},
		save: {
		url: any,
		type?: string,
		dataType?: string
	},
		load: {
		url: any,
		type?: string,
		dataType?: string
	}
	}

	declare interface LokiJquerySyncAdapterError {
		name: string,
		message: any,
		new (message: any): LokiJquerySyncAdapterError
	}

			declare module.exports: undefined


}

declare module 'lokiCryptedFileAdapter' {
					declare module.exports: undefined


}

declare module 'loki-indexed-adapter' {
					declare module.exports: undefined


}