

declare module 'marionette' {
					
}

declare module 'npm$namespace$Backbone' {
				declare class ChildViewContainer<TView>  {
		constructor(initialViews?: any[]): this;
		add(view: TView, customIndex?: number): void;
		findByModel<TModel>(model: TModel): TView;
		findByModelCid(modelCid: string): TView;
		findByCustom(index: number): TView;
		findByIndex(index: number): TView;
		findByCid(cid: string): TView;
		remove(view: TView): void;
		call(method: any): void;
		apply(method: any, args?: any[]): void;
		all(iterator: (element: TView, index: number) => boolean, context?: any): boolean;
		any(iterator: (element: TView, index: number) => boolean, context?: any): boolean;
		contains(value: any): boolean;
		detect(iterator: (item: any) => boolean, context?: any): any;
		each(
		iterator: (element: TView, index: number, list?: any) => void, context?: any
	): any;
		every(iterator: (element: TView, index: number) => boolean, context?: any): boolean;
		filter(iterator: (element: TView, index: number) => boolean, context?: any): TView[];
		find(iterator: (element: TView, index: number) => boolean, context?: any): TView;
		first(): TView;
		forEach(
		iterator: (element: TView, index: number, list?: any) => void, context?: any
	): void;
		include(value: any): boolean;
		initial(): TView;
		initial(n: number): TView[];
		invoke(methodName: string, args?: any[]): any;
		isEmpty(object: any): boolean;
		last(): TView;
		last(n: number): TView[];
		lastIndexOf(element: TView, fromIndex?: number): number;
		map<U>(
		iterator: (element: TView, index: number, context?: any) => U, context?: any
	): U[];
		pluck(attribute: string): any[];
		reject(iterator: (element: TView, index: number) => boolean, context?: any): TView[];
		rest(): TView;
		rest(n: number): TView[];
		select(iterator: any, context?: any): any[];
		some(iterator: (element: TView, index: number) => boolean, context?: any): boolean;
		toArray(): any[];
		without(...values: any[]): TView[]
	}

	
}

declare module 'radio' {
			declare function channel(channelName: string): Channel

		
}

declare module 'Wreqr' {
				declare class Channel  {
		constructor(channelName: string): this;
		vent: Backbone.Wreqr.EventAggregator;
		reqres: Backbone.Wreqr.RequestResponse;
		commands: Backbone.Wreqr.Commands;
		channelName: string;
		reset(): Channel;
		connectEvents(hash: string, context: any): Channel;
		connectCommands(hash: string, context: any): Channel;
		connectRequests(hash: string, context: any): Channel
	}

	declare class Handlers extends Backbone$Events {
		constructor(options?: any): this;
		options: any;
		setHandler(name: string, handler: any, context?: any): void;
		hasHandler(name: string): boolean;
		getHandler(name: string): Function;
		removeHandler(name: string): void;
		removeAllHandlers(): void
	}

	declare class CommandStorage  {
		constructor(options?: any): this;
		getCommands(commandName: string): Commands;
		addCommand(commandName: string, args: any): void;
		clearCommands(commandName: string): void
	}

	declare class Commands extends Handlers {
		constructor(options?: any): this;
		storageType: CommandStorage;
		execute(name: string, ...args: any[]): void
	}

	declare class RequestResponse extends Handlers {
		constructor(options?: any): this;
		request(...args: any[]): any
	}

	declare class EventAggregator extends Backbone$Events {
		constructor(options?: any): this
	}

	
}

declare module 'npm$namespace$Marionette' {
		declare interface RegionConstructionOptions {
		el?: any
	}

	declare interface RegionShowOptions {
		preventDestroy?: boolean,
		forceShow?: boolean,
		triggerBeforeAttach?: boolean,
		triggerAttach?: boolean
	}

	declare interface RegionDefaults {
		selector?: string,
		el?: any,
		regionClass?: any,
		allowMissingEl?: boolean
	}

	declare interface CollectionViewOptions<TModel> {
		sort?: boolean,
		reorderOnSort?: boolean
	}

	declare interface LayoutViewOptions<TModel> {
		regions?: any,
		destroyImmediate?: boolean
	}

	declare interface AppRouterOptions {
		appRoutes?: any,
		controller?: any
	}

	declare function getOption(target: any, optionName: string): any

	declare function triggerMethod(name: string, ...args: any[]): any

	declare function triggerMethodOn(ctx: any, name: string, ...args: any[]): any

	declare function MonitorDOMRefresh(view: Backbone.View<Backbone.Model>): void

	declare function bindEntityEvents(target: any, entity: any, bindings: any): void

	declare function unbindEntityEvents(target: any, entity: any, bindings: any): void

	declare class Callbacks  {
		add(callback: Function, contextOverride: any): void;
		run(options: any, context: any): void;
		reset(): void
	}

	declare class Object extends Backbone$Events {
		initialize(options?: any): void;
		getOption(optionName: string): any;
		destroy(...args: any[]): void
	}

	declare class Controller extends Backbone$Events {
		constructor(options?: any): this;
		destroy(...args: any[]): void;
		getOption(optionName: string): any;
		triggerMethod(name: string, ...args: any[]): any
	}

	declare class Region extends Marionette$Object {
		buildRegion(regionConfig: any, defaultRegionType: any): Region;
		constructor(options?: RegionConstructionOptions): this;
		el: any;
		show<TModel>(view: Backbone.View<TModel>, options?: RegionShowOptions): void;
		attachView<TModel>(view: Backbone.View<TModel>, options?: RegionShowOptions): any;
		attachHtml<TModel>(view: Backbone.View<TModel>): void;
		reset(): any;
		hasView(): boolean;
		empty(): any;
		currentView: Backbone.View<Backbone.Model>
	}

	declare class RegionManager extends Controller {
		constructor(options?: any): this;
		addRegions(regionDefinitions: Function, defaults?: RegionDefaults): any;
		addRegions(
		regionDefinitions: {
		[regionName: string]: any
	}, defaults?: RegionDefaults
	): any;
		addRegion(name: string, definition: any): Region;
		get(name: string): Region;
		removeRegion(name: string): void;
		removeRegions(): void;
		emptyRegions(): void;
		destroy(): void;
		all(iterator: (element: Region, index: number) => boolean, context?: any): boolean;
		any(iterator: (element: Region, index: number) => boolean, context?: any): boolean;
		contains(value: any): boolean;
		detect(iterator: (item: any) => boolean, context?: any): any;
		each(
		iterator: (element: Region, index: number, list?: any) => void, context?: any
	): void;
		every(iterator: (element: Region, index: number) => boolean, context?: any): boolean;
		filter(iterator: (element: Region, index: number) => boolean, context?: any): Region[];
		find(iterator: (element: Region, index: number) => boolean, context?: any): Region;
		first(): Region;
		first(n: number): Region[];
		forEach(
		iterator: (element: Region, index: number, list?: any) => void, context?: any
	): void;
		include(value: any): boolean;
		initial(n: number): Region[];
		invoke(methodName: string, args?: any[]): any;
		isEmpty(object: any): boolean;
		last(): Region;
		last(n: number): Region[];
		lastIndexOf(element: Region, fromIndex?: number): number;
		map(
		iterator: (element: Region, index: number, context?: any) => any[], context?: any
	): any[];
		pluck(attribute: string): any[];
		reject(iterator: (element: Region, index: number) => boolean, context?: any): Region[];
		rest(n: number): Region[];
		select(iterator: any, context?: any): Region[];
		some(iterator: (element: Region, index: number) => boolean, context?: any): boolean;
		toArray(): Region[];
		without(...values: any[]): Region[]
	}

	declare class TemplateCache  {
		get(templateId: string): any;
		clear(...templateId: string[]): void;
		loadTemplate(templateId: string): any;
		compileTemplate(rawTemplate: any): any
	}

	declare class Renderer  {
		render(template: any, data: any): string
	}

	declare class View<TModel> extends Backbone$View<TModel> {
		constructor(options?: Backbone.ViewOptions<TModel>): this;
		behaviors: any;
		triggers: {
		[key: string]: any
	};
		modelEvents: any;
		collectionEvents: any;
		ui: any;
		getTemplate(): any;
		getOption<T>(optionName: string): T;
		mixinTemplateHelpers(target?: any): any;
		configureTriggers(): any;
		destroy(...args: any[]): void;
		bindUIElements(): any;
		unbindUIElements(): any;
		triggerMethod(name: string, ...args: any[]): any;
		onShow(): void;
		onDestroy(): void;
		onBeforeDestroy(...args: any[]): void;
		onAttach(): void;
		onBeforeAttach(): void;
		onDomRefresh(): void;
		isDestroyed: boolean;
		supportsRenderLifecycle: boolean;
		supportsDestroyLifecycle: boolean
	}

	declare class ItemView<TModel> extends View<TModel> {
		constructor(options?: Backbone.ViewOptions<TModel>): this;
		serializeData(): any;
		render(): ItemView<TModel>;
		onBeforeRender(): void;
		onRender(): void
	}

	declare class CollectionView<TModel, TView> extends View<TModel> {
		constructor(options?: CollectionViewOptions<TModel>): this;
		childView: NO PRINT IMPLEMENTED: ConstructorType;
		childViewOptions: any;
		childViewEventPrefix: string;
		childEvents: any;
		emptyView: any;
		emptyViewOptions: any;
		children: Backbone.ChildViewContainer<TView>;
		render(): CollectionView<TModel, TView>;
		addChild(item: any, ChildView: TView, index: Number): void;
		renderChildView(view: TView, index: Number): void;
		buildChildView(child: any, ItemViewType: any, itemViewOptions: any): TView;
		removeChildView(view: TView): TView;
		isEmpty(): boolean;
		checkEmpty(): void;
		destroyChildren(): Backbone.ChildViewContainer<TView>;
		resortView(): void;
		attachHtml(
		collectionView: CollectionView<TModel, TView>, childView: TView, index: number
	): void;
		getChildView<M>(item: M): NO PRINT IMPLEMENTED: ConstructorType;
		getEmptyView(): any;
		serializeCollection(): any;
		attachElContent(html: string): ItemView<TModel>;
		reorder(): void;
		addEmptyView(child: TModel, EmptyView: NO PRINT IMPLEMENTED: ConstructorType): void;
		destroy(): CollectionView<TModel, TView>;
		proxyChildEvents(view: any): void;
		onBeforeRender(): void;
		onRender(): void;
		onBeforeAddChild(childView: TView): void;
		onAddChild(childView: TView): void;
		onBeforeRemoveChild(childView: TView): void;
		onRemoveChild(childView: TView): void
	}

	declare class CompositeView<TModel, TView> extends CollectionView<TModel, TView> {
		constructor(options?: CollectionViewOptions<TModel>): this;
		childView: NO PRINT IMPLEMENTED: ConstructorType;
		childViewContainer: any;
		render(): CompositeView<TModel, TView>;
		onBeforeRenderTemplate(): void;
		onRenderTemplate(): void;
		onBeforeRenderCollection(): void;
		onRenderCollection(): void
	}

	declare class LayoutView<TModel> extends ItemView<TModel> {
		regionClass: any;
		constructor(options?: LayoutViewOptions<TModel>): this;
		destroy(): LayoutView<TModel>;
		regions(): any;
		addRegion(name: string, definition: any): Region;
		addRegions(regions: any): any;
		getRegion(name: string): Region;
		render(): LayoutView<TModel>;
		removeRegion(name: string): Region;
		getRegionManager(): RegionManager;
		showChildView(regionName: string, view: any, options?: RegionShowOptions): void;
		getChildView(regionName: string): Backbone.View<TModel>;
		getRegions(): {
		[key: string]: Region
	};
		childViewEventPrefix: string
	}

	declare class AppRouter extends Backbone$Router {
		constructor(options?: AppRouterOptions): this;
		processAppRoutes(controller: any, appRoutes: any): void;
		appRoute(route: string, methodName: string): void
	}

	declare class Application extends Backbone$Events {
		constructor(options?: any): this;
		vent: Backbone.Wreqr.EventAggregator;
		commands: Backbone.Wreqr.Commands;
		reqres: Backbone.Wreqr.RequestResponse;
		submodules: any;
		execute(...args: any[]): void;
		request(...args: any[]): any;
		addInitializer(initializer: any): void;
		start(options?: any): void;
		addRegions(regions: any): any;
		emptyRegions(): void;
		removeRegion(region: Region): void;
		getRegion(regionName: string): Region;
		module(moduleNames: any, moduleDefinition: any): Module;
		onBeforeStart(options?: any): void;
		onStart(options?: any): void
	}

	declare class Module extends Backbone$Events {
		constructor(moduleName: string, app: Application): this;
		submodules: any;
		triggerMethod(name: string, ...args: any[]): any;
		addInitializer(callback: any): void;
		addFinalizer(callback: any): void;
		start(options?: any): void;
		addDefinition(moduleDefinition: any, customArgs: any): any
	}

	declare class Behavior extends Marionette$Object {
		constructor(options?: any, view?: any): this;
		options: any;
		ui: any;
		triggers: any;
		modelEvents: any;
		collectionEvents: any;
		behaviors: any;
		defaults: any;
		el: any;
		$el: JQuery;
		view: any;
		$(selector: any): JQuery
	}

	declare class Behaviors  {
		behaviorsLookup(): any;
		getBehaviorClass(options: any, key: string): any
	}

	
}

declare module 'backbone.marionette' {
					declare module.exports: undefined


}