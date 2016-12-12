

declare module 'acorn' {
					declare module.exports: undefined


}

declare module 'npm$namespace$acorn' {
		declare interface TokenType {
		label: string,
		keyword: string,
		beforeExpr: boolean,
		startsExpr: boolean,
		isLoop: boolean,
		isAssign: boolean,
		prefix: boolean,
		postfix: boolean,
		binop: number,
		updateContext: (prevType: TokenType) => any
	}

	declare interface AbstractToken {
		start: number,
		end: number,
		loc: ESTree.SourceLocation,
		range: [number, number]
	}

	declare interface Token {
		type: TokenType,
		value: any
	}

	declare interface Comment {
		type: string,
		value: string
	}

	declare interface Options {
		ecmaVersion?: number,
		sourceType?: string,
		onInsertedSemicolon?: (lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => any,
		onTrailingComma?: (lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => any,
		allowReserved?: boolean,
		allowReturnOutsideFunction?: boolean,
		allowImportExportEverywhere?: boolean,
		allowHashBang?: boolean,
		locations?: boolean,
		onToken?: ((token: Token) => any) | Token[],
		onComment?: ((
		isBlock: boolean, text: string, start: number, end: number, startLoc?: ESTree.Position, endLoc?: ESTree.Position
	) => any) | Comment[],
		ranges?: boolean,
		program?: ESTree.Program,
		sourceFile?: string,
		directSourceFile?: string,
		preserveParens?: boolean,
		plugins?: {
		[name: string]: Function
	}
	}

	declare function parse(input: string, options?: Options): ESTree.Program

	declare function parseExpressionAt(input: string, pos: number, options?: Options): ESTree.Expression

	declare function getLineInfo(input: string, offset: number): ESTree.Position

		
}