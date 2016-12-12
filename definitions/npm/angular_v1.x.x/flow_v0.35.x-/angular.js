import type { IAngularStatic } from 'npm$namespace$angular'

declare module 'angular' {
		declare interface Function {
		$inject?: string[]
	}

	declare interface JQuery {
		find(element: any): JQuery,
		find(obj: JQuery): JQuery,
		controller(name?: string): any,
		injector(): ng.auto.IInjectorService,
		scope<T>(): T,
		isolateScope<T>(): T,
		inheritedData(key: string, value: any): JQuery,
		inheritedData(obj: {
		[key: string]: any
	}): JQuery,
		inheritedData(key?: string): any
	}

			declare module.exports: IAngularStatic


}

declare module 'npm$namespace$angular' {
	declare type Injectable<T> = T | (string | T)[];

	declare type HttpHeaderType = {
		[requestType: string]: string | ((config: IRequestConfig) => string)
	};

	declare type IControllerConstructor = (NO PRINT IMPLEMENTED: ConstructorType) | ((...args: any[]) => (void | IController));

	declare interface IServiceProviderClass {
		new (...args: any[]): IServiceProvider
	}

	declare interface IServiceProviderFactory {
		(...args: any[]): IServiceProvider
	}

	declare interface IServiceProvider {
		$get: any
	}

	declare interface IAngularBootstrapConfig {
		strictDi?: boolean
	}

	declare interface IAngularStatic {
		bind(context: any, fn: Function, ...args: any[]): Function,
		bootstrap(
		element: string | Element | JQuery | Document, modules?: (string | Function | any[])[], config?: IAngularBootstrapConfig
	): auto.IInjectorService,
		copy<T>(source: T, destination?: T): T,
		element: JQueryStatic,
		equals(value1: any, value2: any): boolean,
		extend(destination: any, ...sources: any[]): any,
		forEach<T>(obj: T[], iterator: (value: T, key: number) => any, context?: any): any,
		forEach<T>(
		obj: {
		[index: string]: T
	}, iterator: (value: T, key: string) => any, context?: any
	): any,
		forEach(obj: any, iterator: (value: any, key: any) => any, context?: any): any,
		fromJson(json: string): any,
		identity<T>(arg?: T): T,
		injector(modules?: any[], strictDi?: boolean): auto.IInjectorService,
		isArray(value: any): Array,
		isDate(value: any): Date,
		isDefined(value: any): boolean,
		isElement(value: any): boolean,
		isFunction(value: any): Function,
		isNumber(value: any): number,
		isObject(value: any): Object,
		isObject<T>(value: any): T,
		isString(value: any): string,
		isUndefined(value: any): boolean,
		lowercase(str: string): string,
		merge(dst: any, ...src: any[]): any,
		module(name: string, requires?: string[], configFn?: Function): IModule,
		noop(...args: any[]): void,
		reloadWithDebugInfo(): void,
		toJson(obj: any, pretty?: boolean | number): string,
		uppercase(str: string): string,
		version: {
		full: string,
		major: number,
		minor: number,
		dot: number,
		codeName: string
	},
		resumeBootstrap(extraModules?: string[]): ng.auto.IInjectorService
	}

	declare interface IModule {
		component(name: string, options: IComponentOptions): IModule,
		config(configFn: Function): IModule,
		config(inlineAnnotatedFunction: any[]): IModule,
		config(object: Object): IModule,
		constant<T>(name: string, value: T): IModule,
		constant(object: Object): IModule,
		controller(
		name: string, controllerConstructor: Injectable<IControllerConstructor>
	): IModule,
		controller(object: {
		[name: string]: Injectable<IControllerConstructor>
	}): IModule,
		directive(name: string, directiveFactory: Injectable<IDirectiveFactory>): IModule,
		directive(object: {
		[directiveName: string]: Injectable<IDirectiveFactory>
	}): IModule,
		factory(name: string, $getFn: Injectable<Function>): IModule,
		factory(object: {
		[name: string]: Injectable<Function>
	}): IModule,
		filter(name: string, filterFactoryFunction: Injectable<Function>): IModule,
		filter(object: {
		[name: string]: Injectable<Function>
	}): IModule,
		provider(name: string, serviceProviderFactory: IServiceProviderFactory): IModule,
		provider(name: string, serviceProviderConstructor: IServiceProviderClass): IModule,
		provider(name: string, inlineAnnotatedConstructor: any[]): IModule,
		provider(name: string, providerObject: IServiceProvider): IModule,
		provider(object: Object): IModule,
		run(initializationFunction: Injectable<Function>): IModule,
		service(name: string, serviceConstructor: Injectable<Function>): IModule,
		service(object: {
		[name: string]: Injectable<Function>
	}): IModule,
		value<T>(name: string, value: T): IModule,
		value(object: Object): IModule,
		decorator(name: string, decorator: Injectable<Function>): IModule,
		name: string,
		requires: string[]
	}

	declare interface IAttributes {
		[name: string]: any,
		$normalize(name: string): string,
		$addClass(classVal: string): void,
		$removeClass(classVal: string): void,
		$updateClass(newClasses: string, oldClasses: string): void,
		$set(key: string, value: any): void,
		$observe<T>(name: string, fn: (value?: T) => any): Function,
		$attr: Object
	}

	declare interface IFormController {
		[name: string]: any,
		$pristine: boolean,
		$dirty: boolean,
		$valid: boolean,
		$invalid: boolean,
		$submitted: boolean,
		$error: any,
		$name: string,
		$pending: any,
		$addControl(control: INgModelController | IFormController): void,
		$removeControl(control: INgModelController | IFormController): void,
		$setValidity(
		validationErrorKey: string, isValid: boolean, control: INgModelController | IFormController
	): void,
		$setDirty(): void,
		$setPristine(): void,
		$commitViewValue(): void,
		$rollbackViewValue(): void,
		$setSubmitted(): void,
		$setUntouched(): void
	}

	declare interface INgModelController {
		$render(): void,
		$setValidity(validationErrorKey: string, isValid: boolean): void,
		$setViewValue(value: any, trigger?: string): void,
		$setPristine(): void,
		$setDirty(): void,
		$validate(): void,
		$setTouched(): void,
		$setUntouched(): void,
		$rollbackViewValue(): void,
		$commitViewValue(): void,
		$isEmpty(value: any): boolean,
		$viewValue: any,
		$modelValue: any,
		$parsers: IModelParser[],
		$formatters: IModelFormatter[],
		$viewChangeListeners: IModelViewChangeListener[],
		$error: any,
		$name: string,
		$touched: boolean,
		$untouched: boolean,
		$validators: IModelValidators,
		$asyncValidators: IAsyncModelValidators,
		$pending: any,
		$pristine: boolean,
		$dirty: boolean,
		$valid: boolean,
		$invalid: boolean
	}

	declare interface INgModelOptions {
		updateOn?: string,
		debounce?: any,
		allowInvalid?: boolean,
		getterSetter?: boolean,
		timezone?: string
	}

	declare interface IModelValidators {
		[index: string]: (modelValue: any, viewValue: any) => boolean
	}

	declare interface IAsyncModelValidators {
		[index: string]: (modelValue: any, viewValue: any) => IPromise<any>
	}

	declare interface IModelParser {
		(value: any): any
	}

	declare interface IModelFormatter {
		(value: any): any
	}

	declare interface IModelViewChangeListener {
		(): void
	}

	declare interface IRootScopeService {
		[index: string]: any,
		$apply(): any,
		$apply(exp: string): any,
		$apply(exp: (scope: IScope) => any): any,
		$applyAsync(): any,
		$applyAsync(exp: string): any,
		$applyAsync(exp: (scope: IScope) => any): any,
		$broadcast(name: string, ...args: any[]): IAngularEvent,
		$destroy(): void,
		$digest(): void,
		$emit(name: string, ...args: any[]): IAngularEvent,
		$eval(): any,
		$eval(expression: string, locals?: Object): any,
		$eval(expression: (scope: IScope) => any, locals?: Object): any,
		$evalAsync(): void,
		$evalAsync(expression: string): void,
		$evalAsync(expression: (scope: IScope) => any): void,
		$new(isolate?: boolean, parent?: IScope): IScope,
		$on(
		name: string, listener: (event: IAngularEvent, ...args: any[]) => any
	): () => void,
		$watch(
		watchExpression: string, listener?: string, objectEquality?: boolean
	): () => void,
		$watch<T>(
		watchExpression: string, listener?: (newValue: T, oldValue: T, scope: IScope) => any, objectEquality?: boolean
	): () => void,
		$watch(
		watchExpression: (scope: IScope) => any, listener?: string, objectEquality?: boolean
	): () => void,
		$watch<T>(
		watchExpression: (scope: IScope) => T, listener?: (newValue: T, oldValue: T, scope: IScope) => any, objectEquality?: boolean
	): () => void,
		$watchCollection<T>(
		watchExpression: string, listener: (newValue: T, oldValue: T, scope: IScope) => any
	): () => void,
		$watchCollection<T>(
		watchExpression: (scope: IScope) => T, listener: (newValue: T, oldValue: T, scope: IScope) => any
	): () => void,
		$watchGroup(
		watchExpressions: any[], listener: (newValue: any, oldValue: any, scope: IScope) => any
	): () => void,
		$watchGroup(
		watchExpressions: {
		(scope: IScope): any
	}[], listener: (newValue: any, oldValue: any, scope: IScope) => any
	): () => void,
		$parent: IScope,
		$root: IRootScopeService,
		$id: number,
		$$isolateBindings: any,
		$$phase: any
	}

	declare interface IScope {
		
	}

	declare interface IRepeatScope {
		$index: number,
		$first: boolean,
		$middle: boolean,
		$last: boolean,
		$even: boolean,
		$odd: boolean
	}

	declare interface IAngularEvent {
		targetScope: IScope,
		currentScope: IScope,
		name: string,
		stopPropagation(): void,
		preventDefault(): void,
		defaultPrevented: boolean
	}

	declare interface IWindowService {
		[key: string]: any
	}

	declare interface ITimeoutService {
		(delay?: number, invokeApply?: boolean): IPromise<void>,
		(fn: (...args: any[]) => T, delay?: number, invokeApply?: boolean, ...args: any[]): IPromise<T>,
		cancel(promise?: IPromise<any>): boolean
	}

	declare interface IIntervalService {
		(func: Function, delay: number, count?: number, invokeApply?: boolean, ...args: any[]): IPromise<any>,
		cancel(promise: IPromise<any>): boolean
	}

	declare interface IFilterService {
		(name: "filter"): IFilterFilter,
		(name: "currency"): IFilterCurrency,
		(name: "number"): IFilterNumber,
		(name: "date"): IFilterDate,
		(name: "json"): IFilterJson,
		(name: "lowercase"): IFilterLowercase,
		(name: "uppercase"): IFilterUppercase,
		(name: "limitTo"): IFilterLimitTo,
		(name: "orderBy"): IFilterOrderBy,
		(name: string): T
	}

	declare interface IFilterFilter {
		(array: T[], expression: string | IFilterFilterPatternObject | IFilterFilterPredicateFunc<T>, comparator?: IFilterFilterComparatorFunc<T> | boolean): T[]
	}

	declare interface IFilterFilterPatternObject {
		[name: string]: any
	}

	declare interface IFilterFilterPredicateFunc<T> {
		(value: T, index: number, array: T[]): boolean
	}

	declare interface IFilterFilterComparatorFunc<T> {
		(actual: T, expected: T): boolean
	}

	declare interface IFilterCurrency {
		(amount: number, symbol?: string, fractionSize?: number): string
	}

	declare interface IFilterNumber {
		(value: number | string, fractionSize?: number | string): string
	}

	declare interface IFilterDate {
		(date: Date | number | string, format?: string, timezone?: string): string
	}

	declare interface IFilterJson {
		(object: any, spacing?: number): string
	}

	declare interface IFilterLowercase {
		(value: string): string
	}

	declare interface IFilterUppercase {
		(value: string): string
	}

	declare interface IFilterLimitTo {
		(input: T[], limit: string | number, begin?: string | number): T[],
		(input: string | number, limit: string | number, begin?: string | number): string
	}

	declare interface IFilterOrderBy {
		(array: T[], expression: string | ((value: T) => any) | (((value: T) => any) | string)[], reverse?: boolean): T[]
	}

	declare interface IFilterProvider {
		register(name: string | {
		
	}): IServiceProvider
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

	declare interface ILogProvider {
		debugEnabled(): boolean,
		debugEnabled(enabled: boolean): ILogProvider
	}

	declare interface ILogCall {
		(...args: any[]): void
	}

	declare interface IParseService {
		(expression: string, interceptorFn?: (value: any, scope: IScope, locals: any) => any, expensiveChecks?: boolean): ICompiledExpression
	}

	declare interface IParseProvider {
		logPromiseWarnings(): boolean,
		logPromiseWarnings(value: boolean): IParseProvider,
		unwrapPromises(): boolean,
		unwrapPromises(value: boolean): IParseProvider,
		addLiteral(literalName: string, literalValue: any): void,
		setIdentifierFns(
		identifierStart?: (character: string, codePoint: number) => boolean, identifierContinue?: (character: string, codePoint: number) => boolean
	): void
	}

	declare interface ICompiledExpression {
		(context: any, locals?: any): any,
		literal: boolean,
		constant: boolean,
		assign(context: any, value: any): any
	}

	declare interface ILocationService {
		absUrl(): string,
		hash(): string,
		hash(newHash: string): ILocationService,
		host(): string,
		path(): string,
		path(path: string): ILocationService,
		port(): number,
		protocol(): string,
		replace(): ILocationService,
		search(): any,
		search(search: any): ILocationService,
		search(
		search: string, paramValue: string | number | string[] | boolean
	): ILocationService,
		state(): any,
		state(state: any): ILocationService,
		url(): string,
		url(url: string): ILocationService
	}

	declare interface ILocationProvider {
		hashPrefix(): string,
		hashPrefix(prefix: string): ILocationProvider,
		html5Mode(): boolean,
		html5Mode(active: boolean): ILocationProvider,
		html5Mode(
		mode: {
		enabled?: boolean,
		requireBase?: boolean,
		rewriteLinks?: boolean
	}
	): ILocationProvider
	}

	declare interface IDocumentService {
		[index: number]: HTMLElement & Document
	}

	declare interface IExceptionHandlerService {
		(exception: Error, cause?: string): void
	}

	declare interface IRootElementService {
		
	}

	declare interface IQResolveReject<T> {
		(): void,
		(value: T): void
	}

	declare interface IQService {
		new <T>(resolver: (resolve: IQResolveReject<T>) => any): IPromise<T>,
		new <T>(
		resolver: (resolve: IQResolveReject<T>, reject: IQResolveReject<any>) => any
	): IPromise<T>,
		(resolver: (resolve: IQResolveReject<T>) => any): IPromise<T>,
		(resolver: (resolve: IQResolveReject<T>, reject: IQResolveReject<any>) => any): IPromise<T>,
		all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
		values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>, T9 | IPromise<T9>, T10 | IPromise<T10>]
	): IPromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>,
		all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
		values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>, T9 | IPromise<T9>]
	): IPromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>,
		all<T1, T2, T3, T4, T5, T6, T7, T8>(
		values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>]
	): IPromise<[T1, T2, T3, T4, T5, T6, T7, T8]>,
		all<T1, T2, T3, T4, T5, T6, T7>(
		values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>]
	): IPromise<[T1, T2, T3, T4, T5, T6, T7]>,
		all<T1, T2, T3, T4, T5, T6>(
		values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>]
	): IPromise<[T1, T2, T3, T4, T5, T6]>,
		all<T1, T2, T3, T4, T5>(
		values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>]
	): IPromise<[T1, T2, T3, T4, T5]>,
		all<T1, T2, T3, T4>(
		values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>]
	): IPromise<[T1, T2, T3, T4]>,
		all<T1, T2, T3>(
		values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>]
	): IPromise<[T1, T2, T3]>,
		all<T1, T2>(values: [T1 | IPromise<T1>, T2 | IPromise<T2>]): IPromise<[T1, T2]>,
		all<TAll>(promises: IPromise<TAll>[]): IPromise<TAll[]>,
		all(
		promises: {
		[id: string]: IPromise<any>
	}
	): IPromise<{
		[id: string]: any
	}>,
		all<T>(promises: {
		[id: string]: IPromise<any>
	}): IPromise<T>,
		defer<T>(): IDeferred<T>,
		reject(reason?: any): IPromise<any>,
		resolve<T>(value: IPromise<T> | T): IPromise<T>,
		resolve(): IPromise<void>,
		when<T>(value: IPromise<T> | T): IPromise<T>,
		when<TResult, T>(
		value: IPromise<T> | T, successCallback: (promiseValue: T) => IPromise<TResult> | TResult, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any
	): IPromise<TResult>,
		when(): IPromise<void>
	}

	declare interface IPromise<T> {
		then<TResult>(
		successCallback: (promiseValue: T) => IPromise<TResult> | TResult, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any
	): IPromise<TResult>,
		catch<TResult>(
		onRejected: (reason: any) => IPromise<TResult> | TResult
	): IPromise<TResult>,
		finally(finallyCallback: () => any): IPromise<T>
	}

	declare interface IDeferred<T> {
		resolve(value?: T | IPromise<T>): void,
		reject(reason?: any): void,
		notify(state?: any): void,
		promise: IPromise<T>
	}

	declare interface IAnchorScrollService {
		(): void,
		(hash: string): void,
		yOffset: any
	}

	declare interface IAnchorScrollProvider {
		disableAutoScrolling(): void
	}

	declare interface ICacheFactoryService {
		(cacheId: string, optionsMap?: {
		capacity?: number
	}): ICacheObject,
		info(): any,
		get(cacheId: string): ICacheObject
	}

	declare interface ICacheObject {
		info(): {
		id: string,
		size: number
	},
		put<T>(key: string, value?: T): T,
		get<T>(key: string): T,
		remove(key: string): void,
		removeAll(): void,
		destroy(): void
	}

	declare interface ICompileService {
		(element: string | Element | JQuery, transclude?: ITranscludeFunction, maxPriority?: number): ITemplateLinkingFunction
	}

	declare interface ICompileProvider {
		directive(
		name: string, directiveFactory: Injectable<IDirectiveFactory>
	): ICompileProvider,
		directive(
		object: {
		[directiveName: string]: Injectable<IDirectiveFactory>
	}
	): ICompileProvider,
		component(name: string, options: IComponentOptions): ICompileProvider,
		aHrefSanitizationWhitelist(): RegExp,
		aHrefSanitizationWhitelist(regexp: RegExp): ICompileProvider,
		imgSrcSanitizationWhitelist(): RegExp,
		imgSrcSanitizationWhitelist(regexp: RegExp): ICompileProvider,
		debugInfoEnabled(): boolean,
		debugInfoEnabled(enabled: boolean): ICompileProvider
	}

	declare interface ICloneAttachFunction {
		(clonedElement?: JQuery, scope?: IScope): any
	}

	declare interface ITemplateLinkingFunction {
		(scope: IScope, cloneAttachFn?: ICloneAttachFunction): JQuery
	}

	declare interface ITranscludeFunction {
		(scope: IScope, cloneAttachFn: ICloneAttachFunction, futureParentElement?: JQuery, slotName?: string): JQuery,
		(cloneAttachFn?: ICloneAttachFunction, futureParentElement?: JQuery, slotName?: string): JQuery
	}

	declare interface IControllerService {
		(controllerConstructor: NO PRINT IMPLEMENTED: ConstructorType, locals?: any, later?: boolean, ident?: string): T,
		(controllerConstructor: Function, locals?: any, later?: boolean, ident?: string): T,
		(controllerName: string, locals?: any, later?: boolean, ident?: string): T
	}

	declare interface IControllerProvider {
		register(name: string, controllerConstructor: Function): void,
		register(name: string, dependencyAnnotatedConstructor: any[]): void,
		allowGlobals(): void
	}

	declare interface IXhrFactory<T> {
		(method: string, url: string): T
	}

	declare interface IHttpService {
		(config: IRequestConfig): IHttpPromise<T>,
		get<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>,
		delete<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>,
		head<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>,
		jsonp<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>,
		post<T>(url: string, data: any, config?: IRequestShortcutConfig): IHttpPromise<T>,
		put<T>(url: string, data: any, config?: IRequestShortcutConfig): IHttpPromise<T>,
		patch<T>(url: string, data: any, config?: IRequestShortcutConfig): IHttpPromise<T>,
		defaults: IHttpProviderDefaults,
		pendingRequests: IRequestConfig[]
	}

	declare interface IRequestShortcutConfig {
		params?: any,
		data?: any,
		timeout?: number | IPromise<any>,
		responseType?: string
	}

	declare interface IRequestConfig {
		method: string,
		url: string,
		eventHandlers?: {
		[type: string]: EventListenerOrEventListenerObject
	},
		uploadEventHandlers?: {
		[type: string]: EventListenerOrEventListenerObject
	}
	}

	declare interface IHttpHeadersGetter {
		(): {
		[name: string]: string
	},
		(headerName: string): string
	}

	declare interface IHttpPromiseCallback<T> {
		(data: T, status: number, headers: IHttpHeadersGetter, config: IRequestConfig): void
	}

	declare interface IHttpPromiseCallbackArg<T> {
		data?: T,
		status?: number,
		headers?: IHttpHeadersGetter,
		config?: IRequestConfig,
		statusText?: string
	}

	declare interface IHttpPromise<T> {
		success(callback: IHttpPromiseCallback<T>): IHttpPromise<T>,
		error(callback: IHttpPromiseCallback<any>): IHttpPromise<T>
	}

	declare interface IHttpRequestTransformer {
		(data: any, headersGetter: IHttpHeadersGetter): any
	}

	declare interface IHttpResponseTransformer {
		(data: any, headersGetter: IHttpHeadersGetter, status: number): any
	}

	declare interface IHttpRequestConfigHeaders {
		[requestType: string]: any,
		common?: any,
		get?: any,
		post?: any,
		put?: any,
		patch?: any
	}

	declare interface IHttpProviderDefaults {
		cache?: any,
		transformRequest?: IHttpRequestTransformer | IHttpRequestTransformer[],
		transformResponse?: IHttpResponseTransformer | IHttpResponseTransformer[],
		headers?: IHttpRequestConfigHeaders,
		xsrfHeaderName?: string,
		xsrfCookieName?: string,
		withCredentials?: boolean,
		paramSerializer?: string | ((obj: any) => string)
	}

	declare interface IHttpInterceptor {
		request?: (config: IRequestConfig) => IRequestConfig | IPromise<IRequestConfig>,
		requestError?: (rejection: any) => any,
		response?: <T>(
		response: IHttpPromiseCallbackArg<T>
	) => IPromise<IHttpPromiseCallbackArg<T>> | IHttpPromiseCallbackArg<T>,
		responseError?: (rejection: any) => any
	}

	declare interface IHttpInterceptorFactory {
		(...args: any[]): IHttpInterceptor
	}

	declare interface IHttpProvider {
		defaults: IHttpProviderDefaults,
		interceptors: (string | Injectable<IHttpInterceptorFactory>)[],
		useApplyAsync(): boolean,
		useApplyAsync(value: boolean): IHttpProvider,
		useLegacyPromiseExtensions(value: boolean): boolean | IHttpProvider
	}

	declare interface IHttpBackendService {
		(method: string, url: string, post?: any, callback?: Function, headers?: any, timeout?: number, withCredentials?: boolean): void
	}

	declare interface IInterpolateService {
		(text: string, mustHaveExpression?: boolean, trustedContext?: string, allOrNothing?: boolean): IInterpolationFunction,
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

	declare interface ITemplateCacheService {
		
	}

	declare interface ISCEService {
		getTrusted(type: string, mayBeTrusted: any): any,
		getTrustedCss(value: any): any,
		getTrustedHtml(value: any): any,
		getTrustedJs(value: any): any,
		getTrustedResourceUrl(value: any): any,
		getTrustedUrl(value: any): any,
		parse(type: string, expression: string): (context: any, locals: any) => any,
		parseAsCss(expression: string): (context: any, locals: any) => any,
		parseAsHtml(expression: string): (context: any, locals: any) => any,
		parseAsJs(expression: string): (context: any, locals: any) => any,
		parseAsResourceUrl(expression: string): (context: any, locals: any) => any,
		parseAsUrl(expression: string): (context: any, locals: any) => any,
		trustAs(type: string, value: any): any,
		trustAsHtml(value: any): any,
		trustAsJs(value: any): any,
		trustAsResourceUrl(value: any): any,
		trustAsUrl(value: any): any,
		isEnabled(): boolean
	}

	declare interface ISCEProvider {
		enabled(value: boolean): void
	}

	declare interface ISCEDelegateService {
		getTrusted(type: string, mayBeTrusted: any): any,
		trustAs(type: string, value: any): any,
		valueOf(value: any): any
	}

	declare interface ISCEDelegateProvider {
		resourceUrlBlacklist(blacklist: any[]): void,
		resourceUrlWhitelist(whitelist: any[]): void,
		resourceUrlBlacklist(): any[],
		resourceUrlWhitelist(): any[]
	}

	declare interface ITemplateRequestService {
		(tpl: string, ignoreRequestError?: boolean): IPromise<string>,
		totalPendingRequests: number
	}

	declare interface IComponentOptions {
		controller?: string | Injectable<IControllerConstructor>,
		controllerAs?: string,
		template?: string | Injectable<(...args: any[]) => string>,
		templateUrl?: string | Injectable<(...args: any[]) => string>,
		bindings?: {
		[boundProperty: string]: string
	},
		transclude?: boolean | {
		[slot: string]: string
	},
		require?: {
		[controller: string]: string
	}
	}

	declare interface IController {
		$onInit(): void,
		$doCheck(): void,
		$onChanges(onChangesObj: IOnChangesObject): void,
		$onDestroy(): void,
		$postLink(): void
	}

	declare interface IOnChangesObject {
		[property: string]: IChangesObject<any>
	}

	declare interface IChangesObject<T> {
		currentValue: T,
		previousValue: T,
		isFirstChange(): boolean
	}

	declare interface IDirectiveFactory {
		(...args: any[]): IDirective | IDirectiveLinkFn
	}

	declare interface IDirectiveLinkFn {
		(scope: IScope, instanceElement: JQuery, instanceAttributes: IAttributes, controller?: IController | IController[] | {
		[key: string]: IController
	}, transclude?: ITranscludeFunction): void
	}

	declare interface IDirectivePrePost {
		pre?: IDirectiveLinkFn,
		post?: IDirectiveLinkFn
	}

	declare interface IDirectiveCompileFn {
		(templateElement: JQuery, templateAttributes: IAttributes, transclude: ITranscludeFunction): void | IDirectiveLinkFn | IDirectivePrePost
	}

	declare interface IDirective {
		compile?: IDirectiveCompileFn,
		controller?: string | Injectable<IControllerConstructor>,
		controllerAs?: string,
		bindToController?: boolean | {
		[boundProperty: string]: string
	},
		link?: IDirectiveLinkFn | IDirectivePrePost,
		multiElement?: boolean,
		priority?: number,
		replace?: boolean,
		require?: string | string[] | {
		[controller: string]: string
	},
		restrict?: string,
		scope?: boolean | {
		[boundProperty: string]: string
	},
		template?: string | ((tElement: JQuery, tAttrs: IAttributes) => string),
		templateNamespace?: string,
		templateUrl?: string | ((tElement: JQuery, tAttrs: IAttributes) => string),
		terminal?: boolean,
		transclude?: boolean | "element" | {
		[slot: string]: string
	}
	}

	declare interface IAugmentedJQueryStatic {
		
	}

	declare interface IAugmentedJQuery {
		
	}

	declare interface IComponentController {
		
	}

	declare interface IHttpParamSerializer {
		(obj: Object): string
	}

			
}

declare module 'auto' {
		declare interface IInjectorService {
		annotate(fn: Function, strictDi?: boolean): string[],
		annotate(inlineAnnotatedFunction: any[]): string[],
		get<T>(name: string, caller?: string): T,
		get(name: "$anchorScroll"): IAnchorScrollService,
		get(name: "$cacheFactory"): ICacheFactoryService,
		get(name: "$compile"): ICompileService,
		get(name: "$controller"): IControllerService,
		get(name: "$document"): IDocumentService,
		get(name: "$exceptionHandler"): IExceptionHandlerService,
		get(name: "$filter"): IFilterService,
		get(name: "$http"): IHttpService,
		get(name: "$httpBackend"): IHttpBackendService,
		get(name: "$httpParamSerializer"): IHttpParamSerializer,
		get(name: "$httpParamSerializerJQLike"): IHttpParamSerializer,
		get(name: "$interpolate"): IInterpolateService,
		get(name: "$interval"): IIntervalService,
		get(name: "$locale"): ILocaleService,
		get(name: "$location"): ILocationService,
		get(name: "$log"): ILogService,
		get(name: "$parse"): IParseService,
		get(name: "$q"): IQService,
		get(name: "$rootElement"): IRootElementService,
		get(name: "$rootScope"): IRootScopeService,
		get(name: "$sce"): ISCEService,
		get(name: "$sceDelegate"): ISCEDelegateService,
		get(name: "$templateCache"): ITemplateCacheService,
		get(name: "$templateRequest"): ITemplateRequestService,
		get(name: "$timeout"): ITimeoutService,
		get(name: "$window"): IWindowService,
		get<T>(name: "$xhrFactory"): IXhrFactory<T>,
		has(name: string): boolean,
		instantiate<T>(typeConstructor: Function, locals?: any): T,
		invoke(inlineAnnotatedFunction: any[]): any,
		invoke(func: Function, context?: any, locals?: any): any,
		strictDi: boolean
	}

	declare interface IProvideService {
		constant(name: string, value: any): void,
		decorator(name: string, decorator: Function): void,
		decorator(name: string, inlineAnnotatedFunction: any[]): void,
		factory(name: string, serviceFactoryFunction: Function): IServiceProvider,
		factory(name: string, inlineAnnotatedFunction: any[]): IServiceProvider,
		provider(name: string, provider: IServiceProvider): IServiceProvider,
		provider(name: string, serviceProviderConstructor: Function): IServiceProvider,
		service(name: string, constructor: Function): IServiceProvider,
		service(name: string, inlineAnnotatedFunction: any[]): IServiceProvider,
		value(name: string, value: any): IServiceProvider
	}

			
}