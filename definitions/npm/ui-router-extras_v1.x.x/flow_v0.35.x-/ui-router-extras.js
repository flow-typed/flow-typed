

declare module 'ui-router-extras' {
					
}

declare module 'angular-ui-router-extras' {
					declare module.exports: undefined


}

declare module 'ui' {
		declare interface IDeepStateRedirectService {
		reset(stateName: string, stateParams?: {
		[key: string]: string | string[]
	}): void
	}

	declare interface IDeepStateRedirectConfig {
		default?: string | IRedirectParams,
		params?: boolean | string[],
		fn(
		$dsr$: {
		redirect: IRedirectParams,
		to: IRedirectParams
	}
	): boolean | IRedirectParams
	}

	declare interface IRedirectParams {
		state: string,
		params?: ui.IStateParamsService
	}

	declare interface IPreviousState {
		state: IState,
		params?: ui.IStateParamsService
	}

	declare interface IPreviousStateService {
		get(memoName?: string): IPreviousState,
		go(memoName: string, options?: IStateOptions): angular.IPromise<any>,
		memo(
		memoName: string, defaultStateName?: string, defaultStateParams?: {
		
	}
	): void,
		forget(memoName: string): void
	}

	declare interface IStickyState {
		sticky?: boolean,
		deepStateRedirect?: boolean | IDeepStateRedirectConfig,
		dsr?: boolean | IDeepStateRedirectConfig,
		onInactivate?: Function,
		onReactivate?: Function,
		views?: {
		[name: string]: angular.ui.IState
	}
	}

	declare interface IStickyStateService {
		getInactiveStates(): IStickyState[]
	}

	declare interface IStickyStateProvider {
		debugMode(): boolean,
		enableDebug(enabled: boolean): boolean,
		registerStickyState(state: IStickyState): void
	}

	declare interface IStateProvider {
		state(config: IStickyState): IStateProvider,
		state(name: string, config: IStickyState): IStateProvider
	}

			
}