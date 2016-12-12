

declare module 'sammyjs' {
		declare interface JQueryStatic {
		sammy: Sammy.SammyFunc,
		log: Function
	}

	declare function Sammy(): Sammy.Application

	declare function Sammy(selector: string): Sammy.Application

	declare function Sammy(handler: Function): Sammy.Application

	declare function Sammy(selector: string, handler: Function): Sammy.Application

		
}

declare module 'npm$namespace$Sammy' {
		declare interface SammyFunc {
		(): Sammy.Application,
		(selector: string): Sammy.Application,
		(handler: Function): Sammy.Application,
		(selector: string, handler: Function): Sammy.Application
	}

	declare export interface Application {
		ROUTE_VERBS: string[],
		APP_EVENTS: string[],
		(appFn: Function),
		$element(selector?: string): JQuery,
		after(callback: Function): Application,
		any(verb: string, path: string, callback: Function): void,
		around(callback: Function): Application,
		before(callback: Function): Application,
		before(options: any, callback: Function): Application,
		bind(name: string, callback: Function): Application,
		bind(name: string, data: any, callback: Function): Application,
		bindToAllEvents(callback: Function): Application,
		clearTemplateCache(): any,
		contextMatchesOptions(context: any, match_options: any, positive?: boolean): boolean,
		del(path: string, callback: Function): Application,
		del(path: RegExp, callback: Function): Application,
		destroy(): Application,
		error(message: string, original_error: Error): void,
		eventNamespace(): string,
		get(path: string, callback: Function): Application,
		get(path: RegExp, callback: Function): Application,
		getLocation(): string,
		helper(name: string, method: Function): any,
		helpers(extensions: any): any,
		isRunning(): boolean,
		log(...params: any[]): void,
		lookupRoute(verb: string, path: string): any,
		mapRoutes(route_array: any[]): Application,
		notFound(verb: string, path: string): any,
		post(path: string, callback: Function): Application,
		post(path: RegExp, callback: Function): Application,
		put(path: string, callback: Function): Application,
		put(path: RegExp, callback: Function): Application,
		refresh(): Application,
		routablePath(path: string): string,
		route(verb: string, path: string, callback: Function): Application,
		route(verb: string, path: RegExp, callback: Function): Application,
		run(start_url?: string): Application,
		runRoute(verb: string, path?: string, params?: any, target?: any): any,
		send(...params: any[]),
		setLocation(new_location: string): string,
		setLocationProxy(new_proxy: DataLocationProxy): void,
		swap(content: any, callback: Function): any,
		templateCache(key: string, value: any): any,
		toString(): string,
		trigger(name: string, data?: any): Application,
		unload(): Application,
		use(...params: any[]): void,
		last_location: string[],
		oauthorize: string,
		requireOAuth(),
		requireOAuth(path?: string),
		requireOAuth(callback?: Function)
	}

	declare export interface DataLocationProxy {
		new (
		app: <<UNKNOWN PARAM FORMAT>>, run_interval_every?: <<UNKNOWN PARAM FORMAT>>
	): DataLocationProxy,
		new (
		app: <<UNKNOWN PARAM FORMAT>>, data_name: <<UNKNOWN PARAM FORMAT>>, href_attribute: <<UNKNOWN PARAM FORMAT>>
	): DataLocationProxy,
		fullPath(location_obj: <<UNKNOWN PARAM FORMAT>>): string,
		bind(): void,
		unbind(): void,
		setLocation(new_location: string): string,
		_startPolling(every: number): void
	}

	declare export interface EventContext {
		new (
		app: <<UNKNOWN PARAM FORMAT>>, verb: <<UNKNOWN PARAM FORMAT>>, path: <<UNKNOWN PARAM FORMAT>>, params: <<UNKNOWN PARAM FORMAT>>, target: <<UNKNOWN PARAM FORMAT>>
	),
		$element(): JQuery,
		engineFor(engine: any): any,
		eventNamespace(): string,
		interpolate(
		content: any, data: any, engine: any, partials: <<UNKNOWN PARAM FORMAT>>
	): EventContext,
		json(str: any): any,
		json(str: string): any,
		load(location: any, options?: any, callback?: Function): any,
		loadPartials(partials: <<UNKNOWN PARAM FORMAT>>),
		notFound(): any,
		partial(
		location: string, data?: any, callback?: Function, partials?: <<UNKNOWN PARAM FORMAT>>
	): RenderContext,
		partials: any,
		params: any,
		redirect(...params: any[]): void,
		render(
		location: string, data?: any, callback?: Function, partials?: <<UNKNOWN PARAM FORMAT>>
	): RenderContext,
		renderEach(
		location: any, data?: {
		name: string,
		data?: any
	}[], callback?: Function
	): RenderContext,
		send(...params: any[]): RenderContext,
		swap(contents: any, callback: Function): string,
		toString(): string,
		trigger(name: string, data?: any): EventContext,
		name: any,
		title: any
	}

	declare export interface FormBuilder {
		new (name: <<UNKNOWN PARAM FORMAT>>, object: <<UNKNOWN PARAM FORMAT>>),
		checkbox(keypath: string, value: any, ...attributes: any[]): string,
		close(): string,
		hidden(keypath: string, ...attributes: any[]): string,
		label(keypath: string, content: any, ...attributes: any[]): string,
		open(...attributes: any[]),
		password(keypath: string, ...attributes: any[]): string,
		radio(keypath: string, value: any, ...attributes: any[]): string,
		select(keypath: string, options: any, ...attributes: any[]): string,
		submit(...attributes: any[]): string,
		text(keypath: string, ...attributes: any[]): string,
		textarea(keypath: string, ...attributes: any[]): string
	}

	declare export interface Form {
		formFor(name: string, object: any, content_callback: Function): FormBuilder
	}

	declare export interface GoogleAnalytics {
		new (app: <<UNKNOWN PARAM FORMAT>>, tracker: <<UNKNOWN PARAM FORMAT>>),
		noTrack(),
		track(path: <<UNKNOWN PARAM FORMAT>>)
	}

	declare export interface Haml {
		
	}

	declare export interface Handlebars {
		
	}

	declare export interface Hogan {
		
	}

	declare export interface JSON {
		
	}

	declare export interface Mustache {
		
	}

	declare export interface RenderContext {
		new (event_context: <<UNKNOWN PARAM FORMAT>>),
		appendTo(selector: string): RenderContext,
		collect(array: any[], callback: Function, now?: boolean): RenderContext,
		interpolate(data: any, engine?: any, retain?: boolean): RenderContext,
		load(location: string, options?: any, callback?: Function): RenderContext,
		loadPartials(partials?: any): RenderContext,
		next(content: any): void,
		partial(
		location: string, callback: Function, partials: <<UNKNOWN PARAM FORMAT>>
	): RenderContext,
		partial(
		location: string, data: any, callback: Function, partials: <<UNKNOWN PARAM FORMAT>>
	): RenderContext,
		prependTo(selector: string): RenderContext,
		render(callback: Function): RenderContext,
		render(location: string, data: any): RenderContext,
		render(location: string, callback: Function, partials?: any): RenderContext,
		render(location: string, data: any, callback: Function): RenderContext,
		render(location: string, data: any, callback: Function, partials: any): RenderContext,
		renderEach(
		location: string, name?: string, data?: any, callback?: Function
	): RenderContext,
		replace(selector: string): RenderContext,
		send(...params: any[]): RenderContext,
		swap(callback?: Function): RenderContext,
		then(callback: Function): RenderContext,
		trigger(name: <<UNKNOWN PARAM FORMAT>>, data: <<UNKNOWN PARAM FORMAT>>),
		wait(): void
	}

	declare export interface StoreOptions {
		name?: string,
		element?: string,
		type?: string,
		memory?: any,
		data?: any,
		cookie?: any,
		local?: any,
		session?: any
	}

	declare export interface Store {
		stores: any,
		new (options?: any),
		clear(key: string): any,
		clearAll(): void,
		each(callback: Function): boolean,
		exists(key: string): boolean,
		fetch(key: string, callback: Function): any,
		filter(callback: Function): boolean,
		first(callback: Function): boolean,
		get(key: string): any,
		isAvailable(): boolean,
		keys(): string[],
		load(key: string, path: string, callback: Function): void,
		set(key: string, value: any): any,
		Cookie(
		name: <<UNKNOWN PARAM FORMAT>>, element: <<UNKNOWN PARAM FORMAT>>, options: <<UNKNOWN PARAM FORMAT>>
	),
		Data(name: <<UNKNOWN PARAM FORMAT>>, element: <<UNKNOWN PARAM FORMAT>>),
		LocalStorage(name: <<UNKNOWN PARAM FORMAT>>, element: <<UNKNOWN PARAM FORMAT>>),
		Memory(name: <<UNKNOWN PARAM FORMAT>>, element: <<UNKNOWN PARAM FORMAT>>),
		SessionStorage(name: <<UNKNOWN PARAM FORMAT>>, element: <<UNKNOWN PARAM FORMAT>>),
		isAvailable(type: <<UNKNOWN PARAM FORMAT>>),
		Template(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)
	}

	declare export function Cache(app: <<UNKNOWN PARAM FORMAT>>, options: <<UNKNOWN PARAM FORMAT>>)

	declare export function DataCacheProxy(initial: <<UNKNOWN PARAM FORMAT>>, $element: <<UNKNOWN PARAM FORMAT>>)

	declare export function DefaultLocationProxy(app: <<UNKNOWN PARAM FORMAT>>, run_interval_every: <<UNKNOWN PARAM FORMAT>>)

	declare export function EJS(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function Exceptional(app: <<UNKNOWN PARAM FORMAT>>, errorReporter: <<UNKNOWN PARAM FORMAT>>)

	declare export function Flash(app: <<UNKNOWN PARAM FORMAT>>)

	declare export function Form(app: <<UNKNOWN PARAM FORMAT>>)

	declare export function Haml(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function Handlebars(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function Hogan(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function Hoptoad(app: <<UNKNOWN PARAM FORMAT>>, errorReporter: <<UNKNOWN PARAM FORMAT>>)

	declare export function JSON(app: <<UNKNOWN PARAM FORMAT>>)

	declare export function Meld(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function MemoryCacheProxy(initial: <<UNKNOWN PARAM FORMAT>>)

	declare export function Mustache(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function NestedParams(app: <<UNKNOWN PARAM FORMAT>>)

	declare export function OAuth2(app: <<UNKNOWN PARAM FORMAT>>)

	declare export function PathLocationProxy(app: <<UNKNOWN PARAM FORMAT>>)

	declare export function Pure(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function PushLocationProxy(app: <<UNKNOWN PARAM FORMAT>>)

	declare export function Session(app: <<UNKNOWN PARAM FORMAT>>, options: <<UNKNOWN PARAM FORMAT>>)

	declare export function Storage(app: <<UNKNOWN PARAM FORMAT>>)

	declare export function Title()

	declare export function Template(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function Tmpl(app: <<UNKNOWN PARAM FORMAT>>, method_alias: <<UNKNOWN PARAM FORMAT>>)

	declare export function addLogger(logger: <<UNKNOWN PARAM FORMAT>>)

	declare export function log(...args: any[])

	declare export class Object  {
		constructor(obj: any): this;
		escapeHTML(s: string): string;
		h(s: string): string;
		has(key: string): boolean;
		join(...args: any[]): string;
		keys(attributes_only?: boolean): string[];
		log(...args: any[]): void;
		toHTML(): string;
		toHash(): any;
		toString(include_functions?: boolean): string
	}

	
}

declare module 'sammy' {
					declare module.exports: undefined


}