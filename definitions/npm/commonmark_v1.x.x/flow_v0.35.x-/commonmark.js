

declare module 'commonmark' {
					declare module.exports: undefined


}

declare module 'npm$namespace$commonmark' {
		declare export interface NodeWalkingStep {
		entering: boolean,
		node: Node
	}

	declare export interface NodeWalker {
		next(): NodeWalkingStep,
		resumeAt(node: Node, entering?: boolean): void
	}

	declare export interface Position {
		
	}

	declare export interface ListData {
		type?: string,
		tight?: boolean,
		delimiter?: string,
		bulletChar?: string
	}

	declare export interface ParserOptions {
		smart?: boolean,
		time?: boolean
	}

	declare export interface HtmlRenderingOptions {
		safe?: boolean,
		smart?: boolean,
		sourcepos?: boolean
	}

	declare export interface XmlRenderingOptions {
		time?: boolean,
		sourcepos?: boolean
	}

		declare export class Node  {
		constructor(nodeType: string, sourcepos?: Position): this;
		isContainer: boolean;
		type: string;
		firstChild: Node;
		lastChild: Node;
		next: Node;
		prev: Node;
		parent: Node;
		sourcepos: Position;
		literal: string;
		destination: string;
		title: string;
		info: string;
		level: number;
		listType: string;
		listTight: boolean;
		listStart: number;
		listDelimiter: string;
		onEnter: string;
		onExit: string;
		appendChild(child: Node): void;
		prependChild(child: Node): void;
		unlink(): void;
		insertAfter(sibling: Node): void;
		insertBefore(sibling: Node): void;
		walker(): NodeWalker;
		_listData: ListData
	}

	declare export class Parser  {
		constructor(options?: ParserOptions): this;
		parse(input: string): Node
	}

	declare export class HtmlRenderer  {
		constructor(options?: HtmlRenderingOptions): this;
		render(root: Node): string;
		softbreak: string;
		escape: (input: string, isAttributeValue: boolean) => string
	}

	declare export class XmlRenderer  {
		constructor(options?: XmlRenderingOptions): this;
		render(root: Node): string
	}

	
}