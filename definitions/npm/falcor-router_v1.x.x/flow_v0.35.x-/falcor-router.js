

declare module 'falcor-router' {
					


}

declare module 'npm$namespace$FalcorRouter' {
	declare type RoutePathSet = FalcorJsonGraph.PathSet;

	declare type RouteDefinition = GetRoute | SetRoute | CallRoute;

	declare type RouteResult = FalcorJsonGraph.PathValue | Array<FalcorJsonGraph.PathValue> | FalcorJsonGraph.JSONEnvelope<any>;

	declare interface Route {
		route: string
	}

	declare interface CallRoute {
		call(callPath: RoutePathSet, args: Array<any>): RouteResult | Promise<RouteResult>
	}

	declare interface GetRoute {
		get(pathset: RoutePathSet): RouteResult | Promise<RouteResult>
	}

	declare interface SetRoute {
		set(jsonGraph: FalcorJsonGraph.JSONGraph): RouteResult | Promise<RouteResult>
	}

	declare interface RouterOptions {
		debug?: boolean,
		maxPaths?: number,
		maxRefFollow?: number
	}

		declare class Router extends DataSource {
		constructor(routes: Array<RouteDefinition>, options?: RouterOptions): this;
		routeUnhandledPathsTo(dataSource: DataSource): void;
		createClass(routes?: Array<RouteDefinition>): typeof CreatedRouter
	}

	declare class CreatedRouter extends Router {
		constructor(options?: RouterOptions): this
	}

	
}