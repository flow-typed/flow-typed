

declare module 'typeahead' {
		declare interface JQuery {
		typeahead<T>(
		options: Twitter.Typeahead.Options, datasets: Twitter.Typeahead.Dataset<T>[]
	): JQuery,
		typeahead<T>(
		options: Twitter.Typeahead.Options, dataset: Twitter.Typeahead.Dataset<T>, ...datasets: Twitter.Typeahead.Dataset<T>[]
	): JQuery,
		typeahead(methodName: "val"): string,
		typeahead(methodName: string): string,
		typeahead(methodName: "val", val: string): JQuery,
		typeahead(methodName: string, val: string): JQuery,
		typeahead(methodName: "open"): JQuery,
		typeahead(methodName: "close"): JQuery,
		typeahead(methodName: "destroy"): JQuery,
		on(
		events: "typeahead:active", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:active", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:active", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:active", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:idle", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:idle", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:idle", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:idle", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:open", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:open", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:open", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:open", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:close", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:close", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:close", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:close", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:change", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:change", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:change", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:change", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:render", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:render", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:render", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:render", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:select", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:select", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:select", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:select", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:autocomplete", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:autocomplete", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:autocomplete", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:autocomplete", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:cursorchange", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:cursorchange", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:cursorchange", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:cursorchange", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asyncrequest", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asyncrequest", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asyncrequest", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asyncrequest", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asynccancel", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asynccancel", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asynccancel", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asynccancel", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asyncreceive", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asyncreceive", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asyncreceive", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: "typeahead:asyncreceive", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		off(
		events: "typeahead:active", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:active", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:idle", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:idle", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:open", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:open", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:close", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:close", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:change", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:change", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:render", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:render", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:select", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:select", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:autocomplete", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:autocomplete", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:cursorchange", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:cursorchange", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:asyncrequest", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:asyncrequest", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:asynccancel", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:asynccancel", handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:asyncreceive", selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: "typeahead:asyncreceive", handler: (eventObject: JQueryEventObject) => any
	): JQuery
	}

		declare class Bloodhound<T>  {
		constructor(options: Bloodhound.BloodhoundOptions<T>): this;
		noConflict(): Bloodhound<any>;
		tokenizers: Bloodhound.Tokenizers;
		initialize(reinitialize?: boolean): JQueryPromise<T>;
		add(data: T[]): void;
		get(ids: number[]): T[];
		search(query: string, sync: (datums: T[]) => void, async: (datums: T[]) => void): T[];
		all(): T[];
		clear(): Bloodhound<T>;
		clearPrefetchCache(): Bloodhound<T>;
		clearRemoteCache(): Bloodhound<T>
	}

	
}

declare module 'Typeahead' {
		declare interface Options {
		highlight?: boolean,
		hint?: boolean,
		minLength?: number,
		classNames?: ClassNames
	}

	declare interface Dataset<T> {
		source: Bloodhound<T> | ((
		query: string, syncResults: (result: T[]) => void, asyncResults?: (result: T[]) => void
	) => void),
		async?: boolean,
		name?: string,
		limit?: number,
		display?: string | ((obj: T) => string),
		templates?: Templates<T>
	}

	declare interface Templates<T> {
		notFound?: string | ((query: string) => string),
		pending?: string | ((query: string) => string),
		header?: string | ((query: string, suggestions: T[]) => string),
		footer?: string | ((query: string, suggestions: T[]) => string),
		suggestion?: (suggestion: T) => string
	}

	declare interface ClassNames {
		input?: string,
		hint?: string,
		menu?: string,
		dataset?: string,
		suggestion?: string,
		empty?: string,
		open?: string,
		cursor?: string,
		highlight?: string
	}

			
}

declare module 'npm$namespace$Bloodhound' {
		declare interface BloodhoundOptions<T> {
		datumTokenizer: (datum: T) => string[],
		queryTokenizer: (query: string) => string[],
		initialize?: boolean,
		identify?: (datum: T) => number,
		sufficient?: number,
		sorter?: (a: T, b: T) => number,
		local?: T[] | (() => T[]),
		prefetch?: string | PrefetchOptions<T>,
		remote?: string | RemoteOptions<T>
	}

	declare interface PrefetchOptions<T> {
		url: string,
		cache?: boolean,
		ttl?: number,
		cacheKey?: string,
		thumbprint?: string,
		prepare?: (settings: JQueryAjaxSettings) => JQueryAjaxSettings,
		transform?: (response: T[]) => T[]
	}

	declare interface RemoteOptions<T> {
		url: string,
		prepare?: (query: string, settings: JQueryAjaxSettings) => JQueryAjaxSettings,
		wildcard?: string,
		rateLimitby?: string,
		rateLimitWait?: number,
		transform?: (response: T[]) => T[]
	}

	declare interface Tokenizers {
		whitespace(str: string): string[],
		nonword(str: string): string[],
		obj: ObjTokenizer
	}

	declare interface ObjTokenizer {
		whitespace(str: string): string[],
		nonword(str: string): string[]
	}

			
}

declare module 'bloodhound' {
					declare module.exports: undefined


}