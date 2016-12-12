

declare module 'avoscloud-sdk' {
					declare module.exports: undefined


}

declare module 'AV' {
		declare interface SuccessOption {
		success?: Function
	}

	declare interface ErrorOption {
		error?: Function
	}

	declare interface SuccessFailureOptions {
		
	}

	declare interface WaitOption {
		wait?: boolean
	}

	declare interface UseMasterKeyOption {
		useMasterKey?: boolean
	}

	declare interface SilentOption {
		silent?: boolean
	}

	declare interface IPromise<T> {
		then<U>(
		resolvedCallback: (value: T) => IPromise<U>, rejectedCallback?: (reason: any) => IPromise<U>
	): IPromise<T>,
		then<U>(
		resolvedCallback: (value: T) => U, rejectedCallback?: (reason: any) => IPromise<U>
	): IPromise<U>,
		then<U>(
		resolvedCallback: (value: T) => U, rejectedCallback?: (reason: any) => U
	): IPromise<U>
	}

	declare interface IBaseObject {
		toJSON(): any
	}

	declare function initialize(applicationId: string, applicationKey: string, masterKey?: string): void

	declare class Promise<T>  {
		as<U>(resolvedValue: U): Promise<U>;
		error<U>(error: U): Promise<U>;
		is(possiblePromise: any): Boolean;
		when(promises: Promise<any>[]): Promise<any>;
		always(callback: Function): Promise<T>;
		done(callback: Function): Promise<T>;
		fail(callback: Function): Promise<T>;
		reject(error: any): void;
		resolve(result: any): void;
		then<U>(
		resolvedCallback: (value: T) => Promise<U>, rejectedCallback?: (reason: any) => Promise<U>
	): IPromise<T>;
		then<U>(
		resolvedCallback: (value: T) => U, rejectedCallback?: (reason: any) => IPromise<U>
	): IPromise<T>;
		then<U>(
		resolvedCallback: (value: T) => U, rejectedCallback?: (reason: any) => U
	): IPromise<T>
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
		id: any;
		createdAt: any;
		updatedAt: any;
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
		saveAll<T>(list: Object[], options?: Object.SaveAllOptions): Promise<T>;
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
		getObjectId(): string;
		has(attr: string): boolean;
		hasChanged(attr: string): boolean;
		increment(attr: string, amount?: number): any;
		isValid(): boolean;
		op(attr: string): any;
		previous(attr: string): any;
		previousAttributes(): any;
		relation(attr: string): Relation;
		remove(attr: string, item: any): any;
		save<T>(options?: Object.SaveOptions, arg2?: any, arg3?: any): Promise<T>;
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
		AVVersion: string;
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
		and(...var_args: Query[]): Query;
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
		each<T>(callback: Function, options?: SuccessFailureOptions): Promise<T>;
		endsWith(key: string, suffix: string): Query;
		equalTo(key: string, value: any): Query;
		exists(key: string): Query;
		find<T>(options?: Query.FindOptions): Promise<T>;
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
		signUp<T>(attrs: any, options?: SuccessFailureOptions): Promise<T>;
		logIn<T>(options?: SuccessFailureOptions): Promise<T>;
		fetch<T>(options?: SuccessFailureOptions): Promise<T>;
		save<T>(arg1?: any, arg2?: any, arg3?: any): Promise<T>;
		authenticated(): boolean;
		isCurrent(): boolean;
		getEmail(): string;
		setEmail(email: string, options: SuccessFailureOptions): boolean;
		getUsername(): string;
		setUsername(username: string, options?: SuccessFailureOptions): boolean;
		setPassword(password: string, options?: SuccessFailureOptions): boolean;
		getSessionToken(): string
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
		declare interface CountOptions {
		
	}

	declare interface FindOptions {
		
	}

	declare interface FirstOptions {
		
	}

	declare interface GetOptions {
		
	}

			
}

declare module 'Analytics' {
			declare function track<T>(name: string, dimensions: any): Promise<T>

		
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

declare module 'leanengine' {
					declare module.exports: undefined


}