

declare module 'react-global-0.13.3' {
					
}

declare module 'addons' {
			declare export function batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void

	declare export function batchedUpdates<A>(callback: (a: A) => any, a: A): void

	declare export function batchedUpdates(callback: () => any): void

	declare export function classSet(cx: {
		[key: string]: boolean
	}): string

	declare export function classSet(...classList: string[]): string

	declare export function cloneWithProps<P>(element: DOMElement<P>, props: P): DOMElement<P>

	declare export function cloneWithProps<P>(element: ClassicElement<P>, props: P): ClassicElement<P>

	declare export function cloneWithProps<P>(element: ReactElement<P>, props: P): ReactElement<P>

	declare export function createFragment(object: {
		[key: string]: ReactNode
	}): ReactFragment

	declare export function update(value: any[], spec: UpdateArraySpec): any[]

	declare export function update(value: {
		
	}, spec: UpdateSpec): any

		
}

declare module 'npm$namespace$___React' {
	declare type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;

	declare type TransitionGroup = ComponentClass<TransitionGroupProps>;

	declare type UpdateSpec = UpdateSpecCommand | UpdateSpecPath;

	declare interface TransitionGroupProps {
		component?: ReactType,
		childFactory?: (child: ReactElement<any>) => ReactElement<any>
	}

	declare interface CSSTransitionGroupProps {
		transitionName: string,
		transitionAppear?: boolean,
		transitionEnter?: boolean,
		transitionLeave?: boolean
	}

	declare interface ReactLink<T> {
		value: T,
		requestChange(newValue: T): void
	}

	declare interface LinkedStateMixin {
		linkState<T>(key: string): ReactLink<T>
	}

	declare interface PureRenderMixin {
		
	}

	declare interface UpdateSpecCommand {
		$set?: any,
		$merge?: {
		
	},
		$apply(value: any): any
	}

	declare interface UpdateSpecPath {
		[key: string]: UpdateSpec
	}

	declare interface UpdateArraySpec {
		$push?: any[],
		$unshift?: any[],
		$splice?: any[][]
	}

	declare interface ComponentPerfContext {
		current: string,
		owner: string
	}

	declare interface NumericPerfContext {
		[key: string]: number
	}

	declare interface Measurements {
		exclusive: NumericPerfContext,
		inclusive: NumericPerfContext,
		render: NumericPerfContext,
		counts: NumericPerfContext,
		writes: NumericPerfContext,
		displayNames: {
		[key: string]: ComponentPerfContext
	},
		totalTime: number
	}

	declare interface MockedComponentClass {
		new (): any
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
		(element: Element, eventData?: SyntheticEventData): void,
		(component: Component<any, any>, eventData?: SyntheticEventData): void
	}

		declare class ShallowRenderer  {
		getRenderOutput<E>(): E;
		getRenderOutput(): ReactElement<any>;
		render(element: ReactElement<any>, context?: any): void;
		unmount(): void
	}

	
}

declare module 'ReactPerf' {
			declare export function start(): void

	declare export function stop(): void

	declare export function printInclusive(measurements: Measurements[]): void

	declare export function printExclusive(measurements: Measurements[]): void

	declare export function printWasted(measurements: Measurements[]): void

	declare export function printDOM(measurements: Measurements[]): void

	declare export function getLastMeasurements(): Measurements[]

		
}

declare module 'ReactTestUtils' {
			declare export function renderIntoDocument<P>(element: ReactElement<P>): Component<P, any>

	declare export function renderIntoDocument<C>(element: ReactElement<any>): C

	declare export function mockComponent(mocked: MockedComponentClass, mockTagName?: string): typeof ReactTestUtils

	declare export function isElementOfType(element: ReactElement<any>, type: ReactType): boolean

	declare export function isTextComponent(instance: Component<any, any>): boolean

	declare export function isDOMComponent(instance: Component<any, any>): boolean

	declare export function isCompositeComponent(instance: Component<any, any>): boolean

	declare export function isCompositeComponentWithType(instance: Component<any, any>, type: ComponentClass<any>): boolean

	declare export function findAllInRenderedTree(
		tree: Component<any, any>, fn: (i: Component<any, any>) => boolean
	): Component<any, any>

	declare export function scryRenderedDOMComponentsWithClass(tree: Component<any, any>, className: string): DOMComponent<any>[]

	declare export function findRenderedDOMComponentWithClass(tree: Component<any, any>, className: string): DOMComponent<any>

	declare export function scryRenderedDOMComponentsWithTag(tree: Component<any, any>, tagName: string): DOMComponent<any>[]

	declare export function findRenderedDOMComponentWithTag(tree: Component<any, any>, tagName: string): DOMComponent<any>

	declare export function scryRenderedComponentsWithType<P>(tree: Component<any, any>, type: ComponentClass<P>): Component<P, {
		
	}>[]

	declare export function scryRenderedComponentsWithType<C>(tree: Component<any, any>, type: ComponentClass<any>): C[]

	declare export function findRenderedComponentWithType<P>(tree: Component<any, any>, type: ComponentClass<P>): Component<P, {
		
	}>

	declare export function findRenderedComponentWithType<C>(tree: Component<any, any>, type: ComponentClass<any>): C

	declare export function createRenderer(): ShallowRenderer

		
}

declare module 'ReactSimulate' {
					
}