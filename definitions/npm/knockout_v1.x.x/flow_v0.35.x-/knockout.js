

declare module 'knockout' {
		declare interface KnockoutSubscribableFunctions<T> {
		[key: string]: KnockoutBindingHandler,
		notifySubscribers(valueToWrite?: T, event?: string): void
	}

	declare interface KnockoutComputedFunctions<T> {
		[key: string]: KnockoutBindingHandler
	}

	declare interface KnockoutObservableFunctions<T> {
		[key: string]: KnockoutBindingHandler,
		equalityComparer(a: any, b: any): boolean
	}

	declare interface KnockoutObservableArrayFunctions<T> {
		indexOf(searchElement: T, fromIndex?: number): number,
		slice(start: number, end?: number): T[],
		splice(start: number): T[],
		splice(start: number, deleteCount: number, ...items: T[]): T[],
		pop(): T,
		push(...items: T[]): void,
		shift(): T,
		unshift(...items: T[]): number,
		reverse(): KnockoutObservableArray<T>,
		sort(): KnockoutObservableArray<T>,
		sort(compareFunction: (left: T, right: T) => number): KnockoutObservableArray<T>,
		[key: string]: KnockoutBindingHandler,
		replace(oldItem: T, newItem: T): void,
		remove(item: T): T[],
		remove(removeFunction: (item: T) => boolean): T[],
		removeAll(items: T[]): T[],
		removeAll(): T[],
		destroy(item: T): void,
		destroy(destroyFunction: (item: T) => boolean): void,
		destroyAll(items: T[]): void,
		destroyAll(): void
	}

	declare interface KnockoutSubscribableStatic {
		fn: KnockoutSubscribableFunctions<any>,
		new <T>(): KnockoutSubscribable<T>
	}

	declare interface KnockoutSubscription {
		dispose(): void
	}

	declare interface KnockoutSubscribable<T> {
		subscribe(
		callback: (newValue: T) => void, target: any, event: "beforeChange"
	): KnockoutSubscription,
		subscribe(
		callback: (newValue: T) => void, target?: any, event?: "change"
	): KnockoutSubscription,
		subscribe<TEvent>(
		callback: (newValue: TEvent) => void, target: any, event: string
	): KnockoutSubscription,
		extend(requestedExtenders: {
		[key: string]: any
	}): KnockoutSubscribable<T>,
		getSubscriptionsCount(): number
	}

	declare interface KnockoutComputedStatic {
		fn: KnockoutComputedFunctions<any>,
		(): KnockoutComputed<T>,
		(func: () => T, context?: any, options?: any): KnockoutComputed<T>,
		(def: KnockoutComputedDefine<T>, context?: any): KnockoutComputed<T>
	}

	declare interface KnockoutComputed<T> {
		fn: KnockoutComputedFunctions<any>,
		dispose(): void,
		isActive(): boolean,
		getDependenciesCount(): number,
		extend(requestedExtenders: {
		[key: string]: any
	}): KnockoutComputed<T>
	}

	declare interface KnockoutObservableArrayStatic {
		fn: KnockoutObservableArrayFunctions<any>,
		(value?: T[]): KnockoutObservableArray<T>
	}

	declare interface KnockoutObservableArray<T> {
		subscribe(
		callback: (newValue: KnockoutArrayChange<T>[]) => void, target: any, event: "arrayChange"
	): KnockoutSubscription,
		subscribe(
		callback: (newValue: T[]) => void, target: any, event: "beforeChange"
	): KnockoutSubscription,
		subscribe(
		callback: (newValue: T[]) => void, target?: any, event?: "change"
	): KnockoutSubscription,
		subscribe<TEvent>(
		callback: (newValue: TEvent) => void, target: any, event: string
	): KnockoutSubscription,
		extend(requestedExtenders: {
		[key: string]: any
	}): KnockoutObservableArray<T>
	}

	declare interface KnockoutObservableStatic {
		fn: KnockoutObservableFunctions<any>,
		(value?: T): KnockoutObservable<T>
	}

	declare interface KnockoutObservable<T> {
		(): T,
		(value: T): void,
		peek(): T,
		valueHasMutated?: {
		(): void
	},
		valueWillMutate?: {
		(): void
	},
		extend(requestedExtenders: {
		[key: string]: any
	}): KnockoutObservable<T>
	}

	declare interface KnockoutComputedDefine<T> {
		read(): T,
		write(value: T): void,
		disposeWhenNodeIsRemoved?: Node,
		disposeWhen(): boolean,
		owner?: any,
		deferEvaluation?: boolean,
		pure?: boolean
	}

	declare interface KnockoutBindingContext {
		$parent: any,
		$parents: any[],
		$root: any,
		$data: any,
		$rawData: any | KnockoutObservable<any>,
		$index?: KnockoutObservable<number>,
		$parentContext?: KnockoutBindingContext,
		$component: any,
		$componentTemplateNodes: Node[],
		extend(properties: any): any,
		createChildContext(dataItemOrAccessor: any, dataItemAlias?: any, extendCallback?: Function): any
	}

	declare interface KnockoutAllBindingsAccessor {
		(): any,
		get(name: string): any,
		has(name: string): boolean
	}

	declare interface KnockoutBindingHandler {
		after?: Array<string>,
		init?: (
		element: any, valueAccessor: () => any, allBindingsAccessor?: KnockoutAllBindingsAccessor, viewModel?: any, bindingContext?: KnockoutBindingContext
	) => void | {
		controlsDescendantBindings: boolean
	},
		update?: (
		element: any, valueAccessor: () => any, allBindingsAccessor?: KnockoutAllBindingsAccessor, viewModel?: any, bindingContext?: KnockoutBindingContext
	) => void,
		options?: any,
		preprocess?: (
		value: string, name: string, addBindingCallback?: (name: string, value: string) => void
	) => string
	}

	declare interface KnockoutBindingHandlers {
		[bindingHandler: string]: KnockoutBindingHandler,
		visible: KnockoutBindingHandler,
		text: KnockoutBindingHandler,
		html: KnockoutBindingHandler,
		css: KnockoutBindingHandler,
		style: KnockoutBindingHandler,
		attr: KnockoutBindingHandler,
		foreach: KnockoutBindingHandler,
		if: KnockoutBindingHandler,
		ifnot: KnockoutBindingHandler,
		with: KnockoutBindingHandler,
		click: KnockoutBindingHandler,
		event: KnockoutBindingHandler,
		submit: KnockoutBindingHandler,
		enable: KnockoutBindingHandler,
		disable: KnockoutBindingHandler,
		value: KnockoutBindingHandler,
		textInput: KnockoutBindingHandler,
		hasfocus: KnockoutBindingHandler,
		checked: KnockoutBindingHandler,
		options: KnockoutBindingHandler,
		selectedOptions: KnockoutBindingHandler,
		uniqueName: KnockoutBindingHandler,
		template: KnockoutBindingHandler,
		component: KnockoutBindingHandler
	}

	declare interface KnockoutMemoization {
		memoize(callback: () => string): string,
		unmemoize(memoId: string, callbackParams: any[]): boolean,
		unmemoizeDomNodeAndDescendants(domNode: any, extraCallbackParamsArray: any[]): boolean,
		parseMemoText(memoText: string): string
	}

	declare interface KnockoutVirtualElement {
		
	}

	declare interface KnockoutVirtualElements {
		allowedBindings: {
		[bindingName: string]: boolean
	},
		emptyNode(node: KnockoutVirtualElement): void,
		firstChild(node: KnockoutVirtualElement): KnockoutVirtualElement,
		insertAfter(container: KnockoutVirtualElement, nodeToInsert: Node, insertAfter: Node): void,
		nextSibling(node: KnockoutVirtualElement): Node,
		prepend(node: KnockoutVirtualElement, toInsert: Node): void,
		setDomNodeChildren(
		node: KnockoutVirtualElement, newChildren: {
		length: number,
		[index: number]: Node
	}
	): void,
		childNodes(node: KnockoutVirtualElement): Node[]
	}

	declare interface KnockoutExtenders {
		throttle(target: any, timeout: number): KnockoutComputed<any>,
		notify(target: any, notifyWhen: string): any,
		rateLimit(target: any, timeout: number): any,
		rateLimit(target: any, options: {
		timeout: number,
		method?: string
	}): any,
		trackArrayChanges(target: any): any
	}

	declare interface KnockoutUtils {
		domData: {
		get(node: Element, key: string): any,
		set(node: Element, key: string, value: any): void,
		getAll(node: Element, createIfNotFound: boolean): any,
		clear(node: Element): boolean
	},
		domNodeDisposal: {
		addDisposeCallback(node: Element, callback: Function): void,
		removeDisposeCallback(node: Element, callback: Function): void,
		cleanNode(node: Node): Element,
		removeNode(node: Node): void
	},
		addOrRemoveItem<T>(array: T[] | KnockoutObservable<T>, value: T, included: T): void,
		arrayFilter<T>(array: T[], predicate: (item: T) => boolean): T[],
		arrayFirst<T>(array: T[], predicate: (item: T) => boolean, predicateOwner?: any): T,
		arrayForEach<T>(array: T[], action: (item: T, index: number) => void): void,
		arrayGetDistinctValues<T>(array: T[]): T[],
		arrayIndexOf<T>(array: T[], item: T): number,
		arrayMap<T, U>(array: T[], mapping: (item: T) => U): U[],
		arrayPushAll<T>(array: T[] | KnockoutObservableArray<T>, valuesToPush: T[]): T[],
		arrayRemoveItem(array: any[], itemToRemove: any): void,
		compareArrays<T>(a: T[], b: T[]): Array<KnockoutArrayChange<T>>,
		extend(target: Object, source: Object): Object,
		fieldsIncludedWithJsonPost: any[],
		getFormFields(form: any, fieldName: string): any[],
		objectForEach(obj: any, action: (key: any, value: any) => void): void,
		parseHtmlFragment(html: string): any[],
		parseJson(jsonString: string): any,
		postJson(urlOrForm: any, data: any, options: any): void,
		peekObservable<T>(value: KnockoutObservable<T>): T,
		range(min: any, max: any): any,
		registerEventHandler(element: any, eventType: any, handler: Function): void,
		setHtml(node: Element, html: () => string): void,
		setHtml(node: Element, html: string): void,
		setTextContent(element: any, textContent: string | KnockoutObservable<string>): void,
		stringifyJson(data: any, replacer?: Function, space?: string): string,
		toggleDomNodeCssClass(node: any, className: string, shouldHaveClass: boolean): void,
		triggerEvent(element: any, eventType: any): void,
		unwrapObservable<T>(value: KnockoutObservable<T> | T): T
	}

	declare interface KnockoutArrayChange<T> {
		status: "added" | "deleted" | "retained",
		value: T,
		index: number,
		moved?: number
	}

	declare interface KnockoutTemplateSourcesDomElement {
		text(): any,
		text(value: any): void,
		data(key: string): any,
		data(key: string, value: any): any
	}

	declare interface KnockoutTemplateAnonymous {
		nodes(): any,
		nodes(value: any): void
	}

	declare interface KnockoutTemplateSources {
		domElement: {
		prototype: KnockoutTemplateSourcesDomElement,
		new (element: Element): KnockoutTemplateSourcesDomElement
	},
		anonymousTemplate: {
		prototype: KnockoutTemplateAnonymous,
		new (element: Element): KnockoutTemplateAnonymous
	}
	}

	declare interface KnockoutNativeTemplateEngine {
		renderTemplateSource(
		templateSource: Object, bindingContext?: KnockoutBindingContext, options?: Object
	): any[]
	}

	declare interface KnockoutTemplateEngine {
		createJavaScriptEvaluatorBlock(script: string): string,
		makeTemplateSource(template: any, templateDocument?: Document): any,
		renderTemplate(
		template: any, bindingContext: KnockoutBindingContext, options: Object, templateDocument: Document
	): any,
		isTemplateRewritten(template: any, templateDocument: Document): boolean,
		rewriteTemplate(template: any, rewriterCallback: Function, templateDocument: Document): void
	}

	declare interface KnockoutTasks {
		scheduler: (callback: Function) => any,
		schedule(task: Function): number,
		cancel(handle: number): void,
		runEarly(): void
	}

	declare interface KnockoutStatic {
		utils: KnockoutUtils,
		memoization: KnockoutMemoization,
		bindingHandlers: KnockoutBindingHandlers,
		getBindingHandler(handler: string): KnockoutBindingHandler,
		virtualElements: KnockoutVirtualElements,
		extenders: KnockoutExtenders,
		applyBindings(viewModelOrBindingContext?: any, rootNode?: any): void,
		applyBindingsToDescendants(viewModelOrBindingContext: any, rootNode: any): void,
		applyBindingAccessorsToNode(
		node: Node, bindings: (bindingContext: KnockoutBindingContext, node: Node) => {
		
	}, bindingContext: KnockoutBindingContext
	): void,
		applyBindingAccessorsToNode(node: Node, bindings: {
		
	}, bindingContext: KnockoutBindingContext): void,
		applyBindingAccessorsToNode(
		node: Node, bindings: (bindingContext: KnockoutBindingContext, node: Node) => {
		
	}, viewModel: any
	): void,
		applyBindingAccessorsToNode(node: Node, bindings: {
		
	}, viewModel: any): void,
		applyBindingsToNode(node: Node, bindings: any, viewModelOrBindingContext?: any): any,
		subscribable: KnockoutSubscribableStatic,
		observable: KnockoutObservableStatic,
		computed: KnockoutComputedStatic,
		pureComputed<T>(evaluatorFunction: () => T, context?: any): KnockoutComputed<T>,
		pureComputed<T>(options: KnockoutComputedDefine<T>, context?: any): KnockoutComputed<T>,
		observableArray: KnockoutObservableArrayStatic,
		contextFor(node: any): any,
		isSubscribable(instance: any): KnockoutSubscribable,
		toJSON(viewModel: any, replacer?: Function, space?: any): string,
		toJS(viewModel: any): any,
		isObservable(instance: any): KnockoutObservable,
		isWriteableObservable(instance: any): KnockoutObservable,
		isComputed(instance: any): KnockoutComputed,
		dataFor(node: any): any,
		removeNode(node: Element): void,
		cleanNode(node: Element): Element,
		renderTemplate(
		template: Function, viewModel: any, options?: any, target?: any, renderMode?: any
	): any,
		renderTemplate(
		template: string, viewModel: any, options?: any, target?: any, renderMode?: any
	): any,
		unwrap<T>(value: KnockoutObservable<T> | T): T,
		computedContext: KnockoutComputedContext,
		templateSources: KnockoutTemplateSources,
		templateEngine: {
		prototype: KnockoutTemplateEngine,
		new (): KnockoutTemplateEngine
	},
		templateRewriting: {
		ensureTemplateIsRewritten(
		template: Node, templateEngine: KnockoutTemplateEngine, templateDocument: Document
	): any,
		ensureTemplateIsRewritten(
		template: string, templateEngine: KnockoutTemplateEngine, templateDocument: Document
	): any,
		memoizeBindingAttributeSyntax(htmlString: string, templateEngine: KnockoutTemplateEngine): any,
		applyMemoizedBindingsToNextSibling(bindings: any, nodeName: string): string
	},
		nativeTemplateEngine: {
		prototype: KnockoutNativeTemplateEngine,
		new (): KnockoutNativeTemplateEngine,
		instance: KnockoutNativeTemplateEngine
	},
		jqueryTmplTemplateEngine: {
		prototype: KnockoutTemplateEngine,
		renderTemplateSource(
		templateSource: Object, bindingContext: KnockoutBindingContext, options: Object
	): Node[],
		createJavaScriptEvaluatorBlock(script: string): string,
		addTemplate(templateName: string, templateMarkup: string): void
	},
		setTemplateEngine(templateEngine: KnockoutNativeTemplateEngine): void,
		renderTemplate(
		template: Function, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node, renderMode: string
	): any,
		renderTemplate(
		template: any, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node, renderMode: string
	): any,
		renderTemplate(
		template: Function, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node, renderMode: string
	): any,
		renderTemplate(
		template: any, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node, renderMode: string
	): any,
		renderTemplate(
		template: Function, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node[], renderMode: string
	): any,
		renderTemplate(
		template: any, dataOrBindingContext: KnockoutBindingContext, options: Object, targetNodeOrNodeArray: Node[], renderMode: string
	): any,
		renderTemplate(
		template: Function, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node[], renderMode: string
	): any,
		renderTemplate(
		template: any, dataOrBindingContext: any, options: Object, targetNodeOrNodeArray: Node[], renderMode: string
	): any,
		renderTemplateForEach(
		template: Function, arrayOrObservableArray: any[], options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext
	): any,
		renderTemplateForEach(
		template: any, arrayOrObservableArray: any[], options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext
	): any,
		renderTemplateForEach(
		template: Function, arrayOrObservableArray: KnockoutObservable<any>, options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext
	): any,
		renderTemplateForEach(
		template: any, arrayOrObservableArray: KnockoutObservable<any>, options: Object, targetNode: Node, parentBindingContext: KnockoutBindingContext
	): any,
		expressionRewriting: {
		bindingRewriteValidators: any[],
		twoWayBindings: any,
		parseObjectLiteral: (objectLiteralString: string) => any[],
		writeValueToProperty: (
		property: KnockoutObservable<any> | any, allBindings: KnockoutAllBindingsAccessor, key: string, value: any, checkIfDifferent?: boolean
	) => void
	},
		bindingProvider: {
		instance: KnockoutBindingProvider,
		new (): KnockoutBindingProvider
	},
		selectExtensions: {
		readValue(element: HTMLElement): any,
		writeValue(element: HTMLElement, value: any): void
	},
		components: KnockoutComponents,
		options: {
		deferUpdates: boolean,
		useOnlyNativeEvents: boolean
	},
		tasks: KnockoutTasks
	}

	declare interface KnockoutBindingProvider {
		nodeHasBindings(node: Node): boolean,
		getBindings(node: Node, bindingContext: KnockoutBindingContext): {
		
	},
		getBindingAccessors(
		node: Node, bindingContext: KnockoutBindingContext
	): {
		[key: string]: string
	}
	}

	declare interface KnockoutComputedContext {
		getDependenciesCount(): number,
		isInitial: () => boolean,
		isSleeping: boolean
	}

	declare interface KnockoutComponents {
		register(
		componentName: string, config: KnockoutComponentTypes.Config | KnockoutComponentTypes.EmptyConfig
	): void,
		isRegistered(componentName: string): boolean,
		unregister(componentName: string): void,
		get(
		componentName: string, callback: (definition: KnockoutComponentTypes.Definition) => void
	): void,
		clearCachedDefinition(componentName: string): void,
		defaultLoader: KnockoutComponentTypes.Loader,
		loaders: KnockoutComponentTypes.Loader[],
		getComponentNameForNode(node: Node): string
	}

			declare module.exports: KnockoutStatic


}

declare module 'npm$namespace$KnockoutComponentTypes' {
		declare interface Config {
		viewModel?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule,
		template: string | Node[] | DocumentFragment | TemplateElement | AMDModule,
		synchronous?: boolean
	}

	declare interface ComponentConfig {
		viewModel?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule,
		template: any,
		createViewModel?: any
	}

	declare interface EmptyConfig {
		
	}

	declare interface AMDModule {
		require: string
	}

	declare interface ViewModelFunction {
		(params?: any): any
	}

	declare interface ViewModelSharedInstance {
		instance: any
	}

	declare interface ViewModelFactoryFunction {
		createViewModel: (params?: any, componentInfo?: ComponentInfo) => any
	}

	declare interface ComponentInfo {
		element: Node,
		templateNodes: Node[]
	}

	declare interface TemplateElement {
		element: string | Node
	}

	declare interface Loader {
		getConfig(componentName: string, callback: (result: ComponentConfig) => void): void,
		loadComponent(
		componentName: string, config: ComponentConfig, callback: (result: Definition) => void
	): void,
		loadTemplate(
		componentName: string, templateConfig: any, callback: (result: Node[]) => void
	): void,
		loadViewModel(
		componentName: string, viewModelConfig: any, callback: (result: any) => void
	): void,
		suppressLoaderExceptions?: boolean
	}

	declare interface Definition {
		template: Node[],
		createViewModel(params: any, options: {
		element: Node
	}): any
	}

			
}