

declare module 'showdown' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Showdown' {
		declare interface Extension {
		type: string
	}

	declare interface RegexReplaceExtension {
		regex?: string | RegExp,
		replace?: any
	}

	declare interface FilterExtension {
		filter?: (text: string, converter: Converter, options?: ConverterOptions) => string
	}

	declare interface ShowdownExtension {
		
	}

	declare interface ConverterExtensions {
		language: ShowdownExtension[],
		output: ShowdownExtension[]
	}

	declare interface ShowdownOptions {
		omitExtraWLInCodeBlocks?: boolean,
		noHeaderId?: boolean,
		prefixHeaderId?: string | boolean,
		parseImgDimensions?: boolean,
		headerLevelStart?: number,
		literalMidWordUnderscores?: boolean,
		strikethrough?: boolean,
		tables?: boolean,
		tablesHeaderId?: boolean,
		ghCodeBlocks?: boolean,
		tasklists?: boolean,
		smoothLivePreview?: boolean
	}

	declare interface ConverterOptions {
		extensions?: string | string[]
	}

	declare interface Converter {
		makeHtml(text: string): string,
		setOption(optionKey: string, value: string): void,
		getOption(optionKey: string): any,
		getOptions(): ShowdownOptions,
		addExtension(extension: ShowdownExtension, name: string): void,
		useExtension(extensionName: string): void,
		getAllExtensions(): ConverterExtensions,
		removeExtension(extensions: ShowdownExtension[] | ShowdownExtension): void
	}

	declare interface ConverterStatic {
		new (converterOptions?: ConverterOptions): Converter
	}

	declare function setOption(optionKey: string, value: string): void

	declare function getOption(optionKey: string): any

	declare function getOptions(): ShowdownOptions

	declare function resetOptions(): void

	declare function getDefaultOptions(): ShowdownOptions

	declare function extension(
		name: string, extension: (() => ShowdownExtension) | (() => ShowdownExtension[]) | ShowdownExtension
	): void

	declare function extension(name: string): ShowdownExtension[]

	declare function getAllExtensions(): {
		[name: string]: ShowdownExtension[]
	}

	declare function removeExtension(name: string): void

	declare function resetExtensions(): void

		
}