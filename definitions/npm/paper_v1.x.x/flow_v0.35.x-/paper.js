

declare module 'paper' {
		declare export interface IFrameEvent {
		count: number,
		time: number,
		delta: number
	}

	declare export interface IHSBColor {
		hue?: number,
		saturation?: number,
		brightness?: number,
		alpha?: number
	}

	declare export interface IHSLColor {
		hue?: number,
		saturation?: number,
		lightness?: number,
		alpha?: number
	}

	declare export interface IGradientColor {
		gradient?: Gradient,
		origin?: Point,
		destination?: Point,
		radial?: boolean
	}

	declare export function install(scope: any): void

	declare export function setup(canvas: HTMLCanvasElement | string): void

	declare export function activate(): void

	declare export class Matrix  {
		constructor(a: number, c: number, b: number, d: number, tx: number, ty: number): this;
		a: number;
		c: number;
		b: number;
		d: number;
		tx: number;
		ty: number;
		values: number;
		translation: Point;
		scaling: Point;
		rotation: number;
		set(a: number, c: number, b: number, d: number, tx: number, ty: number): Matrix;
		clone(): Matrix;
		equals(matrix: Matrix): boolean;
		toString(): string;
		reset(): void;
		apply(): boolean;
		translate(point: Point): Matrix;
		translate(dx: number, dy: number): Matrix;
		scale(scale: number, center?: Point): Matrix;
		scale(hor: number, ver: number, center?: Point): Matrix;
		rotate(angle: number, center: Point): Matrix;
		rotate(angle: number, x: number, y: number): Matrix;
		shear(shear: Point, center?: Point): Matrix;
		shear(hor: number, ver: number, center?: Point): Matrix;
		skew(skew: Point, center?: Point): Matrix;
		skew(hor: number, ver: number, center?: Point): Matrix;
		concatenate(mx: Matrix): Matrix;
		preConcatenate(mx: Matrix): Matrix;
		chain(mx: Matrix): Matrix;
		isIdentity(): boolean;
		isInvertible(): boolean;
		isSingular(): boolean;
		transform(point: Point): Matrix;
		transform(src: number[], dst: number[], count: number): number[];
		inverseTransform(point: Point): Matrix;
		decompose(): any;
		inverted(): Matrix;
		applyToContext(ctx: CanvasRenderingContext2D): void
	}

	declare export class Point  {
		min(point1: Point, point2: Point): Point;
		max(point1: Point, point2: Point): Point;
		random(): Point;
		constructor(x: number, y: number): this;
		constructor(values: number[]): this;
		constructor(object: any): this;
		constructor(size: Size): this;
		constructor(point: Point): this;
		x: number;
		y: number;
		length: number;
		angle: number;
		angleInRadians: number;
		quadrant: number;
		selected: boolean;
		equals(point: Point): boolean;
		clone(): Point;
		toString(): string;
		getAngle(Point: Point): number;
		getAngleInRadians(point: Point): number;
		getDirectedAngle(point: Point): number;
		getDistance(point: Point, squared?: boolean): number;
		normalize(length?: number): Point;
		rotate(angle: number, center: Point): Point;
		transform(matrix: Matrix): Point;
		isInside(rect: Rectangle): boolean;
		isClose(point: Point, tolerance: number): boolean;
		isColinear(point: Point): boolean;
		isOrthogonal(point: Point): boolean;
		isZero(): boolean;
		isNan(): boolean;
		dot(point: Point): number;
		cross(point: Point): number;
		project(point: Point): Point;
		round(): Point;
		ceil(): Point;
		floor(): Point;
		abs(): Point
	}

	declare export class Rectangle  {
		constructor(point: Point, size: Size): this;
		constructor(x: number, y: number, width: number, height: number): this;
		constructor(object: any): this;
		constructor(from: Point, to: Point): this;
		constructor(rt: Rectangle): this;
		x: number;
		y: number;
		width: number;
		height: number;
		point: Point;
		size: Size;
		left: number;
		top: number;
		right: number;
		bottom: number;
		center: Point;
		topLeft: Point;
		topRight: Point;
		bottomLeft: Point;
		bottomRight: Point;
		leftCenter: Point;
		topCenter: Point;
		rightCenter: Point;
		bottomCenter: Point;
		area: number;
		selected: boolean;
		clone(): Rectangle;
		equals(rect: Rectangle): boolean;
		toString(): string;
		isEmpty(): boolean;
		contains(point: Point): boolean;
		contains(rect: Rectangle): boolean;
		intersects(rect: Rectangle): boolean;
		intersect(rect: Rectangle): Rectangle;
		unite(rect: Rectangle): Rectangle;
		include(point: Point): Point;
		expand(amount: number | Size | Point): void;
		expand(hor: number, ver: number): void;
		scale(amount: number): void;
		scale(hor: number, ver: number): void
	}

	declare export class Size  {
		min(size1: Size, size2: Size): Size;
		max(size1: Size, size2: Size): Size;
		random(): Size;
		constructor(width: number, height: number): this;
		constructor(array: number[]): this;
		constructor(object: any): this;
		constructor(size: Size): this;
		constructor(point: Point): this;
		width: number;
		height: number;
		equals(): boolean;
		clone(): Size;
		toString(): string;
		isZero(): boolean;
		isNan(): boolean;
		round(): Size;
		ceil(): Size;
		floor(): Size;
		abs(): Size
	}

	declare export class PaperScope  {
		version: string;
		settings: {
		applyMatrix: boolean,
		handleSize: number,
		hitTolerance: number
	};
		project: Project;
		projects: Project[];
		view: View;
		tool: Tool;
		tools: Tool[];
		install(scope: any): void;
		setup(canvas: HTMLCanvasElement | string): void;
		activate(): void;
		get(id: string): PaperScope
	}

	declare export class Item  {
		tangent: Point;
		normal: Point;
		curvature: number;
		id: number;
		className: string;
		name: string;
		style: Style;
		visible: boolean;
		blendMode: string;
		opacity: number;
		selected: boolean;
		clipMask: boolean;
		data: any;
		position: Point;
		pivot: Point;
		bounds: Rectangle;
		strokeBounds: Rectangle;
		handleBounds: Rectangle;
		rotation: number;
		scaling: Point;
		matrix: Matrix;
		globalMatrix: Matrix;
		applyMatrix: boolean;
		project: Project;
		view: View;
		layer: Layer;
		parent: Item;
		children: Item[];
		firstChild: Item;
		lastChild: Item;
		nextSibling: Item;
		previousSibling: Item;
		index: number;
		strokeColor: Color | string;
		strokeWidth: number;
		strokeCap: string;
		strokeJoin: string;
		dashOffset: number;
		strokeScaling: boolean;
		dashArray: number[];
		miterLimit: number;
		windingRule: string;
		fillColor: Color | string;
		selectedColor: Color | string;
		onFrame: (event: IFrameEvent) => void;
		onMouseDown: (event: MouseEvent) => void;
		onMouseUp: (event: MouseEvent) => void;
		onClick: (event: MouseEvent) => void;
		onDoubleClick: (event: MouseEvent) => void;
		onMouseMove: (event: MouseEvent) => void;
		onMouseEnter: (event: MouseEvent) => void;
		onMouseLeave: (event: MouseEvent) => void;
		set(props: any): Item;
		clone(insert?: boolean): Item;
		copyTo(item: Item): Item;
		rasterize(resolution: number): Raster;
		contains(point: Point): boolean;
		isInside(rect: Rectangle): boolean;
		intersects(item: Item): boolean;
		hitTest(
		point: Point, options?: {
		tolerance?: number,
		class?: string,
		fill?: boolean,
		stroke?: boolean,
		segments?: boolean,
		curves?: boolean,
		handles?: boolean,
		ends?: boolean,
		bounds?: boolean,
		center?: boolean,
		guides?: boolean,
		selected?: boolean
	}
	): HitResult;
		matches(match: any): boolean;
		matches(name: string, compare: any): boolean;
		getItems(match: any): Item[];
		getItem(match: any): Item;
		exportJSON(options?: {
		asString?: boolean,
		precision?: number
	}): string;
		importJSON(json: string): void;
		exportSVG(
		options?: {
		asString?: boolean,
		precision?: number,
		matchShapes?: boolean
	}
	): SVGElement;
		importSVG(svg: SVGElement | string, options?: any): Item;
		addChild(item: Item): Item;
		insertChild(index: number, item: Item): Item;
		addChildren(items: Item[]): Item[];
		insertChildren(index: number, items: Item[]): Item[];
		insertAbove(item: Item): Item;
		insertBelow(item: Item): Item;
		sendToBack(): void;
		bringToFront(): void;
		reduce(): Item;
		remove(): boolean;
		replaceWith(item: Item): boolean;
		removeChildren(): Item[];
		removeChildren(from: number, to?: number): Item[];
		reverseChildren(): void;
		isEmpty(): boolean;
		hasFill(): boolean;
		hasStroke(): boolean;
		hasShadow(): boolean;
		hasChildren(): boolean;
		isInserted(): boolean;
		isAbove(item: Item): boolean;
		isBelow(item: Item): boolean;
		isParent(item: Item): boolean;
		isChild(item: Item): boolean;
		isDescendant(item: Item): boolean;
		isAncestor(item: Item): boolean;
		isGroupedWith(item: Item): boolean;
		translate(delta: number): Point;
		rotate(angle: number, center?: Point): void;
		scale(scale: number, center?: Point): void;
		scale(hor: number, ver: number, center?: Point): void;
		shear(shear: number, center?: Point): void;
		shear(hor: number, ver: number, center?: Point): void;
		skew(skew: Point, center?: Point): void;
		skew(hor: number, ver: number, center?: Point): void;
		transform(matrix: Matrix): void;
		globalToLocal(point: Point): Point;
		localToGlobal(point: Point): Point;
		parentToLocal(point: Point): Point;
		localToParent(point: Point): Point;
		fitBounds(rectangle: Rectangle, fill?: boolean): void;
		on(type: string, callback: (event: ToolEvent) => void): Tool;
		on(param: any): Tool;
		off(type: string, callback: (event: ToolEvent) => void): Tool;
		off(param: any): Tool;
		emit(type: string, event: any): boolean;
		responds(type: string): boolean;
		on(type: string, callback: () => void): Item;
		on(param: any): Item;
		off(type: string, callback: (event: ToolEvent) => void): Item;
		off(param: any): Item;
		emit(type: string, event: any): boolean;
		responds(type: string): boolean;
		removeOn(
		object: {
		move?: boolean,
		drag?: boolean,
		down?: boolean,
		up?: boolean
	}
	): void;
		removeOnMove(): void;
		removeOnDown(): void;
		removeOnDrag(): void;
		removeOnUp(): void
	}

	declare export class Group extends Item {
		constructor(children?: Item[]): this;
		constructor(object?: any): this;
		clipped: boolean
	}

	declare export class Layer extends Group {
		constructor(children?: Item[]): this;
		constructor(object?: any): this;
		activate(): void
	}

	declare export class Shape extends Item {
		Circle(center: Point, radius: number): Shape;
		Circle(object: any): Shape;
		Rectangle(rectangle: Rectangle, radius?: number): Shape;
		Rectangle(point: Point, size: Size): Shape;
		Rectangle(from: Point, to: Point): Shape;
		Rectangle(object: any): Shape;
		Ellipse(rectangle: Rectangle): Shape;
		Ellipse(object: any): Shape;
		type: string;
		size: Size;
		radius: number | Size
	}

	declare export class Raster extends Item {
		constructor(source?: HTMLImageElement | HTMLCanvasElement | string, position?: Point): this;
		size: Size;
		width: number;
		height: number;
		resolution: Size;
		image: HTMLImageElement | HTMLCanvasElement;
		canvas: HTMLCanvasElement;
		context: CanvasRenderingContext2D;
		source: HTMLImageElement | HTMLCanvasElement | string;
		getSubCanvas(rect: Rectangle): HTMLCanvasElement;
		getSubRaster(rect: Rectangle): Raster;
		toDataURL(): string;
		drawImage(image: HTMLImageElement | HTMLCanvasElement, point: Point): void;
		getAverageColor(object: Path | Rectangle | Point): Color;
		getPixel(x: number, y: number): Color;
		getPixel(point: Point): Color;
		setPixel(x: number, y: number, color: Color): void;
		setPixel(point: Point, color: Color): void;
		createImageData(size: Size): ImageData;
		getImageData(rect: Rectangle): ImageData;
		getImageData(data: ImageData, point: Point): void
	}

	declare export class PlacedSymbol extends Item {
		constructor(symbol: Symbol, point?: Point): this;
		symbol: Symbol
	}

	declare export class HitResult  {
		type: string;
		name: string;
		item: Item;
		location: CurveLocation;
		color: Color;
		segment: Segment;
		point: Point
	}

	declare export class PathItem extends Item {
		pathData: string;
		getIntersections(path: PathItem, sorted?: boolean): CurveLocation[];
		smooth(): void;
		moveTo(point: Point): void;
		lineTo(point: Point): void;
		cublicCurveTo(handle1: Point, handle2: Point, to: Point): void;
		quadraticCurveTo(handle: Point, to: Point): void;
		curveTo(through: Point, to: Point, parameter?: number): void;
		arcTo(through: Point, to: Point): void;
		arcTo(to: Point, clockwise?: boolean): void;
		closePath(join: boolean): void;
		moveBy(to: Point): void;
		lineBy(to: Point): void;
		curveBy(through: Point, to: Point, parameter?: number): void;
		cublicCurveBy(handle1: Point, handle2: Point, to: Point): void;
		quadraticCurveBy(handle: Point, to: Point): void;
		arcBy(through: Point, to: Point): void;
		arcBy(to: Point, clockwise?: boolean): void;
		unite(path: PathItem): PathItem;
		intersect(path: PathItem): PathItem;
		subtract(path: PathItem): PathItem;
		exclude(path: PathItem): PathItem;
		divide(path: PathItem): PathItem
	}

	declare export class Path extends PathItem {
		Line(from: Point, to: Point): Path;
		Line(object: any): Path;
		Circle(center: Point, radius: number): Path;
		Circle(object: any): Path;
		Rectangle(rectangle: Rectangle, radius?: number): Path;
		Rectangle(point: Point, size: Size): Path;
		Rectangle(from: Point, to: Point): Path;
		Rectangle(object: any): Path;
		Ellipse(rectangle: Rectangle): Path;
		Ellipse(object: any): Path;
		Arc(from: Point, through: Point, to: Point): Path;
		Arc(object: any): Path;
		RegularPolygon(center: Point, sides: number, radius: number): Path;
		RegularPolygon(object: any): Path;
		Star(center: Point, points: number, radius1: number, radius2: number): Path;
		Star(object: any): Path;
		constructor(segments?: Segment[] | Point[]): this;
		constructor(object?: any): this;
		constructor(pathData?: string): this;
		segments: Segment[];
		firstSegment: Segment;
		lastSegment: Segment;
		curves: Curve[];
		firstCurve: Curve;
		lastCurve: Curve;
		closed: boolean;
		length: number;
		area: number;
		fullySelected: boolean;
		clockwise: boolean;
		interiorPoint: Point;
		add(segment: Segment | Point): Segment;
		insert(index: number, segment: Segment | Point): Segment;
		addSegments(segments: Segment[]): Segment[];
		insertSegments(index: number, segments: Segment[]): Segment[];
		removeSegment(index: number): Segment;
		removeSegments(): Segment[];
		removeSegments(from: number, to?: number): Segment[];
		flatten(maxDistance: number): void;
		simplify(tolerance?: number): void;
		split(offset: number): Path;
		split(location: CurveLocation): Path;
		split(index: number, parameter: number): Path;
		reverse(): void;
		join(path: Path): Path;
		getLocationOf(point: Point): CurveLocation;
		getOffsetOf(point: Point): number;
		getLocationAt(offset: number, isParameter?: boolean): CurveLocation;
		getPointAt(offset: number, isPatameter?: boolean): Point;
		getTangentAt(offset: number, isPatameter?: boolean): Point;
		getNormalAt(offset: number, isParameter?: boolean): Point;
		getCurvatureAt(offset: number, isParameter?: boolean, point?: Point): number;
		getNearestPoint(point: Point): Point
	}

	declare export class CompoundPath extends PathItem {
		constructor(object: any): this;
		constructor(pathData: string): this;
		clockwise: boolean;
		firstSegment: Segment;
		lastSegment: Segment;
		curves: Curve[];
		firstCurve: Curve;
		lastCurve: Curve;
		area: number;
		reverse(): void
	}

	declare export class Segment  {
		constructor(point?: Point, handleIn?: Point, handleOut?: Point): this;
		constructor(object?: any): this;
		point: Point;
		handleIn: Point;
		handleOut: Point;
		linear: boolean;
		selected: boolean;
		index: number;
		path: Path;
		curve: Curve;
		location: CurveLocation;
		next: Segment;
		previous: Segment;
		isColinear(segment: Segment): boolean;
		isArc(): boolean;
		reverse(): Segment;
		remove(): boolean;
		toString(): string;
		transform(matrix: Matrix): void
	}

	declare export class Curve  {
		constructor(segment1: Segment, segment2: Segment): this;
		constructor(point1: Point, handle1: Point, handle2: Point, point2: Point): this;
		point1: Point;
		point2: Point;
		handle1: Point;
		handle2: Point;
		segment1: Segment;
		segment2: Segment;
		path: Path;
		index: number;
		next: Curve;
		previous: Curve;
		selected: boolean;
		length: number;
		bounds: Rectangle;
		strokeBounds: Rectangle;
		handleBounds: Rectangle;
		isLinear(): boolean;
		divide(offset?: number, isParameter?: boolean): Curve;
		split(offset?: number, isParameter?: boolean): Path;
		reverse(): Curve;
		remove(): boolean;
		clone(): Curve;
		toString(): string;
		getParameterAt(offset: Point, start?: number): number;
		getParameterOf(point: Point): number;
		getLocationAt(offset: Point, isParameter?: boolean): CurveLocation;
		getLocationOf(point: Point): CurveLocation;
		getOffsetOf(point: Point): number;
		getPointAt(offset: number, isParameter?: boolean): Point;
		getTangentAt(offset: number, isParameter?: boolean): Point;
		getNormalAt(offset: number, isParameter?: boolean): Point;
		getCurvatureAt(offset: number, isParameter?: boolean): Point
	}

	declare export class CurveLocation  {
		constructor(curve: Curve, parameter: number, point: Point): this;
		segment: Segment;
		curve: Curve;
		intersection: CurveLocation;
		path: Path;
		index: number;
		offset: number;
		curveOffset: number;
		parameter: number;
		point: Point;
		distance: number;
		equals(location: CurveLocation): boolean;
		toString(): string
	}

	declare export class Project  {
		constructor(element: HTMLCanvasElement | string): this;
		view: View;
		currentStyle: Style;
		index: number;
		layers: Layer[];
		activeLayer: Layer;
		symbols: Symbol[];
		activate(): void;
		clear(): void;
		isEmpty(): boolean;
		remove(): void;
		selectAll(): void;
		deselectAll(): void;
		hitTest(
		point: Point, options?: {
		tolerance?: number,
		class?: string,
		fill?: boolean,
		stroke?: boolean,
		segments?: boolean,
		curves?: boolean,
		handles?: boolean,
		ends?: boolean,
		bounds?: boolean,
		center?: boolean,
		guides?: boolean,
		selected?: boolean
	}
	): HitResult;
		getItems(match: any): Item[];
		getItem(match: any): Item;
		exportJSON(options?: {
		asString?: boolean,
		precision?: number
	}): string;
		importJSON(json: string): void;
		exportSVG(
		options?: {
		asString?: boolean,
		precision?: number,
		matchShapes?: boolean
	}
	): SVGElement;
		importSVG(svg: SVGElement | string, options?: any): Item
	}

	declare export class Symbol  {
		constructor(item: Item, dontCenter?: boolean): this;
		project: Project;
		definition: Item;
		place(position?: Point): PlacedSymbol;
		clone(): Symbol
	}

	declare export class Style  {
		view: View;
		strokeColor: Color | string;
		strokeWidth: number;
		strokeCap: string;
		strokeJoin: string;
		strokeScaling: boolean;
		dashOffset: number;
		dashArray: number[];
		miterLimit: number;
		fillColor: Color | string;
		shadowColor: Color | string;
		shadowBlur: number;
		shadowOffset: Point;
		selectedColor: Color | string;
		fontFamily: string;
		fontWeight: string | number;
		fontSize: string | number;
		leading: number | string;
		justification: string
	}

	declare export class Color  {
		constructor(red: number, green: number, blue: number, alpha?: number): this;
		constructor(gray: number, alpha?: number): this;
		constructor(object: IHSBColor | IHSLColor | IGradientColor): this;
		constructor(color: Gradient, origin: Point, destination: Point, highlight?: Point): this;
		type: string;
		components: number;
		alpha: number;
		red: number;
		green: number;
		blue: number;
		gray: number;
		hue: number;
		saturation: number;
		brightness: number;
		lightness: number;
		gradient: Gradient;
		highlight: Point;
		convert(type: string): Color;
		hasAlpha(): boolean;
		equals(color: Color): boolean;
		clone(): Color;
		toString(): string;
		toCSS(hex: boolean): string;
		transform(matrix: Matrix): void
	}

	declare export class Gradient  {
		stops: GradientStop[];
		radial: boolean;
		clone(): Gradient;
		equals(gradient: Gradient): boolean
	}

	declare export class GradientStop  {
		constructor(color?: Color, rampPoint?: number): this;
		rampPoint: number;
		color: Color;
		clone(): GradientStop
	}

	declare export class View  {
		element: HTMLCanvasElement;
		pixelRatio: number;
		resolution: number;
		viewSize: Size;
		bounds: Rectangle;
		size: Size;
		center: Point;
		zoom: number;
		onFrame: (event: IFrameEvent) => void;
		onResize: (event: Event) => void;
		remove(): void;
		isVisible(): boolean;
		scrollBy(point: Point): void;
		play(): void;
		pause(): void;
		update(): void;
		projectToView(point: Point): Point;
		viewToProject(point: Point): Point;
		on(type: string, callback: (event: Event) => void): Item;
		on(param: any): Item;
		off(type: string, callback: (event: Event) => void): Item;
		off(param: any): Item;
		emit(type: string, event: any): boolean;
		responds(type: string): boolean;
		draw(): void
	}

	declare export class Tool  {
		minDistance: number;
		maxDistance: number;
		fixedDistance: number;
		onMouseDown: (event: ToolEvent) => void;
		onMouseDrag: (event: ToolEvent) => void;
		onMouseMove: (event: ToolEvent) => void;
		onMouseUp: (event: ToolEvent) => void;
		onKeyDown: (event: KeyEvent) => void;
		onKeyUp: (event: KeyEvent) => void;
		activate(): void;
		remove(): void;
		on(type: string, callback: (event: ToolEvent) => void): Tool;
		on(param: any): Tool;
		off(type: string, callback: (event: ToolEvent) => void): Tool;
		off(param: any): Tool;
		emit(type: string, event: any): boolean;
		responds(type: string): boolean
	}

	declare export class Event  {
		modifiers: any
	}

	declare export class ToolEvent extends Event {
		type: string;
		point: Point;
		lastPoint: Point;
		downPoint: Point;
		middlePoint: Point;
		delta: Point;
		count: number;
		item: Item;
		toString(): string
	}

	declare export class Key  {
		isDown(key: string): boolean
	}

	declare export class KeyEvent extends Event {
		type: string;
		character: string;
		key: string;
		toString(): string
	}

	declare export class TextItem extends Item {
		content: string;
		fontFamily: string;
		fontWeight: string | number;
		fontSize: string | number;
		leading: string | number;
		justification: string
	}

	declare export class PointText extends TextItem {
		constructor(point: Point): this;
		constructor(object: any): this;
		point: Point
	}

	
}