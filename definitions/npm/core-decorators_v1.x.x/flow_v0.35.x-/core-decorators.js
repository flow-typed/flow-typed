

declare module 'core-decorators' {
		declare export interface ClassDecorator {
		(target: TFunction): TFunction | void
	}

	declare export interface ParameterDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, parameterIndex: number): void
	}

	declare export interface PropertyDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword): void
	}

	declare export interface MethodDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void
	}

	declare export interface PropertyOrMethodDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword): void
	}

	declare export interface Deprecate {
		(message?: string, option?: DeprecateOption): MethodDecorator
	}

	declare export interface DeprecateOption {
		url: string
	}

	declare export interface ThrottleOptions {
		leading?: boolean,
		trailing?: boolean
	}

	declare export interface Console {
		log(message?: any, ...optionalParams: any[]): void,
		time(timerName?: string): void,
		timeEnd(timerName?: string): void
	}

			
}