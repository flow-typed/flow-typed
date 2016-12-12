

declare module 'xml-parser' {
			declare function parse(xml: string): parse.Document

		declare module.exports: undefined


}

declare module 'parse' {
		declare export interface Document {
		declaration: Declaration,
		root: Node
	}

	declare export interface Declaration {
		attributes: Attributes
	}

	declare export interface Node {
		name: string,
		attributes: Attributes,
		children: Node[],
		content?: string
	}

	declare export interface Attributes {
		[name: string]: string
	}

			
}