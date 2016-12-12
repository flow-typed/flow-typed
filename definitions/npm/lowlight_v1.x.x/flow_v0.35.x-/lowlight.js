

declare module 'lowlight' {
					
}

declare module 'lowlight/lib/core' {
			declare export function highlight(
		language: string, value: string, options?: lowlight.HighlightOptions
	): lowlight.HighlightResult

	declare export function highlightAuto(
		value: string, options?: lowlight.HighlightAutoOptions
	): lowlight.HighlightAutoResult

	declare export function registerLanguage(name: string, syntax: Function): void

		
}

declare module 'Unist' {
		declare interface Data {
		[index: string]: any
	}

	declare interface Position {
		line: number,
		column: number,
		offset?: number
	}

	declare interface Location {
		start: Position,
		end: Position,
		indent?: Array<number>
	}

	declare export interface Node {
		type: string,
		data?: Data,
		position?: Location
	}

	declare export interface Parent {
		children: Array<Node>
	}

	declare export interface Text {
		value: string
	}

			
}

declare module 'AST' {
		declare interface Properties {
		[index: string]: any
	}

	declare export interface Root {
		type: "root"
	}

	declare export interface Element {
		type: "element",
		tagName: string,
		properties: Properties
	}

	declare export interface Doctype {
		type: "doctype",
		name: string,
		public?: string,
		system?: string
	}

	declare export interface Comment {
		type: "comment"
	}

	declare export interface Text {
		type: "text"
	}

			
}

declare module 'npm$namespace$lowlight' {
	declare type HastNode = AST.Root | AST.Element | AST.Doctype | AST.Comment | AST.Text;

	declare interface HighlightOptions {
		prefix?: string
	}

	declare interface HighlightAutoOptions {
		subset?: Array<string>
	}

	declare interface HighlightResult {
		relevance: number,
		language: string,
		value: Array<HastNode>
	}

	declare interface HighlightAutoResult {
		secondBest?: HighlightAutoResult
	}

			
}