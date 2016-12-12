import type { DagreFactory } from 'npm$namespace$Dagre'

declare module 'dagre' {
					declare module.exports: DagreFactory


}

declare module 'npm$namespace$Dagre' {
		declare interface DagreFactory {
		graphlib: GraphLib,
		layout(graph: Graph): void
	}

	declare interface Graph {
		new (): Graph,
		edges(): Edge[],
		edge(id: any): any,
		nodes(): string[],
		node(id: any): any,
		setDefaultEdgeLabel(callback: () => void): Graph,
		setEdge(sourceId: string, targetId: string, options?: {
		[key: string]: any
	}): Graph,
		setGraph(options: {
		[key: string]: any
	}): Graph,
		setNode(id: string, node: {
		[key: string]: any
	}): Graph
	}

	declare interface Edge {
		v: string,
		w: string
	}

	declare interface GraphLib {
		Graph: Graph
	}

			
}