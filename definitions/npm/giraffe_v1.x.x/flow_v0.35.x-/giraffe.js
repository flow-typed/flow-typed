

declare module 'giraffe' {
					
}

declare module 'npm$namespace$Giraffe' {
		declare interface GiraffeObject {
		app: App,
		appEvents?: StringMap,
		dataEvents?: StringMap,
		defaultOptions?: DefaultOptions,
		initialize(),
		beforeInitialize(),
		afterInitialize(),
		dispose(),
		beforeDispose(),
		afterDispose()
	}

	declare interface AttachmentOptions {
		method?: string,
		forceRender?: boolean,
		suppressRender?: boolean
	}

	declare interface DefaultOptions {
		disposeOnDetach?: boolean,
		alwaysRender?: boolean,
		saveScrollPosition?: boolean,
		documentTitle?: string
	}

	declare interface AppMap {
		[cid: string]: App
	}

	declare interface ViewMap<TModel> {
		[cid: string]: View<TModel>
	}

	declare interface StringMap {
		[def: string]: string
	}

	declare function bindAppEvents(instance: GiraffeObject): GiraffeObject

	declare function bindDataEvents(instance: GiraffeObject): GiraffeObject

	declare function bindEvent(
		context: Backbone.Events, target: Backbone.Events, event: any, callback: Function
	)

	declare function unbindEvent(
		context: Backbone.Events, target: Backbone.Events, event: any, callback: Function
	)

	declare function bindEventMap(context: Backbone.Events, target: Backbone.Events, eventMap: any)

	declare function unbindEventMap(context: Backbone.Events, target: Backbone.Events, eventMap: any)

	declare function configure(instance: any, options?: any)

	declare function dispose(instance: GiraffeObject, ...args: any[]): GiraffeObject

	declare function disposeThis(...args: any[]): GiraffeObject

	declare function wrapFn(obj: any, name: string, before: Function, after: Function)

	declare class Collection<TModel> extends Backbone$Collection<TModel>, GiraffeObject {
		app: App;
		model: {
		new (): TModel
	}
	}

	declare class Model extends Backbone$Model, GiraffeObject {
		app: App
	}

	declare class Router extends Backbone$Router, GiraffeObject {
		app: App;
		namespace: string;
		triggers: StringMap;
		cause(appEvent: string, ...args: any[]);
		isCaused(appEvent: string, ...args: any[]): boolean;
		getRoute(appEvent: string, ...args: any[]): string;
		reload(url: string)
	}

	declare class View<TModel> extends Backbone$View<TModel>, GiraffeObject {
		app: App;
		appEvents: StringMap;
		children: View<TModel>[];
		dataEvents: StringMap;
		defaultOptions: DefaultOptions;
		documentTitle: string;
		parent: View<TModel>;
		template: any;
		ui: StringMap;
		attachTo(el: any, options?: AttachmentOptions): View<TModel>;
		attach(view: View<TModel>, options?: AttachmentOptions): View<TModel>;
		isAttached(el: any): boolean;
		render(options?: any): View<TModel>;
		beforeRender();
		afterRender();
		templateStrategy(): string;
		serialize(): any;
		setParent(parent: View<TModel>): View<TModel>;
		addChild(child: View<TModel>): View<TModel>;
		addChildren(children: View<TModel>[]): View<TModel>;
		removeChild(child: View<TModel>, preserve?: boolean): View<TModel>;
		removeChildren(preserve?: boolean): View<TModel>;
		detach(preserve?: boolean): View<TModel>;
		detachChildren(preserve?: boolean): View<TModel>;
		invoke(method: string, ...args: any[]);
		dispose(): View<TModel>;
		beforeDispose(): View<TModel>;
		afterDispose(): View<TModel>;
		detachByElement(el: any, preserve?: boolean): View<Model>;
		getClosestView<TModel>(el: any): View<Model>;
		getByCid(cid: string): View<Model>;
		to$El(el: any, parent?: any, allowParentMatch?: boolean): JQuery;
		setDocumentEvents(events: string[], prefix?: string): string[];
		removeDocumentEvents(prefix?: string);
		setDocumentEventPrefix(prefix?: string);
		setTemplateStrategy(strategy: any, instance?: any)
	}

	declare class App extends View<Model> {
		routes: StringMap;
		addInitializer(initializer: (options?: any, callback?: () => void) => void): App;
		start(options?: any): App
	}

	
}

declare module 'Contrib' {
				declare class Controller extends Backbone$Events, GiraffeObject {
		app: App
	}

	declare class CollectionView<TModel> extends View<TModel> {
		collection: Collection<TModel>;
		modelView: View<TModel>;
		modelViewArgs: any[];
		modelViewEl: any;
		renderOnChange: boolean;
		findByModel(model: Model): View<TModel>;
		addOne(model: Model): View<TModel>;
		removeOne(model: Model): View<TModel>;
		getDefaults(ctx: any): any
	}

	declare class FastCollectionView<TModel> extends View<TModel> {
		collection: Collection<TModel>;
		modelTemplate: any;
		modelTemplateStrategy: string;
		modelEl: any;
		renderOnChange: boolean;
		modelSerialize(): any;
		addAll(): View<TModel>;
		addOne(model: Model): View<TModel>;
		removeOne(model: Model): View<TModel>;
		removeByIndex(index: number): View<TModel>;
		findElByModel(model: Model): JQuery;
		findElByIndex(index: number): JQuery;
		findModelByEl(el: any): Model;
		getDefaults(ctx: any): any
	}

	
}