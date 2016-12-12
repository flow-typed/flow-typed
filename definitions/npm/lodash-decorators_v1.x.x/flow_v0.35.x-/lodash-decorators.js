

declare module 'lodash-decorators' {
		declare export interface ClassDecorator {
		(target: TFunction): TFunction | void
	}

	declare export interface PropertyDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword): void
	}

	declare export interface MethodDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void
	}

	declare export interface ParameterDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, parameterIndex: number): void
	}

	declare export interface TypedMethodDecorator<TFunction> {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, descriptor: TypedPropertyDescriptor<TFunction>): TypedPropertyDescriptor<TFunction> | void
	}

	declare export interface MethodDecoratorWithAccessor {
		
	}

	declare export interface Accessor<T> {
		set: T,
		get: T,
		proto: T
	}

	declare export interface DebounceDecorator {
		(wait: number, options?: _.DebounceSettings): MethodDecorator
	}

	declare export interface ThrottleDecorator {
		(wait: number, options?: _.ThrottleSettings): MethodDecorator
	}

	declare export interface MemoizeDecorator {
		(resolver?: Function): MethodDecorator
	}

	declare export interface AfterDecorator {
		(n: number): MethodDecorator
	}

	declare export interface BeforeDecorator {
		(n: number): MethodDecorator
	}

	declare export interface AryDecorator {
		(n: number): MethodDecorator
	}

	declare export interface CurryDecorator {
		(arity?: number): MethodDecorator
	}

	declare export interface CurryRightDecorator {
		(arity?: number): MethodDecorator
	}

	declare export interface RestParamDecorator {
		(start?: number): MethodDecorator
	}

	declare export interface PartialDecorator {
		(func: Function | string, ...args: any[]): MethodDecorator
	}

	declare export interface WrapDecorator {
		(wrapper: ((func: Function, ...args: any[]) => any) | string): MethodDecorator
	}

	declare export interface ComposeDecorator {
		(...funcs: (Function | string)[]): MethodDecorator
	}

	declare export interface DelayDecorator {
		(wait: number, ...args: any[]): MethodDecorator
	}

	declare export interface DeferDecorator {
		(...args: any[]): MethodDecorator
	}

	declare export interface BindDecorator {
		(): TypedMethodDecorator<(<R>() => R)>,
		(param1?: T1): TypedMethodDecorator<(<R>(param1: T1) => R)>,
		(param1?: T1, param2?: T2): TypedMethodDecorator<(<R>(param1: T1, param2: T2) => R)>,
		(param1?: T1, param2?: T2, param3?: T3): TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3) => R)>,
		(param1?: T1, param2?: T2, param3?: T3, param4?: T4): TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4) => R)>,
		(param1?: T1, param2?: T2, param3?: T3, param4?: T4, param5?: T5): TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4, param5: T5) => R)>,
		(param1?: T1, param2?: T2, param3?: T3, param4?: T4, param5?: T5, param6?: T6): TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4, param5: T5, param6: T6) => R)>
	}

	declare export interface BindAllDecorator {
		(...methodNames: string[]): ClassDecorator
	}

	declare export interface ModArgsDecorator {
		(...transforms: Function[]): MethodDecorator
	}

			
}

declare module 'lodash-decorators/extensions' {
		declare export interface ClassDecorator {
		(target: TFunction): TFunction | void
	}

	declare export interface PropertyDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword): void
	}

	declare export interface MethodDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void
	}

	declare export interface ParameterDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, parameterIndex: number): void
	}

	declare export interface DeprecatedDecorator {
		methodAction(fn: Function & {
		name: string
	}): void
	}

			
}

declare module 'lodash-decorators/validate' {
	declare type Predicates<T> = Predicate<T> | Predicate<T>[];

	declare export interface ClassDecorator {
		(target: TFunction): TFunction | void
	}

	declare export interface PropertyDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword): void
	}

	declare export interface MethodDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void
	}

	declare export interface ParameterDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, parameterIndex: number): void
	}

	declare export interface TypedMethodDecorator<TFunction> {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, descriptor: TypedPropertyDescriptor<TFunction>): TypedPropertyDescriptor<TFunction> | void
	}

	declare export interface Predicate<T> {
		(t: T): boolean
	}

	declare export interface ValidateDecorator {
		(p1: Predicates<T1>): TypedMethodDecorator<(<R>(param1: T1) => R)>,
		(p1: Predicates<T1>, p2?: Predicates<T2>): TypedMethodDecorator<(<R>(param1: T1, param2: T2) => R)>,
		(p1: Predicates<T1>, p2?: Predicates<T2>, p3?: Predicates<T3>): TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3) => R)>,
		(p1: Predicates<T1>, p2?: Predicates<T2>, p3?: Predicates<T3>, p4?: Predicates<T4>): TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4) => R)>,
		(p1: Predicates<T1>, p2?: Predicates<T2>, p3?: Predicates<T3>, p4?: Predicates<T4>, p5?: Predicates<T5>): TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4, param5: T5) => R)>,
		(p1: Predicates<T1>, p2?: Predicates<T2>, p3?: Predicates<T3>, p4?: Predicates<T4>, p5?: Predicates<T5>, p6?: Predicates<T6>): TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4, param5: T5, param6: T6) => R)>
	}

	declare export interface ValidateReturnDecorator {
		(p1: Predicates<R>): TypedMethodDecorator<((...args: any[]) => R)>
	}

			
}