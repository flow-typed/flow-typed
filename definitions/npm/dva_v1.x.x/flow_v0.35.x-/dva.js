

declare module 'dva' {
			declare export function connect(maps: Object): Function

	declare export default function dva(
		opts?: Object
	): {
		use: (hooks: Object) => void,
		start: (selector?: String | HTMLElement) => void,
		model: (model: Object) => void,
		router: (router: Object) => Object | JSX.Element
	}

		
}

declare module 'dva/router' {
		declare interface RouterProps {
		history?: Object
	}

	declare interface RouteProps {
		path?: string,
		component?: React.ReactNode
	}

		declare export class Router extends React$Component<RouterProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Route extends React$Component<RouteProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class routerRedux  {
		
	}

	
}

declare module 'dva/fetch' {
					declare module.exports: undefined


}