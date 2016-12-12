

declare module 'openjscad' {
		declare interface Window {
		Worker: Worker,
		webkitURL: URL,
		requestFileSystem: any,
		webkitRequestFileSystem: any
	}

	declare interface IAMFStringOptions {
		unit: string
	}

	declare interface ICenter {
		center(cAxes: string[]): CxG
	}

	declare interface CAG_extrude_options {
		offset?: number[],
		twistangle?: number,
		twiststeps?: number
	}

		declare class CxG  {
		toStlString(): string;
		toStlBinary(): void;
		toAMFString(AMFStringOptions?: IAMFStringOptions): void;
		getBounds(): CxG[];
		transform(matrix4x4: CSG.Matrix4x4): CxG;
		mirrored(plane: CSG.Plane): CxG;
		mirroredX(): CxG;
		mirroredY(): CxG;
		mirroredZ(): CxG;
		translate(v: number[]): CxG;
		translate(v: CSG.Vector3D): CxG;
		scale(f: CSG.Vector3D): CxG;
		rotateX(deg: number): CxG;
		rotateY(deg: number): CxG;
		rotateZ(deg: number): CxG;
		rotate(rotationCenter: CSG.Vector3D, rotationAxis: CSG.Vector3D, degrees: number): CxG;
		rotateEulerAngles(alpha: number, beta: number, gamma: number, position: number[]): CxG
	}

	declare class CSG extends CxG, ICenter {
		polygons: CSG.Polygon[];
		properties: CSG.Properties;
		isCanonicalized: boolean;
		isRetesselated: boolean;
		cachedBoundingBox: CSG.Vector3D[];
		defaultResolution2D: number;
		defaultResolution3D: number;
		fromPolygons(polygons: CSG.Polygon[]): CSG;
		fromSlices(options: any): CSG;
		fromObject(obj: any): CSG;
		fromCompactBinary(bin: any): CSG;
		toPolygons(): CSG.Polygon[];
		union(csg: CSG[]): CSG;
		union(csg: CSG): CSG;
		unionSub(csg: CSG, retesselate?: boolean, canonicalize?: boolean): CSG;
		unionForNonIntersecting(csg: CSG): CSG;
		subtract(csg: CSG[]): CSG;
		subtract(csg: CSG): CSG;
		subtractSub(csg: CSG, retesselate: boolean, canonicalize: boolean): CSG;
		intersect(csg: CSG[]): CSG;
		intersect(csg: CSG): CSG;
		intersectSub(csg: CSG, retesselate?: boolean, canonicalize?: boolean): CSG;
		invert(): CSG;
		transform1(matrix4x4: CSG.Matrix4x4): CSG;
		transform(matrix4x4: CSG.Matrix4x4): CSG;
		toString(): string;
		expand(radius: number, resolution: number): CSG;
		contract(radius: number, resolution: number): CSG;
		stretchAtPlane(normal: number[], point: number[], length: number): CSG;
		expandedShell(radius: number, resolution: number, unionWithThis: boolean): CSG;
		canonicalized(): CSG;
		reTesselated(): CSG;
		getBounds(): CSG.Vector3D[];
		mayOverlap(csg: CSG): boolean;
		cutByPlane(plane: CSG.Plane): CSG;
		connectTo(
		myConnector: CSG.Connector, otherConnector: CSG.Connector, mirror: boolean, normalrotation: number
	): CSG;
		setShared(shared: CSG.Polygon.Shared): CSG;
		setColor(args: any): CSG;
		toCompactBinary(
		
	): {
		class: string,
		numPolygons: number,
		numVerticesPerPolygon: Uint32Array,
		polygonPlaneIndexes: Uint32Array,
		polygonSharedIndexes: Uint32Array,
		polygonVertices: Uint32Array,
		vertexData: Float64Array,
		planeData: Float64Array,
		shared: CSG.Polygon.Shared[]
	};
		toPointCloud(cuberadius: any): CSG;
		getTransformationAndInverseTransformationToFlatLying(): any;
		getTransformationToFlatLying(): any;
		lieFlat(): CSG;
		projectToOrthoNormalBasis(orthobasis: CSG.OrthoNormalBasis): CAG;
		sectionCut(orthobasis: CSG.OrthoNormalBasis): CAG;
		fixTJunctions(): CSG;
		toTriangles(): any[];
		getFeatures(features: any): any;
		center(cAxes: string[]): CxG;
		toX3D(): Blob;
		toStlBinary(): Blob;
		toStlString(): string;
		toAMFString(m: IAMFStringOptions): Blob
	}

	declare class CAG extends CxG, ICenter {
		sides: CAG.Side[];
		isCanonicalized: boolean;
		constructor(): this;
		fromSides(sides: CAG.Side[]): CAG;
		fromPoints(points: CSG.Vector2D[]): CAG;
		fromPointsNoCheck(points: CSG.Vector2D[]): CAG;
		fromFakeCSG(csg: CSG): CAG;
		linesIntersect(
		p0start: CSG.Vector2D, p0end: CSG.Vector2D, p1start: CSG.Vector2D, p1end: CSG.Vector2D
	): boolean;
		circle(options: CSG.ICircleOptions): CAG;
		rectangle(options: CSG.IRectangleOptions): CAG;
		roundedRectangle(options: any): CAG;
		fromCompactBinary(bin: any): CAG;
		toString(): string;
		_toCSGWall(z0: any, z1: any): CSG;
		_toVector3DPairs(m: CSG.Matrix4x4): CSG.Vector3D[][];
		_toPlanePolygons(options: any): CSG.Polygon[];
		_toWallPolygons(options: any): any[];
		union(cag: CAG[]): CAG;
		union(cag: CAG): CAG;
		subtract(cag: CAG[]): CAG;
		subtract(cag: CAG): CAG;
		intersect(cag: CAG[]): CAG;
		intersect(cag: CAG): CAG;
		transform(matrix4x4: CSG.Matrix4x4): CAG;
		area(): number;
		flipped(): CAG;
		getBounds(): CSG.Vector2D[];
		isSelfIntersecting(): boolean;
		expandedShell(radius: number, resolution: number): CAG;
		expand(radius: number, resolution: number): CAG;
		contract(radius: number, resolution: number): CAG;
		extrudeInOrthonormalBasis(orthonormalbasis: CSG.OrthoNormalBasis, depth: number, options?: any): CSG;
		extrudeInPlane(axis1: any, axis2: any, depth: any, options: any): CSG;
		extrude(options: CAG_extrude_options): CSG;
		rotateExtrude(options: any): CSG;
		check(): void;
		canonicalized(): CAG;
		toCompactBinary(
		
	): {
		class: string,
		sideVertexIndices: Uint32Array,
		vertexData: Float64Array
	};
		getOutlinePaths(): CSG.Path2D[];
		overCutInsideCorners(cutterradius: any): CAG;
		center(cAxes: string[]): CxG;
		toDxf(): Blob;
		PathsToDxf(paths: CSG.Path2D[]): Blob
	}

	
}

declare module 'npm$namespace$THREE' {
		declare interface ICanvasRendererOptions {
		canvas?: HTMLCanvasElement,
		alpha?: boolean
	}

	declare function OrbitControls(object: any, domElement: any): void

	declare function SpriteCanvasMaterial(parameters?: any): void

	declare function RenderableObject(): void

	declare function RenderableFace(): void

	declare function RenderableVertex(): void

	declare function RenderableLine(): void

	declare function RenderableSprite(): void

	declare function Projector(): void

	declare class CanvasRenderer extends Renderer {
		domElement: HTMLCanvasElement;
		constructor(parameters: ICanvasRendererOptions): this;
		supportsVertexTextures(): void;
		setFaceCulling: () => void;
		getPixelRatio(): number;
		setPixelRatio(value: any): void;
		setSize(width: any, height: any, updateStyle: any): void;
		setViewport(x: any, y: any, width: any, height: any): void;
		setScissor(): void;
		enableScissorTest(): void;
		setClearColor(color: any, alpha: any): void;
		setClearColorHex(hex: any, alpha: any): void;
		getClearColor(): Color;
		getClearAlpha(): number;
		getMaxAnisotropy(): number;
		clear(): void;
		clearColor(): void;
		clearDepth(): void;
		clearStencil(): void;
		render(
		scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: boolean
	): void;
		calculateLights(): void;
		calculateLight(position: any, normal: any, color: any): void;
		renderSprite(v1: any, element: any, material: any): void;
		renderLine(v1: any, v2: any, element: any, material: any): void;
		renderFace3(
		v1: any, v2: any, v3: any, uv1: any, uv2: any, uv3: any, element: any, material: any
	): void;
		drawTriangle(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any): void;
		strokePath(color: any, linewidth: any, linecap: any, linejoin: any): void;
		fillPath(color: any): void;
		onTextureUpdate(event: any): void;
		textureToPattern(texture: any): void;
		patternPath(
		x0: any, y0: any, x1: any, y1: any, x2: any, y2: any, u0: any, v0: any, u1: any, v1: any, u2: any, v2: any, texture: any
	): void;
		clipImage(
		x0: any, y0: any, x1: any, y1: any, x2: any, y2: any, u0: any, v0: any, u1: any, v1: any, u2: any, v2: any, image: any
	): void;
		expand(v1: any, v2: any, pixels: any): void;
		setOpacity(value: any): void;
		setBlending(value: any): void;
		setLineWidth(value: any): void;
		setLineCap(value: any): void;
		setLineJoin(value: any): void;
		setStrokeStyle(value: any): void;
		setFillStyle(value: any): void;
		setLineDash(value: any): void
	}

	
}

declare module 'npm$namespace$OpenJsCad' {
		declare interface ILog {
		(x: string): void,
		prevLogTime?: number
	}

	declare interface IViewerOptions {
		drawLines?: boolean,
		drawFaces?: boolean,
		color?: number[],
		bgColor?: number,
		noWebGL?: boolean
	}

	declare interface ProcessorOptions {
		verbose?: boolean,
		viewerwidth?: number,
		viewerheight?: number,
		viewerheightratio?: number
	}

	declare interface EventHandler {
		(ev?: Event): any
	}

	declare interface ViewerSize {
		widthDefault: string,
		heightDefault: string,
		width: number,
		height: number,
		heightratio: number
	}

	declare function makeAbsoluteUrl(url: any, baseurl: any): any

	declare function isChrome(): boolean

	declare function runMainInWorker(mainParameters: any): void

	declare function expandResultObjectArray(result: any): any

	declare function checkResult(result: any): void

	declare function resultToCompactBinary(resultin: any): any

	declare function resultFromCompactBinary(resultin: any): any

	declare function parseJsCadScriptSync(script: any, mainParameters: any, debugging: any): any

	declare function parseJsCadScriptASync(script: any, mainParameters: any, options: any, callback: any): Worker

	declare function getWindowURL(): URL

	declare function textToBlobUrl(txt: any): string

	declare function revokeBlobUrl(url: any): void

	declare function FileSystemApiErrorHandler(fileError: any, operation: any): void

	declare function AlertUserOfUncaughtExceptions(): void

	declare function getParamDefinitions(script: any): any[]

	declare class Viewer  {
		constructor(containerElm: any, size: any, options: IViewerOptions): this;
		createScene(drawAxes: any, axLen: any): void;
		createCamera(): void;
		createControls(canvas: any): void;
		webGLAvailable(): boolean;
		createRenderer(bool_noWebGL: any): void;
		render(): void;
		animate(): void;
		cancelAnimate(): void;
		refreshRenderer(bool_noWebGL: any): void;
		drawAxes(axLen: any): void;
		setCsg(csg: any, resetZoom: any): void;
		applyDrawOptions(): void;
		clear(): void;
		getUserMeshes(str?: any): THREE.Object3D[];
		resetZoom(r: any): void;
		parseSizeParams(): void;
		handleResize(): void
	}

	declare class Processor  {
		constructor(containerdiv: HTMLDivElement, options?: ProcessorOptions, onchange?: EventHandler): this;
		convertToSolid(obj: any): any;
		cleanOption(option: any, deflt: any): any;
		toggleDrawOption(str: any): boolean;
		setDrawOption(str: any, bool: any): void;
		handleResize(): void;
		createElements(): void;
		getFilenameForRenderedObject(): string;
		setRenderedObjects(obj: any): void;
		setSelectedObjectIndex(index: number): void;
		selectedFormat(): any;
		selectedFormatInfo(): any;
		updateDownloadLink(): void;
		clearViewer(): void;
		abort(): void;
		enableItems(): void;
		setOpenJsCadPath(path: string): void;
		addLibrary(lib: any): void;
		setError(txt: string): void;
		setDebugging(debugging: boolean): void;
		setJsCad(script: string, filename?: string): void;
		getParamValues(): {
		
	};
		rebuildSolid(): void;
		hasSolid(): boolean;
		isProcessing(): boolean;
		clearOutputFile(): void;
		generateOutputFile(): void;
		currentObjectToBlob(): any;
		supportedFormatsForCurrentObject(): string[];
		formatInfo(format: any): any;
		downloadLinkTextForCurrentObject(): string;
		generateOutputFileBlobUrl(): void;
		generateOutputFileFileSystem(): void;
		createParamControls(): void
	}

	
}

declare module 'npm$namespace$CSG' {
		declare interface IRadiusOptions {
		radius?: number,
		resolution?: number
	}

	declare interface ICircleOptions {
		center?: Vector2D | number[]
	}

	declare interface IArcOptions {
		startangle?: number,
		endangle?: number,
		maketangent?: boolean
	}

	declare interface IEllpiticalArcOptions {
		clockwise?: boolean,
		large?: boolean,
		xaxisrotation?: number,
		xradius?: number,
		yradius?: number
	}

	declare interface IRectangleOptions {
		center?: Vector2D,
		corner1?: Vector2D,
		corner2?: Vector2D,
		radius?: Vector2D
	}

	declare interface IRoundRectangleOptions {
		roundradius: number,
		resolution?: number
	}

	declare function fnNumberSort(a: any, b: any): number

	declare function parseOption(options: any, optionname: any, defaultvalue: any): any

	declare function parseOptionAs3DVector(options: any, optionname: any, defaultvalue: any): Vector3D

	declare function parseOptionAs3DVectorList(options: any, optionname: any, defaultvalue: any): any

	declare function parseOptionAs2DVector(options: any, optionname: any, defaultvalue: any): any

	declare function parseOptionAsFloat(options: any, optionname: any, defaultvalue: any): any

	declare function parseOptionAsInt(options: any, optionname: any, defaultvalue: any): any

	declare function parseOptionAsBool(options: any, optionname: any, defaultvalue: any): any

	declare function cube(options: any): CSG

	declare function sphere(options: any): CSG

	declare function cylinder(options: any): CSG

	declare function roundedCylinder(options: any): CSG

	declare function roundedCube(options: any): CSG

	declare function polyhedron(options: any): CSG

	declare function IsFloat(n: any): boolean

	declare function solve2Linear(a: any, b: any, c: any, d: any, u: any, v: any): number[]

	declare function interpolateBetween2DPointsForY(point1: Vector2D, point2: Vector2D, y: number): number

	declare function reTesselateCoplanarPolygons(sourcepolygons: CSG.Polygon[], destpolygons: CSG.Polygon[]): void

	declare function getTag(): number

	declare class Vector3D extends CxG {
		x: number;
		y: number;
		z: number;
		constructor(v3: Vector3D): this;
		constructor(v2: Vector2D): this;
		constructor(v2: number[]): this;
		constructor(x: number, y: number): this;
		constructor(x: number, y: number, z: number): this;
		Create(x: number, y: number, z: number): Vector3D;
		clone(): Vector3D;
		negated(): Vector3D;
		abs(): Vector3D;
		plus(a: Vector3D): Vector3D;
		minus(a: Vector3D): Vector3D;
		times(a: number): Vector3D;
		dividedBy(a: number): Vector3D;
		dot(a: Vector3D): number;
		lerp(a: Vector3D, t: number): Vector3D;
		lengthSquared(): number;
		length(): number;
		unit(): Vector3D;
		cross(a: Vector3D): Vector3D;
		distanceTo(a: Vector3D): number;
		distanceToSquared(a: Vector3D): number;
		equals(a: Vector3D): boolean;
		multiply4x4(matrix4x4: Matrix4x4): Vector3D;
		transform(matrix4x4: Matrix4x4): Vector3D;
		toString(): string;
		randomNonParallelVector(): Vector3D;
		min(p: Vector3D): Vector3D;
		max(p: Vector3D): Vector3D;
		toStlString(): string;
		toAMFString(): string
	}

	declare class Vertex extends CxG {
		pos: Vector3D;
		tag: number;
		constructor(pos: Vector3D): this;
		fromObject(obj: any): Vertex;
		flipped(): Vertex;
		getTag(): number;
		interpolate(other: Vertex, t: number): Vertex;
		transform(matrix4x4: Matrix4x4): Vertex;
		toString(): string;
		toStlString(): string;
		toAMFString(): string
	}

	declare class Plane extends CxG {
		normal: Vector3D;
		w: number;
		tag: number;
		constructor(normal: Vector3D, w: number): this;
		fromObject(obj: any): Plane;
		EPSILON: number;
		fromVector3Ds(a: Vector3D, b: Vector3D, c: Vector3D): Plane;
		anyPlaneFromVector3Ds(a: Vector3D, b: Vector3D, c: Vector3D): Plane;
		fromPoints(a: Vector3D, b: Vector3D, c: Vector3D): Plane;
		fromNormalAndPoint(normal: Vector3D, point: Vector3D): Plane;
		fromNormalAndPoint(normal: number[], point: number[]): Plane;
		flipped(): Plane;
		getTag(): number;
		equals(n: Plane): boolean;
		transform(matrix4x4: Matrix4x4): Plane;
		splitPolygon(polygon: Polygon): {
		type: any,
		front: any,
		back: any
	};
		splitLineBetweenPoints(p1: Vector3D, p2: Vector3D): Vector3D;
		intersectWithLine(line3d: Line3D): Vector3D;
		intersectWithPlane(plane: Plane): Line3D;
		signedDistanceToPoint(point: Vector3D): number;
		toString(): string;
		mirrorPoint(point3d: Vector3D): Vector3D
	}

	declare class Polygon extends CxG {
		vertices: Vertex[];
		shared: Polygon.Shared;
		plane: Plane;
		cachedBoundingSphere: any;
		cachedBoundingBox: Vector3D[];
		defaultShared: CSG.Polygon.Shared;
		constructor(vertices: Vector3D, shared?: Polygon.Shared, plane?: Plane): this;
		constructor(vertices: Vertex[], shared?: Polygon.Shared, plane?: Plane): this;
		fromObject(obj: any): Polygon;
		checkIfConvex(): void;
		setColor(args: any): Polygon;
		getSignedVolume(): number;
		getArea(): number;
		getTetraFeatures(features: any): any[];
		extrude(offsetvector: any): CSG;
		boundingSphere(): any;
		boundingBox(): Vector3D[];
		flipped(): Polygon;
		transform(matrix4x4: Matrix4x4): Polygon;
		toString(): string;
		projectToOrthoNormalBasis(orthobasis: OrthoNormalBasis): CAG;
		solidFromSlices(options: any): CSG;
		verticesConvex(vertices: Vertex[], planenormal: any): boolean;
		createFromPoints(points: number[][], shared?: CSG.Polygon.Shared, plane?: Plane): Polygon;
		isConvexPoint(prevpoint: any, point: any, nextpoint: any, normal: any): boolean;
		isStrictlyConvexPoint(prevpoint: any, point: any, nextpoint: any, normal: any): boolean;
		toStlString(): string
	}

	declare class PolygonTreeNode  {
		parent: any;
		children: any;
		polygon: Polygon;
		removed: boolean;
		constructor(): this;
		addPolygons(polygons: any): void;
		remove(): void;
		isRemoved(): boolean;
		isRootNode(): boolean;
		invert(): void;
		getPolygon(): Polygon;
		getPolygons(result: Polygon[]): void;
		splitByPlane(
		plane: any, coplanarfrontnodes: any, coplanarbacknodes: any, frontnodes: any, backnodes: any
	): void;
		_splitByPlane(
		plane: any, coplanarfrontnodes: any, coplanarbacknodes: any, frontnodes: any, backnodes: any
	): void;
		addChild(polygon: Polygon): PolygonTreeNode;
		invertSub(): void;
		recursivelyInvalidatePolygon(): void
	}

	declare class Tree  {
		polygonTree: PolygonTreeNode;
		rootnode: Node;
		constructor(polygons: Polygon[]): this;
		invert(): void;
		clipTo(tree: Tree, alsoRemovecoplanarFront?: boolean): void;
		allPolygons(): Polygon[];
		addPolygons(polygons: Polygon[]): void
	}

	declare class Node  {
		parent: Node;
		plane: Plane;
		front: any;
		back: any;
		polygontreenodes: PolygonTreeNode[];
		constructor(parent: Node): this;
		invert(): void;
		clipPolygons(polygontreenodes: PolygonTreeNode[], alsoRemovecoplanarFront: boolean): void;
		clipTo(tree: Tree, alsoRemovecoplanarFront: boolean): void;
		addPolygonTreeNodes(polygontreenodes: PolygonTreeNode[]): void;
		getParentPlaneNormals(normals: Vector3D[], maxdepth: number): void
	}

	declare class Matrix4x4  {
		elements: number[];
		constructor(elements?: number[]): this;
		plus(m: Matrix4x4): Matrix4x4;
		minus(m: Matrix4x4): Matrix4x4;
		multiply(m: Matrix4x4): Matrix4x4;
		clone(): Matrix4x4;
		rightMultiply1x3Vector(v: Vector3D): Vector3D;
		leftMultiply1x3Vector(v: Vector3D): Vector3D;
		rightMultiply1x2Vector(v: Vector2D): Vector2D;
		leftMultiply1x2Vector(v: Vector2D): Vector2D;
		isMirroring(): boolean;
		unity(): Matrix4x4;
		rotationX(degrees: number): Matrix4x4;
		rotationY(degrees: number): Matrix4x4;
		rotationZ(degrees: number): Matrix4x4;
		rotation(
		rotationCenter: CSG.Vector3D, rotationAxis: CSG.Vector3D, degrees: number
	): Matrix4x4;
		translation(v: number[]): Matrix4x4;
		translation(v: Vector3D): Matrix4x4;
		mirroring(plane: Plane): Matrix4x4;
		scaling(v: number[]): Matrix4x4;
		scaling(v: Vector3D): Matrix4x4
	}

	declare class Vector2D extends CxG {
		x: number;
		y: number;
		constructor(x: number, y: number): this;
		constructor(x: number[]): this;
		constructor(x: Vector2D): this;
		fromAngle(radians: number): Vector2D;
		fromAngleDegrees(degrees: number): Vector2D;
		fromAngleRadians(radians: number): Vector2D;
		Create(x: number, y: number): Vector2D;
		toVector3D(z: number): Vector3D;
		equals(a: Vector2D): boolean;
		clone(): Vector2D;
		negated(): Vector2D;
		plus(a: Vector2D): Vector2D;
		minus(a: Vector2D): Vector2D;
		times(a: number): Vector2D;
		dividedBy(a: number): Vector2D;
		dot(a: Vector2D): number;
		lerp(a: Vector2D, t: number): Vector2D;
		length(): number;
		distanceTo(a: Vector2D): number;
		distanceToSquared(a: Vector2D): number;
		lengthSquared(): number;
		unit(): Vector2D;
		cross(a: Vector2D): number;
		normal(): Vector2D;
		multiply4x4(matrix4x4: Matrix4x4): Vector2D;
		transform(matrix4x4: Matrix4x4): Vector2D;
		angle(): number;
		angleDegrees(): number;
		angleRadians(): number;
		min(p: Vector2D): Vector2D;
		max(p: Vector2D): Vector2D;
		toString(): string;
		abs(): Vector2D
	}

	declare class Line2D extends CxG {
		normal: Vector2D;
		w: number;
		constructor(normal: Vector2D, w: number): this;
		fromPoints(p1: Vector2D, p2: Vector2D): Line2D;
		reverse(): Line2D;
		equals(l: Line2D): boolean;
		origin(): Vector2D;
		direction(): Vector2D;
		xAtY(y: number): number;
		absDistanceToPoint(point: Vector2D): number;
		intersectWithLine(line2d: Line2D): Vector2D;
		transform(matrix4x4: Matrix4x4): Line2D
	}

	declare class Line3D extends CxG {
		point: Vector3D;
		direction: Vector3D;
		constructor(point: Vector3D, direction: Vector3D): this;
		fromPoints(p1: Vector3D, p2: Vector3D): Line3D;
		fromPlanes(p1: Plane, p2: Plane): Line3D;
		intersectWithPlane(plane: Plane): Vector3D;
		clone(): Line3D;
		reverse(): Line3D;
		transform(matrix4x4: Matrix4x4): Line3D;
		closestPointOnLine(point: Vector3D): Vector3D;
		distanceToPoint(point: Vector3D): number;
		equals(line3d: Line3D): boolean
	}

	declare class OrthoNormalBasis extends CxG {
		v: Vector3D;
		u: Vector3D;
		plane: Plane;
		planeorigin: Vector3D;
		constructor(plane: Plane, rightvector?: Vector3D): this;
		GetCartesian(xaxisid: string, yaxisid: string): OrthoNormalBasis;
		Z0Plane(): OrthoNormalBasis;
		getProjectionMatrix(): Matrix4x4;
		getInverseProjectionMatrix(): Matrix4x4;
		to2D(vec3: Vector3D): Vector2D;
		to3D(vec2: Vector2D): Vector3D;
		line3Dto2D(line3d: Line3D): Line2D;
		line2Dto3D(line2d: Line2D): Line3D;
		transform(matrix4x4: Matrix4x4): OrthoNormalBasis
	}

	declare class fuzzyFactory  {
		multiplier: number;
		lookuptable: any;
		constructor(numdimensions: number, tolerance: number): this;
		lookupOrCreate(els: any, creatorCallback: any): any
	}

	declare class fuzzyCSGFactory  {
		vertexfactory: fuzzyFactory;
		planefactory: fuzzyFactory;
		polygonsharedfactory: any;
		constructor(): this;
		getPolygonShared(sourceshared: Polygon.Shared): Polygon.Shared;
		getVertex(sourcevertex: Vertex): Vertex;
		getPlane(sourceplane: Plane): Plane;
		getPolygon(sourcepolygon: Polygon): Polygon;
		getCSG(sourcecsg: CSG): CSG
	}

	declare class Properties  {
		cube: Properties;
		center: any;
		facecenters: any[];
		roundedCube: Properties;
		cylinder: Properties;
		start: any;
		end: any;
		facepointH: any;
		facepointH90: any;
		sphere: Properties;
		facepoint: any;
		roundedCylinder: any;
		_transform(matrix4x4: Matrix4x4): Properties;
		_merge(otherproperties: Properties): Properties;
		transformObj(source: any, result: any, matrix4x4: Matrix4x4): void;
		cloneObj(source: any, result: any): void;
		addFrom(result: any, otherproperties: Properties): void
	}

	declare class Connector extends CxG {
		point: Vector3D;
		axisvector: Vector3D;
		normalvector: Vector3D;
		constructor(point: number[], axisvector: Vector3D, normalvector: number[]): this;
		constructor(point: number[], axisvector: number[], normalvector: number[]): this;
		constructor(point: number[], axisvector: number[], normalvector: Vector3D): this;
		constructor(point: Vector3D, axisvector: number[], normalvector: Vector3D): this;
		constructor(point: Vector3D, axisvector: number[], normalvector: number[]): this;
		constructor(point: Vector3D, axisvector: Vector3D, normalvector: Vector3D): this;
		normalized(): Connector;
		transform(matrix4x4: Matrix4x4): Connector;
		getTransformationTo(other: Connector, mirror: boolean, normalrotation: number): Matrix4x4;
		axisLine(): Line3D;
		extend(distance: number): Connector
	}

	declare class ConnectorList  {
		connectors_: Connector[];
		closed: boolean;
		constructor(connectors: Connector[]): this;
		defaultNormal: number[];
		fromPath2D(path2D: CSG.Path2D, arg1: any, arg2: any): ConnectorList;
		_fromPath2DTangents(path2D: any, start: any, end: any): ConnectorList;
		_fromPath2DExplicit(path2D: any, angleIsh: any): ConnectorList;
		setClosed(bool: boolean): void;
		appendConnector(conn: Connector): void;
		followWith(cagish: any): CSG;
		verify(): void
	}

	declare class Path2D extends CxG {
		closed: boolean;
		points: Vector2D[];
		lastBezierControlPoint: Vector2D;
		constructor(points: number[], closed?: boolean): this;
		constructor(points: Vector2D[], closed?: boolean): this;
		arc(options: IArcOptions): Path2D;
		concat(otherpath: Path2D): Path2D;
		appendPoint(point: Vector2D): Path2D;
		appendPoints(points: Vector2D[]): Path2D;
		close(): Path2D;
		rectangularExtrude(width: number, height: number, resolution: number): CSG;
		expandToCAG(pathradius: number, resolution: number): CAG;
		innerToCAG(): CAG;
		transform(matrix4x4: Matrix4x4): Path2D;
		appendBezier(controlpoints: any, options: any): Path2D;
		appendArc(endpoint: Vector2D, options: IEllpiticalArcOptions): Path2D
	}

	declare class Polygon2D extends CAG {
		constructor(points: Vector2D[]): this
	}

	
}

declare module 'Polygon' {
				declare class Shared  {
		color: any;
		tag: any;
		constructor(color: any): this;
		fromObject(obj: any): Shared;
		fromColor(args: any): Shared;
		getTag(): any;
		getHash(): any
	}

	
}

declare module 'npm$namespace$CAG' {
				declare class Vertex  {
		pos: CSG.Vector2D;
		tag: number;
		constructor(pos: CSG.Vector2D): this;
		toString(): string;
		getTag(): number
	}

	declare class Side extends CxG {
		vertex0: Vertex;
		vertex1: Vertex;
		tag: number;
		constructor(vertex0: Vertex, vertex1: Vertex): this;
		_fromFakePolygon(polygon: CSG.Polygon): Side;
		toString(): string;
		toPolygon3D(z0: any, z1: any): CSG.Polygon;
		transform(matrix4x4: CSG.Matrix4x4): Side;
		flipped(): Side;
		direction(): CSG.Vector2D;
		getTag(): number;
		lengthSquared(): number;
		length(): number
	}

	declare class fuzzyCAGFactory  {
		vertexfactory: CSG.fuzzyFactory;
		constructor(): this;
		getVertex(sourcevertex: Vertex): Vertex;
		getSide(sourceside: Side): Side;
		getCAG(sourcecag: CAG): CAG
	}

	
}