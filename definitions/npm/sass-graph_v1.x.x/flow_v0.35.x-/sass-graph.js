

declare module 'sass-graph' {
					declare module.exports: undefined


}

declare module 'npm$namespace$SassGraph' {
	declare type Node = {
		[filepath: string]: {
		imports: string[],
		importedBy: string[],
		modified: string
	}
	};

	declare export interface Options {
		loadPath?: string[],
		extensions?: string[]
	}

	declare export interface Graph {
		dir: string,
		loadPaths: string[],
		extensions: string[],
		index: Node,
		addFile(filepath: string, parent?: string): void,
		visitAncestors(filepath: string, callback: (edge: string, node: Node) => any): void,
		visitDescendents(filepath: string, callback: (edge: string, node: Node) => any): void,
		visit(
		filepath: string, callback: (edge: string, node: Node) => any, edgeCallback: (errorMsg: string, node: Node) => any, visited?: string[]
	): void
	}

	declare export function parseFile(filepath: string, options?: Options): Graph

	declare export function parseDir(dirpath: string, options?: Options): Graph

		
}