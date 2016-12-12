

declare module 'esprima' {
					declare module.exports: undefined


}

declare module 'npm$namespace$esprima' {
		declare interface Token {
		type: string,
		value: string
	}

	declare interface Comment {
		value: string
	}

	declare interface Options {
		loc?: boolean,
		range?: boolean,
		raw?: boolean,
		tokens?: boolean,
		comment?: boolean,
		attachComment?: boolean,
		tolerant?: boolean,
		source?: boolean,
		sourceType?: "script" | "module"
	}

	declare function parse(code: string, options?: Options): ESTree.Program

	declare function tokenize(code: string, options?: Options): Array<Token>

		
}