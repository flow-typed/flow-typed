

declare module 'durandal' {
		declare interface DurandalPromise<T> {
		
	}

	declare interface DurandalDeferred<T> {
		
	}

	declare interface DurandalSystemModule {
		version: string,
		noop: Function,
		getModuleId(obj: any): string,
		setModuleId(obj: any, id: string): void,
		resolveObject(module: any): any,
		debug(enable?: boolean): boolean,
		log(...msgs: any[]): void,
		error(error: string): void,
		error(error: Error): void,
		assert(condition: boolean, message: string): void,
		defer<T>(action?: (dfd: DurandalDeferred<T>) => void): DurandalDeferred<T>,
		guid(): string,
		acquire(moduleId: string): DurandalPromise<any>,
		acquire(modules: string[]): DurandalPromise<any[]>,
		acquire(...moduleIds: string[]): DurandalPromise<any[]>,
		extend(obj: any, ...extensions: any[]): any,
		wait(milliseconds: number): DurandalPromise<any>,
		keys(obj: any): string[],
		isElement(obj: any): boolean,
		isArray(obj: any): boolean,
		isObject(obj: any): boolean,
		isPromise(obj: any): boolean,
		isArguments(obj: any): boolean,
		isFunction(obj: any): boolean,
		isString(obj: any): boolean,
		isNumber(obj: any): boolean,
		isDate(obj: any): boolean,
		isBoolean(obj: any): boolean
	}

	declare interface DurandalViewEngineModule {
		viewExtension: string,
		viewPlugin: string,
		viewPluginParameters: string,
		isViewUrl(url: string): boolean,
		convertViewUrlToViewId(url: string): string,
		convertViewIdToRequirePath(viewId: string): string,
		parseMarkup(markup: string): Node[],
		processMarkup(markup: string): HTMLElement,
		ensureSingleElement(allElements: Node[]): HTMLElement,
		tryGetViewFromCache(id: string): HTMLElement,
		putViewInCache(id: string, view: HTMLElement): void,
		createView(viewId: string): DurandalPromise<HTMLElement>,
		createFallbackView(viewId: string, requirePath: string, err: Error): DurandalPromise<HTMLElement>
	}

	declare interface DurandalViewLocatorModule {
		useConvention(modulesPath?: string, viewsPath?: string, areasPath?: string): void,
		locateViewForObject(
		obj: any, area: string, elementsToSearch?: HTMLElement[]
	): DurandalPromise<HTMLElement>,
		convertModuleIdToViewId(moduleId: string): string,
		determineFallbackViewId(obj: any): string,
		translateViewIdToArea(viewId: string, area: string): string,
		locateView(
		view: HTMLElement, area?: string, elementsToSearch?: HTMLElement[]
	): DurandalPromise<HTMLElement>,
		locateView(
		viewUrlOrId: string, area?: string, elementsToSearch?: HTMLElement[]
	): DurandalPromise<HTMLElement>
	}

	declare interface DurandalEventSubscription {
		then(thenCallback: Function, context?: any): DurandalEventSubscription,
		on(thenCallback: Function, context?: any): DurandalEventSubscription,
		off(): DurandalEventSubscription
	}

	declare interface DurandalEventSupport<T> {
		on(events: string): DurandalEventSubscription,
		on(events: string, callback: Function, context?: any): T,
		off(events: string, callback: Function, context?: any): T,
		trigger(events: string, ...eventArgs: any[]): T,
		proxy(events: string): Function
	}

	declare interface DurandalEventModule {
		new (): DurandalEventSupport<Object>,
		includeIn(targetObject: any): void
	}

	declare interface DialogButton {
		text: string,
		value: any
	}

	declare interface DurandalAppModule {
		title: string,
		showDialog(obj: any, activationData?: any, context?: string): DurandalPromise<any>,
		closeDialog(obj: any, ...results: any[]): void,
		showMessage(
		message: string, title?: string, options?: string[], autoclose?: boolean, settings?: Object
	): DurandalPromise<string>,
		showMessage(
		message: string, title?: string, options?: DialogButton[], autoclose?: boolean, settings?: Object
	): DurandalPromise<any>,
		configurePlugins(config: Object, baseUrl?: string): void,
		start(): DurandalPromise<any>,
		setRoot(root: any, transition?: string, applicationHost?: string): void,
		setRoot(root: any, transition?: string, applicationHost?: HTMLElement): void
	}

	declare interface DurandalActivatorSettings {
		closeOnDeactivate: boolean,
		affirmations: string[],
		interpretResponse(value: any): boolean,
		areSameItem(
		currentItem: any, newItem: any, currentActivationData: any, newActivationData: any
	): boolean,
		beforeActivate(newItem: any): any,
		afterDeactivate(oldItem: any, close: boolean, setter: Function): void
	}

	declare interface DurandalActivator<T> {
		settings: DurandalActivatorSettings,
		isActivating: KnockoutObservable<boolean>,
		canDeactivateItem(item: T, close: boolean): DurandalPromise<boolean>,
		deactivateItem(item: T, close: boolean): DurandalPromise<boolean>,
		canActivateItem(newItem: T, activationData?: any): DurandalPromise<boolean>,
		activateItem(newItem: T, activationData?: any): DurandalPromise<boolean>,
		canActivate(): DurandalPromise<boolean>,
		activate(): DurandalPromise<boolean>,
		canDeactivate(close: boolean): DurandalPromise<boolean>,
		deactivate(close: boolean): DurandalPromise<boolean>,
		includeIn(includeIn: any): void,
		forItems(items: any[]): DurandalActivator<T>
	}

	declare interface DurandalHistoryOptions {
		routeHandler?: (fragment: string) => void,
		root?: string,
		hashChange?: boolean,
		pushState?: boolean,
		silent?: boolean,
		startRoute?: string
	}

	declare interface DurandalNavigationOptions {
		trigger: boolean,
		replace: boolean
	}

	declare interface DurandalRouteConfiguration {
		title?: any,
		moduleId?: string,
		hash?: string,
		route?: string | string[],
		routePattern?: RegExp,
		isActive?: KnockoutComputed<boolean>,
		nav?: any,
		hasChildRoutes?: boolean,
		viewUrl?: string
	}

	declare interface DurandalRouteInstruction {
		fragment: string,
		queryString: string,
		config: DurandalRouteConfiguration,
		params: any[],
		queryParams: {
		[index: string]: any
	}
	}

	declare interface DurandalRelativeRouteSettings {
		moduleId?: string,
		route?: string,
		fromParent?: boolean,
		dynamicHash?: string
	}

	declare interface DurandalRouterBase<T> {
		handlers: {
		routePattern: RegExp,
		callback: (fragment: string) => void
	}[],
		routes: DurandalRouteConfiguration[],
		activeItem: DurandalActivator<any>,
		navigationModel: KnockoutObservableArray<DurandalRouteConfiguration>,
		isNavigating: KnockoutComputed<boolean>,
		activeInstruction: KnockoutObservable<DurandalRouteInstruction>,
		parseQueryString(queryString: string): Object,
		route(routePattern: RegExp, callback: (fragment: string) => void): void,
		loadUrl(fragment: string): boolean,
		updateDocumentTitle(instance: Object, instruction: DurandalRouteInstruction): void,
		navigate(fragment: string, trigger?: boolean): boolean,
		navigate(fragment: string, options: DurandalNavigationOptions): boolean,
		navigateBack(): void,
		convertRouteToHash(route: string): string,
		convertRouteToModuleId(route: string): string,
		convertRouteToTitle(route: string): string,
		map(route: string): T,
		map(route: string, moduleId: string): T,
		map(route: RegExp, moduleId: string): T,
		map(route: string, config: DurandalRouteConfiguration): T,
		map(route: RegExp, config: DurandalRouteConfiguration): T,
		map(config: DurandalRouteConfiguration): T,
		map(configs: DurandalRouteConfiguration[]): T,
		buildNavigationModel(defaultOrder?: number): T,
		mapUnknownRoutes(): T,
		mapUnknownRoutes(notFoundModuleId: string, replaceRoute?: string): T,
		mapUnknownRoutes(callback: (instruction: DurandalRouteInstruction) => void): T,
		mapUnknownRoutes(config: DurandalRouteConfiguration): T,
		reset(): T,
		makeRelative(settings: string): T,
		makeRelative(settings: DurandalRelativeRouteSettings): T,
		createChildRouter(): T,
		guardRoute?: (
		instance: Object, instruction: DurandalRouteInstruction
	) => DurandalPromise<boolean | string> | boolean | string,
		parent?: DurandalRouter
	}

	declare interface DurandalRouter {
		
	}

	declare interface DurandalRootRouter {
		makeRoutesCaseSensitive(): void,
		activate(options?: DurandalHistoryOptions): DurandalPromise<any>,
		deactivate(): void,
		install(): void
	}

			
}

declare module 'durandal/system' {
					declare module.exports: DurandalSystemModule


}

declare module 'durandal/viewEngine' {
					declare module.exports: DurandalViewEngineModule


}

declare module 'durandal/events' {
					declare module.exports: DurandalEventModule


}

declare module 'durandal/binder' {
		declare interface BindingInstruction {
		applyBindings: boolean
	}

	declare export function getBindingInstruction(view: HTMLElement): BindingInstruction

	declare export function bindContext(
		bindingContext: KnockoutBindingContext, view: HTMLElement, obj?: any, dataAlias?: string
	): BindingInstruction

	declare export function bind(obj: any, view: HTMLElement): BindingInstruction

		
}

declare module 'durandal/activator' {
			declare export function create<T>(
		initialActiveItem?: T, settings?: DurandalActivatorSettings
	): DurandalActivator<T>

	declare export function isActivator(object: any): boolean

		
}

declare module 'durandal/viewLocator' {
					declare module.exports: DurandalViewLocatorModule


}

declare module 'durandal/composition' {
		declare interface CompositionTransation {
		complete(callback: Function): void
	}

	declare interface CompositionContext {
		mode: string,
		parent: HTMLElement,
		activeView: HTMLElement,
		triggerAttach(): void,
		bindingContext?: KnockoutBindingContext,
		cacheViews?: boolean,
		viewElements?: HTMLElement[],
		model?: any,
		view?: any,
		area?: string,
		preserveContext?: boolean,
		activate?: boolean,
		strategy?: (context: CompositionContext) => DurandalPromise<HTMLElement>,
		composingNewView: boolean,
		child: HTMLElement,
		binding?: (child: HTMLElement, parent: HTMLElement, context: CompositionContext) => void,
		attached?: (child: HTMLElement, parent: HTMLElement, context: CompositionContext) => void,
		compositionComplete?: (child: HTMLElement, parent: HTMLElement, context: CompositionContext) => void,
		transition?: string
	}

	declare export function convertTransitionToModuleId(name: string): string

	declare export function addBindingHandler(
		name: string, config?: KnockoutBindingHandler, initOptionsFactory?: (
		element?: HTMLElement, valueAccessor?: any, allBindingsAccessor?: any, viewModel?: any, bindingContext?: KnockoutBindingContext
	) => any
	): void

	declare export function getParts(elements: HTMLElement[]): any

	declare export function getParts(element: HTMLElement): any

	declare export function compose(
		element: HTMLElement, settings: CompositionContext, bindingContext: KnockoutBindingContext
	): void

		
}

declare module 'durandal/app' {
					declare module.exports: DurandalAppModule


}

declare module 'plugins/dialog' {
		declare interface DialogContext {
		addHost(theDialog: Dialog): void,
		removeHost(theDialog: Dialog): void,
		compositionComplete(
		child: HTMLElement, parent: HTMLElement, context: composition.CompositionContext
	): void,
		blockoutOpacity?: number
	}

	declare interface Dialog {
		host: HTMLElement,
		owner: any,
		context: DialogContext,
		activator: DurandalActivator<any>,
		close(): DurandalPromise<any>,
		settings: composition.CompositionContext
	}

	declare export function getNextZIndex(): number

	declare export function isOpen(): boolean

	declare export function getContext(name?: string): DialogContext

	declare export function addContext(name: string, modalContext: DialogContext): void

	declare export function getDialog(obj: any): Dialog

	declare export function close(obj: any, ...results: any[]): void

	declare export function show(obj: any, activationData?: any, context?: string): DurandalPromise<any>

	declare export function showMessage(
		message: string, title?: string, options?: string[], autoclose?: boolean, settings?: Object
	): DurandalPromise<string>

	declare export function showMessage(
		message: string, title?: string, options?: DialogButton[], autoclose?: boolean, settings?: Object
	): DurandalPromise<any>

	declare export function install(config: Object): void

	declare class Box  {
		constructor(message: string, title?: string, options?: string[], autoclose?: boolean, settings?: Object): this;
		selectOption(dialogResult: string): void;
		getView(): HTMLElement;
		setViewUrl(viewUrl: string): void;
		defaultTitle: string;
		defaultOptions: string[];
		setDefaults(settings: Object): void;
		defaultViewMarkup: string
	}

	
}

declare module 'plugins/history' {
			declare export function getHash(window?: Window): string

	declare export function getFragment(fragment: string, forcePushState: boolean): string

	declare export function activate(options: DurandalHistoryOptions): boolean

	declare export function deactivate(): void

	declare export function checkUrl(): boolean

	declare export function loadUrl(): boolean

	declare export function navigate(fragment: string, trigger?: boolean): boolean

	declare export function navigate(fragment: string, options: DurandalNavigationOptions): boolean

	declare export function navigateBack(): void

		
}

declare module 'plugins/http' {
			declare export function toJSON(data: Object): string

	declare export function get(url: string, query?: Object, headers?: Object): DurandalPromise<any>

	declare export function jsonp(
		url: string, query?: Object, callbackParam?: string, headers?: Object
	): DurandalPromise<any>

	declare export function post(url: string, data: Object, headers?: Object): DurandalPromise<any>

	declare export function put(url: string, data: Object, headers?: Object): DurandalPromise<any>

	declare export function remove(url: string, query?: Object, headers?: Object): DurandalPromise<any>

		
}

declare module 'plugins/observable' {
			declare function observable(obj: any, property: string): KnockoutObservable<any>

		declare module.exports: undefined


}

declare module 'observable' {
			declare export function convertObject(obj: any): void

	declare export function convertProperty(obj: any, propertyName: string, original?: any): KnockoutObservable<any>

	declare export function defineProperty<T>(
		obj: any, propertyName: string, evaluatorOrOptions?: KnockoutComputedDefine<T>
	): KnockoutComputed<T>

	declare export function install(config: Object): void

		
}

declare module 'plugins/serializer' {
		declare interface SerializerOptions {
		replacer?: (key: string, value: any) => any,
		space: any
	}

	declare interface DeserializerOptions {
		getTypeId: (object: any) => string,
		getConstructor: (typeId: string) => () => any,
		reviver: (key: string, value: any) => any
	}

	declare export function replacer(key: string, value: any): any

	declare export function serialize(object: any, settings?: string): string

	declare export function serialize(object: any, settings?: number): string

	declare export function serialize(object: any, settings?: SerializerOptions): string

	declare export function getTypeId(object: any): string

	declare export function registerType(typeId: string, constructor: () => any): void

	declare export function reviver(
		key: string, value: any, getTypeId: (value: any) => string, getConstructor: (id: string) => () => any
	): any

	declare export function deserialize<T>(text: string, settings?: DeserializerOptions): T

	declare export function clone<T>(obj: T, settings?: Object): T

		
}

declare module 'plugins/widget' {
		declare interface WidgetSettings {
		kind: string,
		model?: any,
		view?: any
	}

	declare export function registerKind(kind: string): void

	declare export function mapKind(kind: string, viewId?: string, moduleId?: string): void

	declare export function mapKindToModuleId(kind: string): string

	declare export function convertKindToModulePath(kind: string): string

	declare export function mapKindToViewId(kind: string): string

	declare export function convertKindToViewPath(kind: string): string

	declare export function create(
		element: HTMLElement, settings: WidgetSettings, bindingContext?: KnockoutBindingContext
	): void

		
}

declare module 'plugins/router' {
					declare module.exports: DurandalRootRouter


}