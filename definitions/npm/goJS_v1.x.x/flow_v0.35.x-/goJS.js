

declare module 'goJS' {
					
}

declare module 'npm$namespace$go' {
	declare type MarginLike = Margin | number;

	declare type BrushLike = Brush | string;

	declare type Key = string | number;

	declare type PropertyAccessor = string | ((data: any, newval: any) => any);

	declare type Constructor = NO PRINT IMPLEMENTED: ConstructorType;

	declare interface DraggingInfo {
		point: Point
	}

	declare interface KeyValuePair<K, V> {
		key: K,
		value: V
	}

		declare class Adornment extends Part {
		constructor(type?: EnumValue): this;
		adornedObject: GraphObject;
		adornedPart: Part;
		placeholder: Placeholder
	}

	declare class AnimationManager  {
		constructor(): this;
		duration: number;
		isAnimating: boolean;
		isEnabled: boolean;
		isInitial: boolean;
		isTicking: boolean;
		stopAnimation(): void
	}

	declare class CommandHandler  {
		constructor(): this;
		archetypeGroupData: any;
		copiesConnectedLinks: boolean;
		copiesGroupKey: boolean;
		copiesParentKey: boolean;
		copiesTree: boolean;
		defaultScale: number;
		deletesTree: boolean;
		deletesConnectedLinks: boolean;
		diagram: Diagram;
		memberValidation: (g: Group, p: Part) => boolean;
		zoomFactor: number;
		addTopLevelParts(coll: Iterable<Part>, check?: boolean): boolean;
		canCollapseSubGraph(group?: Group): boolean;
		canCollapseTree(node?: Node): boolean;
		canCopySelection(): boolean;
		canCutSelection(): boolean;
		canDecreaseZoom(factor?: number): boolean;
		canDeleteSelection(): boolean;
		canEditTextBlock(textblock?: TextBlock): boolean;
		canExpandSubGraph(group?: Group): boolean;
		canExpandTree(node?: Node): boolean;
		canGroupSelection(): boolean;
		canIncreaseZoom(factor?: number): boolean;
		canPasteSelection(): boolean;
		canRedo(): boolean;
		canResetZoom(newscale?: number): boolean;
		canScrollToPart(part?: Part): boolean;
		canSelectAll(): boolean;
		canShowContextMenu(obj?: GraphObject | Diagram): boolean;
		canStopCommand(): boolean;
		canUndo(): boolean;
		canUngroupSelection(group?: Group): boolean;
		canZoomToFit(): boolean;
		collapseSubGraph(group?: Group): void;
		collapseTree(node?: Node): void;
		copySelection(): void;
		copyToClipboard(coll: Iterable<Part>): void;
		cutSelection(): void;
		decreaseZoom(factor?: number): void;
		deleteSelection(): void;
		doKeyDown(): void;
		doKeyUp(): void;
		editTextBlock(textblock?: TextBlock): void;
		expandSubGraph(group?: Group): void;
		expandTree(node?: Node): void;
		groupSelection(): void;
		increaseZoom(factor?: Number): void;
		isValidMember(group: Group, part: Part): boolean;
		pasteFromClipboard(): Set<Part>;
		pasteSelection(pos?: Point): void;
		redo(): void;
		resetZoom(newscale?: number): void;
		scrollToPart(part?: Part): void;
		selectAll(): void;
		showContextMenu(obj?: GraphObject | Diagram): void;
		stopCommand(): void;
		undo(): void;
		ungroupSelection(group?: Group): void;
		zoomToFit(): void
	}

	declare class Diagram  {
		constructor(div: HTMLDivElement): this;
		constructor(div?: string): this;
		allowClipboard: boolean;
		allowCopy: boolean;
		allowDelete: boolean;
		allowDragOut: boolean;
		allowDrop: boolean;
		allowGroup: boolean;
		allowHorizontalScroll: boolean;
		allowInsert: boolean;
		allowLink: boolean;
		allowMove: boolean;
		allowRelink: boolean;
		allowReshape: boolean;
		allowResize: boolean;
		allowRotate: boolean;
		allowSelect: boolean;
		allowTextEdit: boolean;
		allowUndo: boolean;
		allowUngroup: boolean;
		allowVerticalScroll: boolean;
		allowZoom: boolean;
		animationManager: AnimationManager;
		autoScale: EnumValue;
		autoScrollRegion: MarginLike;
		click: (e: InputEvent) => void;
		commandHandler: CommandHandler;
		contentAlignment: Spot;
		contextClick: (e: InputEvent) => void;
		contextMenu: Adornment;
		currentCursor: string;
		currentTool: Tool;
		defaultCursor: string;
		defaultTool: Tool;
		div: HTMLDivElement;
		documentBounds: Rect;
		doubleClick: (e: InputEvent) => void;
		firstInput: InputEvent;
		fixedBounds: Rect;
		scrollMode: EnumValue;
		scrollMargin: MarginLike;
		positionComputation: (d: Diagram, p: Point) => Point;
		scaleComputation: (d: Diagram, s: number) => number;
		grid: Panel;
		groupSelectionAdornmentTemplate: Adornment;
		groupTemplate: Group;
		groupTemplateMap: Map<string, Group>;
		hasHorizontalScrollbar: boolean;
		hasVerticalScrollbar: boolean;
		highlighteds: Set<Part>;
		initialAutoScale: EnumValue;
		initialContentAlignment: Spot;
		initialDocumentSpot: Spot;
		initialPosition: Point;
		initialScale: number;
		initialViewportSpot: Spot;
		isEnabled: boolean;
		isModelReadOnly: boolean;
		isModified: boolean;
		isMouseCaptured: boolean;
		isReadOnly: boolean;
		isTreePathToChildren: boolean;
		lastInput: InputEvent;
		layers: Iterator<Layer>;
		layout: Layout;
		links: Iterator<Link>;
		linkSelectionAdornmentTemplate: Adornment;
		linkTemplate: Link;
		linkTemplateMap: Map<string, Link>;
		maxScale: number;
		maxSelectionCount: number;
		minScale: number;
		model: Model;
		mouseDragOver: (e: InputEvent) => void;
		mouseDrop: (e: InputEvent) => void;
		mouseHold: (e: InputEvent) => void;
		mouseHover: (e: InputEvent) => void;
		mouseOver: (e: InputEvent) => void;
		nodes: Iterator<Node>;
		nodeSelectionAdornmentTemplate: Adornment;
		nodeTemplate: Part;
		nodeTemplateMap: Map<string, Part>;
		padding: MarginLike;
		parts: Iterator<Part>;
		position: Point;
		scale: number;
		scrollHorizontalLineChange: number;
		scrollVerticalLineChange: number;
		selection: Set<Part>;
		skipsUndoManager: boolean;
		toolManager: ToolManager;
		toolTip: Adornment;
		undoManager: UndoManager;
		validCycle: EnumValue;
		viewportBounds: Rect;
		zoomPoint: Point;
		add(part: Part): void;
		addChangedListener(listener: (e: ChangedEvent) => void): void;
		addDiagramListener(name: string, listener: (e: DiagramEvent) => void): void;
		addModelChangedListener(listener: (e: ChangedEvent) => void): void;
		addLayer(layer: Layer): void;
		addLayerAfter(layer: Layer, existingLayer: Layer): void;
		addLayerBefore(layer: Layer, existingLayer: Layer): void;
		alignDocument(documentspot: Spot, viewportspot: Spot): void;
		centerRect(r: Rect): void;
		clear(): void;
		clearHighlighteds(): void;
		clearSelection(): void;
		commitTransaction(tname?: string): boolean;
		computeBounds(): Rect;
		computePartsBounds(coll: Iterable<Part>): Rect;
		copyParts(coll: Iterable<Part>, diagram: Diagram, check: boolean): void;
		delayInitialization(func?: () => void): void;
		findLayer(name: string): Layer;
		findLinkForData(linkdata: Object): Link;
		findLinksByExample(...examples: Array<Object>): Iterator<Link>;
		findNodeForData(nodedata: Object): Node;
		findNodeForKey(key: Key): Node;
		findNodesByExample(...examples: Array<Object>): Iterator<Node>;
		findObjectAt(
		p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean
	): GraphObject;
		findObjectsAt(
		p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: List<GraphObject>
	): List<GraphObject>;
		findObjectsAt(
		p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: Set<GraphObject>
	): Set<GraphObject>;
		findObjectsIn(
		r: Rect, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: boolean, coll?: List<GraphObject>
	): List<GraphObject>;
		findObjectsIn(
		r: Rect, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: boolean, coll?: Set<GraphObject>
	): Set<GraphObject>;
		findObjectsNear(
		p: Point, dist: number, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: boolean, coll?: List<GraphObject>
	): List<GraphObject>;
		findObjectsNear(
		p: Point, dist: number, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: boolean, coll?: Set<GraphObject>
	): Set<GraphObject>;
		findPartAt(p: Point, selectable: boolean): Part;
		findPartForData(data: Object): Part;
		findPartForKey(key: Key): Part;
		findTopLevelGroups(): Iterator<Group>;
		findTreeRoots(): Iterator<Node>;
		focus(): void;
		fromDiv(div: HTMLDivElement): Diagram;
		highlight(part: Part): void;
		highlightCollection(coll: Iterable<Part> | Array<Part>): void;
		inherit(derivedclass: Constructor, baseclass: Constructor): void;
		layoutDiagram(invalidateAll?: boolean): void;
		makeImage(
		properties?: {
		size?: Size,
		scale?: number,
		maxSize?: Size,
		position?: Point,
		parts?: Iterable<Part>,
		padding?: MarginLike,
		background?: BrushLike,
		showTemporary?: boolean,
		showGrid?: boolean,
		document?: Document,
		type?: string,
		details?: any
	}
	): HTMLImageElement;
		makeImageData(
		properties?: {
		size?: Size,
		scale?: number,
		maxSize?: Size,
		position?: Point,
		parts?: Iterable<Part>,
		padding?: MarginLike,
		background?: BrushLike,
		showTemporary?: boolean,
		showGrid?: boolean,
		document?: Document,
		type?: string,
		details?: any
	}
	): string;
		makeSvg(
		properties?: {
		size?: Size,
		scale?: number,
		maxSize?: Size,
		position?: Point,
		parts?: Iterable<Part>,
		padding?: MarginLike,
		background?: BrushLike,
		showTemporary?: boolean,
		showGrid?: boolean,
		document?: Document,
		elementFinished?: (obj: GraphObject, elt: SVGElement) => void
	}
	): SVGElement;
		moveParts(coll: Iterable<Part>, offset: Point, check: boolean): void;
		rebuildParts(): void;
		remove(part: Part): void;
		removeChangedListener(listener: (e: ChangedEvent) => void): void;
		removeDiagramListener(name: string, listener: (e: DiagramEvent) => void): void;
		removeModelChangedListener(listener: (e: ChangedEvent) => void): void;
		removeLayer(layer: Layer): void;
		removeParts(coll: Iterable<Part> | Array<Part>, check: boolean): void;
		requestUpdate(alwaysQueueUpdate?: boolean): void;
		rollbackTransaction(): boolean;
		scroll(unit: string, dir: string, dist?: number): void;
		scrollToRect(r: Rect): void;
		select(part: Part): void;
		selectCollection(coll: Iterable<Part> | Array<Part>): void;
		setProperties(props: Object): void;
		startTransaction(tname?: string): boolean;
		transformDocToView(p: Point): Point;
		transformViewToDoc(p: Point): Point;
		updateAllTargetBindings(): void;
		updateAllRelationshipsFromData(): void;
		zoomToFit(): void;
		zoomToRect(r: Rect, scaling?: EnumValue): void;
		CycleAll: EnumValue;
		CycleDestinationTree: EnumValue;
		CycleNotDirected: EnumValue;
		CycleNotUndirected: EnumValue;
		CycleSourceTree: EnumValue;
		None: EnumValue;
		Uniform: EnumValue;
		UniformToFill: EnumValue;
		DocumentScroll: EnumValue;
		InfiniteScroll: EnumValue;
		TreeParentCollapsed: EnumValue;
		AllParentsCollapsed: EnumValue;
		treeCollapsePolicy: EnumValue;
		getRenderingHint(name: string): any;
		setRenderingHint(name: string, val: any): void;
		getInputOption(name: string): any;
		setInputOption(name: string, val: any): void;
		maybeUpdate(): void;
		reset(): void;
		simulatedMouseMove(e: Event, modelpt: Point, overdiag?: Diagram): boolean;
		simulatedMouseUp(e: Event, other: Diagram, modelpt: Point, curdiag?: Diagram): boolean
	}

	declare class DiagramEvent  {
		constructor(): this;
		cancel: boolean;
		diagram: Diagram;
		name: string;
		parameter: any;
		subject: any
	}

	declare class GraphObject  {
		constructor(): this;
		actionCancel: (e: InputEvent, obj: GraphObject) => void;
		actionDown: (e: InputEvent, obj: GraphObject) => void;
		actionMove: (e: InputEvent, obj: GraphObject) => void;
		actionUp: (e: InputEvent, obj: GraphObject) => void;
		actualBounds: Rect;
		alignment: Spot;
		alignmentFocus: Spot;
		angle: number;
		areaBackground: BrushLike;
		background: BrushLike;
		click: (e: InputEvent, obj: GraphObject) => void;
		column: number;
		columnSpan: number;
		contextClick: (e: InputEvent, obj: GraphObject) => void;
		contextMenu: Adornment;
		cursor: string;
		desiredSize: Size;
		diagram: Diagram;
		doubleClick: (e: InputEvent, obj: GraphObject) => void;
		fromEndSegmentDirection: EnumValue;
		fromEndSegmentLength: number;
		fromLinkable: boolean;
		fromLinkableDuplicates: boolean;
		fromLinkableSelfNode: boolean;
		fromMaxLinks: number;
		fromShortLength: number;
		fromSpot: Spot;
		height: number;
		isActionable: boolean;
		isPanelMain: boolean;
		layer: Layer;
		margin: MarginLike;
		maxSize: Size;
		measuredBounds: Rect;
		minSize: Size;
		mouseDragEnter: (e: InputEvent, obj: GraphObject, prev: GraphObject) => void;
		mouseDragLeave: (e: InputEvent, obj: GraphObject, prev: GraphObject) => void;
		mouseDrop: (e: InputEvent, obj: GraphObject) => void;
		mouseEnter: (e: InputEvent, obj: GraphObject, prev: GraphObject) => void;
		mouseHold: (e: InputEvent, obj: GraphObject) => void;
		mouseHover: (e: InputEvent, obj: GraphObject) => void;
		mouseLeave: (e: InputEvent, obj: GraphObject, prev: GraphObject) => void;
		mouseOver: (e: InputEvent, obj: GraphObject) => void;
		name: string;
		naturalBounds: Rect;
		opacity: number;
		panel: Panel;
		part: Part;
		pickable: boolean;
		portId: string;
		position: Point;
		row: number;
		rowSpan: number;
		scale: number;
		segmentFraction: number;
		segmentIndex: number;
		segmentOffset: Point;
		segmentOrientation: EnumValue;
		stretch: EnumValue;
		toEndSegmentDirection: EnumValue;
		toEndSegmentLength: number;
		toLinkable: boolean;
		toLinkableDuplicates: boolean;
		toLinkableSelfNode: boolean;
		toMaxLinks: number;
		toolTip: Adornment;
		toShortLength: number;
		toSpot: Spot;
		visible: boolean;
		width: number;
		bind(binding: Binding): void;
		copy(): GraphObject;
		defineBuilder(name: string, func: (args: Array<any>) => Object): void;
		takeBuilderArgument(args: Array<any>, defval?: any, pred?: (arg: any) => boolean): any;
		getDocumentAngle(): number;
		getDocumentPoint(s: Spot, result?: Point): Point;
		getDocumentScale(): number;
		getLocalPoint(p: Point, result?: Point): Point;
		isContainedBy(panel: GraphObject): boolean;
		isVisibleObject(): boolean;
		setProperties(props: Object): void;
		make(type: Constructor | string, ...initializers: Array<any>): any;
		Default: EnumValue;
		Fill: EnumValue;
		Horizontal: EnumValue;
		None: EnumValue;
		Uniform: EnumValue;
		UniformToFill: EnumValue;
		Vertical: EnumValue;
		spanAllocation: (obj: GraphObject, r: RowColumnDefinition, n: number) => number;
		cloneProtected(copy: GraphObject): void;
		getBuilders(): Map<string, (args: Array<any>) => Object>
	}

	declare class Group extends Node {
		constructor(type?: EnumValue): this;
		computesBoundsAfterDrag: boolean;
		computesBoundsIncludingLinks: boolean;
		computesBoundsIncludingLocation: boolean;
		handlesDragDropForMembers: boolean;
		isSubGraphExpanded: boolean;
		layout: Layout;
		memberAdded: (a: Group, b: Part) => void;
		memberParts: Iterator<Part>;
		memberRemoved: (a: Group, b: Part) => void;
		memberValidation: (a: Group, b: Part) => boolean;
		placeholder: Placeholder;
		subGraphExpandedChanged: (a: Group) => void;
		ungroupable: boolean;
		wasSubGraphExpanded: boolean;
		addMembers(coll: Iterable<Part>, check?: boolean): boolean;
		canAddMembers(coll: Iterable<Part>): boolean;
		canUngroup(): boolean;
		collapseSubGraph(): void;
		expandSubGraph(): void;
		findExternalLinksConnected(): Iterator<Link>;
		findExternalNodesConnected(): Iterator<Node>;
		findSubGraphParts(): Set<Part>;
		move(newpos: Point): void
	}

	declare class InputEvent  {
		constructor(): this;
		alt: boolean;
		bubbles: boolean;
		button: number;
		buttons: number;
		clickCount: number;
		control: boolean;
		delta: number;
		diagram: Diagram;
		documentPoint: Point;
		down: boolean;
		event: Event;
		handled: boolean;
		isMultiTouch: boolean;
		isTouchEvent: boolean;
		key: string;
		left: boolean;
		meta: boolean;
		middle: boolean;
		modifiers: number;
		right: boolean;
		shift: boolean;
		targetDiagram: Diagram;
		targetObject: GraphObject;
		timestamp: number;
		up: boolean;
		viewPoint: Point;
		copy(): InputEvent;
		isMac: boolean
	}

	declare class Layer  {
		constructor(): this;
		allowCopy: boolean;
		allowDelete: boolean;
		allowGroup: boolean;
		allowLink: boolean;
		allowMove: boolean;
		allowRelink: boolean;
		allowReshape: boolean;
		allowResize: boolean;
		allowRotate: boolean;
		allowSelect: boolean;
		allowTextEdit: boolean;
		allowUngroup: boolean;
		diagram: Diagram;
		isTemporary: boolean;
		name: string;
		opacity: number;
		parts: Iterator<Part>;
		partsBackwards: Iterator<Part>;
		pickable: boolean;
		visible: boolean;
		findObjectAt(
		p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean
	): GraphObject;
		findObjectsAt(
		p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: List<GraphObject>
	): List<GraphObject>;
		findObjectsAt(
		p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: Set<GraphObject>
	): Set<GraphObject>;
		findObjectsIn(
		r: Rect, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: boolean, coll?: List<GraphObject>
	): List<GraphObject>;
		findObjectsIn(
		r: Rect, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: boolean, coll?: Set<GraphObject>
	): Set<GraphObject>;
		findObjectsNear(
		p: Point, dist: number, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: boolean, coll?: List<GraphObject>
	): List<GraphObject>;
		findObjectsNear(
		p: Point, dist: number, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: boolean, coll?: Set<GraphObject>
	): Set<GraphObject>
	}

	declare class Link extends Part {
		constructor(): this;
		adjusting: EnumValue;
		corner: number;
		curve: EnumValue;
		curviness: number;
		fromEndSegmentDirection: EnumValue;
		fromEndSegmentLength: number;
		fromNode: Node;
		fromPort: GraphObject;
		fromPortChanged: (a: Link, b: GraphObject, c: GraphObject) => void;
		fromPortId: string;
		fromShortLength: number;
		fromSpot: Spot;
		geometry: Geometry;
		isLabeledLink: boolean;
		isOrthogonal: boolean;
		isTreeLink: boolean;
		labelNodes: Iterator<Node>;
		midAngle: number;
		midPoint: Point;
		path: Shape;
		points: List<Point>;
		pointsCount: number;
		relinkableFrom: boolean;
		relinkableTo: boolean;
		resegmentable: boolean;
		routing: EnumValue;
		smoothness: number;
		toEndSegmentDirection: EnumValue;
		toEndSegmentLength: number;
		toNode: Node;
		toPort: GraphObject;
		toPortChanged: (a: Link, b: GraphObject, c: GraphObject) => void;
		toPortId: string;
		toShortLength: number;
		toSpot: Spot;
		canRelinkFrom(): boolean;
		canRelinkTo(): boolean;
		clearPoints(): void;
		addPoint(p: Point): void;
		insertPoint(i: number, p: Point): void;
		removePoint(i: number): void;
		setPoint(i: number, p: Point): void;
		computeCurve(): EnumValue;
		computeCurviness(): number;
		computeEndSegmentLength(node: Node, port: GraphObject, spot: Spot, from: boolean): number;
		computeOtherPoint(othernode: Node, otherport: GraphObject): Point;
		computePoints(): boolean;
		computeSpacing(): number;
		computeSpot(from: boolean): Spot;
		computeThickness(): number;
		findClosestSegment(p: Point): number;
		getLinkDirection(
		node: Node, port: GraphObject, linkpoint: Point, spot: Spot, from: boolean, ortho: boolean, othernode: Node, otherport: GraphObject
	): number;
		getLinkPoint(
		node: Node, port: GraphObject, spot: Spot, from: boolean, ortho: boolean, othernode: Node, otherport: GraphObject, result?: Point
	): Point;
		getLinkPointFromPoint(
		node: Node, port: GraphObject, focus: Point, p: Point, from: boolean, result?: Point
	): Point;
		getOtherNode(node: Node): Node;
		getOtherPort(port: GraphObject): GraphObject;
		getPoint(i: number): Point;
		hasCurviness(): boolean;
		invalidateRoute(): void;
		makeGeometry(): Geometry;
		move(newpos: Point): void;
		updateRoute(): void;
		AvoidsNodes: EnumValue;
		Bezier: EnumValue;
		End: EnumValue;
		JumpGap: EnumValue;
		JumpOver: EnumValue;
		None: EnumValue;
		Normal: EnumValue;
		OrientAlong: EnumValue;
		OrientMinus90: EnumValue;
		OrientMinus90Upright: EnumValue;
		OrientOpposite: EnumValue;
		OrientPlus90: EnumValue;
		OrientPlus90Upright: EnumValue;
		OrientUpright: EnumValue;
		OrientUpright45: EnumValue;
		Orthogonal: EnumValue;
		Scale: EnumValue;
		Stretch: EnumValue;
		routeBounds: Rect;
		computeCorner(): number;
		computeShortLength(from: boolean): number;
		findMidLabel(): GraphObject;
		arrangeBundledLinks(links: Array<Link>, reroute: boolean): void;
		setPointAt(i: number, x: number, y: number): void;
		insertPointAt(i: number, x: number, y: number): void;
		addPointAt(x: number, y: number): void;
		invalidateGeometry(): void
	}

	declare class Node extends Part {
		constructor(type?: EnumValue): this;
		avoidable: boolean;
		avoidableMargin: MarginLike;
		isLinkLabel: boolean;
		isTreeExpanded: boolean;
		isTreeLeaf: boolean;
		labeledLink: Link;
		linkConnected: (a: Node, b: Link, c: GraphObject) => void;
		linkDisconnected: (a: Node, b: Link, c: GraphObject) => void;
		linkValidation: (
		from: Node, fromPort: GraphObject, to: Node, toPort: GraphObject, link: Link
	) => boolean;
		linksConnected: Iterator<Link>;
		port: GraphObject;
		ports: Iterator<GraphObject>;
		portSpreading: EnumValue;
		treeExpandedChanged: (node: Node) => void;
		wasTreeExpanded: boolean;
		collapseTree(level?: number): void;
		expandTree(level?: number): void;
		findLinksBetween(othernode: Node, pid?: string, otherpid?: string): Iterator<Link>;
		findLinksConnected(pid?: string): Iterator<Link>;
		findLinksInto(pid?: string): Iterator<Link>;
		findLinksOutOf(pid?: string): Iterator<Link>;
		findLinksTo(othernode: Node, pid?: string, otherpid?: string): Iterator<Link>;
		findNodesConnected(pid?: string): Iterator<Node>;
		findNodesInto(pid?: string): Iterator<Node>;
		findNodesOutOf(pid?: string): Iterator<Node>;
		findPort(pid: string): GraphObject;
		findTreeChildrenLinks(): Iterator<Link>;
		findTreeChildrenNodes(): Iterator<Node>;
		findTreeLevel(): number;
		findTreeParentLink(): Link;
		findTreeParentNode(): Node;
		findTreeParts(level?: number): Set<Part>;
		findTreeRoot(): Node;
		isInTreeOf(node: Node): boolean;
		DirectionAbsolute: EnumValue;
		DirectionDefault: EnumValue;
		DirectionRotatedNode: EnumValue;
		DirectionRotatedNodeOrthogonal: EnumValue;
		SpreadingEvenly: EnumValue;
		SpreadingNone: EnumValue;
		SpreadingPacked: EnumValue;
		canAvoid(): boolean;
		findVisibleNode(): Node;
		getAvoidableRect(result: Rect): Rect;
		invalidateLinkBundle(other: Node, thisportid?: string, otherportid?: string): void;
		invalidateConnectedLinks(): void
	}

	declare class Overview extends Diagram {
		constructor(div: HTMLDivElement): this;
		constructor(id?: string): this;
		box: Part;
		drawsTemporaryLayers: boolean;
		observed: Diagram
	}

	declare class Palette extends Diagram {
		constructor(div: HTMLDivElement): this;
		constructor(id?: string): this
	}

	declare class Panel extends GraphObject {
		constructor(type?: EnumValue): this;
		columnCount: number;
		columnSizing: EnumValue;
		data: any;
		defaultAlignment: Spot;
		defaultColumnSeparatorDashArray: Array<number>;
		defaultColumnSeparatorStroke: BrushLike;
		defaultColumnSeparatorStrokeWidth: number;
		defaultRowSeparatorDashArray: Array<number>;
		defaultRowSeparatorStroke: BrushLike;
		defaultRowSeparatorStrokeWidth: number;
		defaultSeparatorPadding: MarginLike;
		defaultStretch: EnumValue;
		elements: Iterator<GraphObject>;
		gridCellSize: Size;
		gridOrigin: Point;
		itemArray: Array<any>;
		itemCategoryProperty: PropertyAccessor;
		itemIndex: number;
		itemTemplate: Panel;
		itemTemplateMap: Map<string, Panel>;
		leftIndex: number;
		padding: MarginLike;
		rowCount: number;
		rowSizing: EnumValue;
		topIndex: number;
		type: EnumValue;
		viewboxStretch: EnumValue;
		add(element: GraphObject): void;
		copy(): Panel;
		elt(idx: number): GraphObject;
		findColumnForLocalX(x: number): number;
		findMainElement(): GraphObject;
		findObject(name: string): GraphObject;
		findItemPanelForData(data: Object): Panel;
		findRowForLocalY(y: number): number;
		getColumnDefinition(idx: number): RowColumnDefinition;
		getRowDefinition(idx: number): RowColumnDefinition;
		insertAt(index: number, element: GraphObject): void;
		rebuildItemElements(): void;
		remove(element: GraphObject): void;
		removeAt(idx: number): void;
		removeColumnDefinition(idx: number): void;
		removeRowDefinition(idx: number): void;
		updateTargetBindings(srcprop?: string): void;
		Auto: EnumValue;
		Grid: EnumValue;
		Horizontal: EnumValue;
		Link: EnumValue;
		Position: EnumValue;
		Spot: EnumValue;
		Table: EnumValue;
		TableColumn: EnumValue;
		TableRow: EnumValue;
		Vertical: EnumValue;
		Viewbox: EnumValue
	}

	declare class Part extends Panel {
		constructor(type?: EnumValue): this;
		adornments: Iterator<Adornment>;
		category: string;
		containingGroup: Group;
		containingGroupChanged: (member: Part, oldgrp: Group, newgrp: Group) => void;
		copyable: boolean;
		deletable: boolean;
		diagram: Diagram;
		dragComputation: (part: Part, oldloc: Point, newloc: Point) => Point;
		groupable: boolean;
		isAnimated: boolean;
		isHighlighted: boolean;
		isInDocumentBounds: boolean;
		isLayoutPositioned: boolean;
		isSelected: boolean;
		isShadowed: boolean;
		isTopLevel: boolean;
		layer: Layer;
		layerChanged: (part: Part, oldlayer: Layer, newlayer: Layer) => void;
		layerName: string;
		layoutConditions: number;
		location: Point;
		locationObject: GraphObject;
		locationObjectName: string;
		locationSpot: Spot;
		maxLocation: Point;
		minLocation: Point;
		movable: boolean;
		reshapable: boolean;
		resizable: boolean;
		resizeAdornmentTemplate: Adornment;
		resizeCellSize: Size;
		resizeObject: GraphObject;
		resizeObjectName: string;
		rotatable: boolean;
		rotateAdornmentTemplate: Adornment;
		rotateObject: GraphObject;
		rotateObjectName: string;
		selectable: boolean;
		selectionAdorned: boolean;
		selectionAdornmentTemplate: Adornment;
		selectionChanged: (p: Part) => void;
		selectionObject: GraphObject;
		selectionObjectName: string;
		shadowBlur: number;
		shadowColor: string;
		shadowOffset: Point;
		shadowVisible: boolean;
		text: string;
		textEditable: boolean;
		zOrder: number;
		addAdornment(category: string, ad: Adornment): void;
		canCopy(): boolean;
		canDelete(): boolean;
		canEdit(): boolean;
		canGroup(): boolean;
		canLayout(): boolean;
		canMove(): boolean;
		canReshape(): boolean;
		canResize(): boolean;
		canRotate(): boolean;
		canSelect(): boolean;
		clearAdornments(): void;
		ensureBounds(): void;
		findAdornment(category: string): Adornment;
		findCommonContainingGroup(other: Part): Group;
		findSubGraphLevel(): number;
		findTopLevelPart(): Part;
		invalidateLayout(condition?: number): void;
		isMemberOf(part: Part): boolean;
		isVisible(): boolean;
		move(newpos: Point): void;
		moveTo(x: number, y: number): void;
		removeAdornment(category: string): void;
		updateAdornments(): void;
		updateTargetBindings(srcprop?: string): void;
		updateRelationshipsFromData(): void;
		LayoutAdded: number;
		LayoutGroupLayout: number;
		LayoutHidden: number;
		LayoutNodeReplaced: number;
		LayoutNodeSized: number;
		LayoutNone: number;
		LayoutRemoved: number;
		LayoutShown: number;
		LayoutStandard: number
	}

	declare class Picture extends GraphObject {
		constructor(): this;
		element: HTMLElement;
		errorFunction: (pic: Picture, e: Event) => void;
		imageStretch: EnumValue;
		naturalBounds: Rect;
		source: string;
		sourceCrossOrigin: (pic: Picture) => string;
		sourceRect: Rect;
		clearCache(url?: string): void
	}

	declare class Placeholder extends GraphObject {
		constructor(): this;
		padding: MarginLike
	}

	declare class RowColumnDefinition  {
		constructor(): this;
		actual: number;
		alignment: Spot;
		background: BrushLike;
		coversSeparators: boolean;
		height: number;
		index: number;
		isRow: boolean;
		maximum: number;
		minimum: number;
		panel: Panel;
		position: number;
		separatorDashArray: Array<number>;
		separatorPadding: MarginLike;
		separatorStroke: BrushLike;
		separatorStrokeWidth: number;
		sizing: EnumValue;
		stretch: EnumValue;
		total: number;
		width: number;
		bind(binding: Binding): void;
		Default: EnumValue;
		None: EnumValue;
		ProportionalExtra: EnumValue;
		computeEffectiveSpacing(): number;
		computeEffectiveSpacingTop(): number
	}

	declare class Shape extends GraphObject {
		constructor(): this;
		figure: string;
		fill: BrushLike;
		fromArrow: string;
		geometry: Geometry;
		geometryStretch: EnumValue;
		geometryString: string;
		interval: number;
		isGeometryPositioned: boolean;
		naturalBounds: Rect;
		parameter1: number;
		parameter2: number;
		spot1: Spot;
		spot2: Spot;
		stroke: BrushLike;
		strokeCap: string;
		strokeDashArray: Array<number>;
		strokeDashOffset: number;
		strokeJoin: string;
		strokeMiterLimit: number;
		strokeWidth: number;
		toArrow: string;
		getFigureGenerators(): Map<string, (shape: Shape, width: number, height: number) => Geometry>;
		defineFigureGenerator(
		name: string, func: (shape: Shape, width: number, height: number) => Geometry
	): void;
		defineFigureGenerator(name: string, synonym: string): void;
		getArrowheadGeometries(): Map<string, Geometry>;
		defineArrowheadGeometry(name: string, geo: Geometry): void;
		defineArrowheadGeometry(name: string, pathstr: string): void
	}

	declare class TextBlock extends GraphObject {
		constructor(): this;
		editable: boolean;
		errorFunction: (tool: TextEditingTool, oldstr: string, newstr: string) => void;
		font: string;
		isMultiline: boolean;
		isStrikethrough: boolean;
		isUnderline: boolean;
		lineCount: number;
		maxLines: number;
		naturalBounds: Rect;
		overflow: EnumValue;
		stroke: BrushLike;
		text: string;
		textAlign: string;
		textEditor: HTMLElement;
		textValidation: (tb: TextBlock, oldstr: string, newstr: string) => boolean;
		wrap: EnumValue;
		None: EnumValue;
		OverflowClip: EnumValue;
		OverflowEllipsis: EnumValue;
		WrapDesiredSize: EnumValue;
		WrapFit: EnumValue;
		spacingAbove: number;
		spacingBelow: number;
		isValidFont(font: string): boolean;
		getEllipsis(): string;
		setEllipsis(val: string): void
	}

	declare class Brush  {
		constructor(type: EnumValue): this;
		constructor(color?: string): this;
		color: string;
		colorStops: Map<number, string>;
		end: Spot;
		endRadius: number;
		pattern: any;
		start: Spot;
		startRadius: number;
		type: EnumValue;
		addColorStop(loc: number, color: string): void;
		copy(): Brush;
		randomColor(min?: number, max?: number): string;
		Linear: EnumValue;
		Pattern: EnumValue;
		Radial: EnumValue;
		Solid: EnumValue;
		isValidColor(color: string): boolean
	}

	declare class Geometry  {
		constructor(type?: EnumValue): this;
		bounds: Rect;
		defaultStretch: EnumValue;
		endX: number;
		endY: number;
		figures: List<PathFigure>;
		spot1: Spot;
		spot2: Spot;
		startX: number;
		startY: number;
		type: EnumValue;
		add(figure: PathFigure): Geometry;
		computeBoundsWithoutOrigin(): Rect;
		copy(): Geometry;
		fillPath(str: string): string;
		normalize(): Point;
		offset(x: number, y: number): Geometry;
		parse(str: string, filled?: boolean): Geometry;
		rotate(angle: number, x?: number, y?: number): Geometry;
		scale(x: number, y: number): Geometry;
		stringify(val: Geometry): string;
		Ellipse: EnumValue;
		Line: EnumValue;
		Path: EnumValue;
		Rectangle: EnumValue;
		equalsApprox(g: Geometry): boolean
	}

	declare class Margin  {
		constructor(): this;
		constructor(m: number): this;
		constructor(tb: number, rl: number): this;
		constructor(t: number, r: number, b: number, l: number): this;
		bottom: number;
		left: number;
		right: number;
		top: number;
		copy(): Margin;
		equals(m: Margin): boolean;
		equalTo(t: number, r: number, b: number, l: number): boolean;
		isReal(): boolean;
		parse(str: string): Margin;
		set(m: Margin): Margin;
		setTo(t: number, r: number, b: number, l: number): Margin;
		stringify(val: Margin): string;
		equalsApprox(m: Margin): boolean
	}

	declare class PathFigure  {
		constructor(sx?: number, sy?: number, filled?: boolean, shadowed?: boolean): this;
		isFilled: boolean;
		isShadowed: boolean;
		segments: List<PathSegment>;
		startX: number;
		startY: number;
		add(segment: PathSegment): PathFigure;
		copy(): PathFigure;
		equalsApprox(f: PathFigure): boolean
	}

	declare class PathSegment  {
		constructor(type: EnumValue, ex?: number, ey?: number, x1?: number, y1?: number, x2?: number, y2?: number, clockwise?: boolean): this;
		centerX: number;
		centerY: number;
		endX: number;
		endY: number;
		isClockwiseArc: boolean;
		isClosed: boolean;
		isLargeArc: boolean;
		point1X: number;
		point1Y: number;
		point2X: number;
		point2Y: number;
		radiusX: number;
		radiusY: number;
		startAngle: number;
		sweepAngle: number;
		type: EnumValue;
		xAxisRotation: number;
		close(): PathSegment;
		copy(): PathSegment;
		Arc: EnumValue;
		Bezier: EnumValue;
		Line: EnumValue;
		Move: EnumValue;
		QuadraticBezier: EnumValue;
		SvgArc: EnumValue;
		equalsApprox(s: PathSegment): boolean
	}

	declare class Point  {
		constructor(): this;
		constructor(x: number, y: number): this;
		x: number;
		y: number;
		add(p: Point): Point;
		copy(): Point;
		direction(px: number, py: number, qx: number, qy: number): number;
		direction(px: number, py: number): number;
		directionPoint(p: Point): number;
		distanceLineSegmentSquared(px: number, py: number, ax: number, ay: number, bx: number, by: number): number;
		distanceSquared(px: number, py: number): number;
		distanceSquared(px: number, py: number, qx: number, qy: number): number;
		distanceSquaredPoint(p: Point): number;
		equals(p: Point): boolean;
		equalTo(x: number, y: number): boolean;
		isReal(): boolean;
		normalize(): Point;
		offset(dx: number, dy: number): Point;
		parse(str: string): Point;
		projectOntoLineSegment(px: number, py: number, qx: number, qy: number): Point;
		projectOntoLineSegmentPoint(p: Point, q: Point): Point;
		rotate(angle: number): Point;
		scale(sx: number, sy: number): Point;
		set(p: Point): Point;
		setRectSpot(r: Rect, spot: Spot): Point;
		setSpot(x: number, y: number, w: number, h: number, spot: Spot): Point;
		setTo(x: number, y: number): Point;
		snapToGrid(originx: number, originy: number, cellwidth: number, cellheight: number): Point;
		snapToGridPoint(origin: Point, cellsize: Size): Point;
		stringify(val: Point): string;
		subtract(p: Point): Point;
		equalsApprox(p: Point): boolean
	}

	declare class Rect  {
		constructor(): this;
		constructor(tl: Point, br: Point): this;
		constructor(tl: Point, sz: Size): this;
		constructor(x: number, y: number, w: number, h: number): this;
		bottom: number;
		center: Point;
		centerX: number;
		centerY: number;
		height: number;
		left: number;
		position: Point;
		right: number;
		size: Size;
		top: number;
		width: number;
		x: number;
		y: number;
		addMargin(m: Margin): Rect;
		contains(x: number, y: number, w?: number, h?: number): boolean;
		contains(
		rx: number, ry: number, rw: number, rh: number, x: number, y: number, w?: number, h?: number
	): boolean;
		containsPoint(p: Point): boolean;
		containsRect(r: Rect): boolean;
		copy(): Rect;
		equals(r: Rect): boolean;
		equalTo(x: number, y: number, w: number, h: number): boolean;
		grow(t: number, r: number, b: number, l: number): Rect;
		inflate(w: number, h: number): Rect;
		intersect(x: number, y: number, w: number, h: number): Rect;
		intersectRect(r: Rect): Rect;
		intersects(
		rx: number, ry: number, rw: number, rh: number, x: number, y: number, w: number, h: number
	): boolean;
		intersects(x: number, y: number, w: number, h: number): boolean;
		intersectsRect(r: Rect): boolean;
		isEmpty(): boolean;
		isReal(): boolean;
		offset(dx: number, dy: number): Rect;
		parse(str: string): Rect;
		set(r: Rect): Rect;
		setPoint(p: Point): Rect;
		setSize(s: Size): Rect;
		setSpot(x: number, y: number, spot: Spot): Rect;
		setTo(x: number, y: number, w: number, h: number): Rect;
		stringify(val: Rect): string;
		subtractMargin(m: Margin): Rect;
		union(x: number, y: number, w?: number, h?: number): Rect;
		unionPoint(p: Point): Rect;
		unionRect(r: Rect): Rect;
		equalsApprox(r: Rect): boolean
	}

	declare class Size  {
		constructor(): this;
		constructor(w: number, h: number): this;
		height: number;
		width: number;
		copy(): Size;
		equals(s: Size): boolean;
		equalTo(w: number, h: number): boolean;
		isReal(): boolean;
		parse(str: string): Size;
		set(s: Size): Size;
		setTo(w: number, h: number): Size;
		stringify(val: Size): string;
		equalsApprox(s: Size): boolean
	}

	declare class Spot  {
		constructor(): this;
		constructor(x: number, y: number): this;
		constructor(x: number, y: number, offx: number, offy: number): this;
		offsetX: number;
		offsetY: number;
		x: number;
		y: number;
		copy(): Spot;
		equals(spot: Spot): boolean;
		includesSide(side: Spot): boolean;
		isDefault(): boolean;
		isNoSpot(): boolean;
		isSide(): boolean;
		isSpot(): boolean;
		opposite(): Spot;
		parse(str: string): Spot;
		set(s: Spot): Spot;
		setTo(x: number, y: number, offx: number, offy: number): Spot;
		stringify(val: Spot): string;
		AllSides: Spot;
		Bottom: Spot;
		BottomCenter: Spot;
		BottomLeft: Spot;
		BottomLeftSides: Spot;
		BottomRight: Spot;
		BottomRightSides: Spot;
		BottomSide: Spot;
		Center: Spot;
		Default: Spot;
		Left: Spot;
		LeftCenter: Spot;
		LeftRightSides: Spot;
		LeftSide: Spot;
		MiddleBottom: Spot;
		MiddleLeft: Spot;
		MiddleRight: Spot;
		MiddleTop: Spot;
		None: Spot;
		NotBottomSide: Spot;
		NotLeftSide: Spot;
		NotRightSide: Spot;
		NotTopSide: Spot;
		Right: Spot;
		RightCenter: Spot;
		RightSide: Spot;
		Top: Spot;
		TopBottomSides: Spot;
		TopCenter: Spot;
		TopLeft: Spot;
		TopLeftSides: Spot;
		TopRight: Spot;
		TopRightSides: Spot;
		TopSide: Spot
	}

	declare class Binding  {
		constructor(targetprop?: string, sourceprop?: string, conv?: (a: any, b: any) => any): this;
		backConverter: (a: any, b: any) => any;
		converter: (a: any, b: any) => any;
		mode: EnumValue;
		sourceName: string;
		sourceProperty: string;
		targetProperty: string;
		makeTwoWay(backconv?: (a: any, b: any) => any): Binding;
		ofObject(srcname?: string): Binding;
		parseEnum(ctor: Constructor, defval: EnumValue): (a: string) => EnumValue;
		toString(val: any): string;
		OneWay: EnumValue;
		TwoWay: EnumValue;
		ofModel(): Binding
	}

	declare class ChangedEvent  {
		constructor(): this;
		change: EnumValue;
		diagram: Diagram;
		isTransactionFinished: boolean;
		model: Model;
		modelChange: string;
		newParam: any;
		newValue: any;
		object: any;
		oldParam: any;
		oldValue: any;
		propertyName: PropertyAccessor;
		canRedo(): boolean;
		canUndo(): boolean;
		clear(): void;
		copy(): ChangedEvent;
		getParam(undo: boolean): any;
		getValue(undo: boolean): any;
		redo(): void;
		undo(): void;
		Insert: EnumValue;
		Property: EnumValue;
		Remove: EnumValue;
		Transaction: EnumValue
	}

	declare class GraphLinksModel extends Model {
		constructor(nodedataarray?: Array<Object>, linkdataarray?: Array<Object>): this;
		archetypeNodeData: any;
		copyLinkDataFunction: (obj: Object, model: GraphLinksModel) => Object;
		linkCategoryProperty: PropertyAccessor;
		linkDataArray: Array<Object>;
		linkFromKeyProperty: PropertyAccessor;
		linkFromPortIdProperty: PropertyAccessor;
		linkKeyProperty: PropertyAccessor;
		linkLabelKeysProperty: PropertyAccessor;
		linkToKeyProperty: PropertyAccessor;
		linkToPortIdProperty: PropertyAccessor;
		makeUniqueLinkKeyFunction: (model: Model, obj: Object) => Key;
		nodeGroupKeyProperty: PropertyAccessor;
		nodeIsGroupProperty: PropertyAccessor;
		addLabelKeyForLinkData(linkdata: Object, key: Key): void;
		addLinkData(linkdata: Object): void;
		addLinkDataCollection(coll: Iterable<Object> | Array<Object>): void;
		containsLinkData(linkdata: Object): boolean;
		copyLinkData(linkdata: Object): Object;
		findLinkDataForKey(key: Key): any;
		getCategoryForLinkData(linkdata: Object): string;
		getFromKeyForLinkData(linkdata: Object): Key;
		getFromPortIdForLinkData(linkdata: Object): string;
		getGroupKeyForNodeData(nodedata: Object): Key;
		getKeyForLinkData(linkdata: Object): Key;
		getLabelKeysForLinkData(linkdata: Object): Array<Key>;
		getToKeyForLinkData(linkdata: Object): Key;
		getToPortIdForLinkData(linkdata: Object): string;
		isGroupForNodeData(nodedata: Object): boolean;
		makeLinkDataKeyUnique(linkdata: Object): void;
		removeLabelKeyForLinkData(linkdata: Object, key: Key): void;
		removeLinkData(linkdata: Object): void;
		removeLinkDataCollection(coll: Iterable<Object> | Array<Object>): void;
		setCategoryForLinkData(linkdata: Object, cat: string): void;
		setFromKeyForLinkData(linkdata: Object, key: Key): void;
		setFromPortIdForLinkData(linkdata: Object, portname: string): void;
		setGroupKeyForNodeData(nodedata: Object, key: Key): void;
		setKeyForLinkData(linkdata: Object, key: Key): void;
		setLabelKeysForLinkData(linkdata: Object, arr: Array<Key>): void;
		setToKeyForLinkData(linkdata: Object, key: Key): void;
		setToPortIdForLinkData(linkdata: Object, portname: string): void
	}

	declare class Model  {
		constructor(nodedataarray?: Array<Object>): this;
		copiesArrays: boolean;
		copiesArrayObjects: boolean;
		copyNodeDataFunction: (obj: Object, model: Model) => Object;
		dataFormat: string;
		isReadOnly: boolean;
		makeUniqueKeyFunction: (model: Model, obj: Object) => Key;
		modelData: any;
		name: string;
		nodeCategoryProperty: PropertyAccessor;
		nodeDataArray: Array<Object>;
		nodeKeyProperty: PropertyAccessor;
		skipsUndoManager: boolean;
		undoManager: UndoManager;
		addArrayItem(arr: Array<any>, val: any): void;
		addChangedListener(listener: (e: ChangedEvent) => void): void;
		addNodeData(nodedata: Object): void;
		addNodeDataCollection(coll: Iterable<Object> | Array<Object>): void;
		applyIncrementalJson(s: string | Object): void;
		clear(): void;
		cloneProtected(copy: Model): void;
		commitTransaction(tname?: string): boolean;
		containsNodeData(nodedata: Object): boolean;
		copy(): Model;
		copyNodeData(nodedata: Object): Object;
		findNodeDataForKey(key: Key): any;
		fromJson(s: string | Object, model?: Model): Model;
		getCategoryForNodeData(nodedata: Object): string;
		getKeyForNodeData(nodedata: Object): Key;
		insertArrayItem(arr: Array<any>, idx: number, val: any): void;
		makeNodeDataKeyUnique(nodedata: Object): void;
		raiseChangedEvent(
		change: EnumValue, propertyname: PropertyAccessor, obj: Object, oldval: any, newval: any, oldparam?: any, newparam?: any
	): void;
		raiseDataChanged(
		data: Object, propertyname: PropertyAccessor, oldval: any, newval: any, oldparam?: any, newparam?: any
	): void;
		removeArrayItem(arr: Array<any>, idx?: number): void;
		removeChangedListener(listener: (e: ChangedEvent) => void): void;
		removeNodeData(nodedata: Object): void;
		removeNodeDataCollection(coll: Iterable<Object> | Array<Object>): void;
		rollbackTransaction(): boolean;
		setCategoryForNodeData(nodedata: Object, cat: string): void;
		setDataProperty(data: Object, propname: string, val: any): void;
		setKeyForNodeData(nodedata: Object, key: Key): void;
		startTransaction(tname?: string): boolean;
		toIncrementalJson(e: ChangedEvent, classname?: string): string;
		toJson(classname?: string): string;
		updateTargetBindings(data: Object, srcpropname?: string): void
	}

	declare class Transaction  {
		constructor(): this;
		changes: List<ChangedEvent>;
		isComplete: boolean;
		name: string;
		canRedo(): boolean;
		canUndo(): boolean;
		clear(): void;
		redo(): void;
		undo(): void
	}

	declare class TreeModel extends Model {
		constructor(nodedataarray?: Array<Object>): this;
		nodeParentKeyProperty: PropertyAccessor;
		parentLinkCategoryProperty: PropertyAccessor;
		getParentKeyForNodeData(nodedata: Object): Key;
		getParentLinkCategoryForNodeData(childdata: Object): string;
		setParentKeyForNodeData(nodedata: Object, key: Key): void;
		setParentLinkCategoryForNodeData(childdata: Object, cat: string): void
	}

	declare class UndoManager  {
		constructor(): this;
		currentTransaction: Transaction;
		history: List<Transaction>;
		hisotryIndex: number;
		isEnabled: boolean;
		isInTransaction: boolean;
		isUndoingRedoing: boolean;
		maxHistoryLength: number;
		models: Iterator<Model>;
		nestedTransactionNames: List<string>;
		transactionLevel: number;
		transactionToRedo: Transaction;
		transactionToUndo: Transaction;
		addModel(model: Model): void;
		canRedo(): boolean;
		canUndo(): boolean;
		clear(): void;
		commitTransaction(tname?: string): boolean;
		handleChanged(e: ChangedEvent): void;
		redo(): void;
		removeModel(model: Model): void;
		rollbackTransaction(): boolean;
		skipsEvent(e: ChangedEvent): boolean;
		startTransaction(tname?: string): boolean;
		undo(): void
	}

	declare class CircularLayout extends Layout {
		constructor(): this;
		actualCenter: Point;
		actualSpacing: number;
		actualXRadius: number;
		actualYRadius: number;
		arrangement: EnumValue;
		aspectRatio: number;
		comparer: (a: CircularVertex, b: CircularVertex) => number;
		direction: EnumValue;
		nodeDiameterFormula: EnumValue;
		radius: number;
		sorting: EnumValue;
		spacing: number;
		startAngle: number;
		sweepAngle: number;
		commitLayout(): void;
		commitLinks(): void;
		commitNodes(): void;
		createNetwork(): CircularNetwork;
		doLayout(coll: (Diagram | Group | Iterable<Part>)): void;
		Ascending: EnumValue;
		BidirectionalLeft: EnumValue;
		BidirectionalRight: EnumValue;
		Circular: EnumValue;
		Clockwise: EnumValue;
		ConstantAngle: EnumValue;
		ConstantDistance: EnumValue;
		ConstantSpacing: EnumValue;
		Counterclockwise: EnumValue;
		Descending: EnumValue;
		Forwards: EnumValue;
		Optimized: EnumValue;
		Packed: EnumValue;
		Pythagorean: EnumValue;
		Reverse: EnumValue
	}

	declare class CircularNetwork extends LayoutNetwork {
		
	}

	declare class CircularEdge extends LayoutEdge {
		
	}

	declare class CircularVertex extends LayoutVertex {
		actualAngle: number;
		diameter: number
	}

	declare class ForceDirectedLayout extends Layout {
		constructor(): this;
		arrangementSpacing: Size;
		arrangesToOrigin: boolean;
		comments: boolean;
		currentIteration: number;
		defaultCommentElectricalCharge: number;
		defaultCommentSpringLength: number;
		defaultElectricalCharge: number;
		defaultGravitationalMass: number;
		defaultSpringLength: number;
		defaultSpringStiffness: number;
		epsilonDistance: number;
		infinityDistance: number;
		maxIterations: number;
		randomNumberGenerator: {
		random: () => number
	};
		setsPortSpots: boolean;
		addComments(v: ForceDirectedVertex): void;
		commitLayout(): void;
		commitLinks(): void;
		commitNodes(): void;
		createNetwork(): ForceDirectedNetwork;
		doLayout(coll: (Diagram | Group | Iterable<Part>)): void;
		electricalCharge(v: ForceDirectedVertex): number;
		electricalFieldX(x: number, y: number): number;
		electricalFieldY(x: number, y: number): number;
		gravitationalFieldX(x: number, y: number): number;
		gravitationalFieldY(x: number, y: number): number;
		gravitationalMass(v: ForceDirectedVertex): number;
		isFixed(v: ForceDirectedVertex): boolean;
		moveFixedVertex(v: ForceDirectedVertex): void;
		springLength(e: ForceDirectedEdge): number;
		springStiffness(e: ForceDirectedEdge): number
	}

	declare class ForceDirectedNetwork extends LayoutNetwork {
		
	}

	declare class ForceDirectedEdge extends LayoutEdge {
		length: number;
		stiffness: number
	}

	declare class ForceDirectedVertex extends LayoutVertex {
		charge: number;
		forceX: number;
		forceY: number;
		isFixed: boolean;
		mass: number
	}

	declare class GridLayout extends Layout {
		constructor(): this;
		alignment: EnumValue;
		arrangement: EnumValue;
		cellSize: Size;
		comparer: (a: Part, b: Part) => number;
		sorting: EnumValue;
		spacing: Size;
		wrappingColumn: number;
		wrappingWidth: number;
		doLayout(coll: (Diagram | Group | Iterable<Part>)): void;
		Ascending: EnumValue;
		Descending: EnumValue;
		Forward: EnumValue;
		LeftToRight: EnumValue;
		Location: EnumValue;
		Position: EnumValue;
		Reverse: EnumValue;
		RightToLeft: EnumValue
	}

	declare class LayeredDigraphLayout extends Layout {
		constructor(): this;
		aggressiveOption: EnumValue;
		columnSpacing: number;
		cycleRemoveOption: EnumValue;
		direction: number;
		initializeOption: EnumValue;
		iterations: number;
		layeringOption: EnumValue;
		layerSpacing: number;
		maxColumn: number;
		maxIndex: number;
		maxIndexLayer: number;
		maxLayer: number;
		minIndexLayer: number;
		packOption: number;
		setsPortSpots: boolean;
		assignLayers(): void;
		commitLayers(layerRects: Array<Rect>, offset: Point): void;
		commitLayout(): void;
		commitLinks(): void;
		commitNodes(): void;
		createNetwork(): LayeredDigraphNetwork;
		doLayout(coll: (Diagram | Group | Iterable<Part>)): void;
		AggressiveLess: EnumValue;
		AggressiveMore: EnumValue;
		AggressiveNone: EnumValue;
		CycleDepthFirst: EnumValue;
		CycleGreedy: EnumValue;
		InitDepthFirstIn: EnumValue;
		InitDepthFirstOut: EnumValue;
		InitNaive: EnumValue;
		LayerLongestPathSink: EnumValue;
		LayerLongestPathSource: EnumValue;
		LayerOptimalLinkLength: EnumValue;
		PackAll: number;
		PackExpand: number;
		PackMedian: number;
		PackNone: number;
		PackStraighten: number;
		linkSpacing: number;
		nodeMinLayerSpace(v: LayeredDigraphVertex, tl: boolean): number;
		nodeMinColumnSpace(v: LayeredDigraphVertex, tl: boolean): number
	}

	declare class LayeredDigraphNetwork extends LayoutNetwork {
		
	}

	declare class LayeredDigraphEdge extends LayoutEdge {
		forest: boolean;
		portFromColOffset: number;
		portFromPos: number;
		portToColOffset: number;
		portToPos: number;
		rev: boolean;
		valid: boolean
	}

	declare class LayeredDigraphVertex extends LayoutVertex {
		column: number;
		component: number;
		index: number;
		layer: number;
		near: LayeredDigraphVertex
	}

	declare class Layout  {
		constructor(): this;
		arrangementOrigin: Point;
		diagram: Diagram;
		group: Group;
		isInitial: boolean;
		isOngoing: boolean;
		isRealtime: boolean;
		isRouting: boolean;
		isValidLayout: boolean;
		isViewportSized: boolean;
		network: LayoutNetwork;
		cloneProtected(copy: Layout): void;
		commitLayout(): void;
		copy(): Layout;
		createNetwork(): LayoutNetwork;
		doLayout(coll: (Diagram | Group | Iterable<Part>)): void;
		invalidateLayout(): void;
		makeNetwork(coll: (Diagram | Group | Iterable<Part>)): LayoutNetwork;
		updateParts(): void;
		collectParts(coll: Iterable<Part>): void
	}

	declare class LayoutNetwork  {
		constructor(): this;
		edges: Set<LayoutEdge>;
		layout: Layout;
		vertexes: Set<LayoutVertex>;
		addEdge(edge: LayoutEdge): void;
		addLink(link: Link): LayoutEdge;
		addNode(node: Node): LayoutVertex;
		addParts(
		parts: Iterable<Part>, toplevelonly?: boolean, pred?: (part: Part) => boolean
	): void;
		addVertex(vertex: LayoutVertex): void;
		createEdge(): LayoutEdge;
		createVertex(): LayoutVertex;
		deleteArtificialVertexes(): void;
		deleteEdge(edge: LayoutEdge): void;
		deleteLink(link: Link): void;
		deleteNode(node: Node): void;
		deleteSelfEdges(): void;
		deleteVertex(vertex: LayoutVertex): void;
		findAllParts(): Set<Part>;
		findEdge(link: Link): LayoutEdge;
		findVertex(node: Node): LayoutVertex;
		linkVertexes(fromVertex: LayoutVertex, toVertex: LayoutVertex, link: Link): LayoutEdge;
		reverseEdge(edge: LayoutEdge): void;
		splitIntoSubNetworks(): List<LayoutNetwork>
	}

	declare class LayoutEdge  {
		constructor(): this;
		data: any;
		fromVertex: LayoutVertex;
		link: Link;
		network: LayoutNetwork;
		toVertex: LayoutVertex;
		commit(): void;
		getOtherVertex(v: LayoutVertex): void
	}

	declare class LayoutVertex  {
		constructor(): this;
		bounds: Rect;
		centerX: number;
		centerY: number;
		data: any;
		destinationEdges: Iterator<LayoutEdge>;
		destinationVertexes: Iterator<LayoutVertex>;
		edges: Iterator<LayoutEdge>;
		edgesCount: number;
		focus: Point;
		focusX: number;
		focusY: number;
		height: number;
		network: LayoutNetwork;
		node: Node;
		sourceEdges: Iterator<LayoutEdge>;
		sourceVertexes: Iterator<LayoutVertex>;
		vertexes: Iterator<LayoutVertex>;
		width: number;
		x: number;
		y: number;
		addDestinationEdge(edge: LayoutEdge): void;
		addSourceEdge(edge: LayoutEdge): void;
		commit(): void;
		deleteDestinationEdge(edge: LayoutEdge): void;
		deleteSourceEdge(edge: LayoutEdge): void;
		smartComparer(m: LayoutVertex, n: LayoutVertex): number;
		standardComparer(m: LayoutVertex, n: LayoutVertex): number
	}

	declare class TreeLayout extends Layout {
		constructor(): this;
		alignment: EnumValue;
		alternateAlignment: EnumValue;
		alternateAngle: number;
		alternateBreadthLimit: number;
		alternateChildPortSpot: Spot;
		alternateCommentMargin: number;
		alternateCommentSpacing: number;
		alternateCompaction: EnumValue;
		alternateComparer: (a: TreeVertex, b: TreeVertex) => number;
		alternateDefaults: TreeVertex;
		alternateLayerSpacing: number;
		alternateLayerSpacingParentOverlap: number;
		alternateNodeIndent: number;
		alternateNodeIndentPastParent: number;
		alternateNodeSpacing: number;
		alternatePortSpot: Spot;
		alternateRowIndent: number;
		alternateRowSpacing: number;
		alternateSetsChildPortSpot: boolean;
		alternateSetsPortSpot: boolean;
		alternateSorting: EnumValue;
		angle: number;
		arrangement: EnumValue;
		arrangementSpacing: Size;
		breadthLimit: number;
		childPortSpot: Spot;
		commentMargin: number;
		commentSpacing: number;
		compaction: EnumValue;
		comments: boolean;
		comparer: (a: TreeVertex, b: TreeVertex) => number;
		layerSpacing: number;
		layerSpacingParentOverlap: number;
		layerStyle: EnumValue;
		nodeIndent: number;
		nodeIndentPastParent: number;
		nodeSpacing: number;
		path: EnumValue;
		portSpot: Spot;
		rootDefaults: TreeVertex;
		roots: Set<TreeVertex | Node>;
		rowIndent: number;
		rowSpacing: number;
		setsChildPortSpot: boolean;
		setsPortSpot: boolean;
		sorting: EnumValue;
		treeStyle: EnumValue;
		addComments(v: TreeVertex): void;
		arrangeTrees(): void;
		assignTreeVertexValues(v: TreeVertex): void;
		commitLayers(layerRects: Array<Rect>, offset: Point): void;
		commitLayout(): void;
		commitLinks(): void;
		commitNodes(): void;
		createNetwork(): TreeNetwork;
		doLayout(coll: (Diagram | Group | Iterable<Part>)): void;
		initializeTreeVertexValues(v: TreeVertex): void;
		layoutComments(v: TreeVertex): void;
		AlignmentBottomRightBus: EnumValue;
		AlignmentBus: EnumValue;
		AlignmentBusBranching: EnumValue;
		AlignmentCenterChildren: EnumValue;
		AlignmentCenterSubtrees: EnumValue;
		AlignmentEnd: EnumValue;
		AlignmentStart: EnumValue;
		AlignmentTopLeftBus: EnumValue;
		ArrangementFixedRoots: EnumValue;
		ArrangementHorizontal: EnumValue;
		ArrangementVertical: EnumValue;
		CompactionBlock: EnumValue;
		CompactionNone: EnumValue;
		LayerIndividual: EnumValue;
		LayerSiblings: EnumValue;
		LayerUniform: EnumValue;
		PathDefault: EnumValue;
		PathDestination: EnumValue;
		PathSource: EnumValue;
		SortingAscending: EnumValue;
		SortingDescending: EnumValue;
		SortingForwards: EnumValue;
		SortingReverse: EnumValue;
		StyleAlternating: EnumValue;
		StyleLastParents: EnumValue;
		StyleLayered: EnumValue;
		StyleRootOnly: EnumValue
	}

	declare class TreeNetwork extends LayoutNetwork {
		
	}

	declare class TreeEdge extends LayoutEdge {
		relativePoint: Point;
		commit(): void
	}

	declare class TreeVertex extends LayoutVertex {
		alignment: EnumValue;
		angle: number;
		breadthLimit: number;
		childPortSpot: Spot;
		children: Array<TreeVertex>;
		childrenCount: number;
		commentMargin: number;
		comments: Array<Node>;
		commentSpacing: number;
		compaction: EnumValue;
		comparer: (a: TreeVertex, b: TreeVertex) => number;
		descendantCount: number;
		initialized: boolean;
		layerSpacing: number;
		layerSpacingParentOverlap: number;
		level: number;
		maxChildrenCount: number;
		maxGenerationCount: number;
		nodeIndent: number;
		nodeIndentPastParent: number;
		nodeSpacing: number;
		parent: TreeVertex;
		portSpot: Spot;
		relativePosition: Point;
		rowIndent: number;
		rowSpacing: number;
		setsChildPortSpot: boolean;
		setsPortSpot: boolean;
		sorting: EnumValue;
		subtreeOffset: Point;
		subtreeSize: Size;
		copyInheritedPropertiesFrom(copy: TreeVertex): void
	}

	declare class ActionTool extends Tool {
		constructor(): this;
		canStart(): boolean;
		doCancel(): void;
		doMouseDown(): void;
		doMouseMove(): void;
		doMouseUp(): void
	}

	declare class ClickCreatingTool extends Tool {
		constructor(): this;
		archetypeNodeData: any;
		isDoubleClick: boolean;
		canStart(): boolean;
		doMouseUp(): void;
		insertPart(loc: Point): Part
	}

	declare class ClickSelectingTool extends Tool {
		constructor(): this;
		canStart(): boolean;
		doMouseUp(): void
	}

	declare class ContextMenuTool extends Tool {
		constructor(): this;
		currentContextMenu: Adornment;
		currentObject: GraphObject;
		mouseDownPoint: Point;
		canStart(): boolean;
		doActivate(): void;
		doMouseMove(): void;
		doMouseUp(): void;
		findObjectWithContextMenu(): GraphObject | Diagram;
		hideContextMenu(): void;
		hideDefaultContextMenu(): void;
		positionContextMenu(contextmenu: Adornment, obj: GraphObject): void;
		showContextMenu(contextmenu: Adornment, obj: GraphObject): void;
		showDefaultContextMenu(): void
	}

	declare class DraggingTool extends Tool {
		constructor(): this;
		copiedParts: Map<Part, DraggingInfo>;
		copiesEffectiveCollection: boolean;
		currentPart: Part;
		delay: number;
		draggedParts: Map<Part, DraggingInfo>;
		dragsLink: boolean;
		dragsTree: boolean;
		gridSnapCellSize: Size;
		gridSnapCellSpot: Spot;
		gridSnapOrigin: Point;
		isCopyEnabled: boolean;
		isGridSnapEnabled: boolean;
		isGridSnapRealtime: boolean;
		startPoint: Point;
		canStart(): boolean;
		computeEffectiveCollection(parts: Iterable<Part>): Map<Part, DraggingInfo>;
		computeMove(
		n: Part, newloc: Point, draggedparts?: Map<Part, DraggingInfo>, result?: Point
	): Point;
		doActivate(): void;
		doCancel(): void;
		doDeactivate(): void;
		doDragOver(pt: Point, obj: GraphObject): void;
		doDropOnto(pt: Point, obj: GraphObject): void;
		doKeyDown(): void;
		doKeyUp(): void;
		doMouseMove(): void;
		doMouseUp(): void;
		findDraggablePart(): Part;
		mayCopy(): boolean;
		mayMove(): boolean;
		moveParts(parts: Map<Part, DraggingInfo>, offset: Point, check: boolean): void;
		standardMouseSelect(): void
	}

	declare class DragSelectingTool extends Tool {
		constructor(): this;
		box: Part;
		delay: number;
		isPartialInclusion: boolean;
		canStart(): boolean;
		computeBoxBounds(): Rect;
		doActivate(): void;
		doDeactivate(): void;
		doMouseMove(): void;
		doMouseUp(): void;
		selectInRect(r: Rect): void
	}

	declare class LinkingBaseTool extends Tool {
		constructor(): this;
		isForwards: boolean;
		isUnconnectedLinkValid: boolean;
		linkValidation: (
		fromNode: Node, fromPort: GraphObject, toNode: Node, toPort: GraphObject, link: Link
	) => boolean;
		originalFromNode: Node;
		originalFromPort: GraphObject;
		originalLink: Link;
		originalToNode: Node;
		originalToPort: GraphObject;
		portGravity: number;
		portTargeted: (
		realNode: Node, realPort: GraphObject, tempNode: Node, tempPort: GraphObject, toend: boolean
	) => void;
		targetPort: GraphObject;
		temporaryFromNode: Node;
		temporaryFromPort: GraphObject;
		temporaryLink: Link;
		temporaryToNode: Node;
		temporaryToPort: GraphObject;
		copyPortProperties(
		realnode: Node, realport: GraphObject, tempnode: Node, tempport: GraphObject, toend: boolean
	): void;
		doMouseMove(): void;
		findTargetPort(toend: boolean): GraphObject;
		isInSameNode(fromport: GraphObject, toport: GraphObject): boolean;
		isLinked(fromport: GraphObject, toport: GraphObject): boolean;
		isValidCycle(from: Node, to: Node, ignore: Link): boolean;
		isValidFrom(fromnode: Node, fromport: GraphObject): boolean;
		isValidLink(
		fromnode: Node, fromport: GraphObject, tonode: Node, toport: GraphObject
	): boolean;
		isValidTo(tonode: Node, toport: GraphObject): boolean;
		setNoTargetPortProperties(tempnode: Node, tempport: GraphObject, toend: boolean): void
	}

	declare class LinkingTool extends LinkingBaseTool {
		constructor(): this;
		archetypeLabelNodeData: any;
		archetypeLinkData: any;
		direction: EnumValue;
		startObject: GraphObject;
		canStart(): boolean;
		doActivate(): void;
		doDeactivate(): void;
		doMouseUp(): void;
		findLinkablePort(): GraphObject;
		insertLink(fromnode: Node, fromport: GraphObject, tonode: Node, toport: GraphObject): Link;
		BackwardsOnly: EnumValue;
		Either: EnumValue;
		ForwardsOnly: EnumValue
	}

	declare class LinkReshapingTool extends Tool {
		constructor(): this;
		adornedLink: Link;
		handle: GraphObject;
		handleArchetype: GraphObject;
		midHandleArchetype: GraphObject;
		originalPoint: Point;
		originalPoints: List<Point>;
		canStart(): boolean;
		computeReshape(p: Point): Point;
		doActivate(): void;
		doCancel(): void;
		doDeactivate(): void;
		doMouseMove(): void;
		doMouseUp(): void;
		getReshapingBehavior(obj: GraphObject): EnumValue;
		setReshapingBehavior(obj: GraphObject, behavior: EnumValue): void;
		reshape(newPoint: Point): void;
		updateAdornments(part: Part): void;
		All: EnumValue;
		Horizontal: EnumValue;
		None: EnumValue;
		Vertical: EnumValue
	}

	declare class PanningTool extends Tool {
		constructor(): this;
		bubbles: boolean;
		originalPosition: Point;
		canStart(): boolean;
		doActivate(): void;
		doCancel(): void;
		doDeactivate(): void;
		doMouseMove(): void;
		doMouseUp(): void
	}

	declare class RelinkingTool extends LinkingBaseTool {
		constructor(): this;
		fromHandleArchetype: GraphObject;
		handle: GraphObject;
		toHandleArchetype: GraphObject;
		canStart(): boolean;
		copyLinkProperties(reallink: Link, templink: Link): void;
		doActivate(): void;
		doDeactivate(): void;
		doMouseUp(): void;
		reconnectLink(
		existinglink: Link, newnode: Node, newport: GraphObject, toend: boolean
	): boolean;
		updateAdornments(part: Part): void
	}

	declare class ResizingTool extends Tool {
		constructor(): this;
		adornedObject: GraphObject;
		cellSize: Size;
		handle: GraphObject;
		handleArchetype: GraphObject;
		isGridSnapEnabled: boolean;
		maxSize: Size;
		minSize: Size;
		originalDesiredSize: Size;
		originalLocation: Point;
		canStart(): boolean;
		computeCellSize(): Size;
		computeMaxSize(): Size;
		computeMinSize(): Size;
		computeResize(
		newPoint: Point, spot: Spot, min: Size, max: Size, cell: Size, reshape: boolean
	): Rect;
		doActivate(): void;
		doCancel(): void;
		doDeactivate(): void;
		doMouseMove(): void;
		doMouseUp(): void;
		resize(newr: Rect): void;
		updateAdornments(part: Part): void
	}

	declare class RotatingTool extends Tool {
		constructor(): this;
		adornedObject: GraphObject;
		handle: GraphObject;
		handleArchetype: GraphObject;
		originalAngle: number;
		snapAngleEpsilon: number;
		snapAngleMultiple: number;
		canStart(): boolean;
		computeRotate(newPoint: Point): number;
		doActivate(): void;
		doCancel(): void;
		doDeactivate(): void;
		doMouseMove(): void;
		doMouseUp(): void;
		rotate(newangle: number): void;
		updateAdornments(part: Part): void
	}

	declare class TextEditingTool extends Tool {
		constructor(): this;
		currentTextEditor: Element;
		defaultTextEditor: Element;
		starting: EnumValue;
		textBlock: TextBlock;
		textValidation: (tb: TextBlock, oldstr: string, newstr: string) => boolean;
		acceptText(reason: EnumValue): void;
		canStart(): boolean;
		doActivate(): void;
		doCancel(): void;
		doDeactivate(): void;
		doMouseDown(): void;
		doMouseUp(): void;
		doStart(): void;
		isValidText(textblock: TextBlock, oldstr: string, newstr: string): boolean;
		Enter: EnumValue;
		LostFocus: EnumValue;
		MouseDown: EnumValue;
		SingleClick: EnumValue;
		SingleClickSelected: EnumValue;
		Tab: EnumValue
	}

	declare class Tool  {
		constructor(): this;
		diagram: Diagram;
		isActive: boolean;
		isEnabled: boolean;
		name: string;
		transactionResult: string;
		cancelWaitAfter(): void;
		canStart(): boolean;
		canStartMultiTouch(): boolean;
		doActivate(): void;
		doCancel(): void;
		doDeactivate(): void;
		doKeyDown(): void;
		doKeyUp(): void;
		doMouseDown(): void;
		doMouseMove(): void;
		doMouseUp(): void;
		doMouseWheel(): void;
		doStart(): void;
		doStop(): void;
		doWaitAfter(): void;
		findToolHandleAt(p: Point, category: string): GraphObject;
		isBeyondDragSize(first?: Point, last?: Point): boolean;
		standardMouseClick(
		navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean
	): void;
		standardMouseOver(): void;
		standardMouseSelect(): void;
		standardMouseWheel(): void;
		standardPinchZoomStart(): void;
		standardPinchZoomMove(): void;
		standardWaitAfter(delay: number): void;
		startTransaction(tname?: string): boolean;
		stopTool(): void;
		stopTransaction(): boolean;
		updateAdornments(part: Part): void
	}

	declare class ToolManager extends Tool {
		constructor(): this;
		actionTool: ActionTool;
		clickCreatingTool: ClickCreatingTool;
		clickSelectingTool: ClickSelectingTool;
		contextMenuTool: ContextMenuTool;
		currentToolTip: Adornment;
		draggingTool: DraggingTool;
		dragSelectingTool: DragSelectingTool;
		dragSize: Size;
		holdDelay: number;
		hoverDelay: number;
		linkingTool: LinkingTool;
		linkReshapingTool: LinkReshapingTool;
		mouseDownTools: List<Tool>;
		mouseMoveTools: List<Tool>;
		mouseUpTools: List<Tool>;
		mouseWheelBehavior: EnumValue;
		panningTool: PanningTool;
		relinkingTool: RelinkingTool;
		resizingTool: ResizingTool;
		rotatingTool: RotatingTool;
		textEditingTool: TextEditingTool;
		doKeyDown(): void;
		doKeyUp(): void;
		doMouseDown(): void;
		doMouseHover(): void;
		doMouseMove(): void;
		doMouseUp(): void;
		doMouseWheel(): void;
		doToolTip(): void;
		doWaitAfter(): void;
		findTool(name: string): Tool;
		hideToolTip(): void;
		initializeStandardTools(): void;
		positionToolTip(tooltip: Adornment, obj: GraphObject): void;
		replaceTool(name: string, newtool: Tool): Tool;
		showToolTip(tooltip: Adornment, obj: GraphObject): void;
		GestureCancel: EnumValue;
		GestureNone: EnumValue;
		GestureZoom: EnumValue;
		WheelNone: EnumValue;
		WheelScroll: EnumValue;
		WheelZoom: EnumValue
	}

	declare class Iterable<T>  {
		iterator: Iterator<T>
	}

	declare class Iterator<T> extends Iterable<T> {
		count: number;
		iterator: Iterator<T>;
		key: any;
		value: T;
		all(pred: (x: T) => boolean): boolean;
		any(pred: (x: T) => boolean): boolean;
		concat<S>(it: Iterable<S>): Iterator<S | T>;
		each(func: (x: T) => void): void;
		filter(pred: (x: T) => boolean): Iterator<T>;
		first(): T;
		map<S>(func: (x: T) => S): Iterator<S>;
		next(): boolean;
		reset(): void
	}

	declare class List<T> extends Iterable<T> {
		constructor(type: Constructor): this;
		constructor(type?: string): this;
		count: number;
		size: number;
		iterator: Iterator<T>;
		iteratorBackwards: Iterator<T>;
		length: number;
		add(val: T): void;
		addAll(coll: Iterable<T> | Array<T>): List<T>;
		all(pred: (x: T) => boolean): boolean;
		any(pred: (x: T) => boolean): boolean;
		clear(): void;
		concat<S>(it: Iterable<S>): List<S | T>;
		contains(val: T): boolean;
		copy(): List<T>;
		delete(val: T): boolean;
		each(func: (x: T) => void): void;
		elt(i: number): T;
		filter(pred: (x: T) => boolean): List<T>;
		first(): T;
		get(i: number): T;
		has(val: T): boolean;
		indexOf(val: T): number;
		insertAt(i: number, val: T): void;
		last(): T;
		map<S>(func: (x: T) => S): List<S>;
		pop(): T;
		push(val: T): void;
		remove(val: T): boolean;
		removeAt(i: number): void;
		removeRange(to: number, from: number): void;
		reverse(): List<T>;
		set(i: number, val: T): void;
		setElt(i: number, val: T): void;
		sort(sortfunc: (a: T, b: T) => number): List<T>;
		toArray(): Array<T>;
		toSet(): Set<T>
	}

	declare class Map<K, V> extends Iterator<KeyValuePair<K, V>> {
		constructor(keytype: Constructor, valtype: Constructor): this;
		constructor(keytype: string, valtype: Constructor): this;
		constructor(keytype: Constructor, valtype: string): this;
		constructor(keytype?: string, valtype?: string): this;
		count: number;
		iterator: Iterator<KeyValuePair<K, V>>;
		iteratorKeys: Iterator<K>;
		iteratorValues: Iterator<V>;
		size: number;
		add(key: K, val: V): boolean;
		addAll(coll: Iterable<KeyValuePair<K, V>> | Array<KeyValuePair<K, V>>): Map<K, V>;
		all(pred: (x: KeyValuePair<K, V>) => boolean): boolean;
		any(pred: (x: KeyValuePair<K, V>) => boolean): boolean;
		clear(): void;
		concat<W>(it: Iterable<KeyValuePair<K, W>>): Map<K, V | W>;
		contains(key: K): boolean;
		copy(): Map<K, V>;
		delete(key: K): boolean;
		each(func: (x: KeyValuePair<K, V>) => void): void;
		filter(pred: (x: KeyValuePair<K, V>) => boolean): Map<K, V>;
		first(): KeyValuePair<K, V>;
		get(key: K): V;
		getValue(key: K): V;
		has(key: K): boolean;
		map<S>(func: (x: KeyValuePair<K, V>) => S): Map<K, S>;
		remove(key: K): boolean;
		set(key: K, val: V): boolean;
		toArray(): Array<KeyValuePair<K, V>>;
		toKeySet(): Set<K>
	}

	declare class Set<T> extends Iterable<T> {
		constructor(type: Constructor): this;
		constructor(type?: string): this;
		count: number;
		iterator: Iterator<T>;
		size: number;
		add(val: T): boolean;
		addAll(coll: Iterable<T> | Array<T>): Set<T>;
		all(pred: (x: T) => boolean): boolean;
		any(pred: (x: T) => boolean): boolean;
		clear(): void;
		concat<S>(it: Iterable<S>): Set<S | T>;
		contains(val: T): boolean;
		containsAll(coll: Iterable<T>): boolean;
		containsAny(coll: Iterable<T>): boolean;
		copy(): Set<T>;
		delete(val: T): boolean;
		each(func: (x: T) => void): void;
		filter(pred: (x: T) => boolean): Set<T>;
		first(): T;
		has(val: T): boolean;
		map<S>(func: (x: T) => S): Set<S>;
		remove(val: T): boolean;
		removeAll(coll: Iterable<T>): Set<T>;
		removeAll(coll: Array<T>): Set<T>;
		retainAll(coll: Iterable<T>): Set<T>;
		toArray(): Array<T>;
		toList(): List<T>
	}

	declare class EnumValue  {
		
	}

	
}

declare module 'go' {
					declare module.exports: undefined


}