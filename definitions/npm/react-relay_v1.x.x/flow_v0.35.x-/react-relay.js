

declare module 'react-relay' {
		declare interface Fragments {
		[query: string]: ((variables?: RelayVariables) => string)
	}

	declare interface CreateContainerOpts {
		initialVariables?: Object,
		fragments: Fragments,
		prepareVariables(prevVariables: RelayVariables): RelayVariables
	}

	declare interface RelayVariables {
		[name: string]: any
	}

	declare interface RelayContainerClass<T> {
		getFragment: ((q: string) => string)
	}

	declare interface RelayQueryRequestResolve {
		response: any
	}

	declare interface RelayMutationRequest {
		getQueryString(): string,
		getVariables(): RelayVariables,
		resolve(result: RelayQueryRequestResolve): any,
		reject(errors: any): any
	}

	declare interface RelayQueryRequest {
		resolve(result: RelayQueryRequestResolve): any,
		reject(errors: any): any,
		getQueryString(): string,
		getVariables(): RelayVariables,
		getID(): string,
		getDebugName(): string
	}

	declare interface RelayNetworkLayer {
		supports(...options: string[]): boolean
	}

	declare interface Transaction {
		getError(): Error,
		Status(): number
	}

	declare interface StoreUpdateCallbacks<T> {
		onFailure(transaction: Transaction): any,
		onSuccess(response: T): any
	}

	declare interface Store {
		commitUpdate(mutation: Mutation<any, any>, callbacks?: StoreUpdateCallbacks<any>): any
	}

	declare interface RootContainerProps {
		Component: RelayContainerClass<any>,
		route: Route,
		renderLoading(): JSX.Element,
		renderFetched(data: any): JSX.Element,
		renderFailure(error: Error, retry: Function): JSX.Element
	}

	declare interface RelayProp {
		variables: any,
		setVariables(variables: Object): void
	}

	declare function createContainer<T>(
		component: React.ComponentClass<T>, params?: CreateContainerOpts
	): RelayContainerClass<any>

	declare function injectNetworkLayer(networkLayer: RelayNetworkLayer): any

	declare function isContainer(component: React.ComponentClass<any>): boolean

	declare function QL(...args: any[]): string

	declare class DefaultNetworkLayer extends RelayNetworkLayer {
		constructor(host: string, options: any): this;
		supports(...options: string[]): boolean
	}

	declare class Route  {
		constructor(params?: RelayVariables): this
	}

	declare class Mutation<T, S>  {
		props: T;
		constructor(props: T): this;
		getFragment(q: string): string
	}

	declare class RootContainer extends React$Component<RootContainerProps, any> {
		
	}

	
}