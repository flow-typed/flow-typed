

declare module 'forge-di' {
				declare class Forge  {
		new(): Forge;
		bindings: Forge.IBindingMap;
		bind(name: string): Forge.IBinding;
		rebind(name: string): Forge.IBinding;
		unbind(name: string): number;
		get<T>(name: string, hint?: string, ...args: any[]): T;
		getOne<T>(name: string, hint?: string, ...args: any[]): T;
		getAll<T>(name: string, ...args: any[]): T | T[];
		create<T>(target: T, ...args: any[]): T;
		getMatchingBindings(name: string, hint?: string): Forge.IBinding[];
		inspect(): string;
		resolve<T>(
		name: string, context?: Forge.IContext, hint?: string, all?: boolean, ...args: any[]
	): T | T[];
		resolveBindings(
		context: Forge.IContext, bindings: Forge.IBinding[], hint: string, args: any[], unwrap: boolean
	): Forge.IBinding[]
	}

	declare module.exports: undefined


}

declare module 'Forge' {
		declare interface IContext {
		new (): IContext,
		bindings: IBinding[],
		has(binding: IBinding): boolean,
		push(binding: IBinding): void,
		pop(): IBinding,
		toString(indent: number): string
	}

	declare interface IType {
		new (...args: any[]): any
	}

	declare interface IBindingArguments {
		[name: string]: any
	}

	declare interface IBinding {
		forge: Forge,
		name: string,
		to: IBinding,
		as: IBinding,
		isResolving: boolean,
		resolver: IResolver,
		lifecycle: ILifecycle,
		predicate: IPredicate,
		arguments: IBindingArguments,
		matches(hint: string): boolean,
		type<T>(target: T): IBinding,
		function<T>(target: T): IBinding,
		instance<T>(target: T): IBinding,
		singleton(): IBinding,
		transient(): IBinding,
		when(predicate: IPredicate): IBinding,
		when(hint: string): IBinding,
		with(args: IBindingArguments): IBinding,
		toString(): string
	}

	declare interface IBindingMap {
		[name: string]: IBinding[]
	}

	declare interface IPredicate {
		(hint: string): boolean
	}

	declare interface IResolver {
		resolve<T>(): T
	}

	declare interface ILifecycle {
		getInstance<T>(resolver: IResolver): T
	}

			
}