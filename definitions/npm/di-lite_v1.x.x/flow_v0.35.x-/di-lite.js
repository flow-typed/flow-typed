import type { DiLiteStatic } from 'npm$namespace$DiLite'

declare module 'di-lite' {
					declare module.exports: DiLiteStatic


}

declare module 'npm$namespace$DiLite' {
		declare interface DiLiteStatic {
		version: string,
		createContext(): CreateContext,
		dependencyExpression(depExp: string): string,
		entry(name: string, ctx: CreateContext): any,
		strategy: StrategyEnum,
		factory: FactoryEnum,
		utils: Utils
	}

	declare interface Dictionary<T> {
		[index: string]: T
	}

	declare interface CreateContext {
		map: Dictionary<any>,
		entry<T>(name: string): T,
		register<T>(name: string, service: T): Entry,
		has(name: string): boolean,
		get(name: string): any,
		create<T>(name: string, args: any): T,
		initialize(): void,
		clear(): void,
		inject<T>(name: string, o: T, dependencies: string): T,
		ready<T>(o: Function): T,
		ready<T>(o: any): T
	}

	declare interface Entry {
		create(newArgs: any): Entry,
		object<T>(o: T): Entry,
		object<T>(): T,
		strategy<T>(s: Function): Entry,
		strategy<T>(): T,
		type<T>(t: T): Entry,
		type<T>(): T,
		dependencies<T>(d: T): Entry,
		dependencies<T>(): T,
		args<T>(a: T): Entry,
		args<T>(): T,
		factory(f: Function): Entry,
		factory<T>(): T
	}

	declare interface StrategyEnum {
		proto<TObject, TType>(
		name: string, object: TObject, type: TType, args: any, ctx: CreateContext, dependencies: any
	): TObject,
		singleton<TObject, TType>(
		name: string, object: TObject, type: TType, args: any, ctx?: CreateContext, dependencies?: any
	): TObject
	}

	declare interface FactoryEnum {
		constructor<T>(type: T, args: any): T,
		func<T>(type: T, args: any): T
	}

	declare interface Utils {
		invokeStmt(args: any, op: string): string
	}

			
}