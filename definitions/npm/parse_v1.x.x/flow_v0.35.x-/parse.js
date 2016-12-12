

declare module 'parse' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Parse' {
		declare interface SuccessOption {
		success?: Function
	}

	declare interface ErrorOption {
		error?: Function
	}

	declare interface SuccessFailureOptions {
		
	}

	declare interface SessionTokenOption {
		sessionToken?: string
	}

	declare interface WaitOption {
		wait?: boolean
	}

	declare interface UseMasterKeyOption {
		useMasterKey?: boolean
	}

	declare interface ScopeOptions {
		
	}

	declare interface SilentOption {
		silent?: boolean
	}

	declare interface IPromise<T> {
		then<U>(
		resolvedCallback: (...values: T[]) => IPromise<U>, rejectedCallback?: (reason: any) => IPromise<U>
	): IPromise<U>,
		then<U>(
		resolvedCallback: (...values: T[]) => U, rejectedCallback?: (reason: any) => IPromise<U>
	): IPromise<U>,
		then<U>(
		resolvedCallback: (...values: T[]) => U, rejectedCallback?: (reason: any) => U
	): IPromise<U>
	}

	declare interface IBaseObject {
		toJSON(): any
	}

	declare function initialize(applicationId: string, javaScriptKey?: string, masterKey?: string): void

	declare class Promise<T> extends IPromise<T> {
		as<U>(resolvedValue: U): Promise<U>;
		error<U, V>(error: U): Promise<V>;
		is(possiblePromise: any): Boolean;
		when(promises: IPromise<any>[]): Promise<any>;
		when(...promises: IPromise<any>[]): Promise<any>;
		always(callback: Function): Promise<T>;
		done(callback: Function): Promise<T>;
		fail(callback: Function): Promise<T>;
		reject(error: any): void;
		resolve(result: any): void;
		then<U>(
		resolvedCallback: (...values: T[]) => IPromise<U>, rejectedCallback?: (reason: any) => IPromise<U>
	): IPromise<U>;
		then<U>(
		resolvedCallback: (...values: T[]) => U, rejectedCallback?: (reason: any) => IPromise<U>
	): IPromise<U>;
		then<U>(
		resolvedCallback: (...values: T[]) => U, rejectedCallback?: (reason: any) => U
	): IPromise<U>
	}

	declare class BaseObject extends IBaseObject {
		toJSON(): any
	}

	declare class ACL extends BaseObject {
		permissionsById: any;
		constructor(arg1?: any): this;
		setPublicReadAccess(allowed: boolean): void;
		getPublicReadAccess(): boolean;
		setPublicWriteAccess(allowed: boolean): void;
		getPublicWriteAccess(): boolean;
		setReadAccess(userId: User, allowed: boolean): void;
		getReadAccess(userId: User): boolean;
		setReadAccess(userId: string, allowed: boolean): void;
		getReadAccess(userId: string): boolean;
		setRoleReadAccess(role: Role, allowed: boolean): void;
		setRoleReadAccess(role: string, allowed: boolean): void;
		getRoleReadAccess(role: Role): boolean;
		getRoleReadAccess(role: string): boolean;
		setRoleWriteAccess(role: Role, allowed: boolean): void;
		setRoleWriteAccess(role: string, allowed: boolean): void;
		getRoleWriteAccess(role: Role): boolean;
		getRoleWriteAccess(role: string): boolean;
		setWriteAccess(userId: User, allowed: boolean): void;
		setWriteAccess(userId: string, allowed: boolean): void;
		getWriteAccess(userId: User): boolean;
		getWriteAccess(userId: string): boolean
	}

	declare class File  {
		constructor(name: string, data: any, type?: string): this;
		name(): string;
		url(): string;
		save<T>(options?: SuccessFailureOptions): Promise<T>
	}

	declare class GeoPoint extends BaseObject {
		latitude: number;
		longitude: number;
		constructor(arg1?: any, arg2?: any): this;
		current(options?: SuccessFailureOptions): GeoPoint;
		radiansTo(point: GeoPoint): number;
		kilometersTo(point: GeoPoint): number;
		milesTo(point: GeoPoint): number
	}

	declare class History  {
		handlers: any[];
		interval: number;
		fragment: string;
		checkUrl(e?: any): void;
		getFragment(fragment?: string, forcePushState?: boolean): string;
		getHash(windowOverride: Window): string;
		loadUrl(fragmentOverride: any): boolean;
		navigate(fragment: string, options?: any): any;
		route(route: any, callback: Function): void;
		start(options: any): boolean;
		stop(): void
	}

	declare class Relation extends BaseObject {
		parent: Object;
		key: string;
		targetClassName: string;
		constructor(parent?: Object, key?: string): this;
		add(object: Object): void;
		query(): Query;
		remove(object: Object): void
	}

	declare class Object extends BaseObject {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		attributes: any;
		cid: string;
		changed: boolean;
		className: string;
		constructor(className?: string, options?: any): this;
		constructor(attributes?: string[], options?: any): this;
		extend(className: string, protoProps?: any, classProps?: any): any;
		fetchAll<T>(list: Object[], options: SuccessFailureOptions): Promise<T>;
		fetchAllIfNeeded<T>(list: Object[], options: SuccessFailureOptions): Promise<T>;
		destroyAll<T>(list: Object[], options?: Object.DestroyAllOptions): Promise<T>;
		saveAll<T>(list: T[], options?: Object.SaveAllOptions): Promise<T[]>;
		registerSubclass<T>(className: string, clazz: NO PRINT IMPLEMENTED: ConstructorType): void;
		initialize(): void;
		add(attr: string, item: any): Object;
		addUnique(attr: string, item: any): any;
		change(options: any): Object;
		changedAttributes(diff: any): boolean;
		clear(options: any): any;
		clone(): Object;
		destroy<T>(options?: Object.DestroyOptions): Promise<T>;
		dirty(attr: String): boolean;
		dirtyKeys(): string[];
		escape(attr: string): string;
		existed(): boolean;
		fetch<T>(options?: Object.FetchOptions): Promise<T>;
		get(attr: string): any;
		getACL(): ACL;
		has(attr: string): boolean;
		hasChanged(attr: string): boolean;
		increment(attr: string, amount?: number): any;
		isValid(): boolean;
		op(attr: string): any;
		previous(attr: string): any;
		previousAttributes(): any;
		relation(attr: string): Relation;
		remove(attr: string, item: any): any;
		save<T>(attrs?: {
		[key: string]: any
	}, options?: Object.SaveOptions): Promise<T>;
		save<T>(key: string, value: any, options?: Object.SaveOptions): Promise<T>;
		set(key: string, value: any, options?: Object.SetOptions): boolean;
		setACL(acl: ACL, options?: SuccessFailureOptions): boolean;
		unset(attr: string, options?: any): any;
		validate(attrs: any, options?: SuccessFailureOptions): boolean
	}

	declare class Installation extends Object {
		badge: any;
		channels: string[];
		timeZone: any;
		deviceType: string;
		pushType: string;
		installationId: string;
		deviceToken: string;
		channelUris: string;
		appName: string;
		appVersion: string;
		parseVersion: string;
		appIdentifier: string
	}

	declare class Collection<T> extends Events, IBaseObject {
		model: Object;
		models: Object[];
		query: Query;
		comparator: (object: Object) => any;
		constructor(models?: Object[], options?: Collection.Options): this;
		extend(instanceProps: any, classProps: any): any;
		initialize(): void;
		add(models: any[], options?: Collection.AddOptions): Collection<T>;
		at(index: number): Object;
		chain(): _Chain<Collection<T>>;
		fetch(options?: Collection.FetchOptions): Promise<T>;
		create(model: Object, options?: Collection.CreateOptions): Object;
		get(id: string): Object;
		getByCid(cid: any): any;
		pluck(attr: string): any[];
		remove(model: any, options?: Collection.RemoveOptions): Collection<T>;
		remove(models: any[], options?: Collection.RemoveOptions): Collection<T>;
		reset(models: any[], options?: Collection.ResetOptions): Collection<T>;
		sort(options?: Collection.SortOptions): Collection<T>;
		toJSON(): any
	}

	declare class Events  {
		off(events: string[], callback?: Function, context?: any): Events;
		on(events: string[], callback?: Function, context?: any): Events;
		trigger(events: string[]): Events;
		bind(): Events;
		unbind(): Events;
		on(eventName: string, callback?: Function, context?: any): Events;
		off(eventName?: string, callback?: Function, context?: any): Events;
		trigger(eventName: string, ...args: any[]): Events;
		bind(eventName: string, callback: Function, context?: any): Events;
		unbind(eventName?: string, callback?: Function, context?: any): Events
	}

	declare class Query extends BaseObject {
		objectClass: any;
		className: string;
		constructor(objectClass: any): this;
		or(...var_args: Query[]): Query;
		addAscending(key: string): Query;
		addAscending(key: string[]): Query;
		addDescending(key: string): Query;
		addDescending(key: string[]): Query;
		ascending(key: string): Query;
		ascending(key: string[]): Query;
		collection(items?: Object[], options?: Collection.Options): Collection<Object>;
		containedIn(key: string, values: any[]): Query;
		contains(key: string, substring: string): Query;
		containsAll(key: string, values: any[]): Query;
		count<T>(options?: Query.CountOptions): Promise<T>;
		descending(key: string): Query;
		descending(key: string[]): Query;
		doesNotExist(key: string): Query;
		doesNotMatchKeyInQuery(key: string, queryKey: string, query: Query): Query;
		doesNotMatchQuery(key: string, query: Query): Query;
		each<T>(callback: Function, options?: Query.EachOptions): Promise<T>;
		endsWith(key: string, suffix: string): Query;
		equalTo(key: string, value: any): Query;
		exists(key: string): Query;
		find<T>(options?: Query.FindOptions): Promise<T[]>;
		first<T>(options?: Query.FirstOptions): Promise<T>;
		get(objectId: string, options?: Query.GetOptions): Promise<any>;
		greaterThan(key: string, value: any): Query;
		greaterThanOrEqualTo(key: string, value: any): Query;
		include(key: string): Query;
		include(keys: string[]): Query;
		lessThan(key: string, value: any): Query;
		lessThanOrEqualTo(key: string, value: any): Query;
		limit(n: number): Query;
		matches(key: string, regex: RegExp, modifiers: any): Query;
		matchesKeyInQuery(key: string, queryKey: string, query: Query): Query;
		matchesQuery(key: string, query: Query): Query;
		near(key: string, point: GeoPoint): Query;
		notContainedIn(key: string, values: any[]): Query;
		notEqualTo(key: string, value: any): Query;
		select(...keys: string[]): Query;
		skip(n: number): Query;
		startsWith(key: string, prefix: string): Query;
		withinGeoBox(key: string, southwest: GeoPoint, northeast: GeoPoint): Query;
		withinKilometers(key: string, point: GeoPoint, maxDistance: number): Query;
		withinMiles(key: string, point: GeoPoint, maxDistance: number): Query;
		withinRadians(key: string, point: GeoPoint, maxDistance: number): Query
	}

	declare class Role extends Object {
		constructor(name: string, acl: ACL): this;
		getRoles(): Relation;
		getUsers(): Relation;
		getName(): string;
		setName(name: string, options?: SuccessFailureOptions): any
	}

	declare class Config extends Object {
		get(options?: SuccessFailureOptions): Promise<Config>;
		current(): Config;
		get(attr: string): any;
		escape(attr: string): any
	}

	declare class Session extends Object {
		current(): Promise<Session>;
		getSessionToken(): string;
		isCurrentSessionRevocable(): boolean
	}

	declare class Router extends Events {
		routes: Router.RouteMap;
		constructor(options?: Router.Options): this;
		extend(instanceProps: any, classProps: any): any;
		initialize(): void;
		navigate(fragment: string, options?: Router.NavigateOptions): Router;
		navigate(fragment: string, trigger?: boolean): Router;
		route(route: string, name: string, callback: Function): Router
	}

	declare class User extends Object {
		current(): User;
		signUp<T>(
		username: string, password: string, attrs: any, options?: SuccessFailureOptions
	): Promise<T>;
		logIn<T>(
		username: string, password: string, options?: SuccessFailureOptions
	): Promise<T>;
		logOut<T>(): Promise<T>;
		allowCustomUserClass(isAllowed: boolean): void;
		become<T>(sessionToken: string, options?: SuccessFailureOptions): Promise<T>;
		requestPasswordReset<T>(email: string, options?: SuccessFailureOptions): Promise<T>;
		extend(protoProps?: any, classProps?: any): any;
		signUp<T>(attrs: any, options?: SuccessFailureOptions): Promise<T>;
		logIn<T>(options?: SuccessFailureOptions): Promise<T>;
		authenticated(): boolean;
		isCurrent(): boolean;
		getEmail(): string;
		setEmail(email: string, options: SuccessFailureOptions): boolean;
		getUsername(): string;
		setUsername(username: string, options?: SuccessFailureOptions): boolean;
		setPassword(password: string, options?: SuccessFailureOptions): boolean;
		getSessionToken(): string
	}

	declare class View<T> extends Events {
		model: any;
		collection: any;
		id: string;
		cid: string;
		className: string;
		tagName: string;
		el: any;
		$el: JQuery;
		attributes: any;
		constructor(options?: View.Options): this;
		extend(properties: any, classProperties?: any): any;
		$(selector?: string): JQuery;
		setElement(element: HTMLElement, delegate?: boolean): View<T>;
		setElement(element: JQuery, delegate?: boolean): View<T>;
		render(): View<T>;
		remove(): View<T>;
		make(tagName: any, attributes?: View.Attribute[], content?: any): any;
		delegateEvents(events?: any): any;
		undelegateEvents(): any
	}

	declare class Error  {
		code: ErrorCode;
		message: string;
		constructor(code: ErrorCode, message: string): this
	}

	
}

declare module 'Object' {
		declare interface DestroyOptions {
		
	}

	declare interface DestroyAllOptions {
		
	}

	declare interface FetchOptions {
		
	}

	declare interface SaveOptions {
		
	}

	declare interface SaveAllOptions {
		
	}

	declare interface SetOptions {
		promise?: any
	}

			
}

declare module 'Collection' {
		declare interface Options {
		model?: Object,
		query?: Query,
		comparator?: string
	}

	declare interface AddOptions {
		at?: number
	}

	declare interface CreateOptions {
		
	}

	declare interface FetchOptions {
		
	}

	declare interface RemoveOptions {
		
	}

	declare interface ResetOptions {
		
	}

	declare interface SortOptions {
		
	}

			
}

declare module 'Query' {
		declare interface EachOptions {
		
	}

	declare interface CountOptions {
		
	}

	declare interface FindOptions {
		
	}

	declare interface FirstOptions {
		
	}

	declare interface GetOptions {
		
	}

			
}

declare module 'Router' {
		declare interface Options {
		routes: RouteMap
	}

	declare interface RouteMap {
		[url: string]: string
	}

	declare interface NavigateOptions {
		trigger?: boolean
	}

			
}

declare module 'View' {
		declare interface Options {
		model?: any,
		collection?: any,
		el?: any,
		id?: string,
		className?: string,
		tagName?: string,
		attributes?: Attribute[]
	}

	declare interface Attribute {
		[attributeName: string]: string | number | boolean
	}

			
}

declare module 'Analytics' {
			declare function track<T>(name: string, dimensions: any): Promise<T>

		
}

declare module 'FacebookUtils' {
			declare function init(options?: any): void

	declare function isLinked(user: User): boolean

	declare function link(user: User, permissions: any, options?: SuccessFailureOptions): void

	declare function logIn(permissions: any, options?: SuccessFailureOptions): void

	declare function unlink(user: User, options?: SuccessFailureOptions): void

		
}

declare module 'Cloud' {
		declare interface CookieOptions {
		domain?: string,
		expires?: Date,
		httpOnly?: boolean,
		maxAge?: number,
		path?: string,
		secure?: boolean
	}

	declare interface HttpResponse {
		buffer?: Buffer,
		cookies?: any,
		data?: any,
		headers?: any,
		status?: number,
		text?: string
	}

	declare interface JobRequest {
		params: any
	}

	declare interface JobStatus {
		error?: (response: any) => void,
		message?: (response: any) => void,
		success?: (response: any) => void
	}

	declare interface FunctionRequest {
		installationId?: String,
		master?: boolean,
		params?: any,
		user?: User
	}

	declare interface FunctionResponse {
		success?: (response: any) => void,
		error?: (response: any) => void
	}

	declare interface Cookie {
		name?: string,
		options?: CookieOptions,
		value?: string
	}

	declare interface SaveRequest {
		object: Object
	}

	declare interface AfterSaveRequest {
		
	}

	declare interface AfterDeleteRequest {
		
	}

	declare interface BeforeDeleteRequest {
		
	}

	declare interface BeforeDeleteResponse {
		
	}

	declare interface BeforeSaveRequest {
		
	}

	declare interface BeforeSaveResponse {
		success?: () => void
	}

	declare interface RunOptions {
		
	}

	declare interface HTTPOptions {
		body?: string | Buffer | Object,
		followRedirects?: boolean,
		headers?: {
		[headerName: string]: string | number | boolean
	},
		method?: string,
		params?: any,
		url: string
	}

	declare function afterDelete(arg1: any, func?: (request: AfterDeleteRequest) => void): void

	declare function afterSave(arg1: any, func?: (request: AfterSaveRequest) => void): void

	declare function beforeDelete(
		arg1: any, func?: (request: BeforeDeleteRequest, response: BeforeDeleteResponse) => void
	): void

	declare function beforeSave(
		arg1: any, func?: (request: BeforeSaveRequest, response: BeforeSaveResponse) => void
	): void

	declare function define(
		name: string, func?: (request: FunctionRequest, response: FunctionResponse) => void
	): void

	declare function httpRequest(options: HTTPOptions): Promise<HttpResponse>

	declare function job(
		name: string, func?: (request: JobRequest, status: JobStatus) => void
	): HttpResponse

	declare function run<T>(name: string, data?: any, options?: RunOptions): Promise<T>

	declare function useMasterKey(): void

		
}

declare module 'Op' {
		declare interface BaseOperation {
		objects(): any[]
	}

	declare interface Add {
		
	}

	declare interface AddUnique {
		
	}

	declare interface Increment {
		amount: number
	}

	declare interface Relation {
		added(): Object[],
		removed: Object[]
	}

	declare interface Set {
		value(): any
	}

	declare interface Unset {
		
	}

			
}

declare module 'Push' {
		declare interface PushData {
		channels?: string[],
		push_time?: Date,
		expiration_time?: Date,
		expiration_interval?: number,
		where?: Query,
		data?: any,
		alert?: string,
		badge?: string,
		sound?: string,
		title?: string
	}

	declare interface SendOptions {
		success?: () => void,
		error?: (error: Error) => void
	}

	declare function send<T>(data: PushData, options?: SendOptions): Promise<T>

		
}

declare module 'parse/node' {
					declare module.exports: undefined


}