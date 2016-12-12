

declare module 'babel-generator' {
	declare type Node = t.Node;

	declare export interface GeneratorOptions {
		auxiliaryCommentBefore?: string,
		auxiliaryCommentAfter?: string,
		shouldPrintComment?: (comment: string) => boolean,
		retainLines?: boolean,
		comments?: boolean,
		compact?: boolean | "auto",
		minified?: boolean,
		concise?: boolean,
		quotes?: "single" | "double",
		filename?: string,
		sourceMaps?: boolean,
		sourceMapTarget?: string,
		sourceRoot?: string,
		sourceFileName?: string
	}

	declare export interface GeneratorResult {
		map: Object,
		code: string
	}

	declare export default function generate(
		ast: Node, opts?: GeneratorOptions, code?: string | {
		[filename: string]: string
	}
	): GeneratorResult

		
}