

declare module 'graphlib' {
		declare export interface GraphOptions {
		directed?: boolean,
		multigraph?: boolean,
		compound?: boolean
	}

	declare export interface Edge {
		v: string,
		w: string,
		name?: string
	}

	declare export interface Path {
		distance: number,
		predecessor: string
	}

		declare export class Graph  {
		constructor(options?: GraphOptions): this;
		setNode(name: string, label?: any): Graph;
		hasNode(name: string): boolean;
		removeNode(name: string): Graph;
		nodes(): string[];
		node(name: string): any;
		setEdge(v: string, w: string, label?: any): Graph;
		edges(): Edge[];
		edge(v: string, w: string): any;
		edge(e: Edge): any;
		inEdges(v: string, u?: string): Edge[];
		outEdges(v: string, w?: string): Edge[];
		nodeEdges(v: string, w?: string): Edge[];
		predecessors(node: string): string[];
		successors(node: string): string[];
		neighbors(node: string): string[];
		isDirected(): boolean;
		isMultigraph(): boolean;
		isCompound(): boolean;
		setGraph(label: string): void;
		graph(): string;
		nodeCount(): number;
		edgeCount(): number;
		sources(): string[];
		sinks(): string[]
	}

	
}

declare module 'json' {
			declare function write(g: Graph): Object

	declare function read(json: Object): Graph

		
}

declare module 'alg' {
			declare function components(g: Graph): string[][]

	declare function dijkstra(
		graph: Graph, source: string, weightFn?: (e: Edge) => number, edgeFn?: (v: string) => Edge[]
	): {
		[node: string]: Path
	}

	declare function dijkstraAll(
		graph: Graph, weightFn?: (e: Edge) => number, edgeFn?: (v: string) => Edge[]
	): {
		[source: string]: {
		[node: string]: Path
	}
	}

	declare function findCycles(graph: Graph): string[][]

	declare function floydWarshall(
		graph: Graph, weightFn?: (e: Edge) => number, edgeFn?: (v: string) => Edge[]
	): {
		[source: string]: {
		[node: string]: Path
	}
	}

	declare function isAcyclic(graph: Graph): boolean

	declare function prim(graph: Graph, weightFn: (e: Edge) => number): Graph

	declare function tarjan(graph: Graph): string[][]

	declare function topsort(graph: Graph): string[]

		
}