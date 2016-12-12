import type { EqjsStatic } from 'npm$namespace$eq'

declare module 'eq.js' {
		declare interface JQuery {
		
	}

			
}

declare module 'eqjs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$eq' {
	declare type AvailableElementType = HTMLElement | HTMLElement[] | NodeList | JQuery;

	declare interface EqjsStatic {
		nodes: EqjsNodesTable,
		nodesLength: number,
		query(nodes: AvailableElementType, callback?: Function): void,
		refreshNodes(): void,
		sortObj(obj: string): EqjsKeyValuePair[],
		nodeWrites(nodes?: AvailableElementType): void
	}

	declare interface EqjsKeyValuePair {
		key: string,
		value: number
	}

	declare interface EqjsNodesTable {
		[index: number]: HTMLElement
	}

			
}