

declare module 'enzyme' {
	declare export type EnzymeSelector = string | StatelessComponent<any> | ComponentClass<any> | {
		[key: string]: any
	};

	declare export type EnzymePropSelector = {
		[key: string]: any
	};

	declare interface CommonWrapper<P, S> {
		find<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		find<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		find(props: EnzymePropSelector): CommonWrapper<any, any>,
		find(selector: string): CommonWrapper<HTMLAttributes, any>,
		findWhere(
		predicate: (wrapper: CommonWrapper<any, any>) => boolean
	): CommonWrapper<any, any>,
		filter<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		filter<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		filter(props: EnzymePropSelector): CommonWrapper<any, any>,
		filter(selector: string): CommonWrapper<HTMLAttributes, any>,
		filterWhere(predicate: (wrapper: this) => boolean): this,
		contains(node: ReactElement<any>): boolean,
		containsMatchingElement(node: ReactElement<any>): boolean,
		containsAllMatchingElements(nodes: ReactElement<any>[]): boolean,
		containsAnyMatchingElements(nodes: ReactElement<any>[]): boolean,
		equals(node: ReactElement<any>): boolean,
		matchesElement(node: ReactElement<any>): boolean,
		hasClass(className: string): boolean,
		is(selector: EnzymeSelector): boolean,
		isEmpty(): boolean,
		not(selector: EnzymeSelector): this,
		children<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		children<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		children(props: EnzymePropSelector): CommonWrapper<any, any>,
		children(selector: string): CommonWrapper<HTMLAttributes, any>,
		children(): CommonWrapper<any, any>,
		childAt(index: number): CommonWrapper<any, any>,
		childAt<P2, S2>(index: number): CommonWrapper<P2, S2>,
		parents<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		parents<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		parents(props: EnzymePropSelector): CommonWrapper<any, any>,
		parents(selector: string): CommonWrapper<HTMLAttributes, any>,
		parents(): CommonWrapper<any, any>,
		parent(): CommonWrapper<any, any>,
		closest<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		closest<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		closest(props: EnzymePropSelector): CommonWrapper<any, any>,
		closest(selector: string): CommonWrapper<HTMLAttributes, any>,
		text(): string,
		html(): string,
		get(index: number): ReactElement<any>,
		at(index: number): this,
		first(): this,
		last(): this,
		state(): S,
		state(key: string): any,
		state<T>(key: string): T,
		context(key?: string): any,
		context<T>(key?: string): T,
		props(): P,
		prop(key: string): any,
		prop<T>(key: string): T,
		key(): string,
		simulate(event: string, ...args: any[]): this,
		setState(state: S, callback?: () => void): this,
		setProps(props: P, callback?: () => void): this,
		setContext(context: Object): this,
		instance(): Component<P, S>,
		update(): this,
		debug(): string,
		type(): string | Function,
		name(): string,
		forEach(fn: (wrapper: this) => any): this,
		map<V>(fn: (wrapper: this) => V): V[],
		reduce<R>(fn: (prevVal: R, wrapper: this, index: number) => R, initialValue?: R): R[],
		reduceRight<R>(fn: (prevVal: R, wrapper: this, index: number) => R, initialValue?: R): R[],
		some(selector: EnzymeSelector): boolean,
		someWhere(fn: (wrapper: this) => boolean): boolean,
		every(selector: EnzymeSelector): boolean,
		everyWhere(fn: (wrapper: this) => boolean): boolean,
		length: number
	}

	declare export interface ShallowWrapper<P, S> {
		shallow(): ShallowWrapper<P, S>,
		render(): CheerioWrapper<P, S>,
		unmount(): ShallowWrapper<any, any>,
		find<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		find<P2>(
		statelessComponent: (props: P2) => JSX.Element
	): ShallowWrapper<P2, {
		
	}>,
		find(props: EnzymePropSelector): ShallowWrapper<any, any>,
		find(selector: string): ShallowWrapper<HTMLAttributes, any>,
		filter<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		filter<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, {
		
	}>,
		filter(props: EnzymePropSelector): ShallowWrapper<any, any>,
		filter(selector: string): ShallowWrapper<HTMLAttributes, any>,
		findWhere(
		predicate: (wrapper: CommonWrapper<any, any>) => boolean
	): ShallowWrapper<any, any>,
		children<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		children<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, {
		
	}>,
		children(props: EnzymePropSelector): ShallowWrapper<any, any>,
		children(selector: string): ShallowWrapper<HTMLAttributes, any>,
		children(): ShallowWrapper<any, any>,
		childAt(index: number): ShallowWrapper<any, any>,
		childAt<P2, S2>(index: number): ShallowWrapper<P2, S2>,
		dive<P2, S2>(options?: ShallowRendererProps): ShallowWrapper<P2, S2>,
		parents<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		parents<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, {
		
	}>,
		parents(props: EnzymePropSelector): ShallowWrapper<any, any>,
		parents(selector: string): ShallowWrapper<HTMLAttributes, any>,
		parents(): ShallowWrapper<any, any>,
		closest<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		closest<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, {
		
	}>,
		closest(props: EnzymePropSelector): ShallowWrapper<any, any>,
		closest(selector: string): ShallowWrapper<HTMLAttributes, any>,
		parent(): ShallowWrapper<any, any>,
		isEmptyRender(): boolean
	}

	declare export interface ReactWrapper<P, S> {
		unmount(): ReactWrapper<any, any>,
		mount(): ReactWrapper<any, any>,
		render(): CheerioWrapper<P, S>,
		ref(refName: string): ReactWrapper<any, any>,
		ref<P2, S2>(refName: string): ReactWrapper<P2, S2>,
		detach(): void,
		find<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		find<P2>(statelessComponent: (props: P2) => JSX.Element): ReactWrapper<P2, {
		
	}>,
		find(props: EnzymePropSelector): ReactWrapper<any, any>,
		find(selector: string): ReactWrapper<HTMLAttributes, any>,
		findWhere(
		predicate: (wrapper: CommonWrapper<any, any>) => boolean
	): ReactWrapper<any, any>,
		filter<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		filter<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, {
		
	}>,
		filter(props: EnzymePropSelector): ReactWrapper<any, any>,
		filter(selector: string): ReactWrapper<HTMLAttributes, any>,
		children<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		children<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, {
		
	}>,
		children(props: EnzymePropSelector): ReactWrapper<any, any>,
		children(selector: string): ReactWrapper<HTMLAttributes, any>,
		children(): ReactWrapper<any, any>,
		childAt(index: number): ReactWrapper<any, any>,
		childAt<P2, S2>(index: number): ReactWrapper<P2, S2>,
		parents<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		parents<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, {
		
	}>,
		parents(props: EnzymePropSelector): ReactWrapper<any, any>,
		parents(selector: string): ReactWrapper<HTMLAttributes, any>,
		parents(): ReactWrapper<any, any>,
		closest<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		closest<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, {
		
	}>,
		closest(props: EnzymePropSelector): ReactWrapper<any, any>,
		closest(selector: string): ReactWrapper<HTMLAttributes, any>,
		parent(): ReactWrapper<any, any>,
		isEmptyRender(): boolean
	}

	declare export interface CheerioWrapper<P, S> {
		
	}

	declare export interface ShallowRendererProps {
		lifecycleExperimental?: boolean,
		context?: {
		
	}
	}

	declare export interface MountRendererProps {
		context?: {
		
	},
		attachTo?: HTMLElement,
		childContextTypes?: {
		
	}
	}

	declare export function shallow<P, S>(
		node: ReactElement<P>, options?: ShallowRendererProps
	): ShallowWrapper<P, S>

	declare export function mount<P, S>(node: ReactElement<P>, options?: MountRendererProps): ReactWrapper<P, S>

	declare export function render<P, S>(node: ReactElement<P>, options?: any): CheerioWrapper<P, S>

	declare export function describeWithDOM(description: string, fn: Function): void

	declare export function spyLifecycle(component: typeof Component): void

	declare export class ElementClass extends Component<any, any> {
		
	}

	
}