

declare module 'react-dom' {
					declare module.exports: undefined


}

declare module '___DOM' {
			declare function findDOMNode<E>(instance: ReactInstance): E

	declare function findDOMNode(instance: ReactInstance): Element

	declare function render<P, T>(
		element: DOMElement<P, T>, container: Element, callback?: (element: T) => any
	): T

	declare function render<P>(element: SFCElement<P>, container: Element, callback?: () => any): void

	declare function render<P, T>(
		element: CElement<P, T>, container: Element, callback?: (component: T) => any
	): T

	declare function render<P>(
		element: ReactElement<P>, container: Element, callback?: (component?: Component<P, ComponentState> | Element) => any
	): Component<P, ComponentState> | Element | void

	declare function unmountComponentAtNode(container: Element): boolean

	declare function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void

	declare function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void

	declare function unstable_batchedUpdates(callback: () => any): void

	declare function unstable_renderSubtreeIntoContainer<P, T>(
		parentComponent: Component<any, any>, element: DOMElement<P, T>, container: Element, callback?: (element: T) => any
	): T

	declare function unstable_renderSubtreeIntoContainer<P, T>(
		parentComponent: Component<any, any>, element: CElement<P, T>, container: Element, callback?: (component: T) => any
	): T

	declare function render<P>(
		parentComponent: Component<any, any>, element: SFCElement<P>, container: Element, callback?: () => any
	): void

	declare function unstable_renderSubtreeIntoContainer<P>(
		parentComponent: Component<any, any>, element: ReactElement<P>, container: Element, callback?: (component?: Component<P, ComponentState> | Element) => any
	): Component<P, ComponentState> | Element | void

		
}

declare module '___DOMServer' {
			declare function renderToString(element: ReactElement<any>): string

	declare function renderToStaticMarkup(element: ReactElement<any>): string

		
}

declare module 'react-dom/server' {
					declare module.exports: undefined


}