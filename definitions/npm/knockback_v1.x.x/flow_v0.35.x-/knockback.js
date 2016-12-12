import type { Static } from 'npm$namespace$Knockback'

declare module 'knockback' {
					
}

declare module 'npm$namespace$Knockback' {
		declare interface EventWatcherOptions {
		emitter: (newEmitter: <<UNKNOWN PARAM FORMAT>>) => void,
		update: (newValue: <<UNKNOWN PARAM FORMAT>>) => void,
		event_selector: string,
		key?: string
	}

	declare interface FactoryOptions {
		factories: any
	}

	declare interface StoreOptions {
		creator: any,
		path: string,
		store: Store,
		factory: Factory
	}

	declare interface LocalizedObservable {
		constructor(value: any, options: any, vm: any),
		destroy(),
		resetToCurrent(),
		observedValue(value: any)
	}

	declare interface OptionsBase {
		path?: string,
		store?: Store,
		factory?: Factory,
		options?: any
	}

	declare interface ViewModelOptions {
		internals?: string[],
		requires?: string[],
		keys?: string[],
		if(objOrArray: any),
		path?: string,
		factories?: any
	}

	declare interface CollectionOptions {
		models_only?: boolean,
		view_model?: any,
		create?: any,
		factories?: any,
		comparator?: any,
		sort_attribute?: string,
		filters?: any
	}

	declare interface CollectionObservable {
		collection(colleciton: Backbone.Collection<Backbone.Model>),
		collection(): Backbone.Collection<Backbone.Model>,
		destroy(),
		shareOptions(): CollectionOptions,
		filters(id: any): Backbone.Model,
		filters(ids: any[]): CollectionObservable,
		filters(iterator: (element: Backbone.Model) => boolean): CollectionObservable,
		comparator(comparatorFunction: any),
		sortAttribute(attr: string),
		viewModelByModel(model: Backbone.Model): ViewModel,
		hasViewModels(): boolean
	}

	declare interface Utils {
		wrappedObservable(obj: any): any,
		wrappedObservable(obj: any, value: any),
		wrappedObject(obj: any): any,
		wrappedObject(obj: any, value: any),
		wrappedModel(obj: any): any,
		wrappedModel(obj: any, value: any),
		wrappedStore(obj: any): any,
		wrappedStore(obj: any, value: any),
		wrappedFactory(obj: any): any,
		wrappedFactory(obj: any, value: any),
		wrappedEventWatcher(obj: any): any,
		wrappedEventWatcher(obj: any, value: any),
		wrappedDestroy(obj: any),
		valueType(observable: KnockoutObservable<any>): any,
		pathJoin(path1: string, path2: string): string,
		optionsPathJoin(options: any, path: string): any,
		inferCreator(value: any, factory: Factory, path: string, owner: any, key: string),
		createFromDefaultCreator(obj: any, options?: any),
		hasModelSignature(obj: any): boolean,
		hasCollectionSignature(obj: any): boolean
	}

	declare interface Static {
		ViewModel: <<UNKNOWN PARAM FORMAT>>,
		CollectionObservable: <<UNKNOWN PARAM FORMAT>>,
		collectionObservable(
		model?: Backbone.Collection<Backbone.Model>, options?: CollectionOptions
	): CollectionObservable,
		observable(
		model: Backbone.Model, options: IObservableOptions, vm?: ViewModel
	): KnockoutObservable<any>,
		observable(
		model: Backbone.Model, options_attributeName: string, vm?: ViewModel
	): KnockoutObservable<any>,
		viewModel(model?: Backbone.Model, options?: any): KnockoutObservable<any>,
		defaultObservable(
		targetObservable: KnockoutObservable<any>, defaultValue: any
	): KnockoutObservable<any>,
		formattedObservable(format: string, args: any[]): KnockoutObservable<any>,
		formattedObservable(format: KnockoutObservable<any>, args: any[]): KnockoutObservable<any>,
		localizedObservable(data: any, options: any): KnockoutObservable<any>,
		release(object: any, pre_release?: () => void),
		releaseKeys(object: any),
		releaseOnNodeRemove(viewmodel: ViewModel, node: Element),
		renderTemplate(template: string, viewModel: ViewModel, options: any),
		renderAutoReleasedTemplate(template: string, viewModel: ViewModel, options: any),
		applyBindings(viewModel: ViewModel, node?: Element)
	}

	declare interface IObservableOptions {
		key: string,
		read?: () => any,
		write?: (value: any) => void,
		args?: KnockoutObservable<any>[],
		localizer?: LocalizedObservable,
		default?: any,
		path?: string,
		store?: any,
		factory?: any,
		options?: any
	}

		declare class Destroyable  {
		destroy()
	}

	declare class ViewModel extends Destroyable {
		constructor(model?: Backbone.Model, options?: ViewModelOptions, viewModel?: ViewModel): this;
		shareOptions(): ViewModelOptions;
		extend(source: any);
		model(): Backbone.Model
	}

	declare class EventWatcher extends Destroyable {
		useOptionsOrCreate(
		options: <<UNKNOWN PARAM FORMAT>>, emitter: KnockoutObservable<any>, obj: Backbone.Model, callback_options: any
	);
		emitter(): Backbone.Model;
		emitter(newEmitter: Backbone.Model);
		registerCallbacks(obj: any, callback_info: any);
		releaseCallbacks(obj: any)
	}

	declare class Factory  {
		useOptionsOrCreate(options: FactoryOptions, obj: any, owner_path: string);
		constructor(parent_factory: any): this;
		hasPath(path: string): boolean;
		addPathMapping(path: string, create_info: <<UNKNOWN PARAM FORMAT>>);
		addPathMappings(factories: any, owner_path: string);
		hasPathMappings(factories: any, owner_path: string): boolean;
		creatorForPath(obj: any, path: string)
	}

	declare class Store extends Destroyable {
		useOptionsOrCreate(options: StoreOptions, obj: any, observable: KnockoutObservable<any>);
		constructor(model: Backbone.Model, options: StoreOptions): this;
		clear();
		register(
		obj: Backbone.Model, observable: KnockoutObservable<any>, options: StoreOptions
	);
		findOrCreate(obj: Backbone.Model, options: StoreOptions)
	}

	declare class DefaultObservable extends Destroyable {
		constructor(targetObservable: KnockoutObservable<any>, defaultValue: any): this;
		setToDefault()
	}

	declare class FormattedObservable extends Destroyable {
		constructor(format: string, args: any[]): this;
		constructor(format: KnockoutObservable<any>, args: any[]): this
	}

	declare class TriggeredObservable extends Destroyable {
		constructor(emitter: Backbone.ModelBase, event: string): this;
		emitter(): Backbone.ModelBase;
		emitter(newEmitter: Backbone.ModelBase)
	}

	declare class Statistics  {
		constructor(): this;
		clear();
		addModelEvent(event: string);
		modelEventsStatsString();
		register(key: string, obj: any);
		unregister(key: string, obj: any);
		registeredCount(type: any): number;
		registeredStatsString(success_message: string): string
	}

	
}