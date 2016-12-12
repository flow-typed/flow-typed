import type { IAngularStatic } from 'npm$namespace$angular'

declare module 'angular-1.4' {
		declare interface Function {
		$inject?: string[]
	}

			
}

declare module 'angular' {
					declare module.exports: undefined


}

declare module 'npm$namespace$angular' {
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
		strictDi?: boolean,
		debugInfoEnabled?: boolean
	}

	declare interface IAngularStatic {
		bind(context: any, fn: Function, ...args: any[]): Function,
		bootstrap(
		element: string | Element | JQuery | Document, modules?: (string | Function | any[])[], config?: IAngularBootstrapConfig
	): auto.IInjectorService,
		copy<T>(source: T, destination?: T): T,
		element: IAugmentedJQueryStatic,
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
		merge(dst: any, ...src: any[]): any,
		module(name: string, requires?: string[], configFn?: Function): IModule,
		noop(...args: any[]): void,
		reloadWithDebugInfo(): void,
		toJson(obj: any, pretty?: boolean): string,
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
		animation(name: string, animationFactory: Function): IModule,
		animation(name: string, inlineAnnotatedFunction: any[]): IModule,
		animation(object: Object): IModule,
		component(name: string, options: IComponentOptions): IModule,
		config(configFn: Function): IModule,
		config(inlineAnnotatedFunction: any[]): IModule,
		config(object: Object): IModule,
		constant(name: string, value: any): IModule,
		constant(object: Object): IModule,
		controller(name: string, controllerConstructor: Function): IModule,
		controller(name: string, inlineAnnotatedConstructor: any[]): IModule,
		controller(object: Object): IModule,
		directive(name: string, directiveFactory: IDirectiveFactory): IModule,
		directive(name: string, inlineAnnotatedFunction: any[]): IModule,
		directive(object: Object): IModule,
		factory(name: string, $getFn: Function): IModule,
		factory(name: string, inlineAnnotatedFunction: any[]): IModule,
		factory(object: Object): IModule,
		filter(name: string, filterFactoryFunction: Function): IModule,
		filter(name: string, inlineAnnotatedFunction: any[]): IModule,
		filter(object: Object): IModule,
		provider(name: string, serviceProviderFactory: IServiceProviderFactory): IModule,
		provider(name: string, serviceProviderConstructor: IServiceProviderClass): IModule,
		provider(name: string, inlineAnnotatedConstructor: any[]): IModule,
		provider(name: string, providerObject: IServiceProvider): IModule,
		provider(object: Object): IModule,
		run(initializationFunction: Function): IModule,
		run(inlineAnnotatedFunction: any[]): IModule,
		service(name: string, serviceConstructor: Function): IModule,
		service(name: string, inlineAnnotatedConstructor: any[]): IModule,
		service(object: Object): IModule,
		value(name: string, value: any): IModule,
		value(object: Object): IModule,
		decorator(name: string, decoratorConstructor: Function): IModule,
		decorator(name: string, inlineAnnotatedConstructor: any[]): IModule,
		name: string,
		requires: string[]
	}

	declare interface IAttributes {
		[name: string]: any,
		$normalize(name: string): string,
		$addClass(classVal: string): void,
		$removeClass(classVal: string): void,
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
		$addControl(control: INgModelController): void,
		$removeControl(control: INgModelController): void,
		$setValidity(
		validationErrorKey: string, isValid: boolean, control: INgModelController
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
	): Function,
		$watch(watchExpression: string, listener?: string, objectEquality?: boolean): Function,
		$watch<T>(
		watchExpression: string, listener?: (newValue: T, oldValue: T, scope: IScope) => any, objectEquality?: boolean
	): Function,
		$watch(
		watchExpression: (scope: IScope) => any, listener?: string, objectEquality?: boolean
	): Function,
		$watch<T>(
		watchExpression: (scope: IScope) => T, listener?: (newValue: T, oldValue: T, scope: IScope) => any, objectEquality?: boolean
	): Function,
		$watchCollection<T>(
		watchExpression: string, listener: (newValue: T, oldValue: T, scope: IScope) => any
	): Function,
		$watchCollection<T>(
		watchExpression: (scope: IScope) => T, listener: (newValue: T, oldValue: T, scope: IScope) => any
	): Function,
		$watchGroup(
		watchExpressions: any[], listener: (newValue: any, oldValue: any, scope: IScope) => any
	): Function,
		$watchGroup(
		watchExpressions: {
		(scope: IScope): any
	}[], listener: (newValue: any, oldValue: any, scope: IScope) => any
	): Function,
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
		stopPropagation?: Function,
		preventDefault: Function,
		defaultPrevented: boolean
	}

	declare interface IWindowService {
		[key: string]: any
	}

	declare interface IBrowserService {
		defer: angular.ITimeoutService,
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

	declare interface IAnimateProvider {
		register(name: string, factory: () => IAnimateCallbackObject): void,
		classNameFilter(expression?: RegExp): RegExp
	}

	declare interface IAnimateCallbackObject {
		eventFn(element: Node, doneFn: () => void): Function
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
		unwrapPromises(value: boolean): IParseProvider
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
		all<T>(promises: IPromise<any>[]): IPromise<T[]>,
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
		(element: string, transclude?: ITranscludeFunction, maxPriority?: number): ITemplateLinkingFunction,
		(element: Element, transclude?: ITranscludeFunction, maxPriority?: number): ITemplateLinkingFunction,
		(element: JQuery, transclude?: ITranscludeFunction, maxPriority?: number): ITemplateLinkingFunction
	}

	declare interface ICompileProvider {
		directive(name: string, directiveFactory: Function): ICompileProvider,
		directive(directivesMap: any): ICompileProvider,
		aHrefSanitizationWhitelist(): RegExp,
		aHrefSanitizationWhitelist(regexp: RegExp): ICompileProvider,
		imgSrcSanitizationWhitelist(): RegExp,
		imgSrcSanitizationWhitelist(regexp: RegExp): ICompileProvider,
		debugInfoEnabled(enabled?: boolean): any
	}

	declare interface ICloneAttachFunction {
		(clonedElement?: JQuery, scope?: IScope): any
	}

	declare interface ITemplateLinkingFunction {
		(scope: IScope, cloneAttachFn?: ICloneAttachFunction): IAugmentedJQuery
	}

	declare interface ITranscludeFunction {
		(scope: IScope, cloneAttachFn: ICloneAttachFunction): IAugmentedJQuery,
		(cloneAttachFn?: ICloneAttachFunction): IAugmentedJQuery
	}

	declare interface IControllerService {
		(controllerConstructor: NO PRINT IMPLEMENTED: ConstructorType, locals?: any, bindToController?: any): T,
		(controllerConstructor: Function, locals?: any, bindToController?: any): T,
		(controllerName: string, locals?: any, bindToController?: any): T
	}

	declare interface IControllerProvider {
		register(name: string, controllerConstructor: Function): void,
		register(name: string, dependencyAnnotatedConstructor: any[]): void,
		allowGlobals(): void
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
		url: string
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
		[requestType: string]: string | (() => string),
		common?: string | (() => string),
		get?: string | (() => string),
		post?: string | (() => string),
		put?: string | (() => string),
		patch?: string | (() => string)
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
		response?: <T>(response: IHttpPromiseCallbackArg<T>) => IPromise<T> | T,
		responseError?: (rejection: any) => any
	}

	declare interface IHttpInterceptorFactory {
		(...args: any[]): IHttpInterceptor
	}

	declare interface IHttpProvider {
		defaults: IHttpProviderDefaults,
		interceptors: (string | IHttpInterceptorFactory | (string | IHttpInterceptorFactory)[])[],
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

	declare interface Type {
		
	}

	declare interface RouteDefinition {
		path?: string,
		aux?: string,
		component?: Type | ComponentDefinition | string,
		loader?: Function,
		redirectTo?: any[],
		as?: string,
		name?: string,
		data?: any,
		useAsDefault?: boolean
	}

	declare interface ComponentDefinition {
		type: string,
		loader?: Function,
		component?: Type
	}

	declare interface IComponentOptions {
		controller?: any,
		controllerAs?: string,
		template?: string | Function,
		templateUrl?: string | Function,
		bindings?: any,
		transclude?: boolean,
		require?: Object,
		$canActivate?: () => boolean,
		$routeConfig?: RouteDefinition[]
	}

	declare interface IComponentTemplateFn {
		($element?: IAugmentedJQuery, $attrs?: IAttributes): string
	}

	declare interface IDirectiveFactory {
		(...args: any[]): IDirective
	}

	declare interface IDirectiveLinkFn {
		(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: {
		
	}, transclude: ITranscludeFunction): void
	}

	declare interface IDirectivePrePost {
		pre?: IDirectiveLinkFn,
		post?: IDirectiveLinkFn
	}

	declare interface IDirectiveCompileFn {
		(templateElement: IAugmentedJQuery, templateAttributes: IAttributes, transclude: ITranscludeFunction): IDirectivePrePost
	}

	declare interface IDirective {
		compile?: IDirectiveCompileFn,
		controller?: any,
		controllerAs?: string,
		bindToController?: boolean | Object,
		link?: IDirectiveLinkFn | IDirectivePrePost,
		name?: string,
		priority?: number,
		replace?: boolean,
		require?: any,
		restrict?: string,
		scope?: any,
		template?: string | Function,
		templateNamespace?: string,
		templateUrl?: string | Function,
		terminal?: boolean,
		transclude?: any
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
		controller(): any,
		controller(name: string): any,
		injector(): any,
		scope(): IScope,
		isolateScope(): IScope,
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
		annotate(inlineAnnotatedFunction: any[]): string[],
		get<T>(name: string, caller?: string): T,
		has(name: string): boolean,
		instantiate<T>(typeConstructor: Function, locals?: any): T,
		invoke(inlineAnnotatedFunction: any[]): any,
		invoke(func: Function, context?: any, locals?: any): any
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