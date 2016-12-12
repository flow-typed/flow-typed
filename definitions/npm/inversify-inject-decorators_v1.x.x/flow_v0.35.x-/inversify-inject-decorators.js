

declare module 'inversify-inject-decorators' {
					declare module.exports: undefined


}

declare module 'npm$namespace$inversifyInjectDecorators' {
		declare export interface InjectDecorators {
		lazyInject: (
		serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>
	) => (proto: any, key: string) => void,
		lazyInjectNamed: (
		serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>, named: string
	) => (proto: any, key: string) => void,
		lazyInjectTagged: (
		serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>, key: string, value: any
	) => (proto: any, propertyName: string) => void,
		lazyMultiInject: (
		serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>
	) => (proto: any, key: string) => void
	}

			
}