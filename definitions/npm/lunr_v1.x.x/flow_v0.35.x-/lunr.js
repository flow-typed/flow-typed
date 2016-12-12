

declare module 'lunr' {
			declare function lunr(config: Function): lunr.Index

		
}

declare module 'npm$namespace$lunr' {
		declare interface TokenizerFunction {
		(obj: any): string[]
	}

	declare interface IPipelineFunction {
		(token: string): string,
		(token: string, tokenIndex: number): string,
		(token: string, tokenIndex: number, tokens: string[]): string
	}

	declare interface IIndexField {
		name: string,
		boost: number
	}

	declare interface IIndexSearchResult {
		ref: any,
		score: number
	}

	declare interface ITokenDocument {
		ref: number,
		tf: number
	}

	declare function tokenizer(obj: any): string[]

	declare function stemmer(token: string): string

	declare function stopWordFilter(token: string): string

	declare function trimmer(token: string): string

	declare class EventEmitter  {
		addListener(eventName: string, handler: Function): void;
		addListener(eventName: string, eventName2: string, handler: Function): void;
		addListener(
		eventName: string, eventName2: string, eventName3: string, handler: Function
	): void;
		addListener(
		eventName: string, eventName2: string, eventName3: string, eventName4: string, handler: Function
	): void;
		addListener(
		eventName: string, eventName2: string, eventName3: string, eventName4: string, eventName5: string, handler: Function
	): void;
		removeListener(eventName: string, handler: Function): void;
		emit(eventName: string, ...args: any[]): void;
		hasHandler(eventName: string): boolean
	}

	declare class Pipeline  {
		registeredFunctions: {
		[label: string]: Function
	};
		registerFunction(fn: IPipelineFunction, label: string): void;
		warnIfFunctionNotRegistered(fn: IPipelineFunction): void;
		add(...functions: IPipelineFunction[]): void;
		after(existingFn: IPipelineFunction, newFn: IPipelineFunction): void;
		before(existingFn: IPipelineFunction, newFn: IPipelineFunction): void;
		remove(fn: IPipelineFunction): void;
		run(tokens: string[]): string[];
		reset(): void;
		toJSON(): any;
		load(serialised: any): Pipeline
	}

	declare class Vector  {
		list: Node;
		magnitude(): number;
		dot(otherVector: Vector): number;
		similarity(otherVector: Vector): number
	}

	declare class Node  {
		idx: number;
		val: number;
		next: Node;
		constructor(idx: number, val: number, next: Node): this
	}

	declare class SortedSet<T>  {
		elements: T[];
		length: number;
		add(...values: T[]): void;
		toArray(): T[];
		map(fn: Function, ctx: any): T[];
		forEach(fn: Function, ctx: any): any;
		indexOf(elem: T, start?: number, end?: number): number;
		locationFor(elem: T, start?: number, end?: number): number;
		intersect(otherSet: SortedSet<T>): SortedSet<T>;
		union(otherSet: SortedSet<T>): SortedSet<T>;
		clone(): SortedSet<T>;
		toJSON(): any;
		load<T>(serialisedData: T[]): SortedSet<T>
	}

	declare class Index  {
		eventEmitter: EventEmitter;
		documentStore: Store<string>;
		tokenStore: TokenStore;
		corpusTokens: SortedSet<string>;
		pipeline: Pipeline;
		_fields: IIndexField[];
		_ref: string;
		_idfCache: {
		[key: string]: string
	};
		on(eventName: string, handler: Function): void;
		on(eventName: string, eventName2: string, handler: Function): void;
		on(
		eventName: string, eventName2: string, eventName3: string, handler: Function
	): void;
		on(
		eventName: string, eventName2: string, eventName3: string, eventName4: string, handler: Function
	): void;
		on(
		eventName: string, eventName2: string, eventName3: string, eventName4: string, eventName5: string, handler: Function
	): void;
		off(eventName: string, handler: Function): void;
		field(fieldName: string, options?: {
		boost?: number
	}): Index;
		ref(refName: string): Index;
		add(doc: any, emitEvent?: boolean): void;
		remove(doc: any, emitEvent?: boolean): void;
		update(doc: any, emitEvent?: boolean): void;
		idf(token: string): string;
		search(query: string): IIndexSearchResult[];
		documentVector(documentRef: string): Vector;
		toJSON(): any;
		use(plugin: Function, ...args: any[]): void;
		load(serialisedData: any): Index
	}

	declare class Store<T>  {
		store: {
		[id: string]: SortedSet<T>
	};
		length: number;
		set(id: string, tokens: SortedSet<T>): void;
		get(id: string): SortedSet<T>;
		has(id: string): boolean;
		remove(id: string): void;
		toJSON(): any;
		load<T>(serialisedData: any): Store<T>
	}

	declare class TokenStore  {
		root: {
		[token: string]: TokenStore
	};
		docs: {
		[ref: string]: ITokenDocument
	};
		length: number;
		add(token: string, doc: ITokenDocument, root?: TokenStore): void;
		has(token: string): boolean;
		getNode(token: string): TokenStore;
		get(token: string, root: TokenStore): {
		[ref: string]: ITokenDocument
	};
		count(token: string, root: TokenStore): number;
		remove(token: string, ref: string): void;
		expand(token: string, memo?: string[]): string[];
		toJSON(): any;
		load(serialisedData: any): TokenStore
	}

	
}

declare module 'tokenizer' {
			declare function registerFunction(fn: TokenizerFunction, label: string): void

	declare function load(label: string): TokenizerFunction

		
}

declare module 'stopWordFilter' {
					
}

declare module 'utils' {
			declare function warn(message: any): void

	declare function asString(obj: any): string

		
}