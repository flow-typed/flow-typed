

declare module 'angular-ui-router' {
	declare export type IState = angular.ui.IState;

	declare export type IStateProvider = angular.ui.IStateProvider;

	declare export type IUrlMatcher = angular.ui.IUrlMatcher;

	declare export type IUrlRouterProvider = angular.ui.IUrlRouterProvider;

	declare export type IStateOptions = angular.ui.IStateOptions;

	declare export type IHrefOptions = angular.ui.IHrefOptions;

	declare export type IStateService = angular.ui.IStateService;

	declare export type IResolvedState = angular.ui.IResolvedState;

	declare export type IStateParamsService = angular.ui.IStateParamsService;

	declare export type IUrlRouterService = angular.ui.IUrlRouterService;

	declare export type IUiViewScrollProvider = angular.ui.IUiViewScrollProvider;

	declare export type IType = angular.ui.IType;

				declare module.exports: undefined


}

declare module 'ui' {
		declare interface IState {
		name?: string,
		template?: string | {
		(params: IStateParamsService): string
	},
		templateUrl?: string | {
		(params: IStateParamsService): string
	},
		templateProvider?: Function | Array<string | Function>,
		component?: string,
		controller?: Function | string | Array<string | Function>,
		controllerAs?: string,
		controllerProvider?: Function | Array<string | Function>,
		parent?: string | IState,
		resolve?: {
		[name: string]: any
	},
		url?: string | IUrlMatcher,
		params?: any,
		views?: {
		[name: string]: IState
	},
		abstract?: boolean,
		onEnter?: Function | Array<string | Function>,
		onExit?: Function | Array<string | Function>,
		data?: any,
		reloadOnSearch?: boolean,
		cache?: boolean
	}

	declare interface IUnfoundState {
		to: string,
		toParams: {
		
	},
		options: IStateOptions
	}

	declare interface IStateProvider {
		state(name: string, config: IState): IStateProvider,
		state(config: IState): IStateProvider,
		decorator(name?: string, decorator?: (state: IState, parent: Function) => any): any
	}

	declare interface IUrlMatcher {
		concat(pattern: string): IUrlMatcher,
		exec(path: string, searchParams: {
		
	}): {
		
	},
		parameters(): string[],
		format(values: {
		
	}): string
	}

	declare interface IUrlMatcherFactory {
		compile(pattern: string): IUrlMatcher,
		isMatcher(o: any): boolean,
		type(name: string): IType,
		type(
		name: string, definition: IType, inlineAnnotedDefinitionFn?: any[]
	): IUrlMatcherFactory,
		type(
		name: string, definition: IType, definitionFn?: (...args: any[]) => IType
	): IUrlMatcherFactory,
		caseInsensitive(value?: boolean): boolean,
		defaultSquashPolicy(value: string): void,
		strictMode(value?: boolean): boolean
	}

	declare interface IUrlRouterProvider {
		when(whenPath: RegExp, handler: Function): IUrlRouterProvider,
		when(whenPath: RegExp, handler: any[]): IUrlRouterProvider,
		when(whenPath: RegExp, toPath: string): IUrlRouterProvider,
		when(whenPath: IUrlMatcher, hanlder: Function): IUrlRouterProvider,
		when(whenPath: IUrlMatcher, handler: any[]): IUrlRouterProvider,
		when(whenPath: IUrlMatcher, toPath: string): IUrlRouterProvider,
		when(whenPath: string, handler: Function): IUrlRouterProvider,
		when(whenPath: string, handler: any[]): IUrlRouterProvider,
		when(whenPath: string, toPath: string): IUrlRouterProvider,
		otherwise(handler: Function): IUrlRouterProvider,
		otherwise(handler: any[]): IUrlRouterProvider,
		otherwise(path: string): IUrlRouterProvider,
		rule(handler: Function): IUrlRouterProvider,
		rule(handler: any[]): IUrlRouterProvider,
		deferIntercept(defer?: boolean): void
	}

	declare interface IStateOptions {
		location?: boolean | string,
		inherit?: boolean,
		relative?: IState,
		notify?: boolean,
		reload?: boolean | string | IState
	}

	declare interface IHrefOptions {
		lossy?: boolean,
		inherit?: boolean,
		relative?: IState,
		absolute?: boolean
	}

	declare interface IStateService {
		go(to: string, params?: {
		
	}, options?: IStateOptions): angular.IPromise<any>,
		go(to: IState, params?: {
		
	}, options?: IStateOptions): angular.IPromise<any>,
		transitionTo(
		state: string, params?: {
		
	}, updateLocation?: boolean
	): angular.IPromise<any>,
		transitionTo(
		state: IState, params?: {
		
	}, updateLocation?: boolean
	): angular.IPromise<any>,
		transitionTo(
		state: string, params?: {
		
	}, options?: IStateOptions
	): angular.IPromise<any>,
		transitionTo(
		state: IState, params?: {
		
	}, options?: IStateOptions
	): angular.IPromise<any>,
		includes(state: string, params?: {
		
	}): boolean,
		includes(state: string, params?: {
		
	}, options?: any): boolean,
		is(state: string, params?: {
		
	}): boolean,
		is(state: IState, params?: {
		
	}): boolean,
		href(state: IState, params?: {
		
	}, options?: IHrefOptions): string,
		href(state: string, params?: {
		
	}, options?: IHrefOptions): string,
		get(state: string, context?: string): IState,
		get(state: IState, context?: string): IState,
		get(state: string, context?: IState): IState,
		get(state: IState, context?: IState): IState,
		get(): IState[],
		current: IState,
		params: IStateParamsService,
		reload(): angular.IPromise<any>,
		transition: angular.IPromise<{
		
	}>,
		$current: IResolvedState
	}

	declare interface IResolvedState {
		locals: {
		globals: {
		[key: string]: any
	}
	}
	}

	declare interface IStateParamsService {
		[key: string]: any
	}

	declare interface IUrlRouterService {
		sync(): void,
		listen(): Function,
		href(
		urlMatcher: IUrlMatcher, params?: IStateParamsService, options?: IHrefOptions
	): string,
		update(read?: boolean): void,
		push(
		urlMatcher: IUrlMatcher, params?: IStateParamsService, options?: IHrefOptions
	): void
	}

	declare interface IUiViewScrollProvider {
		useAnchorScroll(): void
	}

	declare interface IType {
		decode(val: string, key: string): any,
		encode(val: any, key: string): string,
		equals(a: any, b: any): boolean,
		is(val: any, key: string): boolean,
		pattern?: RegExp
	}

			
}