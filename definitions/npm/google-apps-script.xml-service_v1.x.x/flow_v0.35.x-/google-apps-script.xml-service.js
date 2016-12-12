

declare module 'google-apps-script.xml-service' {
					
}

declare module 'XML_Service' {
		declare export interface Attribute {
		getName(): string,
		getNamespace(): Namespace,
		getValue(): string,
		setName(name: string): Attribute,
		setNamespace(namespace: Namespace): Attribute,
		setValue(value: string): Attribute
	}

	declare export interface Cdata {
		append(text: string): Text,
		detach(): Content,
		getParentElement(): Element,
		getText(): string,
		getValue(): string,
		setText(text: string): Text
	}

	declare export interface Comment {
		detach(): Content,
		getParentElement(): Element,
		getText(): string,
		getValue(): string,
		setText(text: string): Comment
	}

	declare export interface Content {
		asCdata(): Cdata,
		asComment(): Comment,
		asDocType(): DocType,
		asElement(): Element,
		asEntityRef(): EntityRef,
		asProcessingInstruction(): ProcessingInstruction,
		asText(): Text,
		detach(): Content,
		getParentElement(): Element,
		getType(): ContentType,
		getValue(): string
	}

	declare export interface DocType {
		detach(): Content,
		getElementName(): string,
		getInternalSubset(): string,
		getParentElement(): Element,
		getPublicId(): string,
		getSystemId(): string,
		getValue(): string,
		setElementName(name: string): DocType,
		setInternalSubset(data: string): DocType,
		setPublicId(id: string): DocType,
		setSystemId(id: string): DocType
	}

	declare export interface Document {
		addContent(content: Content): Document,
		addContent(index: Integer, content: Content): Document,
		cloneContent(): Content[],
		detachRootElement(): Element,
		getAllContent(): Content[],
		getContent(index: Integer): Content,
		getContentSize(): Integer,
		getDescendants(): Content[],
		getDocType(): DocType,
		getRootElement(): Element,
		hasRootElement(): boolean,
		removeContent(): Content[],
		removeContent(content: Content): boolean,
		removeContent(index: Integer): Content,
		setDocType(docType: DocType): Document,
		setRootElement(element: Element): Document
	}

	declare export interface Element {
		addContent(content: Content): Element,
		addContent(index: Integer, content: Content): Element,
		cloneContent(): Content[],
		detach(): Content,
		getAllContent(): Content[],
		getAttribute(name: string): Attribute,
		getAttribute(name: string, namespace: Namespace): Attribute,
		getAttributes(): Attribute[],
		getChild(name: string): Element,
		getChild(name: string, namespace: Namespace): Element,
		getChildText(name: string): string,
		getChildText(name: string, namespace: Namespace): string,
		getChildren(): Element[],
		getChildren(name: string): Element[],
		getChildren(name: string, namespace: Namespace): Element[],
		getContent(index: Integer): Content,
		getContentSize(): Integer,
		getDescendants(): Content[],
		getDocument(): Document,
		getName(): string,
		getNamespace(): Namespace,
		getNamespace(prefix: string): Namespace,
		getParentElement(): Element,
		getQualifiedName(): string,
		getText(): string,
		getValue(): string,
		isAncestorOf(other: Element): boolean,
		isRootElement(): boolean,
		removeAttribute(attribute: Attribute): boolean,
		removeAttribute(attributeName: string): boolean,
		removeAttribute(attributeName: string, namespace: Namespace): boolean,
		removeContent(): Content[],
		removeContent(content: Content): boolean,
		removeContent(index: Integer): Content,
		setAttribute(attribute: Attribute): Element,
		setAttribute(name: string, value: string): Element,
		setAttribute(name: string, value: string, namespace: Namespace): Element,
		setName(name: string): Element,
		setNamespace(namespace: Namespace): Element,
		setText(text: string): Element
	}

	declare export interface EntityRef {
		detach(): Content,
		getName(): string,
		getParentElement(): Element,
		getPublicId(): string,
		getSystemId(): string,
		getValue(): string,
		setName(name: string): EntityRef,
		setPublicId(id: string): EntityRef,
		setSystemId(id: string): EntityRef
	}

	declare export interface Format {
		format(document: Document): string,
		format(element: Element): string,
		setEncoding(encoding: string): Format,
		setIndent(indent: string): Format,
		setLineSeparator(separator: string): Format,
		setOmitDeclaration(omitDeclaration: boolean): Format,
		setOmitEncoding(omitEncoding: boolean): Format
	}

	declare export interface Namespace {
		getPrefix(): string,
		getURI(): string
	}

	declare export interface ProcessingInstruction {
		detach(): Content,
		getData(): string,
		getParentElement(): Element,
		getTarget(): string,
		getValue(): string
	}

	declare export interface Text {
		append(text: string): Text,
		detach(): Content,
		getParentElement(): Element,
		getText(): string,
		getValue(): string,
		setText(text: string): Text
	}

	declare export interface XmlService {
		ContentTypes: ContentType,
		createCdata(text: string): Cdata,
		createComment(text: string): Comment,
		createDocType(elementName: string): DocType,
		createDocType(elementName: string, systemId: string): DocType,
		createDocType(elementName: string, publicId: string, systemId: string): DocType,
		createDocument(): Document,
		createDocument(rootElement: Element): Document,
		createElement(name: string): Element,
		createElement(name: string, namespace: Namespace): Element,
		createText(text: string): Text,
		getCompactFormat(): Format,
		getNamespace(uri: string): Namespace,
		getNamespace(prefix: string, uri: string): Namespace,
		getNoNamespace(): Namespace,
		getPrettyFormat(): Format,
		getRawFormat(): Format,
		getXmlNamespace(): Namespace,
		parse(xml: string): Document
	}

			
}