

declare module 'rosie' {
					declare module.exports: undefined


}

declare module 'npm$namespace$rosie' {
		declare interface IFactoryStatic {
		define(name: String, constructor?: Function): IFactory,
		build(name: string, attributes?: any, options?: Object): Object,
		buildList(name: string, size: number, attributes?: any, options?: Object): Object[],
		attributes(name: string, attributes: Object, options?: Object): Object
	}

	declare interface IFactory {
		attr(name: string, dependenciesOrValue: any | string[], value?: any): IFactory,
		option(name: string, dependenciesOrValue?: any | string[], value?: any): IFactory,
		sequence(
		name: string, dependenciesOrBuilder?: Function | string[], builder?: Function
	): IFactory,
		after(functionArg: Function): IFactory,
		inherits(functionArg: Function): IFactory,
		attributes(attributes: Object, options: Object): Object,
		options(options: Object): Object,
		build(attributes: Object, options: Object): Object,
		buildList(size: number, attributes: Object, options: Object): Object[],
		extend(name: String | IFactory): IFactory
	}

			
}