/**
 * Flowtype definitions for angular-1.0
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
var angular: ng$IAngularStatic;
declare interface Function {
    $inject: string[]
}
declare interface ng$IServiceProvider {
    $get(): any
}

declare interface ng$IAngularStatic {
    bind(context: any, fn: Function, ...args: any[]): Function,
        bootstrap(element: string, modules?: any[]): auto.IInjectorService,
        bootstrap(element: JQuery, modules?: any[]): auto.IInjectorService,
        bootstrap(element: Element, modules?: any[]): auto.IInjectorService,
        bootstrap(element: Document, modules?: any[]): auto.IInjectorService,
        copy(source: any, destination?: any): any,
        element: ng$IAugmentedJQueryStatic,
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

        /**
         * construct your angular application
         * officialdocs: Interface for configuring angular modules.
        see:http://docs.angularjs.org/api/angular.Module
        */
        module(name: string, requires?: string[], configFunction?: any): ng$IModule,
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

declare interface ng$IModule {
    animation(name: string, animationFactory: Function): ng$IModule,
        animation(name: string, inlineAnnotadedFunction: any[]): ng$IModule,
        animation(object: Object): ng$IModule,

        /**
         * configure existing services.
         * Usethismethod to register work which needs to be performed on module loading
         */
        config(configFn: Function): ng$IModule,

        /**
         * configure existing services.
         * Usethismethod to register work which needs to be performed on module loading
         */
        config(inlineAnnotadedFunction: any[]): ng$IModule,
        constant(name: string, value: any): ng$IModule,
        constant(object: Object): ng$IModule,
        controller(name: string, controllerConstructor: Function): ng$IModule,
        controller(name: string, inlineAnnotadedConstructor: any[]): ng$IModule,
        controller(object: Object): ng$IModule,
        directive(
            name: string,
            directiveFactory: (...params: any[]) => ng$IDirective): ng$IModule,
        directive(name: string, inlineAnnotadedFunction: any[]): ng$IModule,
        directive(object: Object): ng$IModule,
        factory(name: string, serviceFactoryFunction: Function): ng$IModule,
        factory(name: string, inlineAnnotadedFunction: any[]): ng$IModule,
        factory(object: Object): ng$IModule,
        filter(name: string, filterFactoryFunction: Function): ng$IModule,
        filter(name: string, inlineAnnotadedFunction: any[]): ng$IModule,
        filter(object: Object): ng$IModule,
        provider(name: string, serviceProviderConstructor: Function): ng$IModule,
        provider(name: string, inlineAnnotadedConstructor: any[]): ng$IModule,
        provider(object: Object): ng$IModule,
        run(initializationFunction: Function): ng$IModule,
        run(inlineAnnotadedFunction: any[]): ng$IModule,
        service(name: string, serviceConstructor: Function): ng$IModule,
        service(name: string, inlineAnnotadedConstructor: any[]): ng$IModule,
        service(object: Object): ng$IModule,
        value(name: string, value: any): ng$IModule,
        value(object: Object): ng$IModule,
        name: string,
        requires: string[]
}

declare interface ng$IAttributes {
    $set(name: string, value: any): void,
        $observe(name: string, fn: (value?: any) => any): void,
        $attr: any
}

declare interface ng$IFormController {
    $pristine: boolean,
        $dirty: boolean,
        $valid: boolean,
        $invalid: boolean,
        $error: any,
        $setDirty(): void,
        $setPristine(): void
}

declare interface ng$INgModelController {
    $render(): void,
        $setValidity(validationErrorKey: string, isValid: boolean): void,
        $setViewValue(value: string): void,
        $viewValue: any,
        $modelValue: any,
        $parsers: ng$IModelParser[],
        $formatters: ng$IModelFormatter[],
        $error: any,
        $pristine: boolean,
        $dirty: boolean,
        $valid: boolean,
        $invalid: boolean
}

declare interface ng$IModelParser {
    (value: any): any
}

declare interface ng$IModelFormatter {
    (value: any): any
}

declare interface ng$IScope {
    $apply(): any,
        $apply(exp: string): any,
        $apply(exp: (scope: ng$IScope) => any): any,
        $broadcast(name: string, ...args: any[]): ng$IAngularEvent,
        $destroy(): void,
        $digest(): void,
        $emit(name: string, ...args: any[]): ng$IAngularEvent,
        $eval(expression: string): any,
        $eval(expression: (scope: ng$IScope) => any): any,
        $evalAsync(expression: string): void,
        $evalAsync(expression: (scope: ng$IScope) => any): void,
        $new(isolate?: boolean): ng$IScope,
        $on(
            name: string,
            listener: (event: ng$IAngularEvent, ...args: any[]) => any): Function,
        $watch(watchExpression: string, listener?: string, objectEquality?: boolean): Function,
        $watch(
            watchExpression: string,
            listener?: (newValue: any, oldValue: any, scope: ng$IScope) => any,
            objectEquality?: boolean): Function,
        $watch(
            watchExpression: (scope: ng$IScope) => any,
            listener?: string,
            objectEquality?: boolean): Function,
        $watch(
            watchExpression: (scope: ng$IScope) => any,
            listener?: (newValue: any, oldValue: any, scope: ng$IScope) => any,
            objectEquality?: boolean): Function,
        $watchCollection(
            watchExpression: string,
            listener: (newValue: any, oldValue: any, scope: ng$IScope) => any): Function,
        $watchCollection(
            watchExpression: (scope: ng$IScope) => any,
            listener: (newValue: any, oldValue: any, scope: ng$IScope) => any): Function,
        $parent: ng$IScope,
        $id: number,
        $$isolateBindings: any,
        $$phase: any
}

declare interface ng$IAngularEvent {
    targetScope: ng$IScope,
        currentScope: ng$IScope,
        name: string,
        preventDefault: Function,
        defaultPrevented: boolean,
        stopPropagation?: Function
}

declare type ng$IWindowService = {} & Window


declare interface ng$IBrowserService {}

declare interface ng$ITimeoutService {
    (func: Function, delay?: number, invokeApply?: boolean): ng$IPromise<any>,
        cancel(promise: ng$IPromise<any>): boolean
}

declare interface ng$IFilterService {
    (name: string): Function
}

declare type ng$IFilterProvider = {
    register(name: string, filterFactory: Function): ng$IServiceProvider
} & ng$IServiceProvider


declare interface ng$ILocaleService {
    id: string,
        NUMBER_FORMATS: ng$ILocaleNumberFormatDescriptor,
        DATETIME_FORMATS: ng$ILocaleDateTimeFormatDescriptor,
        pluralCat: (num: any) => string
}

declare interface ng$ILocaleNumberFormatDescriptor {
    DECIMAL_SEP: string,
        GROUP_SEP: string,
        PATTERNS: ng$ILocaleNumberPatternDescriptor[],
        CURRENCY_SYM: string
}

declare interface ng$ILocaleNumberPatternDescriptor {
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

declare interface ng$ILocaleDateTimeFormatDescriptor {
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

declare interface ng$ILogService {
    debug: ng$ILogCall,
        error: ng$ILogCall,
        info: ng$ILogCall,
        log: ng$ILogCall,
        warn: ng$ILogCall
}

declare interface ng$ILogCall {
    (...args: any[]): void
}

declare interface ng$IParseService {
    (expression: string): ng$ICompiledExpression
}

declare interface ng$ICompiledExpression {
    (context: any, locals?: any): any,
    assign(context: any, value: any): any
}

declare interface ng$ILocationService {
    absUrl(): string,
        hash(): string,
        hash(newHash: string): ng$ILocationService,
        host(): string,
        path(): string,
        path(newPath: string): ng$ILocationService,
        port(): number,
        protocol(): string,
        replace(): ng$ILocationService,
        search(): any,
        search(parametersMap: any): ng$ILocationService,
        search(parameter: string, parameterValue: any): ng$ILocationService,
        url(): string,
        url(url: string): ng$ILocationService
}

declare type ng$ILocationProvider = {
    hashPrefix(): string,
    hashPrefix(prefix: string): ng$ILocationProvider,
    html5Mode(): boolean,
    html5Mode(active: boolean): ng$ILocationProvider
} & ng$IServiceProvider


declare type ng$IDocumentService = {} & Document


declare interface ng$IExceptionHandlerService {
    (exception: Error, cause?: string): void
}

declare type ng$IRootElementService = {} & JQuery


declare interface ng$IQService {
    all(promises: ng$IPromise<any>[]): ng$IPromise<any[]>,
        defer<T>(): ng$IDeferred<T>,
        reject(reason?: any): ng$IPromise<void>,
        when<T>(value: T): ng$IPromise<T >
}

declare interface ng$IPromise<T>{
    then<TResult>(
        successCallback: (promiseValue: T) => ng$IHttpPromise<TResult>,
        errorCallback?: (reason: any) => any): ng$IPromise<TResult>,
    then<TResult>(
        successCallback: (promiseValue: T) => ng$IPromise<TResult>,
        errorCallback?: (reason: any) => any): ng$IPromise<TResult>,
    then<TResult>(
        successCallback: (promiseValue: T) => TResult,
        errorCallback?: (reason: any) => TResult): ng$IPromise<TResult >
}

declare interface ng$IDeferred<T>{
    resolve(value?: T): void,
    reject(reason?: any): void,
    promise: ng$IPromise<T >
}

declare interface ng$IAnchorScrollService {
    (): void
}

declare type ng$IAnchorScrollProvider = {
    disableAutoScrolling(): void
} & ng$IServiceProvider


declare interface ng$ICacheFactoryService {
    (cacheId: string, optionsMap?: {
        capacity: number
    }): ng$ICacheObject,
    info(): any,
        get(cacheId: string): ng$ICacheObject
}

declare interface ng$ICacheObject {
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

declare interface ng$ICompileService {
    (element: string, transclude?: ng$ITemplateLinkingFunction, maxPriority?: number): ng$ITemplateLinkingFunction,
    (element: Element, transclude?: ng$ITemplateLinkingFunction, maxPriority?: number): ng$ITemplateLinkingFunction,
    (element: JQuery, transclude?: ng$ITemplateLinkingFunction, maxPriority?: number): ng$ITemplateLinkingFunction
}

declare type ng$ICompileProvider = {
    directive(name: string, directiveFactory: Function): ng$ICompileProvider,
    directive(directivesMap: any): ng$ICompileProvider
} & ng$IServiceProvider


declare interface ng$ITemplateLinkingFunction {
    (scope: ng$IScope, cloneAttachFn?: (clonedElement?: JQuery, scope?: ng$IScope) => any): JQuery
}

declare interface ng$IControllerService {
    (controllerConstructor: Function, locals?: any): any,
    (controllerName: string, locals?: any): any
}

declare type ng$IControllerProvider = {
    register(name: string, controllerConstructor: Function): void,
    register(name: string, dependencyAnnotadedConstructor: any[]): void
} & ng$IServiceProvider


declare interface ng$IHttpService {
    (config: ng$IRequestConfig): ng$IHttpPromise<any>,
        get(url: string, RequestConfig?: any): ng$IHttpPromise<any>,
        delete(url: string, RequestConfig?: any): ng$IHttpPromise<any>,
        head(url: string, RequestConfig?: any): ng$IHttpPromise<any>,
        jsonp(url: string, RequestConfig?: any): ng$IHttpPromise<any>,
        post(url: string, data: any, RequestConfig?: any): ng$IHttpPromise<any>,
        put(url: string, data: any, RequestConfig?: any): ng$IHttpPromise<any>,
        defaults: ng$IRequestConfig,
        pendingRequests: any[]
}

declare interface ng$IRequestConfig {
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

declare interface ng$IHttpPromiseCallback<T>{
    (data: T, status: number, headers: (headerName: string) => string, config: ng$IRequestConfig): void
}

declare interface ng$IHttpPromiseCallbackArg<T>{
    data?: T,
    status?: number,
    headers?: (headerName: string) => string,
    config?: ng$IRequestConfig
}

declare type ng$IHttpPromise<T>= {
    success(callback: ng$IHttpPromiseCallback<T>): ng$IHttpPromise<T>,
    error(callback: ng$IHttpPromiseCallback<T>): ng$IHttpPromise<T>,
    then<TResult>(
        successCallback: (response: ng$IHttpPromiseCallbackArg<T>) => TResult,
        errorCallback?: (response: ng$IHttpPromiseCallbackArg<T>) => any): ng$IPromise<TResult>,
    then<TResult>(
        successCallback: (response: ng$IHttpPromiseCallbackArg<T>) => ng$IPromise<TResult>,
        errorCallback?: (response: ng$IHttpPromiseCallbackArg<T>) => any): ng$IPromise<TResult >
} & ng$IPromise


declare type ng$IHttpProvider = {
    defaults: ng$IRequestConfig,
    interceptors: any[],
    responseInterceptors: any[]
} & ng$IServiceProvider


declare interface ng$IHttpBackendService {
    (method: string, url: string, post?: any, callback?: Function, headers?: any, timeout?: number, withCredentials?: boolean): void
}

declare interface ng$IInterpolateService {
    (text: string, mustHaveExpression?: boolean): ng$IInterpolationFunction,
    endSymbol(): string,
        startSymbol(): string
}

declare interface ng$IInterpolationFunction {
    (context: any): string
}

declare type ng$IInterpolateProvider = {
    startSymbol(): string,
    startSymbol(value: string): ng$IInterpolateProvider,
    endSymbol(): string,
    endSymbol(value: string): ng$IInterpolateProvider
} & ng$IServiceProvider


declare interface ng$IRouteParamsService {}

declare type ng$ITemplateCacheService = {} & ng$ICacheObject


declare type ng$IRootScopeService = {} & ng$IScope


declare interface ng$IRouteService {
    reload(): void,
        routes: any,
        current?: ng$ICurrentRoute
}

declare interface ng$IRoute {
    controller?: any,
        name?: string,
        template?: string,
        templateUrl?: any,
        resolve?: any,
        redirectTo?: any,
        reloadOnSearch?: boolean
}

declare type ng$ICurrentRoute = {
    locals: {
        $scope: ng$IScope,
        $template: string
    },
    params: any
} & ng$IRoute


declare type ng$IRouteProvider = {
    otherwise(params: any): ng$IRouteProvider,
    when(path: string, route: ng$IRoute): ng$IRouteProvider
} & ng$IServiceProvider


declare interface ng$IDirective {
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

declare type ng$IAugmentedJQueryStatic = {
    (selector: string, context?: any): ng$IAugmentedJQuery,
    (element: Element): ng$IAugmentedJQuery,
    (object: {}): ng$IAugmentedJQuery,
    (elementArray: Element[]): ng$IAugmentedJQuery,
    (object: JQuery): ng$IAugmentedJQuery,
    (func: Function): ng$IAugmentedJQuery,
    (array: any[]): ng$IAugmentedJQuery,
    (): ng$IAugmentedJQuery
} & JQueryStatic


declare type ng$IAugmentedJQuery = {
    find(selector: string): ng$IAugmentedJQuery,
    find(element: any): ng$IAugmentedJQuery,
    find(obj: JQuery): ng$IAugmentedJQuery,
    controller(name: string): any,
    injector(): any,
    scope(): ng$IScope,
    inheritedData(key: string, value: any): JQuery,
    inheritedData(obj: {
        [key: string]: any
    }): JQuery,
    inheritedData(key?: string): any
} & JQuery


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
            factory(name: string, serviceFactoryFunction: Function): ng$IServiceProvider,
            provider(name: string, provider: ng$IServiceProvider): ng$IServiceProvider,
            provider(name: string, serviceProviderConstructor: Function): ng$IServiceProvider,
            service(name: string, constructor: Function): ng$IServiceProvider,
            value(name: string, value: any): ng$IServiceProvider
    }
}