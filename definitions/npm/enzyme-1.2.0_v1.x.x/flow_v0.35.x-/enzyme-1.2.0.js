

declare module 'enzyme-1.2.0' {
					
}

declare module 'enzyme' {
	declare export type EnzymeSelector = String | typeof ElementClass;

	declare interface CommonWrapper<P, S> {
		find<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		find<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		find(selector: string): CommonWrapper<HTMLAttributes, any>,
		findWhere(
		predicate: (wrapper: CommonWrapper<any, any>) => Boolean
	): CommonWrapper<any, any>,
		filter<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		filter<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		filter(selector: string): CommonWrapper<HTMLAttributes, any>,
		filterWhere(predicate: (wrapper: this) => Boolean): this,
		contains(node: ReactElement<any>): Boolean,
		hasClass(className: String): Boolean,
		is(selector: EnzymeSelector): Boolean,
		not(selector: EnzymeSelector): this,
		children<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		children<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		children(selector: string): CommonWrapper<HTMLAttributes, any>,
		children(): CommonWrapper<any, any>,
		parents<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		parents<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		parents(selector: string): CommonWrapper<HTMLAttributes, any>,
		parents(): CommonWrapper<any, any>,
		parent(): CommonWrapper<any, any>,
		closest<P2>(component: ComponentClass<P2>): CommonWrapper<P2, any>,
		closest<P2>(statelessComponent: StatelessComponent<P2>): CommonWrapper<P2, {
		
	}>,
		closest(selector: string): CommonWrapper<HTMLAttributes, any>,
		text(): String,
		html(): String,
		get(index: number): ReactElement<any>,
		at(index: number): this,
		first(): this,
		last(): this,
		state(key?: String): any,
		props(): P,
		prop(key: String): any,
		simulate(event: string, ...args: any[]): this,
		setState(state: S): this,
		setProps(props: P): this,
		setContext(context: Object): this,
		instance(): Component<P, S>,
		update(): this,
		debug(): String,
		type(): String | Function,
		forEach(fn: (wrapper: this) => any): this,
		map<V>(fn: (wrapper: this) => V): V[],
		reduce<R>(fn: (prevVal: R, wrapper: this, index: number) => R, initialValue?: R): R[],
		reduceRight<R>(fn: (prevVal: R, wrapper: this, index: number) => R, initialValue?: R): R[],
		some(selector: EnzymeSelector): Boolean,
		someWhere(fn: (wrapper: this) => Boolean): Boolean,
		every(selector: EnzymeSelector): Boolean,
		everyWhere(fn: (wrapper: this) => Boolean): Boolean,
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
		find(selector: string): ShallowWrapper<HTMLAttributes, any>,
		filter<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		filter<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, {
		
	}>,
		filter(selector: string): ShallowWrapper<HTMLAttributes, any>,
		findWhere(
		predicate: (wrapper: CommonWrapper<any, any>) => Boolean
	): ShallowWrapper<any, any>,
		children<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		children<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, {
		
	}>,
		children(selector: string): ShallowWrapper<HTMLAttributes, any>,
		children(): ShallowWrapper<any, any>,
		parents<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		parents<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, {
		
	}>,
		parents(selector: string): ShallowWrapper<HTMLAttributes, any>,
		parents(): ShallowWrapper<any, any>,
		closest<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>,
		closest<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, {
		
	}>,
		closest(selector: string): ShallowWrapper<HTMLAttributes, any>,
		parent(): ShallowWrapper<any, any>
	}

	declare export interface ReactWrapper<P, S> {
		unmount(): ReactWrapper<any, any>,
		mount(): ReactWrapper<any, any>,
		find<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		find<P2>(statelessComponent: (props: P2) => JSX.Element): ReactWrapper<P2, {
		
	}>,
		find(selector: string): ReactWrapper<HTMLAttributes, any>,
		findWhere(
		predicate: (wrapper: CommonWrapper<any, any>) => Boolean
	): ReactWrapper<any, any>,
		filter<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		filter<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, {
		
	}>,
		filter(selector: string): ReactWrapper<HTMLAttributes, any>,
		children<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		children<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, {
		
	}>,
		children(selector: string): ReactWrapper<HTMLAttributes, any>,
		children(): ReactWrapper<any, any>,
		parents<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		parents<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, {
		
	}>,
		parents(selector: string): ReactWrapper<HTMLAttributes, any>,
		parents(): ReactWrapper<any, any>,
		closest<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>,
		closest<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, {
		
	}>,
		closest(selector: string): ReactWrapper<HTMLAttributes, any>,
		parent(): ReactWrapper<any, any>
	}

	declare export interface CheerioWrapper<P, S> {
		
	}

	declare export function shallow<P, S>(node: ReactElement<P>, options?: any): ShallowWrapper<P, S>

	declare export function mount<P, S>(node: ReactElement<P>, options?: any): ReactWrapper<P, S>

	declare export function render<P, S>(node: ReactElement<P>, options?: any): CheerioWrapper<P, S>

	declare export function describeWithDOM(description: String, fn: Function): void

	declare export function spyLifecycle(component: typeof Component): void

	declare export class ElementClass extends Component<any, any> {
		
	}

	
}