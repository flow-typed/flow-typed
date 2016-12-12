

declare module 'angular-es' {
		declare interface ClassDecorator {
		(target: TFunction): TFunction | void
	}

	declare interface MethodDecorator {
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void
	}

	declare interface ngESDecorator {
		(target: Object | Function, ngName?: string, ngArguments?: Array<any>, ngType?: string, injectAsProperty?: Array<string>): void
	}

	declare interface iComponent {
		template: string,
		selector: string,
		controllerAs?: string,
		require?: string,
		templateUrl?: string,
		transclude?: string,
		bindings?: Object
	}

	declare function Component(component: iComponent): ngESDecorator

	declare function Config(): ngESDecorator

	declare function Constant(name: string): ngESDecorator

	declare function Controller(name: string): ngESDecorator

	declare function Decorator(name: string): ngESDecorator

	declare function Directive(name: string): ngESDecorator

	declare function Factory(name: string): ngESDecorator

	declare function Filter(name: string): ngESDecorator

	declare function Inject(...dependencies: Array<string>): ngESDecorator

	declare function InjectAsProperty(...dependencies: Array<string>): ngESDecorator

	declare function Module(name: string): ngESDecorator

	declare function Provider(name: string): ngESDecorator

	declare function Run(): ngESDecorator

	declare function Service(name: string): ngESDecorator

	declare function Value(name: string): ngESDecorator

		
}