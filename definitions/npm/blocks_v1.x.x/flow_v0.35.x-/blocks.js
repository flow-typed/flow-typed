

declare module 'blocks' {
		declare interface BlocksStatic {
		(obj: any): any,
		query(model: any): void,
		query(model: any, element: HTMLElement): void,
		extend(obj: Object, ...objects: any[]): void,
		each(
		collection: any, callback: (value: any, index: any, collection: any) => void, thisArg?: any
	): void,
		eachRight(
		collection: any, callback: (value: any, index: any, collection: any) => void, thisArg?: any
	): void,
		isArray(value: any): boolean,
		noop(): Function,
		type(value: any): string,
		is(value: any, type: string): boolean,
		has(obj: any, key: string): boolean,
		unwrap(value: any): any,
		toArray(value: any): any[],
		toUnit(value: any): any,
		toUnit(value: any, unit: string): any,
		clone(value: any): any,
		clone(value: any, deepClone: boolean): any,
		isElements(value: any): boolean,
		isElement(value: any): boolean,
		isBoolean(value: any): boolean,
		isObject(obj: any): boolean,
		isPlainObject(obj: any): boolean,
		bind(func: Function, thisArg: any, ...args: any[]): Function,
		equals(a: any, b: any): boolean,
		equals(a: any, b: any, deepEqual: boolean): boolean,
		context(element: any): any,
		dataItem(element: any): any,
		isObservable(value: any): boolean,
		unwrapObservable(value: any): any,
		route(route: string): BlocksStatic,
		optional(param: string): BlocksStatic,
		optional(param: string, defaultValue: any): BlocksStatic,
		range(start: number, end: number): BlocksStatic,
		server(): {
		express(): any
	},
		server(options: Server): {
		express(): any
	},
		observable(): BlocksObservable,
		observable(value: any[]): BlocksArray,
		observable(value: any): BlocksObservable,
		Application(): App,
		Application(options: {
		history: string
	}): App
	}

	declare interface BlocksObservable {
		(arg: any): BlocksObservable,
		update(): BlocksObservable,
		on(event: string, trigger: Function): BlocksObservable
	}

	declare interface BlocksArray {
		update(): BlocksArray,
		extend(...options: any[]): BlocksArray,
		extend(name: string, ...options: any[]): BlocksArray,
		reset(value: any[]): BlocksArray,
		add(value: any): BlocksArray,
		add(value: any, index: number): BlocksArray,
		addMany(value: any[]): BlocksArray,
		addMany(value: any[], index: number): BlocksArray,
		swap(indexA: number, indexB: number): BlocksArray,
		move(sourceIndex: number, targetIndex: number): BlocksArray,
		remove(value: any): BlocksArray,
		remove(value: any, thisArg: Function): BlocksArray,
		removeAt(index: number): BlocksArray,
		removeAt(index: number, count: number): BlocksArray,
		removeAll(): BlocksArray,
		removeAll(callback: Function): BlocksArray,
		removeAll(callback: Function, thisArg: any): BlocksArray,
		concat(...arrays: any[]): any[],
		slice(start: number): any[],
		slice(start: number, end: number): any[],
		join(): string,
		join(seperator: string): string,
		pop(): any,
		push(...values: any[]): number,
		reverse(): any[],
		shift(): any,
		sort(): any[],
		sort(sortfunction: Function): any[],
		splice(index: number, howMany: number, ...items: any[]): any[],
		unshift(...items: any[]): number
	}

	declare interface App {
		Property(): any,
		Property(options: PropertyPrototype): any,
		View(name: string, prototype: ViewPrototype): any,
		View(parentViewName: string, name: string, prototype: ViewPrototype): any,
		Model(prototype: ModelPrototype): Model,
		Collection(prototype: CollectionPrototype): Collection,
		Collection(model: Model, prototype: CollectionPrototype): Collection
	}

	declare interface PropertyPrototype {
		defaultValue?: any,
		isObservable?: boolean,
		field?: string,
		value?: any,
		validateOnChange?: boolean,
		maxErrors?: number,
		validateInitially?: boolean,
		required?: Validator,
		minlength?: Validator,
		maxlength?: Validator,
		min?: Validator,
		max?: Validator,
		email?: Validator,
		url?: Validator,
		date?: Validator,
		creditcard?: Validator,
		regexp?: Validator,
		number?: Validator,
		digits?: Validator,
		letters?: Validator,
		equals?: Validator
	}

	declare interface Validator {
		
	}

	declare interface ViewPrototype {
		parentView?: any,
		route(name: string): ViewPrototype,
		isActive(): boolean,
		init?: Function,
		routed?: Function,
		navigateTo?: Function,
		ready?: Function,
		options?: {
		route?: any,
		url?: string
	},
		[propertyName: string]: any
	}

	declare interface Model {
		(): Model,
		(props: Object): Model,
		read(): Model,
		read(params: Object): Model,
		sync(): Model
	}

	declare interface ModelPrototype {
		init?: Function,
		validate(): boolean,
		dataItem(): Object,
		reset(dataItem: ModelPrototype): ModelPrototype,
		isNew(): boolean,
		options?: {
		idAttr?: string,
		baseUrl?: string,
		read?: {
		url?: string
	},
		create?: {
		url?: string
	},
		destroy?: {
		url?: string
	},
		update?: {
		url?: string
	}
	},
		[propertyName: string]: string | boolean | Object | Validator
	}

	declare interface Collection {
		(): Collection,
		(props: Object[]): Collection,
		read(): Collection,
		read(params: Object): Collection,
		clearChanges(): Collection,
		sync(): Collection,
		update(id: number, newValues: Object): Collection
	}

	declare interface CollectionPrototype {
		options?: {
		read?: {
		url?: string
	},
		create?: {
		url?: string
	},
		destroy?: {
		url?: string
	},
		update?: {
		url?: string
	}
	},
		[propertyName: string]: any
	}

	declare interface Extendable<T> {
		extend(name?: string, ...options: any[]): T,
		extend(arg: any): T
	}

	declare interface Server {
		port?: number,
		static?: string,
		cache?: boolean,
		use?: any
	}

			declare module.exports: BlocksStatic


}