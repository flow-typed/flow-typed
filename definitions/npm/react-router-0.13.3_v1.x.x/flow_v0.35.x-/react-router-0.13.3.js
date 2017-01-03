// @flow
/**
 * Flowtype definitions for react-router-0.13.3
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$ReactRouter: {
    createRoute: typeof ReactRouter$createRoute,
    createDefaultRoute: typeof ReactRouter$createDefaultRoute,
    createNotFoundRoute: typeof ReactRouter$createNotFoundRoute,
    createRedirect: typeof ReactRouter$createRedirect,
    createRoutesFromReactChildren: typeof ReactRouter$createRoutesFromReactChildren,
    create: typeof ReactRouter$create,
    run: typeof ReactRouter$run,
}
declare interface ReactRouter$Transition {
    path: string,
        abortReason: any,
        retry(): void,
        abort(reason?: any): void,
        redirect(to: string, params?: {}, query?: {}): void,
        cancel(): void,
        from: (
            transition: ReactRouter$Transition,
            routes: ReactRouter$Route[],
            components?: React.ReactElement<any>[],
            callback?: (error?: any) => void) => void,
        to: (
            transition: ReactRouter$Transition,
            routes: ReactRouter$Route[],
            params?: {},
            query?: {},
            callback?: (error?: any) => void) => void
}

declare interface ReactRouter$TransitionStaticLifecycle {
    willTransitionTo(
            transition: ReactRouter$Transition,
            params: {},
            query: {},
            callback: Function): void,
        willTransitionFrom(
            transition: ReactRouter$Transition,
            component: React.ReactElement<any>,
            callback: Function): void
}

declare interface ReactRouter$DefaultRouteProp {
    name?: string,
        handler: React.ComponentClass<any >
}

declare type ReactRouter$DefaultRoute = {}

declare type ReactRouter$DefaultRouteClass = {}

declare interface ReactRouter$NotFoundRouteProp {
    name?: string,
        handler: React.ComponentClass<any >
}

declare type ReactRouter$NotFoundRoute = {}

declare type ReactRouter$NotFoundRouteClass = {}

declare interface ReactRouter$RedirectProp {
    path?: string,
        from?: string,
        to?: string
}

declare type ReactRouter$Redirect = {}

declare type ReactRouter$RedirectClass = {}

declare interface ReactRouter$RouteProp {
    name?: string,
        path?: string,
        handler?: React.ComponentClass<any>,
        ignoreScrollBehavior?: boolean
}

declare type ReactRouter$Route = {}

declare type ReactRouter$RouteClass = {}

declare var DefaultRoute: ReactRouter$DefaultRouteClass;

declare var NotFoundRoute: ReactRouter$NotFoundRouteClass;

declare var Redirect: ReactRouter$RedirectClass;

declare var Route: ReactRouter$RouteClass;

declare interface ReactRouter$CreateRouteOptions {
    name?: string,
        path?: string,
        ignoreScrollBehavior?: boolean,
        isDefault?: boolean,
        isNotFound?: boolean,
        onEnter?: (
            transition: ReactRouter$Transition,
            params: {},
            query: {},
            callback: Function) => void,
        onLeave?: (transition: ReactRouter$Transition, wtf: any, callback: Function) => void,
        handler?: Function,
        parentRoute?: ReactRouter$Route
}

declare type ReactRouter$CreateRouteCallback = (route: ReactRouter$Route) => void;

declare function ReactRouter$createRoute(callback: ReactRouter$CreateRouteCallback): ReactRouter$Route

declare function ReactRouter$createDefaultRoute(options?: ReactRouter$CreateRouteOptions | string): ReactRouter$Route

declare function ReactRouter$createNotFoundRoute(options?: ReactRouter$CreateRouteOptions | string): ReactRouter$Route

declare type ReactRouter$CreateRedirectOptions = {
    path?: string,
    from?: string,
    to: string,
    params?: {},
    query?: {}
} & ReactRouter$CreateRouteOptions


declare function ReactRouter$createRedirect(options: ReactRouter$CreateRedirectOptions): ReactRouter$Redirect

declare function ReactRouter$createRoutesFromReactChildren(children: ReactRouter$Route): ReactRouter$Route[]

declare type ReactRouter$LinkProp = {
    activeClassName?: string,
    activeStyle?: {},
    to: string,
    params?: {},
    query?: {}
}

declare type ReactRouter$Link = {
    handleClick(event: any): void,
    getHref(): string,
    getClassName(): string,
    getActiveState(): boolean
} & & ReactRouter$Navigation & ReactRouter$State


declare type ReactRouter$LinkClass = {}

declare interface ReactRouter$RouteHandlerProp {}

declare interface ReactRouter$RouteHandlerChildContext {
    routeDepth: number
}

declare type ReactRouter$RouteHandler = {
    getChildContext(): ReactRouter$RouteHandlerChildContext,
    getRouteDepth(): number,
    createChildRouteHandler(props: {}): ReactRouter$RouteHandler
}

declare type ReactRouter$RouteHandlerClass = {}

declare var Link: ReactRouter$LinkClass;

declare var RouteHandler: ReactRouter$RouteHandlerClass;

declare type ReactRouter$Router = {
    run(callback: ReactRouter$RouterRunCallback): void
}

declare interface ReactRouter$RouterState {
    path: string,
        action: string,
        pathname: string,
        params: {},
        query: {},
        routes: ReactRouter$Route[]
}

declare interface ReactRouter$RouterCreateOption {
    routes: ReactRouter$Route,
        location?: ReactRouter$LocationBase,
        scrollBehavior?: ReactRouter$ScrollBehaviorBase,
        onError?: (error: any) => void,
        onAbort?: (error: any) => void
}

declare type ReactRouter$RouterRunCallback = (Handler: ReactRouter$RouteClass, state: ReactRouter$RouterState) => void;

declare function ReactRouter$create(options: ReactRouter$RouterCreateOption): ReactRouter$Router

declare function ReactRouter$run(
    routes: ReactRouter$Route,
    callback: ReactRouter$RouterRunCallback): ReactRouter$Router

declare interface ReactRouter$LocationBase {
    getCurrentPath(): void,
        toString(): string
}

declare type ReactRouter$Location = {
    push(path: string): void,
    replace(path: string): void,
    pop(): void
} & ReactRouter$LocationBase


declare interface ReactRouter$LocationListener {
    addChangeListener(listener: Function): void,
        removeChangeListener(listener: Function): void
}

declare type ReactRouter$HashLocation = {} & ReactRouter$Location & ReactRouter$LocationListener


declare type ReactRouter$HistoryLocation = {} & ReactRouter$Location & ReactRouter$LocationListener


declare type ReactRouter$RefreshLocation = {} & ReactRouter$Location


declare type ReactRouter$StaticLocation = {} & ReactRouter$LocationBase


declare type ReactRouter$TestLocation = {} & ReactRouter$Location & ReactRouter$LocationListener


declare var HashLocation: ReactRouter$HashLocation;

declare var HistoryLocation: ReactRouter$HistoryLocation;

declare var RefreshLocation: ReactRouter$RefreshLocation;

declare var StaticLocation: ReactRouter$StaticLocation;

declare var TestLocation: ReactRouter$TestLocation;

declare interface ReactRouter$ScrollBehaviorBase {
    updateScrollPosition(position: {
        x: number,
        y: number
    }, actionType: string): void
}

declare type ReactRouter$ImitateBrowserBehavior = {} & ReactRouter$ScrollBehaviorBase


declare type ReactRouter$ScrollToTopBehavior = {} & ReactRouter$ScrollBehaviorBase


declare var ImitateBrowserBehavior: ReactRouter$ImitateBrowserBehavior;

declare var ScrollToTopBehavior: ReactRouter$ScrollToTopBehavior;

declare interface ReactRouter$Navigation {
    makePath(to: string, params?: {}, query?: {}): string,
        makeHref(to: string, params?: {}, query?: {}): string,
        transitionTo(to: string, params?: {}, query?: {}): void,
        replaceWith(to: string, params?: {}, query?: {}): void,
        goBack(): void
}

declare interface ReactRouter$State {
    getPath(): string,
        getRoutes(): ReactRouter$Route[],
        getPathname(): string,
        getParams(): {},
        getQuery(): {},
        isActive(to: string, params?: {}, query?: {}): boolean
}

declare var Navigation: ReactRouter$Navigation;

declare var State: ReactRouter$State;

declare interface ReactRouter$History {
    back(): void,
        length: number
}

declare var History: ReactRouter$History;

declare interface ReactRouter$Context {
    makePath(to: string, params?: {}, query?: {}): string,
        makeHref(to: string, params?: {}, query?: {}): string,
        transitionTo(to: string, params?: {}, query?: {}): void,
        replaceWith(to: string, params?: {}, query?: {}): void,
        goBack(): void,
        getCurrentPath(): string,
        getCurrentRoutes(): ReactRouter$Route[],
        getCurrentPathname(): string,
        getCurrentParams(): {},
        getCurrentQuery(): {},
        isActive(to: string, params?: {}, query?: {}): boolean
}
declare module 'react-router' {
    declare module.exports: typeof ReactRouter
}
declare module '___React' {
    declare     function createElement(
        type: ReactRouter$DefaultRouteClass,
        props: ReactRouter$DefaultRouteProp,
        ...children: ___React.ReactNode[]): ReactRouter$DefaultRoute
}
declare module 'react/addons' {
    declare     function createElement(
        type: ReactRouter$DefaultRouteClass,
        props: ReactRouter$DefaultRouteProp,
        ...children: ___React.ReactNode[]): ReactRouter$DefaultRoute
}