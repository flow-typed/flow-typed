

declare module 'xml2json' {
		declare interface IX2JS {
		new (config?: IX2JSOption): IX2JS,
		getVersion(): string,
		xml2json<T>(dom: Node): T,
		json2xml<T>(json: T): Node,
		xml_str2json<T>(xml: string): T,
		json2xml_str<T>(json: T): string,
		parseXmlString(xml: string): Node,
		asArray(prop: any): any[],
		asDateTime(key: string): string,
		asXmlDateTime(date: Date): string,
		asXmlDateTime(date: number): string
	}

	declare interface IX2JSOption {
		escapeMode?: boolean,
		attributePrefix?: string,
		arrayAccessForm?: string,
		emptyNodeForm?: string,
		enableToStringFunc?: boolean,
		arrayAccessFormPaths?: any[],
		skipEmptyTextNodesForObj?: boolean,
		stripWhitespaces?: boolean,
		datetimeAccessFormPaths?: any[]
	}

			
}