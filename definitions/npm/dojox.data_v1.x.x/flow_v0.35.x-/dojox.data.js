

declare module 'dojox.data' {
					
}

declare module 'data' {
		declare interface restListener {
		(message: any): void
	}

	declare interface css {
		rules: Object,
		determineContext(initialStylesheets: any): any[],
		findStyleSheet(sheet: any): any[],
		findStyleSheets(sheets: any): any[]
	}

	declare interface dom {
		createDocument(str: String, mimetype: String): any,
		innerXML(node: HTMLElement): void,
		removeChildren(node: HTMLElement): void,
		replaceChildren(node: HTMLElement, newChildren: HTMLElement): void,
		replaceChildren(node: HTMLElement, newChildren: any[]): void,
		textContent(node: HTMLElement, text: String): void
	}

	declare interface GoogleSearchStore {
		BlogSearch(): void,
		BookSearch(): void,
		ImageSearch(): void,
		LocalSearch(): void,
		NewsSearch(): void,
		Search(): void,
		VideoSearch(): void,
		WebSearch(): void
	}

		declare class AndOrReadStore extends undefined$ItemFileReadStore {
		constructor(keywordParameters: Object): this;
		clearOnClose: boolean;
		data: Object;
		failOk: boolean;
		hierarchical: boolean;
		typeMap: Object;
		url: string;
		urlPreventCache: boolean;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		emit(type: any, event: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		filter(requestArgs: any, arrayOfItems: any, findCallback: any): void;
		getAttributes(item: dojo.data.api.Item): any[];
		getFeatures(): any;
		getIdentity(item: dojo.data.api.Item): any;
		getIdentityAttributes(item: dojo.data.api.Item): any;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue: any): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): boolean;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		on(type: any, listener: any): any
	}

	declare class AndOrWriteStore extends undefined$ItemFileWriteStore, undefined$AndOrReadStore {
		constructor(keywordParameters: Object): this;
		clearOnClose: boolean;
		data: Object;
		failOk: boolean;
		hierarchical: boolean;
		referenceIntegrity: boolean;
		typeMap: Object;
		url: string;
		urlPreventCache: boolean;
		close(request: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		deleteItem(item: dojo.data.api.Item): boolean;
		emit(type: any, event: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		filter(requestArgs: Object, arrayOfItems: any[], findCallback: Function): void;
		getAttributes(item: dojo.data.api.Item): any[];
		getFeatures(): any;
		getIdentity(item: dojo.data.api.Item): any;
		getIdentityAttributes(item: dojo.data.api.Item): any;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue: any): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): boolean;
		isDirty(item: any): any;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		newItem(keywordArgs: Object, parentInfo: Object): Object;
		on(type: any, listener: any): any;
		revert(): boolean;
		save(keywordArgs: Object): void;
		setValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		setValues(item: dojo.data.api.Item, attribute: String, values: any[]): any;
		unsetAttribute(item: dojo.data.api.Item, attribute: String): any;
		onDelete(deletedItem: dojo.data.api.Item): void;
		onNew(newItem: dojo.data.api.Item, parentInfo: Object): void;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: Object, newValue: Object
	): void;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: any[], newValue: Object
	): void;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: Object, newValue: any[]
	): void;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: any[], newValue: any[]
	): void
	}

	declare class AppStore  {
		constructor(args: Object): this;
		url: string;
		urlPreventCache: boolean;
		xmethod: boolean;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: any, attribute: String, value: any): any;
		deleteItem(item: any): boolean;
		fetchItemByIdentity(keywordArgs: any): void;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: String, defaultValue: any): any;
		getValues(item: any, attribute: String): any;
		hasAttribute(item: any, attribute: String): boolean;
		isDirty(item: any): boolean;
		isItem(something: any): any;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		newItem(keywordArgs: Object): boolean;
		revert(): boolean;
		save(keywordArgs: Object): void;
		setValue(item: any, attribute: String, value: any): boolean;
		setValues(item: any, attribute: String, values: any[]): any;
		unsetAttribute(item: any, attribute: String): boolean
	}

	declare class AtomReadStore  {
		constructor(args: Object): this;
		label: string;
		sendQuery: boolean;
		unescapeHTML: boolean;
		url: string;
		urlPreventCache: boolean;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: Attr, value: any): any;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		getAttributes(item: dojo.data.api.Item): any;
		getFeatures(): any;
		getFeedValue(attribute: any, defaultValue: any): any;
		getFeedValues(attribute: any, defaultValue: any): any;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: Attr, defaultValue: any): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue: any): any;
		getValues(item: dojo.data.api.Item, attribute: Attr): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: Attr): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): any;
		isItem(something: any): any;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void
	}

	declare class CdfStore  {
		constructor(args: Object): this;
		data: Object;
		identity: string;
		label: string;
		mode: number;
		url: string;
		xmlStr: string;
		byId(args: Object): void;
		byId(args: String): void;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: any, property: String, value: any): boolean;
		deleteItem(item: any): boolean;
		fetch(request: String): any;
		fetchItemByIdentity(args: Object): any;
		fetchItemByIdentity(args: String): any;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any;
		getValue(item: any, property: String, defaultValue: any): any;
		getValues(item: any, property: String): any[];
		hasAttribute(item: any, property: String): boolean;
		hasProperty(item: any, property: String): any;
		isDirty(item: any): boolean;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		newItem(keywordArgs: Object, parentInfo: Object): any;
		newItem(keywordArgs: Object, parentInfo: String): any;
		revert(): boolean;
		setValue(item: any, property: String, value: any): boolean;
		setValues(item: any, property: String, values: any[]): any;
		unsetAttribute(item: any, property: String): boolean
	}

	declare class ClientFilter  {
		constructor(): this;
		cacheByDefault: boolean;
		serverVersion: number;
		cachingFetch(args: any): any;
		clearCache(): void;
		clientSideFetch(request: Object, baseResults: any[]): any;
		clientSidePaging(request: Object, baseResults: any[]): any[];
		isUpdateable(request: Object): boolean;
		makeComparator(sort: any): Function;
		matchesQuery(item: any, request: any): boolean;
		querySuperSet(argsSuper: any, argsSub: any): any;
		updateResultSet(resultSet: any[], request: Object): any;
		onUpdate(): void
	}

	declare class CouchDBRestStore  {
		constructor(): this;
		fetch(args: any): any;
		getStores(couchServerUrl: any): void;
		save(kwArgs: any): void
	}

	declare class CssClassStore extends undefined$CssRuleStore {
		constructor(keywordParameters: Object): this;
		close(): void;
		containsValue(item: any, attribute: String, value: any): any;
		fetch(request: any): String;
		fetchItemByIdentity(request: Object): String;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any[];
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		setContext(context: any[]): void
	}

	declare class CssRuleStore  {
		constructor(keywordParameters: Object): this;
		close(): void;
		containsValue(item: any, attribute: String, value: any): any;
		fetch(request: any): String;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any[];
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		setContext(context: any[]): void
	}

	declare class CsvStore  {
		constructor(keywordParameters: Object): this;
		identifier: string;
		label: string;
		separator: string;
		url: string;
		urlPreventCache: boolean;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: any, attribute: Attr, value: any): any;
		containsValue(item: any, attribute: String, value: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		getAttributes(item: any): any[];
		getFeatures(): any;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any;
		getValue(item: any, attribute: Attr, defaultValue: any): any;
		getValue(item: any, attribute: String, defaultValue: any): any;
		getValues(item: any, attribute: Attr): any[];
		getValues(item: any, attribute: String): any[];
		hasAttribute(item: any, attribute: String): boolean;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(item: any): void
	}

	declare class FileStore  {
		constructor(args: Object): this;
		failOk: boolean;
		label: string;
		options: any[];
		pathAsQueryParam: boolean;
		pathSeparator: string;
		url: string;
		urlPreventCache: string;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		fetchItemByIdentity(keywordArgs: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any[];
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): boolean;
		loadItem(keywordArgs: any): void
	}

	declare class FlickrRestStore extends undefined$FlickrStore {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class FlickrStore  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		urlRegistry: Object;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class GoogleFeedStore  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getFeedValue(attribute: any, defaultValue: any): any;
		getFeedValues(attribute: any, defaultValue: any): any;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class HtmlStore  {
		constructor(args: Object): this;
		dataId: string;
		fetchOnCreate: boolean;
		trimWhitespace: boolean;
		url: string;
		urlPreventCache: boolean;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: any, attribute: String, value: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: any): void;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any;
		getValue(item: any, attribute: String, defaultValue: any): any;
		getValues(item: any, attribute: String): any[];
		hasAttribute(item: any, attribute: String): boolean;
		isItem(something: any): any;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void
	}

	declare class HtmlTableStore  {
		constructor(args: Object): this;
		tableId: string;
		url: string;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: any, attribute: String, value: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: any): void;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any;
		getValue(item: any, attribute: String, defaultValue: any): any;
		getValues(item: any, attribute: String): any[];
		hasAttribute(item: any, attribute: String): boolean;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void
	}

	declare class JsonQueryRestStore extends undefined$JsonRestStore, undefined$JsonQuery {
		constructor(options?: any): this;
		allowNoTrailingSlash: boolean;
		estimateCountFactor: number;
		idAsRef: boolean;
		idAttribute: string;
		jsonQueryPagination: boolean;
		labelAttribute: string;
		loadLazyValues: boolean;
		loadReferencedSchema: boolean;
		referenceIntegrity: boolean;
		schema: Object;
		service: Object;
		syncMode: boolean;
		target: string;
		useFullIdInQueries: boolean;
		cancelChanging(object: any): void;
		changing(item: any, _deleting: any): void;
		clientSideFetch(request: Object, baseResults: any[]): any;
		close(request: any): any;
		containsValue(item: Object, attribute: String, value: any): boolean;
		deleteItem(item: any): void;
		fetch(args: any): String;
		fetchItemByIdentity(args: any): any;
		getAttributes(item: Object): any[];
		getConstructor(): any;
		getFeatures(): any;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getParent(item: any): any;
		getSchema(): any;
		getValue(item: Object, property: String, defaultValue: any): any;
		getValues(item: Object, property: String): any[];
		hasAttribute(item: Object, attribute: String): boolean;
		isDirty(item: any): any;
		isItem(item: Object, anyStore: boolean): any;
		isItemLoaded(item: Object): any;
		isUpdateable(): boolean;
		loadItem(args: any): any;
		matchesQuery(item: any, request: any): any;
		newItem(data: Object, parentInfo: any): any;
		querySuperSet(argsSuper: any, argsSub: any): any;
		revert(kwArgs: any): void;
		save(kwArgs: any): any;
		setValue(item: any, attribute: any, value: any): void;
		setValues(item: any, attribute: any, values: any): void;
		unsetAttribute(item: any, attribute: any): void;
		onDelete(): void;
		onNew(): void;
		onSet(): void
	}

	declare class JsonRestStore extends undefined$ServiceStore {
		constructor(options?: any): this;
		allowNoTrailingSlash: boolean;
		estimateCountFactor: number;
		idAsRef: boolean;
		idAttribute: string;
		labelAttribute: string;
		loadLazyValues: boolean;
		loadReferencedSchema: boolean;
		referenceIntegrity: boolean;
		schema: Object;
		service: Object;
		syncMode: boolean;
		target: string;
		cancelChanging(object: any): void;
		changing(item: any, _deleting: any): void;
		close(request: any): any;
		containsValue(item: Object, attribute: String, value: any): boolean;
		deleteItem(item: any): void;
		fetch(args: any): String;
		fetchItemByIdentity(args: any): any;
		getAttributes(item: Object): any[];
		getConstructor(): any;
		getFeatures(): any;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getParent(item: any): any;
		getSchema(): any;
		getStore(options: any, Class: any): void;
		getValue(item: Object, property: String, defaultValue: any): any;
		getValues(item: Object, property: String): any[];
		hasAttribute(item: Object, attribute: String): boolean;
		isDirty(item: any): any;
		isItem(item: Object, anyStore?: boolean): any;
		isItemLoaded(item: Object): any;
		loadItem(args: any): any;
		newItem(data: Object, parentInfo: any): any;
		revert(kwArgs: any): void;
		save(kwArgs: any): any;
		setValue(item: any, attribute: any, value: any): void;
		setValues(item: any, attribute: any, values: any): void;
		unsetAttribute(item: any, attribute: any): void;
		onDelete(): void;
		onNew(): void;
		onSet(): void
	}

	declare class KeyValueStore  {
		constructor(keywordParameters: Object): this;
		data: string;
		url: string;
		urlPreventCache: boolean;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: any, attribute: String, value: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		getAttributes(item: any): any[];
		getFeatures(): any;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: String, defaultValue: any): any;
		getValues(item: any, attribute: String): any[];
		hasAttribute(item: any, attribute: String): boolean;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void
	}

	declare class OpenSearchStore  {
		constructor(args: Object): this;
		ATOM_CONTENT_TYPE: number;
		ATOM_CONTENT_TYPE_STRING: string;
		iframeElement: Object;
		itemPath: string;
		RSS_CONTENT_TYPE: number;
		RSS_CONTENT_TYPE_STRING: string;
		url: string;
		urlElement: Object;
		urlPreventCache: boolean;
		XML_CONTENT_TYPE: number;
		XML_CONTENT_TYPE_STRING: string;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any;
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void;
		process(data: any): any;
		processItem(item: any, attribute: any): any
	}

	declare class OpmlStore  {
		constructor(keywordParameters: Object): this;
		label: string;
		url: string;
		urlPreventCache: boolean;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: any, attribute: Attr, value: any): any;
		containsValue(item: any, attribute: String, value: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: Attr, defaultValue: any): any;
		getValue(item: any, attribute: String, defaultValue: any): any;
		getValues(item: any, attribute: Attr): any[];
		getValues(item: any, attribute: String): any[];
		hasAttribute(item: any, attribute: Attr): boolean;
		hasAttribute(item: any, attribute: String): boolean;
		isItem(something: any): any;
		isItemLoaded(something: any): any;
		loadItem(item: any): void
	}

	declare class PersevereStore  {
		constructor(): this;
		jsonQueryPagination: boolean;
		useFullIdInQueries: boolean;
		addProxy(): void;
		getStores(path: String, sync: boolean): any
	}

	declare class PicasaStore  {
		constructor(args: Object): this;
		label: string;
		maxResults: number;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		getAttributes(item: any): any[];
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class QueryReadStore  {
		constructor(params: Object): this;
		doClientPaging: boolean;
		doClientSorting: boolean;
		lastRequestHash: Object;
		requestMethod: string;
		url: string;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: any, attribute: String, value: any): boolean;
		fetch(request: Object): String;
		fetchItemByIdentity(keywordArgs: Object): void;
		getAttributes(item: any): any[];
		getFeatures(): any;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any;
		getValue(item: any, attribute: String, defaultValue: any): any;
		getValues(item: any, attribute: String): any[];
		hasAttribute(item: any, attribute: String): any;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(args: Object): void
	}

	declare class RailsStore  {
		constructor(): this;
		fetch(args: any): any;
		preamble(options: any): void
	}

	declare class S3Store extends undefined$JsonRestStore {
		constructor(options?: any): this;
		allowNoTrailingSlash: boolean;
		estimateCountFactor: number;
		idAsRef: boolean;
		idAttribute: string;
		labelAttribute: string;
		loadLazyValues: boolean;
		loadReferencedSchema: boolean;
		referenceIntegrity: boolean;
		schema: Object;
		service: Object;
		syncMode: boolean;
		target: string;
		cancelChanging(object: any): void;
		changing(item: any, _deleting: any): void;
		close(request: any): any;
		containsValue(item: Object, attribute: String, value: any): boolean;
		deleteItem(item: any): void;
		fetch(args: any): String;
		fetchItemByIdentity(args: any): any;
		getAttributes(item: Object): any[];
		getConstructor(): any;
		getFeatures(): any;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getParent(item: any): any;
		getSchema(): any;
		getValue(item: Object, property: String, defaultValue: any): any;
		getValues(item: Object, property: String): any[];
		hasAttribute(item: Object, attribute: String): boolean;
		isDirty(item: any): any;
		isItem(item: Object, anyStore: boolean): any;
		isItemLoaded(item: Object): any;
		loadItem(args: any): any;
		newItem(data: Object, parentInfo: any): any;
		revert(kwArgs: any): void;
		save(kwArgs: any): any;
		setValue(item: any, attribute: any, value: any): void;
		setValues(item: any, attribute: any, values: any): void;
		unsetAttribute(item: any, attribute: any): void;
		onDelete(): void;
		onNew(): void;
		onSet(): void
	}

	declare class ServiceStore  {
		constructor(options?: any): this;
		estimateCountFactor: number;
		idAttribute: string;
		labelAttribute: string;
		loadLazyValues: boolean;
		schema: Object;
		service: Object;
		syncMode: boolean;
		close(request: any): any;
		containsValue(item: Object, attribute: String, value: any): boolean;
		fetch(args: any): String;
		fetchItemByIdentity(args: any): any;
		getAttributes(item: Object): any[];
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getSchema(): any;
		getValue(item: Object, property: String, defaultValue: any): any;
		getValues(item: Object, property: String): any[];
		hasAttribute(item: Object, attribute: String): boolean;
		isItem(item: Object): boolean;
		isItemLoaded(item: Object): any;
		loadItem(args: any): any
	}

	declare class SnapLogicStore  {
		constructor(args: Object): this;
		Parts: Object;
		url: string;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: Object): Object;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any;
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any[];
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class WikipediaStore extends undefined$ServiceStore {
		constructor(options: any): this;
		estimateCountFactor: number;
		idAttribute: string;
		labelAttribute: string;
		loadLazyValues: boolean;
		schema: Object;
		service: Object;
		syncMode: boolean;
		close(request: any): any;
		containsValue(item: Object, attribute: String, value: any): boolean;
		fetch(request: Object): any;
		fetchItemByIdentity(args: any): any;
		getAttributes(item: Object): any[];
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getSchema(): any;
		getValue(item: Object, property: String, defaultValue: any): any;
		getValues(item: Object, property: String): any[];
		hasAttribute(item: Object, attribute: String): boolean;
		isItem(item: Object): boolean;
		isItemLoaded(item: Object): any;
		loadItem(args: any): any
	}

	declare class XmlItem  {
		constructor(element: any, store: any, query: any): this;
		toString(): any
	}

	declare class XmlStore  {
		constructor(args: Object): this;
		attributeMap: Object;
		keyAttribute: string;
		label: string;
		rootItem: string;
		sendQuery: boolean;
		url: string;
		urlPreventCache: boolean;
		close(request: dojo.data.api.Request): void;
		close(request: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: Attr, value: any): any;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		deleteItem(item: dojo.data.api.Item): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		getAttributes(item: dojo.data.api.Item): any;
		getFeatures(): any;
		getIdentity(item: dojo.data.api.Item): any;
		getIdentityAttributes(item: dojo.data.api.Item): any;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: Attr, defaultValue: any): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue: any): any;
		getValues(item: dojo.data.api.Item, attribute: Attr): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: Attr): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): any;
		isDirty(item: any): any;
		isItem(something: any): any;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		newItem(keywordArgs: Object, parentInfo: any): any;
		revert(): any;
		save(keywordArgs: Object): void;
		setValue(item: dojo.data.api.Item, attribute: Attr, value: any): any;
		setValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		setValues(item: dojo.data.api.Item, attribute: Attr, values: any[]): any;
		setValues(item: dojo.data.api.Item, attribute: String, values: any[]): any;
		unsetAttribute(item: dojo.data.api.Item, attribute: Attr): any;
		unsetAttribute(item: dojo.data.api.Item, attribute: String): any
	}

	
}

declare module 'util' {
				declare class JsonQuery  {
		constructor(): this;
		jsonQueryPagination: boolean;
		useFullIdInQueries: boolean;
		clientSideFetch(request: Object, baseResults: any[]): any;
		fetch(args: any): any;
		isUpdateable(): boolean;
		matchesQuery(item: any, request: any): any;
		querySuperSet(argsSuper: any, argsSub: any): any
	}

	
}

declare module 'css' {
		declare interface rules {
		forEach(fn: any, ctx: any, context: any): void
	}

			
}

declare module 'GoogleSearchStore' {
				declare class BlogSearch  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class BookSearch  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class ImageSearch  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class LocalSearch  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class NewsSearch  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class VideoSearch  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class Search  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	declare class WebSearch  {
		constructor(args: Object): this;
		label: string;
		urlPreventCache: boolean;
		close(request: any): void;
		containsValue(item: any, attribute: any, value: any): boolean;
		fetch(request: any): void;
		getAttributes(item: any): any;
		getFeatures(): Object;
		getLabel(item: any): any;
		getLabelAttributes(item: any): any[];
		getValue(item: any, attribute: any, defaultValue: any): any;
		getValues(item: any, attribute: any): any;
		hasAttribute(item: any, attribute: any): boolean;
		isItem(item: any): boolean;
		isItemLoaded(item: any): any;
		loadItem(keywordArgs: any): void
	}

	
}

declare module 'dojox/data/restListener' {
					declare module.exports: restListener


}

declare module 'dojox/data/css' {
					declare module.exports: css


}

declare module 'dojox/data/css.rules' {
					declare module.exports: rules


}

declare module 'dojox/data/dom' {
					declare module.exports: dom


}

declare module 'dojox/data/GoogleSearchStore' {
					declare module.exports: GoogleSearchStore


}

declare module 'dojox/data/GoogleSearchStore.ImageSearch' {
					declare module.exports: ImageSearch


}

declare module 'dojox/data/GoogleSearchStore.BookSearch' {
					declare module.exports: BookSearch


}

declare module 'dojox/data/GoogleSearchStore.LocalSearch' {
					declare module.exports: LocalSearch


}

declare module 'dojox/data/GoogleSearchStore.BlogSearch' {
					declare module.exports: BlogSearch


}

declare module 'dojox/data/GoogleSearchStore.VideoSearch' {
					declare module.exports: VideoSearch


}

declare module 'dojox/data/GoogleSearchStore.Search' {
					declare module.exports: Search


}

declare module 'dojox/data/GoogleSearchStore.WebSearch' {
					declare module.exports: WebSearch


}

declare module 'dojox/data/GoogleSearchStore.NewsSearch' {
					declare module.exports: NewsSearch


}

declare module 'dojox/data/AndOrReadStore' {
					declare module.exports: AndOrReadStore


}

declare module 'dojox/data/AppStore' {
					declare module.exports: AppStore


}

declare module 'dojox/data/AndOrWriteStore' {
					declare module.exports: AndOrWriteStore


}

declare module 'dojox/data/AtomReadStore' {
					declare module.exports: AtomReadStore


}

declare module 'dojox/data/ClientFilter' {
					declare module.exports: ClientFilter


}

declare module 'dojox/data/CouchDBRestStore' {
					declare module.exports: CouchDBRestStore


}

declare module 'dojox/data/CdfStore' {
					declare module.exports: CdfStore


}

declare module 'dojox/data/CssRuleStore' {
					declare module.exports: CssRuleStore


}

declare module 'dojox/data/CssClassStore' {
					declare module.exports: CssClassStore


}

declare module 'dojox/data/CsvStore' {
					declare module.exports: CsvStore


}

declare module 'dojox/data/FileStore' {
					declare module.exports: FileStore


}

declare module 'dojox/data/FlickrRestStore' {
					declare module.exports: FlickrRestStore


}

declare module 'dojox/data/GoogleFeedStore' {
					declare module.exports: GoogleFeedStore


}

declare module 'dojox/data/FlickrStore' {
					declare module.exports: FlickrStore


}

declare module 'dojox/data/HtmlStore' {
					declare module.exports: HtmlStore


}

declare module 'dojox/data/HtmlTableStore' {
					declare module.exports: HtmlTableStore


}

declare module 'dojox/data/KeyValueStore' {
					declare module.exports: KeyValueStore


}

declare module 'dojox/data/JsonRestStore' {
					declare module.exports: JsonRestStore


}

declare module 'dojox/data/JsonQueryRestStore' {
					declare module.exports: JsonQueryRestStore


}

declare module 'dojox/data/PersevereStore' {
					declare module.exports: PersevereStore


}

declare module 'dojox/data/OpenSearchStore' {
					declare module.exports: OpenSearchStore


}

declare module 'dojox/data/PicasaStore' {
					declare module.exports: PicasaStore


}

declare module 'dojox/data/OpmlStore' {
					declare module.exports: OpmlStore


}

declare module 'dojox/data/RailsStore' {
					declare module.exports: RailsStore


}

declare module 'dojox/data/QueryReadStore' {
					declare module.exports: QueryReadStore


}

declare module 'dojox/data/S3Store' {
					declare module.exports: S3Store


}

declare module 'dojox/data/SnapLogicStore' {
					declare module.exports: SnapLogicStore


}

declare module 'dojox/data/XmlItem' {
					declare module.exports: XmlItem


}

declare module 'dojox/data/ServiceStore' {
					declare module.exports: ServiceStore


}

declare module 'dojox/data/WikipediaStore' {
					declare module.exports: WikipediaStore


}

declare module 'dojox/data/XmlStore' {
					declare module.exports: XmlStore


}

declare module 'dojox/data/util/JsonQuery' {
					declare module.exports: JsonQuery


}