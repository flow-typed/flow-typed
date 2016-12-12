import type { SigmaFactory, CustomShapes } from 'npm$namespace$SigmaJs'

declare module 'sigmajs' {
					
}

declare module 'npm$namespace$SigmaJs' {
		declare interface Animation {
		camera(
		camera: Camera, target: {
		[index: string]: any
	}, options: {
		[index: string]: any
	}
	): number
	}

	declare interface Camera {
		angle: number,
		cameraPosition(x: number, y: number): {
		x: number,
		y: number
	},
		goTo(settings: {
		[index: string]: any
	}): void,
		graphPosition(x: number, y: number): {
		x: number,
		y: number
	},
		ratio: number,
		readPrefix: string,
		settings(setting: string): any,
		x: number,
		y: number
	}

	declare interface Canvas {
		edges: {
		[renderType: string]: (edge: Edge, source: Node, target: Node, ...a: any[]) => void
	},
		labels: {
		[renderType: string]: (node: Node, ...a: any[]) => void
	},
		nodes: {
		[renderType: string]: (node: Node, ...a: any[]) => void
	}
	}

	declare interface Classes {
		configurable: Configurable,
		graph: Graph
	}

	declare interface Configurable {
		new (setting: Settings): Configurable,
		new (settings: Settings[]): Configurable,
		(key: string): string
	}

	declare interface CustomShapes {
		init(sigma: Sigma): void
	}

	declare interface DragNodes {
		(sigma: Sigma, renderer: Renderer): DragNodes
	}

	declare interface Edge {
		[key: string]: any,
		color?: string,
		id: string,
		size?: number,
		source: string,
		target: string
	}

	declare interface JsonParser {
		(target: string, sigma: Sigma, callback: (graph: Sigma) => void): void
	}

	declare interface GexfParser {
		(target: string, sigma: Sigma, callback: (graph: Sigma) => void): void
	}

	declare interface Graph {
		addEdge(edge: Edge): Graph,
		addNode(node: Node): Graph,
		addMethod(name: string, method: (input: any) => any): void,
		clear(): Graph,
		degree(id: string): number,
		degree(id: string, type: string): number,
		degree(ids: string[]): number[],
		degree(ids: string[], type: string): number[],
		dropEdge(id: string): Graph,
		dropNode(id: string): Graph,
		edges(): Edge[],
		edges(id: string): Edge,
		edges(ids: string[]): Edge[],
		kill(): Graph,
		nodes(): Node[],
		nodes(id: string): Node,
		nodes(ids: string[]): Node[]
	}

	declare interface GraphData {
		edges: Edge[],
		nodes: Node[]
	}

	declare interface Image {
		clip?: number,
		scale?: number,
		url?: string,
		x?: number,
		y?: number
	}

	declare interface Miscellaneous {
		animation: Animation
	}

	declare interface Node {
		[key: string]: any,
		color?: string,
		id: string,
		image?: any,
		label?: string,
		size?: number,
		type?: string,
		x?: number,
		y?: number
	}

	declare interface Parsers {
		json: JsonParser,
		gexf: GexfParser
	}

	declare interface Plugins {
		dragNodes: DragNodes
	}

	declare interface Renderer {
		container: HTMLElement,
		refresh(): Sigma,
		render(): Sigma,
		resize(): Sigma,
		settings(settings: Settings): void
	}

	declare interface RendererConfigs {
		container?: Element,
		id?: string,
		type?: string
	}

	declare interface ShapeLibrary {
		enumerate(): any
	}

	declare interface Sigma {
		addRenderer(): Renderer,
		addRenderer(configs: RendererConfigs): Renderer,
		bind(event: string, callback: (e: any) => void): void,
		cameras: Camera[],
		graph: Graph,
		killRenderer(renderer: string): Sigma,
		killRenderer(renderer: Renderer): Sigma,
		kill(): void,
		refresh(): void,
		renderers: Renderer[],
		settings(key: string): any,
		settings(settings: Settings): void,
		configForceAtlas2(configs: {
		[key: string]: any
	}): void,
		isForceAtlas2Running(): boolean,
		killForceAtlas2(): void,
		startForceAtlas2(): void,
		startForceAtlas2(configs: {
		[key: string]: any
	}): void,
		stopForceAtlas2(): void
	}

	declare interface SigmaConfigs {
		container?: Element,
		graph?: GraphData,
		id?: string,
		renderers?: Renderer[],
		settings?: {
		[index: string]: any
	}
	}

	declare interface SigmaFactory {
		new (): Sigma,
		new (container: string): Sigma,
		new (container: Element): Sigma,
		new (configuration: SigmaConfigs): Sigma,
		canvas: Canvas,
		classes: Classes,
		misc: Miscellaneous,
		parsers: Parsers,
		plugins: Plugins,
		svg: SVG
	}

	declare interface Settings {
		clone?: boolean,
		immutable?: boolean,
		verbose?: boolean,
		defaultNodeType?: string,
		defaultEdgeType?: string,
		defaultLabelColor?: string,
		defaultEdgeColor?: string,
		defaultNodeColor?: string,
		defaultLabelSize?: string,
		edgeColor?: string,
		minArrowSize?: number,
		font?: string,
		fontStyle?: string,
		labelAlignment?: string,
		labelColor?: string,
		labelSize?: string,
		labelSizeRatio?: string,
		labelThreshold?: number,
		webglOversamplingRatio?: number,
		borderSize?: number,
		defaultNodeBorderColor?: string,
		hoverFont?: number,
		hoverFontStyle?: string,
		labelHoverShadow?: string,
		labelHoverShadowColor?: string,
		nodeHoverColor?: string,
		defaultNodeHoverColor?: string,
		labelHoverBGColor?: string,
		defaultHoverLabelBGColor?: string,
		labelHoverColor?: string,
		defaultLabelHoverColor?: string,
		singleHover?: boolean,
		edgeHoverColor?: string,
		edgeHoverSizeRatio?: number,
		defaultEdgeHoverColor?: string,
		edgeHoverExtremities?: boolean,
		drawLabels?: boolean,
		drawEdges?: boolean,
		drawNodes?: boolean,
		batchEdgesDrawing?: boolean,
		hideEdgesOnMove?: boolean,
		canvasEdgesBatchSize?: number,
		webglEdgesBatchSize?: number,
		scalingMode?: string,
		sideMargin?: number,
		minEdgeSize?: number,
		maxEdgeSize?: number,
		minNodeSize?: number,
		maxNodeSize?: number,
		touchEnabled?: boolean,
		mouseEnabled?: boolean,
		mouseWheelEnabled?: boolean,
		doubleClickEnabled?: boolean,
		eventsEnabled?: boolean,
		zoomingRatio?: number,
		doubleClickZoomingRatio?: number,
		zoomMin?: number,
		zoomMax?: number,
		mouseZoomDuration?: number,
		doubleClickZoomDuration?: number,
		mouseInertiaDuration?: number,
		mouseInertiaRatio?: number,
		touchInertiaDuration?: number,
		touchInertiaRatio?: number,
		doubleClickTimeout?: number,
		doubleTapTimeout?: number,
		dragTimeout?: number,
		autoResize?: boolean,
		autoRescale?: any,
		enableCamera?: boolean,
		enableHovering?: boolean,
		enableEdgeHovering?: boolean,
		edgeHoverPrecision?: number,
		rescaleIgnoreSize?: boolean,
		skipErrors?: boolean,
		nodesPowRatio?: number,
		edgesPowRatio?: number,
		animationsTime?: number
	}

	declare interface SVG {
		edges: {
		labels: SVGEdgeLabels,
		[renderType: string]: SVGObject<SigmaJs.Edge> | SVGEdgeLabels
	},
		labels: {
		[renderType: string]: SVGObject<SigmaJs.Node>
	},
		nodes: {
		[renderType: string]: SVGObject<SigmaJs.Node>
	}
	}

	declare interface SVGEdgeLabels {
		[renderType: string]: SVGObject<SigmaJs.Edge>
	}

	declare interface SVGObject<T> {
		create: (object: T, ...a: any[]) => Element,
		update: (object: T, ...a: any[]) => void
	}

			
}