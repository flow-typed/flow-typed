

declare module 'graphviz' {
		declare export interface HasAttributes {
		set(name: string, value: any): void,
		get(name: string): any
	}

	declare export interface Node {
		
	}

	declare export interface Edge {
		
	}

	declare export interface OutputCallback {
		(data: string): void
	}

	declare export interface ErrorCallback {
		(code: number, stdout: string, stderr: string): void
	}

	declare export interface RenderOptions {
		type: string,
		use: string,
		path: string,
		G: any,
		N: any,
		E: any
	}

	declare export interface Graph {
		addNode(id: string, attrs?: any): Node,
		nodeCount(): number,
		addEdge(nodeOne: string, nodeTwo: string, attrs?: any): Edge,
		addEdge(nodeOne: string, nodeTwo: Node, attrs?: any): Edge,
		addEdge(nodeOne: Node, nodeTwo: string, attrs?: any): Edge,
		addEdge(nodeOne: Node, nodeTwo: Node, attrs?: any): Edge,
		edgeCount(): number,
		addCluster(id: string): Graph,
		getCluster(id: string): Graph,
		clusterCount(): number,
		setNodeAttribut(name: string, value: any): void,
		getNodeAttribut(name: string): any,
		setEdgeAttribut(name: string, value: any): void,
		getEdgeAttribut(name: string): any,
		to_dot(): string,
		use: string,
		setGraphVizPath(directoryPath: string): void,
		render(type: string, filename: string, errback?: ErrorCallback): void,
		render(options: RenderOptions, filename: string, errback?: ErrorCallback): void,
		render(type: string, callback: OutputCallback, errback?: ErrorCallback): void,
		render(
		options: RenderOptions, callback: OutputCallback, errback?: ErrorCallback
	): void,
		output(type: string, filename: string, errback?: ErrorCallback): void,
		output(options: RenderOptions, filename: string, errback?: ErrorCallback): void,
		output(type: string, callback: OutputCallback, errback?: ErrorCallback): void,
		output(
		options: RenderOptions, callback: OutputCallback, errback?: ErrorCallback
	): void
	}

	declare interface ParseCallback {
		(graph: Graph): void
	}

	declare export function graph(id: string): Graph

	declare export function digraph(id: string): Graph

	declare export function parse(path: string, callback: ParseCallback, errback?: ErrorCallback): void

		
}