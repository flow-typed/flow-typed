

declare module 'riot' {
					declare module.exports: undefined


}

declare module 'npm$namespace$riot' {
		declare interface Settings {
		brackets: string
	}

	declare interface TemplateError {
		riotData: {
		tagName: string
	}
	}

	declare interface Util {
		tmpl: {
		errorHandler(error: TemplateError): void
	}
	}

	declare interface Observable {
		on(events: string, callback: Function): Observable,
		one(events: string, callback: Function): Observable,
		off(events: string): Observable,
		off(events: string, callback: Function): Observable,
		trigger(events: string, ...args: any[]): Observable
	}

	declare interface Route {
		(callback: (...args: any[]) => void): void,
		(filter: string, callback: (...any: string[]) => void): void,
		(to: string, title?: string, shouldReplace?: boolean): void,
		create(): Route,
		start(autoExec?: boolean): void,
		stop(): void,
		exec(): void,
		exec(callback: Function): void,
		query(): {
		[key: string]: string
	},
		base(base: string): void,
		parser(
		parser: (path: string) => any[], secondParser?: (path: string, filter: string) => any[]
	): void
	}

	declare interface TagImplementation {
		tmpl: string,
		fn(opts: any): void,
		attrs?: {
		[key: string]: any
	}
	}

	declare interface TagConfiguration {
		root: Node,
		opts?: any,
		isLoop?: boolean,
		hasImpl?: boolean,
		item?: any
	}

	declare interface TagInterface {
		opts?: any,
		parent?: Tag,
		root?: Node,
		tags?: {
		[key: string]: Tag | Tag[]
	},
		update(data?: any): void,
		mixin(mixinName: string): void,
		mixin(mixinObject: TagMixin): void,
		mount(): void,
		unmount(keepTheParent?: boolean): void
	}

	declare interface TagMixin {
		init(): void
	}

	declare function observable(el?: any): Observable

	declare function mount(selector: string, opts?: any): Tag[]

	declare function mount(selector: string, tagName: string, opts?: any): Tag[]

	declare function mount(domNode: Node, tagName: string, opts?: any): Tag[]

	declare function render(tagName: string, opts?: any): string

	declare function update(): Tag[]

	declare function mixin(mixinObject: TagMixin): void

	declare function mixin(mixinName: string, mixinObject: TagMixin): void

	declare function tag(
		tagName: string, html: string, css?: string, attrs?: string, constructor?: (opts: any) => void
	): string

	declare function compile(callback: Function): void

	declare function compile(tag: string): string

	declare function compile(tag: string, skipExecution: boolean): string

	declare function compile(url: string, callback: Function): void

	declare class Tag extends TagInterface {
		constructor(impl: TagImplementation, conf: TagConfiguration, innerHTML?: string): this;
		opts: any;
		parent: Tag;
		root: Node;
		tags: {
		[key: string]: Tag | Tag[]
	};
		update(data?: any): void;
		mixin(mixinName: string): void;
		mixin(mixinObject: TagMixin): void;
		mount(): void;
		unmount(keepTheParent?: boolean): void;
		on(events: string, callback: Function): this;
		one(events: string, callback: Function): this;
		off(events: string): this;
		off(events: string, callback: Function): this;
		trigger(events: string, ...args: any[]): this
	}

	
}