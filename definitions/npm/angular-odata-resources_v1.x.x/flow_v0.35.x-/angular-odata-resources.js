

declare module 'angular-odata-resources' {
					
}

declare module 'npm$namespace$OData' {
		declare interface IResourceOptions {
		stripTrailingSlashes?: boolean,
		odata?: {
		url?: string,
		method?: string
	},
		isodatav4?: boolean
	}

	declare interface IResourceService {
		(url: string, paramDefaults?: any, actions?: any, options?: IResourceOptions): IResourceClass<IResource<any>>,
		(url: string, paramDefaults?: any, actions?: any, options?: IResourceOptions): U,
		(url: string, paramDefaults?: any, actions?: any, options?: IResourceOptions): IResourceClass<T>
	}

	declare interface IActionDescriptor {
		url?: string,
		method: string,
		isArray?: boolean,
		params?: any,
		headers?: any
	}

	declare interface IResourceClass<T> {
		new (dataOrParams?: any): IResource<T>,
		get(): IResource<T>,
		get(params: Object): IResource<T>,
		get(success: Function, error?: Function): IResource<T>,
		get(params: Object, success: Function, error?: Function): IResource<T>,
		get(
		params: Object, data: Object, success?: Function, error?: Function
	): IResource<T>,
		query(): IResourceArray<T>,
		query(params: Object): IResourceArray<T>,
		query(success: Function, error?: Function): IResourceArray<T>,
		query(params: Object, success: Function, error?: Function): IResourceArray<T>,
		query(
		params: Object, data: Object, success?: Function, error?: Function
	): IResourceArray<T>,
		save(): IResource<T>,
		save(data: Object): IResource<T>,
		save(success: Function, error?: Function): IResource<T>,
		save(data: Object, success: Function, error?: Function): IResource<T>,
		save(
		params: Object, data: Object, success?: Function, error?: Function
	): IResource<T>,
		update(): IResource<T>,
		update(data: Object): IResource<T>,
		update(success: Function, error?: Function): IResource<T>,
		update(data: Object, success: Function, error?: Function): IResource<T>,
		update(
		params: Object, data: Object, success?: Function, error?: Function
	): IResource<T>,
		remove(): IResource<T>,
		remove(params: Object): IResource<T>,
		remove(success: Function, error?: Function): IResource<T>,
		remove(params: Object, success: Function, error?: Function): IResource<T>,
		remove(
		params: Object, data: Object, success?: Function, error?: Function
	): IResource<T>,
		delete(): IResource<T>,
		delete(params: Object): IResource<T>,
		delete(success: Function, error?: Function): IResource<T>,
		delete(params: Object, success: Function, error?: Function): IResource<T>,
		delete(
		params: Object, data: Object, success?: Function, error?: Function
	): IResource<T>,
		odata(): OData.Provider<T>
	}

	declare interface IResource<T> {
		$get(): angular.IPromise<T>,
		$get(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$get(success: Function, error?: Function): angular.IPromise<T>,
		$query(): angular.IPromise<IResourceArray<T>>,
		$query(
		params?: Object, success?: Function, error?: Function
	): angular.IPromise<IResourceArray<T>>,
		$query(success: Function, error?: Function): angular.IPromise<IResourceArray<T>>,
		$save(): angular.IPromise<T>,
		$save(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$save(success: Function, error?: Function): angular.IPromise<T>,
		$update(): angular.IPromise<T>,
		$update(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$update(success: Function, error?: Function): angular.IPromise<T>,
		$remove(): angular.IPromise<T>,
		$remove(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$remove(success: Function, error?: Function): angular.IPromise<T>,
		$delete(): angular.IPromise<T>,
		$delete(params?: Object, success?: Function, error?: Function): angular.IPromise<T>,
		$delete(success: Function, error?: Function): angular.IPromise<T>,
		$promise: angular.IPromise<T>,
		$resolved: boolean
	}

	declare interface IResourceArray<T> {
		$promise: angular.IPromise<IResourceArray<T>>,
		$resolved: boolean
	}

	declare interface IResourceServiceFactoryFunction<T> {
		($resource: OData.IResourceService): IResourceClass<T>,
		($resource: OData.IResourceService): U
	}

	declare interface IResourceServiceProvider {
		defaults: IResourceOptions
	}

	declare interface IExecutable {
		execute(noParenthesis?: any): string
	}

	declare interface BinaryOperationFactory {
		new (propertyOrPredicate: any, valueOrOperator?: any, value?: any): BinaryOperation
	}

	declare interface MethodCallFactory {
		new (methodName: string, ...args: any[]): MethodCall
	}

	declare interface OrderByStatementFactory {
		new (propertyName: string, sortOrder?: string): OrderByStatement
	}

	declare interface PredicateFactory {
		new (propertyOrValueOrPredicate: any, valueOrOperator?: any, value?: any): Predicate,
		or(orStatements: any[]): IExecutable,
		create(propertyOrPredicate: any, operatorOrValue?: any, value?: any): IExecutable,
		and(andStatements: any): IExecutable
	}

	declare interface PropertyFactory {
		new (value: string): Property
	}

	declare interface ProviderFactory {
		new <T>(callback: ProviderCallback<T>): Provider<T>
	}

	declare interface ProviderCallback<T> {
		(queryString: string, success: () => any, error: () => any): T[],
		(queryString: string, success: () => any, error: () => any, isSingleElement?: boolean, forceSingleElement?: boolean): T
	}

	declare interface ICountResult {
		result: number,
		$promise: angular.IPromise<any>
	}

	declare interface ValueFactory {
		new (value: any, type?: string): Value
	}

		declare class Global  {
		$inject: string[];
		constructor(ODataBinaryOperation: any, ODataProvider: any, ODataValue: any, ODataProperty: any, ODataMethodCall: any, ODataPredicate: any, ODataOrderByStatement: any): this;
		Provider: Provider<any>;
		BinaryOperation: typeof BinaryOperation;
		Value: typeof Value;
		Property: typeof Property;
		Func: typeof MethodCall;
		Predicate: typeof Predicate;
		OrderBy: typeof OrderByStatement
	}

	declare class BinaryOperation extends IExecutable {
		constructor(propertyOrPredicate: any, valueOrOperator?: any, value?: any): this;
		execute(noParenthesis?: any): string;
		or(propertyOrPredicate: any, operatorOrValue?: any, value?: any): BinaryOperation;
		and(propertyOrPredicate: any, operatorOrValue?: any, value?: any): BinaryOperation
	}

	declare class MethodCall extends IExecutable {
		execute(): string;
		constructor(methodName: string, ...args: any[]): this
	}

	declare class Operators  {
		operators: {
		eq: string[],
		ne: string[],
		gt: string[],
		ge: string[],
		lt: string[],
		le: string[],
		and: string[],
		or: string[],
		not: string[],
		add: string[],
		sub: string[],
		mul: string[],
		div: string[],
		mod: string[]
	};
		convert(from: string): any
	}

	declare class OrderByStatement extends IExecutable {
		execute(): string;
		constructor(propertyName: string, sortOrder?: string): this
	}

	declare class Predicate extends BinaryOperation {
		constructor(propertyOrValueOrPredicate: any, valueOrOperator?: any, value?: any): this;
		or(orStatements: any[]): IExecutable;
		create(propertyOrPredicate: any, operatorOrValue?: any, value?: any): IExecutable;
		and(andStatements: any): IExecutable
	}

	declare class Property extends IExecutable {
		constructor(value: string): this;
		execute(): string
	}

	declare class Provider<T>  {
		constructor(callback: ProviderCallback<T>): this;
		filter(operand1: any, operand2?: any, operand3?: any): Provider<T>;
		orderBy(arg1: string, arg2?: string): Provider<T>;
		transformUrl(transformMethod: (url: string) => string): Provider<T>;
		take(amount: number): Provider<T>;
		skip(amount: number): Provider<T>;
		query(success?: ((p: T[]) => void), error?: (() => void)): T[];
		single(success?: ((p: T) => void), error?: (() => void)): T;
		get(key: any, success?: ((p: T) => void), error?: (() => void)): T;
		expand(...params: string[]): Provider<T>;
		expand(params: string[]): Provider<T>;
		select(...params: string[]): Provider<T>;
		select(params: string[]): Provider<T>;
		count(success?: (result: ICountResult) => any, error?: () => any): ICountResult;
		withInlineCount(): Provider<T>
	}

	declare class ValueTypes  {
		Boolean: string;
		Byte: string;
		DateTime: string;
		Decimal: string;
		Double: string;
		Single: string;
		Guid: string;
		Int32: string;
		String: string
	}

	declare class Value  {
		executeWithUndefinedType(): any;
		executeWithType(): any;
		execute(): string;
		constructor(value: any, type?: string): this
	}

	
}