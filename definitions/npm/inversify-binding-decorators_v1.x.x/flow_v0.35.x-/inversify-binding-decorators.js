

declare module 'inversify-binding-decorators' {
					declare module.exports: undefined


}

declare module 'interfaces' {
		declare export interface ProvideInSyntax<T> {
		inSingletonScope(): ProvideWhenOnSyntax<T>
	}

	declare export interface ProvideDoneSyntax<T> {
		done(): (target: any) => any
	}

	declare export interface ProvideOnSyntax<T> {
		onActivation(
		fn: (context: inversify.interfaces.Context, injectable: T) => T
	): ProvideWhenSyntax<T>
	}

	declare export interface ProvideInWhenOnSyntax<T> {
		
	}

	declare export interface ProvideWhenOnSyntax<T> {
		
	}

	declare export interface ProvideWhenSyntax<T> {
		when(
		constraint: (request: inversify.interfaces.Request) => boolean
	): ProvideOnSyntax<T>,
		whenTargetNamed(name: string): ProvideOnSyntax<T>,
		whenTargetTagged(tag: string, value: any): ProvideOnSyntax<T>,
		whenInjectedInto(parent: (Function | string)): ProvideOnSyntax<T>,
		whenParentNamed(name: string): ProvideOnSyntax<T>,
		whenParentTagged(tag: string, value: any): ProvideOnSyntax<T>,
		whenAnyAncestorIs(ancestor: (Function | string)): ProvideOnSyntax<T>,
		whenNoAncestorIs(ancestor: (Function | string)): ProvideOnSyntax<T>,
		whenAnyAncestorNamed(name: string): ProvideOnSyntax<T>,
		whenAnyAncestorTagged(tag: string, value: any): ProvideOnSyntax<T>,
		whenNoAncestorNamed(name: string): ProvideOnSyntax<T>,
		whenNoAncestorTagged(tag: string, value: any): ProvideOnSyntax<T>,
		whenAnyAncestorMatches(
		constraint: (request: inversify.interfaces.Request) => boolean
	): ProvideOnSyntax<T>,
		whenNoAncestorMatches(
		constraint: (request: inversify.interfaces.Request) => boolean
	): ProvideOnSyntax<T>
	}

			
}

declare module 'npm$namespace$inversifyBindingDecorators' {
			declare export function autoProvide(kernel: inversify.interfaces.Kernel, ...modules: any[]): void

	declare export function makeProvideDecorator(
		kernel: inversify.interfaces.Kernel
	): (
		serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>
	) => (target: any) => any

	declare export function makeFluentProvideDecorator(
		kernel: inversify.interfaces.Kernel
	): (
		serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>
	) => interfaces.ProvideInWhenOnSyntax<any>

		
}