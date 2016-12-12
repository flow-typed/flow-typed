

declare module 'minimatch' {
			declare function M(target: string, pattern: string, options?: M.IOptions): boolean

		declare module.exports: undefined


}

declare module 'M' {
		declare interface IOptions {
		debug?: boolean,
		nobrace?: boolean,
		noglobstar?: boolean,
		dot?: boolean,
		noext?: boolean,
		nocase?: boolean,
		nonull?: boolean,
		matchBase?: boolean,
		nocomment?: boolean,
		nonegate?: boolean,
		flipNegate?: boolean
	}

	declare interface IMinimatchStatic {
		new (pattern: string, options?: IOptions): IMinimatch,
		prototype: IMinimatch
	}

	declare interface IMinimatch {
		pattern: string,
		options: IOptions,
		set: any[][],
		regexp: RegExp,
		negate: boolean,
		comment: boolean,
		empty: boolean,
		makeRe(): RegExp,
		match(fname: string): boolean,
		matchOne(files: string[], pattern: string[], partial: boolean): boolean,
		debug(): void,
		make(): void,
		parseNegate(): void,
		braceExpand(pattern: string, options: IOptions): void,
		parse(pattern: string, isSub?: boolean): void
	}

	declare function match(list: string[], pattern: string, options?: IOptions): string[]

	declare function filter(
		pattern: string, options?: IOptions
	): (element: string, indexed: number, array: string[]) => boolean

	declare function makeRe(pattern: string, options?: IOptions): RegExp

		
}