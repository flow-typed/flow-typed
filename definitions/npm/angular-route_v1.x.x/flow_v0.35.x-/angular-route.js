

declare module 'angular-route' {
					declare module.exports: undefined


}

declare module 'route' {
	declare type InlineAnnotatedFunction = Function | Array<string | Function>;

	declare interface IRouteParamsService {
		[key: string]: any
	}

	declare interface IRouteService {
		reload(): void,
		routes: any,
		current?: ICurrentRoute,
		updateParams(newParams: {
		[key: string]: string
	}): void
	}

	declare interface IRoute {
		controller?: string | InlineAnnotatedFunction,
		controllerAs?: string,
		name?: string,
		template?: string | {
		($routeParams?: angular.route.IRouteParamsService): string
	},
		templateUrl?: string | {
		($routeParams?: angular.route.IRouteParamsService): string
	},
		resolve?: {
		[key: string]: any
	},
		redirectTo?: string | {
		($routeParams?: angular.route.IRouteParamsService, $locationPath?: string, $locationSearch?: any): string
	},
		reloadOnSearch?: boolean,
		caseInsensitiveMatch?: boolean
	}

	declare interface ICurrentRoute {
		locals: {
		[index: string]: any,
		$scope: IScope,
		$template: string
	},
		params: any
	}

	declare interface IRouteProvider {
		caseInsensitiveMatch?: boolean,
		otherwise(params: IRoute): IRouteProvider,
		when(path: string, route: IRoute): IRouteProvider
	}

			
}