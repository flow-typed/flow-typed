import type { RouterStatic } from 'npm$namespace$vuejs'

declare module 'vue-router' {
					declare module.exports: RouterStatic


}

declare module 'npm$namespace$vuejs' {
		declare interface Transition<RootVueApp, FromParams, FromQuery, ToParams, ToQuery> {
		from: $route<RootVueApp, FromParams, FromQuery>,
		to: $route<RootVueApp, ToParams, ToQuery>,
		next(data?: any): void,
		abort(reason?: any): void,
		redirect(path: string): void
	}

	declare interface RouterOption {
		hashbang?: boolean,
		history?: boolean,
		abstract?: boolean,
		root?: string,
		linkActiveClass?: string,
		saveScrollPosition?: boolean,
		transitionOnLoad?: boolean,
		suppressTransitionError?: boolean
	}

	declare interface RouterStatic {
		new <RootVueApp>(option?: RouterOption): Router<RootVueApp>
	}

	declare interface RouteMapObject {
		component: any,
		subRoutes?: {
		[key: string]: RouteMapObject
	},
		[key: string]: any
	}

	declare interface Router<RootVueApp> {
		app: RootVueApp,
		mode: string,
		start(App: any, el: string | Element): void,
		stop(): void,
		map(routeMap: {
		[path: string]: RouteMapObject
	}): void,
		on(path: string, config: Object): void,
		go(path: string | Object): void,
		replace(path: string): void,
		redirect(redirectMap: Object): void,
		alias(aliasMap: Object): void,
		beforeEach<FP, FQ, TP, TQ>(
		hook: (transition: Transition<RootVueApp, FP, FQ, TP, TQ>) => any
	): void,
		afterEach<FP, FQ, TP, TQ>(
		hook: (transition: Transition<RootVueApp, FP, FQ, TP, TQ>) => any
	): void
	}

	declare interface $route<RootVueApp, Params, Query> {
		path: string,
		params: Params,
		query: Query,
		router: Router<RootVueApp>,
		matched: string[],
		name: string,
		[key: string]: any
	}

	declare interface TransitionHook<Root, FP, FQ, TP, TQ> {
		data(transition?: Transition<Root, FP, FQ, TP, TQ>): PromiseLike<any> | void,
		activate(transition?: Transition<Root, FP, FQ, TP, TQ>): PromiseLike<any> | void,
		deactivate(transition?: Transition<Root, FP, FQ, TP, TQ>): PromiseLike<any> | void,
		canActivate(
		transition?: Transition<Root, FP, FQ, TP, TQ>
	): PromiseLike<any> | boolean | void,
		canDeactivate(
		transition?: Transition<Root, FP, FQ, TP, TQ>
	): PromiseLike<any> | boolean | void,
		canReuse?: boolean | ((transition: Transition<Root, FP, FQ, TP, TQ>) => boolean)
	}

	declare interface Vue {
		$route: vuejs.$route<any, any, any>,
		$router: vuejs.Router<any>
	}

	declare interface ComponentOption {
		route?: vuejs.TransitionHook<any, any, any, any, any>
	}

			
}