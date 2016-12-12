

declare module 'uglify-js' {
					declare module.exports: undefined


}

declare module 'UglifyJS' {
	declare type visitor = (node: AST_Node, descend: Function) => boolean;

	declare interface Tokenizer {
		type: string,
		file: string,
		value: string,
		line: number,
		col: number,
		nlb: boolean,
		comments_before: string[]
	}

	declare interface AST_Node {
		start: AST_Node,
		end: AST_Node,
		transform(tt: TreeTransformer): AST_Toplevel
	}

	declare interface AST_Toplevel {
		figure_out_scope(): void,
		compute_char_frequency(): void,
		mangle_names(): void,
		print(stream: OutputStream): void,
		print_to_string(options?: BeautifierOptions): string
	}

	declare interface MinifyOptions {
		spidermonkey?: boolean,
		outSourceMap?: string,
		sourceRoot?: string,
		inSourceMap?: string,
		fromString?: boolean,
		warnings?: boolean,
		mangle?: Object,
		output?: MinifyOutput,
		compress?: Object
	}

	declare interface MinifyOutput {
		code: string,
		map: string
	}

	declare interface ParseOptions {
		strict?: boolean,
		filename?: string,
		toplevel?: AST_Toplevel
	}

	declare interface BeautifierOptions {
		indent_start?: number,
		indent_level?: number,
		quote_keys?: boolean,
		space_colon?: boolean,
		ascii_only?: boolean,
		inline_script?: boolean,
		width?: number,
		max_line_len?: number,
		ie_proof?: boolean,
		beautify?: boolean,
		source_map?: SourceMapOptions,
		bracketize?: boolean,
		comments?: boolean,
		semicolons?: boolean
	}

	declare interface OutputStream {
		get(): string,
		toString(): string,
		indent(half?: boolean): void,
		indentation(): number,
		current_width(): number,
		should_break(): boolean,
		newline(): void,
		print(str: string): void,
		space(): void,
		comma(): void,
		colon(): void,
		last(): string,
		semicolon(): void,
		force_semicolon(): void,
		to_ascii(str: string): void,
		print_name(name: string): void,
		print_string(str: string): void,
		next_indent(): number,
		with_indent(col: number, func: Function): void,
		with_block(func: Function): void,
		with_parens(func: Function): void,
		with_square(func: Function): void,
		add_mapping(token: AST_Node, name?: string): void,
		option(name: string): any,
		line(): number,
		col(): number,
		push_node(node: AST_Node): void,
		pop_node(): AST_Node,
		stack(): any,
		parent(n: number): AST_Node
	}

	declare interface SourceMapOptions {
		file?: string,
		root?: string,
		orig?: Object | JSON
	}

	declare interface SourceMap {
		add(
		source: string, gen_line: number, gen_col: number, orig_line: number, orig_col: number, name?: string
	): void,
		get(): MOZ_SourceMap.SourceMapGenerator,
		toString(): string
	}

	declare interface CompressorOptions {
		sequences?: boolean,
		properties?: boolean,
		dead_code?: boolean,
		drop_debugger?: boolean,
		unsafe?: boolean,
		conditionals?: boolean,
		comparisons?: boolean,
		evaluate?: boolean,
		booleans?: boolean,
		loops?: boolean,
		unused?: boolean,
		hoist_funs?: boolean,
		hoist_vars?: boolean,
		if_return?: boolean,
		join_vars?: boolean,
		cascade?: boolean,
		side_effects?: boolean,
		warnings?: boolean,
		global_defs?: Object
	}

	declare interface TreeWalker {
		
	}

	declare interface TreeTransformer {
		
	}

	declare function minify(files: string | Array<string>, options?: MinifyOptions): MinifyOutput

	declare function parse(code: string, options?: ParseOptions): AST_Toplevel

	declare function OutputStream(options?: BeautifierOptions): OutputStream

	declare function SourceMap(options?: SourceMapOptions): SourceMap

	declare function Compressor(options?: CompressorOptions): AST_Toplevel

	declare function TreeWalker(visitor: visitor): TreeWalker

	declare function TreeTransformer(before: visitor, after: visitor): TreeTransformer

		
}