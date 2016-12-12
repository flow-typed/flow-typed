

declare module 'redux-router' {
					
}

declare module 'npm$namespace$___ReduxRouter' {
		declare export interface ReduxRouterAction {
		type: string,
		payload: any
	}

	declare export function isActive(pathname: H.Pathname, query?: H.Query, indexOnly?: boolean): boolean

	declare export function routerStateReducer(state: any, action: any): any

	declare export function routerDidChange(state: any): ReduxRouterAction

	declare export function initRoutes(routes: any): ReduxRouterAction

	declare export function replaceRoutes(routes: any): ReduxRouterAction

	declare export function historyAPI(method: any): (...args: Object[]) => ReduxRouterAction

	declare export class ReduxRouter extends React$Component<any, any> {
		
	}

	
}

declare module 'redux-router/lib/routerStateReducer' {
					


}

declare module 'redux-router/lib/ReduxRouter' {
					declare module.exports: undefined


}

declare module 'redux-router/lib/client' {
					


}

declare module 'redux-router/lib/isActive' {
					


}