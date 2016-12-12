

declare module 'react-router-1.0.0' {
					
}

declare module 'npm$namespace$ReactRouter' {
	declare type Component = React.ReactType;

	declare type EnterHook = (
		nextState: RouterState, replaceState: RedirectFunction, callback?: Function
	) => any;

	declare type LeaveHook = () => any;

	declare type Params = Object;

	declare type ParseQueryString = (queryString: H.QueryString) => H.Query;

	declare type RedirectFunction = (state: H.LocationState, pathname: H.Pathname | H.Path, query?: H.Query) => void;

	declare type RouteComponent = Component;

	declare type RouteComponents = {
		[key: string]: RouteComponent
	};

	declare type RouteConfig = React.ReactNode | PlainRoute | PlainRoute[];

	declare type RouteHook = (nextLocation?: H.Location) => any;

	declare type RoutePattern = string;

	declare type StringifyQuery = (queryObject: H.Query) => H.QueryString;

	declare type RouterListener = (error: Error, nextState: RouterState) => void;

	declare type History = HistoryBase & H.HistoryQueries & HistoryRoutes;

	declare interface RouteComponentProps<P, R> {
		history?: History,
		location?: H.Location,
		params?: P,
		route?: PlainRoute,
		routeParams?: R,
		routes?: PlainRoute[]
	}

	declare interface RouterState {
		location: H.Location,
		routes: PlainRoute[],
		params: Params,
		components: RouteComponent[]
	}

	declare interface HistoryBase {
		routes: PlainRoute[],
		parseQueryString?: ParseQueryString,
		stringifyQuery?: StringifyQuery
	}

	declare interface RouterProps {
		history?: H.History,
		routes?: RouteConfig,
		createElement?: (component: RouteComponent, props: Object) => any,
		onError?: (error: any) => any,
		onUpdate?: () => any,
		parseQueryString?: ParseQueryString,
		stringifyQuery?: StringifyQuery
	}

	declare interface Router {
		
	}

	declare interface RouterElement {
		
	}

	declare interface LinkProps {
		activeStyle?: React.CSSProperties,
		activeClassName?: string,
		onlyActiveOnIndex?: boolean,
		to: RoutePattern,
		query?: H.Query,
		state?: H.LocationState
	}

	declare interface Link {
		
	}

	declare interface LinkElement {
		
	}

	declare interface RoutingContextProps {
		history: H.History,
		createElement: (component: RouteComponent, props: Object) => any,
		location: H.Location,
		routes: RouteConfig,
		params: Params,
		components?: RouteComponent[]
	}

	declare interface RoutingContext {
		
	}

	declare interface RoutingContextElement {
		
	}

	declare interface RouteProps {
		path?: RoutePattern,
		component?: RouteComponent,
		components?: RouteComponents,
		getComponent?: (
		location: H.Location, cb: (error: any, component?: RouteComponent) => void
	) => void,
		getComponents?: (
		location: H.Location, cb: (error: any, components?: RouteComponents) => void
	) => void,
		onEnter?: EnterHook,
		onLeave?: LeaveHook
	}

	declare interface Route {
		
	}

	declare interface RouteElement {
		
	}

	declare interface PlainRoute {
		path?: RoutePattern,
		component?: RouteComponent,
		components?: RouteComponents,
		getComponent?: (
		location: H.Location, cb: (error: any, component?: RouteComponent) => void
	) => void,
		getComponents?: (
		location: H.Location, cb: (error: any, components?: RouteComponents) => void
	) => void,
		onEnter?: EnterHook,
		onLeave?: LeaveHook,
		indexRoute?: PlainRoute,
		getIndexRoute?: (
		location: H.Location, cb: (error: any, indexRoute: RouteConfig) => void
	) => void,
		childRoutes?: PlainRoute[],
		getChildRoutes?: (
		location: H.Location, cb: (error: any, childRoutes: RouteConfig) => void
	) => void
	}

	declare interface RedirectProps {
		path?: RoutePattern,
		from?: RoutePattern,
		to: RoutePattern,
		query?: H.Query,
		state?: H.LocationState
	}

	declare interface Redirect {
		
	}

	declare interface RedirectElement {
		
	}

	declare interface IndexRouteProps {
		component?: RouteComponent,
		components?: RouteComponents,
		getComponent?: (
		location: H.Location, cb: (error: any, component?: RouteComponent) => void
	) => void,
		getComponents?: (
		location: H.Location, cb: (error: any, components?: RouteComponents) => void
	) => void,
		onEnter?: EnterHook,
		onLeave?: LeaveHook
	}

	declare interface IndexRoute {
		
	}

	declare interface IndexRouteElement {
		
	}

	declare interface IndexRedirectProps {
		to: RoutePattern,
		query?: H.Query,
		state?: H.LocationState
	}

	declare interface IndexRedirect {
		
	}

	declare interface IndexRedirectElement {
		
	}

	declare interface HistoryMixin {
		history: History
	}

	declare interface LifecycleMixin {
		routerWillLeave(nextLocation: H.Location): string | boolean
	}

	declare interface HistoryRoutes {
		listen(listener: RouterListener): Function,
		listenBeforeLeavingRoute(route: PlainRoute, hook: RouteHook): void,
		match(
		location: H.Location, callback: (error: any, nextState: RouterState, nextLocation: H.Location) => void
	): void,
		isActive(pathname: H.Pathname, query?: H.Query, indexOnly?: boolean): boolean
	}

	declare interface MatchArgs {
		routes?: RouteConfig,
		history?: H.History,
		location?: H.Location,
		parseQueryString?: ParseQueryString,
		stringifyQuery?: StringifyQuery
	}

	declare interface MatchState {
		history: History
	}

	declare function useRoutes<T>(
		createHistory: HistoryModule.CreateHistory<T>
	): HistoryModule.CreateHistory<T & HistoryRoutes>

	declare function createRoutes(routes: RouteConfig): PlainRoute[]

	declare function match(
		args: MatchArgs, cb: (error: any, nextLocation: H.Location, nextState: MatchState) => void
	): void

		
}

declare module 'react-router/lib/Router' {
					


}

declare module 'react-router/lib/Link' {
					


}

declare module 'react-router/lib/IndexLink' {
					


}

declare module 'react-router/lib/IndexRedirect' {
					


}

declare module 'react-router/lib/IndexRoute' {
					


}

declare module 'react-router/lib/Redirect' {
					


}

declare module 'react-router/lib/Route' {
					


}

declare module 'react-router/lib/History' {
					


}

declare module 'react-router/lib/Lifecycle' {
					


}

declare module 'react-router/lib/RouteContext' {
					


}

declare module 'react-router/lib/useRoutes' {
					


}

declare module 'react-router/lib/PatternUtils' {
			declare export function formatPattern(pattern: string, params: {
		
	}): string

		
}

declare module 'react-router/lib/RouteUtils' {
	declare type E = ___React.ReactElement<any>;

		declare export function isReactChildren(object: E | E[]): boolean

	declare export function createRouteFromReactElement(element: E): ReactRouter.PlainRoute

	declare export function createRoutesFromReactChildren(
		children: E | E[], parentRoute: ReactRouter.PlainRoute
	): ReactRouter.PlainRoute[]

		
}

declare module 'react-router/lib/RoutingContext' {
					


}

declare module 'react-router/lib/PropTypes' {
			declare export function falsy(props: any, propName: string, componentName: string): Error

		


}

declare module 'react-router/lib/match' {
					


}

declare module 'react-router' {
	declare export type PlainRoute = ReactRouter.PlainRoute;

	declare export type EnterHook = ReactRouter.EnterHook;

	declare export type LeaveHook = ReactRouter.LeaveHook;

	declare export type ParseQueryString = ReactRouter.ParseQueryString;

	declare export type RedirectFunction = ReactRouter.RedirectFunction;

	declare export type RouteComponentProps<P, R> = ReactRouter.RouteComponentProps<P, R>;

	declare export type RouteHook = ReactRouter.RouteHook;

	declare export type StringifyQuery = ReactRouter.StringifyQuery;

	declare export type RouterListener = ReactRouter.RouterListener;

	declare export type RouterState = ReactRouter.RouterState;

	declare export type HistoryBase = ReactRouter.HistoryBase;

				declare module.exports: undefined


}