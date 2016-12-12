

declare module 'dom4' {
		declare interface ParentNode {
		children: HTMLCollection,
		query(relativeSelectors: string): Element,
		queryAll(relativeSelectors: string): Elements
	}

	declare interface Element {
		closest(selectors: string): Element,
		matches(selectors: string): boolean
	}

	declare interface Elements {
		
	}

	declare interface Document {
		
	}

	declare interface DocumentFragment {
		
	}

			
}