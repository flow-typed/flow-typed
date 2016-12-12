

declare module 'angular-route-1.2' {
					
}

declare module 'route' {
		declare interface IRouteParamsService {
		[key: string]: any
	}

	declare interface IRouteService {
		reload(): void,
		routes: any,
		current?: ICurrentRoute
	}

	declare interface IRoute {
		controller?: any,
		controllerAs?: string,
		name?: string,
		template?: string,
		templateUrl?: any,
		resolve?: {
		[key: string]: any
	},
		redirectTo?: any,
		reloadOnSearch?: boolean,
		caseInsensitiveMatch?: boolean
	}

	declare interface ICurrentRoute {
		locals: {
		$scope: IScope,
		$template: string
	},
		params: any
	}

	declare interface IRouteProvider {
		otherwise(params: IRoute): IRouteProvider,
		when(path: string, route: IRoute): IRouteProvider
	}

			
}