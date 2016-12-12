

declare module 'pathfinding' {
					declare module.exports: undefined


}

declare module 'Heuristic' {
			declare function manhattan(dx: number, dy: number): number

	declare function euclidean(dx: number, dy: number): number

	declare function octile(dx: number, dy: number): number

	declare function chebyshev(dx: number, dy: number): number

		
}

declare module 'Util' {
			declare function smoothenPath(grid: Grid, path: number[][]): number[][]

	declare function compressPath(path: number[][]): number[][]

	declare function expandPath(path: number[][]): number[][]

		
}

declare module 'Pathfinding' {
		declare interface Node {
		x: number,
		y: number,
		walkable: boolean
	}

	declare interface Heuristic {
		heuristic?: (dx: number, dy: number) => number
	}

	declare interface FinderOptions {
		diagonalMovement?: DiagonalMovement,
		weight?: number
	}

	declare interface IDAStarFinderOptions {
		trackRecursion?: boolean,
		timeLimit?: number
	}

	declare interface JumpPointFinderBaseOptions {
		trackJumpRecursion?: boolean
	}

	declare interface JumpPointFinderOptions {
		diagonalMovement?: DiagonalMovement
	}

	declare interface BiBreadthFirstFinderOptions {
		diagonalMovement?: DiagonalMovement
	}

	declare interface Grid {
		new (width: number, height: number): Grid,
		new (matrix: number[][]): Grid,
		setWalkableAt(x: number, y: number, walkable: boolean): void,
		clone(): Grid,
		getNodeAt(): Pathfinding.Node,
		getNeighbors(node: Pathfinding.Node, diagonalMovement: DiagonalMovement): Pathfinding.Node[],
		isWalkableAt(x: number, y: number): boolean,
		isInside(x: number, y: number): boolean,
		width: number,
		height: number
	}

	declare interface Finder {
		findPath(
		startX: number, startY: number, endX: number, endY: number, matrix: Grid
	): number[][]
	}

	declare interface AStarFinder {
		new (): AStarFinder,
		new (opt: FinderOptions): AStarFinder
	}

	declare interface BestFirstFinder {
		new (): BestFirstFinder,
		new (opt: JumpPointFinderOptions): BestFirstFinder
	}

	declare interface BiAStarFinder {
		new (): BiAStarFinder,
		new (opt: JumpPointFinderOptions): BiAStarFinder
	}

	declare interface BiBestFirstFinder {
		new (): BiBestFirstFinder,
		new (opt: JumpPointFinderOptions): BiBestFirstFinder
	}

	declare interface BiBreadthFirstFinder {
		new (): BiBreadthFirstFinder,
		new (opt: BiBreadthFirstFinderOptions): BiBreadthFirstFinder
	}

	declare interface BiDijkstraFinder {
		new (): BiDijkstraFinder,
		new (opt: BiBreadthFirstFinderOptions): BiDijkstraFinder
	}

	declare interface BreadthFirstFinder {
		new (): BreadthFirstFinder,
		new (opt: BiBreadthFirstFinderOptions): BreadthFirstFinder
	}

	declare interface DijkstraFinder {
		new (): DijkstraFinder,
		new (opt: BiBreadthFirstFinderOptions): DijkstraFinder
	}

	declare interface IDAStarFinder {
		new (): IDAStarFinder,
		new (opt: IDAStarFinderOptions): IDAStarFinder
	}

	declare interface JumpPointFinderBase {
		new (): JumpPointFinderBase,
		new (opt: JumpPointFinderBaseOptions): JumpPointFinderBase
	}

	declare interface JPFAlwaysMoveDiagonally {
		new (): JPFAlwaysMoveDiagonally,
		new (opt: JumpPointFinderBaseOptions): JPFAlwaysMoveDiagonally
	}

	declare interface JPFMoveDiagonallyIfAtMostOneObstacle {
		new (): JPFMoveDiagonallyIfAtMostOneObstacle,
		new (opt: JumpPointFinderBaseOptions): JPFMoveDiagonallyIfAtMostOneObstacle
	}

	declare interface JPFMoveDiagonallyIfNoObstacles {
		new (): JPFMoveDiagonallyIfNoObstacles,
		new (opt: JumpPointFinderBaseOptions): JPFMoveDiagonallyIfNoObstacles
	}

	declare interface JPFNeverMoveDiagonally {
		new (): JPFNeverMoveDiagonally,
		new (opt: JumpPointFinderBaseOptions): JPFNeverMoveDiagonally
	}

	declare interface JumpPointFinder {
		(opt: JumpPointFinderOptions): JPFNeverMoveDiagonally | JPFAlwaysMoveDiagonally | JPFMoveDiagonallyIfNoObstacles | JPFMoveDiagonallyIfAtMostOneObstacle
	}

			
}