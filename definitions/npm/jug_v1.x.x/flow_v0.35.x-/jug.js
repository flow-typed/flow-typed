

declare module 'jug' {
	declare type VertexData = Object;

	declare interface VertexStructure {
		level: number,
		edge: Array<Vertex>,
		data: VertexData,
		parent: Vertex
	}

	declare interface GraphConstructor {
		new (): Graph
	}

	declare interface Graph {
		vertex: VertexConstructor,
		init(data?: VertexData): Vertex
	}

	declare interface VertexConstructor {
		new (obj?: VertexData): Vertex
	}

	declare interface Vertex {
		internal: VertexStructure,
		level(): number,
		edge(): number,
		edge(index: number): Vertex,
		seed(data?: VertexData): Vertex,
		isRoot(): boolean,
		data(obj: VertexData): Vertex,
		data(): VertexData,
		proximity(from: string, to: string): Array<number>,
		find(type: string | void, query: Object): Array<VertexData>,
		getSiblingsOf(index: number): Array<VertexData>,
		getChildsOf(egde: number): Array<VertexData>,
		getParentsFrom(level: number, edge: number): Array<VertexData>,
		getScopeOf(edge: number): number
	}

			declare module.exports: Graph


}