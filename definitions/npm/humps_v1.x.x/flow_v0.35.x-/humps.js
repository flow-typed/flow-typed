

declare module 'humps' {
					declare module.exports: undefined


}

declare module 'npm$namespace$humps' {
	declare type OptionOrProcessor = HumpsOptions | HumpsProcessor;

	declare interface HumpsOptions {
		separator?: string,
		split?: RegExp,
		process?: HumpsProcessor
	}

	declare interface HumpsProcessor {
		(key: string, convert: HumpsProcessorParameter, options?: HumpsOptions): string
	}

	declare interface HumpsProcessorParameter {
		(key: string, options?: HumpsOptions): string
	}

	declare function camelize(value: string): string

	declare function pascalize(value: string): string

	declare function decamelize(value: string, optionsOrProcessor?: OptionOrProcessor): string

	declare function depascalize(value: string, optionsOrProcessor?: OptionOrProcessor): string

	declare function camelizeKeys(str: Object, optionsOrProcessor?: OptionOrProcessor): Object

	declare function pascalizeKeys(str: Object, optionsOrProcessor?: OptionOrProcessor): Object

	declare function decamelizeKeys(str: Object, optionsOrProcessor?: OptionOrProcessor): Object

	declare function depascalizeKeys(str: Object, optionsOrProcessor?: OptionOrProcessor): Object

	declare function camelizeKeys(str: Object[], optionsOrProcessor?: OptionOrProcessor): Object[]

	declare function pascalizeKeys(str: Object[], optionsOrProcessor?: OptionOrProcessor): Object[]

	declare function decamelizeKeys(str: Object[], optionsOrProcessor?: OptionOrProcessor): Object[]

	declare function depascalizeKeys(str: Object[], optionsOrProcessor?: OptionOrProcessor): Object[]

		
}