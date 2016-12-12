

declare module 'backbone-global' {
					
}

declare module 'npm$namespace$Backbone' {
		declare interface AddOptions {
		at?: number,
		merge?: boolean
	}

	declare interface HistoryOptions {
		pushState?: boolean,
		root?: string
	}

	declare interface NavigateOptions {
		trigger?: boolean,
		replace?: boolean
	}

	declare interface RouterOptions {
		routes: any
	}

	declare interface Silenceable {
		silent?: boolean
	}

	declare interface Validable {
		validate?: boolean
	}

	declare interface Waitable {
		wait?: boolean
	}

	declare interface Parseable {
		parse?: any
	}

	declare interface PersistenceOptions {
		url?: string,
		data?: any,
		beforeSend?: (jqxhr: JQueryXHR) => void,
		success?: (modelOrCollection?: any, response?: any, options?: any) => void,
		error?: (modelOrCollection?: any, jqxhr?: JQueryXHR, options?: any) => void
	}

	declare interface ModelSetOptions {
		
	}

	declare interface ModelFetchOptions {
		
	}

	declare interface ModelSaveOptions {
		patch?: boolean
	}

	declare interface ModelDestroyOptions {
		
	}

	declare interface CollectionFetchOptions {
		reset?: boolean
	}

	declare interface ObjectHash {
		[key: string]: any
	}

	declare interface RoutesHash {
		[routePattern: string]: string | {
		(...urlParts: string[]): void
	}
	}

	declare interface EventsHash {
		[selector: string]: string | {
		(eventObject: JQueryEventObject): void
	}
	}

	declare interface ViewOptions<TModel> {
		model?: TModel,
		collection?: Backbone.Collection<any>,
		el?: any,
		events?: EventsHash,
		id?: string,
		className?: string,
		tagName?: string,
		attributes?: {
		[id: string]: any
	}
	}

	declare function sync(method: string, model: Model, options?: JQueryAjaxSettings): any

	declare function ajax(options?: JQueryAjaxSettings): JQueryXHR

	declare function noConflict(): typeof Backbone

	declare class Events  {
		on(eventName: string, callback?: Function, context?: any): any;
		on(eventMap: EventsHash): any;
		off(eventName?: string, callback?: Function, context?: any): any;
		trigger(eventName: string, ...args: any[]): any;
		bind(eventName: string, callback: Function, context?: any): any;
		unbind(eventName?: string, callback?: Function, context?: any): any;
		once(events: string, callback: Function, context?: any): any;
		listenTo(object: any, events: string, callback: Function): any;
		listenToOnce(object: any, events: string, callback: Function): any;
		stopListening(object?: any, events?: string, callback?: Function): any
	}

	declare class ModelBase extends Events {
		url: any;
		parse(response: any, options?: any): any;
		toJSON(options?: any): any;
		sync(...arg: any[]): JQueryXHR
	}

	declare class Model extends ModelBase {
		attributes: any;
		changed: any[];
		cidPrefix: string;
		cid: string;
		collection: Collection<any>;
		defaults(): ObjectHash;
		id: any;
		idAttribute: string;
		validationError: any;
		urlRoot: any;
		constructor(attributes?: any, options?: any): this;
		initialize(attributes?: any, options?: any): void;
		fetch(options?: ModelFetchOptions): JQueryXHR;
		get(attributeName: string): any;
		set(attributeName: string, value: any, options?: ModelSetOptions): Model;
		set(obj: any, options?: ModelSetOptions): Model;
		changedAttributes(attributes?: any): any;
		clear(options?: Silenceable): any;
		clone(): Model;
		destroy(options?: ModelDestroyOptions): any;
		escape(attribute: string): string;
		has(attribute: string): boolean;
		hasChanged(attribute?: string): boolean;
		isNew(): boolean;
		isValid(options?: any): boolean;
		previous(attribute: string): any;
		previousAttributes(): any[];
		save(attributes?: any, options?: ModelSaveOptions): any;
		unset(attribute: string, options?: Silenceable): Model;
		validate(attributes: any, options?: any): any;
		keys(): string[];
		values(): any[];
		pairs(): any[];
		invert(): any;
		pick(keys: string[]): any;
		pick(...keys: string[]): any;
		pick(fn: (value: any, key: any, object: any) => any): any;
		omit(keys: string[]): any;
		omit(...keys: string[]): any;
		omit(fn: (value: any, key: any, object: any) => any): any;
		chain(): any;
		isEmpty(): boolean;
		matches(attrs: any): boolean
	}

	declare class Collection<TModel> extends ModelBase {
		model: NO PRINT IMPLEMENTED: ConstructorType;
		models: TModel[];
		length: number;
		constructor(models?: TModel[] | Object[], options?: any): this;
		initialize(models?: TModel[] | Object[], options?: any): void;
		fetch(options?: CollectionFetchOptions): JQueryXHR;
		comparator: string | ((element: TModel) => number | string) | ((compare: TModel, to?: TModel) => number);
		add(model: {
		
	} | TModel, options?: AddOptions): TModel;
		add(models: ({
		
	} | TModel)[], options?: AddOptions): TModel[];
		at(index: number): TModel;
		get(id: number | string | Model): TModel;
		has(key: number | string | Model): boolean;
		create(attributes: any, options?: ModelSaveOptions): TModel;
		pluck(attribute: string): any[];
		push(model: TModel, options?: AddOptions): TModel;
		pop(options?: Silenceable): TModel;
		remove(model: {
		
	} | TModel, options?: Silenceable): TModel;
		remove(models: ({
		
	} | TModel)[], options?: Silenceable): TModel[];
		reset(models?: TModel[], options?: Silenceable): TModel[];
		set(models?: TModel[], options?: Silenceable): TModel[];
		shift(options?: Silenceable): TModel;
		sort(options?: Silenceable): Collection<TModel>;
		unshift(model: TModel, options?: AddOptions): TModel;
		where(properties: any): TModel[];
		findWhere(properties: any): TModel;
		modelId(attrs: any): any;
		slice(min: number, max?: number): TModel[];
		all(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
		any(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
		chain(): any;
		collect<TResult>(iterator: _.ListIterator<TModel, TResult>, context?: any): TResult[];
		contains(value: TModel): boolean;
		countBy(iterator?: _.ListIterator<TModel, any>): _.Dictionary<number>;
		countBy(iterator: string): _.Dictionary<number>;
		detect(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel;
		difference(others: TModel[]): TModel[];
		drop(n?: number): TModel[];
		each(iterator: _.ListIterator<TModel, void>, context?: any): TModel[];
		every(iterator: _.ListIterator<TModel, boolean>, context?: any): boolean;
		filter(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
		find(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel;
		findIndex(predicate: _.ListIterator<TModel, boolean>, context?: any): number;
		findLastIndex(predicate: _.ListIterator<TModel, boolean>, context?: any): number;
		first(): TModel;
		first(n: number): TModel[];
		foldl<TResult>(
		iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any
	): TResult;
		foldr<TResult>(
		iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any
	): TResult;
		forEach(iterator: _.ListIterator<TModel, void>, context?: any): TModel[];
		groupBy(iterator: _.ListIterator<TModel, any>, context?: any): _.Dictionary<TModel[]>;
		groupBy(iterator: string, context?: any): _.Dictionary<TModel[]>;
		head(): TModel;
		head(n: number): TModel[];
		include(value: TModel): boolean;
		includes(value: TModel): boolean;
		indexBy(iterator: _.ListIterator<TModel, any>, context?: any): _.Dictionary<TModel>;
		indexBy(iterator: string, context?: any): _.Dictionary<TModel>;
		indexOf(value: TModel, isSorted?: boolean): number;
		initial(): TModel;
		initial(n: number): TModel[];
		inject<TResult>(
		iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any
	): TResult;
		invoke(methodName: string, ...args: any[]): any;
		isEmpty(): boolean;
		last(): TModel;
		last(n: number): TModel[];
		lastIndexOf(value: TModel, from?: number): number;
		map<TResult>(iterator: _.ListIterator<TModel, TResult>, context?: any): TResult[];
		max(iterator?: _.ListIterator<TModel, any>, context?: any): TModel;
		min(iterator?: _.ListIterator<TModel, any>, context?: any): TModel;
		partition(iterator: _.ListIterator<TModel, boolean>): TModel[][];
		reduce<TResult>(
		iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any
	): TResult;
		reduceRight<TResult>(
		iterator: _.MemoIterator<TModel, TResult>, memo?: TResult, context?: any
	): TResult;
		reject(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
		rest(n?: number): TModel[];
		sample(): TModel;
		sample(n: number): TModel[];
		select(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
		shuffle(): TModel[];
		size(): number;
		some(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
		sortBy<TSort>(iterator?: _.ListIterator<TModel, TSort>, context?: any): TModel[];
		sortBy(iterator: string, context?: any): TModel[];
		tail(n?: number): TModel[];
		take(): TModel;
		take(n: number): TModel[];
		toArray(): TModel[];
		without(...values: TModel[]): TModel[]
	}

	declare class Router extends Events {
		routes: RoutesHash | any;
		constructor(options?: RouterOptions): this;
		initialize(options?: RouterOptions): void;
		route(route: string | RegExp, name: string, callback?: Function): Router;
		navigate(fragment: string, options?: NavigateOptions): Router;
		navigate(fragment: string, trigger?: boolean): Router;
		execute(callback: Function, args: any[], name: string): void
	}

	declare class History extends Events {
		handlers: any[];
		interval: number;
		start(options?: HistoryOptions): boolean;
		getHash(window?: Window): string;
		getFragment(fragment?: string): string;
		decodeFragment(fragment: string): string;
		getSearch(): string;
		stop(): void;
		route(route: string, callback: Function): number;
		checkUrl(e?: any): void;
		getPath(): string;
		matchRoot(): boolean;
		atRoot(): boolean;
		loadUrl(fragmentOverride?: string): boolean;
		navigate(fragment: string, options?: any): boolean;
		started: boolean;
		options: any
	}

	declare class View<TModel> extends Events {
		constructor(options?: ViewOptions<TModel>): this;
		initialize(options?: ViewOptions<TModel>): void;
		events(): EventsHash;
		$(selector: string): JQuery;
		model: TModel;
		collection: Collection<TModel>;
		setElement(element: HTMLElement | JQuery, delegate?: boolean): View<TModel>;
		id: string;
		cid: string;
		className: string;
		tagName: string;
		el: any;
		$el: JQuery;
		setElement(element: any): View<TModel>;
		attributes: any;
		$(selector: any): JQuery;
		render(): View<TModel>;
		remove(): View<TModel>;
		delegateEvents(events?: EventsHash): any;
		delegate(eventName: string, selector: string, listener: Function): View<TModel>;
		undelegateEvents(): any;
		undelegate(eventName: string, selector?: string, listener?: Function): View<TModel>;
		_ensureElement(): void
	}

	
}

declare module 'backbone' {
					declare module.exports: undefined


}