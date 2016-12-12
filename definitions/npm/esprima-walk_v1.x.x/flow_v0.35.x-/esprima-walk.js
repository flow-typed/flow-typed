

declare module 'esprima-walk' {
		declare interface NodeWithParent {
		parent?: ESTree.Node
	}

	declare function walk(ast: ESTree.Program, fn: (node: ESTree.Node) => void): void

		declare module.exports: undefined


}

declare module 'walk' {
			declare export function walk(ast: ESTree.Program, fn: (node: ESTree.Node) => void): void

	declare export function walkAddParent(ast: ESTree.Program, fn: (node: NodeWithParent) => void): void

		
}