import type { IAngularStatic } from 'npm$namespace$ng'

declare module 'angular-1.0' {
		declare interface Function {
		$inject: string[]
	}

			
}

declare module 'npm$namespace$ng' {
		declare interface IServiceProvider {
		$get(): any
	}

	declare interface IAngularStatic {
		bind(context: any, fn: Function, ...args: any[]): Function,
		bootstrap(element: string, modules?: any[]): auto.IInjectorService,
		bootstrap(element: JQuery, modules?: any[]): auto.IInjectorService,
		bootstrap(element: Element, modules?: any[]): auto.IInjectorService,
		bootstrap(element: Document, modules?: any[]): auto.IInjectorService,
		copy(source: any, destination?: any): any,
		element: IAugmentedJQueryStatic,
		equals(value1: any, value2: any): boolean,
		extend(destination: any, ...sources: any[]): any,
		forEach(obj: any, iterator: (value: any, key: any) => any, context?: any): any,
		fromJson(json: string): any,
		identity(arg?: any): any,
		injector(modules?: any[]): auto.IInjectorService,
		isArray(value: any): boolean,
		isDate(value: any): boolean,
		isDefined(value: any): boolean,
		isElement(value: any): boolean,
		isFunction(value: any): boolean,
		isNumber(value: any): boolean,
		isObject(value: any): boolean,
		isString(value: any): boolean,
		isUndefined(value: any): boolean,
		lowercase(str: string): string,
		module(name: string, requires?: string[], configFunction?: any): IModule,
		noop(...args: any[]): void,
		toJson(obj: any, pretty?: boolean): string,
		uppercase(str: string): string,
		version: {
		full: string,
		major: number,
		minor: number,
		dot: number,
		codename: string
	}
	}

	declare interface IModule {
		animation(name: string, animationFactory: Function): IModule,
		animation(name: string, inlineAnnotadedFunction: any[]): IModule,
		animation(object: Object): IModule,
		config(configFn: Function): IModule,
		config(inlineAnnotadedFunction: any[]): IModule,
		constant(name: string, value: any): IModule,
		constant(object: Object): IModule,
		controller(name: string, controllerConstructor: Function): IModule,
		controller(name: string, inlineAnnotadedConstructor: any[]): IModule,
		controller(object: Object): IModule,
		directive(name: string, directiveFactory: (...params: any[]) => IDirective): IModule,
		directive(name: string, inlineAnnotadedFunction: any[]): IModule,
		directive(object: Object): IModule,
		factory(name: string, serviceFactoryFunction: Function): IModule,
		factory(name: string, inlineAnnotadedFunction: any[]): IModule,
		factory(object: Object): IModule,
		filter(name: string, filterFactoryFunction: Function): IModule,
		filter(name: string, inlineAnnotadedFunction: any[]): IModule,
		filter(object: Object): IModule,
		provider(name: string, serviceProviderConstructor: Function): IModule,
		provider(name: string, inlineAnnotadedConstructor: any[]): IModule,
		provider(object: Object): IModule,
		run(initializationFunction: Function): IModule,
		run(inlineAnnotadedFunction: any[]): IModule,
		service(name: string, serviceConstructor: Function): IModule,
		service(name: string, inlineAnnotadedConstructor: any[]): IModule,
		service(object: Object): IModule,
		value(name: string, value: any): IModule,
		value(object: Object): IModule,
		name: string,
		requires: string[]
	}

	declare interface IAttributes {
		$set(name: string, value: any): void,
		$observe(name: string, fn: (value?: any) => any): void,
		$attr: any
	}

	declare interface IFormController {
		$pristine: boolean,
		$dirty: boolean,
		$valid: boolean,
		$invalid: boolean,
		$error: any,
		$setDirty(): void,
		$setPristine(): void
	}

	declare interface INgModelController {
		$render(): void,
		$setValidity(validationErrorKey: string, isValid: boolean): void,
		$setViewValue(value: string): void,
		$viewValue: any,
		$modelValue: any,
		$parsers: IModelParser[],
		$formatters: IModelFormatter[],
		$error: any,
		$pristine: boolean,
		$dirty: boolean,
		$valid: boolean,
		$invalid: boolean
	}

	declare interface IModelParser {
		(value: any): any
	}

	declare interface IModelFormatter {
		(value: any): any
	}

	declare interface IScope {
		$apply(): any,
		$apply(exp: string): any,
		$apply(exp: (scope: IScope) => any): any,
		$broadcast(name: string, ...args: any[]): IAngularEvent,
		$destroy(): void,
		$digest(): void,
		$emit(name: string, ...args: any[]): IAngularEvent,
		$eval(expression: string): any,
		$eval(expression: (scope: IScope) => any): any,
		$evalAsync(expression: string): void,
		$evalAsync(expression: (scope: IScope) => any): void,
		$new(isolate?: boolean): IScope,
		$on(
		name: string, listener: (event: IAngularEvent, ...args: any[]) => any
	): Function,
		$watch(watchExpression: string, listener?: string, objectEquality?: boolean): Function,
		$watch(
		watchExpression: string, listener?: (newValue: any, oldValue: any, scope: IScope) => any, objectEquality?: boolean
	): Function,
		$watch(
		watchExpression: (scope: IScope) => any, listener?: string, objectEquality?: boolean
	): Function,
		$watch(
		watchExpression: (scope: IScope) => any, listener?: (newValue: any, oldValue: any, scope: IScope) => any, objectEquality?: boolean
	): Function,
		$watchCollection(
		watchExpression: string, listener: (newValue: any, oldValue: any, scope: IScope) => any
	): Function,
		$watchCollection(
		watchExpression: (scope: IScope) => any, listener: (newValue: any, oldValue: any, scope: IScope) => any
	): Function,
		$parent: IScope,
		$id: number,
		$$isolateBindings: any,
		$$phase: any
	}

	declare interface IAngularEvent {
		targetScope: IScope,
		currentScope: IScope,
		name: string,
		preventDefault: Function,
		defaultPrevented: boolean,
		stopPropagation?: Function
	}

	declare interface IWindowService {
		
	}

	declare interface IBrowserService {
		
	}

	declare interface ITimeoutService {
		(func: Function, delay?: number, invokeApply?: boolean): IPromise<any>,
		cancel(promise: IPromise<any>): boolean
	}

	declare interface IFilterService {
		(name: string): Function
	}

	declare interface IFilterProvider {
		register(name: string, filterFactory: Function): IServiceProvider
	}

	declare interface ILocaleService {
		id: string,
		NUMBER_FORMATS: ILocaleNumberFormatDescriptor,
		DATETIME_FORMATS: ILocaleDateTimeFormatDescriptor,
		pluralCat: (num: any) => string
	}

	declare interface ILocaleNumberFormatDescriptor {
		DECIMAL_SEP: string,
		GROUP_SEP: string,
		PATTERNS: ILocaleNumberPatternDescriptor[],
		CURRENCY_SYM: string
	}

	declare interface ILocaleNumberPatternDescriptor {
		minInt: number,
		minFrac: number,
		maxFrac: number,
		posPre: string,
		posSuf: string,
		negPre: string,
		negSuf: string,
		gSize: number,
		lgSize: number
	}

	declare interface ILocaleDateTimeFormatDescriptor {
		MONTH: string[],
		SHORTMONTH: string[],
		DAY: string[],
		SHORTDAY: string[],
		AMPMS: string[],
		medium: string,
		short: string,
		fullDate: string,
		longDate: string,
		mediumDate: string,
		shortDate: string,
		mediumTime: string,
		shortTime: string
	}

	declare interface ILogService {
		debug: ILogCall,
		error: ILogCall,
		info: ILogCall,
		log: ILogCall,
		warn: ILogCall
	}

	declare interface ILogCall {
		(...args: any[]): void
	}

	declare interface IParseService {
		(expression: string): ICompiledExpression
	}

	declare interface ICompiledExpression {
		(context: any, locals?: any): any,
		assign(context: any, value: any): any
	}

	declare interface ILocationService {
		absUrl(): string,
		hash(): string,
		hash(newHash: string): ILocationService,
		host(): string,
		path(): string,
		path(newPath: string): ILocationService,
		port(): number,
		protocol(): string,
		replace(): ILocationService,
		search(): any,
		search(parametersMap: any): ILocationService,
		search(parameter: string, parameterValue: any): ILocationService,
		url(): string,
		url(url: string): ILocationService
	}

	declare interface ILocationProvider {
		hashPrefix(): string,
		hashPrefix(prefix: string): ILocationProvider,
		html5Mode(): boolean,
		html5Mode(active: boolean): ILocationProvider
	}

	declare interface IDocumentService {
		
	}

	declare interface IExceptionHandlerService {
		(exception: Error, cause?: string): void
	}

	declare interface IRootElementService {
		
	}

	declare interface IQService {
		all(promises: IPromise<any>[]): IPromise<any[]>,
		defer<T>(): IDeferred<T>,
		reject(reason?: any): IPromise<void>,
		when<T>(value: T): IPromise<T>
	}

	declare interface IPromise<T> {
		then<TResult>(
		successCallback: (promiseValue: T) => IHttpPromise<TResult>, errorCallback?: (reason: any) => any
	): IPromise<TResult>,
		then<TResult>(
		successCallback: (promiseValue: T) => IPromise<TResult>, errorCallback?: (reason: any) => any
	): IPromise<TResult>,
		then<TResult>(
		successCallback: (promiseValue: T) => TResult, errorCallback?: (reason: any) => TResult
	): IPromise<TResult>
	}

	declare interface IDeferred<T> {
		resolve(value?: T): void,
		reject(reason?: any): void,
		promise: IPromise<T>
	}

	declare interface IAnchorScrollService {
		(): void
	}

	declare interface IAnchorScrollProvider {
		disableAutoScrolling(): void
	}

	declare interface ICacheFactoryService {
		(cacheId: string, optionsMap?: {
		capacity: number
	}): ICacheObject,
		info(): any,
		get(cacheId: string): ICacheObject
	}

	declare interface ICacheObject {
		info(): {
		id: string,
		size: number
	},
		put(key: string, value?: any): void,
		get(key: string): any,
		remove(key: string): void,
		removeAll(): void,
		destroy(): void
	}

	declare interface ICompileService {
		(element: string, transclude?: ITemplateLinkingFunction, maxPriority?: number): ITemplateLinkingFunction,
		(element: Element, transclude?: ITemplateLinkingFunction, maxPriority?: number): ITemplateLinkingFunction,
		(element: JQuery, transclude?: ITemplateLinkingFunction, maxPriority?: number): ITemplateLinkingFunction
	}

	declare interface ICompileProvider {
		directive(name: string, directiveFactory: Function): ICompileProvider,
		directive(directivesMap: any): ICompileProvider
	}

	declare interface ITemplateLinkingFunction {
		(scope: IScope, cloneAttachFn?: (clonedElement?: JQuery, scope?: IScope) => any): JQuery
	}

	declare interface IControllerService {
		(controllerConstructor: Function, locals?: any): any,
		(controllerName: string, locals?: any): any
	}

	declare interface IControllerProvider {
		register(name: string, controllerConstructor: Function): void,
		register(name: string, dependencyAnnotadedConstructor: any[]): void
	}

	declare interface IHttpService {
		(config: IRequestConfig): IHttpPromise<any>,
		get(url: string, RequestConfig?: any): IHttpPromise<any>,
		delete(url: string, RequestConfig?: any): IHttpPromise<any>,
		head(url: string, RequestConfig?: any): IHttpPromise<any>,
		jsonp(url: string, RequestConfig?: any): IHttpPromise<any>,
		post(url: string, data: any, RequestConfig?: any): IHttpPromise<any>,
		put(url: string, data: any, RequestConfig?: any): IHttpPromise<any>,
		defaults: IRequestConfig,
		pendingRequests: any[]
	}

	declare interface IRequestConfig {
		method: string,
		url: string,
		params?: any,
		headers?: any,
		cache?: any,
		timeout?: number,
		withCredentials?: boolean,
		data?: any,
		transformRequest?: any,
		transformResponse?: any
	}

	declare interface IHttpPromiseCallback<T> {
		(data: T, status: number, headers: (headerName: string) => string, config: IRequestConfig): void
	}

	declare interface IHttpPromiseCallbackArg<T> {
		data?: T,
		status?: number,
		headers?: (headerName: string) => string,
		config?: IRequestConfig
	}

	declare interface IHttpPromise<T> {
		success(callback: IHttpPromiseCallback<T>): IHttpPromise<T>,
		error(callback: IHttpPromiseCallback<T>): IHttpPromise<T>,
		then<TResult>(
		successCallback: (response: IHttpPromiseCallbackArg<T>) => TResult, errorCallback?: (response: IHttpPromiseCallbackArg<T>) => any
	): IPromise<TResult>,
		then<TResult>(
		successCallback: (response: IHttpPromiseCallbackArg<T>) => IPromise<TResult>, errorCallback?: (response: IHttpPromiseCallbackArg<T>) => any
	): IPromise<TResult>
	}

	declare interface IHttpProvider {
		defaults: IRequestConfig,
		interceptors: any[],
		responseInterceptors: any[]
	}

	declare interface IHttpBackendService {
		(method: string, url: string, post?: any, callback?: Function, headers?: any, timeout?: number, withCredentials?: boolean): void
	}

	declare interface IInterpolateService {
		(text: string, mustHaveExpression?: boolean): IInterpolationFunction,
		endSymbol(): string,
		startSymbol(): string
	}

	declare interface IInterpolationFunction {
		(context: any): string
	}

	declare interface IInterpolateProvider {
		startSymbol(): string,
		startSymbol(value: string): IInterpolateProvider,
		endSymbol(): string,
		endSymbol(value: string): IInterpolateProvider
	}

	declare interface IRouteParamsService {
		
	}

	declare interface ITemplateCacheService {
		
	}

	declare interface IRootScopeService {
		
	}

	declare interface IRouteService {
		reload(): void,
		routes: any,
		current?: ICurrentRoute
	}

	declare interface IRoute {
		controller?: any,
		name?: string,
		template?: string,
		templateUrl?: any,
		resolve?: any,
		redirectTo?: any,
		reloadOnSearch?: boolean
	}

	declare interface ICurrentRoute {
		locals: {
		$scope: IScope,
		$template: string
	},
		params: any
	}

	declare interface IRouteProvider {
		otherwise(params: any): IRouteProvider,
		when(path: string, route: IRoute): IRouteProvider
	}

	declare interface IDirective {
		priority?: number,
		template?: any,
		templateUrl?: any,
		replace?: boolean,
		transclude?: any,
		restrict?: string,
		scope?: any,
		link?: Function,
		compile?: Function,
		controller?: any
	}

	declare interface IAugmentedJQueryStatic {
		(selector: string, context?: any): IAugmentedJQuery,
		(element: Element): IAugmentedJQuery,
		(object: {
		
	}): IAugmentedJQuery,
		(elementArray: Element[]): IAugmentedJQuery,
		(object: JQuery): IAugmentedJQuery,
		(func: Function): IAugmentedJQuery,
		(array: any[]): IAugmentedJQuery,
		(): IAugmentedJQuery
	}

	declare interface IAugmentedJQuery {
		find(selector: string): IAugmentedJQuery,
		find(element: any): IAugmentedJQuery,
		find(obj: JQuery): IAugmentedJQuery,
		controller(name: string): any,
		injector(): any,
		scope(): IScope,
		inheritedData(key: string, value: any): JQuery,
		inheritedData(obj: {
		[key: string]: any
	}): JQuery,
		inheritedData(key?: string): any
	}

			
}

declare module 'auto' {
		declare interface IInjectorService {
		annotate(fn: Function): string[],
		annotate(inlineAnnotadedFunction: any[]): string[],
		get(name: string): any,
		instantiate(typeConstructor: Function, locals?: any): any,
		invoke(func: Function, context?: any, locals?: any): any
	}

	declare interface IProvideService {
		constant(name: string, value: any): void,
		decorator(name: string, decorator: Function): void,
		decorator(name: string, decoratorInline: any[]): void,
		factory(name: string, serviceFactoryFunction: Function): ng.IServiceProvider,
		provider(name: string, provider: ng.IServiceProvider): ng.IServiceProvider,
		provider(name: string, serviceProviderConstructor: Function): ng.IServiceProvider,
		service(name: string, constructor: Function): ng.IServiceProvider,
		value(name: string, value: any): ng.IServiceProvider
	}

			
}