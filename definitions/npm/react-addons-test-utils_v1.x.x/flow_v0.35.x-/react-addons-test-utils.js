

declare module 'react-addons-test-utils' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___React' {
		declare interface OptionalEventProperties {
		bubbles?: boolean,
		cancelable?: boolean,
		currentTarget?: EventTarget,
		defaultPrevented?: boolean,
		eventPhase?: number,
		isTrusted?: boolean,
		nativeEvent?: Event,
		preventDefault(): void,
		stopPropagation(): void,
		target?: EventTarget,
		timeStamp?: Date,
		type?: string
	}

	declare interface SyntheticEventData {
		altKey?: boolean,
		button?: number,
		buttons?: number,
		clientX?: number,
		clientY?: number,
		changedTouches?: TouchList,
		charCode?: boolean,
		clipboardData?: DataTransfer,
		ctrlKey?: boolean,
		deltaMode?: number,
		deltaX?: number,
		deltaY?: number,
		deltaZ?: number,
		detail?: number,
		getModifierState(key: string): boolean,
		key?: string,
		keyCode?: number,
		locale?: string,
		location?: number,
		metaKey?: boolean,
		pageX?: number,
		pageY?: number,
		relatedTarget?: EventTarget,
		repeat?: boolean,
		screenX?: number,
		screenY?: number,
		shiftKey?: boolean,
		targetTouches?: TouchList,
		touches?: TouchList,
		view?: AbstractView,
		which?: number
	}

	declare interface EventSimulator {
		(element: Element | Component<any, any>, eventData?: SyntheticEventData): void
	}

	declare interface MockedComponentClass {
		new (): any
	}

		declare class ShallowRenderer  {
		getRenderOutput<E>(): E;
		getRenderOutput(): ReactElement<any>;
		render(element: ReactElement<any>, context?: any): void;
		unmount(): void
	}

	
}

declare module 'Simulate' {
					
}

declare module 'TestUtils' {
			declare export function renderIntoDocument<T>(element: DOMElement<any, T>): T

	declare export function renderIntoDocument(element: SFCElement<any>): void

	declare export function renderIntoDocument<T>(element: CElement<any, T>): T

	declare export function renderIntoDocument<P>(element: ReactElement<P>): Component<P, {
		
	}> | Element | void

	declare export function mockComponent(mocked: MockedComponentClass, mockTagName?: string): typeof TestUtils

	declare export function isElementOfType<T>(element: ReactElement<any>, type: string): ReactHTMLElement

	declare export function isElementOfType<P, T>(element: ReactElement<any>, type: string): DOMElement

	declare export function isElementOfType<P>(element: ReactElement<any>, type: SFC<P>): SFCElement

	declare export function isElementOfType<P, T, C>(element: ReactElement<any>, type: ClassType<P, T, C>): CElement

	declare export function isDOMComponent(instance: ReactInstance): Element

	declare export function isCompositeComponent(instance: ReactInstance): Component

	declare export function isCompositeComponentWithType<T, C>(instance: ReactInstance, type: ClassType<any, T, C>): T

	declare export function findAllInRenderedTree(root: Component<any, any>, fn: (i: ReactInstance) => boolean): ReactInstance[]

	declare export function scryRenderedDOMComponentsWithClass(root: Component<any, any>, className: string): Element[]

	declare export function findRenderedDOMComponentWithClass(root: Component<any, any>, className: string): Element

	declare export function scryRenderedDOMComponentsWithTag(root: Component<any, any>, tagName: string): Element[]

	declare export function findRenderedDOMComponentWithTag(root: Component<any, any>, tagName: string): Element

	declare export function scryRenderedComponentsWithType<T, C>(root: Component<any, any>, type: ClassType<any, T, C>): T[]

	declare export function findRenderedComponentWithType<T, C>(root: Component<any, any>, type: ClassType<any, T, C>): T

	declare export function createRenderer(): ShallowRenderer

		
}