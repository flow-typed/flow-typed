

declare module 'inversify' {
		declare interface Symbol {
		toString(): string,
		valueOf(): Object
	}

	declare interface SymbolConstructor {
		(description?: string | number): Symbol
	}

			declare module.exports: undefined


}

declare module 'interfaces' {
	declare export type ServiceIdentifier<T> = (string | Symbol | Newable<T>);

	declare export interface KernelConstructor {
		new (): Kernel
	}

	declare export interface KernelModuleConstructor {
		new (registry: (bind: Bind) => void): KernelModule
	}

	declare export interface Newable<T> {
		new (...args: any[]): T
	}

	declare export interface Binding<T> {
		guid: string,
		moduleId: string,
		activated: boolean,
		serviceIdentifier: ServiceIdentifier<T>,
		implementationType: Newable<T>,
		factory: FactoryCreator<any>,
		provider: ProviderCreator<any>,
		constraint: (request: Request) => boolean,
		onActivation: (context: Context, injectable: T) => T,
		cache: T,
		dynamicValue: (context: Context) => T,
		scope: number,
		type: number
	}

	declare export interface Factory<T> {
		(...args: any[]): (((...args: any[]) => T) | T)
	}

	declare export interface FactoryCreator<T> {
		(context: Context): Factory<T>
	}

	declare export interface Provider<T> {
		(): Promise<T>
	}

	declare export interface ProviderCreator<T> {
		(context: Context): Provider<T>
	}

	declare export interface PlanAndResolve<T> {
		(args: PlanAndResolveArgs): T[]
	}

	declare export interface PlanAndResolveArgs {
		multiInject: boolean,
		serviceIdentifier: ServiceIdentifier<any>,
		target: Target,
		contextInterceptor: (contexts: Context) => Context
	}

	declare export interface Middleware {
		(next: PlanAndResolve<any>): PlanAndResolve<any>
	}

	declare export interface Context {
		guid: string,
		kernel: Kernel,
		plan: Plan,
		addPlan(plan: Plan): void
	}

	declare export interface ReflectResult {
		[key: string]: Metadata[]
	}

	declare export interface Metadata {
		key: string,
		value: any
	}

	declare export interface Plan {
		parentContext: Context,
		rootRequest: Request
	}

	declare export interface Planner {
		createContext(kernel: Kernel): Context,
		createPlan(parentContext: Context, binding: Binding<any>, target: Target): Plan,
		getBindings<T>(kernel: Kernel, serviceIdentifier: ServiceIdentifier<T>): Binding<T>[],
		getActiveBindings(parentRequest: Request, target: Target): Binding<any>[]
	}

	declare export interface QueryableString {
		startsWith(searchString: string): boolean,
		endsWith(searchString: string): boolean,
		contains(searchString: string): boolean,
		equals(compareString: string): boolean,
		value(): string
	}

	declare export interface Request {
		guid: string,
		serviceIdentifier: ServiceIdentifier<any>,
		parentContext: Context,
		parentRequest: Request,
		childRequests: Request[],
		target: Target,
		bindings: Binding<any>[],
		addChildRequest(
		serviceIdentifier: ServiceIdentifier<any>, bindings: (Binding<any> | Binding<any>[]), target: Target
	): Request
	}

	declare export interface Target {
		guid: string,
		serviceIdentifier: ServiceIdentifier<any>,
		type: number,
		name: QueryableString,
		metadata: Array<Metadata>,
		hasTag(key: string): boolean,
		isArray(): boolean,
		matchesArray(name: string | Symbol | Newable<any>): boolean,
		isNamed(): boolean,
		isTagged(): boolean,
		matchesNamedTag(name: string): boolean,
		matchesTag(key: string): (value: any) => boolean
	}

	declare export interface Resolver {
		resolve<T>(context: Context): T
	}

	declare export interface Kernel {
		guid: string,
		parent: Kernel,
		bind<T>(serviceIdentifier: ServiceIdentifier<T>): BindingToSyntax<T>,
		unbind(serviceIdentifier: ServiceIdentifier<any>): void,
		unbindAll(): void,
		isBound(serviceIdentifier: ServiceIdentifier<any>): boolean,
		get<T>(serviceIdentifier: ServiceIdentifier<T>): T,
		getNamed<T>(serviceIdentifier: ServiceIdentifier<T>, named: string): T,
		getTagged<T>(serviceIdentifier: ServiceIdentifier<T>, key: string, value: any): T,
		getAll<T>(serviceIdentifier: ServiceIdentifier<T>): T[],
		getAllNamed<T>(serviceIdentifier: ServiceIdentifier<T>, named: string): T[],
		getAllTagged<T>(serviceIdentifier: ServiceIdentifier<T>, key: string, value: any): T[],
		load(...modules: KernelModule[]): void,
		unload(...modules: KernelModule[]): void,
		applyMiddleware(...middleware: Middleware[]): void,
		getServiceIdentifierAsString(serviceIdentifier: ServiceIdentifier<any>): string,
		snapshot(): void,
		restore(): void
	}

	declare export interface Bind {
		(serviceIdentifier: ServiceIdentifier<T>): BindingToSyntax<T>
	}

	declare export interface KernelModule {
		guid: string,
		registry: (bind: Bind) => void
	}

	declare export interface KernelSnapshot {
		bindings: Lookup<Binding<any>>,
		middleware: PlanAndResolve<any>
	}

	declare export interface Clonable<T> {
		clone(): T
	}

	declare export interface Lookup<T> {
		add(serviceIdentifier: ServiceIdentifier<any>, value: T): void,
		get(serviceIdentifier: ServiceIdentifier<any>): Array<T>,
		remove(serviceIdentifier: ServiceIdentifier<any>): void,
		removeByModuleId(moduleId: string): void,
		hasKey(serviceIdentifier: ServiceIdentifier<any>): boolean
	}

	declare export interface KeyValuePair<T> {
		serviceIdentifier: ServiceIdentifier<any>,
		value: Array<T>,
		guid: string
	}

	declare export interface BindingInSyntax<T> {
		inSingletonScope(): BindingWhenOnSyntax<T>,
		inTransientScope(): BindingWhenOnSyntax<T>
	}

	declare export interface BindingInWhenOnSyntax<T> {
		
	}

	declare export interface BindingOnSyntax<T> {
		onActivation(fn: (context: Context, injectable: T) => T): BindingWhenSyntax<T>
	}

	declare export interface BindingToSyntax<T> {
		to(constructor: {
		new (...args: any[]): T
	}): BindingInWhenOnSyntax<T>,
		toSelf(): BindingInWhenOnSyntax<T>,
		toConstantValue(value: T): BindingWhenOnSyntax<T>,
		toDynamicValue(func: (context: Context) => T): BindingWhenOnSyntax<T>,
		toConstructor<T2>(constructor: Newable<T2>): BindingWhenOnSyntax<T>,
		toFactory<T2>(factory: FactoryCreator<T2>): BindingWhenOnSyntax<T>,
		toFunction(func: T): BindingWhenOnSyntax<T>,
		toAutoFactory<T2>(serviceIdentifier: ServiceIdentifier<T2>): BindingWhenOnSyntax<T>,
		toProvider<T2>(provider: ProviderCreator<T2>): BindingWhenOnSyntax<T>
	}

	declare export interface BindingWhenOnSyntax<T> {
		
	}

	declare export interface BindingWhenSyntax<T> {
		when(constraint: (request: Request) => boolean): BindingOnSyntax<T>,
		whenTargetNamed(name: string): BindingOnSyntax<T>,
		whenTargetTagged(tag: string, value: any): BindingOnSyntax<T>,
		whenInjectedInto(parent: (Function | string)): BindingOnSyntax<T>,
		whenParentNamed(name: string): BindingOnSyntax<T>,
		whenParentTagged(tag: string, value: any): BindingOnSyntax<T>,
		whenAnyAncestorIs(ancestor: (Function | string)): BindingOnSyntax<T>,
		whenNoAncestorIs(ancestor: (Function | string)): BindingOnSyntax<T>,
		whenAnyAncestorNamed(name: string): BindingOnSyntax<T>,
		whenAnyAncestorTagged(tag: string, value: any): BindingOnSyntax<T>,
		whenNoAncestorNamed(name: string): BindingOnSyntax<T>,
		whenNoAncestorTagged(tag: string, value: any): BindingOnSyntax<T>,
		whenAnyAncestorMatches(constraint: (request: Request) => boolean): BindingOnSyntax<T>,
		whenNoAncestorMatches(constraint: (request: Request) => boolean): BindingOnSyntax<T>
	}

			
}

declare module 'npm$namespace$inversify' {
			declare export function injectable(): (typeConstructor: any) => void

	declare export function tagged(
		metadataKey: string, metadataValue: any
	): (target: any, targetKey: string, index?: number) => any

	declare export function named(name: string): (target: any, targetKey: string, index?: number) => any

	declare export function targetName(name: string): (target: any, targetKey: string, index: number) => any

	declare export function unmanaged(): (target: any, targetKey: string, index: number) => any

	declare export function inject(
		serviceIdentifier: interfaces.ServiceIdentifier<any>
	): (target: any, targetKey: string, index?: number) => any

	declare export function guid(): string

	declare export function multiInject(
		serviceIdentifier: interfaces.ServiceIdentifier<any>
	): (target: any, targetKey: string, index?: number) => any

		
}