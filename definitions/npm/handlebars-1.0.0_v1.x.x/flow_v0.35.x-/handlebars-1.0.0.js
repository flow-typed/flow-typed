

declare module 'handlebars-1.0.0' {
		declare interface HandlebarsTemplatable {
		template: HandlebarsTemplateDelegate
	}

	declare interface HandlebarsTemplateDelegate {
		(context: any, options?: any): string
	}

	declare interface HandlebarsCommon {
		registerHelper(name: string, fn: Function, inverse?: boolean): void,
		registerPartial(name: string, str: any): void,
		K(): void,
		createFrame(object: any): any,
		Exception(message: string): void,
		SafeString: typeof undefined,
		Utils: typeof undefined,
		logger: Logger,
		log(level: number, obj: any): void
	}

	declare interface HandlebarsStatic {
		parse(input: string): hbs.AST.ProgramNode,
		compile(input: any, options?: any): HandlebarsTemplateDelegate
	}

	declare interface HandlebarsTemplates {
		[index: string]: HandlebarsTemplateDelegate
	}

	declare interface HandlebarsRuntimeStatic {
		templates: HandlebarsTemplates
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

			
}

declare module 'npm$namespace$hbs' {
				declare class SafeString  {
		constructor(str: string): this;
		toString(): string
	}

	
}

declare module 'Utils' {
			declare function escapeExpression(str: string): string

		
}

declare module 'AST' {
		declare interface IStripInfo {
		left?: boolean,
		right?: boolean,
		inlineStandalone?: boolean
	}

		declare class NodeBase  {
		firstColumn: number;
		firstLine: number;
		lastColumn: number;
		lastLine: number;
		type: string
	}

	declare class ProgramNode extends NodeBase {
		statements: NodeBase[]
	}

	declare class IdNode extends NodeBase {
		original: string;
		parts: string[];
		string: string;
		depth: number;
		idName: string;
		isSimple: boolean;
		stringModeValue: string
	}

	declare class HashNode extends NodeBase {
		pairs: {
		0: string,
		1: NodeBase
	}[]
	}

	declare class SexprNode extends NodeBase {
		hash: HashNode;
		id: NodeBase;
		params: NodeBase[];
		isHelper: boolean;
		eligibleHelper: boolean
	}

	declare class MustacheNode extends NodeBase {
		strip: IStripInfo;
		escaped: boolean;
		sexpr: SexprNode
	}

	declare class BlockNode extends NodeBase {
		mustache: MustacheNode;
		program: ProgramNode;
		inverse: ProgramNode;
		strip: IStripInfo;
		isInverse: boolean
	}

	declare class PartialNameNode extends NodeBase {
		name: string
	}

	declare class PartialNode extends NodeBase {
		partialName: PartialNameNode;
		context: NodeBase;
		hash: HashNode;
		strip: IStripInfo
	}

	declare class RawBlockNode extends NodeBase {
		mustache: MustacheNode;
		program: ProgramNode
	}

	declare class ContentNode extends NodeBase {
		original: string;
		string: string
	}

	declare class DataNode extends NodeBase {
		id: IdNode;
		stringModeValue: string;
		idName: string
	}

	declare class StringNode extends NodeBase {
		original: string;
		string: string;
		stringModeValue: string
	}

	declare class NumberNode extends NodeBase {
		original: string;
		number: string;
		stringModeValue: number
	}

	declare class BooleanNode extends NodeBase {
		bool: string;
		stringModeValue: boolean
	}

	declare class CommentNode extends NodeBase {
		comment: string;
		strip: IStripInfo
	}

	
}

declare module 'handlebars' {
					declare module.exports: undefined


}