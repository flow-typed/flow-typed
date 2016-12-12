

declare module 'parse5' {
		declare export interface ASTAttribute {
		name: string,
		value: string,
		prefix?: string
	}

	declare export interface Attribute {
		key: string,
		value: string
	}

	declare export interface ASTNode {
		attrs: ASTAttribute[],
		childNodes?: ASTNode[],
		data?: string,
		namespaceURI?: string,
		parentNode?: ASTNode,
		nodeName: string,
		quirksMode?: boolean,
		value?: string,
		___location: LocationInfo | ElementLocationInfo
	}

	declare export interface LocationInfo {
		line: number,
		col: number,
		startOffset: number,
		endOffset: number
	}

	declare export interface TreeAdapter {
		createDocument(): ASTNode,
		createDocumentFragment(): ASTNode,
		createElement(tagName: string, namespaceURI: string, attrs: Attribute[]): ASTNode,
		createCommentNode(data: string): ASTNode,
		appendChild(parentNode: ASTNode, newNode: ASTNode): void,
		insertBefore(parentNode: ASTNode, newNode: ASTNode, referenceNode: ASTNode): void,
		setTemplateContent(templateElement: ASTNode, contentTemplate: ASTNode): void,
		getTemplateContent(templateElement: ASTNode): ASTNode,
		setDocumentType(document: ASTNode, name: string, publicId: string, systemId: string): void,
		setQuirksMode(document: ASTNode): void,
		isQuirksMode(document: ASTNode): boolean,
		detachNode(node: ASTNode): void,
		insertText(parentNode: ASTNode, text: string): void,
		insertTextBefore(parentNode: ASTNode, text: string, referenceNode: ASTNode): void,
		adoptAttributes(recipientNode: ASTNode, attrs: Attribute[]): void,
		getFirstChild(node: ASTNode): ASTNode,
		getChildNodes(node: ASTNode): ASTNode[],
		getParentNode(node: ASTNode): ASTNode,
		getAttrList(node: ASTNode): ASTAttribute[],
		getTagName(element: ASTNode): string,
		getNamespaceURI(element: ASTNode): string,
		getTextNodeContent(textNode: ASTNode): string,
		getCommentNodeContent(commentNode: ASTNode): string,
		getDocumentTypeNodeName(doctypeNode: ASTNode): string,
		getDocumentTypeNodePublicId(doctypeNode: ASTNode): string,
		getDocumentTypeNodeSystemId(doctypeNode: ASTNode): string,
		isTextNode(node: ASTNode): boolean,
		isCommentNode(node: ASTNode): boolean,
		isDocumentTypeNode(node: ASTNode): boolean,
		isElementNode(node: ASTNode): boolean
	}

	declare export interface AttributesLocationInfo {
		[attributeName: string]: LocationInfo
	}

	declare export interface StartTagLocationInfo {
		attrs: AttributesLocationInfo
	}

	declare export interface ElementLocationInfo {
		startTag: StartTagLocationInfo,
		endTag: LocationInfo
	}

	declare export interface ParserOptions {
		locationInfo?: boolean,
		treeAdapter?: TreeAdapter
	}

	declare export interface SerializerOptions {
		treeAdapter: TreeAdapter
	}

	declare export interface SAXParserOptions {
		locationInfo?: boolean
	}

	declare export function parse(html: string, options?: ParserOptions): ASTNode

	declare export function parseFragment(html: string, options?: ParserOptions): ASTNode

	declare export function parseFragment(fragmentContext: any, html: string, options?: ParserOptions): ASTNode

	declare export function serialize(node: ASTNode, options?: SerializerOptions): string

	declare export class SerializerStream extends stream$Readable {
		constructor(node: ASTNode, options: SerializerOptions): this
	}

	declare export class ParserStream extends stream$Writable {
		constructor(options?: ParserOptions): this;
		document: ASTNode;
		on(event: string, listener: Function): this;
		on(
		event: "script", listener: (
		scriptElement: ASTNode, documentWrite: (html: string) => void, resume: Function
	) => void
	): this
	}

	declare export class SAXParser extends stream$Transform {
		constructor(options?: SAXParserOptions): this;
		on(event: string, listener: Function): this;
		on(
		event: "startTag", listener: (
		name: string, attrs: ASTAttribute[], selfClosing: boolean, location?: StartTagLocationInfo
	) => void
	): this;
		on(
		event: "endTag", listener: (name: string, location?: LocationInfo) => void
	): this;
		on(
		event: "comment", listener: (text: string, location?: LocationInfo) => void
	): this;
		on(event: "text", listener: (text: string, location?: LocationInfo) => void): this;
		on(
		event: "doctype", listener: (
		name: string, publicId: string, systemId: string, location?: LocationInfo
	) => void
	): this;
		stop(): void
	}

	
}