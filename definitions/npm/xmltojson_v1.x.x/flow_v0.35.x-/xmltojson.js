

declare module 'xmltojson' {
		declare interface Options {
		mergeCDATA?: boolean,
		grokAttr?: boolean,
		grokText?: boolean,
		normalize?: boolean,
		xmlns?: boolean,
		namespaceKey?: string,
		textKey?: string,
		valueKey?: string,
		attrKey?: string,
		cdataKey?: string,
		attrsAsObject?: boolean,
		stripAttrPrefix?: boolean,
		stripElemPrefix?: boolean,
		childrenAsArray?: boolean
	}

	declare function grokType(sValue: any): any

	declare function parseString(xmlString: string, opt: Options): Object

	declare function parseXml(oXMLParent: Document, opt: Options): Object

	declare function xmlToString(xmlDoc: Document): string

	declare function stringToXml(xmlString: string): Document

		declare module.exports: undefined


}