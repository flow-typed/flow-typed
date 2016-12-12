import type { IAngularStatic } from 'npm$namespace$ng'

declare module 'angular-1.2' {
		declare interface Function {
		$inject?: string[]
	}

			
}

declare module 'npm$namespace$ng' {
		declare interface IServiceProviderClass {
		new (...args: any[]): IServiceProvider
	}

	declare interface IServiceProviderFactory {
		(...args: any[]): IServiceProvider
	}

	declare interface IServiceProvider {
		$get: any
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
		forEach<T>(obj: T[], iterator: (value: T, key: number) => any, context?: any): any,
		forEach<T>(
		obj: {
		[index: string]: T
	}, iterator: (value: T, key: string) => any, context?: any
	): any,
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
		module(name: string, requires?: string[], configFn?: Function): IModule,
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
		animation(name: string, inlineAnnotatedFunction: any[]): IModule,
		animation(object: Object): IModule,
		config(configFn: Function): IModule,
		config(inlineAnnotatedFunction: any[]): IModule,
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
		name: string,
		requires: string[]
	}

	declare interface IAttributes {
		[name: string]: any,
		$addClass(classVal: string): void,
		$removeClass(classVal: string): void,
		$set(key: string, value: any): void,
		$observe(name: string, fn: (value?: any) => any): Function,
		$attr: Object
	}

	declare interface IFormController {
		[name: string]: any,
		$pristine: boolean,
		$dirty: boolean,
		$valid: boolean,
		$invalid: boolean,
		$error: any,
		$addControl(control: ng.INgModelController): void,
		$removeControl(control: ng.INgModelController): void,
		$setValidity(
		validationErrorKey: string, isValid: boolean, control: ng.INgModelController
	): void,
		$setDirty(): void,
		$setPristine(): void
	}

	declare interface INgModelController {
		$render(): void,
		$setValidity(validationErrorKey: string, isValid: boolean): void,
		$setViewValue(value: any): void,
		$viewValue: any,
		$modelValue: any,
		$parsers: IModelParser[],
		$formatters: IModelFormatter[],
		$viewChangeListeners: IModelViewChangeListener[],
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

	declare interface IModelViewChangeListener {
		(): void
	}

	declare interface IRootScopeService {
		$apply(): any,
		$apply(exp: string): any,
		$apply(exp: (scope: IScope) => any): any,
		$broadcast(name: string, ...args: any[]): IAngularEvent,
		$destroy(): void,
		$digest(): void,
		$emit(name: string, ...args: any[]): IAngularEvent,
		$eval(expression: string, args?: Object): any,
		$eval(expression: (scope: IScope) => any, args?: Object): any,
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
		this: IRootScopeService,
		$id: string,
		$$isolateBindings: any,
		$$phase: any
	}

	declare interface IScope {
		[index: string]: any
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
		[key: string]: any
	}

	declare interface IBrowserService {
		[key: string]: any
	}

	declare interface ITimeoutService {
		(func: Function, delay?: number, invokeApply?: boolean): IPromise<any>,
		cancel(promise: IPromise<any>): boolean
	}

	declare interface IIntervalService {
		(func: Function, delay: number, count?: number, invokeApply?: boolean): IPromise<any>,
		cancel(promise: IPromise<any>): boolean
	}

	declare interface IAnimateCallbackObject {
		eventFn(element: Node, doneFn: () => void): Function
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

	declare interface ILogProvider {
		debugEnabled(enabled: boolean): ILogProvider,
		debugEnabled(): boolean
	}

	declare interface ILogCall {
		(...args: any[]): void
	}

	declare interface IParseService {
		(expression: string): ICompiledExpression
	}

	declare interface IParseProvider {
		logPromiseWarnings(): boolean,
		logPromiseWarnings(value: boolean): IParseProvider,
		unwrapPromises(): boolean,
		unwrapPromises(value: boolean): IParseProvider
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
		all(
		promises: {
		[id: string]: IPromise<any>
	}
	): IPromise<{
		[id: string]: any
	}>,
		defer<T>(): IDeferred<T>,
		reject(reason?: any): IPromise<void>,
		when<T>(value: IPromise<T>): IPromise<T>,
		when<T>(value: T): IPromise<T>,
		when(): IPromise<void>
	}

	declare interface IPromise<T> {
		then<TResult>(
		successCallback: (promiseValue: T) => IHttpPromise<TResult>, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any
	): IPromise<TResult>,
		then<TResult>(
		successCallback: (promiseValue: T) => IPromise<TResult>, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any
	): IPromise<TResult>,
		then<TResult>(
		successCallback: (promiseValue: T) => TResult, errorCallback?: (reason: any) => TResult, notifyCallback?: (state: any) => any
	): IPromise<TResult>,
		catch<TResult>(onRejected: (reason: any) => IHttpPromise<TResult>): IPromise<TResult>,
		catch<TResult>(onRejected: (reason: any) => IPromise<TResult>): IPromise<TResult>,
		catch<TResult>(onRejected: (reason: any) => TResult): IPromise<TResult>,
		finally<TResult>(finallyCallback: () => any): IPromise<TResult>
	}

	declare interface IDeferred<T> {
		resolve(value?: T): void,
		reject(reason?: any): void,
		notify(state?: any): void,
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
		imgSrcSanitizationWhitelist(regexp: RegExp): ICompileProvider
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
		(controllerConstructor: Function, locals?: any): any,
		(controllerName: string, locals?: any): any
	}

	declare interface IControllerProvider {
		register(name: string, controllerConstructor: Function): void,
		register(name: string, dependencyAnnotatedConstructor: any[]): void
	}

	declare interface IHttpService {
		(config: IRequestConfig): IHttpPromise<T>,
		get<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>,
		delete<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>,
		head<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>,
		jsonp<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>,
		post<T>(url: string, data: any, config?: IRequestShortcutConfig): IHttpPromise<T>,
		put<T>(url: string, data: any, config?: IRequestShortcutConfig): IHttpPromise<T>,
		defaults: IRequestConfig,
		pendingRequests: any[]
	}

	declare interface IRequestShortcutConfig {
		params?: any,
		headers?: any,
		xsrfHeaderName?: string,
		xsrfCookieName?: string,
		cache?: any,
		withCredentials?: boolean,
		data?: any,
		transformRequest?: any,
		transformResponse?: any,
		timeout?: any,
		responseType?: string
	}

	declare interface IRequestConfig {
		method: string,
		url: string
	}

	declare interface IHttpPromiseCallback<T> {
		(data: T, status: number, headers: (headerName: string) => string, config: IRequestConfig): void
	}

	declare interface IHttpPromiseCallbackArg<T> {
		data?: T,
		status?: number,
		headers?: (headerName: string) => string,
		config?: IRequestConfig,
		statusText?: string
	}

	declare interface IHttpPromise<T> {
		success(callback: IHttpPromiseCallback<T>): IHttpPromise<T>,
		error(callback: IHttpPromiseCallback<any>): IHttpPromise<T>,
		then<TResult>(
		successCallback: (response: IHttpPromiseCallbackArg<T>) => IPromise<TResult>, errorCallback?: (response: IHttpPromiseCallbackArg<any>) => any
	): IPromise<TResult>,
		then<TResult>(
		successCallback: (response: IHttpPromiseCallbackArg<T>) => TResult, errorCallback?: (response: IHttpPromiseCallbackArg<any>) => any
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
		resourceUrlWhitelist(whitelist: any[]): void
	}

	declare interface IDirectiveFactory {
		(...args: any[]): IDirective
	}

	declare interface IDirectiveLinkFn {
		(scope: IScope, instanceElement: IAugmentedJQuery, instanceAttributes: IAttributes, controller: any, transclude: ITranscludeFunction): void
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
		link?: IDirectiveLinkFn,
		name?: string,
		priority?: number,
		replace?: boolean,
		require?: any,
		restrict?: string,
		scope?: any,
		template?: any,
		templateUrl?: any,
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

	declare interface IAnimateService {
		addClass(element: JQuery, className: string, done?: Function): void,
		enter(element: JQuery, parent: JQuery, after: JQuery, done?: Function): void,
		leave(element: JQuery, done?: Function): void,
		move(element: JQuery, parent: JQuery, after: JQuery, done?: Function): void,
		removeClass(element: JQuery, className: string, done?: Function): void
	}

			
}

declare module 'auto' {
		declare interface IInjectorService {
		annotate(fn: Function): string[],
		annotate(inlineAnnotatedFunction: any[]): string[],
		get(name: string): any,
		has(name: string): boolean,
		instantiate(typeConstructor: Function, locals?: any): any,
		invoke(inlineAnnotatedFunction: any[]): any,
		invoke(func: Function, context?: any, locals?: any): any
	}

	declare interface IProvideService {
		constant(name: string, value: any): void,
		decorator(name: string, decorator: Function): void,
		decorator(name: string, inlineAnnotatedFunction: any[]): void,
		factory(name: string, serviceFactoryFunction: Function): ng.IServiceProvider,
		factory(name: string, inlineAnnotatedFunction: any[]): ng.IServiceProvider,
		provider(name: string, provider: ng.IServiceProvider): ng.IServiceProvider,
		provider(name: string, serviceProviderConstructor: Function): ng.IServiceProvider,
		service(name: string, constructor: Function): ng.IServiceProvider,
		value(name: string, value: any): ng.IServiceProvider
	}

			
}