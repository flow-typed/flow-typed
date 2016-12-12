

declare module 'javascript-astar' {
		declare interface Heuristic {
		(pos0: {
		x: number,
		y: number
	}, pos1: {
		x: number,
		y: number
	}): number
	}

	declare interface Heuristics {
		manhatten: Heuristic,
		diagonal: Heuristic
	}

		declare class Graph  {
		grid: Array<Array<GridNode>>;
		constructor(grid: Array<Array<number>>, options?: {
		diagonal?: boolean
	}): this
	}

	declare class GridNode  {
		x: number;
		y: number
	}

	
}

declare module 'npm$namespace$astar' {
			declare function search(
		graph: Graph, start: {
		x: number,
		y: number
	}, end: {
		x: number,
		y: number
	}, options?: {
		closest?: boolean,
		heuristic?: Heuristic
	}
	): Array<GridNode>

		
}