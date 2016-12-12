

declare module 'react-router-0.13.3' {
					
}

declare module 'npm$namespace$ReactRouter' {
	declare type CreateRouteCallback = (route: Route) => void;

	declare type RouterRunCallback = (Handler: RouteClass, state: RouterState) => void;

	declare interface Transition {
		path: string,
		abortReason: any,
		retry(): void,
		abort(reason?: any): void,
		redirect(to: string, params?: {
		
	}, query?: {
		
	}): void,
		cancel(): void,
		from: (
		transition: Transition, routes: Route[], components?: React.ReactElement<any>[], callback?: (error?: any) => void
	) => void,
		to: (
		transition: Transition, routes: Route[], params?: {
		
	}, query?: {
		
	}, callback?: (error?: any) => void
	) => void
	}

	declare interface TransitionStaticLifecycle {
		willTransitionTo(
		transition: Transition, params: {
		
	}, query: {
		
	}, callback: Function
	): void,
		willTransitionFrom(
		transition: Transition, component: React.ReactElement<any>, callback: Function
	): void
	}

	declare interface DefaultRouteProp {
		name?: string,
		handler: React.ComponentClass<any>
	}

	declare interface DefaultRoute {
		
	}

	declare interface DefaultRouteClass {
		
	}

	declare interface NotFoundRouteProp {
		name?: string,
		handler: React.ComponentClass<any>
	}

	declare interface NotFoundRoute {
		
	}

	declare interface NotFoundRouteClass {
		
	}

	declare interface RedirectProp {
		path?: string,
		from?: string,
		to?: string
	}

	declare interface Redirect {
		
	}

	declare interface RedirectClass {
		
	}

	declare interface RouteProp {
		name?: string,
		path?: string,
		handler?: React.ComponentClass<any>,
		ignoreScrollBehavior?: boolean
	}

	declare interface Route {
		
	}

	declare interface RouteClass {
		
	}

	declare interface CreateRouteOptions {
		name?: string,
		path?: string,
		ignoreScrollBehavior?: boolean,
		isDefault?: boolean,
		isNotFound?: boolean,
		onEnter?: (
		transition: Transition, params: {
		
	}, query: {
		
	}, callback: Function
	) => void,
		onLeave?: (transition: Transition, wtf: any, callback: Function) => void,
		handler?: Function,
		parentRoute?: Route
	}

	declare interface CreateRedirectOptions {
		path?: string,
		from?: string,
		to: string,
		params?: {
		
	},
		query?: {
		
	}
	}

	declare interface LinkProp {
		activeClassName?: string,
		activeStyle?: {
		
	},
		to: string,
		params?: {
		
	},
		query?: {
		
	}
	}

	declare interface Link {
		handleClick(event: any): void,
		getHref(): string,
		getClassName(): string,
		getActiveState(): boolean
	}

	declare interface LinkClass {
		
	}

	declare interface RouteHandlerProp {
		
	}

	declare interface RouteHandlerChildContext {
		routeDepth: number
	}

	declare interface RouteHandler {
		getChildContext(): RouteHandlerChildContext,
		getRouteDepth(): number,
		createChildRouteHandler(props: {
		
	}): RouteHandler
	}

	declare interface RouteHandlerClass {
		
	}

	declare interface Router {
		run(callback: RouterRunCallback): void
	}

	declare interface RouterState {
		path: string,
		action: string,
		pathname: string,
		params: {
		
	},
		query: {
		
	},
		routes: Route[]
	}

	declare interface RouterCreateOption {
		routes: Route,
		location?: LocationBase,
		scrollBehavior?: ScrollBehaviorBase,
		onError?: (error: any) => void,
		onAbort?: (error: any) => void
	}

	declare interface LocationBase {
		getCurrentPath(): void,
		toString(): string
	}

	declare interface Location {
		push(path: string): void,
		replace(path: string): void,
		pop(): void
	}

	declare interface LocationListener {
		addChangeListener(listener: Function): void,
		removeChangeListener(listener: Function): void
	}

	declare interface HashLocation {
		
	}

	declare interface HistoryLocation {
		
	}

	declare interface RefreshLocation {
		
	}

	declare interface StaticLocation {
		
	}

	declare interface TestLocation {
		
	}

	declare interface ScrollBehaviorBase {
		updateScrollPosition(position: {
		x: number,
		y: number
	}, actionType: string): void
	}

	declare interface ImitateBrowserBehavior {
		
	}

	declare interface ScrollToTopBehavior {
		
	}

	declare interface Navigation {
		makePath(to: string, params?: {
		
	}, query?: {
		
	}): string,
		makeHref(to: string, params?: {
		
	}, query?: {
		
	}): string,
		transitionTo(to: string, params?: {
		
	}, query?: {
		
	}): void,
		replaceWith(to: string, params?: {
		
	}, query?: {
		
	}): void,
		goBack(): void
	}

	declare interface State {
		getPath(): string,
		getRoutes(): Route[],
		getPathname(): string,
		getParams(): {
		
	},
		getQuery(): {
		
	},
		isActive(to: string, params?: {
		
	}, query?: {
		
	}): boolean
	}

	declare interface History {
		back(): void,
		length: number
	}

	declare interface Context {
		makePath(to: string, params?: {
		
	}, query?: {
		
	}): string,
		makeHref(to: string, params?: {
		
	}, query?: {
		
	}): string,
		transitionTo(to: string, params?: {
		
	}, query?: {
		
	}): void,
		replaceWith(to: string, params?: {
		
	}, query?: {
		
	}): void,
		goBack(): void,
		getCurrentPath(): string,
		getCurrentRoutes(): Route[],
		getCurrentPathname(): string,
		getCurrentParams(): {
		
	},
		getCurrentQuery(): {
		
	},
		isActive(to: string, params?: {
		
	}, query?: {
		
	}): boolean
	}

	declare function createRoute(callback: CreateRouteCallback): Route

	declare function createRoute(options: CreateRouteOptions | string, callback: CreateRouteCallback): Route

	declare function createDefaultRoute(options?: CreateRouteOptions | string): Route

	declare function createNotFoundRoute(options?: CreateRouteOptions | string): Route

	declare function createRedirect(options: CreateRedirectOptions): Redirect

	declare function createRoutesFromReactChildren(children: Route): Route[]

	declare function create(options: RouterCreateOption): Router

	declare function run(routes: Route, callback: RouterRunCallback): Router

	declare function run(
		routes: Route, location: LocationBase | string, callback: RouterRunCallback
	): Router

		
}

declare module 'react-router' {
					declare module.exports: undefined


}

declare module '___React' {
			declare function createElement(
		type: ReactRouter.DefaultRouteClass, props: ReactRouter.DefaultRouteProp, ...children: ___React.ReactNode[]
	): ReactRouter.DefaultRoute

	declare function createElement(
		type: ReactRouter.LinkClass, props: ReactRouter.LinkProp, ...children: ___React.ReactNode[]
	): ReactRouter.Link

	declare function createElement(
		type: ReactRouter.NotFoundRouteClass, props: ReactRouter.NotFoundRouteProp, ...children: ___React.ReactNode[]
	): ReactRouter.NotFoundRoute

	declare function createElement(
		type: ReactRouter.RedirectClass, props: ReactRouter.RedirectProp, ...children: ___React.ReactNode[]
	): ReactRouter.Redirect

	declare function createElement(
		type: ReactRouter.RouteClass, props: ReactRouter.RouteProp, ...children: ___React.ReactNode[]
	): ReactRouter.Route

	declare function createElement(
		type: ReactRouter.RouteHandlerClass, props: ReactRouter.RouteHandlerProp, ...children: ___React.ReactNode[]
	): ReactRouter.RouteHandler

		
}

declare module 'react/addons' {
			declare function createElement(
		type: ReactRouter.DefaultRouteClass, props: ReactRouter.DefaultRouteProp, ...children: ___React.ReactNode[]
	): ReactRouter.DefaultRoute

	declare function createElement(
		type: ReactRouter.LinkClass, props: ReactRouter.LinkProp, ...children: ___React.ReactNode[]
	): ReactRouter.Link

	declare function createElement(
		type: ReactRouter.NotFoundRouteClass, props: ReactRouter.NotFoundRouteProp, ...children: ___React.ReactNode[]
	): ReactRouter.NotFoundRoute

	declare function createElement(
		type: ReactRouter.RedirectClass, props: ReactRouter.RedirectProp, ...children: ___React.ReactNode[]
	): ReactRouter.Redirect

	declare function createElement(
		type: ReactRouter.RouteClass, props: ReactRouter.RouteProp, ...children: ___React.ReactNode[]
	): ReactRouter.Route

	declare function createElement(
		type: ReactRouter.RouteHandlerClass, props: ReactRouter.RouteHandlerProp, ...children: ___React.ReactNode[]
	): ReactRouter.RouteHandler

		
}