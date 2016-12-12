

declare module 'react-router-redux' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactRouterRedux' {
	declare type LocationDescriptor = H.LocationDescriptor;

	declare type PushAction = (nextLocation: LocationDescriptor) => RouterAction;

	declare type ReplaceAction = (nextLocation: LocationDescriptor) => RouterAction;

	declare type GoAction = (n: number) => RouterAction;

	declare type GoForwardAction = () => RouterAction;

	declare type GoBackAction = () => RouterAction;

	declare type RouterAction = {
		type: string,
		payload?: LocationDescriptor
	};

	declare interface RouteActions {
		push: PushAction,
		replace: ReplaceAction,
		go: GoAction,
		goForward: GoForwardAction,
		goBack: GoBackAction
	}

	declare interface ReactRouterReduxHistory {
		unsubscribe(): void
	}

	declare interface DefaultSelectLocationState {
		(state: any): any
	}

	declare interface SyncHistoryWithStoreOptions {
		selectLocationState?: DefaultSelectLocationState,
		adjustUrlOnReplay?: boolean
	}

	declare function routerReducer(state?: any, options?: any): R.Reducer<any>

	declare function syncHistoryWithStore(
		history: H.History, store: R.Store<any>, options?: SyncHistoryWithStoreOptions
	): ReactRouterReduxHistory

	declare function routerMiddleware(history: H.History): R.Middleware

		
}