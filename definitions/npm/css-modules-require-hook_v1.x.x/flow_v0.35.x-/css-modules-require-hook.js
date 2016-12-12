

declare module 'css-modules-require-hook' {
		declare interface Options {
		devMode?: boolean,
		extensions?: string | string[],
		ignore?: string | RegExp | ((filepath: string) => boolean),
		preprocessCss?: Function,
		processCss?: Function,
		processorOpts?: Object,
		camelCase?: boolean,
		append?: any[],
		prepend?: any[],
		use?: any[],
		createImportedName?: Function,
		generateScopedName?: string | Function,
		hashPrefix?: string,
		mode?: string,
		rootDir?: string
	}

			declare module.exports: undefined


}