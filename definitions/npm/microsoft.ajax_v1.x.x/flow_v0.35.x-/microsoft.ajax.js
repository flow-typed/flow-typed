

declare module 'microsoft.ajax' {
		declare interface ObjectConstructor {
		getType(instance: any): Type,
		getTypeName(instance: any): string
	}

	declare interface ArrayConstructor {
		add<T>(array: T[], element: T): void,
		addRange<T>(array: T[], items: T[]): void,
		clear<T>(array: T[]): void,
		clone<T>(array: T[]): T[],
		contains<T>(array: T[], element: T): boolean,
		dequeue<T>(array: T[]): T,
		enqueue<T>(array: T[], element: T): void,
		forEach<T>(
		array: T[], method: (element: T, index: number, array: T[]) => void, instance: any
	): void,
		indexOf<T>(array: T[], item: T, startIndex?: number): number,
		insert<T>(array: T[], index: number, item: T): void,
		parse<T>(value: string): T[],
		remove<T>(array: T[], item: T): boolean,
		removeAt<T>(array: T[], index: number): void
	}

	declare interface Number {
		format(format: string): string,
		localeFormat(format: string): string
	}

	declare interface NumberConstructor {
		parseInvariant(format: string): number,
		parseLocale(format: string): number
	}

	declare interface Date {
		format(format: string): string,
		localeFormat(format: string): string
	}

	declare interface DateConstructor {
		parseLocale(value: string, formats?: string[]): Date,
		parseLocale(value: string, ...formats: string[]): Date,
		parseInvariant(value: string, formats?: string[]): string,
		parseInvariant(value: string, ...formats: string[]): string
	}

	declare interface FunctionConstructor {
		createCallback(method: Function, ...context: any[]): Function,
		createDelegate(instance: any, method: Function): Function,
		emptyMethod(): Function,
		validateParameters(
		parameters: any, expectedParameters: Object[], validateParameterCount?: boolean
	): any
	}

	declare interface ErrorConstructor {
		parameterCount(message?: string): Error,
		notImplemented(message?: string): Error,
		argument(paramName?: any, message?: string): Error,
		argumentNull(paramName?: any, message?: string): Error,
		argumentOutOfRange(paramName?: string, actualValue?: any, message?: string): Error,
		argumentType(
		paramName?: string, actualType?: any, expectedType?: any, message?: string
	): Error,
		argumentUndefined(paramName?: string, message?: string): Error,
		create(message?: string, errorInfo?: Object): Error,
		format(message?: string): Error,
		invalidOperation(message?: string): Error
	}

	declare interface String {
		endsWith(suffix: string): boolean,
		trim(): string,
		trimEnd(): string,
		trimStart(): string
	}

	declare interface StringConstructor {
		format(format: string, ...args: any[]): string,
		localeFormat(format: string, ...args: any[]): string
	}

	declare interface BooleanConstructor {
		parse(value: string): Boolean
	}

	declare function $create(
		type: Type, properties?: any, events?: any, references?: any, element?: HTMLElement
	): Sys.Component

	declare function $find(id: string, parent?: Sys.Component): Sys.Component

	declare function $find(id: string, parent?: HTMLElement): Sys.Component

	declare function $addHandler(
		element: HTMLElement, eventName: string, handler: (e: Sys.UI.DomEvent) => void, autoRemove?: boolean
	): void

	declare function $addHandlers(
		element: HTMLElement, events: {
		[event: string]: (e: Sys.UI.DomEvent) => void
	}, handlerOwner?: any, autoRemove?: boolean
	): void

	declare function $clearHandlers(element: HTMLElement): void

	declare function $get(id: string, element?: HTMLElement): HTMLElement

	declare function $removeHandler(
		element: HTMLElement, eventName: string, handler: (e: Sys.UI.DomEvent) => void
	): void

	declare class Type  {
		callBaseMethod(instance: any, name: string, baseArguments?: any[]): any;
		createCallback(method: Function, context: Object): Function;
		createDelegate(instance: Object, method: Function): Function;
		getBaseMethod(instance: Object, name: string): any;
		getBaseType(): Type;
		getInterfaces(): any[];
		getName(): string;
		getRootNamespaces(): any;
		implementsInterface(interfaceType: Type): boolean;
		inheritsFrom(parentType: string): boolean;
		initializeBase(instance: any, baseArguments?: any[]): any;
		isClass(type: any): boolean;
		isEnum(type: any): boolean;
		isFlags(type: any): boolean;
		isImplementedBy(typeInstanceVar: any): boolean;
		isInstanceOfType(instance: any): boolean;
		isInterface(type: any): boolean;
		isNamespace(object: any): boolean;
		parse(typeName: string, ns?: string): any;
		registerClass(typeName: string, baseType?: any, interfaceTypes?: any[]): any;
		registerEnum(name: string, flags?: boolean): void;
		registerInterface(typeName: string): any;
		registerNamespace(namespacePath: string): void;
		resolveInheritance(): void
	}

	
}

declare module 'npm$namespace$Sys' {
		declare interface Application {
		constructor(): void,
		add_init(handler: (sender: Application, eventArgs: EventArgs) => void): void,
		remove_init(handler: (sender: Application, eventArgs: EventArgs) => void): void,
		add_load(
		handler: (sender: Application, eventArgs: ApplicationLoadEventArgs) => void
	): void,
		remove_load(
		handler: (sender: Application, eventArgs: ApplicationLoadEventArgs) => void
	): void,
		add_navigate(handler: (sender: Application, eventArgs: HistoryEventArgs) => void): void,
		remove_navigate(handler: (sender: Application, eventArgs: HistoryEventArgs) => void): void,
		add_unload(handler: Function): void,
		remove_unload(handler: Function): void,
		addComponent(component: any): void,
		beginCreateComponents(): void,
		addHistoryPoint(state: Object, title?: string): void,
		beginUpdate(): void,
		dispose(): void,
		disposeElement(element: Element, childNodesOnly: boolean): void,
		endCreateComponents(): void,
		endUpdate(): void,
		findComponent(id: string, parent?: Sys.Component): Sys.Component,
		findComponent(id: string, parent?: HTMLElement): Sys.Component,
		getComponents(): Sys.Component[],
		initialize(): void,
		notifyScriptLoaded(): void,
		raiseLoad(): void,
		raisePropertyChanged(propertyName: string): void,
		registerDisposableObject(object: any): void,
		removeComponent(component: Component): void,
		unregisterDisposableObject(object: any): void,
		updated(): void,
		get_enableHistory(): boolean,
		set_enableHistory(value: boolean): void,
		get_isCreatingComponents(): boolean,
		get_isDisposing(): boolean
	}

	declare interface Browser {
		agent: any,
		documentMode: number,
		hasDebuggerStatement: boolean,
		name: string,
		version: number
	}

	declare interface IContainer {
		addComponent(component: Component): void,
		findComponent(id: string): Component,
		getComponents(): Component[],
		removeComponent(component: Component): void
	}

	declare interface IDisposable {
		dispose(): void
	}

	declare interface INotifyDisposing {
		add_disposing(handler: Function): void,
		remove_disposing(handler: Function): void
	}

	declare interface INotifyPropertyChange {
		add_propertyChanged(handler: Function): void,
		remove_propertyChanged(handler: Function): void
	}

	declare export function Browser(): Sys.Browser

	declare class Component  {
		constructor(): this;
		add_disposing(handler: Function): void;
		remove_disposing(handler: Function): void;
		add_propertyChanged(handler: Function): void;
		remove_propertyChanged(handler: Function): void;
		beginUpdate(): void;
		create(
		type: Type, properties?: any, events?: any, references?: any, element?: HTMLElement
	): Sys.Component;
		endUpdate(): void;
		initialize(): void;
		raisePropertyChanged(propertyName: string): void;
		updated(): void;
		dispose(): void;
		get_events(): any;
		get_id(): string;
		set_id(value: string): void;
		get_isInitialized(): boolean;
		get_isUpdating(): boolean
	}

	declare class CultureInfo  {
		constructor(name: string, numberFormat: string, dateTimeFormat: string): this;
		numberFormat: string[];
		name: string;
		InvariantCulture: CultureInfo;
		CurrentCulture: CultureInfo;
		dateTimeFormat: string[]
	}

	declare class Debug  {
		constructor(): this;
		assert(condition: boolean, message?: string, displayCaller?: boolean): void;
		clearTrace(): void;
		fail(message: string): void;
		trace(text: string): void;
		traceDump(object: any, name?: string): void
	}

	declare class CollectionChange  {
		constructor(action: NotifyCollectionChangedAction, newItems: any[], newStartingIndex: number, oldItems: any[], oldStartingIndex: number): this;
		action: NotifyCollectionChangedAction;
		newItems: any[];
		newStartingIndex: number;
		oldItems: any[];
		oldStartingIndex: number
	}

	declare class Observer  {
		add(target: any[], item: any): void;
		addCollectionChanged(target: any, handler: Function): void;
		addEventHandler(target: any, eventName: string, handler: Function): void;
		addPropertyChanged(target: any, handler: Function): void;
		addRange(target: any[], items: any[]): void;
		beginUpdate(target: any): void;
		clear(target: any): void;
		endUpdate(target: any): void;
		insert(target: any, index: number, item: any): void;
		makeObservable(target: any): any;
		raiseCollectionChanged(target: any[], changes: Sys.CollectionChange): void;
		raiseEvent(target: any, eventName: string, eventArgs: Sys.EventArgs): void;
		raisePropertyChanged(target: any, propertyName: string): void;
		remove(target: any[], item: any): boolean;
		removeAt(target: any[], index: number): void;
		removeCollectionChanged(target: any, handler: Function): void;
		removeEventHandler(target: any, handler: Function): void;
		setValue(target: any, propertyName: string, value: any): void;
		isUpdating(target: any): boolean
	}

	declare class Res  {
		actualValue: string;
		appLoadTimedout: string;
		argument: string;
		argumentNull: string;
		argumentOutOfRange: string;
		argumentType: string;
		argumentTypeWithTypes: string;
		argumentUndefined: string;
		assertFailed: string;
		assetFailedCaller: string;
		badBaseUrl1: string;
		badBaseUrl2: string;
		badBaseUrl3: string;
		breakIntoDebugger: string;
		cannotAbortBeforeStart: string;
		cannotCallBeforeResponse: string;
		cannotCallOnceStarted: string;
		cannotCallOutsideHandler: string;
		cannotDeserializeEmptyString: string;
		cannotSerializeNonFiniteNumbers: string;
		controlCantSetId: string;
		enumInvalidValue: string;
		eventHandlerInvalid: string;
		format: string;
		formatBadDate: string;
		formatBadFormatSpecifier: string;
		formatInvalidString: string;
		invalidExecutorType: string;
		invalidHttpVerb: string;
		invalidOperation: string;
		invalidTimeout: string;
		invokeCalledTwice: string;
		notImplemented: string;
		nullWebRequest: string
	}

	declare class StringBuilder  {
		constructor(initialText?: string): this;
		append(text: string): void;
		appendLine(text: string): void;
		clear(): void;
		isEmpty(): boolean;
		toString(separator?: string): string
	}

	declare class ApplicationLoadEventArgs  {
		constructor(components: any, isPartialLoad: boolean): this;
		get_components(): Component[];
		get_isPartialLoad(): boolean
	}

	declare class EventArgs  {
		constructor(): this;
		Empty: EventArgs;
		Empty: EventArgs
	}

	declare class CommandEventArgs extends EventArgs {
		constructor(commandName: string, commandArgument: any, commandSource: any): this;
		get_commandName(): string;
		get_commandArgument(): any;
		get_commandSource(): any
	}

	declare class CancelEventArgs extends EventArgs {
		constructor(): this;
		set_cancel(value: boolean): void;
		get_cancel(): boolean
	}

	declare class HistoryEventArgs extends EventArgs {
		constructor(state: any): this;
		get_State(): any
	}

	declare class NotifyCollectionChangedEventArgs extends EventArgs {
		constructor(changes: CollectionChange): this;
		get_changes(): CollectionChange[]
	}

	declare class PropertyChangedEventArgs extends EventArgs {
		constructor(propertyName: string): this;
		propertyName(): string
	}

	
}

declare module 'Net' {
				declare class WebServiceProxy  {
		invoke(
		servicePath: string, methodName: string, useGet?: boolean, params?: any, onSuccess?: (result: string, eventArgs: EventArgs) => void, onFailure?: (error: WebServiceError) => void, userContext?: any, timeout?: number, enableJsonp?: boolean, jsonpCallbackParameter?: string
	): WebRequest
	}

	declare class WebServiceError  {
		get_errorObject(): any;
		get_exceptionType(): any;
		get_message(): string;
		get_stackTrace(): string;
		get_statusCode(): number;
		get_timedOut(): boolean
	}

	declare class NetworkRequestEventArgs  {
		constructor(value: WebRequest): this;
		get_webRequest(): WebRequest
	}

	declare class WebRequest  {
		constructor(): this;
		get_url(): string;
		set_url(value: string): void;
		get_httpVerb(): string;
		set_httpVerb(value: string): void;
		get_timeout(): number;
		set_timeout(value: number): void;
		get_body(): string;
		set_body(value: string): void;
		get_headers(): {
		[key: string]: string
	};
		get_userContext(): any;
		set_userContext(value: any): void;
		get_executor(): WebRequestExecutor;
		set_executor(value: WebRequestExecutor): void;
		add_completed(handler: (reference: any, eventArgs: Sys.EventArgs) => void): void;
		remove_completed(handler: (reference: any, eventArgs: Sys.EventArgs) => void): void;
		getResolvedUrl(): string;
		invoke(): void;
		completed(eventArgs: Sys.EventArgs): void
	}

	declare class WebRequestExecutor  {
		constructor(): this;
		abort(): void;
		executeRequest(): void;
		getAllResponseHeaders(): string;
		getResponseHeader(key: string): string;
		object(): any;
		get_aborted(): boolean;
		get_responseAvailable(): boolean;
		get_responseData(): string;
		get_started(): boolean;
		get_statusCode(): number;
		get_statusText(): string;
		get_timedOut(): boolean;
		get_xml(): XMLDocument;
		get_webRequest(): Sys.Net.WebRequest
	}

	declare class IWebRequestManager  {
		constructor(): this;
		add_completedRequest(handler: (sender: WebRequestExecutor, eventArgs: EventArgs) => void): void;
		add_invokingRequest(
		handler: (
		sender: WebRequestExecutor, networkRequestEventArgs: NetworkRequestEventArgs
	) => void
	): void;
		executeRequest(WebRequest: Sys.Net.WebRequest): void;
		remove_completedRequest(handler: (sender: WebRequestExecutor, eventArgs: EventArgs) => void): void;
		remove_invokingRequest(
		handler: (
		sender: WebRequestExecutor, networkRequestEventArgs: NetworkRequestEventArgs
	) => void
	): void;
		get_defaultExecutorType(): Sys.Net.WebRequestExecutor;
		set_defaultExecutorType(value: Sys.Net.WebRequestExecutor): void;
		get_defaultTimeout(): number;
		set_defaultTimeout(value: number): void
	}

	
}

declare module 'Serialization' {
				declare class JavaScriptSerializer  {
		constructor(): this;
		serialize(value: any): string;
		deserialize(value: string): any
	}

	
}

declare module 'Services' {
				declare class AuthenticationService  {
		constructor(): this;
		DefaultWebServicePath: string;
		login(
		userName: string, password: string, isPersistent: boolean, customInfo: any, redirectUrl: string, loginCompletedCallback: Function, failedCallback: Function, userContext: any
	): void;
		logout(
		redirectUrl: string, logoutCompletedCallback: Function, failedCallback: Function, userContext: any
	): void;
		get_defaultFailedCallback(): Function;
		set_defaultFailedCallback(value: string): void;
		defaultSucceededCallback(): Function;
		defaultSucceededCallback(value: Function): void;
		defaultUserContext(): Object;
		defaultUserContext(value: Object): void;
		get_isLoggedIn(): boolean;
		set_path(value: string): void;
		get_path(): string;
		set_timeout(value: number): void;
		get_timeout(): number
	}

	declare class ProfileGroup  {
		constructor(): this;
		constructor(properties: Object): this
	}

	declare class RoleService  {
		
	}

	declare class ProfileService  {
		new(): ProfileService;
		DefaultWebServicePath: string;
		properties: any;
		load(
		propertyNames: string[], loadCompletedCallback: Function, failedCallback: Function, userContext: any
	): void;
		save(
		propertyNames: string[], saveCompletedCallback: Function, failedCallback: Function, userContext: any
	): void;
		set_defaultFailedCallback(value: string): void;
		get_defaultFailedCallback(): Function;
		set_defaultLoadCompletedCallback(value: string): void;
		get_defaultLoadCompletedCallback(): Function;
		set_defaultSaveCompletedCallback(value: string): void;
		get_defaultSaveCompletedCallback(): Function;
		defaultSucceededCallback(): Function;
		defaultSucceededCallback(value: Function): void;
		defaultUserContext(): Object;
		defaultUserContext(value: Object): void;
		set_path(value: string): void;
		get_path(): string;
		set_timeout(value: number): void;
		get_timeout(): number
	}

	
}

declare module 'UI' {
		declare interface DomElement {
		addCssClass(element: HTMLElement, className: string): void,
		containsCssClass(element: HTMLElement, className: string): boolean,
		getBounds(
		element: HTMLElement
	): {
		x: number,
		y: number,
		width: number,
		height: number
	},
		getElementById(id: string): HTMLElement,
		getElementById(id: string, element?: HTMLElement): HTMLElement,
		getElementById(id: string, element?: HTMLElement): HTMLElement,
		getElementById(id: string, element: any): any,
		getLocation(element: HTMLElement): Sys.UI.Point,
		getVisibilityMode(element: HTMLElement): Sys.UI.VisibilityMode,
		getVisible(element: any): boolean,
		isDomElement(obj: any): boolean,
		raiseBubbleEvent(source: HTMLElement, args: EventArgs): void,
		removeCssClass(element: HTMLElement, className: string): void,
		removeCssClass(element: HTMLElement, className: string): void,
		removeCssClass(element: any, className: string): void,
		resolveElement(
		elementOrElementId: string | HTMLElement, containerElement?: HTMLElement
	): HTMLElement,
		setLocation(element: HTMLElement, x: number, y: number): void,
		setVisibilityMode(element: HTMLElement, value: Sys.UI.VisibilityMode): void,
		setVisible(element: HTMLElement, value: boolean): void,
		toggleCssClass(element: HTMLElement, className: string): void
	}

		declare class Behavior extends Sys$Component {
		getBehaviorByName(element: HTMLElement, name: string): Behavior;
		getBehaviorsByType(element: HTMLElement, type: Sys.UI.Behavior): Behavior[];
		getBehaviors(element: DomElement): Behavior[];
		dispose(): void;
		get_element(): HTMLElement;
		get_id(): string;
		set_id(value: string): void;
		set_name(value: string): void;
		get_name(): string
	}

	declare class Bounds  {
		constructor(): this;
		height: number;
		width: number;
		x: number;
		y: number
	}

	declare class Control extends Sys$Component {
		constructor(element: HTMLElement): this;
		addCssClass(className: string): void;
		dispose(): void;
		initialize(): void;
		onBubbleEvent(source: any, args: any): boolean;
		raiseBubbleEvent(source: any, args: any): void;
		removeCssClass(className: string): void;
		toggleCssClass(className: string): void;
		get_element(): HTMLElement;
		get_id(): string;
		set_id(value: string): void
	}

	declare class DomEvent  {
		constructor(domElement: HTMLElement): this;
		addHandler(
		element: HTMLElement, eventName: string, handler: (e: DomEvent) => void, autoRemove?: boolean
	): void;
		addHandlers(
		element: HTMLElement, events: {
		[event: string]: (e: DomEvent) => void
	}, handlerOwner?: any, autoRemove?: boolean
	): void;
		clearHandlers(element: HTMLElement): void;
		removeHandler(element: HTMLElement, eventName: string, handler: (e: DomEvent) => void): void;
		preventDefault(): void;
		stopPropagation(): void;
		altKey: boolean;
		button: Sys.UI.MouseButton;
		charCode: number;
		clientX: number;
		clientY: number;
		ctrlKey: boolean;
		keyCode: number;
		offsetX: number;
		offsetY: number;
		screenX: number;
		screenY: number;
		shiftKey: boolean;
		target: any;
		type: string
	}

	declare class Point  {
		constructor(x: number, y: number): this;
		x: number;
		y: number
	}

	
}

declare module 'WebForms' {
				declare class BeginRequestEventArgs extends EventArgs {
		constructor(request: Sys.Net.WebRequest, postBackElement: any, updatePanelsToUpdate: string[]): this;
		get_postBackElement(): HTMLElement;
		get_request(): Sys.Net.WebRequest;
		get_updatePanelsToUpdate(): string[]
	}

	declare class EndRequestEventArgs extends EventArgs {
		constructor(error: Error, dataItems: any, response: Sys.Net.WebRequestExecutor): this;
		get_dataItems(): any;
		get_error(): Error;
		get_errorHandled(): boolean;
		set_errorHandled(value: boolean): void;
		get_response(): Sys.Net.WebRequestExecutor
	}

	declare class InitializeRequestEventArgs extends EventArgs {
		constructor(request: Sys.Net.WebRequest, postBackElement: any, updatePanelsToUpdate: string[]): this;
		get_postBackElement(): HTMLElement;
		get_request(): Sys.Net.WebRequestExecutor;
		get_updatePanelsToUpdate(): string[]
	}

	declare class PageLoadedEventArgs extends EventArgs {
		constructor(): this;
		get_dataItems(): any;
		get_panelsCreated(): HTMLDivElement[];
		get_panelsUpdated(): HTMLDivElement[]
	}

	declare class PageLoadingEventArgs extends EventArgs {
		constructor(): this;
		get_dataItems(): any;
		get_panelsDeleting(): HTMLDivElement[];
		get_panelsUpdating(): HTMLDivElement[]
	}

	declare class PageRequestManager  {
		constructor(): this;
		add_beginRequest(beginRequestHandler: (sender: any, args: BeginRequestEventArgs) => void): void;
		remove_beginRequest(beginRequestHandler: Function): void;
		add_endRequest(
		endRequestHandler: (sender: any, args: Sys.WebForms.EndRequestEventArgs) => void
	): void;
		remove_endRequest(
		endRequestHandler: (sender: any, args: Sys.WebForms.EndRequestEventArgs) => void
	): void;
		add_initializeRequest(
		initializeRequestHandler: (sender: any, args: InitializeRequestEventArgs) => void
	): void;
		remove_initializeRequest(
		initializeRequestHandler: (sender: any, args: InitializeRequestEventArgs) => void
	): void;
		add_pageLoaded(pageLoadedHandler: (sender: any, args: PageLoadedEventArgs) => void): void;
		remove_pageLoaded(pageLoadedHandler: (sender: any, args: PageLoadedEventArgs) => void): void;
		add_pageLoading(pageLoadingHandler: (sender: any, args: PageLoadingEventArgs) => void): void;
		remove_pageLoading(pageLoadingHandler: (sender: any, args: PageLoadingEventArgs) => void): void;
		getInstance(): PageRequestManager;
		abortPostBack(): void;
		beginAsyncPostBack(
		updatePanelsToUpdate?: string[], eventTarget?: string, eventArgument?: string, causesValidation?: boolean, validationGroup?: string
	): void;
		dispose(): void;
		get_isInAsyncPostBack(): boolean
	}

	declare class PageRequestManagerParserErrorException  {
		
	}

	declare class PageRequestManagerServerErrorException  {
		
	}

	declare class PageRequestManagerTimeoutException  {
		
	}

	
}