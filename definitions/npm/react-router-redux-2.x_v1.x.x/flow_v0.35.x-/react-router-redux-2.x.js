

declare module 'react-router-redux-2.x' {
					
}

declare module 'npm$namespace$ReactRouterRedux' {
	declare type LocationDescriptor = H.LocationDescriptor;

	declare type PushAction = (nextLocation: LocationDescriptor) => void;

	declare type ReplaceAction = (nextLocation: LocationDescriptor) => void;

	declare type GoAction = (n: number) => void;

	declare type GoForwardAction = () => void;

	declare type GoBackAction = () => void;

	declare interface RouteActions {
		push: PushAction,
		replace: ReplaceAction,
		go: GoAction,
		goForward: GoForwardAction,
		goBack: GoBackAction
	}

	declare interface HistoryMiddleware {
		listenForReplays(store: R.Store<any>, selectLocationState?: Function): void,
		unsubscribe(): void
	}

	declare function routeReducer(state?: any, options?: any): R.Reducer<any>

	declare function syncHistory(history: H.History): HistoryMiddleware

		
}

declare module 'react-router-redux' {
					declare module.exports: undefined


}