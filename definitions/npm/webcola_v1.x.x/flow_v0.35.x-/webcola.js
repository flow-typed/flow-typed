

declare module 'webcola' {
				declare class PairingHeap<T>  {
		elem: T;
		constructor(elem: T): this;
		toString(selector: any): string;
		forEach(f: any): void;
		count(): number;
		min(): T;
		empty(): boolean;
		contains(h: PairingHeap<T>): boolean;
		isHeap(lessThan: (a: T, b: T) => boolean): boolean;
		insert(obj: T, lessThan: any): PairingHeap<T>;
		merge(heap2: PairingHeap<T>, lessThan: any): PairingHeap<T>;
		removeMin(lessThan: (a: T, b: T) => boolean): PairingHeap<T>;
		mergePairs(lessThan: (a: T, b: T) => boolean): PairingHeap<T>;
		decreaseKey(
		subheap: PairingHeap<T>, newValue: T, setHeapNode: (e: T, h: PairingHeap<T>) => void, lessThan: (a: T, b: T) => boolean
	): PairingHeap<T>
	}

	declare class PriorityQueue<T>  {
		constructor(lessThan: (a: T, b: T) => boolean): this;
		top(): T;
		push(...args: T[]): PairingHeap<T>;
		empty(): boolean;
		isHeap(): boolean;
		forEach(f: any): void;
		pop(): T;
		reduceKey(
		heapNode: PairingHeap<T>, newKey: T, setHeapNode?: (e: T, h: PairingHeap<T>) => void
	): void;
		toString(selector: any): string;
		count(): number
	}

	
}

declare module 'npm$namespace$cola' {
		declare interface LinkAccessor<Link> {
		getSourceIndex(l: Link): number,
		getTargetIndex(l: Link): number
	}

	declare interface LinkLengthAccessor<Link> {
		setLength(l: Link, value: number): void
	}

	declare interface IConstraint {
		left: number,
		right: number,
		gap: number
	}

	declare interface DirectedEdgeConstraints {
		axis: string,
		gap: number
	}

	declare interface LinkSepAccessor<Link> {
		getMinSeparation(l: Link): number
	}

	declare interface Event {
		type: EventType,
		alpha: number,
		stress?: number,
		listener?: () => void
	}

	declare interface Node {
		x: number,
		y: number,
		width?: number,
		height?: any,
		number: any
	}

	declare interface Link<NodeType> {
		source: NodeType,
		target: NodeType,
		length?: number,
		weight?: number
	}

	declare interface NodeAccessor<Node> {
		getChildren(v: Node): number[],
		getBounds(v: Node): cola.vpsc.Rectangle
	}

	declare interface GridLine {
		nodes: NodeWrapper[],
		pos: number
	}

	declare function applyPacking(
		graphs: Array<any>, w: any, h: any, node_size: any, desired_ratio?: number
	): void

	declare function separateGraphs(nodes: any, links: any): any[]

	declare function symmetricDiffLinkLengths<Link>(links: Link[], la: LinkLengthAccessor<Link>, w?: number): void

	declare function jaccardLinkLengths<Link>(links: Link[], la: LinkLengthAccessor<Link>, w?: number): void

	declare function generateDirectedEdgeConstraints<Link>(
		n: number, links: Link[], axis: string, la: LinkSepAccessor<Link>
	): IConstraint[]

	declare function stronglyConnectedComponents<Link>(numVertices: number, edges: Link[], la: LinkAccessor<Link>): number[][]

	declare function adaptor(options: any): LayoutAdaptor

	declare function gridify(pgLayout: any, nudgeGap: any, margin: any, groupMargin: any): geom.Point[][][]

	declare function powerGraphGridLayout(
		graph: {
		nodes: Node[],
		links: Link<Node>[]
	}, size: number[], grouppadding: number, margin: number, groupMargin: number
	): {
		cola: Layout,
		powerGraph: any
	}

	declare function d3adaptor(): D3StyleLayoutAdaptor

	declare class Locks  {
		locks: any;
		add(id: number, x: number[]): void;
		clear(): void;
		isEmpty(): boolean;
		apply(f: (id: number, x: number[]) => void): void
	}

	declare class Descent  {
		D: number[][];
		G: number[][];
		threshold: number;
		H: number[][][];
		g: number[][];
		x: number[][];
		k: number;
		n: number;
		locks: Locks;
		numGridSnapNodes: number;
		snapGridSize: number;
		snapStrength: number;
		scaleSnapByMaxH: boolean;
		project: {
		(x0: number[], y0: number[], r: number[]): void
	}[];
		constructor(x: number[][], D: number[][], G?: number[][]): this;
		createSquareMatrix(n: number, f: (i: number, j: number) => number): number[][];
		computeDerivatives(x: number[][]): void;
		computeStepSize(d: number[][]): number;
		reduceStress(): number;
		run(iterations: number): number;
		rungeKutta(): number;
		takeDescentStep(x: number[], d: number[], stepSize: number): void;
		computeStress(): number
	}

	declare class PseudoRandom  {
		seed: number;
		constructor(seed?: number): this;
		getNext(): number;
		getNextBetween(min: number, max: number): number
	}

	declare class Layout  {
		event: any;
		on(e: EventType | string, listener: (event: Event) => void): Layout;
		trigger(e: Event): void;
		kick(): void;
		tick(): boolean;
		nodes(): Array<Node>;
		nodes(v: Array<Node>): Layout;
		groups(): Array<any>;
		groups(x: Array<any>): Layout;
		powerGraphGroups(f: Function): Layout;
		avoidOverlaps(): boolean;
		avoidOverlaps(v: boolean): Layout;
		handleDisconnected(): boolean;
		handleDisconnected(v: boolean): Layout;
		flowLayout(axis: string, minSeparation: number | ((t: any) => number)): Layout;
		links(): Array<Link<Node | number>>;
		links(x: Array<Link<Node | number>>): Layout;
		constraints(): Array<any>;
		constraints(c: Array<any>): Layout;
		distanceMatrix(): Array<Array<number>>;
		distanceMatrix(d: Array<Array<number>>): Layout;
		size(): Array<number>;
		size(x: Array<number>): Layout;
		defaultNodeSize(): number;
		defaultNodeSize(x: number): Layout;
		groupCompactness(): number;
		groupCompactness(x: number): Layout;
		linkDistance(): number;
		linkDistance(): (t: any) => number;
		linkDistance(x: number): Layout;
		linkDistance(x: (t: any) => number): Layout;
		linkType(f: Function | number): Layout;
		convergenceThreshold(): number;
		convergenceThreshold(x: number): Layout;
		alpha(): number;
		alpha(x: number): Layout;
		getLinkLength(link: any): number;
		setLinkLength(link: any, length: number): void;
		getLinkType(link: any): number;
		linkAccessor: {
		getSourceIndex: (e: any) => any,
		getTargetIndex: (e: any) => any,
		setLength: (link: any, length: number) => void,
		getType: (l: any) => any
	};
		symmetricDiffLinkLengths(idealLength: number, w?: number): Layout;
		jaccardLinkLengths(idealLength: number, w?: number): Layout;
		start(
		initialUnconstrainedIterations?: number, initialUserConstraintIterations?: number, initialAllConstraintsIterations?: number, gridSnapIterations?: number, keepRunning?: boolean
	): Layout;
		resume(): Layout;
		stop(): Layout;
		prepareEdgeRouting(nodeMargin?: number): void;
		routeEdge(edge: any, draw: any): any[];
		getSourceIndex(e: any): any;
		getTargetIndex(e: any): any;
		linkId(e: any): string;
		dragStart(d: any): void;
		dragEnd(d: any): void;
		mouseOver(d: any): void;
		mouseOut(d: any): void
	}

	declare class LayoutAdaptor extends Layout {
		trigger(e: Event): void;
		kick(): void;
		drag(): void;
		on(eventType: EventType | string, listener: () => void): LayoutAdaptor;
		dragstart: (d: any) => void;
		dragStart: (d: any) => void;
		dragend: (d: any) => void;
		dragEnd: (d: any) => void;
		constructor(options: any): this
	}

	declare class D3StyleLayoutAdaptor extends Layout {
		event: any;
		trigger(e: Event): void;
		kick(): void;
		drag: () => any;
		constructor(): this;
		on(eventType: EventType | string, listener: () => void): D3StyleLayoutAdaptor
	}

	declare class NodeWrapper  {
		id: number;
		rect: cola.vpsc.Rectangle;
		children: number[];
		leaf: boolean;
		parent: NodeWrapper;
		ports: Vert[];
		constructor(id: number, rect: cola.vpsc.Rectangle, children: number[]): this
	}

	declare class Vert  {
		id: number;
		x: number;
		y: number;
		node: NodeWrapper;
		line: any;
		constructor(id: number, x: number, y: number, node?: NodeWrapper, line?: any): this
	}

	declare class LongestCommonSubsequence<T>  {
		s: T[];
		t: T[];
		length: number;
		si: number;
		ti: number;
		reversed: boolean;
		constructor(s: T[], t: T[]): this;
		getSequence(): T[]
	}

	declare class GridRouter<Node>  {
		originalnodes: Node[];
		groupPadding: number;
		leaves: NodeWrapper[];
		groups: NodeWrapper[];
		nodes: NodeWrapper[];
		cols: GridLine[];
		rows: GridLine[];
		root: any;
		verts: Vert[];
		edges: any;
		backToFront: any;
		obstacles: any;
		passableEdges: any;
		constructor(originalnodes: Node[], accessor: NodeAccessor<Node>, groupPadding?: number): this;
		siblingObstacles(a: any, b: any): any;
		getSegmentSets(routes: any, x: any, y: any): any[];
		nudgeSegs(
		x: string, y: string, routes: any, segments: any, leftOf: any, gap: number
	): void;
		nudgeSegments(
		routes: any, x: string, y: string, leftOf: (e1: number, e2: number) => boolean, gap: number
	): void;
		routeEdges<Edge>(
		edges: Edge[], nudgeGap: number, source: (e: Edge) => number, target: (e: Edge) => number
	): geom.Point[][][];
		unreverseEdges(routes: any, routePaths: any): void;
		angleBetween2Lines(line1: geom.Point[], line2: geom.Point[]): number;
		orderEdges(edges: any): (l: number, r: number) => boolean;
		makeSegments(path: geom.Point[]): geom.Point[][];
		route(s: number, t: number): geom.Point[];
		getRoutePath(
		route: geom.Point[][], cornerradius: number, arrowwidth: number, arrowheight: number
	): {
		routepath: string,
		arrowpath: string
	}
	}

	declare class Link3D  {
		source: number;
		target: number;
		length: number;
		constructor(source: number, target: number): this;
		actualLength(x: number[][]): number
	}

	declare class Node3D extends vpsc$GraphNode {
		x: number;
		y: number;
		z: number;
		fixed: boolean;
		width: number;
		height: number;
		px: number;
		py: number;
		bounds: vpsc.Rectangle;
		variable: vpsc.Variable;
		constructor(x?: number, y?: number, z?: number): this
	}

	declare class Layout3D  {
		nodes: Node3D[];
		links: Link3D[];
		idealLinkLength: number;
		dims: string[];
		k: number;
		result: number[][];
		constraints: any[];
		constructor(nodes: Node3D[], links: Link3D[], idealLinkLength?: number): this;
		linkLength(l: Link3D): number;
		useJaccardLinkLengths: boolean;
		descent: cola.Descent;
		start(iterations?: number): Layout3D;
		tick(): number
	}

	
}

declare module 'vpsc' {
		declare interface Point {
		x: number,
		y: number
	}

	declare interface Leaf {
		bounds: Rectangle,
		variable: Variable
	}

	declare interface Group {
		bounds: Rectangle,
		padding: number,
		stiffness: number,
		leaves: Leaf[],
		groups: Group[],
		minVar: Variable,
		maxVar: Variable
	}

	declare interface GraphNode {
		fixed: boolean,
		fixedWeight?: number,
		width: number,
		height: number,
		x: number,
		y: number,
		px: number,
		py: number
	}

	declare function computeGroupBounds(g: Group): Rectangle

	declare function makeEdgeBetween(
		source: Rectangle, target: Rectangle, ah: number
	): {
		sourceIntersection: Point,
		targetIntersection: Point,
		arrowStart: Point
	}

	declare function makeEdgeTo(s: {
		x: number,
		y: number
	}, target: Rectangle, ah: number): Point

	declare function generateXConstraints(rs: Rectangle[], vars: Variable[]): Constraint[]

	declare function generateYConstraints(rs: Rectangle[], vars: Variable[]): Constraint[]

	declare function generateXGroupConstraints(root: Group): Constraint[]

	declare function generateYGroupConstraints(root: Group): Constraint[]

	declare function removeOverlaps(rs: Rectangle[]): void

	declare class PositionStats  {
		scale: number;
		AB: number;
		AD: number;
		A2: number;
		constructor(scale: number): this;
		addVariable(v: Variable): void;
		getPosn(): number
	}

	declare class Constraint  {
		left: Variable;
		right: Variable;
		gap: number;
		equality: boolean;
		lm: number;
		active: boolean;
		unsatisfiable: boolean;
		constructor(left: Variable, right: Variable, gap: number, equality?: boolean): this;
		slack(): number
	}

	declare class Variable  {
		desiredPosition: number;
		weight: number;
		scale: number;
		offset: number;
		block: Block;
		cIn: Constraint[];
		cOut: Constraint[];
		constructor(desiredPosition: number, weight?: number, scale?: number): this;
		dfdv(): number;
		position(): number;
		visitNeighbours(prev: Variable, f: (c: Constraint, next: Variable) => void): void
	}

	declare class Block  {
		vars: Variable[];
		posn: number;
		ps: PositionStats;
		blockInd: number;
		constructor(v: Variable): this;
		updateWeightedPosition(): void;
		traverse(visit: (c: Constraint) => any, acc: any[], v?: Variable, prev?: Variable): void;
		findMinLM(): Constraint;
		isActiveDirectedPathBetween(u: Variable, v: Variable): boolean;
		split(c: Constraint): Block[];
		splitBetween(
		vl: Variable, vr: Variable
	): {
		constraint: Constraint,
		lb: Block,
		rb: Block
	};
		mergeAcross(b: Block, c: Constraint, dist: number): void;
		cost(): number
	}

	declare class Blocks  {
		vs: Variable[];
		constructor(vs: Variable[]): this;
		cost(): number;
		insert(b: Block): void;
		remove(b: Block): void;
		merge(c: Constraint): void;
		forEach(f: (b: Block, i: number) => void): void;
		updateBlockPositions(): void;
		split(inactive: Constraint[]): void
	}

	declare class Solver  {
		vs: Variable[];
		cs: Constraint[];
		bs: Blocks;
		inactive: Constraint[];
		LAGRANGIAN_TOLERANCE: number;
		ZERO_UPPERBOUND: number;
		constructor(vs: Variable[], cs: Constraint[]): this;
		cost(): number;
		setStartingPositions(ps: number[]): void;
		setDesiredPositions(ps: number[]): void;
		satisfy(): void;
		solve(): number
	}

	declare class TreeBase  {
		_root: any;
		size: any;
		_comparator: any;
		clear(): void;
		find(data: any): any;
		findIter: (data: any) => any;
		lowerBound(data: any): Iterator;
		upperBound(data: any): Iterator;
		min(): any;
		max(): any;
		iterator(): Iterator;
		each(cb: any): void;
		reach(cb: any): void;
		_bound(data: any, cmp: any): Iterator
	}

	declare class Iterator  {
		_tree: any;
		_ancestors: any;
		_cursor: any;
		constructor(tree: any): this;
		data(): any;
		next(): any;
		prev(): any;
		_minNode(start: any): void;
		_maxNode(start: any): void
	}

	declare class RBTree<T> extends TreeBase {
		_root: any;
		_comparator: any;
		size: any;
		constructor(comparator: (a: T, b: T) => number): this;
		insert(data: any): boolean;
		remove(data: any): boolean;
		is_red(node: any): any;
		single_rotate(root: any, dir: any): any;
		double_rotate(root: any, dir: any): any
	}

	declare class Rectangle  {
		x: number;
		X: number;
		y: number;
		Y: number;
		constructor(x: number, X: number, y: number, Y: number): this;
		empty(): Rectangle;
		cx(): number;
		cy(): number;
		overlapX(r: Rectangle): number;
		overlapY(r: Rectangle): number;
		setXCentre(cx: number): void;
		setYCentre(cy: number): void;
		width(): number;
		height(): number;
		union(r: Rectangle): Rectangle;
		lineIntersections(x1: number, y1: number, x2: number, y2: number): Array<Point>;
		rayIntersection(x2: number, y2: number): Point;
		vertices(): Point[];
		lineIntersection(
		x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number
	): Point;
		inflate(pad: number): Rectangle
	}

	declare class IndexedVariable extends Variable {
		index: number;
		constructor(index: number, w: number): this
	}

	declare class Projection  {
		constructor(nodes: GraphNode[], groups: Group[], rootGroup?: Group, constraints?: any[], avoidOverlaps?: boolean): this;
		xProject(x0: number[], y0: number[], x: number[]): void;
		yProject(x0: number[], y0: number[], y: number[]): void;
		projectFunctions(): {
		(x0: number[], y0: number[], r: number[]): void
	}[]
	}

	
}

declare module 'geom' {
			declare function isLeft(P0: Point, P1: Point, P2: Point): number

	declare function ConvexHull(S: Point[]): Point[]

	declare function clockwiseRadialSweep(p: Point, P: Point[], f: (p: Point) => void): void

	declare function tangent_PolyPolyC(
		V: Point[], W: Point[], t1: (a: Point, b: Point[]) => number, t2: (a: Point, b: Point[]) => number, cmp1: (a: Point, b: Point, c: Point) => boolean, cmp2: (a: Point, b: Point, c: Point) => boolean
	): {
		t1: number,
		t2: number
	}

	declare function LRtangent_PolyPolyC(V: Point[], W: Point[]): {
		t1: number,
		t2: number
	}

	declare function RLtangent_PolyPolyC(V: Point[], W: Point[]): {
		t1: number,
		t2: number
	}

	declare function LLtangent_PolyPolyC(V: Point[], W: Point[]): {
		t1: number,
		t2: number
	}

	declare function RRtangent_PolyPolyC(V: Point[], W: Point[]): {
		t1: number,
		t2: number
	}

	declare function tangents(V: Point[], W: Point[]): BiTangents

	declare function polysOverlap(p: Point[], q: Point[]): boolean

	declare class Point  {
		x: number;
		y: number
	}

	declare class LineSegment  {
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		constructor(x1: number, y1: number, x2: number, y2: number): this
	}

	declare class PolyPoint extends Point {
		polyIndex: number
	}

	declare class BiTangent  {
		t1: number;
		t2: number;
		constructor(t1: number, t2: number): this
	}

	declare class BiTangents  {
		rl: BiTangent;
		lr: BiTangent;
		ll: BiTangent;
		rr: BiTangent
	}

	declare class TVGPoint extends Point {
		vv: VisibilityVertex
	}

	declare class VisibilityVertex  {
		id: number;
		polyid: number;
		polyvertid: number;
		p: TVGPoint;
		constructor(id: number, polyid: number, polyvertid: number, p: TVGPoint): this
	}

	declare class VisibilityEdge  {
		source: VisibilityVertex;
		target: VisibilityVertex;
		constructor(source: VisibilityVertex, target: VisibilityVertex): this;
		length(): number
	}

	declare class TangentVisibilityGraph  {
		P: TVGPoint[][];
		V: VisibilityVertex[];
		E: VisibilityEdge[];
		constructor(P: TVGPoint[][], g0?: {
		V: VisibilityVertex[],
		E: VisibilityEdge[]
	}): this;
		addEdgeIfVisible(u: TVGPoint, v: TVGPoint, i1: number, i2: number): void;
		addPoint(p: TVGPoint, i1: number): VisibilityVertex
	}

	
}

declare module 'powergraph' {
		declare interface LinkAccessor<Link> {
		getSourceIndex(l: Link): number,
		getTargetIndex(l: Link): number,
		getType(l: Link): number
	}

	declare function getGroups<Link>(
		nodes: any[], links: Link[], la: LinkAccessor<Link>, rootGroup?: any[]
	): {
		groups: any[],
		powerEdges: PowerEdge[]
	}

	declare class PowerEdge  {
		source: any;
		target: any;
		type: number;
		constructor(source: any, target: any, type: number): this
	}

	declare class Configuration<Link>  {
		modules: Module[];
		roots: ModuleSet[];
		R: number;
		constructor(n: number, edges: Link[], linkAccessor: LinkAccessor<Link>, rootGroup?: any[]): this;
		merge(a: Module, b: Module, k?: number): Module;
		greedyMerge(): boolean;
		getGroupHierarchy(retargetedEdges: PowerEdge[]): any[];
		allEdges(): PowerEdge[];
		getEdges(modules: ModuleSet, es: PowerEdge[]): void
	}

	declare class Module  {
		id: number;
		outgoing: LinkSets;
		incoming: LinkSets;
		children: ModuleSet;
		definition: any;
		gid: number;
		constructor(id: number, outgoing?: LinkSets, incoming?: LinkSets, children?: ModuleSet, definition?: any): this;
		getEdges(es: PowerEdge[]): void;
		isLeaf(): boolean;
		isIsland(): boolean;
		isPredefined(): boolean
	}

	declare class ModuleSet  {
		table: any;
		count(): number;
		intersection(other: ModuleSet): ModuleSet;
		intersectionCount(other: ModuleSet): number;
		contains(id: number): boolean;
		add(m: Module): void;
		remove(m: Module): void;
		forAll(f: (m: Module) => void): void;
		modules(): Module[]
	}

	declare class LinkSets  {
		sets: any;
		n: number;
		count(): number;
		contains(id: number): boolean;
		add(linktype: number, m: Module): void;
		remove(linktype: number, m: Module): void;
		forAll(f: (ms: ModuleSet, linktype: number) => void): void;
		forAllModules(f: (m: Module) => void): void;
		intersection(other: LinkSets): LinkSets
	}

	
}

declare module 'shortestpaths' {
				declare class Calculator<Link>  {
		n: number;
		es: Link[];
		constructor(n: number, es: Link[], getSourceIndex: (l: Link) => number, getTargetIndex: (l: Link) => number, getLength: (l: Link) => number): this;
		DistanceMatrix(): number[][];
		DistancesFromNode(start: number): number[];
		PathFromNodeToNode(start: number, end: number): number[];
		PathFromNodeToNodeWithPrevCost(
		start: number, end: number, prevCost: (u: number, v: number, w: number) => number
	): number[]
	}

	
}