

declare module 'xpath' {
		declare interface SelectFn {
		(xpathText: string, contextNode: Node, single?: boolean): any
	}

	declare interface NamespaceMap {
		[namespacePrefix: string]: string
	}

	declare interface XPathExpression {
		evaluate(contextNode: Node, resultType: number, result?: XPathResult): XPathResult
	}

	declare interface XPathNSResolver {
		lookupNamespaceURI(prefix: string): string
	}

	declare function select1(xpathText: string, contextNode: Node): any

	declare function selectWithResolver(
		xpathText: string, contextNode: Node, resolver: XPathNSResolver, single?: boolean
	): any

	declare function evaluate(
		xpathText: string, contextNode: Node, resolver: XPathNSResolver, resultType: number, result?: XPathResult
	): XPathResult

	declare function useNamespaces(namespaceMappings: NamespaceMap): typeof select

	declare function createExpression(xpathText: string, namespaceURLMapper: XPathNSResolver): XPathExpression

	declare function createNSResolver(node: Node): XPathNSResolver

	declare class XPathResult  {
		ANY_TYPE: number;
		NUMBER_TYPE: number;
		STRING_TYPE: number;
		BOOLEAN_TYPE: number;
		UNORDERED_NODE_ITERATOR_TYPE: number;
		ORDERED_NODE_ITERATOR_TYPE: number;
		UNORDERED_NODE_SNAPSHOT_TYPE: number;
		ORDERED_NODE_SNAPSHOT_TYPE: number;
		ANY_UNORDERED_NODE_TYPE: number;
		FIRST_ORDERED_NODE_TYPE: number;
		resultType: number;
		iterateNext(): Node;
		snapshotItem(index: number): Node;
		snapshotLength: number;
		booleanValue: boolean;
		numberValue: number;
		stringValue: string;
		singleNodeValue: Node
	}

	
}