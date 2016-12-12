

declare module 'qs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$QueryString' {
		declare interface IStringifyOptions {
		delimiter?: string,
		strictNullHandling?: boolean,
		skipNulls?: boolean,
		encode?: boolean,
		encoder?: (str: string) => any,
		filter?: Array<string | number> | ((prefix: string, value: any) => any),
		arrayFormat?: "indices" | "brackets" | "repeat",
		indices?: boolean
	}

	declare interface IParseOptions {
		delimiter?: string | RegExp,
		depth?: number,
		decoder?: (str: string) => any,
		arrayLimit?: number,
		parseArrays?: boolean,
		allowDots?: boolean,
		plainObjects?: boolean,
		allowPrototypes?: boolean,
		parameterLimit?: number,
		strictNullHandling?: boolean
	}

	declare function stringify(obj: any, options?: IStringifyOptions): string

	declare function parse(str: string, options?: IParseOptions): any

		
}