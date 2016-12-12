

declare module 'handlebars' {
		declare interface HandlebarsTemplatable {
		template: HandlebarsTemplateDelegate
	}

	declare interface HandlebarsTemplateDelegate {
		(context: any, options?: any): string
	}

	declare interface HandlebarsTemplates {
		[index: string]: HandlebarsTemplateDelegate
	}

	declare interface TemplateSpecification {
		
	}

	declare interface CompileOptions {
		data?: boolean,
		compat?: boolean,
		knownHelpers?: {
		helperMissing?: boolean,
		blockHelperMissing?: boolean,
		each?: boolean,
		if?: boolean,
		unless?: boolean,
		with?: boolean,
		log?: boolean,
		lookup?: boolean
	},
		knownHelpersOnly?: boolean,
		noEscape?: boolean,
		strict?: boolean,
		assumeObjects?: boolean,
		preventIndent?: boolean,
		ignoreStandalone?: boolean,
		explicitPartialContext?: boolean
	}

	declare interface PrecompileOptions {
		srcName?: string,
		destName?: string
	}

	declare interface Logger {
		DEBUG: number,
		INFO: number,
		WARN: number,
		ERROR: number,
		level: number,
		methodMap: {
		[level: number]: string
	},
		log(level: number, obj: string): void
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$Handlebars' {
		declare interface ICompiler {
		accept(node: hbs.AST.Node): void,
		Program(program: hbs.AST.Program): void,
		BlockStatement(block: hbs.AST.BlockStatement): void,
		PartialStatement(partial: hbs.AST.PartialStatement): void,
		PartialBlockStatement(partial: hbs.AST.PartialBlockStatement): void,
		DecoratorBlock(decorator: hbs.AST.DecoratorBlock): void,
		Decorator(decorator: hbs.AST.Decorator): void,
		MustacheStatement(mustache: hbs.AST.MustacheStatement): void,
		ContentStatement(content: hbs.AST.ContentStatement): void,
		CommentStatement(comment?: hbs.AST.CommentStatement): void,
		SubExpression(sexpr: hbs.AST.SubExpression): void,
		PathExpression(path: hbs.AST.PathExpression): void,
		StringLiteral(str: hbs.AST.StringLiteral): void,
		NumberLiteral(num: hbs.AST.NumberLiteral): void,
		BooleanLiteral(bool: hbs.AST.BooleanLiteral): void,
		UndefinedLiteral(): void,
		NullLiteral(): void,
		Hash(hash: hbs.AST.Hash): void
	}

	declare export function registerHelper(name: string, fn: Function, inverse?: boolean): void

	declare export function registerHelper(name: Object): void

	declare export function registerPartial(name: string, str: any): void

	declare export function unregisterHelper(name: string): void

	declare export function unregisterPartial(name: string): void

	declare export function K(): void

	declare export function createFrame(object: any): any

	declare export function Exception(message: string): void

	declare export function log(level: number, obj: any): void

	declare export function parse(input: string): hbs.AST.Program

	declare export function compile(input: any, options?: CompileOptions): HandlebarsTemplateDelegate

	declare export function precompile(input: any, options?: PrecompileOptions): TemplateSpecification

	declare export function template(precompilation: TemplateSpecification): HandlebarsTemplateDelegate

	declare export function create(): typeof Handlebars

	declare export function registerDecorator(name: string, fn: Function): void

	declare export function registerDecorator(obj: {
		[name: string]: Function
	}): void

	declare export function unregisterDecorator(name: string): void

	declare export function noConflict(): typeof Handlebars

	declare export class Visitor extends ICompiler {
		accept(node: hbs.AST.Node): void;
		acceptKey(node: hbs.AST.Node, name: string): void;
		acceptArray(arr: hbs.AST.Expression[]): void;
		Program(program: hbs.AST.Program): void;
		BlockStatement(block: hbs.AST.BlockStatement): void;
		PartialStatement(partial: hbs.AST.PartialStatement): void;
		PartialBlockStatement(partial: hbs.AST.PartialBlockStatement): void;
		DecoratorBlock(decorator: hbs.AST.DecoratorBlock): void;
		Decorator(decorator: hbs.AST.Decorator): void;
		MustacheStatement(mustache: hbs.AST.MustacheStatement): void;
		ContentStatement(content: hbs.AST.ContentStatement): void;
		CommentStatement(comment?: hbs.AST.CommentStatement): void;
		SubExpression(sexpr: hbs.AST.SubExpression): void;
		PathExpression(path: hbs.AST.PathExpression): void;
		StringLiteral(str: hbs.AST.StringLiteral): void;
		NumberLiteral(num: hbs.AST.NumberLiteral): void;
		BooleanLiteral(bool: hbs.AST.BooleanLiteral): void;
		UndefinedLiteral(): void;
		NullLiteral(): void;
		Hash(hash: hbs.AST.Hash): void
	}

	
}

declare module 'AST' {
		declare interface Node {
		type: string,
		loc: SourceLocation
	}

	declare interface SourceLocation {
		source: string,
		start: Position,
		end: Position
	}

	declare interface Position {
		line: number,
		column: number
	}

	declare interface Program {
		body: Statement[],
		blockParams: string[]
	}

	declare interface Statement {
		
	}

	declare interface MustacheStatement {
		path: PathExpression | Literal,
		params: Expression[],
		hash: Hash,
		escaped: boolean,
		strip: StripFlags
	}

	declare interface Decorator {
		
	}

	declare interface BlockStatement {
		path: PathExpression,
		params: Expression[],
		hash: Hash,
		program: Program,
		inverse: Program,
		openStrip: StripFlags,
		inverseStrip: StripFlags,
		closeStrip: StripFlags
	}

	declare interface DecoratorBlock {
		
	}

	declare interface PartialStatement {
		name: PathExpression | SubExpression,
		params: Expression[],
		hash: Hash,
		indent: string,
		strip: StripFlags
	}

	declare interface PartialBlockStatement {
		name: PathExpression | SubExpression,
		params: Expression[],
		hash: Hash,
		program: Program,
		openStrip: StripFlags,
		closeStrip: StripFlags
	}

	declare interface ContentStatement {
		value: string,
		original: StripFlags
	}

	declare interface CommentStatement {
		value: string,
		strip: StripFlags
	}

	declare interface Expression {
		
	}

	declare interface SubExpression {
		path: PathExpression,
		params: Expression[],
		hash: Hash
	}

	declare interface PathExpression {
		data: boolean,
		depth: number,
		parts: string[],
		original: string
	}

	declare interface Literal {
		
	}

	declare interface StringLiteral {
		value: string,
		original: string
	}

	declare interface BooleanLiteral {
		value: boolean,
		original: boolean
	}

	declare interface NumberLiteral {
		value: number,
		original: number
	}

	declare interface UndefinedLiteral {
		
	}

	declare interface NullLiteral {
		
	}

	declare interface Hash {
		pairs: HashPair[]
	}

	declare interface HashPair {
		key: string,
		value: Expression
	}

	declare interface StripFlags {
		open: boolean,
		close: boolean
	}

	declare interface helpers {
		helperExpression(node: Node): boolean,
		scopeId(path: PathExpression): boolean,
		simpleId(path: PathExpression): boolean
	}

			
}

declare module 'npm$namespace$hbs' {
				declare class SafeString  {
		constructor(str: string): this;
		toString(): string
	}

	
}

declare module 'Utils' {
			declare function escapeExpression(str: string): string

	declare function createFrame(obj: Object): Object

	declare function isEmpty(obj: any): boolean

	declare function extend(obj: any, ...source: any[]): any

	declare function toString(obj: any): string

	declare function isArray(obj: any): boolean

	declare function isFunction(obj: any): boolean

		
}