

declare module 'babel-core' {
	declare type Node = t.Node;

	declare export interface TransformOptions {
		filename?: string,
		filenameRelative?: string,
		inputSourceMap?: Object,
		env?: Object,
		retainLines?: boolean,
		highlightCode?: boolean,
		presets?: any[],
		plugins?: any[],
		ignore?: string[],
		only?: string | RegExp | Array<string | RegExp>,
		code?: boolean,
		ast?: boolean,
		extends?: string,
		comments?: boolean,
		shouldPrintComment?: (comment: string) => boolean,
		compact?: boolean | "auto",
		sourceMaps?: boolean | "inline" | "both",
		sourceMapTarget?: string,
		sourceFileName?: string,
		sourceRoot?: string,
		babelrc?: boolean,
		auxiliaryCommentBefore?: string,
		auxiliaryCommentAfter?: string,
		getModuleId?: (moduleName: string) => string,
		moduleRoot?: string,
		moduleIds?: boolean,
		moduleId?: string
	}

	declare export interface BabelFileResult {
		ast?: Node,
		code?: string,
		map?: Object
	}

	declare export function transform(code: string, opts?: TransformOptions): BabelFileResult

	declare export function transformFile(
		filename: string, opts: TransformOptions, callback: (err: any, result: BabelFileResult) => void
	): void

	declare export function transformFileSync(filename: string, opts?: TransformOptions): BabelFileResult

	declare export function transformFromAst(ast: Node, code?: string, opts?: TransformOptions): BabelFileResult

		
}