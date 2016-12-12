

declare module 'yfiles' {
		declare export interface InterfaceDefinition {
		
	}

	declare export interface ClassDefinition {
		
	}

	declare export interface StructDefinition {
		
	}

	declare export interface AttributeDefinition {
		
	}

	declare export interface EnumDefinition {
		
	}

			
}

declare module 'algorithms' {
		declare export interface NodeList {
		nodes(): yfiles.algorithms.INodeCursor,
		firstNode(): yfiles.algorithms.Node,
		lastNode(): yfiles.algorithms.Node,
		popNode(): yfiles.algorithms.Node,
		toNodeArray(): yfiles.algorithms.Node[],
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.algorithms.Node>
	}

	declare export interface NetworkFlows {
		
	}

	declare export interface Node {
		createCopy(g: yfiles.algorithms.Graph): yfiles.algorithms.Node,
		degree: number,
		inDegree: number,
		outDegree: number,
		index: number,
		graph: yfiles.algorithms.Graph,
		firstOutEdge: yfiles.algorithms.Edge,
		firstInEdge: yfiles.algorithms.Edge,
		lastOutEdge: yfiles.algorithms.Edge,
		lastInEdge: yfiles.algorithms.Edge,
		getEdgeCursor(): yfiles.algorithms.IEdgeCursor,
		getInEdgeCursor(): yfiles.algorithms.IEdgeCursor,
		getInEdgeCursorFromStartEdge(startEdge: yfiles.algorithms.Edge): yfiles.algorithms.IEdgeCursor,
		getOutEdgeCursor(): yfiles.algorithms.IEdgeCursor,
		getOutEdgeCursorFromStartEdge(startEdge: yfiles.algorithms.Edge): yfiles.algorithms.IEdgeCursor,
		getNeighborCursor(): yfiles.algorithms.INodeCursor,
		getPredecessorCursor(): yfiles.algorithms.INodeCursor,
		getSuccessorCursor(): yfiles.algorithms.INodeCursor,
		getEdgeTo(target: yfiles.algorithms.Node): yfiles.algorithms.Edge,
		getEdgeFrom(source: yfiles.algorithms.Node): yfiles.algorithms.Edge,
		getEdge(opposite: yfiles.algorithms.Node): yfiles.algorithms.Edge,
		sortInEdges(c: yfiles.objectcollections.IComparer): void,
		sortOutEdges(c: yfiles.objectcollections.IComparer): void,
		toString(): string,
		outEdges: yfiles.collections.IEnumerable<yfiles.algorithms.Edge>,
		inEdges: yfiles.collections.IEnumerable<yfiles.algorithms.Edge>,
		edges: yfiles.collections.IEnumerable<yfiles.algorithms.Edge>,
		successors: yfiles.collections.IEnumerable<yfiles.algorithms.Node>,
		predecessors: yfiles.collections.IEnumerable<yfiles.algorithms.Node>,
		neighbors: yfiles.collections.IEnumerable<yfiles.algorithms.Node>
	}

	declare export interface RankAssignments {
		
	}

	declare export interface Paths {
		
	}

	declare export interface NodeOrders {
		
	}

	declare export interface IGraphInterface {
		nodeObjects(): yfiles.algorithms.IIterator,
		edgeObjects(): yfiles.algorithms.IIterator,
		getSource(edgeObject: Object): Object,
		getTarget(edgeObject: Object): Object,
		getDataProvider(dataKey: Object): yfiles.algorithms.IDataProvider,
		dataProviderKeys: Object[]
	}

	declare export interface IGraphListener {
		onGraphEvent(e: yfiles.algorithms.GraphEvent): void
	}

	declare export interface IDataProvider {
		get(dataHolder: Object): Object,
		getInt(dataHolder: Object): number,
		getDouble(dataHolder: Object): number,
		getBool(dataHolder: Object): boolean
	}

	declare export interface IEdgeCursor {
		edge: yfiles.algorithms.Edge,
		cyclicNext(): void,
		cyclicPrev(): void
	}

	declare export interface IEdgeMap {
		set(edge: Object, value: Object): void,
		get(edge: Object): Object,
		setBool(edge: Object, value: boolean): void,
		getBool(edge: Object): boolean,
		setDouble(edge: Object, value: number): void,
		getDouble(edge: Object): number,
		setInt(edge: Object, value: number): void,
		getInt(edge: Object): number
	}

	declare export interface IndependentSets {
		
	}

	declare export interface InvalidGraphStructureException {
		
	}

	declare export interface ListCell {
		succ(): yfiles.algorithms.ListCell,
		pred(): yfiles.algorithms.ListCell,
		info: Object
	}

	declare export interface INodeCursor {
		node: yfiles.algorithms.Node,
		cyclicNext(): void,
		cyclicPrev(): void
	}

	declare export interface INodeMap {
		set(node: Object, value: Object): void,
		get(node: Object): Object,
		setBool(node: Object, value: boolean): void,
		getBool(key: Object): boolean,
		setDouble(node: Object, value: number): void,
		getDouble(node: Object): number,
		setInt(node: Object, value: number): void,
		getInt(node: Object): number
	}

	declare export interface INodeSequencer {
		nodes(graph: yfiles.algorithms.Graph): yfiles.algorithms.INodeCursor
	}

	declare export interface ShortestPaths {
		
	}

	declare export interface DataProviderAdapter {
		get(dataHolder: Object): Object,
		getInt(dataHolder: Object): number,
		getDouble(dataHolder: Object): number,
		getBool(dataHolder: Object): boolean,
		defined(dataHolder: Object): boolean
	}

	declare export interface DataProviders {
		
	}

	declare export interface DataAcceptorAdapter {
		set(dataHolder: Object, value: Object): void,
		setInt(dataHolder: Object, value: number): void,
		setDouble(dataHolder: Object, value: number): void,
		setBool(dataHolder: Object, value: boolean): void,
		defined(dataHolder: Object): boolean
	}

	declare export interface Comparators {
		
	}

	declare export interface Cursors {
		
	}

	declare export interface GraphPartitionManager {
		initPartitions(partitionId: yfiles.algorithms.IDataProvider): void,
		hidePartition(partitionId: Object): void,
		unhidePartition(partitionId: Object): void,
		displayPartition(partitionId: Object): void,
		fireGraphEventsEnabled: boolean,
		hideAll(): void,
		hideEdges(): void,
		hideSelfLoops(): void,
		simplifyGraph(): void,
		hideMultipleEdges(): void,
		unhideAll(): void,
		unhideNodes(): void,
		unhideEdges(): void,
		hideNode(v: yfiles.algorithms.Node): void,
		hideEdge(e: yfiles.algorithms.Edge): void,
		hideEdgeList(el: yfiles.algorithms.EdgeList): void,
		hideNodeList(nl: yfiles.algorithms.NodeList): void,
		hideEdgeCursor(ec: yfiles.algorithms.IEdgeCursor): void,
		hideNodeCursor(nc: yfiles.algorithms.INodeCursor): void,
		hideItemCursor(cursor: yfiles.algorithms.ICursor): void,
		graph: yfiles.algorithms.Graph,
		unhideEdge(e: yfiles.algorithms.Edge): void,
		unhideNode(v: yfiles.algorithms.Node): void
	}

	declare export interface GraphHider {
		hiddenEdgesF: yfiles.algorithms.EdgeList,
		hiddenNodesF: yfiles.algorithms.NodeList,
		fireGraphEvents: boolean,
		hideAll(): void,
		hideEdges(): void,
		hideSelfLoops(): void,
		simplifyGraph(): void,
		hideMultipleEdges(): void,
		unhideAll(): void,
		unhideNodes(): void,
		unhideEdges(): void,
		hideNode(v: yfiles.algorithms.Node): void,
		hide(e: yfiles.algorithms.Edge): void,
		hideEdgeList(el: yfiles.algorithms.EdgeList): void,
		hideNodeList(nl: yfiles.algorithms.NodeList): void,
		hideEdgeCursor(ec: yfiles.algorithms.IEdgeCursor): void,
		hideNodeCursor(nc: yfiles.algorithms.INodeCursor): void,
		hideItemCursor(cursor: yfiles.algorithms.ICursor): void,
		graph: yfiles.algorithms.Graph,
		unhideOneEdge(e: yfiles.algorithms.Edge): void,
		unhideEdge(e: yfiles.algorithms.Edge): void,
		unhideEdgeList(edges: yfiles.algorithms.EdgeList): void,
		unhideNodeList(nodes: yfiles.algorithms.NodeList, unhideAdjacentEdges: boolean): void,
		unhideNode(v: yfiles.algorithms.Node, unhideAdjacentEdges: boolean): void,
		unhideOneNode(v: yfiles.algorithms.Node): void,
		hiddenNodes(): yfiles.algorithms.INodeCursor,
		hiddenEdges(): yfiles.algorithms.IEdgeCursor
	}

	declare export interface DoubleObjectPQ {
		add(o: Object, priority: number): void,
		decreasePriority(o: Object, priority: number): void,
		increasePriority(o: Object, priority: number): void,
		changePriority(o: Object, priority: number): void,
		removeMin(): Object,
		min: Object,
		minPriority: number,
		contains(o: Object): boolean,
		empty: boolean,
		size(): number,
		getPriority(o: Object): number,
		remove(o: Object): void,
		clear(): void,
		dispose(): void
	}

	declare export interface EdgeMapAdapter {
		set(edge: Object, value: Object): void,
		get(edge: Object): Object,
		setBool(edge: Object, value: boolean): void,
		getBool(edge: Object): boolean,
		setDouble(edge: Object, value: number): void,
		getDouble(edge: Object): number,
		setInt(edge: Object, value: number): void,
		getInt(edge: Object): number
	}

	declare export interface GraphCopier {
		nodeMapCopying: boolean,
		edgeMapCopying: boolean,
		dataProviderContentCopying: boolean,
		copyFromSourceToTargetGraph(
		sourceGraph: yfiles.algorithms.Graph, targetGraph: yfiles.algorithms.Graph
	): yfiles.algorithms.NodeList,
		copy(sourceGraph: yfiles.algorithms.Graph): yfiles.algorithms.Graph,
		copyWithSourceGraphAndSourceNodes(
		sourceGraph: yfiles.algorithms.Graph, sourceNodes: yfiles.algorithms.INodeCursor
	): yfiles.algorithms.Graph,
		copyFactory: yfiles.algorithms.GraphCopier.ICopyFactory,
		createGraph(
		factory: yfiles.algorithms.GraphCopier.ICopyFactory, sourceGraph: yfiles.algorithms.Graph
	): yfiles.algorithms.Graph,
		copySubgraphNodes(
		sourceGraph: yfiles.algorithms.Graph, sourceNodes: yfiles.algorithms.INodeCursor, targetGraph: yfiles.algorithms.Graph
	): yfiles.algorithms.NodeList,
		copySubgraph(
		sourceGraph: yfiles.algorithms.Graph, sourceNodes: yfiles.algorithms.INodeCursor, sourceEdges: yfiles.algorithms.IEdgeCursor, targetGraph: yfiles.algorithms.Graph
	): yfiles.algorithms.NodeList,
		preCopyGraphData(
		copyFactory: yfiles.algorithms.GraphCopier.ICopyFactory, sourceGraph: yfiles.algorithms.Graph, targetGraph: yfiles.algorithms.Graph
	): void,
		postCopyGraphData(
		copyFactory: yfiles.algorithms.GraphCopier.ICopyFactory, sourceGraph: yfiles.algorithms.Graph, targetGraph: yfiles.algorithms.Graph, nodeMap: yfiles.algorithms.IMap, edgeMap: yfiles.algorithms.IMap
	): void,
		createEdgeMap(): yfiles.algorithms.IMap,
		copyEdge(
		copyFactory: yfiles.algorithms.GraphCopier.ICopyFactory, targetGraph: yfiles.algorithms.Graph, newSource: yfiles.algorithms.Node, newTarget: yfiles.algorithms.Node, edge: yfiles.algorithms.Edge
	): yfiles.algorithms.Edge,
		getSourceEdges(sourceGraph: yfiles.algorithms.Graph): yfiles.algorithms.IEdgeCursor,
		copyNode(
		copyFactory: yfiles.algorithms.GraphCopier.ICopyFactory, targetGraph: yfiles.algorithms.Graph, node: yfiles.algorithms.Node
	): yfiles.algorithms.Node,
		createNodeMap(): yfiles.algorithms.IMap,
		getSourceNodes(sourceGraph: yfiles.algorithms.Graph): yfiles.algorithms.INodeCursor
	}

	declare export interface Transitivity {
		
	}

	declare export interface Trees {
		
	}

	declare export interface Sorting {
		
	}

	declare export interface SpanningTrees {
		
	}

	declare export interface BHeapNodePQ {
		add(v: yfiles.algorithms.Node, priority: Object): void,
		decreasePriority(v: yfiles.algorithms.Node, priority: Object): void,
		increasePriority(v: yfiles.algorithms.Node, priority: Object): void,
		changePriority(v: yfiles.algorithms.Node, priority: Object): void,
		removeMin(): yfiles.algorithms.Node,
		min: yfiles.algorithms.Node,
		minPriority: Object,
		remove(v: yfiles.algorithms.Node): void,
		clear(): void,
		contains(v: yfiles.algorithms.Node): boolean,
		empty: boolean,
		size(): number,
		getPriority(v: yfiles.algorithms.Node): Object
	}

	declare export interface BHeapIntNodePQ {
		add(v: yfiles.algorithms.Node, priority: number): void,
		decreasePriority(v: yfiles.algorithms.Node, priority: number): void,
		increasePriority(v: yfiles.algorithms.Node, priority: number): void,
		changePriority(v: yfiles.algorithms.Node, p: number): void,
		removeMin(): yfiles.algorithms.Node,
		min: yfiles.algorithms.Node,
		minPriority: number,
		contains(v: yfiles.algorithms.Node): boolean,
		empty: boolean,
		size(): number,
		getPriority(v: yfiles.algorithms.Node): number,
		remove(v: yfiles.algorithms.Node): void,
		clear(): void,
		dispose(): void
	}

	declare export interface ArrayIntNodePQ {
		clear(): void,
		empty: boolean,
		contains(n: yfiles.algorithms.Node): boolean,
		add(n: yfiles.algorithms.Node, value: number): void,
		remove(n: yfiles.algorithms.Node): void,
		min: yfiles.algorithms.Node,
		decreasePriority(n: yfiles.algorithms.Node, value: number): void,
		increasePriority(n: yfiles.algorithms.Node, value: number): void,
		changePriority(n: yfiles.algorithms.Node, value: number): void,
		removeMin(): yfiles.algorithms.Node,
		getPriority(v: yfiles.algorithms.Node): number,
		dispose(): void,
		getList(value: number): yfiles.algorithms.YList
	}

	declare export interface BHeapDoubleNodePQ {
		add(v: yfiles.algorithms.Node, value: number): void,
		decreasePriority(v: yfiles.algorithms.Node, priority: number): void,
		increasePriority(v: yfiles.algorithms.Node, priority: number): void,
		changePriority(v: yfiles.algorithms.Node, p: number): void,
		removeMin(): yfiles.algorithms.Node,
		min: yfiles.algorithms.Node,
		minPriority: number,
		contains(v: yfiles.algorithms.Node): boolean,
		empty: boolean,
		size(): number,
		getPriority(v: yfiles.algorithms.Node): number,
		remove(v: yfiles.algorithms.Node): void,
		clear(): void,
		dispose(): void
	}

	declare export interface Triangulator {
		
	}

	declare export interface IPlaneObject {
		boundingBox: yfiles.algorithms.YRectangle
	}

	declare export interface IPointCursor {
		point: yfiles.algorithms.YPoint
	}

	declare export interface LineSegment {
		isVertical: boolean,
		isHorizontal: boolean,
		firstEndPoint: yfiles.algorithms.YPoint,
		secondEndPoint: yfiles.algorithms.YPoint,
		isInYIntervall(y: number): boolean,
		isInXIntervall(x: number): boolean,
		xOffset: number,
		slope: number,
		length(): number,
		boundingBox: yfiles.algorithms.YRectangle,
		intersectsRectangle(box: yfiles.algorithms.YRectangle): boolean,
		contains(point: yfiles.algorithms.YPoint): boolean,
		intersectsPoint(p: yfiles.algorithms.YPoint): boolean,
		toYVector(): yfiles.algorithms.YVector,
		toAffineLine(): yfiles.algorithms.AffineLine,
		deltaX: number,
		deltaY: number,
		toString(): string
	}

	declare export interface YRectangle {
		getManhattanDistance(other: yfiles.algorithms.YRectangle): number,
		x: number,
		y: number,
		location: yfiles.algorithms.YPoint,
		boundingBox: yfiles.algorithms.YRectangle,
		containsPointDouble(x: number, y: number): boolean,
		contains(p: yfiles.algorithms.YPoint): boolean,
		containsRectangle(p: yfiles.algorithms.YRectangle): boolean,
		containsRectangleDouble(x: number, y: number, width: number, height: number): boolean,
		toString(): string,
		hashCode(): number,
		equals(o: Object): boolean,
		compareToObject(o: Object): number,
		toRectD(): yfiles.geometry.RectD
	}

	declare export interface YVector {
		x: number,
		y: number,
		norm(): void,
		rotate(angle: number): yfiles.algorithms.YVector,
		add(v: yfiles.algorithms.YVector): void,
		scale(factor: number): void,
		length(): number,
		toString(): string,
		toPointD(): yfiles.geometry.PointD
	}

	declare export interface Graph {
		graphCopyFactory: yfiles.algorithms.GraphCopier.ICopyFactory,
		createGraphCopyFactory(): yfiles.algorithms.GraphCopier.ICopyFactory,
		hasListeners(): boolean,
		createCopy(): yfiles.algorithms.Graph,
		createNode(): yfiles.algorithms.Node,
		createEdgeBetween(v: yfiles.algorithms.Node, w: yfiles.algorithms.Node): yfiles.algorithms.Edge,
		createEdgeWithGraphElementInsertion(
		v: yfiles.algorithms.Node, e1: yfiles.algorithms.Edge, w: yfiles.algorithms.Node, e2: yfiles.algorithms.Edge, d1: yfiles.algorithms.GraphElementInsertion, d2: yfiles.algorithms.GraphElementInsertion
	): yfiles.algorithms.Edge,
		removeNode(v: yfiles.algorithms.Node): void,
		removeEdge(e: yfiles.algorithms.Edge): void,
		reInsertNode(v: yfiles.algorithms.Node): void,
		reInsertEdge(e: yfiles.algorithms.Edge): void,
		changeEdgeWithReferences(
		e: yfiles.algorithms.Edge, e1: yfiles.algorithms.Edge, e2: yfiles.algorithms.Edge, d1: yfiles.algorithms.GraphElementInsertion, d2: yfiles.algorithms.GraphElementInsertion
	): void,
		changeEdgeWithReference(
		e: yfiles.algorithms.Edge, newSource: yfiles.algorithms.Node, sourceReference: yfiles.algorithms.Edge, sourceD: yfiles.algorithms.GraphElementInsertion, newTarget: yfiles.algorithms.Node, targetReference: yfiles.algorithms.Edge, targetD: yfiles.algorithms.GraphElementInsertion
	): void,
		changeEdge(
		e: yfiles.algorithms.Edge, newSource: yfiles.algorithms.Node, newTarget: yfiles.algorithms.Node
	): void,
		reverseEdge(e: yfiles.algorithms.Edge): void,
		hideEdge(e: yfiles.algorithms.Edge): void,
		unhideEdge(e: yfiles.algorithms.Edge): void,
		hideNode(v: yfiles.algorithms.Node): void,
		unhideNode(v: yfiles.algorithms.Node): void,
		moveToLastNode(v: yfiles.algorithms.Node): void,
		moveToFirstNode(v: yfiles.algorithms.Node): void,
		moveToLastEdge(e: yfiles.algorithms.Edge): void,
		moveToFirstEdge(e: yfiles.algorithms.Edge): void,
		n: number,
		nodeCount: number,
		e: number,
		edgeCount: number,
		empty: boolean,
		clear(): void,
		containsNode(v: yfiles.algorithms.Node): boolean,
		containsEdge(e: yfiles.algorithms.Edge): boolean,
		containsEdgeBetweenNodes(source: yfiles.algorithms.Node, target: yfiles.algorithms.Node): boolean,
		firstNode: yfiles.algorithms.Node,
		firstEdge: yfiles.algorithms.Edge,
		lastNode: yfiles.algorithms.Node,
		lastEdge: yfiles.algorithms.Edge,
		getNodeArray(): yfiles.algorithms.Node[],
		getEdgeArray(): yfiles.algorithms.Edge[],
		getNodeCursor(): yfiles.algorithms.INodeCursor,
		getEdgeCursor(): yfiles.algorithms.IEdgeCursor,
		moveSubGraph(
		subNodes: yfiles.algorithms.NodeList, targetGraph: yfiles.algorithms.Graph
	): yfiles.algorithms.EdgeList,
		createGraph(): yfiles.algorithms.Graph,
		sortEdges(comp: yfiles.objectcollections.IComparer): void,
		sortNodes(comp: yfiles.objectcollections.IComparer): void,
		sortEdgesInAndOut(
		inComp: yfiles.objectcollections.IComparer, outComp: yfiles.objectcollections.IComparer
	): void,
		addGraphListener(listener: yfiles.algorithms.IGraphListener): void,
		removeGraphListener(listener: yfiles.algorithms.IGraphListener): void,
		graphListeners: yfiles.algorithms.IIterator,
		firePreEvent(): void,
		firePreEventWithId(id: Object): void,
		firePostEvent(): void,
		firePostEventWithId(id: Object): void,
		fireGraphEvent(e: yfiles.algorithms.GraphEvent): void,
		createNodeMap(): yfiles.algorithms.INodeMap,
		createEdgeMap(): yfiles.algorithms.IEdgeMap,
		disposeNodeMap(map: yfiles.algorithms.INodeMap): void,
		disposeEdgeMap(map: yfiles.algorithms.IEdgeMap): void,
		registeredNodeMaps: yfiles.algorithms.INodeMap[],
		registeredEdgeMaps: yfiles.algorithms.IEdgeMap[],
		getSource(edge: Object): Object,
		getTarget(edge: Object): Object,
		nodeObjects(): yfiles.algorithms.IIterator,
		edgeObjects(): yfiles.algorithms.IIterator,
		getDataProvider(providerKey: Object): yfiles.algorithms.IDataProvider,
		addDataProvider(providerKey: Object, data: yfiles.algorithms.IDataProvider): void,
		removeDataProvider(providerKey: Object): void,
		dataProviderKeys: Object[],
		printNodeSlotSize(): void,
		toString(): string,
		nodes: yfiles.collections.IEnumerable<yfiles.algorithms.Node>,
		edges: yfiles.collections.IEnumerable<yfiles.algorithms.Edge>
	}

	declare export interface YPointPath {
		cursor(): yfiles.algorithms.ICursor,
		points(): yfiles.algorithms.IPointCursor,
		iterator(): yfiles.algorithms.IIterator,
		first: yfiles.algorithms.YPoint,
		last: yfiles.algorithms.YPoint,
		toList(): yfiles.algorithms.IList,
		toArray(): yfiles.algorithms.YPoint[],
		createReverse(): yfiles.algorithms.YPointPath,
		length(): number,
		lineSegmentCount: number,
		lineSegments(): yfiles.algorithms.ILineSegmentCursor,
		getLineSegment(i: number): yfiles.algorithms.LineSegment,
		toString(): string,
		calculateLength(): number
	}

	declare export interface YDimension {
		width: number,
		height: number,
		equals(o: Object): boolean,
		hashCode(): number,
		toString(): string,
		compareToObject(o: Object): number,
		toSizeD(): yfiles.geometry.SizeD
	}

	declare export interface YOrientedRectangle {
		empty: boolean,
		anchor: yfiles.algorithms.YPoint,
		setAnchor(x: number, y: number): void,
		anchorX: number,
		anchorY: number,
		size: yfiles.algorithms.YDimension,
		setSize(width: number, height: number): void,
		width: number,
		height: number,
		setUpVector(upX: number, upY: number): void,
		upX: number,
		upY: number,
		angle: number,
		moveBy(dx: number, dy: number): void,
		center: yfiles.algorithms.YPoint,
		setCenter(cx: number, cy: number): void,
		boundingBox: yfiles.algorithms.YRectangle,
		containsPoint(x: number, y: number): boolean,
		containsPointWithBorder(x: number, y: number, closed: boolean): boolean,
		toString(): string,
		equals(o: Object): boolean,
		hashCode(): number,
		getMovedInstance(dx: number, dy: number): yfiles.algorithms.YOrientedRectangle,
		getResizedInstance(width: number, height: number): yfiles.algorithms.YOrientedRectangle,
		adoptValues(other: yfiles.algorithms.YOrientedRectangle): void,
		toImmutableOrientedRectangle(): yfiles.geometry.IOrientedRectangle
	}

	declare export interface YPoint {
		x: number,
		y: number,
		distanceToDouble(x: number, y: number): number,
		distanceTo(p: yfiles.algorithms.YPoint): number,
		moveBy(x: number, y: number): yfiles.algorithms.YPoint,
		equals(o: Object): boolean,
		hashCode(): number,
		toString(): string,
		compareToObject(o: Object): number,
		toPointD(): yfiles.geometry.PointD
	}

	declare export interface AffineLine {
		a: number,
		b: number,
		c: number,
		toString(): string,
		getXProjection(p: yfiles.algorithms.YPoint): yfiles.algorithms.YPoint,
		getYProjection(p: yfiles.algorithms.YPoint): yfiles.algorithms.YPoint
	}

	declare export interface ILineSegmentCursor {
		lineSegment: yfiles.algorithms.LineSegment
	}

	declare export interface IntersectionAlgorithm {
		
	}

	declare export interface Geom {
		
	}

	declare export interface EdgeList {
		edges(): yfiles.algorithms.IEdgeCursor,
		firstEdge(): yfiles.algorithms.Edge,
		lastEdge(): yfiles.algorithms.Edge,
		popEdge(): yfiles.algorithms.Edge,
		toEdgeArray(): yfiles.algorithms.Edge[],
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.algorithms.Edge>
	}

	declare export interface BorderLine {
		createCopy(negateValues: boolean, negateOffsets: boolean): yfiles.algorithms.BorderLine,
		setMinValue(min: number, max: number, value: number): void,
		setMaxValue(min: number, max: number, value: number): void,
		adoptValues(other: yfiles.algorithms.BorderLine): void,
		setValue(min: number, max: number, value: number): void,
		setSloped(min: number, max: number, value: number, slope: number): void,
		addValueOffset(delta: number): void,
		addOffset(delta: number): void,
		min: number,
		max: number,
		minValue: number,
		maxValue: number,
		getValueAt(pos: number): number,
		getValueAtWithListCell(cell: yfiles.algorithms.ListCell, pos: number): number,
		getValueAtWithSegment(segment: yfiles.algorithms.BorderLine.Segment, pos: number): number,
		createMax(other: yfiles.algorithms.BorderLine): yfiles.algorithms.BorderLine,
		createMin(other: yfiles.algorithms.BorderLine): yfiles.algorithms.BorderLine,
		mergeWithMax(other: yfiles.algorithms.BorderLine): void,
		mergeWithMin(other: yfiles.algorithms.BorderLine): void,
		getValue(s: yfiles.algorithms.BorderLine.Segment): number,
		getMin(s: yfiles.algorithms.BorderLine.Segment): number,
		getSlope(s: yfiles.algorithms.BorderLine.Segment): number,
		getSegmentAt(pos: number): yfiles.algorithms.BorderLine.Segment,
		getMax(s: yfiles.algorithms.BorderLine.Segment): number,
		firstSegment(): yfiles.algorithms.BorderLine.Segment,
		lastSegment(): yfiles.algorithms.BorderLine.Segment,
		prev(s: yfiles.algorithms.BorderLine.Segment): yfiles.algorithms.BorderLine.Segment,
		next(s: yfiles.algorithms.BorderLine.Segment): yfiles.algorithms.BorderLine.Segment,
		getMaxValue(from: number, to: number): number,
		getMinValue(from: number, to: number): number,
		getDistanceTo(greater: yfiles.algorithms.BorderLine): number,
		toString(): string,
		grow(toMin: number, toMax: number, positive: boolean): void
	}

	declare export interface AbortHandler {
		stop(): void,
		stopRequested: boolean,
		timeToStop(): number,
		stopDuration: number,
		timeToCancel(): number,
		cancelDuration: number,
		checkFailed: boolean,
		check(): boolean,
		reset(): void
	}

	declare export interface GraphObject {
		
	}

	declare export interface AlgorithmAbortedException {
		
	}

	declare export interface Bipartitions {
		
	}

	declare export interface Bfs {
		
	}

	declare export interface ICursor {
		ok: boolean,
		next(): void,
		prev(): void,
		toFirst(): void,
		toLast(): void,
		current: Object,
		size: number
	}

	declare export interface IDataAcceptor {
		set(dataHolder: Object, value: Object): void,
		setInt(dataHolder: Object, value: number): void,
		setDouble(dataHolder: Object, value: number): void,
		setBool(dataHolder: Object, value: boolean): void
	}

	declare export interface IDataMap {
		
	}

	declare export interface Groups {
		
	}

	declare export interface Edge {
		createCopy(
		g: yfiles.algorithms.Graph, v: yfiles.algorithms.Node, w: yfiles.algorithms.Node
	): yfiles.algorithms.Edge,
		graph: yfiles.algorithms.Graph,
		index: number,
		source: yfiles.algorithms.Node,
		target: yfiles.algorithms.Node,
		opposite(v: yfiles.algorithms.Node): yfiles.algorithms.Node,
		selfLoop: boolean,
		toString(): string,
		onReinsert(): void,
		nextOutEdge: yfiles.algorithms.Edge,
		nextInEdge: yfiles.algorithms.Edge,
		prevOutEdge: yfiles.algorithms.Edge,
		prevInEdge: yfiles.algorithms.Edge
	}

	declare export interface GraphEvent {
		type: yfiles.algorithms.GraphEventType,
		data: Object,
		graph: yfiles.algorithms.Graph,
		toString(): string
	}

	declare export interface GraphChecker {
		
	}

	declare export interface GraphConnectivity {
		
	}

	declare export interface GraphCopyFactory {
		preCopyGraphData(hint: yfiles.algorithms.Graph, newGraph: yfiles.algorithms.Graph): void,
		postCopyGraphData(
		originalGraph: yfiles.algorithms.Graph, newGraph: yfiles.algorithms.Graph, nodeMap: yfiles.algorithms.IMap, edgeMap: yfiles.algorithms.IMap
	): void,
		copyNode(
		targetGraph: yfiles.algorithms.Graph, originalNode: yfiles.algorithms.Node
	): yfiles.algorithms.Node,
		copyEdge(
		targetGraph: yfiles.algorithms.Graph, source: yfiles.algorithms.Node, target: yfiles.algorithms.Node, originalEdge: yfiles.algorithms.Edge
	): yfiles.algorithms.Edge,
		createGraph(): yfiles.algorithms.Graph
	}

	declare export interface Centrality {
		
	}

	declare export interface Dfs {
		stateMap: yfiles.algorithms.INodeMap,
		directedMode: boolean,
		lookFurtherMode: boolean,
		start(graph: yfiles.algorithms.Graph): void,
		startFromNode(graph: yfiles.algorithms.Graph, start: yfiles.algorithms.Node): void,
		preVisit(node: yfiles.algorithms.Node, dfsNumber: number): void,
		postVisit(node: yfiles.algorithms.Node, dfsNumber: number, compNumber: number): void,
		preTraverse(
		edge: yfiles.algorithms.Edge, node: yfiles.algorithms.Node, treeEdge: boolean
	): void,
		postTraverse(edge: yfiles.algorithms.Edge, node: yfiles.algorithms.Node): void,
		lookFurther(v: yfiles.algorithms.Node): void,
		cancel(): void
	}

	declare export interface Cycles {
		
	}

	declare export interface GeomExtensions {
		
	}

	declare export interface MapFactory {
		
	}

	declare export interface Random {
		next(bits: number): number,
		nextBoolean(): boolean,
		nextDouble(): number,
		nextFloat(): number,
		nextGaussian(): number,
		nextInt(): number,
		nextIntInRange(n: number): number,
		nextIntImpl(): number,
		nextIntInRangeImpl(max: number): number,
		nextLong(): number,
		seed: number
	}

	declare export interface YList {
		addFirst(o: Object): yfiles.algorithms.ListCell,
		addLast(o: Object): yfiles.algorithms.ListCell,
		addLastCell(cell: yfiles.algorithms.ListCell): void,
		addFirstCell(cell: yfiles.algorithms.ListCell): void,
		addObject(o: Object): boolean,
		addAll(collection: yfiles.algorithms.ICollection): boolean,
		addAllFromCursor(c: yfiles.algorithms.ICursor): void,
		insertBefore(o: Object, refCell: yfiles.algorithms.ListCell): yfiles.algorithms.ListCell,
		insertCellBefore(
		cellToInsert: yfiles.algorithms.ListCell, refCell: yfiles.algorithms.ListCell
	): void,
		insertCellAfter(
		cellToInsert: yfiles.algorithms.ListCell, refCell: yfiles.algorithms.ListCell
	): void,
		insertAfter(o: Object, refCell: yfiles.algorithms.ListCell): yfiles.algorithms.ListCell,
		count: number,
		empty: boolean,
		clear(): void,
		first: Object,
		pop(): Object,
		push(o: Object): yfiles.algorithms.ListCell,
		peek(): Object,
		last: Object,
		popLast(): Object,
		elementAt(i: number): Object,
		indexOf(obj: Object): number,
		firstCell: yfiles.algorithms.ListCell,
		lastCell: yfiles.algorithms.ListCell,
		succCell(c: yfiles.algorithms.ListCell): yfiles.algorithms.ListCell,
		predCell(c: yfiles.algorithms.ListCell): yfiles.algorithms.ListCell,
		cyclicSucc(c: yfiles.algorithms.ListCell): yfiles.algorithms.ListCell,
		cyclicPred(c: yfiles.algorithms.ListCell): yfiles.algorithms.ListCell,
		getInfo(c: yfiles.algorithms.ListCell): Object,
		setInfo(c: yfiles.algorithms.ListCell, value: Object): void,
		remove(o: Object): boolean,
		removeAll(collection: yfiles.algorithms.ICollection): boolean,
		retainAll(collection: yfiles.algorithms.ICollection): boolean,
		removeCell(c: yfiles.algorithms.ListCell): Object,
		removeItemPointedToByCursor(c: yfiles.algorithms.ICursor): Object,
		cursor(): yfiles.algorithms.ICursor,
		iterator(): yfiles.algorithms.IIterator,
		listIterator(): yfiles.algorithms.IListIterator,
		contains(o: Object): boolean,
		containsAll(collection: yfiles.algorithms.ICollection): boolean,
		findCell(o: Object): yfiles.algorithms.ListCell,
		toString(): string,
		toArray(): Object[],
		toGivenArray(a: Object): Object,
		reverse(): void,
		sortWithComparer(comp: yfiles.objectcollections.IComparer): void,
		sort(): void,
		splice(list: yfiles.algorithms.YList): void,
		addAllAt(index: number, c: yfiles.algorithms.ICollection): boolean,
		getCell(index: number): yfiles.algorithms.ListCell,
		lastIndexOf(o: Object): number,
		setAtListIndex(index: number, element: Object): Object,
		removeAtIndex(index: number): Object,
		listIteratorFrom(index: number): yfiles.algorithms.IListIterator,
		getAtListIndex(index: number): Object,
		addAt(index: number, element: Object): void,
		subList(fromIndex: number, toIndex: number): yfiles.algorithms.IList,
		equals(other: Object): boolean,
		hashCode(): number,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		copyTo(array: Object, index: number): void,
		syncRoot: Object,
		isSynchronized: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<Object>,
		add(item: Object): void,
		copyToArrayAt(array: Object[], arrayIndex: number): void,
		insertAt(index: number, value: Object): void,
		get(index: number): Object,
		set(index: number, value: Object): void,
		isFixedSize: boolean,
		insert(index: number, item: Object): void,
		removeAt(index: number): void,
		getItem(index: number): Object,
		setItemAt(index: number, value: Object): void
	}

	declare export interface YRandom {
		nextIntInRange(n: number): number,
		getUniqueArray(n: number, min: number, max: number): number[],
		getBoolArray(n: number, trueCount: number): boolean[],
		getIntArray(bucketCount: number, ballCount: number): number[],
		nextDoubleBetweenMinAndMax(minValue: number, maxValue: number): number,
		nextIntBetweenMinAndMax(minValue: number, maxValue: number): number,
		permutate(a: Object[]): void
	}

	declare export interface TreeIntNodePQ {
		empty: boolean,
		contains(n: yfiles.algorithms.Node): boolean,
		add(n: yfiles.algorithms.Node, value: number): void,
		remove(n: yfiles.algorithms.Node): void,
		min: yfiles.algorithms.Node,
		removeMin(): yfiles.algorithms.Node,
		decreasePriority(n: yfiles.algorithms.Node, value: number): void,
		clear(): void,
		getPriority(v: yfiles.algorithms.Node): number,
		dispose(): void
	}

	declare export interface Tuple {
		o1: Object,
		o2: Object,
		equals(o: Object): boolean,
		hashCode(): number,
		toString(): string
	}

	declare export interface WrappedObjectDataProvider {
		dataMapView: yfiles.algorithms.IDataMap,
		wrap(g: yfiles.algorithms.Graph, dataProviderKey: Object): void,
		unwrap(): void,
		get(dataHolder: Object): Object,
		getBool(dataHolder: Object): boolean,
		getDouble(dataHolder: Object): number,
		getInt(dataHolder: Object): number,
		wrappedProvider: yfiles.algorithms.IDataProvider,
		wrappingProvider: yfiles.algorithms.IDataProvider,
		dispose(): void
	}

	declare export interface INodePQ {
		add(v: yfiles.algorithms.Node, priority: Object): void,
		decreasePriority(v: yfiles.algorithms.Node, priority: Object): void,
		removeMin(): yfiles.algorithms.Node,
		min: yfiles.algorithms.Node,
		clear(): void,
		contains(v: yfiles.algorithms.Node): boolean,
		getPriority(v: yfiles.algorithms.Node): Object,
		empty: boolean,
		size(): number
	}

	declare export interface IntObjectPQ {
		add(o: Object, priority: number): void,
		decreasePriority(o: Object, priority: number): void,
		increasePriority(o: Object, priority: number): void,
		changePriority(o: Object, p: number): void,
		removeMin(): Object,
		min: Object,
		minPriority: number,
		contains(o: Object): boolean,
		empty: boolean,
		size(): number,
		getPriority(o: Object): number,
		remove(o: Object): void,
		clear(): void,
		dispose(): void
	}

	declare export interface IIntValueSettable {
		value: number
	}

	declare export interface IDoubleNodePQ {
		empty: boolean,
		contains(n: yfiles.algorithms.Node): boolean,
		add(n: yfiles.algorithms.Node, priority: number): void,
		removeMin(): yfiles.algorithms.Node,
		min: yfiles.algorithms.Node,
		decreasePriority(n: yfiles.algorithms.Node, priority: number): void,
		clear(): void,
		getPriority(n: yfiles.algorithms.Node): number,
		dispose(): void
	}

	declare export interface IIntNodePQ {
		empty: boolean,
		contains(n: yfiles.algorithms.Node): boolean,
		add(n: yfiles.algorithms.Node, priority: number): void,
		min: yfiles.algorithms.Node,
		removeMin(): yfiles.algorithms.Node,
		decreasePriority(n: yfiles.algorithms.Node, priority: number): void,
		clear(): void,
		getPriority(n: yfiles.algorithms.Node): number,
		dispose(): void
	}

	declare export interface NodeMapAdapter {
		set(key: Object, value: Object): void,
		get(key: Object): Object,
		setBool(key: Object, value: boolean): void,
		getBool(key: Object): boolean,
		setDouble(key: Object, value: number): void,
		getDouble(key: Object): number,
		setInt(key: Object, value: number): void,
		getInt(key: Object): number
	}

	declare export interface ListIntNodePQ {
		dispose(): void,
		empty: boolean,
		contains(v: yfiles.algorithms.Node): boolean,
		size(): number,
		add(v: yfiles.algorithms.Node, value: number): void,
		decreasePriority(v: yfiles.algorithms.Node, value: number): void,
		getPriority(v: yfiles.algorithms.Node): number,
		increasePriority(v: yfiles.algorithms.Node, value: number): void,
		min: yfiles.algorithms.Node,
		clear(): void,
		remove(v: yfiles.algorithms.Node): void,
		removeMin(): yfiles.algorithms.Node,
		popMinNode(): yfiles.algorithms.Node,
		popMaxNode(): yfiles.algorithms.Node,
		incrementPriority(v: yfiles.algorithms.Node): void,
		decrementPriority(v: yfiles.algorithms.Node): void
	}

	declare export interface LoggingUtil {
		
	}

	declare export interface Maps {
		
	}

	declare export interface ICloneable {
		clone(): Object
	}

	declare export interface ICollection {
		addObject(o: Object): boolean,
		addAll(c: yfiles.algorithms.ICollection): boolean,
		clear(): void,
		contains(o: Object): boolean,
		containsAll(c: yfiles.algorithms.ICollection): boolean,
		equals(o: Object): boolean,
		hashCode(): number,
		empty: boolean,
		iterator(): yfiles.algorithms.IIterator,
		remove(o: Object): boolean,
		removeAll(c: yfiles.algorithms.ICollection): boolean,
		retainAll(c: yfiles.algorithms.ICollection): boolean,
		count: number,
		toArray(): Object[],
		toGivenArray(a: Object): Object
	}

	declare export interface IIterator {
		hasNext: boolean,
		next(): Object,
		remove(): void
	}

	declare export interface Rectangle2D {
		frame: yfiles.algorithms.Rectangle2D,
		setFrameFromDiagonalCoordinates(x1: number, y1: number, x2: number, y2: number): void,
		setFrameFromDiagonal(p1: yfiles.algorithms.Point2D, p2: yfiles.algorithms.Point2D): void,
		setFrameFromCenterCoordinates(centerX: number, centerY: number, cornerX: number, cornerY: number): void,
		setFrameFromCenter(center: yfiles.algorithms.Point2D, corner: yfiles.algorithms.Point2D): void,
		setFrame(x: number, y: number, width: number, height: number): void,
		rect: yfiles.algorithms.Rectangle2D,
		setRect(x: number, y: number, width: number, height: number): void,
		createIntersection(r: yfiles.algorithms.Rectangle2D): yfiles.algorithms.Rectangle2D,
		createUnion(r: yfiles.algorithms.Rectangle2D): yfiles.algorithms.Rectangle2D,
		intersectsLine(x1: number, y1: number, x2: number, y2: number): boolean,
		containsPoint(x: number, y: number): boolean,
		intersectsRectangleCoordinates(x: number, y: number, width: number, height: number): boolean,
		containsRectangle(x: number, y: number, width: number, height: number): boolean,
		addCoordinates(px: number, py: number): void,
		add(r: yfiles.algorithms.Rectangle2D): void,
		hashCode(): number,
		equals(obj: Object): boolean,
		containsRectangle2D(rect: yfiles.algorithms.Rectangle2D): boolean,
		intersectsRectangle(rect: yfiles.algorithms.Rectangle2D): boolean,
		x: number,
		y: number,
		width: number,
		height: number,
		empty: boolean,
		minX: number,
		minY: number,
		maxX: number,
		maxY: number,
		centerX: number,
		centerY: number,
		toString(): string,
		clone(): Object,
		toRectDFromRectangle2D(): yfiles.geometry.RectD
	}

	declare export interface IList {
		addObject(o: Object): boolean,
		addAll(c: yfiles.algorithms.ICollection): boolean,
		addAt(index: number, item: Object): void,
		addAllAt(index: number, c: yfiles.algorithms.ICollection): boolean,
		getAtListIndex(index: number): Object,
		indexOf(o: Object): number,
		lastIndexOf(o: Object): number,
		listIterator(): yfiles.algorithms.IListIterator,
		listIteratorFrom(index: number): yfiles.algorithms.IListIterator,
		remove(o: Object): boolean,
		removeAll(c: yfiles.algorithms.ICollection): boolean,
		removeAtIndex(index: number): Object,
		setAtListIndex(index: number, item: Object): Object,
		subList(fromIndex: number, toIndex: number): yfiles.algorithms.IList,
		clear(): void,
		contains(o: Object): boolean,
		count: number,
		isFixedSize: boolean
	}

	declare export interface ISet {
		
	}

	declare export interface IListIterator {
		add(o: Object): void,
		hasPrevious: boolean,
		nextIndex(): number,
		previous(): Object,
		previousIndex(): number,
		set(o: Object): void
	}

	declare export interface IMap {
		size(): number,
		empty: boolean,
		containsKey(key: Object): boolean,
		containsValue(value: Object): boolean,
		get(key: Object): Object,
		put(key: Object, value: Object): Object,
		remove(key: Object): Object,
		putAll(t: yfiles.algorithms.IMap): void,
		clear(): void,
		keySet(): yfiles.algorithms.ISet,
		values(): yfiles.algorithms.ICollection,
		entrySet(): yfiles.algorithms.ISet,
		equals(o: Object): boolean,
		hashCode(): number
	}

	declare export interface IMapEntry {
		equals(o: Object): boolean,
		key: Object,
		value: Object,
		hashCode(): number,
		setValue(value: Object): Object
	}

	declare export interface Rectangle {
		setLocation(x: number, y: number): void,
		setRect(x: number, y: number, width: number, height: number): void,
		setBounds(r: yfiles.algorithms.Rectangle): void,
		setBoundsCoordinates(x: number, y: number, width: number, height: number): void,
		grow(dx: number, dy: number): void,
		translate(mx: number, my: number): void,
		addIntCoordinates(px: number, py: number): void,
		addRectangle(r: yfiles.algorithms.Rectangle): void,
		containsIntCoordinates(px: number, py: number): boolean,
		containsIntRectangle(rx: number, ry: number, rw: number, rh: number): boolean,
		contains(r: yfiles.algorithms.Rectangle): boolean,
		createIntersection(r: yfiles.algorithms.Rectangle2D): yfiles.algorithms.Rectangle2D,
		intersection(r: yfiles.algorithms.Rectangle): yfiles.algorithms.Rectangle,
		intersects(r: yfiles.algorithms.Rectangle): boolean,
		createUnion(r: yfiles.algorithms.Rectangle2D): yfiles.algorithms.Rectangle2D,
		union(r: yfiles.algorithms.Rectangle): yfiles.algorithms.Rectangle,
		equals(obj: Object): boolean,
		x: number,
		y: number,
		height: number,
		width: number,
		empty: boolean,
		bounds: yfiles.algorithms.Rectangle,
		bounds2D: yfiles.algorithms.Rectangle2D,
		clone(): Object,
		toRectD(): yfiles.geometry.RectD
	}

	declare export interface CollectionFactory {
		
	}

	declare export interface Insets {
		top: number,
		left: number,
		bottom: number,
		right: number,
		hashCode(): number,
		equals(o: Object): boolean,
		clone(): Object,
		toString(): string,
		set(top: number, left: number, bottom: number, right: number): void,
		toInsetsD(): yfiles.geometry.InsetsD
	}

	declare export interface Point2D {
		setLocation(x: number, y: number): void,
		location: yfiles.algorithms.Point2D,
		toString(): string,
		distanceSqToCoordinates(px: number, py: number): number,
		distanceSq(p: yfiles.algorithms.Point2D): number,
		distanceToCoordinates(px: number, py: number): number,
		distance(p: yfiles.algorithms.Point2D): number,
		hashCode(): number,
		equals(obj: Object): boolean,
		x: number,
		y: number,
		clone(): Object,
		toPointD(): yfiles.geometry.PointD
	}

			
}

declare module 'DataProviders' {
		declare export interface DataProviderOverlayManager {
		addDataProvider(
		dataProviderKey: Object, newDataProvider: yfiles.algorithms.IDataProvider
	): void,
		restoreOriginalDataProviders(): void
	}

			
}

declare module 'Comparators' {
		declare export interface IPartialOrder {
		
	}

			
}

declare module 'GraphCopier' {
		declare export interface GraphDataCopyFactory {
		preCopyGraphData(srcGraph: yfiles.algorithms.Graph, newGraph: yfiles.algorithms.Graph): void,
		postCopyGraphData(
		srcGraph: yfiles.algorithms.Graph, newGraph: yfiles.algorithms.Graph, nodeMap: yfiles.algorithms.IMap, edgeMap: yfiles.algorithms.IMap
	): void,
		copyNode(
		graph: yfiles.algorithms.Graph, hint: yfiles.algorithms.Node
	): yfiles.algorithms.Node,
		createGraph(): yfiles.algorithms.Graph,
		preCopyData(src: yfiles.algorithms.Graph, dst: yfiles.algorithms.Graph): void,
		postCopyData(
		src: yfiles.algorithms.Graph, dst: yfiles.algorithms.Graph, nodeMap: yfiles.algorithms.IMap, edgeMap: yfiles.algorithms.IMap
	): void,
		copyNodeData(src: yfiles.algorithms.Node, dst: yfiles.algorithms.Node): void,
		copyEdgeData(src: yfiles.algorithms.Edge, dst: yfiles.algorithms.Edge): void,
		copyEdge(
		graph: yfiles.algorithms.Graph, source: yfiles.algorithms.Node, target: yfiles.algorithms.Node, hint: yfiles.algorithms.Edge
	): yfiles.algorithms.Edge
	}

	declare export interface DataProviderCopyFactory {
		dpKey: Object,
		preCopyData(src: yfiles.algorithms.Graph, dst: yfiles.algorithms.Graph): void,
		createMap(dst: yfiles.algorithms.Graph): yfiles.algorithms.IDataMap,
		getMap(graph: yfiles.algorithms.Graph): yfiles.algorithms.IDataMap
	}

	declare export interface NodeDataProviderCopyFactory {
		createMap(dst: yfiles.algorithms.Graph): yfiles.algorithms.IDataMap,
		copyNodeData(src: yfiles.algorithms.Node, dst: yfiles.algorithms.Node): void,
		copyNodeDataToNode(
		dpKey: Object, src: yfiles.algorithms.Node, dst: yfiles.algorithms.Node, value: Object
	): Object
	}

	declare export interface NodeMapCopyFactory {
		preCopyData(src: yfiles.algorithms.Graph, dst: yfiles.algorithms.Graph): void,
		copyNodeData(src: yfiles.algorithms.Node, dst: yfiles.algorithms.Node): void,
		copy(
		src: yfiles.algorithms.Node, dst: yfiles.algorithms.Node, value: Object
	): Object
	}

	declare export interface EdgeMapCopyFactory {
		preCopyData(src: yfiles.algorithms.Graph, dst: yfiles.algorithms.Graph): void,
		copyEdgeData(src: yfiles.algorithms.Edge, dst: yfiles.algorithms.Edge): void,
		copy(
		src: yfiles.algorithms.Edge, dst: yfiles.algorithms.Edge, value: Object
	): Object
	}

	declare export interface ItemDataProviderCopyFactory {
		createMap(dst: yfiles.algorithms.Graph): yfiles.algorithms.IDataMap,
		copyNodeData(src: yfiles.algorithms.Node, dst: yfiles.algorithms.Node): void,
		copyEdgeData(src: yfiles.algorithms.Edge, dst: yfiles.algorithms.Edge): void,
		copyNodeDataToNode(
		dpKey: Object, src: yfiles.algorithms.Node, dst: yfiles.algorithms.Node, value: Object
	): Object,
		copyEdgeDataToNode(
		dpKey: Object, src: yfiles.algorithms.Edge, dst: yfiles.algorithms.Edge, value: Object
	): Object
	}

	declare export interface EdgeDataProviderCopyFactory {
		createMap(dst: yfiles.algorithms.Graph): yfiles.algorithms.IDataMap,
		copyEdgeData(src: yfiles.algorithms.Edge, dst: yfiles.algorithms.Edge): void,
		copy(
		dpKey: Object, src: yfiles.algorithms.Edge, dst: yfiles.algorithms.Edge, value: Object
	): Object
	}

	declare export interface ICopyFactory {
		copyNode(
		targetGraph: yfiles.algorithms.Graph, originalNode: yfiles.algorithms.Node
	): yfiles.algorithms.Node,
		copyEdge(
		targetGraph: yfiles.algorithms.Graph, newSource: yfiles.algorithms.Node, newTarget: yfiles.algorithms.Node, originalEdge: yfiles.algorithms.Edge
	): yfiles.algorithms.Edge,
		createGraph(): yfiles.algorithms.Graph,
		preCopyGraphData(
		sourceGraph: yfiles.algorithms.Graph, targetGraph: yfiles.algorithms.Graph
	): void,
		postCopyGraphData(
		sourceGraph: yfiles.algorithms.Graph, targetGraph: yfiles.algorithms.Graph, nodeMap: yfiles.algorithms.IMap, edgeMap: yfiles.algorithms.IMap
	): void
	}

	declare export interface CloneTypes_Interface {
		
	}

			
}

declare module 'IntersectionAlgorithm' {
		declare export interface IIntersectionHandler {
		checkIntersection(a: Object, b: Object): void
	}

			
}

declare module 'BorderLine' {
		declare export interface Segment {
		getValueAt(position: number): number,
		end: number,
		prev(): yfiles.algorithms.BorderLine.Segment,
		next(): yfiles.algorithms.BorderLine.Segment,
		toString(): string
	}

			
}

declare module 'YList' {
		declare export interface ListCursorImpl {
		ok: boolean,
		next(): void,
		prev(): void,
		toFirst(): void,
		toLast(): void,
		size: number,
		current: Object
	}

			
}

declare module 'Maps' {
		declare export interface HighPerformanceObjectMap {
		resetAll(defaultValue: Object): void,
		get(dataHolder: Object): Object,
		set(dataHolder: Object, value: Object): void,
		getBool(dataHolder: Object): boolean,
		getDouble(dataHolder: Object): number,
		getInt(dataHolder: Object): number,
		setBool(dataHolder: Object, value: boolean): void,
		setDouble(dataHolder: Object, value: number): void,
		setInt(dataHolder: Object, value: number): void
	}

	declare export interface HighPerformanceDoubleMap {
		resetAll(defaultValue: number): void,
		get(dataHolder: Object): Object,
		set(dataHolder: Object, value: Object): void,
		getBool(dataHolder: Object): boolean,
		getDouble(dataHolder: Object): number,
		getInt(dataHolder: Object): number,
		setBool(dataHolder: Object, value: boolean): void,
		setDouble(dataHolder: Object, value: number): void,
		setInt(dataHolder: Object, value: number): void
	}

	declare export interface HighPerformanceIntMap {
		resetAll(defaultValue: number): void,
		get(dataHolder: Object): Object,
		set(dataHolder: Object, value: Object): void,
		getBool(dataHolder: Object): boolean,
		getDouble(dataHolder: Object): number,
		getInt(dataHolder: Object): number,
		setBool(dataHolder: Object, value: boolean): void,
		setDouble(dataHolder: Object, value: number): void,
		setInt(dataHolder: Object, value: number): void
	}

	declare export interface HighPerformanceBoolMap {
		resetAll(defaultValue: boolean): void,
		get(dataHolder: Object): Object,
		set(dataHolder: Object, value: Object): void,
		getBool(dataHolder: Object): boolean,
		getDouble(dataHolder: Object): number,
		getInt(dataHolder: Object): number,
		setBool(dataHolder: Object, value: boolean): void,
		setDouble(dataHolder: Object, value: number): void,
		setInt(dataHolder: Object, value: number): void
	}

			
}

declare module 'Rectangle2D' {
		declare export interface Double {
		setRect(x: number, y: number, width: number, height: number): void,
		setFrame(x: number, y: number, width: number, height: number): void,
		frame: yfiles.algorithms.Rectangle2D,
		intersectsRectangleCoordinates(x: number, y: number, width: number, height: number): boolean,
		createIntersection(r: yfiles.algorithms.Rectangle2D): yfiles.algorithms.Rectangle2D,
		createUnion(r: yfiles.algorithms.Rectangle2D): yfiles.algorithms.Rectangle2D,
		x: number,
		y: number,
		width: number,
		height: number,
		empty: boolean,
		maxX: number,
		maxY: number,
		centerX: number,
		centerY: number,
		bounds2D: yfiles.algorithms.Rectangle2D,
		clone(): Object,
		equals(obj: Object): boolean
	}

			
}

declare module 'Point2D' {
		declare export interface Double {
		x: number,
		y: number,
		clone(): Object,
		setLocation(x: number, y: number): void
	}

			
}

declare module 'binding' {
		declare export interface Binding {
		path: string,
		converter: Object,
		converterParameter: Object,
		evaluate(o: Object): Object
	}

	declare export interface AdjacentEdgesGraphSource {
		edgesSource: Object,
		outEdgesBinding: Object,
		inEdgesBinding: Object,
		sourceNodeBinding: Object,
		targetNodeBinding: Object,
		edgeIdBinding: Object,
		edgeLabelBinding: Object,
		createEdge(
		graph: yfiles.graph.IGraph, sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode, labelData: Object, data: Object
	): yfiles.graph.IEdge,
		updateEdge(
		graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, labelData: Object, data: Object
	): void,
		getEdge(businessObject: Object): yfiles.graph.IEdge
	}

	declare export interface AdjacentNodesGraphSource {
		successorsBinding: Object,
		predecessorsBinding: Object,
		createEdge(
		graph: yfiles.graph.IGraph, sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode
	): yfiles.graph.IEdge,
		updateEdge(
		graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode
	): void
	}

	declare export interface TreeSource {
		graph: yfiles.graph.IGraph,
		nodesSource: Object,
		groupsSource: Object,
		childBinding: Object,
		idBinding: Object,
		edgeLabelBinding: Object,
		nodeLabelBinding: Object,
		locationXBinding: Object,
		locationYBinding: Object,
		groupIdBinding: Object,
		groupBinding: Object,
		parentGroupBinding: Object,
		nodeDefaults: yfiles.graph.INodeDefaults,
		groupNodeDefaults: yfiles.graph.INodeDefaults,
		edgeDefaults: yfiles.graph.IEdgeDefaults,
		buildGraph(): yfiles.graph.IGraph,
		updateGraph(): void,
		createEdge(
		graph: yfiles.graph.IGraph, sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode, labelData: Object
	): yfiles.graph.IEdge,
		createNode(
		groupedGraph: yfiles.graph.IGroupedGraph, parent: yfiles.graph.INode, location: yfiles.geometry.PointD, labelData: Object, data: Object
	): yfiles.graph.INode,
		createGroupNode(groupedGraph: yfiles.graph.IGroupedGraph, data: Object): yfiles.graph.INode,
		updateEdge(
		graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode, labelData: Object
	): void,
		updateNode(
		groupedGraph: yfiles.graph.IGroupedGraph, node: yfiles.graph.INode, parent: yfiles.graph.INode, location: yfiles.geometry.PointD, labelData: Object, data: Object
	): void,
		updateGroupNode(
		groupedGraph: yfiles.graph.IGroupedGraph, groupNode: yfiles.graph.INode, data: Object
	): void,
		getBusinessObject(graphElement: yfiles.model.IModelItem): Object,
		getNode(businessObject: Object): yfiles.graph.INode
	}

	declare export interface GraphSourceBase {
		graph: yfiles.graph.IGraph,
		nodesSource: Object,
		groupsSource: Object,
		nodeDefaults: yfiles.graph.INodeDefaults,
		groupNodeDefaults: yfiles.graph.INodeDefaults,
		edgeDefaults: yfiles.graph.IEdgeDefaults,
		nodeIdBinding: Object,
		nodeLabelBinding: Object,
		groupIdBinding: Object,
		groupBinding: Object,
		parentGroupBinding: Object,
		locationXBinding: Object,
		locationYBinding: Object,
		buildGraph(): yfiles.graph.IGraph,
		updateGraph(): void,
		createNode(
		groupedGraph: yfiles.graph.IGroupedGraph, parent: yfiles.graph.INode, location: yfiles.geometry.PointD, labelData: Object, data: Object
	): yfiles.graph.INode,
		updateNode(
		groupedGraph: yfiles.graph.IGroupedGraph, node: yfiles.graph.INode, parent: yfiles.graph.INode, location: yfiles.geometry.PointD, labelData: Object, data: Object
	): void,
		updateGroupNode(
		groupedGraph: yfiles.graph.IGroupedGraph, groupNode: yfiles.graph.INode, data: Object
	): void,
		createGroupNode(groupedGraph: yfiles.graph.IGroupedGraph, data: Object): yfiles.graph.INode,
		getBusinessObject(graphElement: yfiles.model.IModelItem): Object,
		getNode(businessObject: Object): yfiles.graph.INode,
		getGroup(businessObject: Object): yfiles.graph.INode
	}

	declare export interface GraphSource {
		lazyNodeDefinition: boolean,
		edgesSource: Object,
		sourceNodeBinding: Object,
		targetNodeBinding: Object,
		edgeLabelBinding: Object,
		createEdge(
		graph: yfiles.graph.IGraph, sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode, labelData: Object, data: Object
	): yfiles.graph.IEdge,
		updateEdge(
		graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, labelData: Object, data: Object
	): void,
		getEdge(businessObject: Object): yfiles.graph.IEdge
	}

			
}

declare module 'canvas' {
		declare export interface XamlConstants {
		
	}

	declare export interface SVGExtensions {
		
	}

	declare export interface LabelAnimation {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan
	}

	declare export interface EdgeAnimation {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void
	}

	declare export interface ScrollEventArgs {
		oldValue: number,
		newValue: number,
		horizontal: boolean
	}

	declare export interface TextBox {
		desiredSize: yfiles.geometry.SizeD,
		focus(): void,
		text: string,
		selectionStart: number,
		selectionLength: number,
		fontSize: number,
		selectAll(): void,
		addTextChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeTextChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		measure(availableSize: yfiles.geometry.SizeD): void
	}

	declare export interface ScrollBar {
		enabled: boolean,
		control: yfiles.canvas.Control,
		update(): void,
		addScrollListener(value: (sender: Object, args: yfiles.canvas.ScrollEventArgs) => void): void,
		removeScrollListener(value: (sender: Object, args: yfiles.canvas.ScrollEventArgs) => void): void,
		horizontal: boolean,
		value: number,
		maximum: number,
		minimum: number,
		largeChange: number,
		smallChange: number
	}

	declare export interface ToolTip {
		div: HTMLDivElement,
		isOpen: boolean,
		createToolTip(): HTMLDivElement,
		verticalOffset: number,
		horizontalOffset: number,
		desiredSize: yfiles.geometry.SizeD,
		content: Object,
		onContentChanged(oldContent: Object, newContent: Object): void
	}

	declare export interface LayoutMorpher {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan
	}

	declare export interface Animator {
		useWaitInputMode: boolean,
		animateHandler(handler: (time: number) => void, duration: yfiles.system.TimeSpan): void,
		animateHandlerWithCallback(
		handler: (time: number) => void, duration: yfiles.system.TimeSpan, finishedCallback: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		animateHandlerAndWait(handler: (time: number) => void, duration: yfiles.system.TimeSpan): void,
		animate(animation: yfiles.canvas.IAnimation): void,
		animateWithCallback(
		animation: yfiles.canvas.IAnimation, finishedCallback: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		animateAndWait(animation: yfiles.canvas.IAnimation): void,
		destroy(): void,
		invalidateControl(control: yfiles.canvas.Control): void,
		autoInvalidation: boolean
	}

	declare export interface TableAnimation {
		initialize(): void,
		createStripeAnimation(leaf: yfiles.graph.IStripe, targetSize: number): yfiles.canvas.IAnimation
	}

	declare export interface GraphOverviewControl {
		svgRendering: boolean,
		visualCreator: yfiles.drawing.IVisualCreator,
		overviewInputMode: yfiles.input.OverviewInputMode,
		graph: yfiles.graph.IGraph,
		raiseUpdatingVisualEvent(): void,
		createGraphVisualCreator(graph: yfiles.graph.IGraph): yfiles.drawing.IVisualCreator,
		createGraphCanvasVisualCreator(graph: yfiles.graph.IGraph): yfiles.drawing.IVisualCreator,
		graphControl: yfiles.canvas.GraphControl
	}

	declare export interface LayoutMorpherWrapper {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan,
		run(control: yfiles.canvas.GraphControl): void
	}

	declare export interface PortAnimation {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan
	}

	declare export interface NodeAnimation {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan
	}

	declare export interface FileEventArgs {
		contents: string,
		errorMessage: string,
		failed: boolean,
		succeeded: boolean
	}

	declare export interface GraphControl {
		onLostFocus(e: yfiles.system.EventArgs): void,
		onGotFocus(e: yfiles.system.EventArgs): void,
		onCurrentItemChanged(oldItem: yfiles.model.IModelItem, newItem: yfiles.model.IModelItem): void,
		currentItem: yfiles.model.IModelItem,
		addCurrentItemChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removeCurrentItemChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		openFile(handler: (sender: Object, e: yfiles.canvas.FileEventArgs) => void): void,
		createOpenFileInputElement(): HTMLInputElement,
		saveFile(handler: (sender: Object, e: yfiles.canvas.FileEventArgs) => void): void,
		saveFileAs(handler: (sender: Object, e: yfiles.canvas.FileEventArgs) => void): void,
		createSaveFileTextElement(): HTMLElement,
		selectionPaintManager: yfiles.model.SelectionPaintManager<yfiles.model.IModelItem>,
		addSelectionPaintManagerChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeSelectionPaintManagerChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onSelectionPaintManagerChanged(
		oldSelectionPaintManager: yfiles.model.SelectionPaintManager<yfiles.model.IModelItem>, newSelectionPaintManager: yfiles.model.SelectionPaintManager<yfiles.model.IModelItem>
	): void,
		createSelectionPaintManager(): yfiles.model.SelectionPaintManager<yfiles.model.IModelItem>,
		highlightPaintManager: yfiles.model.HighlightPaintManager<yfiles.model.IModelItem>,
		addHighlightPaintManagerChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeHighlightPaintManagerChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onHighlightPaintManagerChanged(
		oldHighlightPaintManager: yfiles.model.HighlightPaintManager<yfiles.model.IModelItem>, newHighlightPaintManager: yfiles.model.HighlightPaintManager<yfiles.model.IModelItem>
	): void,
		createHighlightPaintManager(): yfiles.model.HighlightPaintManager<yfiles.model.IModelItem>,
		focusPaintManager: yfiles.model.FocusPaintManager<yfiles.model.IModelItem>,
		addFocusPaintManagerChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removeFocusPaintManagerChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		onFocusPaintManagerChanged(
		oldFocusPaintManager: yfiles.model.FocusPaintManager<yfiles.model.IModelItem>, newFocusPaintManager: yfiles.model.FocusPaintManager<yfiles.model.IModelItem>
	): void,
		createFocusPaintManager(): yfiles.model.FocusPaintManager<yfiles.model.IModelItem>,
		graphModelManager: yfiles.drawing.GraphModelManager,
		addGraphModelManagerChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeGraphModelManagerChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onGraphModelManagerChanged(
		oldGraphModelManager: yfiles.drawing.GraphModelManager, newGraphModelManager: yfiles.drawing.GraphModelManager
	): void,
		createGraphModelManager(): yfiles.drawing.GraphModelManager,
		contentGroup: yfiles.canvas.ICanvasObjectGroup,
		addContentGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeContentGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onContentGroupChanged(
		oldContentGroup: yfiles.canvas.ICanvasObjectGroup, newContentGroup: yfiles.canvas.ICanvasObjectGroup
	): void,
		createContentGroup(): yfiles.canvas.ICanvasObjectGroup,
		getContentGroupProvider<T>(): yfiles.model.ICanvasGroupProvider<T>,
		highlightGroup: yfiles.canvas.ICanvasObjectGroup,
		focusGroup: yfiles.canvas.ICanvasObjectGroup,
		addFocusGroupChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removeFocusGroupChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		onFocusGroupChanged(
		oldFocusGroup: yfiles.canvas.ICanvasObjectGroup, newFocusGroup: yfiles.canvas.ICanvasObjectGroup
	): void,
		addHighlightGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeHighlightGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onHighlightGroupChanged(
		oldHighlightGroup: yfiles.canvas.ICanvasObjectGroup, newHighlightGroup: yfiles.canvas.ICanvasObjectGroup
	): void,
		createHighlightGroup(): yfiles.canvas.ICanvasObjectGroup,
		createFocusGroup(): yfiles.canvas.ICanvasObjectGroup,
		selectionGroup: yfiles.canvas.ICanvasObjectGroup,
		addSelectionGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeSelectionGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onSelectionGroupChanged(
		oldSelectionGroup: yfiles.canvas.ICanvasObjectGroup, newSelectionGroup: yfiles.canvas.ICanvasObjectGroup
	): void,
		createSelectionGroup(): yfiles.canvas.ICanvasObjectGroup,
		getSelectionGroupProvider<T>(): yfiles.model.ICanvasGroupProvider<T>,
		getHighlightGroupProvider<T>(): yfiles.model.ICanvasGroupProvider<T>,
		getFocusGroupProvider<T>(): yfiles.model.ICanvasGroupProvider<T>,
		inputModeGroup: yfiles.canvas.ICanvasObjectGroup,
		addInputModeGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeInputModeGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onInputModeGroupChanged(
		oldInputModeGroup: yfiles.canvas.ICanvasObjectGroup, newInputModeGroup: yfiles.canvas.ICanvasObjectGroup
	): void,
		createInputModeGroup(): yfiles.canvas.ICanvasObjectGroup,
		getInputModeGroupProvider<T>(): yfiles.model.ICanvasGroupProvider<T>,
		backgroundGroup: yfiles.canvas.ICanvasObjectGroup,
		addBackgroundGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeBackgroundGroupChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onBackgroundGroupChanged(
		oldBackgroundGroup: yfiles.canvas.ICanvasObjectGroup, newBackgroundGroup: yfiles.canvas.ICanvasObjectGroup
	): void,
		createBackgroundGroup(): yfiles.canvas.ICanvasObjectGroup,
		getBackgroundGroupProvider<T>(): yfiles.model.ICanvasGroupProvider<T>,
		graph: yfiles.graph.IGraph,
		addGraphChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeGraphChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onGraphChanged(oldGraph: yfiles.graph.IGraph, newGraph: yfiles.graph.IGraph): void,
		createGraph(): yfiles.graph.IGraph,
		selection: yfiles.graph.IGraphSelection,
		addSelectionChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeSelectionChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onSelectionChanged(
		oldGraphSelection: yfiles.graph.IGraphSelection, newGraphSelection: yfiles.graph.IGraphSelection
	): void,
		createSelection(): yfiles.graph.IGraphSelection,
		fitGraphBounds(): void,
		fitGraphBoundsWithInsets(insets: yfiles.geometry.InsetsD): void,
		getGraphMLIOHandler(): yfiles.graphml.IGraphMLIOHandler,
		exportToGraphMLText(): string,
		exportToGraphML(writer: yfiles.system.StringWriter): void,
		importFromGraphMLDocument(document: Document): void,
		importFromGraphMLText(data: string): void,
		importFromGraphMLUrl(url: string): void,
		importFromGraphMLUrlWithCallback(
		url: string, finishedCallback: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		storageLocation: yfiles.canvas.StorageLocation,
		undoabilityEnabled: boolean,
		clipboardEnabled: boolean,
		canUndo(): boolean,
		canRedo(): boolean,
		undo(): void,
		redo(): void,
		getUndoEngine(): yfiles.support.UndoEngine,
		clipboard: yfiles.graph.GraphClipboard,
		cut(): void,
		copy(): void,
		paste(): void,
		createGraphClipboard(): yfiles.graph.GraphClipboard,
		morphLayout(
		layouter: yfiles.layout.ILayouter, morphDuration: yfiles.system.TimeSpan, doneHandler: (sender: Object, e: yfiles.system.EventArgs) => void
	): void
	}

	declare export interface CanvasControl {
		defsManager: yfiles.canvas.DefsManager,
		useGlassPane: boolean,
		viewportLimiter: yfiles.canvas.ViewportLimiter,
		editable: boolean,
		centerZoomEventRecognizer: yfiles.input.IEventRecognizer,
		verticalScrollBarPolicy: yfiles.canvas.ScrollBarVisibility,
		horizontalScrollBarPolicy: yfiles.canvas.ScrollBarVisibility,
		onEditableChanged(e: yfiles.system.PropertyChangedEventArgs): void,
		commandBindings: yfiles.collections.IList<yfiles.system.CommandBinding>,
		inputBindings: yfiles.system.InputBindingCollection,
		animateScrollTo(newViewPoint: yfiles.geometry.PointD, newZoom: number): void,
		mouseWheelBehavior: yfiles.canvas.MouseWheelBehavior,
		animateScrollCommands: boolean,
		contentRect: yfiles.geometry.RectD,
		onContentRectChanged(eventArgs: yfiles.system.EventArgs): void,
		addContentRectChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeContentRectChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		setContentRect(x: number, y: number, w: number, h: number): void,
		addSizeChangedListener(
		value: (sender: Object, e: yfiles.canvas.CanvasControl.SizeChangedEventArgs) => void
	): void,
		removeSizeChangedListener(
		value: (sender: Object, e: yfiles.canvas.CanvasControl.SizeChangedEventArgs) => void
	): void,
		sizeChangedDetection: yfiles.canvas.CanvasControl.SizeChangedDetectionMode_Interface,
		fireSizeChanged(oldSize: yfiles.geometry.SizeD): void,
		size: yfiles.geometry.SizeD,
		actualWidth: number,
		actualHeight: number,
		fitContentViewMargins: yfiles.geometry.InsetsD,
		addMouse2DExitedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DExitedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addMouse2DEnteredListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DEnteredListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addMouse2DMovedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DMovedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addMouse2DPressedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DPressedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addMouse2DDraggedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DDraggedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addMouse2DReleasedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DReleasedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addMouse2DLostCaptureListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DLostCaptureListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addMouse2DWheelTurnedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DWheelTurnedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addMouse2DClickedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		removeMouse2DClickedListener(value: (sender: Object, me: yfiles.input.Mouse2DEventArgs) => void): void,
		addCompoundKeyPressedListener(value: (sender: Object, args: yfiles.input.CompoundKeyEventArgs) => void): void,
		removeCompoundKeyPressedListener(value: (sender: Object, args: yfiles.input.CompoundKeyEventArgs) => void): void,
		addCompoundKeyTypedListener(value: (sender: Object, args: yfiles.input.CompoundKeyEventArgs) => void): void,
		removeCompoundKeyTypedListener(value: (sender: Object, args: yfiles.input.CompoundKeyEventArgs) => void): void,
		addCompoundKeyReleasedListener(value: (sender: Object, args: yfiles.input.CompoundKeyEventArgs) => void): void,
		removeCompoundKeyReleasedListener(value: (sender: Object, args: yfiles.input.CompoundKeyEventArgs) => void): void,
		addEditableChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removeEditableChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		addViewportChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removeViewportChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		onCompoundKeyReleased(e: yfiles.input.CompoundKeyEventArgs): void,
		onCompoundKeyTyped(e: yfiles.input.CompoundKeyEventArgs): void,
		onCompoundKeyPressed(e: yfiles.input.CompoundKeyEventArgs): void,
		onMouse2DReleased(e: yfiles.input.Mouse2DEventArgs): void,
		onMouse2DLostCapture(e: yfiles.input.Mouse2DEventArgs): void,
		onMouse2DWheelTurned(e: yfiles.input.Mouse2DEventArgs): void,
		mouseWheelZoom(e: yfiles.input.Mouse2DEventArgs): void,
		mouseWheelScroll(e: yfiles.input.Mouse2DEventArgs): void,
		onMouse2DPressed(e: yfiles.input.Mouse2DEventArgs): void,
		onMouse2DMoved(e: yfiles.input.Mouse2DEventArgs): void,
		onMouse2DEntered(e: yfiles.input.Mouse2DEventArgs): void,
		onMouse2DExited(e: yfiles.input.Mouse2DEventArgs): void,
		onMouse2DDragged(e: yfiles.input.Mouse2DEventArgs): void,
		onMouse2DClicked(e: yfiles.input.Mouse2DEventArgs): void,
		addTouch2DDownListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		removeTouch2DDownListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		addTouch2DUpListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		removeTouch2DUpListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		addTouch2DMovedListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		removeTouch2DMovedListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		addTouch2DEnteredListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		removeTouch2DEnteredListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		addTouch2DExitedListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		removeTouch2DExitedListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		addTouch2DLostCaptureListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		removeTouch2DLostCaptureListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		addTouch2DTappedListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		removeTouch2DTappedListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		addTouch2DLongPressedListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		removeTouch2DLongPressedListener(value: (sender: Object, te: yfiles.input.Touch2DEventArgs) => void): void,
		onTouch2DDown(e: yfiles.input.Touch2DEventArgs): void,
		onTouch2DMoved(e: yfiles.input.Touch2DEventArgs): void,
		onTouch2DUp(e: yfiles.input.Touch2DEventArgs): void,
		onTouch2DEntered(e: yfiles.input.Touch2DEventArgs): void,
		onTouch2DExited(e: yfiles.input.Touch2DEventArgs): void,
		onTouch2DLostCapture(e: yfiles.input.Touch2DEventArgs): void,
		onTouch2DTapped(e: yfiles.input.Touch2DEventArgs): void,
		onTouch2DLongPress(e: yfiles.input.Touch2DEventArgs): void,
		getCurrentTouchDevices(): yfiles.model.IListEnumerable<yfiles.input.Touch2DDevice>,
		isDeviceDown(): boolean,
		lastMouse2DEvent: yfiles.input.Mouse2DEventArgs,
		inputModes: yfiles.collections.IList<yfiles.input.IInputMode>,
		addInputModeChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeInputModeChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		inputMode: yfiles.input.IInputMode,
		onInputModeChanged(eventArgs: yfiles.system.EventArgs): void,
		hitTestRadius: number,
		addHitTestRadiusChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeHitTestRadiusChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onHitTestRadiusChanged(eventArgs: yfiles.system.EventArgs): void,
		zoom: number,
		onZoomChanged(eventArgs: yfiles.system.EventArgs): void,
		addZoomChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeZoomChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		minimumZoom: number,
		maximumZoom: number,
		viewPoint: yfiles.geometry.PointD,
		onViewportChanged(eventArgs: yfiles.system.PropertyChangedEventArgs): void,
		viewport: yfiles.geometry.RectD,
		innerSize: yfiles.geometry.SizeD,
		printCommandsEnabled: boolean,
		coerceViewportLimits(): void,
		cleanUp(): void,
		inputModeContextLookupChain: yfiles.support.LookupChain,
		canvasContext: yfiles.canvas.ICanvasContext,
		center: yfiles.geometry.PointD,
		autoDrag: boolean,
		addAutoDragChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeAutoDragChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onAutoDragChanged(eventArgs: yfiles.system.EventArgs): void,
		invalidateWorld(worldRect: yfiles.geometry.RectD): void,
		onSizeChanged(args: yfiles.canvas.CanvasControl.SizeChangedEventArgs): void,
		onRender(): void,
		invalidate(): void,
		updateVisual(): void,
		raisePrepareRenderContextEvent(args: yfiles.canvas.PrepareRenderContextEventArgs): void,
		createRenderContext(): yfiles.drawing.IRenderContext,
		createStandaloneRenderContext(): yfiles.drawing.IRenderContext,
		raiseUpdatedVisualEvent(): void,
		addUpdatedVisualListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeUpdatedVisualListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		raiseUpdatingVisualEvent(): void,
		addUpdatingVisualListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeUpdatingVisualListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		enumerateCanvasObjects(): yfiles.collections.IEnumerator<yfiles.canvas.ICanvasObject>,
		enumerateCanvasObjectsInGroup(
		group: yfiles.canvas.ICanvasObjectGroup
	): yfiles.collections.IEnumerator<yfiles.canvas.ICanvasObject>,
		enumerateHitsAtRoot(
		location: yfiles.geometry.PointD, root: yfiles.canvas.ICanvasObjectGroup
	): yfiles.collections.IEnumerator<yfiles.canvas.ICanvasObject>,
		enumerateFilteredHitsAtRoot(
		location: yfiles.geometry.PointD, root: yfiles.canvas.ICanvasObjectGroup, filter: (obj: yfiles.canvas.ICanvasObject) => boolean
	): yfiles.collections.IEnumerator<yfiles.canvas.ICanvasObject>,
		enumerateFilteredHitsAtRootWithContext(
		location: yfiles.geometry.PointD, root: yfiles.canvas.ICanvasObjectGroup, filter: (obj: yfiles.canvas.ICanvasObject) => boolean, context: yfiles.canvas.ICanvasContext
	): yfiles.collections.IEnumerator<yfiles.canvas.ICanvasObject>,
		enumerateHits(
		location: yfiles.geometry.PointD
	): yfiles.collections.IEnumerator<yfiles.canvas.ICanvasObject>,
		root: yfiles.canvas.ICanvasObjectGroup,
		add(
		userObject: Object, descriptor: yfiles.canvas.ICanvasObjectDescriptor
	): yfiles.canvas.ICanvasObject,
		addCreator(visualCreator: yfiles.drawing.IVisualCreator): yfiles.canvas.ICanvasObject,
		addGroup(): yfiles.canvas.ICanvasObjectGroup,
		addGroupWithAction(action: yfiles.canvas.IGroupAction): yfiles.canvas.ICanvasObjectGroup,
		addGroupToGroup(group: yfiles.canvas.ICanvasObjectGroup): yfiles.canvas.ICanvasObjectGroup,
		addGroupToGroupWithAction(
		group: yfiles.canvas.ICanvasObjectGroup, action: yfiles.canvas.IGroupAction
	): yfiles.canvas.ICanvasObjectGroup,
		addCreatorToGroup(
		visualCreator: yfiles.drawing.IVisualCreator, group: yfiles.canvas.ICanvasObjectGroup
	): yfiles.canvas.ICanvasObject,
		addToGroup(
		userObject: Object, descriptor: yfiles.canvas.ICanvasObjectDescriptor, group: yfiles.canvas.ICanvasObjectGroup
	): yfiles.canvas.ICanvasObject,
		svgElement: Element,
		overlayPanel: HTMLElement,
		dragTime: yfiles.system.TimeSpan,
		doubleTapTime: yfiles.system.TimeSpan,
		longPressTime: yfiles.system.TimeSpan,
		dragSize: yfiles.geometry.SizeD,
		doubleTapSize: yfiles.geometry.SizeD,
		onDragSizeChanged(args: yfiles.system.EventArgs): void,
		onDragTimeChanged(args: yfiles.system.EventArgs): void,
		mouseWheelZoomFactor: number,
		onMouseWheelZoomFactorChanged(args: yfiles.system.EventArgs): void,
		addMouseWheelZoomFactorChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMouseWheelZoomFactorChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		mouseWheelScrollFactor: number,
		onMouseWheelScrollFactorChanged(args: yfiles.system.EventArgs): void,
		addMouseWheelScrollFactorChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMouseWheelScrollFactorChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onMouseDown(e: yfiles.input.MouseEventArgs): void,
		onMouseEnter(e: yfiles.input.MouseEventArgs): void,
		onMouseLeave(e: yfiles.input.MouseEventArgs): void,
		onDragOver(args: yfiles.system.DragEventArgs): void,
		onDragLeave(e: yfiles.system.EventArgs): void,
		onDragDrop(args: yfiles.system.DragEventArgs): void,
		onMouseMove(e: yfiles.input.MouseEventArgs): void,
		onMouseUp(e: yfiles.input.MouseEventArgs): void,
		autoDragInsets: yfiles.geometry.InsetsD,
		addAutoDragInsetsChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeAutoDragInsetsChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onAutoDragInsetsChanged(args: yfiles.system.EventArgs): void,
		redispatchMouse2DEvent(): void,
		onMouseWheel(e: yfiles.input.MouseEventArgs): void,
		onMouseCaptureLost(e: yfiles.input.MouseEventArgs): void,
		onTouchDown(e: yfiles.system.TouchEventArgs): void,
		onTouchMove(e: yfiles.system.TouchEventArgs): void,
		onTouchUp(e: yfiles.system.TouchEventArgs): void,
		onTouchEnter(e: yfiles.system.TouchEventArgs): void,
		onTouchLeave(e: yfiles.system.TouchEventArgs): void,
		onTouchCaptureLost(e: yfiles.system.TouchEventArgs): void,
		toWorldCoordinates(viewPoint: yfiles.geometry.PointD): yfiles.geometry.PointD,
		toViewCoordinates(worldPoint: yfiles.geometry.PointD): yfiles.geometry.PointD,
		createVisualContent(renderContext: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		localToGlobal(localPoint: yfiles.geometry.PointD): yfiles.geometry.PointD,
		globalToLocal(localPoint: yfiles.geometry.PointD): yfiles.geometry.PointD,
		onKeyDown(e: yfiles.input.KeyEventArgs): void,
		onKeyPress(e: yfiles.input.KeyEventArgs): void,
		onKeyUp(e: yfiles.input.KeyEventArgs): void,
		addPrepareRenderContextListener(
		value: (src: Object, args: yfiles.canvas.PrepareRenderContextEventArgs) => void
	): void,
		removePrepareRenderContextListener(
		value: (src: Object, args: yfiles.canvas.PrepareRenderContextEventArgs) => void
	): void,
		collectCanvasObjects(
		location: yfiles.geometry.PointD, ef: (co: yfiles.canvas.ICanvasObject) => boolean
	): void,
		getCanvasObject(location: yfiles.geometry.PointD): yfiles.canvas.ICanvasObject,
		getCanvasObjects(
		location: yfiles.geometry.PointD
	): yfiles.collections.IList<yfiles.canvas.ICanvasObject>,
		compare(
		canvasObject1: yfiles.canvas.ICanvasObject, canvasObject2: yfiles.canvas.ICanvasObject
	): number,
		updateContentRect(): void,
		updateContentRectWithMargins(margins: yfiles.geometry.InsetsD): void,
		updateContentRectWithMarginsForGroup(
		margins: yfiles.geometry.InsetsD, canvasObjectGroup: yfiles.canvas.ICanvasObjectGroup
	): void,
		fitContent(): void,
		zoomToWithCenter(center: yfiles.geometry.PointD, zoom: number): void,
		ensureVisible(bounds: yfiles.geometry.RectD): void,
		zoomToRectD(bounds: yfiles.geometry.RectD): void,
		inputModeContext: yfiles.input.IInputModeContext,
		addInputModeContextChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removeInputModeContextChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		onInputModeContextChanged(
		oldInputModeContext: yfiles.input.IInputModeContext, newInputModeContext: yfiles.input.IInputModeContext
	): void,
		createInputModeContext(): yfiles.input.IInputModeContext,
		inputModeContextLookup(type: yfiles.lang.Class): Object,
		getVisual(canvasObject: yfiles.canvas.ICanvasObject): yfiles.drawing.Visual,
		getBounds(canvasObject: yfiles.canvas.ICanvasObject): yfiles.geometry.RectD,
		isHit(
		canvasObject: yfiles.canvas.ICanvasObject, location: yfiles.geometry.PointD
	): boolean,
		getVisualCreator(canvasObject: yfiles.canvas.ICanvasObject): yfiles.drawing.IVisualCreator,
		invalidateCanvasObject(canvasObject: yfiles.canvas.ICanvasObject): void,
		growContentRect(boundsToInclude: yfiles.geometry.RectD): void,
		lookup(type: yfiles.lang.Class): Object,
		navigationCommandsEnabled: boolean,
		resourceMap: yfiles.collections.IDictionary<yfiles.system.ResourceKey, Object>
	}

	declare export interface PrepareRenderContextEventArgs {
		context: yfiles.drawing.IRenderContext
	}

	declare export interface CanvasObjectDescriptor {
		getHitTestable(forUserObject: Object): yfiles.drawing.IHitTestable,
		getVisualCreator(forUserObject: Object): yfiles.drawing.IVisualCreator,
		isDirty(
		canvasObject: yfiles.canvas.ICanvasObject, context: yfiles.canvas.ICanvasContext
	): boolean,
		getBoundsProvider(forUserObject: Object): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(forUserObject: Object): yfiles.drawing.IVisibilityTest
	}

	declare export interface ICanvasObjectTreeEventSource {
		addCanvasObjectAddedListener(value: (sender: Object, co: yfiles.canvas.ICanvasObject) => void): void,
		removeCanvasObjectAddedListener(value: (sender: Object, co: yfiles.canvas.ICanvasObject) => void): void,
		addCanvasObjectMovedListener(
		value: (
		sender: Object, co: yfiles.canvas.ICanvasObject, oldParent: yfiles.canvas.ICanvasObjectGroup, oldPredecessor: yfiles.canvas.ICanvasObject
	) => void
	): void,
		removeCanvasObjectMovedListener(
		value: (
		sender: Object, co: yfiles.canvas.ICanvasObject, oldParent: yfiles.canvas.ICanvasObjectGroup, oldPredecessor: yfiles.canvas.ICanvasObject
	) => void
	): void,
		addCanvasObjectRemovedListener(
		value: (
		sender: Object, co: yfiles.canvas.ICanvasObject, parent: yfiles.canvas.ICanvasObjectGroup
	) => void
	): void,
		removeCanvasObjectRemovedListener(
		value: (
		sender: Object, co: yfiles.canvas.ICanvasObject, parent: yfiles.canvas.ICanvasObjectGroup
	) => void
	): void,
		addCanvasObjectRemovingListener(
		value: (
		sender: Object, co: yfiles.canvas.ICanvasObject, parent: yfiles.canvas.ICanvasObjectGroup
	) => void
	): void,
		removeCanvasObjectRemovingListener(
		value: (
		sender: Object, co: yfiles.canvas.ICanvasObject, parent: yfiles.canvas.ICanvasObjectGroup
	) => void
	): void,
		addCanvasObjectInvalidatedListener(
		value: (sender: Object, canvasObject: yfiles.canvas.ICanvasObject) => void
	): void,
		removeCanvasObjectInvalidatedListener(
		value: (sender: Object, canvasObject: yfiles.canvas.ICanvasObject) => void
	): void
	}

	declare export interface CanvasContext {
		zoom: number,
		hitTestRadius: number,
		getDefsId(defsSupport: yfiles.drawing.IDefsSupport): string,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface ICanvasCursor {
		getSystemCursor(context: yfiles.canvas.Control): string
	}

	declare export interface CanvasCursor {
		getSystemCursor(context: yfiles.canvas.Control): string
	}

	declare export interface CanvasExtensions {
		
	}

	declare export interface DefsManager {
		cleanupTimerInterval: yfiles.system.TimeSpan,
		customPrefix: string,
		generateUniqueDefsId(): string,
		defs: SVGDefsElement,
		cleanupDefs(canvasControl: yfiles.canvas.CanvasControl): void
	}

	declare export interface GridInfo {
		horizontalSpacing: number,
		verticalSpacing: number,
		origin: yfiles.geometry.PointD
	}

	declare export interface ICanvasContext {
		zoom: number,
		hitTestRadius: number,
		getDefsId(defsSupport: yfiles.drawing.IDefsSupport): string
	}

	declare export interface ICanvasObjectGroup {
		groupAction: yfiles.canvas.IGroupAction,
		first: yfiles.canvas.ICanvasObject,
		last: yfiles.canvas.ICanvasObject
	}

	declare export interface IGroupAction {
		preVisit(
		group: yfiles.canvas.ICanvasObjectGroup, canvasContext: yfiles.canvas.ICanvasContext
	): void,
		postVisit(
		group: yfiles.canvas.ICanvasObjectGroup, canvasContext: yfiles.canvas.ICanvasContext
	): void
	}

	declare export interface ICanvasObject {
		visible: boolean,
		dirty: boolean,
		group: yfiles.canvas.ICanvasObjectGroup,
		userObject: Object,
		descriptor: yfiles.canvas.ICanvasObjectDescriptor,
		toFront(): yfiles.canvas.ICanvasObject,
		toBack(): yfiles.canvas.ICanvasObject,
		raise(): yfiles.canvas.ICanvasObject,
		lower(): yfiles.canvas.ICanvasObject,
		after(reference: yfiles.canvas.ICanvasObject): yfiles.canvas.ICanvasObject,
		before(reference: yfiles.canvas.ICanvasObject): yfiles.canvas.ICanvasObject,
		next: yfiles.canvas.ICanvasObject,
		previous: yfiles.canvas.ICanvasObject,
		invalidate(): void,
		remove(): void
	}

	declare export interface ICanvasObjectDescriptor {
		getVisualCreator(forUserObject: Object): yfiles.drawing.IVisualCreator,
		isDirty(
		canvasObject: yfiles.canvas.ICanvasObject, context: yfiles.canvas.ICanvasContext
	): boolean,
		getBoundsProvider(forUserObject: Object): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(forUserObject: Object): yfiles.drawing.IVisibilityTest,
		getHitTestable(forUserObject: Object): yfiles.drawing.IHitTestable
	}

	declare export interface SvgExport {
		worldBounds: yfiles.geometry.RectD,
		scale: number,
		zoom: number,
		margin: yfiles.geometry.InsetsD,
		viewWidth: number,
		viewHeight: number,
		copyDefsElements: boolean,
		encodeImagesBase64: boolean,
		inlineSvgImages: boolean,
		getScaleForWidth(width: number): number,
		getScaleForHeight(height: number): number,
		setScaleForWidth(width: number): void,
		setScaleForHeight(height: number): void,
		setup(
		canvas: yfiles.canvas.CanvasControl, transform: {
		value: yfiles.geometry.Matrix2D
	}, clip: {
		value: yfiles.geometry.RectD
	}
	): yfiles.drawing.IRenderContext,
		exportSvg(canvas: yfiles.canvas.CanvasControl): Element,
		exportSvgAsync(canvas: yfiles.canvas.CanvasControl, callback: (obj: Element) => void): void,
		shouldInlineSvgImage(image: SVGImageElement): boolean,
		prepareInlinedImage(importedSvg: Element, originalImage: SVGImageElement): Element,
		shouldEncodeImageBase64(image: SVGImageElement): boolean
	}

	declare export interface CanvasContainer {
		svgElement: Element,
		transform: yfiles.geometry.Matrix2D,
		add(child: yfiles.drawing.Visual): void,
		remove(child: yfiles.drawing.Visual): void,
		children: yfiles.collections.IList<yfiles.drawing.Visual>,
		setCanvasArrangeRect(rect: yfiles.geometry.RectD): void
	}

	declare export interface ViewportLimiter {
		limitViewport(
		canvasControl: yfiles.canvas.CanvasControl, suggestedViewport: yfiles.geometry.RectD
	): yfiles.geometry.RectD,
		getBounds(
		canvasControl: yfiles.canvas.CanvasControl, suggestedViewport: yfiles.geometry.RectD
	): yfiles.geometry.RectD,
		honorBothDimensions: boolean,
		bounds: yfiles.geometry.RectD
	}

	declare export interface CompositeAnimation {
		addChild(child: yfiles.canvas.IAnimation): void,
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan
	}

	declare export interface EasedAnimation {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan
	}

	declare export interface Control {
		initialize(div: HTMLDivElement): void,
		cleanUp(): void,
		dropTarget: yfiles.system.DropTarget,
		allowDrop: boolean,
		addDragEnterListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		removeDragEnterListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		addDragOverListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		removeDragOverListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		addDropListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		removeDropListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		addDragLeaveListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		removeDragLeaveListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		invokeDragHandler(
		handler: (sender: Object, e: yfiles.system.DragEventArgs) => void, target: Object, args: yfiles.system.DragEventArgs
	): void,
		addGotFocusListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeGotFocusListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addLostFocusListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeLostFocusListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		preventFocusScrolling: boolean,
		focus(): void,
		focusRetainingScrollPosition(): void,
		focused: boolean,
		cursor: string,
		div: HTMLDivElement,
		svgElement: Element,
		size: yfiles.geometry.SizeD,
		actualWidth: number,
		actualHeight: number,
		width: number,
		height: number,
		rightToLeft: boolean,
		enabled: boolean,
		visible: boolean,
		dispatcher: yfiles.system.Dispatcher,
		captureAllKeyboardInput: boolean,
		captureAllPointerInput: boolean,
		preventKeyboardDefault: boolean,
		preventPointerDefault: boolean,
		preventContextMenuDefault: boolean,
		stopPointerPropagation: boolean,
		maybePreventKeyboardDefault(evt: Event): void,
		maybePreventPointerDefault(evt: Event): void,
		maybeStopPointerPropagation(evt: Event): void,
		onMouseEvent(
		handler: (obj: yfiles.input.MouseEventArgs) => void, args: yfiles.input.MouseEventArgs
	): void,
		onEvent(handler: (obj: KeyboardEvent) => void, evt: KeyboardEvent): void,
		onTouchEventArgs(
		handler: (obj: yfiles.system.TouchEventArgs) => void, args: yfiles.system.TouchEventArgs
	): void,
		onTouchEvent(handler: (obj: SVGElement) => void, evt: SVGElement): void,
		onMouseDown(args: yfiles.input.MouseEventArgs): void,
		onMouseUp(args: yfiles.input.MouseEventArgs): void,
		onMouseLeave(args: yfiles.input.MouseEventArgs): void,
		onMouseEnter(args: yfiles.input.MouseEventArgs): void,
		onMouseWheel(args: yfiles.input.MouseEventArgs): void,
		onMouseMove(args: yfiles.input.MouseEventArgs): void,
		onMouseCaptureLost(args: yfiles.input.MouseEventArgs): void,
		mouseCaptureEnabled: boolean,
		hasMouseCapture: boolean,
		stopMouseCapture(): void,
		onTouchDown(e: yfiles.system.TouchEventArgs): void,
		onTouchMove(e: yfiles.system.TouchEventArgs): void,
		onTouchUp(e: yfiles.system.TouchEventArgs): void,
		onTouchEnter(e: yfiles.system.TouchEventArgs): void,
		onTouchLeave(e: yfiles.system.TouchEventArgs): void,
		onTouchCaptureLost(e: yfiles.system.TouchEventArgs): void,
		addKeyDownListener(value: (sender: Object, e: yfiles.input.KeyEventArgs) => void): void,
		removeKeyDownListener(value: (sender: Object, e: yfiles.input.KeyEventArgs) => void): void,
		addKeyUpListener(value: (sender: Object, e: yfiles.input.KeyEventArgs) => void): void,
		removeKeyUpListener(value: (sender: Object, e: yfiles.input.KeyEventArgs) => void): void,
		addKeyPressListener(value: (sender: Object, e: yfiles.input.KeyEventArgs) => void): void,
		removeKeyPressListener(value: (sender: Object, e: yfiles.input.KeyEventArgs) => void): void,
		onKeyDown(e: yfiles.input.KeyEventArgs): void,
		onKeyPress(e: yfiles.input.KeyEventArgs): void,
		onKeyUp(e: yfiles.input.KeyEventArgs): void,
		existsInDom(): boolean,
		tryFindResource(resourceKey: Object): Object,
		isVisible(): boolean,
		isKeyboardFocused(): boolean,
		isKeyboardFocusWithin(): boolean
	}

	declare export interface IAnimation {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan
	}

	declare export interface GeneralPathAnimation {
		initialize(): void,
		animate(time: number): void,
		cleanup(): void,
		preferredDuration: yfiles.system.TimeSpan
	}

	declare export interface ViewportAnimation {
		targetBounds: yfiles.geometry.RectD,
		considerViewportLimiter: boolean,
		preferredDuration: yfiles.system.TimeSpan,
		maximumTargetZoom: number,
		initialize(): void,
		scrollBarVisibility: yfiles.canvas.ScrollBarVisibility,
		targetViewMargins: yfiles.geometry.InsetsD,
		animate(time: number): void,
		applyViewPoint(focus: yfiles.geometry.PointD): void,
		applyCenterPoint(focus: yfiles.geometry.PointD): void,
		applyZoom(value: number): void,
		cancel(): void,
		cleanup(): void
	}

			
}

declare module 'CanvasControl' {
		declare export interface SizeChangedDetectionMode_Interface {
		
	}

	declare export interface SizeChangedEventArgs {
		source: HTMLElement,
		oldSize: yfiles.geometry.SizeD
	}

			
}

declare module 'circular' {
		declare export interface CircularLayouter {
		considerNodeLabels: boolean,
		placeChildrenOnCommonRadius: boolean,
		fromSketchMode: boolean,
		maximalDeviationAngle: number,
		layoutStyle: yfiles.circular.LayoutStyle,
		singleCycleLayouter: yfiles.circular.SingleCycleLayouter,
		balloonLayouter: yfiles.tree.BalloonLayouter,
		partitionLayoutStyle: yfiles.circular.PartitionLayoutStyle,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		doLayout(layoutGraph: yfiles.layout.LayoutGraph): void
	}

	declare export interface SingleCycleLayouter {
		initialAngle: number,
		fromSketchModeEnabled: boolean,
		minimalNodeDistance: number,
		fixedRadius: number,
		minimalRadius: number,
		automaticRadius: boolean,
		nodeSequencer: yfiles.algorithms.INodeSequencer,
		lastAppliedRadius: number,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void
	}

			
}

declare module 'collections' {
		declare export interface NotifyCollectionChangedEventArgs {
		action: yfiles.collections.NotifyCollectionChangedAction,
		newItems: yfiles.objectcollections.IList,
		oldItems: yfiles.objectcollections.IList,
		newStartingIndex: number,
		oldStartingIndex: number
	}

	declare export interface IComparer<T> {
		compare(x: T, y: T): number
	}

	declare export interface INotifyCollectionChanged {
		addCollectionChangedListener(
		value: (sender: Object, e: yfiles.collections.NotifyCollectionChangedEventArgs) => void
	): void,
		removeCollectionChangedListener(
		value: (sender: Object, e: yfiles.collections.NotifyCollectionChangedEventArgs) => void
	): void
	}

	declare export interface IEnumerable<T> {
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		enumerableContains(value: T): boolean,
		getElementAt(index: number): T,
		forEach(action: (obj: T) => void): void,
		forEachWithIndex(action: (arg1: T, arg2: number) => void): void,
		getElementCount(): number,
		getFirstElement(): T,
		getFirstElementWithPredicate(predicate: (arg: T) => boolean): T,
		getFirstElementOrDefault(): T,
		getFirstElementOrDefaultWithPredicate(predicate: (arg: T) => boolean): T,
		getLastElementOrDefault(): T,
		getLastElement(): T,
		getMatchingElements(predicate: (arg: Object) => boolean): yfiles.collections.IEnumerable<T>,
		getMultiProjection(
		selector: (arg: T) => yfiles.collections.IEnumerable<T>
	): yfiles.collections.IEnumerable<T>,
		getEnumerableAsArray(): T[],
		getEnumerableAsList(): yfiles.collections.List<T>,
		getElementSum(selector: (arg: T) => number): number,
		enumerableContainsElements(): boolean,
		enumerableContainsMatch(predicate: (arg: T) => boolean): boolean,
		enumerableMatchesAll(predicate: (arg: T) => boolean): boolean,
		getProjection<TResult>(
		selector: (arg: T) => TResult
	): yfiles.collections.IEnumerable<TResult>,
		getProjectionWithIndex<TResult>(
		selector: (arg1: T, arg2: number) => TResult
	): yfiles.collections.IEnumerable<TResult>,
		getReversedEnumerable(): yfiles.collections.IEnumerable<T>,
		getTakeWhileEnumerable(predicate: (arg: T) => boolean): yfiles.collections.IEnumerable<T>,
		getAggregation<TAccumulate>(
		seed: TAccumulate, func: (arg1: TAccumulate, arg2: T) => TAccumulate
	): TAccumulate
	}

	declare export interface IEnumerator<T> {
		moveNext(): boolean,
		reset(): void,
		current: T
	}

	declare export interface IEqualityComparer<T> {
		itemsEqual(x: T, y: T): boolean,
		getHashCode(obj: T): number
	}

	declare export interface ReadOnlyCollection<T> {
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		count: number,
		isReadOnly: boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		clear(): void,
		remove(item: T): boolean,
		add(item: T): void,
		contains(item: T): boolean,
		indexOf(item: T): number,
		insert(index: number, item: T): void,
		removeAt(index: number): void,
		get(index: number): T,
		set(index: number, value: T): void,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface EqualityComparer<T> {
		itemsEqual(x: T, y: T): boolean,
		getHashCode(obj: T): number
	}

	declare export interface IDictionary<TKey, TValue> {
		addKeyValue(key: TKey, value: TValue): void,
		containsKey(key: TKey): boolean,
		removeKey(key: TKey): boolean,
		tryGetValue(key: TKey, value: {
		value: TValue
	}): boolean,
		keys: yfiles.collections.ICollection<TKey>,
		get(key: TKey): TValue,
		put(key: TKey, value: TValue): void,
		values: yfiles.collections.ICollection<TValue>
	}

	declare export interface KeyValuePair<TKey, TValue> {
		key: TKey,
		value: TValue,
		next: yfiles.collections.KeyValuePair<TKey, TValue>
	}

	declare export interface ICollection<T> {
		count: number,
		isReadOnly: boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		clear(): void,
		remove(item: T): boolean,
		add(item: T): void,
		contains(item: T): boolean
	}

	declare export interface IList<T> {
		indexOf(item: T): number,
		insert(index: number, item: T): void,
		removeAt(index: number): void,
		get(index: number): T,
		set(index: number, value: T): void
	}

	declare export interface List<T> {
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getListEnumerator(): yfiles.collections.List.Enumerator<T>,
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		count: number,
		isReadOnly: boolean,
		indexOf(item: T): number,
		insert(index: number, item: T): void,
		removeAt(index: number): void,
		getObject(index: number): Object,
		setObject(index: number, value: Object): void,
		get(index: number): T,
		set(index: number, value: T): void,
		addWithValue(value: Object): number,
		containsValue(value: Object): boolean,
		indexOfItem(value: Object): number,
		insertAt(index: number, value: Object): void,
		removeValue(value: Object): void,
		copyTo(array: Object, index: number): void,
		syncRoot: Object,
		isSynchronized: boolean,
		isFixedSize: boolean,
		addRange(collection: yfiles.collections.IEnumerable<T>): void,
		asReadOnly(): yfiles.collections.ReadOnlyCollection<T>,
		binarySearch(item: T, comparer: yfiles.collections.IComparer<T>): number,
		capacity: number,
		find(match: (obj: T) => boolean): T,
		findIndex(match: (obj: T) => boolean): number,
		removeAll(match: (obj: T) => boolean): number,
		removeRange(index: number, count: number): void,
		reverse(): void,
		naturalSort(): void,
		sort(comparer: yfiles.collections.IComparer<T>): void,
		sortWithComparison(comparison: (arg1: Object, arg2: Object) => number): void,
		toArray(): T[],
		copyToArray(array: T[]): void
	}

	declare export interface HashSet<T> {
		add(item: T): void,
		addIfNew(item: T): boolean,
		clear(): void,
		contains(item: T): boolean,
		addRange(elements: yfiles.collections.IEnumerable<T>): void,
		addRangeWithEnumerator(elements: yfiles.collections.IEnumerator<T>): void,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		count: number,
		isReadOnly: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		unionWith(enumerable: yfiles.collections.IEnumerable<T>): void
	}

	declare export interface Dictionary<TKey, TValue> {
		removeWithKey(key: Object): void,
		getObject(key: Object): Object,
		putObject(key: Object, value: Object): void,
		getEnumerator(
		
	): yfiles.collections.IEnumerator<yfiles.collections.KeyValuePair<TKey, TValue>>,
		getDictionaryEnumerator(): yfiles.objectcollections.IDictionaryEnumerator,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		copyTo(array: Object, index: number): void,
		count: number,
		syncRoot: Object,
		isSynchronized: boolean,
		isReadOnly: boolean,
		isFixedSize: boolean,
		copyToArrayAt(
		array: yfiles.collections.KeyValuePair<TKey, TValue>[], arrayIndex: number
	): void,
		containsWithValue(key: Object): boolean,
		addWithKeyAndValue(key: Object, value: Object): void,
		clear(): void,
		remove(item: yfiles.collections.KeyValuePair<TKey, TValue>): boolean,
		add(item: yfiles.collections.KeyValuePair<TKey, TValue>): void,
		contains(item: yfiles.collections.KeyValuePair<TKey, TValue>): boolean,
		addKeyValue(key: TKey, value: TValue): void,
		containsKey(key: TKey): boolean,
		containsValue(value: TValue): boolean,
		removeKey(key: TKey): boolean,
		tryGetValue(key: TKey, value: {
		value: TValue
	}): boolean,
		keys: yfiles.collections.ICollection<TKey>,
		get(key: TKey): TValue,
		put(key: TKey, value: TValue): void,
		values: yfiles.collections.ICollection<TValue>
	}

	declare export interface EnumerableExtensions {
		
	}

			
}

declare module 'List' {
		declare export interface Enumerator<T> {
		dispose(): void,
		moveNext(): boolean,
		reset(): void,
		current: T
	}

			
}

declare module 'Dictionary' {
		declare export interface DictionaryEnumerator<TKey, TValue> {
		dispose(): void,
		moveNext(): boolean,
		reset(): void,
		current: yfiles.collections.KeyValuePair<TKey, TValue>,
		key: Object,
		value: Object
	}

	declare export interface DictionaryKeyCollection<TKey, TValue> {
		getEnumerator(): yfiles.collections.IEnumerator<TKey>,
		count: number,
		isReadOnly: boolean,
		copyToArrayAt(array: TKey[], arrayIndex: number): void,
		clear(): void,
		remove(item: TKey): boolean,
		add(item: TKey): void,
		contains(item: TKey): boolean,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getKeyCollectionEnumerator(): yfiles.collections.Dictionary.DictionaryKeyEnumerator<TKey, TValue>
	}

	declare export interface DictionaryKeyEnumerator<TKey, TValue> {
		dispose(): void,
		moveNext(): boolean,
		reset(): void,
		current: TKey
	}

	declare export interface DictionaryValueCollection<TKey, TValue> {
		getEnumerator(): yfiles.collections.IEnumerator<TValue>,
		count: number,
		isReadOnly: boolean,
		copyToArrayAt(array: TValue[], arrayIndex: number): void,
		clear(): void,
		remove(item: TValue): boolean,
		add(item: TValue): void,
		contains(item: TValue): boolean,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getValueCollectionEnumerator(): yfiles.collections.Dictionary.DictionaryValueEnumerator<TKey, TValue>
	}

	declare export interface DictionaryValueEnumerator<TKey, TValue> {
		dispose(): void,
		moveNext(): boolean,
		reset(): void,
		current: TValue,
		currentDictionaryObject: Object
	}

			
}

declare module 'drawing' {
		declare export interface AbstractStyleRenderer<TModelItem, TModelStyle, TStyle> {
		styleF: TStyle,
		itemF: TModelItem,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		styleDescriptor: yfiles.canvas.ICanvasObjectDescriptor,
		createStyleDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		install(context: yfiles.model.IInstallerContext, modelItem: TModelItem): void,
		setStyle(style: TStyle): void,
		setItem(item: TModelItem): void,
		style: TStyle,
		item: TModelItem,
		configure(): void,
		getVisualCreator(item: TModelItem, style: TModelStyle): yfiles.drawing.IVisualCreator,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		getBoundsProvider(item: TModelItem, style: TModelStyle): yfiles.drawing.IBoundsProvider,
		getHitTestable(item: TModelItem, style: TModelStyle): yfiles.drawing.IHitTestable,
		getMarqueeTestable(item: TModelItem, style: TModelStyle): yfiles.drawing.IMarqueeTestable,
		getVisibilityTest(item: TModelItem, style: TModelStyle): yfiles.drawing.IVisibilityTest,
		getContext(item: TModelItem, style: TModelStyle): yfiles.support.ILookup,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface InBetweenSnapLineVisual {
		outerLine1From: yfiles.geometry.PointD,
		outerLine1To: yfiles.geometry.PointD,
		outerLine2From: yfiles.geometry.PointD,
		outerLine2To: yfiles.geometry.PointD,
		innerLine1From: yfiles.geometry.PointD,
		innerLine1To: yfiles.geometry.PointD,
		innerLine2From: yfiles.geometry.PointD,
		innerLine2To: yfiles.geometry.PointD,
		distanceIndicator1From: yfiles.geometry.PointD,
		distanceIndicator1To: yfiles.geometry.PointD,
		distanceIndicator2From: yfiles.geometry.PointD,
		distanceIndicator2To: yfiles.geometry.PointD,
		updateValues(context: yfiles.drawing.IRenderContext, result: yfiles.input.SnapResult): void,
		key: yfiles.system.ResourceKey
	}

	declare export interface FixedDistanceSnapLineVisual {
		sourceLineFrom: yfiles.geometry.PointD,
		sourceLineTo: yfiles.geometry.PointD,
		sourcePoint: yfiles.geometry.PointD,
		targetLineFrom: yfiles.geometry.PointD,
		targetLineTo: yfiles.geometry.PointD,
		targetPoint: yfiles.geometry.PointD,
		distanceIndicatorFrom: yfiles.geometry.PointD,
		distanceIndicatorTo: yfiles.geometry.PointD,
		updateValues(context: yfiles.drawing.IRenderContext, result: yfiles.input.SnapResult): void,
		key: yfiles.system.ResourceKey
	}

	declare export interface TemplateStyleBase<TModelItem> {
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		styleTag: Object,
		contextLookup: yfiles.support.IContextLookup,
		userTagProvider: yfiles.drawing.IUserTagProvider,
		onPropertyChanged(ea: yfiles.system.PropertyChangedEventArgs): void,
		getTag(forItem: TModelItem, context: yfiles.support.ILookup): Object,
		setTag(forItem: TModelItem, newTag: Object, context: yfiles.support.ILookup): boolean,
		clone(): Object
	}

	declare export interface SnapLineVisual {
		pen: yfiles.system.Pen,
		getPen(context: yfiles.drawing.IRenderContext): yfiles.system.Pen,
		size: number,
		updateValues(
		context: yfiles.drawing.IRenderContext, snapResult: yfiles.input.SnapResult
	): void
	}

	declare export interface ITemplatePortStyle {
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, port: yfiles.graph.IPort
	): yfiles.drawing.PortTemplateContext,
		outlineShape: yfiles.drawing.GeneralPath,
		renderSize: yfiles.geometry.SizeD
	}

	declare export interface EdgeSegmentSnapLineVisual {
		lineFrom: yfiles.geometry.PointD,
		lineTo: yfiles.geometry.PointD,
		sourcePoint: yfiles.geometry.PointD,
		targetPoint: yfiles.geometry.PointD,
		fromPoint: yfiles.geometry.PointD,
		toPoint: yfiles.geometry.PointD,
		updateValues(context: yfiles.drawing.IRenderContext, result: yfiles.input.SnapResult): void,
		key: yfiles.system.ResourceKey
	}

	declare export interface SingleLineSnapLineVisual {
		lineFrom: yfiles.geometry.PointD,
		lineTo: yfiles.geometry.PointD,
		sourcePoint: yfiles.geometry.PointD,
		targetPoint: yfiles.geometry.PointD,
		updateValues(context: yfiles.drawing.IRenderContext, result: yfiles.input.SnapResult): void,
		key: yfiles.system.ResourceKey
	}

	declare export interface ICollapsibleNodeStyleDecorator {
		wrapped: yfiles.drawing.INodeStyle,
		buttonLocationParameter: yfiles.graph.ILabelModelParameter,
		insets: yfiles.geometry.InsetsD
	}

	declare export interface CollapsibleNodeStyleDecorator {
		buttonLocationParameter: yfiles.graph.ILabelModelParameter,
		insets: yfiles.geometry.InsetsD,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void,
		clone(): Object,
		renderer: yfiles.drawing.INodeStyleRenderer,
		wrapped: yfiles.drawing.INodeStyle
	}

	declare export interface GeneralPathNodeStyle {
		path: yfiles.drawing.GeneralPath,
		renderer: yfiles.drawing.INodeStyleRenderer,
		brush: yfiles.system.Brush,
		pen: yfiles.system.Pen,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void,
		clone(): Object
	}

	declare export interface GeneralPathNodeStyleRenderer {
		configure(): void,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		getOutline(): yfiles.drawing.GeneralPath
	}

	declare export interface IShapeNodeStyle {
		pen: yfiles.system.Pen,
		brush: yfiles.system.Brush,
		shape: yfiles.drawing.ShapeNodeShape
	}

	declare export interface CollapsibleNodeStyleDecoratorRenderer {
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		createButton(
		ctx: yfiles.drawing.IRenderContext, expanded: boolean, size: yfiles.geometry.SizeD
	): yfiles.drawing.Visual,
		updateButton(
		ctx: yfiles.drawing.IRenderContext, expanded: boolean, size: yfiles.geometry.SizeD, oldButton: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		getButtonLocationParameter(): yfiles.graph.ILabelModelParameter,
		getButtonSize(): yfiles.geometry.SizeD,
		lookup(type: yfiles.lang.Class): Object,
		createSelectionInstaller(): yfiles.model.ISelectionInstaller,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInside(point: yfiles.geometry.PointD): boolean,
		getOutline(): yfiles.drawing.GeneralPath,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		getWrappedStyle(): yfiles.drawing.INodeStyle
	}

	declare export interface IPolylineEdgeStyle {
		pen: yfiles.system.Pen,
		smoothing: number
	}

	declare export interface ITemplateLabelStyle {
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, label: yfiles.graph.ILabel
	): yfiles.drawing.LabelTemplateContext,
		outlineShape: yfiles.drawing.GeneralPath,
		autoFlip: boolean,
		preferredSize: yfiles.geometry.SizeD
	}

	declare export interface TemplateLabelStyle {
		renderTemplateId: string,
		outlineShape: yfiles.drawing.GeneralPath,
		autoFlip: boolean,
		preferredSize: yfiles.geometry.SizeD,
		createRenderer(): yfiles.drawing.TemplateLabelStyleRenderer,
		getPreferredSize(
		label: yfiles.graph.ILabel, context: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD,
		templateStyleRenderer: yfiles.drawing.TemplateLabelStyleRenderer,
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, label: yfiles.graph.ILabel
	): yfiles.drawing.LabelTemplateContext,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.ILabel): void
	}

	declare export interface StringTemplateLabelStyle {
		svgContent: string,
		outlineShape: yfiles.drawing.GeneralPath,
		autoFlip: boolean,
		preferredSize: yfiles.geometry.SizeD,
		createRenderer(): yfiles.drawing.TemplateLabelStyleRenderer,
		getPreferredSize(
		label: yfiles.graph.ILabel, context: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD,
		templateStyleRenderer: yfiles.drawing.TemplateLabelStyleRenderer,
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, label: yfiles.graph.ILabel
	): yfiles.drawing.LabelTemplateContext,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.ILabel): void
	}

	declare export interface TemplatePortStyleRenderer {
		center: yfiles.geometry.PointD,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		arrange(portControl: yfiles.drawing.PortTemplateContext): void,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		createStyleDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		configure(): void,
		getRenderSize(): yfiles.geometry.SizeD,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		lookupContext(
		style: yfiles.drawing.ITemplatePortStyle, port: yfiles.graph.IPort, type: yfiles.lang.Class
	): Object,
		getOutlineShape(style: yfiles.drawing.ITemplatePortStyle): yfiles.drawing.GeneralPath,
		getPreferredSize(
		port: yfiles.graph.IPort, style: yfiles.drawing.ITemplatePortStyle, renderContext: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD,
		getPreferredSizeWithContext(renderContext: yfiles.drawing.IRenderContext): yfiles.geometry.SizeD
	}

	declare export interface TemplatePortStyle {
		renderTemplateId: string,
		renderSize: yfiles.geometry.SizeD,
		outlineShape: yfiles.drawing.GeneralPath,
		createRenderer(): yfiles.drawing.TemplatePortStyleRenderer,
		templateStyleRenderer: yfiles.drawing.TemplatePortStyleRenderer,
		getPreferredSize(
		port: yfiles.graph.IPort, context: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD,
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, port: yfiles.graph.IPort
	): yfiles.drawing.PortTemplateContext,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.IPort): void
	}

	declare export interface MapperBasedUserTagProvider {
		mapperRegistryTag: Object,
		getUserTag(forItem: yfiles.model.IModelItem, context: yfiles.support.ILookup): Object,
		setUserTag(
		forItem: yfiles.model.IModelItem, newTag: Object, context: yfiles.support.ILookup
	): boolean
	}

	declare export interface TemplateLabelStyleRenderer {
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		lookupContext(
		style: yfiles.drawing.ITemplateLabelStyle, label: yfiles.graph.ILabel, type: yfiles.lang.Class
	): Object,
		getOutlineShape(style: yfiles.drawing.ITemplateLabelStyle): yfiles.drawing.GeneralPath,
		getPreferredSizeWithContext(ctx: yfiles.drawing.IRenderContext): yfiles.geometry.SizeD,
		isAutoFlip(style: yfiles.drawing.ITemplateLabelStyle): boolean
	}

	declare export interface StringTemplateNodeStyle {
		svgContent: string,
		insets: yfiles.geometry.InsetsD,
		minimumSize: yfiles.geometry.SizeD,
		outlineShape: yfiles.drawing.GeneralPath,
		getPreferredSize(
		node: yfiles.graph.INode, context: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD,
		createRenderer(): yfiles.drawing.TemplateNodeStyleRenderer,
		templateStyleRenderer: yfiles.drawing.TemplateNodeStyleRenderer,
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, node: yfiles.graph.INode
	): yfiles.drawing.NodeTemplateContext,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void
	}

	declare export interface TemplateNodeStyleRenderer {
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		getOutlineShape(style: yfiles.drawing.ITemplateNodeStyle): yfiles.drawing.GeneralPath,
		getInsets(style: yfiles.drawing.ITemplateNodeStyle): yfiles.geometry.InsetsD,
		getContextLookup(style: yfiles.drawing.ITemplateNodeStyle): yfiles.support.IContextLookup,
		lookup(type: yfiles.lang.Class): Object,
		getMinimumSize(style: yfiles.drawing.ITemplateNodeStyle): yfiles.geometry.SizeD,
		getPreferredSizeWithContext(renderContext: yfiles.drawing.IRenderContext): yfiles.geometry.SizeD
	}

	declare export interface NodeTemplateContext {
		initializeFrom(
		ctx: yfiles.drawing.IRenderContext, node: yfiles.graph.INode, style: yfiles.drawing.ITemplateNodeStyle
	): void,
		updateFor(
		ctx: yfiles.drawing.IRenderContext, node: yfiles.graph.INode, style: yfiles.drawing.ITemplateNodeStyle
	): void,
		updateContent(style: yfiles.drawing.ITemplateNodeStyle, node: yfiles.graph.INode): void,
		content: Object,
		setArrangeRect(node: yfiles.graph.INode): void
	}

	declare export interface LabelTemplateContext {
		isFlipped: boolean,
		isUpsideDown: boolean,
		labelText: string,
		onLabelTextChanged(oldText: string, newText: string): void,
		writeBackLabelText(graph: yfiles.graph.IGraph, labelText: string): void,
		initializeFrom(
		ctx: yfiles.drawing.IRenderContext, label: yfiles.graph.ILabel, style: yfiles.drawing.ITemplateLabelStyle
	): void,
		updateFor(
		ctx: yfiles.drawing.IRenderContext, label: yfiles.graph.ILabel, style: yfiles.drawing.ITemplateLabelStyle
	): void,
		updateContent(style: yfiles.drawing.ITemplateLabelStyle, label: yfiles.graph.ILabel): void,
		content: Object,
		setArrangeRect(label: yfiles.graph.ILabel): void
	}

	declare export interface ITemplateNodeStyle {
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, node: yfiles.graph.INode
	): yfiles.drawing.NodeTemplateContext,
		insets: yfiles.geometry.InsetsD,
		minimumSize: yfiles.geometry.SizeD,
		outlineShape: yfiles.drawing.GeneralPath
	}

	declare export interface TemplateNodeStyle {
		renderTemplateId: string,
		insets: yfiles.geometry.InsetsD,
		minimumSize: yfiles.geometry.SizeD,
		outlineShape: yfiles.drawing.GeneralPath,
		getPreferredSize(
		node: yfiles.graph.INode, context: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD,
		createRenderer(): yfiles.drawing.TemplateNodeStyleRenderer,
		templateStyleRenderer: yfiles.drawing.TemplateNodeStyleRenderer,
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, node: yfiles.graph.INode
	): yfiles.drawing.NodeTemplateContext,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void
	}

	declare export interface StringTemplatePortStyle {
		svgContent: string,
		renderSize: yfiles.geometry.SizeD,
		outlineShape: yfiles.drawing.GeneralPath,
		createRenderer(): yfiles.drawing.TemplatePortStyleRenderer,
		templateStyleRenderer: yfiles.drawing.TemplatePortStyleRenderer,
		getPreferredSize(
		port: yfiles.graph.IPort, context: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD,
		createTemplateContext(
		ctx: yfiles.drawing.IRenderContext, port: yfiles.graph.IPort
	): yfiles.drawing.PortTemplateContext,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.IPort): void
	}

	declare export interface AbstractLabelStyleRenderer<TStyle> {
		layoutF: yfiles.geometry.IOrientedRectangle,
		layout: yfiles.geometry.IOrientedRectangle,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		createStyleDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		getPreferredSizeImpl(): yfiles.geometry.SizeD,
		getPreferredSize(
		label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle
	): yfiles.geometry.SizeD,
		isAutoFlip(): boolean,
		configure(): void
	}

	declare export interface AbstractEdgeStyleRenderer<TStyle> {
		getSourceArrowAnchor(
		arrow: yfiles.drawing.IArrow, anchorPoint: {
		value: yfiles.geometry.PointD
	}, arrowDirection: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getTargetArrowAnchor(
		arrow: yfiles.drawing.IArrow, anchorPoint: {
		value: yfiles.geometry.PointD
	}, arrowDirection: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		createStyleDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		getPathGeometry(
		edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle
	): yfiles.drawing.IPathGeometry,
		getTangent(
		ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getTangentForIndex(
		segmentIndex: number, ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getSegmentCount(): number,
		getPath(): yfiles.drawing.GeneralPath
	}

	declare export interface PortTemplateContext {
		initializeFrom(
		ctx: yfiles.drawing.IRenderContext, port: yfiles.graph.IPort, style: yfiles.drawing.ITemplatePortStyle
	): void,
		updateFor(
		ctx: yfiles.drawing.IRenderContext, port: yfiles.graph.IPort, style: yfiles.drawing.ITemplatePortStyle
	): void,
		updateContent(style: yfiles.drawing.ITemplatePortStyle, port: yfiles.graph.IPort): void,
		content: Object,
		setSize(style: yfiles.drawing.ITemplatePortStyle): void
	}

	declare export interface GraphItemTemplateContextBase<TModelItem> {
		svgElement: Element,
		setSvgElement(element: Element): void,
		bounds: yfiles.geometry.RectD,
		width: number,
		height: number,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D,
		canvas: yfiles.canvas.CanvasControl,
		onItemSelectedChanged(oldValue: boolean, newValue: boolean): void,
		itemSelected: boolean,
		onItemFocusedChanged(oldValue: boolean, newValue: boolean): void,
		itemFocused: boolean,
		onItemHighlightedChanged(oldValue: boolean, newValue: boolean): void,
		itemHighlighted: boolean,
		item: TModelItem,
		styleTag: Object,
		onPropertyChanged(propertyChangedEventArgs: yfiles.system.PropertyChangedEventArgs): void,
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void
	}

	declare export interface IUIElementStyle<TModelItem> {
		template: yfiles.drawing.DataTemplate
	}

	declare export interface AbstractNodeStyleRenderer<TStyle> {
		createStyleDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		layout: yfiles.geometry.IRectangle,
		configure(): void,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		getShapeGeometry(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.drawing.IShapeGeometry,
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		getOutline(): yfiles.drawing.GeneralPath
	}

	declare export interface StyleInstaller<TItem, TVisualStyle> {
		comparer: yfiles.collections.IComparer<TItem>,
		canvasGroupProvider: yfiles.model.ICanvasGroupProvider<yfiles.model.IModelItem>,
		install(context: yfiles.model.IInstallerContext, item: TItem): void
	}

	declare export interface InteriorStretchLabelModel {
		insets: yfiles.geometry.InsetsD,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameter(
		position: yfiles.drawing.InteriorStretchLabelModel.Position_Interface
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, labelModel: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>,
		getNodeInsets(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.geometry.InsetsD,
		getMinimumNodeSize(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.geometry.SizeD
	}

	declare export interface IEdgeStyleRenderer {
		getPathGeometry(
		edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle
	): yfiles.drawing.IPathGeometry
	}

	declare export interface IVisualStyle<TModelItem> {
		
	}

	declare export interface InteriorLabelModel {
		insets: yfiles.geometry.InsetsD,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameter(
		position: yfiles.drawing.InteriorLabelModel.Position_Interface
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getNodeInsets(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.geometry.InsetsD,
		getMinimumNodeSize(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.geometry.SizeD,
		getParameters(
		label: yfiles.graph.ILabel, labelModel: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface IArrow {
		length: number,
		cropLength: number,
		getPaintable(
		edge: yfiles.graph.IEdge, atSource: boolean, anchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD
	): yfiles.drawing.IVisualCreator,
		getBoundsProvider(
		edge: yfiles.graph.IEdge, atSource: boolean, anchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD
	): yfiles.drawing.IBoundsProvider
	}

	declare export interface IArrowOwner {
		sourceArrow: yfiles.drawing.IArrow,
		targetArrow: yfiles.drawing.IArrow
	}

	declare export interface IEdgeStyle {
		renderer: yfiles.drawing.IEdgeStyleRenderer
	}

	declare export interface RotatedSliderEdgeLabelModel {
		distanceRelativeToEdge: boolean,
		distance: number,
		autoRotationEnabled: boolean,
		angle: number,
		lookup(type: yfiles.lang.Class): Object,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameterFromSource(segmentIndex: number, segmentRatio: number): yfiles.graph.ILabelModelParameter,
		createParameterFromTarget(segmentIndex: number, segmentRatio: number): yfiles.graph.ILabelModelParameter,
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter
	}

	declare export interface SandwichLabelModel {
		yOffset: number,
		createNorthParameter(): yfiles.graph.ILabelModelParameter,
		createSouthParameter(): yfiles.graph.ILabelModelParameter,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface RotatingEdgeLabelModel {
		distance: number,
		edgeRelativeDistance: boolean,
		angle: number,
		lookup(type: yfiles.lang.Class): Object,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		createRatio(ratio: number): yfiles.graph.ILabelModelParameter
	}

	declare export interface NodeScaledPortLocationModel {
		lookup(type: yfiles.lang.Class): Object,
		getLocation(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.geometry.PointD,
		createScaledParameter(
		relativeOffsets: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		createAbsoluteParameter(
		owner: yfiles.graph.INode, location: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		createOffsetParameter(
		owner: yfiles.graph.INode, relativeLocation: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		createParameter(
		portOwner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		getContext(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.support.ILookup
	}

	declare export interface NinePositionsEdgeLabelModel {
		angle: number,
		distance: number,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameter(
		position: yfiles.drawing.NinePositionsEdgeLabelModel.Position_Interface
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface RotatedSideSliderEdgeLabelModel {
		distance: number,
		angle: number,
		distanceRelativeToEdge: boolean,
		autoRotationEnabled: boolean,
		lookup(type: yfiles.lang.Class): Object,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>,
		createParameterFromSource(
		segmentIndex: number, segmentRatio: number, rightOfEdge: boolean
	): yfiles.graph.ILabelModelParameter,
		createParameterFromTarget(
		segmentIndex: number, segmentRatio: number, rightOfEdge: boolean
	): yfiles.graph.ILabelModelParameter,
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter
	}

	declare export interface Arrow {
		type: yfiles.drawing.ArrowType,
		scale: number,
		pen: yfiles.system.Pen,
		brush: yfiles.system.Brush,
		cropLength: number,
		getPaintable(
		edge: yfiles.graph.IEdge, atSource: boolean, anchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD
	): yfiles.drawing.IVisualCreator,
		getBoundsProvider(
		edge: yfiles.graph.IEdge, atSource: boolean, anchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD
	): yfiles.drawing.IBoundsProvider,
		equalsWithOther(other: yfiles.drawing.Arrow): boolean,
		equals(obj: Object): boolean,
		hashCode(): number,
		clone(): Object,
		toString(): string
	}

	declare export interface DefaultArrow {
		cropLengthF: number,
		lengthF: number,
		scaleF: number,
		cropLength: number,
		getPaintable(
		edge: yfiles.graph.IEdge, atSource: boolean, anchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD
	): yfiles.drawing.IVisualCreator,
		getBoundsProvider(
		edge: yfiles.graph.IEdge, atSource: boolean, anchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD
	): yfiles.drawing.IBoundsProvider,
		length: number
	}

	declare export interface AnchoredPortLocationModel {
		lookup(type: yfiles.lang.Class): Object,
		getLocation(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.geometry.PointD,
		createParameter(
		portOwner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		createParameterForLocation(location: yfiles.geometry.PointD): yfiles.graph.IPortLocationModelParameter,
		createDynamicParameter(location: yfiles.geometry.IPoint): yfiles.graph.IPortLocationModelParameter,
		getContext(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.support.ILookup
	}

	declare export interface AbstractEdgeStyle {
		targetArrow: yfiles.drawing.IArrow,
		sourceArrow: yfiles.drawing.IArrow,
		renderer: yfiles.drawing.IEdgeStyleRenderer,
		clone(): Object,
		install(context: yfiles.model.IInstallerContext, edge: yfiles.graph.IEdge): void
	}

	declare export interface CompositeLabelModel {
		labelModels: yfiles.collections.IList<yfiles.graph.ILabelModel>,
		lookup(type: yfiles.lang.Class): Object,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>,
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter
	}

	declare export interface BendAnchoredPortLocationModel {
		lookup(type: yfiles.lang.Class): Object,
		getLocation(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.geometry.PointD,
		createFromSource(bendIndex: number): yfiles.graph.IPortLocationModelParameter,
		createFromTarget(bendIndex: number): yfiles.graph.IPortLocationModelParameter,
		createParameter(
		portOwner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		getContext(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.support.ILookup
	}

	declare export interface DescriptorWrapperLabelModel {
		descriptor: yfiles.graph.ILabelCandidateDescriptor,
		innerModel: yfiles.graph.ILabelModel,
		lookup(type: yfiles.lang.Class): Object,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		getDescriptor(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.graph.ILabelCandidateDescriptor,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface GenericLabelModel {
		addParameter(
		parameter: yfiles.graph.ILabelModelParameter
	): yfiles.graph.ILabelModelParameter,
		addParameterWithDescriptor(
		parameter: yfiles.graph.ILabelModelParameter, descriptor: yfiles.graph.ILabelCandidateDescriptor
	): yfiles.graph.ILabelModelParameter,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>,
		getDescriptor(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.graph.ILabelCandidateDescriptor
	}

	declare export interface FreeNodeLabelModel {
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createNodeLayoutAnchored(
		offset: yfiles.geometry.PointD, angle: number
	): yfiles.graph.ILabelModelParameter,
		createNodeCenterAnchored(
		offset: yfiles.geometry.PointD, angle: number
	): yfiles.graph.ILabelModelParameter,
		createNodeRatioAnchored(
		layoutRatio: yfiles.geometry.PointD, layoutOffset: yfiles.geometry.PointD, labelRatio: yfiles.geometry.PointD, labelOffset: yfiles.geometry.PointD, angle: number
	): yfiles.graph.ILabelModelParameter,
		createSmartNodeRatioAnchoredWithLocation(
		nodeLayout: yfiles.geometry.RectD, labelLayout: yfiles.geometry.IOrientedRectangle, referenceLocation: yfiles.geometry.PointD
	): yfiles.graph.ILabelModelParameter,
		createSmartNodeRatioAnchored(
		nodeLayout: yfiles.geometry.RectD, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter,
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface GraphModelManager {
		createNodeCanvasGroupProvider(): yfiles.model.ICanvasGroupProvider<yfiles.model.IModelItem>,
		createPortCanvasGroupProvider(): yfiles.model.ICanvasGroupProvider<yfiles.model.IModelItem>,
		createEdgeLabelCanvasGroupProvider(): yfiles.model.ICanvasGroupProvider<yfiles.model.IModelItem>,
		createNodeLabelCanvasGroupProvider(): yfiles.model.ICanvasGroupProvider<yfiles.model.IModelItem>,
		createEdgeCanvasGroupProvider(): yfiles.model.ICanvasGroupProvider<yfiles.model.IModelItem>,
		update(modelItem: yfiles.model.IModelItem): void,
		nodeGroup: yfiles.canvas.ICanvasObjectGroup,
		createNodeGroup(): yfiles.canvas.ICanvasObjectGroup,
		edgeGroup: yfiles.canvas.ICanvasObjectGroup,
		createEdgeGroup(): yfiles.canvas.ICanvasObjectGroup,
		edgeLabelGroup: yfiles.canvas.ICanvasObjectGroup,
		createEdgeLabelGroup(): yfiles.canvas.ICanvasObjectGroup,
		nodeLabelGroup: yfiles.canvas.ICanvasObjectGroup,
		createNodeLabelGroup(): yfiles.canvas.ICanvasObjectGroup,
		portGroup: yfiles.canvas.ICanvasObjectGroup,
		createPortGroup(): yfiles.canvas.ICanvasObjectGroup,
		edgeStyleInstaller: yfiles.model.IModelItemInstaller<yfiles.graph.IEdge>,
		createEdgeStyleInstaller(): yfiles.model.IModelItemInstaller<yfiles.graph.IEdge>,
		portStyleInstaller: yfiles.model.IModelItemInstaller<yfiles.graph.IPort>,
		createPortStyleInstaller(): yfiles.model.IModelItemInstaller<yfiles.graph.IPort>,
		edgeLabelInstaller: yfiles.model.IModelItemInstaller<yfiles.graph.ILabel>,
		createEdgeLabelInstaller(): yfiles.model.IModelItemInstaller<yfiles.graph.ILabel>,
		nodeLabelInstaller: yfiles.model.IModelItemInstaller<yfiles.graph.ILabel>,
		createNodeLabelInstaller(): yfiles.model.IModelItemInstaller<yfiles.graph.ILabel>,
		drawEdgesBehindGroupedNodes: boolean,
		nodeStyleInstaller: yfiles.model.IModelItemInstaller<yfiles.graph.INode>,
		createNodeStyleInstaller(): yfiles.model.IModelItemInstaller<yfiles.graph.INode>,
		contentGroup: yfiles.canvas.ICanvasObjectGroup,
		createContentGroup(): yfiles.canvas.ICanvasObjectGroup,
		comparer: yfiles.collections.IComparer<yfiles.model.IModelItem>,
		hitTestEnumerator: yfiles.drawing.IHitTestEnumerator<yfiles.model.IModelItem>,
		createHitTestEnumerator(
		hitTestContext: yfiles.canvas.ICanvasContext
	): yfiles.drawing.IHitTestEnumerator<yfiles.model.IModelItem>,
		createNodeHitTestEnumerator(
		hitTestContext: yfiles.canvas.ICanvasContext
	): yfiles.graph.INodeHitTestEnumerator,
		createEdgeHitTestEnumerator(
		hitTestContext: yfiles.canvas.ICanvasContext
	): yfiles.graph.IEdgeHitTestEnumerator,
		createLabelHitTestEnumerator(
		hitTestContext: yfiles.canvas.ICanvasContext
	): yfiles.graph.ILabelHitTestEnumerator,
		createBendHitTestEnumerator(
		hitTestContext: yfiles.canvas.ICanvasContext
	): yfiles.graph.IBendHitTestEnumerator,
		createPortHitTestEnumerator(
		hitTestContext: yfiles.canvas.ICanvasContext
	): yfiles.graph.IPortHitTestEnumerator,
		createLabeledItemHitTestEnumerator(
		hitTestContext: yfiles.canvas.ICanvasContext
	): yfiles.graph.ILabeledItemHitTestEnumerator,
		compare(item1: yfiles.model.IModelItem, item2: yfiles.model.IModelItem): number,
		getCanvasObject(item: yfiles.model.IModelItem): yfiles.canvas.ICanvasObject,
		invalidate(item: yfiles.model.IModelItem): void,
		getCanvasObjects(
		item: yfiles.model.IModelItem
	): yfiles.collections.IEnumerable<yfiles.canvas.ICanvasObject>,
		enumerateHits(
		location: yfiles.geometry.PointD
	): yfiles.collections.IEnumerator<yfiles.model.IModelItem>,
		enumerateHitsAtRoot(
		location: yfiles.geometry.PointD, root: yfiles.canvas.ICanvasObjectGroup, context: yfiles.canvas.ICanvasContext
	): yfiles.collections.IEnumerator<yfiles.model.IModelItem>,
		enumerateTypedHits<T>(
		itemType: yfiles.lang.Class, location: yfiles.geometry.PointD
	): yfiles.collections.IEnumerator<T>,
		enumerateTypedHitsAtRoot<T>(
		itemType: yfiles.lang.Class, location: yfiles.geometry.PointD, rootGroup: yfiles.canvas.ICanvasObjectGroup, context: yfiles.canvas.ICanvasContext
	): yfiles.collections.IEnumerator<T>,
		getModelItem(canvasObject: yfiles.canvas.ICanvasObject): yfiles.model.IModelItem,
		graph: yfiles.graph.IGraph,
		onGraphChanged(oldGraph: yfiles.graph.IGraph, newGraph: yfiles.graph.IGraph): void,
		getHierarchy(graph: yfiles.graph.IGraph): yfiles.graph.IHierarchy<yfiles.graph.INode>,
		useHierarchicNesting: boolean,
		getCanvasObjectGroupForNode(
		canvas: yfiles.canvas.CanvasControl, node: yfiles.graph.INode
	): yfiles.canvas.ICanvasObjectGroup,
		getCanvasObjectGroupForEdge(
		canvas: yfiles.canvas.CanvasControl, edge: yfiles.graph.IEdge
	): yfiles.canvas.ICanvasObjectGroup,
		getCanvasObjectGroupForPort(
		canvas: yfiles.canvas.CanvasControl, port: yfiles.graph.IPort
	): yfiles.canvas.ICanvasObjectGroup,
		getCanvasObjectGroupForLabel(
		canvas: yfiles.canvas.CanvasControl, label: yfiles.graph.ILabel
	): yfiles.canvas.ICanvasObjectGroup
	}

	declare export interface GenericPortLocationModel {
		lookup(type: yfiles.lang.Class): Object,
		getLocation(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.geometry.PointD,
		addParameter(
		parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.graph.IPortLocationModelParameter,
		parameters: yfiles.collections.IEnumerable<yfiles.graph.IPortLocationModelParameter>,
		createParameter(
		portOwner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		getContext(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.support.ILookup,
		add(portLocationModelParameter: yfiles.graph.IPortLocationModelParameter): void,
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.graph.IPortLocationModelParameter>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getParameters(
		port: yfiles.graph.IPort, model: yfiles.graph.IPortLocationModel
	): yfiles.collections.IEnumerable<yfiles.graph.IPortLocationModelParameter>
	}

	declare export interface ExteriorLabelModel {
		insets: yfiles.geometry.InsetsD,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameter(
		position: yfiles.drawing.ExteriorLabelModel.Position_Interface
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, labelModel: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface FreeLabelModel {
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createAbsolute(
		anchorLocation: yfiles.geometry.PointD, angle: number
	): yfiles.graph.ILabelModelParameter,
		createDynamic(
		orientedRectangle: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter,
		createAnchored(
		location: yfiles.geometry.IPoint, angle: number
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter
	}

	declare export interface FreeEdgeLabelModel {
		edgeRelativeAngle: boolean,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createEdgeAnchored(
		ratio: number, distance: number, angle: number
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter
	}

	declare export interface IEdgeIntersectionCalculator {
		cropEdgePath(
		edge: yfiles.graph.IEdge, atSource: boolean, arrow: yfiles.drawing.IArrow, edgePath: {
		value: yfiles.drawing.GeneralPath
	}
	): void
	}

	declare export interface INodeStyleRenderer {
		getShapeGeometry(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.drawing.IShapeGeometry
	}

	declare export interface IPortStyle {
		renderer: yfiles.drawing.IPortStyleRenderer
	}

	declare export interface IPathGeometry {
		getTangent(
		ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getTangentForIndex(
		segmentIndex: number, ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getSegmentCount(): number,
		getPath(): yfiles.drawing.GeneralPath
	}

	declare export interface ILabelStyleRenderer {
		getPreferredSize(
		label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle
	): yfiles.geometry.SizeD
	}

	declare export interface ILabelStyle {
		renderer: yfiles.drawing.ILabelStyleRenderer
	}

	declare export interface INodeStyle {
		renderer: yfiles.drawing.INodeStyleRenderer
	}

	declare export interface IInsetsProvider<T> {
		getInsets(item: T): yfiles.geometry.InsetsD
	}

	declare export interface IPortStyleRenderer {
		
	}

	declare export interface NodeStyleDescriptor {
		getVisualCreator(forUserObject: Object): yfiles.drawing.IVisualCreator,
		isDirty(
		canvasObject: yfiles.canvas.ICanvasObject, context: yfiles.canvas.ICanvasContext
	): boolean,
		getBoundsProvider(forUserObject: Object): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(forUserObject: Object): yfiles.drawing.IVisibilityTest,
		getHitTestable(forUserObject: Object): yfiles.drawing.IHitTestable
	}

	declare export interface LabelStyleDescriptor {
		getVisualCreator(forUserObject: Object): yfiles.drawing.IVisualCreator,
		isDirty(
		canvasObject: yfiles.canvas.ICanvasObject, context: yfiles.canvas.ICanvasContext
	): boolean,
		getBoundsProvider(forUserObject: Object): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(forUserObject: Object): yfiles.drawing.IVisibilityTest,
		getHitTestable(forUserObject: Object): yfiles.drawing.IHitTestable
	}

	declare export interface PortStyleDescriptor {
		getVisualCreator(forUserObject: Object): yfiles.drawing.IVisualCreator,
		isDirty(
		canvasObject: yfiles.canvas.ICanvasObject, context: yfiles.canvas.ICanvasContext
	): boolean,
		getBoundsProvider(forUserObject: Object): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(forUserObject: Object): yfiles.drawing.IVisibilityTest,
		getHitTestable(forUserObject: Object): yfiles.drawing.IHitTestable
	}

	declare export interface OverviewGraphVisualCreator {
		createEdgeStyle(): yfiles.drawing.IEdgeStyle,
		createNodeStyle(): yfiles.drawing.INodeStyle,
		createGroupNodeStyle(): yfiles.drawing.INodeStyle,
		overviewNodeStyle: yfiles.drawing.INodeStyle,
		overviewGroupNodeStyle: yfiles.drawing.INodeStyle,
		overviewEdgeStyle: yfiles.drawing.IEdgeStyle,
		getOverviewNodeStyle(node: yfiles.graph.INode): yfiles.drawing.INodeStyle,
		getOverviewGroupNodeStyle(node: yfiles.graph.INode): yfiles.drawing.INodeStyle,
		getOverviewEdgeStyle(edge: yfiles.graph.IEdge): yfiles.drawing.IEdgeStyle,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		getNodeVisualCreator(
		ctx: yfiles.drawing.IRenderContext, node: yfiles.graph.INode
	): yfiles.drawing.IVisualCreator,
		getGroupNodeVisualCreator(
		ctx: yfiles.drawing.IRenderContext, node: yfiles.graph.INode
	): yfiles.drawing.IVisualCreator,
		getEdgeVisualCreator(
		ctx: yfiles.drawing.IRenderContext, edge: yfiles.graph.IEdge
	): yfiles.drawing.IVisualCreator,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual
	}

	declare export interface ISimpleLabelStyle {
		typeface: yfiles.system.Typeface,
		textBrush: yfiles.system.Brush,
		autoFlip: boolean,
		backgroundPen: yfiles.system.Pen,
		backgroundBrush: yfiles.system.Brush,
		verticalTextAlignment: yfiles.system.VerticalAlignment,
		textAlignment: yfiles.system.TextAlignment,
		clipText: boolean,
		trimming: yfiles.system.StringTrimming
	}

	declare export interface IShapeGeometry {
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		getOutline(): yfiles.drawing.GeneralPath
	}

	declare export interface IStyleRenderer<TModelItem, TStyle> {
		getVisualCreator(item: TModelItem, style: TStyle): yfiles.drawing.IVisualCreator,
		getBoundsProvider(item: TModelItem, style: TStyle): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(item: TModelItem, style: TStyle): yfiles.drawing.IVisibilityTest,
		getHitTestable(item: TModelItem, style: TStyle): yfiles.drawing.IHitTestable,
		getMarqueeTestable(item: TModelItem, style: TStyle): yfiles.drawing.IMarqueeTestable,
		getContext(item: TModelItem, style: TStyle): yfiles.support.ILookup
	}

	declare export interface ISimplePortStyle {
		brush: yfiles.system.Brush
	}

	declare export interface SmartEdgeLabelModel {
		autoRotation: boolean,
		angle: number,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createParameterFromSource(
		segmentIndex: number, distance: number, segmentRatio: number
	): yfiles.graph.ILabelModelParameter,
		createParameterFromTarget(
		segmentIndex: number, distance: number, segmentRatio: number
	): yfiles.graph.ILabelModelParameter,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		lookup(type: yfiles.lang.Class): Object,
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter
	}

	declare export interface SliderEdgeLabelModel {
		angle: number,
		edgeRelativeDistance: boolean,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		distance: number,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameterFromSource(segmentIndex: number, segmentRatio: number): yfiles.graph.ILabelModelParameter,
		createParameterFromTarget(segmentIndex: number, segmentRatio: number): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface SegmentRatioPortLocationModel {
		getLocation(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.geometry.PointD,
		createParameter(
		portOwner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		createFromSource(ratio: number, segmentIndex: number): yfiles.graph.IPortLocationModelParameter,
		createFromTarget(ratio: number, segmentIndex: number): yfiles.graph.IPortLocationModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getContext(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.support.ILookup
	}

	declare export interface SideSliderEdgeLabelModel {
		distance: number,
		edgeRelativePosition: boolean,
		angle: number,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameterLeftFromSource(segmentIndex: number, segmentRatio: number): yfiles.graph.ILabelModelParameter,
		createParameterRightFromSource(segmentIndex: number, segmentRatio: number): yfiles.graph.ILabelModelParameter,
		createParameterLeftFromTarget(segmentIndex: number, segmentRatio: number): yfiles.graph.ILabelModelParameter,
		createParameterRightFromTarget(segmentIndex: number, segmentRatio: number): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface CanvasOverviewGraphVisualCreator {
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		paintNode(
		ctx: Object, renderContext: yfiles.drawing.IRenderContext, node: yfiles.graph.INode
	): void,
		paintGroupNode(
		ctx: Object, renderContext: yfiles.drawing.IRenderContext, node: yfiles.graph.INode
	): void,
		paintEdge(
		ctx: Object, renderContext: yfiles.drawing.IRenderContext, edge: yfiles.graph.IEdge
	): void
	}

	declare export interface EdgeStyleDescriptor {
		getVisualCreator(forUserObject: Object): yfiles.drawing.IVisualCreator,
		isDirty(
		canvasObject: yfiles.canvas.ICanvasObject, context: yfiles.canvas.ICanvasContext
	): boolean,
		getBoundsProvider(forUserObject: Object): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(forUserObject: Object): yfiles.drawing.IVisibilityTest,
		getHitTestable(forUserObject: Object): yfiles.drawing.IHitTestable
	}

	declare export interface EdgeSelectionRenderer {
		install(context: yfiles.model.IInstallerContext, item: Object): void,
		getPen(
		context: yfiles.model.IInstallerContext, edge: yfiles.graph.IEdge
	): yfiles.system.Pen,
		getBendDrawing(
		context: yfiles.model.IInstallerContext, edge: yfiles.graph.IEdge
	): yfiles.drawing.DataTemplate
	}

	declare export interface IGroupBoundsCalculator {
		calculateBounds(
		hierarchy: yfiles.graph.IHierarchy<yfiles.graph.INode>, groupNode: yfiles.graph.INode
	): yfiles.geometry.RectD
	}

	declare export interface IGeneralPathNodeStyle {
		path: yfiles.drawing.GeneralPath,
		brush: yfiles.system.Brush,
		pen: yfiles.system.Pen
	}

	declare export interface DefaultPositionHandler {
		applyPosition(location: yfiles.geometry.PointD): boolean,
		x: number,
		y: number,
		location: yfiles.geometry.IPoint,
		setPosition(location: yfiles.geometry.PointD): void,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void
	}

	declare export interface EdgeHighlightRenderer {
		getPen(
		context: yfiles.model.IInstallerContext, edge: yfiles.graph.IEdge
	): yfiles.system.Pen,
		getBendDrawing(
		context: yfiles.model.IInstallerContext, edge: yfiles.graph.IEdge
	): yfiles.drawing.DataTemplate
	}

	declare export interface EdgeFocusIndicatorRenderer {
		getPen(
		context: yfiles.model.IInstallerContext, edge: yfiles.graph.IEdge
	): yfiles.system.Pen,
		getBendDrawing(
		context: yfiles.model.IInstallerContext, edge: yfiles.graph.IEdge
	): yfiles.drawing.DataTemplate
	}

	declare export interface ITaggedStyleBase<TModelItem> {
		styleTag: Object,
		userTagProvider: yfiles.drawing.IUserTagProvider,
		contextLookup: yfiles.support.IContextLookup
	}

	declare export interface IRenderContext {
		canvas: yfiles.canvas.CanvasControl,
		clip: yfiles.geometry.RectD,
		viewTransform: yfiles.geometry.Matrix2D,
		worldTransform: yfiles.geometry.Matrix2D,
		transform: yfiles.geometry.Matrix2D,
		toViewCoordinates(worldPoint: yfiles.geometry.PointD): yfiles.geometry.PointD,
		defsElement: Element,
		defsManager: yfiles.canvas.DefsManager
	}

	declare export interface VoidVisualCreator {
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual
	}

	declare export interface IVisualCreator {
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual
	}

	declare export interface MoveTo {
		point: yfiles.geometry.PointD
	}

	declare export interface GeneralPathMarkupExtension {
		provideValue(serviceProvider: yfiles.support.ILookup): Object,
		addChild(value: Object): void,
		items: yfiles.objectcollections.IList,
		addText(text: string): void
	}

	declare export interface IVisibilityTest {
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean
	}

	declare export interface IBoundsProvider {
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD
	}

	declare export interface IHitTestable {
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean
	}

	declare export interface MarqueeTestable {
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean
	}

	declare export interface IMarqueeTestable {
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean
	}

	declare export interface ImageSupport {
		
	}

	declare export interface LineTo {
		point: yfiles.geometry.PointD
	}

	declare export interface RectangularHighlightInstaller {
		getTemplateKey(): yfiles.system.ResourceKey
	}

	declare export interface RectangularFocusInstaller {
		getTemplateKey(): yfiles.system.ResourceKey
	}

	declare export interface RectangleMarqueeTestable {
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean
	}

	declare export interface RectangularSelectionInstaller {
		clearFillProperty: boolean,
		rectangleTemplate: yfiles.drawing.DataTemplate,
		install(context: yfiles.model.IInstallerContext, item: Object): void,
		getTemplateKey(): yfiles.system.ResourceKey,
		getRectangle(userObject: Object): yfiles.geometry.IRectangle
	}

	declare export interface Close {
		
	}

	declare export interface QuadTo {
		point: yfiles.geometry.PointD,
		controlPoint: yfiles.geometry.PointD
	}

	declare export interface CubicTo {
		point: yfiles.geometry.PointD,
		controlPoint2: yfiles.geometry.PointD,
		controlPoint1: yfiles.geometry.PointD
	}

	declare export interface OrientedRectangleHighlightInstaller {
		getTemplateKey(): yfiles.system.ResourceKey
	}

	declare export interface PointSelectionInstaller {
		pen: yfiles.system.Pen,
		brush: yfiles.system.Brush,
		getCenterPoint(userObject: Object): yfiles.geometry.IPoint,
		install(context: yfiles.model.IInstallerContext, item: Object): void
	}

	declare export interface OrientedRectangleFocusInstaller {
		getTemplateKey(): yfiles.system.ResourceKey
	}

	declare export interface OrientedRectangleSelectionInstaller {
		rectangleTemplate: yfiles.drawing.DataTemplate,
		install(context: yfiles.model.IInstallerContext, item: Object): void,
		createDescriptor(template: yfiles.drawing.DataTemplate): yfiles.canvas.ICanvasObjectDescriptor,
		getTemplateKey(): yfiles.system.ResourceKey,
		getRectangle(userObject: Object): yfiles.geometry.IOrientedRectangle
	}

	declare export interface SvgDefsUtil {
		
	}

	declare export interface GridVisualCreator {
		abberationTolerance: number,
		gridStyle: yfiles.drawing.GridStyle,
		gridInfo: yfiles.canvas.GridInfo,
		visible: boolean,
		pen: yfiles.system.Pen,
		visibilityThreshold: number,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual
	}

	declare export interface GeneralPath {
		equalsTyped(path: yfiles.drawing.GeneralPath): boolean,
		lastX: number,
		lastCoordinate: yfiles.geometry.PointD,
		lastY: number,
		findRayIntersection(anchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD): number,
		findEpsRayIntersection(
		anchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD, eps: number
	): number,
		createVisual(
		brush: yfiles.system.Brush, pen: yfiles.system.Pen, matrix: yfiles.geometry.Matrix2D, fillMode: yfiles.drawing.FillMode, context: yfiles.canvas.ICanvasContext
	): yfiles.drawing.Visual,
		updatePath(
		visual: yfiles.drawing.PathVisual, brush: yfiles.system.Brush, pen: yfiles.system.Pen, matrix: yfiles.geometry.Matrix2D, fillMode: yfiles.drawing.FillMode, context: yfiles.canvas.ICanvasContext
	): void,
		createGeometry(fillMode: yfiles.drawing.FillMode): string,
		createGeometryWithMatrix(matrix: yfiles.geometry.Matrix2D, fillMode: yfiles.drawing.FillMode): string,
		findLineIntersection(lp1: yfiles.geometry.PointD, lp2: yfiles.geometry.PointD): number,
		findEpsLineIntersection(lp1: yfiles.geometry.PointD, lp2: yfiles.geometry.PointD, eps: number): number,
		isEmpty(): boolean,
		isVisible(): boolean,
		moveToValues(x: number, y: number): void,
		moveToPoint(point: yfiles.geometry.IPoint): void,
		moveTo(point: yfiles.geometry.PointD): void,
		appendRectangle(rectangle: yfiles.geometry.IRectangle, connect: boolean): void,
		appendOrientedRectangle(rectangle: yfiles.geometry.IOrientedRectangle, connect: boolean): void,
		append(other: yfiles.drawing.GeneralPath, connect: boolean): void,
		prepend(other: yfiles.drawing.GeneralPath, connect: boolean): void,
		appendAt(
		other: yfiles.drawing.GeneralPath, beginIndex: number, endIndex: number, connect: boolean
	): void,
		length: number,
		lineToValues(x: number, y: number): void,
		lineToPoint(p: yfiles.geometry.IPoint): void,
		lineTo(p: yfiles.geometry.PointD): void,
		quadToValues(cx: number, cy: number, x: number, y: number): void,
		quadToPoints(center: yfiles.geometry.IPoint, p: yfiles.geometry.IPoint): void,
		quadTo(center: yfiles.geometry.PointD, p: yfiles.geometry.PointD): void,
		flatten(eps: number): yfiles.drawing.GeneralPath,
		cubicToValues(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number): void,
		cubicTo(
		c1: yfiles.geometry.PointD, c2: yfiles.geometry.PointD, p: yfiles.geometry.PointD
	): void,
		cubicToPoints(
		c1: yfiles.geometry.IPoint, c2: yfiles.geometry.IPoint, p: yfiles.geometry.IPoint
	): void,
		close(): void,
		createCursor(): yfiles.drawing.GeneralPath.PathCursor,
		ensureCapacity(coords: number): void,
		clear(): void,
		createPathVisual(transform: yfiles.geometry.Matrix2D): yfiles.drawing.PathVisual,
		getPoint(ratio: number): yfiles.geometry.PointD,
		getTangent(
		ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getSegmentTangent(
		segmentIndex: number, ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getSegmentCount(): number,
		getLength(): number,
		getEpsBounds(eps: number): yfiles.geometry.RectD,
		getBounds(): yfiles.geometry.RectD,
		areaContains(p: yfiles.geometry.PointD): boolean,
		areaContainsPoint(p: yfiles.geometry.IPoint): boolean,
		areaEpsContains(p: yfiles.geometry.PointD, eps: number): boolean,
		pathContains(p: yfiles.geometry.PointD, eps: number): boolean,
		cropAfter(cursor: yfiles.drawing.GeneralPath.PathCursor): void,
		compress(): void,
		cropBefore(cursor: yfiles.drawing.GeneralPath.PathCursor): void,
		intersects(rect: yfiles.geometry.RectD, eps: number): boolean,
		mayIntersectClip(clip: yfiles.geometry.RectD, width: number): boolean,
		createGeneralPath(transform: yfiles.geometry.Matrix2D): yfiles.drawing.GeneralPath,
		transform(transform: yfiles.geometry.Matrix2D): void,
		appendEllipse(bounds: yfiles.geometry.IRectangle, connect: boolean): void,
		clone(): Object
	}

	declare export interface BoundsProvider {
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD
	}

	declare export interface RectangleTemplate {
		loadContent(ctx: yfiles.canvas.ICanvasContext): yfiles.drawing.ArrangeVisual,
		clone(): Object
	}

	declare export interface VisibilityTest {
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean
	}

	declare export interface HitTestable {
		
	}

	declare export interface StripeHitTestEnumerator {
		tableRenderingOrder: yfiles.drawing.TableRenderingOrder,
		enumerateHits(
		context: yfiles.canvas.ICanvasContext, location: yfiles.geometry.PointD, node: yfiles.graph.INode
	): yfiles.collections.IEnumerable<yfiles.graph.StripeSubregionDescriptor>
	}

	declare export interface SimpleLabelStyleRenderer {
		getVerticalAlignment(): yfiles.system.VerticalAlignment,
		getTextAlignment(): yfiles.system.TextAlignment,
		isClippingText(): boolean,
		getTrimming(): yfiles.system.StringTrimming,
		isAutoFlip(): boolean,
		textRenderSupport: yfiles.drawing.TextRenderSupport,
		getPreferredSizeImpl(): yfiles.geometry.SizeD,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual
	}

	declare export interface IconLabelStyleRenderer {
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		getIconSize(): yfiles.geometry.SizeD,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		createStyleDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		configure(): void,
		getInnerStyle(): yfiles.drawing.ILabelStyle,
		getIcon(): yfiles.drawing.ImageSource,
		getInnerStyleInsets(): yfiles.geometry.InsetsD,
		isAutoFlip(): boolean,
		getIconPlacement(): yfiles.graph.ILabelModelParameter,
		shouldHitTestIcon(): boolean,
		getPreferredSizeImpl(): yfiles.geometry.SizeD,
		getPreferredSize(
		label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle
	): yfiles.geometry.SizeD
	}

	declare export interface SimplePortStyle {
		renderer: yfiles.drawing.IPortStyleRenderer,
		brush: yfiles.system.Brush,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.IPort): void,
		clone(): Object
	}

	declare export interface IconLabelStyle {
		icon: yfiles.drawing.ImageSource,
		iconSize: yfiles.geometry.SizeD,
		iconPlacement: yfiles.graph.ILabelModelParameter,
		innerStyle: yfiles.drawing.ILabelStyle,
		innerStyleInsets: yfiles.geometry.InsetsD,
		renderer: yfiles.drawing.ILabelStyleRenderer,
		autoFlip: boolean,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.ILabel): void,
		clone(): Object
	}

	declare export interface ShapeNodeStyle {
		pen: yfiles.system.Pen,
		brush: yfiles.system.Brush,
		shape: yfiles.drawing.ShapeNodeShape,
		renderer: yfiles.drawing.INodeStyleRenderer,
		clone(): Object,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void
	}

	declare export interface IIconLabelStyle {
		icon: yfiles.drawing.ImageSource,
		iconSize: yfiles.geometry.SizeD,
		iconPlacement: yfiles.graph.ILabelModelParameter,
		innerStyle: yfiles.drawing.ILabelStyle,
		innerStyleInsets: yfiles.geometry.InsetsD,
		autoFlip: boolean
	}

	declare export interface SimpleLabelStyle {
		backgroundBrush: yfiles.system.Brush,
		verticalTextAlignment: yfiles.system.VerticalAlignment,
		textAlignment: yfiles.system.TextAlignment,
		clipText: boolean,
		trimming: yfiles.system.StringTrimming,
		backgroundPen: yfiles.system.Pen,
		renderer: yfiles.drawing.ILabelStyleRenderer,
		typeface: yfiles.system.Typeface,
		autoFlip: boolean,
		textBrush: yfiles.system.Brush,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.ILabel): void,
		clone(): Object
	}

	declare export interface ArcEdgeStyle {
		pen: yfiles.system.Pen,
		height: number,
		ratio: boolean,
		provideHeightHandle: boolean,
		clone(): Object,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.IEdge): void
	}

	declare export interface EdgeStyleDecorationInstaller {
		zoomMode: yfiles.drawing.DecorationZoomMode,
		edgeStyle: yfiles.drawing.IEdgeStyle,
		install(context: yfiles.model.IInstallerContext, item: Object): void
	}

	declare export interface ArcEdgeStyleRenderer {
		configure(): void,
		getHeight(): number,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		lookup(type: yfiles.lang.Class): Object,
		isRatio(): boolean,
		getPen(): yfiles.system.Pen,
		getTangent(
		ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getTangentForIndex(
		segmentIndex: number, ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		cropPath(pathToCrop: {
		value: yfiles.drawing.GeneralPath
	}): void,
		getSegmentCount(): number,
		addBridges: boolean,
		createPath(): yfiles.drawing.GeneralPath,
		getTargetArrow(): yfiles.drawing.IArrow,
		getSourceArrow(): yfiles.drawing.IArrow
	}

	declare export interface SimplePortStyleRenderer {
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		createStyleDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		configure(): void,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual
	}

	declare export interface TextRenderSupport {
		measureModeOverride: yfiles.drawing.TextRenderSupport.TextMeasureMode_Interface,
		determineMeasureMode(
		typeface: yfiles.system.Typeface
	): yfiles.drawing.TextRenderSupport.TextMeasureMode_Interface,
		getTextSize(text: string, typeface: yfiles.system.Typeface): yfiles.geometry.SizeD,
		getTextSizeFromExistingElement(
		text: string, typeface: yfiles.system.Typeface, existingElement: SVGTextElement
	): yfiles.geometry.SizeD,
		placeText(
		targetElement: SVGTextElement, text: string, typeface: yfiles.system.Typeface, maxSize: yfiles.geometry.SizeD, stringTrimming: yfiles.system.StringTrimming
	): string,
		isLastLine(
		textElement: SVGTextElement, typeface: yfiles.system.Typeface, calculatedTextHeight: number, maxHeight: number
	): boolean
	}

	declare export interface ShapeNodeStyleRenderer {
		roundRectArcRadius: number,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		getShape(): yfiles.drawing.ShapeNodeShape,
		getBrush(): yfiles.system.Brush,
		getPen(): yfiles.system.Pen,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		configure(): void,
		getOutline(): yfiles.drawing.GeneralPath
	}

	declare export interface NodeStylePortStyleAdapter {
		renderer: yfiles.drawing.IPortStyleRenderer,
		nodeStyle: yfiles.drawing.INodeStyle,
		renderSize: yfiles.geometry.SizeD,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.IPort): void,
		clone(): Object
	}

	declare export interface NodeStyleLabelStyleAdapter {
		renderer: yfiles.drawing.ILabelStyleRenderer,
		nodeStyle: yfiles.drawing.INodeStyle,
		labelStyle: yfiles.drawing.ILabelStyle,
		autoFlip: boolean,
		labelStyleInsets: yfiles.geometry.InsetsD,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.ILabel): void,
		clone(): Object
	}

	declare export interface IUserTagProvider {
		getUserTag(forItem: yfiles.model.IModelItem, context: yfiles.support.ILookup): Object,
		setUserTag(
		forItem: yfiles.model.IModelItem, newTag: Object, context: yfiles.support.ILookup
	): boolean
	}

	declare export interface TagOwnerUserTagProvider {
		getUserTag(item: yfiles.model.IModelItem, context: yfiles.support.ILookup): Object,
		setUserTag(
		forItem: yfiles.model.IModelItem, newTag: Object, context: yfiles.support.ILookup
	): boolean
	}

	declare export interface ShapedLabelStyleRendererBase<TLabelStyle> {
		layout: yfiles.geometry.IOrientedRectangle,
		lookup(type: yfiles.lang.Class): Object,
		lookupContext(
		style: TLabelStyle, label: yfiles.graph.ILabel, type: yfiles.lang.Class
	): Object,
		getOutlineShape(labelStyle: TLabelStyle): yfiles.drawing.GeneralPath,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		createStyleDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		getPreferredSize(
		label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle
	): yfiles.geometry.SizeD,
		getPreferredSizeWithLabelStyleAndRenderContext(
		label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle, renderContext: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD,
		arrange(element: yfiles.drawing.ArrangeVisual): void,
		getPreferredSizeWithContext(renderContext: yfiles.drawing.IRenderContext): yfiles.geometry.SizeD,
		isAutoFlip(labelStyle: TLabelStyle): boolean,
		configure(): void
	}

	declare export interface ShapedNodeStyleRendererBase<TNodeStyle> {
		lookup(type: yfiles.lang.Class): Object,
		getOutlineShape(style: TNodeStyle): yfiles.drawing.GeneralPath,
		getInsets(style: TNodeStyle): yfiles.geometry.InsetsD,
		getContextLookup(style: TNodeStyle): yfiles.support.IContextLookup,
		getShapeGeometry(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.drawing.IShapeGeometry,
		getMarqueeTestable(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.drawing.IMarqueeTestable,
		getVisibilityTest(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.drawing.IVisibilityTest,
		getBoundsProvider(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.drawing.IBoundsProvider,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getHitTestable(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.drawing.IHitTestable,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		getOutline(): yfiles.drawing.GeneralPath,
		getPreferredSizeImpl(): yfiles.geometry.SizeD,
		getPreferredSizeWithContext(renderContext: yfiles.drawing.IRenderContext): yfiles.geometry.SizeD,
		getPreferredSize(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.geometry.SizeD,
		getPreferredSizeWithNodeStyleAndContext(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle, context: yfiles.drawing.IRenderContext
	): yfiles.geometry.SizeD
	}

	declare export interface ShadowNodeStyleDecorator {
		wrapped: yfiles.drawing.INodeStyle,
		renderer: yfiles.drawing.INodeStyleRenderer,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void,
		clone(): Object
	}

	declare export interface PathBasedEdgeStyleRenderer<TStyle> {
		pathF: yfiles.drawing.GeneralPath,
		getTargetArrow(): yfiles.drawing.IArrow,
		getSourceArrow(): yfiles.drawing.IArrow,
		getSourceArrowAnchor(
		arrow: yfiles.drawing.IArrow, anchorPoint: {
		value: yfiles.geometry.PointD
	}, arrowDirection: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getTargetArrowAnchor(
		arrow: yfiles.drawing.IArrow, anchorPoint: {
		value: yfiles.geometry.PointD
	}, arrowDirection: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		cropPath(pathToCrop: {
		value: yfiles.drawing.GeneralPath
	}): void,
		createPath(): yfiles.drawing.GeneralPath,
		configure(): void,
		getAddBridgesCallback(): yfiles.model.IAddBridgesCallback,
		addBridges: boolean,
		lookup(type: yfiles.lang.Class): Object,
		getObstacles(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.GeneralPath,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		getSmoothing(): number,
		getPen(): yfiles.system.Pen,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getHitTestable(
		item: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle
	): yfiles.drawing.IHitTestable,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		createSelfLoopPath(roundSelfLoop: boolean): yfiles.drawing.GeneralPath,
		selfLoopDistance: number,
		getPath(): yfiles.drawing.GeneralPath
	}

	declare export interface PolylineEdgeStyleRenderer {
		createPath(): yfiles.drawing.GeneralPath,
		getSmoothing(): number,
		getPen(): yfiles.system.Pen,
		getTangent(
		ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getTangentForIndex(
		segmentIndex: number, ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getSegmentCount(): number,
		getTargetArrow(): yfiles.drawing.IArrow,
		getSourceArrow(): yfiles.drawing.IArrow
	}

	declare export interface PolylineEdgeStyle {
		pen: yfiles.system.Pen,
		smoothing: number,
		clone(): Object,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.IEdge): void
	}

	declare export interface ITableNodeStyle {
		backgroundStyle: yfiles.drawing.INodeStyle,
		tableProvider: yfiles.drawing.ITableProvider
	}

	declare export interface ITableProvider {
		getTable(node: yfiles.graph.INode, context: yfiles.support.ILookup): yfiles.graph.ITable,
		setTable(
		node: yfiles.graph.INode, table: yfiles.graph.ITable, context: yfiles.support.ILookup
	): boolean
	}

	declare export interface AbstractTableNodeStyle {
		tableRenderingOrder: yfiles.drawing.TableRenderingOrder,
		backgroundStyle: yfiles.drawing.INodeStyle,
		tableProvider: yfiles.drawing.ITableProvider,
		createVisual(
		node: yfiles.graph.INode, renderContext: yfiles.drawing.IRenderContext
	): yfiles.canvas.CanvasContainer,
		updateVisual(
		node: yfiles.graph.INode, renderContext: yfiles.drawing.IRenderContext, oldVisual: yfiles.canvas.CanvasContainer
	): yfiles.canvas.CanvasContainer,
		lookup(node: yfiles.graph.INode, type: yfiles.lang.Class): Object,
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		onPropertyChanged(ea: yfiles.system.PropertyChangedEventArgs): void,
		clone(): Object
	}

	declare export interface SimpleAbstractPortStyle<TVisual> {
		renderer: yfiles.drawing.IPortStyleRenderer,
		createVisual(
		port: yfiles.graph.IPort, renderContext: yfiles.drawing.IRenderContext
	): TVisual,
		updateVisual(
		port: yfiles.graph.IPort, renderContext: yfiles.drawing.IRenderContext, oldVisual: TVisual
	): TVisual,
		getBounds(
		port: yfiles.graph.IPort, canvasContext: yfiles.canvas.ICanvasContext
	): yfiles.geometry.RectD,
		isVisible(
		port: yfiles.graph.IPort, clip: yfiles.geometry.RectD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		isHit(
		port: yfiles.graph.IPort, p: yfiles.geometry.PointD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		isInBox(
		port: yfiles.graph.IPort, box: yfiles.geometry.RectD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		lookup(port: yfiles.graph.IPort, type: yfiles.lang.Class): Object,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.IPort): void,
		clone(): Object
	}

	declare export interface SimpleAbstractEdgeStyle<TVisual> {
		renderer: yfiles.drawing.IEdgeStyleRenderer,
		createVisual(
		edge: yfiles.graph.IEdge, renderContext: yfiles.drawing.IRenderContext
	): TVisual,
		updateVisual(
		edge: yfiles.graph.IEdge, renderContext: yfiles.drawing.IRenderContext, oldVisual: TVisual
	): TVisual,
		getBounds(
		edge: yfiles.graph.IEdge, canvasContext: yfiles.canvas.ICanvasContext
	): yfiles.geometry.RectD,
		isVisible(
		edge: yfiles.graph.IEdge, clip: yfiles.geometry.RectD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		isHit(
		edge: yfiles.graph.IEdge, p: yfiles.geometry.PointD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		isInBox(
		edge: yfiles.graph.IEdge, box: yfiles.geometry.RectD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		lookup(edge: yfiles.graph.IEdge, type: yfiles.lang.Class): Object,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.IEdge): void,
		clone(): Object,
		getTangent(
		edge: yfiles.graph.IEdge, ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getTangentForSegment(
		edge: yfiles.graph.IEdge, segmentIndex: number, ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getPath(edge: yfiles.graph.IEdge): yfiles.drawing.GeneralPath,
		getSegmentCount(edge: yfiles.graph.IEdge): number,
		getTargetArrowAnchor(
		path: yfiles.drawing.GeneralPath, arrow: yfiles.drawing.IArrow, anchorPoint: {
		value: yfiles.geometry.PointD
	}, arrowDirection: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getSourceArrowAnchor(
		path: yfiles.drawing.GeneralPath, arrow: yfiles.drawing.IArrow, anchorPoint: {
		value: yfiles.geometry.PointD
	}, arrowDirection: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		cropPath(
		edge: yfiles.graph.IEdge, sourceArrow: yfiles.drawing.IArrow, targetArrow: yfiles.drawing.IArrow, pathToCrop: {
		value: yfiles.drawing.GeneralPath
	}
	): void,
		addArrows(
		context: yfiles.drawing.IRenderContext, container: yfiles.canvas.CanvasContainer, edge: yfiles.graph.IEdge, edgePath: yfiles.drawing.GeneralPath, sourceArrow: yfiles.drawing.IArrow, targetArrow: yfiles.drawing.IArrow
	): void,
		updateArrows(
		context: yfiles.drawing.IRenderContext, container: yfiles.canvas.CanvasContainer, edge: yfiles.graph.IEdge, edgePath: yfiles.drawing.GeneralPath, sourceArrow: yfiles.drawing.IArrow, targetArrow: yfiles.drawing.IArrow
	): void
	}

	declare export interface SimpleAbstractLabelStyle<TVisual> {
		renderer: yfiles.drawing.ILabelStyleRenderer,
		arrangeByLayout(
		visual: yfiles.drawing.Visual, layout: yfiles.geometry.IOrientedRectangle, autoFlip: boolean
	): void,
		createVisual(
		label: yfiles.graph.ILabel, renderContext: yfiles.drawing.IRenderContext
	): TVisual,
		updateVisual(
		label: yfiles.graph.ILabel, renderContext: yfiles.drawing.IRenderContext, oldVisual: TVisual
	): TVisual,
		getBounds(
		label: yfiles.graph.ILabel, canvasContext: yfiles.canvas.ICanvasContext
	): yfiles.geometry.RectD,
		isVisible(
		label: yfiles.graph.ILabel, clip: yfiles.geometry.RectD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		isHit(
		label: yfiles.graph.ILabel, p: yfiles.geometry.PointD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		isInBox(
		label: yfiles.graph.ILabel, box: yfiles.geometry.RectD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		lookup(label: yfiles.graph.ILabel, type: yfiles.lang.Class): Object,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.ILabel): void,
		clone(): Object,
		getPreferredSize(label: yfiles.graph.ILabel): yfiles.geometry.SizeD
	}

	declare export interface SimpleAbstractNodeStyle<TVisual> {
		renderer: yfiles.drawing.INodeStyleRenderer,
		createVisual(
		node: yfiles.graph.INode, renderContext: yfiles.drawing.IRenderContext
	): TVisual,
		updateVisual(
		node: yfiles.graph.INode, renderContext: yfiles.drawing.IRenderContext, oldVisual: TVisual
	): TVisual,
		getBounds(
		node: yfiles.graph.INode, canvasContext: yfiles.canvas.ICanvasContext
	): yfiles.geometry.RectD,
		isVisible(
		node: yfiles.graph.INode, clip: yfiles.geometry.RectD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		isHit(
		node: yfiles.graph.INode, p: yfiles.geometry.PointD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		isInBox(
		node: yfiles.graph.INode, box: yfiles.geometry.RectD, canvasContext: yfiles.canvas.ICanvasContext
	): boolean,
		lookup(node: yfiles.graph.INode, type: yfiles.lang.Class): Object,
		getIntersection(
		node: yfiles.graph.INode, inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(node: yfiles.graph.INode, point: yfiles.geometry.PointD): boolean,
		getOutline(node: yfiles.graph.INode): yfiles.drawing.GeneralPath,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void,
		clone(): Object
	}

	declare export interface StretchStripeLabelModel {
		insets: yfiles.geometry.InsetsD,
		useActualInsets: boolean,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameter(
		position: yfiles.drawing.StretchStripeLabelModel.Position_Interface
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, labelModel: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface StripeLabelModel {
		useActualInsets: boolean,
		ratio: number,
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup,
		createParameter(
		position: yfiles.drawing.StripeLabelModel.Position_Interface
	): yfiles.graph.ILabelModelParameter,
		lookup(type: yfiles.lang.Class): Object,
		getParameters(
		label: yfiles.graph.ILabel, labelModel: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface TableNodeStyle {
		table: yfiles.graph.ITable,
		tableProvider: yfiles.drawing.ITableProvider,
		clone(): Object,
		copyBackgroundStyle(nodeStyle: yfiles.drawing.INodeStyle): yfiles.drawing.INodeStyle,
		copyTable(originalTable: yfiles.graph.ITable): yfiles.graph.ITable
	}

	declare export interface DynamicTableNodeStyle {
		tableProvider: yfiles.drawing.ITableProvider
	}

	declare export interface TagOwnerTableProvider {
		getTable(node: yfiles.graph.INode, context: yfiles.support.ILookup): yfiles.graph.ITable,
		setTable(
		node: yfiles.graph.INode, table: yfiles.graph.ITable, context: yfiles.support.ILookup
	): boolean
	}

	declare export interface ShinyPlateNodeStyleRenderer {
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getOutline(): yfiles.drawing.GeneralPath,
		configure(): void,
		drawShadow(): boolean,
		brush: yfiles.system.Brush,
		pen: yfiles.system.Pen,
		radius: number,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		lookup(type: yfiles.lang.Class): Object,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD
	}

	declare export interface IImageNodeStyle {
		image: yfiles.drawing.ImageSource,
		fallbackImage: yfiles.drawing.ImageSource,
		outlineShape: yfiles.drawing.GeneralPath
	}

	declare export interface ImageNodeStyleRenderer {
		getImage(): yfiles.drawing.ImageSource,
		getFallbackImage(): yfiles.drawing.ImageSource,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getIntersection(p1: yfiles.geometry.PointD, p2: yfiles.geometry.PointD): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		getOutline(): yfiles.drawing.GeneralPath,
		getPreserveAspectRatio(): boolean
	}

	declare export interface ImageNodeStyle {
		renderer: yfiles.drawing.INodeStyleRenderer,
		image: yfiles.drawing.ImageSource,
		fallbackImage: yfiles.drawing.ImageSource,
		outlineShape: yfiles.drawing.GeneralPath,
		clone(): Object,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void
	}

	declare export interface BevelNodeStyle {
		inset: number,
		radius: number,
		color: yfiles.system.Color,
		renderer: yfiles.drawing.INodeStyleRenderer,
		drawShadow: boolean,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void,
		clone(): Object
	}

	declare export interface IArcEdgeStyle {
		pen: yfiles.system.Pen,
		height: number,
		ratio: boolean
	}

	declare export interface IBevelNodeStyle {
		inset: number,
		radius: number,
		color: yfiles.system.Color,
		drawShadow: boolean
	}

	declare export interface BevelNodeStyleRenderer {
		color: yfiles.system.Color,
		inset: number,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		configure(): void,
		radius: number,
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		getOutline(): yfiles.drawing.GeneralPath,
		lookup(type: yfiles.lang.Class): Object,
		provideRadiusHandle: boolean
	}

	declare export interface PanelNodeStyleRenderer {
		drawShadow(): boolean,
		color: yfiles.system.Color,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		lookup(type: yfiles.lang.Class): Object,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD
	}

	declare export interface IShinyPlateNodeStyle {
		insets: yfiles.geometry.InsetsD,
		brush: yfiles.system.Brush,
		pen: yfiles.system.Pen,
		radius: number,
		drawShadow: boolean
	}

	declare export interface ShinyPlateNodeStyle {
		brush: yfiles.system.Brush,
		pen: yfiles.system.Pen,
		radius: number,
		drawShadow: boolean,
		insets: yfiles.geometry.InsetsD,
		renderer: yfiles.drawing.INodeStyleRenderer,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void,
		clone(): Object
	}

	declare export interface PanelNodeStyle {
		color: yfiles.system.Color,
		labelInsetsColor: yfiles.system.Color,
		insets: yfiles.geometry.InsetsD,
		renderer: yfiles.drawing.INodeStyleRenderer,
		install(context: yfiles.model.IInstallerContext, item: yfiles.graph.INode): void,
		clone(): Object
	}

	declare export interface LabelStyleDecorationInstaller {
		zoomMode: yfiles.drawing.DecorationZoomMode,
		margin: yfiles.geometry.InsetsD,
		labelStyle: yfiles.drawing.ILabelStyle,
		install(context: yfiles.model.IInstallerContext, item: Object): void
	}

	declare export interface NodeStyleDecorationInstaller {
		zoomMode: yfiles.drawing.DecorationZoomMode,
		margin: yfiles.geometry.InsetsD,
		nodeStyle: yfiles.drawing.INodeStyle,
		install(context: yfiles.model.IInstallerContext, item: Object): void
	}

	declare export interface IPanelNodeStyle {
		insets: yfiles.geometry.InsetsD,
		color: yfiles.system.Color,
		labelInsetsColor: yfiles.system.Color
	}

	declare export interface DataTemplate {
		loadContent(ctx: yfiles.canvas.ICanvasContext): yfiles.drawing.ArrangeVisual
	}

	declare export interface EllipseVisual {
		svgElement: Element,
		pen: yfiles.system.Pen,
		setPen(pen: yfiles.system.Pen, context: yfiles.canvas.ICanvasContext): void,
		brush: yfiles.system.Brush,
		setBrush(brush: yfiles.system.Brush, context: yfiles.canvas.ICanvasContext): void,
		updateLayout(Layout: yfiles.geometry.IRectangle): void,
		bounds: yfiles.geometry.RectD,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D
	}

	declare export interface DefaultVisual {
		svgElement: Element
	}

	declare export interface IHitTestEnumerator<T> {
		enumerateHits(location: yfiles.geometry.PointD): yfiles.collections.IEnumerable<T>
	}

	declare export interface PathVisual {
		update(
		generalPath: yfiles.drawing.GeneralPath, matrix: yfiles.geometry.Matrix2D, fillMode: yfiles.drawing.FillMode
	): void,
		svgElement: Element,
		pen: yfiles.system.Pen,
		brush: yfiles.system.Brush,
		setBrush(brush: yfiles.system.Brush, context: yfiles.canvas.ICanvasContext): void,
		setPen(pen: yfiles.system.Pen, context: yfiles.canvas.ICanvasContext): void,
		bounds: yfiles.geometry.RectD,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D
	}

	declare export interface DrawingTemplate {
		clone(): Object,
		brush: yfiles.system.Brush,
		pen: yfiles.system.Pen
	}

	declare export interface Image {
		source: yfiles.drawing.ImageSource,
		updateLayout(layout: yfiles.geometry.IRectangle): void,
		bounds: yfiles.geometry.RectD,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D,
		preserveAspectRatio: boolean,
		svgElement: Element
	}

	declare export interface UseVisual {
		svgElement: Element,
		updateLayout(layout: yfiles.geometry.IRectangle): void,
		bounds: yfiles.geometry.RectD,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D
	}

	declare export interface HighlightVisual {
		bounds: yfiles.geometry.RectD,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D,
		svgElement: Element
	}

	declare export interface NonFocusedCandidateDrawingVisual {
		
	}

	declare export interface FocusedCandidateDrawingVisual {
		
	}

	declare export interface TextVisual {
		svgElement: Element,
		pen: yfiles.system.Pen,
		setPen(pen: yfiles.system.Pen, context: yfiles.canvas.ICanvasContext): void,
		brush: yfiles.system.Brush,
		setBrush(brush: yfiles.system.Brush, context: yfiles.canvas.ICanvasContext): void,
		updateLayout(layout: yfiles.geometry.IRectangle): void,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D
	}

	declare export interface Visual {
		svgElement: Element,
		setRenderDataCache(renderData: Object): void,
		getRenderDataCache<T>(tType: yfiles.lang.Class): T
	}

	declare export interface ImageSource {
		path: string
	}

	declare export interface RenderVisual {
		svgElement: Element,
		paint(renderContext: yfiles.drawing.IRenderContext, htmlCanvasContext: Object): void
	}

	declare export interface RectVisual {
		svgElement: Element,
		pen: yfiles.system.Pen,
		setPen(pen: yfiles.system.Pen, context: yfiles.canvas.ICanvasContext): void,
		brush: yfiles.system.Brush,
		setBrush(brush: yfiles.system.Brush, context: yfiles.canvas.ICanvasContext): void,
		setArcRadius(roundRectArcRadius: number): void,
		updateLayout(layout: yfiles.geometry.IRectangle): void,
		bounds: yfiles.geometry.RectD,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D
	}

	declare export interface ArrangeVisual {
		bounds: yfiles.geometry.RectD,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D,
		shapeRendering: yfiles.drawing.ShapeRenderingType,
		imageRendering: yfiles.drawing.ImageRenderingType
	}

	declare export interface DOMElementExtensions {
		
	}

	declare export interface CanvasVisual {
		canvas: HTMLCanvasElement,
		context: Object,
		svgElement: Element,
		updateLayout(Layout: yfiles.geometry.IRectangle): void,
		bounds: yfiles.geometry.RectD,
		visible: boolean,
		transform: yfiles.geometry.Matrix2D
	}

	declare export interface IDefsSupport {
		updateDefsElement(oldElement: SVGElement, context: yfiles.canvas.ICanvasContext): void,
		createDefsElement(context: yfiles.canvas.ICanvasContext): SVGElement,
		accept(context: yfiles.canvas.ICanvasContext, node: Node, id: string): boolean
	}

			
}

declare module 'InteriorStretchLabelModel' {
		declare export interface Position_Interface {
		
	}

			
}

declare module 'InteriorLabelModel' {
		declare export interface Position_Interface {
		
	}

			
}

declare module 'NinePositionsEdgeLabelModel' {
		declare export interface Position_Interface {
		
	}

			
}

declare module 'ExteriorLabelModel' {
		declare export interface Position_Interface {
		
	}

			
}

declare module 'GeneralPath' {
		declare export interface PathCursor {
		moveNext(): boolean,
		reset(): void,
		toLast(): boolean,
		index: number,
		movePrevious(): boolean,
		getPathType(): yfiles.drawing.PathType,
		getCurrent(coordinates: number[]): yfiles.drawing.PathType,
		getCurrentEndPointX(): number,
		currentEndPoint: yfiles.geometry.PointD,
		getCurrentEndPointY(): number,
		getCurrentEndPointValueArray(coordinates: number[]): yfiles.drawing.PathType,
		getCurrentEndPointValues(x: {
		value: number
	}, y: {
		value: number
	}): yfiles.drawing.PathType,
		getCurrentEndPointSValues(x: {
		value: number
	}, y: {
		value: number
	}): yfiles.drawing.PathType,
		getCurrentEndPointWithCoordinatesSValueArray(coordinates: number[]): yfiles.drawing.PathType,
		getCurrentSingles(coordinates: number[]): yfiles.drawing.PathType
	}

			
}

declare module 'TextRenderSupport' {
		declare export interface TextMeasureMode_Interface {
		
	}

			
}

declare module 'StretchStripeLabelModel' {
		declare export interface Position_Interface {
		
	}

			
}

declare module 'StripeLabelModel' {
		declare export interface Position_Interface {
		
	}

			
}

declare module 'common' {
		declare export interface VoidStyleRenderer<TModelItem, TStyle> {
		getVisualCreator(item: TModelItem, style: TStyle): yfiles.drawing.IVisualCreator,
		getBoundsProvider(item: TModelItem, style: TStyle): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(item: TModelItem, style: TStyle): yfiles.drawing.IVisibilityTest,
		getHitTestable(item: TModelItem, style: TStyle): yfiles.drawing.IHitTestable,
		getMarqueeTestable(item: TModelItem, style: TStyle): yfiles.drawing.IMarqueeTestable,
		getContext(item: TModelItem, style: TStyle): yfiles.support.ILookup
	}

	declare export interface VoidUserTagProvider {
		getUserTag(forItem: yfiles.model.IModelItem, context: yfiles.support.ILookup): Object,
		setUserTag(
		forItem: yfiles.model.IModelItem, newTag: Object, context: yfiles.support.ILookup
	): boolean
	}

	declare export interface VoidNodeStyleRenderer {
		getShapeGeometry(
		node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle
	): yfiles.drawing.IShapeGeometry
	}

	declare export interface VoidPortStyleRenderer {
		
	}

	declare export interface VoidPortStyle {
		renderer: yfiles.drawing.IPortStyleRenderer
	}

	declare export interface VoidLabelStyle {
		renderer: yfiles.drawing.ILabelStyleRenderer
	}

	declare export interface VoidLabelStyleRenderer {
		getPreferredSize(
		label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle
	): yfiles.geometry.SizeD
	}

	declare export interface VoidShapeGeometry {
		getIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isInside(point: yfiles.geometry.PointD): boolean,
		getOutline(): yfiles.drawing.GeneralPath
	}

	declare export interface VoidEdgeStyle {
		renderer: yfiles.drawing.IEdgeStyleRenderer
	}

	declare export interface VoidEdgeStyleRenderer {
		getPathGeometry(
		edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle
	): yfiles.drawing.IPathGeometry
	}

	declare export interface VoidNodeStyle {
		renderer: yfiles.drawing.INodeStyleRenderer
	}

	declare export interface VoidPathGeometry {
		getTangent(
		ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getTangentForIndex(
		segmentIndex: number, ratio: number, p: {
		value: yfiles.geometry.PointD
	}, tangent: {
		value: yfiles.geometry.PointD
	}
	): boolean,
		getSegmentCount(): number,
		getPath(): yfiles.drawing.GeneralPath
	}

	declare export interface VoidVisualStyle<TModelItem> {
		clone(): Object,
		install(context: yfiles.model.IInstallerContext, item: TModelItem): void
	}

	declare export interface PortExtension {
		tag: Object,
		style: yfiles.drawing.IPortStyle,
		locationModelParameter: yfiles.graph.IPortLocationModelParameter,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface Wrapper {
		wrappee: Object
	}

	declare export interface GraphSettings {
		nodeDefaults: yfiles.graph.INodeDefaults,
		groupNodeDefaults: yfiles.graph.INodeDefaults,
		edgeDefaults: yfiles.graph.IEdgeDefaults,
		usePortCandidateProviders: boolean,
		applyTo(graph: yfiles.graph.IGraph): void,
		readFrom(graph: yfiles.graph.IGraph): void
	}

	declare export interface TableExtension {
		rows: yfiles.collections.ICollection<yfiles.graph.IRow>,
		columns: yfiles.collections.ICollection<yfiles.graph.IColumn>,
		insets: yfiles.geometry.InsetsD,
		relativeLocation: yfiles.geometry.PointD,
		rowDefaults: yfiles.graph.IStripeDefaults,
		columnDefaults: yfiles.graph.IStripeDefaults,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface ColumnExtension {
		columns: yfiles.collections.ICollection<yfiles.graph.IColumn>,
		style: yfiles.drawing.INodeStyle,
		minimumSize: number,
		size: number,
		insets: yfiles.geometry.InsetsD,
		labels: yfiles.collections.ICollection<yfiles.graph.ILabel>,
		tag: Object,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface RowExtension {
		rows: yfiles.collections.ICollection<yfiles.graph.IRow>,
		minimumSize: number,
		size: number,
		insets: yfiles.geometry.InsetsD,
		labels: yfiles.collections.ICollection<yfiles.graph.ILabel>,
		style: yfiles.drawing.INodeStyle,
		tag: Object,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface BendExtension {
		provideValue(serviceProvider: yfiles.support.ILookup): Object,
		location: yfiles.geometry.PointD,
		tag: Object
	}

	declare export interface LabelExtension {
		text: string,
		labelModelParameter: yfiles.graph.ILabelModelParameter,
		style: yfiles.drawing.ILabelStyle,
		preferredSize: yfiles.geometry.SizeD,
		tag: Object,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

			
}

declare module 'genealogy' {
		declare export interface FamilyTreeLayouter {
		topLayouter: yfiles.layout.ILayouter,
		spacingBetweenFamilyMembers: number,
		offsetForFamilyNodes: number,
		partnerlessBelow: boolean,
		familyNodesAlwaysBelow: boolean,
		alignment: number,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		sortFamilyMembers: yfiles.genealogy.FamilyMembersSortingPolicy,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void
	}

			
}

declare module 'geometry' {
		declare export interface IMovable {
		moveBy(delta: yfiles.geometry.PointD): boolean
	}

	declare export interface IContainsTest {
		contains(location: yfiles.geometry.PointD): boolean
	}

	declare export interface IMutableOrientedRectangle {
		anchorX: number,
		anchorY: number,
		setUpVectorValues(upx: number, upy: number): void,
		setUpVector(up: yfiles.geometry.PointD): void,
		setSizeD(size: yfiles.geometry.SizeD): void,
		setSize(size: yfiles.geometry.ISize): void,
		setCenter(center: yfiles.geometry.PointD): void,
		setAnchor(newAnchorLocation: yfiles.geometry.PointD): void
	}

	declare export interface IMutableSize {
		width: number,
		height: number
	}

	declare export interface IMutableRectangle {
		setCenter(center: yfiles.geometry.PointD): void,
		setSize(newSize: yfiles.geometry.SizeD): void,
		getMutableRectangleDynamicCenter(): yfiles.geometry.IMutablePoint,
		setToUnion(rect1: yfiles.geometry.IRectangle, rect2: yfiles.geometry.IRectangle): void,
		addRectangle(rect2: yfiles.geometry.IRectangle): void,
		addPoint(p: yfiles.geometry.IPoint): void
	}

	declare export interface IMutablePoint {
		x: number,
		y: number
	}

	declare export interface ImmutableSize {
		width: number,
		height: number
	}

	declare export interface ImmutablePoint {
		x: number,
		y: number,
		clone(): Object
	}

	declare export interface ImmutableRectangle {
		x: number,
		y: number,
		width: number,
		height: number,
		clone(): Object,
		toString(): string
	}

	declare export interface ImmutableOrientedRectangle {
		anchorX: number,
		anchorY: number,
		upX: number,
		upY: number,
		width: number,
		height: number,
		clone(): Object
	}

	declare export interface IPointSetter {
		x: number,
		y: number,
		setPointDLocation(newLocation: yfiles.geometry.PointD): void,
		setPointLocation(newLocation: yfiles.geometry.IPoint): void
	}

	declare export interface IRectangle {
		getRectangleSize(): yfiles.geometry.SizeD,
		getRectangleDynamicCenter(): yfiles.geometry.IPoint,
		getDynamicPoint(position: yfiles.input.HandlePositions): yfiles.geometry.IPoint,
		containsPoint(point: yfiles.geometry.IPoint): boolean,
		containsPointD(point: yfiles.geometry.PointD): boolean,
		toRectD(): yfiles.geometry.RectD,
		getTopLeft(): yfiles.geometry.PointD,
		getBottomLeft(): yfiles.geometry.PointD,
		getRectangleCenter(): yfiles.geometry.PointD,
		getMaxX(): number,
		isEmpty(): boolean,
		getMaxY(): number,
		getTopRight(): yfiles.geometry.PointD,
		getBottomRight(): yfiles.geometry.PointD
	}

	declare export interface IOrientedRectangle {
		anchorX: number,
		anchorY: number,
		upX: number,
		upY: number,
		getUp(): yfiles.geometry.PointD,
		containsPointWithEps(point: yfiles.geometry.PointD, eps: number): boolean,
		getTransform(): yfiles.geometry.Matrix2D,
		getAnchorLocation(): yfiles.geometry.PointD,
		getTopLeftLocation(): yfiles.geometry.PointD,
		getSize(): yfiles.geometry.SizeD,
		getOrientedRectangleDynamicCenter(): yfiles.geometry.IPoint,
		getCenter(): yfiles.geometry.PointD,
		hits(location: yfiles.geometry.PointD, eps: number): boolean,
		getBounds(): yfiles.geometry.RectD,
		toOrientedRectangle(): yfiles.algorithms.YOrientedRectangle
	}

	declare export interface IPoint {
		x: number,
		y: number,
		toPoint(): yfiles.geometry.PointD,
		distanceTo(q: yfiles.geometry.IPoint): number
	}

	declare export interface IReshapeable {
		reshapeToValues(x: number, y: number, w: number, h: number): void,
		reshapeToRectangle(newBounds: yfiles.geometry.IRectangle): void,
		reshapeToRectD(newBounds: yfiles.geometry.RectD): void
	}

	declare export interface PointD {
		x: number,
		y: number,
		clone(): yfiles.geometry.PointD,
		vectorLength: number,
		squaredVectorLength: number,
		normalized: yfiles.geometry.PointD,
		scalarProduct(other: yfiles.geometry.PointD): number,
		toMutablePoint(): yfiles.geometry.IMutablePoint,
		toImmutablePoint(): yfiles.geometry.IPoint,
		hits(other: yfiles.geometry.PointD, hitTestRadius: number): boolean,
		distanceToPointD(other: yfiles.geometry.PointD): number,
		getProjectionOnSegment(
		segStart: yfiles.geometry.PointD, segEnd: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		getProjectionOnRay(
		rayStart: yfiles.geometry.PointD, direction: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		isVerticalVector: boolean,
		isHorizontalVector: boolean,
		getProjectionOnLine(
		lineAnchor: yfiles.geometry.PointD, direction: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		distanceToSegment(l1: yfiles.geometry.PointD, l2: yfiles.geometry.PointD): number,
		toString(): string,
		hitsLineSegment(
		startPoint: yfiles.geometry.PointD, endPoint: yfiles.geometry.PointD, hitTestRadius: number
	): boolean,
		hitsPolyline(
		points: yfiles.collections.IEnumerable<yfiles.geometry.IPoint>, hitTestRadius: number
	): boolean,
		equalsPointD(other: yfiles.geometry.PointD): boolean,
		equals(obj: Object): boolean,
		hashCode(): number,
		getConstrained(rectangle: yfiles.geometry.RectD): yfiles.geometry.PointD,
		equalsEps(otherPoint: yfiles.geometry.PointD, epsilon: number): boolean,
		getRounded(): yfiles.geometry.PointD,
		toYPoint(): yfiles.algorithms.YPoint,
		toPoint2D(): yfiles.algorithms.Point2D.Double,
		toYVector(): yfiles.algorithms.YVector
	}

	declare export interface ISize {
		width: number,
		height: number,
		toSize(): yfiles.geometry.SizeD
	}

	declare export interface ISizeSetter {
		width: number,
		height: number
	}

	declare export interface SizeD {
		width: number,
		height: number,
		area: number,
		isEmpty: boolean,
		isFinite: boolean,
		toImmutableSize(): yfiles.geometry.ImmutableSize,
		toMutableSize(): yfiles.geometry.Size,
		toString(): string,
		equalsSizeD(obj: yfiles.geometry.SizeD): boolean,
		equals(obj: Object): boolean,
		hashCode(): number,
		clone(): yfiles.geometry.SizeD,
		toYDimension(): yfiles.algorithms.YDimension
	}

	declare export interface GeomSupport {
		
	}

	declare export interface AnchoredPoint {
		anchor: yfiles.geometry.IPoint,
		offset: yfiles.geometry.IMutablePoint,
		x: number,
		y: number,
		toString(): string
	}

	declare export interface Size {
		width: number,
		height: number,
		clone(): Object
	}

	declare export interface Rectangle {
		empty: boolean,
		clone(): Object,
		toString(): string,
		position: yfiles.geometry.IPoint,
		size: yfiles.geometry.ISize,
		reshapeToValues(x: number, y: number, w: number, h: number): void,
		reshapeRectangleToIRectangle(rect: yfiles.geometry.IRectangle): void,
		reshapeRectangleToRectangle(rect: yfiles.geometry.Rectangle): void,
		width: number,
		height: number,
		x: number,
		y: number,
		x2: number,
		y2: number,
		anchorX: number,
		anchorY: number,
		upX: number,
		upY: number,
		moveBy(delta: yfiles.geometry.PointD): boolean,
		setToRectangle(rectangle: yfiles.geometry.IRectangle): void,
		addRectangleWithBounds(bounds: yfiles.geometry.IRectangle): void
	}

	declare export interface RectD {
		x: number,
		y: number,
		width: number,
		height: number,
		centerX: number,
		centerY: number,
		center: yfiles.geometry.PointD,
		topLeft: yfiles.geometry.PointD,
		topRight: yfiles.geometry.PointD,
		bottomLeft: yfiles.geometry.PointD,
		bottomRight: yfiles.geometry.PointD,
		size: yfiles.geometry.SizeD,
		clone(): yfiles.geometry.RectD,
		getTranslated(delta: yfiles.geometry.PointD): yfiles.geometry.RectD,
		isEmptyRectD: boolean,
		rectDtoRect(): yfiles.geometry.IRectangle,
		toMutableRectangle(): yfiles.geometry.IMutableRectangle,
		toImmutableRectangle(): yfiles.geometry.IRectangle,
		isFinite: boolean,
		maxX: number,
		maxY: number,
		minX: number,
		minY: number,
		rectDcontainsPointD(p: yfiles.geometry.PointD): boolean,
		containsPointDEps(p: yfiles.geometry.PointD, eps: number): boolean,
		getInsetsEnlarged(insets: yfiles.geometry.InsetsD): yfiles.geometry.RectD,
		getEnlarged(size: number): yfiles.geometry.RectD,
		area: number,
		intersectsRectD(other: yfiles.geometry.RectD): boolean,
		intersectsOrientedRectangleEps(orientedRectangle: yfiles.geometry.IOrientedRectangle, eps: number): boolean,
		intersectsLine(p1: yfiles.geometry.PointD, p2: yfiles.geometry.PointD): boolean,
		intersectsPolyline(
		controlPointList: yfiles.collections.IEnumerable<yfiles.geometry.IPoint>
	): boolean,
		findLineIntersection(
		inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		toString(): string,
		getTransformed(transform: yfiles.geometry.Matrix2D): yfiles.geometry.RectD,
		equalsRectD(obj: yfiles.geometry.RectD): boolean,
		equals(obj: Object): boolean,
		hashCode(): number,
		toRectangle2D(): yfiles.algorithms.Rectangle2D.Double,
		toYRectangle(): yfiles.algorithms.YRectangle
	}

	declare export interface InsetsDConverter {
		canConvertFromWithContext(
		context: yfiles.system.ITypeDescriptorContext, sourceType: yfiles.lang.Class
	): boolean,
		canConvertToWithContext(
		context: yfiles.system.ITypeDescriptorContext, destinationType: yfiles.lang.Class
	): boolean,
		convertFromWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object
	): Object,
		convertToWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object, destinationType: yfiles.lang.Class
	): Object
	}

	declare export interface InsetsD {
		top: number,
		left: number,
		bottom: number,
		right: number,
		verticalInsets: number,
		horizontalInsets: number,
		isEmpty: boolean,
		getEnlarged(insets: yfiles.geometry.InsetsD): yfiles.geometry.InsetsD,
		createUnion(insets: yfiles.geometry.InsetsD): yfiles.geometry.InsetsD,
		equalsInsets(obj: yfiles.geometry.InsetsD): boolean,
		equals(obj: Object): boolean,
		hashCode(): number,
		clone(): yfiles.geometry.InsetsD,
		toString(): string,
		toInsets(): yfiles.algorithms.Insets
	}

	declare export interface Matrix2D {
		elements: number[],
		transformValues(x: {
		value: number
	}, y: {
		value: number
	}): void,
		transform(p: yfiles.geometry.PointD): yfiles.geometry.PointD,
		transformPoint<T>(point: yfiles.geometry.IPoint, result: T): T,
		transformInplace<T>(point: T): T,
		translate(delta: yfiles.geometry.PointD): void,
		translateWithOrder(delta: yfiles.geometry.PointD, order: yfiles.geometry.MatrixOrder): void,
		reset(): void,
		set(m0: number, m1: number, m2: number, m3: number, tx: number, ty: number): void,
		cloneMatrix(): yfiles.geometry.Matrix2D,
		clone(): Object,
		invert(): void,
		setFrom(m: yfiles.geometry.Matrix2D): void,
		scale(x: number, y: number): void,
		scaleWithOrder(x: number, y: number, order: yfiles.geometry.MatrixOrder): void,
		rotate(theta: number): void,
		rotateWithCenter(theta: number, centerPoint: yfiles.geometry.PointD): void,
		rotateWithCenterAndOrder(
		theta: number, centerPoint: yfiles.geometry.PointD, order: yfiles.geometry.MatrixOrder
	): void,
		rotateWithOrder(theta: number, order: yfiles.geometry.MatrixOrder): void,
		multiply(m: yfiles.geometry.Matrix2D, matrixOrder: yfiles.geometry.MatrixOrder): void,
		equalsTyped(matrix2D: yfiles.geometry.Matrix2D): boolean,
		toSVGTransform(): string
	}

	declare export interface SizeDConverter {
		canConvertFromWithContext(
		context: yfiles.system.ITypeDescriptorContext, sourceType: yfiles.lang.Class
	): boolean,
		canConvertToWithContext(
		context: yfiles.system.ITypeDescriptorContext, destinationType: yfiles.lang.Class
	): boolean,
		convertFromWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object
	): Object,
		convertToWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object, destinationType: yfiles.lang.Class
	): Object
	}

	declare export interface OrientedRectangle {
		clone(): Object,
		empty: boolean,
		anchor: yfiles.geometry.IPoint,
		size: yfiles.geometry.ISize,
		width: number,
		height: number,
		x: number,
		y: number,
		anchorX: number,
		anchorY: number,
		setUpVectorValues(upx: number, upy: number): void,
		upX: number,
		upY: number,
		angle: number,
		moveBy(delta: yfiles.geometry.PointD): boolean,
		setWithRectangle(rectangle: yfiles.geometry.IOrientedRectangle): void
	}

	declare export interface Point {
		x: number,
		y: number,
		normalize(): void,
		createImmutableCopy(): yfiles.geometry.IPoint,
		createImmutableView(): yfiles.geometry.IPoint,
		setValues(newX: number, newY: number): void,
		setToPoint(point: yfiles.geometry.IPoint): void,
		setToPointD(point: yfiles.geometry.PointD): void,
		clone(): Object,
		toString(): string,
		clonePoint(): yfiles.geometry.Point,
		moveBy(delta: yfiles.geometry.PointD): boolean
	}

	declare export interface RectDConverter {
		canConvertFromWithContext(
		context: yfiles.system.ITypeDescriptorContext, sourceType: yfiles.lang.Class
	): boolean,
		canConvertToWithContext(
		context: yfiles.system.ITypeDescriptorContext, destinationType: yfiles.lang.Class
	): boolean,
		convertFromWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object
	): Object,
		convertToWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object, destinationType: yfiles.lang.Class
	): Object
	}

	declare export interface PointDConverter {
		canConvertFromWithContext(
		context: yfiles.system.ITypeDescriptorContext, sourceType: yfiles.lang.Class
	): boolean,
		canConvertToWithContext(
		context: yfiles.system.ITypeDescriptorContext, destinationType: yfiles.lang.Class
	): boolean,
		convertFromWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object
	): Object,
		convertToWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object, destinationType: yfiles.lang.Class
	): Object
	}

			
}

declare module 'graph' {
		declare export interface DefaultStripeInputVisualizationHelper {
		getVisualCreator(
		context: yfiles.input.IInputModeContext, tableNode: yfiles.graph.INode, type: yfiles.graph.StripeVisualizationType
	): yfiles.drawing.IVisualCreator,
		findTemplate(
		context: yfiles.input.IInputModeContext, type: yfiles.graph.StripeVisualizationType
	): yfiles.drawing.DrawingTemplate,
		resizeStripeTemplate: yfiles.drawing.DrawingTemplate,
		selectedStripeTemplate: yfiles.drawing.DrawingTemplate,
		dragSourceStripeTemplate: yfiles.drawing.DrawingTemplate,
		dropTargetStripeTemplate: yfiles.drawing.DrawingTemplate
	}

	declare export interface StripeSubregionDescriptor {
		subregion: yfiles.graph.StripeSubregion,
		stripe: yfiles.graph.IStripe
	}

	declare export interface IStripeInputVisualizationHelper {
		getVisualCreator(
		context: yfiles.input.IInputModeContext, tableNode: yfiles.graph.INode, type: yfiles.graph.StripeVisualizationType
	): yfiles.drawing.IVisualCreator
	}

	declare export interface MapperRegistry {
		getMapper<K, V>(tag: Object): yfiles.model.IMapper<K, V>,
		addMapper<K, V>(
		keyType: yfiles.lang.Class, valueType: yfiles.lang.Class, tag: Object, mapper: yfiles.model.IMapper<K, V>
	): void,
		removeMapper(tag: Object): void,
		registeredTags: yfiles.collections.IEnumerable<Object>,
		getMapperMetadata(tag: Object): yfiles.graph.IMapperMetadata,
		setMapperMetadata(tag: Object, metadata: yfiles.graph.IMapperMetadata): void
	}

	declare export interface ListPortCollection {
		node: yfiles.graph.INode,
		add(port: yfiles.graph.IPort): void,
		addAtIndex(pos: number, port: yfiles.graph.IPort): void,
		addRelative(relativeLocation: yfiles.geometry.PointD): yfiles.graph.IPort,
		addRelativeAtIndex(pos: number, relativeLocation: yfiles.geometry.PointD): yfiles.graph.IPort,
		createCenterAnchoredPort(offset: yfiles.geometry.PointD): yfiles.graph.SimplePort,
		removePort(port: yfiles.graph.IPort): void,
		remove(index: number): void,
		count: number,
		getItem(i: number): yfiles.graph.IPort,
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.graph.IPort>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface DataProviderAdapter<K, V> {
		get(dataHolder: Object): Object,
		getInt(dataHolder: Object): number,
		getDouble(dataHolder: Object): number,
		getBool(dataHolder: Object): boolean
	}

	declare export interface DataMapAdapter<K, V> {
		set(dataHolder: Object, value: Object): void,
		setInt(dataHolder: Object, value: number): void,
		setDouble(dataHolder: Object, value: number): void,
		setBool(dataHolder: Object, value: boolean): void
	}

	declare export interface DefaultColumnLookup {
		chainedLookup(
		column: yfiles.graph.IColumn, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface IStripeHitTestHelper {
		getLeadingHeaderHitTestable(): yfiles.drawing.IHitTestable,
		getTrailingHeaderHitTestable(): yfiles.drawing.IHitTestable,
		getStripeHitTestable(): yfiles.drawing.IHitTestable,
		getNearBorderHitTestable(): yfiles.drawing.IHitTestable,
		getFarBorderHitTestable(): yfiles.drawing.IHitTestable
	}

	declare export interface DefaultRowLookup {
		chainedLookup(
		row: yfiles.graph.IRow, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface DefaultStripeLookup {
		chainedLookup(
		stripe: yfiles.graph.IStripe, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface IPort {
		owner: yfiles.graph.IPortOwner,
		location: yfiles.geometry.IPoint,
		style: yfiles.drawing.IPortStyle,
		locationModelParameter: yfiles.graph.IPortLocationModelParameter
	}

	declare export interface IObservableHierarchy<T> {
		getChildrenWithParent(parent: T): yfiles.collections.IEnumerable<T>
	}

	declare export interface IPortOwner {
		ports: yfiles.model.IListEnumerable<yfiles.graph.IPort>
	}

	declare export interface StripeExtensions {
		
	}

	declare export interface CompositeStripeSelection {
		stripeSelection: yfiles.graph.IStripeSelection,
		onItemSelected(itemEventArgs: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>): void,
		onItemDeselected(itemEventArgs: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>): void,
		count: number,
		addItemSelectedListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemSelectedListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemDeselectedListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemDeselectedListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		mixedSelectionAllowed: boolean,
		clear(): void,
		isSelected(o: yfiles.model.IModelItem): boolean,
		setSelected(o: yfiles.model.IModelItem, selected: boolean): void,
		selectedNodes: yfiles.model.ISelectionModel<yfiles.graph.INode>,
		selectedLabels: yfiles.model.ISelectionModel<yfiles.graph.ILabel>,
		selectedEdges: yfiles.model.ISelectionModel<yfiles.graph.IEdge>,
		selectedPorts: yfiles.model.ISelectionModel<yfiles.graph.IPort>,
		selectedBends: yfiles.model.ISelectionModel<yfiles.graph.IBend>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.model.IModelItem>,
		dispose(): void,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface Table {
		rows: yfiles.collections.IEnumerable<yfiles.graph.IRow>,
		columns: yfiles.collections.IEnumerable<yfiles.graph.IColumn>,
		insets: yfiles.geometry.InsetsD,
		relativeLocation: yfiles.geometry.PointD,
		layout: yfiles.geometry.IRectangle,
		lookup(type: yfiles.lang.Class): Object,
		createRowAtIndexWithSizeInsetsStyleAndTag(
		owner: yfiles.graph.IRow, index: number, height: number, minHeight: number, insets: yfiles.geometry.InsetsD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IRow,
		createColumnAtIndexWithSizeInsetsStyleAndTag(
		owner: yfiles.graph.IColumn, index: number, width: number, minWidth: number, insets: yfiles.geometry.InsetsD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IColumn,
		onStripeAdded(stripe: yfiles.graph.IStripe): void,
		addStripeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripe(stripe: yfiles.graph.IStripe): void,
		onStripeRemoved(owner: yfiles.graph.IStripe, label: yfiles.graph.IStripe): void,
		addStripeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		getUndoSupport(): yfiles.support.IUndoSupport,
		registerUndoSupport(support: yfiles.support.IUndoSupport): void,
		removeUndoSupport(): void,
		setSize(stripe: yfiles.graph.IStripe, newSize: number): void,
		setMinimumSize(stripe: yfiles.graph.IStripe, minimumSize: number): void,
		setInsets(stripe: yfiles.graph.IStripe, insets: yfiles.geometry.InsetsD): void,
		setStripeStyle(stripe: yfiles.graph.IStripe, style: yfiles.drawing.INodeStyle): void,
		onStripeChanged(owner: yfiles.graph.IStripe, stripe: yfiles.graph.IStripe): void,
		addStripeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		setRowParentAtIndex(owner: yfiles.graph.IRow, row: yfiles.graph.IRow, index: number): void,
		setColumnParentAtIndex(owner: yfiles.graph.IColumn, column: yfiles.graph.IColumn, index: number): void,
		addLabelWithParameterStylePreferredSizeAndTag(
		item: yfiles.graph.IStripe, labelModelParameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD, tag: Object
	): yfiles.graph.ILabel,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		setPreferredSize(label: yfiles.graph.ILabel, preferredSize: yfiles.geometry.SizeD): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		onLabelAdded(label: yfiles.graph.ILabel): void,
		onLabelChanged(label: yfiles.graph.ILabel): void,
		onLabelRemoved(owner: yfiles.graph.ILabeledItem, label: yfiles.graph.ILabel): void,
		addLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		rowDefaults: yfiles.graph.IStripeDefaults,
		createRowDefaults(): yfiles.graph.IStripeDefaults,
		createDefaultRowInsets(): yfiles.geometry.InsetsD,
		createRowLabelDefaults(): yfiles.graph.ILabelDefaults,
		createDefaultRowStyle(): yfiles.drawing.INodeStyle,
		createDefaultRowLabelStyle(): yfiles.drawing.ILabelStyle,
		createDefaultRowLabelModelParameter(): yfiles.graph.ILabelModelParameter,
		columnDefaults: yfiles.graph.IStripeDefaults,
		createColumnDefaults(): yfiles.graph.IStripeDefaults,
		createDefaultColumnInsets(): yfiles.geometry.InsetsD,
		createColumnLabelDefaults(): yfiles.graph.ILabelDefaults,
		createDefaultColumnStyle(): yfiles.drawing.INodeStyle,
		createDefaultColumnLabelStyle(): yfiles.drawing.ILabelStyle,
		createDefaultColumnLabelModelParameter(): yfiles.graph.ILabelModelParameter,
		clone(): Object,
		copyDefaults(originalDefaults: yfiles.graph.IStripeDefaults): yfiles.graph.IStripeDefaults,
		copyRow(row: yfiles.graph.IRow): yfiles.graph.IRow,
		copyColumn(column: yfiles.graph.IColumn): yfiles.graph.IColumn,
		rootRow: yfiles.graph.IRow,
		rootColumn: yfiles.graph.IColumn
	}

	declare export interface IStripeSelection {
		selectedRows: yfiles.model.ISelectionModel<yfiles.graph.IRow>,
		selectedColumns: yfiles.model.ISelectionModel<yfiles.graph.IColumn>,
		mixedSelectionAllowed: boolean,
		crossTableSelectionAllowed: boolean,
		selectedStripes: yfiles.model.ICollectionModel<yfiles.graph.IStripe>
	}

	declare export interface StripeSelection {
		mixedSelectionAllowed: boolean,
		crossTableSelectionAllowed: boolean,
		onItemSelected(itemEventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>): void,
		onItemDeselected(itemEventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>): void,
		selectedRows: yfiles.model.ISelectionModel<yfiles.graph.IRow>,
		selectedColumns: yfiles.model.ISelectionModel<yfiles.graph.IColumn>,
		selectedStripes: yfiles.model.ICollectionModel<yfiles.graph.IStripe>,
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.graph.IStripe>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		isSelectedRow(row: yfiles.graph.IRow): boolean,
		isSelectedColumn(column: yfiles.graph.IColumn): boolean,
		isSelected(stripe: yfiles.graph.IStripe): boolean,
		setSelectedRow(row: yfiles.graph.IRow, selected: boolean): void,
		setSelectedColumn(column: yfiles.graph.IColumn, selected: boolean): void,
		setSelected(o: yfiles.graph.IStripe, selected: boolean): void,
		count: number,
		addItemSelectedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeItemSelectedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		addItemDeselectedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeItemDeselectedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		clear(): void
	}

	declare export interface IColumn {
		owner: yfiles.graph.IColumn,
		columns: yfiles.collections.IEnumerable<yfiles.graph.IColumn>
	}

	declare export interface IRow {
		owner: yfiles.graph.IRow,
		rows: yfiles.collections.IEnumerable<yfiles.graph.IRow>
	}

	declare export interface ListLabelCollection {
		labels: yfiles.collections.IList<yfiles.graph.ILabel>,
		count: number,
		getItem(i: number): yfiles.graph.ILabel,
		add(label: yfiles.graph.ILabel): void,
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.graph.ILabel>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		remove(label: yfiles.graph.ILabel): void
	}

	declare export interface ITable {
		insets: yfiles.geometry.InsetsD,
		relativeLocation: yfiles.geometry.PointD,
		layout: yfiles.geometry.IRectangle,
		rowDefaults: yfiles.graph.IStripeDefaults,
		columnDefaults: yfiles.graph.IStripeDefaults,
		rootRow: yfiles.graph.IRow,
		rootColumn: yfiles.graph.IColumn,
		addLabelWithParameterStylePreferredSizeAndTag(
		item: yfiles.graph.IStripe, labelModelParameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD, tag: Object
	): yfiles.graph.ILabel,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		setPreferredSize(label: yfiles.graph.ILabel, preferredSize: yfiles.geometry.SizeD): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		addLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		createRowAtIndexWithSizeInsetsStyleAndTag(
		owner: yfiles.graph.IRow, index: number, height: number, minHeight: number, insets: yfiles.geometry.InsetsD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IRow,
		createColumnAtIndexWithSizeInsetsStyleAndTag(
		owner: yfiles.graph.IColumn, index: number, width: number, minWidth: number, insets: yfiles.geometry.InsetsD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IColumn,
		addStripeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		addStripeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		setSize(stripe: yfiles.graph.IStripe, newSize: number): void,
		setMinimumSize(stripe: yfiles.graph.IStripe, minimumSize: number): void,
		setInsets(stripe: yfiles.graph.IStripe, insets: yfiles.geometry.InsetsD): void,
		setStripeStyle(stripe: yfiles.graph.IStripe, style: yfiles.drawing.INodeStyle): void,
		addStripeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		setRowParentAtIndex(owner: yfiles.graph.IRow, row: yfiles.graph.IRow, index: number): void,
		setColumnParentAtIndex(owner: yfiles.graph.IColumn, column: yfiles.graph.IColumn, index: number): void,
		removeStripe(stripe: yfiles.graph.IStripe): void,
		addLabelWithParameterAndStyle(
		item: yfiles.graph.IStripe, parameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string
	): yfiles.graph.ILabel,
		addLabelWithParameterStyleAndPreferredSize(
		item: yfiles.graph.IStripe, parameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD
	): yfiles.graph.ILabel,
		addLabelWithParameterStyleAndTag(
		item: yfiles.graph.IStripe, parameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, tag: Object
	): yfiles.graph.ILabel,
		addLabelWithParameter(
		item: yfiles.graph.IStripe, parameter: yfiles.graph.ILabelModelParameter, text: string
	): yfiles.graph.ILabel,
		createLabelStyle(item: yfiles.graph.IStripe): yfiles.drawing.ILabelStyle,
		createLabelModelParameter(item: yfiles.graph.IStripe): yfiles.graph.ILabelModelParameter,
		addLabel(item: yfiles.graph.IStripe, text: string): yfiles.graph.ILabel,
		addLabelWithTag(item: yfiles.graph.IStripe, text: string, tag: Object): yfiles.graph.ILabel,
		calculatePreferredSize(
		item: yfiles.graph.IStripe, labelStyle: yfiles.drawing.ILabelStyle, labelModelParameter: yfiles.graph.ILabelModelParameter, text: string, tag: Object
	): yfiles.geometry.SizeD,
		createRow(owner: yfiles.graph.IRow): yfiles.graph.IRow,
		createRowWithSize(owner: yfiles.graph.IRow, size: number): yfiles.graph.IRow,
		createRowAtIndexWithSize(owner: yfiles.graph.IRow, index: number, size: number): yfiles.graph.IRow,
		createRowWithStyle(owner: yfiles.graph.IRow, style: yfiles.drawing.INodeStyle): yfiles.graph.IRow,
		createRowWithSizeAndStyle(
		owner: yfiles.graph.IRow, size: number, style: yfiles.drawing.INodeStyle
	): yfiles.graph.IRow,
		createRowAtIndexWithSizeAndStyle(
		owner: yfiles.graph.IRow, index: number, size: number, style: yfiles.drawing.INodeStyle
	): yfiles.graph.IRow,
		createRowWithTag(owner: yfiles.graph.IRow, tag: Object): yfiles.graph.IRow,
		createRowWithSizeAndTag(owner: yfiles.graph.IRow, size: number, tag: Object): yfiles.graph.IRow,
		createRowAtIndexWithSizeAndTag(
		owner: yfiles.graph.IRow, index: number, size: number, tag: Object
	): yfiles.graph.IRow,
		createRowWithStyleAndTag(
		owner: yfiles.graph.IRow, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IRow,
		createRowWithSizeStyleAndTag(
		owner: yfiles.graph.IRow, size: number, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IRow,
		createRowAtIndexWithSizeStyleAndTag(
		owner: yfiles.graph.IRow, index: number, size: number, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IRow,
		createRootRow(): yfiles.graph.IRow,
		createRootRowWithSize(size: number): yfiles.graph.IRow,
		createRootRowAtIndexWithSize(index: number, size: number): yfiles.graph.IRow,
		createRootRowWithStyle(style: yfiles.drawing.INodeStyle): yfiles.graph.IRow,
		createRootRowWithSizeAndStyle(size: number, style: yfiles.drawing.INodeStyle): yfiles.graph.IRow,
		createRootRowWithTag(tag: Object): yfiles.graph.IRow,
		createRootRowWithSizeAndTag(size: number, tag: Object): yfiles.graph.IRow,
		createRootRowAtIndexWithSizeAndTag(index: number, size: number, tag: Object): yfiles.graph.IRow,
		createRootRowWithStyleAndTag(style: yfiles.drawing.INodeStyle, tag: Object): yfiles.graph.IRow,
		createRootRowWithSizeStyleAndTag(size: number, style: yfiles.drawing.INodeStyle, tag: Object): yfiles.graph.IRow,
		createRootRowAtIndexWithSizeStyleAndTag(
		index: number, size: number, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IRow,
		createColumn(owner: yfiles.graph.IColumn): yfiles.graph.IColumn,
		createColumnWithSize(owner: yfiles.graph.IColumn, size: number): yfiles.graph.IColumn,
		createColumnAtIndexWithSize(owner: yfiles.graph.IColumn, index: number, size: number): yfiles.graph.IColumn,
		createColumnWithStyle(
		owner: yfiles.graph.IColumn, style: yfiles.drawing.INodeStyle
	): yfiles.graph.IColumn,
		createColumnWithSizeAndStyle(
		owner: yfiles.graph.IColumn, size: number, style: yfiles.drawing.INodeStyle
	): yfiles.graph.IColumn,
		createColumnAtIndexWithSizeAndStyle(
		owner: yfiles.graph.IColumn, index: number, size: number, style: yfiles.drawing.INodeStyle
	): yfiles.graph.IColumn,
		createColumnWithTag(owner: yfiles.graph.IColumn, tag: Object): yfiles.graph.IColumn,
		createColumnWithSizeAndTag(owner: yfiles.graph.IColumn, size: number, tag: Object): yfiles.graph.IColumn,
		createColumnAtIndexWithSizeAndTag(
		owner: yfiles.graph.IColumn, index: number, size: number, tag: Object
	): yfiles.graph.IColumn,
		createColumnWithStyleAndTag(
		owner: yfiles.graph.IColumn, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IColumn,
		createColumnWithSizeStyleAndTag(
		owner: yfiles.graph.IColumn, size: number, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IColumn,
		createColumnAtIndexWithSizeStyleAndTag(
		owner: yfiles.graph.IColumn, index: number, size: number, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IColumn,
		createRootColumn(): yfiles.graph.IColumn,
		createRootColumnWithSize(size: number): yfiles.graph.IColumn,
		createRootColumnAtIndexWithSize(index: number, size: number): yfiles.graph.IColumn,
		createRootColumnWithStyle(style: yfiles.drawing.INodeStyle): yfiles.graph.IColumn,
		createRootColumnWithSizeAndStyle(size: number, style: yfiles.drawing.INodeStyle): yfiles.graph.IColumn,
		createRootColumnAtIndexWithSizeAndStyle(
		index: number, size: number, style: yfiles.drawing.INodeStyle
	): yfiles.graph.IColumn,
		createRootColumnWithTag(tag: Object): yfiles.graph.IColumn,
		createRootColumnWithSizeAndTag(size: number, tag: Object): yfiles.graph.IColumn,
		createRootColumnAtIndexWithSizeAndTag(index: number, size: number, tag: Object): yfiles.graph.IColumn,
		createRootColumnWithStyleAndTag(style: yfiles.drawing.INodeStyle, tag: Object): yfiles.graph.IColumn,
		createRootColumnWithSizeStyleAndTag(
		size: number, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IColumn,
		createRootColumnAtIndexWithSizeStyleAndTag(
		index: number, size: number, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.IColumn,
		setRowParent(owner: yfiles.graph.IRow, row: yfiles.graph.IRow): void,
		setColumnParent(owner: yfiles.graph.IColumn, column: yfiles.graph.IColumn): void,
		removeWithResize(stripe: yfiles.graph.IStripe): void,
		removeRecursively(stripe: yfiles.graph.IStripe): void,
		removeRecursivelyWithResize(stripe: yfiles.graph.IStripe): void,
		findStripes(
		node: yfiles.graph.INode, location: yfiles.geometry.PointD, stripeTypes: yfiles.graph.StripeTypes, predicate: (obj: yfiles.graph.IStripe) => boolean
	): yfiles.collections.IEnumerable<yfiles.graph.IStripe>,
		createGrid(columns: number, rows: number): void,
		clear(): void,
		adjustPreferredSize(label: yfiles.graph.ILabel): void,
		getAccumulatedInsets(): yfiles.geometry.InsetsD
	}

	declare export interface IPortLocationModel {
		getLocation(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.geometry.PointD,
		createParameter(
		portOwner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		getContext(
		port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.support.ILookup
	}

	declare export interface IPortDefaults {
		style: yfiles.drawing.IPortStyle,
		autoCleanup: boolean,
		shareStyleInstance: boolean,
		getStyleInstance(owner: yfiles.graph.IPortOwner): yfiles.drawing.IPortStyle,
		locationModelParameter: yfiles.graph.IPortLocationModelParameter,
		shareLocationModelParameterInstance: boolean,
		getLocationModelParameterInstance(owner: yfiles.graph.IPortOwner): yfiles.graph.IPortLocationModelParameter
	}

	declare export interface IStripe {
		insets: yfiles.geometry.InsetsD,
		layout: yfiles.geometry.IRectangle,
		style: yfiles.drawing.INodeStyle,
		size: number,
		minimumSize: number,
		table: yfiles.graph.ITable,
		isRoot(): boolean,
		getIndex(): number,
		getEffectiveMinSize(): number,
		getChildren(): yfiles.collections.IEnumerable<yfiles.graph.IStripe>,
		getParent(): yfiles.graph.IStripe,
		getRoot(): yfiles.graph.IStripe,
		getLeaves(): yfiles.collections.IEnumerable<yfiles.graph.IStripe>,
		getDescendants(): yfiles.collections.IEnumerable<yfiles.graph.IStripe>,
		getAbsoluteBounds(owner: yfiles.graph.INode): yfiles.geometry.RectD,
		getActualInsets(): yfiles.geometry.InsetsD,
		getActualSize(): number
	}

	declare export interface IPortSelectionTester {
		getPort(
		location: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext
	): yfiles.graph.IPort,
		getPorts(
		box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext
	): yfiles.collections.IEnumerable<yfiles.graph.IPort>
	}

	declare export interface IPortLocationModelParameter {
		model: yfiles.graph.IPortLocationModel,
		supports(portOwner: yfiles.graph.IPortOwner): boolean
	}

	declare export interface LayoutGraphAdapter {
		getLabelCandidateDescriptorProvider(graph: yfiles.graph.IGraph): yfiles.graph.ILabelCandidateDescriptorProvider,
		adaptedGraph: yfiles.graph.IGraph,
		selectionModel: yfiles.model.ISelectionModel<yfiles.model.IModelItem>,
		createNodeLayout(node: yfiles.graph.INode): yfiles.layout.INodeLayout,
		edgePortNodeSize: yfiles.geometry.SizeD,
		edgeToEdgeConnectionsIncluded: boolean,
		createEdgePortLayout(port: yfiles.graph.IPort): yfiles.layout.INodeLayout,
		setEdgePortLocation(port: yfiles.graph.IPort, newLocation: yfiles.geometry.PointD): void,
		setRelativePortLocation(port: yfiles.graph.IPort, newRelativeLocation: yfiles.geometry.PointD): void,
		createEdgeLayout(edge: yfiles.graph.IEdge): yfiles.layout.IEdgeLayout,
		getNodeLayout(o: Object): yfiles.layout.INodeLayout,
		getEdgeLayout(edge: Object): yfiles.layout.IEdgeLayout,
		getNodeLabelLayout(node: Object): yfiles.layout.INodeLabelLayout[],
		getEdgeLabelLayout(edge: Object): yfiles.layout.IEdgeLabelLayout[],
		getBoundingBox(): yfiles.algorithms.Rectangle,
		nodeObjects(): yfiles.algorithms.IIterator,
		edgeObjects(): yfiles.algorithms.IIterator,
		getSource(edgeObject: Object): Object,
		getTarget(edgeObject: Object): Object,
		getDataProvider(dataKey: Object): yfiles.algorithms.IDataProvider,
		dataProviderKeys: Object[],
		createNodeLabelCandidate(
		originalLabel: yfiles.graph.ILabel, dummyLabel: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter, ownerLayout: yfiles.layout.INodeLabelLayout
	): yfiles.layout.NodeLabelCandidate,
		getLabelCandidateDescriptor(
		originalLabel: yfiles.graph.ILabel, dummyLabel: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.graph.ILabelCandidateDescriptor,
		createEdgeLabelCandidate(
		originalLabel: yfiles.graph.ILabel, dummyLabel: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter, labelLayout: yfiles.layout.IEdgeLabelLayout
	): yfiles.layout.EdgeLabelCandidate
	}

	declare export interface TableLayoutConfigurator {
		minimalTableDistance: number,
		compactionEnabled: boolean,
		horizontalLayout: boolean,
		fromSketch: boolean,
		prepareAll(graph: yfiles.graph.IGraph): void,
		restoreAll(graph: yfiles.graph.IGraph): void,
		cleanUp(graph: yfiles.graph.IGraph): void,
		getColumnLayout(
		originalTable: yfiles.graph.ITable, nodeLayout: yfiles.geometry.RectD
	): number[],
		getRowLayout(
		originalTable: yfiles.graph.ITable, nodeLayout: yfiles.geometry.RectD
	): number[]
	}

	declare export interface YGraphAdapter {
		yGraph: yfiles.algorithms.Graph,
		originalGraph: yfiles.graph.IGraph,
		getOriginalNode(n: yfiles.algorithms.Node): yfiles.graph.INode,
		getOriginalEdge(e: yfiles.algorithms.Edge): yfiles.graph.IEdge,
		getCopiedNode(n: yfiles.graph.INode): yfiles.algorithms.Node,
		getCopiedEdge(e: yfiles.graph.IEdge): yfiles.algorithms.Edge,
		createEdgeEnumerable(
		el: yfiles.algorithms.EdgeList
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		createNodeEnumerable(
		nl: yfiles.algorithms.NodeList
	): yfiles.model.IListEnumerable<yfiles.graph.INode>,
		createEdgeList(
		el: yfiles.collections.IEnumerable<yfiles.graph.IEdge>
	): yfiles.algorithms.EdgeList,
		createNodeList(
		nl: yfiles.collections.IEnumerable<yfiles.graph.INode>
	): yfiles.algorithms.NodeList,
		createDataProviderForMapper<K, V>(
		keyType: yfiles.lang.Class, valueType: yfiles.lang.Class, mapper: yfiles.model.IMapper<K, V>
	): yfiles.algorithms.IDataProvider,
		createDataProviderForDelegate<K, V>(
		keyType: yfiles.lang.Class, valueType: yfiles.lang.Class, mapperDelegate: (key: K) => V
	): yfiles.algorithms.IDataProvider,
		createMapperForNodeMap<T>(
		nodeMap: yfiles.algorithms.INodeMap
	): yfiles.model.IMapper<yfiles.graph.INode, T>,
		createMapperForEdgeMap<T>(
		edgeMap: yfiles.algorithms.IEdgeMap
	): yfiles.model.IMapper<yfiles.graph.IEdge, T>,
		createMapper<T>(
		provider: yfiles.algorithms.IDataProvider
	): yfiles.model.IMapper<yfiles.model.IModelItem, T>,
		createDataMap<K, V>(
		keyType: yfiles.lang.Class, valueType: yfiles.lang.Class, mapper: yfiles.model.IMapper<K, V>
	): yfiles.algorithms.IDataMap,
		createNodeMap<V>(
		mapper: yfiles.model.IMapper<yfiles.graph.INode, V>
	): yfiles.algorithms.INodeMap,
		createNodeMapForDelegate<V>(mapperDelegate: (key: yfiles.graph.INode) => V): yfiles.algorithms.INodeMap,
		createEdgeMapForMapper<V>(
		mapper: yfiles.model.IMapper<yfiles.graph.IEdge, V>
	): yfiles.algorithms.IEdgeMap,
		createEdgeMapForDelegate<V>(mapperDelegate: (key: yfiles.graph.IEdge) => V): yfiles.algorithms.IEdgeMap
	}

	declare export interface FoldingManager {
		autoAdjustMasterGroupNodeBounds: boolean,
		dispose(): void,
		dummyEdgeConverter: yfiles.graph.IDummyEdgeConverter,
		dummyNodeConverter: yfiles.graph.IDummyNodeConverter,
		masterGraph: yfiles.graph.IGraph,
		masterHierarchy: yfiles.graph.IHierarchy<yfiles.graph.INode>,
		masterGroupedGraph: yfiles.graph.IGroupedGraph,
		prepareFoldedGraph(foldedGraph: yfiles.graph.IFoldedGraph): void,
		createManagedViewWithRootAndExpandedPredicate(
		root: yfiles.graph.INode, expandedPredicate: (obj: yfiles.graph.INode) => boolean
	): yfiles.graph.IFoldedGraph,
		createManagedViewWithRoot(root: yfiles.graph.INode): yfiles.graph.IFoldedGraph,
		createManagedView(): yfiles.graph.IFoldedGraph,
		views: yfiles.collections.IEnumerable<yfiles.graph.IFoldedGraph>,
		hasPortViewState(id: yfiles.graph.DummyNodePortId): boolean,
		hasNodeViewState(id: yfiles.graph.DummyNodeId): boolean,
		hasEdgeViewState(id: yfiles.graph.DummyEdgeId): boolean,
		getNodeViewState(nodeId: yfiles.graph.DummyNodeId): yfiles.graph.INode,
		getPortViewState(nodePortId: yfiles.graph.DummyNodePortId): yfiles.graph.IPort,
		getAllViewStates(
		masterEdge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.collections.KeyValuePair<yfiles.graph.DummyEdgeId, yfiles.graph.IEdge>>,
		getEdgeViewState(edgeId: yfiles.graph.DummyEdgeId): yfiles.graph.IEdge,
		updateViewStatesForEdge(masterEdge: yfiles.graph.IEdge): void,
		updateViewStatesForNode(masterNode: yfiles.graph.INode): void,
		getChangeDummyEdgeAppearanceCallback(
		edgeId: yfiles.graph.DummyEdgeId
	): yfiles.graph.IChangeDummyEdgeAppearanceCallback,
		getChangeDummyNodeAppearanceCallback(
		nodeId: yfiles.graph.DummyNodeId
	): yfiles.graph.IChangeDummyNodeAppearanceCallback,
		setInitiallyExpanded(groupNode: yfiles.graph.INode, expanded: boolean): void,
		isInitiallyExpanded(groupNode: yfiles.graph.INode): boolean,
		defaultExpandedPredicate: (obj: yfiles.graph.INode) => boolean
	}

	declare export interface GroupedGraphExtensions {
		
	}

	declare export interface FoldedGraphExtensions {
		
	}

	declare export interface ExtendedLabelCandidateProfitModel {
		getProfit(candidate: yfiles.layout.LabelCandidate): number
	}

	declare export interface ExtendedEdgeLabelCandidate {
		descriptor: yfiles.graph.ILabelCandidateDescriptor
	}

	declare export interface GraphExtensions {
		
	}

	declare export interface ExtendedNodeLabelCandidate {
		descriptor: yfiles.graph.ILabelCandidateDescriptor
	}

	declare export interface LayoutExtensions {
		
	}

	declare export interface LayoutExecutor {
		abortHandler: yfiles.algorithms.AbortHandler,
		tableLayoutConfigurator: yfiles.graph.TableLayoutConfigurator,
		configureTableNodeLayout: boolean,
		duration: yfiles.system.TimeSpan,
		finishHandler: (sender: Object, e: yfiles.system.EventArgs) => void,
		animateViewport: boolean,
		considerViewportLimiter: boolean,
		easedAnimation: boolean,
		targetBoundsInsets: yfiles.geometry.InsetsD,
		updateContentRect: boolean,
		start(): void,
		selectionModel: yfiles.model.ISelectionModel<yfiles.model.IModelItem>,
		prepareTableLayout(): void,
		createTableLayoutConfigurator(): yfiles.graph.TableLayoutConfigurator,
		execute(): void,
		restoreTableLayout(): void,
		createAnimation(): yfiles.canvas.IAnimation,
		createTableAnimations(): yfiles.canvas.IAnimation,
		layoutGraph: yfiles.graph.CopiedLayoutIGraph,
		control: yfiles.canvas.GraphControl,
		layouter: yfiles.layout.ILayouter,
		graph: yfiles.graph.IGraph,
		createViewportAnimation(targetBounds: yfiles.geometry.RectD): yfiles.canvas.IAnimation,
		createMorphAnimation(): yfiles.canvas.IAnimation
	}

	declare export interface LayoutExceptionEventArgs {
		exception: yfiles.lang.Exception
	}

	declare export interface IStripeDefaults {
		insets: yfiles.geometry.InsetsD,
		size: number,
		minimumSize: number,
		labels: yfiles.graph.ILabelDefaults,
		style: yfiles.drawing.INodeStyle,
		shareStyleInstance: boolean,
		getStyleInstance(): yfiles.drawing.INodeStyle
	}

	declare export interface LabelDefaults {
		autoAdjustPreferredSize: boolean,
		getStyleInstance(owner: yfiles.graph.ILabeledItem): yfiles.drawing.ILabelStyle,
		shareLabelModelParameterInstance: boolean,
		labelModelParameter: yfiles.graph.ILabelModelParameter,
		style: yfiles.drawing.ILabelStyle,
		shareStyleInstance: boolean,
		getLabelModelParameterInstance(owner: yfiles.graph.ILabeledItem): yfiles.graph.ILabelModelParameter
	}

	declare export interface EdgeDefaults {
		labels: yfiles.graph.ILabelDefaults,
		ports: yfiles.graph.IPortDefaults,
		style: yfiles.drawing.IEdgeStyle,
		shareStyleInstance: boolean,
		getStyleInstance(): yfiles.drawing.IEdgeStyle
	}

	declare export interface CopiedLayoutIGraph {
		commitLayoutToOriginalGraph(): void,
		selectionModel: yfiles.model.ISelectionModel<yfiles.model.IModelItem>
	}

	declare export interface StripeDefaults {
		insets: yfiles.geometry.InsetsD,
		size: number,
		minimumSize: number,
		labels: yfiles.graph.ILabelDefaults,
		style: yfiles.drawing.INodeStyle,
		shareStyleInstance: boolean,
		getStyleInstance(): yfiles.drawing.INodeStyle
	}

	declare export interface NodeDefaults {
		size: yfiles.geometry.SizeD,
		labels: yfiles.graph.ILabelDefaults,
		ports: yfiles.graph.IPortDefaults,
		style: yfiles.drawing.INodeStyle,
		shareStyleInstance: boolean,
		getStyleInstance(): yfiles.drawing.INodeStyle
	}

	declare export interface PortDefaults {
		autoCleanup: boolean,
		getStyleInstance(owner: yfiles.graph.IPortOwner): yfiles.drawing.IPortStyle,
		locationModelParameter: yfiles.graph.IPortLocationModelParameter,
		getLocationModelParameterInstance(owner: yfiles.graph.IPortOwner): yfiles.graph.IPortLocationModelParameter,
		shareLocationModelParameterInstance: boolean,
		style: yfiles.drawing.IPortStyle,
		shareStyleInstance: boolean,
		getPortStyleInstance(): yfiles.drawing.IPortStyle
	}

	declare export interface IClipboardIdProvider {
		getId(
		originalItem: yfiles.model.IModelItem, context: yfiles.graph.IGraphClipboardContext
	): Object,
		getItem(
		id: Object, context: yfiles.graph.IGraphClipboardContext
	): yfiles.model.IModelItem
	}

	declare export interface GraphClipboard {
		pasteDelta: yfiles.geometry.PointD,
		createClipBoardHelperCutFilter(): (obj: yfiles.model.IModelItem) => boolean,
		createClipBoardHelperPasteFilter(): (obj: yfiles.model.IModelItem) => boolean,
		createDefaultCutFilter(
		selection: yfiles.graph.IGraphSelection, graph: yfiles.graph.IGraph
	): (obj: yfiles.model.IModelItem) => boolean,
		createDefaultCopyFilter(
		selection: yfiles.graph.IGraphSelection, graph: yfiles.graph.IGraph
	): (obj: yfiles.model.IModelItem) => boolean,
		createDefaultDuplicateFilter(
		selection: yfiles.graph.IGraphSelection, graph: yfiles.graph.IGraph
	): (obj: yfiles.model.IModelItem) => boolean,
		clipboardContext: yfiles.graph.IGraphClipboardContext,
		createContext(
		sourceGraph: yfiles.graph.IGraph, targetGraph: yfiles.graph.IGraph
	): yfiles.graph.IGraphClipboardContext,
		createClipBoardHelperCopyFilter(): (obj: yfiles.model.IModelItem) => boolean,
		createSelectionFilter(
		selection: yfiles.graph.IGraphSelection, graph: yfiles.graph.IGraph
	): (obj: yfiles.model.IModelItem) => boolean,
		createClipboardGraph(): yfiles.graph.IGraph,
		empty: boolean,
		cut(
		sourceGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean
	): void,
		toClipboardCopier: yfiles.graph.GraphCopier,
		fromClipboardCopier: yfiles.graph.GraphCopier,
		duplicateCopier: yfiles.graph.GraphCopier,
		createToClipboardCopier(): yfiles.graph.GraphCopier,
		createFromClipboardCopier(): yfiles.graph.GraphCopier,
		createDuplicateCopier(): yfiles.graph.GraphCopier,
		idProvider: yfiles.graph.IClipboardIdProvider,
		createDefaultClipboardIdProvider(): yfiles.graph.IClipboardIdProvider,
		copyGraphToRoot(
		sourceGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean, targetGraph: yfiles.graph.IGraph, targetRootNode: yfiles.graph.INode, elementCopiedDelegate: (original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem) => void
	): void,
		pasteSubsetWithTargetAndCallback(
		sourceGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean, targetGraph: yfiles.graph.IGraph, targetRootNode: yfiles.graph.INode, elementCopiedDelegate: (original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem) => void, targetFilter: (obj: yfiles.model.IModelItem) => boolean
	): void,
		removeElements(
		sourceGraph: yfiles.graph.IGraph, predicate: (obj: yfiles.model.IModelItem) => boolean
	): void,
		copy(
		sourceGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean
	): void,
		clear(): void,
		paste(targetGraph: yfiles.graph.IGraph): void,
		pasteSubset(
		targetGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean
	): void,
		pasteWithSelection(
		targetGraph: yfiles.graph.IGraph, graphSelection: yfiles.graph.IGraphSelection
	): void,
		pasteSubsetWithCallback(
		targetGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean, elementPasted: (original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem) => void
	): void,
		pasteSubsetWithCallbackAndContext(
		targetGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean, elementPasted: (original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem) => void, inputModeContext: yfiles.input.IInputModeContext, targetFilter: (obj: yfiles.model.IModelItem) => boolean
	): void,
		onElementCut(original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem): void,
		getClipboardHelper(item: yfiles.model.IModelItem): yfiles.graph.IClipboardHelper,
		onElementCopied(original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem): void,
		getMemento(clipboardModelItem: yfiles.model.IModelItem): Object,
		onElementPasted(original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem): void,
		adjustItemPosition(copiedItem: yfiles.model.IModelItem): void,
		adjustEdgePosition(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, edgeViewState: yfiles.graph.IEdge
	): void,
		adjustNodePosition(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, nodeViewState: yfiles.graph.INode
	): void,
		clipboardGraph: yfiles.graph.IGraph,
		getTargetLabel(originalLabel: yfiles.graph.ILabel): yfiles.graph.ILabeledItem,
		getTargetPort(originalPort: yfiles.graph.IPort): yfiles.graph.IPortOwner,
		getTargetEdge(originalEdge: yfiles.graph.IEdge, atSource: boolean): yfiles.graph.IPort,
		getTargetBend(originalBend: yfiles.graph.IBend): yfiles.graph.IEdge,
		getTargetNode(originalNode: yfiles.graph.INode): yfiles.graph.INode,
		parentNodeDetection: yfiles.graph.GraphClipboard.ParentNodeDetectionMode_Interface,
		dependentCopyItems: yfiles.graph.GraphItemTypes,
		independentCopyItems: yfiles.graph.GraphItemTypes,
		copyItems: yfiles.graph.GraphItemTypes,
		getLabelModelParameter(
		copier: yfiles.graph.GraphCopier, graph: yfiles.graph.IGraph, label: yfiles.graph.ILabel, newOwner: yfiles.graph.ILabeledItem
	): yfiles.graph.ILabelModelParameter,
		getPortLocationModelParameter(
		copier: yfiles.graph.GraphCopier, graph: yfiles.graph.IGraph, originalPort: yfiles.graph.IPort, newOwner: yfiles.graph.IPortOwner
	): yfiles.graph.IPortLocationModelParameter,
		adjustGroupNodeBounds(
		context: yfiles.graph.IGraphClipboardContext, groupsToAdjust: yfiles.collections.IEnumerable<yfiles.graph.INode>
	): void,
		getViewState(
		edge: yfiles.graph.IEdge, dummyEdgeId: yfiles.graph.DummyEdgeId
	): yfiles.graph.IEdge,
		isDummy(item: yfiles.model.IModelItem): boolean,
		ignoreEdgesWithOneNode: boolean,
		duplicate(
		sourceGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean, elementDuplicated: (original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem) => void, inputModeContext: yfiles.input.IInputModeContext
	): void
	}

	declare export interface IClipboardHelper {
		shouldCopy(context: yfiles.graph.IGraphClipboardContext, item: Object): boolean,
		shouldCut(context: yfiles.graph.IGraphClipboardContext, item: Object): boolean,
		shouldPaste(
		context: yfiles.graph.IGraphClipboardContext, item: Object, userData: Object
	): boolean,
		copy(context: yfiles.graph.IGraphClipboardContext, item: Object): Object,
		cut(context: yfiles.graph.IGraphClipboardContext, item: Object): Object,
		paste(
		context: yfiles.graph.IGraphClipboardContext, item: Object, userData: Object
	): void
	}

	declare export interface IGraphClipboardContext {
		clipboard: yfiles.graph.GraphClipboard,
		sourceGraph: yfiles.graph.IGraph,
		targetGraph: yfiles.graph.IGraph
	}

	declare export interface ItemCopiedEventArgs<T> {
		original: T,
		copy: T
	}

	declare export interface GraphCopier {
		clone: yfiles.graph.GraphCopier.CloneTypes_Interface,
		onObjectCopied(itemCopiedEventArgs: yfiles.graph.ItemCopiedEventArgs<Object>): void,
		copyEdgeStyle(
		graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge
	): yfiles.drawing.IEdgeStyle,
		copyPortStyle(
		graph: yfiles.graph.IGraph, port: yfiles.graph.IPort
	): yfiles.drawing.IPortStyle,
		copyNodeStyle(
		graph: yfiles.graph.IGraph, node: yfiles.graph.INode
	): yfiles.drawing.INodeStyle,
		copyLabelStyle(
		graph: yfiles.graph.IGraph, label: yfiles.graph.ILabel
	): yfiles.drawing.ILabelStyle,
		copyLabelModelParameter(
		graph: yfiles.graph.IGraph, label: yfiles.graph.ILabel
	): yfiles.graph.ILabelModelParameter,
		copyPortLocationModelParameter(
		graph: yfiles.graph.IGraph, port: yfiles.graph.IPort
	): yfiles.graph.IPortLocationModelParameter,
		referentialIdentityTypes: yfiles.graph.GraphCopier.CloneTypes_Interface,
		getCopy<T>(itemType: yfiles.lang.Class, original: T, copy: {
		value: T
	}): boolean,
		cacheCopy<T>(original: T, copy: T): void,
		copyGrouping: boolean,
		copyViewStates: boolean,
		copyGraph(
		sourceGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean, targetGraph: yfiles.graph.IGraph, elementCopiedDelegate: (original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem) => void
	): void,
		copyGraphToRoot(
		sourceGraph: yfiles.graph.IGraph, filter: (obj: yfiles.model.IModelItem) => boolean, targetGraph: yfiles.graph.IGraph, targetRoot: yfiles.graph.INode, elementCopiedDelegate: (original: yfiles.model.IModelItem, copy: yfiles.model.IModelItem) => void
	): void,
		getTargetFoldingManager(targetGraph: yfiles.graph.IGraph): yfiles.graph.IFoldingManager,
		getSourceFoldingManager(sourceGraph: yfiles.graph.IGraph): yfiles.graph.IFoldingManager,
		getTargetGroupedGraph(targetGraph: yfiles.graph.IGraph): yfiles.graph.IGroupedGraph,
		getSourceHierarchy(sourceGraph: yfiles.graph.IGraph): yfiles.graph.IHierarchy<yfiles.graph.INode>,
		clearCopyCache(): void,
		addBend(
		sourceGraph: yfiles.graph.IGraph, targetGraph: yfiles.graph.IGraph, targetEdge: yfiles.graph.IEdge, sourceBend: yfiles.graph.IBend, index: number
	): yfiles.graph.IBend,
		copyEdge(
		sourceGraph: yfiles.graph.IGraph, targetGraph: yfiles.graph.IGraph, sourceEdge: yfiles.graph.IEdge, targetSourcePort: yfiles.graph.IPort, targetTargetPort: yfiles.graph.IPort
	): yfiles.graph.IEdge,
		addPort(
		sourceGraph: yfiles.graph.IGraph, targetGraph: yfiles.graph.IGraph, targetPortOwner: yfiles.graph.IPortOwner, sourcePort: yfiles.graph.IPort
	): yfiles.graph.IPort,
		addLabel(
		sourceGraph: yfiles.graph.IGraph, targetGraph: yfiles.graph.IGraph, targetItem: yfiles.graph.ILabeledItem, sourceLabel: yfiles.graph.ILabel
	): yfiles.graph.ILabel,
		copyNode(
		sourceGraph: yfiles.graph.IGraph, targetGraph: yfiles.graph.IGraph, sourceNode: yfiles.graph.INode
	): yfiles.graph.INode,
		copyGroupNode(
		sourceGraph: yfiles.graph.IGraph, targetGraph: yfiles.graph.IGroupedGraph, sourceGroupNode: yfiles.graph.INode, targetParent: yfiles.graph.INode
	): yfiles.graph.INode,
		copyNodeWithParent(
		sourceGraph: yfiles.graph.IGraph, targetGroupedGraph: yfiles.graph.IGroupedGraph, sourceNode: yfiles.graph.INode, targetParent: yfiles.graph.INode
	): yfiles.graph.INode,
		copyLabelTag(oldLabel: yfiles.graph.ILabel, tag: Object): Object,
		copyEdgeTag(oldEdge: yfiles.graph.IEdge, tag: Object): Object,
		copyPortTag(oldPort: yfiles.graph.IPort, tag: Object): Object,
		copyNodeTag(oldNode: yfiles.graph.INode, tag: Object): Object,
		copyTag(oldOwner: yfiles.model.IModelItem, tag: Object): Object,
		getOrCreateCopy<T>(tType: yfiles.lang.Class, original: T, copyDelegate: (context: T) => T): T,
		addNodeCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.INode>
	) => void
	): void,
		removeNodeCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.INode>
	) => void
	): void,
		addBendCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.IBend>
	) => void
	): void,
		removeBendCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.IBend>
	) => void
	): void,
		addObjectCopiedListener(
		value: (sender: Object, e: yfiles.graph.ItemCopiedEventArgs<Object>) => void
	): void,
		removeObjectCopiedListener(
		value: (sender: Object, e: yfiles.graph.ItemCopiedEventArgs<Object>) => void
	): void,
		addEdgeCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.IEdge>
	) => void
	): void,
		removeEdgeCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.IEdge>
	) => void
	): void,
		addPortCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.IPort>
	) => void
	): void,
		removePortCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.IPort>
	) => void
	): void,
		addLabelCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.ILabel>
	) => void
	): void,
		removeLabelCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.ILabel>
	) => void
	): void,
		addGraphCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.IGraph>
	) => void
	): void,
		removeGraphCopiedListener(
		value: (
		sender: Object, e: yfiles.graph.ItemCopiedEventArgs<yfiles.graph.IGraph>
	) => void
	): void,
		onNodeCopied(original: yfiles.graph.INode, copy: yfiles.graph.INode): void,
		onBendCopied(original: yfiles.graph.IBend, copy: yfiles.graph.IBend): void,
		onEdgeCopied(original: yfiles.graph.IEdge, copy: yfiles.graph.IEdge): void,
		onLabelCopied(original: yfiles.graph.ILabel, copy: yfiles.graph.ILabel): void,
		onPortCopied(original: yfiles.graph.IPort, copy: yfiles.graph.IPort): void,
		onGraphCopied(sourceGraph: yfiles.graph.IGraph, targetGraph: yfiles.graph.IGraph): void
	}

	declare export interface CompositeGraph {
		dispose(): void,
		createEdgeWithPortsStyleAndTag(
		sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort, style: yfiles.drawing.IEdgeStyle, tag: Object
	): yfiles.graph.IEdge,
		createEdgeWithNodesStyleAndTag(
		source: yfiles.graph.INode, target: yfiles.graph.INode, style: yfiles.drawing.IEdgeStyle, tag: Object
	): yfiles.graph.IEdge,
		setPorts(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		typedEdgesAtPort(
		port: yfiles.graph.IPort, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		typedEdgesAtOwner(
		portOwner: yfiles.graph.IPortOwner, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		setNodeStyle(node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		setEdgeStyle(edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle): void,
		setPortStyle(port: yfiles.graph.IPort, style: yfiles.drawing.IPortStyle): void,
		addBend(
		edge: yfiles.graph.IEdge, index: number, location: yfiles.geometry.PointD
	): yfiles.graph.IBend,
		addLabelWithParameterStylePreferredSizeAndTag(
		item: yfiles.graph.ILabeledItem, labelModelParameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD, tag: Object
	): yfiles.graph.ILabel,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		setBendLocation(bend: yfiles.graph.IBend, location: yfiles.geometry.PointD): void,
		setPreferredSize(label: yfiles.graph.ILabel, preferredSize: yfiles.geometry.SizeD): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		setLocationModelParameter(
		port: yfiles.graph.IPort, location: yfiles.graph.IPortLocationModelParameter
	): void,
		setBounds(node: yfiles.graph.INode, bounds: yfiles.geometry.RectD): void,
		removeNode(node: yfiles.graph.INode): void,
		removeEdge(edge: yfiles.graph.IEdge): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		removePort(port: yfiles.graph.IPort): void,
		removeBend(bend: yfiles.graph.IBend): void,
		nodes: yfiles.model.ICollectionModel<yfiles.graph.INode>,
		collectionModel: yfiles.model.ICollectionModel<yfiles.model.IModelItem>,
		edges: yfiles.model.ICollectionModel<yfiles.graph.IEdge>,
		edgeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		nodeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		ports: yfiles.model.ICollectionModel<yfiles.graph.IPort>,
		bends: yfiles.model.ICollectionModel<yfiles.graph.IBend>,
		contains(item: yfiles.model.IModelItem): boolean
	}

	declare export interface DummyNodeId {
		masterNode: yfiles.graph.INode
	}

	declare export interface DummyNodePortId {
		masterPort: yfiles.graph.IPort,
		atDummy: boolean
	}

	declare export interface FilteredGraphWrapper {
		fullGraph: yfiles.graph.IGraph,
		nodePredicate: (obj: yfiles.graph.INode) => boolean,
		edgePredicate: (obj: yfiles.graph.IEdge) => boolean,
		lookup(type: yfiles.lang.Class): Object,
		typedEdgesAtPort(
		port: yfiles.graph.IPort, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		typedEdgesAtOwner(
		portOwner: yfiles.graph.IPortOwner, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		dispose(): void,
		nodePredicateChangedForNode(node: yfiles.graph.INode): void,
		nodePredicateChanged(): void,
		edgePredicateChangedForEdge(edge: yfiles.graph.IEdge): void,
		edgePredicateChanged(): void,
		collectionModel: yfiles.model.ICollectionModel<yfiles.model.IModelItem>,
		nodes: yfiles.model.ICollectionModel<yfiles.graph.INode>,
		edges: yfiles.model.ICollectionModel<yfiles.graph.IEdge>,
		edgeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		nodeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		ports: yfiles.model.ICollectionModel<yfiles.graph.IPort>,
		bends: yfiles.model.ICollectionModel<yfiles.graph.IBend>,
		contains(item: yfiles.model.IModelItem): boolean
	}

	declare export interface DummyEdgeId {
		masterEdge: yfiles.graph.IEdge,
		currentMasterSource: yfiles.graph.INode,
		currentMasterTarget: yfiles.graph.INode,
		sourceIsCollapsed: boolean,
		targetIsCollapsed: boolean
	}

	declare export interface GraphSelection {
		onItemSelected(itemEventArgs: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>): void,
		onItemDeselected(itemEventArgs: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>): void,
		createPortSelectionModel(): yfiles.model.DefaultSelectionModel<yfiles.graph.IPort>,
		createBendSelectionModel(): yfiles.model.DefaultSelectionModel<yfiles.graph.IBend>,
		createLabelSelectionModel(): yfiles.model.DefaultSelectionModel<yfiles.graph.ILabel>,
		createNodeSelectionModel(): yfiles.model.DefaultSelectionModel<yfiles.graph.INode>,
		createEdgeSelectionModel(): yfiles.model.DefaultSelectionModel<yfiles.graph.IEdge>,
		setNodeSelected(node: yfiles.graph.INode, selected: boolean): void,
		isNodeSelected(node: yfiles.graph.INode): boolean,
		setEdgeSelected(edge: yfiles.graph.IEdge, selected: boolean): void,
		isEdgeSelected(edge: yfiles.graph.IEdge): boolean,
		setBendSelected(bend: yfiles.graph.IBend, selected: boolean): void,
		isBendSelected(bend: yfiles.graph.IBend): boolean,
		setLabelSelected(label: yfiles.graph.ILabel, selected: boolean): void,
		isLabelSelected(label: yfiles.graph.ILabel): boolean,
		setPortSelected(port: yfiles.graph.IPort, selected: boolean): void,
		isPortSelected(port: yfiles.graph.IPort): boolean,
		selectedNodes: yfiles.model.ISelectionModel<yfiles.graph.INode>,
		selectedEdges: yfiles.model.ISelectionModel<yfiles.graph.IEdge>,
		selectedLabels: yfiles.model.ISelectionModel<yfiles.graph.ILabel>,
		selectedPorts: yfiles.model.ISelectionModel<yfiles.graph.IPort>,
		selectedBends: yfiles.model.ISelectionModel<yfiles.graph.IBend>,
		isSelected(o: yfiles.model.IModelItem): boolean,
		setSelected(o: yfiles.model.IModelItem, selected: boolean): void,
		count: number,
		graph: yfiles.graph.IGraph,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.model.IModelItem>,
		addItemSelectedListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemSelectedListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemDeselectedListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemDeselectedListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		clear(): void
	}

	declare export interface GroupedGraph {
		onNodeChanged(node: yfiles.graph.INode): void,
		onNodeCreated(parent: yfiles.graph.INode, node: yfiles.graph.INode): void,
		onGroupNodeCreated(parent: yfiles.graph.INode, node: yfiles.graph.INode): void,
		graph: yfiles.graph.IGraph,
		groupNodeDefaults: yfiles.graph.INodeDefaults,
		createGroupNodeDefaults(): yfiles.graph.INodeDefaults,
		createGroupNodePortDefaults(): yfiles.graph.IPortDefaults,
		createGroupNodeLabelDefaults(): yfiles.graph.ILabelDefaults,
		onNodeRemoved(node: yfiles.graph.INode): void,
		autoAdjustGroupNodeBounds: boolean,
		hierarchy: yfiles.graph.IHierarchy<yfiles.graph.INode>,
		createDefaultGroupNodeStyle(): yfiles.drawing.INodeStyle,
		setParent(node: yfiles.graph.INode, parent: yfiles.graph.INode): void,
		createGroupNodeWithParentBoundsStyleAndTag(
		parent: yfiles.graph.INode, bounds: yfiles.geometry.RectD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.INode,
		getParent(node: yfiles.graph.INode): yfiles.graph.INode,
		createNodeWithParentBoundsStyleAndTag(
		parent: yfiles.graph.INode, bounds: yfiles.geometry.RectD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.INode,
		dispose(): void
	}

	declare export interface GraphObstacleProvider {
		queryEdges: boolean,
		queryNodes: boolean,
		getObstacles(canvasContext: yfiles.drawing.IRenderContext): yfiles.drawing.GeneralPath,
		getGraph(canvasContext: yfiles.drawing.IRenderContext): yfiles.graph.IGraph
	}

	declare export interface ItemDecorator<TModelItem> {
		decorator: yfiles.support.ILookupDecorator,
		getDecoratorFor<TInterface>(
		InterfaceType: yfiles.lang.Class
	): yfiles.graph.LookupDecorator<TModelItem, TInterface>,
		getDecoratorWithOptions<TInterface>(
		InterfaceType: yfiles.lang.Class, decorateNulls: boolean, nullIsFallback: boolean
	): yfiles.graph.LookupDecorator<TModelItem, TInterface>,
		positionHandlerDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.input.IPositionHandler>,
		clipboardHelperDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.graph.IClipboardHelper>,
		marqueeTestableDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.drawing.IMarqueeTestable>,
		mementoSupportDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.support.IMementoSupport>,
		selectionDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.model.ISelectionInstaller>,
		highlightDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.input.IHighlightInstaller>,
		focusIndicatorDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.input.IFocusIndicatorInstaller>,
		handleProviderDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.input.IHandleProvider>,
		obstacleProviderDecorator: yfiles.graph.LookupDecorator<TModelItem, yfiles.model.IObstacleProvider>
	}

	declare export interface LabelDecorator {
		labelModelParameterFinderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.ILabel, yfiles.graph.ILabelModelParameterFinder>,
		editLabelHelperDecorator: yfiles.graph.LookupDecorator<yfiles.graph.ILabel, yfiles.input.IEditLabelHelper>,
		labelModelParameterProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.ILabel, yfiles.graph.ILabelModelParameterProvider>,
		labelSnapContextHelperDecorator: yfiles.graph.LookupDecorator<yfiles.graph.ILabel, yfiles.input.ILabelSnapContextHelper>
	}

	declare export interface GraphDecoratorExtensions {
		
	}

	declare export interface GraphDecorator {
		nodeDecorator: yfiles.graph.NodeDecorator,
		edgeDecorator: yfiles.graph.EdgeDecorator,
		labelDecorator: yfiles.graph.LabelDecorator,
		portDecorator: yfiles.graph.PortDecorator,
		bendDecorator: yfiles.graph.BendDecorator
	}

	declare export interface EdgeDecorator {
		edgePortCandidateProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.IEdgePortCandidateProvider>,
		portCandidateProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.IPortCandidateProvider>,
		edgePortHandleProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.IEdgePortHandleProvider>,
		orthogonalEdgeHelperDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.IOrthogonalEdgeHelper>,
		edgeSnapResultProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.IEdgeSnapResultProvider>,
		editLabelHelperDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.IEditLabelHelper>,
		bendCreatorDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.IBendCreator>,
		bendSelectionTesterDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.IBendSelectionTester>,
		snapLineProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IEdge, yfiles.input.ISnapLineProvider>
	}

	declare export interface NodeDecorator {
		reshapeHandleProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.input.IReshapeHandleProvider>,
		editLabelHelperDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.input.IEditLabelHelper>,
		shapeGeometryDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.drawing.IShapeGeometry>,
		sizeConstraintProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.input.ISizeConstraintProvider<yfiles.graph.INode>>,
		groupBoundsCalculatorDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.drawing.IGroupBoundsCalculator>,
		insetsProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.drawing.IInsetsProvider<yfiles.graph.INode>>,
		portCandidateProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.input.IPortCandidateProvider>,
		snapLineProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.input.ISnapLineProvider>,
		nodeSnapResultProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.input.INodeSnapResultProvider>,
		nodeReshapeSnapResultProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.INode, yfiles.input.INodeReshapeSnapResultProvider>
	}

	declare export interface LookupDecorator<TDecoratedType, TInterface> {
		decorator: yfiles.support.ILookupDecorator,
		decorateNulls: boolean,
		nullIsFallback: boolean,
		setImplementationForItem(
		forItem: TDecoratedType, implementation: TInterface
	): yfiles.support.IContextLookupChainLink,
		setImplementationWithPredicate(
		predicate: (obj: TDecoratedType) => boolean, implementation: TInterface
	): yfiles.support.IContextLookupChainLink,
		setImplementation(singletonImplementation: TInterface): yfiles.support.IContextLookupChainLink,
		setFactoryWithPredicate(
		predicate: (obj: TDecoratedType) => boolean, factory: (context: TDecoratedType) => TInterface
	): yfiles.support.IContextLookupChainLink,
		setImplementationWrapperWithPredicate(
		predicate: (obj: TDecoratedType) => boolean, factory: (item: TDecoratedType, baseImplementation: TInterface) => TInterface
	): yfiles.support.IContextLookupChainLink,
		setFactory(
		factory: (context: TDecoratedType) => TInterface
	): yfiles.support.IContextLookupChainLink,
		setImplementationWrapper(
		factory: (item: TDecoratedType, baseImplementation: TInterface) => TInterface
	): yfiles.support.IContextLookupChainLink,
		hideImplementation(): yfiles.support.IContextLookupChainLink,
		hideImplementationWithPredicate(
		predicate: (obj: TDecoratedType) => boolean
	): yfiles.support.IContextLookupChainLink,
		addChainLink(
		link: yfiles.support.IContextLookupChainLink
	): yfiles.support.IContextLookupChainLink
	}

	declare export interface BendDecorator {
		handleDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IBend, yfiles.input.IHandle>,
		bendSnapResultProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IBend, yfiles.input.IBendSnapResultProvider>
	}

	declare export interface PortDecorator {
		handleDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IPort, yfiles.input.IHandle>,
		edgeIntersectionDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IPort, yfiles.drawing.IEdgeIntersectionCalculator>,
		snapLineProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IPort, yfiles.input.ISnapLineProvider>,
		portSnapResultProviderDecorator: yfiles.graph.LookupDecorator<yfiles.graph.IPort, yfiles.input.IPortSnapResultProvider>
	}

	declare export interface ExcludingDummyEdgeConverter {
		addDummyEdge(
		callback: yfiles.graph.IAddDummyEdgeCallback, foldedGraph: yfiles.graph.IFoldedGraph, masterEdge: yfiles.graph.IEdge, localSourceNode: yfiles.graph.INode, sourceDummy: boolean, localTargetNode: yfiles.graph.INode, targetDummy: boolean
	): yfiles.graph.IEdge,
		changeDummyEdgeAppearance(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void,
		createDummyEdgeAppearance(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void
	}

	declare export interface MergingDummyEdgeConverter {
		ignoreEdgeDirection: boolean,
		addDummyEdge(
		callback: yfiles.graph.IAddDummyEdgeCallback, foldedGraph: yfiles.graph.IFoldedGraph, masterEdge: yfiles.graph.IEdge, localSourceNode: yfiles.graph.INode, sourceDummy: boolean, localTargetNode: yfiles.graph.INode, targetDummy: boolean
	): yfiles.graph.IEdge,
		addFirstSeparateEdge(
		callback: yfiles.graph.IAddDummyEdgeCallback, foldedGraph: yfiles.graph.IFoldedGraph, masterEdge: yfiles.graph.IEdge, localSourceNode: yfiles.graph.INode, sourceDummy: boolean, localTargetNode: yfiles.graph.INode, targetDummy: boolean
	): yfiles.graph.IEdge
	}

	declare export interface DefaultDummyEdgeConverter {
		reuseMasterPorts: boolean,
		reuseDummyNodePorts: boolean,
		addDummyEdge(
		callback: yfiles.graph.IAddDummyEdgeCallback, foldedGraph: yfiles.graph.IFoldedGraph, masterEdge: yfiles.graph.IEdge, localSourceNode: yfiles.graph.INode, sourceDummy: boolean, localTargetNode: yfiles.graph.INode, targetDummy: boolean
	): yfiles.graph.IEdge
	}

	declare export interface DefaultDummyNodeConverter {
		collapsedNodeStyle: yfiles.drawing.INodeStyle,
		copyFirstLabel: boolean,
		firstLabelStyle: yfiles.drawing.ILabelStyle,
		firstLabelModelParameter: yfiles.graph.ILabelModelParameter,
		portStyle: yfiles.drawing.IPortStyle,
		initialSize: yfiles.geometry.SizeD,
		resetPortLocation: boolean,
		cloneNodeStyle: boolean,
		clonePortStyle: boolean,
		changeDummyNodeAppearance(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localCollapsedNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void,
		synchronizeLabels(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localCollapsedNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void,
		createDummyNodeAppearance(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localCollapsedNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void,
		createInitialPorts(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localCollapsedNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void,
		createInitialStyle(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localCollapsedNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void,
		createNodeStyle(
		foldedGraph: yfiles.graph.IFoldedGraph, localCollapsedNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): yfiles.drawing.INodeStyle,
		createPortStyle(
		foldedGraph: yfiles.graph.IFoldedGraph, localPort: yfiles.graph.IPort, masterPort: yfiles.graph.IPort
	): yfiles.drawing.IPortStyle,
		createInitialLabels(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localCollapsedNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void,
		createInitialLayout(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localCollapsedNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void
	}

	declare export interface SimpleEdge {
		style: yfiles.drawing.IEdgeStyle,
		bends: yfiles.model.IListEnumerable<yfiles.graph.IBend>,
		sourcePort: yfiles.graph.IPort,
		targetPort: yfiles.graph.IPort,
		ports: yfiles.model.IListEnumerable<yfiles.graph.IPort>,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface DefaultEdgeLookup {
		edge: yfiles.graph.IEdge,
		chainedLookup(
		edge: yfiles.graph.IEdge, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface AbstractDummyEdgeConverter {
		cloneEdgeStyle: boolean,
		dummySourcePortStyle: yfiles.drawing.IPortStyle,
		dummyTargetPortStyle: yfiles.drawing.IPortStyle,
		firstLabelStyle: yfiles.drawing.ILabelStyle,
		firstLabelModelParameter: yfiles.graph.ILabelModelParameter,
		resetDummyPorts: boolean,
		dummyEdgeStyle: yfiles.drawing.IEdgeStyle,
		resetBends: boolean,
		copyFirstLabel: boolean,
		addDummyEdge(
		callback: yfiles.graph.IAddDummyEdgeCallback, foldedGraph: yfiles.graph.IFoldedGraph, masterEdge: yfiles.graph.IEdge, localSourceNode: yfiles.graph.INode, sourceDummy: boolean, localTargetNode: yfiles.graph.INode, targetDummy: boolean
	): yfiles.graph.IEdge,
		changeDummyEdgeAppearance(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void,
		synchronizeLabels(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void,
		createDummyEdgeAppearance(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void,
		createInitialStyle(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void,
		createEdgeStyle(
		foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): yfiles.drawing.IEdgeStyle,
		createInitialPorts(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void,
		createSourcePortLocationParameter(
		graph: yfiles.graph.IFoldedGraph, edge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): yfiles.graph.IPortLocationModelParameter,
		createTargetPortLocationParameter(
		graph: yfiles.graph.IFoldedGraph, edge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): yfiles.graph.IPortLocationModelParameter,
		createInitialBends(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void,
		createInitialLabels(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void
	}

	declare export interface AbstractModelItem {
		tag: Object,
		setLookupImplementation(newLookup: yfiles.support.ILookup): void,
		getLookup(): yfiles.support.ILookup,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface AbstractGraphWrapper {
		lookupInstance: yfiles.support.ILookup,
		graph: yfiles.graph.IGraph,
		dispose(): void,
		addEventHandlers(graph: yfiles.graph.IGraph): void,
		removeEventHandlers(graph: yfiles.graph.IGraph): void,
		graph_BendChanged(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IBend>
	): void,
		graph_DisplaysInvalidated(source: Object, eventArgs: yfiles.system.EventArgs): void,
		graph_BendRemoved(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IBend>
	): void,
		graph_BendAdded(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IBend>
	): void,
		graph_NodeChanged(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.INode>
	): void,
		graph_NodeRemoved(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.INode>
	): void,
		graph_NodeCreated(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.INode>
	): void,
		graph_PortChanged(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IPort>
	): void,
		graph_PortRemoved(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IPort>
	): void,
		graph_PortAdded(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IPort>
	): void,
		graph_LabelChanged(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>
	): void,
		graph_LabelRemoved(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>
	): void,
		graph_LabelAdded(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>
	): void,
		graph_EdgeChanged(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>
	): void,
		graph_EdgeRemoved(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>
	): void,
		graph_EdgeCreated(
		source: Object, eventArgs: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>
	): void,
		invalidateDisplays(): void,
		collectionModel: yfiles.model.ICollectionModel<yfiles.model.IModelItem>,
		nodes: yfiles.model.ICollectionModel<yfiles.graph.INode>,
		edges: yfiles.model.ICollectionModel<yfiles.graph.IEdge>,
		edgeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		nodeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		ports: yfiles.model.ICollectionModel<yfiles.graph.IPort>,
		bends: yfiles.model.ICollectionModel<yfiles.graph.IBend>,
		edgeDefaults: yfiles.graph.IEdgeDefaults,
		nodeDefaults: yfiles.graph.INodeDefaults,
		createEdgeWithPortsStyleAndTag(
		sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort, style: yfiles.drawing.IEdgeStyle, tag: Object
	): yfiles.graph.IEdge,
		createEdgeWithNodesStyleAndTag(
		source: yfiles.graph.INode, target: yfiles.graph.INode, style: yfiles.drawing.IEdgeStyle, tag: Object
	): yfiles.graph.IEdge,
		setPorts(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		typedEdgesAtPort(
		port: yfiles.graph.IPort, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		typedEdgesAtOwner(
		portOwner: yfiles.graph.IPortOwner, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		setNodeStyle(node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		setEdgeStyle(edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle): void,
		setPortStyle(port: yfiles.graph.IPort, style: yfiles.drawing.IPortStyle): void,
		contains(item: yfiles.model.IModelItem): boolean,
		addBend(
		edge: yfiles.graph.IEdge, index: number, location: yfiles.geometry.PointD
	): yfiles.graph.IBend,
		addPortWithParameterStyleAndTag(
		portOwner: yfiles.graph.IPortOwner, locationModelParameter: yfiles.graph.IPortLocationModelParameter, style: yfiles.drawing.IPortStyle, tag: Object
	): yfiles.graph.IPort,
		addLabelWithParameterStylePreferredSizeAndTag(
		item: yfiles.graph.ILabeledItem, labelModelParameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD, tag: Object
	): yfiles.graph.ILabel,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		setBendLocation(bend: yfiles.graph.IBend, location: yfiles.geometry.PointD): void,
		setPreferredSize(label: yfiles.graph.ILabel, preferredSize: yfiles.geometry.SizeD): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		setLocationModelParameter(
		port: yfiles.graph.IPort, location: yfiles.graph.IPortLocationModelParameter
	): void,
		setBounds(node: yfiles.graph.INode, bounds: yfiles.geometry.RectD): void,
		removeNode(node: yfiles.graph.INode): void,
		removeEdge(edge: yfiles.graph.IEdge): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		removePort(port: yfiles.graph.IPort): void,
		removeBend(bend: yfiles.graph.IBend): void,
		setLookup(newLookup: yfiles.support.ILookup): void,
		getLookup(): yfiles.support.ILookup,
		lookup(type: yfiles.lang.Class): Object,
		addNodeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addNodeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addNodeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addEdgeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addEdgeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addEdgeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addBendAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addBendRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addBendChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addPortAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		addPortRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		addPortChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		addDisplaysInvalidatedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeDisplaysInvalidatedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		mapperRegistry: yfiles.graph.IMapperRegistry,
		createNodeWithBoundsStyleAndTag(
		bounds: yfiles.geometry.RectD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.INode,
		onBendAdded(args: yfiles.model.ItemEventArgs<yfiles.graph.IBend>): void,
		onBendRemoved(args: yfiles.model.ItemEventArgs<yfiles.graph.IBend>): void,
		onPortAdded(args: yfiles.model.ItemEventArgs<yfiles.graph.IPort>): void,
		onPortRemoved(args: yfiles.model.ItemEventArgs<yfiles.graph.IPort>): void,
		onLabelAdded(args: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>): void,
		onLabelRemoved(args: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>): void,
		onNodeRemoved(args: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onEdgeRemoved(args: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>): void,
		onNodeCreated(args: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onBendChanged(args: yfiles.model.ItemEventArgs<yfiles.graph.IBend>): void,
		onEdgeChanged(args: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>): void,
		onEdgeCreated(args: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>): void,
		onNodeChanged(args: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onPortChanged(args: yfiles.model.ItemEventArgs<yfiles.graph.IPort>): void,
		onLabelChanged(args: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>): void,
		onInvalidateDisplays(args: yfiles.system.EventArgs): void
	}

	declare export interface AbstractLabeledItem {
		labels: yfiles.model.IListEnumerable<yfiles.graph.ILabel>
	}

	declare export interface DefaultBendLookup {
		bend: yfiles.graph.IBend,
		chainedLookup(
		bend: yfiles.graph.IBend, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface BendList {
		getItem(i: number): yfiles.graph.IBend,
		count: number,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.graph.IBend>,
		add(index: number, bend: yfiles.graph.IBend): void,
		remove(bend: yfiles.graph.IBend): void,
		clear(): void
	}

	declare export interface SimpleBend {
		owner: yfiles.graph.IEdge,
		location: yfiles.geometry.IPoint,
		x: number,
		y: number,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface SimplePort {
		style: yfiles.drawing.IPortStyle,
		locationModelParameter: yfiles.graph.IPortLocationModelParameter,
		owner: yfiles.graph.IPortOwner,
		location: yfiles.geometry.IPoint,
		lookup(type: yfiles.lang.Class): Object,
		setLocation(location: yfiles.geometry.PointD): void
	}

	declare export interface DefaultNodeLookup {
		chainedLookup(
		node: yfiles.graph.INode, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface DefaultPortLookup {
		port: yfiles.graph.IPort,
		chainedLookup(
		port: yfiles.graph.IPort, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface DefaultPortCandidateDescriptor {
		candidateSize: number,
		currentCandidateSize: number,
		currentPortCandidate: yfiles.input.IPortCandidate,
		setTemplate(key: yfiles.system.ResourceKey, template: yfiles.drawing.DataTemplate): void,
		updateVisual(
		ctx: yfiles.drawing.IRenderContext, oldVisual: yfiles.drawing.Visual
	): yfiles.drawing.Visual,
		getVisualCreator(forUserObject: Object): yfiles.drawing.IVisualCreator,
		isDirty(
		canvasObject: yfiles.canvas.ICanvasObject, context: yfiles.canvas.ICanvasContext
	): boolean,
		getBoundsProvider(forUserObject: Object): yfiles.drawing.IBoundsProvider,
		getVisibilityTest(forUserObject: Object): yfiles.drawing.IVisibilityTest,
		getHitTestable(forUserObject: Object): yfiles.drawing.IHitTestable,
		getBounds(ctx: yfiles.canvas.ICanvasContext): yfiles.geometry.RectD,
		isHit(p: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isVisible(clip: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		isInBox(box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext): boolean,
		createVisual(ctx: yfiles.drawing.IRenderContext): yfiles.drawing.Visual
	}

	declare export interface SimpleNode {
		layout: yfiles.geometry.IRectangle,
		style: yfiles.drawing.INodeStyle,
		ports: yfiles.model.IListEnumerable<yfiles.graph.IPort>,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface DefaultEdgeIntersectionCalculator {
		cropEdgePathWithEdgePathAtSourceAndArrow(
		edgePath: {
		value: yfiles.drawing.GeneralPath
	}, atSource: boolean, arrow: yfiles.drawing.IArrow
	): void,
		cropEdgePath(
		edge: yfiles.graph.IEdge, atSource: boolean, arrow: yfiles.drawing.IArrow, edgePath: {
		value: yfiles.drawing.GeneralPath
	}
	): void,
		calculateTotalCropLength(arrow: yfiles.drawing.IArrow, atSource: boolean): number,
		getIntersection(
		node: yfiles.graph.INode, nodeShapeGeometry: yfiles.drawing.IShapeGeometry, edge: yfiles.graph.IEdge, inner: yfiles.geometry.PointD, outer: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		inside(
		location: yfiles.geometry.PointD, node: yfiles.graph.INode, nodeShapeGeometry: yfiles.drawing.IShapeGeometry, edge: yfiles.graph.IEdge
	): boolean,
		getPortGeometry(port: yfiles.graph.IPort): yfiles.drawing.IShapeGeometry,
		extraCropLength: number,
		cropAtPort: boolean
	}

	declare export interface DefaultGraph {
		mapperRegistry: yfiles.graph.IMapperRegistry,
		createMapperRegistry(): yfiles.graph.IMapperRegistry,
		undoEngineEnabled: boolean,
		createUndoSupport(): yfiles.support.IUndoSupport,
		createUndoEngine(): yfiles.support.UndoEngine,
		addLookup(chainLink: yfiles.support.IContextLookupChainLink): void,
		removeLookup(chainLink: yfiles.support.IContextLookupChainLink): void,
		graphStructure: yfiles.graph.IGraphStructure,
		groupingSupported: boolean,
		edgeDefaults: yfiles.graph.IEdgeDefaults,
		nodeDefaults: yfiles.graph.INodeDefaults,
		createEdgeDefaults(): yfiles.graph.IEdgeDefaults,
		createEdgeLabelDefaults(): yfiles.graph.ILabelDefaults,
		createNodeLabelDefaults(): yfiles.graph.ILabelDefaults,
		createEdgePortDefaults(): yfiles.graph.IPortDefaults,
		createDefaultEdgePortLocationParameter(): yfiles.graph.IPortLocationModelParameter,
		createNodePortDefaults(): yfiles.graph.IPortDefaults,
		createDefaultNodePortLocationParameter(): yfiles.graph.IPortLocationModelParameter,
		createNodeDefaults(): yfiles.graph.INodeDefaults,
		setLookupImplementation(newLookup: yfiles.support.ILookup): void,
		getLookup(): yfiles.support.ILookup,
		createDefaultNodeLabelStyle(): yfiles.drawing.ILabelStyle,
		createDefaultEdgeLabelStyle(): yfiles.drawing.ILabelStyle,
		createDefaultNodeStyle(): yfiles.drawing.INodeStyle,
		createDefaultEdgeStyle(): yfiles.drawing.IEdgeStyle,
		getBounds(): yfiles.geometry.RectD,
		createNodeWithBoundsStyleAndTag(
		bounds: yfiles.geometry.RectD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.INode,
		onCreatingNode(node: yfiles.graph.INode): void,
		createEdgeWithNodesStyleAndTag(
		source: yfiles.graph.INode, target: yfiles.graph.INode, style: yfiles.drawing.IEdgeStyle, tag: Object
	): yfiles.graph.IEdge,
		getNewTargetPort(target: yfiles.graph.IPortOwner): yfiles.graph.IPort,
		getNewSourcePort(source: yfiles.graph.IPortOwner): yfiles.graph.IPort,
		setPorts(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		typedEdgesAtPort(
		port: yfiles.graph.IPort, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		typedEdgesAtOwner(
		portOwner: yfiles.graph.IPortOwner, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		createEdgeWithPortsStyleAndTag(
		sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort, style: yfiles.drawing.IEdgeStyle, tag: Object
	): yfiles.graph.IEdge,
		onCreatingEdge(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		contains(item: yfiles.model.IModelItem): boolean,
		setNodeStyle(node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		onChangingLabel(label: yfiles.graph.ILabel): void,
		onChangingNode(node: yfiles.graph.INode): void,
		onChangingBend(bend: yfiles.graph.IBend): void,
		onNodeChanged(node: yfiles.graph.INode): void,
		onBendChanged(bend: yfiles.graph.IBend): void,
		onLabelChanged(label: yfiles.graph.ILabel): void,
		setEdgeStyle(edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle): void,
		setPortStyle(port: yfiles.graph.IPort, style: yfiles.drawing.IPortStyle): void,
		onChangingEdge(edge: yfiles.graph.IEdge): void,
		onEdgeChanged(
		edge: yfiles.graph.IEdge, oldSource: yfiles.graph.IPort, oldTarget: yfiles.graph.IPort
	): void,
		onChangingPort(port: yfiles.graph.IPort): void,
		onPortChanged(port: yfiles.graph.IPort): void,
		addBend(
		edge: yfiles.graph.IEdge, index: number, location: yfiles.geometry.PointD
	): yfiles.graph.IBend,
		onAddingBend(edge: yfiles.graph.IEdge, bend: yfiles.graph.IBend, index: number): void,
		onBendAdded(bend: yfiles.graph.IBend): void,
		setBendLocation(bend: yfiles.graph.IBend, location: yfiles.geometry.PointD): void,
		removeBend(bend: yfiles.graph.IBend): void,
		onRemovingBend(bend: yfiles.graph.IBend): void,
		onBendRemoved(owner: yfiles.graph.IEdge, bend: yfiles.graph.IBend, index: number): void,
		addPortWithParameterStyleAndTag(
		portOwner: yfiles.graph.IPortOwner, locationModelParameter: yfiles.graph.IPortLocationModelParameter, portStyle: yfiles.drawing.IPortStyle, tag: Object
	): yfiles.graph.IPort,
		setLocationModelParameter(
		port: yfiles.graph.IPort, location: yfiles.graph.IPortLocationModelParameter
	): void,
		onAddingPort(node: yfiles.graph.IPortOwner, port: yfiles.graph.IPort): void,
		onPortAdded(port: yfiles.graph.IPort): void,
		removePort(port: yfiles.graph.IPort): void,
		onPortRemoved(oldOwner: yfiles.graph.IPortOwner, port: yfiles.graph.IPort): void,
		onRemovingPort(port: yfiles.graph.IPort): void,
		addLabelWithParameterStylePreferredSizeAndTag(
		item: yfiles.graph.ILabeledItem, labelModelParameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD, tag: Object
	): yfiles.graph.ILabel,
		createDefaultNodeLabelModelParameter(): yfiles.graph.ILabelModelParameter,
		createDefaultEdgeLabelModelParameter(): yfiles.graph.ILabelModelParameter,
		usePortCandidateProviders: boolean,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		onAddingNodeLabel(item: yfiles.graph.INode, label: yfiles.graph.ILabel): void,
		onAddingEdgeLabel(item: yfiles.graph.IEdge, label: yfiles.graph.ILabel): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		setPreferredSize(label: yfiles.graph.ILabel, size: yfiles.geometry.SizeD): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		onNodeLabelAdded(label: yfiles.graph.ILabel): void,
		onEdgeLabelAdded(label: yfiles.graph.ILabel): void,
		onRemovingNodeLabel(label: yfiles.graph.ILabel): void,
		onNodeLabelRemoved(owner: yfiles.graph.ILabeledItem, label: yfiles.graph.ILabel): void,
		onRemovingEdgeLabel(label: yfiles.graph.ILabel): void,
		onEdgeLabelRemoved(owner: yfiles.graph.ILabeledItem, label: yfiles.graph.ILabel): void,
		setBounds(node: yfiles.graph.INode, bounds: yfiles.geometry.RectD): void,
		collectionModel: yfiles.model.ICollectionModel<yfiles.model.IModelItem>,
		nodes: yfiles.model.ICollectionModel<yfiles.graph.INode>,
		edgeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		nodeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		bends: yfiles.model.ICollectionModel<yfiles.graph.IBend>,
		ports: yfiles.model.ICollectionModel<yfiles.graph.IPort>,
		edges: yfiles.model.ICollectionModel<yfiles.graph.IEdge>,
		invalidateDisplays(): void,
		onInvalidateDisplays(args: yfiles.system.EventArgs): void,
		removeNode(node: yfiles.graph.INode): void,
		removeEdge(edge: yfiles.graph.IEdge): void,
		addNodeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addNodeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addNodeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addEdgeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addEdgeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addEdgeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addBendAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addBendRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addBendChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addPortAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		addPortRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		addPortChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		addDisplaysInvalidatedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeDisplaysInvalidatedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		onRemovingNode(node: yfiles.graph.INode): void,
		onRemovingEdge(edge: yfiles.graph.IEdge): void,
		onNodeRemoved(node: yfiles.graph.INode): void,
		onEdgeRemoved(
		edge: yfiles.graph.IEdge, oldSource: yfiles.graph.IPort, oldTarget: yfiles.graph.IPort
	): void,
		onNodeCreated(node: yfiles.graph.INode): void,
		onEdgeCreated(edge: yfiles.graph.IEdge): void,
		lookup(type: yfiles.lang.Class): Object,
		innerLookup(type: yfiles.lang.Class): Object,
		toString(): string
	}

	declare export interface SimpleGraphStructure {
		createDefaultNode(): yfiles.graph.SimpleNode,
		createNodeLabelCollection(owner: yfiles.graph.INode): yfiles.model.IListEnumerable<yfiles.graph.ILabel>,
		createEdgeLabelCollection(owner: yfiles.graph.IEdge): yfiles.model.IListEnumerable<yfiles.graph.ILabel>,
		createPortCollection(owner: yfiles.graph.INode): yfiles.model.IListEnumerable<yfiles.graph.IPort>,
		createNodeLayout(): yfiles.geometry.IRectangle,
		nodes: yfiles.collections.ICollection<yfiles.graph.INode>,
		edges: yfiles.collections.ICollection<yfiles.graph.IEdge>,
		createNode(): yfiles.graph.INode,
		addNode(node: yfiles.graph.INode): void,
		createEdge(): yfiles.graph.IEdge,
		createDefaultEdge(): yfiles.graph.SimpleEdge,
		createBendList(): yfiles.model.IListEnumerable<yfiles.graph.IBend>,
		addEdge(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		removeNode(node: yfiles.graph.INode): void,
		removeEdge(edge: yfiles.graph.IEdge): void,
		getEdges(
		model: yfiles.graph.IPortOwner, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		getPortEdges(
		port: yfiles.graph.IPort, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		setNodeStyle(node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle): void,
		setPortStyle(port: yfiles.graph.IPort, style: yfiles.drawing.IPortStyle): void,
		setEdgeStyle(edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		createPort(owner: yfiles.graph.IPortOwner): yfiles.graph.IPort,
		createDefaultPort(owner: yfiles.graph.IPortOwner): yfiles.graph.SimplePort,
		addPort(
		portOwner: yfiles.graph.IPortOwner, port: yfiles.graph.IPort, parameter: yfiles.graph.IPortLocationModelParameter
	): void,
		removePort(port: yfiles.graph.IPort): void,
		containsItem(item: yfiles.model.IModelItem): boolean,
		containsNode(node: yfiles.graph.INode): boolean,
		containsEdge(edge: yfiles.graph.IEdge): boolean,
		containsPort(port: yfiles.graph.IPort): boolean,
		containsBend(bend: yfiles.graph.IBend): boolean,
		containsLabel(label: yfiles.graph.ILabel): boolean,
		createBend(forEdge: yfiles.graph.IEdge): yfiles.graph.IBend,
		createDefaultBend(forEdge: yfiles.graph.IEdge): yfiles.graph.SimpleBend,
		addBend(forEdge: yfiles.graph.IEdge, index: number, bend: yfiles.graph.IBend): void,
		removeBend(bend: yfiles.graph.IBend): void,
		createLabel(
		owner: yfiles.graph.ILabeledItem, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.graph.ILabel,
		createDefaultLabel(parameter: yfiles.graph.ILabelModelParameter): yfiles.graph.SimpleLabel,
		addLabel(owner: yfiles.graph.ILabeledItem, label: yfiles.graph.ILabel): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		setLocationModelParameter(
		port: yfiles.graph.IPort, locationModelParameter: yfiles.graph.IPortLocationModelParameter
	): void,
		setPorts(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void
	}

	declare export interface SimpleLabel {
		labelModelParameter: yfiles.graph.ILabelModelParameter,
		text: string,
		style: yfiles.drawing.ILabelStyle,
		owner: yfiles.graph.ILabeledItem,
		layout: yfiles.geometry.IOrientedRectangle,
		preferredSize: yfiles.geometry.SizeD,
		adoptPreferredSizeFromStyle(): void,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface DefaultLabelLookup {
		label: yfiles.graph.ILabel,
		chainedLookup(
		label: yfiles.graph.ILabel, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface DefaultHierarchy<T> {
		onItemAdded(item: T, parent: T): void,
		onItemRemoved(item: T, oldParent: T): void,
		onItemMoved(item: T, oldParent: T, newParent: T): void,
		onItemChanged(item: T, parent: T): void,
		root: T,
		addItemAddedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		removeItemAddedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		addItemRemovedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		removeItemRemovedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		addItemMovedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		removeItemMovedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		addItemChangedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		removeItemChangedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		publishItemChanged(item: T): void,
		contains(item: T): boolean,
		setLeaf(item: T, leaf: boolean): void,
		getChildren(item: T): yfiles.collections.IEnumerable<T>,
		getChildrenWithParent(item: T): yfiles.collections.IEnumerable<T>,
		addChild(parent: T, child: T): void,
		remove(child: T): void,
		getParent(child: T): T,
		getChildCount(parent: T): number,
		isLeaf(item: T): boolean,
		setParent(child: T, parent: T): void,
		lookup(type: yfiles.lang.Class): Object,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface DefaultItemLookup<T> {
		itemInstance: T,
		item: T,
		setNext(contextLookup: yfiles.support.IContextLookup): void,
		lookup(type: yfiles.lang.Class): Object,
		lookupForItem(item: Object, type: yfiles.lang.Class): Object,
		chainedLookup(
		item: T, type: yfiles.lang.Class, nextLookup: yfiles.support.ILookup, lastLookup: yfiles.support.ILookup
	): Object
	}

	declare export interface ILabel {
		layout: yfiles.geometry.IOrientedRectangle,
		style: yfiles.drawing.ILabelStyle,
		preferredSize: yfiles.geometry.SizeD,
		owner: yfiles.graph.ILabeledItem,
		text: string,
		labelModelParameter: yfiles.graph.ILabelModelParameter,
		getIndex(): number
	}

	declare export interface ILabelDefaults {
		style: yfiles.drawing.ILabelStyle,
		autoAdjustPreferredSize: boolean,
		shareLabelModelParameterInstance: boolean,
		shareStyleInstance: boolean,
		getStyleInstance(owner: yfiles.graph.ILabeledItem): yfiles.drawing.ILabelStyle,
		labelModelParameter: yfiles.graph.ILabelModelParameter,
		getLabelModelParameterInstance(owner: yfiles.graph.ILabeledItem): yfiles.graph.ILabelModelParameter
	}

	declare export interface HierarchyEventArgs<T> {
		eventType: yfiles.graph.HierarchyChange,
		oldParent: T,
		newParent: T,
		item: T
	}

	declare export interface IHierarchy<T> {
		root: T,
		addItemAddedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		removeItemAddedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		addItemRemovedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		removeItemRemovedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		addItemMovedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		removeItemMovedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		addItemChangedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		removeItemChangedListener(
		value: (source: Object, eventArgs: yfiles.graph.HierarchyEventArgs<T>) => void
	): void,
		publishItemChanged(item: T): void,
		contains(item: T): boolean,
		getChildren(item: T): yfiles.collections.IEnumerable<T>,
		addChild(parent: T, child: T): void,
		remove(child: T): void,
		getParent(child: T): T,
		getChildCount(parent: T): number,
		isLeaf(item: T): boolean,
		setLeaf(item: T, leaf: boolean): void,
		setParent(child: T, parent: T): void,
		calculateMinimumEnclosedArea(groupNode: yfiles.graph.INode): yfiles.geometry.RectD,
		getElements(): yfiles.collections.IEnumerable<T>,
		getDescendants(root: T): yfiles.collections.IEnumerable<T>,
		getPathToRoot(item: T): yfiles.collections.IList<T>,
		getDescendantsBottomUp(root: T): yfiles.collections.IEnumerable<T>,
		isDescendant(node: T, parent: T): boolean,
		getNearestCommonAncestorWithArray(items: T): T,
		getNearestCommonAncestorWithEnumerator(items: yfiles.collections.IEnumerator<T>): T
	}

	declare export interface ILabeledItem {
		labels: yfiles.model.IListEnumerable<yfiles.graph.ILabel>
	}

	declare export interface ILabelCandidateDescriptorProvider {
		getDescriptor(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.graph.ILabelCandidateDescriptor
	}

	declare export interface ConstantLabelCandidateDescriptorProvider {
		getDescriptor(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.graph.ILabelCandidateDescriptor
	}

	declare export interface ILabelModel {
		getGeometry(
		parameter: yfiles.graph.ILabelModelParameter, label: yfiles.graph.ILabel
	): yfiles.geometry.IOrientedRectangle,
		createDefaultParameter(): yfiles.graph.ILabelModelParameter,
		getContext(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter
	): yfiles.support.ILookup
	}

	declare export interface ILabelCandidateDescriptor {
		externalCandidate: boolean,
		edgeOverlapPenalty: number,
		nodeOverlapPenalty: number,
		profit: number
	}

	declare export interface LabelEventArgs {
		owner: yfiles.graph.ILabeledItem
	}

	declare export interface BendEventArgs {
		owner: yfiles.graph.IEdge,
		index: number
	}

	declare export interface EdgeEventArgs {
		sourcePort: yfiles.graph.IPort,
		targetPort: yfiles.graph.IPort
	}

	declare export interface PortEventArgs {
		owner: yfiles.graph.IPortOwner
	}

	declare export interface IGraphSelection {
		selectedNodes: yfiles.model.ISelectionModel<yfiles.graph.INode>,
		selectedLabels: yfiles.model.ISelectionModel<yfiles.graph.ILabel>,
		selectedEdges: yfiles.model.ISelectionModel<yfiles.graph.IEdge>,
		selectedPorts: yfiles.model.ISelectionModel<yfiles.graph.IPort>,
		selectedBends: yfiles.model.ISelectionModel<yfiles.graph.IBend>
	}

	declare export interface IGroupedGraph {
		autoAdjustGroupNodeBounds: boolean,
		hierarchy: yfiles.graph.IHierarchy<yfiles.graph.INode>,
		graph: yfiles.graph.IGraph,
		groupNodeDefaults: yfiles.graph.INodeDefaults,
		setParent(node: yfiles.graph.INode, parent: yfiles.graph.INode): void,
		createGroupNodeWithParentBoundsStyleAndTag(
		parent: yfiles.graph.INode, bounds: yfiles.geometry.RectD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.INode,
		createNodeWithParentBoundsStyleAndTag(
		parent: yfiles.graph.INode, bounds: yfiles.geometry.RectD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.INode,
		createGroupNode(): yfiles.graph.INode,
		adjustGroupNodeBounds(groupNode: yfiles.graph.INode): void,
		enlargeGroupNode(groupNode: yfiles.graph.INode, ancestors: boolean): void,
		enlargeAllGroupNodes(): void,
		enlargeAllGroupNodesWithContext(context: yfiles.input.IInputModeContext): void,
		enlargeGroupNodeWithContextNodeAndAncestors(
		context: yfiles.input.IInputModeContext, node: yfiles.graph.INode, ancestors: boolean
	): void,
		createGroupNodeStyle(): yfiles.drawing.INodeStyle,
		groupNodesWithParent(
		parent: yfiles.graph.INode, children: yfiles.collections.IEnumerable<yfiles.graph.INode>
	): void,
		groupNodesArray(children: yfiles.graph.INode): yfiles.graph.INode,
		groupNodes(
		children: yfiles.collections.IEnumerable<yfiles.graph.INode>
	): yfiles.graph.INode,
		createGroupNodeWithParent(parent: yfiles.graph.INode): yfiles.graph.INode,
		createNodeWithParent(parent: yfiles.graph.INode): yfiles.graph.INode,
		getDefaultGroupNodeBounds(): yfiles.geometry.RectD,
		createNodeWithParentAndBounds(parent: yfiles.graph.INode, bounds: yfiles.geometry.RectD): yfiles.graph.INode,
		createNodeWithParentBoundsAndStyle(
		parent: yfiles.graph.INode, bounds: yfiles.geometry.RectD, nodeStyle: yfiles.drawing.INodeStyle
	): yfiles.graph.INode,
		createGroupNodeWithParentBoundsAndStyle(
		parent: yfiles.graph.INode, bounds: yfiles.geometry.RectD, nodeStyle: yfiles.drawing.INodeStyle
	): yfiles.graph.INode
	}

	declare export interface IGraphStructure {
		nodes: yfiles.collections.ICollection<yfiles.graph.INode>,
		edges: yfiles.collections.ICollection<yfiles.graph.IEdge>,
		createNode(): yfiles.graph.INode,
		addNode(node: yfiles.graph.INode): void,
		createEdge(): yfiles.graph.IEdge,
		addEdge(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		removeNode(node: yfiles.graph.INode): void,
		removeEdge(edge: yfiles.graph.IEdge): void,
		getEdges(
		portOwner: yfiles.graph.IPortOwner, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		getPortEdges(
		port: yfiles.graph.IPort, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		setNodeStyle(node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle): void,
		setPortStyle(port: yfiles.graph.IPort, style: yfiles.drawing.IPortStyle): void,
		setEdgeStyle(edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		createPort(forOwner: yfiles.graph.IPortOwner): yfiles.graph.IPort,
		addPort(
		owner: yfiles.graph.IPortOwner, port: yfiles.graph.IPort, locationParameter: yfiles.graph.IPortLocationModelParameter
	): void,
		removePort(port: yfiles.graph.IPort): void,
		containsItem(item: yfiles.model.IModelItem): boolean,
		containsNode(node: yfiles.graph.INode): boolean,
		containsEdge(edge: yfiles.graph.IEdge): boolean,
		containsPort(port: yfiles.graph.IPort): boolean,
		containsLabel(label: yfiles.graph.ILabel): boolean,
		containsBend(bend: yfiles.graph.IBend): boolean,
		createBend(forEdge: yfiles.graph.IEdge): yfiles.graph.IBend,
		addBend(forEdge: yfiles.graph.IEdge, index: number, bend: yfiles.graph.IBend): void,
		removeBend(bend: yfiles.graph.IBend): void,
		createLabel(
		owner: yfiles.graph.ILabeledItem, modelParameter: yfiles.graph.ILabelModelParameter
	): yfiles.graph.ILabel,
		addLabel(owner: yfiles.graph.ILabeledItem, label: yfiles.graph.ILabel): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		setPorts(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		setLocationModelParameter(
		port: yfiles.graph.IPort, locationModelParameter: yfiles.graph.IPortLocationModelParameter
	): void
	}

	declare export interface IGraphUndoUnitSupport {
		createCreateNodeUndoUnit(node: yfiles.graph.INode): yfiles.support.IUndoUnit,
		createCreateEdgeUndoUnit(edge: yfiles.graph.IEdge): yfiles.support.IUndoUnit,
		createAddPortUndoUnit(port: yfiles.graph.IPort): yfiles.support.IUndoUnit,
		createAddLabelUndoUnit(label: yfiles.graph.ILabel): yfiles.support.IUndoUnit,
		createAddBendUndoUnit(bend: yfiles.graph.IBend, index: number): yfiles.support.IUndoUnit,
		createRemoveNodeUndoUnit(node: yfiles.graph.INode): yfiles.support.IUndoUnit,
		createRemoveEdgeUndoUnit(edge: yfiles.graph.IEdge): yfiles.support.IUndoUnit,
		createRemoveBendUndoUnit(bend: yfiles.graph.IBend): yfiles.support.IUndoUnit,
		createRemovePortUndoUnit(port: yfiles.graph.IPort): yfiles.support.IUndoUnit,
		createRemoveLabelUndoUnit(label: yfiles.graph.ILabel): yfiles.support.IUndoUnit,
		createChangePortsUndoUnit(
		edge: yfiles.graph.IEdge, oldSource: yfiles.graph.IPort, oldTarget: yfiles.graph.IPort
	): yfiles.support.IUndoUnit
	}

	declare export interface LabelCandidateDescriptor {
		externalCandidate: boolean,
		edgeOverlapPenalty: number,
		nodeOverlapPenalty: number,
		profit: number
	}

	declare export interface INode {
		layout: yfiles.geometry.IRectangle,
		style: yfiles.drawing.INodeStyle
	}

	declare export interface IMapperRegistry {
		getMapper<K, V>(tag: Object): yfiles.model.IMapper<K, V>,
		addMapper<K, V>(
		keyType: yfiles.lang.Class, valueType: yfiles.lang.Class, tag: Object, mapper: yfiles.model.IMapper<K, V>
	): void,
		removeMapper(tag: Object): void,
		registeredTags: yfiles.collections.IEnumerable<Object>,
		getMapperMetadata(tag: Object): yfiles.graph.IMapperMetadata,
		setMapperMetadata(tag: Object, metadata: yfiles.graph.IMapperMetadata): void,
		addMapperWithTag<K, V>(
		kType: yfiles.lang.Class, vType: yfiles.lang.Class, tag: Object
	): yfiles.model.WeakDictionaryMapper<K, V>,
		addDictionaryMapper<K, V>(
		kType: yfiles.lang.Class, vType: yfiles.lang.Class, tag: Object
	): yfiles.model.DictionaryMapper<K, V>,
		addMapperWithTagAndGetter<K, V>(
		kType: yfiles.lang.Class, vType: yfiles.lang.Class, tag: Object, getter: (key: K) => V
	): yfiles.model.IMapper<K, V>,
		addConstantMapper<K, V>(
		kType: yfiles.lang.Class, vType: yfiles.lang.Class, tag: Object, constant: V
	): yfiles.model.IMapper<K, V>,
		getObjectObjectMapper(tag: Object): yfiles.model.IMapper<Object, Object>
	}

	declare export interface MapperRegistryExtensions {
		
	}

	declare export interface StripeEventArgs {
		owner: yfiles.graph.IStripe
	}

	declare export interface INodeBoundsChangeReporter {
		addBoundsChangedListener(
		value: (node: yfiles.graph.INode, oldLayout: yfiles.geometry.RectD) => void
	): void,
		removeBoundsChangedListener(
		value: (node: yfiles.graph.INode, oldLayout: yfiles.geometry.RectD) => void
	): void
	}

	declare export interface INodeDefaults {
		style: yfiles.drawing.INodeStyle,
		getStyleInstance(): yfiles.drawing.INodeStyle,
		shareStyleInstance: boolean,
		ports: yfiles.graph.IPortDefaults,
		labels: yfiles.graph.ILabelDefaults,
		size: yfiles.geometry.SizeD
	}

	declare export interface MapperMetadata {
		keyType: yfiles.lang.Class,
		valueType: yfiles.lang.Class
	}

	declare export interface DefaultLabelModelParameterFinder {
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter,
		findBestParameterForLabelLayoutAndParameters(
		label: yfiles.graph.ILabel, labelLayout: yfiles.geometry.IOrientedRectangle, parameters: yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	): yfiles.graph.ILabelModelParameter,
		getCandidateParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>,
		calculateMetric(
		label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter, layout: yfiles.geometry.IOrientedRectangle
	): number,
		distance(
		geometry: yfiles.geometry.IOrientedRectangle, targetGeometry: yfiles.geometry.IOrientedRectangle
	): number
	}

	declare export interface ILabelModelParameterProvider {
		getParameters(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>
	}

	declare export interface ILabelModelParameter {
		model: yfiles.graph.ILabelModel,
		supports(label: yfiles.graph.ILabel): boolean
	}

	declare export interface ILabelModelParameterFinder {
		findBestParameter(
		label: yfiles.graph.ILabel, model: yfiles.graph.ILabelModel, labelLayout: yfiles.geometry.IOrientedRectangle
	): yfiles.graph.ILabelModelParameter
	}

	declare export interface ILabelTextChangeReporter {
		addTextChangedListener(value: (label: yfiles.graph.ILabel, oldText: string) => void): void,
		removeTextChangedListener(value: (label: yfiles.graph.ILabel, oldText: string) => void): void
	}

	declare export interface IMapperMetadata {
		keyType: yfiles.lang.Class,
		valueType: yfiles.lang.Class
	}

	declare export interface ITagChangeReporter {
		addTagChangedListener(
		value: (owner: yfiles.support.ITagOwner, oldTag: Object, newTag: Object) => void
	): void,
		removeTagChangedListener(
		value: (owner: yfiles.support.ITagOwner, oldTag: Object, newTag: Object) => void
	): void
	}

	declare export interface IBendLocationChangeReporter {
		addLocationChangedListener(
		value: (bend: yfiles.graph.IBend, oldLocation: yfiles.geometry.PointD) => void
	): void,
		removeLocationChangedListener(
		value: (bend: yfiles.graph.IBend, oldLocation: yfiles.geometry.PointD) => void
	): void
	}

	declare export interface IBendHitTestEnumerator {
		
	}

	declare export interface IBend {
		owner: yfiles.graph.IEdge,
		location: yfiles.geometry.IPoint,
		getIndex(): number
	}

	declare export interface IPreferredSizeChangeReporter {
		addPreferredSizeChangedListener(
		value: (label: yfiles.graph.ILabel, oldPreferredSize: yfiles.geometry.SizeD) => void
	): void,
		removePreferredSizeChangedListener(
		value: (label: yfiles.graph.ILabel, oldPreferredSize: yfiles.geometry.SizeD) => void
	): void
	}

	declare export interface IPortLocationModelParameterChangeReporter {
		addLocationModelParameterChangedListener(
		value: (
		port: yfiles.graph.IPort, oldParameter: yfiles.graph.IPortLocationModelParameter
	) => void
	): void,
		removeLocationModelParameterChangedListener(
		value: (
		port: yfiles.graph.IPort, oldParameter: yfiles.graph.IPortLocationModelParameter
	) => void
	): void
	}

	declare export interface IEdgeHitTestEnumerator {
		
	}

	declare export interface HierarchyExtensions {
		
	}

	declare export interface ILabeledItemHitTestEnumerator {
		
	}

	declare export interface IPortHitTestEnumerator {
		
	}

	declare export interface INodeHitTestEnumerator {
		
	}

	declare export interface ILabelHitTestEnumerator {
		
	}

	declare export interface IFoldedGraph {
		isInitiallyExpanded(masterGroupNode: yfiles.graph.INode): boolean,
		addGroupCollapsedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupCollapsedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addGroupExpandedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupExpandedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		manager: yfiles.graph.IFoldingManager,
		graph: yfiles.graph.IGraph,
		groupedGraph: yfiles.graph.IGroupedGraph,
		autoSwitchToAncestor: boolean,
		invalid: boolean,
		enqueueNavigationalUndoUnits: boolean,
		hierarchy: yfiles.graph.IHierarchy<yfiles.graph.INode>,
		localRoot: yfiles.graph.INode,
		expand(groupNode: yfiles.graph.INode): void,
		collapse(groupNode: yfiles.graph.INode): void,
		isExpanded(groupNode: yfiles.graph.INode): boolean,
		getMaster<T>(item: T): T,
		isDummy(item: yfiles.model.IModelItem): boolean,
		getMasterEdges(
		dummyEdge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.graph.IEdge>,
		getRepresentative<T>(item: T): T,
		dispose(): void
	}

	declare export interface TableExtensions {
		
	}

	declare export interface IFoldingManager {
		masterGraph: yfiles.graph.IGraph,
		masterHierarchy: yfiles.graph.IHierarchy<yfiles.graph.INode>,
		masterGroupedGraph: yfiles.graph.IGroupedGraph,
		defaultExpandedPredicate: (obj: yfiles.graph.INode) => boolean,
		views: yfiles.collections.IEnumerable<yfiles.graph.IFoldedGraph>,
		dummyNodeConverter: yfiles.graph.IDummyNodeConverter,
		dummyEdgeConverter: yfiles.graph.IDummyEdgeConverter,
		hasEdgeViewState(id: yfiles.graph.DummyEdgeId): boolean,
		hasNodeViewState(id: yfiles.graph.DummyNodeId): boolean,
		hasPortViewState(id: yfiles.graph.DummyNodePortId): boolean,
		getEdgeViewState(edgeId: yfiles.graph.DummyEdgeId): yfiles.graph.IEdge,
		getNodeViewState(nodeId: yfiles.graph.DummyNodeId): yfiles.graph.INode,
		getPortViewState(nodePortId: yfiles.graph.DummyNodePortId): yfiles.graph.IPort,
		getChangeDummyNodeAppearanceCallback(
		nodeId: yfiles.graph.DummyNodeId
	): yfiles.graph.IChangeDummyNodeAppearanceCallback,
		getChangeDummyEdgeAppearanceCallback(
		idedgeId: yfiles.graph.DummyEdgeId
	): yfiles.graph.IChangeDummyEdgeAppearanceCallback,
		createManagedView(): yfiles.graph.IFoldedGraph,
		setInitiallyExpanded(createdNode: yfiles.graph.INode, expanded: boolean): void,
		getAllViewStates(
		masterEdge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.collections.KeyValuePair<yfiles.graph.DummyEdgeId, yfiles.graph.IEdge>>
	}

	declare export interface GraphItemType {
		
	}

	declare export interface IGraph {
		collectionModel: yfiles.model.ICollectionModel<yfiles.model.IModelItem>,
		nodes: yfiles.model.ICollectionModel<yfiles.graph.INode>,
		edges: yfiles.model.ICollectionModel<yfiles.graph.IEdge>,
		edgeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		nodeLabels: yfiles.model.ICollectionModel<yfiles.graph.ILabel>,
		ports: yfiles.model.ICollectionModel<yfiles.graph.IPort>,
		bends: yfiles.model.ICollectionModel<yfiles.graph.IBend>,
		nodeDefaults: yfiles.graph.INodeDefaults,
		edgeDefaults: yfiles.graph.IEdgeDefaults,
		mapperRegistry: yfiles.graph.IMapperRegistry,
		createNodeWithBoundsStyleAndTag(
		bounds: yfiles.geometry.RectD, style: yfiles.drawing.INodeStyle, tag: Object
	): yfiles.graph.INode,
		setPorts(
		edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		typedEdgesAtPort(
		port: yfiles.graph.IPort, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		typedEdgesAtOwner(
		portOwner: yfiles.graph.IPortOwner, adjacencyType: yfiles.graph.AdjacencyTypes
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		createEdgeWithPortsStyleAndTag(
		sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort, style: yfiles.drawing.IEdgeStyle, tag: Object
	): yfiles.graph.IEdge,
		createEdgeWithNodesStyleAndTag(
		source: yfiles.graph.INode, target: yfiles.graph.INode, style: yfiles.drawing.IEdgeStyle, tag: Object
	): yfiles.graph.IEdge,
		removeNode(node: yfiles.graph.INode): void,
		removeEdge(edge: yfiles.graph.IEdge): void,
		addNodeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addDisplaysInvalidatedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeDisplaysInvalidatedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		invalidateDisplays(): void,
		addNodeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addNodeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addEdgeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeCreatedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addEdgeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addEdgeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		addBendAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addBendRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addBendChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		addLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addPortAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		addPortRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortRemovedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		addPortChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortChangedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		setNodeStyle(node: yfiles.graph.INode, style: yfiles.drawing.INodeStyle): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		setEdgeStyle(edge: yfiles.graph.IEdge, style: yfiles.drawing.IEdgeStyle): void,
		setPortStyle(port: yfiles.graph.IPort, style: yfiles.drawing.IPortStyle): void,
		contains(item: yfiles.model.IModelItem): boolean,
		addBend(
		edge: yfiles.graph.IEdge, index: number, location: yfiles.geometry.PointD
	): yfiles.graph.IBend,
		setBendLocation(bend: yfiles.graph.IBend, location: yfiles.geometry.PointD): void,
		removeBend(bend: yfiles.graph.IBend): void,
		addPortWithParameterStyleAndTag(
		portOwner: yfiles.graph.IPortOwner, locationModelParameter: yfiles.graph.IPortLocationModelParameter, style: yfiles.drawing.IPortStyle, tag: Object
	): yfiles.graph.IPort,
		removePort(port: yfiles.graph.IPort): void,
		addLabelWithParameterStylePreferredSizeAndTag(
		item: yfiles.graph.ILabeledItem, labelModelParameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD, tag: Object
	): yfiles.graph.ILabel,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		setPreferredSize(label: yfiles.graph.ILabel, preferredSize: yfiles.geometry.SizeD): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		setLocationModelParameter(
		port: yfiles.graph.IPort, locationParameter: yfiles.graph.IPortLocationModelParameter
	): void,
		setBounds(node: yfiles.graph.INode, bounds: yfiles.geometry.RectD): void,
		clear(): void,
		reverse(edge: yfiles.graph.IEdge): void,
		getDefaultNodeBounds(): yfiles.geometry.RectD,
		removePortOwner(portOwner: yfiles.graph.IPortOwner): void,
		removeLabeledItem(labeledItem: yfiles.graph.ILabeledItem): void,
		appendBend(edge: yfiles.graph.IEdge, location: yfiles.geometry.PointD): yfiles.graph.IBend,
		appendBends(
		edge: yfiles.graph.IEdge, locations: yfiles.collections.IEnumerable<yfiles.geometry.PointD>
	): void,
		beginEditWithUndoNameRedoNameAndItems<T>(
		undoName: string, redoName: string, items: yfiles.collections.IEnumerable<T>
	): yfiles.support.ICompoundEdit,
		beginEdit(undoName: string, redoName: string): yfiles.support.ICompoundEdit,
		addUndoUnit(
		undoName: string, redoName: string, undoAction: () => void, redoAction: () => void
	): void,
		createNodeWithBoundsAndStyle(
		bounds: yfiles.geometry.RectD, style: yfiles.drawing.INodeStyle
	): yfiles.graph.INode,
		setCenter(node: yfiles.graph.INode, center: yfiles.geometry.PointD): void,
		adjustPreferredSize(label: yfiles.graph.ILabel): void,
		calculatePreferredSizeWithStyleAndParameter(
		item: yfiles.graph.ILabeledItem, labelStyle: yfiles.drawing.ILabelStyle, labelModelParameter: yfiles.graph.ILabelModelParameter, text: string
	): yfiles.geometry.SizeD,
		calculatePreferredSize(item: yfiles.graph.ILabeledItem, text: string): yfiles.geometry.SizeD,
		calculatePreferredSizeWithStyleParameterAndTag(
		item: yfiles.graph.ILabeledItem, labelStyle: yfiles.drawing.ILabelStyle, labelModelParameter: yfiles.graph.ILabelModelParameter, text: string, tag: Object
	): yfiles.geometry.SizeD,
		addLabel(item: yfiles.graph.ILabeledItem, text: string): yfiles.graph.ILabel,
		addLabelWithTag(
		item: yfiles.graph.ILabeledItem, text: string, tag: Object
	): yfiles.graph.ILabel,
		neighbors<T>(tType: yfiles.lang.Class, portOwner: T): yfiles.collections.IEnumerable<T>,
		successors<T>(tType: yfiles.lang.Class, portOwner: T): yfiles.collections.IEnumerable<T>,
		predecessors<T>(tType: yfiles.lang.Class, portOwner: T): yfiles.collections.IEnumerable<T>,
		portOwnerDegree(portOwner: yfiles.graph.IPortOwner): number,
		inDegree(portOwner: yfiles.graph.IPortOwner): number,
		outDegree(portOwner: yfiles.graph.IPortOwner): number,
		portDegree(port: yfiles.graph.IPort): number,
		portInDegree(port: yfiles.graph.IPort): number,
		portOutDegree(port: yfiles.graph.IPort): number,
		clearBends(edge: yfiles.graph.IEdge): void,
		setPortLocation(port: yfiles.graph.IPort, location: yfiles.geometry.PointD): void,
		addPortAtLocationWithStyle(
		portOwner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD, style: yfiles.drawing.IPortStyle
	): yfiles.graph.IPort,
		getEdgeAtOwners(from: yfiles.graph.IPortOwner, to: yfiles.graph.IPortOwner): yfiles.graph.IEdge,
		getEdgeAtPorts(from: yfiles.graph.IPort, to: yfiles.graph.IPort): yfiles.graph.IEdge,
		setRelativeLocation(port: yfiles.graph.IPort, relativeLocation: yfiles.geometry.PointD): void,
		addLabelWithParameterAndStyle(
		item: yfiles.graph.ILabeledItem, parameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string
	): yfiles.graph.ILabel,
		addLabelWithParameterStyleAndPreferredSize(
		item: yfiles.graph.ILabeledItem, parameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD
	): yfiles.graph.ILabel,
		addLabelWithParameterStyleAndTag(
		item: yfiles.graph.ILabeledItem, parameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, tag: Object
	): yfiles.graph.ILabel,
		addLabelWithParameter(
		item: yfiles.graph.ILabeledItem, parameter: yfiles.graph.ILabelModelParameter, text: string
	): yfiles.graph.ILabel,
		inEdgesAt(
		owner: yfiles.graph.IPortOwner
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		outEdgesAt(
		owner: yfiles.graph.IPortOwner
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		edgesAtOwner(
		owner: yfiles.graph.IPortOwner
	): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		portInEdgesAt(owner: yfiles.graph.IPort): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		portOutEdgesAt(owner: yfiles.graph.IPort): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		edgesAtPort(owner: yfiles.graph.IPort): yfiles.model.IListEnumerable<yfiles.graph.IEdge>,
		addPortAtLocation(
		owner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD
	): yfiles.graph.IPort,
		addPort(owner: yfiles.graph.IPortOwner): yfiles.graph.IPort,
		addPortWithParameter(
		owner: yfiles.graph.IPortOwner, locationModelParameter: yfiles.graph.IPortLocationModelParameter
	): yfiles.graph.IPort,
		addPortWithParameterAndStyle(
		owner: yfiles.graph.IPortOwner, locationModelParameter: yfiles.graph.IPortLocationModelParameter, portStyle: yfiles.drawing.IPortStyle
	): yfiles.graph.IPort,
		createNode(): yfiles.graph.INode,
		createEdge(
		sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode
	): yfiles.graph.IEdge,
		createEdgeWithNodesAndStyle(
		sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode, edgeStyle: yfiles.drawing.IEdgeStyle
	): yfiles.graph.IEdge,
		createEdgeAtPorts(
		sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): yfiles.graph.IEdge,
		createEdgeWithPortsAndStyle(
		sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort, edgeStyle: yfiles.drawing.IEdgeStyle
	): yfiles.graph.IEdge,
		createEdgeStyle(): yfiles.drawing.IEdgeStyle,
		addRelativePort(
		owner: yfiles.graph.INode, relativeLocation: yfiles.geometry.PointD
	): yfiles.graph.IPort,
		createNodeWithCenter(location: yfiles.geometry.PointD): yfiles.graph.INode,
		createNodeWithCenterAndTag(location: yfiles.geometry.PointD, tag: Object): yfiles.graph.INode,
		createNodeWithCenterAndStyle(
		location: yfiles.geometry.PointD, style: yfiles.drawing.INodeStyle
	): yfiles.graph.INode,
		createNodeWithBounds(bounds: yfiles.geometry.RectD): yfiles.graph.INode,
		createNodeWithBoundsAndTag(bounds: yfiles.geometry.RectD, tag: Object): yfiles.graph.INode,
		createNodeStyle(): yfiles.drawing.INodeStyle,
		createLocationModelParameter(owner: yfiles.graph.IPortOwner): yfiles.graph.IPortLocationModelParameter,
		createLocationModelParameterForLocation(
		owner: yfiles.graph.IPortOwner, location: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		createLabelModelParameter(item: yfiles.graph.ILabeledItem): yfiles.graph.ILabelModelParameter,
		getLabelDefaults(item: yfiles.graph.ILabeledItem): yfiles.graph.ILabelDefaults,
		getPortDefaults(item: yfiles.graph.IPortOwner): yfiles.graph.IPortDefaults,
		createPortStyle(owner: yfiles.graph.IPortOwner): yfiles.drawing.IPortStyle,
		createLabelStyle(item: yfiles.graph.ILabeledItem): yfiles.drawing.ILabelStyle,
		getGroupedGraph(): yfiles.graph.IGroupedGraph,
		getFoldedGraph(): yfiles.graph.IFoldedGraph,
		getDecorator(): yfiles.graph.GraphDecorator,
		applyLayout(layouter: yfiles.layout.ILayouter): void,
		applyLayoutWithControl(
		layouter: yfiles.layout.ILayouter, morphDuration: yfiles.system.TimeSpan, control: yfiles.canvas.GraphControl
	): void,
		applyLayoutWithControlAndCallback(
		layouter: yfiles.layout.ILayouter, morphDuration: yfiles.system.TimeSpan, control: yfiles.canvas.GraphControl, doneHandler: (sender: Object, e: yfiles.system.EventArgs) => void
	): void
	}

	declare export interface IChangeDummyNodeAppearanceCallback {
		setNodeStyle(nodeStyle: yfiles.drawing.INodeStyle): void,
		setBounds(bounds: yfiles.geometry.RectD): void,
		setPortLocationModelParameter(
		port: yfiles.graph.IPort, locationParameter: yfiles.graph.IPortLocationModelParameter
	): void,
		setPortStyle(port: yfiles.graph.IPort, portStyle: yfiles.drawing.IPortStyle): void
	}

	declare export interface IChangeLabeledItemAppearanceCallback {
		addLabel(
		labelModelParameter: yfiles.graph.ILabelModelParameter, style: yfiles.drawing.ILabelStyle, text: string, preferredSize: yfiles.geometry.SizeD, tag: Object
	): yfiles.graph.ILabel,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		setLabelTag(label: yfiles.graph.ILabel, newTag: Object): void,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		setPreferredSize(label: yfiles.graph.ILabel, width: number, height: number): void,
		setLabelStyle(label: yfiles.graph.ILabel, style: yfiles.drawing.ILabelStyle): void,
		removeLabel(label: yfiles.graph.ILabel): void,
		clearLabels(): void
	}

	declare export interface IDummyEdgeConverter {
		addDummyEdge(
		callback: yfiles.graph.IAddDummyEdgeCallback, foldedGraph: yfiles.graph.IFoldedGraph, masterEdge: yfiles.graph.IEdge, localSourceNode: yfiles.graph.INode, sourceDummy: boolean, localTargetNode: yfiles.graph.INode, targetDummy: boolean
	): yfiles.graph.IEdge,
		changeDummyEdgeAppearance(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localDummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void,
		createDummyEdgeAppearance(
		callback: yfiles.graph.IChangeDummyEdgeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, localDummyEdge: yfiles.graph.IEdge, masterEdges: yfiles.collections.IList<yfiles.graph.IEdge>
	): void
	}

	declare export interface IDummyNodeConverter {
		changeDummyNodeAppearance(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void,
		createDummyNodeAppearance(
		callback: yfiles.graph.IChangeDummyNodeAppearanceCallback, foldedGraph: yfiles.graph.IFoldedGraph, dummyNode: yfiles.graph.INode, masterNode: yfiles.graph.INode
	): void
	}

	declare export interface IChangeDummyEdgeAppearanceCallback {
		setStyle(edgeStyle: yfiles.drawing.IEdgeStyle): void,
		addBend(index: number, location: yfiles.geometry.PointD): yfiles.graph.IBend,
		setLocation(bend: yfiles.graph.IBend, location: yfiles.geometry.PointD): void,
		removeBend(bend: yfiles.graph.IBend): void,
		clearBends(): void,
		setSourcePortLocationParameter(locationParameter: yfiles.graph.IPortLocationModelParameter): void,
		setTargetPortLocationParameter(locationParameter: yfiles.graph.IPortLocationModelParameter): void,
		setSourcePortStyle(portStyle: yfiles.drawing.IPortStyle): void,
		setTargetPortStyle(portStyle: yfiles.drawing.IPortStyle): void,
		setTag(newTag: Object): void,
		setSourcePortTag(newTag: Object): void,
		setTargetPortTag(newTag: Object): void
	}

	declare export interface IEdgeDefaults {
		ports: yfiles.graph.IPortDefaults,
		labels: yfiles.graph.ILabelDefaults,
		style: yfiles.drawing.IEdgeStyle,
		getStyleInstance(): yfiles.drawing.IEdgeStyle,
		shareStyleInstance: boolean
	}

	declare export interface IAddDummyEdgeCallback {
		addAsSeparateEdge(
		sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): yfiles.graph.IEdge,
		addToExistingDummy(dummyEdge: yfiles.graph.IEdge): yfiles.graph.IEdge,
		excludeDummyEdge(): yfiles.graph.IEdge,
		getExistingDummyEdges(ignoreDirection: boolean): yfiles.collections.IEnumerable<yfiles.graph.IEdge>
	}

	declare export interface IEdge {
		bends: yfiles.model.IListEnumerable<yfiles.graph.IBend>,
		sourcePort: yfiles.graph.IPort,
		targetPort: yfiles.graph.IPort,
		style: yfiles.drawing.IEdgeStyle,
		getSourceNode(): yfiles.graph.INode,
		getTargetNode(): yfiles.graph.INode,
		isSelfloop(): boolean,
		oppositePortOwner(owner: yfiles.graph.IPortOwner): yfiles.graph.IPortOwner,
		opposite(port: yfiles.graph.IPort): yfiles.graph.IPort
	}

			
}

declare module 'GraphClipboard' {
		declare export interface ParentNodeDetectionMode_Interface {
		
	}

			
}

declare module 'graphml' {
		declare export interface ReferenceConstants {
		
	}

	declare export interface ResolveReferenceEventArgs {
		referenceId: string,
		value: Object,
		handled: boolean,
		context: yfiles.graphml.IParseContext
	}

	declare export interface QueryReferenceIdEventArgs {
		referenceId: string,
		referenceType: yfiles.graphml.GraphMLReferenceType,
		value: Object,
		handled: boolean,
		context: yfiles.graphml.IWriteContext
	}

	declare export interface ClrNamespaceDescriptor {
		assemblyName: string,
		clrNamespace: string,
		equalsWithClrNamespaceDescriptor(obj: yfiles.graphml.ClrNamespaceDescriptor): boolean,
		equals(obj: Object): boolean,
		hashCode(): number
	}

	declare export interface Property {
		canRead: boolean,
		canWrite: boolean,
		serializationVisibility: yfiles.system.DesignerSerializationVisibility,
		graphMLSerializerAttribute: yfiles.graphml.GraphMLSerializerAttribute,
		graphMLAttribute: yfiles.graphml.GraphMLAttribute,
		isContentProperty: boolean,
		propertyInfo: yfiles.system.PropertyInfo,
		propertyType: yfiles.lang.Class,
		ownerType: yfiles.lang.Class,
		ownerInstance: Object,
		defaultValue: Object,
		hasDefaultValue: boolean,
		value: Object,
		name: string
	}

	declare export interface XamlSerializer {
		serialize(context: yfiles.graphml.IWriteContext, subject: Object): void,
		serializeContent(
		context: yfiles.graphml.IWriteContext, subject: Object, writer: yfiles.graphml.IXmlWriter
	): void,
		getXmlNamespace(context: yfiles.graphml.IWriteContext, subject: Object): string,
		getTagName(context: yfiles.graphml.IWriteContext, subject: Object): string,
		getProperties(
		context: yfiles.graphml.IWriteContext, subject: Object
	): yfiles.collections.IList<yfiles.graphml.Property>,
		hasDefaultValue(context: yfiles.graphml.IWriteContext, info: yfiles.graphml.Property): boolean,
		shouldSerialize(
		context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property
	): boolean,
		isCollectionProperty(
		context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property
	): boolean,
		getMemberTagName(
		context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property
	): string,
		getMemberAttributeName(
		context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property
	): string,
		writeMemberTag(
		context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property, writer: yfiles.graphml.IXmlWriter
	): void,
		createMemberContentContext(context: yfiles.graphml.IWriteContext): yfiles.graphml.IWriteContext,
		shouldWriteEnclosingTag(
		context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property
	): boolean,
		shouldWriteMemberAsAttribute(
		context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property
	): boolean,
		writeMemberAttribute(
		context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property, writer: yfiles.graphml.IXmlWriter
	): void,
		writeUndefinedAttributeValue(
		context: yfiles.graphml.IWriteContext, writer: yfiles.graphml.IXmlWriter, name: string
	): void,
		writeUndefinedElementValue(context: yfiles.graphml.IWriteContext): void,
		writeNullAttributeValue(
		context: yfiles.graphml.IWriteContext, writer: yfiles.graphml.IXmlWriter, name: string
	): void,
		writeNullElementValue(context: yfiles.graphml.IWriteContext): void,
		getTypeConverter(
		context: yfiles.graphml.IWriteContext, descriptor: yfiles.graphml.Property
	): yfiles.system.TypeConverter,
		writeMemberTagContent(context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property): void,
		serializeMember(context: yfiles.graphml.IWriteContext, property: yfiles.graphml.Property): void
	}

	declare export interface GraphMLSerializerAttribute {
		serializerType: yfiles.lang.Class
	}

	declare export interface AbstractSerializer {
		serialize(context: yfiles.graphml.IWriteContext, item: Object): void,
		serializeCore(context: yfiles.graphml.IWriteContext, item: Object): void
	}

	declare export interface NullXmlWriter {
		writeStartDocument(): yfiles.graphml.IXmlWriter,
		flushDocument(): void,
		writeString(s: string): yfiles.graphml.IXmlWriter,
		writeComment(comment: string): yfiles.graphml.IXmlWriter,
		writeEndDocument(): void,
		writeStartElementCore(prefix: string, s: string, ns: string): void,
		writeAttributeCore(prefix: string, localName: string, ns: string, value: string): void,
		writeEndElementCore(): void,
		writeDocumentFragment(fragment: Document): yfiles.graphml.IXmlWriter,
		writeProcessingInstruction(target: string, data: string): yfiles.graphml.IXmlWriter,
		writeCData(content: string): yfiles.graphml.IXmlWriter,
		closeCurrentElement(addEndTag: boolean): void
	}

	declare export interface QueryOutputHandlersEventArgs {
		addOutputHandler(handler: yfiles.graphml.IOutputHandler, scope: yfiles.graphml.KeyScope): void,
		context: yfiles.graphml.IWriteContext
	}

	declare export interface IGraphElementIdProvider {
		getGraphId(graph: yfiles.graph.IGraph, context: yfiles.graphml.IWriteContext): string,
		getNodeId(node: yfiles.graph.INode, context: yfiles.graphml.IWriteContext): string,
		getEdgeId(edge: yfiles.graph.IEdge, context: yfiles.graphml.IWriteContext): string,
		getPortId(port: yfiles.graph.IPort, context: yfiles.graphml.IWriteContext): string
	}

	declare export interface GraphMLWriter {
		addHandleSerializationListener(
		value: (sender: Object, e: yfiles.graphml.HandleSerializationEventArgs) => void
	): void,
		removeHandleSerializationListener(
		value: (sender: Object, e: yfiles.graphml.HandleSerializationEventArgs) => void
	): void,
		addQueryOutputHandlersListener(
		value: (sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs) => void
	): void,
		removeQueryOutputHandlersListener(
		value: (sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs) => void
	): void,
		addQueryReferenceIdListener(
		value: (sender: Object, e: yfiles.graphml.QueryReferenceIdEventArgs) => void
	): void,
		removeQueryReferenceIdListener(
		value: (sender: Object, e: yfiles.graphml.QueryReferenceIdEventArgs) => void
	): void,
		registerDefaultSerializers(): void,
		registerDefaultOutputHandlers(): void,
		onHandleSerialization(args: yfiles.graphml.HandleSerializationEventArgs): void,
		onQueryOutputHandlers(args: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		onQueryReferenceId(args: yfiles.graphml.QueryReferenceIdEventArgs): void,
		getOutputHandlers(
		context: yfiles.graphml.IWriteContext
	): yfiles.collections.IDictionary<yfiles.graphml.KeyScope, yfiles.collections.IList<yfiles.graphml.IOutputHandler>>,
		serialize<T>(
		targetType: yfiles.lang.Class, context: yfiles.graphml.IWriteContext, item: T
	): void,
		setSerializationProperty<T>(key: yfiles.support.TypedKey<T>, value: T): void,
		removeSerializationProperty<T>(key: yfiles.support.TypedKey<T>): void,
		getSerializationProperty<T>(tType: yfiles.lang.Class, key: yfiles.support.TypedKey<T>): T,
		setLookup<T>(tType: yfiles.lang.Class, instance: T): void,
		removeLookup<T>(tType: yfiles.lang.Class): void,
		lookup(type: yfiles.lang.Class): Object,
		createWriteContext(
		graph: yfiles.graph.IGraph, writer: yfiles.graphml.IXmlWriter
	): yfiles.graphml.IWriteContext,
		writeEvents: yfiles.graphml.IWriteEvents,
		write(graph: yfiles.graph.IGraph, writer: yfiles.graphml.IXmlWriter): void,
		onWriting(args: yfiles.graphml.WriteEventArgs): void,
		addWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void
	}

	declare export interface GraphMLReferenceExtension {
		resourceKey: string,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface SerializationNotSupportedException {
		
	}

	declare export interface WriteContextExtensions {
		
	}

	declare export interface XamlReader {
		deserialize(context: yfiles.graphml.IParseContext, domNode: Node): Object,
		parseProperties(context: yfiles.graphml.IParseContext, node: Element, instance: Object): void,
		parseChildNodes(context: yfiles.graphml.IParseContext, node: Element, instance: Object): void,
		getContentPropertyForInstance(
		context: yfiles.graphml.IParseContext, instance: Object
	): yfiles.system.PropertyInfo,
		getContentPropertyForType(
		context: yfiles.graphml.IParseContext, type: yfiles.lang.Class
	): yfiles.system.PropertyInfo,
		isCollectionProperty(
		context: yfiles.graphml.IParseContext, instance: Object, info: yfiles.system.PropertyInfo
	): boolean,
		parseSingleChildProperty(
		context: yfiles.graphml.IParseContext, singleContentNode: Node, instance: Object, propertyDescriptor: yfiles.system.PropertyInfo
	): void,
		parseCollectionProperty(
		context: yfiles.graphml.IParseContext, collectionContent: yfiles.collections.IEnumerable<Node>, instance: Object, propertyDescriptor: yfiles.system.PropertyInfo
	): void,
		assignListValues(
		context: yfiles.graphml.IParseContext, collectionContent: yfiles.collections.IEnumerable<Node>, list: yfiles.objectcollections.IList
	): void,
		assignCollectionValues<T>(
		context: yfiles.graphml.IParseContext, collectionContent: yfiles.collections.IEnumerable<Node>, collection: yfiles.collections.ICollection<T>
	): void,
		assignDictionaryValuesGeneric<K, V>(
		context: yfiles.graphml.IParseContext, collectionContent: yfiles.collections.IEnumerable<Node>, dictionary: yfiles.collections.IDictionary<K, V>
	): void,
		assignDictionaryValues(
		context: yfiles.graphml.IParseContext, collectionContent: yfiles.collections.IEnumerable<Node>, dictionary: yfiles.objectcollections.IDictionary
	): void,
		parseXmlAttributes(context: yfiles.graphml.IParseContext, node: Element, instance: Object): void,
		parseXmlAttribute(context: yfiles.graphml.IParseContext, attribute: Attr, instance: Object): void
	}

	declare export interface IXmlPrefixMapper {
		getPrefixOfNamespace(ns: string): string,
		getNamespaceOfPrefix(prefix: string): string
	}

	declare export interface XamlDeserializer {
		
	}

	declare export interface TextNodeDeserializer {
		
	}

	declare export interface GenericMarkupExtension<T> {
		convertFrom(t: T): void
	}

	declare export interface ISerializer {
		serialize(context: yfiles.graphml.IWriteContext, subject: Object): void
	}

	declare export interface GraphMLParseValueSerializerContext {
		lookup(serviceType: yfiles.lang.Class): Object
	}

	declare export interface GraphMLWriteValueSerializerContext {
		lookup(serviceType: yfiles.lang.Class): Object
	}

	declare export interface GraphMLValueSerializerContext {
		onComponentChanging(): boolean,
		onComponentChanged(): void,
		container: Object,
		instance: Object,
		propertyDescriptor: Object,
		owner: Object,
		getValueSerializerFor(type: yfiles.lang.Class): yfiles.system.ValueSerializer,
		getValueSerializerForPropertyInfo(descriptor: yfiles.system.PropertyInfo): yfiles.system.ValueSerializer,
		lookup(serviceType: yfiles.lang.Class): Object
	}

	declare export interface IValueSerializerProvider {
		getValueSerializerForWriting(
		context: yfiles.graphml.IWriteContext, descriptor: yfiles.system.PropertyInfo, subject: Object, serializerContext: yfiles.system.IValueSerializerContext
	): yfiles.system.ValueSerializer,
		getValueSerializerForParsing(
		context: yfiles.graphml.IParseContext, descriptor: yfiles.system.PropertyInfo, subject: Object, destinationType: yfiles.lang.Class, serializerContext: yfiles.system.IValueSerializerContext
	): yfiles.system.ValueSerializer
	}

	declare export interface IXamlNamespaceMapper {
		getXamlNamespace(context: yfiles.graphml.IWriteContext, t: yfiles.lang.Class): string,
		getXamlNamespacePrefix(context: yfiles.graphml.IWriteContext, nsUri: string): string,
		addMappingForType(ns: string, type: yfiles.lang.Class): void,
		addMappingForNamespace(xmlNs: string, clrNS: string, assembly: yfiles.lang.Assembly): void,
		addMappingForNamespaceWithPrefix(
		xmlNs: string, prefix: string, clrNS: string, assembly: yfiles.lang.Assembly
	): void
	}

	declare export interface IXamlTypeMapper {
		addResolveXmlNamespaceListener(
		value: (sender: Object, e: yfiles.graphml.ResolveXmlNamespaceEventArgs) => void
	): void,
		removeResolveXmlNamespaceListener(
		value: (sender: Object, e: yfiles.graphml.ResolveXmlNamespaceEventArgs) => void
	): void,
		getTypeWithXmlNamespaceAndTagName(xmlNamespace: string, tagName: string): yfiles.lang.Class,
		addMappingForNamespace(
		xmlNamespace: string, clrNamespace: string, assembly: yfiles.lang.Assembly
	): void,
		addMappingForType(xamlNamespace: string, xamlTagName: string, t: yfiles.lang.Class): void
	}

	declare export interface ITypeConverterProvider {
		getTypeConverterForWriting(
		context: yfiles.graphml.IWriteContext, descriptor: yfiles.system.PropertyInfo, subject: Object, destinationType: yfiles.lang.Class, descriptorContext: yfiles.system.ITypeDescriptorContext
	): yfiles.system.TypeConverter,
		getTypeConverterForParsing(
		context: yfiles.graphml.IParseContext, descriptor: yfiles.system.PropertyInfo, subject: Object, destinationType: yfiles.lang.Class, descriptorContext: yfiles.system.ITypeDescriptorContext
	): yfiles.system.TypeConverter
	}

	declare export interface IInlineMarkupExtensionParser {
		parseExtension(
		extensionString: string, context: yfiles.graphml.IParseContext
	): yfiles.system.MarkupExtension,
		canParse(extensionString: string, context: yfiles.graphml.IParseContext): boolean
	}

	declare export interface IInlineMarkupWriter {
		getExtensionAsString(
		context: yfiles.graphml.IWriteContext, extension: yfiles.system.MarkupExtension
	): string,
		canHandle(
		context: yfiles.graphml.IWriteContext, extension: yfiles.system.MarkupExtension
	): boolean
	}

	declare export interface InvalidXamlNamespaceDeclarationException {
		
	}

	declare export interface GraphMLAttribute {
		name: string,
		xmlNamespace: string,
		writeEnclosingTag: boolean,
		writeAsAttribute: yfiles.graphml.XamlAttributeWriteMode,
		serializable: yfiles.graphml.GraphMLSerializationMode,
		customTypeConverter: yfiles.lang.Class,
		shareable: yfiles.graphml.GraphMLSharingMode
	}

	declare export interface IGraphMLIOHandler {
		write(graph: yfiles.graph.IGraph, os: yfiles.system.StringWriter): void,
		readFromDocument(graph: yfiles.graph.IGraph, doc: Document): void,
		readFromURL(graph: yfiles.graph.IGraph, url: string): void,
		readFromURLWithCallback(
		graph: yfiles.graph.IGraph, url: string, finishedCallback: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		writeToString(graph: yfiles.graph.IGraph): string,
		readFromGraphMLText(graph: yfiles.graph.IGraph, data: string): void
	}

	declare export interface GraphMLXmlConstants {
		
	}

	declare export interface CreationPropertyKeys {
		
	}

	declare export interface GraphElementFactory {
		createNode(context: yfiles.graphml.IParseContext): yfiles.graph.INode,
		createEdge(
		context: yfiles.graphml.IParseContext, sourceNode: yfiles.graph.INode, sourcePort: yfiles.graph.IPort, targetNode: yfiles.graph.INode, targetPort: yfiles.graph.IPort
	): yfiles.graph.IEdge,
		addPort(
		context: yfiles.graphml.IParseContext, portOwner: yfiles.graph.IPortOwner
	): yfiles.graph.IPort
	}

	declare export interface GraphMLIOHandler {
		writeXMLSchema: boolean,
		writeSharedReferences: boolean,
		clearGraphBeforeRead: boolean,
		addOverrideResolveReferenceListener(
		value: (sender: Object, e: yfiles.graphml.ResolveReferenceEventArgs) => void
	): void,
		removeOverrideResolveReferenceListener(
		value: (sender: Object, e: yfiles.graphml.ResolveReferenceEventArgs) => void
	): void,
		addResolveReferenceListener(
		value: (sender: Object, e: yfiles.graphml.ResolveReferenceEventArgs) => void
	): void,
		removeResolveReferenceListener(
		value: (sender: Object, e: yfiles.graphml.ResolveReferenceEventArgs) => void
	): void,
		addQueryReferenceIdListener(
		value: (sender: Object, e: yfiles.graphml.QueryReferenceIdEventArgs) => void
	): void,
		removeQueryReferenceIdListener(
		value: (sender: Object, e: yfiles.graphml.QueryReferenceIdEventArgs) => void
	): void,
		addResolveXmlNamespaceListener(
		value: (sender: Object, e: yfiles.graphml.ResolveXmlNamespaceEventArgs) => void
	): void,
		removeResolveXmlNamespaceListener(
		value: (sender: Object, e: yfiles.graphml.ResolveXmlNamespaceEventArgs) => void
	): void,
		onResolveReference(args: yfiles.graphml.ResolveReferenceEventArgs): void,
		onOverrideResolveReference(args: yfiles.graphml.ResolveReferenceEventArgs): void,
		onQueryReferenceId(args: yfiles.graphml.QueryReferenceIdEventArgs): void,
		onResolveXmlNamespace(sender: Object, args: yfiles.graphml.ResolveXmlNamespaceEventArgs): void,
		addNamespace(namespaceURI: string, shortName: string): void,
		addSchemaLocation(schemaNamespace: string, schemaLocation: string): void,
		write(graph: yfiles.graph.IGraph, os: yfiles.system.StringWriter): void,
		writeToString(graph: yfiles.graph.IGraph): string,
		addOutputMapper<TModelItem, TValue>(
		modelItemType: yfiles.lang.Class, valueType: yfiles.lang.Class, name: string, mapper: yfiles.model.IMapper<TModelItem, TValue>
	): void,
		addOutputMapperWithURI<TModelItem, TValue>(
		modelItemType: yfiles.lang.Class, valueType: yfiles.lang.Class, name: string, uri: string, mapper: yfiles.model.IMapper<TModelItem, TValue>
	): void,
		addOutputMapperWithSerializationCallbackAndKeyType<TModelItem, TValue>(
		modelItemType: yfiles.lang.Class, valueType: yfiles.lang.Class, name: string, mapper: yfiles.model.IMapper<TModelItem, TValue>, serializationCallback: (sender: Object, e: yfiles.graphml.HandleSerializationEventArgs) => void, declaredKeyType: yfiles.graphml.KeyType
	): void,
		addOutputMapperWithURISerializationCallbackAndKeyType<TModelItem, TValue>(
		modelItemType: yfiles.lang.Class, valueType: yfiles.lang.Class, name: string, uri: string, mapper: yfiles.model.IMapper<TModelItem, TValue>, serializationCallback: (sender: Object, e: yfiles.graphml.HandleSerializationEventArgs) => void, declaredKeyType: yfiles.graphml.KeyType
	): void,
		addRegistryOutputMapper<TModelItem, TValue>(
		modelItemType: yfiles.lang.Class, valueType: yfiles.lang.Class, name: string
	): void,
		addRegistryOutputMapperWithTagUntyped(name: string, tag: Object): void,
		addRegistryOutputMapperWithTag<TModelItem, TValue>(
		modelItemType: yfiles.lang.Class, valueType: yfiles.lang.Class, name: string, registryTag: Object
	): void,
		addRegistryOutputMapperWithURIAndTag<TModelItem, TValue>(
		modelItemType: yfiles.lang.Class, valueType: yfiles.lang.Class, name: string, uri: string, registryTag: Object
	): void,
		addRegistryOutputMapperWithNameUriTagSerializationCallbackAndType<TModelItem, TValue>(
		modelItemType: yfiles.lang.Class, valueType: yfiles.lang.Class, name: string, uri: string, registryTag: Object, serializationCallback: (sender: Object, e: yfiles.graphml.HandleSerializationEventArgs) => void, declaredKeyType: yfiles.graphml.KeyType
	): void,
		createGraphMLWriter(graph: yfiles.graph.IGraph): yfiles.graphml.GraphMLWriter,
		onWriting(args: yfiles.graphml.WriteEventArgs): void,
		addWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		serializationPropertyOverrides: yfiles.support.TypedKeyMapper,
		deserializationPropertyOverrides: yfiles.support.TypedKeyMapper,
		configureDefaultValueSerializers(): yfiles.graphml.IValueSerializerProvider,
		configureDefaultTypeConverters(): yfiles.graphml.ITypeConverterProvider,
		configureWriterLookup(graph: yfiles.graph.IGraph, writer: yfiles.graphml.GraphMLWriter): void,
		configureSerializationProperties(graph: yfiles.graph.IGraph, writer: yfiles.graphml.GraphMLWriter): void,
		configureSerializationPropertyOverrides(writer: yfiles.graphml.GraphMLWriter): void,
		configureDeserializationPropertyOverrides(parser: yfiles.graphml.GraphMLParser): void,
		createXamlNamespaceMapper(
		graph: yfiles.graph.IGraph, writer: yfiles.graphml.GraphMLWriter
	): yfiles.graphml.IXamlNamespaceMapper,
		createXMLWriter(os: yfiles.system.StringWriter): yfiles.graphml.IXmlWriter,
		configureXMLWriter(writer: yfiles.graphml.IXmlWriter): void,
		configureSchemaLocations(writer: yfiles.graphml.GraphMLWriter): void,
		configureNamespaces(writer: yfiles.graphml.GraphMLWriter): void,
		configureOutputHandlers(graph: yfiles.graph.IGraph, writer: yfiles.graphml.GraphMLWriter): void,
		registerNodeStyleOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerGraphSettingsOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerTagOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerNodeLayoutOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerNodeLabelsOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerEdgeLabelsOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerEdgeStyleOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerEdgeBendsOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerPortStyleOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		registerPortLocationOutputHandler(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		configureSerializationHandlers(graph: yfiles.graph.IGraph, writer: yfiles.graphml.GraphMLWriter): void,
		handleJSONSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleTextConvertibleSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleReferenceHandleSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleListSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleArraySerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleTypeSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleTypeExtensionSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleMarkupExtensionBasedSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleXamlSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleNullSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleUndefinedSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		onGraphMLWriterHandleSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		onGraphMLWriterQueryOutputHandlers(sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		addHandleSerializationListener(
		value: (sender: Object, e: yfiles.graphml.HandleSerializationEventArgs) => void
	): void,
		removeHandleSerializationListener(
		value: (sender: Object, e: yfiles.graphml.HandleSerializationEventArgs) => void
	): void,
		addQueryOutputHandlersListener(
		value: (sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs) => void
	): void,
		removeQueryOutputHandlersListener(
		value: (sender: Object, e: yfiles.graphml.QueryOutputHandlersEventArgs) => void
	): void,
		onHandleSerialization(args: yfiles.graphml.HandleSerializationEventArgs): void,
		onQueryOutputHandlers(args: yfiles.graphml.QueryOutputHandlersEventArgs): void,
		readFromDocument(graph: yfiles.graph.IGraph, doc: Document): void,
		readFromURL(graph: yfiles.graph.IGraph, url: string): void,
		readFromURLWithCallback(
		graph: yfiles.graph.IGraph, url: string, finishedCallback: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		readFromGraphMLText(graph: yfiles.graph.IGraph, data: string): void,
		addInputMapperWithName<TKey, TData>(
		keyType: yfiles.lang.Class, dataType: yfiles.lang.Class, name: string, mapper: yfiles.model.IMapper<TKey, TData>
	): void,
		addInputMapperWithPredicate<TKey, TData>(
		keyType: yfiles.lang.Class, dataType: yfiles.lang.Class, keyDefinitionPredicate: (obj: Element) => boolean, mapper: yfiles.model.IMapper<TKey, TData>
	): void,
		addInputMapperWithNameKeyTypeAndDeserializationCallback<TKey, TData>(
		keyType: yfiles.lang.Class, dataType: yfiles.lang.Class, name: string, type: yfiles.graphml.KeyType, mapper: yfiles.model.IMapper<TKey, TData>, deserializationCallback: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): void,
		addInputMapperWithPredicateAndDeserializationCallback<TKey, TData>(
		keyType: yfiles.lang.Class, dataType: yfiles.lang.Class, keyDefinitionPredicate: (obj: Element) => boolean, mapper: yfiles.model.IMapper<TKey, TData>, deserializationCallback: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): void,
		addInputMapperFutureWithName<TKey, TData>(
		KeyType: yfiles.lang.Class, DataType: yfiles.lang.Class, name: string
	): yfiles.support.Future<yfiles.model.IMapper<TKey, TData>>,
		addInputMapperFutureWithNameAndKeyType<TKey, TData>(
		KeyType: yfiles.lang.Class, DataType: yfiles.lang.Class, name: string, type: yfiles.graphml.KeyType
	): yfiles.support.Future<yfiles.model.IMapper<TKey, TData>>,
		addInputMapperFutureWithPredicate<TKey, TData>(
		keyType: yfiles.lang.Class, dataType: yfiles.lang.Class, keyDefinitionPredicate: (obj: Element) => boolean
	): yfiles.support.Future<yfiles.model.IMapper<TKey, TData>>,
		addInputMapperFutureWithPredicateAndDeserializationCallback<TKey, TData>(
		KeyType: yfiles.lang.Class, DataType: yfiles.lang.Class, keyDefinitionPredicate: (obj: Element) => boolean, deserializationCallback: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): yfiles.support.Future<yfiles.model.IMapper<TKey, TData>>,
		addInputHandlerFactoryWithPredicate(
		keyDefinitionPredicate: (obj: Element) => boolean, factory: yfiles.graphml.IGenericInputHandlerFactory
	): yfiles.support.Future<yfiles.graphml.IInputHandler>,
		addInputHandlerFactoryWithName(
		name: string, factory: yfiles.graphml.IGenericInputHandlerFactory
	): yfiles.support.Future<yfiles.graphml.IInputHandler>,
		addInputHandlerFactoryWithNameAndScope(
		name: string, scope: yfiles.graphml.KeyScope, factory: yfiles.graphml.IGenericInputHandlerFactory
	): yfiles.support.Future<yfiles.graphml.IInputHandler>,
		addRegistryInputMapper<TKey, TData>(
		KeyType: yfiles.lang.Class, DataType: yfiles.lang.Class, name: string
	): yfiles.support.Future<yfiles.model.IMapper<TKey, TData>>,
		addRegistryInputMapperWithKeyTypeAndDeserializationCallback<TKey, TData>(
		keyType: yfiles.lang.Class, dataType: yfiles.lang.Class, name: string, type: yfiles.graphml.KeyType, deserializationCallback: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): yfiles.support.Future<yfiles.model.IMapper<TKey, TData>>,
		addRegistryInputMapperWithPredicateAndDeserializationCallback<TKey, TData>(
		KeyType: yfiles.lang.Class, DataType: yfiles.lang.Class, name: Object, keyDefinitionPredicate: (obj: Element) => boolean, deserializationCallback: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): yfiles.support.Future<yfiles.model.IMapper<TKey, TData>>,
		createMapper<TKey, TData>(
		keyType: yfiles.lang.Class, dataType: yfiles.lang.Class, registryTag: Object, parseContext: yfiles.graphml.IParseContext
	): yfiles.model.IMapper<TKey, TData>,
		createGraphElementFactory(
		parser: yfiles.graphml.GraphMLParser, graph: yfiles.graph.IGraph
	): yfiles.graphml.IGraphElementFactory,
		createGraphMLParser(graph: yfiles.graph.IGraph): yfiles.graphml.GraphMLParser,
		onParsed(args: yfiles.graphml.ParseEventArgs): void,
		addParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		onParsing(args: yfiles.graphml.ParseEventArgs): void,
		addParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		configureParserLookup(parser: yfiles.graphml.GraphMLParser): void,
		createXamlTypeMapper(parser: yfiles.graphml.GraphMLParser): yfiles.graphml.IXamlTypeMapper,
		configureInputHandlers(parser: yfiles.graphml.GraphMLParser): void,
		registerNodeLayoutInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerNodeLabelsInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerGraphSettingsInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerEdgeBendsInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerTagInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerNodeStyleInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerEdgeStyleInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerPortStyleInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerPortLocationInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		registerEdgeLabelsInputHandler(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		configureDeserializationHandlers(graph: yfiles.graph.IGraph, parser: yfiles.graphml.GraphMLParser): void,
		onGraphMLParserQueryInputHandlers(sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs): void,
		onGraphMLParserHandleDeserialization(sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs): void,
		addQueryInputHandlersListener(
		value: (sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs) => void
	): void,
		removeQueryInputHandlersListener(
		value: (sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs) => void
	): void,
		addHandleDeserializationListener(
		value: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): void,
		removeHandleDeserializationListener(
		value: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): void,
		onQueryInputHandlers(args: yfiles.graphml.QueryInputHandlersEventArgs): void,
		onHandleDeserialization(args: yfiles.graphml.HandleDeserializationEventArgs): void,
		handlePrimitivesSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handleEnumSerialization(sender: Object, e: yfiles.graphml.HandleSerializationEventArgs): void,
		handlePrimitivesDeserialization(sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs): void,
		handleJSONDeserialization(sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs): void
	}

	declare export interface StandardAttributeNames {
		
	}

	declare export interface NamespaceConstants {
		
	}

	declare export interface FoldingManagerGraphElementFactory {
		createNode(context: yfiles.graphml.IParseContext): yfiles.graph.INode,
		createEdge(
		context: yfiles.graphml.IParseContext, sourceNode: yfiles.graph.INode, sourcePort: yfiles.graph.IPort, targetNode: yfiles.graph.INode, targetPort: yfiles.graph.IPort
	): yfiles.graph.IEdge,
		addPort(
		context: yfiles.graphml.IParseContext, portOwner: yfiles.graph.IPortOwner
	): yfiles.graph.IPort
	}

	declare export interface NodeViewState {
		layout: yfiles.geometry.RectD,
		labels: yfiles.objectcollections.IList,
		style: yfiles.drawing.INodeStyle
	}

	declare export interface EdgeViewState {
		labels: yfiles.objectcollections.IList,
		style: yfiles.drawing.IEdgeStyle,
		bends: yfiles.objectcollections.IList,
		sourcePort: yfiles.graph.IPort,
		targetPort: yfiles.graph.IPort,
		tag: Object
	}

	declare export interface WriteEventArgs {
		context: yfiles.graphml.IWriteContext,
		item: Object
	}

	declare export interface IReferenceHandle {
		referenceType: yfiles.graphml.GraphMLReferenceType,
		subject: Object,
		id: string
	}

	declare export interface IReferenceHandler {
		registerResource(context: yfiles.graphml.IWriteContext, subject: Object): boolean,
		markAsUnshared(context: yfiles.graphml.IWriteContext, subject: Object): void,
		isNewInternalResource(context: yfiles.graphml.IWriteContext, subject: Object): boolean,
		internalHandles: yfiles.collections.IEnumerable<yfiles.graphml.IReferenceHandle>,
		getHandle(
		context: yfiles.graphml.IWriteContext, subject: Object
	): yfiles.graphml.IReferenceHandle
	}

	declare export interface SerializationProperties {
		
	}

	declare export interface SingletonSerializationAttribute {
		containerTypes: yfiles.lang.Class[]
	}

	declare export interface ParseEventArgs {
		context: yfiles.graphml.IParseContext,
		element: Element
	}

	declare export interface HandleSerializationEventArgs {
		item: Object,
		sourceType: yfiles.lang.Class,
		handled: boolean,
		context: yfiles.graphml.IWriteContext,
		replaceItem(item: Object, serializationType: yfiles.lang.Class): void,
		writer: yfiles.graphml.IXmlWriter
	}

	declare export interface GraphMLXmlAttribute {
		localName: string,
		namespace1: string,
		value: string
	}

	declare export interface IParseContext {
		objectStack: yfiles.model.IListEnumerable<Object>,
		currentObject: Object,
		parseEvents: yfiles.graphml.IParseEvents,
		graph: yfiles.graph.IGraph,
		getDeserializationProperty<T>(tType: yfiles.lang.Class, key: yfiles.support.TypedKey<T>): T,
		deserialize<T>(
		targetType: yfiles.lang.Class, context: yfiles.graphml.IParseContext, targetNode: Node
	): T,
		deserializeWithTargetNode<T>(targetType: yfiles.lang.Class, targetNode: Node): T,
		getCurrent<T>(): T
	}

	declare export interface ParseContextExtensions {
		
	}

	declare export interface IParseEvents {
		addDocumentParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeDocumentParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addDocumentParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeDocumentParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addNodeParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeNodeParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addNodeParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeNodeParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addEdgeParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeEdgeParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addEdgeParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeEdgeParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addPortParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removePortParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addPortParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removePortParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addGraphParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeGraphParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addGraphParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeGraphParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addGraphMLParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeGraphMLParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addGraphMLParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeGraphMLParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addDataParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeDataParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addDataParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeDataParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addKeyParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeKeyParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		addKeyParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeKeyParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void
	}

	declare export interface IOutputHandler {
		precedence: yfiles.graphml.WritePrecedence,
		keyDefinitionAttributes: yfiles.collections.IEnumerable<yfiles.graphml.GraphMLXmlAttribute>,
		dataTagAttributes: yfiles.collections.IEnumerable<yfiles.graphml.GraphMLXmlAttribute>,
		isDefaultValue(ctx: yfiles.graphml.IWriteContext): boolean,
		writeValue(ctx: yfiles.graphml.IWriteContext): void,
		writeKeyDefinitionContent(ctx: yfiles.graphml.IWriteContext): void
	}

	declare export interface IXmlWriter {
		writeComment(comment: string): yfiles.graphml.IXmlWriter,
		writeEndDocument(): void,
		writeStartElementWithPrefix(prefix: string, localName: string, ns: string): yfiles.graphml.IXmlWriter,
		writeStartElement(localName: string, ns: string): yfiles.graphml.IXmlWriter,
		writeAttributeWithNamespace(
		prefix: string, localName: string, ns: string, value: string
	): yfiles.graphml.IXmlWriter,
		writeDocumentFragment(fragment: Document): yfiles.graphml.IXmlWriter,
		writeProcessingInstruction(target: string, data: string): yfiles.graphml.IXmlWriter,
		writeCData(content: string): yfiles.graphml.IXmlWriter,
		writeEndElement(): yfiles.graphml.IXmlWriter,
		writeStartDocument(): yfiles.graphml.IXmlWriter,
		flushDocument(): void,
		namespaceManager: yfiles.graphml.IXmlNamespaceManager,
		writeString(s: string): yfiles.graphml.IXmlWriter,
		writeAttribute(localName: string, value: string): yfiles.graphml.IXmlWriter,
		writeAttributeStruct(attribute: yfiles.graphml.GraphMLXmlAttribute): yfiles.graphml.IXmlWriter
	}

	declare export interface IXmlNamespaceManager {
		registerLocalMapping(nsUri: string, prefix: string): string,
		pushScope(): void,
		popScope(): void,
		sealScope(): void,
		globalNamespaces: yfiles.collections.IDictionary<string, string>
	}

	declare export interface XmlWriterExtensions {
		
	}

	declare export interface IWriteContext {
		objectStack: yfiles.model.IListEnumerable<Object>,
		currentObject: Object,
		writeEvents: yfiles.graphml.IWriteEvents,
		writer: yfiles.graphml.IXmlWriter,
		graph: yfiles.graph.IGraph,
		getSerializationProperty<T>(tType: yfiles.lang.Class, key: yfiles.support.TypedKey<T>): T,
		serialize<T>(
		targetType: yfiles.lang.Class, context: yfiles.graphml.IWriteContext, item: T
	): void,
		serializeWithItem<T>(targetType: yfiles.lang.Class, item: T): void,
		serializeWithItemAndType(item: Object, t: yfiles.lang.Class): void,
		serializeReplacement<T>(targetType: yfiles.lang.Class, originalItem: Object, replacement: T): void,
		getCurrent<T>(): T
	}

	declare export interface IWriteEvents {
		addDocumentWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeDocumentWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addDocumentWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeDocumentWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addNodeWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeNodeWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addNodeWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeNodeWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addEdgeWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeEdgeWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addEdgeWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeEdgeWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addPortWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removePortWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addPortWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removePortWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addGraphWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeGraphWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addGraphWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeGraphWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addGraphMLWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeGraphMLWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addGraphMLWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeGraphMLWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addDataWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeDataWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addDataWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeDataWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addKeyWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeKeyWritingListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		addKeyWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void,
		removeKeyWrittenListener(value: (sender: Object, e: yfiles.graphml.WriteEventArgs) => void): void
	}

	declare export interface IGenericInputHandlerFactory {
		createInputHandler<TKey, TValue>(
		tKey: yfiles.lang.Class, tValue: yfiles.lang.Class, args: yfiles.graphml.QueryInputHandlersEventArgs
	): yfiles.graphml.IInputHandler
	}

	declare export interface QueryInputHandlersEventArgs {
		addInputHandler(handler: yfiles.graphml.IInputHandler): void,
		keyDefinition: Element,
		handled: boolean,
		context: yfiles.graphml.IParseContext
	}

	declare export interface AbstractMapperOutputHandler<TKey, TData> {
		mapperMetadata: yfiles.graph.IMapperMetadata,
		writeKeyDefinitionContent(ctx: yfiles.graphml.IWriteContext): void,
		mapper: yfiles.model.IMapper<TKey, TData>,
		getValue(context: yfiles.graphml.IWriteContext, key: TKey): TData
	}

	declare export interface IInputHandler {
		precedence: yfiles.graphml.ParsePrecedence,
		parseData(context: yfiles.graphml.IParseContext, node: Node): void,
		applyDefault(context: yfiles.graphml.IParseContext): void
	}

	declare export interface HandleDeserializationEventArgs {
		targetType: yfiles.lang.Class,
		result: Object,
		handled: boolean,
		context: yfiles.graphml.IParseContext,
		xmlNode: Node
	}

	declare export interface IDeserializer {
		deserialize(context: yfiles.graphml.IParseContext, node: Node): Object
	}

	declare export interface ResolveXmlNamespaceEventArgs {
		xmlNamespace: string,
		addClrNamespaceDescriptor(descriptor: yfiles.graphml.ClrNamespaceDescriptor): void,
		handled: boolean
	}

	declare export interface ComplexMapperInputHandler<TKey, TValue> {
		useParentElementForDeserialization: boolean,
		deserializer: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void,
		deserializerTargetType: yfiles.lang.Class,
		parseDataCore(context: yfiles.graphml.IParseContext, node: Node): TValue,
		getDeserializationXmlNode(context: yfiles.graphml.IParseContext, node: Node): Node
	}

	declare export interface GraphElementIdAcceptor {
		graphIds: yfiles.collections.IDictionary<yfiles.graph.IGraph, string>,
		nodeIds: yfiles.collections.IDictionary<yfiles.graph.INode, string>,
		edgeIds: yfiles.collections.IDictionary<yfiles.graph.IEdge, string>,
		portIds: yfiles.collections.IDictionary<yfiles.graph.IPort, string>,
		storeGraphId(
		graph: yfiles.graph.IGraph, id: string, context: yfiles.graphml.IParseContext
	): void,
		storeNodeId(
		node: yfiles.graph.INode, id: string, context: yfiles.graphml.IParseContext
	): void,
		storeEdgeId(
		edge: yfiles.graph.IEdge, id: string, context: yfiles.graphml.IParseContext
	): void,
		storePortId(
		port: yfiles.graph.IPort, id: string, context: yfiles.graphml.IParseContext
	): void,
		createIdProvider(
		fallback: yfiles.graphml.IGraphElementIdProvider
	): yfiles.graphml.IGraphElementIdProvider,
		resolveNode(context: yfiles.graphml.IParseContext, id: string): yfiles.graph.INode,
		resolveGraph(context: yfiles.graphml.IParseContext, id: string): yfiles.graph.IGraph,
		resolvePort(
		context: yfiles.graphml.IParseContext, ownerId: string, id: string
	): yfiles.graph.IPort,
		resolveEdge(context: yfiles.graphml.IParseContext, id: string): yfiles.graph.IEdge
	}

	declare export interface IGraphElementFactory {
		createNode(context: yfiles.graphml.IParseContext): yfiles.graph.INode,
		createEdge(
		context: yfiles.graphml.IParseContext, sourceNode: yfiles.graph.INode, sourcePort: yfiles.graph.IPort, targetNode: yfiles.graph.INode, targetPort: yfiles.graph.IPort
	): yfiles.graph.IEdge,
		addPort(
		context: yfiles.graphml.IParseContext, portOwner: yfiles.graph.IPortOwner
	): yfiles.graph.IPort
	}

	declare export interface IGraphElementResolver {
		resolveNode(context: yfiles.graphml.IParseContext, id: string): yfiles.graph.INode,
		resolveGraph(context: yfiles.graphml.IParseContext, id: string): yfiles.graph.IGraph,
		resolvePort(
		context: yfiles.graphml.IParseContext, ownerId: string, id: string
	): yfiles.graph.IPort,
		resolveEdge(context: yfiles.graphml.IParseContext, id: string): yfiles.graph.IEdge
	}

	declare export interface IGraphElementIdAcceptor {
		storeGraphId(
		graph: yfiles.graph.IGraph, id: string, context: yfiles.graphml.IParseContext
	): void,
		storeNodeId(
		node: yfiles.graph.INode, id: string, context: yfiles.graphml.IParseContext
	): void,
		storeEdgeId(
		edge: yfiles.graph.IEdge, id: string, context: yfiles.graphml.IParseContext
	): void,
		storePortId(
		port: yfiles.graph.IPort, id: string, context: yfiles.graphml.IParseContext
	): void
	}

	declare export interface ChildParseContext {
		parentContext: yfiles.graphml.IParseContext,
		lookup(type: yfiles.lang.Class): Object,
		setLookup<T>(tType: yfiles.lang.Class, value: T): void,
		removeLookup<T>(tType: yfiles.lang.Class): void,
		objectStack: yfiles.model.IListEnumerable<Object>,
		currentObject: Object,
		parseEvents: yfiles.graphml.IParseEvents,
		graph: yfiles.graph.IGraph,
		getDeserializationProperty<T>(tType: yfiles.lang.Class, key: yfiles.support.TypedKey<T>): T,
		setDeserializationProperty<T>(key: yfiles.support.TypedKey<T>, value: T): void,
		removeDeserializationProperty<T>(key: yfiles.support.TypedKey<T>): void,
		deserialize<T>(
		targetType: yfiles.lang.Class, context: yfiles.graphml.IParseContext, targetNode: Node
	): T
	}

	declare export interface GraphMLParser {
		addQueryInputHandlersListener(
		value: (sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs) => void
	): void,
		removeQueryInputHandlersListener(
		value: (sender: Object, e: yfiles.graphml.QueryInputHandlersEventArgs) => void
	): void,
		addHandleDeserializationListener(
		value: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): void,
		removeHandleDeserializationListener(
		value: (sender: Object, e: yfiles.graphml.HandleDeserializationEventArgs) => void
	): void,
		registerDefaultDeserializers(): void,
		registerDefaultInputHandlers(): void,
		onQueryInputHandlers(args: yfiles.graphml.QueryInputHandlersEventArgs): void,
		onHandleDeserialization(args: yfiles.graphml.HandleDeserializationEventArgs): void,
		deserialize<T>(
		targetType: yfiles.lang.Class, context: yfiles.graphml.IParseContext, element: Node
	): T,
		getInputHandlers(
		context: yfiles.graphml.IParseContext, keyDefinition: Element
	): yfiles.collections.IList<yfiles.graphml.IInputHandler>,
		parseFromDocument(
		document: Document, graph: yfiles.graph.IGraph, elementFactory: yfiles.graphml.IGraphElementFactory
	): void,
		parseFromURL(
		url: string, graph: yfiles.graph.IGraph, elementFactory: yfiles.graphml.IGraphElementFactory
	): void,
		createParseContext(graph: yfiles.graph.IGraph): yfiles.graphml.IParseContext,
		setDeserializationProperty<T>(key: yfiles.support.TypedKey<T>, value: T): void,
		removeDeserializationProperty<T>(key: yfiles.support.TypedKey<T>): void,
		getDeserializationProperty<T>(tType: yfiles.lang.Class, key: yfiles.support.TypedKey<T>): T,
		setLookup<T>(tType: yfiles.lang.Class, instance: T): void,
		removeLookup<T>(tType: yfiles.lang.Class): void,
		lookup(type: yfiles.lang.Class): Object,
		onParsed(args: yfiles.graphml.ParseEventArgs): void,
		addParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeParsedListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		onParsing(args: yfiles.graphml.ParseEventArgs): void,
		addParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void,
		removeParsingListener(value: (sender: Object, e: yfiles.graphml.ParseEventArgs) => void): void
	}

	declare export interface AbstractMapperInputHandler<TKey, TData> {
		mapper: yfiles.model.IMapper<TKey, TData>,
		overrideDefaultValue: boolean,
		setValue(context: yfiles.graphml.IParseContext, key: TKey, data: TData): void,
		applyDefault(context: yfiles.graphml.IParseContext): void
	}

	declare export interface CreationProperties {
		
	}

	declare export interface DirectXmlWriter {
		writeStartDocument(): yfiles.graphml.IXmlWriter,
		flushDocument(): void,
		writeString(s: string): yfiles.graphml.IXmlWriter,
		writeComment(comment: string): yfiles.graphml.IXmlWriter,
		writeEndDocument(): void,
		writeStartElementCore(prefix: string, localName: string, ns: string): void,
		closeCurrentElement(addEndTag: boolean): void,
		writeAttributeCore(prefix: string, localName: string, ns: string, value: string): void,
		writeEndElementCore(): void,
		writeDocumentFragment(fragment: Document): yfiles.graphml.IXmlWriter,
		writeProcessingInstruction(target: string, data: string): yfiles.graphml.IXmlWriter,
		writeCData(content: string): yfiles.graphml.IXmlWriter
	}

	declare export interface AbstractInputHandler<TKey, TData> {
		parseDefaultValue: boolean,
		defaultValue: TData,
		defaultExists: boolean,
		precedence: yfiles.graphml.ParsePrecedence,
		parseData(context: yfiles.graphml.IParseContext, node: Node): void,
		validScopes: yfiles.collections.ICollection<yfiles.graphml.KeyScope>,
		initializeFromKeyDefinition(context: yfiles.graphml.IParseContext, definition: Element): void,
		parseDataCore(context: yfiles.graphml.IParseContext, node: Node): TData,
		setValue(context: yfiles.graphml.IParseContext, key: TKey, data: TData): void,
		applyDefault(context: yfiles.graphml.IParseContext): void
	}

	declare export interface DeserializationNotSupportedException {
		
	}

	declare export interface AbstractXmlWriter {
		createNamespaceManager(): yfiles.graphml.IXmlNamespaceManager,
		writeStartDocument(): yfiles.graphml.IXmlWriter,
		flushDocument(): void,
		namespaceManager: yfiles.graphml.IXmlNamespaceManager,
		writeString(s: string): yfiles.graphml.IXmlWriter,
		writeComment(comment: string): yfiles.graphml.IXmlWriter,
		writeEndDocument(): void,
		writeStartElement(localName: string, ns: string): yfiles.graphml.IXmlWriter,
		writeStartElementWithPrefix(prefix: string, localName: string, ns: string): yfiles.graphml.IXmlWriter,
		writeStartElementCore(prefix: string, localName: string, a: string): void,
		closeCurrentElement(addEndTag: boolean): void,
		writeAttributeCore(prefix: string, localName: string, a: string, value: string): void,
		writeAttributeWithNamespace(
		prefix: string, localName: string, ns: string, value: string
	): yfiles.graphml.IXmlWriter,
		writeNamespaceDeclaration(prefix: string, nsUri: string): yfiles.graphml.IXmlWriter,
		writeDocumentFragment(fragment: Document): yfiles.graphml.IXmlWriter,
		writeProcessingInstruction(target: string, data: string): yfiles.graphml.IXmlWriter,
		writeCData(content: string): yfiles.graphml.IXmlWriter,
		writeEndElementCore(): void,
		writeEndElement(): yfiles.graphml.IXmlWriter
	}

	declare export interface ChildWriteContext {
		lookup(type: yfiles.lang.Class): Object,
		setLookup<T>(tType: yfiles.lang.Class, value: T): void,
		removeLookup<T>(tType: yfiles.lang.Class): void,
		objectStack: yfiles.model.IListEnumerable<Object>,
		currentObject: Object,
		writeEvents: yfiles.graphml.IWriteEvents,
		parentContext: yfiles.graphml.IWriteContext,
		writer: yfiles.graphml.IXmlWriter,
		graph: yfiles.graph.IGraph,
		getSerializationProperty<T>(tType: yfiles.lang.Class, key: yfiles.support.TypedKey<T>): T,
		setSerializationProperty<T>(key: yfiles.support.TypedKey<T>, value: T): void,
		removeSerializationProperty<T>(key: yfiles.support.TypedKey<T>): void,
		serialize<T>(
		targetType: yfiles.lang.Class, context: yfiles.graphml.IWriteContext, item: T
	): void
	}

	declare export interface ComplexMapperOutputHandler<TKey, TValue> {
		serializer: (sender: Object, e: yfiles.graphml.HandleSerializationEventArgs) => void,
		sourceType: yfiles.lang.Class,
		writeValueCore(context: yfiles.graphml.IWriteContext, data: TValue): void
	}

	declare export interface AbstractOutputHandler<TKey, TData> {
		addNameToKeyDefinition(name: string): void,
		addUriToKeyDefinition(uri: string): void,
		addTypeToKeyDefinition(type: yfiles.graphml.KeyType): void,
		addScopeToKeyDefinition(scope: yfiles.graphml.KeyScope): void,
		defaultValue: TData,
		defaultExists: boolean,
		precedence: yfiles.graphml.WritePrecedence,
		keyDefinitionAttributes: yfiles.collections.IEnumerable<yfiles.graphml.GraphMLXmlAttribute>,
		dataTagAttributes: yfiles.collections.IEnumerable<yfiles.graphml.GraphMLXmlAttribute>,
		isDefaultValue(ctx: yfiles.graphml.IWriteContext): boolean,
		validScopes: yfiles.collections.ICollection<yfiles.graphml.KeyScope>,
		writeValue(ctx: yfiles.graphml.IWriteContext): void,
		writeKeyDefinitionContent(ctx: yfiles.graphml.IWriteContext): void,
		writeKeyDefault: boolean,
		writeValueCore(context: yfiles.graphml.IWriteContext, data: TData): void,
		getValue(context: yfiles.graphml.IWriteContext, key: TKey): TData
	}

			
}

declare module 'GraphMLWriter' {
		declare export interface ReferencesOutputHandler {
		internalReferences: yfiles.collections.IEnumerable<yfiles.graphml.IReferenceHandle>,
		precedence: yfiles.graphml.WritePrecedence,
		keyDefinitionAttributes: yfiles.collections.IEnumerable<yfiles.graphml.GraphMLXmlAttribute>,
		dataTagAttributes: yfiles.collections.IEnumerable<yfiles.graphml.GraphMLXmlAttribute>,
		isDefaultValue(ctx: yfiles.graphml.IWriteContext): boolean,
		writeValue(ctx: yfiles.graphml.IWriteContext): void,
		writeKeyDefinitionContent(ctx: yfiles.graphml.IWriteContext): void
	}

			
}

declare module 'AbstractXmlWriter' {
		declare export interface XmlNamespaceManager {
		getPrefixOfNamespace(ns: string): string,
		getPrefixOfNamespaceInScope(ns: string): string,
		getNamespaceOfPrefix(prefix: string): string,
		getNamespaceOfPrefixInScope(prefix: string): string,
		getOrCreateUniqueMapping(ns: string): string,
		registerLocalMapping(nsURI: string, prefix: string): string,
		pushScope(): void,
		sealScope(): void,
		popScope(): void,
		globalNamespaces: yfiles.collections.IDictionary<string, string>
	}

			
}

declare module 'hierarchic' {
		declare export interface ClassicLayerSequencer {
		useTransposition: boolean,
		weightHeuristic: yfiles.hierarchic.WeightHeuristic,
		removeFalseCrossings: boolean,
		maximalDuration: number,
		recentCrossingNumber: number,
		adoptValues(otherSequencer: yfiles.hierarchic.ILayerSequencer): void,
		getLayers(
		g: yfiles.layout.LayoutGraph, layerMap: yfiles.algorithms.INodeMap, maxLayer: number
	): yfiles.algorithms.NodeList[],
		usingGroups: boolean,
		randomizationRounds: number
	}

	declare export interface IncrementalHierarchicLayouter {
		groupAlignmentPolicy: yfiles.hierarchic.GroupAlignmentPolicy,
		compactGroups: boolean,
		componentArrangementPolicy: yfiles.hierarchic.ComponentArrangementPolicy,
		maximalDuration: number,
		recursiveGroupLayering: boolean,
		gridSpacing: number,
		componentLayouterEnabled: boolean,
		backloopRouting: boolean,
		backloopRoutingForSelfloops: boolean,
		automaticEdgeGrouping: boolean,
		orthogonalRouting: boolean,
		integratedEdgeLabeling: boolean,
		considerNodeLabels: boolean,
		minimumLayerDistance: number,
		nodeToNodeDistance: number,
		nodeToEdgeDistance: number,
		edgeToEdgeDistance: number,
		defaultDrawingDistanceCalculator: yfiles.hierarchic.incremental.DefaultDrawingDistanceCalculator,
		createHierarchicLayouter(): yfiles.hierarchic.incremental.HierarchicLayouter,
		hierarchicLayouter: yfiles.hierarchic.incremental.HierarchicLayouter,
		fromScratchLayeringStrategy: yfiles.hierarchic.LayeringStrategy,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(g: yfiles.layout.LayoutGraph): void,
		mirrorMask: number,
		configureCoreLayout(
		graph: yfiles.layout.LayoutGraph, ihl: yfiles.hierarchic.incremental.HierarchicLayouter
	): void,
		unconfigureCoreLayout(
		graph: yfiles.layout.LayoutGraph, ihl: yfiles.hierarchic.incremental.HierarchicLayouter
	): void,
		createIncrementalHintsFactory(): yfiles.hierarchic.incremental.IIncrementalHintsFactory,
		createSequenceConstraintFactoryForLayoutGraph(
		graph: yfiles.layout.LayoutGraph
	): yfiles.hierarchic.incremental.ISequenceConstraintFactory,
		createLayerConstraintFactory(
		graph: yfiles.algorithms.Graph
	): yfiles.hierarchic.incremental.ILayerConstraintFactory,
		fromScratchLayerer: yfiles.hierarchic.incremental.ILayerer,
		fromScratchSequencer: yfiles.hierarchic.incremental.ISequencer,
		nodePlacer: yfiles.hierarchic.incremental.INodePlacer,
		fixedElementsLayerer: yfiles.hierarchic.incremental.ILayerer,
		fixedElementsSequencer: yfiles.hierarchic.incremental.ISequencer,
		layoutMode: yfiles.hierarchic.LayoutMode,
		createEdgeLayoutDescriptor(): yfiles.hierarchic.incremental.EdgeLayoutDescriptor,
		edgeLayoutDescriptor: yfiles.hierarchic.incremental.EdgeLayoutDescriptor,
		createNodeLayoutDescriptor(): yfiles.hierarchic.incremental.NodeLayoutDescriptor,
		nodeLayoutDescriptor: yfiles.hierarchic.incremental.NodeLayoutDescriptor
	}

	declare export interface AbstractDrawer {
		minimalNodeDistanceF: number,
		minimalLayerDistanceF: number,
		minimalEdgeDistanceF: number,
		minimalMultiEdgeDistanceF: number,
		dummyMapF: yfiles.algorithms.INodeMap,
		edgeLengthKeyF: Object,
		graphF: yfiles.layout.LayoutGraph,
		distanceToNextNodeF: yfiles.algorithms.INodeMap,
		minimalEdgeDistance: number,
		minimalMultiEdgeDistance: number,
		minimalNodeDistance: number,
		minimalLayerDistance: number,
		dummyMap: yfiles.algorithms.INodeMap,
		edgeLengthKey: Object,
		assignYCoordsWithNodeList(
		graph: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[]
	): void,
		assignYCoords(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.algorithms.INodeCursor[]
	): void,
		assignCoordinates(
		g: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void,
		assignCoordinatesToNodes(
		layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void,
		getLeftX(v: yfiles.algorithms.Node): number,
		getRightX(v: yfiles.algorithms.Node): number,
		getTopY(v: yfiles.algorithms.Node): number,
		getBottomY(v: yfiles.algorithms.Node): number,
		getFullWidth(v: yfiles.algorithms.Node): number,
		getFullHeight(v: yfiles.algorithms.Node): number,
		getLeftBorder(v: yfiles.algorithms.Node): number,
		getRightBorder(v: yfiles.algorithms.Node): number,
		getTopBorder(v: yfiles.algorithms.Node): number,
		getBottomBorder(v: yfiles.algorithms.Node): number,
		getLeftHalf(v: yfiles.algorithms.Node): number,
		getRightHalf(v: yfiles.algorithms.Node): number,
		getTopHalf(v: yfiles.algorithms.Node): number,
		getBottomHalf(v: yfiles.algorithms.Node): number,
		initializeDistancesToNextNode(layerLists: yfiles.algorithms.NodeList[]): void,
		getDistanceToNextNode(v: yfiles.algorithms.Node): number,
		dispose(): void
	}

	declare export interface AlignmentDrawer {
		alignNodes(graph: yfiles.layout.LayoutGraph, lists: yfiles.algorithms.NodeList[]): void,
		assignCoordinates(
		g: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void,
		dummyMap: yfiles.algorithms.INodeMap,
		minimalEdgeDistance: number,
		minimalLayerDistance: number,
		minimalMultiEdgeDistance: number,
		minimalNodeDistance: number
	}

	declare export interface AsIsLayerer {
		nodeScalingFactor: number,
		maximumNodeSize: number,
		minimumNodeSize: number,
		nodeHalo: number,
		assignNodeLayer(
		g: yfiles.layout.LayoutGraph, layerMap: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList
	): number,
		getMin(graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node): number,
		getMax(graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node): number,
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface MedianDrawerWrapper {
		drawerDelegate: yfiles.hierarchic.IDrawer,
		dummy: yfiles.algorithms.INodeMap,
		assignCoordinates(
		g: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void,
		dummyMap: yfiles.algorithms.INodeMap,
		minimalEdgeDistance: number,
		minimalLayerDistance: number,
		minimalMultiEdgeDistance: number,
		minimalNodeDistance: number,
		preprocess(
		g: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.INodeMap
	): void,
		postprocess(
		g: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.INodeMap
	): void,
		delegate: yfiles.hierarchic.IDrawer
	}

	declare export interface MedianLinearSegmentDrawer {
		assignCoordinatesToNodes(
		layerLists: yfiles.algorithms.NodeList[], _layerID: yfiles.algorithms.IDataProvider
	): void,
		init(g: yfiles.algorithms.Graph, layerLists: yfiles.algorithms.NodeList[]): void,
		reinit(g: yfiles.algorithms.Graph, x: number[]): void,
		verticalAlignment(g: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[]): void,
		horizontalCompaction(
		g: yfiles.layout.LayoutGraph, x: number[], layerLists: yfiles.algorithms.NodeList[]
	): void,
		propagateCoordinates(g: yfiles.layout.LayoutGraph): void,
		dispose(): void
	}

	declare export interface LinearSegmentsDrawer {
		assignCoordinatesToNodes(
		layers: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void
	}

	declare export interface LeanLayersLayerer {
		useEnhancedDistribution: boolean,
		preferredLayerWidth: number,
		startFromSketch: boolean,
		assignNodeLayer(
		g: yfiles.layout.LayoutGraph, layer: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList
	): number,
		assignNodeLayerForGivenLayers(
		graph: yfiles.layout.LayoutGraph, layerMap: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList, useGivenLayers: boolean
	): number,
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface PendularDrawer {
		right: yfiles.algorithms.INodeMap,
		left: yfiles.algorithms.INodeMap,
		initStructures(): void,
		assignCoordinatesToNodes(
		layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void,
		disposeStructures(): void,
		minPath(segments: yfiles.algorithms.YList): boolean,
		findChains(): yfiles.algorithms.YList,
		straightenPath(
		firstCell: yfiles.algorithms.ListCell, lastCell: yfiles.algorithms.ListCell, range: number[]
	): boolean,
		isSegmentNode(n: yfiles.algorithms.Node): boolean,
		minNode(): void,
		shakePartition(partition: yfiles.algorithms.YList, direction: number): void,
		partitionLayer(layer: yfiles.algorithms.NodeList, direction: number): yfiles.algorithms.YList,
		layoutGraph: yfiles.layout.LayoutGraph,
		getPendulumForceForNode(v: yfiles.algorithms.Node, ec: yfiles.algorithms.IEdgeCursor): number,
		touches(v1: yfiles.algorithms.Node, v2: yfiles.algorithms.Node): boolean,
		verifyMovement(n: yfiles.algorithms.Node, distance: number): number,
		getPendulumForce(cursor: yfiles.algorithms.ICursor, direction: number): number,
		moveNode(n: yfiles.algorithms.Node, distance: number): void,
		move(nodes: yfiles.algorithms.ICursor, distance: number): void,
		getZ(): number,
		getEdgeWeight(e: yfiles.algorithms.Edge): number,
		getMaximumExtent(n: yfiles.algorithms.Node, toLeft: boolean): number,
		getMinimalLayerDistance(n: yfiles.algorithms.Node, toLeft: boolean): number,
		initializePositions(layerList: yfiles.algorithms.NodeList[]): void
	}

	declare export interface PolylineDrawer {
		assignCoordinatesToNodes(
		layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void
	}

	declare export interface NodeLabelSpaceDrawer {
		assignCoordinates(
		g: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void,
		getHaloSpace(node: yfiles.algorithms.Node, left: boolean): number,
		dummyMap: yfiles.algorithms.INodeMap,
		minimalEdgeDistance: number,
		minimalLayerDistance: number,
		minimalMultiEdgeDistance: number,
		minimalNodeDistance: number
	}

	declare export interface ILayerSequencer {
		getLayers(
		g: yfiles.layout.LayoutGraph, layerID: yfiles.algorithms.INodeMap, maxLayer: number
	): yfiles.algorithms.NodeList[]
	}

	declare export interface ILayerer {
		assignNodeLayer(
		g: yfiles.layout.LayoutGraph, layer: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList
	): number
	}

	declare export interface PortAssignment {
		
	}

	declare export interface IMementoSupport {
		createMemento(): Object,
		memento: Object,
		setMementoMode(phase: yfiles.hierarchic.AlgorithmPhase, useMemento: boolean): void,
		getMementoMode(phase: yfiles.hierarchic.AlgorithmPhase): boolean
	}

	declare export interface IDrawer {
		assignCoordinates(
		g: yfiles.layout.LayoutGraph, layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void,
		dummyMap: yfiles.algorithms.INodeMap,
		minimalNodeDistance: number,
		minimalEdgeDistance: number,
		minimalMultiEdgeDistance: number,
		minimalLayerDistance: number
	}

	declare export interface HierarchicLayouter {
		routingStyle: yfiles.hierarchic.RoutingStyle,
		optimizePortConstraints: boolean,
		optimizeSameLayerEdgeRouting: boolean,
		layoutStyle: yfiles.hierarchic.LayoutStyle,
		layeringStrategy: yfiles.hierarchic.LayeringStrategy,
		layerer: yfiles.hierarchic.ILayerer,
		layerSequencer: yfiles.hierarchic.ILayerSequencer,
		drawer: yfiles.hierarchic.IDrawer,
		minimalNodeDistance: number,
		minimalEdgeDistance: number,
		minimalLayerDistance: number,
		minimalFirstSegmentLength: number,
		removeFalseCrossings: boolean,
		maximalDuration: number,
		bendReductionThreshold: number,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(g: yfiles.layout.LayoutGraph): void,
		getLayerSequence(
		g: yfiles.layout.LayoutGraph, LayerKey: yfiles.algorithms.INodeMap, maxLayer: number
	): yfiles.algorithms.NodeList[],
		mementoSupport: yfiles.hierarchic.IMementoSupport,
		disposeMementoSupport(): void
	}

	declare export interface DrawerKeys {
		
	}

	declare export interface TreeDrawer {
		minimalEdgeDistance: number,
		minimalMultiEdgeDistance: number,
		minimalNodeDistance: number,
		minimalLayerDistance: number,
		alternativeDrawer: yfiles.hierarchic.IDrawer,
		assignCoordinatesToNodes(
		layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void
	}

	declare export interface TopologicalLayerer {
		rankingPolicy: yfiles.hierarchic.RankingPolicy,
		assignNodeLayer(
		g: yfiles.layout.LayoutGraph, layer: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList
	): number,
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface BFSLayerer {
		assignNodeLayer(
		graph: yfiles.layout.LayoutGraph, layer: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList
	): number,
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface WeightedLayerer {
		weight: yfiles.algorithms.IDataProvider,
		key: Object,
		weightedCycleRemoval: boolean,
		maximalDuration: number,
		assignNodeLayer(
		g: yfiles.layout.LayoutGraph, layer: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList
	): number,
		assignNodeLayerWithDataProvider(
		g: yfiles.layout.LayoutGraph, layer: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList, w: yfiles.algorithms.IDataProvider
	): number,
		getWeight(edge: yfiles.algorithms.Edge): number,
		assignNodeLayerForAlgorithmsGraph(
		g: yfiles.algorithms.Graph, layer: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList, w: yfiles.algorithms.IDataProvider
	): number,
		makeDFSAcyclic(g: yfiles.layout.LayoutGraph, reversedEdges: yfiles.algorithms.EdgeList): void,
		makeDFSAcyclicForAlgorithmsGraph(g: yfiles.algorithms.Graph, reversedEdges: yfiles.algorithms.EdgeList): void,
		assignLayersToMap(g: yfiles.algorithms.Graph, layer: yfiles.algorithms.INodeMap): number,
		assignLayersFast(g: yfiles.algorithms.Graph, layer: yfiles.algorithms.INodeMap): number,
		downShiftNodes(
		g: yfiles.algorithms.Graph, LayerKey: yfiles.algorithms.INodeMap, maxLayer: number
	): void,
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface SimplexDrawer {
		straighteningFactor: number,
		maximalDuration: number,
		assignCoordinatesToNodes(
		layerLists: yfiles.algorithms.NodeList[], layerID: yfiles.algorithms.IDataProvider
	): void,
		getCost(
		graph: yfiles.algorithms.Graph, result: yfiles.algorithms.INodeMap, weight: yfiles.algorithms.IEdgeMap, minLength: yfiles.algorithms.IEdgeMap
	): number
	}

	declare export interface HierarchicGroupLayouter {
		grouping: yfiles.layout.GraphGrouping,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(g: yfiles.layout.LayoutGraph): void,
		layoutLevel(
		root: yfiles.algorithms.Node, levelNodes: yfiles.algorithms.NodeList, buildGraphsOnly: boolean
	): yfiles.algorithms.Rectangle2D,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		layerSequencer: yfiles.hierarchic.ILayerSequencer,
		layerer: yfiles.hierarchic.ILayerer,
		groupBoundsCalculator: yfiles.layout.IGroupBoundsCalculator,
		drawer: yfiles.hierarchic.IDrawer,
		layoutStyle: yfiles.hierarchic.LayoutStyle,
		layeringStrategy: yfiles.hierarchic.LayeringStrategy,
		strongPortsScalingActive: boolean,
		getLayerSequence(
		g: yfiles.layout.LayoutGraph, LayerKey: yfiles.algorithms.INodeMap, maxLayer: number
	): yfiles.algorithms.NodeList[],
		globalSequencingActive: boolean
	}

	declare export interface ConstraintLayerer {
		coreLayerer: yfiles.hierarchic.ILayerer,
		allowSameLayerEdges: boolean,
		assignNodeLayer(
		g: yfiles.layout.LayoutGraph, layer: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList
	): number,
		checkConstraints(): void,
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface EdgeReverser {
		reverseEdges(g: yfiles.algorithms.Graph, edgeList: yfiles.algorithms.EdgeList): void
	}

	declare export interface GivenLayersLayerer {
		normalize(
		g: yfiles.algorithms.Graph, layerId: yfiles.algorithms.IDataProvider, normalizedLayerId: yfiles.algorithms.IDataAcceptor
	): number,
		assignNodeLayer(
		g: yfiles.layout.LayoutGraph, layerMap: yfiles.algorithms.INodeMap, reversedEdges: yfiles.algorithms.EdgeList
	): number,
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

			
}

declare module 'AlignmentDrawer' {
		declare export interface TopAlignmentDataProvider {
		getDouble(dataHolder: Object): number
	}

	declare export interface LeftAlignmentDataProvider {
		getDouble(dataHolder: Object): number
	}

	declare export interface RightAlignmentDataProvider {
		getDouble(dataHolder: Object): number
	}

	declare export interface BottomAlignmentDataProvider {
		getDouble(dataHolder: Object): number
	}

			
}

declare module 'ConstraintLayerer' {
		declare export interface IConstraintFactory {
		memento: Object,
		dispose(): void,
		addPlaceNodeBelowConstraint(referenceId: Object, belowId: Object): void,
		addPlaceNodeBelowConstraintWithMinDistance(referenceId: Object, belowId: Object, minDistance: number): void,
		addPlaceNodeBelowConstraintWithMinDistanceAndWeight(
		referenceId: Object, belowId: Object, minDistance: number, weight: number
	): void,
		addPlaceNodeAboveConstraint(referenceId: Object, aboveId: Object): void,
		addPlaceNodeAboveConstraintWithMinDistance(referenceId: Object, aboveId: Object, minDistance: number): void,
		addPlaceNodeAboveConstraintWithMinDistanceAndWeight(
		referenceId: Object, aboveId: Object, minDistance: number, weight: number
	): void,
		addPlaceNodeInSameLayerConstraint(referenceId: Object, sameLayerId: Object): void,
		addPlaceNodeAtTopConstraint(nodeId: Object): void,
		addPlaceNodeAtBottomConstraint(nodeId: Object): void,
		removeConstraints(nodeId: Object): void
	}

			
}

declare module 'incremental' {
		declare export interface OldLayererWrapper {
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		oldLayerer: yfiles.hierarchic.ILayerer
	}

	declare export interface PartitionGridLayoutStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface PCListOptimizer {
		deterministic: boolean,
		backloopPenalty: number,
		crossingPenalty: number,
		overUsagePenalty: number,
		optimizeAfterLayering(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		getPortCandidateSetDataProvider(graph: yfiles.layout.LayoutGraph): yfiles.algorithms.IDataProvider,
		optimizeAfterSequencing(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		optimizeAfterSequencingForSingleNode(
		node: yfiles.algorithms.Node, inEdgeOrder: yfiles.objectcollections.IComparer, outEdgeOrder: yfiles.objectcollections.IComparer, graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void
	}

	declare export interface SelfloopCalculator {
		calculateSelfLoops(
		graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node, spc: yfiles.algorithms.IDataProvider, tpc: yfiles.algorithms.IDataProvider
	): void,
		calculateSelfLoopsForEdgeList(
		graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node, selfLoops: yfiles.algorithms.YList, spc: yfiles.algorithms.IDataProvider, tpc: yfiles.algorithms.IDataProvider
	): void,
		getMinimumFirstSegmentLength(graph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge): number,
		isOctilinearEdge(graph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge): boolean,
		getMinimumOctilinearSegmentLength(graph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge): number,
		getMinimumLastSegmentLength(graph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge): number,
		getMinimumDistance(graph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge): number,
		getMinimumNodeDistance(graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node): number
	}

	declare export interface RoutingStyle {
		backloopRoutingStyle: yfiles.hierarchic.incremental.EdgeRoutingStyle,
		edgeGroupRoutingStyle: yfiles.hierarchic.incremental.EdgeRoutingStyle,
		defaultEdgeRoutingStyle: yfiles.hierarchic.incremental.EdgeRoutingStyle,
		sameLayerEdgeRoutingStyle: yfiles.hierarchic.incremental.EdgeRoutingStyle,
		selfloopRoutingStyle: yfiles.hierarchic.incremental.EdgeRoutingStyle
	}

	declare export interface MultiComponentLayerer {
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		sort(
		nodeLists: yfiles.algorithms.NodeList[], componentIndexProvider: yfiles.algorithms.IDataProvider
	): void,
		singleComponentLayerer: yfiles.hierarchic.incremental.ILayerer,
		merger: yfiles.hierarchic.incremental.ILayeredComponentsMerger,
		componentComparator: yfiles.objectcollections.IComparer
	}

	declare export interface NodeLayoutDescriptor {
		setPortBorderGapRatio(side: number, ratio: number): void,
		portBorderGapRatios: number,
		getPortBorderGapRatio(side: number): number,
		layerAlignment: number,
		nodeLabelMode: yfiles.hierarchic.incremental.NodeLabelMode,
		minimumLayerHeight: number,
		minimumDistance: number,
		gridReference: yfiles.algorithms.YPoint,
		portAssignment: yfiles.hierarchic.incremental.PortAssignmentMode
	}

	declare export interface SwimLaneDescriptor {
		indexFixed: boolean,
		clientObject: Object,
		laneTightness: number,
		comparator: yfiles.objectcollections.IComparer,
		minimumLaneWidth: number,
		leftLaneInset: number,
		rightLaneInset: number,
		computedLanePosition: number,
		computedLaneWidth: number,
		computedLaneIndex: number,
		compareToObject(o: Object): number
	}

	declare export interface TypeBasedDrawingDistanceCalculator {
		getMinDistance(
		graph: yfiles.layout.LayoutGraph, layer: yfiles.hierarchic.incremental.ILayer, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, left: yfiles.algorithms.Node, right: yfiles.algorithms.Node
	): number,
		compaction: boolean,
		node2NodeDistance: number,
		node2EdgeDistance: number,
		edge2EdgeDistance: number,
		dispose(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		initialize(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		minimumFirstSegmentLength: number
	}

	declare export interface LayerConstraintFactoryCompanion {
		
	}

	declare export interface TopLevelGroupToSwimlaneStage {
		spacing: number,
		orderSwimlanesFromSketch: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface TopologicalIncrementalLayerer {
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		separateComponentsLayerer: yfiles.hierarchic.incremental.ILayerer,
		layeredComponentsMerger: yfiles.hierarchic.incremental.ILayeredComponentsMerger
	}

	declare export interface GivenSequenceSequencer {
		sequenceComparator: yfiles.objectcollections.IComparer,
		sequenceNodeLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void
	}

	declare export interface SimplexNodePlacer {
		nodeCompaction: boolean,
		minimumSublayerDistance: number,
		labelCompaction: boolean,
		bendReductionEnabled: boolean,
		horizontalCompaction: boolean,
		straightenEdges: boolean,
		groupCompactionStrategy: yfiles.hierarchic.incremental.GroupCompactionPolicy,
		exactPlacementEnforced: boolean,
		fromSketchLayerAssignment: boolean,
		maximalDuration: number,
		swimLaneCrossingWeight: number,
		baryCenterMode: boolean,
		assignLayerCoordinates(
		graph: yfiles.layout.LayoutGraph, layoutDataProvider: yfiles.hierarchic.incremental.ILayoutDataProvider, layers: yfiles.hierarchic.incremental.ILayers
	): void,
		assignNodesToSublayer(
		layerNodes: yfiles.algorithms.NodeList, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, graph: yfiles.layout.LayoutGraph, lowerSublayer: yfiles.algorithms.INodeMap
	): void,
		isFixedNode(
		graph: yfiles.layout.LayoutGraph, provider: yfiles.hierarchic.incremental.ILayoutDataProvider, node: yfiles.algorithms.Node, inLayer: boolean
	): boolean,
		getMinimumLayerHeight(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, layer: yfiles.hierarchic.incremental.ILayer
	): number,
		getLayerAlignment(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, node: yfiles.algorithms.Node, layerIndex: number, minLayerHeight: number
	): number,
		assignSequenceCoordinates(
		graph: yfiles.layout.LayoutGraph, layoutDataProvider: yfiles.hierarchic.incremental.ILayoutDataProvider, layers: yfiles.hierarchic.incremental.ILayers, drawingDistanceCalculator: yfiles.hierarchic.incremental.IDrawingDistanceCalculator
	): void,
		getMinDistance(
		graph: yfiles.layout.LayoutGraph, layer: yfiles.hierarchic.incremental.ILayer, predNode: yfiles.algorithms.Node, succ: yfiles.algorithms.Node
	): number,
		breakLongSegments: boolean
	}

	declare export interface GroupingSupport {
		hideGroupNodes(): void,
		unhideGroupNodes(): void,
		minimumGroupDistance: number,
		assignEdgeGroupNodesToGroups(layers: yfiles.hierarchic.incremental.ILayers): void,
		removeEdgeGroupAssignment(layers: yfiles.hierarchic.incremental.ILayers): void,
		isGroupNode(node: yfiles.algorithms.Node): boolean,
		assignLabelNodesToGroups(
		layers: yfiles.hierarchic.incremental.ILayers, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		active: boolean,
		visitDecendants(
		groupNode: yfiles.algorithms.Node, visitor: yfiles.hierarchic.incremental.GroupingSupport.IVisitor
	): void,
		getDecendants(groupNode: yfiles.algorithms.Node): yfiles.algorithms.NodeList,
		getChildren(groupNode: yfiles.algorithms.Node): yfiles.algorithms.NodeList,
		getParentNode(node: yfiles.algorithms.Node): yfiles.algorithms.Node,
		isDescendant(node: yfiles.algorithms.Node, groupNode: yfiles.algorithms.Node): boolean
	}

	declare export interface AspectRatioComponentLayerer {
		singleComponentLayerer: yfiles.hierarchic.incremental.ILayerer,
		considerNodeSize: boolean,
		desiredAspectRatio: number,
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface AsIsSequencer {
		sequenceNodeLayers(
		g: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void
	}

	declare export interface AbstractPortConstraintOptimizer {
		mirrorMask: yfiles.layout.MirrorMask,
		layoutOrientation: yfiles.layout.LayoutOrientation,
		optimizeAfterLayering(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		optimizeAfterSequencing(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		optimizeAfterSequencingForAllNodes(
		inEdgeOrder: yfiles.objectcollections.IComparer, outEdgeOrder: yfiles.objectcollections.IComparer, graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		optimizeAfterSequencingForSingleNode(
		node: yfiles.algorithms.Node, inEdgeOrder: yfiles.objectcollections.IComparer, outEdgeOrder: yfiles.objectcollections.IComparer, graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		insertSameLayerStructures(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): yfiles.hierarchic.incremental.AbstractPortConstraintOptimizer.SameLayerData,
		removeSameLayerStructures(
		sameLayerData: yfiles.hierarchic.incremental.AbstractPortConstraintOptimizer.SameLayerData, graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void
	}

	declare export interface HierarchicLayouter {
		createLabelLayouter(): yfiles.layout.ILayoutStage,
		createLayerer(): yfiles.hierarchic.incremental.ILayerer,
		componentLayouterEnabled: boolean,
		maximalDuration: number,
		createSequencer(): yfiles.hierarchic.incremental.ISequencer,
		createDrawingDistanceCalculator(): yfiles.hierarchic.incremental.IDrawingDistanceCalculator,
		createPortAllocator(): yfiles.hierarchic.incremental.IPortAllocator,
		createPortConstraintOptimizer(): yfiles.hierarchic.incremental.IPortConstraintOptimizer,
		createNodePlacer(): yfiles.hierarchic.incremental.INodePlacer,
		layerer: yfiles.hierarchic.incremental.ILayerer,
		sequencer: yfiles.hierarchic.incremental.ISequencer,
		nodePlacer: yfiles.hierarchic.incremental.INodePlacer,
		portAllocator: yfiles.hierarchic.incremental.IPortAllocator,
		portConstraintOptimizer: yfiles.hierarchic.incremental.IPortConstraintOptimizer,
		drawingDistanceCalculator: yfiles.hierarchic.incremental.IDrawingDistanceCalculator,
		gridSpacing: number,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		getAlgorithmProperty(key: Object): Object,
		setAlgorithmProperty(key: Object, value: Object): void,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		createGrouping(graph: yfiles.layout.LayoutGraph): yfiles.layout.GraphGrouping,
		getIncrementalHints(graph: yfiles.layout.LayoutGraph): yfiles.algorithms.IDataProvider,
		getEdgeLayoutDescriptors(graph: yfiles.layout.LayoutGraph): yfiles.algorithms.IDataProvider,
		getNodeLayoutDescriptors(graph: yfiles.layout.LayoutGraph): yfiles.algorithms.IDataProvider,
		getSwimLaneDescriptors(graph: yfiles.layout.LayoutGraph): yfiles.algorithms.IDataProvider,
		createItemData(
		g: yfiles.layout.LayoutGraph, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		createSubgraphLayerSequencer(): yfiles.hierarchic.incremental.ISequencer,
		createLayers(
		ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): yfiles.hierarchic.incremental.ILayers,
		createIncrementalLayerer(): yfiles.hierarchic.incremental.ILayerer,
		createEdgeReverser(): yfiles.hierarchic.incremental.IEdgeReverser,
		publishLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers
	): void,
		publishSequences(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		reduceBendCount(graph: yfiles.layout.LayoutGraph): void,
		createIncrementalHintsFactory(): yfiles.hierarchic.incremental.IIncrementalHintsFactory,
		createSequenceConstraintFactory(
		graph: yfiles.algorithms.Graph
	): yfiles.hierarchic.incremental.ISequenceConstraintFactory,
		createLayerConstraintFactory(
		graph: yfiles.algorithms.Graph
	): yfiles.hierarchic.incremental.ILayerConstraintFactory
	}

	declare export interface ISequenceConstraintFactory {
		memento: Object,
		dispose(): void,
		addPlaceNodeBeforeConstraint(referenceId: Object, beforeId: Object): void,
		addPlaceNodeAfterConstraint(referenceId: Object, afterId: Object): void,
		addPlaceNodeAtHeadConstraint(nodeId: Object): void,
		addPlaceNodeAtTailConstraint(nodeId: Object): void
	}

	declare export interface ILayerConstraintFactory {
		memento: Object,
		dispose(): void,
		addPlaceNodeBelowConstraint(
		referenceId: Object, belowId: Object
	): yfiles.hierarchic.incremental.ILayerConstraint,
		addPlaceNodeBelowConstraintWithMinDistance(
		referenceId: Object, belowId: Object, minDistance: number
	): yfiles.hierarchic.incremental.ILayerConstraint,
		addPlaceNodeBelowConstraintWithMinDistanceAndWeight(
		referenceId: Object, belowId: Object, minDistance: number, weight: number
	): yfiles.hierarchic.incremental.ILayerConstraint,
		addPlaceNodeAboveConstraint(
		referenceId: Object, aboveId: Object
	): yfiles.hierarchic.incremental.ILayerConstraint,
		addPlaceNodeAboveConstraintWithMinDistance(
		referenceId: Object, aboveId: Object, minDistance: number
	): yfiles.hierarchic.incremental.ILayerConstraint,
		addPlaceNodeAboveConstraintWithMinDistanceAndWeight(
		referenceId: Object, aboveId: Object, minDistance: number, weight: number
	): yfiles.hierarchic.incremental.ILayerConstraint,
		addPlaceNodeInSameLayerConstraint(
		referenceId: Object, sameLayerId: Object
	): yfiles.hierarchic.incremental.ILayerConstraint,
		addPlaceNodeAtTopConstraint(nodeId: Object): yfiles.hierarchic.incremental.ILayerConstraint,
		addPlaceNodeAtBottomConstraint(nodeId: Object): yfiles.hierarchic.incremental.ILayerConstraint,
		removeConstraints(nodeId: Object): void
	}

	declare export interface ILayer {
		add(node: yfiles.algorithms.Node): void,
		addSameLayerEdge(edge: yfiles.algorithms.Edge): void,
		sameLayerEdges: yfiles.algorithms.YList,
		removeNode(node: yfiles.algorithms.Node): void,
		remove(): void,
		list: yfiles.algorithms.NodeList,
		setNodeOrder(list: yfiles.algorithms.YList): void,
		type: yfiles.hierarchic.incremental.LayerType,
		index: number,
		row: yfiles.layout.RowDescriptor
	}

	declare export interface IItemFactory {
		insertGroupNodeLayer(source: boolean, index: number): yfiles.hierarchic.incremental.ILayer,
		insertLabelNodeLayer(source: boolean, index: number): yfiles.hierarchic.incremental.ILayer,
		destroyLabelNodeLayer(layer: yfiles.hierarchic.incremental.ILayer, useInEdges: boolean): void,
		insertEdge(edge: yfiles.algorithms.Edge): yfiles.algorithms.EdgeList,
		registerSameLayerEdge(edge: yfiles.algorithms.Edge): void,
		convertToLabelNode(dummyNode: yfiles.algorithms.Node): void,
		unconvertToLabelNode(labelNode: yfiles.algorithms.Node): void,
		createProxyNode(edge: yfiles.algorithms.Edge, source: boolean): yfiles.algorithms.Node,
		createProxyNodeWithEdgeSourceAndLaneDescriptor(
		edge: yfiles.algorithms.Edge, source: boolean, laneDescriptor: yfiles.hierarchic.incremental.SwimLaneDescriptor
	): yfiles.algorithms.Node,
		destroyProxyNode(proxyNode: yfiles.algorithms.Node): yfiles.algorithms.Edge,
		createSameLayerSideProxy(
		inLayer: yfiles.hierarchic.incremental.ILayer, forNode: yfiles.algorithms.Node, edge: yfiles.algorithms.Edge
	): yfiles.algorithms.Node,
		createSameLayerSideProxyWithDescriptor(
		inLayer: yfiles.hierarchic.incremental.ILayer, forNode: yfiles.algorithms.Node, edge: yfiles.algorithms.Edge, sld: yfiles.hierarchic.incremental.SwimLaneDescriptor
	): yfiles.algorithms.Node,
		destroySameLayerSideProxy(proxyNode: yfiles.algorithms.Node): void,
		createEdgeGroupNode(
		layer: yfiles.hierarchic.incremental.ILayer, groupId: Object
	): yfiles.algorithms.Node,
		createBendNode(
		layer: yfiles.hierarchic.incremental.ILayer, edge: yfiles.algorithms.Edge
	): yfiles.algorithms.Node,
		createBendNodeForDescriptor(
		layer: yfiles.hierarchic.incremental.ILayer, edge: yfiles.algorithms.Edge, laneDescriptor: yfiles.hierarchic.incremental.SwimLaneDescriptor
	): yfiles.algorithms.Node,
		createDistanceNode(
		layer: yfiles.hierarchic.incremental.ILayer, size: yfiles.algorithms.Rectangle2D.Double, edges: yfiles.algorithms.Edge[]
	): yfiles.algorithms.Node,
		destroyDistanceNode(distanceNode: yfiles.algorithms.Node): void,
		createDummyEdge(
		newSource: yfiles.algorithms.Node, newTarget: yfiles.algorithms.Node, oldEdge: yfiles.algorithms.Edge, sourceEnd: boolean, targetEnd: boolean
	): yfiles.algorithms.Edge,
		createReverseDummyEdge(
		newSource: yfiles.algorithms.Node, newTarget: yfiles.algorithms.Node, oldEdge: yfiles.algorithms.Edge, sourceEnd: boolean, targetEnd: boolean
	): yfiles.algorithms.Edge,
		createRedirectedGroupEdge(
		newSource: yfiles.algorithms.Node, newTarget: yfiles.algorithms.Node, groupEdge: yfiles.algorithms.Edge
	): yfiles.algorithms.Edge,
		createGroupNodeConnectorEdge(
		gn1: yfiles.algorithms.Node, gn2: yfiles.algorithms.Node, representative: yfiles.algorithms.Edge
	): yfiles.algorithms.Edge,
		createSameLayerProxy(
		layer: yfiles.hierarchic.incremental.ILayer, edge: yfiles.algorithms.Edge, toProxy: yfiles.algorithms.Node
	): yfiles.algorithms.Edge,
		destroySameLayerProxy(edge: yfiles.algorithms.Edge): yfiles.algorithms.Edge,
		createSameLayerSwitchProxy(
		layer: yfiles.hierarchic.incremental.ILayer, edge: yfiles.algorithms.Edge
	): yfiles.algorithms.Node,
		destroySameLayerSwitchProxy(node: yfiles.algorithms.Node): yfiles.algorithms.Edge,
		createNormalNodeData(node: yfiles.algorithms.Node): yfiles.hierarchic.incremental.INodeData,
		createProxyNodeData(
		node: yfiles.algorithms.Node, proxy: yfiles.algorithms.Node, edge: yfiles.algorithms.Edge
	): yfiles.hierarchic.incremental.INodeData,
		createBendNodeData(
		node: yfiles.algorithms.Node, edge: yfiles.algorithms.Edge
	): yfiles.hierarchic.incremental.INodeData,
		createBendNodeDataForDescriptor(
		node: yfiles.algorithms.Node, edge: yfiles.algorithms.Edge, laneDescriptor: yfiles.hierarchic.incremental.SwimLaneDescriptor
	): yfiles.hierarchic.incremental.INodeData,
		createEdgeGroupNodeData(
		node: yfiles.algorithms.Node, groupId: Object, source: boolean
	): yfiles.hierarchic.incremental.INodeData,
		createGroupBorderNode(
		groupNode: yfiles.algorithms.Node, layer: yfiles.hierarchic.incremental.ILayer, type: number
	): yfiles.algorithms.Node,
		createGroupLayerDummyNode(): yfiles.algorithms.Node,
		createNormalEdgeData(edge: yfiles.algorithms.Edge): yfiles.hierarchic.incremental.IEdgeData,
		createSameLayerEdgeData(edge: yfiles.algorithms.Edge): yfiles.hierarchic.incremental.IEdgeData,
		createSelfLoopEdgeData(edge: yfiles.algorithms.Edge): yfiles.hierarchic.incremental.IEdgeData,
		setDirectlyConnectSameLayerEdge(sameLayerEdge: yfiles.algorithms.Edge): void,
		setTemporaryPortConstraint(
		edge: yfiles.algorithms.Edge, source: boolean, pc: yfiles.layout.PortConstraint
	): yfiles.hierarchic.incremental.IEdgeData,
		setTemporaryEdgeGroups(
		edge: yfiles.algorithms.Edge, sgId: Object, tgId: Object
	): yfiles.hierarchic.incremental.IEdgeData,
		createGroupBorderEdge(
		source: yfiles.algorithms.Node, target: yfiles.algorithms.Node
	): yfiles.algorithms.Edge,
		createConnectorProxyForGroup(
		groupNode: yfiles.algorithms.Node, groupId: Object, layer: yfiles.hierarchic.incremental.ILayer, e: yfiles.algorithms.Edge
	): yfiles.algorithms.Node
	}

	declare export interface IEdgeData {
		type: yfiles.hierarchic.incremental.EdgeDataType,
		associatedNode: yfiles.algorithms.Node,
		associatedEdge: yfiles.algorithms.Edge,
		spc: yfiles.layout.PortConstraint,
		sourceCandidates: yfiles.algorithms.ICollection,
		tpc: yfiles.layout.PortConstraint,
		targetCandidates: yfiles.algorithms.ICollection,
		sourceGroup: Object,
		targetGroup: Object,
		group: Object,
		reversed: boolean,
		upperSameLayerEdge: boolean,
		edgeLayoutDescriptor: yfiles.hierarchic.incremental.EdgeLayoutDescriptor,
		fallbackUpperSameLayerEdge: boolean
	}

	declare export interface IDrawingDistanceCalculator {
		initialize(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		getMinDistance(
		graph: yfiles.layout.LayoutGraph, layer: yfiles.hierarchic.incremental.ILayer, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, left: yfiles.algorithms.Node, right: yfiles.algorithms.Node
	): number,
		dispose(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface IEdgeReverser {
		normalizeEdges(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		reverse(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, edge: yfiles.algorithms.Edge
	): void,
		restoreEdgeDirections(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface IIncrementalHintsFactory {
		createLayerIncrementallyHint(forNodeId: Object): Object,
		createSequenceIncrementallyHint(forItemId: Object): Object,
		createIncrementalGroupHint(forItemId: Object): Object,
		createUseExactCoordinatesHint(forNodeId: Object): Object,
		createUseExactLayerCoordinatesHint(forNodeId: Object): Object,
		createUseExactSequenceCoordinatesHint(forNodeId: Object): Object
	}

	declare export interface EdgeLayoutDescriptor {
		minimumFirstSegmentLength: number,
		minimumLastSegmentLength: number,
		minimumLength: number,
		minimumDistance: number,
		minimumSlope: number,
		sourcePortOptimizationEnabled: boolean,
		targetPortOptimizationEnabled: boolean,
		orthogonallyRouted: boolean,
		routingStyle: yfiles.hierarchic.incremental.RoutingStyle,
		minOctilinearSegmentLength: number
	}

	declare export interface DefaultDrawingDistanceCalculator {
		initialize(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		dispose(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		useAdaptiveMinEdgeDistance: boolean,
		compaction: boolean,
		getMinDistance(
		graph: yfiles.layout.LayoutGraph, layer: yfiles.hierarchic.incremental.ILayer, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, left: yfiles.algorithms.Node, right: yfiles.algorithms.Node
	): number,
		node2NodeDistance: number,
		node2EdgeDistance: number,
		edge2EdgeDistance: number,
		optimizeSwimLaneDistances: boolean
	}

	declare export interface ConstraintIncrementalLayerer {
		allowSameLayerEdges: boolean,
		assignLayers(
		g: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void,
		checkConstraints(): void
	}

	declare export interface DefaultLayeredComponentsMerger {
		policy: yfiles.hierarchic.incremental.MergingPolicy,
		merge(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, srcLayers: yfiles.hierarchic.incremental.ILayers, targetLayers: yfiles.hierarchic.incremental.ILayers
	): void
	}

	declare export interface DefaultLayerSequencer {
		transpositionEnabled: boolean,
		groupTranspositionEnabled: boolean,
		weightHeuristic: yfiles.hierarchic.WeightHeuristic,
		maximalDuration: number,
		randomizationRounds: number,
		sequenceNodeLayers(
		graph: yfiles.layout.LayoutGraph, glayers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void
	}

	declare export interface DefaultPortAllocator {
		assignPorts(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		getPortBorderGap(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, node: yfiles.algorithms.Node, sideIndex: number, sideLength: number, edgeCount: number
	): number,
		getPortDistanceDelta(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, node: yfiles.algorithms.Node, sideIndex: number, sideLength: number, edgeCount: number, portBorderGap: number
	): number,
		getPortBorderGapRatio(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, node: yfiles.algorithms.Node, sideIndex: number, sideLength: number, edgeCount: number
	): number,
		defaultPortBorderGapRatio: number
	}

	declare export interface ILayeredComponentsMerger {
		merge(
		graph: yfiles.layout.LayoutGraph, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, srcLayers: yfiles.hierarchic.incremental.ILayers, targetLayers: yfiles.hierarchic.incremental.ILayers
	): void
	}

	declare export interface IntValueHolderAdapter {
		get(dataHolder: Object): Object,
		getBool(dataHolder: Object): boolean,
		getDouble(dataHolder: Object): number,
		getInt(dataHolder: Object): number
	}

	declare export interface IIntValueHolder {
		value: number,
		providesValue(): boolean
	}

	declare export interface INodeData {
		groupNode: yfiles.algorithms.Node,
		getNormalizedBorderLine(side: number): yfiles.algorithms.BorderLine,
		createBorderLine(side: number, nl: yfiles.layout.INodeLayout): yfiles.algorithms.BorderLine,
		firstSameLayerEdgeCell: yfiles.algorithms.ListCell,
		sameLayerEdgeCount(): number,
		type: yfiles.hierarchic.incremental.NodeDataType,
		groupId: Object,
		associatedNode: yfiles.algorithms.Node,
		associatedEdge: yfiles.algorithms.Edge,
		layer: number,
		position: number,
		parentGroupNode: yfiles.algorithms.Node,
		groupLayers: yfiles.hierarchic.incremental.ILayers,
		incrementalHint: yfiles.hierarchic.incremental.HierarchicLayouter.IncrementalHint,
		nodeLayoutDescriptor: yfiles.hierarchic.incremental.NodeLayoutDescriptor,
		swimLaneDescriptor: yfiles.hierarchic.incremental.SwimLaneDescriptor
	}

	declare export interface INodePlacer {
		assignLayerCoordinates(
		graph: yfiles.layout.LayoutGraph, layoutDataProvider: yfiles.hierarchic.incremental.ILayoutDataProvider, layers: yfiles.hierarchic.incremental.ILayers
	): void,
		assignSequenceCoordinates(
		graph: yfiles.layout.LayoutGraph, layoutDataProvider: yfiles.hierarchic.incremental.ILayoutDataProvider, layers: yfiles.hierarchic.incremental.ILayers, drawingDistanceCalculator: yfiles.hierarchic.incremental.IDrawingDistanceCalculator
	): void
	}

	declare export interface IPortConstraintOptimizer {
		optimizeAfterLayering(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void,
		optimizeAfterSequencing(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void
	}

	declare export interface ISequencer {
		sequenceNodeLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void
	}

	declare export interface IPortAllocator {
		assignPorts(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider, itemFactory: yfiles.hierarchic.incremental.IItemFactory
	): void
	}

	declare export interface ILayers {
		size(): number,
		getLayer(i: number): yfiles.hierarchic.incremental.ILayer,
		insert(
		type: yfiles.hierarchic.incremental.LayerType, position: number
	): yfiles.hierarchic.incremental.ILayer,
		remove(index: number): void,
		createInstance(): yfiles.hierarchic.incremental.ILayers
	}

	declare export interface ILayerer {
		assignLayers(
		graph: yfiles.layout.LayoutGraph, layers: yfiles.hierarchic.incremental.ILayers, ldp: yfiles.hierarchic.incremental.ILayoutDataProvider
	): void
	}

	declare export interface ILayerConstraint {
		priority: number
	}

	declare export interface ILayoutDataProvider {
		getNodeData(node: yfiles.algorithms.Node): yfiles.hierarchic.incremental.INodeData,
		getEdgeData(edge: yfiles.algorithms.Edge): yfiles.hierarchic.incremental.IEdgeData
	}

			
}

declare module 'GroupingSupport' {
		declare export interface IVisitor {
		visit(node: yfiles.algorithms.Node, parentNode: yfiles.algorithms.Node): void
	}

			
}

declare module 'AbstractPortConstraintOptimizer' {
		declare export interface SameLayerData {
		addDummyNode(
		sameLayerDummy: yfiles.algorithms.Node, originalEdge: yfiles.algorithms.Edge
	): void,
		dummyNodes: yfiles.algorithms.NodeList,
		getOriginalEdge(sameLayerDummy: yfiles.algorithms.Node): yfiles.algorithms.Edge
	}

			
}

declare module 'HierarchicLayouter' {
		declare export interface IncrementalHint {
		type: yfiles.hierarchic.incremental.IncrementalHintType
	}

			
}

declare module 'input' {
		declare export interface PopulateItemContextMenuEventArgs<TModelItem> {
		item: TModelItem
	}

	declare export interface WaitInputMode {
		waiting: boolean,
		endWaiting(): void,
		onWaitingEnded(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		startWaiting(): void,
		onWaitingStarted(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		addWaitingStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeWaitingStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addWaitingEndedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeWaitingEndedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		getMultiplexingInputMode(): yfiles.input.MultiplexingInputMode,
		waitCursor: yfiles.canvas.ICanvasCursor,
		cancel(): void,
		stop(): boolean,
		install(context: yfiles.input.IInputModeContext): void,
		uninstall(context: yfiles.input.IInputModeContext): void
	}

	declare export interface TextEditorInputMode {
		addTextEditedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeTextEditedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addEditingCanceledListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeEditingCanceledListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addEditingStartedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeEditingStartedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		autoCommitOnFocusLost: boolean,
		autoSelectCanvasOnEditorClosed: boolean,
		autoStartEditing: boolean,
		createTextBox(): yfiles.canvas.TextBox,
		editing: boolean,
		onCancelEditing(): void,
		onEditingCanceled(args: yfiles.input.InputModeEventArgs): void,
		uninstallTextBox(): void,
		onBeginEditing(): void,
		getTextBoxBounds(): yfiles.geometry.RectD,
		ensureVisible(): void,
		onEditingStarted(args: yfiles.input.InputModeEventArgs): void,
		clear(): void,
		onStopEditing(): void,
		onTextEdited(args: yfiles.input.InputModeEventArgs): void,
		stop(): boolean,
		location: yfiles.geometry.IPoint,
		upVector: yfiles.geometry.IPoint,
		anchor: yfiles.geometry.IPoint,
		textBox: yfiles.canvas.TextBox,
		install(context: yfiles.input.IInputModeContext): void,
		installTextBox(): void,
		adjustPosition(): void,
		autoFlipTextBox: boolean,
		rotateTextBox: boolean,
		adjustSize(maxSize: yfiles.geometry.SizeD): void,
		calculateMaxTextBoxSize(): yfiles.geometry.SizeD,
		cancel(): void,
		uninstall(context: yfiles.input.IInputModeContext): void
	}

	declare export interface StateMachineInputMode {
		lastMouse2DEventArgs1: yfiles.input.Mouse2DEventArgs,
		lastEventArgs: yfiles.system.EventArgs,
		addRunHandlerListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeRunHandlerListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		startState: yfiles.support.State,
		lastMouse2DEventArgs: yfiles.input.Mouse2DEventArgs,
		lastTouch2DEventArgs: yfiles.input.Touch2DEventArgs,
		lastEventLocation: yfiles.geometry.PointD,
		lastPrimaryLocation: yfiles.geometry.PointD,
		primaryMoveEventRecognizer: yfiles.input.IEventRecognizer,
		canceledState: yfiles.support.State,
		stoppedState: yfiles.support.State,
		setPreferredCursorTransition(cursor: yfiles.canvas.ICanvasCursor): (t: yfiles.support.Transition) => void,
		resetPreferredCursorTransition: (t: yfiles.support.Transition) => void,
		requestMouseTransition: (t: yfiles.support.Transition) => void,
		requestKeyboardTransition: (t: yfiles.support.Transition) => void,
		releasePointerTransition: (t: yfiles.support.Transition) => void,
		releaseKeyboardTransition: (t: yfiles.support.Transition) => void,
		releaseTouchTransition: (t: yfiles.support.Transition) => void,
		captureInputWithMutex: boolean,
		createStateMachine(): yfiles.support.StateMachine,
		createStartState(machine: yfiles.support.StateMachine): yfiles.support.State,
		createStoppedState(machine: yfiles.support.StateMachine): yfiles.support.State,
		createCanceledState(machine: yfiles.support.StateMachine): yfiles.support.State,
		cancelEventRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		enabledEventRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		disabledEventRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		stopEventRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		canRequestMutexRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		mutexLostRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		mutexAcquiredRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		canvasEditableEnabledRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		canvasEditableDisabledRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		requestMutexTransition: (t: yfiles.support.Transition) => void,
		releaseMutexTransition: (t: yfiles.support.Transition) => void,
		createFeedbackPost(
		actionType: yfiles.input.InputFeedbackParameter.ActionType_Interface, tag: Object
	): (t: yfiles.support.Transition) => void,
		createStartTimerTransition(
		ellapseDuration: yfiles.system.TimeSpan, timerId: number
	): (t: yfiles.support.Transition) => void,
		createStopTimerTransition(timerId: number): (t: yfiles.support.Transition) => void,
		createTimerElapsedEventRecognizer(
		timerId: number
	): (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		isCancelEvent(source: Object, ea: yfiles.system.EventArgs): boolean,
		isStopEvent(source: Object, ea: yfiles.system.EventArgs): boolean,
		isEnabledEvent(source: Object, ea: yfiles.system.EventArgs): boolean,
		isDisabledEvent(source: Object, ea: yfiles.system.EventArgs): boolean,
		isMutexLostEvent(eventSource: Object, ea: yfiles.system.EventArgs): boolean,
		isMutexAcquiredEvent(eventSource: Object, ea: yfiles.system.EventArgs): boolean,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		onDisable(): void,
		onEnable(): void,
		onMutexObtained(): void,
		onMutexReleased(): void,
		run(source: Object, e: yfiles.system.EventArgs): void,
		onRun(source: Object, e: yfiles.system.EventArgs): void,
		stateMachine: yfiles.support.StateMachine,
		install(context: yfiles.input.IInputModeContext): void,
		resetMachine(): void,
		onMachineReset(): void,
		onCancelStateEntered(newState: yfiles.support.State, oldState: yfiles.support.State): void,
		onStopStateEntered(newState: yfiles.support.State, oldState: yfiles.support.State): void,
		stop(): boolean,
		cancel(): void,
		uninstall(context: yfiles.input.IInputModeContext): void,
		installListeners(): void,
		uninstallListeners(): void
	}

	declare export interface KeyEventRecognizer {
		isRecognized(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		hashCode(): number,
		equals(obj: Object): boolean
	}

	declare export interface KeyEvents {
		
	}

	declare export interface MainInputMode {
		addMultiSelectionStartedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMultiSelectionStartedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addMultiSelectionFinishedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMultiSelectionFinishedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		initialize(): void,
		contextMenuModePriority: number,
		mouseHoverModePriority: number,
		moveModePriority: number,
		waitModePriority: number,
		marqueeSelectionModePriority: number,
		clickModePriority: number,
		tapModePriority: number,
		handleModePriority: number,
		moveViewportModePriority: number,
		mouseHoverInputMode: yfiles.input.MouseHoverInputMode,
		onMouseHoverInputModeChanged(
		oldMouseHoverInputMode: yfiles.input.MouseHoverInputMode, newMouseHoverInputMode: yfiles.input.MouseHoverInputMode
	): void,
		onMouseHoverInputModeQueryToolTip(src: Object, args: yfiles.input.ToolTipQueryEventArgs): void,
		createMouseHoverInputMode(): yfiles.input.MouseHoverInputMode,
		handleInputMode: yfiles.input.HandleInputMode,
		onHandleInputModeChanged(
		oldHandleInputMode: yfiles.input.HandleInputMode, newHandleInputMode: yfiles.input.HandleInputMode
	): void,
		createHandleInputMode(): yfiles.input.HandleInputMode,
		clickInputMode: yfiles.input.ClickInputMode,
		onClickInputModeChanged(
		oldClickInputMode: yfiles.input.ClickInputMode, newClickInputMode: yfiles.input.ClickInputMode
	): void,
		createClickInputMode(): yfiles.input.ClickInputMode,
		tapInputMode: yfiles.input.TapInputMode,
		onTapInputModeChanged(
		oldTapInputMode: yfiles.input.TapInputMode, newTapInputMode: yfiles.input.TapInputMode
	): void,
		createTapInputMode(): yfiles.input.TapInputMode,
		moveInputMode: yfiles.input.MoveInputMode,
		onMoveInputModeChanged(
		oldMoveInputMode: yfiles.input.MoveInputMode, newMoveInputMode: yfiles.input.MoveInputMode
	): void,
		onMoveInputModeDragFinished(sender: Object, e: yfiles.system.EventArgs): void,
		createMoveInputMode(): yfiles.input.MoveInputMode,
		createMoveUnselectedInputMode(modifierRecognizer: yfiles.input.IEventRecognizer): yfiles.input.MoveInputMode,
		marqueeSelectionInputMode: yfiles.input.MarqueeSelectionInputMode,
		onMarqueeSelectionInputModeChanged(
		oldMarqueeSelectionInputMode: yfiles.input.MarqueeSelectionInputMode, newMarqueeSelectionInputMode: yfiles.input.MarqueeSelectionInputMode
	): void,
		createMarqueeSelectionInputMode(): yfiles.input.MarqueeSelectionInputMode,
		collectionModel: yfiles.model.ICollectionModel<yfiles.model.IModelItem>,
		onCollectionModelChanged(
		oldValue: yfiles.model.ICollectionModel<yfiles.model.IModelItem>, newValue: yfiles.model.ICollectionModel<yfiles.model.IModelItem>
	): void,
		contextMenuInputMode: yfiles.input.ContextMenuInputMode,
		inputModeController: yfiles.model.InputModeController<yfiles.model.IModelItem>,
		onContextMenuInputModeChanged(
		oldContextMenuInputMode: yfiles.input.ContextMenuInputMode, newContextMenuInputMode: yfiles.input.ContextMenuInputMode
	): void,
		createContextMenuInputMode(): yfiles.input.ContextMenuInputMode,
		createInputModeController(): yfiles.model.InputModeController<yfiles.model.IModelItem>,
		shouldShowHandles(item: yfiles.model.IModelItem): boolean,
		shouldBeMovable(item: yfiles.model.IModelItem): boolean,
		moveViewportInputMode: yfiles.input.MoveViewportInputMode,
		onMoveViewportInputModeChanged(
		oldMoveViewportInputMode: yfiles.input.MoveViewportInputMode, newMoveViewportInputMode: yfiles.input.MoveViewportInputMode
	): void,
		createMoveViewportInputMode(): yfiles.input.MoveViewportInputMode,
		waitInputMode: yfiles.input.WaitInputMode,
		onWaitInputModeChanged(
		oldWaitInputMode: yfiles.input.WaitInputMode, newWaitInputMode: yfiles.input.WaitInputMode
	): void,
		createWaitInputMode(): yfiles.input.WaitInputMode,
		waiting: boolean,
		inputModeCanvasGroup: yfiles.canvas.ICanvasObjectGroup,
		getCanvasGroupProvider<T>(): yfiles.model.ICanvasGroupProvider<T>,
		onInputModeCanvasGroupChanged(
		oldGroup: yfiles.canvas.ICanvasObjectGroup, newGroup: yfiles.canvas.ICanvasObjectGroup
	): void,
		selectionModel: yfiles.model.ISelectionModel<yfiles.model.IModelItem>,
		onSelectionModelChanged(
		oldModel: yfiles.model.ISelectionModel<yfiles.model.IModelItem>, newModel: yfiles.model.ISelectionModel<yfiles.model.IModelItem>
	): void,
		keyboardInputMode: yfiles.input.KeyboardInputMode,
		keyboardModePriority: number,
		install(context: yfiles.input.IInputModeContext): void,
		uninstall(context: yfiles.input.IInputModeContext): void,
		onClickInputModeClicked(sender: Object, e: yfiles.input.ClickEventArgs): void,
		onClickInputModeDoubleClicked(sender: Object, e: yfiles.input.ClickEventArgs): void,
		onTapInputModeTapped(sender: Object, e: yfiles.input.TapEventArgs): void,
		onTapInputModeDoubleTapped(sender: Object, e: yfiles.input.TapEventArgs): void,
		onMarqueeSelectionInputModeMarqueeSelected(sender: Object, e: yfiles.system.EventArgs): void,
		marqueeSelectElements(marqueeRectangle: yfiles.geometry.RectD): void,
		setSelected(item: yfiles.model.IModelItem, selected: boolean): void,
		onContextMenuInputModePopulateContextMenu(src: Object, args: yfiles.input.PopulateContextMenuEventArgs): void,
		onKeyboardInputModeChanged(
		oldKeyboardInputMode: yfiles.input.KeyboardInputMode, newKeyboardInputMode: yfiles.input.KeyboardInputMode
	): void,
		createKeyboardInputMode(): yfiles.input.KeyboardInputMode,
		clearSelection(): void,
		marqueeSelect<T>(
		marqueeRectangle: yfiles.geometry.RectD, items: yfiles.model.ICollectionModel<T>
	): void,
		shouldBeMarqueeSelectable(item: yfiles.model.IModelItem): boolean,
		marqueeSelectFiltered<T>(
		marqueeRectangle: yfiles.geometry.RectD, items: yfiles.model.ICollectionModel<T>, predicate: (obj: T) => boolean
	): void,
		childInputModeContextLookup(type: yfiles.lang.Class): Object,
		snapContext: yfiles.input.SnapContext,
		onSnapContextChanged(
		oldSnapContext: yfiles.input.SnapContext, newSnapContext: yfiles.input.SnapContext
	): void,
		onMultiSelectionStarted(args: yfiles.system.EventArgs): void,
		onMultiSelectionFinished(args: yfiles.system.EventArgs): void
	}

	declare export interface EventRecognizers {
		
	}

	declare export interface RectangleHandle {
		location: yfiles.geometry.IPoint,
		type: yfiles.input.HandleType,
		cursor: yfiles.canvas.ICanvasCursor,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		x: number,
		y: number,
		moveBy(delta: yfiles.geometry.PointD): boolean,
		getPoint(): yfiles.geometry.IMutablePoint,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		setWithXAndY(x: number, y: number): boolean
	}

	declare export interface ReshapeHandleProvider {
		minimumSize: yfiles.geometry.ISize,
		minimumEnclosedArea: yfiles.geometry.IRectangle,
		maximumSize: yfiles.geometry.ISize,
		handlePositions: yfiles.input.HandlePositions,
		getAvailableHandles(inputModeContext: yfiles.input.IInputModeContext): yfiles.input.HandlePositions,
		getHandle(
		inputModeContext: yfiles.input.IInputModeContext, position: yfiles.input.HandlePositions
	): yfiles.input.IHandle
	}

	declare export interface SnapContext {
		addCollectSnapResultsListener(
		value: (sender: Object, e: yfiles.input.CollectSnapResultsEventArgs) => void
	): void,
		removeCollectSnapResultsListener(
		value: (sender: Object, e: yfiles.input.CollectSnapResultsEventArgs) => void
	): void,
		addCleanedUpListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeCleanedUpListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addInitializedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeInitializedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addInitializingListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeInitializingListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		visualizeSnapResults: boolean,
		isInitializing: boolean,
		cleanUp(): void,
		initializeDrag(
		context: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		currentInputModeContext: yfiles.input.IInputModeContext,
		onCleanUp(eventArgs: yfiles.system.EventArgs): void,
		createSnapResultsModelManager(
		control: yfiles.canvas.CanvasControl
	): yfiles.model.CollectionModelManager<yfiles.input.SnapResult>,
		createSnapResultModelItemInstaller(): yfiles.model.IModelItemInstaller<yfiles.input.SnapResult>,
		dragInitialized(): void,
		onInitialized(eventArgs: yfiles.system.EventArgs): void,
		onInitializing(eventArgs: yfiles.system.EventArgs): void,
		disableSnapping(): void,
		handleMove(newLocation: yfiles.geometry.PointD): yfiles.input.SnapState,
		snapResults: yfiles.model.ICollectionModel<yfiles.input.SnapResult>,
		processSnapResults(
		snapResults: yfiles.collections.List<yfiles.input.SnapResult>, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): yfiles.input.SnapState,
		onCollectSnapResults(args: yfiles.input.CollectSnapResultsEventArgs): void,
		dragFinished(newLocation: yfiles.geometry.PointD): yfiles.input.SnapState,
		isInitialized: boolean,
		snapDistance: number,
		cancelDrag(): void,
		originalLocation: yfiles.geometry.PointD,
		enabled: boolean,
		wrapContext(context: yfiles.input.IInputModeContext): yfiles.input.IInputModeContext,
		dragged(
		mouseLocation: yfiles.geometry.PointD, finalSnapState: yfiles.input.SnapState
	): void
	}

	declare export interface QueryItemToolTipEventArgs<TModelItem> {
		item: TModelItem
	}

	declare export interface ReshapeHandlerHandle {
		reshapeHandler: yfiles.input.IReshapeHandler,
		minimumSize: yfiles.geometry.ISize,
		minimumEnclosedArea: yfiles.geometry.IRectangle,
		maximumSize: yfiles.geometry.ISize,
		location: yfiles.geometry.IPoint,
		type: yfiles.input.HandleType,
		cursor: yfiles.canvas.ICanvasCursor,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void
	}

	declare export interface ReshapeableHandles {
		rectangle: yfiles.geometry.IRectangle,
		reshapeable: yfiles.geometry.IReshapeable,
		getHandle(
		inputModeContext: yfiles.input.IInputModeContext, position: yfiles.input.HandlePositions
	): yfiles.input.IHandle
	}

	declare export interface RectangleHandles {
		rectangle: yfiles.geometry.IMutableRectangle,
		handlePositions: yfiles.input.HandlePositions,
		getHandles(
		inputModeContext: yfiles.input.IInputModeContext
	): yfiles.collections.ICollection<yfiles.input.IHandle>
	}

	declare export interface TapInputMode {
		addTappedListener(value: (sender: Object, e: yfiles.input.TapEventArgs) => void): void,
		removeTappedListener(value: (sender: Object, e: yfiles.input.TapEventArgs) => void): void,
		addDoubleTappedListener(value: (sender: Object, e: yfiles.input.TapEventArgs) => void): void,
		removeDoubleTappedListener(value: (sender: Object, e: yfiles.input.TapEventArgs) => void): void,
		tapHandlingMode: yfiles.input.TapHandlingMode,
		validTapHitTestable: yfiles.drawing.IHitTestable,
		doubleTap: boolean,
		requestMutextOnTap: boolean,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		onEnabled(): void,
		installListeners(): void,
		uninstallListeners(): void,
		swallowFocusTap: boolean,
		createTapRecognizer(): yfiles.input.IEventRecognizer,
		isValidTap(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		createReleaseRecognizer(): yfiles.input.IEventRecognizer,
		isValidRelease(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		createPressRecognizer(): yfiles.input.IEventRecognizer,
		isValidPress(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		isInvalidPress(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		begin(t: yfiles.support.Transition): void,
		getTapPoint(): yfiles.geometry.PointD,
		end(t: yfiles.support.Transition): void,
		onTapped(eventArgs: yfiles.input.TapEventArgs): void,
		onDoubleTapped(eventArgs: yfiles.input.TapEventArgs): void,
		preventNextDoubleTap(): void,
		queryAndResetPreventNextDoubleTap(): boolean
	}

	declare export interface SnapState {
		location: yfiles.geometry.PointD,
		snapType: yfiles.input.SnapTypes,
		toString(): string,
		snapY(newY: number): void,
		snapX(newX: number): void,
		snapTo(newLocation: yfiles.geometry.PointD): void
	}

	declare export interface TapEventArgs {
		location: yfiles.geometry.PointD,
		context: yfiles.input.IInputModeContext,
		handled: boolean
	}

	declare export interface ConstrainedPositionHandler {
		setPosition(location: yfiles.geometry.PointD): void
	}

	declare export interface SnapResult {
		weight: number,
		tag: Object,
		getVisualCreator(): yfiles.drawing.IVisualCreator,
		compareTo(other: yfiles.input.SnapResult): number,
		snap(
		unSappedCoordinates: yfiles.geometry.PointD, currentSnapState: yfiles.input.SnapState
	): void,
		isSnapped(
		unsnappedCoordinates: yfiles.geometry.PointD, finalSnapState: yfiles.input.SnapState
	): boolean
	}

	declare export interface CompoundKeyEventArgs {
		eventType: yfiles.input.CompoundKeyEventType,
		handled: boolean,
		keyCode: yfiles.input.Key,
		keyValue: string,
		modifiers: yfiles.input.ModifierKeys
	}

	declare export interface KeyEventArgs {
		key: yfiles.input.Key,
		modifiers: yfiles.input.ModifierKeys,
		alt: boolean,
		shift: boolean,
		control: boolean,
		meta: boolean
	}

	declare export interface MouseEventArgs {
		button: yfiles.system.MouseButtons,
		x: number,
		y: number,
		delta: number,
		handled: boolean,
		getPosition(target: Element): yfiles.geometry.PointD,
		originalEvent: MouseEvent,
		modifiers: yfiles.input.ModifierKeys
	}

	declare export interface ToolTipQueryEventArgs {
		queryLocation: yfiles.geometry.PointD,
		toolTip: Object,
		handled: boolean
	}

	declare export interface MouseHoverInputMode {
		validHoverLocationHitTestable: yfiles.drawing.IHitTestable,
		toolTip: yfiles.canvas.ToolTip,
		show(location: yfiles.geometry.PointD): void,
		hide(): void,
		showing: boolean,
		onShow(location: yfiles.geometry.PointD): void,
		adjustTooltipPosition(originalPosition: yfiles.geometry.PointD): yfiles.geometry.PointD,
		toolTipLocationOffset: yfiles.geometry.PointD,
		getToolTipLocation(location: yfiles.geometry.PointD): yfiles.geometry.PointD,
		hoverTime: yfiles.system.TimeSpan,
		duration: yfiles.system.TimeSpan,
		mouseHoverSize: yfiles.geometry.SizeD,
		closeOnClick: boolean,
		createToolTip(): yfiles.canvas.ToolTip,
		getToolTipContent(location: yfiles.geometry.PointD): Object,
		onQueryToolTip(args: yfiles.input.ToolTipQueryEventArgs): void,
		createHoverInputModeContext(): yfiles.input.IInputModeContext,
		addQueryToolTipListener(value: (sender: Object, e: yfiles.input.ToolTipQueryEventArgs) => void): void,
		removeQueryToolTipListener(value: (sender: Object, e: yfiles.input.ToolTipQueryEventArgs) => void): void,
		install(context: yfiles.input.IInputModeContext): void,
		onDisabled(): void,
		onHide(): void,
		uninstall(context: yfiles.input.IInputModeContext): void
	}

	declare export interface ReshapeableHandle {
		position: yfiles.input.HandlePositions,
		location1: yfiles.geometry.IPoint,
		rect: yfiles.geometry.IRectangle,
		reshapeable: yfiles.geometry.IReshapeable,
		minimumSize: yfiles.geometry.ISize,
		minimumEnclosedArea: yfiles.geometry.IRectangle,
		maximumSize: yfiles.geometry.ISize,
		location: yfiles.geometry.IPoint,
		type: yfiles.input.HandleType,
		cursor: yfiles.canvas.ICanvasCursor,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		x: number,
		y: number,
		moveBy(delta: yfiles.geometry.PointD): boolean,
		setWithXAndY(x: number, y: number): boolean,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void
	}

	declare export interface ConstrainedReshapeHandler {
		delegateHandler: yfiles.input.IReshapeHandler,
		bounds: yfiles.geometry.IRectangle,
		initializeReshape(inputModeContext: yfiles.input.IInputModeContext): void,
		handleReshape(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): boolean,
		constrainNewBounds(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): yfiles.geometry.RectD,
		cancelReshape(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD
	): void,
		onReshaped(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): void,
		onInitialized(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD
	): void,
		onCanceled(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD
	): void,
		onFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): void,
		reshapeFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): void
	}

	declare export interface Touch2DEvents {
		
	}

	declare export interface ConstrainedDragHandler<TDelegate> {
		delegateHandler: TDelegate,
		location: yfiles.geometry.IPoint,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		constrainNewLocation(
		context: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): yfiles.geometry.PointD,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		onMoved(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		onInitialized(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		onCanceled(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		onFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void
	}

	declare export interface MarqueeSelectionInputMode {
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		cancel(): void,
		getSelectionRectangle(): yfiles.geometry.RectD,
		install(c: yfiles.input.IInputModeContext): void,
		template: yfiles.drawing.DataTemplate,
		canvasGroupProvider: yfiles.model.ICanvasGroupProvider<yfiles.input.IInputMode>,
		uninstall(context: yfiles.input.IInputModeContext): void,
		prepare(t: yfiles.support.Transition): void,
		begin(t: yfiles.support.Transition): void,
		cancelRecognizer: yfiles.input.IEventRecognizer,
		marqueeCursor: yfiles.canvas.ICanvasCursor,
		pressedRecognizer: yfiles.input.IEventRecognizer,
		draggedRecognizer: yfiles.input.IEventRecognizer,
		releasedRecognizer: yfiles.input.IEventRecognizer,
		pressedRecognizerTouch: yfiles.input.IEventRecognizer,
		draggedRecognizerTouch: yfiles.input.IEventRecognizer,
		releasedRecognizerTouch: yfiles.input.IEventRecognizer,
		drag(t: yfiles.support.Transition): void,
		onDragStarting(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragStarted(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragging(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragged(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinished(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinishing(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceled(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceling(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		addDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addMarqueeSelectedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMarqueeSelectedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		end(t: yfiles.support.Transition): void,
		lastModifierState: yfiles.input.ModifierKeys,
		onMarqueeSelected(): void
	}

	declare export interface SystemInformation {
		
	}

	declare export interface KeyboardInputMode {
		install(ctx: yfiles.input.IInputModeContext): void,
		uninstall(context: yfiles.input.IInputModeContext): void,
		addHandler(
		recognizer: yfiles.input.IEventRecognizer, handler: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		removeHandler(
		recognizer: yfiles.input.IEventRecognizer, handler: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		addHandlerForGesture(
		inputGesture: yfiles.system.InputGesture, handler: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		addCommand(
		command: yfiles.system.ICommand, executedHandler: (sender: Object, e: yfiles.system.ExecutedRoutedEventArgs) => void, canExecuteHandler: (sender: Object, e: yfiles.system.CanExecuteRoutedEventArgs) => void
	): void,
		removeCommand(command: yfiles.system.ICommand): void,
		removeWrappedCommand(
		command: yfiles.system.ICommand, executedHandler: (sender: Object, e: yfiles.system.ExecutedRoutedEventArgs) => void, canExecuteHandler: (sender: Object, e: yfiles.system.CanExecuteRoutedEventArgs) => void
	): void,
		addHandlerForGestureAndCommand(
		inputGesture: yfiles.system.InputGesture, command: yfiles.system.ICommand
	): void,
		removeHandlerForGestureAndCommand(
		inputGesture: yfiles.system.InputGesture, command: yfiles.system.ICommand
	): void,
		removeHandlerForGesture(
		inputGesture: yfiles.system.InputGesture, handler: (sender: Object, e: yfiles.system.EventArgs) => void
	): void,
		getRegisteredRecognizers(): yfiles.collections.IEnumerator<yfiles.input.IEventRecognizer>,
		clearHandlersWithRecognizer(recognizer: yfiles.input.IEventRecognizer): void,
		clearHandlers(): void,
		getHandlers(
		recognizer: yfiles.input.IEventRecognizer
	): yfiles.collections.IEnumerator<Object>,
		onDisabled(): void,
		onEnabled(): void,
		handleEvent(sender: Object, args: yfiles.input.CompoundKeyEventArgs): void
	}

	declare export interface Touch2DDevice {
		originalDevice: yfiles.system.TouchDevice,
		deviceIndex: number,
		isPrimaryDevice: boolean,
		lastViewCoordinate: yfiles.geometry.PointD,
		lastEventTime: Date,
		isDown: boolean
	}

	declare export interface Mouse2DEventArgs {
		eventType: yfiles.input.Mouse2DEventTypes,
		location: yfiles.geometry.PointD,
		clickCount: number,
		wheelDelta: number,
		changedModifiers: yfiles.input.ModifierKeys,
		changedButtons: yfiles.system.MouseButtons,
		modifierState: yfiles.input.ModifierKeys,
		buttonPressedState: yfiles.system.MouseButtons,
		toString(): string
	}

	declare export interface Mouse2DEvents {
		
	}

	declare export interface IEventRecognizer {
		isRecognized(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		and(other: yfiles.input.IEventRecognizer): yfiles.input.IEventRecognizer,
		or(other: yfiles.input.IEventRecognizer): yfiles.input.IEventRecognizer,
		andWithCallback(
		other: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean
	): yfiles.input.IEventRecognizer,
		orWithCallback(
		other: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean
	): yfiles.input.IEventRecognizer,
		inverse(): yfiles.input.IEventRecognizer
	}

	declare export interface EventRecognizerExtensions {
		
	}

	declare export interface MoveViewportInputMode {
		primaryDownRecognizer: yfiles.input.IEventRecognizer,
		primaryMoveRecognizer: yfiles.input.IEventRecognizer,
		primaryUpRecognizer: yfiles.input.IEventRecognizer,
		secondaryDownRecognizer: yfiles.input.IEventRecognizer,
		secondaryMoveRecognizer: yfiles.input.IEventRecognizer,
		secondaryUpRecognizer: yfiles.input.IEventRecognizer,
		inertiaFactor: number,
		inertiaThreshold: number,
		inertiaDamping: number,
		inertia: yfiles.input.InertiaModes,
		allowPinchZoom: boolean,
		dragCursor: yfiles.canvas.ICanvasCursor,
		pressedRecognizer: yfiles.input.IEventRecognizer,
		draggedRecognizer: yfiles.input.IEventRecognizer,
		releasedRecognizer: yfiles.input.IEventRecognizer,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		run(source: Object, e: yfiles.system.EventArgs): void,
		cancel(): void,
		prepare(t: yfiles.support.Transition): void,
		begin(t: yfiles.support.Transition): void,
		drag(t: yfiles.support.Transition): void,
		onDragged(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragging(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		addDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		onDragStarting(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragStarted(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinished(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinishing(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceled(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceling(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		end(t: yfiles.support.Transition): void,
		install(context: yfiles.input.IInputModeContext): void
	}

	declare export interface MultiplexingInputMode {
		createChildConcurrencyController(): yfiles.input.ConcurrencyController,
		childController: yfiles.input.ConcurrencyController,
		getMutexOwner(): yfiles.input.IConcurrentInputMode,
		add(inputMode: yfiles.input.IInputMode): void,
		addConcurrent(inputMode: yfiles.input.IConcurrentInputMode): void,
		addWithPriority(inputMode: yfiles.input.IInputMode, priority: number): void,
		addConcurrentWithPriority(inputMode: yfiles.input.IConcurrentInputMode, priority: number): void,
		remove(mode: yfiles.input.IInputMode): void,
		getSortedModes(): yfiles.collections.IList<yfiles.input.IInputMode>,
		adjustCursor(): void,
		defaultCursor: yfiles.canvas.ICanvasCursor,
		install(context: yfiles.input.IInputModeContext): void,
		createChildInputModeContext(): yfiles.input.IInputModeContext,
		childInputModeContextLookup(type: yfiles.lang.Class): Object,
		stop(): boolean,
		cancel(): void,
		onDisabled(): void,
		onEnabled(): void,
		uninstall(context: yfiles.input.IInputModeContext): void
	}

	declare export interface MoveInputMode {
		disableSnappingRecognizer: yfiles.input.IEventRecognizer,
		enableSnappingRecognizer: yfiles.input.IEventRecognizer,
		pressedRecognizer: yfiles.input.IEventRecognizer,
		hoverRecognizer: yfiles.input.IEventRecognizer,
		draggedRecognizer: yfiles.input.IEventRecognizer,
		cancelRecognizer: yfiles.input.IEventRecognizer,
		releasedRecognizer: yfiles.input.IEventRecognizer,
		pressedRecognizerTouch: yfiles.input.IEventRecognizer,
		draggedRecognizerTouch: yfiles.input.IEventRecognizer,
		releasedRecognizerTouch: yfiles.input.IEventRecognizer,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		cancelDrag(t: yfiles.support.Transition): void,
		prepare(t: yfiles.support.Transition): void,
		hitTestable: yfiles.drawing.IHitTestable,
		movable: yfiles.geometry.IMovable,
		positionHandler: yfiles.input.IPositionHandler,
		isHovering(sender: Object, args: yfiles.system.EventArgs): boolean,
		isValidStartLocation(location: yfiles.geometry.PointD): boolean,
		isValidTouchDown(sender: Object, args: yfiles.system.EventArgs): boolean,
		moveCursor: yfiles.canvas.ICanvasCursor,
		arm(t: yfiles.support.Transition): void,
		disarm(t: yfiles.support.Transition): void,
		snapContext: yfiles.input.SnapContext,
		beginDrag(t: yfiles.support.Transition): void,
		isDragging: boolean,
		createPositionHandlerInputModeContext(): yfiles.input.IInputModeContext,
		initialLocation: yfiles.geometry.PointD,
		onDrag(t: yfiles.support.Transition): void,
		endDrag(t: yfiles.support.Transition): void,
		affectedItems: yfiles.collections.IEnumerable<yfiles.model.IModelItem>,
		addDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		onDragStarting(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragStarted(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragging(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragged(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinished(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinishing(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceled(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceling(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		doStartDrag(startLocation: yfiles.geometry.PointD): void
	}

	declare export interface Touch2DEventArgs {
		eventType: yfiles.input.Touch2DEventTypes,
		location: yfiles.geometry.PointD,
		device: yfiles.input.Touch2DDevice,
		tapCount: number,
		toString(): string
	}

	declare export interface ConstrainedHandle {
		type: yfiles.input.HandleType,
		cursor: yfiles.canvas.ICanvasCursor
	}

	declare export interface OverviewInputMode {
		autoInvalidate: boolean,
		multiplexingInputMode: yfiles.input.MultiplexingInputMode,
		initialize(): void,
		handleInputMode: yfiles.input.HandleInputMode,
		createHandleInputMode(): yfiles.input.HandleInputMode,
		moveInputMode: yfiles.input.MoveInputMode,
		createMoveInputMode(): yfiles.input.MoveInputMode,
		clickInputMode: yfiles.input.ClickInputMode,
		createClickInputMode(): yfiles.input.ClickInputMode,
		tapInputMode: yfiles.input.TapInputMode,
		createTapInputMode(): yfiles.input.TapInputMode,
		keyboardInputMode: yfiles.input.KeyboardInputMode,
		createKeyboardInputMode(): yfiles.input.KeyboardInputMode,
		availableCommands: yfiles.collections.ICollection<yfiles.system.ICommand>,
		shouldInstallCommand(command: yfiles.system.ICommand): boolean,
		clientCanvas: yfiles.canvas.CanvasControl,
		install(context: yfiles.input.IInputModeContext): void,
		stop(): boolean,
		cancel(): void,
		template: yfiles.drawing.DataTemplate,
		autoMouseWheelZoom: boolean,
		uninstall(context: yfiles.input.IInputModeContext): void,
		margins: yfiles.geometry.InsetsD,
		updateVisibleArea(): void
	}

	declare export interface PointHandle {
		location: yfiles.geometry.IPoint,
		cursor: yfiles.canvas.ICanvasCursor,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		point: yfiles.geometry.IMutablePoint,
		set(newLocation: yfiles.geometry.PointD): boolean,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		type: yfiles.input.HandleType
	}

	declare export interface OrthogonalEdgeHelper {
		getSegmentOrientation(
		inputModeContext: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, segmentIndex: number
	): yfiles.input.SegmentOrientation,
		canBeMoved(
		inputModeContext: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, sourceEnd: boolean
	): boolean,
		isOrthogonallyEdited(
		inputModeContext: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): boolean,
		cleanUpEdge(
		inputModeContext: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge
	): void,
		canRemoveBend(
		context: yfiles.input.IInputModeContext, bendToRemove: yfiles.graph.IBend
	): boolean
	}

	declare export interface OrthogonalEdgeEditingContext {
		addCleanedUpListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeCleanedUpListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addInitializingListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeInitializingListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addInitializedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeInitializedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		isInitializing: boolean,
		orthogonalEdgeEditing: boolean,
		movePorts: boolean,
		cleanUp(): void,
		initializeDrag(context: yfiles.input.IInputModeContext): void,
		currentInputModeContext: yfiles.input.IInputModeContext,
		onCleanedUp(eventArgs: yfiles.system.EventArgs): void,
		dragFinished(): void,
		cleanupEdgePaths(graph: yfiles.graph.IGraph): void,
		cleanUpEdgePath(graph: yfiles.graph.IGraph, modifiedEdge: yfiles.graph.IEdge): void,
		isInitialized: boolean,
		cancelDrag(): void,
		removeAddedBends(
		graph: yfiles.graph.IGraph, addedBends: yfiles.collections.IEnumerable<yfiles.graph.IBend>
	): void,
		dragInitialized(): void,
		prepareEdgePaths(graph: yfiles.graph.IGraph): void,
		prepareOrthogonalEdge(
		graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, orientations: yfiles.input.SegmentOrientation[], infos: yfiles.input.MovementInfo[]
	): void,
		registerAddedBend(bend: yfiles.graph.IBend): void,
		addedBends: yfiles.collections.IEnumerable<yfiles.graph.IBend>,
		getMovementInfos(edge: yfiles.graph.IEdge): yfiles.input.MovementInfo[],
		onInitialized(eventArgs: yfiles.system.EventArgs): void,
		onInitializing(eventArgs: yfiles.system.EventArgs): void,
		isOrthogonallyEditedEdge(
		inputModeContext: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): boolean,
		canBeMoved(edge: yfiles.graph.IEdge, sourceSide: boolean): boolean,
		getOrthogonalEdgeHelper(edge: yfiles.graph.IEdge): yfiles.input.IOrthogonalEdgeHelper,
		getSegmentOrientation(
		edge: yfiles.graph.IEdge, segmentIndex: number
	): yfiles.input.SegmentOrientation,
		createImplicitlyMovedBendInfo(
		implicitlyMovedBend: yfiles.graph.IBend, horizontalAdjacentInfo: yfiles.input.MovementInfo, verticalAdjacentInfo: yfiles.input.MovementInfo
	): yfiles.input.BendMovementInfo,
		addExplicitlyMovedBend(movementInfo: yfiles.input.BendMovementInfo): void,
		addMovedPort(movementInfo: yfiles.input.PortMovementInfo): void,
		addImplicitlyMovedBend(movementInfo: yfiles.input.BendMovementInfo): yfiles.input.BendMovementInfo,
		addMovedEdgeEnd(movementInfo: yfiles.input.EdgeEndMovementInfo): void,
		transformedPortOwners: yfiles.collections.IEnumerable<yfiles.graph.IPortOwner>,
		lockedPortEdges: yfiles.collections.IEnumerable<yfiles.graph.IEdge>,
		addTransformedPortOwner(portOwner: yfiles.graph.IPortOwner): void,
		lockPortMovement(edge: yfiles.graph.IEdge): void
	}

	declare export interface PortLocationModelParameterHandle {
		location: yfiles.geometry.IPoint,
		port: yfiles.graph.IPort,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		getGraph(inputModeContext: yfiles.input.IInputModeContext): yfiles.graph.IGraph,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		setParameter(
		graph: yfiles.graph.IGraph, port: yfiles.graph.IPort, newParameter: yfiles.graph.IPortLocationModelParameter
	): void,
		getNewParameter(
		port: yfiles.graph.IPort, model: yfiles.graph.IPortLocationModel, newLocation: yfiles.geometry.PointD
	): yfiles.graph.IPortLocationModelParameter,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		type: yfiles.input.HandleType,
		cursor: yfiles.canvas.ICanvasCursor,
		getMoveType(port: yfiles.graph.IPort): yfiles.input.MoveTypes,
		collectSnapResults(source: Object, args: yfiles.input.CollectSnapResultsEventArgs): void
	}

	declare export interface MoveLabelInputMode {
		initialize(): void,
		createLabelHitTestable(): yfiles.drawing.IHitTestable,
		isValidLabelHit(
		location: yfiles.geometry.PointD, context: yfiles.canvas.ICanvasContext
	): boolean,
		getHitLabel(
		location: yfiles.geometry.PointD, context: yfiles.canvas.ICanvasContext
	): yfiles.graph.ILabel,
		shouldBeMovable(label: yfiles.graph.ILabel, context: yfiles.canvas.ICanvasContext): boolean,
		createLabelPositionHandler(
		graph: yfiles.graph.IGraph, label: yfiles.graph.ILabel
	): yfiles.input.IPositionHandler,
		onDragStarting(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceled(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinished(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		useLabelModelParameterFinder: boolean,
		movedLabel: yfiles.graph.ILabel,
		graphSelection: yfiles.graph.IGraphSelection,
		onGraphSelectionChanged(
		oldGraphSelection: yfiles.graph.IGraphSelection, newGraphSelection: yfiles.graph.IGraphSelection
	): void,
		setGraphSelectionCore(newGraphSelection: yfiles.graph.IGraphSelection): void,
		graph: yfiles.graph.IGraph,
		onGraphChanged(oldGraph: yfiles.graph.IGraph, newGraph: yfiles.graph.IGraph): void,
		setGraphCore(newGraph: yfiles.graph.IGraph): void
	}

	declare export interface LabelTextValidatingEventArgs {
		label: yfiles.graph.ILabel,
		newText: string,
		cancel: boolean
	}

	declare export interface NodeDropInputMode {
		addNodeCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		nodeCreator: (
		context: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, draggedNode: yfiles.graph.INode, newNodeLayout: yfiles.geometry.RectD
	) => yfiles.graph.INode,
		isGroupNodePredicate: (obj: yfiles.graph.INode) => boolean,
		isValidParentPredicate: (obj: yfiles.graph.INode) => boolean,
		showNodePreview: boolean,
		highlightedNode: yfiles.graph.INode,
		initializePreview(e: yfiles.system.DragEventArgs): void,
		populatePreviewGraph(previewGraph: yfiles.graph.IGraph): void,
		getDraggedNode(): yfiles.graph.INode,
		getDropTarget(dragLocation: yfiles.geometry.PointD): yfiles.model.IModelItem,
		getDropTargetParentNode(groupedGraph: yfiles.graph.IGroupedGraph): yfiles.graph.INode,
		folderNodeParentsAllowed: boolean,
		leafParentsAllowed: boolean,
		onNodeCreated(args: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		cleanupPreview(): void,
		updatePreview(previewGraph: yfiles.graph.IGraph, newLocation: yfiles.geometry.PointD): void,
		getNodeLayout(
		mouseLocation: yfiles.geometry.PointD, size: yfiles.geometry.SizeD
	): yfiles.geometry.RectD,
		collectSnapResults(source: Object, args: yfiles.input.CollectSnapResultsEventArgs): void,
		collect(source: Object, args: yfiles.input.CollectSnapResultsEventArgs): void
	}

	declare export interface ReparentNodeHandler {
		reparentRecognizer: yfiles.input.IEventRecognizer,
		isReparentGesture(context: yfiles.input.IInputModeContext, node: yfiles.graph.INode): boolean,
		canReparent(context: yfiles.input.IInputModeContext, node: yfiles.graph.INode): boolean,
		isValidParent(
		context: yfiles.input.IInputModeContext, node: yfiles.graph.INode, newParent: yfiles.graph.INode
	): boolean,
		reparent(
		context: yfiles.input.IInputModeContext, node: yfiles.graph.INode, newParent: yfiles.graph.INode
	): void
	}

	declare export interface EdgeSnapLineProvider {
		addSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, item: yfiles.model.IModelItem
	): void,
		addHorizontalSegmentSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, edge: yfiles.graph.IEdge, segmentStart: yfiles.geometry.PointD, segmentEnd: yfiles.geometry.PointD
	): void,
		addVerticalSegmentSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, edge: yfiles.graph.IEdge, segmentStart: yfiles.geometry.PointD, segmentEnd: yfiles.geometry.PointD
	): void
	}

	declare export interface IActionButtonProvider {
		getButtonBounds(): yfiles.drawing.IHitTestable,
		invokeAction(
		context: yfiles.input.IInputModeContext, location: yfiles.geometry.PointD
	): void
	}

	declare export interface IEdgePortHandleProvider {
		getHandle(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, sourceHandle: boolean
	): yfiles.input.IHandle
	}

	declare export interface NodeSnapLineProvider {
		addSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, item: yfiles.model.IModelItem
	): void,
		addPortSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, node: yfiles.graph.INode, layout: yfiles.geometry.RectD
	): void,
		addFixedNodeBorderSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, node: yfiles.graph.INode, layout: yfiles.geometry.RectD
	): void,
		addCenterSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, node: yfiles.graph.INode, layout: yfiles.geometry.RectD
	): void,
		createCenterSnapLine(
		context: yfiles.input.GraphSnapContext, node: yfiles.graph.INode, snapLineOrientation: yfiles.input.SnapLineOrientation, location: yfiles.geometry.PointD
	): yfiles.input.OrthogonalSnapLine,
		addNodeToSegmentSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, node: yfiles.graph.INode, layout: yfiles.geometry.RectD
	): void,
		addNodeToNodeSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, node: yfiles.graph.INode, layout: yfiles.geometry.RectD
	): void
	}

	declare export interface GraphEditorInputMode {
		availableCommands: yfiles.collections.ICollection<yfiles.system.ICommand>,
		orthogonalEdgeEditingContext: yfiles.input.OrthogonalEdgeEditingContext,
		orthogonalBendRemoval: boolean,
		snapToGrid(context: yfiles.input.IInputModeContext, node: yfiles.graph.INode): void,
		childInputModeContextLookup(type: yfiles.lang.Class): Object,
		reparentNodeHandler: yfiles.input.IReparentNodeHandler,
		onReparentNodeHandlerChanged(
		oldReparentNodeHandler: yfiles.input.IReparentNodeHandler, newReparentNodeHandler: yfiles.input.IReparentNodeHandler
	): void,
		createReparentNodeHandler(): yfiles.input.IReparentNodeHandler,
		hitTestEnumerator: yfiles.drawing.IHitTestEnumerator<yfiles.model.IModelItem>,
		marqueeSelectableItems: yfiles.graph.GraphItemTypes,
		pasteSelectableItems: yfiles.graph.GraphItemTypes,
		smartPasteSelection: boolean,
		clickSelectableItems: yfiles.graph.GraphItemTypes,
		clickableItems: yfiles.graph.GraphItemTypes,
		selectableItems: yfiles.graph.GraphItemTypes,
		movableItems: yfiles.graph.GraphItemTypes,
		deletableItems: yfiles.graph.GraphItemTypes,
		labelEditableItems: yfiles.graph.GraphItemTypes,
		showHandleItems: yfiles.graph.GraphItemTypes,
		onHandleInputModeChanged(
		oldHandleInputMode: yfiles.input.HandleInputMode, newHandleInputMode: yfiles.input.HandleInputMode
	): void,
		onKeyboardInputModeChanged(
		oldKeyboardInputMode: yfiles.input.KeyboardInputMode, newKeyboardInputMode: yfiles.input.KeyboardInputMode
	): void,
		shouldInstallCommand(command: yfiles.system.ICommand): boolean,
		shouldLabelBeAdded(item: yfiles.model.IModelItem): boolean,
		useCurrentItemForCommands: boolean,
		adjustGroupNodeSizes(): void,
		adjustGroupNodeSize(nodes: yfiles.collections.IEnumerable<yfiles.graph.INode>): void,
		paste(): void,
		pasteAtLocation(location: yfiles.geometry.PointD): void,
		duplicateSelection(): void,
		pasteDelta: yfiles.geometry.PointD,
		cut(): void,
		copy(): void,
		undo(): void,
		redo(): void,
		ungroupSelection(): void,
		groupSelection(): yfiles.graph.INode,
		selectAll(): void,
		labelEditingAllowed: boolean,
		doubleClickLabelEditingAllowed: boolean,
		labelAddingAllowed: boolean,
		onEditLabel(): boolean,
		onAddLabel(): boolean,
		createLabel(
		labeledItem: yfiles.graph.ILabeledItem
	): yfiles.support.Future<yfiles.graph.ILabel>,
		onLabelAdded(args: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>): void,
		addLabelAddedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelAddedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		createDefaultLabelConfiguration(
		labeledItem: yfiles.graph.ILabeledItem, param: {
		value: yfiles.graph.ILabelModelParameter
	}, style: {
		value: yfiles.drawing.ILabelStyle
	}, preferredSize: {
		value: yfiles.geometry.SizeD
	}
	): void,
		editLabel(label: yfiles.graph.ILabel): void,
		addLabelTextEditingStartedListener(value: (sender: Object, e: yfiles.graph.LabelEventArgs) => void): void,
		removeLabelTextEditingStartedListener(value: (sender: Object, e: yfiles.graph.LabelEventArgs) => void): void,
		onLabelTextEditingStarted(args: yfiles.graph.LabelEventArgs): void,
		addLabelTextEditingCanceledListener(value: (sender: Object, e: yfiles.graph.LabelEventArgs) => void): void,
		removeLabelTextEditingCanceledListener(value: (sender: Object, e: yfiles.graph.LabelEventArgs) => void): void,
		onLabelTextEditingCanceled(args: yfiles.graph.LabelEventArgs): void,
		onLabelTextEdited(label: yfiles.graph.ILabel, text: string): void,
		onValidateLabelText(args: yfiles.input.LabelTextValidatingEventArgs): void,
		addValidateLabelTextListener(
		value: (sender: Object, e: yfiles.input.LabelTextValidatingEventArgs) => void
	): void,
		removeValidateLabelTextListener(
		value: (sender: Object, e: yfiles.input.LabelTextValidatingEventArgs) => void
	): void,
		addLabel(item: yfiles.graph.ILabeledItem): yfiles.support.Future<yfiles.graph.ILabel>,
		closeLabelEditor(cancel: boolean): void,
		setCurrentItem(currentItem: yfiles.model.IModelItem): void,
		setLabelText(label: yfiles.graph.ILabel, text: string): void,
		addLabelTextChangedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelTextChangedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		onLabelTextChanged(args: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>): void,
		adjustToSizeConstraints(node: yfiles.graph.INode): void,
		setNodeBounds(node: yfiles.graph.INode, newBounds: yfiles.geometry.RectD): void,
		deleteSelection(): void,
		onDeletingSelection(args: yfiles.input.InputModeEventArgs): void,
		onDeletedItem(args: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>): void,
		onDeletedSelection(args: yfiles.input.InputModeEventArgs): void,
		addDeletingSelectionListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDeletingSelectionListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDeletedItemListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeDeletedItemListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addDeletedSelectionListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDeletedSelectionListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		shouldBeDeleted(item: yfiles.model.IModelItem): boolean,
		shouldLabelBeEdited(item: yfiles.model.IModelItem): boolean,
		onMoveInputModeChanged(
		oldMoveInputMode: yfiles.input.MoveInputMode, newMoveInputMode: yfiles.input.MoveInputMode
	): void,
		createMoveUnselectedInputMode(modifierRecognizer: yfiles.input.IEventRecognizer): yfiles.input.MoveInputMode,
		adjustContentRectPolicy: yfiles.input.AdjustContentRectPolicy,
		adjustContentRect(): void,
		contentRectMargins: yfiles.geometry.InsetsD,
		createInputModeController(): yfiles.model.InputModeController<yfiles.model.IModelItem>,
		graphSelection: yfiles.graph.IGraphSelection,
		graph: yfiles.graph.IGraph,
		graphControl: yfiles.canvas.GraphControl,
		setGraphControl(graphControl: yfiles.canvas.GraphControl): void,
		onGraphControlChanged(
		oldControl: yfiles.canvas.GraphControl, newControl: yfiles.canvas.GraphControl
	): void,
		onGraphSelectionChanged(
		oldSelection: yfiles.graph.IGraphSelection, newSelection: yfiles.graph.IGraphSelection
	): void,
		setGraphSelection(newSelection: yfiles.graph.IGraphSelection): void,
		onGraphChanged(oldGraph: yfiles.graph.IGraph, newGraph: yfiles.graph.IGraph): void,
		setGraphCore(newGraph: yfiles.graph.IGraph): void,
		install(context: yfiles.input.IInputModeContext): void,
		onDisabled(): void,
		onEnabled(): void,
		uninstall(context: yfiles.input.IInputModeContext): void,
		graphInputModeController: yfiles.input.GraphInputModeController,
		labelSnapContext: yfiles.input.SnapContext,
		onLabelSnapContextChanged(
		oldLabelSnapContext: yfiles.input.SnapContext, newLabelSnapContext: yfiles.input.SnapContext
	): void,
		moveLabelInputMode: yfiles.input.MoveLabelInputMode,
		onMoveLabelInputModeChanged(
		oldMoveLabelInputMode: yfiles.input.MoveLabelInputMode, newMoveLabelInputMode: yfiles.input.MoveLabelInputMode
	): void,
		createMoveLabelInputMode(): yfiles.input.MoveLabelInputMode,
		navigationInputMode: yfiles.input.NavigationInputMode,
		onNavigationInputModeChanged(
		oldNavigationInputMode: yfiles.input.NavigationInputMode, newNavigationInputMode: yfiles.input.NavigationInputMode
	): void,
		createNavigationInputMode(): yfiles.input.NavigationInputMode,
		marqueeSelectElements(marqueeRectangle: yfiles.geometry.RectD): void,
		shouldBeMarqueeSelectable(item: yfiles.model.IModelItem): boolean,
		shouldBeSelectedAfterPaste(item: yfiles.model.IModelItem): boolean,
		groupSelectionAllowed: boolean,
		adjustGroupNodeSizeAllowed: boolean,
		ungroupSelectionAllowed: boolean,
		clearSelectionAllowed: boolean,
		clipboardOperationsAllowed: boolean,
		pasteAllowed: boolean,
		duplicateAllowed: boolean,
		undoOperationsAllowed: boolean,
		reparentNodesAllowed: boolean,
		reparentToLeavesAllowed: boolean,
		addNodeReparentedListener(
		value: (sender: Object, e: yfiles.graph.HierarchyEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeReparentedListener(
		value: (sender: Object, e: yfiles.graph.HierarchyEventArgs<yfiles.graph.INode>) => void
	): void,
		onNodeReparented(args: yfiles.graph.HierarchyEventArgs<yfiles.graph.INode>): void,
		onMarqueeSelectionInputModeMarqueeSelected(sender: Object, e: yfiles.system.EventArgs): void,
		createClickInputMode(): yfiles.input.ClickInputMode,
		onClickInputModeClicked(sender: Object, e: yfiles.input.ClickEventArgs): void,
		onClickInputModeDoubleClicked(sender: Object, e: yfiles.input.ClickEventArgs): void,
		onTapInputModeTapped(sender: Object, e: yfiles.input.TapEventArgs): void,
		onTapInputModeDoubleTapped(sender: Object, e: yfiles.input.TapEventArgs): void,
		voidStylesIgnored: boolean,
		shouldSelect(item: yfiles.model.IModelItem): boolean,
		shouldBeClickSelected(item: yfiles.model.IModelItem): boolean,
		shouldBeClicked(item: yfiles.model.IModelItem): boolean,
		shouldBeDoubleClicked(item: yfiles.model.IModelItem): boolean,
		findItem(
		location: yfiles.geometry.PointD, tests: yfiles.graph.GraphItemTypes[]
	): yfiles.model.IModelItem,
		findItemFiltered(
		location: yfiles.geometry.PointD, tests: yfiles.graph.GraphItemTypes[], predicate: (obj: yfiles.model.IModelItem) => boolean
	): yfiles.model.IModelItem,
		findItemFilteredWithContext(
		location: yfiles.geometry.PointD, tests: yfiles.graph.GraphItemTypes[], predicate: (obj: yfiles.model.IModelItem) => boolean, hitTestContext: yfiles.input.IInputModeContext
	): yfiles.model.IModelItem,
		findItems(
		location: yfiles.geometry.PointD, tests: yfiles.graph.GraphItemTypes[], predicate: (obj: yfiles.model.IModelItem) => boolean
	): yfiles.collections.IEnumerable<yfiles.model.IModelItem>,
		findItemsWithContext(
		location: yfiles.geometry.PointD, tests: yfiles.graph.GraphItemTypes[], predicate: (obj: yfiles.model.IModelItem) => boolean, hitTestContext: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.model.IModelItem>,
		createNode(clickPoint: yfiles.geometry.PointD): yfiles.graph.INode,
		shouldSetToCurrentItem(item: yfiles.model.IModelItem): boolean,
		onNodeCreated(args: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		addNodeCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeNodeCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		nodeCreationAllowed: boolean,
		bendCreationAllowed: boolean,
		edgeCreationAllowed: boolean,
		reverseSelectedEdges(): void,
		reverseEdges(edges: yfiles.collections.IEnumerable<yfiles.graph.IEdge>): void,
		reverseEdge(edge: yfiles.graph.IEdge): void,
		shouldBeReversed(edge: yfiles.graph.IEdge): boolean,
		edgeReversalAllowed: boolean,
		onEdgePortsChanged(args: yfiles.graph.EdgeEventArgs): void,
		addEdgePortsChangedListener(value: (sender: Object, e: yfiles.graph.EdgeEventArgs) => void): void,
		removeEdgePortsChangedListener(value: (sender: Object, e: yfiles.graph.EdgeEventArgs) => void): void,
		nodeCreator: (
		context: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, location: yfiles.geometry.PointD
	) => yfiles.graph.INode,
		clickClearSelection(context: yfiles.input.IInputModeContext): boolean,
		shouldClickCreateNode(
		context: yfiles.input.IInputModeContext, clickPoint: yfiles.geometry.PointD
	): boolean,
		clickCreateNode(
		context: yfiles.input.IInputModeContext, clickPoint: yfiles.geometry.PointD
	): boolean,
		click(
		context: yfiles.input.IInputModeContext, item: yfiles.model.IModelItem
	): boolean,
		doubleClick(
		context: yfiles.input.IInputModeContext, item: yfiles.model.IModelItem
	): boolean,
		handleActionButtonProvider(
		context: yfiles.input.IInputModeContext, item: yfiles.model.IModelItem
	): boolean,
		focusableItems: yfiles.graph.GraphItemTypes,
		onItemClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemLeftClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemRightClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemDoubleClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemLeftDoubleClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		editLabelOnDoubleClick(item: yfiles.model.IModelItem): boolean,
		onItemRightDoubleClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onCanvasClicked(args: yfiles.input.ClickEventArgs): void,
		addItemClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemLeftClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemLeftClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemRightClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemRightClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemLeftDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemLeftDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemRightDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemRightDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addCanvasClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		removeCanvasClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		selectNodeAndSelfloopBends(node: yfiles.graph.INode): void,
		initialize(): void,
		navigationModePriority: number,
		createEdgeModePriority: number,
		createBendModePriority: number,
		textEditorInputModePriority: number,
		textEditorInputMode: yfiles.input.TextEditorInputMode,
		onTextEditorInputModeChanged(
		oldTextEditorInputMode: yfiles.input.TextEditorInputMode, newTextEditorInputMode: yfiles.input.TextEditorInputMode
	): void,
		createTextEditorInputMode(): yfiles.input.TextEditorInputMode,
		createEdgeInputMode: yfiles.input.CreateEdgeInputMode,
		onCreateEdgeInputModeChanged(
		oldCreateEdgeInputMode: yfiles.input.CreateEdgeInputMode, newCreateEdgeInputMode: yfiles.input.CreateEdgeInputMode
	): void,
		createCreateEdgeInputMode(): yfiles.input.CreateEdgeInputMode,
		autoRemoveEmptyLabels: boolean,
		autoSelectSelfloopBends: boolean,
		hideLabelDuringEditing: boolean,
		multiSelectionRecognizer: yfiles.input.IEventRecognizer,
		clickHitTestOrder: yfiles.graph.GraphItemTypes[],
		doubleClickHitTestOrder: yfiles.graph.GraphItemTypes[],
		detailSelectionRecognizer: yfiles.input.IEventRecognizer,
		cyclicSelectionRecognizer: yfiles.input.IEventRecognizer,
		createBendInputMode: yfiles.input.CreateBendInputMode,
		onCreateBendInputModeChanged(
		oldCreateBendInputMode: yfiles.input.CreateBendInputMode, newCreateBendInputMode: yfiles.input.CreateBendInputMode
	): void,
		onCreateBendInputModeBendCreated(sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IBend>): void,
		dragBend(bend: yfiles.graph.IBend): void,
		createCreateBendInputMode(): yfiles.input.CreateBendInputMode,
		itemHoverModePriority: number,
		itemHoverInputMode: yfiles.input.ItemHoverInputMode,
		onItemHoverInputModeChanged(
		oldItemHoverInputMode: yfiles.input.ItemHoverInputMode, newItemHoverInputMode: yfiles.input.ItemHoverInputMode
	): void,
		createItemHoverInputMode(): yfiles.input.ItemHoverInputMode,
		nodeDropInputModePriority: number,
		nodeDropInputMode: yfiles.input.NodeDropInputMode,
		createNodeDropInputMode(): yfiles.input.NodeDropInputMode,
		onNodeDropInputModeChanged(
		oldNodeDropInputMode: yfiles.input.NodeDropInputMode, newNodeDropInputMode: yfiles.input.NodeDropInputMode
	): void,
		onNodeDropInputModeNodeCreated(sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		shouldShowHandles(item: yfiles.model.IModelItem): boolean,
		shouldBeMovable(item: yfiles.model.IModelItem): boolean,
		shouldBeMovableForMoveInputMode(item: yfiles.model.IModelItem): boolean,
		onMouseHoverInputModeQueryToolTip(src: Object, args: yfiles.input.ToolTipQueryEventArgs): void,
		onContextMenuInputModePopulateContextMenu(src: Object, args: yfiles.input.PopulateContextMenuEventArgs): void,
		contextMenuItems: yfiles.graph.GraphItemTypes,
		shouldPopulateContextMenu(item: yfiles.model.IModelItem): boolean,
		onPopulateItemContextMenu(
		args: yfiles.input.PopulateItemContextMenuEventArgs<yfiles.model.IModelItem>
	): void,
		addPopulateItemContextMenuListener(
		value: (
		sender: Object, e: yfiles.input.PopulateItemContextMenuEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removePopulateItemContextMenuListener(
		value: (
		sender: Object, e: yfiles.input.PopulateItemContextMenuEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		toolTipItems: yfiles.graph.GraphItemTypes,
		shouldQueryToolTip(item: yfiles.model.IModelItem): boolean,
		onQueryItemToolTip(args: yfiles.input.QueryItemToolTipEventArgs<yfiles.model.IModelItem>): void,
		addQueryItemToolTipListener(
		value: (
		sender: Object, e: yfiles.input.QueryItemToolTipEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeQueryItemToolTipListener(
		value: (
		sender: Object, e: yfiles.input.QueryItemToolTipEventArgs<yfiles.model.IModelItem>
	) => void
	): void
	}

	declare export interface GraphInputModeController {
		graph: yfiles.graph.IGraph,
		unselectedEdgesHitTestable: yfiles.drawing.IHitTestable,
		createUnselectedEdgesHitTestable(): yfiles.drawing.IHitTestable,
		nodesHitTestable: yfiles.drawing.IHitTestable,
		createNodesHitTestable(): yfiles.drawing.IHitTestable,
		edgesHitTestable: yfiles.drawing.IHitTestable,
		createEdgesHitTestable(): yfiles.drawing.IHitTestable,
		unselectedNodesHitTestable: yfiles.drawing.IHitTestable,
		createUnselectedNodesHitTestable(): yfiles.drawing.IHitTestable
	}

	declare export interface CreateEdgeInputMode {
		validBeginCursor: yfiles.canvas.ICanvasCursor,
		validBendCursor: yfiles.canvas.ICanvasCursor,
		validEndCursor: yfiles.canvas.ICanvasCursor,
		disableSnappingRecognizer: yfiles.input.IEventRecognizer,
		enableSnappingRecognizer: yfiles.input.IEventRecognizer,
		toggleSegmentOrientationRecognizer: yfiles.input.IEventRecognizer,
		finishRecognizer: yfiles.input.IEventRecognizer,
		prepareRecognizer: yfiles.input.IEventRecognizer,
		draggedRecognizer: yfiles.input.IEventRecognizer,
		movedOrDraggedRecognizer: yfiles.input.IEventRecognizer,
		createBendRecognizer: yfiles.input.IEventRecognizer,
		cancelRecognizer: yfiles.input.IEventRecognizer,
		removeBendRecognizer: yfiles.input.IEventRecognizer,
		portCandidateResolutionRecognizer: yfiles.input.IEventRecognizer,
		finishRecognizerTouch: yfiles.input.IEventRecognizer,
		prepareRecognizerTouch: yfiles.input.IEventRecognizer,
		draggedRecognizerTouch: yfiles.input.IEventRecognizer,
		createBendRecognizerTouch: yfiles.input.IEventRecognizer,
		cancelRecognizerTouch: yfiles.input.IEventRecognizer,
		removeBendRecognizerTouch: yfiles.input.IEventRecognizer,
		showPortCandidates: boolean,
		edgeToEdgeConnectionsAllowed: boolean,
		snapDistance: number,
		snapContext: yfiles.input.SnapContext,
		candidateDescriptor: yfiles.canvas.ICanvasObjectDescriptor,
		closestCandidateDescriptor: yfiles.canvas.ICanvasObjectDescriptor,
		orthogonalSnapDistance: number,
		connectToCandidatesOnly: boolean,
		forceSnapToCandidate: boolean,
		useHitNodeTargetCandidatesOnly: boolean,
		orthogonalEdgeCreation: boolean,
		preferredMinimalEdgeDistance: number,
		resolveSourcePortCandidates: boolean,
		resolveTargetPortCandidates: boolean,
		isPortCandidateResolutionEnabled(): boolean,
		nodeBorderWidthRatio: number,
		installListeners(): void,
		uninstallListeners(): void,
		nodeBasedEdgeCreator: (
		ctx: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode, style: yfiles.drawing.IEdgeStyle
	) => yfiles.graph.IEdge,
		portBasedEdgeCreator: (
		ctx: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort, style: yfiles.drawing.IEdgeStyle
	) => yfiles.graph.IEdge,
		getNodes(): yfiles.collections.IEnumerable<yfiles.graph.INode>,
		getPortOwners(): yfiles.collections.IEnumerable<yfiles.graph.IPortOwner>,
		selfloopCreationAllowed: boolean,
		isValidBend(source: Object, args: yfiles.system.EventArgs): boolean,
		bendCreationAllowed: boolean,
		dummyEdge: yfiles.graph.IEdge,
		sourcePortCandidate: yfiles.input.IPortCandidate,
		targetPortCandidate: yfiles.input.IPortCandidate,
		createStartPoint(): yfiles.geometry.IMutablePoint,
		createDragPoint(): yfiles.geometry.IMutablePoint,
		createVisuals(): yfiles.drawing.IVisualCreator,
		isValidEnd(source: Object, args: yfiles.system.EventArgs): boolean,
		doStartEdgeCreation(sourcePortCandidate: yfiles.input.IPortCandidate): void,
		determineEdgeStyle(): yfiles.drawing.IEdgeStyle,
		isValidBegin(source: Object, args: yfiles.system.EventArgs): boolean,
		getSourcePortOwner(sourcePoint: yfiles.geometry.PointD): yfiles.graph.IPortOwner,
		isBendCreationEnforced(): boolean,
		createEdge(
		controlPoints: yfiles.model.IListEnumerable<yfiles.geometry.IPoint>
	): yfiles.graph.IEdge,
		cancelEditImplicitly: boolean,
		onEdgeCreated(args: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>): void,
		addEdgeCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		createEdgeForCandidates(
		graph: yfiles.graph.IGraph, sourcePortCandidate: yfiles.input.IPortCandidate, targetPortCandidate: yfiles.input.IPortCandidate
	): yfiles.graph.IEdge,
		onPortAdded(args: yfiles.model.ItemEventArgs<yfiles.graph.IPort>): void,
		addPortAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		removePortAddedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.IPort>) => void
	): void,
		assignBends(
		graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, pointList: yfiles.model.IListEnumerable<yfiles.geometry.IPoint>
	): void,
		startCreateEdge(): void,
		getSourcePortCandidate(
		provider: yfiles.input.IPortCandidateProvider, location: yfiles.geometry.PointD, resolveCandidates: boolean
	): yfiles.input.IPortCandidate,
		resolveCandidates(
		candidates: yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>, location: yfiles.geometry.PointD
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getChildInputModeContext(): yfiles.input.IInputModeContext,
		createEdgeCreationInputModeContext(): yfiles.input.IInputModeContext,
		assignSourcePortPosition(
		portOwner: yfiles.graph.IPortOwner, locationModelParameter: yfiles.graph.IPortLocationModelParameter
	): void,
		assignEdgeStyle(style: yfiles.drawing.IEdgeStyle): void,
		edgeStyle: yfiles.drawing.IEdgeStyle,
		createDummyEdge(): yfiles.graph.IEdge,
		createDummyTargetNode(): yfiles.graph.SimpleNode,
		createEdgeBetweenNodes(
		graph: yfiles.graph.IGraph, sourceNode: yfiles.graph.INode, targetNode: yfiles.graph.INode
	): yfiles.graph.IEdge,
		getTargetPortOwner(targetPoint: yfiles.geometry.PointD): yfiles.graph.IPortOwner,
		getTargetNode(targetPoint: yfiles.geometry.PointD): yfiles.graph.INode,
		getSourceNode(sourcePoint: yfiles.geometry.PointD): yfiles.graph.INode,
		getTargetPortCandidateProviderForLocation(
		sourceCandidate: yfiles.input.IPortCandidate, dragPoint: yfiles.geometry.PointD
	): yfiles.input.IPortCandidateProvider,
		getClosestTargetCandidate(
		candidates: yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>, dragPoint: yfiles.geometry.PointD
	): yfiles.input.IPortCandidate,
		getClosestSourceCandidate(
		candidates: yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>, location: yfiles.geometry.PointD
	): yfiles.input.IPortCandidate,
		getClosestCandidate(
		candidates: yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>, dragPoint: yfiles.geometry.PointD
	): yfiles.input.IPortCandidate,
		getTargetPortCandidateProvider(
		sourceCandidate: yfiles.input.IPortCandidate, targetItem: yfiles.graph.IPortOwner, dragPoint: yfiles.geometry.PointD
	): yfiles.input.IPortCandidateProvider,
		getSourcePortCandidateProvider(sourcePortOwner: yfiles.graph.IPortOwner): yfiles.input.IPortCandidateProvider,
		getNode(location: yfiles.geometry.PointD): yfiles.graph.INode,
		getPortOwner(location: yfiles.geometry.PointD): yfiles.graph.IPortOwner,
		snapToTargetCandidate: boolean,
		snapToTargetCandidateOwner: boolean,
		beginHitTestable: yfiles.drawing.IHitTestable,
		endHitTestable: yfiles.drawing.IHitTestable,
		validBendHitTestable: yfiles.drawing.IHitTestable,
		startPoint: yfiles.geometry.IMutablePoint,
		dragPoint: yfiles.geometry.IMutablePoint,
		visuals: yfiles.drawing.IVisualCreator,
		getTargetPortCandidates(
		dragPoint: yfiles.geometry.PointD, resolveCandidates: boolean
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		onTargetLocationChanged(dragPoint: yfiles.geometry.PointD): void,
		updateTargetPortOwner(oldOwner: yfiles.graph.IPortOwner, newOwner: yfiles.graph.IPortOwner): void,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		isCancelGesture(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		isSourceNodeDraggingFinished(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		isRemoveBendEvent(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		install(c: yfiles.input.IInputModeContext): void,
		canvasGroupProvider: yfiles.model.ICanvasGroupProvider<yfiles.input.IInputMode>,
		uninstall(c: yfiles.input.IInputModeContext): void,
		isCreationInProgress: boolean,
		installDummyEdge(installerContext: yfiles.model.IInstallerContext): void,
		addGestureFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeGestureFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addGestureFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeGestureFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addGestureStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeGestureStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addGestureStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeGestureStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addMovingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeMovingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addMovedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeMovedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addGestureCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeGestureCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addGestureCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeGestureCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		onGestureStarting(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onGestureStarted(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onMoving(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onMoved(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onGestureFinished(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onGestureFinishing(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onGestureCanceled(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onGestureCanceling(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		getDummyEdgeSnapLines(
		graphSnapContext: yfiles.input.GraphSnapContext, dummyEdgeSegmentSnapLineProvider: yfiles.input.ISnapLineProvider
	): yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		getFirstSegmentDirection(dragVector: yfiles.geometry.PointD): yfiles.input.EdgeSegmentDirection,
		onEdgeCreationStarted(args: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>): void,
		addEdgeCreationStartedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		removeEdgeCreationStartedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IEdge>) => void
	): void,
		clearDummyEdgeBends(): void,
		setDragPoint(location: yfiles.geometry.PointD): void,
		cancelWithTransition(t: yfiles.support.Transition): void,
		createBendWithTransition(t: yfiles.support.Transition): void,
		createBend(location: yfiles.geometry.PointD): yfiles.graph.IBend,
		addDummyEdgeBend(location: yfiles.geometry.PointD): yfiles.graph.IBend,
		removeLastBend(): void,
		setBendLocation(index: number, location: yfiles.geometry.PointD): void,
		setBendLocationForBend(bend: yfiles.graph.IBend, location: yfiles.geometry.PointD): void,
		nodeComparer: yfiles.collections.IComparer<yfiles.graph.INode>,
		portOwnerComparer: yfiles.collections.IComparer<yfiles.graph.IPortOwner>,
		enforceBendCreationRecognizer: yfiles.input.IEventRecognizer,
		graph: yfiles.graph.IGraph,
		onGraphChanged(oldGraph: yfiles.graph.IGraph, newGraph: yfiles.graph.IGraph): void,
		setGraphCore(newGraph: yfiles.graph.IGraph): void
	}

	declare export interface LabelPositionHandler {
		candidateTemplate: yfiles.drawing.DataTemplate,
		highlightTemplate: yfiles.drawing.DataTemplate,
		graph: yfiles.graph.IGraph,
		label: yfiles.graph.ILabel,
		inputModeCanvasGroup: yfiles.canvas.ICanvasObjectGroup,
		setPosition(location: yfiles.geometry.PointD): void,
		location: yfiles.geometry.IPoint,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		getParameterCandidates(
		graph: yfiles.graph.IGraph, label: yfiles.graph.ILabel
	): yfiles.collections.IEnumerable<yfiles.graph.ILabelModelParameter>,
		createCandidateDescriptor(
		context: yfiles.input.IInputModeContext, highlight: boolean
	): yfiles.canvas.ICanvasObjectDescriptor,
		setLabelModelParameter(label: yfiles.graph.ILabel, parameter: yfiles.graph.ILabelModelParameter): void,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		useParameterFinder(ctx: yfiles.input.IInputModeContext): boolean,
		useFinder: boolean,
		getDistance(
		rectangle: yfiles.geometry.IOrientedRectangle, location: yfiles.geometry.PointD
	): number,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void
	}

	declare export interface LabelSnapContextHelper {
		addSnapLines(
		context: yfiles.input.LabelSnapContext, inputContext: yfiles.input.IInputModeContext, label: yfiles.graph.ILabel
	): void,
		addInitialLocationSnapLines(
		context: yfiles.input.LabelSnapContext, inputContext: yfiles.input.IInputModeContext, label: yfiles.graph.ILabel
	): void,
		addNodeShapeSnapLines(
		context: yfiles.input.LabelSnapContext, inputContext: yfiles.input.IInputModeContext, label: yfiles.graph.ILabel
	): void,
		addEdgePathSnapLines(
		context: yfiles.input.LabelSnapContext, inputContext: yfiles.input.IInputModeContext, label: yfiles.graph.ILabel
	): void,
		addEdgePathSnapLinesWithDistance(
		context: yfiles.input.LabelSnapContext, inputContext: yfiles.input.IInputModeContext, label: yfiles.graph.ILabel, distance: number
	): void,
		collectSnapResults(
		context: yfiles.input.LabelSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, suggestedLayout: yfiles.geometry.IOrientedRectangle, label: yfiles.graph.ILabel
	): void
	}

	declare export interface ItemDropInputMode<T> {
		addItemCreatedListener(value: (sender: Object, e: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemCreatedListener(value: (sender: Object, e: yfiles.model.ItemEventArgs<T>) => void): void,
		showPreview: boolean,
		snappingEnabled: boolean,
		disableSnappingRecognizer: yfiles.input.IEventRecognizer,
		highlightDropTarget: boolean,
		snapContext: yfiles.input.SnapContext,
		snappedMousePosition: yfiles.geometry.PointD,
		dropTarget: yfiles.model.IModelItem,
		itemCreator: (
		context: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, dropTarget: yfiles.model.IModelItem, dropLocation: yfiles.geometry.PointD
	) => T,
		onDragEntered(e: yfiles.system.DragEventArgs): void,
		initializeSnapContext(e: yfiles.system.DragEventArgs): void,
		initializePreview(e: yfiles.system.DragEventArgs): void,
		initializeDropTarget(e: yfiles.system.DragEventArgs): void,
		getPreviewGraph(): yfiles.graph.IGraph,
		populatePreviewGraph(previewGraph: yfiles.graph.IGraph): void,
		updatePreview(previewGraph: yfiles.graph.IGraph, dragLocation: yfiles.geometry.PointD): void,
		updateDropTarget(dragLocation: yfiles.geometry.PointD): void,
		getDropTarget(dragLocation: yfiles.geometry.PointD): yfiles.model.IModelItem,
		onDraggedOver(e: yfiles.system.DragEventArgs): void,
		onDragLeft(e: yfiles.system.DragEventArgs): void,
		onDragDropped(e: yfiles.system.DragEventArgs): void,
		onItemCreated(args: yfiles.model.ItemEventArgs<T>): void,
		collectSnapResults(source: Object, args: yfiles.input.CollectSnapResultsEventArgs): void,
		setDragLocation(coordinates: yfiles.geometry.PointD): void,
		cancel(): void,
		cleanupPreview(): void,
		cleanupSnapContext(): void,
		cleanupDropTarget(): void
	}

	declare export interface StripeDropInputMode {
		showStripePreview: boolean,
		cancel(): void,
		createStripe(
		context: yfiles.input.IInputModeContext, newParent: yfiles.graph.IStripe, movedStripe: yfiles.graph.IStripe, index: number, gesture: yfiles.input.ReparentGesture
	): yfiles.graph.IStripe,
		onDragDropped(e: yfiles.system.DragEventArgs): void,
		cleanupPreview(): void,
		onDragLeft(e: yfiles.system.DragEventArgs): void,
		getDraggedStripe(): yfiles.graph.IStripe,
		onDragEntered(e: yfiles.system.DragEventArgs): void,
		populatePreviewGraph(previewGraph: yfiles.graph.IGraph): void,
		onDraggedOver(e: yfiles.system.DragEventArgs): void,
		createPreviewTable(): yfiles.graph.ITable,
		setDragLocation(coordinates: yfiles.geometry.PointD): void,
		onStripeCreated(args: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>): void,
		addStripeCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripeCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		updatePreview(previewGraph: yfiles.graph.IGraph, newLocation: yfiles.geometry.PointD): void,
		getPreviewTableLayout(
		mouseLocation: yfiles.geometry.PointD, size: yfiles.geometry.SizeD
	): yfiles.geometry.RectD
	}

	declare export interface ReparentStripeInputMode {
		cancelDrag(t: yfiles.support.Transition): void,
		beginDrag(t: yfiles.support.Transition): void,
		endDrag(t: yfiles.support.Transition): void
	}

	declare export interface TableEditorInputMode {
		resizeStripeInputMode: yfiles.input.ResizeStripeInputMode,
		onResizeStripeInputModeChanged(
		oldResizeStripeInputMode: yfiles.input.ResizeStripeInputMode, newResizeStripeInputMode: yfiles.input.ResizeStripeInputMode
	): void,
		createResizeStripeInputMode(): yfiles.input.ResizeStripeInputMode,
		resizeStripeInputModePriority: number,
		childInputModeContextLookup(type: yfiles.lang.Class): Object,
		reparentStripeHandler: yfiles.input.IReparentStripeHandler,
		onReparentStripeHandlerChanged(
		oldReparentStripeHandler: yfiles.input.IReparentStripeHandler, newReparentStripeHandler: yfiles.input.IReparentStripeHandler
	): void,
		createReparentStripeHandler(): yfiles.input.IReparentStripeHandler,
		reparentStripeInputMode: yfiles.input.ReparentStripeInputMode,
		onReparentStripeInputModeChanged(
		oldReparentStripeInputMode: yfiles.input.ReparentStripeInputMode, newReparentStripeInputMode: yfiles.input.ReparentStripeInputMode
	): void,
		createReparentStripeInputMode(): yfiles.input.ReparentStripeInputMode,
		reparentStripeInputModePriority: number,
		stripeDropInputModePriority: number,
		stripeDropInputMode: yfiles.input.StripeDropInputMode,
		createStripeDropInputMode(): yfiles.input.StripeDropInputMode,
		onStripeDropInputModeChanged(
		oldStripeDropInputMode: yfiles.input.StripeDropInputMode, newStripeDropInputMode: yfiles.input.StripeDropInputMode
	): void,
		keyboardInputMode: yfiles.input.KeyboardInputMode,
		createKeyboardInputMode(): yfiles.input.KeyboardInputMode,
		onKeyboardInputModeChanged(
		oldKeyboardInputMode: yfiles.input.KeyboardInputMode, newKeyboardInputMode: yfiles.input.KeyboardInputMode
	): void,
		shouldInstallCommand(command: yfiles.system.ICommand): boolean,
		textEditorInputMode: yfiles.input.TextEditorInputMode,
		onTextEditorInputModeChanged(
		oldTextEditorInputMode: yfiles.input.TextEditorInputMode, newTextEditorInputMode: yfiles.input.TextEditorInputMode
	): void,
		createTextEditorInputMode(): yfiles.input.TextEditorInputMode,
		textEditorInputModePriority: number,
		onEditLabel(): boolean,
		onAddLabel(): boolean,
		labelEditableItems: yfiles.graph.StripeTypes,
		shouldLabelBeAdded(item: yfiles.model.IModelItem): boolean,
		shouldLabelBeEdited(item: yfiles.model.IModelItem): boolean,
		onLabelAdded(args: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>): void,
		addLabelAddedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelAddedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		addLabelTextChangedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelTextChangedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		onLabelTextChanged(args: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>): void,
		onLabelTextEdited(label: yfiles.graph.ILabel, text: string): void,
		addLabelTextEditingStartedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelTextEditingStartedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		onLabelTextEditingStarted(args: yfiles.graph.LabelEventArgs): void,
		addLabelTextEditingCanceledListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		removeLabelTextEditingCanceledListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.ILabel>) => void
	): void,
		onLabelTextEditingCanceled(args: yfiles.graph.LabelEventArgs): void,
		onValidateLabelText(args: yfiles.input.LabelTextValidatingEventArgs): void,
		addValidateLabelTextListener(
		value: (sender: Object, e: yfiles.input.LabelTextValidatingEventArgs) => void
	): void,
		removeValidateLabelTextListener(
		value: (sender: Object, e: yfiles.input.LabelTextValidatingEventArgs) => void
	): void,
		autoRemoveEmptyLabels: boolean,
		keyboardModePriority: number,
		clickInputMode: yfiles.input.ClickInputMode,
		onClickInputModeChanged(
		oldClickInputMode: yfiles.input.ClickInputMode, newClickInputMode: yfiles.input.ClickInputMode
	): void,
		createClickInputMode(): yfiles.input.ClickInputMode,
		onClickInputModeClicked(sender: Object, e: yfiles.input.ClickEventArgs): void,
		clearSelection(): void,
		selectAll(): void,
		deleteSelection(): void,
		onDeletingSelection(args: yfiles.input.InputModeEventArgs): void,
		onDeletedItem(args: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>): void,
		onDeletedSelection(args: yfiles.input.InputModeEventArgs): void,
		addDeletingSelectionListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDeletingSelectionListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDeletedItemListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeDeletedItemListener(
		value: (
		source: Object, evt: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addDeletedSelectionListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDeletedSelectionListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		deleteStripe(item: yfiles.graph.IStripe): void,
		deletableItems: yfiles.graph.StripeTypes,
		shouldBeDeleted(item: yfiles.graph.IStripe): boolean,
		selectableItems: yfiles.graph.StripeTypes,
		clickSelectableItems: yfiles.graph.StripeTypes,
		onClickInputModeDoubleClicked(sender: Object, e: yfiles.input.ClickEventArgs): void,
		clickInputModePriority: number,
		labelEditingAllowed: boolean,
		editLabel(label: yfiles.graph.ILabel): void,
		labelAddingAllowed: boolean,
		createLabel(stripe: yfiles.graph.IStripe): yfiles.support.Future<yfiles.graph.ILabel>,
		multiSelectionRecognizer: yfiles.input.IEventRecognizer,
		clickSelectableRegions: yfiles.graph.StripeSubregion,
		synchronizeWithGraphSelection: boolean,
		uninstall(context: yfiles.input.IInputModeContext): void,
		stripeSelection: yfiles.graph.IStripeSelection,
		createStripeSelection(): yfiles.graph.IStripeSelection,
		findStripe(
		location: yfiles.geometry.PointD, stripeTypes: yfiles.graph.StripeTypes, subregions: yfiles.graph.StripeSubregion
	): yfiles.graph.StripeSubregionDescriptor,
		findStripes(
		location: yfiles.geometry.PointD, stripeTypes: yfiles.graph.StripeTypes, subregions: yfiles.graph.StripeSubregion
	): yfiles.collections.IEnumerable<yfiles.graph.StripeSubregionDescriptor>,
		findStripeFiltered(
		location: yfiles.geometry.PointD, stripeTypes: yfiles.graph.StripeTypes, subregions: yfiles.graph.StripeSubregion, predicate: (obj: yfiles.graph.StripeSubregionDescriptor) => boolean
	): yfiles.graph.StripeSubregionDescriptor,
		findStripesFiltered(
		location: yfiles.geometry.PointD, stripeTypes: yfiles.graph.StripeTypes, subregions: yfiles.graph.StripeSubregion, predicate: (obj: yfiles.graph.StripeSubregionDescriptor) => boolean
	): yfiles.collections.IEnumerable<yfiles.graph.StripeSubregionDescriptor>,
		insertChild(owner: yfiles.graph.IStripe, index: number): yfiles.graph.IStripe,
		insertChildWithOwnerIndexAndSize(owner: yfiles.graph.IStripe, index: number, size: number): yfiles.graph.IStripe,
		initialize(): void,
		install(context: yfiles.input.IInputModeContext): void
	}

	declare export interface ReparentStripePositionHandler {
		location: yfiles.geometry.IPoint,
		movedStripe: yfiles.graph.IStripe,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		createTargetGhostVisualization(
		inputModeContext: yfiles.input.IInputModeContext, stripe: yfiles.graph.IStripe
	): yfiles.canvas.ICanvasObject,
		createSourceGhostVisualization(inputModeContext: yfiles.input.IInputModeContext): yfiles.canvas.ICanvasObject,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		updateTargetVisualization(
		targetVisualization: yfiles.canvas.ICanvasObject, targetStripe: yfiles.graph.IStripe, reparentGesture: yfiles.input.ReparentGesture, targetBounds: yfiles.geometry.RectD, inputModeContext: yfiles.input.IInputModeContext
	): yfiles.canvas.ICanvasObject,
		updateSourceVisualization(
		targetVisualization: yfiles.canvas.ICanvasObject, targetStripe: yfiles.graph.IStripe, reparentGesture: yfiles.input.ReparentGesture, inputModeContext: yfiles.input.IInputModeContext
	): yfiles.canvas.ICanvasObject,
		getTargetSubregion(
		newLocation: yfiles.geometry.PointD, targetTableNode: {
		value: yfiles.graph.INode
	}
	): yfiles.graph.StripeSubregionDescriptor,
		updateTargetVisualizationBounds(
		originalTargetBounds: yfiles.geometry.RectD, gesture: yfiles.input.ReparentGesture, targetStripe: yfiles.graph.IStripe
	): yfiles.geometry.RectD,
		determineGesture(
		inputModeContext: yfiles.input.IInputModeContext, newLocation: yfiles.geometry.IPoint, sourceStripe: yfiles.graph.IStripe, targetDescriptor: yfiles.graph.StripeSubregionDescriptor, targetBounds: yfiles.geometry.RectD
	): yfiles.input.ReparentGesture,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		inputModeContext: yfiles.input.IInputModeContext,
		setPosition(location: yfiles.geometry.PointD): void,
		onStripeChanged(args: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>): void,
		addStripeChangedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void,
		removeStripeChangedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IStripe>) => void
	): void
	}

	declare export interface ResizeStripeInputMode {
		pressedRecognizerTouch: yfiles.input.IEventRecognizer,
		draggedRecognizerTouch: yfiles.input.IEventRecognizer,
		releasedRecognizerTouch: yfiles.input.IEventRecognizer,
		pressedRecognizer: yfiles.input.IEventRecognizer,
		draggedRecognizer: yfiles.input.IEventRecognizer,
		cancelRecognizer: yfiles.input.IEventRecognizer,
		releasedRecognizer: yfiles.input.IEventRecognizer,
		resizeNeighborsRecognizer: yfiles.input.IEventRecognizer,
		ignoreContentRecognizer: yfiles.input.IEventRecognizer,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		isValidBegin(source: Object, args: yfiles.system.EventArgs): boolean,
		addDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		onDragStarting(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragStarted(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragging(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragged(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinished(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinishing(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceled(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceling(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		uninstall(c: yfiles.input.IInputModeContext): void,
		createResizeVisualization(
		tableItem: yfiles.graph.IStripe, ctx: yfiles.input.IInputModeContext
	): yfiles.drawing.IVisualCreator
	}

	declare export interface PortsHandleProvider {
		portOwner: yfiles.graph.IPortOwner,
		getHandles(
		inputModeContext: yfiles.input.IInputModeContext
	): yfiles.collections.ICollection<yfiles.input.IHandle>,
		getHandle(port: yfiles.graph.IPort): yfiles.input.IHandle
	}

	declare export interface ReparentStripeHandler {
		canReparent(context: yfiles.input.IInputModeContext, stripe: yfiles.graph.IStripe): boolean,
		isValidParent(
		context: yfiles.input.IInputModeContext, stripe: yfiles.graph.IStripe, newParent: yfiles.graph.IStripe, index: number, gesture: yfiles.input.ReparentGesture
	): boolean,
		reparent(
		context: yfiles.input.IInputModeContext, movedStripe: yfiles.graph.IStripe, newParent: yfiles.graph.IStripe, index: number, gesture: yfiles.input.ReparentGesture
	): void,
		adjustSize(
		context: yfiles.input.IInputModeContext, movedStripe: yfiles.graph.IStripe, newParent: yfiles.graph.IStripe, gesture: yfiles.input.ReparentGesture, index: number, originalStripeSize: number, originalParentSize: number
	): void,
		maxRowLevel: number,
		maxColumnLevel: number
	}

	declare export interface IReparentStripeHandler {
		canReparent(context: yfiles.input.IInputModeContext, stripe: yfiles.graph.IStripe): boolean,
		isValidParent(
		context: yfiles.input.IInputModeContext, stripe: yfiles.graph.IStripe, newParent: yfiles.graph.IStripe, index: number, gesture: yfiles.input.ReparentGesture
	): boolean,
		reparent(
		context: yfiles.input.IInputModeContext, movedStripe: yfiles.graph.IStripe, newParent: yfiles.graph.IStripe, index: number, gesture: yfiles.input.ReparentGesture
	): void
	}

	declare export interface CollectGraphSnapLinesEventArgs {
		addFixedNodeSnapLine(snapLine: yfiles.input.OrthogonalSnapLine): void,
		addFixedSegmentSnapLine(snapLine: yfiles.input.OrthogonalSnapLine): void,
		addPortSnapLine(snapLine: yfiles.input.OrthogonalSnapLine): void,
		addAdditionalSnapLine(snapLine: yfiles.input.OrthogonalSnapLine): void
	}

	declare export interface InputModeEventArgs {
		context: yfiles.input.IInputModeContext
	}

	declare export interface IPositionHandler {
		setPosition(location: yfiles.geometry.PointD): void
	}

	declare export interface TableReshapeHandler {
		bounds: yfiles.geometry.IRectangle,
		initializeReshape(inputModeContext: yfiles.input.IInputModeContext): void,
		handleReshape(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): boolean,
		cancelReshape(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD
	): void,
		reshapeFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): void
	}

	declare export interface GraphCommands {
		
	}

	declare export interface GraphViewerInputMode {
		clickHitTestOrder: yfiles.graph.GraphItemTypes[],
		addItemClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemSelectedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>) => void
	): void,
		removeItemSelectedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>) => void
	): void,
		addMultiSelectionStartedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMultiSelectionStartedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addMultiSelectionFinishedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMultiSelectionFinishedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		initialize(): void,
		install(context: yfiles.input.IInputModeContext): void,
		uninstall(context: yfiles.input.IInputModeContext): void,
		childInputModeContextLookup(type: yfiles.lang.Class): Object,
		shouldInstallCommand(command: yfiles.system.ICommand): boolean,
		selectAll(): void,
		contextMenuModePriority: number,
		mouseHoverModePriority: number,
		waitModePriority: number,
		itemHoverModePriority: number,
		marqueeSelectionModePriority: number,
		clickModePriority: number,
		tapModePriority: number,
		moveViewportModePriority: number,
		navigationModePriority: number,
		clickInputMode: yfiles.input.ClickInputMode,
		onClickInputModeChanged(
		oldClickInputMode: yfiles.input.ClickInputMode, newClickInputMode: yfiles.input.ClickInputMode
	): void,
		createClickInputMode(): yfiles.input.ClickInputMode,
		tapInputMode: yfiles.input.TapInputMode,
		onTapInputModeChanged(
		oldTapInputMode: yfiles.input.TapInputMode, newTapInputMode: yfiles.input.TapInputMode
	): void,
		createTapInputMode(): yfiles.input.TapInputMode,
		waitInputMode: yfiles.input.WaitInputMode,
		onWaitInputModeChanged(
		oldWaitInputMode: yfiles.input.WaitInputMode, newWaitInputMode: yfiles.input.WaitInputMode
	): void,
		createWaitInputMode(): yfiles.input.WaitInputMode,
		itemHoverInputMode: yfiles.input.ItemHoverInputMode,
		onItemHoverInputModeChanged(
		oldItemHoverInputMode: yfiles.input.ItemHoverInputMode, newItemHoverInputMode: yfiles.input.ItemHoverInputMode
	): void,
		createItemHoverInputMode(): yfiles.input.ItemHoverInputMode,
		marqueeSelectionInputMode: yfiles.input.MarqueeSelectionInputMode,
		onMarqueeSelectionInputModeChanged(
		oldMarqueeSelectionInputMode: yfiles.input.MarqueeSelectionInputMode, newMarqueeSelectionInputMode: yfiles.input.MarqueeSelectionInputMode
	): void,
		createMarqueeSelectionInputMode(): yfiles.input.MarqueeSelectionInputMode,
		contextMenuInputMode: yfiles.input.ContextMenuInputMode,
		onContextMenuInputModeChanged(
		oldContextMenuInputMode: yfiles.input.ContextMenuInputMode, newContextMenuInputMode: yfiles.input.ContextMenuInputMode
	): void,
		createContextMenuInputMode(): yfiles.input.ContextMenuInputMode,
		navigationInputMode: yfiles.input.NavigationInputMode,
		onNavigationInputModeChanged(
		oldNavigationInputMode: yfiles.input.NavigationInputMode, newNavigationInputMode: yfiles.input.NavigationInputMode
	): void,
		createNavigationInputMode(): yfiles.input.NavigationInputMode,
		mouseHoverInputMode: yfiles.input.MouseHoverInputMode,
		onMouseHoverInputModeChanged(
		oldMouseHoverInputMode: yfiles.input.MouseHoverInputMode, newMouseHoverInputMode: yfiles.input.MouseHoverInputMode
	): void,
		createMouseHoverInputMode(): yfiles.input.MouseHoverInputMode,
		moveViewportInputMode: yfiles.input.MoveViewportInputMode,
		onMoveViewportInputModeChanged(
		oldMoveViewportInputMode: yfiles.input.MoveViewportInputMode, newMoveViewportInputMode: yfiles.input.MoveViewportInputMode
	): void,
		createMoveViewportInputMode(): yfiles.input.MoveViewportInputMode,
		voidStylesIgnored: boolean,
		clipboardCommandsEnabled: boolean,
		onClipboardCommandsEnabledChanged(oldValue: boolean, newValue: boolean): void,
		selectableItems: yfiles.graph.GraphItemTypes,
		clickableItems: yfiles.graph.GraphItemTypes,
		marqueeSelectableItems: yfiles.graph.GraphItemTypes,
		shouldMarqueeSelect(item: yfiles.model.IModelItem): boolean,
		marqueeSelect(items: yfiles.collections.IEnumerable<yfiles.model.IModelItem>): void,
		clickClearSelection(context: yfiles.input.IInputModeContext): boolean,
		handleActionButtonProvider(
		context: yfiles.input.IInputModeContext, item: yfiles.model.IModelItem
	): boolean,
		deselectAll(): boolean,
		shouldBeClicked(item: yfiles.model.IModelItem): boolean,
		shouldBeDoubleClicked(item: yfiles.model.IModelItem): boolean,
		shouldSelect(item: yfiles.model.IModelItem): boolean,
		click(
		context: yfiles.input.IInputModeContext, item: yfiles.model.IModelItem
	): boolean,
		multiSelectionRecognizer: yfiles.input.IEventRecognizer,
		setSelected(item: yfiles.model.IModelItem, selected: boolean): void,
		setCurrentItem(item: yfiles.model.IModelItem): void,
		shouldBeFocused(item: yfiles.model.IModelItem): boolean,
		focusableItems: yfiles.graph.GraphItemTypes,
		graphSelection: yfiles.graph.IGraphSelection,
		graph: yfiles.graph.IGraph,
		onItemSelected(args: yfiles.model.ItemEventArgs<yfiles.model.IModelItem>): void,
		onItemClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemLeftClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemRightClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemDoubleClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemLeftDoubleClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onItemRightDoubleClicked(args: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>): void,
		onCanvasClicked(args: yfiles.input.ClickEventArgs): void,
		addItemLeftClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemLeftClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemRightClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemRightClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemLeftDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemLeftDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addItemRightDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeItemRightDoubleClickedListener(
		value: (
		sender: Object, e: yfiles.support.ItemInputEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		addCanvasClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		removeCanvasClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		onMultiSelectionStarted(args: yfiles.system.EventArgs): void,
		onMultiSelectionFinished(args: yfiles.system.EventArgs): void,
		contextMenuItems: yfiles.graph.GraphItemTypes,
		shouldPopulateContextMenu(item: yfiles.model.IModelItem): boolean,
		onPopulateItemContextMenu(
		args: yfiles.input.PopulateItemContextMenuEventArgs<yfiles.model.IModelItem>
	): void,
		addPopulateItemContextMenuListener(
		value: (
		sender: Object, e: yfiles.input.PopulateItemContextMenuEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removePopulateItemContextMenuListener(
		value: (
		sender: Object, e: yfiles.input.PopulateItemContextMenuEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		toolTipItems: yfiles.graph.GraphItemTypes,
		shouldQueryToolTip(item: yfiles.model.IModelItem): boolean,
		onQueryItemToolTip(args: yfiles.input.QueryItemToolTipEventArgs<yfiles.model.IModelItem>): void,
		addQueryItemToolTipListener(
		value: (
		sender: Object, e: yfiles.input.QueryItemToolTipEventArgs<yfiles.model.IModelItem>
	) => void
	): void,
		removeQueryItemToolTipListener(
		value: (
		sender: Object, e: yfiles.input.QueryItemToolTipEventArgs<yfiles.model.IModelItem>
	) => void
	): void
	}

	declare export interface EdgeEndMoveHandle {
		sourceEnd: boolean,
		edge: yfiles.graph.IEdge,
		dummyEdge: yfiles.graph.SimpleEdge,
		showDummyEdge: boolean,
		inputModeContext: yfiles.input.IInputModeContext,
		createDummyEdge(): yfiles.graph.SimpleEdge,
		configureDummy(dummy: yfiles.graph.SimpleEdge, edge: yfiles.graph.IEdge): void,
		createDummyEdgeVisualCreator(dummy: yfiles.graph.SimpleEdge): yfiles.drawing.IVisualCreator,
		hideOriginalEdge(context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge): void,
		unhideOriginalEdge(edge: yfiles.graph.IEdge, canvas: yfiles.canvas.CanvasControl): void,
		setPosition(location: yfiles.geometry.PointD): void,
		location: yfiles.geometry.IPoint,
		type: yfiles.input.HandleType,
		cursor: yfiles.canvas.ICanvasCursor,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		getGraph(modeContext: yfiles.input.IInputModeContext): yfiles.graph.IGraph
	}

	declare export interface DefaultBendCreator {
		createBend(
		context: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, location: yfiles.geometry.PointD
	): number
	}

	declare export interface PortRelocationHandleProvider {
		graph: yfiles.graph.IGraph,
		edge: yfiles.graph.IEdge,
		getHandles(
		inputModeContext: yfiles.input.IInputModeContext
	): yfiles.collections.ICollection<yfiles.input.IHandle>,
		createPortRelocationHandle(
		graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, sourcePort: boolean
	): yfiles.input.IHandle,
		getHandle(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, sourceHandle: boolean
	): yfiles.input.IHandle
	}

	declare export interface PortRelocationHandle {
		showHitPortOwnerCandidatesOnly: boolean,
		createPortCandidateDescriptor(): yfiles.canvas.ICanvasObjectDescriptor,
		maximumSnapDistance: number,
		configureDummy(dummy: yfiles.graph.SimpleEdge, edge: yfiles.graph.IEdge): void,
		setToPortCandidate(
		dummy: yfiles.graph.SimpleEdge, source: boolean, candidate: yfiles.input.IPortCandidate
	): void,
		edgeToEdgeConnectionsAllowed: boolean,
		cyclicPortDependenciesAllowed: boolean,
		addExistingPort: boolean,
		type: yfiles.input.HandleType,
		cursor: yfiles.canvas.ICanvasCursor,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		getPortCandidates(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, sourcePort: boolean
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		createExistingPortCandidate(currentPort: yfiles.graph.IPort): yfiles.input.IPortCandidate,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		setClosestCandidate(closest: yfiles.input.IPortCandidate): void,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		setPort(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, setSourcePort: boolean, portCandidate: yfiles.input.IPortCandidate, suggestedLocation: yfiles.geometry.PointD
	): void,
		getPort(
		context: yfiles.input.IInputModeContext, candidate: yfiles.input.IPortCandidate, suggestedLocation: yfiles.geometry.PointD
	): yfiles.graph.IPort,
		setPorts(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, sourcePort: yfiles.graph.IPort, targetPort: yfiles.graph.IPort
	): void,
		getClosestCandidate(
		context: yfiles.input.IInputModeContext, location: yfiles.geometry.PointD, candidates: yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	): yfiles.input.IPortCandidate,
		resolveCandidate(
		context: yfiles.input.IInputModeContext, candidate: yfiles.input.IPortCandidate, location: yfiles.geometry.PointD
	): yfiles.input.IPortCandidate,
		resolvePortCandidates: boolean,
		portCandidateResolutionRecognizer: yfiles.input.IEventRecognizer,
		isPortCandidateResolutionEnabled(context: yfiles.input.IInputModeContext): boolean
	}

	declare export interface NodeSnapResultProvider {
		collectSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, suggestedLayout: yfiles.geometry.RectD, node: yfiles.graph.INode
	): void,
		collectSnapLineSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, suggestedLayout: yfiles.geometry.RectD, node: yfiles.graph.INode
	): void,
		collectSnapResultsForSnapLine(
		args: yfiles.input.CollectSnapResultsEventArgs, snapLine: yfiles.input.OrthogonalSnapLine, suggestedLayout: yfiles.geometry.RectD, node: yfiles.graph.INode
	): void,
		collectGridSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, suggestedLayout: yfiles.geometry.RectD, node: yfiles.graph.INode
	): void,
		addGridSnapResult(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, pointInSuggestedLayout: yfiles.geometry.PointD, node: yfiles.graph.INode
	): void,
		addGridSnapResultCore(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, pointInSuggestedLayout: yfiles.geometry.PointD, node: yfiles.graph.INode, gridSnapType: yfiles.canvas.GridSnapType, xSnapPolicy: yfiles.input.SnapPolicy, ySnapPolicy: yfiles.input.SnapPolicy
	): void
	}

	declare export interface NodeReshapeSnapResultProvider {
		collectSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, reshapeContext: yfiles.input.ReshapeRectangleContext
	): void,
		collectSnapLineResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, reshapeContext: yfiles.input.ReshapeRectangleContext, suggestedLayout: yfiles.geometry.RectD
	): void,
		getSnapLines(
		context: yfiles.input.GraphSnapContext, node: yfiles.graph.INode, reshapeContext: yfiles.input.ReshapeRectangleContext, suggestedLayout: yfiles.geometry.RectD
	): yfiles.collections.IEnumerable<yfiles.input.SnapLine>,
		addSnapLineSnapResult(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, snapLine: yfiles.input.OrthogonalSnapLine, delta: number, snapPoint: yfiles.geometry.PointD
	): void,
		collectSameSizeSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, reshapeContext: yfiles.input.ReshapeRectangleContext, suggestedLayout: yfiles.geometry.RectD
	): void,
		collectGridSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, reshapeContext: yfiles.input.ReshapeRectangleContext, suggestedLayout: yfiles.geometry.RectD
	): void,
		addGridLineSnapResult(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, snapLineType: yfiles.input.SnapLineSnapType, snapLineLocation: yfiles.geometry.IPoint, delta: number, snappedLocation: yfiles.geometry.PointD, from: number, to: number, snapLinePoint: yfiles.geometry.PointD
	): void,
		addGridSnapResult(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, provider: yfiles.input.IGridConstraintProvider<yfiles.graph.INode>, gridSnappedPoint: yfiles.geometry.PointD, snappedLocation: yfiles.geometry.PointD
	): void,
		addSameSizeSnapResult(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, orientation: yfiles.input.SnapLineOrientation, rectangles: yfiles.collections.IEnumerable<yfiles.geometry.RectD>, finalSize: number, snapDelta: number
	): void
	}

	declare export interface NodeCenterPortCandidateProvider {
		getPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface EmptyPortsCandidateProvider {
		getSourcePortCandidatesForTarget(
		context: yfiles.input.IInputModeContext, target: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForSource(
		context: yfiles.input.IInputModeContext, source: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface UnoccupiedPortsCandidateProvider {
		getPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface PortDefaultsPortCandidateProvider {
		getPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface CurrentEdgePortsCandidateProvider {
		edge: yfiles.graph.IEdge,
		createCandidate(
		context: yfiles.input.IInputModeContext, port: yfiles.graph.IPort
	): yfiles.input.DefaultPortCandidate,
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface ExistingPortsCandidateProvider {
		portOwner: yfiles.graph.IPortOwner,
		getSourcePortCandidatesForTarget(
		context: yfiles.input.IInputModeContext, target: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		createList(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IList<yfiles.input.IPortCandidate>,
		createCandidate(port: yfiles.graph.IPort): yfiles.input.DefaultPortCandidate,
		getTargetPortCandidatesForSource(
		context: yfiles.input.IInputModeContext, source: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface AllCandidatesEdgePortCandidateProvider {
		addEdgeCandidates: boolean,
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface DefaultEdgePortsCandidateProvider {
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface PortCandidateProvider {
		addWithOwnerAndLocation(
		owner: yfiles.graph.IPortOwner, location: yfiles.graph.IPortLocationModelParameter
	): yfiles.input.IPortCandidate,
		portCandidates: yfiles.collections.IList<yfiles.input.IPortCandidate>,
		addExistingPorts(owner: yfiles.graph.IPortOwner): void,
		add(candidate: yfiles.input.IPortCandidate): yfiles.input.IPortCandidate,
		getPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface EdgeSegmentSnapLine {
		edge: yfiles.graph.IEdge,
		direction: yfiles.geometry.PointD,
		distance: number,
		segmentIndex: number,
		segmentSource: yfiles.geometry.PointD,
		segmentTarget: yfiles.geometry.PointD,
		sourceMarker: yfiles.geometry.PointD,
		targetMarker: yfiles.geometry.PointD
	}

	declare export interface NodePairBasedSnapLine {
		firstNode: yfiles.graph.INode,
		secondNode: yfiles.graph.INode
	}

	declare export interface PointBasedSnapLine {
		point: yfiles.geometry.IPoint
	}

	declare export interface SnapLineSnapResult {
		snapLine: yfiles.input.SnapLine,
		snappedCoordinates: yfiles.geometry.PointD,
		movedObject: Object,
		delta: yfiles.geometry.PointD,
		getVisualCreator(): yfiles.drawing.IVisualCreator,
		snap(
		unSappedCoordinates: yfiles.geometry.PointD, currentSnapState: yfiles.input.SnapState
	): void,
		isSnapped(
		unsnappedCoordinates: yfiles.geometry.PointD, finalSnapState: yfiles.input.SnapState
	): boolean
	}

	declare export interface ShapeGeometryPortCandidateProvider {
		addExistingPortsEnabled: boolean,
		minimumSegmentLength: number,
		getPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		createList(
		context: yfiles.input.IInputModeContext, portOwner: yfiles.graph.IPortOwner
	): yfiles.collections.IList<yfiles.input.IPortCandidate>
	}

	declare export interface INodeSnapResultProvider {
		collectSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, suggestedLayout: yfiles.geometry.RectD, node: yfiles.graph.INode
	): void
	}

	declare export interface IBendSelectionTester {
		getBend(
		location: yfiles.geometry.PointD, ctx: yfiles.canvas.ICanvasContext
	): yfiles.graph.IBend,
		getBends(
		box: yfiles.geometry.RectD, ctx: yfiles.canvas.ICanvasContext
	): yfiles.collections.IEnumerable<yfiles.graph.IBend>
	}

	declare export interface IBendSnapResultProvider {
		collectSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, suggestedLocation: yfiles.geometry.PointD, bend: yfiles.graph.IBend
	): void
	}

	declare export interface IEdgeSnapResultProvider {
		initializeSnapping(
		context: yfiles.input.GraphSnapContext, movementInfos: yfiles.input.MovementInfo[], edge: yfiles.graph.IEdge
	): void,
		collectSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, movementInfos: yfiles.input.MovementInfo[], edge: yfiles.graph.IEdge
	): void,
		cleanupSnapping(context: yfiles.input.GraphSnapContext, edge: yfiles.graph.IEdge): void
	}

	declare export interface CompositePortCandidateProvider {
		getSourcePortCandidatesForTarget(
		context: yfiles.input.IInputModeContext, target: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForSource(
		context: yfiles.input.IInputModeContext, source: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface AbstractPortCandidateProvider {
		portOwnerF: yfiles.graph.IPortOwner,
		portOwner: yfiles.graph.IPortOwner,
		style: yfiles.drawing.IPortStyle,
		addExistingPortsFromList(list: yfiles.collections.IList<yfiles.input.IPortCandidate>): void,
		createCallbackPortForParameter(
		location: yfiles.graph.IPortLocationModelParameter
	): yfiles.input.DefaultPortCandidate,
		createCallbackPortForLocation(location: yfiles.geometry.IPoint): yfiles.input.IPortCandidate,
		createCallbackForOwnerAndParameter(
		owner: yfiles.graph.IPortOwner, location: yfiles.graph.IPortLocationModelParameter
	): yfiles.input.DefaultPortCandidate,
		createCallbackPortForOwnerAndModel(
		owner: yfiles.graph.IPortOwner, model: yfiles.graph.IPortLocationModel, location: yfiles.geometry.IPoint
	): yfiles.input.IPortCandidate,
		createCallbackPortForOwnerAndLocation(
		owner: yfiles.graph.IPortOwner, location: yfiles.geometry.IPoint
	): yfiles.input.IPortCandidate,
		createCallbackPort(
		owner: yfiles.graph.IPortOwner, model: yfiles.graph.IPortLocationModel, location: yfiles.geometry.IPoint, valid: boolean
	): yfiles.input.IPortCandidate,
		getCandidateAt(
		context: yfiles.input.IInputModeContext, candidate: yfiles.input.DefaultPortCandidate, suggestedLocation: yfiles.geometry.PointD
	): yfiles.input.IPortCandidate,
		createInstance(
		context: yfiles.input.IInputModeContext, candidate: yfiles.input.DefaultPortCandidate
	): yfiles.graph.IPort,
		tag: Object,
		getSourcePortCandidatesForTarget(
		context: yfiles.input.IInputModeContext, target: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForSource(
		context: yfiles.input.IInputModeContext, source: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface IBendCreator {
		createBend(
		context: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge, location: yfiles.geometry.PointD
	): number
	}

	declare export interface DefaultPortCandidate {
		validity: yfiles.input.PortCandidateValidity,
		candidateTag: Object,
		portTag: Object,
		locationModelParameter: yfiles.graph.IPortLocationModelParameter,
		model: yfiles.graph.IPortLocationModel,
		style: yfiles.drawing.IPortStyle,
		owner: yfiles.graph.IPortOwner,
		getInstance(): yfiles.graph.IPort,
		getPortCandidateAt(
		inputModeContext: yfiles.input.IInputModeContext, location: yfiles.geometry.PointD
	): yfiles.input.IPortCandidate,
		setInstance(port: yfiles.graph.IPort): void,
		createInstance(inputModeContext: yfiles.input.IInputModeContext): yfiles.graph.IPort,
		createInstanceWithParameterAndStyle(
		inputModeContext: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, parameter: yfiles.graph.IPortLocationModelParameter, style: yfiles.drawing.IPortStyle, tag: Object
	): yfiles.graph.IPort
	}

	declare export interface IPortSnapResultProvider {
		collectSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, suggestedLocation: yfiles.geometry.PointD, port: yfiles.graph.IPort
	): void
	}

	declare export interface IEdgePortCandidateProvider {
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface IPortCandidateProvider {
		getSourcePortCandidatesForTarget(
		context: yfiles.input.IInputModeContext, target: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForSource(
		context: yfiles.input.IInputModeContext, source: yfiles.input.IPortCandidate
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidatesForEdge(
		context: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getSourcePortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>,
		getTargetPortCandidates(
		context: yfiles.input.IInputModeContext
	): yfiles.collections.IEnumerable<yfiles.input.IPortCandidate>
	}

	declare export interface ReshapeRectangleContext {
		initialBounds: yfiles.geometry.RectD,
		minimumSize: yfiles.geometry.ISize,
		maximumSize: yfiles.geometry.ISize,
		minimumEnclosedArea: yfiles.geometry.IRectangle,
		reshapePosition: yfiles.input.HandlePositions,
		topLeftChangeFactor: yfiles.geometry.PointD,
		bottomRightChangeFactor: yfiles.geometry.PointD,
		sizeChangeFactor: yfiles.geometry.SizeD
	}

	declare export interface INodeReshapeSnapResultProvider {
		collectSnapResults(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, node: yfiles.graph.INode, reshapeRectangleContext: yfiles.input.ReshapeRectangleContext
	): void
	}

	declare export interface IPortCandidate {
		candidateTag: Object,
		validity: yfiles.input.PortCandidateValidity,
		getPortCandidateAt(
		inputModeContext: yfiles.input.IInputModeContext, location: yfiles.geometry.PointD
	): yfiles.input.IPortCandidate,
		locationModelParameter: yfiles.graph.IPortLocationModelParameter,
		owner: yfiles.graph.IPortOwner,
		getInstance(): yfiles.graph.IPort,
		createInstance(inputModeContext: yfiles.input.IInputModeContext): yfiles.graph.IPort
	}

	declare export interface NodeBasedSnapLine {
		node: yfiles.graph.INode
	}

	declare export interface IOrthogonalEdgeHelper {
		getSegmentOrientation(
		inputModeContext: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, segmentIndex: number
	): yfiles.input.SegmentOrientation,
		canBeMoved(
		inputModeContext: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge, sourceEnd: boolean
	): boolean,
		isOrthogonallyEdited(
		inputModeContext: yfiles.input.IInputModeContext, edge: yfiles.graph.IEdge
	): boolean,
		cleanUpEdge(
		inputModeContext: yfiles.input.IInputModeContext, graph: yfiles.graph.IGraph, edge: yfiles.graph.IEdge
	): void
	}

	declare export interface IPortLocationModelParameterProvider {
		getParameters(
		port: yfiles.graph.IPort, model: yfiles.graph.IPortLocationModel
	): yfiles.collections.IEnumerable<yfiles.graph.IPortLocationModelParameter>
	}

	declare export interface IEditLabelHelper {
		editLabel(
		inputModeContext: yfiles.input.IInputModeContext, label: {
		value: yfiles.graph.ILabel
	}
	): boolean,
		addLabel(
		inputModeContext: yfiles.input.IInputModeContext, label: {
		value: yfiles.graph.ILabel
	}
	): boolean,
		configureTextEditorInputMode(
		context: yfiles.input.IInputModeContext, mode: yfiles.input.TextEditorInputMode, label: yfiles.graph.ILabel
	): void
	}

	declare export interface ILabelSnapContextHelper {
		addSnapLines(
		context: yfiles.input.LabelSnapContext, inputContext: yfiles.input.IInputModeContext, label: yfiles.graph.ILabel
	): void,
		collectSnapResults(
		context: yfiles.input.LabelSnapContext, args: yfiles.input.CollectSnapResultsEventArgs, suggestedLayout: yfiles.geometry.IOrientedRectangle, label: yfiles.graph.ILabel
	): void
	}

	declare export interface ItemHoverInputMode {
		addHoveredItemChangedListener(
		value: (sender: Object, e: yfiles.input.HoveredItemChangedEventArgs) => void
	): void,
		removeHoveredItemChangedListener(
		value: (sender: Object, e: yfiles.input.HoveredItemChangedEventArgs) => void
	): void,
		currentHoverItem: yfiles.model.IModelItem,
		hoverItems: yfiles.graph.GraphItemTypes,
		install(context: yfiles.input.IInputModeContext): void,
		uninstall(context: yfiles.input.IInputModeContext): void,
		getHitItemsAt(
		location: yfiles.geometry.PointD
	): yfiles.collections.IEnumerable<yfiles.model.IModelItem>,
		updateHover(): void,
		updateHoverWithQueryLocation(queryLocation: yfiles.geometry.PointD): void,
		hoverCursor: yfiles.canvas.ICanvasCursor,
		discardInvalidItems: boolean,
		isValidHoverItem(item: yfiles.model.IModelItem): boolean,
		onHoveredItemChanged(hoveredItemChangedEventArgs: yfiles.input.HoveredItemChangedEventArgs): void
	}

	declare export interface HoveredItemChangedEventArgs {
		oldItem: yfiles.model.IModelItem
	}

	declare export interface IReparentNodeHandler {
		isReparentGesture(context: yfiles.input.IInputModeContext, node: yfiles.graph.INode): boolean,
		canReparent(context: yfiles.input.IInputModeContext, node: yfiles.graph.INode): boolean,
		isValidParent(
		context: yfiles.input.IInputModeContext, node: yfiles.graph.INode, newParent: yfiles.graph.INode
	): boolean,
		reparent(
		context: yfiles.input.IInputModeContext, node: yfiles.graph.INode, newParent: yfiles.graph.INode
	): void
	}

	declare export interface ISnapLineProvider {
		addSnapLines(
		context: yfiles.input.GraphSnapContext, args: yfiles.input.CollectGraphSnapLinesEventArgs, item: yfiles.model.IModelItem
	): void
	}

	declare export interface EditLabelHelper {
		owner: yfiles.graph.ILabeledItem,
		graph: yfiles.graph.IGraph,
		editLabel(
		inputModeContext: yfiles.input.IInputModeContext, label: {
		value: yfiles.graph.ILabel
	}
	): boolean,
		addLabel(
		inputModeContext: yfiles.input.IInputModeContext, label: {
		value: yfiles.graph.ILabel
	}
	): boolean,
		configureTextEditorInputMode(
		context: yfiles.input.IInputModeContext, mode: yfiles.input.TextEditorInputMode, label: yfiles.graph.ILabel
	): void,
		createNewLabel(inputModeContext: yfiles.input.IInputModeContext): yfiles.graph.ILabel,
		getPreferredSize(
		inputModeContext: yfiles.input.IInputModeContext, label: yfiles.graph.ILabel
	): yfiles.geometry.SizeD,
		getLabelStyle(inputModeContext: yfiles.input.IInputModeContext): yfiles.drawing.ILabelStyle,
		getLabelParameter(
		inputModeContext: yfiles.input.IInputModeContext
	): yfiles.graph.ILabelModelParameter
	}

	declare export interface EdgeDragInputModeBase {
		armedCursor: yfiles.canvas.ICanvasCursor,
		pressedRecognizer: yfiles.input.IEventRecognizer,
		draggedRecognizer: yfiles.input.IEventRecognizer,
		cancelRecognizer: yfiles.input.IEventRecognizer,
		releasedRecognizer: yfiles.input.IEventRecognizer,
		prepareRecognizerTouch: yfiles.input.IEventRecognizer,
		movedRecognizerTouch: yfiles.input.IEventRecognizer,
		releasedRecognizerTouch: yfiles.input.IEventRecognizer,
		beginHitTestable: yfiles.drawing.IHitTestable,
		location: yfiles.geometry.PointD,
		graph: yfiles.graph.IGraph,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		dragSegmentWithTransition(t: yfiles.support.Transition): void,
		onDragged(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragging(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		addDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		onDragCanceled(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		addDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		dragSegment(edge: yfiles.graph.IEdge, dragLocation: yfiles.geometry.PointD): void,
		createInputModeContext(): yfiles.input.IInputModeContext,
		getEdge(location: yfiles.geometry.PointD): yfiles.graph.IEdge,
		isValidBegin(source: Object, args: yfiles.system.EventArgs): boolean,
		armValidBegin(t: yfiles.support.Transition): void,
		disarmValidBegin(t: yfiles.support.Transition): void,
		onGraphChanged(oldGraph: yfiles.graph.IGraph, newGraph: yfiles.graph.IGraph): void,
		setGraphCore(newGraph: yfiles.graph.IGraph): void
	}

	declare export interface CreateBendInputMode {
		addBendCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		removeBendCreatedListener(
		value: (sender: Object, e: yfiles.model.ItemEventArgs<yfiles.graph.IBend>) => void
	): void,
		splitOrthogonalSegmentRecognizer: yfiles.input.IEventRecognizer,
		dragSegment(edge: yfiles.graph.IEdge, dragLocation: yfiles.geometry.PointD): void,
		splitOrthogonalSegment: boolean,
		createBend(
		hitEdge: yfiles.graph.IEdge, location: yfiles.geometry.PointD
	): yfiles.graph.IBend,
		onBendCreated(args: yfiles.model.ItemEventArgs<yfiles.graph.IBend>): void,
		returnExistingBend: boolean
	}

	declare export interface NodeMovementInfo {
		node: yfiles.graph.INode,
		currentLocation: yfiles.geometry.IPoint
	}

	declare export interface PortMovementInfo {
		port: yfiles.graph.IPort,
		currentLocation: yfiles.geometry.IPoint
	}

	declare export interface BendMovementInfo {
		bend: yfiles.graph.IBend,
		currentLocation: yfiles.geometry.IPoint
	}

	declare export interface SnapLine {
		snapType: yfiles.input.SnapLineSnapType,
		coordinates: yfiles.geometry.PointD,
		tag: Object,
		weight: number,
		from: yfiles.geometry.PointD,
		to: yfiles.geometry.PointD,
		resourceKey: yfiles.system.ResourceKey
	}

	declare export interface OrthogonalSnapLine {
		orientation: yfiles.input.SnapLineOrientation
	}

	declare export interface EdgeEndMovementInfo {
		edge: yfiles.graph.IEdge,
		sourceEnd: boolean,
		currentLocation: yfiles.geometry.IPoint
	}

	declare export interface MovementInfo {
		horizontalAnchor: yfiles.input.MovementInfo,
		verticalAnchor: yfiles.input.MovementInfo,
		originalLocation: yfiles.geometry.PointD,
		currentLocation: yfiles.geometry.IPoint,
		moveType: yfiles.input.MoveTypes,
		movesVerticallyInSyncWith(info: yfiles.input.MovementInfo): boolean,
		movesHorizontallyInSyncWith(info: yfiles.input.MovementInfo): boolean,
		isVerticallyFixed: boolean,
		isHorizontallyFixed: boolean,
		getX(dx: number): number,
		getY(dy: number): number
	}

	declare export interface GraphSnapContext {
		cleanUp(): void,
		initializeDrag(
		context: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		fixedNodes: yfiles.collections.ICollection<yfiles.graph.INode>,
		dragInitialized(): void,
		onCollectSnapLines(args: yfiles.input.CollectGraphSnapLinesEventArgs): void,
		addCollectSnapLinesListener(
		value: (sender: Object, e: yfiles.input.CollectGraphSnapLinesEventArgs) => void
	): void,
		removeCollectSnapLinesListener(
		value: (sender: Object, e: yfiles.input.CollectGraphSnapLinesEventArgs) => void
	): void,
		addItemToBeMoved(item: yfiles.model.IModelItem): void,
		addItemToBeReshaped(item: yfiles.model.IModelItem): void,
		collectEdgeSnapLines: boolean,
		collectNodeSizes: boolean,
		collectNodeSnapLines: boolean,
		collectPortSnapLines: boolean,
		snapBendAdjacentSegments: boolean,
		snapPortAdjacentSegments: boolean,
		snapSegmentsToSnapLines: boolean,
		snapBendsToSnapLines: boolean,
		snapNodesToSnapLines: boolean,
		nodeToNodeDistance: number,
		nodeToEdgeDistance: number,
		edgeToEdgeDistance: number,
		snapOrthogonalMovement: boolean,
		collectNodePairCenterSnapLines: boolean,
		collectNodePairSnapLines: boolean,
		collectNodePairSegmentSnapLines: boolean,
		gridSnapType: yfiles.canvas.GridSnapType,
		gridSnapDistance: number,
		nodeGridConstraintProvider: yfiles.input.IGridConstraintProvider<yfiles.graph.INode>,
		bendGridConstraintProvider: yfiles.input.IGridConstraintProvider<yfiles.graph.IBend>,
		portGridConstraintProvider: yfiles.input.IGridConstraintProvider<yfiles.graph.IPort>,
		snapLineExtension: number,
		cropSnapLines: boolean,
		addNodeToBeMoved(info: yfiles.input.NodeMovementInfo): void,
		addBendToBeMoved(info: yfiles.input.BendMovementInfo): void,
		addPortToBeMoved(info: yfiles.input.PortMovementInfo): void,
		addEdgeEndToBeMoved(info: yfiles.input.EdgeEndMovementInfo): void,
		getMovementInfos(edge: yfiles.graph.IEdge): yfiles.input.MovementInfo[],
		getMovementInfo(node: yfiles.graph.INode): yfiles.input.NodeMovementInfo,
		getMovementInfoWithPort(port: yfiles.graph.IPort): yfiles.input.PortMovementInfo,
		collectFixedSegmentSnapLines(args: yfiles.input.CollectGraphSnapLinesEventArgs): void,
		collectFixedNodeSnapLines(args: yfiles.input.CollectGraphSnapLinesEventArgs): void,
		collectFixedPortSnapLines(args: yfiles.input.CollectGraphSnapLinesEventArgs): void,
		collectVisibleNodePairs(): void,
		collectSameSizeEntries(): void,
		addSameHeightEntry(rect: yfiles.geometry.RectD): void,
		addSameWidthEntry(rect: yfiles.geometry.RectD): void,
		findSameWidthEntries(
		size: number, maxSize: number, minSize: number, resultingSize: {
		value: number
	}, rects: {
		value: yfiles.collections.IEnumerable<yfiles.geometry.RectD>
	}
	): boolean,
		findSameHeightEntries(
		size: number, maxSize: number, minSize: number, resultingSize: {
		value: number
	}, rects: {
		value: yfiles.collections.IEnumerable<yfiles.geometry.RectD>
	}
	): boolean,
		fixedNodeSnapLines: yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		fixedSegmentSnapLines: yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		fixedPortSnapLines: yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		additionalSnapLines: yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		getFixedNodeSnapLines(
		orientation: yfiles.input.SnapLineOrientation, snapTypes: yfiles.input.SnapLineSnapType, area: yfiles.geometry.RectD
	): yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		getFixedSegmentSnapLines(
		orientation: yfiles.input.SnapLineOrientation, snapTypes: yfiles.input.SnapLineSnapType, area: yfiles.geometry.RectD
	): yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		getFixedPortSnapLines(
		orientation: yfiles.input.SnapLineOrientation, snapTypes: yfiles.input.SnapLineSnapType, area: yfiles.geometry.RectD
	): yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		getAdditionalSnapLines(
		orientation: yfiles.input.SnapLineOrientation, snapTypes: yfiles.input.SnapLineSnapType, area: yfiles.geometry.RectD
	): yfiles.collections.IEnumerable<yfiles.input.OrthogonalSnapLine>,
		addOrthogonalSegment(segStart: yfiles.input.MovementInfo, segEnd: yfiles.input.MovementInfo): void,
		wrapContext(context: yfiles.input.IInputModeContext): yfiles.input.IInputModeContext
	}

	declare export interface NavigationInputMode {
		navigableItems: yfiles.graph.GraphItemTypes,
		selectableItems: yfiles.graph.GraphItemTypes,
		autoGroupNodeAlignmentPolicy: yfiles.input.NodeAlignmentPolicy,
		install(context: yfiles.input.IInputModeContext): void,
		uninstall(context: yfiles.input.IInputModeContext): void,
		graphControl: yfiles.canvas.GraphControl,
		availableCommands: yfiles.collections.ICollection<yfiles.system.ICommand>,
		onEnabled(): void,
		onDisabled(): void,
		useCurrentItemForCommands: boolean,
		graphSelection: yfiles.graph.IGraphSelection,
		graph: yfiles.graph.IGraph,
		enterGroup(node: yfiles.graph.INode): void,
		adjustContentRect(): void,
		exitGroup(): void,
		shouldEnterGroup(node: yfiles.graph.INode): boolean,
		enteringGroupsAllowed: boolean,
		collapsingGroupsAllowed: boolean,
		expandingGroupsAllowed: boolean,
		exitingGroupAllowed: boolean,
		fitContentAfterGroupActions: boolean,
		shouldExitGroup(): boolean,
		expandGroup(groupNode: yfiles.graph.INode): void,
		addGroupCollapsingListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupCollapsingListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addGroupCollapsedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupCollapsedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addGroupExpandingListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupExpandingListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addGroupExpandedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupExpandedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addGroupEnteringListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupEnteringListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addGroupEnteredListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupEnteredListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addGroupExitingListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupExitingListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		addGroupExitedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		removeGroupExitedListener(
		value: (source: Object, evt: yfiles.model.ItemEventArgs<yfiles.graph.INode>) => void
	): void,
		onGroupCollapsed(argument: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onGroupExpanded(argument: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onGroupEntered(argument: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onGroupExited(argument: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onGroupCollapsing(argument: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onGroupExpanding(argument: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onGroupEntering(argument: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		onGroupExiting(argument: yfiles.model.ItemEventArgs<yfiles.graph.INode>): void,
		shouldExpandGroup(node: yfiles.graph.INode): boolean,
		shouldToggleGroupState(node: yfiles.graph.INode): boolean,
		collapseSelection(): void,
		expandSelection(): void,
		enterSelectedGroup(): void,
		collapseGroup(groupNode: yfiles.graph.INode): void,
		shouldRequestMutex(): boolean,
		adjustGroupNodeLocation(collapse: boolean, groupNode: yfiles.graph.INode): void,
		toggleGroupNodeState(groupNode: yfiles.graph.INode): void,
		shouldCollapseGroup(node: yfiles.graph.INode): boolean,
		setGraphControlCore(newControl: yfiles.canvas.GraphControl): void,
		moveTo(direction: yfiles.input.MoveFocusDirection): void,
		extendSelectionTo(direction: yfiles.input.MoveFocusDirection): void,
		moveFocusTo(direction: yfiles.input.MoveFocusDirection): void,
		setCurrentItemForGraphControl(
		graphControl: yfiles.canvas.GraphControl, item: yfiles.model.IModelItem
	): boolean,
		setCurrentItem(item: yfiles.model.IModelItem): void,
		selectItem(
		graphControl: yfiles.canvas.GraphControl, item: yfiles.model.IModelItem, extendSelection: boolean
	): void,
		selectCurrentItem(): void,
		clearSelection(): void,
		shouldBeNavigatedTo(modelItem: yfiles.model.IModelItem): boolean,
		shouldBeSelected(modelItem: yfiles.model.IModelItem): boolean
	}

	declare export interface LabelSnapContext {
		collectInitialLocationSnapLines: boolean,
		collectNodeShapeSnapLines: boolean,
		collectOwnNodeDistanceSnapLines: boolean,
		collectSameOwnerNodeDistanceSnapLines: boolean,
		collectAllNodeDistanceSnapLines: boolean,
		collectEdgePathSnapLines: boolean,
		collectOwnEdgeDistanceSnapLines: boolean,
		collectSameOwnerEdgeDistanceSnapLines: boolean,
		collectAllEdgeDistanceSnapLines: boolean,
		snapNodeLabels: boolean,
		snapEdgeLabels: boolean,
		snapLineExtension: number,
		snapLines: yfiles.collections.IEnumerable<yfiles.input.SnapLine>,
		addSnapLine(snapLine: yfiles.input.SnapLine): void,
		addCollectSnapLinesListener(
		value: (sender: Object, e: yfiles.input.CollectLabelSnapLineEventArgs) => void
	): void,
		removeCollectSnapLinesListener(
		value: (sender: Object, e: yfiles.input.CollectLabelSnapLineEventArgs) => void
	): void,
		onCollectSnapLines(args: yfiles.input.CollectLabelSnapLineEventArgs): void,
		dragInitialized(): void,
		initializeDrag(
		context: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		disableSnapping(): void,
		cleanUp(): void,
		wrapContext(context: yfiles.input.IInputModeContext): yfiles.input.IInputModeContext
	}

	declare export interface CollectLabelSnapLineEventArgs {
		addSnapLine(snapLine: yfiles.input.OrthogonalSnapLine): void
	}

	declare export interface IHighlightInstaller {
		
	}

	declare export interface IFocusIndicatorInstaller {
		
	}

	declare export interface ClickInputMode {
		addClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		removeClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		addLeftClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		removeLeftClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		addRightClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		removeRightClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		addDoubleClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		removeDoubleClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		addLeftDoubleClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		removeLeftDoubleClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		addRightDoubleClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		removeRightDoubleClickedListener(value: (sender: Object, e: yfiles.input.ClickEventArgs) => void): void,
		clickHandlingMode: yfiles.input.ClickHandlingMode,
		validClickHitTestable: yfiles.drawing.IHitTestable,
		leftClick: boolean,
		doubleClick: boolean,
		requestMutextOnClick: boolean,
		activeButtons: yfiles.system.MouseButtons,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		onEnabled(): void,
		installListeners(): void,
		uninstallListeners(): void,
		swallowFocusClick: boolean,
		createClickRecognizer(): yfiles.input.IEventRecognizer,
		isValidClick(src: Object, arg: yfiles.system.EventArgs): boolean,
		createReleaseRecognizer(): yfiles.input.IEventRecognizer,
		isValidRelease(src: Object, arg: yfiles.system.EventArgs): boolean,
		createPressRecognizer(): yfiles.input.IEventRecognizer,
		isValidPress(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		isInvalidPress(eventSource: Object, eventArg: yfiles.system.EventArgs): boolean,
		begin(t: yfiles.support.Transition): void,
		getClickPoint(): yfiles.geometry.PointD,
		end(t: yfiles.support.Transition): void,
		modifierState: yfiles.input.ModifierKeys,
		onClicked(eventArgs: yfiles.input.ClickEventArgs): void,
		onLeftClicked(eventArgs: yfiles.input.ClickEventArgs): void,
		onRightClicked(eventArgs: yfiles.input.ClickEventArgs): void,
		onDoubleClicked(eventArgs: yfiles.input.ClickEventArgs): void,
		onLeftDoubleClicked(eventArgs: yfiles.input.ClickEventArgs): void,
		onRightDoubleClicked(eventArgs: yfiles.input.ClickEventArgs): void,
		preventNextDoubleClick(): void,
		queryAndResetPreventNextDoubleClick(): boolean
	}

	declare export interface IInputMode {
		install(context: yfiles.input.IInputModeContext): void,
		stop(): boolean,
		cancel(): void,
		uninstall(context: yfiles.input.IInputModeContext): void
	}

	declare export interface SimpleGridConstraintProvider<T> {
		gridInfo: yfiles.canvas.GridInfo,
		horizontalGridWidth: number,
		verticalGridWidth: number,
		gridOrigin: yfiles.geometry.PointD,
		snapToGrid(
		context: yfiles.input.IInputModeContext, item: T, point: yfiles.geometry.IMutablePoint, xSnapPolicy: yfiles.input.SnapPolicy, ySnapPolicy: yfiles.input.SnapPolicy
	): boolean
	}

	declare export interface IGridConstraintProvider<T> {
		horizontalGridWidth: number,
		verticalGridWidth: number,
		gridOrigin: yfiles.geometry.PointD,
		snapToGrid(
		context: yfiles.input.IInputModeContext, item: T, point: yfiles.geometry.IMutablePoint, xSnapPolicy: yfiles.input.SnapPolicy, ySnapPolicy: yfiles.input.SnapPolicy
	): boolean
	}

	declare export interface IInputModeContext {
		canvasControl: yfiles.canvas.CanvasControl,
		parentInputMode: yfiles.input.IInputMode,
		getFoldedGraph(): yfiles.graph.IFoldedGraph,
		getGroupedGraph(): yfiles.graph.IGroupedGraph,
		getGraph(): yfiles.graph.IGraph,
		invalidateDisplays(): void,
		getGraphSelection(): yfiles.graph.IGraphSelection
	}

	declare export interface IModelItemCollector {
		add(item: yfiles.model.IModelItem): void
	}

	declare export interface IHandle {
		type: yfiles.input.HandleType,
		cursor: yfiles.canvas.ICanvasCursor
	}

	declare export interface IReshapeHandler {
		bounds: yfiles.geometry.IRectangle,
		initializeReshape(inputModeContext: yfiles.input.IInputModeContext): void,
		handleReshape(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): boolean,
		cancelReshape(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD
	): void,
		reshapeFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalBounds: yfiles.geometry.RectD, newBounds: yfiles.geometry.RectD
	): void
	}

	declare export interface ISizeConstraintProvider<T> {
		getMinimumSize(item: T): yfiles.geometry.SizeD,
		getMaximumSize(item: T): yfiles.geometry.SizeD,
		getMinimumEnclosedArea(item: T): yfiles.geometry.RectD
	}

	declare export interface IHandleProvider {
		getHandles(
		inputModeContext: yfiles.input.IInputModeContext
	): yfiles.collections.ICollection<yfiles.input.IHandle>
	}

	declare export interface ClickEventArgs {
		location: yfiles.geometry.PointD,
		context: yfiles.input.IInputModeContext,
		modifierState: yfiles.input.ModifierKeys,
		handled: boolean,
		mouseButtons: yfiles.system.MouseButtons,
		clickCount: number
	}

	declare export interface IReshapeHandleProvider {
		getAvailableHandles(inputModeContext: yfiles.input.IInputModeContext): yfiles.input.HandlePositions,
		getHandle(
		inputModeContext: yfiles.input.IInputModeContext, position: yfiles.input.HandlePositions
	): yfiles.input.IHandle
	}

	declare export interface AbstractConcurrentInputMode {
		addPreferredCursorChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removePreferredCursorChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		enabled: boolean,
		preferredCursor: yfiles.canvas.ICanvasCursor,
		onPreferredCursorChanged(args: yfiles.system.EventArgs): void,
		onDisabled(): void,
		cancel(): void,
		stop(): boolean,
		onEnabled(): void,
		controller: yfiles.input.ConcurrencyController,
		requestMutex(): void,
		hasMutex(): boolean,
		onMutexObtained(): void,
		releaseMutex(): void,
		onMutexReleased(): void,
		canRequestMutex(): boolean
	}

	declare export interface AbstractInputMode {
		addInitializingListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeInitializingListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addInitializedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeInitializedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		createInputModeEventArgs(): yfiles.input.InputModeEventArgs,
		onCanceled(eventArgs: yfiles.input.InputModeEventArgs): void,
		addCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		onStopped(eventArgs: yfiles.input.InputModeEventArgs): void,
		addStoppedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeStoppedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		installed: boolean,
		canvas: yfiles.canvas.CanvasControl,
		inputModeContext: yfiles.input.IInputModeContext,
		install(context: yfiles.input.IInputModeContext): void,
		onInitializing(eventArgs: yfiles.system.EventArgs): void,
		onInitialized(eventArgs: yfiles.system.EventArgs): void,
		initialize(): void,
		cancel(): void,
		stop(): boolean,
		uninstall(context: yfiles.input.IInputModeContext): void,
		invalidate(): void,
		requestKeyboard(): void,
		getCanvasContext(): yfiles.canvas.ICanvasContext,
		requestPointer(): void,
		releaseKeyboard(): void,
		releasePointer(): void
	}

	declare export interface IConcurrentInputMode {
		enabled: boolean,
		preferredCursor: yfiles.canvas.ICanvasCursor,
		controller: yfiles.input.ConcurrencyController
	}

	declare export interface SimpleInputModeContext {
		canvasControl: yfiles.canvas.CanvasControl,
		parentInputMode: yfiles.input.IInputMode,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface InputFeedbackParameter {
		context: yfiles.input.IInputModeContext,
		location: yfiles.geometry.PointD,
		type: yfiles.input.InputFeedbackParameter.ActionType_Interface,
		tag: Object
	}

	declare export interface SizeConstraintProvider<T> {
		maximumSize: yfiles.geometry.ISize,
		minimumEnclosedArea: yfiles.geometry.IRectangle,
		minimumSize: yfiles.geometry.ISize,
		getMinimumSize(item: T): yfiles.geometry.SizeD,
		getMaximumSize(item: T): yfiles.geometry.SizeD,
		getMinimumEnclosedArea(item: T): yfiles.geometry.RectD
	}

	declare export interface HandleInputMode {
		disableSnappingRecognizer: yfiles.input.IEventRecognizer,
		enableSnappingRecognizer: yfiles.input.IEventRecognizer,
		active: boolean,
		invalidate(): void,
		pressedRecognizer: yfiles.input.IEventRecognizer,
		draggedRecognizer: yfiles.input.IEventRecognizer,
		cancelRecognizer: yfiles.input.IEventRecognizer,
		releasedRecognizer: yfiles.input.IEventRecognizer,
		pressedRecognizerTouch: yfiles.input.IEventRecognizer,
		draggedRecognizerTouch: yfiles.input.IEventRecognizer,
		releasedRecognizerTouch: yfiles.input.IEventRecognizer,
		handles: yfiles.model.ICollectionModel<yfiles.input.IHandle>,
		initializeStateMachine(
		machine: yfiles.support.StateMachine, startState: yfiles.support.State, canceledState: yfiles.support.State, stoppedState: yfiles.support.State, finishedState: yfiles.support.State
	): void,
		cancelDrag(t: yfiles.support.Transition): void,
		install(c: yfiles.input.IInputModeContext): void,
		canvasGroupProvider: yfiles.model.ICanvasGroupProvider<yfiles.input.IInputMode>,
		uninstall(c: yfiles.input.IInputModeContext): void,
		beginDragging(handle: yfiles.input.IHandle): void,
		isHovering(sender: Object, args: yfiles.system.EventArgs): boolean,
		arm(newState: yfiles.support.State, oldState: yfiles.support.State): void,
		disarm(newState: yfiles.support.State, oldState: yfiles.support.State): void,
		snapContext: yfiles.input.SnapContext,
		currentHandle: yfiles.input.IHandle,
		beginDrag(t: yfiles.support.Transition): void,
		createHandleInputModeContext(): yfiles.input.IInputModeContext,
		onDrag(t: yfiles.support.Transition): void,
		endDrag(t: yfiles.support.Transition): void,
		affectedItems: yfiles.collections.IEnumerable<yfiles.model.IModelItem>,
		handleIsHit(
		handle: yfiles.input.IHandle, location: yfiles.geometry.PointD, distance: {
		value: number
	}
	): boolean,
		handleIsHitTouch(
		handle: yfiles.input.IHandle, location: yfiles.geometry.PointD, distance: {
		value: number
	}
	): boolean,
		getClosestHitHandle(location: yfiles.geometry.PointD): yfiles.input.IHandle,
		getClosestHitHandleTouch(location: yfiles.geometry.PointD): yfiles.input.IHandle,
		addHandleForPoint(p: yfiles.geometry.IMutablePoint): yfiles.input.IHandle,
		addHandleForPointWithType(
		p: yfiles.geometry.IMutablePoint, cursor: yfiles.canvas.ICanvasCursor, handleType: yfiles.input.HandleType
	): yfiles.input.IHandle,
		addHandle(handle: yfiles.input.IHandle): void,
		removeHandle(handle: yfiles.input.IHandle): void,
		addDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragFinishedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragStartedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDraggedListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCanceledListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		addDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		removeDragCancelingListener(value: (sender: Object, e: yfiles.input.InputModeEventArgs) => void): void,
		onDragStarting(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragStarted(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragging(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragged(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinished(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragFinishing(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceled(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		onDragCanceling(inputModeEventArgs: yfiles.input.InputModeEventArgs): void,
		createVisual(handle: yfiles.input.IHandle): yfiles.drawing.ArrangeVisual
	}

	declare export interface PopulateContextMenuEventArgs {
		queryLocation: yfiles.geometry.PointD,
		handled: boolean,
		showMenu: boolean
	}

	declare export interface ConcurrencyController {
		canRequestMutex(): boolean,
		requestMutex(mode: yfiles.input.IConcurrentInputMode): yfiles.input.InputMutex,
		release(mutex: yfiles.input.InputMutex): void,
		addMutexRequestedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMutexRequestedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addMutexReleasedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeMutexReleasedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		register(mode: yfiles.input.IConcurrentInputMode): void,
		unregister(mode: yfiles.input.IConcurrentInputMode): void,
		currentOwner: yfiles.input.IConcurrentInputMode,
		enabled: boolean,
		onDisabled(): void,
		onEnabled(): void,
		onMutexRequested(newOwner: yfiles.input.IConcurrentInputMode): void,
		onMutexReleased(oldOwner: yfiles.input.IConcurrentInputMode): void
	}

	declare export interface ContextMenuInputMode {
		addPopulateContextMenuListener(
		value: (sender: Object, e: yfiles.input.PopulateContextMenuEventArgs) => void
	): void,
		removePopulateContextMenuListener(
		value: (sender: Object, e: yfiles.input.PopulateContextMenuEventArgs) => void
	): void,
		validContextMenuLocationHitTestable: yfiles.drawing.IHitTestable,
		menuOpening(cancelEventArgs: yfiles.system.CancelEventArgs): void,
		menuOpeningForQueryLocation(
		cancelEventArgs: yfiles.system.CancelEventArgs, queryLocation: yfiles.geometry.PointD
	): void,
		menuClosed(): void,
		onPopulateContextMenuWithPosition(position: yfiles.geometry.PointD): boolean,
		onPopulateContextMenu(args: yfiles.input.PopulateContextMenuEventArgs): void,
		createContextMenuHandlerInputModeContext(): yfiles.input.IInputModeContext,
		install(canvas: yfiles.input.IInputModeContext): void,
		cancel(): void,
		swallowCloseClick: boolean,
		stop(): boolean,
		onCloseMenu(): void,
		addCloseMenuListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeCloseMenuListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		uninstall(context: yfiles.input.IInputModeContext): void
	}

	declare export interface FocusGuardInputMode {
		guardCursor: yfiles.canvas.ICanvasCursor,
		install(context: yfiles.input.IInputModeContext): void,
		cancel(): void,
		stop(): boolean,
		uninstall(context: yfiles.input.IInputModeContext): void
	}

	declare export interface DropInputMode {
		addDragEnteredListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeDragEnteredListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addDragOverListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeDragOverListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addDragLeftListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeDragLeftListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		addDragDroppedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeDragDroppedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		dragDropEffect: yfiles.system.DragDropEffects,
		validDropHitTestable: yfiles.drawing.IHitTestable,
		lastDragEventArgs: yfiles.system.DragEventArgs,
		mousePosition: yfiles.geometry.IPoint,
		dropLocation: yfiles.geometry.PointD,
		dropData: Object,
		captureMouseInputDuringDrag: boolean,
		cancel(): void,
		install(context: yfiles.input.IInputModeContext): void,
		uninstall(context: yfiles.input.IInputModeContext): void,
		onDisabled(): void,
		onEnabled(): void,
		onDragEntered(e: yfiles.system.DragEventArgs): void,
		onDraggedOver(e: yfiles.system.DragEventArgs): void,
		onDragDropped(e: yfiles.system.DragEventArgs): void,
		onDragLeft(e: yfiles.system.DragEventArgs): void,
		adjustEffect(e: yfiles.system.DragEventArgs): boolean,
		setDragLocation(coordinates: yfiles.geometry.PointD): void
	}

	declare export interface CompositeHandle<T> {
		handles: yfiles.model.ICollectionModel<yfiles.input.IHandle>,
		addHandles(tag: T, handleArray: yfiles.input.IHandle[]): void,
		removeHandles(tag: T): void,
		wrap(
		position: yfiles.input.HandlePositions, handle: yfiles.input.IHandle
	): yfiles.input.IHandle,
		wrapWithFactoryContext(
		position: yfiles.input.HandlePositions, handleFactory: (context: T) => yfiles.input.IHandle, handleFactoryContext: T
	): yfiles.input.IHandle,
		wrapWithInitialHandle(
		position: yfiles.input.HandlePositions, initialHandle: yfiles.input.IHandle, handleFactory: (context: T) => yfiles.input.IHandle, handleFactoryContext: T
	): yfiles.input.IHandle
	}

	declare export interface CollectSnapResultsEventArgs {
		originalLocation: yfiles.geometry.PointD,
		newLocation: yfiles.geometry.PointD,
		delta: yfiles.geometry.PointD,
		addSnapResult(result: yfiles.input.SnapResult): void,
		snapDistance: number
	}

	declare export interface InputMutex {
		controller: yfiles.input.ConcurrencyController,
		mutexOwner: yfiles.input.IConcurrentInputMode,
		release(): void
	}

	declare export interface IDragHandler {
		location: yfiles.geometry.IPoint,
		initializeDrag(inputModeContext: yfiles.input.IInputModeContext): void,
		handleMove(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		cancelDrag(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		inputModeContext: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void
	}

	declare export interface CompositePositionHandler<T> {
		movedItems: yfiles.collections.IEnumerable<T>,
		addPositionHandlerWithTAndLookup(tag: T, lookup: yfiles.support.ILookup): boolean,
		addPositionHandler(tag: T, handler: yfiles.input.IPositionHandler): void,
		getPositionHandler(tag: T): yfiles.input.IPositionHandler,
		addLocatedMovable(
		tag: T, location: yfiles.geometry.IPoint, handler: yfiles.geometry.IMovable
	): void,
		addHandle(tag: T, handle: yfiles.input.IHandle): void,
		getHandle(tag: T): yfiles.input.IHandle,
		addMutablePoint(tag: T, point: yfiles.geometry.IMutablePoint): void,
		addMovable(tag: T, movable: yfiles.geometry.IMovable): void,
		removePositionHandler(tag: T): void,
		setPosition(location: yfiles.geometry.PointD): void,
		location: yfiles.geometry.IPoint,
		initializeDrag(ctx: yfiles.input.IInputModeContext): void,
		handleMove(
		ctx: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): boolean,
		cancelDrag(
		ctx: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD
	): void,
		dragFinished(
		ctx: yfiles.input.IInputModeContext, originalLocation: yfiles.geometry.PointD, newLocation: yfiles.geometry.PointD
	): void,
		clear(): void
	}

			
}

declare module 'InputFeedbackParameter' {
		declare export interface ActionType_Interface {
		
	}

			
}

declare module 'labeling' {
		declare export interface GreedyMISLabeling {
		
	}

	declare export interface SALabeling {
		deterministicMode: boolean,
		maximalDuration: number
	}

	declare export interface MISLabelingAlgorithm {
		graph: yfiles.layout.LayoutGraph,
		conflictGraph: yfiles.algorithms.Graph,
		nodesToBoxes: yfiles.algorithms.INodeMap,
		boxesToNodes: yfiles.algorithms.IMap,
		nodesToID: yfiles.algorithms.INodeMap,
		customProfitModelRatio: number,
		optimizationStrategy: yfiles.labeling.OptimizationStrategy,
		createEdges(): void,
		assignProfit(): yfiles.algorithms.INodeMap,
		foundLabelOverlap(
		lc1: yfiles.layout.LabelCandidate, lc2: yfiles.layout.LabelCandidate, e: yfiles.algorithms.Edge
	): void,
		foundNodeOverlap(
		lc: yfiles.layout.LabelCandidate, n: yfiles.algorithms.Node, nBox: yfiles.algorithms.YRectangle
	): void,
		foundEdgeOverlap(
		lc: yfiles.layout.LabelCandidate, e: yfiles.algorithms.Edge, eSegment: yfiles.algorithms.LineSegment
	): void,
		foundHaloOverlap(
		lc: yfiles.layout.LabelCandidate, n: yfiles.algorithms.Node, haloRect: yfiles.algorithms.YRectangle
	): void
	}

	declare export interface AbstractLabelingAlgorithm {
		profitModel: yfiles.layout.IProfitModel,
		moveInternalNodeLabels: boolean,
		applyPostprocessing: boolean,
		useAlternativeSideHandling: boolean,
		removeNodeOverlaps: boolean,
		removeEdgeOverlaps: boolean,
		placeNodeLabels: boolean,
		placeEdgeLabels: boolean,
		selectedLabelsDpKey: Object,
		autoFlipping: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		checkNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		checkGroupNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		label(gl: yfiles.layout.LayoutGraph): void,
		labelSubset(gl: yfiles.layout.LayoutGraph, key: Object): void,
		labelSubsetLists(
		gl: yfiles.layout.LayoutGraph, nodeLabels: yfiles.algorithms.YList, edgeLabels: yfiles.algorithms.YList
	): void,
		getProfit(l: yfiles.layout.LabelCandidate): number,
		rects: yfiles.algorithms.YList,
		storeRects: boolean,
		edgeGroupOverlapAllowed: boolean
	}

			
}

declare module 'lang' {
		declare export interface Struct {
		equals(other: Object): boolean,
		hashCode(): number
	}

	declare export interface Enum {
		
	}

	declare export interface delegate {
		
	}

	declare export interface Number {
		compareTo(obj: yfiles.lang.Number): number,
		compareToObject(obj: Object): number
	}

	declare export interface String {
		compareTo(obj: yfiles.lang.String): number,
		compareToObject(obj: Object): number
	}

	declare export interface Boolean {
		compareTo(obj: yfiles.lang.Boolean): number,
		compareToObject(obj: Object): number
	}

	declare export interface IComparable<T> {
		compareTo(obj: T): number
	}

	declare export interface IObjectComparable {
		compareToObject(obj: Object): number
	}

	declare export interface Exception {
		message: string
	}

	declare export interface Assembly {
		fullName: string,
		getCustomAttributes(inherit: boolean): yfiles.lang.Attribute[],
		getCustomAttributesOfType(type: yfiles.lang.Class, inherit: boolean): yfiles.lang.Attribute[],
		getType(name: string, throwError: boolean): yfiles.lang.Class,
		isDefined(type: yfiles.lang.Class): boolean
	}

	declare export interface Trait {
		
	}

	declare export interface Attribute {
		
	}

	declare export interface Object_Interface {
		hashCode(): number,
		equals(other: Object): boolean,
		getClass(): yfiles.lang.Class,
		memberwiseClone(): Object,
		toString(): string,
		getOwnProperty(name: string, bound: boolean): Object
	}

	declare export interface Class {
		makeArrayType(rank: number): yfiles.lang.Class,
		getArrayRank(): number,
		getElementType(): yfiles.lang.Class,
		clone(): yfiles.lang.Class,
		isInstance(o: Object): boolean,
		isSubclassOf(c: yfiles.lang.Class): boolean,
		isAssignableFrom(c: yfiles.lang.Class): boolean,
		baseType: yfiles.lang.Class,
		assembly: yfiles.lang.Assembly,
		isClass: boolean,
		isEnum: boolean,
		isInterface: boolean,
		isPrimitive: boolean,
		isPublic: boolean,
		isValueType: boolean,
		newInstance(): Object,
		findInterfaces(
		filter: (obj: yfiles.lang.Class) => boolean, filterCriteria: Object
	): yfiles.lang.Trait[],
		getInterfaces(): yfiles.lang.Trait[],
		findMembers(
		type: yfiles.lang.Class, memberType: yfiles.system.MemberTypes, bindingAttr: yfiles.system.BindingFlags, filter: (obj: yfiles.system.MemberInfo) => boolean, filterCriteria: Object
	): yfiles.system.MemberInfo[],
		getMembers(flags: yfiles.system.BindingFlags): yfiles.system.MemberInfo[],
		getMember(
		memberName: string, flags: yfiles.system.BindingFlags
	): yfiles.system.MemberInfo,
		getConstructors(flags: yfiles.system.BindingFlags): yfiles.system.ConstructorInfo[],
		getFields(flags: yfiles.system.BindingFlags): yfiles.system.FieldInfo[],
		getField(memberName: string, flags: yfiles.system.BindingFlags): yfiles.system.FieldInfo,
		getMethods(flags: yfiles.system.BindingFlags): yfiles.system.MethodInfo[],
		getMethod(
		memberName: string, argTypes: yfiles.lang.Class[], flags: yfiles.system.BindingFlags
	): yfiles.system.MemberInfo,
		getNestedTypes(flags: yfiles.system.BindingFlags): yfiles.lang.Class[],
		getNestedType(memberName: string, flags: yfiles.system.BindingFlags): yfiles.lang.Class,
		getProperties(flags: yfiles.system.BindingFlags): yfiles.system.PropertyInfo[],
		getProperty(
		memberName: string, type: yfiles.lang.Class, indexerTypes: yfiles.lang.Class[], flags: yfiles.system.BindingFlags
	): yfiles.system.PropertyInfo,
		object: Object,
		getCustomAttributes(inherit: boolean): yfiles.lang.Attribute[],
		isDefined(attributeType: yfiles.lang.Class, inherit: boolean): boolean,
		memberType: yfiles.system.MemberTypes,
		name: string,
		fullName: string,
		namespace: string,
		type: string,
		reflectedType: yfiles.lang.Class,
		getCustomAttributesOfType(attributeType: yfiles.lang.Class, inherit: boolean): yfiles.lang.Attribute[],
		getAttributesFor(name: string): yfiles.lang.Attribute[]
	}

	declare export interface Abstract {
		
	}

			
}

declare module 'layout' {
		declare export interface Direction {
		turnCW: yfiles.layout.Direction,
		turnCCW: yfiles.layout.Direction,
		mirror: yfiles.layout.Direction,
		horizontal: boolean,
		vertical: boolean,
		getDirection(): number,
		toString(): string
	}

	declare export interface DiscreteEdgeLabelLayoutModel {
		candidateMask: yfiles.layout.DiscreteEdgeLabelPosition,
		distance: number,
		defaultParameter: Object,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): Object,
		isParameterValid(parameter: Object): boolean,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout, para: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		label: yfiles.layout.IEdgeLabelLayout, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList,
		getLabelPlacementForPosition(
		labelSize: yfiles.algorithms.YDimension, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout, pos: yfiles.layout.DiscreteEdgeLabelPosition
	): yfiles.algorithms.YOrientedRectangle
	}

	declare export interface DiscreteNodeLabelLayoutModel {
		candidateMask: yfiles.layout.DiscreteNodeLabelPosition,
		distance: number,
		defaultParameter: Object,
		isParameterValid(parameter: Object): boolean,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, nodeLayout: yfiles.layout.INodeLayout, param: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		nl: yfiles.layout.INodeLabelLayout, nodeLayout: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList,
		getLabelPlacementForPosition(
		labelSize: yfiles.algorithms.YDimension, nodeLayout: yfiles.layout.INodeLayout, pos: yfiles.layout.DiscreteNodeLabelPosition
	): yfiles.algorithms.YOrientedRectangle,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, nodeLayout: yfiles.layout.INodeLayout
	): Object
	}

	declare export interface DefaultEdgeLayout {
		pointCount(): number,
		getPoint(index: number): yfiles.algorithms.YPoint,
		setPoint(index: number, x: number, y: number): void,
		addPoint(x: number, y: number): void,
		clearPoints(): void,
		sourcePoint: yfiles.algorithms.YPoint,
		targetPoint: yfiles.algorithms.YPoint
	}

	declare export interface CopiedLayoutGraph {
		createEdge(origEdge: Object): yfiles.algorithms.Edge,
		createGraphCopyFactory(): yfiles.algorithms.GraphCopier.ICopyFactory,
		createNodeWithOriginalNode(origNode: Object): yfiles.algorithms.Node,
		syncStructure(): void,
		getLayoutForNode(v: yfiles.algorithms.Node): yfiles.layout.INodeLayout,
		getLayoutForEdge(e: yfiles.algorithms.Edge): yfiles.layout.IEdgeLayout,
		getLabelLayoutForNode(v: yfiles.algorithms.Node): yfiles.layout.INodeLabelLayout[],
		getLabelLayoutForEdge(e: yfiles.algorithms.Edge): yfiles.layout.IEdgeLabelLayout[],
		getFeatureNode(labelLayout: yfiles.layout.INodeLabelLayout): yfiles.algorithms.Node,
		getFeatureEdge(labelLayout: yfiles.layout.IEdgeLabelLayout): yfiles.algorithms.Edge,
		layoutForOriginalGraph: yfiles.layout.IGraphLayout,
		commitLayoutToOriginalGraph(): void,
		getOriginalNode(v: yfiles.algorithms.Node): Object,
		getOriginalEdge(e: yfiles.algorithms.Edge): Object,
		getCopiedNode(v: Object): yfiles.algorithms.Node,
		getCopiedEdge(e: Object): yfiles.algorithms.Edge,
		originalGraph: yfiles.algorithms.IGraphInterface,
		originalLayout: yfiles.layout.IGraphLayout,
		createLabelFactory(): yfiles.layout.ILabelLayoutFactory
	}

	declare export interface CompositeLayouter {
		prependStage(stage: yfiles.layout.ILayoutStage): void,
		layoutStages: yfiles.algorithms.IList,
		appendStage(stage: yfiles.layout.ILayoutStage): void,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface DefaultNodeLayout {
		setLocation(x: number, y: number): void,
		setCenter(x: number, y: number): void,
		setSize(width: number, height: number): void,
		height: number,
		width: number,
		x: number,
		y: number
	}

	declare export interface DefaultLayoutGraph {
		nodeLabelMap: yfiles.algorithms.INodeMap,
		edgeLabelMap: yfiles.algorithms.IEdgeMap,
		nodeLabelFeatureMap: yfiles.algorithms.IMap,
		edgeLabelFeatureMap: yfiles.algorithms.IMap,
		createGraphCopyFactory(): yfiles.algorithms.GraphCopier.ICopyFactory,
		getLayoutForNode(v: yfiles.algorithms.Node): yfiles.layout.INodeLayout,
		setNodeLayout(v: yfiles.algorithms.Node, layout: yfiles.layout.INodeLayout): void,
		setEdgeLayout(e: yfiles.algorithms.Edge, layout: yfiles.layout.IEdgeLayout): void,
		getLayoutForEdge(e: yfiles.algorithms.Edge): yfiles.layout.IEdgeLayout,
		getLabelLayoutForNode(node: yfiles.algorithms.Node): yfiles.layout.INodeLabelLayout[],
		setNodeLabelLayout(node: yfiles.algorithms.Node, layout: yfiles.layout.INodeLabelLayout): void,
		setNodeLabelLayoutMultiple(node: yfiles.algorithms.Node, llayout: yfiles.layout.INodeLabelLayout[]): void,
		setEdgeLabelLayout(edge: yfiles.algorithms.Edge, layout: yfiles.layout.IEdgeLabelLayout[]): void,
		getLabelLayoutForEdge(edge: yfiles.algorithms.Edge): yfiles.layout.IEdgeLabelLayout[],
		getFeatureNode(labelLayout: yfiles.layout.INodeLabelLayout): yfiles.algorithms.Node,
		getFeatureEdge(labelLayout: yfiles.layout.IEdgeLabelLayout): yfiles.algorithms.Edge,
		createEdgeLayout(): yfiles.layout.IEdgeLayout,
		createNodeLayout(): yfiles.layout.INodeLayout,
		createLabelFactory(): yfiles.layout.ILabelLayoutFactory
	}

	declare export interface DefaultGraphLayout {
		setNodeLayout(node: Object, layout: yfiles.layout.INodeLayout): void,
		setEdgeLayout(edge: Object, layout: yfiles.layout.IEdgeLayout): void,
		getEdgeLayout(edge: Object): yfiles.layout.IEdgeLayout,
		getNodeLayout(node: Object): yfiles.layout.INodeLayout,
		setNodeLabelLayout(node: Object, layout: yfiles.layout.INodeLabelLayout[]): void,
		getNodeLabelLayout(node: Object): yfiles.layout.INodeLabelLayout[],
		setEdgeLabelLayout(edge: Object, layout: yfiles.layout.IEdgeLabelLayout[]): void,
		getEdgeLabelLayout(edge: Object): yfiles.layout.IEdgeLabelLayout[],
		getBoundingBox(): yfiles.algorithms.Rectangle
	}

	declare export interface FreeNodeLabelLayoutModel {
		defaultParameter: Object,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, nodeLayout: yfiles.layout.INodeLayout, param: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		nl: yfiles.layout.INodeLabelLayout, nodeLayout: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, nodeLayout: yfiles.layout.INodeLayout
	): Object
	}

	declare export interface EdgeLabelOrientationSupport {
		replaceAmbiguousLabelDescriptors(graph: yfiles.algorithms.Graph): void,
		resetAmbiguousLabelDescriptors(graph: yfiles.algorithms.Graph): void,
		preProcessLabel(
		graph: yfiles.algorithms.Graph, label: yfiles.layout.LabelLayoutData, segmentDirection: yfiles.layout.Direction
	): void,
		postProcessLabel(graph: yfiles.algorithms.Graph, label: yfiles.layout.LabelLayoutData): void
	}

	declare export interface EdgeLabelLayoutImpl {
		labelModel: yfiles.layout.IEdgeLabelModel,
		edgeLabelModel: yfiles.layout.IEdgeLabelModel,
		preferredPlacement: yfiles.layout.LabelPlacements,
		preferredPlacementDescriptor: yfiles.layout.PreferredPlacementDescriptor
	}

	declare export interface EdgeLabelCandidate {
		
	}

	declare export interface FreeEdgeLabelLayoutModel {
		defaultParameter: Object,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): Object,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout, param: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		label: yfiles.layout.IEdgeLabelLayout, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList
	}

	declare export interface FixNodeLayoutStage {
		fixPointPolicy: yfiles.layout.FixPointPolicy,
		includingEdges: boolean,
		includingLabels: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		calculateFixPointForNodes(
		graph: yfiles.layout.LayoutGraph, fixed: yfiles.algorithms.NodeList
	): yfiles.algorithms.YPoint,
		calculateFixPoint(bounds: yfiles.algorithms.Rectangle2D): yfiles.algorithms.YPoint,
		calculateBounds(
		graph: yfiles.layout.LayoutGraph, fixed: yfiles.algorithms.NodeList
	): yfiles.algorithms.Rectangle2D
	}

	declare export interface EdgeReversalStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		reverseEdges(graph: yfiles.layout.LayoutGraph): void,
		reverseEdge(graph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge): void
	}

	declare export interface GraphLayoutLineWrapper {
		edgeSpacing: number,
		columnMode: boolean,
		spacing: number,
		mirror: boolean,
		fixedWidthLineBreaks: boolean,
		targetRatio: number,
		fixedWidth: number,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface NormalizingGraphElementOrderStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface MinNodeSizeStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface CompositeLayoutStage {
		prependStage(stage: yfiles.layout.ILayoutStage): void,
		layoutStages: yfiles.algorithms.IList,
		appendStage(stage: yfiles.layout.ILayoutStage): void,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface DefaultNodeLabelLayout {
		box: yfiles.algorithms.YRectangle,
		orientedBox: yfiles.algorithms.YOrientedRectangle,
		labelModel: yfiles.layout.INodeLabelModel,
		modelParameter: Object,
		node: yfiles.algorithms.Node
	}

	declare export interface BendConverter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		prepare(graph: yfiles.layout.LayoutGraph): void,
		unprepare(graph: yfiles.layout.LayoutGraph): void,
		coreLayouter: yfiles.layout.ILayouter,
		adoptEdgeGroups: boolean,
		adoptPortConstraints: boolean,
		adoptSelection: boolean,
		addedPathForEdge(
		graph: yfiles.layout.LayoutGraph, e: yfiles.algorithms.Edge, dummyNodes: yfiles.algorithms.NodeList
	): void,
		selectedEdgesDpKey: Object
	}

	declare export interface EdgeOppositeNodeLabelLayoutModel {
		defaultParameter: Object,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, nodeLayout: yfiles.layout.INodeLayout, param: Object
	): yfiles.algorithms.YOrientedRectangle,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, nodeLayout: yfiles.layout.INodeLayout
	): Object,
		getLabelCandidates(
		nl: yfiles.layout.INodeLabelLayout, nodeLayout: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList
	}

	declare export interface LabelLayoutDataRefinement {
		internalLabelingAlgorithm: yfiles.labeling.AbstractLabelingAlgorithm,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface PortCalculator {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		calculatePorts(graph: yfiles.layout.LayoutGraph): void,
		eps: number,
		equalsEps(x1: number, y1: number, x2: number, y2: number): boolean
	}

	declare export interface AbstractLayoutStage {
		coreLayouter: yfiles.layout.ILayouter,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface BufferedLayouter {
		calcLayout(layoutGraph: yfiles.layout.LayoutGraph): yfiles.layout.IGraphLayout,
		calcLayoutWithGraphAndLayout(
		graph: yfiles.algorithms.IGraphInterface, layout: yfiles.layout.IGraphLayout
	): yfiles.layout.IGraphLayout,
		doLayout(layoutGraph: yfiles.layout.LayoutGraph): void,
		doLayoutWithGraphAndLayout(
		graph: yfiles.algorithms.IGraphInterface, layout: yfiles.layout.IGraphLayout
	): void,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean
	}

	declare export interface ComponentLayouter {
		setPreferredLayoutSize(width: number, height: number): void,
		preferredLayoutSize: yfiles.algorithms.YDimension,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		findGraphComponents(
		graph: yfiles.layout.LayoutGraph, compNumber: yfiles.algorithms.INodeMap
	): number,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		calcBoundingBox(graph: yfiles.layout.LayoutGraph): yfiles.algorithms.Rectangle2D,
		considerLabels: boolean,
		arrangeComponents(
		graph: yfiles.layout.LayoutGraph, nodes: yfiles.algorithms.NodeList[], edges: yfiles.algorithms.EdgeList[], bbox: yfiles.algorithms.YRectangle[], boxes: yfiles.algorithms.Rectangle2D[]
	): void,
		componentArrangement: boolean,
		setOrigin(
		graph: yfiles.layout.LayoutGraph, nl: yfiles.algorithms.NodeList, el: yfiles.algorithms.EdgeList, org: yfiles.algorithms.YPoint, r: yfiles.algorithms.YRectangle
	): void,
		gridSpacing: number,
		componentSpacing: number,
		groupingActive: boolean,
		style: yfiles.layout.ComponentArrangementStyles,
		arrangeFields(
		graph: yfiles.layout.LayoutGraph, nodes: yfiles.algorithms.NodeList[], edges: yfiles.algorithms.EdgeList[], bbox: yfiles.algorithms.YRectangle[], boxes: yfiles.algorithms.Rectangle2D[], circular: boolean, fill: boolean, fromSketch: boolean
	): void
	}

	declare export interface CanonicMultiStageLayouter {
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		checkNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		checkGroupNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		prependStage(stage: yfiles.layout.ILayoutStage): void,
		appendStage(stage: yfiles.layout.ILayoutStage): void,
		removeStage(stage: yfiles.layout.ILayoutStage): void,
		labelLayouter: yfiles.layout.ILayoutStage,
		selfLoopLayouter: yfiles.layout.ILayoutStage,
		parallelEdgeLayouter: yfiles.layout.ILayoutStage,
		componentLayouter: yfiles.layout.ILayoutStage,
		subgraphLayouter: yfiles.layout.ILayoutStage,
		groupNodeHider: yfiles.layout.ILayoutStage,
		orientationLayouter: yfiles.layout.ILayoutStage,
		orientationLayouterEnabled: boolean,
		layoutOrientation: yfiles.layout.LayoutOrientation,
		selfLoopLayouterEnabled: boolean,
		labelLayouterEnabled: boolean,
		hideGroupNodes: boolean,
		componentLayouterEnabled: boolean,
		parallelEdgeLayouterEnabled: boolean,
		subgraphLayouterEnabled: boolean,
		enableOnlyCore(): void,
		doLayout(layoutGraph: yfiles.layout.LayoutGraph): void,
		doLayoutWithGraphAndLayout(
		graph: yfiles.algorithms.IGraphInterface, layout: yfiles.layout.IGraphLayout
	): void,
		calcLayout(layoutGraph: yfiles.layout.LayoutGraph): yfiles.layout.IGraphLayout,
		calcLayoutWithGraphAndLayout(
		graph: yfiles.algorithms.IGraphInterface, layout: yfiles.layout.IGraphLayout
	): yfiles.layout.IGraphLayout,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean
	}

	declare export interface SequentialLayouter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		appendLayouter(layouter: yfiles.layout.ILayouter): void,
		appendLayouters(layouters: yfiles.collections.ICollection<yfiles.layout.ILayouter>): void,
		layouters: yfiles.collections.IList<yfiles.layout.ILayouter>,
		clearLayouterChain(): void
	}

	declare export interface PortConstraintEnforcementStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface IntersectionCalculatorKeys {
		
	}

	declare export interface IIntersectionCalculator {
		calculateIntersectionPoint(
		nl: yfiles.layout.INodeLayout, xOffset: number, yOffset: number, dx: number, dy: number
	): yfiles.algorithms.YPoint
	}

	declare export interface ILabelLayout {
		box: yfiles.algorithms.YRectangle,
		orientedBox: yfiles.algorithms.YOrientedRectangle,
		modelParameter: Object
	}

	declare export interface ILayouter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		applyLayout(graph: yfiles.graph.IGraph): void
	}

	declare export interface IGraphLayout {
		getNodeLayout(node: Object): yfiles.layout.INodeLayout,
		getEdgeLayout(edge: Object): yfiles.layout.IEdgeLayout,
		getNodeLabelLayout(node: Object): yfiles.layout.INodeLabelLayout[],
		getEdgeLabelLayout(edge: Object): yfiles.layout.IEdgeLabelLayout[],
		getBoundingBox(): yfiles.algorithms.Rectangle
	}

	declare export interface IEdgeLabelLayout {
		labelModel: yfiles.layout.IEdgeLabelModel,
		preferredPlacementDescriptor: yfiles.layout.PreferredPlacementDescriptor
	}

	declare export interface IEdgeLayout {
		pointCount(): number,
		getPoint(index: number): yfiles.algorithms.YPoint,
		setPoint(index: number, x: number, y: number): void,
		addPoint(x: number, y: number): void,
		clearPoints(): void,
		sourcePoint: yfiles.algorithms.YPoint,
		targetPoint: yfiles.algorithms.YPoint
	}

	declare export interface IEdgeLabelModel {
		defaultParameter: Object,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, edgeLayout: yfiles.layout.IEdgeLayout, sourceLayout: yfiles.layout.INodeLayout, targetLayout: yfiles.layout.INodeLayout, param: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		labelLayout: yfiles.layout.IEdgeLabelLayout, edgeLayout: yfiles.layout.IEdgeLayout, sourceLayout: yfiles.layout.INodeLayout, targetLayout: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, edgeLayout: yfiles.layout.IEdgeLayout, sourceLayout: yfiles.layout.INodeLayout, targetLayout: yfiles.layout.INodeLayout
	): Object
	}

	declare export interface IProfitModel {
		getProfit(candidate: yfiles.layout.LabelCandidate): number
	}

	declare export interface LabelCandidate {
		customProfit: number,
		modelParameter: Object,
		location: yfiles.algorithms.YPoint,
		size: yfiles.algorithms.YDimension,
		x: number,
		y: number,
		width: number,
		height: number,
		boundingBox: yfiles.algorithms.YRectangle,
		box: yfiles.algorithms.YOrientedRectangle,
		owner: yfiles.layout.ILabelLayout,
		internal: boolean,
		propagate(): void,
		nodeOverlapPenalty: number,
		edgeOverlapPenalty: number,
		overlapPenalty: number,
		parameter: Object,
		propagated: boolean,
		toString(): string
	}

	declare export interface KeepStrongPortConstraintsStage {
		keepCalculatedPorts: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface INodeLayout {
		x: number,
		y: number,
		width: number,
		height: number,
		setLocation(x: number, y: number): void,
		setSize(width: number, height: number): void
	}

	declare export interface ILayoutStage {
		coreLayouter: yfiles.layout.ILayouter
	}

	declare export interface LayouterKeys {
		
	}

	declare export interface INodeLabelLayout {
		labelModel: yfiles.layout.INodeLabelModel
	}

	declare export interface INodeLabelModel {
		defaultParameter: Object,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, nodeLayout: yfiles.layout.INodeLayout, param: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		nl: yfiles.layout.INodeLabelLayout, nodeLayout: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, nodeLayout: yfiles.layout.INodeLayout
	): Object
	}

	declare export interface RowDescriptor {
		index: number,
		compareToObject(o: Object): number,
		minimumHeight: number,
		topInset: number,
		bottomInset: number,
		computedHeight: number,
		originalPosition: number,
		originalHeight: number,
		computedPosition: number,
		tightness: number,
		indexFixed: boolean
	}

	declare export interface PartitionGrid {
		optimizeColumnOrder: boolean,
		optimizeRowOrder: boolean,
		createColumnSpanId(columnIndex: number): yfiles.layout.PartitionCellId,
		createCellSpanId(
		fromRowIndex: number, fromColIndex: number, toRowIndex: number, toColIndex: number
	): yfiles.layout.PartitionCellId,
		createCellSpanIdForDescriptorLists(
		rowList: yfiles.algorithms.ICollection, columnList: yfiles.algorithms.ICollection
	): yfiles.layout.PartitionCellId,
		createCellSpanIdForDescriptors(
		fromRow: yfiles.layout.RowDescriptor, fromCol: yfiles.layout.ColumnDescriptor, toRow: yfiles.layout.RowDescriptor, toCol: yfiles.layout.ColumnDescriptor
	): yfiles.layout.PartitionCellId,
		createRowSpanId(rowIndex: number): yfiles.layout.PartitionCellId,
		addRow(): yfiles.layout.RowDescriptor,
		addColumn(): yfiles.layout.ColumnDescriptor,
		getRow(index: number): yfiles.layout.RowDescriptor,
		getColumn(index: number): yfiles.layout.ColumnDescriptor,
		rows: yfiles.algorithms.YList,
		columns: yfiles.algorithms.YList,
		createCellIdForDescriptors(
		rd: yfiles.layout.RowDescriptor, cd: yfiles.layout.ColumnDescriptor
	): yfiles.layout.PartitionCellId,
		createCellId(rowIndex: number, columnIndex: number): yfiles.layout.PartitionCellId,
		finalizeOrientationChange(
		orientationLayouter: yfiles.layout.OrientationLayouter, transformer: yfiles.layout.OrientationLayouter.Transformer
	): void,
		prepareOrientationChange(
		orientationLayouter: yfiles.layout.OrientationLayouter, transformer: yfiles.layout.OrientationLayouter.Transformer
	): void
	}

	declare export interface GroupingKeys {
		
	}

	declare export interface GraphGrouping {
		init(): void,
		layoutGraph: yfiles.layout.LayoutGraph,
		graph: yfiles.algorithms.Graph,
		createInfoMap(graph: yfiles.algorithms.Graph): yfiles.algorithms.INodeMap,
		disposeInfoMap(graph: yfiles.algorithms.Graph, infoMap: yfiles.algorithms.INodeMap): void,
		getParent(node: yfiles.algorithms.Node): yfiles.algorithms.Node,
		root: yfiles.algorithms.Node,
		getChildren(parent: yfiles.algorithms.Node): yfiles.algorithms.NodeList,
		getDescendants(parent: yfiles.algorithms.Node): yfiles.algorithms.NodeList,
		isGroupNode(node: yfiles.algorithms.Node): boolean,
		hasChildren(v: yfiles.algorithms.Node): boolean,
		isNormalEdge(e: yfiles.algorithms.Edge): boolean,
		getEdgesGoingIn(groupNode: yfiles.algorithms.Node): yfiles.algorithms.EdgeList,
		getEdgesGoingOut(groupNode: yfiles.algorithms.Node): yfiles.algorithms.EdgeList,
		getRepresentative(
		node: yfiles.algorithms.Node, inGroup: yfiles.algorithms.Node
	): yfiles.algorithms.Node,
		dispose(): void,
		getNearestCommonAncestor(n1: yfiles.algorithms.Node, n2: yfiles.algorithms.Node): yfiles.algorithms.Node
	}

	declare export interface PartitionCellId {
		cells: yfiles.algorithms.ICollection,
		isSpanning: boolean,
		row: yfiles.layout.RowDescriptor,
		column: yfiles.layout.ColumnDescriptor,
		equals(o: Object): boolean,
		hashCode(): number
	}

	declare export interface ColumnDescriptor {
		index: number,
		compareToObject(o: Object): number,
		minimumWidth: number,
		leftInset: number,
		rightInset: number,
		computedWidth: number,
		originalWidth: number,
		originalPosition: number,
		computedPosition: number,
		tightness: number,
		indexFixed: boolean
	}

	declare export interface RecursiveGroupLayouter {
		considerSketch: boolean,
		autoAssignPortCandidates: boolean,
		replacePortConstraints: boolean,
		considerEmptyGroups: boolean,
		interEdgeRouter: yfiles.layout.ILayouter,
		interEdgesDpKey: Object,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		routeInterEdges(graph: yfiles.layout.LayoutGraph, interEdges: yfiles.algorithms.EdgeList): void,
		groupBoundsCalculator: yfiles.layout.IGroupBoundsCalculator
	}

	declare export interface ParentEdgeAugmentationStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface IGroupBoundsCalculator {
		calculateBounds(
		graph: yfiles.layout.LayoutGraph, groupNode: yfiles.algorithms.Node, children: yfiles.algorithms.NodeList
	): yfiles.algorithms.Rectangle2D
	}

	declare export interface GroupNodeHider {
		hidingEmptyGroupNodes: boolean,
		hideGroupNodes(graph: yfiles.layout.LayoutGraph): void,
		unhideGroupNodes(graph: yfiles.layout.LayoutGraph): void,
		groupBoundsCalculator: yfiles.layout.IGroupBoundsCalculator,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface InsetsGroupBoundsCalculator {
		considerNodeLabelsEnabled: boolean,
		considerEdgeLabels: boolean,
		considerNodeHalos: boolean,
		calculateBounds(
		graph: yfiles.layout.LayoutGraph, groupNode: yfiles.algorithms.Node, children: yfiles.algorithms.NodeList
	): yfiles.algorithms.Rectangle2D,
		createEnlargedBounds(
		graph: yfiles.layout.LayoutGraph, groupNode: yfiles.algorithms.Node, children: yfiles.algorithms.NodeList, bounds: yfiles.algorithms.Rectangle2D
	): yfiles.algorithms.Rectangle2D,
		getNodeBounds(
		graph: yfiles.layout.LayoutGraph, nodes: yfiles.algorithms.NodeList
	): yfiles.algorithms.Rectangle2D,
		defaultInsets: yfiles.algorithms.Insets,
		groupNodeInsetsDpKey: Object
	}

	declare export interface MinimumSizeGroupBoundsCalculator {
		calculateBounds(
		graph: yfiles.layout.LayoutGraph, groupNode: yfiles.algorithms.Node, children: yfiles.algorithms.NodeList
	): yfiles.algorithms.Rectangle2D,
		xAlignment: number,
		yAlignment: number,
		minimumNodeSizeDpKey: Object,
		defaultMinimumNodeSize: yfiles.algorithms.YDimension
	}

	declare export interface IsolatedGroupComponentLayouter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		findIsolatedGraphComponents(
		graph: yfiles.layout.LayoutGraph, compNumber: yfiles.algorithms.INodeMap
	): number,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface PortConstraint {
		strong: boolean,
		side: yfiles.layout.PortSide,
		atNorth: boolean,
		atSouth: boolean,
		atEast: boolean,
		atWest: boolean,
		atAnySide: boolean,
		hashCode(): number,
		equals(other: Object): boolean,
		toString(): string
	}

	declare export interface SubgraphLayouter {
		subgraphNodesDpKey: Object,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean
	}

	declare export interface Swimlanes {
		
	}

	declare export interface GraphTransformer {
		coreLayouter: yfiles.layout.ILayouter,
		componentLayouterEnabled: boolean,
		operation: yfiles.layout.OperationType,
		rotationAngle: number,
		bestFitRotationEnabled: boolean,
		setPreferedLayoutSize(width: number, height: number): void,
		scaleNodeSize: boolean,
		scaleFactor: number,
		setScaleFactors(xFactor: number, yFactor: number): void,
		scaleFactorY: number,
		scaleFactorX: number,
		translateX: number,
		translateY: number,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface ILabelLayoutFactory {
		graph: yfiles.layout.LayoutGraph,
		addNodeLabelLayout(
		node: yfiles.algorithms.Node, labelLayout: yfiles.layout.INodeLabelLayout
	): void,
		removeNodeLabelLayout(
		node: yfiles.algorithms.Node, labelLayout: yfiles.layout.INodeLabelLayout
	): void,
		createNodeLabelLayout(
		node: yfiles.algorithms.Node, orientedBox: yfiles.algorithms.YOrientedRectangle
	): yfiles.layout.INodeLabelLayout,
		createNodeLabelLayoutWithNodeLayoutAndModel(
		node: yfiles.algorithms.Node, orientedBox: yfiles.algorithms.YOrientedRectangle, model: yfiles.layout.INodeLabelModel
	): yfiles.layout.INodeLabelLayout,
		addEdgeLabelLayout(
		edge: yfiles.algorithms.Edge, labelLayout: yfiles.layout.IEdgeLabelLayout
	): void,
		removeEdgeLabelLayout(
		edge: yfiles.algorithms.Edge, labelLayout: yfiles.layout.IEdgeLabelLayout
	): void,
		createEdgeLabelLayout(
		edge: yfiles.algorithms.Edge, orientedBox: yfiles.algorithms.YOrientedRectangle
	): yfiles.layout.IEdgeLabelLayout,
		createEdgeLabelLayoutWithEdgeLayoutModelAndPreferredPlacement(
		edge: yfiles.algorithms.Edge, orientedBox: yfiles.algorithms.YOrientedRectangle, model: yfiles.layout.IEdgeLabelModel, descriptor: yfiles.layout.PreferredPlacementDescriptor
	): yfiles.layout.IEdgeLabelLayout
	}

	declare export interface PortCandidate {
		isInDirection(directionMask: yfiles.layout.PortDirection): boolean,
		direction: yfiles.layout.PortDirection,
		fixed: boolean,
		xOffset: number,
		yOffset: number,
		hashCode(): number,
		toPortConstraint(): yfiles.layout.PortConstraint,
		toPortConstraintForLayoutOrientation(
		layoutOrientation: yfiles.layout.LayoutOrientation
	): yfiles.layout.PortConstraint,
		equals(other: Object): boolean,
		cost: number,
		getDirectionForLayoutOrientation(
		layoutOrientation: yfiles.layout.LayoutOrientation
	): yfiles.layout.PortDirection,
		getXOffsetForLayoutOrientationWithMask(
		layoutOrientation: yfiles.layout.LayoutOrientation, mirrorMask: yfiles.layout.MirrorMask
	): number,
		getYOffsetForLayoutOrientationWithMask(
		layoutOrientation: yfiles.layout.LayoutOrientation, mirrorMask: yfiles.layout.MirrorMask
	): number,
		getXOffsetForLayoutOrientation(layoutOrientation: yfiles.layout.LayoutOrientation): number,
		getYOffsetForLayoutOrientation(layoutOrientation: yfiles.layout.LayoutOrientation): number,
		toString(): string
	}

	declare export interface GraphZoomer {
		addRadialZoom(
		center: yfiles.algorithms.YPoint, innerRadius: number, outerRadius: number, zoomFactor: number
	): void,
		addRectangularZoom(
		center: yfiles.algorithms.YPoint, innerRadius: number, outerRadius: number, ratio: number, zoomFactor: number
	): void,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface PortCandidateSet {
		add(p: yfiles.layout.PortCandidate): void,
		addWithCapacity(p: yfiles.layout.PortCandidate, connections: number): void,
		connectionCount: number,
		remove(entry: yfiles.layout.PortCandidateSet.IEntry): void,
		entries: yfiles.algorithms.IIterator,
		createMatcher(): yfiles.layout.PortCandidateSet.ICandidateMatcher,
		getCost(
		entry: yfiles.layout.PortCandidateSet.IEntry, edge: yfiles.algorithms.Edge, source: boolean, xOffset: number, yOffset: number
	): number,
		getPriority(
		entry: yfiles.layout.PortCandidateSet.IEntry, edge: yfiles.algorithms.Edge, source: boolean
	): number
	}

	declare export interface SliderEdgeLabelLayoutModel {
		mode: yfiles.layout.SliderMode,
		setDistances(minDistance: number, maxDistance: number): void,
		maximumDistance: number,
		minimumDistance: number,
		density: number,
		nodeBorderDistance: number,
		defaultParameter: Object,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout, para: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		label: yfiles.layout.IEdgeLabelLayout, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): Object,
		getOffsetVec(
		dx: number, dy: number, width: number, height: number, labelPosition: yfiles.layout.SliderRatio
	): yfiles.algorithms.YVector
	}

	declare export interface RemoveColinearBendsStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		scale: number,
		removeStraightOnly: boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface PortConstraintKeys {
		
	}

	declare export interface PreferredPlacementDescriptor {
		placeAlongEdge: yfiles.layout.LabelPlacements,
		sideOfEdge: yfiles.layout.LabelPlacements,
		sideReference: yfiles.layout.LabelSideReference,
		angle: number,
		angleReference: yfiles.layout.LabelAngleReference,
		angleRotationOnRightSide: yfiles.layout.LabelAngleOnRightSideRotation,
		angleOffsetOnRightSide: yfiles.layout.LabelAngleOnRightSideOffset,
		distanceToEdge: number,
		isAtSource: boolean,
		isAtCenter: boolean,
		isAtTarget: boolean,
		isLeftOfEdge: boolean,
		isOnEdge: boolean,
		isRightOfEdge: boolean,
		isAngleAbsolute: boolean,
		isAngleRelativeToEdgeFlow: boolean,
		isAngleOnRightSideCoRotating: boolean,
		isAngleOnRightSideCounterRotating: boolean,
		isAngleOffsetOnRightSideZero: boolean,
		isAngleOffsetOnRightSide180: boolean,
		isSideRelativeToEdgeFlow: boolean,
		isSideAbsoluteWithLeftInNorth: boolean,
		isSideAbsoluteWithRightInNorth: boolean,
		toString(): string,
		equals(o: Object): boolean,
		hashCode(): number,
		isFrozen(): boolean,
		freeze(): void
	}

	declare export interface RotatedDiscreteEdgeLabelLayoutModel {
		candidateMask: yfiles.layout.RotatedDiscreteEdgeLabelPosition,
		positionRelativeToSegment: boolean,
		autoRotationEnabled: boolean,
		autoFlipping: boolean,
		angle: number,
		distance: number,
		defaultParameter: Object,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): Object,
		isParameterValid(parameter: Object): boolean,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout, param: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		label: yfiles.layout.IEdgeLabelLayout, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList,
		getLabelPlacementAtPosition(
		labelSize: yfiles.algorithms.YDimension, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout, pos: yfiles.layout.DiscreteEdgeLabelPosition
	): yfiles.algorithms.YOrientedRectangle
	}

	declare export interface SelfLoopLayouter {
		cornerApproximationPointsCount: number,
		lineDistance: number,
		smartSelfloopPlacement: boolean,
		layoutStyle: yfiles.layout.SelfloopStyle,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		layoutSelfLoops(graph: yfiles.layout.LayoutGraph): void,
		keepAllSelfloopLayouts: boolean
	}

	declare export interface PortConstraintConfigurator {
		createPortConstraintFromSketchForEdge(
		graph: yfiles.layout.LayoutGraph, e: yfiles.algorithms.Edge, source: boolean, strong: boolean
	): yfiles.layout.PortConstraint,
		createPortConstraintsFromSketchForGraph(
		graph: yfiles.layout.LayoutGraph, spcMap: yfiles.algorithms.IEdgeMap, tpcMap: yfiles.algorithms.IEdgeMap
	): void,
		createPortConstraintsFromSketchForEdges(
		graph: yfiles.layout.LayoutGraph, ec: yfiles.algorithms.IEdgeCursor, spcMap: yfiles.algorithms.IEdgeMap, strongSP: boolean, tpcMap: yfiles.algorithms.IEdgeMap, strongTP: boolean
	): void
	}

	declare export interface RotatedSliderEdgeLabelLayoutModel {
		mode: yfiles.layout.RotatedSliderMode,
		distanceRelativeToEdge: boolean,
		distance: number,
		autoRotationEnabled: boolean,
		autoFlipping: boolean,
		angle: number,
		defaultParameter: Object,
		getLabelPlacement(
		labelSize: yfiles.algorithms.YDimension, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout, para: Object
	): yfiles.algorithms.YOrientedRectangle,
		getLabelCandidates(
		label: yfiles.layout.IEdgeLabelLayout, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): yfiles.algorithms.YList,
		createModelParameter(
		labelBounds: yfiles.algorithms.YOrientedRectangle, edgeLayout: yfiles.layout.IEdgeLayout, sourceNode: yfiles.layout.INodeLayout, targetNode: yfiles.layout.INodeLayout
	): Object
	}

	declare export interface ParallelEdgeLayouter {
		hiddenEdges: yfiles.algorithms.EdgeList,
		parallelEdges: yfiles.algorithms.IEdgeMap,
		directedMode: boolean,
		adaptiveLineDistances: boolean,
		lineDistance: number,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		layoutParallelEdges(
		graph: yfiles.layout.LayoutGraph, parallelEdges: yfiles.algorithms.IEdgeMap
	): void,
		findAndHideParallelEdges(graph: yfiles.algorithms.Graph): void,
		joinEnds: boolean,
		absJoinEndDistance: number,
		relJoinEndDistance: number,
		adjustLeadingEdge: boolean
	}

	declare export interface LayoutGraph {
		createGraphCopyFactory(): yfiles.algorithms.GraphCopier.ICopyFactory,
		createLabelFactory(): yfiles.layout.ILabelLayoutFactory,
		getLayoutForNode(node: yfiles.algorithms.Node): yfiles.layout.INodeLayout,
		getLayoutForEdge(edge: yfiles.algorithms.Edge): yfiles.layout.IEdgeLayout,
		getLabelLayoutForNode(node: yfiles.algorithms.Node): yfiles.layout.INodeLabelLayout[],
		getLabelLayoutForEdge(edge: yfiles.algorithms.Edge): yfiles.layout.IEdgeLabelLayout[],
		getFeatureNode(labelLayout: yfiles.layout.INodeLabelLayout): yfiles.algorithms.Node,
		getFeatureEdge(labelLayout: yfiles.layout.IEdgeLabelLayout): yfiles.algorithms.Edge,
		getNodeLayout(node: Object): yfiles.layout.INodeLayout,
		getEdgeLayout(edge: Object): yfiles.layout.IEdgeLayout,
		getNodeLabelLayout(node: Object): yfiles.layout.INodeLabelLayout[],
		getEdgeLabelLayout(edge: Object): yfiles.layout.IEdgeLabelLayout[],
		getCenterX(v: yfiles.algorithms.Node): number,
		getCenterY(v: yfiles.algorithms.Node): number,
		getCenter(node: yfiles.algorithms.Node): yfiles.algorithms.YPoint,
		getX(v: yfiles.algorithms.Node): number,
		getY(v: yfiles.algorithms.Node): number,
		getLocation(node: yfiles.algorithms.Node): yfiles.algorithms.YPoint,
		getWidth(v: yfiles.algorithms.Node): number,
		getHeight(v: yfiles.algorithms.Node): number,
		getSize(node: yfiles.algorithms.Node): yfiles.algorithms.YDimension,
		getRectangle(node: yfiles.algorithms.Node): yfiles.algorithms.YRectangle,
		setCenter(node: yfiles.algorithms.Node, position: yfiles.algorithms.YPoint): void,
		setCenterCoords(v: yfiles.algorithms.Node, x: number, y: number): void,
		setSize(v: yfiles.algorithms.Node, w: number, h: number): void,
		setSizeWithDimension(node: yfiles.algorithms.Node, size: yfiles.algorithms.YDimension): void,
		setLocationCoords(v: yfiles.algorithms.Node, x: number, y: number): void,
		setLocation(node: yfiles.algorithms.Node, position: yfiles.algorithms.YPoint): void,
		moveBy(node: yfiles.algorithms.Node, dx: number, dy: number): void,
		getPoints(edge: yfiles.algorithms.Edge): yfiles.algorithms.YPointPath,
		getPointList(edge: yfiles.algorithms.Edge): yfiles.algorithms.YList,
		getPath(edge: yfiles.algorithms.Edge): yfiles.algorithms.YPointPath,
		getPathList(edge: yfiles.algorithms.Edge): yfiles.algorithms.YList,
		setPath(edge: yfiles.algorithms.Edge, path: yfiles.algorithms.YPointPath): void,
		setPathWithPointList(edge: yfiles.algorithms.Edge, path: yfiles.algorithms.YList): void,
		setPoints(edge: yfiles.algorithms.Edge, points: yfiles.algorithms.YPointPath): void,
		setPointsWithPointList(edge: yfiles.algorithms.Edge, points: yfiles.algorithms.YList): void,
		setEndPointsAbs(
		edge: yfiles.algorithms.Edge, source: yfiles.algorithms.YPoint, target: yfiles.algorithms.YPoint
	): void,
		getSourcePointRel(edge: yfiles.algorithms.Edge): yfiles.algorithms.YPoint,
		getTargetPointRel(edge: yfiles.algorithms.Edge): yfiles.algorithms.YPoint,
		setSourcePointRel(edge: yfiles.algorithms.Edge, point: yfiles.algorithms.YPoint): void,
		setTargetPointRel(edge: yfiles.algorithms.Edge, point: yfiles.algorithms.YPoint): void,
		getSourcePointAbs(edge: yfiles.algorithms.Edge): yfiles.algorithms.YPoint,
		getTargetPointAbs(edge: yfiles.algorithms.Edge): yfiles.algorithms.YPoint,
		setSourcePointAbs(edge: yfiles.algorithms.Edge, point: yfiles.algorithms.YPoint): void,
		setTargetPointAbs(edge: yfiles.algorithms.Edge, point: yfiles.algorithms.YPoint): void,
		edgeList: yfiles.algorithms.EdgeList,
		getBoundingBox(): yfiles.algorithms.Rectangle
	}

	declare export interface LabelRanking {
		getProfit(candidate: yfiles.layout.LabelCandidate): number
	}

	declare export interface LayoutGraphCopyFactory {
		copyNode(
		targetGraph: yfiles.algorithms.Graph, originalNode: yfiles.algorithms.Node
	): yfiles.algorithms.Node,
		copyNodeLabels(
		originalLayoutGraph: yfiles.layout.LayoutGraph, originalNode: yfiles.algorithms.Node, targetGraph: yfiles.layout.LayoutGraph, newNode: yfiles.algorithms.Node
	): void,
		copyNodeLabelLayout(
		nodeLabelLayout: yfiles.layout.INodeLabelLayout
	): yfiles.layout.INodeLabelLayout,
		copyEdge(
		targetGraph: yfiles.algorithms.Graph, newSource: yfiles.algorithms.Node, newTarget: yfiles.algorithms.Node, originalEdge: yfiles.algorithms.Edge
	): yfiles.algorithms.Edge,
		createGraph(): yfiles.algorithms.Graph,
		copyEdgeLabels(
		originalLayoutGraph: yfiles.layout.LayoutGraph, originalEdge: yfiles.algorithms.Edge, layoutGraph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge
	): void,
		copyEdgeLabelLayout(
		edgeLabelLayout: yfiles.layout.IEdgeLabelLayout
	): yfiles.layout.IEdgeLabelLayout,
		preCopyGraphData(
		originalGraph: yfiles.algorithms.Graph, newGraph: yfiles.algorithms.Graph
	): void,
		postCopyGraphData(
		originalGraph: yfiles.algorithms.Graph, newGraph: yfiles.algorithms.Graph, nodeMap: yfiles.algorithms.IMap, edgeMap: yfiles.algorithms.IMap
	): void
	}

	declare export interface LayoutTool {
		
	}

	declare export interface LayoutMultiplexer {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		getCoreLayouter(graph: yfiles.layout.LayoutGraph): yfiles.layout.ILayouter
	}

	declare export interface LabelLayoutData {
		bounds: yfiles.algorithms.YOrientedRectangle,
		setSize(width: number, height: number): void,
		width: number,
		height: number,
		setLocation(x: number, y: number): void,
		x: number,
		y: number,
		preferredPlacement: yfiles.layout.LabelPlacements,
		preferredPlacementDescriptor: yfiles.layout.PreferredPlacementDescriptor,
		toString(): string
	}

	declare export interface LabelLayoutImpl {
		orientedBox: yfiles.algorithms.YOrientedRectangle,
		box: yfiles.algorithms.YRectangle,
		modelParameter: Object
	}

	declare export interface LabelLayoutTranslator {
		coreLayouter: yfiles.layout.ILayouter,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		autoFlippingEnabled: boolean,
		resettingNodeLabelOrientation: boolean,
		resettingEdgeLabelOrientation: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		writeBackEdgeLabels: boolean,
		writeBackRelativeEdgeLabelLocation: boolean,
		writeBackNodeLabels: boolean,
		writeBackRelativeNodeLabelLocation: boolean,
		translateNodeLabels: boolean,
		translateEdgeLabels: boolean
	}

	declare export interface LabelLayoutKeys {
		
	}

	declare export interface NodeHalo {
		top: number,
		left: number,
		bottom: number,
		right: number,
		equals(o: Object): boolean,
		hashCode(): number
	}

	declare export interface FixedGroupLayoutStage {
		interEdgeRoutingStyle: yfiles.layout.InterEdgeRoutingStyle,
		orthogonalEdgeRouter: yfiles.layout.ILayouter,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface PartitionLayouter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		partitionFinder: yfiles.layout.PartitionLayouter.IPartitionFinder,
		partitionPlacer: yfiles.layout.PartitionLayouter.IPartitionPlacer,
		interEdgeRouter: yfiles.layout.PartitionLayouter.IInterEdgeRouter
	}

	declare export interface OrientationLayouter {
		orientation: yfiles.layout.LayoutOrientation,
		mirrorMask: yfiles.layout.MirrorMask,
		horizontalOrientation: boolean,
		considerEdgeLabels: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		isOrientationMirrored(orientation: yfiles.layout.LayoutOrientation): boolean,
		prepareOrientationChange(graph: yfiles.layout.LayoutGraph): void,
		completeOrientationChange(graph: yfiles.layout.LayoutGraph): void,
		transform(p: yfiles.algorithms.YPoint, prepare: boolean): yfiles.algorithms.YPoint,
		prepareTransform(p: yfiles.algorithms.YPoint): yfiles.algorithms.YPoint,
		completeTransform(p: yfiles.algorithms.YPoint): yfiles.algorithms.YPoint,
		createOrientedInsets(insets: yfiles.algorithms.Insets): yfiles.algorithms.Insets,
		createOrientedNodeHalo(halo: yfiles.layout.NodeHalo): yfiles.layout.NodeHalo,
		createOrientedNodeSize(nodeSize: yfiles.algorithms.YDimension): yfiles.algorithms.YDimension
	}

	declare export interface NodeLabelCandidate {
		
	}

	declare export interface NodeLabelLayoutImpl {
		labelModel: yfiles.layout.INodeLabelModel
	}

	declare export interface PortCandidateAssignmentStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		pathCorrection: boolean
	}

			
}

declare module 'FreeNodeLabelLayoutModel' {
		declare export interface ModelParameter {
		point: yfiles.algorithms.YPoint,
		setPoint(dx: number, dy: number): void
	}

			
}

declare module 'FreeEdgeLabelLayoutModel' {
		declare export interface ModelParameter {
		angle: number,
		point: yfiles.algorithms.YPoint,
		setPoint(radius: number, theta: number): void,
		toString(): string
	}

			
}

declare module 'PartitionCellId' {
		declare export interface Pair {
		row: yfiles.layout.RowDescriptor,
		column: yfiles.layout.ColumnDescriptor,
		compareToObject(o: Object): number,
		equals(o: Object): boolean,
		hashCode(): number
	}

			
}

declare module 'Swimlanes' {
		declare export interface SwimlaneRepresentant {
		swimlanePos: number,
		allowRearrangement: boolean
	}

			
}

declare module 'GraphZoomer' {
		declare export interface IZoom {
		modifyPosition(position: yfiles.algorithms.Point2D.Double): void
	}

			
}

declare module 'PortCandidateSet' {
		declare export interface ICandidateMatcher {
		findMatchingCandidateForEdgeAtOffset(
		edge: yfiles.algorithms.Edge, source: boolean, xOffset: number, yOffset: number, directionMask: number
	): yfiles.layout.PortCandidateSet.IEntry,
		findMatchingCandidateForEdge(
		edge: yfiles.algorithms.Edge, source: boolean, directionMask: number
	): yfiles.layout.PortCandidateSet.IEntry,
		findMatchingCandidate(): yfiles.layout.PortCandidateSet.IEntry
	}

	declare export interface IEntry {
		portCandidate: yfiles.layout.PortCandidate,
		connections: number
	}

			
}

declare module 'SliderEdgeLabelLayoutModel' {
		declare export interface ModelParameter {
		segmentNumber: number,
		ratio: number,
		offsetVector: yfiles.algorithms.YVector,
		labelPosition: number,
		absRatio: number
	}

			
}

declare module 'LayoutGraphCopyFactory' {
		declare export interface HierarchicGraphCopyFactory {
		preCopyData(src: yfiles.algorithms.Graph, dst: yfiles.algorithms.Graph): void,
		postCopyData(
		src: yfiles.algorithms.Graph, dst: yfiles.algorithms.Graph, nodeMap: yfiles.algorithms.IMap, edgeMap: yfiles.algorithms.IMap
	): void,
		copyNodeData(src: yfiles.algorithms.Node, dst: yfiles.algorithms.Node): void,
		createNodeId(srcId: Object, dst: yfiles.algorithms.Node): Object
	}

			
}

declare module 'PartitionLayouter' {
		declare export interface IPartitionFinder {
		findPartitions(
		graph: yfiles.layout.LayoutGraph, partitionIDMap: yfiles.algorithms.INodeMap
	): void
	}

	declare export interface IPartitionPlacer {
		placePartitions(
		graph: yfiles.layout.LayoutGraph, partitionIDDP: yfiles.algorithms.IDataProvider, interEdgeDP: yfiles.algorithms.IDataProvider
	): void
	}

	declare export interface IInterEdgeRouter {
		routeInterEdges(
		graph: yfiles.layout.LayoutGraph, partitionIDDP: yfiles.algorithms.IDataProvider, interEdgeDP: yfiles.algorithms.IDataProvider
	): void
	}

	declare export interface ChannelInterEdgeRouter {
		routeInterEdgesOnly: boolean,
		interEdgeDPKey: Object,
		channelEdgeRouter: yfiles.router.ChannelEdgeRouter,
		margin: number,
		routeInterEdges(
		graph: yfiles.layout.LayoutGraph, partitionIDDP: yfiles.algorithms.IDataProvider, interEdgeDP: yfiles.algorithms.IDataProvider
	): void
	}

	declare export interface PolylineInterEdgeRouter {
		selectedEdgesDpKey: Object,
		routeInterEdgesOnly: boolean,
		routeInterEdges(
		graph: yfiles.layout.LayoutGraph, clusterIDDP: yfiles.algorithms.IDataProvider, interEdgeDP: yfiles.algorithms.IDataProvider
	): void,
		edgeRouter: yfiles.router.polyline.EdgeRouter
	}

	declare export interface OrthogonalInterEdgeRouter {
		selectedEdgesDpKey: Object,
		routeInterEdges(
		graph: yfiles.layout.LayoutGraph, clusterIDDP: yfiles.algorithms.IDataProvider, interEdgeDP: yfiles.algorithms.IDataProvider
	): void,
		orthogonalEdgeRouter: yfiles.router.OrthogonalEdgeRouter
	}

	declare export interface EdgeBetweennessPartitionFinder {
		findPartitions(
		graph: yfiles.layout.LayoutGraph, clusterIDMap: yfiles.algorithms.INodeMap
	): void,
		maximumPartitionCount: number,
		minimumPartitionCount: number
	}

	declare export interface ComponentPartitionPlacer {
		placePartitions(
		graph: yfiles.layout.LayoutGraph, clusterIDDP: yfiles.algorithms.IDataProvider, interEdgeDP: yfiles.algorithms.IDataProvider
	): void,
		componentLayouter: yfiles.layout.ComponentLayouter
	}

			
}

declare module 'OrientationLayouter' {
		declare export interface Transformer {
		finalizeTransform(p: yfiles.algorithms.YPoint): yfiles.algorithms.YPoint,
		initTransform(p: yfiles.algorithms.YPoint): yfiles.algorithms.YPoint
	}

			
}

declare module 'markup' {
		declare export interface ArrayExtension {
		type: yfiles.lang.Class,
		items: yfiles.objectcollections.IList,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface TypeExtension {
		typeName: string,
		type: yfiles.lang.Class,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface MemberInfoValueSerializer {
		canConvertToString(value: Object, context: yfiles.system.IValueSerializerContext): boolean,
		convertToString(o: Object, vsc: yfiles.system.IValueSerializerContext): string,
		canConvertFromString(value: string, context: yfiles.system.IValueSerializerContext): boolean,
		convertFromString(value: string, context: yfiles.system.IValueSerializerContext): Object
	}

	declare export interface StaticExtension {
		member: yfiles.system.MemberInfo,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface ListExtension {
		items: yfiles.objectcollections.IList,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface UndefinedExtension {
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface GenericListExtension {
		items: yfiles.objectcollections.IList,
		type: yfiles.lang.Class,
		copyItems(oldItems: yfiles.objectcollections.IList): void,
		getCollectionType(typeArgument: yfiles.lang.Class): yfiles.lang.Class,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface NullExtension {
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

			
}

declare module 'ui' {
		declare export interface RotatedSliderLabelModelParameterExtension {
		model: yfiles.graph.ILabelModel,
		location: yfiles.drawing.SliderParameterLocation,
		segmentIndex: number,
		segmentRatio: number,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface SideSliderLabelModelParameterExtension {
		model: yfiles.graph.ILabelModel,
		location: yfiles.drawing.SliderParameterLocation,
		segmentIndex: number,
		segmentRatio: number,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface RotatingEdgeLabelModelParameterExtension {
		ratio: number,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface SandwichParameterExtension {
		position: yfiles.input.HandlePositions,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface SmartEdgeLabelModelParameterExtension {
		model: yfiles.graph.ILabelModel,
		location: yfiles.drawing.SliderParameterLocation,
		segmentIndex: number,
		segmentRatio: number,
		distance: number,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface SegmentRatioParameterExtension {
		model: yfiles.graph.IPortLocationModel,
		index: number,
		ratio: number,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface NodeScaledParameterExtension {
		offset: yfiles.geometry.PointD,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface SliderLabelModelParameterExtension {
		model: yfiles.graph.ILabelModel,
		location: yfiles.drawing.SliderParameterLocation,
		segmentIndex: number,
		segmentRatio: number,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface RotatedSideSliderLabelModelParameterExtension {
		model: yfiles.graph.ILabelModel,
		location: yfiles.drawing.SliderParameterLocation,
		segmentIndex: number,
		segmentRatio: number,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface ExteriorLabelModelParameterExtension {
		position: yfiles.drawing.ExteriorLabelModel.Position_Interface,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface AnchoredParameterExtension {
		anchor: yfiles.geometry.PointD,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface DescriptorWrapperLabelModelParameterExtension {
		parameter: yfiles.graph.ILabelModelParameter,
		model: yfiles.drawing.DescriptorWrapperLabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface AnchoredLabelModelParameterExtension {
		anchorLocation: yfiles.geometry.IPoint,
		angle: number,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface ArrowExtension {
		pen: yfiles.system.Pen,
		brush: yfiles.system.Brush,
		cropLength: number,
		scale: number,
		type: yfiles.drawing.ArrowType,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface DynamicAnchoredParameterExtension {
		anchor: yfiles.geometry.IPoint,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface GenericConverter {
		canConvertToWithContext(
		context: yfiles.system.ITypeDescriptorContext, destinationType: yfiles.lang.Class
	): boolean,
		convertToWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object, destinationType: yfiles.lang.Class
	): Object
	}

	declare export interface FreeEdgeLabelModelParameterExtension {
		ratio: number,
		distance: number,
		angle: number,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface CompositeLabelModelParameterExtension {
		parameter: yfiles.graph.ILabelModelParameter,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface BendAnchoredParameterExtension {
		index: number,
		fromSource: boolean,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface FixedLabelModelParameterExtension {
		anchorLocation: yfiles.geometry.PointD,
		angle: number,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface StretchStripeLabelModelParameterExtension {
		position: yfiles.drawing.StretchStripeLabelModel.Position_Interface,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface StripeLabelModelParameterExtension {
		position: yfiles.drawing.StripeLabelModel.Position_Interface,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface InteriorStretchLabelModelParameterExtension {
		position: yfiles.drawing.InteriorStretchLabelModel.Position_Interface,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface NinePositionsEdgeLabelParameterExtension {
		position: yfiles.drawing.NinePositionsEdgeLabelModel.Position_Interface,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface InteriorLabelModelParameterExtension {
		position: yfiles.drawing.InteriorLabelModel.Position_Interface,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface GenericLabelModelParameterPair {
		parameter: yfiles.graph.ILabelModelParameter,
		descriptor: yfiles.graph.ILabelCandidateDescriptor
	}

	declare export interface LayoutAnchoredLabelModelParameterExtension {
		offset: yfiles.geometry.PointD,
		angle: number,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface CenterAnchoredLabelModelParameterExtension {
		offset: yfiles.geometry.PointD,
		angle: number,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface RatioAnchoredLabelModelParameterExtension {
		layoutRatio: yfiles.geometry.PointD,
		layoutOffset: yfiles.geometry.PointD,
		labelRatio: yfiles.geometry.PointD,
		labelOffset: yfiles.geometry.PointD,
		angle: number,
		model: yfiles.graph.ILabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface GenericModelExtension {
		parameters: yfiles.collections.List<Object>,
		defaultParameter: number,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface GenericLabelModelParameterExtension {
		index: number,
		model: yfiles.drawing.GenericLabelModel,
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

			
}

declare module 'model' {
		declare export interface ICanvasGroupProvider<T> {
		getCanvasObjectGroup(
		canvas: yfiles.canvas.CanvasControl, forItem: T
	): yfiles.canvas.ICanvasObjectGroup
	}

	declare export interface ICollectionModel<T> {
		addItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void
	}

	declare export interface FocusPaintManager<T> {
		enabled: boolean,
		onDisabled(): void,
		onEnabled(): void,
		inputModeContext: yfiles.input.IInputModeContext,
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		focusedItem: T,
		showFocusPolicy: yfiles.model.ShowFocusPolicy,
		focused: boolean,
		onFocusedChanged(): void,
		onPropertyChanged(args: yfiles.system.PropertyChangedEventArgs): void,
		install(context: yfiles.model.IInstallerContext, item: T): void,
		createInstallerContext(member: T): yfiles.model.InstallerContext,
		getFocusIndicatorInstaller(item: T): yfiles.input.IFocusIndicatorInstaller
	}

	declare export interface HighlightPaintManager<T> {
		enabled: boolean,
		onDisabled(): void,
		onEnabled(): void,
		inputModeContext: yfiles.input.IInputModeContext,
		selectionModel: yfiles.model.ISelectionModel<T>,
		remove(item: T): void,
		clearHighlights(): void,
		addHighlight(item: T): void,
		removeHighlight(item: T): void,
		addSelection(item: T): yfiles.model.IModelItemDescriptor<T>,
		install(context: yfiles.model.IInstallerContext, item: T): void,
		createInstallerContext(member: T): yfiles.model.InstallerContext,
		getHighlightInstaller(item: T): yfiles.input.IHighlightInstaller
	}

	declare export interface IListEnumerable<T> {
		count: number,
		getItem(i: number): T
	}

	declare export interface IMapper<K, V> {
		getItem(key: K): V,
		setItem(key: K, value: V): void,
		removeItem(key: K): void
	}

	declare export interface ListEnumerable<T> {
		backingEnumerable: yfiles.collections.IEnumerable<T>,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		count: number,
		getItem(i: number): T
	}

	declare export interface ItemEventArgs<T> {
		item: T
	}

	declare export interface CollectionModelManager<T> {
		enabled: boolean,
		onDisabled(): void,
		onEnabled(): void,
		collectionModel: yfiles.model.ICollectionModel<T>,
		getCanvasObject(item: T): yfiles.canvas.ICanvasObject,
		update(item: T): void,
		invalidate(item: T): void,
		invalidateDescriptor(descriptor: yfiles.model.IModelItemDescriptor<T>): void,
		getDescriptor(item: T): yfiles.model.IModelItemDescriptor<T>,
		getItem(forObject: yfiles.canvas.ICanvasObject): T
	}

	declare export interface InstallerBasedModelManager<T> {
		groupProvider: yfiles.model.ICanvasGroupProvider<T>,
		createInstallerContext(forItem: T): yfiles.model.InstallerContext,
		addInstaller(installer: yfiles.model.IModelItemInstaller<T>): void,
		removeInstaller(installer: yfiles.model.IModelItemInstaller<T>): void,
		installMember(member: T): yfiles.collections.IList<yfiles.canvas.ICanvasObject>
	}

	declare export interface IObstacleProvider {
		getObstacles(canvasContext: yfiles.drawing.IRenderContext): yfiles.drawing.GeneralPath
	}

	declare export interface CanvasGroupProviders {
		
	}

	declare export interface DefaultCanvasGroupProvider {
		
	}

	declare export interface DictionaryMapper<K, V> {
		entries: yfiles.collections.IEnumerable<yfiles.collections.KeyValuePair<K, V>>,
		defaultValue: V,
		clear(): void,
		removeItem(item: K): void,
		getItem(key: K): V,
		setItem(key: K, value: V): void
	}

	declare export interface WeakDictionaryMapper<K, V> {
		defaultValue: V,
		empty: boolean,
		clear(): void,
		removeItem(item: K): void,
		getItem(key: K): V,
		setItem(key: K, value: V): void
	}

	declare export interface DefaultCollectionModel<T> {
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		count: number,
		isReadOnly: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getItems(): yfiles.collections.ICollection<T>,
		publishItemChanged(item: T): void,
		onItemChanged(item: T): void,
		onItemRemoved(item: T): void,
		onItemAdded(item: T): void,
		addItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		toString(): string
	}

	declare export interface DefaultSelectionModel<T> {
		domain: yfiles.model.ICollectionModel<T>,
		selection: yfiles.model.ICollectionModel<T>,
		isSelected(o: T): boolean,
		setSelected(o: T, selected: boolean): void,
		onItemDeselected(o: T): void,
		onItemSelected(o: T): void,
		count: number,
		clear(): void,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		addItemSelectedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemSelectedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemDeselectedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemDeselectedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void
	}

	declare export interface Mappers {
		
	}

	declare export interface IAddBridgesCallback {
		getCrossingStyle(context: yfiles.drawing.IRenderContext): yfiles.model.CrossingStyle,
		getOrientationStyle(context: yfiles.drawing.IRenderContext): yfiles.model.BridgeOrientationStyle,
		getBridgeWidth(context: yfiles.drawing.IRenderContext): number,
		getBridgeHeight(context: yfiles.drawing.IRenderContext): number,
		insertCustomBridge(
		context: yfiles.drawing.IRenderContext, path: yfiles.drawing.GeneralPath, startPoint: yfiles.geometry.PointD, endPoint: yfiles.geometry.PointD, gapLength: number
	): void
	}

	declare export interface BridgeManager {
		defaultCallback: yfiles.model.IAddBridgesCallback,
		considerCurves: boolean,
		zoomThreshold: number,
		crossingDetermination: yfiles.model.CrossingDetermination,
		canvasControl: yfiles.canvas.CanvasControl,
		defaultCrossingStyle: yfiles.model.CrossingStyle,
		defaultBridgeWidth: number,
		clipMargin: number,
		defaultBridgeHeight: number,
		defaultBridgeOrientationStyle: yfiles.model.BridgeOrientationStyle,
		dispose(): void,
		addObstacleProvider(provider: yfiles.model.IObstacleProvider): void,
		removeObstacleProvider(provider: yfiles.model.IObstacleProvider): void,
		addBridges(
		context: yfiles.drawing.IRenderContext, path: yfiles.drawing.GeneralPath, callback: yfiles.model.IAddBridgesCallback
	): yfiles.drawing.GeneralPath,
		registerObstacles(context: yfiles.drawing.IRenderContext): void,
		registerObstacle(context: yfiles.drawing.IRenderContext, path: yfiles.drawing.GeneralPath): void,
		registerObstacleLine(
		context: yfiles.drawing.IRenderContext, p1: yfiles.geometry.PointD, p2: yfiles.geometry.PointD
	): void,
		registerObstacleQuadCurve(
		context: yfiles.drawing.IRenderContext, p1: yfiles.geometry.PointD, cp: yfiles.geometry.PointD, p2: yfiles.geometry.PointD
	): void,
		registerObstacleCubicCurve(
		context: yfiles.drawing.IRenderContext, p1: yfiles.geometry.PointD, cp1: yfiles.geometry.PointD, cp2: yfiles.geometry.PointD, p2: yfiles.geometry.PointD
	): void,
		getObstacleHash(context: yfiles.drawing.IRenderContext): number,
		uninstall(canvas: yfiles.canvas.CanvasControl): void,
		install(canvas: yfiles.canvas.CanvasControl): void,
		insertDefaultCustomBridge(
		context: yfiles.drawing.IRenderContext, path: yfiles.drawing.GeneralPath, startPoint: yfiles.geometry.PointD, endPoint: yfiles.geometry.PointD, gapLength: number
	): void
	}

	declare export interface TypeBasedItemInstaller<T> {
		group: yfiles.canvas.ICanvasObjectGroup,
		descriptor: yfiles.canvas.ICanvasObjectDescriptor,
		type: yfiles.lang.Class,
		installInCanvas(canvas: yfiles.canvas.CanvasControl): void,
		uninstallFromCanvas(canvas: yfiles.canvas.CanvasControl): void,
		canInstall(item: T, canvas: yfiles.canvas.CanvasControl): boolean,
		install(context: yfiles.model.IInstallerContext, item: T): void
	}

	declare export interface IModelItemDescriptor<T> {
		item: T,
		canvasObjects: yfiles.collections.IList<yfiles.canvas.ICanvasObject>
	}

	declare export interface SelectionPaintManager<T> {
		enabled: boolean,
		onDisabled(): void,
		onEnabled(): void,
		selectionModel: yfiles.model.ISelectionModel<T>,
		model: yfiles.model.ICollectionModel<T>,
		remove(item: T): void,
		removeSelection(item: T): void,
		addSelection(item: T): yfiles.model.IModelItemDescriptor<T>,
		install(context: yfiles.model.IInstallerContext, item: T): void,
		getSelectionInstaller(item: T): yfiles.model.ISelectionInstaller
	}

	declare export interface InstallerContextExtensions {
		
	}

	declare export interface InstallerContext {
		lookup(type: yfiles.lang.Class): Object,
		canvas: yfiles.canvas.CanvasControl,
		canvasObjectGroup: yfiles.canvas.ICanvasObjectGroup,
		addInstalled(canvasObject: yfiles.canvas.ICanvasObject): void,
		lookupCallback: (subject: Object, type: yfiles.lang.Class) => Object,
		installedObjects: yfiles.collections.IList<yfiles.canvas.ICanvasObject>,
		reset(): void
	}

	declare export interface IInstallerContext {
		canvas: yfiles.canvas.CanvasControl,
		canvasObjectGroup: yfiles.canvas.ICanvasObjectGroup,
		addInstalled(canvasObject: yfiles.canvas.ICanvasObject): void,
		addToGroup(
		userObject: Object, descriptor: yfiles.canvas.ICanvasObjectDescriptor, canvasObjectGroup: yfiles.canvas.ICanvasObjectGroup
	): yfiles.canvas.ICanvasObject,
		add(
		userObject: Object, descriptor: yfiles.canvas.ICanvasObjectDescriptor
	): yfiles.canvas.ICanvasObject
	}

	declare export interface IModelItem {
		
	}

	declare export interface IModelItemInstaller<T> {
		install(context: yfiles.model.IInstallerContext, item: T): void
	}

	declare export interface ISelectionModel<T> {
		isSelected(o: T): boolean,
		setSelected(o: T, selected: boolean): void,
		count: number,
		addItemSelectedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemSelectedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemDeselectedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemDeselectedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		clear(): void
	}

	declare export interface ModelManager<T> {
		_canvas: yfiles.canvas.CanvasControl,
		canvas: yfiles.canvas.CanvasControl,
		installMember(member: T): yfiles.collections.IList<yfiles.canvas.ICanvasObject>,
		unInstall(
		descriptor: yfiles.model.IModelItemDescriptor<T>, canvasObjects: yfiles.collections.IList<yfiles.canvas.ICanvasObject>
	): void,
		add(o: T): yfiles.model.IModelItemDescriptor<T>,
		removeDescriptor(desc: yfiles.model.IModelItemDescriptor<T>): void,
		updateDescriptor(desc: yfiles.model.IModelItemDescriptor<T>): boolean,
		containsDescriptor(desc: yfiles.model.IModelItemDescriptor<T>): boolean
	}

	declare export interface ISelectionInstaller {
		
	}

	declare export interface InputModeController<T> {
		inputModeContext: yfiles.input.IInputModeContext,
		selectedItemsPositionHandler: yfiles.input.IPositionHandler,
		selectedMovableItemsHitTestable: yfiles.drawing.IHitTestable,
		unselectedMovableItemsHitTestable: yfiles.drawing.IHitTestable,
		selectedItemHitTestable: yfiles.drawing.IHitTestable,
		selectedItemsMovable: yfiles.geometry.IMovable,
		itemHitTestable: yfiles.drawing.IHitTestable,
		selectedItemsHitTestable: yfiles.drawing.IHitTestable,
		unselectedItemHitTestable: yfiles.drawing.IHitTestable,
		selectionModel: yfiles.model.ISelectionModel<T>,
		getHandles(
		context: yfiles.input.IInputModeContext, t: T
	): yfiles.collections.IEnumerable<yfiles.input.IHandle>,
		useHandlesPredicate: (obj: T) => boolean,
		allowMovingPredicate: (obj: T) => boolean,
		collectionModel: yfiles.model.ICollectionModel<T>,
		selectedItemsHandles: yfiles.model.ICollectionModel<yfiles.input.IHandle>,
		getHandleProvider(item: T): yfiles.input.IHandleProvider,
		canvas: yfiles.canvas.CanvasControl,
		dispose(): void
	}

			
}

declare module 'multipage' {
		declare export interface ILayoutCallback {
		layoutDone(result: yfiles.multipage.MultiPageLayout): void
	}

	declare export interface IElementInfoManager {
		getNodeInfo(n: yfiles.algorithms.Node): yfiles.multipage.INodeInfo,
		getEdgeInfo(e: yfiles.algorithms.Edge): yfiles.multipage.IEdgeInfo,
		getNodeLabelInfo(nll: yfiles.layout.INodeLabelLayout): yfiles.multipage.INodeLabelInfo,
		getEdgeLabelInfo(ell: yfiles.layout.IEdgeLabelLayout): yfiles.multipage.IEdgeLabelInfo
	}

	declare export interface IElementFactory {
		createConnectorNode(
		context: yfiles.multipage.LayoutContext, edgesIds: yfiles.algorithms.YList, representedNodeId: Object
	): yfiles.algorithms.Node,
		createProxyReferenceNode(
		context: yfiles.multipage.LayoutContext, referringProxyId: Object
	): yfiles.algorithms.Node,
		createProxyNode(
		context: yfiles.multipage.LayoutContext, origNodeId: Object
	): yfiles.algorithms.Node,
		createConnectorEdge(
		context: yfiles.multipage.LayoutContext, connector: yfiles.algorithms.Node, opposite: yfiles.algorithms.Node, origEdgeId: Object, atTarget: boolean
	): yfiles.algorithms.Edge,
		createProxyReferenceEdge(
		context: yfiles.multipage.LayoutContext, proxyReference: yfiles.algorithms.Node, opposite: yfiles.algorithms.Node, referencingCopyId: Object
	): yfiles.algorithms.Edge,
		createProxyEdge(
		context: yfiles.multipage.LayoutContext, proxyNode: yfiles.algorithms.Node, opposite: yfiles.algorithms.Node, replacingEdgeId: Object, origNodeId: Object
	): yfiles.algorithms.Edge
	}

	declare export interface INodeInfo {
		representedNode: yfiles.algorithms.Node,
		pageNo: number,
		type: yfiles.multipage.NodeType,
		id: Object,
		referencingNode: yfiles.algorithms.Node
	}

	declare export interface MultiPageLayouter {
		labelLayouterEnabled: boolean,
		createElementFactory(): yfiles.multipage.IElementFactory,
		elementFactory: yfiles.multipage.IElementFactory,
		layoutCallback: yfiles.multipage.ILayoutCallback,
		edgeBundleModeMask: yfiles.multipage.EdgeBundleMode,
		groupMode: yfiles.multipage.GroupingMode,
		preferredMaximalDuration: number,
		labelLayouter: yfiles.layout.ILayoutStage,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		calcLayout(graph: yfiles.layout.LayoutGraph): yfiles.multipage.MultiPageLayout,
		removeConnectorPair(
		connector1: yfiles.algorithms.Node, connector2: yfiles.algorithms.Node, originalEdgeIds: yfiles.algorithms.YList, context: yfiles.multipage.LayoutContext
	): boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		maxPageSize: yfiles.algorithms.YDimension,
		doIncrementalLayout(
		graph: yfiles.layout.LayoutGraph, incrementalNodesDP: yfiles.algorithms.IDataProvider, context: yfiles.multipage.LayoutContext
	): void,
		routeRestoredEdges(
		graph: yfiles.layout.LayoutGraph, selectedEdgesDP: yfiles.algorithms.IDataProvider, boundingRectangle: yfiles.algorithms.YRectangle
	): void
	}

	declare export interface LayoutContext {
		createEdge(
		source: yfiles.algorithms.Node, target: yfiles.algorithms.Node, sameDataElementId: Object
	): yfiles.algorithms.Edge,
		createNode(sameDataElementId: Object): yfiles.algorithms.Node,
		addNodeLabel(
		label: yfiles.layout.INodeLabelLayout, labeledElement: yfiles.algorithms.Node
	): void,
		addEdgeLabel(
		label: yfiles.layout.IEdgeLabelLayout, labeledElement: yfiles.algorithms.Edge
	): void,
		removeNodeLabel(
		label: yfiles.layout.INodeLabelLayout, labeledElement: yfiles.algorithms.Node
	): boolean,
		removeEdgeLabel(
		label: yfiles.layout.IEdgeLabelLayout, labeledElement: yfiles.algorithms.Edge
	): boolean,
		graph: yfiles.layout.LayoutGraph,
		layouter: yfiles.multipage.MultiPageLayouter,
		getPageNode(id: Object): yfiles.algorithms.Node,
		getPageEdge(id: Object): yfiles.algorithms.Edge,
		getOriginalNode(id: Object): yfiles.algorithms.Node,
		getOriginalEdge(id: Object): yfiles.algorithms.Edge,
		getEdgeLabelInfo(ell: yfiles.layout.IEdgeLabelLayout): yfiles.multipage.IEdgeLabelInfo,
		getNodeLabelInfo(nll: yfiles.layout.INodeLabelLayout): yfiles.multipage.INodeLabelInfo,
		getNodeInfo(n: yfiles.algorithms.Node): yfiles.multipage.INodeInfo,
		getEdgeInfo(e: yfiles.algorithms.Edge): yfiles.multipage.IEdgeInfo
	}

	declare export interface INodeLabelInfo {
		id: Object
	}

	declare export interface IEdgeLabelInfo {
		id: Object
	}

	declare export interface DefaultElementFactory {
		createConnectorEdge(
		context: yfiles.multipage.LayoutContext, connector: yfiles.algorithms.Node, opposite: yfiles.algorithms.Node, origEdgeId: Object, atTarget: boolean
	): yfiles.algorithms.Edge,
		createConnectorNode(
		context: yfiles.multipage.LayoutContext, edgeIds: yfiles.algorithms.YList, representedNodeId: Object
	): yfiles.algorithms.Node,
		createProxyReferenceNode(
		context: yfiles.multipage.LayoutContext, referringProxyId: Object
	): yfiles.algorithms.Node,
		createProxyNode(
		context: yfiles.multipage.LayoutContext, origNodeId: Object
	): yfiles.algorithms.Node,
		createProxyReferenceEdge(
		context: yfiles.multipage.LayoutContext, proxyReference: yfiles.algorithms.Node, opposite: yfiles.algorithms.Node, referencingCopyId: Object
	): yfiles.algorithms.Edge,
		createProxyEdge(
		context: yfiles.multipage.LayoutContext, proxyNode: yfiles.algorithms.Node, opposite: yfiles.algorithms.Node, replacingEdgeId: Object, origNodeId: Object
	): yfiles.algorithms.Edge,
		getDefaultNodeSize(
		context: yfiles.multipage.LayoutContext, id: Object, type: number
	): yfiles.algorithms.YDimension
	}

	declare export interface MultiPageLayout {
		pageCount(): number,
		getPage(pageNo: number): yfiles.layout.LayoutGraph,
		getEdgeInfo(e: yfiles.algorithms.Edge): yfiles.multipage.IEdgeInfo,
		getNodeInfo(n: yfiles.algorithms.Node): yfiles.multipage.INodeInfo,
		getNodeLabelInfo(nll: yfiles.layout.INodeLabelLayout): yfiles.multipage.INodeLabelInfo,
		getEdgeLabelInfo(ell: yfiles.layout.IEdgeLabelLayout): yfiles.multipage.IEdgeLabelInfo
	}

	declare export interface IEdgeInfo {
		id: Object,
		type: yfiles.multipage.EdgeType,
		representedEdge: yfiles.algorithms.Edge
	}

			
}

declare module 'objectcollections' {
		declare export interface IEnumerable {
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		getEnumerableOfType<TSource>(type: yfiles.lang.Class): yfiles.collections.IEnumerable<TSource>,
		getCastedEnumerable<TResult>(): yfiles.collections.IEnumerable<TResult>
	}

	declare export interface IEnumerator {
		moveNext(): boolean,
		reset(): void,
		currentObject: Object
	}

	declare export interface IList {
		indexOfItem(item: Object): number,
		insertAt(index: number, item: Object): void,
		removeAt(index: number): void,
		removeValue(value: Object): void,
		containsValue(value: Object): boolean,
		clear(): void,
		addWithValue(value: Object): number,
		getObject(index: number): Object,
		setObject(index: number, value: Object): void,
		isReadOnly: boolean,
		isFixedSize: boolean
	}

	declare export interface IDictionaryEnumerator {
		key: Object,
		value: Object
	}

	declare export interface IComparer {
		compare(x: Object, y: Object): number
	}

	declare export interface ICollection {
		count: number,
		copyTo(array: Object, arrayIndex: number): void,
		isSynchronized: boolean,
		syncRoot: Object
	}

	declare export interface IDictionary {
		addWithKeyAndValue(key: Object, value: Object): void,
		containsWithValue(value: Object): boolean,
		removeWithKey(key: Object): void,
		objectKeys: yfiles.objectcollections.ICollection,
		getObject(key: Object): Object,
		putObject(key: Object, value: Object): void,
		objectValues: yfiles.objectcollections.ICollection,
		clear(): void,
		isReadOnly: boolean,
		isFixedSize: boolean,
		getDictionaryEnumerator(): yfiles.objectcollections.IDictionaryEnumerator
	}

			
}

declare module 'organic' {
		declare export interface OrganicRemoveOverlapsStage {
		maximumDuration: number,
		minimumNodeDistance: number,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface OutputRestriction {
		
	}

	declare export interface OrganicPartitionGridLayoutStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface OrganicLayouter {
		repulsion: number,
		attraction: number,
		groupBoundsCalculator: yfiles.layout.IGroupBoundsCalculator,
		groupNodeCompactness: number,
		groupNodePolicy: yfiles.organic.GroupsPolicy,
		initialTemperature: number,
		finalTemperature: number,
		activateDeterministicMode: boolean,
		activateTreeBeautifier: boolean,
		gravityFactor: number,
		sphereOfAction: yfiles.organic.SphereOfAction,
		initialPlacement: yfiles.organic.InitialPlacement,
		maximumDuration: number,
		iterationFactor: number,
		preferredEdgeLength: number,
		obeyNodeSize: boolean,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		dispose(): void
	}

	declare export interface RemoveOverlapsLayoutStage {
		graph: yfiles.layout.LayoutGraph,
		random: yfiles.algorithms.YRandom,
		x: number[],
		y: number[],
		w: number[],
		h: number[],
		nodes: yfiles.algorithms.Node[],
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		updatePos(): void,
		coreLayouter: yfiles.layout.ILayouter
	}

	declare export interface SmartOrganicLayouter {
		groupNodeCompactness: number,
		automaticGroupNodeCompactionEnabled: boolean,
		clusterNodes: boolean,
		clusteringQuality: number,
		considerNodeLabels: boolean,
		groupBoundsCalculator: yfiles.layout.IGroupBoundsCalculator,
		smartComponentLayout: boolean,
		nodeEdgeOverlapAvoided: boolean,
		configureComponentLayouter(
		graph: yfiles.layout.LayoutGraph, layouter: yfiles.layout.ComponentLayouter
	): void,
		doLayout(layoutGraph: yfiles.layout.LayoutGraph): void,
		unconfigureComponentLayouter(
		graph: yfiles.layout.LayoutGraph, layouter: yfiles.layout.ComponentLayouter
	): void,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		qualityTimeRatio: number,
		maximumDuration: number,
		scope: yfiles.organic.Scope,
		compactness: number,
		preferredEdgeLength: number,
		preferredMinimalNodeDistance: number,
		nodeSizeAware: boolean,
		deterministic: boolean,
		minimalNodeDistance: number,
		nodeOverlapsAllowed: boolean,
		outputRestriction: yfiles.organic.OutputRestriction
	}

	declare export interface SplitEdgeLayoutStage {
		splitEdgesDpKey: Object,
		splitNodesDpKey: Object,
		splitSegmentLength: number,
		proxyNodeSize: number,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		coreLayouter: yfiles.layout.ILayouter
	}

	declare export interface GroupedShuffleLayouter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		groupBoundsCalculator: yfiles.layout.IGroupBoundsCalculator,
		shuffleLayouter: yfiles.layout.ILayouter
	}

	declare export interface InteractiveOrganicLayouter {
		enableOnlyCore(): void,
		automaticStructureUpdateEnabled: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		startLayout(
		graph: yfiles.layout.LayoutGraph
	): yfiles.organic.InteractiveOrganicLayouter.ISingleThreadContext,
		commitPositions(): void,
		commitPositionsSmoothly(maxMovement: number, factor: number): number,
		wakeUp(): void,
		lastWakeupTime: number,
		addStructureUpdate(
		handler: (sender: Object, e: yfiles.system.EventArgs) => void, args: yfiles.system.EventArgs
	): void,
		stop(): void,
		stopped: boolean,
		sleeping: boolean,
		running: boolean,
		workingRatio: number,
		preferredEdgeLength: number,
		preferredNodeDistance: number,
		setPreferredEdgeLength(edge: yfiles.algorithms.Edge, newEdgeLength: number): void,
		setInertia(node: yfiles.algorithms.Node, inertia: number): void,
		setCenter(node: yfiles.algorithms.Node, x: number, y: number): void,
		setRadius(node: yfiles.algorithms.Node, radius: number): void,
		setStress(node: yfiles.algorithms.Node, stress: number): void,
		getStress(node: yfiles.algorithms.Node): number,
		setCenterX(node: yfiles.algorithms.Node, x: number): void,
		setCenterY(node: yfiles.algorithms.Node, y: number): void,
		getCenter(node: yfiles.algorithms.Node): yfiles.algorithms.YPoint,
		getCenterX(node: yfiles.algorithms.Node): number,
		getCenterY(node: yfiles.algorithms.Node): number,
		maxTime: number,
		quality: number,
		syncStructure(): void,
		outputRestriction: yfiles.organic.OutputRestriction,
		stopAndWait(): void
	}

	declare export interface GRIP {
		canLayoutCore(g: yfiles.layout.LayoutGraph): boolean,
		rounds: number,
		finalRounds: number,
		preferredEdgeLength: number,
		initialTemperature: number,
		doLayoutCore(g: yfiles.layout.LayoutGraph): void,
		smartInitialPlacement: boolean,
		deterministic: boolean,
		laxity: number,
		nodeSizeAware: boolean
	}

	declare export interface ShuffleLayouter {
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		coreLayouter: yfiles.layout.ILayouter,
		horizontalOverlapCriterium: yfiles.organic.HorizontalOverlapCriterion,
		minimalNodeDistance: number,
		simpleModeActive: boolean,
		barycenterModeActive: boolean
	}

			
}

declare module 'InteractiveOrganicLayouter' {
		declare export interface ISingleThreadContext {
		continueLayout(duration: number): void,
		stopLayout(): void
	}

			
}

declare module 'orthogonal' {
		declare export interface OrthogonalGroupLayouter {
		alignDegreeOneNodes: boolean,
		postprocessingEnabled: boolean,
		optimizePerceivedBends: boolean,
		createEdgeLayoutDescriptor(): yfiles.orthogonal.EdgeLayoutDescriptor,
		edgeLayoutDescriptor: yfiles.orthogonal.EdgeLayoutDescriptor,
		considerNodeLabels: boolean,
		integratedEdgeLabeling: boolean,
		layoutQuality: number,
		grid: number,
		componentLayouter: yfiles.layout.ILayoutStage,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface OrthogonalLayouter {
		nodeModel: number,
		createEdgeLayoutDescriptor(): yfiles.orthogonal.EdgeLayoutDescriptor,
		edgeLayoutDescriptor: yfiles.orthogonal.EdgeLayoutDescriptor,
		considerNodeLabels: boolean,
		integratedEdgeLabeling: boolean,
		useRandomization: boolean,
		alignDegreeOneNodes: boolean,
		useFaceMaximization: boolean,
		useCrossingPostprocessing: boolean,
		optimizePerceivedBends: boolean,
		grid: number,
		layoutStyle: yfiles.orthogonal.LayoutStyle,
		useSpacePostprocessing: boolean,
		useLengthReduction: boolean,
		useSketchDrawing: boolean,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface CompactOrthogonalLayouter {
		gridSpacing: number,
		aspectRatio: number
	}

	declare export interface EdgeLayoutDescriptor {
		minimumFirstSegmentLength: number,
		minimumLastSegmentLength: number,
		minimumSegmentLength: number,
		createCopy(): yfiles.orthogonal.EdgeLayoutDescriptor
	}

	declare export interface DirectedOrthogonalLayouter {
		alignDegreeOneNodes: boolean,
		createEdgeLayoutDescriptor(): yfiles.orthogonal.EdgeLayoutDescriptor,
		edgeLayoutDescriptor: yfiles.orthogonal.EdgeLayoutDescriptor,
		considerNodeLabels: boolean,
		optimizePerceivedBends: boolean,
		integratedEdgeLabeling: boolean,
		grid: number,
		useSketchDrawing: boolean,
		usePostprocessing: boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean
	}

			
}

declare module 'partial' {
		declare export interface PartialLayouter {
		coreLayouter: yfiles.layout.ILayouter,
		maximalDuration: number,
		routeInterEdgesImmediately: boolean,
		packComponents: boolean,
		fixedGroupResizingEnabled: boolean,
		positioningStrategy: yfiles.partial.SubgraphPositioningStrategy,
		minimalNodeDistance: number,
		considerNodeAlignment: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		componentAssignmentStrategy: yfiles.partial.ComponentAssignmentStrategy,
		optimizeLayoutOrientation: boolean,
		edgeRouter: yfiles.layout.ILayouter,
		edgeRoutingStrategy: yfiles.partial.EdgeRoutingStrategy,
		layoutOrientation: yfiles.partial.LayoutOrientation,
		allowMirroring: boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		doPartialLayout(graph: yfiles.layout.LayoutGraph): void,
		layoutSubgraph(subGraph: yfiles.layout.LayoutGraph): void,
		placeSubgraphs(
		graph: yfiles.layout.LayoutGraph, subgraphComponents: yfiles.algorithms.NodeList[]
	): void,
		routeInterEdges(graph: yfiles.layout.LayoutGraph, interEdges: yfiles.algorithms.EdgeList): void,
		routeEdgesBetweenFixedElements(
		graph: yfiles.layout.LayoutGraph, partialEdges: yfiles.algorithms.EdgeList
	): void,
		configureEdgeRouter(edgeRouter: yfiles.layout.ILayouter): void
	}

			
}

declare module 'PartialLayouter' {
		declare export interface StraightLineEdgeRouter {
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

			
}

declare module 'radial' {
		declare export interface RadialLayouter {
		minimalNodeToNodeDistance: number,
		layerSpacing: number,
		minimalLayerDistance: number,
		maximalChildSectorAngle: number,
		minimalBendAngle: number,
		centerNodesPolicy: yfiles.radial.CenterNodesPolicy,
		centerNodesDpKey: Object,
		layeringStrategy: yfiles.radial.LayeringStrategy,
		edgeRoutingStrategy: yfiles.radial.EdgeRoutingStrategy,
		considerNodeLabels: boolean,
		componentLayouterEnabled: boolean,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		determineCenter(graph: yfiles.layout.LayoutGraph): yfiles.algorithms.NodeList,
		getNodeDiameter(graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node): number
	}

			
}

declare module 'RadialLayouter' {
		declare export interface NodeInfo {
		circleIndex: number,
		radius: number,
		centerOffset: yfiles.algorithms.YPoint,
		sectorStart: number,
		sectorSize: number
	}

			
}

declare module 'random' {
		declare export interface RandomLayouter {
		componentLayouterEnabled: boolean,
		layoutBounds: yfiles.algorithms.Rectangle,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		seed: number
	}

			
}

declare module 'router' {
		declare export interface BusRepresentations {
		
	}

	declare export interface BusRouter {
		createOrthogonalEdgeRouter(): yfiles.router.OrthogonalEdgeRouter,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		gridSpacing: number,
		gridRouting: boolean,
		minimumDistanceToNode: number,
		minimumDistanceToEdge: number,
		crossingCost: number,
		rerouting: boolean,
		preferredBackboneSegmentCount: number,
		minimumBackboneSegmentLength: number,
		minimumBusConnectionsCount: number,
		removeCollinearBends: boolean,
		selectedEdgesDpKey: Object,
		scope: yfiles.router.Scope,
		setProperty(key: string, value: Object): boolean
	}

	declare export interface BusDescriptor {
		equals(obj: Object): boolean,
		hashCode(): number,
		busId: Object,
		sourceGroupId: Object,
		targetGroupId: Object,
		fixed: boolean,
		toString(): string
	}

	declare export interface StraightLineEdgeRouter {
		sphereOfAction: yfiles.router.SphereOfAction,
		selectedNodesDpKey: Object,
		selectedEdgesDpKey: Object,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface SnapOuterPortsToNodeBorderStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface OrthogonalPatternEdgeRouter {
		monotonicPathRestriction: yfiles.router.MonotonicPathRestriction,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		checkNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		checkGroupNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		calculateCost(
		edge: yfiles.algorithms.Edge, path: yfiles.algorithms.YList, spc: yfiles.layout.PortCandidate, tpc: yfiles.layout.PortCandidate
	): number,
		calculatePortCandidateCost(
		edge: yfiles.algorithms.Edge, path: yfiles.algorithms.YList, spc: yfiles.layout.PortCandidate, tpc: yfiles.layout.PortCandidate
	): number,
		calculateBendCost(
		edge: yfiles.algorithms.Edge, path: yfiles.algorithms.YList, spc: yfiles.layout.PortCandidate, tpc: yfiles.layout.PortCandidate
	): number,
		calculateSelfLoopSelfSidePenaltyCost(
		edge: yfiles.algorithms.Edge, path: yfiles.algorithms.YList, spc: yfiles.layout.PortCandidate, tpc: yfiles.layout.PortCandidate
	): number,
		calculateEdgeLength(
		edge: yfiles.algorithms.Edge, path: yfiles.algorithms.YList, spc: yfiles.layout.PortCandidate, tpc: yfiles.layout.PortCandidate
	): number,
		calculateCrossingCosts(
		edge: yfiles.algorithms.Edge, path: yfiles.algorithms.YList, spc: yfiles.layout.PortCandidate, tpc: yfiles.layout.PortCandidate
	): number,
		affectedEdgesDpKey: Object,
		minimumDistance: number,
		gridWidth: number,
		gridOrigin: yfiles.algorithms.YPoint,
		gridRoutingEnabled: boolean,
		edgeCrossingCost: number,
		nodeCrossingCost: number,
		bendCost: number,
		edgeOverlapCost: number
	}

	declare export interface OrthogonalSegmentDistributionStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		affectedEdgesDpKey: Object,
		preferredDistanceAdjustable: boolean,
		gridWidthAdjustable: boolean,
		gridEnabled: boolean,
		gridWidth: number,
		setGridOffset(offsetX: number, offsetY: number): void,
		gridOffsetX: number,
		gridOffsetY: number,
		lockFirstAndLastSegment: boolean,
		preferredDistance: number
	}

	declare export interface OrganicEdgeRouter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		edgeNodeOverlapAllowed: boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		checkNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		checkGroupNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		coreLayouter: yfiles.layout.ILayouter,
		minimalDistance: number,
		usingBends: boolean,
		routingAll: boolean,
		createNodeEnlargementStage(): yfiles.layout.ILayoutStage
	}

	declare export interface OrthogonalEdgeRouter {
		selectedNodesDpKey: Object,
		selectedEdgesDpKey: Object,
		considerNodeLabels: boolean,
		monotonicPathRestriction: yfiles.router.MonotonicPathRestriction,
		enforceMonotonicPathRestrictions: boolean,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		checkNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		checkGroupNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		setProperty(key: string, value: Object): boolean,
		crossingCost: number,
		rerouting: boolean,
		sphereOfAction: yfiles.router.SphereOfAction,
		gridRouting: boolean,
		setGridOrigin(x: number, y: number): void,
		gridOrigin: yfiles.algorithms.YPoint,
		gridSpacing: number,
		minimumDistance: number,
		coupledDistances: boolean,
		minimumDistanceToNode: number,
		localCrossingMinimization: boolean,
		centerToSpaceRatio: number,
		routingStyle: yfiles.router.RoutingStyle,
		badOrthogonal: boolean,
		useCustomBorderCapacity: boolean,
		customBorderCapacity: number,
		innerPorts: boolean
	}

	declare export interface ReducedSphereOfActionStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		activationThreshold: number
	}

	declare export interface PartitionGridRouterStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface PatchRouterStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		activationThreshold: number,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface EdgeGroupRouterStage {
		minimalBusDistance: number,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface ChannelEdgeRouter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		checkNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		checkGroupNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		pathFinderStrategy: yfiles.layout.ILayouter,
		edgeDistributionStrategy: yfiles.layout.ILayouter
	}

	declare export interface CollinearBendHider {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface GroupNodeRouterStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface ChannelRouter {
		setChannel(min: number, max: number, orientation: yfiles.router.ChannelOrientation): void,
		addSegment(key: Object, p1: yfiles.algorithms.YPoint, p2: yfiles.algorithms.YPoint): void,
		addGroupSegment(
		key: Object, groupId: Object, p1: yfiles.algorithms.YPoint, p2: yfiles.algorithms.YPoint
	): void,
		segmentKeys(): yfiles.algorithms.IIterator,
		containsKey(key: Object): boolean,
		containsGroupKey(groupKey: Object): boolean,
		route(): void,
		getCoord(key: Object): number,
		subChannelCount: number,
		getSubChannelRank(key: Object): number,
		getGroupSubChannelRank(groupKey: Object): number,
		epsilonChannelIgnored: boolean,
		epsilon: number
	}

			
}

declare module 'ChannelEdgeRouter' {
		declare export interface OrthogonalShortestPathPathFinder {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		affectedEdgesDpKey: Object
	}

			
}

declare module 'polyline' {
		declare export interface GraphPartition {
		partition: yfiles.router.polyline.IObstaclePartition,
		addDynamicDecompositionListener(listener: yfiles.router.polyline.DynamicDecompositionCompanion.IListener): void,
		removeDynamicDecompositionListener(listener: yfiles.router.polyline.DynamicDecompositionCompanion.IListener): void,
		init(configuration: yfiles.router.polyline.PathSearchConfiguration): void,
		getNeighbors(cell: yfiles.router.polyline.PartitionCell): yfiles.algorithms.IList,
		getNodes(cell: yfiles.router.polyline.PartitionCell): yfiles.algorithms.IList,
		getObstacles(cell: yfiles.router.polyline.PartitionCell): yfiles.algorithms.IList,
		getCellsWithNode(node: yfiles.algorithms.Node): yfiles.algorithms.IList,
		getCells(rect: yfiles.algorithms.YRectangle): yfiles.algorithms.IList,
		bounds: yfiles.algorithms.YRectangle,
		clear(): void,
		onCellSubdivided(
		cell: yfiles.router.polyline.PartitionCell, subCells: yfiles.algorithms.IList
	): void,
		onCellFinalized(finalizedCell: yfiles.router.polyline.PartitionCell): void,
		onCellCreated(createdCell: yfiles.router.polyline.PartitionCell): void,
		createObstacle(
		bounds: yfiles.algorithms.YRectangle, data: Object
	): yfiles.router.polyline.Obstacle,
		getObstacle(data: Object): yfiles.router.polyline.Obstacle
	}

	declare export interface EdgeRouter {
		maximumDuration: number,
		defaultEdgeLayoutDescriptor: yfiles.router.polyline.EdgeLayoutDescriptor,
		getEdgeLayoutDescriptor(edge: yfiles.algorithms.Edge): yfiles.router.polyline.EdgeLayoutDescriptor,
		polylineRouting: boolean,
		preferredPolylineSegmentLength: number,
		maximumPolylineSegmentRatio: number,
		rerouting: boolean,
		sphereOfAction: yfiles.router.SphereOfAction,
		selectedNodesDpKey: Object,
		selectedEdgesDpKey: Object,
		edgeOrderComparator: yfiles.objectcollections.IComparer,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		isSelected(e: yfiles.algorithms.Edge, graph: yfiles.algorithms.Graph): boolean,
		considerNodeLabels: boolean,
		ignoreInnerNodeLabels: boolean,
		considerEdgeLabels: boolean,
		grid: yfiles.router.polyline.Grid,
		minimalNodeToEdgeDistance: number,
		createGraphPartition(
		decomposition: yfiles.router.polyline.IObstaclePartition
	): yfiles.router.polyline.GraphPartition,
		configureGraphPartition(partition: yfiles.router.polyline.GraphPartition): void,
		cleanupGraphPartition(partition: yfiles.router.polyline.GraphPartition): void,
		registeredPartitionExtensions: yfiles.algorithms.IList,
		createPathSearch(): yfiles.router.polyline.PathSearch,
		configurePathSearch(pathSearch: yfiles.router.polyline.PathSearch): void,
		registeredPathSearchExtensions: yfiles.algorithms.IList,
		createPathRouting(): yfiles.router.polyline.ChannelBasedPathRouting,
		createObstacleDecomposition(): yfiles.router.polyline.DynamicObstacleDecomposition,
		createPathSearchContext(
		pathSearch: yfiles.router.polyline.PathSearch, configuration: yfiles.router.polyline.PathSearchConfiguration
	): yfiles.router.polyline.PathSearchContext,
		createConfiguration(
		graph: yfiles.layout.LayoutGraph, grouping: yfiles.layout.GraphGrouping
	): yfiles.router.polyline.PathSearchConfiguration,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		createDefaultEdgeOrderComparator(
		graph: yfiles.layout.LayoutGraph, configuration: yfiles.router.polyline.PathSearchConfiguration
	): yfiles.objectcollections.IComparer,
		checkNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		checkGroupNodeSize(layout: yfiles.layout.IGraphLayout, node: Object): void,
		partition: yfiles.router.polyline.GraphPartition
	}

	declare export interface EdgeLayoutDescriptor {
		minimalFirstSegmentLength: number,
		minimalLastSegmentLength: number,
		minimalEdgeToEdgeDistance: number,
		minimalNodeCornerDistance: number,
		monotonicPathRestriction: yfiles.router.MonotonicPathRestriction,
		penaltySettings: yfiles.router.polyline.PenaltySettings,
		createCopy(): yfiles.router.polyline.EdgeLayoutDescriptor
	}

	declare export interface IEnterIntervalCalculator {
		appendEnterIntervals(
		currentEntrance: yfiles.router.polyline.CellEntrance, enteredCell: yfiles.router.polyline.PartitionCell, commonInterval: yfiles.router.polyline.OrthogonalInterval, allEnterIntervals: yfiles.algorithms.IList, context: yfiles.router.polyline.PathSearchContext
	): void
	}

	declare export interface IGraphPartitionExtension {
		preparePartition(
		configuration: yfiles.router.polyline.PathSearchConfiguration, graphPartition: yfiles.router.polyline.GraphPartition
	): void,
		cleanup(): void
	}

	declare export interface DynamicDecompositionCompanion {
		
	}

	declare export interface Grid {
		originX: number,
		originY: number,
		spacing: number,
		toString(): string
	}

	declare export interface GraphPartitionExtensionAdapter {
		graphPartition: yfiles.router.polyline.GraphPartition,
		configuration: yfiles.router.polyline.PathSearchConfiguration,
		onCellCreated(createdCell: yfiles.router.polyline.PartitionCell): void,
		onCellSubdivided(
		cell: yfiles.router.polyline.PartitionCell, subCells: yfiles.algorithms.IList
	): void,
		onCellFinalized(finalizedCell: yfiles.router.polyline.PartitionCell): void,
		preparePartition(
		configuration: yfiles.router.polyline.PathSearchConfiguration, graphPartition: yfiles.router.polyline.GraphPartition
	): void,
		cleanup(): void
	}

	declare export interface IDynamicDecomposition {
		addDynamicDecompositionListener(listener: yfiles.router.polyline.DynamicDecompositionCompanion.IListener): void,
		removeDynamicDecompositionListener(listener: yfiles.router.polyline.DynamicDecompositionCompanion.IListener): void
	}

	declare export interface CellSegmentInfo {
		direction: yfiles.layout.Direction,
		cell: yfiles.router.polyline.PartitionCell
	}

	declare export interface CellEntrance {
		toString(): string,
		cell: yfiles.router.polyline.PartitionCell,
		previousEntrance: yfiles.router.polyline.CellEntrance,
		enterInterval: yfiles.router.polyline.OrthogonalInterval,
		enterDirection: yfiles.layout.Direction,
		costs: number,
		heuristicCosts: number,
		previousEdgeCellInfo: yfiles.router.polyline.EdgeCellInfo
	}

	declare export interface AbstractSegmentInfo {
		toString(): string,
		minExtension: yfiles.router.polyline.Interval,
		maxExtension: yfiles.router.polyline.Interval,
		locationRange: yfiles.router.polyline.Interval,
		preferredAlignment: yfiles.router.polyline.Alignment,
		location: number,
		fixed: boolean,
		vertical: boolean,
		direction: yfiles.layout.Direction,
		edge: yfiles.algorithms.Edge,
		segmentIndex: number,
		segmentGroup: yfiles.router.polyline.SegmentGroup
	}

	declare export interface EdgeCellInfo {
		bendCount: number,
		toString(): string,
		type: yfiles.router.polyline.RoutingType,
		enterSegmentNo: number,
		exitSegmentNo: number,
		enterSegmentGroup: yfiles.router.polyline.SegmentGroup,
		exitSegmentGroup: yfiles.router.polyline.SegmentGroup,
		edge: yfiles.algorithms.Edge,
		cell: yfiles.router.polyline.PartitionCell,
		enterInterval: yfiles.router.polyline.OrthogonalInterval,
		exitInterval: yfiles.router.polyline.OrthogonalInterval,
		enterDirection: yfiles.layout.Direction,
		exitDirection: yfiles.layout.Direction,
		cellSegmentInfos: yfiles.algorithms.YList
	}

	declare export interface EdgeInfo {
		fixed: boolean,
		edge: yfiles.algorithms.Edge,
		edgeCellInfos: yfiles.algorithms.IList,
		getEdgeCellInfo(
		entrance: yfiles.router.polyline.CellEntrance
	): yfiles.router.polyline.EdgeCellInfo,
		getSegmentInfo(segmentIndex: number): yfiles.router.polyline.SegmentInfo,
		getPreviousSegment(
		segment: yfiles.router.polyline.SegmentInfo
	): yfiles.router.polyline.SegmentInfo,
		getNextSegment(
		segment: yfiles.router.polyline.SegmentInfo
	): yfiles.router.polyline.SegmentInfo,
		segmentCount(): number,
		toString(): string,
		strongSourcePort: yfiles.algorithms.YPoint,
		strongTargetPort: yfiles.algorithms.YPoint,
		calculateLineSegments(): yfiles.algorithms.LineSegment[],
		calculatePathPoints(): yfiles.algorithms.YList
	}

	declare export interface ChannelBasedPathRouting {
		initialize(configuration: yfiles.router.polyline.PathSearchConfiguration): void,
		cleanup(): void,
		configuration: yfiles.router.polyline.PathSearchConfiguration,
		route(
		edges: yfiles.algorithms.EdgeList, pathSearchResult: yfiles.router.polyline.PathSearchResult
	): void,
		createSegmentInfoComparator(
		channels: yfiles.algorithms.YList, pathSearchResult: yfiles.router.polyline.PathSearchResult, configuration: yfiles.router.polyline.PathSearchConfiguration
	): yfiles.objectcollections.IComparer,
		sortSegmentInfos(
		segmentInfos: yfiles.algorithms.IList, segmentInfoComparator: yfiles.objectcollections.IComparer
	): void,
		optimizeSegmentOrder(channel: yfiles.router.polyline.Channel): void,
		calculateSegmentLocations(channel: yfiles.router.polyline.Channel): void,
		adjustSegmentLocations(channel: yfiles.router.polyline.Channel): void
	}

	declare export interface Channel {
		addSegment(segment: yfiles.router.polyline.SegmentInfo): void,
		widthInterval: yfiles.router.polyline.Interval,
		lengthInterval: yfiles.router.polyline.Interval,
		segmentCount(): number,
		vertical: boolean,
		getSegment(index: number): yfiles.router.polyline.SegmentInfo,
		segmentGroupCount(): number,
		addSegmentGroup(group: yfiles.router.polyline.SegmentGroup): void,
		getSegmentGroup(index: number): yfiles.router.polyline.SegmentGroup,
		getCurrentLocation(segmentInfo: yfiles.router.polyline.SegmentInfo): number,
		setCurrentLocation(segmentInfo: yfiles.router.polyline.SegmentInfo, location: number): void,
		bounds: yfiles.algorithms.YRectangle,
		toString(): string
	}

	declare export interface DynamicObstacleDecomposition {
		cutObstacleCost: number,
		unbalancedObstaclesCost: number,
		unbalancedRatioCost: number,
		addDynamicDecompositionListener(listener: yfiles.router.polyline.DynamicDecompositionCompanion.IListener): void,
		removeDynamicDecompositionListener(listener: yfiles.router.polyline.DynamicDecompositionCompanion.IListener): void,
		fireSubdividedEvent(
		cell: yfiles.router.polyline.PartitionCell, subCells: yfiles.algorithms.IList
	): void,
		fireFinalizeCellEvent(finalizedCell: yfiles.router.polyline.PartitionCell): void,
		fireCreateCellEvent(createdCell: yfiles.router.polyline.PartitionCell): void,
		init(
		obstacles: yfiles.algorithms.IList, partitionBounds: yfiles.algorithms.YRectangle
	): void,
		clear(): void,
		getObstacleCutCosts(
		numObstaclesInFirstHalf: number, numObstaclesInSecondHalf: number, numObstaclesOnCut: number
	): number,
		getGeometricCutCosts(
		cut: number, min: number, max: number, orthogonalMin: number, orthogonalMax: number
	): number,
		getNeighbors(cell: yfiles.router.polyline.PartitionCell): yfiles.algorithms.IList,
		getObstacles(cell: yfiles.router.polyline.PartitionCell): yfiles.algorithms.IList,
		getCellsWithObstacle(obstacle: yfiles.router.polyline.Obstacle): yfiles.algorithms.IList,
		getCells(rect: yfiles.algorithms.YRectangle): yfiles.algorithms.IList,
		bounds: yfiles.algorithms.YRectangle
	}

	declare export interface PathSearchResult {
		getEdgeInfoWithPath(path: yfiles.router.polyline.Path): yfiles.router.polyline.EdgeInfo,
		getEdgeInfo(edge: yfiles.algorithms.Edge): yfiles.router.polyline.EdgeInfo,
		setPath(edge: yfiles.algorithms.Edge, path: yfiles.router.polyline.Path): void,
		getPath(edge: yfiles.algorithms.Edge): yfiles.router.polyline.Path
	}

	declare export interface PathSearchExtension {
		configuration: yfiles.router.polyline.PathSearchConfiguration,
		context: yfiles.router.polyline.PathSearchContext,
		initialize(configuration: yfiles.router.polyline.PathSearchConfiguration): void,
		initializeEdges(context: yfiles.router.polyline.PathSearchContext): void,
		initializeCurrentEdge(context: yfiles.router.polyline.PathSearchContext): void,
		appendStartEntrances(allStartEntrances: yfiles.algorithms.IList): void,
		calculateStartEntranceCost(startEntrance: yfiles.router.polyline.CellEntrance): number,
		calculateCosts(
		currentEntrance: yfiles.router.polyline.CellEntrance, enteredCell: yfiles.router.polyline.PartitionCell, enterInterval: yfiles.router.polyline.OrthogonalInterval, edgeCellInfo: yfiles.router.polyline.EdgeCellInfo, maxAllowedCosts: number
	): number,
		calculateHeuristicCosts(entrance: yfiles.router.polyline.CellEntrance): number,
		isValidTargetEntrance(entrance: yfiles.router.polyline.CellEntrance): boolean,
		finalizePath(path: yfiles.router.polyline.Path): void,
		cancelCurrentEdge(context: yfiles.router.polyline.PathSearchContext): void,
		finalizeCurrentEdge(context: yfiles.router.polyline.PathSearchContext): void,
		finalizeEdges(context: yfiles.router.polyline.PathSearchContext): void,
		finalizePathSearchResult(pathSearchResult: yfiles.router.polyline.PathSearchResult): void,
		cleanup(): void
	}

	declare export interface PathSearchContext {
		pathSearch: yfiles.router.polyline.PathSearch,
		configuration: yfiles.router.polyline.PathSearchConfiguration,
		edges: yfiles.algorithms.IEdgeCursor,
		setEdges(edges: yfiles.algorithms.EdgeList): void,
		currentEdge: yfiles.algorithms.Edge,
		currentEdgeLayoutDescriptor: yfiles.router.polyline.EdgeLayoutDescriptor,
		sourceCellCount(): number,
		addSourceCell(cell: yfiles.router.polyline.PartitionCell): void,
		getSourceCell(index: number): yfiles.router.polyline.PartitionCell,
		isSourceCell(cell: yfiles.router.polyline.PartitionCell): boolean,
		combinedSourceCell: yfiles.router.polyline.PartitionCell,
		targetCellCount(): number,
		addTargetCell(cell: yfiles.router.polyline.PartitionCell): void,
		getTargetCell(index: number): yfiles.router.polyline.PartitionCell,
		isTargetCell(cell: yfiles.router.polyline.PartitionCell): boolean,
		combinedTargetCell: yfiles.router.polyline.PartitionCell,
		pathSearchResult: yfiles.router.polyline.PathSearchResult
	}

	declare export interface Path {
		edge: yfiles.algorithms.Edge,
		cost: number,
		getEntrance(position: number): yfiles.router.polyline.CellEntrance,
		setEntrance(position: number, entrance: yfiles.router.polyline.CellEntrance): void,
		positionOf(entrance: yfiles.router.polyline.CellEntrance): number,
		length(): number
	}

	declare export interface PathSearchConfiguration {
		graph: yfiles.layout.LayoutGraph,
		grouping: yfiles.layout.GraphGrouping,
		edgeRouter: yfiles.router.polyline.EdgeRouter,
		restOfComputingTime: number
	}

	declare export interface PathSearch {
		addPathSearchExtension(extension: yfiles.router.polyline.PathSearchExtension): boolean,
		removePathSearchExtension(extension: yfiles.router.polyline.PathSearchExtension): boolean,
		addAdditionalEnterIntervalCalculator(
		enterIntervalCalculator: yfiles.router.polyline.IEnterIntervalCalculator
	): boolean,
		removeAdditionalEnterIntervalCalculator(
		enterIntervalCalculator: yfiles.router.polyline.IEnterIntervalCalculator
	): boolean,
		init(configuration: yfiles.router.polyline.PathSearchConfiguration): void,
		clear(): void,
		getFinalizedPath(edge: yfiles.algorithms.Edge): yfiles.router.polyline.Path,
		findPathsForCurrentEdge(context: yfiles.router.polyline.PathSearchContext): void,
		decreasePenaltySettings(
		penaltySettings: yfiles.router.polyline.PenaltySettings, decreaseFactor: number, context: yfiles.router.polyline.PathSearchContext
	): void,
		findPaths(context: yfiles.router.polyline.PathSearchContext): void,
		finalizePath(path: yfiles.router.polyline.Path): void,
		handleNeighbor(
		currentEntrance: yfiles.router.polyline.CellEntrance, neighborCell: yfiles.router.polyline.PartitionCell, context: yfiles.router.polyline.PathSearchContext
	): void,
		calculateCosts(
		currentEntrance: yfiles.router.polyline.CellEntrance, enteredCell: yfiles.router.polyline.PartitionCell, enterIntervals: yfiles.router.polyline.OrthogonalInterval[], lastEdgeCellInfos: yfiles.router.polyline.EdgeCellInfo[], context: yfiles.router.polyline.PathSearchContext, costs: number[], maxAllowedCosts: number[]
	): void,
		calculateHeuristicCosts(
		entrance: yfiles.router.polyline.CellEntrance, context: yfiles.router.polyline.PathSearchContext
	): number
	}

	declare export interface SegmentGroup {
		commonLocationRange: yfiles.router.polyline.Interval,
		segmentInfos: yfiles.algorithms.IList,
		commonSegmentInfo: yfiles.router.polyline.SegmentInfo,
		hashCode(): number
	}

	declare export interface PolylineLayoutStage {
		selectedNodesDpKey: Object,
		selectedEdgesDpKey: Object,
		sphereOfAction: yfiles.router.SphereOfAction,
		minimalNodeToEdgeDistance: number,
		maximumNonOrthogonalSegmentRatio: number,
		preferredPolylineSegmentLength: number,
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void
	}

	declare export interface PenaltySettings {
		edgeLengthPenalty: number,
		bendPenalty: number,
		edgeCrossingPenalty: number,
		nodeCrossingPenalty: number,
		groupNodeCrossingPenalty: number,
		nodeLabelCrossingPenalty: number,
		edgeLabelCrossingPenalty: number,
		minimalNodeToEdgeDistancePenalty: number,
		minimalGroupNodeToEdgeDistancePenalty: number,
		minimalEdgeToEdgeDistancePenalty: number,
		minimalNodeCornerDistancePenalty: number,
		minimalFirstLastSegmentLengthPenalty: number,
		bendsInNodeToEdgeDistancePenalty: number,
		monotonyViolationPenalty: number,
		partitionGridCellReentrancePenalty: number,
		portViolationPenalty: number,
		invalidEdgeGroupingPenalty: number,
		createCopy(): yfiles.router.polyline.PenaltySettings,
		newInstance(): yfiles.router.polyline.PenaltySettings
	}

	declare export interface SegmentInfo {
		cellSegmentInfoCount(): number,
		getCellSegmentInfo(index: number): yfiles.router.polyline.CellSegmentInfo,
		segmentGroup: yfiles.router.polyline.SegmentGroup,
		atStrongPortConstraint: boolean
	}

	declare export interface PartitionCellKeysCompanion {
		
	}

	declare export interface IPartitionCellKeys {
		
	}

	declare export interface Interval {
		min: number,
		max: number,
		center: number,
		contains(value: number): boolean,
		size: number,
		intersects(other: yfiles.router.polyline.Interval): boolean,
		intersectsWithOtherAndMinIntersection(other: yfiles.router.polyline.Interval, minIntersection: number): boolean,
		distanceTo(value: number): number,
		distanceToWithOther(other: yfiles.router.polyline.Interval): number,
		coveredBy(other: yfiles.router.polyline.Interval): boolean,
		coveredByWithOtherAndEps(other: yfiles.router.polyline.Interval, eps: number): boolean,
		getClosest(value: number): number,
		isLessThan(other: yfiles.router.polyline.Interval): boolean,
		isGreaterThan(other: yfiles.router.polyline.Interval): boolean,
		toString(): string,
		hasSameRange(other: yfiles.router.polyline.Interval): boolean,
		hasSameRangeWithOtherAndEps(other: yfiles.router.polyline.Interval, eps: number): boolean,
		equals(other: Object): boolean,
		hashCode(): number
	}

	declare export interface IPartition {
		getNeighbors(cell: yfiles.router.polyline.PartitionCell): yfiles.algorithms.IList,
		getCells(rect: yfiles.algorithms.YRectangle): yfiles.algorithms.IList,
		bounds: yfiles.algorithms.YRectangle
	}

	declare export interface IObstaclePartition {
		init(obstacles: yfiles.algorithms.IList, bounds: yfiles.algorithms.YRectangle): void,
		getObstacles(cell: yfiles.router.polyline.PartitionCell): yfiles.algorithms.IList,
		getCellsWithObstacle(obstacle: yfiles.router.polyline.Obstacle): yfiles.algorithms.IList,
		clear(): void
	}

	declare export interface OrthogonalInterval {
		vertical: boolean,
		min: number,
		max: number,
		size: number,
		range: yfiles.router.polyline.Interval,
		location: number,
		center: yfiles.algorithms.YPoint,
		crosses(other: yfiles.router.polyline.OrthogonalInterval): boolean,
		distanceTo(other: yfiles.router.polyline.OrthogonalInterval): number,
		manhattanDistanceTo(other: yfiles.router.polyline.OrthogonalInterval): number,
		intersects(other: yfiles.router.polyline.OrthogonalInterval): boolean,
		intersectsWithOtherAndMinIntersection(
		other: yfiles.router.polyline.OrthogonalInterval, minIntersection: number
	): boolean,
		coveredBy(other: yfiles.router.polyline.OrthogonalInterval): boolean,
		hasSameRange(other: yfiles.router.polyline.OrthogonalInterval): boolean,
		toString(): string
	}

	declare export interface PartitionCell {
		putData(key: Object, data: Object): Object,
		getData(key: Object): Object,
		removeData(key: Object): Object,
		clearData(): void,
		partition: yfiles.router.polyline.IPartition,
		id: number,
		bounds: yfiles.algorithms.YRectangle,
		minX: number,
		minY: number,
		maxX: number,
		maxY: number,
		width: number,
		height: number,
		createBorderInterval(
		border: yfiles.router.polyline.PartitionCell.PartitionCellBorder
	): yfiles.router.polyline.OrthogonalInterval
	}

	declare export interface Obstacle {
		bounds: yfiles.algorithms.YRectangle,
		data: Object
	}

			
}

declare module 'DynamicDecompositionCompanion' {
		declare export interface IListener {
		onCellCreated(createdCell: yfiles.router.polyline.PartitionCell): void,
		onCellSubdivided(
		cell: yfiles.router.polyline.PartitionCell, subCells: yfiles.algorithms.IList
	): void,
		onCellFinalized(finalizedCell: yfiles.router.polyline.PartitionCell): void
	}

			
}

declare module 'PartitionCell' {
		declare export interface PartitionCellBorder {
		mirrorBorder: yfiles.router.polyline.PartitionCell.PartitionCellBorder
	}

			
}

declare module 'seriesparallel' {
		declare export interface IPortAssignment {
		assignPorts(graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node): void
	}

	declare export interface SeriesParallelLayouter {
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		considerNodeLabels: boolean,
		integratedEdgeLabeling: boolean,
		verticalAlignment: number,
		generalGraphHandling: boolean,
		nonSeriesParallelEdgeRouter: yfiles.layout.ILayouter,
		nonSeriesParallelEdgesDpKey: Object,
		defaultPortAssignment: yfiles.seriesparallel.IPortAssignment,
		defaultOutEdgeComparator: yfiles.objectcollections.IComparer,
		routingStyle: yfiles.seriesparallel.RoutingStyle,
		minimumPolylineSegmentLength: number,
		minimumSlope: number,
		preferredOctilinearSegmentLength: number,
		defaultEdgeLayoutDescriptor: yfiles.seriesparallel.EdgeLayoutDescriptor,
		minimumNodeToNodeDistance: number,
		minimumNodeToEdgeDistance: number,
		minimumEdgeToEdgeDistance: number,
		fromSketchMode: boolean
	}

	declare export interface EdgeLayoutDescriptor {
		minimumLength: number,
		minimumFirstSegmentLength: number,
		minimumLastSegmentLength: number
	}

	declare export interface DefaultOutEdgeComparator {
		compare(o1: Object, o2: Object): number
	}

	declare export interface DefaultPortAssignment {
		assignPorts(graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node): void,
		getPortBorderGap(sideLength: number, edgeCount: number): number,
		getPortDistanceDelta(sideLength: number, edgeCount: number, portBorderGap: number): number,
		mode: yfiles.seriesparallel.PortAssignmentMode,
		borderGapToPortGapRatio: number,
		forkStyle: yfiles.seriesparallel.ForkStyle
	}

			
}

declare module 'support' {
		declare export interface FilteredEnumerable<T> {
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface FilteredEnumerator<T> {
		dispose(): void,
		moveNext(): boolean,
		reset(): void,
		current: T
	}

	declare export interface CastingEnumerable<R, T> {
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface IMementoSupport {
		getState(subject: Object): Object,
		applyState(subject: Object, state: Object): void,
		stateEquals(state1: Object, state2: Object): boolean
	}

	declare export interface CastingEnumerator2<R, T> {
		current: T,
		dispose(): void,
		moveNext(): boolean,
		reset(): void
	}

	declare export interface TypedKeyMapper {
		get<T>(key: yfiles.support.TypedKey<T>): T,
		set<T>(key: yfiles.support.TypedKey<T>, value: T): void,
		removeValue<T>(key: yfiles.support.TypedKey<T>): void,
		contains<T>(key: yfiles.support.TypedKey<T>): boolean,
		clear(): void
	}

	declare export interface TypedKey<T> {
		name: string,
		defaultValue: T,
		equalsWithOther(other: yfiles.support.TypedKey<T>): boolean,
		equals(obj: Object): boolean,
		hashCode(): number,
		toString(): string
	}

	declare export interface UndoEngine {
		mergeUnits: boolean,
		undoName: string,
		autoAddTimeSpan: yfiles.system.TimeSpan,
		redoName: string,
		addUnit(unit: yfiles.support.IUndoUnit): void,
		beginCompoundEdit(undoName: string, redoName: string): yfiles.support.ICompoundEdit,
		getToken(): Object,
		size: number,
		undoText: string,
		redoText: string,
		clear(): void,
		undo(): void,
		currentCompoundEdit: yfiles.support.ICompoundEdit,
		redo(): void,
		performingUndo: boolean,
		performingRedo: boolean,
		canUndo(): boolean,
		canRedo(): boolean,
		onPropertyChanged(name: string): void,
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		dispose(): void,
		toString(): string
	}

	declare export interface CastingEnumerator<T> {
		current: T,
		dispose(): void,
		moveNext(): boolean,
		reset(): void
	}

	declare export interface IUndoUnit {
		undo(): void,
		redo(): void,
		canUndo(): boolean,
		canRedo(): boolean,
		undoName: string,
		redoName: string,
		addUnit(unit: yfiles.support.IUndoUnit): boolean,
		replaceUnit(unit: yfiles.support.IUndoUnit): boolean
	}

	declare export interface MementoUndoUnit {
		dispose(): void,
		undoImpl(): void,
		redoImpl(): void,
		addUnit(unit: yfiles.support.IUndoUnit): boolean,
		replaceUnit(unit: yfiles.support.IUndoUnit): boolean,
		toString(): string
	}

	declare export interface MementoUndoableEdit {
		end(): void,
		dispose(): void,
		cancel(): void
	}

	declare export interface DelegateUndoUnit<T> {
		undoImpl(): void,
		redoImpl(): void
	}

	declare export interface MementoStateStruct {
		subject: Object,
		state: Object,
		mementoSupport: yfiles.support.IMementoSupport
	}

	declare export interface XmlNamespace {
		namespaceName: string
	}

	declare export interface XmlName {
		localName: string,
		xmlNamespace: yfiles.support.XmlNamespace,
		namespaceName: string,
		equals(obj: Object): boolean,
		hashCode(): number
	}

	declare export interface IUndoSupport {
		beginEditForItems<T>(
		undoName: string, redoName: string, items: yfiles.collections.IEnumerable<T>
	): yfiles.support.ICompoundEdit,
		addUnit(unit: yfiles.support.IUndoUnit): void,
		beginEdit(undoName: string, redoName: string): yfiles.support.ICompoundEdit
	}

	declare export interface FlagsAttribute {
		
	}

	declare export interface State {
		tag: Object,
		addStateEnteredListener(
		value: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): void,
		removeStateEnteredListener(
		value: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): void,
		addStateExitedListener(
		value: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): void,
		removeStateExitedListener(
		value: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): void,
		toString(): string,
		enabled: boolean
	}

	declare export interface ITagOwner {
		tag: Object
	}

	declare export interface ValueSerializerAttribute {
		valueSerializerType: yfiles.lang.Class
	}

	declare export interface Lookups {
		
	}

	declare export interface ItemInputEventArgs<T> {
		handled: boolean
	}

	declare export interface LookupChain {
		add(link: yfiles.support.IContextLookupChainLink): void,
		remove(link: yfiles.support.IContextLookupChainLink): void,
		notifyChange(): void,
		onPropertyChanged(eventArgs: yfiles.system.PropertyChangedEventArgs): void,
		lookupForItem(item: Object, type: yfiles.lang.Class): Object,
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		addWithFactory<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, factory: (context: TContext) => TResult
	): yfiles.support.IContextLookupChainLink,
		addWithFactoryAndNullIsFallback<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, factory: (context: TContext) => TResult, nullIsFallback: boolean
	): yfiles.support.IContextLookupChainLink,
		addWithWrapperFactory<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, wrapperFactory: (item: TContext, baseImplementation: TResult) => TResult
	): yfiles.support.IContextLookupChainLink,
		addWithWrapperFactoryAndDecorateNull<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, wrapperFactory: (item: TContext, baseImplementation: TResult) => TResult, decorateNull: boolean
	): yfiles.support.IContextLookupChainLink,
		addConstant<TResult>(
		resultType: yfiles.lang.Class, result: TResult
	): yfiles.support.IContextLookupChainLink
	}

	declare export interface ILookupDecorator {
		canDecorate(t: yfiles.lang.Class): boolean,
		addLookup(t: yfiles.lang.Class, lookup: yfiles.support.IContextLookupChainLink): void,
		removeLookup(t: yfiles.lang.Class, lookup: yfiles.support.IContextLookupChainLink): void,
		addWithFactory<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, factory: (context: TContext) => TResult
	): yfiles.support.IContextLookupChainLink,
		addWithFactoryAndNullIsFallback<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, factory: (context: TContext) => TResult, nullIsFallback: boolean
	): yfiles.support.IContextLookupChainLink,
		addWithWrapperFactoryAndDecorateNull<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, wrapperFactory: (item: TContext, baseImplementation: TResult) => TResult, decorateNull: boolean
	): yfiles.support.IContextLookupChainLink,
		addWithWrapperFactory<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, wrapperFactory: (item: TContext, baseImplementation: TResult) => TResult
	): yfiles.support.IContextLookupChainLink,
		addConstant<TContext, TResult>(
		contextType: yfiles.lang.Class, resultType: yfiles.lang.Class, result: TResult
	): yfiles.support.IContextLookupChainLink
	}

	declare export interface Transition {
		addTransitionDoneListener(value: (t: yfiles.support.Transition) => void): void,
		removeTransitionDoneListener(value: (t: yfiles.support.Transition) => void): void,
		tag: Object,
		isTrigger(eventSource: Object, eventArgs: yfiles.system.EventArgs): boolean,
		eventRecognizer: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean,
		enabled: boolean,
		source: yfiles.support.State,
		target: yfiles.support.State
	}

	declare export interface TagOwnerMapper<TItemType, TValue> {
		getItem(key: TItemType): TValue,
		setItem(key: TItemType, value: TValue): void,
		removeItem(key: TItemType): void
	}

	declare export interface StateMachine {
		addTransitionDoneListener(value: (t: yfiles.support.Transition) => void): void,
		removeTransitionDoneListener(value: (t: yfiles.support.Transition) => void): void,
		addStateEnteredListener(
		value: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): void,
		removeStateEnteredListener(
		value: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): void,
		addStateExitedListener(
		value: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): void,
		removeStateExitedListener(
		value: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): void,
		addTransitionCreatedListener(
		value: (
		machine: yfiles.support.StateMachine, transition: yfiles.support.Transition
	) => void
	): void,
		removeTransitionCreatedListener(
		value: (
		machine: yfiles.support.StateMachine, transition: yfiles.support.Transition
	) => void
	): void,
		addTransitionRemovedListener(
		value: (
		machine: yfiles.support.StateMachine, transition: yfiles.support.Transition
	) => void
	): void,
		removeTransitionRemovedListener(
		value: (
		machine: yfiles.support.StateMachine, transition: yfiles.support.Transition
	) => void
	): void,
		addStateCreatedListener(
		value: (machine: yfiles.support.StateMachine, state: yfiles.support.State) => void
	): void,
		removeStateCreatedListener(
		value: (machine: yfiles.support.StateMachine, state: yfiles.support.State) => void
	): void,
		addStateRemovedListener(
		value: (machine: yfiles.support.StateMachine, state: yfiles.support.State) => void
	): void,
		removeStateRemovedListener(
		value: (machine: yfiles.support.StateMachine, state: yfiles.support.State) => void
	): void,
		currentState: yfiles.support.State,
		findTransition(
		srcState: yfiles.support.State, targetState: yfiles.support.State
	): yfiles.support.Transition,
		reset(): void,
		removeState(state: yfiles.support.State): void,
		removeTransition(transition: yfiles.support.Transition): void,
		states: yfiles.collections.IEnumerable<yfiles.support.State>,
		transitions: yfiles.collections.IEnumerable<yfiles.support.Transition>,
		startState: yfiles.support.State,
		createState(): yfiles.support.State,
		createStateWithHandler(
		stateEntered: (newState: yfiles.support.State, lastState: yfiles.support.State) => void
	): yfiles.support.State,
		createTransitionWithDefaults(
		source: yfiles.support.State, target: yfiles.support.State
	): yfiles.support.Transition,
		createTransitionWithCallback(
		source: yfiles.support.State, target: yfiles.support.State, er: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean
	): yfiles.support.Transition,
		createTransitionWithEventRecognizer(
		source: yfiles.support.State, target: yfiles.support.State, er: yfiles.input.IEventRecognizer
	): yfiles.support.Transition,
		createTransition(
		source: yfiles.support.State, target: yfiles.support.State, er: yfiles.input.IEventRecognizer, te: (t: yfiles.support.Transition) => void
	): yfiles.support.Transition,
		createTransitionWithCallbackAndDoneHandler(
		source: yfiles.support.State, target: yfiles.support.State, er: (eventSource: Object, eventArg: yfiles.system.EventArgs) => boolean, te: (t: yfiles.support.Transition) => void
	): yfiles.support.Transition,
		run(eventSource: Object, eventArgs: yfiles.system.EventArgs): void,
		performTransition(t: yfiles.support.Transition): void,
		onStateChange(s: yfiles.support.State, oldState: yfiles.support.State): void,
		onTransition(t: yfiles.support.Transition): void
	}

	declare export interface IContextLookupChainLink {
		setNext(next: yfiles.support.IContextLookup): void
	}

	declare export interface AbstractContextLookupChainLink {
		setNext(next: yfiles.support.IContextLookup): void,
		lookupForItem(item: Object, type: yfiles.lang.Class): Object
	}

	declare export interface IContextLookup {
		lookupForItem(item: Object, type: yfiles.lang.Class): Object,
		contextGet<T>(tType: yfiles.lang.Class, item: Object): T,
		safeContextGet<T>(tType: yfiles.lang.Class, item: Object): T
	}

	declare export interface SingleEnumerator<T> {
		dispose(): void,
		moveNext(): boolean,
		reset(): void,
		currentObject: Object
	}

	declare export interface CompositeEnumerator<T, R, S> {
		dispose(): void,
		moveNext(): boolean,
		reset(): void,
		currentObject: Object
	}

	declare export interface SingletonList<T> {
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		isReadOnly: boolean,
		indexOf(item: T): number,
		insert(index: number, item: T): void,
		removeAt(index: number): void,
		get(index: number): T,
		set(index: number, value: T): void
	}

	declare export interface SingleEnumerable<T> {
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		count: number,
		getItem(i: number): T
	}

	declare export interface SingletonCollection<T> {
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		isReadOnly: boolean
	}

	declare export interface EmptyListEnumerable<T> {
		count: number,
		getItem(i: number): T,
		isReadOnly: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface EmptyList<T> {
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		count: number,
		isReadOnly: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		indexOf(item: T): number,
		insert(index: number, item: T): void,
		removeAt(index: number): void,
		get(index: number): T,
		set(index: number, value: T): void
	}

	declare export interface EmptyCollection<T> {
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		count: number,
		isReadOnly: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface CompoundUndoUnit {
		count: number,
		redoName: string,
		undoName: string,
		addUnit(unit: yfiles.support.IUndoUnit): boolean,
		replaceUnit(unit: yfiles.support.IUndoUnit): boolean,
		addToCompound(unit: yfiles.support.IUndoUnit): void,
		clear(): void,
		undo(): void,
		redo(): void,
		removeUnit(unit: yfiles.support.IUndoUnit): boolean,
		canUndo(): boolean,
		canRedo(): boolean,
		dispose(): void,
		disposed: boolean,
		toString(): string
	}

	declare export interface DictionaryLookup {
		put(type: yfiles.lang.Class, value: Object): void,
		lookup(type: yfiles.lang.Class): Object,
		hasLookup(type: yfiles.lang.Class): boolean,
		remove(type: yfiles.lang.Class): void
	}

	declare export interface AbstractUndoUnit {
		undo(): void,
		undoImpl(): void,
		redo(): void,
		redoImpl(): void,
		canUndo(): boolean,
		canRedo(): boolean,
		undoName: string,
		redoName: string,
		addUnit(unit: yfiles.support.IUndoUnit): boolean,
		replaceUnit(unit: yfiles.support.IUndoUnit): boolean,
		dispose(): void,
		toString(): string
	}

	declare export interface CanBeNullAttribute {
		
	}

	declare export interface CompositeCollectionModel<T> {
		addItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		count: number,
		isReadOnly: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		dispose(): void
	}

	declare export interface CompositeEnumerable<T, R, S> {
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface CompositeCollectionModel2<T, R, S> {
		addItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		count: number,
		isReadOnly: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		dispose(): void
	}

	declare export interface NotNullAttribute {
		
	}

	declare export interface CallbackLookup {
		subject: Object,
		handler: (subject: Object, type: yfiles.lang.Class) => Object,
		lookup(type: yfiles.lang.Class): Object
	}

	declare export interface EmptyEnumerable<T> {
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface SizeExtensions {
		
	}

	declare export interface FilteredCollectionModel<T> {
		onItemRovedInBackingStore(itemEventArgs: yfiles.model.ItemEventArgs<T>): void,
		onItemRemoved(evt: yfiles.model.ItemEventArgs<T>): void,
		onItemChanged(evt: yfiles.model.ItemEventArgs<T>): void,
		onItemAddedInBackingStore(itemEventArgs: yfiles.model.ItemEventArgs<T>): void,
		onItemAdded(evt: yfiles.model.ItemEventArgs<T>): void,
		addItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemAddedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemRemovedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		addItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		removeItemChangedListener(value: (source: Object, evt: yfiles.model.ItemEventArgs<T>) => void): void,
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		accepts(item: T): boolean,
		predicateChanged(): void,
		onItemRemovedByFilter(itemEventArgs: yfiles.model.ItemEventArgs<T>): void,
		onItemAddedByFilter(itemEventArgs: yfiles.model.ItemEventArgs<T>): void,
		predicateChangedWithForItem(forItem: T): void,
		copyToArrayAt(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		count: number,
		isReadOnly: boolean,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		dispose(): void
	}

	declare export interface Future<T> {
		value: T,
		hasValue: boolean,
		onValueDetermined(value: T): void,
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void
	}

	declare export interface RectangleExtensions {
		
	}

	declare export interface LookupExtensions {
		
	}

	declare export interface OrientedRectangleExtensions {
		
	}

	declare export interface PointExtensions {
		
	}

	declare export interface ILookup {
		lookup(type: yfiles.lang.Class): Object,
		safeGet<T>(tType: yfiles.lang.Class): T
	}

	declare export interface ILookupProvider<T> {
		getContext(item: T): yfiles.support.ILookup
	}

	declare export interface XmlLoader {
		
	}

	declare export interface GenericYList<T> {
		count: number,
		isSynchronized: boolean,
		syncRoot: Object,
		copyTo(array: Object, index: number): void,
		addFirst(o: T): yfiles.support.GenericListCell<T>,
		getCell(index: number): yfiles.support.GenericListCell<T>,
		isReadOnly: boolean,
		isFixedSize: boolean,
		addLast(o: T): yfiles.support.GenericListCell<T>,
		addLastCell(cell: yfiles.support.GenericListCell<T>): void,
		addFirstCell(cell: yfiles.support.GenericListCell<T>): void,
		add(o: T): void,
		insertBefore(
		o: T, refCell: yfiles.support.GenericListCell<T>
	): yfiles.support.GenericListCell<T>,
		insertCellBefore(
		cellToInsert: yfiles.support.GenericListCell<T>, refCell: yfiles.support.GenericListCell<T>
	): void,
		insertCellAfter(
		cellToInsert: yfiles.support.GenericListCell<T>, refCell: yfiles.support.GenericListCell<T>
	): void,
		insertAfter(
		o: T, refCell: yfiles.support.GenericListCell<T>
	): yfiles.support.GenericListCell<T>,
		isEmpty: boolean,
		clear(): void,
		first: T,
		pop(): T,
		push(o: T): yfiles.support.GenericListCell<T>,
		peek(): T,
		last: T,
		popLast(): T,
		get(i: number): T,
		set(i: number, value: T): void,
		firstCell: yfiles.support.GenericListCell<T>,
		lastCell: yfiles.support.GenericListCell<T>,
		removeCell(c: yfiles.support.GenericListCell<T>): T,
		findCell(o: T): yfiles.support.GenericListCell<T>,
		getIndex(cell: yfiles.support.GenericListCell<T>): number,
		indexOf(o: T): number,
		insert(index: number, o: T): void,
		toArray(): T[],
		userObject: Object,
		remove(o: T): boolean,
		removeAt(index: number): void,
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		contains(item: T): boolean,
		copyToArrayAt(array: T[], index: number): void,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		addCollectionChangedListener(
		value: (sender: Object, e: yfiles.collections.NotifyCollectionChangedEventArgs) => void
	): void,
		removeCollectionChangedListener(
		value: (sender: Object, e: yfiles.collections.NotifyCollectionChangedEventArgs) => void
	): void,
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void
	}

	declare export interface GenericListCell<T> {
		next: yfiles.support.GenericListCell<T>,
		previous: yfiles.support.GenericListCell<T>,
		value: T
	}

	declare export interface EventFilter<T> {
		eventRestartsTimer: boolean,
		duration: yfiles.system.TimeSpan,
		cancel(): void,
		onTick(): void,
		onEventWithSource(source: Object, eventArgs: T): void,
		onEventWithEventArgs(eventArgs: T): void,
		onEvent(): void,
		flush(): void,
		onEventWithTypedArgs<TEventArgs>(
		EventArgsType: yfiles.lang.Class, source: Object, eventArgs: TEventArgs
	): void,
		onEventCaptured(lastSender: Object, lastArgs: T): void,
		startTimer(): void,
		restartTimer(): void,
		stopTimer(): void,
		onFilteredEvent(lastSender: Object, lastArgs: T): void,
		addEventListener(value: (sender: Object, e: T) => void): void,
		removeEventListener(value: (sender: Object, e: T) => void): void
	}

	declare export interface EmptyEnumerator<T> {
		current: T,
		dispose(): void,
		moveNext(): boolean,
		reset(): void
	}

	declare export interface ICompoundEdit {
		cancel(): void,
		end(): void
	}

			
}

declare module 'system' {
		declare export interface IDisposable {
		dispose(): void
	}

	declare export interface ICloneable {
		clone(): Object
	}

	declare export interface GenericMethodInfo {
		typeArguments: yfiles.lang.Class[],
		invoke(thisArg: Object, parameters: Object[]): Object
	}

	declare export interface MethodInfo {
		returnType: yfiles.lang.Class,
		isConstructor: boolean,
		memberType: yfiles.system.MemberTypes,
		makeGenericMethod(typeArguments: yfiles.lang.Class[]): yfiles.system.MethodInfo
	}

	declare export interface MethodBase {
		isStatic: boolean,
		isConstructor: boolean,
		fn: Function,
		noPolymorphicCall: boolean,
		getParameters(): yfiles.system.ParameterInfo[],
		invoke(thisArg: Object, parameters: Object[]): Object,
		attributes: yfiles.system.MethodAttributes
	}

	declare export interface MemberInfo {
		_attributes: yfiles.lang.Attribute[],
		declaringType: yfiles.lang.Class,
		reflectedType: yfiles.lang.Class,
		name: string,
		memberType: yfiles.system.MemberTypes,
		isPrivate: boolean,
		isPublic: boolean,
		getCustomAttributes(inherit: boolean): yfiles.lang.Attribute[],
		getCustomAttributesOfType(attributeType: yfiles.lang.Class, inherit: boolean): yfiles.lang.Attribute[],
		isDefined(attributeType: yfiles.lang.Class, inherit: boolean): boolean
	}

	declare export interface ConstructorInfo {
		isConstructor: boolean,
		invoke(thisArg: Object, parameters: Object[]): Object,
		invokeConstructor(parameters: Object[]): Object,
		memberType: yfiles.system.MemberTypes
	}

	declare export interface ParameterInfo {
		name: string,
		parameterType: yfiles.lang.Class,
		position: number,
		isOptional: boolean,
		member: yfiles.system.MemberInfo
	}

	declare export interface FieldInfo {
		isStatic: boolean,
		fieldType: yfiles.lang.Class,
		getValue(obj: Object): Object,
		setValue(obj: Object, value: Object): void,
		memberType: yfiles.system.MemberTypes
	}

	declare export interface PropertyInfo {
		canRead: boolean,
		canWrite: boolean,
		propertyType: yfiles.lang.Class,
		getGetMethod(): yfiles.system.MethodInfo,
		getSetMethod(): yfiles.system.MethodInfo,
		getIndexParameters(): yfiles.system.ParameterInfo[],
		getValue(obj: Object, index: Object[]): Object,
		setValue(obj: Object, value: Object, index: Object[]): void,
		memberType: yfiles.system.MemberTypes
	}

	declare export interface MissingManifestResourceException {
		
	}

	declare export interface ResourceManager {
		ignoreCase: boolean,
		getString(s: string): string,
		getStringForCulture(s: string, info: yfiles.system.CultureInfo): string,
		getObject(s: string): Object,
		getObjectForCulture(s: string, info: yfiles.system.CultureInfo): Object
	}

	declare export interface CultureInfo {
		name: string,
		parent: yfiles.system.CultureInfo
	}

	declare export interface INotifyPropertyChanged {
		addPropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void,
		removePropertyChangedListener(
		value: (sender: Object, e: yfiles.system.PropertyChangedEventArgs) => void
	): void
	}

	declare export interface PropertyChangedEventArgs {
		propertyName: string
	}

	declare export interface Brushes {
		
	}

	declare export interface DoubleCollectionValueSerializerBase {
		canConvertToString(value: Object, context: yfiles.system.IValueSerializerContext): boolean,
		convertToString(o: Object, context: yfiles.system.IValueSerializerContext): string,
		canConvertFromString(value: string, context: yfiles.system.IValueSerializerContext): boolean
	}

	declare export interface ApplicationResources {
		tryGetValue(resourceKey: yfiles.system.ResourceKey, value: Object): boolean,
		containsKey(key: yfiles.system.ResourceKey): boolean,
		remove(key: yfiles.system.ResourceKey): boolean,
		getItem(key: yfiles.system.ResourceKey): Object,
		setItem(key: yfiles.system.ResourceKey, value: Object): void
	}

	declare export interface ApplicationCommands {
		
	}

	declare export interface Math {
		
	}

	declare export interface TargetException {
		
	}

	declare export interface TypeAttribute {
		type: yfiles.lang.Class
	}

	declare export interface Monitor {
		
	}

	declare export interface ParameterAttribute {
		name: string,
		type: yfiles.lang.Class,
		isOptional: boolean,
		toParameterInfo(owner: yfiles.system.MemberInfo, position: number): yfiles.system.ParameterInfo
	}

	declare export interface Pens {
		
	}

	declare export interface DragDrop {
		
	}

	declare export interface QueryContinueDragEventArgs {
		action: yfiles.system.DragAction,
		escapePressed: boolean,
		keyStates: yfiles.system.DragDropKeyStates,
		handled: boolean
	}

	declare export interface DependencyProperty {
		
	}

	declare export interface XmlExtensions {
		
	}

	declare export interface IDragSource {
		dragSource: yfiles.system.DragSource
	}

	declare export interface IDropTarget {
		dropTarget: yfiles.system.DropTarget
	}

	declare export interface GiveFeedbackEventArgs {
		effects: yfiles.system.DragDropEffects
	}

	declare export interface DragEventArgs {
		getPosition(element: HTMLElement): yfiles.geometry.PointD,
		allowedEffects: yfiles.system.DragDropEffects,
		data: yfiles.system.IDataObject,
		effects: yfiles.system.DragDropEffects,
		keyStates: yfiles.system.DragDropKeyStates,
		handled: boolean
	}

	declare export interface IValueConverter {
		convert(value: Object, parameter: Object): Object,
		convertBack(value: Object, parameter: Object): Object
	}

	declare export interface DropTarget {
		addDragEnterListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		removeDragEnterListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		addDragLeaveListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		removeDragLeaveListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		addDragOverListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		removeDragOverListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		addDropListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		removeDropListener(value: (sender: Object, e: yfiles.system.DragEventArgs) => void): void,
		target: HTMLElement
	}

	declare export interface DragSource {
		addGiveFeedbackListener(value: (sender: Object, e: yfiles.system.GiveFeedbackEventArgs) => void): void,
		removeGiveFeedbackListener(value: (sender: Object, e: yfiles.system.GiveFeedbackEventArgs) => void): void,
		addQueryContinueDragListener(
		value: (sender: Object, e: yfiles.system.QueryContinueDragEventArgs) => void
	): void,
		removeQueryContinueDragListener(
		value: (sender: Object, e: yfiles.system.QueryContinueDragEventArgs) => void
	): void,
		source: HTMLElement,
		onGiveFeedback(args: yfiles.system.GiveFeedbackEventArgs): void,
		onQueryContinueDrag(args: yfiles.system.QueryContinueDragEventArgs): void,
		allowDrag: boolean,
		dragData: Object,
		dragDropEffects: yfiles.system.DragDropEffects,
		doDragDrop(data: Object, effects: yfiles.system.DragDropEffects): void,
		doDragDropWithDataObject(data: yfiles.system.IDataObject, effects: yfiles.system.DragDropEffects): void
	}

	declare export interface StringWriter {
		write(s: string): void,
		writeLine(s: string): void,
		writeObject(o: Object): void,
		writeLineObject(o: Object): void,
		writeNewLine(): void,
		toString(): string,
		flush(): void
	}

	declare export interface RoutedEventArgs {
		originalSource: Object,
		handled: boolean
	}

	declare export interface StringExtensions {
		
	}

	declare export interface IEquatable<T> {
		equalsTyped(other: T): boolean
	}

	declare export interface Color {
		r: number,
		g: number,
		b: number,
		a: number,
		equalsColor(other: yfiles.system.Color): boolean,
		equals(obj: Object): boolean,
		hashCode(): number,
		toSvgColor(): string
	}

	declare export interface PropertyMetadata {
		
	}

	declare export interface TimeSpan {
		compareTo(obj: yfiles.system.TimeSpan): number,
		days: number,
		totalMilliseconds: number,
		milliseconds: number,
		totalSeconds: number,
		equalsTyped(other: yfiles.system.TimeSpan): boolean,
		clone(): yfiles.system.TimeSpan
	}

	declare export interface TypeConverter {
		canConvertFrom(sourceType: yfiles.lang.Class): boolean,
		canConvertFromWithContext(
		context: yfiles.system.ITypeDescriptorContext, sourceType: yfiles.lang.Class
	): boolean,
		canConvertTo(targetType: yfiles.lang.Class): boolean,
		canConvertToWithContext(
		context: yfiles.system.ITypeDescriptorContext, destinationType: yfiles.lang.Class
	): boolean,
		convertFrom(value: Object): Object,
		convertFromWithContext(context: yfiles.system.ITypeDescriptorContext, value: Object): Object,
		convertFromString(s: string): Object,
		convertFromInvariantString(s: string): Object,
		convertFromInvariantStringWithContext(context: yfiles.system.ITypeDescriptorContext, s: string): Object,
		convertToInvariantString(value: Object): string,
		convertToString(value: Object): string,
		convertToInvariantStringWithContext(context: yfiles.system.ITypeDescriptorContext, value: Object): string,
		convertFromWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object
	): Object,
		convertTo(value: Object, destinationType: yfiles.lang.Class): Object,
		convertToWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object, destinationType: yfiles.lang.Class
	): Object
	}

	declare export interface WeakReference {
		target: Object,
		isAlive: boolean
	}

	declare export interface Dispatcher {
		dispatchAll(): void,
		beginInvoke(target: yfiles.lang.delegate, args: Object[]): void,
		beginInvokeNoArgs(target: yfiles.lang.delegate): void,
		beginInvokeAction(target: () => void): void,
		invoke(target: yfiles.lang.delegate, args: Object[]): void
	}

	declare export interface DispatcherTimer {
		start(): void,
		stop(): void,
		isEnabled: boolean,
		interval: yfiles.system.TimeSpan,
		addTickListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeTickListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void
	}

	declare export interface IValueSerializerContext {
		getValueSerializerFor(type: yfiles.lang.Class): yfiles.system.ValueSerializer,
		getValueSerializerForPropertyInfo(p: yfiles.system.PropertyInfo): yfiles.system.ValueSerializer
	}

	declare export interface MarkupExtension {
		provideValue(serviceProvider: yfiles.support.ILookup): Object
	}

	declare export interface InputGestureCollection {
		
	}

	declare export interface SealableCollection<T> {
		getEnumerator(): yfiles.collections.IEnumerator<T>,
		add(item: T): void,
		addWithValue(value: Object): number,
		containsValue(value: Object): boolean,
		clear(): void,
		indexOfItem(value: Object): number,
		insertAt(index: number, value: Object): void,
		removeValue(value: Object): void,
		contains(item: T): boolean,
		copyToFromIndex(array: T[], arrayIndex: number): void,
		remove(item: T): boolean,
		copyTo(array: Object, index: number): void,
		count: number,
		isReadOnly: boolean,
		isFixedSize: boolean,
		isSealed: boolean,
		indexOf(item: T): number,
		insert(index: number, item: T): void,
		removeAt(index: number): void,
		getObject(index: number): Object,
		setObject(index: number, value: Object): void,
		getItemAt(index: number): T,
		setItem(index: number, value: T): void,
		seal(): void,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator,
		onCollectionChanged(args: yfiles.collections.NotifyCollectionChangedEventArgs): void,
		addCollectionChangedListener(
		value: (sender: Object, e: yfiles.collections.NotifyCollectionChangedEventArgs) => void
	): void,
		removeCollectionChangedListener(
		value: (sender: Object, e: yfiles.collections.NotifyCollectionChangedEventArgs) => void
	): void
	}

	declare export interface ITypeDescriptorContext {
		onComponentChanged(): void,
		onComponentChanging(): boolean,
		instance: Object,
		container: Object,
		propertyDescriptor: Object
	}

	declare export interface Pen {
		brush: yfiles.system.Brush,
		dashCap: yfiles.system.PenLineCap,
		endLineCap: yfiles.system.PenLineCap,
		lineJoin: yfiles.system.PenLineJoin,
		dashStyle: yfiles.system.DashStyle,
		miterLimit: number,
		startLineCap: yfiles.system.PenLineCap,
		thickness: number,
		freezeCore(): void,
		clone(): yfiles.system.Freezable,
		cloneCurrentValue(): yfiles.system.Pen,
		toSvgStroke(): string
	}

	declare export interface ResourceKey {
		key: string,
		toString(): string
	}

	declare export interface ResourceKeyConverter {
		canConvertFromWithContext(
		context: yfiles.system.ITypeDescriptorContext, sourceType: yfiles.lang.Class
	): boolean,
		canConvertToWithContext(
		context: yfiles.system.ITypeDescriptorContext, destinationType: yfiles.lang.Class
	): boolean,
		convertFromWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object
	): Object,
		convertToWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object, destinationType: yfiles.lang.Class
	): Object
	}

	declare export interface MarkupExtensionReturnTypeAttribute {
		returnType: yfiles.lang.Class
	}

	declare export interface ContentPropertyAttribute {
		name: string
	}

	declare export interface NavigationCommands {
		
	}

	declare export interface ExecutedRoutedEventArgs {
		handled: boolean,
		parameter: Object,
		source: Object,
		command: yfiles.system.ICommand
	}

	declare export interface Freezable {
		isFrozen: boolean,
		freeze(): void,
		writePreamble(): void,
		freezeCore(): void,
		getAsFrozen(): yfiles.system.Freezable,
		canFreeze: boolean,
		clone(): yfiles.system.Freezable
	}

	declare export interface KeyGesture {
		matches(targetElement: Object, inputEventArgs: yfiles.system.RoutedEventArgs): boolean,
		displayString: string,
		key: yfiles.input.Key,
		modifiers: yfiles.input.ModifierKeys
	}

	declare export interface InputBindingCollection {
		
	}

	declare export interface InputGesture {
		matches(targetElement: Object, inputEventArgs: yfiles.system.RoutedEventArgs): boolean
	}

	declare export interface ICommand {
		canExecute(parameter: Object): boolean,
		execute(parameter: Object): void,
		addCanExecuteChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeCanExecuteChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void
	}

	declare export interface InputBinding {
		commandParameter: Object,
		commandTarget: yfiles.canvas.Control,
		command: yfiles.system.ICommand,
		gesture: yfiles.system.InputGesture
	}

	declare export interface KeyBinding {
		key: yfiles.input.Key,
		modifiers: yfiles.input.ModifierKeys
	}

	declare export interface RoutedCommand {
		addCanExecuteChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		removeCanExecuteChangedListener(value: (sender: Object, e: yfiles.system.EventArgs) => void): void,
		canExecuteOnTarget(parameter: Object, target: yfiles.canvas.Control): boolean,
		executeOnTarget(parameter: Object, target: yfiles.canvas.Control): void,
		canExecute(parameter: Object): boolean,
		execute(parameter: Object): void,
		onCanExecuteChanged(args: yfiles.system.EventArgs): void,
		inputGestures: yfiles.system.InputGestureCollection,
		name: string,
		ownerType: yfiles.lang.Class
	}

	declare export interface GradientStopCollection {
		freezeCore(): void,
		add(item: yfiles.system.GradientStop): void,
		addWithValue(value: Object): number,
		containsValue(value: Object): boolean,
		clear(): void,
		indexOfItem(value: Object): number,
		insertAt(index: number, value: Object): void,
		removeValue(value: Object): void,
		contains(item: yfiles.system.GradientStop): boolean,
		copyToArrayAt(array: yfiles.system.GradientStop[], arrayIndex: number): void,
		remove(item: yfiles.system.GradientStop): boolean,
		copyTo(array: Object, index: number): void,
		count: number,
		syncRoot: Object,
		isSynchronized: boolean,
		isReadOnly: boolean,
		isFixedSize: boolean,
		indexOf(item: yfiles.system.GradientStop): number,
		insert(index: number, item: yfiles.system.GradientStop): void,
		removeAt(index: number): void,
		getObject(index: number): Object,
		setObject(index: number, value: Object): void,
		get(index: number): yfiles.system.GradientStop,
		set(index: number, value: yfiles.system.GradientStop): void,
		getEnumerator(): yfiles.collections.IEnumerator<yfiles.system.GradientStop>,
		getObjectEnumerator(): yfiles.objectcollections.IEnumerator
	}

	declare export interface SolidColorBrush {
		color: yfiles.system.Color
	}

	declare export interface Brush {
		
	}

	declare export interface GradientBrush {
		gradientStops: yfiles.system.GradientStopCollection,
		freezeCore(): void,
		toSvgGradient(): SVGElement,
		updateSvgGradient(oldElement: SVGElement, context: yfiles.canvas.ICanvasContext): void,
		createDefsElement(context: yfiles.canvas.ICanvasContext): SVGElement,
		updateDefsElement(oldElement: SVGElement, context: yfiles.canvas.ICanvasContext): void,
		accept(ctx: yfiles.canvas.ICanvasContext, item: Node, id: string): boolean
	}

	declare export interface GradientStop {
		color: yfiles.system.Color,
		offset: number,
		toSvgColor(): string
	}

	declare export interface HatchBrushes {
		
	}

	declare export interface XmlnsPrefixAttribute {
		prefix: string,
		xmlNamespace: string
	}

	declare export interface XmlnsDefinitionAttribute {
		assemblyName: string,
		clrNamespace: string,
		xmlNamespace: string
	}

	declare export interface TouchEventArgs {
		position: yfiles.geometry.PointD,
		getPosition(target: Element): yfiles.geometry.PointD,
		handled: boolean,
		touchDevice: yfiles.system.TouchDevice
	}

	declare export interface TouchDevice {
		id: number
	}

	declare export interface RoutedUICommand {
		text: string,
		toString(): string
	}

	declare export interface Typeface {
		fontSize: number,
		fontFamily: string,
		fontStyle: yfiles.system.FontStyle,
		fontWeight: yfiles.system.FontWeight,
		lineSpacing: number,
		textDecoration: yfiles.system.TextDecoration
	}

	declare export interface PatternBrush {
		content: yfiles.drawing.Visual,
		viewBox: yfiles.geometry.RectD,
		origin: yfiles.geometry.PointD,
		size: yfiles.geometry.SizeD,
		updateDefsElement(oldElement: SVGElement, context: yfiles.canvas.ICanvasContext): void,
		createDefsElement(context: yfiles.canvas.ICanvasContext): SVGElement,
		accept(context: yfiles.canvas.ICanvasContext, node: Node, id: string): boolean
	}

	declare export interface RadialGradientBrush {
		center: yfiles.geometry.PointD,
		gradientOrigin: yfiles.geometry.PointD,
		radiusX: number,
		radiusY: number,
		spreadMethod: yfiles.system.GradientSpreadMethod,
		getRadialSpreadMethod(): string,
		toSvgGradient(): SVGElement,
		updateSvgGradient(oldElement: SVGElement, context: yfiles.canvas.ICanvasContext): void
	}

	declare export interface LinearGradientBrush {
		spreadMethod: yfiles.system.GradientSpreadMethod,
		startPoint: yfiles.geometry.PointD,
		endPoint: yfiles.geometry.PointD,
		getLinearSpreadMethod(): string,
		toSvgGradient(): SVGElement,
		updateSvgGradient(oldElement: SVGElement, context: yfiles.canvas.ICanvasContext): void
	}

	declare export interface UIElementExtensions {
		
	}

	declare export interface ValueSerializer {
		canConvertToString(value: Object, context: yfiles.system.IValueSerializerContext): boolean,
		convertToString(o: Object, context: yfiles.system.IValueSerializerContext): string,
		convertFromString(value: string, context: yfiles.system.IValueSerializerContext): Object,
		canConvertFromString(value: string, context: yfiles.system.IValueSerializerContext): boolean
	}

	declare export interface DoubleCollection {
		
	}

	declare export interface CommandManager {
		
	}

	declare export interface ComponentCommands {
		
	}

	declare export interface ColorValueSerializer {
		canConvertFromString(value: string, context: yfiles.system.IValueSerializerContext): boolean,
		canConvertToString(value: Object, context: yfiles.system.IValueSerializerContext): boolean,
		convertFromString(c: string, context: yfiles.system.IValueSerializerContext): Object,
		convertToString(o: Object, context: yfiles.system.IValueSerializerContext): string
	}

	declare export interface CommandBinding {
		addCanExecuteListener(
		value: (sender: Object, e: yfiles.system.CanExecuteRoutedEventArgs) => void
	): void,
		removeCanExecuteListener(
		value: (sender: Object, e: yfiles.system.CanExecuteRoutedEventArgs) => void
	): void,
		addExecutedListener(
		value: (sender: Object, e: yfiles.system.ExecutedRoutedEventArgs) => void
	): void,
		removeExecutedListener(
		value: (sender: Object, e: yfiles.system.ExecutedRoutedEventArgs) => void
	): void,
		command: yfiles.system.ICommand
	}

	declare export interface CommandTypeConverter {
		canConvertFromWithContext(
		context: yfiles.system.ITypeDescriptorContext, sourceType: yfiles.lang.Class
	): boolean,
		convertFromWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object
	): Object
	}

	declare export interface ClassNotFoundException {
		
	}

	declare export interface NullReferenceException {
		
	}

	declare export interface KeyNotFoundException {
		
	}

	declare export interface ApplicationException {
		
	}

	declare export interface DashStyleTypeConverter {
		canConvertFromWithContext(
		context: yfiles.system.ITypeDescriptorContext, sourceType: yfiles.lang.Class
	): boolean,
		canConvertToWithContext(
		context: yfiles.system.ITypeDescriptorContext, destinationType: yfiles.lang.Class
	): boolean,
		convertFromWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object
	): Object,
		convertToWithContextAndCulture(
		context: yfiles.system.ITypeDescriptorContext, culture: yfiles.system.CultureInfo, value: Object, destinationType: yfiles.lang.Class
	): Object
	}

	declare export interface DashStyleValueSerializer {
		canConvertToString(value: Object, context: yfiles.system.IValueSerializerContext): boolean,
		convertToString(value: Object, context: yfiles.system.IValueSerializerContext): string,
		convertFromString(value: string, context: yfiles.system.IValueSerializerContext): Object,
		canConvertFromString(value: string, context: yfiles.system.IValueSerializerContext): boolean
	}

	declare export interface Random {
		seed: Number,
		nextBoolean(): boolean,
		next(): number,
		nextInt(max: number): number,
		nextIntInRange(min: number, max: number): number,
		nextBytes(buffer: number[]): void,
		nextDouble(): number,
		sample(): number
	}

	declare export interface DoubleCollectionValueSerializer {
		convertFromString(value: string, context: yfiles.system.IValueSerializerContext): Object
	}

	declare export interface CanExecuteRoutedEventArgs {
		command: yfiles.system.ICommand,
		continueRouting: boolean,
		parameter: Object,
		source: Object,
		canExecute: boolean,
		handled: boolean
	}

	declare export interface Colors {
		
	}

	declare export interface BrushValueSerializer {
		canConvertFromString(value: string, context: yfiles.system.IValueSerializerContext): boolean,
		canConvertToString(value: Object, context: yfiles.system.IValueSerializerContext): boolean,
		convertFromString(c: string, context: yfiles.system.IValueSerializerContext): Object,
		convertToString(o: Object, context: yfiles.system.IValueSerializerContext): string
	}

	declare export interface NotSupportedException {
		
	}

	declare export interface IDataObject {
		getFormattedData(format: string): Object,
		getData(type: yfiles.lang.Class): Object,
		getFormattedAndConvertedData(format: string, autoConvert: boolean): Object,
		getFormattedDataPresent(format: string): boolean,
		getDataPresent(type: yfiles.lang.Class): boolean,
		getFormattedAndConvertedDataPresent(format: string, autoConvert: boolean): boolean,
		getFormats(): string[],
		getFormatsWithAutoConvert(autoConvert: boolean): string[],
		setData(data: Object): void,
		setFormattedData(format: string, data: Object): void,
		setDataForType(type: yfiles.lang.Class, data: Object): void,
		setFormattedAndConvertedData(format: string, data: Object, autoConvert: boolean): void
	}

	declare export interface DataObject {
		getFormattedData(format: string): Object,
		getData(type: yfiles.lang.Class): Object,
		getFormattedAndConvertedData(format: string, autoConvert: boolean): Object,
		getFormattedDataPresent(format: string): boolean,
		getDataPresent(type: yfiles.lang.Class): boolean,
		getFormattedAndConvertedDataPresent(format: string, autoConvert: boolean): boolean,
		getFormats(): string[],
		getFormatsWithAutoConvert(autoConvert: boolean): string[],
		setData(data: Object): void,
		setFormattedData(format: string, data: Object): void,
		setDataForType(type: yfiles.lang.Class, data: Object): void,
		setFormattedAndConvertedData(format: string, data: Object, autoConvert: boolean): void
	}

	declare export interface ComponentResourceKey {
		
	}

	declare export interface DashStyle {
		dashes: yfiles.system.DoubleCollection,
		offset: number
	}

	declare export interface DashStyles {
		
	}

	declare export interface DesignerSerializationVisibilityAttribute {
		visibility: yfiles.system.DesignerSerializationVisibility
	}

	declare export interface DefaultValueAttribute {
		value: Object,
		setValue(value: Object): void
	}

	declare export interface Convert {
		
	}

	declare export interface ArrayExtensions {
		
	}

	declare export interface TypeConverterAttribute {
		converterTypeName: string
	}

	declare export interface ArithmeticException {
		
	}

	declare export interface IndexOutOfRangeException {
		
	}

	declare export interface InvalidOperationException {
		
	}

	declare export interface NotImplementedException {
		
	}

	declare export interface IOException {
		
	}

	declare export interface FormatException {
		
	}

	declare export interface CancelEventArgs {
		cancel: boolean
	}

	declare export interface EventArgs {
		
	}

	declare export interface ErrorHandling {
		
	}

	declare export interface ArgumentOutOfRangeException {
		
	}

	declare export interface ArgumentNullException {
		
	}

	declare export interface ArgumentException {
		
	}

			
}

declare module 'tree' {
		declare export interface HierarchicTreePlacer {
		determineChildConnector(child: yfiles.algorithms.Node): number,
		placeSubtreeImpl(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape
	}

	declare export interface HVTreeLayouter {
		graph: yfiles.layout.LayoutGraph,
		horizontalSpace: number,
		verticalSpace: number,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		isVerticalRoot(v: yfiles.algorithms.Node): boolean,
		isHorizontalRoot(v: yfiles.algorithms.Node): boolean,
		getSuccessors(localParent: yfiles.algorithms.Node): yfiles.algorithms.INodeCursor,
		comparator: yfiles.objectcollections.IComparer
	}

	declare export interface IFromSketchNodePlacer {
		createFromSketchComparator(): yfiles.objectcollections.IComparer
	}

	declare export interface GridNodePlacer {
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		createFromSketchComparator(): yfiles.objectcollections.IComparer,
		rootAlignment: yfiles.tree.AbstractRotatableNodePlacer.RootAlignment
	}

	declare export interface GroupedNodePlacer {
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		placeSubtree(
		nodeShapeProvider: yfiles.algorithms.IDataProvider, subtreeShapeProvider: yfiles.algorithms.IDataProvider, graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor
	}

	declare export interface INodePlacer {
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		placeSubtree(
		nodeShapeProvider: yfiles.algorithms.IDataProvider, subtreeShapeProvider: yfiles.algorithms.IDataProvider, graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor
	}

	declare export interface LeftRightPlacer {
		horizontalDistance: number,
		verticalDistance: number,
		spacing: number,
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		placeLastOnBottom: boolean,
		createComparator(): yfiles.objectcollections.IComparer
	}

	declare export interface MultiParentDescriptor {
		minimumNodeDistance: number,
		minimumBusDistance: number,
		verticalAlignment: number,
		edgeStyle: yfiles.tree.MultiParentRoutingStyle
	}

	declare export interface LeafPlacer {
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor,
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		placeSubtree(
		nodeShapeProvider: yfiles.algorithms.IDataProvider, subtreeShapeProvider: yfiles.algorithms.IDataProvider, graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape
	}

	declare export interface IPortAssignment {
		assignPorts(graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node): void
	}

	declare export interface IProcessor {
		preProcess(
		nodePlacerDataProvider: yfiles.algorithms.IDataMap, portAssignmentDataProvider: yfiles.algorithms.IDataMap, childComparatorProvider: yfiles.algorithms.IDataMap
	): void,
		postProcess(): void
	}

	declare export interface LayeredNodePlacer {
		dendrogramStyle: boolean,
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor,
		rootAlignment: yfiles.tree.AbstractRotatableNodePlacer.RootAlignment,
		verticalAlignment: number,
		id: Object,
		layerSpacing: number,
		routingStyle: yfiles.tree.LayeredRoutingStyle,
		busAlignment: number,
		polylineLabelingEnabled: boolean
	}

	declare export interface GenericTreeLayouter {
		graph: yfiles.layout.LayoutGraph,
		groupingSupported: boolean,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		getSubtreeShape(
		localRoot: yfiles.algorithms.Node
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		layoutRoot(
		localRoot: yfiles.algorithms.Node
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		getPortAssignment(localRoot: yfiles.algorithms.Node): yfiles.tree.IPortAssignment,
		getChildNodeInEdgeComparator(localRoot: yfiles.algorithms.Node): yfiles.objectcollections.IComparer,
		getNodePlacer(localRoot: yfiles.algorithms.Node): yfiles.tree.INodePlacer,
		getNodeShape(node: yfiles.algorithms.Node): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		getRootsArray(root: yfiles.algorithms.Node): yfiles.algorithms.Node[],
		directTree(): yfiles.algorithms.EdgeList,
		sourcePortConstraintDataAcceptor: yfiles.algorithms.IDataAcceptor,
		targetPortConstraintDataAcceptor: yfiles.algorithms.IDataAcceptor,
		sourceGroupDataAcceptor: yfiles.algorithms.IDataAcceptor,
		targetGroupDataAcceptor: yfiles.algorithms.IDataAcceptor,
		reverseEdges(reversedEdges: yfiles.algorithms.EdgeList): void,
		defaultNodePlacer: yfiles.tree.INodePlacer,
		defaultLeafPlacer: yfiles.tree.INodePlacer,
		defaultPortAssignment: yfiles.tree.IPortAssignment,
		defaultChildComparator: yfiles.objectcollections.IComparer,
		integratedNodeLabeling: boolean,
		integratedEdgeLabeling: boolean,
		multiParentAllowed: boolean
	}

	declare export interface ARNodePlacer {
		determineChildConnector(child: yfiles.algorithms.Node): number,
		placeSubtreeImpl(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		horizontal: boolean,
		verticalDistance: number,
		horizontalDistance: number,
		aspectRatio: number,
		fillStyle: yfiles.tree.FillStyle,
		createFromSketchComparator(): yfiles.objectcollections.IComparer
	}

	declare export interface ARTreeLayouter {
		graph: yfiles.layout.LayoutGraph,
		horizontalSpace: number,
		verticalSpace: number,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		getAspectRatio(v: yfiles.algorithms.Node): number,
		getSuccessors(localRoot: yfiles.algorithms.Node): yfiles.algorithms.INodeCursor,
		comparator: yfiles.objectcollections.IComparer,
		createBends(
		el: yfiles.layout.IEdgeLayout, root: yfiles.algorithms.Node, child: yfiles.algorithms.Node, rootPlacement: Object, routingPolicy: Object
	): void,
		getRoutingPolicy(root: Object): Object,
		getRootPlacement(root: Object): Object,
		aspectRatio: number,
		rootPlacement: Object,
		routingPolicy: Object,
		bendDistance: number
	}

	declare export interface AssistantPlacer {
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		getNodeShape(node: yfiles.algorithms.Node): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor,
		spacing: number,
		placeSubtree(
		nodeShapeProvider: yfiles.algorithms.IDataProvider, subtreeShapeProvider: yfiles.algorithms.IDataProvider, graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		childNodePlacer: yfiles.tree.INodePlacer,
		createComparator(): yfiles.objectcollections.IComparer
	}

	declare export interface AbstractRotatableNodePlacer {
		graphF: yfiles.layout.LayoutGraph,
		modificationMatrixF: yfiles.tree.AbstractRotatableNodePlacer.Matrix,
		subtreeShapeProviderF: yfiles.algorithms.IDataProvider,
		nodeShapeProviderF: yfiles.algorithms.IDataProvider,
		createdChildrenF: yfiles.algorithms.IList,
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor,
		getSourcePointAbs(edge: yfiles.algorithms.Edge): yfiles.algorithms.YPoint,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		createRootNodeShape(node: yfiles.algorithms.Node): yfiles.tree.SubtreeShapeRotated,
		createSubtreeShape(node: yfiles.algorithms.Node): yfiles.tree.SubtreeShapeRotated,
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		getPortConstraint(localRoot: yfiles.algorithms.Node): yfiles.layout.PortConstraint,
		translateDirectionToReal(modelDirection: yfiles.tree.ParentConnectorDirection): number,
		translateDirectionToModel(realDirection: yfiles.tree.ParentConnectorDirection): number,
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		placeSubtree(
		nodeShapeProvider: yfiles.algorithms.IDataProvider, subtreeShapeProvider: yfiles.algorithms.IDataProvider, graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		modificationMatrix: yfiles.tree.AbstractRotatableNodePlacer.Matrix,
		createComparator(): yfiles.objectcollections.IComparer,
		spacing: number,
		createFromSketchComparator(): yfiles.objectcollections.IComparer
	}

	declare export interface AbstractNodePlacer {
		graph: yfiles.layout.LayoutGraph,
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor,
		getSubtreeShape(node: yfiles.algorithms.Node): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		getNodeShape(node: yfiles.algorithms.Node): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		determineChildConnector(child: yfiles.algorithms.Node): number,
		placeSubtreeImpl(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		placeSubtree(
		nodeShapeProvider: yfiles.algorithms.IDataProvider, subtreeShapeProvider: yfiles.algorithms.IDataProvider, graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		clone(): Object
	}

	declare export interface BusPlacer {
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		createComparator(): yfiles.objectcollections.IComparer
	}

	declare export interface DendrogramPlacer {
		minimumRootDistance: number,
		minimumSubtreeDistance: number,
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		createComparator(): yfiles.objectcollections.IComparer,
		placeSubtree(
		nodeShapeProvider: yfiles.algorithms.IDataProvider, subtreeShapeProvider: yfiles.algorithms.IDataProvider, graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor,
		createFromSketchComparator(): yfiles.objectcollections.IComparer
	}

	declare export interface DoubleLinePlacer {
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		rootAlignment: yfiles.tree.AbstractRotatableNodePlacer.RootAlignment,
		doubleLineSpacingRatio: number
	}

	declare export interface FreePlacer {
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor
	}

	declare export interface DelegatingNodePlacer {
		createProcessor(
		layouter: yfiles.tree.GenericTreeLayouter, graph: yfiles.layout.LayoutGraph, currentRoot: yfiles.algorithms.Node
	): yfiles.tree.IProcessor,
		determineChildConnectors(
		localRoot: yfiles.algorithms.Node, connectorMap: yfiles.algorithms.IDataMap
	): void,
		placeSubtree(
		nodeShapeProvider: yfiles.algorithms.IDataProvider, subtreeShapeProvider: yfiles.algorithms.IDataProvider, graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		getLowerRightChildren(
		localRoot: yfiles.algorithms.Node, graph: yfiles.layout.LayoutGraph
	): yfiles.algorithms.NodeList,
		getUpperLeftChildren(
		localRoot: yfiles.algorithms.Node, graph: yfiles.layout.LayoutGraph
	): yfiles.algorithms.NodeList,
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated,
		orientation: yfiles.tree.Orientation,
		placerLowerRight: yfiles.tree.INodePlacer,
		placerUpperLeft: yfiles.tree.INodePlacer
	}

	declare export interface DefaultNodePlacer {
		placeSubtreeImpl(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		calcParentConnector(
		graph: yfiles.layout.LayoutGraph, localRoot: yfiles.algorithms.Node, rootLayout: yfiles.layout.INodeLayout, subtreeShape: yfiles.tree.GenericTreeLayouter.SubtreeShape, parentEdge: yfiles.algorithms.Edge, parentEdgeLayout: yfiles.layout.IEdgeLayout, direction: number
	): void,
		calcTargetEdgeLayout(
		rootLayout: yfiles.layout.INodeLayout, childShape: yfiles.tree.GenericTreeLayouter.SubtreeShape, edge: yfiles.algorithms.Edge
	): void,
		calcSlopedSourceEdgeLayout(
		rootLayout: yfiles.layout.INodeLayout, childShape: yfiles.tree.GenericTreeLayouter.SubtreeShape, edge: yfiles.algorithms.Edge, childForkCoordinate: number, rootForkCoordinate: number
	): void,
		calcSourceEdgeLayout(
		rootLayout: yfiles.layout.INodeLayout, childShape: yfiles.tree.GenericTreeLayouter.SubtreeShape, edge: yfiles.algorithms.Edge
	): void,
		childPlacement: yfiles.tree.ChildPlacement,
		rootAlignment: yfiles.tree.RootAlignment,
		verticalAlignment: number,
		determineChildConnector(child: yfiles.algorithms.Node): number,
		routingStyle: yfiles.tree.RoutingStyle,
		verticalDistance: number,
		minFirstSegmentLength: number,
		minLastSegmentLength: number,
		minSlope: number,
		minSlopeHeight: number,
		horizontalDistance: number,
		createComparator(): yfiles.objectcollections.IComparer,
		createFromSketchComparator(): yfiles.objectcollections.IComparer
	}

	declare export interface DefaultPortAssignment {
		assignPorts(graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node): void,
		assignParentEdgeTargetPort(
		graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node, edge: yfiles.algorithms.Edge
	): void,
		assignChildEdgeSourcePort(
		graph: yfiles.layout.LayoutGraph, node: yfiles.algorithms.Node, edge: yfiles.algorithms.Edge, index: number
	): void,
		getPortBorderGap(sideLength: number, edgeCount: number): number,
		getPortDistanceDelta(sideLength: number, edgeCount: number, portBorderGap: number): number,
		getSourcePortConstraint(
		graph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge, index: number
	): yfiles.layout.PortConstraint,
		getTargetPortConstraint(
		graph: yfiles.layout.LayoutGraph, edge: yfiles.algorithms.Edge
	): yfiles.layout.PortConstraint,
		mode: yfiles.tree.PortAssignmentMode,
		borderGapToPortGapRatio: number,
		reversedPortOrder: boolean
	}

	declare export interface BalloonLayouter {
		graph: yfiles.layout.LayoutGraph,
		comparator: yfiles.objectcollections.IComparer,
		childOrderingPolicy: yfiles.tree.ChildOrderingPolicy,
		minimalNodeDistance: number,
		fromSketchMode: boolean,
		rootNodePolicy: yfiles.tree.RootNodePolicy,
		preferredChildWedge: number,
		preferredRootWedge: number,
		allowOverlaps: boolean,
		compactnessFactor: number,
		minimalEdgeLength: number,
		considerNodeLabels: boolean,
		interleavedMode: yfiles.tree.InterleavedMode,
		childAlignmentPolicy: yfiles.tree.ChildAlignmentPolicy,
		integratedNodeLabeling: boolean,
		integratedEdgeLabeling: boolean,
		nodeLabelingPolicy: yfiles.tree.NodeLabelingPolicy,
		nodeLabelSpacing: number,
		edgeLabelSpacing: number,
		chainStraighteningMode: boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		getInfo(v: yfiles.algorithms.Node): yfiles.tree.BalloonLayouter.NodeInfo,
		determineRoot(): yfiles.algorithms.Node,
		calcChildArrangement(root: yfiles.algorithms.Node): void,
		sortChildNodes(root: yfiles.algorithms.Node): void,
		getPreferredChildWedge(root: yfiles.algorithms.Node): number,
		calcAngles(root: yfiles.algorithms.Node): number,
		calcAnglesWithRootAndScaleFactor(root: yfiles.algorithms.Node, scaleFactor: number): number
	}

	declare export interface SubtreeShapeRotated {
		
	}

	declare export interface TreeComponentLayouter {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		doLayoutUsingDummies(
		graph: yfiles.layout.LayoutGraph, dummyDp: yfiles.algorithms.IDataProvider
	): void,
		coreLayouter: yfiles.layout.ILayouter,
		treeComponentCoreLayouter: yfiles.layout.ILayouter,
		orientationOptimizationActive: boolean
	}

	declare export interface SimpleNodePlacer {
		rootAlignment: yfiles.tree.AbstractRotatableNodePlacer.RootAlignment,
		verticalAlignment: number,
		determineChildConnector(child: yfiles.algorithms.Node): yfiles.tree.ParentConnectorDirection,
		createBus: boolean,
		placeSubtreeWithDirection(
		localRoot: yfiles.algorithms.Node, parentConnectorDirection: yfiles.tree.ParentConnectorDirection
	): yfiles.tree.SubtreeShapeRotated
	}

	declare export interface NodeOrderComparator {
		compare(a: Object, b: Object): number
	}

	declare export interface TreeLayouter {
		canLayoutCore(graph: yfiles.layout.LayoutGraph): boolean,
		enforceGlobalLayering: boolean,
		childPlacementPolicy: yfiles.tree.ChildPlacementPolicy,
		groupingSupported: boolean,
		doLayoutCore(graph: yfiles.layout.LayoutGraph): void,
		comparator: yfiles.objectcollections.IComparer,
		portStyle: yfiles.tree.PortStyle,
		layoutStyle: yfiles.tree.EdgeLayoutStyle,
		minimalNodeDistance: number,
		minimalLayerDistance: number,
		integratedNodeLabeling: boolean,
		integratedEdgeLabeling: boolean,
		busAlignment: number,
		verticalAlignment: number,
		modificationMatrix: yfiles.tree.AbstractRotatableNodePlacer.Matrix
	}

	declare export interface TreeReductionStage {
		canLayout(graph: yfiles.layout.LayoutGraph): boolean,
		doLayout(graph: yfiles.layout.LayoutGraph): void,
		routeNonTreeEdges(
		graph: yfiles.layout.LayoutGraph, nonTreeEdgeMap: yfiles.algorithms.IEdgeMap
	): void,
		multiParentAllowed: boolean,
		nonTreeEdgeRouter: yfiles.layout.ILayouter,
		nonTreeEdgeSelectionKey: Object,
		createStraightlineRouter(): yfiles.layout.ILayouter
	}

	declare export interface XCoordComparator {
		compare(a: Object, b: Object): number
	}

			
}

declare module 'LeftRightPlacer' {
		declare export interface LeftRightDataProvider {
		getBool(dataHolder: Object): boolean
	}

			
}

declare module 'GenericTreeLayouter' {
		declare export interface SubtreeShape {
		coreBounds: yfiles.algorithms.Rectangle2D.Double,
		bounds: yfiles.algorithms.Rectangle2D,
		connectorX: number,
		connectorY: number,
		updateConnectorShape(): void,
		addTargetPoint(x: number, y: number): void,
		addEdgeSegments(lg: yfiles.layout.LayoutGraph, e: yfiles.algorithms.Edge): void,
		appendTargetPoints(el: yfiles.layout.IEdgeLayout): void,
		connectorDirection: yfiles.tree.ConnectorDirection,
		addLineSegment(x1: number, y1: number, x2: number, y2: number): void,
		addBoundsToShape(x: number, y: number, width: number, height: number): void,
		mergeWith(other: yfiles.tree.GenericTreeLayouter.SubtreeShape): void,
		minX: number,
		minY: number,
		maxX: number,
		maxY: number,
		getBorderLine(index: number): yfiles.algorithms.BorderLine,
		move(dx: number, dy: number): void,
		originX: number,
		originY: number,
		createCopy(
		matrix: yfiles.tree.AbstractRotatableNodePlacer.Matrix
	): yfiles.tree.GenericTreeLayouter.SubtreeShape,
		assignValuesTo(
		toShape: yfiles.tree.GenericTreeLayouter.SubtreeShape, modificationMatrix: yfiles.tree.AbstractRotatableNodePlacer.Matrix
	): void,
		toString(): string
	}

			
}

declare module 'AbstractRotatableNodePlacer' {
		declare export interface RootAlignment {
		placeParentHorizontal(
		rootShape: yfiles.tree.SubtreeShapeRotated, shapes: yfiles.algorithms.IList, shapeBounds: yfiles.algorithms.Rectangle2D, spacing: number
	): void
	}

	declare export interface Matrix {
		multiply(
		other: yfiles.tree.AbstractRotatableNodePlacer.Matrix
	): yfiles.tree.AbstractRotatableNodePlacer.Matrix,
		toString(): string,
		equalValues(result: yfiles.tree.AbstractRotatableNodePlacer.Matrix): boolean
	}

			
}

declare module 'BalloonLayouter' {
		declare export interface NodeInfo {
		upperAngle: number,
		lowerAngle: number,
		gapAngle: number,
		dist: number,
		angleSum: number
	}

			
}