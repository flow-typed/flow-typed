

declare module 'main-bower-files' {
		declare interface IPaths {
		bowerDirectory?: string,
		bowerrc?: string,
		bowerJson?: string
	}

	declare interface IFilterFunction {
		(filepath: string): boolean
	}

	declare interface IOptions {
		debugging?: boolean,
		main?: string | string[] | Object,
		env?: string,
		paths?: IPaths | string,
		checkExistence?: boolean,
		includeDev?: boolean | string,
		includeSelf?: boolean,
		filter?: RegExp | IFilterFunction | string | string[]
	}

	declare function mainBowerFiles(options?: IOptions): string[]

		declare module.exports: undefined


}