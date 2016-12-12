

declare module 'backbone.layoutmanager' {
					
}

declare module 'npm$namespace$Backbone' {
		declare interface LayoutOptions<TModel> {
		template?: string,
		views?: {
		[viewName: string]: View<TModel>
	}
	}

	declare interface LayoutManagerOptions {
		manage?: boolean,
		el?: boolean
	}

		declare class Layout<TModel> extends View<TModel> {
		template: string;
		constructor(options?: LayoutOptions<TModel>): this;
		beforeRender(): void;
		afterRender(): void;
		cleanup(): void;
		fetchTemplate(path: string): (context: any) => string;
		async(): (compiled: (context: any) => void) => void;
		promise(): JQueryPromise<any>;
		getAllOptions(): LayoutOptions<TModel>;
		getView(fn?: any): any;
		getViews(fn?: any): any[];
		insertView(selector: any, view?: any): any;
		insertViews(views: any): Layout<TModel>;
		remove(): Layout<TModel>;
		removeView(fn: any): Layout<TModel>;
		render(): Layout<TModel>;
		renderViews(): Layout<TModel>;
		setView<U>(name: any, view: U, insert?: boolean): U;
		setViews(views: any): Layout<TModel>;
		then(fn: () => void): void;
		cache(path: string, contents?: any): any;
		cleanViews(views: any): void;
		configure(options: LayoutManagerOptions): void;
		setupView(views: any, options?: LayoutOptions<Model>): void
	}

	
}