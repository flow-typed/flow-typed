

declare module 'angular-breadcrumb' {
					
}

declare module 'ui' {
		declare export interface IState {
		ncyBreadcrumb?: {
		label?: string,
		parent?: string | Function,
		skip?: boolean
	},
		ncyBreadcrumbLabel?: string,
		ncyBreadcrumbLink?: string
	}

			
}

declare module 'npm$namespace$ncy' {
		declare export interface $breadcrumbProvider {
		setOptions(options: breadcrumbProviderOptions): void
	}

	declare export interface breadcrumbProviderOptions {
		prefixStateName?: string,
		template?: string,
		templateUrl?: string,
		includeAbstract?: boolean
	}

	declare export interface $breadcrumbService {
		getStatesChain(): angular.ui.IState[],
		getLastStep(): angular.ui.IState
	}

			
}