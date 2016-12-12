

declare module 'ember' {
		declare interface Function {
		observes(...args: string[]): Function,
		observesBefore(...args: string[]): Function,
		on(...args: string[]): Function,
		property(...args: string[]): Function
	}

	declare interface String {
		camelize(): string,
		capitalize(): string,
		classify(): string,
		dasherize(): string,
		decamelize(): string,
		fmt(...args: string[]): string,
		htmlSafe(): typeof undefined,
		loc(...args: string[]): string,
		underscore(): string,
		w(): string[]
	}

	declare interface Array<T> {
		constructor(arr: any[]): void,
		activate(): void,
		addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): any[],
		addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): any[],
		any(callback: Function, target?: any): boolean,
		anyBy(key: string, value?: string): boolean,
		arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): any[],
		arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): any[],
		someProperty(key: string, value?: any): boolean,
		clear(): any[],
		compact(): any[],
		contains(obj: any): boolean,
		enumerableContentDidChange(start: number, removing: number, adding: number): any,
		enumerableContentDidChange(start: number, removing: Ember.Enumerable, adding: number): any,
		enumerableContentDidChange(start: number, removing: number, adding: Ember.Enumerable): any,
		enumerableContentDidChange(start: number, removing: Ember.Enumerable, adding: Ember.Enumerable): any,
		enumerableContentDidChange(removing: number, adding: number): any,
		enumerableContentDidChange(removing: Ember.Enumerable, adding: number): any,
		enumerableContentDidChange(removing: number, adding: Ember.Enumerable): any,
		enumerableContentDidChange(removing: Ember.Enumerable, adding: Ember.Enumerable): any,
		enumerableContentWillChange(removing: number, adding: number): any[],
		enumerableContentWillChange(removing: Ember.Enumerable, adding: number): any[],
		enumerableContentWillChange(removing: number, adding: Ember.Enumerable): any[],
		enumerableContentWillChange(removing: Ember.Enumerable, adding: Ember.Enumerable): any[],
		every(callback: Function, target?: any): boolean,
		everyBy(key: string, value?: string): boolean,
		everyProperty(key: string, value?: any): boolean,
		filter(callback: Function, target?: any): any[],
		filterBy(key: string, value?: string): any[],
		find(callback: Function, target?: any): any,
		findBy(key: string, value?: string): any,
		forEach(callback: Function, target?: any): any,
		getEach(key: string): any[],
		indexOf(object: any, startAt?: number): number,
		insertAt(idx: number, object: any): any[],
		invoke(methodName: string, ...args: any[]): any[],
		lastIndexOf(object: any, startAt?: number): number,
		map(callback: Function, target?: any): any[],
		mapBy(key: string): any[],
		nextObject(index: number, previousObject: any, context: any): any,
		objectAt(idx: number): any,
		objectsAt(...args: number[]): any[],
		popObject(): any,
		pushObject(obj: any): any,
		pushObjects(...args: any[]): any[],
		reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any,
		reject: ItemIndexEnumerableCallbackTarget,
		rejectBy(key: string, value?: string): any[],
		removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): any[],
		removeAt(start: number, len: number): any,
		removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): any[],
		replace(idx: number, amt: number, objects: any[]): void,
		reverseObjects(): any[],
		setEach(key: string, value?: any): any,
		setObjects(objects: any[]): any[],
		shiftObject(): any,
		slice(beginIndex?: number, endIndex?: number): any[],
		some(callback: Function, target?: any): boolean,
		toArray(): any[],
		uniq(): any[],
		unshiftObject(object: any): any,
		unshiftObjects(objects: any[]): any[],
		without(value: any): any[],
		[]: any[],
		@each: Ember.EachProxy,
		Boolean: boolean,
		firstObject: any,
		hasEnumerableObservers: boolean,
		lastObject: any,
		addObject(object: any): any,
		addObjects(objects: Ember.Enumerable): any[],
		removeObject(object: any): any,
		removeObjects(objects: Ember.Enumerable): any[],
		addObserver: ModifyObserver,
		beginPropertyChanges(): any[],
		cacheFor(keyName: string): any,
		decrementProperty(keyName: string, decrement?: number): number,
		endPropertyChanges(): any[],
		get(keyName: string): any,
		getProperties(...args: string[]): {
		
	},
		getProperties(keys: string[]): {
		
	},
		getWithDefault(keyName: string, defaultValue: any): any,
		hasObserverFor(key: string): boolean,
		incrementProperty(keyName: string, increment?: number): number,
		notifyPropertyChange(keyName: string): any[],
		propertyDidChange(keyName: string): any[],
		propertyWillChange(keyName: string): any[],
		removeObserver(key: string, target: any, method: string): Ember.Observable,
		removeObserver(key: string, target: any, method: Function): Ember.Observable,
		set(keyName: string, value: any): any[],
		setProperties(hash: {
		
	}): any[],
		toggleProperty(keyName: string): any,
		copy(deep: boolean): any[],
		frozenCopy(): any[],
		isAny(key: string, value?: string): boolean,
		isEvery(key: string, value?: string): boolean
	}

	declare interface ApplicationCreateArguments {
		customEvents?: {
		
	},
		rootElement?: string,
		LOG_TRANSITIONS?: boolean,
		LOG_TRANSITIONS_INTERNAL?: boolean
	}

	declare interface ApplicationInitializerArguments {
		name?: string,
		initialize?: ApplicationInitializerFunction
	}

	declare interface ApplicationInitializerFunction {
		(container: Ember.Container, application: Ember.Application): void
	}

	declare interface CoreObjectArguments {
		init?: Function,
		willDestroy?: Function,
		[propName: string]: any
	}

	declare interface EnumerableConfigurationOptions {
		willChange?: boolean,
		didChange?: boolean
	}

	declare interface ItemIndexEnumerableCallbackTarget {
		(callback: ItemIndexEnumerableCallback, target?: any): any[]
	}

	declare interface ItemIndexEnumerableCallback {
		(item: any, index: number, enumerable: Ember.Enumerable): void
	}

	declare interface ReduceCallback {
		(previousValue: any, item: any, index: number, enumerable: Ember.Enumerable): void
	}

	declare interface TransitionsHash {
		contexts: any[],
		exitStates: Ember.State[],
		enterStates: Ember.State[],
		resolveState: Ember.State
	}

	declare interface ActionsHash {
		willTransition?: Function,
		error?: Function
	}

	declare interface DisconnectOutletOptions {
		outlet?: string,
		parentView?: string
	}

	declare interface RenderOptions {
		into?: string,
		controller?: string,
		model?: any,
		outlet?: string,
		view?: string
	}

	declare interface ModifyObserver {
		(obj: any, path: string, target: any, method?: Function): void,
		(obj: any, path: string, target: any, method?: string): void,
		(obj: any, path: string, func: Function, method?: Function): void,
		(obj: any, path: string, func: Function, method?: string): void
	}

			
}

declare module 'npm$namespace$EmberStates' {
		declare interface Transition {
		targetName: string,
		urlMethod: string,
		intent: any,
		params: {
		
	} | any,
		pivotHandler: any,
		resolveIndex: number,
		handlerInfos: any,
		resolvedModels: {
		
	} | any,
		isActive: boolean,
		state: any,
		queryParams: {
		
	} | any,
		queryParamsOnly: boolean,
		isTransition: boolean,
		promise: Ember.RSVP.Promise,
		data: any,
		then(
		onFulfilled: Function, onRejected?: Function, label?: string
	): Ember.RSVP.Promise,
		catch(onRejection: Function, label?: string): Ember.RSVP.Promise,
		finally(callback: Function, label?: string): Ember.RSVP.Promise,
		abort(): EmberStates.Transition,
		normalize(manager: Ember.StateManager, contexts: any[]): void,
		retry(): EmberStates.Transition,
		method(method: string): EmberStates.Transition,
		trigger(ignoreFailure: boolean, eventName: string): void,
		trigger(eventName: string): void,
		followRedirects(): Ember.RSVP.Promise
	}

			
}

declare module 'Test' {
			declare function oninjectHelpers(callback: Function): void

	declare function promise(resolver: Function, label: string): Ember.Test.Promise

	declare function unregisterHelper(name: string): void

	declare function registerHelper(name: string, helperMethod: Function): void

	declare function registerAsyncHelper(name: string, helperMethod: Function): void

	declare function registerWaiter(callback: Function): void

	declare function registerWaiter(context: any, callback: Function): void

	declare function unregisterWaiter(callback: Function): void

	declare function unregisterWaiter(context: any, callback: Function): void

	declare function resolve(result: any): Ember.Test.Promise

	declare class Adapter  {
		asyncEnd(): void;
		asyncStart(): void;
		exception(error: string): void
	}

	declare class QUnitAdapter extends Adapter {
		
	}

	declare class Adapter extends Ember$Object {
		constructor(): this
	}

	declare class Promise extends undefined$Promise {
		constructor(): this
	}

	declare class Adapter extends undefined$Adapter {
		
	}

	declare class Promise extends undefined$Promise {
		
	}

	
}

declare module 'npm$namespace$Ember' {
			declare function A(arr?: any[]): NativeArray

	declare function DEFAULT_GETTER_FUNCTION(name: string): Function

	declare function MANDATORY_SETTER_FUNCTION(value: string): void

	declare function addListener(
		obj: any, eventName: string, target: any, method: Function, once?: boolean
	): void

	declare function addListener(obj: any, eventName: string, target: any, method: string, once?: boolean): void

	declare function addListener(
		obj: any, eventName: string, func: Function, method: Function, once?: boolean
	): void

	declare function addListener(
		obj: any, eventName: string, func: Function, method: string, once?: boolean
	): void

	declare function aliasMethod(methodName: string): Descriptor

	declare function assert(desc: string, test: boolean): void

	declare function beginPropertyChanges(): void

	declare function bind(obj: any, to: string, from: string): Binding

	declare function cacheFor(obj: any, key: string): any

	declare function canInvoke(obj: any, methodName: string): boolean

	declare function changeProperties(callback: Function, binding?: any): void

	declare function compare(v: any, w: any): number

	declare function controllerFor(
		container: Container, controllerName: string, lookupOptions?: {
		
	}
	): Controller

	declare function copy(obj: any, deep: boolean): any

	declare function create(arguments?: {
		
	}): CoreObject

	declare function debug(message: string): void

	declare function defineProperty(obj: any, keyName: string, desc: {
		
	}): void

	declare function deprecate(message: string, test?: boolean): void

	declare function deprecateFunc(message: string, func: Function): Function

	declare function destroy(obj: any): void

	declare function endPropertyChanges(): void

	declare function finishChains(obj: any): void

	declare function generateController(container: Container, controllerName: string, context: any): Controller

	declare function generateGuid(obj: any, prefix?: string): string

	declare function get(obj: any, keyName: string): any

	declare function getWithDefault(root: string, key: string, defaultValue: any): any

	declare function guidFor(obj: any): string

	declare function handleErrors(func: Function, context: any): any

	declare function hasListeners(context: any, name: string): boolean

	declare function hasOwnProperty(prop: string): boolean

	declare function immediateObserver(func: Function, ...propertyNames: any[]): Function

	declare function inspect(obj: any): string

	declare function instrument(name: string, payload: any, callback: Function, binding: any): void

	declare function isArray(obj: any): boolean

	declare function isEmpty(obj: any): boolean

	declare function isEqual(a: any, b: any): boolean

	declare function isGlobalPath(path: string): boolean

	declare function isNone(obj: any): boolean

	declare function isPrototypeOf(obj: {
		
	}): boolean

	declare function isWatching(obj: any, key: string): boolean

	declare function keys(obj: any): any[]

	declare function listenersDiff(obj: any, eventName: string, otherActions: any[]): any[]

	declare function listenersFor(obj: any, eventName: string): any[]

	declare function listenersUnion(obj: any, eventName: string, otherActions: any[]): void

	declare function makeArray(obj: any): any[]

	declare function merge(original: any, updates: any): any

	declare function meta(obj: any): {
		
	}

	declare function mixin(obj: any, ...args: any[]): any

	declare function observer(...args: any[]): Function

	declare function observersFor(obj: any, path: string): any[]

	declare function onLoad(name: string, callback: Function): void

	declare function overrideChains(obj: any, keyName: string, m: any): boolean

	declare function propertyDidChange(obj: any, keyName: string): void

	declare function propertyIsEnumerable(prop: string): boolean

	declare function propertyWillChange(obj: any, keyName: string): void

	declare function removeChainWatcher(obj: any, keyName: string, node: any): void

	declare function removeListener(obj: any, eventName: string, target: any, method: Function): void

	declare function removeListener(obj: any, eventName: string, target: any, method: string): void

	declare function removeListener(obj: any, eventName: string, func: Function, method: Function): void

	declare function removeListener(obj: any, eventName: string, func: Function, method: string): void

	declare function removeObserver(obj: any, path: string, target: any, method: Function): any

	declare function required(): Descriptor

	declare function rewatch(obj: any): void

	declare function runLoadHooks(name: string, object: any): void

	declare function sendEvent(obj: any, eventName: string, params?: any[], actions?: any[]): boolean

	declare function set(obj: any, keyName: string, value: any): any

	declare function setProperties(self: any, hash: {
		
	}): any

	declare function subscribe(pattern: string, object: any): void

	declare function toLocaleString(): string

	declare function toString(): string

	declare function tryCatchFinally(
		tryable: Function, catchable: Function, finalizer: Function, binding?: any
	): any

	declare function tryInvoke(obj: any, methodName: string, args?: any[]): any

	declare function trySet(obj: any, path: string, value: any): void

	declare function typeOf(item: any): string

	declare function unwatch(obj: any, keyPath: string): void

	declare function unwatchKey(obj: any, keyName: string): void

	declare function unwatchPath(obj: any, keyPath: string): void

	declare function valueOf(): {
		
	}

	declare function warn(message: string, test?: boolean): void

	declare function watch(obj: any, keyPath: string): void

	declare function watchKey(obj: any, keyName: string): void

	declare function watchPath(obj: any, keyPath: string): void

	declare function watchedEvents(obj: {
		
	}): any[]

	declare function wrap(func: Function, superFunc: Function): Function

	declare function getOwner(object: any): any

	declare function setOwner(object: any, owner: any): void

	declare function assign(original: any, ...sources: any[]): any

	declare class ActionHandlerMixin  {
		send(name: string, ...args: any[]): void;
		actions: ActionsHash
	}

	declare class Application extends Namespace {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		advanceReadiness(): void;
		deferReadiness(): void;
		inject(factoryNameOrType: string, property: string, injectionName: string): void;
		injectTestHelpers(): void;
		register(fullName: string, factory: Function, options?: {
		
	}): void;
		removeTestHelpers(): void;
		reset(): void;
		setupForTesting(): void;
		customEvents: {
		
	};
		eventDispatcher: EventDispatcher;
		resolver: DefaultResolver;
		rootElement: HTMLElement;
		ready: Function;
		Router: Router;
		registry: Registry
	}

	declare class Array extends Enumerable {
		addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): any[];
		addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		any(callback: Function, target?: any): boolean;
		anyBy(key: string, value?: string): boolean;
		arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): any[];
		arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): any[];
		someProperty(key: string, value?: string): boolean;
		compact(): any[];
		contains(obj: any): boolean;
		enumerableContentDidChange(start: number, removing: number, adding: number): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: number): any;
		enumerableContentDidChange(start: number, removing: number, adding: Enumerable): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable): any;
		enumerableContentDidChange(removing: number, adding: number): any;
		enumerableContentDidChange(removing: Enumerable, adding: number): any;
		enumerableContentDidChange(removing: number, adding: Enumerable): any;
		enumerableContentDidChange(removing: Enumerable, adding: Enumerable): any;
		enumerableContentWillChange(removing: number, adding: number): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
		enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
		every(callback: Function, target?: any): boolean;
		everyBy(key: string, value?: string): boolean;
		everyProperty(key: string, value?: string): boolean;
		filter(callback: Function, target: any): any[];
		filterBy(key: string, value?: string): any[];
		find(callback: Function, target?: any): any;
		findBy(key: string, value?: string): any;
		forEach(callback: Function, target?: any): any;
		getEach(key: string): any[];
		indexOf(object: any, startAt: number): number;
		invoke(methodName: string, ...args: any[]): any[];
		lastIndexOf(object: any, startAt: number): number;
		map: ItemIndexEnumerableCallbackTarget;
		mapBy(key: string): any[];
		nextObject(index: number, previousObject: any, context: any): any;
		objectAt(idx: number): any;
		objectsAt(...args: number[]): any[];
		reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
		reject: ItemIndexEnumerableCallbackTarget;
		rejectBy(key: string, value?: string): any[];
		removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): any[];
		removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		setEach(key: string, value?: any): any;
		slice(beginIndex?: number, endIndex?: number): any[];
		some(callback: Function, target?: any): boolean;
		toArray(): any[];
		uniq(): Enumerable;
		without(value: any): Enumerable;
		@each: EachProxy;
		Boolean: boolean;
		[]: any[];
		firstObject: any;
		hasEnumerableObservers: boolean;
		lastObject: any;
		length: number
	}

	declare class ArrayProxy extends Object, MutableArray {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): any[];
		addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		any(callback: Function, target?: any): boolean;
		anyBy(key: string, value?: string): boolean;
		arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): any[];
		arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): any[];
		someProperty(key: string, value?: string): boolean;
		clear(): any[];
		compact(): any[];
		contains(obj: any): boolean;
		enumerableContentDidChange(start: number, removing: number, adding: number): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: number): any;
		enumerableContentDidChange(start: number, removing: number, adding: Enumerable): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable): any;
		enumerableContentDidChange(removing: number, adding: number): any;
		enumerableContentDidChange(removing: Enumerable, adding: number): any;
		enumerableContentDidChange(removing: number, adding: Enumerable): any;
		enumerableContentDidChange(removing: Enumerable, adding: Enumerable): any;
		enumerableContentWillChange(removing: number, adding: number): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
		enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
		every(callback: Function, target?: any): boolean;
		everyBy(key: string, value?: string): boolean;
		everyProperty(key: string, value?: string): boolean;
		filter(callback: Function, target: any): any[];
		filterBy(key: string, value?: string): any[];
		find(callback: Function, target: any): any;
		findBy(key: string, value?: string): any;
		forEach(callback: Function, target?: any): any;
		getEach(key: string): any[];
		indexOf(object: any, startAt: number): number;
		insertAt(idx: number, object: any): any[];
		invoke(methodName: string, ...args: any[]): any[];
		lastIndexOf(object: any, startAt: number): number;
		map: ItemIndexEnumerableCallbackTarget;
		mapBy(key: string): any[];
		nextObject(index: number, previousObject: any, context: any): any;
		objectAt(idx: number): any;
		objectAtContent(idx: number): any;
		objectsAt(...args: number[]): any[];
		popObject(): any;
		pushObject(obj: any): any;
		pushObjects(...args: any[]): any[];
		reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
		reject: ItemIndexEnumerableCallbackTarget;
		rejectBy(key: string, value?: string): any[];
		removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): any[];
		removeAt(start: number, len: number): any;
		removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		replace(idx: number, amt: number, objects: any[]): any;
		replaceContent(idx: number, amt: number, objects: any[]): void;
		reverseObjects(): any[];
		setEach(key: string, value?: any): any;
		setObjects(objects: any[]): any[];
		shiftObject(): any;
		slice(beginIndex?: number, endIndex?: number): any[];
		some(callback: Function, target?: any): boolean;
		toArray(): any[];
		uniq(): Enumerable;
		unshiftObject(object: any): any;
		unshiftObjects(objects: any[]): any[];
		without(value: any): Enumerable;
		[]: any[];
		@each: EachProxy;
		Boolean: boolean;
		firstObject: any;
		hasEnumerableObservers: boolean;
		lastObject: any;
		length: number;
		addObject(object: any): any;
		addObjects(objects: Enumerable): MutableEnumberable;
		removeObject(object: any): any;
		removeObjects(objects: Enumerable): MutableEnumberable
	}

	declare class Binding  {
		constructor(toPath: string, fromPath: string): this;
		connect(obj: any): Binding;
		copy(): Binding;
		disconnect(): Binding;
		from(path: string): Binding;
		to(path: string): Binding;
		to(pathTuple: any[]): Binding;
		toString(): string
	}

	declare class Button extends Component, TargetActionSupport {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		triggerAction(opts: {
		
	}): boolean
	}

	declare class Checkbox extends Component {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean
	}

	declare class Comparable  {
		compare(a: any, b: any): number
	}

	declare class Component  {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		sendAction(action: string, context: any): void;
		targetObject: Controller
	}

	declare class ComputedProperty  {
		get(keyName: string): any;
		meta(meta: {
		
	}): ComputedProperty;
		property(...args: string[]): ComputedProperty;
		readOnly(): ComputedProperty;
		set(keyName: string, newValue: any, oldValue: string): any;
		volatile(): ComputedProperty
	}

	declare class Container  {
		constructor(parent: Container): this;
		parent: Container;
		children: any[];
		owner: any;
		ownerInjection(): any;
		resolver: Function;
		registry: Registry;
		cache: {
		
	};
		typeInjections: {
		
	};
		injections: {
		
	};
		child(): Container;
		set(object: {
		
	}, key: string, value: any): void;
		describe(fullName: string): string;
		makeToString(factory: any, fullName: string): Function;
		lookup(fullName: string, options?: {
		
	}): any;
		lookupFactory(fullName: string, options?: {
		
	}): any;
		destroy(): void;
		reset(): void
	}

	declare class Controller extends Object, ControllerMixin {
		replaceRoute(name: string, ...args: any[]): void;
		transitionToRoute(name: string, ...args: any[]): void;
		controllers: {
		
	};
		model: any;
		needs: string[];
		queryParams: any;
		target: any;
		send(name: string, ...args: any[]): void;
		actions: ActionsHash
	}

	declare class ControllerMixin extends ActionHandlerMixin {
		replaceRoute(name: string, ...args: any[]): void;
		transitionToRoute(name: string, ...args: any[]): void;
		controllers: {
		
	};
		model: any;
		needs: string[];
		queryParams: any;
		target: any
	}

	declare class Copyable  {
		copy(deep: boolean): Copyable;
		frozenCopy(): Copyable
	}

	declare class CoreObject  {
		init(): void;
		concatenatedProperties: any[];
		isDestroyed: boolean;
		isDestroying: boolean;
		destroy(): CoreObject;
		willDestroy(): void;
		toString(): string;
		isClass: boolean;
		isMethod: boolean;
		extend<T>(args?: CoreObjectArguments): T;
		extend<T>(mixins?: Mixin, args?: CoreObjectArguments): T;
		extend<T>(args?: CoreObjectArguments): T;
		extend<T>(mixins?: Mixin, args?: CoreObjectArguments): T;
		createWithMixins<T>(args?: {
		
	}): T;
		create<T>(args?: {
		
	}): T;
		reopen<T>(args?: {
		
	}): T;
		reopenClass<T>(args?: {
		
	}): T;
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		metaForProperty(key: string): {
		
	};
		eachComputedProperty(callback: Function, binding: {
		
	}): void
	}

	declare class DAG  {
		add(name: string): any;
		map(name: string, value: any): void;
		addEdge(fromName: string, toName: string): void;
		topsort(fn: Function): void;
		addEdges(name: string, value: any, before: any, after: any): void;
		names: any[];
		vertices: {
		
	}
	}

	declare class DefaultResolver  {
		resolve(fullName: string): {
		
	};
		namespace: Application
	}

	declare class Descriptor  {
		
	}

	declare class EachProxy extends Object {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		unknownProperty(keyName: string, value: any): any[]
	}

	declare class Enumerable  {
		addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		any(callback: Function, target?: any): boolean;
		anyBy(key: string, value?: string): boolean;
		someProperty(key: string, value?: string): boolean;
		compact(): any[];
		contains(obj: any): boolean;
		enumerableContentDidChange(start: number, removing: number, adding: number): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: number): any;
		enumerableContentDidChange(start: number, removing: number, adding: Enumerable): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable): any;
		enumerableContentDidChange(removing: number, adding: number): any;
		enumerableContentDidChange(removing: Enumerable, adding: number): any;
		enumerableContentDidChange(removing: number, adding: Enumerable): any;
		enumerableContentDidChange(removing: Enumerable, adding: Enumerable): any;
		enumerableContentWillChange(removing: number, adding: number): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
		enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
		every(callback: Function, target?: any): boolean;
		everyBy(key: string, value?: string): boolean;
		everyProperty(key: string, value?: string): boolean;
		filter(callback: Function, target: any): any[];
		filterBy(key: string, value?: string): any[];
		find(callback: Function, target: any): any;
		findBy(key: string, value?: string): any;
		forEach(callback: Function, target?: any): any;
		getEach(key: string): any[];
		invoke(methodName: string, ...args: any[]): any[];
		map: ItemIndexEnumerableCallbackTarget;
		mapBy(key: string): any[];
		nextObject(index: number, previousObject: any, context: any): any;
		reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
		reject: ItemIndexEnumerableCallbackTarget;
		rejectBy(key: string, value?: string): any[];
		removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		setEach(key: string, value?: any): any;
		some(callback: Function, target?: any): boolean;
		toArray(): any[];
		uniq(): Enumerable;
		without(value: any): Enumerable;
		[]: any[];
		firstObject: any;
		hasEnumerableObservers: boolean;
		lastObject: any
	}

	declare class EventDispatcher extends Object {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		events: {
		
	}
	}

	declare class Evented  {
		has(name: string): boolean;
		off(name: string, target: any, method: Function): Evented;
		on(name: string, target: any, method: Function): Evented;
		one(name: string, target: any, method: Function): Evented;
		trigger(name: string, ...args: string[]): void
	}

	declare class Freezable  {
		freeze(): Freezable;
		isFrozen: boolean
	}

	declare class HashLocation extends Object {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean
	}

	declare class HistoryLocation extends Object {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		rootURL: string
	}

	declare class Instrumentation  {
		getProperties(obj: any, list: any[]): {
		
	};
		getProperties(obj: any, ...args: string[]): {
		
	};
		instrument(name: string, payload: any, callback: Function, binding: any): void;
		reset(): void;
		subscribe(pattern: string, object: any): void;
		unsubscribe(subscriber: any): void
	}

	declare class Location  {
		create(options?: {
		
	}): any;
		registerImplementation(name: string, implementation: any): void
	}

	declare class Map  {
		copy(): Map;
		create(): Map;
		forEach(callback: Function, self: any): void;
		get(key: any): any;
		has(key: any): boolean;
		set(key: any, value: any): void;
		length: number
	}

	declare class MapWithDefault extends Map {
		copy(): MapWithDefault;
		create(): MapWithDefault
	}

	declare class Mixin  {
		apply(obj: any): any;
		create<T>(...args: CoreObjectArguments[]): T;
		detect(obj: any): boolean;
		reopen<T>(args?: {
		
	}): T
	}

	declare class MutableArray extends Array {
		addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): any[];
		addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		any(callback: Function, target?: any): boolean;
		anyBy(key: string, value?: string): boolean;
		arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): any[];
		arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): any[];
		someProperty(key: string, value?: string): boolean;
		clear(): any[];
		compact(): any[];
		contains(obj: any): boolean;
		enumerableContentDidChange(start: number, removing: number, adding: number): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: number): any;
		enumerableContentDidChange(start: number, removing: number, adding: Enumerable): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable): any;
		enumerableContentDidChange(removing: number, adding: number): any;
		enumerableContentDidChange(removing: Enumerable, adding: number): any;
		enumerableContentDidChange(removing: number, adding: Enumerable): any;
		enumerableContentDidChange(removing: Enumerable, adding: Enumerable): any;
		enumerableContentWillChange(removing: number, adding: number): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
		enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
		every(callback: Function, target?: any): boolean;
		everyBy(key: string, value?: string): boolean;
		everyProperty(key: string, value?: string): boolean;
		filter(callback: Function, target: any): any[];
		filterBy(key: string, value?: string): any[];
		find(callback: Function, target: any): any;
		findBy(key: string, value?: string): any;
		forEach(callback: Function, target?: any): any;
		getEach(key: string): any[];
		indexOf(object: any, startAt: number): number;
		insertAt(idx: number, object: any): any[];
		invoke(methodName: string, ...args: any[]): any[];
		lastIndexOf(object: any, startAt: number): number;
		map: ItemIndexEnumerableCallbackTarget;
		mapBy(key: string): any[];
		nextObject(index: number, previousObject: any, context: any): any;
		objectAt(idx: number): any;
		objectsAt(...args: number[]): any[];
		popObject(): any;
		pushObject(obj: any): any;
		pushObjects(...args: any[]): any[];
		reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
		reject: ItemIndexEnumerableCallbackTarget;
		rejectBy(key: string, value?: string): any[];
		removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): any[];
		removeAt(start: number, len: number): any;
		removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		replace(idx: number, amt: number, objects: any[]): any;
		reverseObjects(): any[];
		setEach(key: string, value?: any): any;
		setObjects(objects: any[]): any[];
		shiftObject(): any;
		slice(beginIndex?: number, endIndex?: number): any[];
		some(callback: Function, target?: any): boolean;
		toArray(): any[];
		uniq(): Enumerable;
		unshiftObject(object: any): any;
		unshiftObjects(objects: any[]): any[];
		without(value: any): Enumerable;
		[]: any[];
		@each: EachProxy;
		Boolean: boolean;
		firstObject: any;
		hasEnumerableObservers: boolean;
		lastObject: any;
		length: number;
		addObject(object: any): any;
		addObjects(objects: Enumerable): MutableEnumberable;
		removeObject(object: any): any;
		removeObjects(objects: Enumerable): MutableEnumberable
	}

	declare class MutableEnumberable extends Enumerable {
		addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		addObject(object: any): any;
		addObjects(objects: Enumerable): MutableEnumberable;
		any(callback: Function, target?: any): boolean;
		anyBy(key: string, value?: string): boolean;
		someProperty(key: string, value?: string): boolean;
		compact(): any[];
		contains(obj: any): boolean;
		enumerableContentDidChange(start: number, removing: number, adding: number): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: number): any;
		enumerableContentDidChange(start: number, removing: number, adding: Enumerable): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable): any;
		enumerableContentDidChange(removing: number, adding: number): any;
		enumerableContentDidChange(removing: Enumerable, adding: number): any;
		enumerableContentDidChange(removing: number, adding: Enumerable): any;
		enumerableContentDidChange(removing: Enumerable, adding: Enumerable): any;
		enumerableContentWillChange(removing: number, adding: number): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
		enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
		every(callback: Function, target?: any): boolean;
		everyBy(key: string, value?: string): boolean;
		everyProperty(key: string, value?: string): boolean;
		filter(callback: Function, target: any): any[];
		filterBy(key: string, value?: string): any[];
		find(callback: Function, target: any): any;
		findBy(key: string, value?: string): any;
		forEach(callback: Function, target?: any): any;
		getEach(key: string): any[];
		invoke(methodName: string, ...args: any[]): any[];
		map: ItemIndexEnumerableCallbackTarget;
		mapBy(key: string): any[];
		nextObject(index: number, previousObject: any, context: any): any;
		reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
		reject: ItemIndexEnumerableCallbackTarget;
		rejectBy(key: string, value?: string): any[];
		removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		removeObject(object: any): any;
		removeObjects(objects: Enumerable): MutableEnumberable;
		setEach(key: string, value?: any): any;
		some(callback: Function, target?: any): boolean;
		toArray(): any[];
		uniq(): Enumerable;
		without(value: any): Enumerable;
		[]: any[];
		firstObject: any;
		hasEnumerableObservers: boolean;
		lastObject: any
	}

	declare class Namespace extends Object {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean
	}

	declare class NativeArray extends MutableArray {
		constructor(arr: any[]): this;
		activate(): void;
		addArrayObserver(target: any, opts?: EnumerableConfigurationOptions): any[];
		addEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		any(callback: Function, target?: any): boolean;
		anyBy(key: string, value?: string): boolean;
		arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): any[];
		arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): any[];
		someProperty(key: string, value?: any): boolean;
		clear(): any[];
		compact(): any[];
		contains(obj: any): boolean;
		enumerableContentDidChange(start: number, removing: number, adding: number): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: number): any;
		enumerableContentDidChange(start: number, removing: number, adding: Enumerable): any;
		enumerableContentDidChange(start: number, removing: Enumerable, adding: Enumerable): any;
		enumerableContentDidChange(removing: number, adding: number): any;
		enumerableContentDidChange(removing: Enumerable, adding: number): any;
		enumerableContentDidChange(removing: number, adding: Enumerable): any;
		enumerableContentDidChange(removing: Enumerable, adding: Enumerable): any;
		enumerableContentWillChange(removing: number, adding: number): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: number): Enumerable;
		enumerableContentWillChange(removing: number, adding: Enumerable): Enumerable;
		enumerableContentWillChange(removing: Enumerable, adding: Enumerable): Enumerable;
		every(callback: Function, target?: any): boolean;
		everyBy(key: string, value?: string): boolean;
		everyProperty(key: string, value?: any): boolean;
		filter(callback: Function, target: any): any[];
		filterBy(key: string, value?: string): any[];
		find(callback: Function, target: any): any;
		findBy(key: string, value?: string): any;
		forEach(callback: Function, target?: any): any;
		getEach(key: string): any[];
		indexOf(object: any, startAt: number): number;
		insertAt(idx: number, object: any): any[];
		invoke(methodName: string, ...args: any[]): any[];
		lastIndexOf(object: any, startAt: number): number;
		map: ItemIndexEnumerableCallbackTarget;
		mapBy(key: string): any[];
		nextObject(index: number, previousObject: any, context: any): any;
		objectAt(idx: number): any;
		objectsAt(...args: number[]): any[];
		popObject(): any;
		pushObject(obj: any): any;
		pushObjects(...args: any[]): any[];
		reduce(callback: ReduceCallback, initialValue: any, reducerProperty: string): any;
		reject: ItemIndexEnumerableCallbackTarget;
		rejectBy(key: string, value?: string): any[];
		removeArrayObserver(target: any, opts: EnumerableConfigurationOptions): any[];
		removeAt(start: number, len: number): any;
		removeEnumerableObserver(target: any, opts: EnumerableConfigurationOptions): Enumerable;
		replace(idx: number, amt: number, objects: any[]): any;
		reverseObjects(): any[];
		setEach(key: string, value?: any): any;
		setObjects(objects: any[]): any[];
		shiftObject(): any;
		slice(beginIndex?: number, endIndex?: number): any[];
		some(callback: Function, target?: any): boolean;
		toArray(): any[];
		uniq(): Enumerable;
		unshiftObject(object: any): any;
		unshiftObjects(objects: any[]): any[];
		without(value: any): Enumerable;
		[]: any[];
		@each: EachProxy;
		Boolean: boolean;
		firstObject: any;
		hasEnumerableObservers: boolean;
		lastObject: any;
		length: number;
		addObject(object: any): any;
		addObjects(objects: Enumerable): MutableEnumberable;
		removeObject(object: any): any;
		removeObjects(objects: Enumerable): MutableEnumberable;
		addObserver: ModifyObserver;
		beginPropertyChanges(): Observable;
		cacheFor(keyName: string): any;
		decrementProperty(keyName: string, decrement?: number): number;
		endPropertyChanges(): Observable;
		get(keyName: string): any;
		getProperties(...args: string[]): {
		
	};
		getProperties(keys: string[]): {
		
	};
		getWithDefault(keyName: string, defaultValue: any): any;
		hasObserverFor(key: string): boolean;
		incrementProperty(keyName: string, increment?: number): number;
		notifyPropertyChange(keyName: string): Observable;
		propertyDidChange(keyName: string): Observable;
		propertyWillChange(keyName: string): Observable;
		removeObserver(key: string, target: any, method: string): void;
		removeObserver(key: string, target: any, method: Function): void;
		set(keyName: string, value: any): Observable;
		setProperties(hash: {
		
	}): Observable;
		toggleProperty(keyName: string): any;
		copy(deep: boolean): Copyable;
		frozenCopy(): Copyable
	}

	declare class NoneLocation extends Object {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean
	}

	declare class Object extends CoreObject, Observable {
		addObserver: ModifyObserver;
		beginPropertyChanges(): Observable;
		cacheFor(keyName: string): any;
		decrementProperty(keyName: string, decrement?: number): number;
		endPropertyChanges(): Observable;
		get(keyName: string): any;
		get<T>(keyName: string): T;
		getProperties(...args: string[]): {
		
	};
		getProperties(keys: string[]): {
		
	};
		getWithDefault(keyName: string, defaultValue: any): any;
		hasObserverFor(key: string): boolean;
		incrementProperty(keyName: string, increment?: number): number;
		notifyPropertyChange(keyName: string): Observable;
		propertyDidChange(keyName: string): Observable;
		propertyWillChange(keyName: string): Observable;
		removeObserver(key: string, target: any, method: string): Observable;
		removeObserver(key: string, target: any, method: Function): Observable;
		set(keyName: string, value: any): Observable;
		setProperties(hash: {
		
	}): Observable;
		toggleProperty(keyName: string): any
	}

	declare class ObjectProxy extends Object {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		content: Object
	}

	declare class Observable  {
		addObserver: ModifyObserver;
		beginPropertyChanges(): Observable;
		cacheFor(keyName: string): any;
		decrementProperty(keyName: string, decrement?: number): number;
		endPropertyChanges(): Observable;
		get(keyName: string): any;
		getProperties(...args: string[]): {
		
	};
		getProperties(keys: string[]): {
		
	};
		getWithDefault(keyName: string, defaultValue: any): any;
		hasObserverFor(key: string): boolean;
		incrementProperty(keyName: string, increment?: number): number;
		notifyPropertyChange(keyName: string): Observable;
		propertyDidChange(keyName: string): Observable;
		propertyWillChange(keyName: string): Observable;
		removeObserver(key: string, target: {
		
	}, method: string): void;
		removeObserver(key: string, target: {
		
	}, method: Function): void;
		set(keyName: string, value: any): Observable;
		setProperties(hash: {
		
	}): Observable;
		toggleProperty(keyName: string): boolean
	}

	declare class OrderedSet  {
		add(obj: any): void;
		clear(): void;
		copy(): OrderedSet;
		create(): OrderedSet;
		forEach(fn: Function, self: any): void;
		has(obj: any): boolean;
		isEmpty(): boolean;
		toArray(): any[]
	}

	declare class Registry  {
		constructor(options: any): this;
		set: typeof undefined
	}

	declare class Route extends Object, ActionHandlerMixin {
		isClass: boolean;
		isMethod: boolean;
		activate: Function;
		afterModel(resolvedModel: any, transition: EmberStates.Transition): RSVP.Promise;
		beforeModel(transition: EmberStates.Transition): RSVP.Promise;
		controller: Controller;
		controllerFor(name: string): Controller;
		controllerName: string;
		deactivate: Function;
		deserializeQueryParam(value: any, urlKey: string, defaultValueType: string): any;
		disconnectOutlet(options: DisconnectOutletOptions | string): void;
		findModel(type: string, value: any): any;
		generateController(name: string, model: {
		
	}): Controller;
		intermediateTransitionTo(name: string, ...models: any[]): void;
		model(params: {
		
	}, transition: EmberStates.Transition): any | RSVP.Promise;
		modelFor(name: string): {
		
	};
		paramsFor(name: string): any;
		queryParams: {
		
	};
		redirect(): EmberStates.Transition;
		refresh(): EmberStates.Transition;
		render(name: string, options?: RenderOptions): void;
		renderTemplate(controller: Controller, model: {
		
	}): void;
		replaceWith(name: string, ...models: any[]): void;
		resetController(controller: Ember.Controller, isExiting: boolean, transition: any): void;
		serialize(model: {
		
	}, params: string[]): string;
		serializeQueryParam(value: any, urlKey: string, defaultValueType: string): string;
		serializeQueryParamKey(controllerPropertyName: string): string;
		setupController(controller: Controller, model: {
		
	}): void;
		store(store: any): any;
		templateName: string;
		transitionTo(name: string, ...object: any[]): EmberStates.Transition;
		viewName: string;
		send(name: string, ...args: any[]): void;
		actions: ActionsHash;
		on(name: string, target: any, method: Function): Evented;
		one(name: string, target: any, method: Function): Evented;
		trigger(name: string, ...args: string[]): void;
		off(name: string, target: any, method: Function): Evented;
		has(name: string): boolean
	}

	declare class Router extends Object {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		map(callback: Function): Router
	}

	declare class RouterDSL  {
		resource(name: string, options?: {
		
	}, callback?: Function): void;
		resource(name: string, callback: Function): void;
		route(name: string, options?: {
		
	}): void;
		explicitIndex: boolean;
		router: Router;
		options: any
	}

	declare class State extends Object, Evented {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		has(name: string): boolean;
		off(name: string, target: any, method: Function): State;
		on(name: string, target: any, method: Function): State;
		one(name: string, target: any, method: Function): State;
		trigger(name: string, ...args: string[]): void;
		getPathsCache(stateManager: {
		
	}, path: string): {
		
	};
		init(): void;
		setPathsCache(stateManager: {
		
	}, path: string, transitions: any): void;
		transitionTo(target: string): void;
		hasContext: boolean;
		isLeaf: boolean;
		name: string;
		parentState: State;
		path: string;
		enter: Function;
		exit: Function;
		setup: Function
	}

	declare class StateManager extends State {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		contextFreeTransition(currentState: State, path: string): TransitionsHash;
		enterState(transition: TransitionsHash): void;
		getState(name: string): State;
		getStateByPath(root: State, path: string): State;
		getStateMeta(state: State, key: string): any;
		getStatesInPath(root: State, path: string): State[];
		goToState(path: string, context: any): void;
		send(event: string): void;
		setStateMeta(state: State, key: string, value: any): any;
		stateMetaFor(state: State): {
		
	};
		transitionTo(path: string, context: any): void;
		triggerSetupContext(transitions: TransitionsHash): void;
		unhandledEvent(manager: StateManager, event: string): any;
		currentPath: string;
		currentState: State;
		errorOnUnhandledEvents: boolean;
		transitionEvent: string
	}

	declare class TargetActionSupport  {
		triggerAction(opts: {
		
	}): boolean
	}

	declare class TextArea extends Component, TextSupport {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		cancel(event: Function): void;
		focusIn(event: Function): void;
		focusOut(event: Function): void;
		insertNewLine(event: Function): void;
		keyPress(event: Function): void;
		action: string;
		bubbles: boolean;
		onEvent: string
	}

	declare class TextField extends Component, TextSupport {
		detect(obj: any): boolean;
		detectInstance(obj: any): boolean;
		eachComputedProperty(callback: Function, binding: {
		
	}): void;
		metaForProperty(key: string): {
		
	};
		isClass: boolean;
		isMethod: boolean;
		cancel(event: Function): void;
		focusIn(event: Function): void;
		focusOut(event: Function): void;
		insertNewLine(event: Function): void;
		keyPress(event: Function): void;
		action: string;
		bubbles: boolean;
		onEvent: string;
		pattern: string;
		size: string;
		type: string;
		value: string
	}

	declare class TextSupport  {
		cancel(event: Function): void;
		focusIn(event: Function): void;
		focusOut(event: Function): void;
		insertNewLine(event: Function): void;
		keyPress(event: Function): void;
		action: string;
		bubbles: boolean;
		onEvent: string
	}

	declare class ViewTargetActionSupport extends Mixin {
		target: any;
		actionContext: any
	}

	
}

declare module 'Handlebars' {
			declare function compile(string: string): Function

	declare function precompile(string: string, options: any): void

	declare function registerPartial(name: string, str: any): void

	declare function K(): any

	declare function createFrame(objec: any): any

	declare function Exception(message: string): void

	declare function parse(string: string): any

	declare function print(ast: any): void

	declare function log(level: string, str: string): void

	declare function compile(environment: any, options?: any, context?: any, asObject?: any): any

	declare class Compiler  {
		
	}

	declare class JavaScriptCompiler  {
		
	}

	declare class SafeString  {
		constructor(str: string): this;
		toString(): string
	}

	declare class Compiler extends undefined$Compiler {
		
	}

	declare class JavaScriptCompiler extends undefined$JavaScriptCompiler {
		
	}

	declare class SafeString extends undefined$SafeString {
		
	}

	
}

declare module 'RSVP' {
		declare interface PromiseResolve {
		(value?: any): void
	}

	declare interface PromiseReject {
		(reason?: any): void
	}

	declare interface PromiseResolverFunction {
		(resolve: PromiseResolve, reject: PromiseReject): void
	}

	declare interface PromiseResolve {
		
	}

	declare interface PromiseReject {
		
	}

	declare interface PromiseResolverFunction {
		
	}

		declare class Promise  {
		constructor(resolver: PromiseResolverFunction, label?: string): this;
		then(onFulfilled?: Function, onRejected?: Function): Promise;
		catch(onRejection: Function, label?: string): Promise;
		finally(callback: Function, label?: string): Promise
	}

	declare class Promise extends undefined$Promise {
		
	}

	
}

declare module 'String' {
			declare function camelize(str: string): string

	declare function capitalize(str: string): string

	declare function classify(str: string): string

	declare function dasherize(str: string): string

	declare function decamelize(str: string): string

	declare function fmt(...args: string[]): string

	declare function htmlSafe(str: string): void

	declare function loc(...args: string[]): string

	declare function underscore(str: string): string

	declare function w(str: string): string[]

		
}

declare module 'npm$namespace$Em' {
				declare class ActionHandlerMixin extends Ember$ActionHandlerMixin {
		
	}

	declare class Application extends Ember$Application {
		
	}

	declare class Array extends Ember$Array {
		
	}

	declare class ArrayProxy extends Ember$ArrayProxy {
		
	}

	declare class Binding extends Ember$Binding {
		
	}

	declare class Button extends Ember$Button {
		
	}

	declare class Checkbox extends Ember$Checkbox {
		
	}

	declare class Comparable extends Ember$Comparable {
		
	}

	declare class Component extends Ember$Component {
		
	}

	declare class ComputedProperty extends Ember$ComputedProperty {
		
	}

	declare class Container extends Ember$Container {
		
	}

	declare class Controller extends Ember$Controller {
		
	}

	declare class ControllerMixin extends Ember$ControllerMixin {
		
	}

	declare class Copyable extends Ember$Copyable {
		
	}

	declare class CoreObject extends Ember$CoreObject {
		
	}

	declare class DAG extends Ember$DAG {
		
	}

	declare class DefaultResolver extends Ember$DefaultResolver {
		
	}

	declare class Descriptor extends Ember$Descriptor {
		
	}

	declare class EachProxy extends Ember$EachProxy {
		
	}

	declare class Enumerable extends Ember$Enumerable {
		
	}

	declare class EventDispatcher extends Ember$EventDispatcher {
		
	}

	declare class Evented extends Ember$Evented {
		
	}

	declare class Freezable extends Ember$Freezable {
		
	}

	declare class HashLocation extends Ember$HashLocation {
		
	}

	declare class HistoryLocation extends Ember$HistoryLocation {
		
	}

	declare class Instrumentation extends Ember$Instrumentation {
		
	}

	declare class Location extends Ember$Location {
		
	}

	declare class Map extends Ember$Map {
		
	}

	declare class MapWithDefault extends Ember$MapWithDefault {
		
	}

	declare class Mixin extends Ember$Mixin {
		
	}

	declare class MutableArray extends Ember$MutableArray {
		
	}

	declare class MutableEnumberable extends Ember$MutableEnumberable {
		
	}

	declare class Namespace extends Ember$Namespace {
		
	}

	declare class NativeArray extends Ember$NativeArray {
		
	}

	declare class NoneLocation extends Ember$NoneLocation {
		
	}

	declare class Object extends Ember$Object {
		
	}

	declare class ObjectProxy extends Ember$ObjectProxy {
		
	}

	declare class Observable extends Ember$Observable {
		
	}

	declare class OrderedSet extends Ember$OrderedSet {
		
	}

	declare class Registry extends Ember$Registry {
		
	}

	declare class Route extends Ember$Route {
		
	}

	declare class Router extends Ember$Router {
		
	}

	declare class RouterDSL extends Ember$RouterDSL {
		
	}

	declare class State extends Ember$State {
		
	}

	declare class StateManager extends Ember$StateManager {
		
	}

	declare class TargetActionSupport extends Ember$TargetActionSupport {
		
	}

	declare class TextArea extends Ember$TextArea {
		
	}

	declare class TextField extends Ember$TextField {
		
	}

	declare class TextSupport extends Ember$TextSupport {
		
	}

	declare class ViewTargetActionSupport extends Ember$ViewTargetActionSupport {
		
	}

	
}

declare module 'Ember' {
					declare module.exports: undefined


}