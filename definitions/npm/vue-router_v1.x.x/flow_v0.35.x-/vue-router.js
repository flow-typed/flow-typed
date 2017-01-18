/**
 * Flowtype definitions for vue-router
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface vuejs$Transition<RootVueApp, FromParams, FromQuery, ToParams, ToQuery>{
    from: vuejs$$route<RootVueApp,
    FromParams,
    FromQuery>,
    to: vuejs$$route<RootVueApp,
    ToParams,
    ToQuery>,
    next(data?: any): void,
    abort(reason?: any): void,
    redirect(path: string): void
}

declare interface vuejs$RouterOption {
    hashbang?: boolean,
        history?: boolean,
        abstract?: boolean,
        root?: string,
        linkActiveClass?: string,
        saveScrollPosition?: boolean,
        transitionOnLoad?: boolean,
        suppressTransitionError?: boolean
}

declare interface vuejs$RouterStatic {
    new<RootVueApp>(option?: vuejs$RouterOption): vuejs$Router<RootVueApp >
}

declare interface vuejs$RouteMapObject {
    component: any,
        subRoutes?: {
            [key: string]: vuejs$RouteMapObject
        }, [key: string]: any
}

declare interface vuejs$Router<RootVueApp>{
    app: RootVueApp,
    mode: string,
    start(App: any, el: string | Element): void,
    stop(): void,
    map(routeMap: {
        [path: string]: vuejs$RouteMapObject
    }): void,
    on(path: string, config: Object): void,
    go(path: string | Object): void,
    replace(path: string): void,
    redirect(redirectMap: Object): void,
    alias(aliasMap: Object): void,
    beforeEach<FP,
    FQ,
    TP,
    TQ>(
        hook: (transition: vuejs$Transition<RootVueApp, FP, FQ, TP, TQ>) => any): void,
    afterEach<FP,
    FQ,
    TP,
    TQ>(
        hook: (transition: vuejs$Transition<RootVueApp, FP, FQ, TP, TQ>) => any): void
}

declare interface vuejs$$route<RootVueApp, Params, Query>{
    path: string,
    params: Params,
    query: Query,
    router: vuejs$Router<RootVueApp>,
    matched: string[],
    name: string,
    [key: string]: any
}

declare interface vuejs$TransitionHook<Root, FP, FQ, TP, TQ>{
    data(transition?: vuejs$Transition<Root, FP, FQ, TP, TQ>): PromiseLike<any>| void,
    activate(transition?: vuejs$Transition<Root, FP, FQ, TP, TQ>): PromiseLike<any>| void,
    deactivate(transition?: vuejs$Transition<Root, FP, FQ, TP, TQ>): PromiseLike<any>| void,
    canActivate(
        transition?: vuejs$Transition<Root, FP, FQ, TP, TQ>): PromiseLike<any>| boolean | void,
    canDeactivate(
        transition?: vuejs$Transition<Root, FP, FQ, TP, TQ>): PromiseLike<any>| boolean | void,
    canReuse?: boolean | ((transition: vuejs$Transition<Root, FP, FQ, TP, TQ>) => boolean)
}

declare interface vuejs$Vue {
    $route: vuejs$$route<any, any, any>,
        $router: vuejs$Router<any >
}

declare interface vuejs$ComponentOption {
    route?: vuejs$TransitionHook<any, any, any, any, any >
}
declare var VueRouter: vuejs$RouterStatic;
declare module 'vue-router' {
    declare module.exports: typeof VueRouter
}