import type { gfx } from 'npm$namespace$dojox'

declare module 'dojox.gfx' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface gfx {
		arc: Object,
		bezierutils: Object,
		canvas: Object,
		canvas_attach: Object,
		canvasext: Object,
		canvasWithEvents: Object,
		cm_in_pt: number,
		defaultCircle: Object,
		defaultEllipse: Object,
		defaultFont: Object,
		defaultImage: Object,
		defaultLine: Object,
		defaultLinearGradient: Object,
		defaultPath: Object,
		defaultPattern: Object,
		defaultPolyline: Object,
		defaultRadialGradient: Object,
		defaultRect: Object,
		defaultStroke: Object,
		defaultText: Object,
		defaultTextPath: Object,
		defaultVectorFont: Object,
		defaultVectorText: Object,
		Fill: Object,
		Font: Object,
		fx: Object,
		getDefault: Object,
		gradient: Object,
		gradutils: Object,
		LinearGradient: Object,
		matrix: Object,
		mm_in_pt: number,
		move: Object,
		path: Object,
		pathSvgRegExp: RegExp,
		pathVmlRegExp: RegExp,
		Pattern: Object,
		RadialGradient: Object,
		renderer: string,
		shape: Object,
		silverlight: Object,
		silverlight_attach: Object,
		Stroke: Object,
		svg: Object,
		svgext: Object,
		utils: Object,
		vectorFontFitting: Object,
		VectorText: Object,
		vml: Object,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: number, height: String): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: String, height: number): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: number, height: number): dojox.gfx.Surface,
		decompose(matrix: dojox.gfx.matrix.Matrix2D): void,
		Ellipse(): void,
		equalSources(a: any, b: any): void,
		formatNumber(x: number, addSpace: boolean): String,
		getVectorFont(url: String): any,
		Group(): void,
		Line(): void,
		makeFontString(font: Object): String,
		makeParameters(defaults: Object, update: Object): Object,
		Matrix2D(arg: Object): void,
		Moveable(): void,
		Mover(): void,
		normalizeColor(color: dojo._base.Color): any,
		normalizeColor(color: any[]): any,
		normalizeColor(color: String): any,
		normalizeColor(color: Object): any,
		normalizedLength(len: String): number,
		normalizeParameters(existed: Object, update: Object): Object,
		Path(): void,
		Point(): void,
		Polyline(): void,
		pt2px(len: number): number,
		px2pt(len: number): number,
		px_in_pt(): number,
		Rect(): void,
		Rectangle(): void,
		splitFontString(str: String): Object,
		Surface(): void,
		switchTo(renderer: String): void,
		switchTo(renderer: Object): void,
		Text(): void,
		TextPath(): void,
		VectorFont(): void
	}

			
}

declare module 'gfx' {
		declare interface _base {
		arc: Object,
		bezierutils: Object,
		canvas: Object,
		canvas_attach: Object,
		canvasext: Object,
		canvasWithEvents: Object,
		cm_in_pt: number,
		defaultCircle: Object,
		defaultEllipse: Object,
		defaultFont: Object,
		defaultImage: Object,
		defaultLine: Object,
		defaultLinearGradient: Object,
		defaultPath: Object,
		defaultPattern: Object,
		defaultPolyline: Object,
		defaultRadialGradient: Object,
		defaultRect: Object,
		defaultStroke: Object,
		defaultText: Object,
		defaultTextPath: Object,
		defaultVectorFont: Object,
		defaultVectorText: Object,
		Fill: Object,
		Font: Object,
		fx: Object,
		getDefault: Object,
		gradient: Object,
		gradutils: Object,
		LinearGradient: Object,
		matrix: Object,
		mm_in_pt: number,
		move: Object,
		path: Object,
		pathSvgRegExp: RegExp,
		pathVmlRegExp: RegExp,
		Pattern: Object,
		RadialGradient: Object,
		renderer: string,
		shape: Object,
		silverlight: Object,
		silverlight_attach: Object,
		Stroke: Object,
		svg: Object,
		svgext: Object,
		utils: Object,
		vectorFontFitting: Object,
		VectorText: Object,
		vml: Object,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: number, height: String): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: String, height: number): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: number, height: number): dojox.gfx.Surface,
		decompose(matrix: dojox.gfx.matrix.Matrix2D): void,
		Ellipse(): void,
		equalSources(a: any, b: any): void,
		formatNumber(x: number, addSpace: boolean): String,
		getVectorFont(url: String): any,
		Group(): void,
		Line(): void,
		makeFontString(font: Object): String,
		makeParameters(defaults: Object, update: Object): Object,
		Matrix2D(arg: Object): void,
		Moveable(): void,
		Mover(): void,
		normalizeColor(color: dojo._base.Color): any,
		normalizeColor(color: any[]): any,
		normalizeColor(color: String): any,
		normalizeColor(color: Object): any,
		normalizedLength(len: String): number,
		normalizeParameters(existed: Object, update: Object): Object,
		Path(): void,
		Point(): void,
		Polyline(): void,
		pt2px(len: number): number,
		px2pt(len: number): number,
		px_in_pt(): number,
		Rect(): void,
		Rectangle(): void,
		splitFontString(str: String): Object,
		Surface(): void,
		switchTo(renderer: String): void,
		switchTo(renderer: Object): void,
		Text(): void,
		TextPath(): void,
		VectorFont(): void
	}

	declare interface _svgFontCache {
		
	}

	declare interface _gfxBidiSupport {
		arc: Object,
		bezierutils: Object,
		canvas: Object,
		canvas_attach: Object,
		canvasext: Object,
		canvasWithEvents: Object,
		cm_in_pt: number,
		defaultCircle: Object,
		defaultEllipse: Object,
		defaultFont: Object,
		defaultImage: Object,
		defaultLine: Object,
		defaultLinearGradient: Object,
		defaultPath: Object,
		defaultPattern: Object,
		defaultPolyline: Object,
		defaultRadialGradient: Object,
		defaultRect: Object,
		defaultStroke: Object,
		defaultText: Object,
		defaultTextPath: Object,
		defaultVectorFont: Object,
		defaultVectorText: Object,
		Fill: Object,
		Font: Object,
		fx: Object,
		getDefault: Object,
		gradient: Object,
		gradutils: Object,
		LinearGradient: Object,
		matrix: Object,
		mm_in_pt: number,
		move: Object,
		path: Object,
		pathSvgRegExp: RegExp,
		pathVmlRegExp: RegExp,
		Pattern: Object,
		RadialGradient: Object,
		renderer: string,
		shape: Object,
		silverlight: Object,
		silverlight_attach: Object,
		Stroke: Object,
		svg: Object,
		svgext: Object,
		utils: Object,
		vectorFontFitting: Object,
		VectorText: Object,
		vml: Object,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: number, height: String): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: String, height: number): dojox.gfx.Surface,
		createSurface(parentNode: HTMLElement, width: number, height: number): dojox.gfx.Surface,
		decompose(matrix: dojox.gfx.matrix.Matrix2D): void,
		Ellipse(): void,
		equalSources(a: any, b: any): void,
		formatNumber(x: number, addSpace: boolean): String,
		getVectorFont(url: String): any,
		Group(): void,
		Line(): void,
		makeFontString(font: Object): String,
		makeParameters(defaults: Object, update: Object): Object,
		Matrix2D(arg: Object): void,
		Moveable(): void,
		Mover(): void,
		normalizeColor(color: dojo._base.Color): any,
		normalizeColor(color: any[]): any,
		normalizeColor(color: String): any,
		normalizeColor(color: Object): any,
		normalizedLength(len: String): number,
		normalizeParameters(existed: Object, update: Object): Object,
		Path(): void,
		Point(): void,
		Polyline(): void,
		pt2px(len: number): number,
		px2pt(len: number): number,
		px_in_pt(): number,
		Rect(): void,
		Rectangle(): void,
		splitFontString(str: String): Object,
		Surface(): void,
		switchTo(renderer: String): void,
		switchTo(renderer: Object): void,
		Text(): void,
		TextPath(): void,
		VectorFont(): void
	}

	declare interface _vectorFontCache {
		
	}

	declare interface arc {
		curvePI4: Object,
		arcAsBezier(
		last: Object, rx: number, ry: number, xRotg: number, large: boolean, sweep: boolean, x: number, y: number
	): any[],
		unitArcAsBezier(alpha: number): void
	}

	declare interface bezierutils {
		computeLength(points: number[]): number,
		distance(x1: any, y1: any, x2: any, y2: any): any,
		splitBezierAtT(points: any, t: any): any,
		tAtLength(points: number[], length: number): number
	}

	declare interface canvas {
		attachNode(): void,
		attachSurface(): void,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): any,
		Ellipse(): void,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface canvas_attach {
		attachNode(): void,
		attachSurface(): void,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): any,
		Ellipse(): void,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface canvasext {
		
	}

	declare interface canvasWithEvents {
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): void,
		Ellipse(): void,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface defaultCircle {
		cx: number,
		cy: number,
		r: number,
		type: string
	}

	declare interface defaultEllipse {
		cx: number,
		cy: number,
		rx: number,
		ry: number,
		type: string
	}

	declare interface defaultFont {
		family: string,
		size: string,
		style: string,
		type: string,
		variant: string,
		weight: string
	}

	declare interface defaultImage {
		height: number,
		src: string,
		type: string,
		width: number,
		x: number,
		y: number
	}

	declare interface defaultLine {
		type: string,
		x1: number,
		x2: number,
		y1: number,
		y2: number
	}

	declare interface defaultPath {
		path: string,
		type: string
	}

	declare interface defaultLinearGradient {
		colors: any[],
		type: string,
		x1: number,
		x2: number,
		y1: number,
		y2: number
	}

	declare interface defaultPattern {
		height: number,
		src: string,
		type: string,
		width: number,
		x: number,
		y: number
	}

	declare interface defaultPolyline {
		points: any[],
		type: string
	}

	declare interface defaultRadialGradient {
		colors: any[],
		cx: number,
		cy: number,
		r: number,
		type: string
	}

	declare interface defaultRect {
		height: number,
		r: number,
		type: string,
		width: number,
		x: number,
		y: number
	}

	declare interface defaultText {
		align: string,
		decoration: string,
		kerning: boolean,
		rotated: boolean,
		text: string,
		type: string,
		x: number,
		y: number
	}

	declare interface defaultStroke {
		cap: string,
		color: string,
		join: number,
		style: string,
		type: string,
		width: number
	}

	declare interface defaultTextPath {
		align: string,
		decoration: string,
		kerning: boolean,
		rotated: boolean,
		text: string,
		type: string
	}

	declare interface defaultVectorFont {
		family: Object,
		size: string,
		type: string
	}

	declare interface defaultVectorText {
		align: string,
		decoration: string,
		fitting: number,
		height: Object,
		leading: number,
		text: string,
		type: string,
		width: Object,
		x: number,
		y: number
	}

	declare interface Fill {
		color: string,
		type: Object
	}

	declare interface Font {
		family: string,
		size: string,
		style: string,
		type: string,
		variant: string,
		weight: string
	}

	declare interface fx {
		animateFill(args: Object): any,
		animateFont(args: Object): void,
		animateStroke(args: Object): void,
		animateTransform(args: Object): any
	}

	declare interface gradient {
		project(
		matrix: dojox.gfx.matrix.Matrix2D, gradient: Object, tl: Object, rb: Object, ttl: Object, trb: Object
	): Object,
		project(
		matrix: any, gradient: Object, tl: Object, rb: Object, ttl: Object, trb: Object
	): Object,
		rescale(stops: any[], from: number, to: number): any[]
	}

	declare interface gradutils {
		getColor(fill: Object, pt: Object): void,
		reverse(fill: Object): void
	}

	declare interface LinearGradient {
		colors: any[],
		type: string,
		x1: number,
		x2: number,
		y1: number,
		y2: number
	}

	declare interface move {
		
	}

	declare interface matrix {
		flipX: Object,
		flipXY: Object,
		flipY: Object,
		identity: Object,
		clone(matrix: dojox.gfx.matrix.Matrix2D): dojox.gfx.matrix.Matrix2D,
		invert(matrix: dojox.gfx.matrix.Matrix2D): dojox.gfx.matrix.Matrix2D,
		isIdentity(matrix: dojox.gfx.matrix.Matrix2D): boolean,
		multiply(matrix: dojox.gfx.matrix.Matrix2D): any,
		multiplyPoint(matrix: dojox.gfx.matrix.Matrix2D, a: number, b: number): dojox.gfx.Point,
		multiplyPoint(
		matrix: dojox.gfx.matrix.Matrix2D, a: dojox.gfx.Point, b: number
	): dojox.gfx.Point,
		multiplyRectangle(
		matrix: dojox.gfx.matrix.Matrix2D, rect: dojox.gfx.shape.Rect
	): dojox.gfx.Rectangle,
		normalize(matrix: Object): dojox.gfx.matrix.Matrix2D,
		project(a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		project(a: number, b: number): dojox.gfx.matrix.Matrix2D,
		reflect(a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		reflect(a: number, b: number): dojox.gfx.matrix.Matrix2D,
		rotate(angle: number): dojox.gfx.matrix.Matrix2D,
		rotateAt(angle: number, a: number, b: number): dojox.gfx.matrix.Matrix2D,
		rotateAt(angle: number, a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		rotateg(degree: number): dojox.gfx.matrix.Matrix2D,
		rotategAt(degree: number, a: number, b: number): dojox.gfx.matrix.Matrix2D,
		rotategAt(degree: number, a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		scale(a: number, b: number): dojox.gfx.matrix.Matrix2D,
		scale(a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		scaleAt(a: number, b: number, c: number, d: number): dojox.gfx.matrix.Matrix2D,
		scaleAt(a: number, b: number, c: dojox.gfx.Point, d: number): dojox.gfx.matrix.Matrix2D,
		skewX(angle: number): dojox.gfx.matrix.Matrix2D,
		skewXAt(angle: number, a: number, b: number): dojox.gfx.matrix.Matrix2D,
		skewXAt(angle: number, a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		skewXg(degree: number): dojox.gfx.matrix.Matrix2D,
		skewXgAt(degree: number, a: number, b: number): dojox.gfx.matrix.Matrix2D,
		skewXgAt(degree: number, a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		skewY(angle: number): dojox.gfx.matrix.Matrix2D,
		skewYAt(angle: number, a: number, b: number): dojox.gfx.matrix.Matrix2D,
		skewYAt(angle: number, a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		skewYg(degree: number): dojox.gfx.matrix.Matrix2D,
		skewYgAt(degree: number, a: number, b: number): dojox.gfx.matrix.Matrix2D,
		skewYgAt(degree: number, a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D,
		translate(a: number, b: number): dojox.gfx.matrix.Matrix2D,
		translate(a: dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D
	}

	declare interface Pattern {
		height: number,
		src: string,
		type: string,
		width: number,
		x: number,
		y: number
	}

	declare interface RadialGradient {
		colors: any[],
		cx: number,
		cy: number,
		r: number,
		type: string
	}

	declare interface shape {
		byId(id: String): dojox.gfx.shape.Shape,
		dispose(s: dojox.gfx.shape.Shape, recurse: boolean): void,
		register(s: dojox.gfx.shape.Shape): number
	}

	declare interface silverlight_attach {
		attachNode(node: HTMLElement): void,
		attachSurface(node: HTMLElement): void,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): void,
		Ellipse(): void,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface silverlight {
		attachNode(node: HTMLElement): void,
		attachSurface(node: HTMLElement): void,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): void,
		Ellipse(): void,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface Stroke {
		cap: string,
		color: string,
		join: number,
		style: string,
		width: number
	}

	declare interface svgext {
		
	}

	declare interface utils {
		deserialize(parent: dojox.gfx.shape.Shape, object: dojox.gfx.shape.Shape): any,
		deserialize(parent: dojox.gfx.shape.Shape, object: any[]): any,
		forEach(object: dojox.gfx.shape.Shape, f: Function, o: Object): void,
		forEach(object: dojox.gfx.shape.Shape, f: String, o: Object): void,
		forEach(object: dojox.gfx.shape.Shape, f: any[], o: Object): void,
		fromJson(parent: dojox.gfx.shape.Shape, json: String): any,
		serialize(object: dojox.gfx.shape.Shape): any,
		toJson(object: dojox.gfx.shape.Shape, prettyPrint: boolean): String,
		toSvg(surface: dojox.gfx.shape.Surface): any
	}

	declare interface svg {
		dasharray: Object,
		useSvgWeb: boolean,
		xmlns: Object,
		attachNode(node: HTMLElement): void,
		attachSurface(node: HTMLElement): void,
		Circle(): void,
		createSurface(parentNode: any, width: any, height: any): void,
		Ellipse(): void,
		fixTarget(event: Object, gfxElement: Object): void,
		getRef(name: String): any,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface vectorFontFitting {
		FIT: number,
		FLOW: number,
		NONE: number
	}

	declare interface vml {
		text_alignment: Object,
		xmlns: string,
		attachNode(node: HTMLElement): void,
		attachSurface(node: HTMLElement): void,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): any,
		createSurface(parentNode: HTMLElement, width: number, height: String): any,
		createSurface(parentNode: HTMLElement, width: String, height: number): any,
		createSurface(parentNode: HTMLElement, width: number, height: number): any,
		Ellipse(): void,
		fixTarget(event: Object, gfxElement: Object): void,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface filters {
		
	}

	declare interface renderer {
		
	}

	declare interface registry {
		byId(id: String): dojox.gfx.shape.Shape,
		dispose(s: dojox.gfx.shape.Shape, recurse: boolean): void,
		register(s: dojox.gfx.shape.Shape): number
	}

	declare interface svg_attach {
		dasharray: Object,
		useSvgWeb: boolean,
		xmlns: Object,
		attachNode(node: HTMLElement): void,
		attachSurface(node: HTMLElement): void,
		Circle(): void,
		createSurface(parentNode: any, width: any, height: any): void,
		Ellipse(): void,
		fixTarget(event: Object, gfxElement: Object): void,
		getRef(name: String): any,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface vml_attach {
		text_alignment: Object,
		xmlns: string,
		attachNode(node: HTMLElement): void,
		attachSurface(node: HTMLElement): void,
		Circle(): void,
		createSurface(parentNode: HTMLElement, width: String, height: String): any,
		createSurface(parentNode: HTMLElement, width: number, height: String): any,
		createSurface(parentNode: HTMLElement, width: String, height: number): any,
		createSurface(parentNode: HTMLElement, width: number, height: number): any,
		Ellipse(): void,
		fixTarget(event: Object, gfxElement: Object): void,
		Group(): void,
		Image(): void,
		Line(): void,
		Path(): void,
		Polyline(): void,
		Rect(): void,
		Shape(): void,
		Surface(): void,
		Text(): void,
		TextPath(): void
	}

	declare interface decompose {
		(matrix: dojox.gfx.matrix.Matrix2D): void
	}

		declare class ___MoveableCtorArgs  {
		constructor(): this;
		delay: number;
		mover(): void
	}

	declare class Circle  {
		constructor(rawNode: HTMLElement): this;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): Object;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: any): void;
		setFill(fill: Object): Function;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Ellipse  {
		constructor(rawNode: HTMLElement): this;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): Object;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: any): void;
		setFill(fill: Object): Function;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Line  {
		constructor(rawNode: HTMLElement): this;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): Object;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: any): void;
		setFill(fill: Object): Function;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Group  {
		constructor(): this;
		textDir: string;
		add(shape: dojox.gfx.shape.Shape): any;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		clear(destroy: boolean): Function;
		closeBatch(): Function;
		connect(name: any, object: any, method: any): any;
		createCircle(circle: Object): any;
		createEllipse(ellipse: Object): any;
		createGroup(): any;
		createImage(image: Object): any;
		createLine(line: Object): any;
		createObject(shapeType: Function, rawShape: Object): any;
		createPath(path: Object): any;
		createPolyline(points: Object): any;
		createRect(rect: Object): any;
		createShape(shape: Object): any;
		createText(text: Object): any;
		createTextPath(text: Object): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTextDir(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		openBatch(): Function;
		remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
		removeShape(silently: boolean): Function;
		setClip(clip: any): void;
		setFill(fill: Object): Function;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTextDir(newTextDir: String): void;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Moveable  {
		constructor(shape: dojox.gfx.shape.Shape, params: Object): this;
		destroy(): void;
		onFirstMove(mover: dojox.gfx.Mover): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseUp(e: Event): void;
		onMove(mover: dojox.gfx.Mover, shift: Object): void;
		onMoved(mover: dojox.gfx.Mover, shift: Object): void;
		onMoveStart(mover: dojox.gfx.Mover): void;
		onMoveStop(mover: dojox.gfx.Mover): void;
		onMoving(mover: dojox.gfx.Mover, shift: Object): void
	}

	declare class path  {
		constructor(): this;
		Path(): void;
		TextPath(): void
	}

	declare class Mover  {
		constructor(shape: dojox.gfx.shape.Shape, e: Event, host?: Object): this;
		destroy(): void;
		onFirstMove(): void;
		onMouseMove(e: Event): void
	}

	declare class Point  {
		constructor(): this
	}

	declare class Polyline  {
		constructor(rawNode: HTMLElement): this;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): Object;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: any): void;
		setFill(fill: Object): Function;
		setShape(points: Object, closed: boolean): Function;
		setShape(points: any[], closed: boolean): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Rectangle  {
		constructor(): this
	}

	declare class Rect  {
		constructor(rawNode: HTMLElement): this;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: any): void;
		setFill(fill: Object): Function;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Surface  {
		constructor(): this;
		isLoaded: boolean;
		textDir: string;
		add(shape: dojox.gfx.shape.Shape): any;
		clear(destroy: boolean): Function;
		closeBatch(): Function;
		connect(name: any, object: any, method: any): any;
		createCircle(circle: Object): any;
		createEllipse(ellipse: Object): any;
		createGroup(): any;
		createImage(image: Object): any;
		createLine(line: Object): any;
		createObject(shapeType: Function, rawShape: Object): any;
		createPath(path: Object): any;
		createPolyline(points: Object): any;
		createRect(rect: Object): any;
		createShape(shape: Object): any;
		createText(text: Object): any;
		createTextPath(text: Object): any;
		createViewport(): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getDimensions(): Object;
		getEventSource(): any;
		getTextDir(): any;
		on(type: any, listener: any): any;
		openBatch(): Function;
		remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
		setDimensions(width: String, height: String): Function;
		setTextDir(newTextDir: String): void;
		whenLoaded(context: Object, method: Function): void;
		whenLoaded(context: any, method: Function): void;
		whenLoaded(context: Object, method: String): void;
		whenLoaded(context: any, method: String): void;
		onLoad(surface: dojox.gfx.shape.Surface): void
	}

	declare class Text  {
		constructor(rawNode: HTMLElement): this;
		textDir: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		bidiPreprocess(newShape: any): any;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		formatText(text: String, textDir: String): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getFont(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: any): void;
		setFill(fill: Object): Function;
		setFont(newFont: Object): Function;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class TextPath  {
		constructor(rawNode: HTMLElement): this;
		textDir: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		arcTo(): Function;
		bidiPreprocess(newText: any): any;
		closePath(): Function;
		connect(name: any, object: any, method: any): any;
		curveTo(): Function;
		destroy(): void;
		disconnect(token: any): any;
		formatText(text: String, textDir: String): any;
		getAbsoluteMode(): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getFont(): any;
		getLastPosition(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getText(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		hLineTo(): Function;
		lineTo(): Function;
		moveTo(): Function;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		qCurveTo(): Function;
		qSmoothCurveTo(): Function;
		removeShape(silently: boolean): Function;
		setAbsoluteMode(mode: boolean): Function;
		setClip(clip: any): void;
		setFill(fill: Object): Function;
		setFont(newFont: any): Function;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setText(newText: any): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
		smoothCurveTo(): Function;
		vLineTo(): Function
	}

	declare class VectorFont  {
		constructor(url: String): this;
		draw(
		group: dojox.gfx.shape.Container, textArgs: dojox.gfx.Text, fontArgs: dojox.gfx.Font, fillArgs: dojox.gfx.Fill, strokeArgs: dojox.gfx.Stroke
	): any;
		getBaseline(scale: number): number;
		getCenterline(scale: number): number;
		getLineHeight(scale: number): number;
		getWidth(text: String, scale: number): number;
		initialized(): boolean;
		load(url: String): Function;
		load(url: dojo._base.url): Function;
		onLoad(font: dojox.gfx.VectorText): void;
		onLoadBegin(url: String): void
	}

	declare class VectorText  {
		constructor(url: String): this;
		draw(
		group: dojox.gfx.shape.Container, textArgs: dojox.gfx.Text, fontArgs: dojox.gfx.Font, fillArgs: dojox.gfx.Fill, strokeArgs: dojox.gfx.Stroke
	): any;
		getBaseline(scale: number): number;
		getCenterline(scale: number): number;
		getLineHeight(scale: number): number;
		getWidth(text: String, scale: number): number;
		initialized(): boolean;
		load(url: String): Function;
		load(url: dojo._base.url): Function;
		onLoad(font: dojox.gfx.VectorText): void;
		onLoadBegin(url: String): void
	}

	
}

declare module 'matrix' {
				declare class Matrix2D  {
		constructor(arg: Object): this
	}

	
}

declare module 'shape' {
				declare class Container  {
		
	}

	declare class Creator  {
		
	}

	declare class Circle  {
		
	}

	declare class Ellipse  {
		
	}

	declare class Image  {
		
	}

	declare class Line  {
		
	}

	declare class Polyline  {
		
	}

	declare class Rect  {
		
	}

	declare class Shape  {
		
	}

	declare class Surface  {
		
	}

	declare class Text  {
		
	}

	
}

declare module 'svg_attach' {
		declare interface dasharray {
		dash: any[],
		dashdot: any[],
		dot: any[],
		longdash: any[],
		longdashdot: any[],
		longdashdotdot: any[],
		shortdash: any[],
		shortdashdot: any[],
		shortdashdotdot: any[],
		shortdot: any[],
		solid: string
	}

	declare interface xmlns {
		svg: string,
		xlink: string
	}

		declare class Circle  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Ellipse  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Image  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Line  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Group  {
		constructor(): this;
		nodeType: string;
		add(shape: dojox.gfx.shape.Shape): Function;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		clear(): any;
		closeBatch(): Function;
		connect(name: any, object: any, method: any): any;
		createCircle(circle: Object): any;
		createEllipse(ellipse: Object): any;
		createGroup(): any;
		createImage(image: Object): any;
		createLine(line: Object): any;
		createObject(shapeType: Function, rawShape: Object): any;
		createPath(path: Object): any;
		createPolyline(points: Object): any;
		createRect(rect: Object): any;
		createShape(shape: Object): any;
		createText(text: Object): any;
		createTextPath(text: Object): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		openBatch(): Function;
		remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: HTMLElement): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Path  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		arcTo(): Function;
		closePath(): Function;
		connect(name: any, object: any, method: any): any;
		curveTo(): Function;
		destroy(): void;
		disconnect(token: any): any;
		getAbsoluteMode(): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getLastPosition(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		hLineTo(): Function;
		lineTo(): Function;
		moveTo(): Function;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		qCurveTo(): Function;
		qSmoothCurveTo(): Function;
		removeShape(silently: boolean): Function;
		setAbsoluteMode(mode: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
		smoothCurveTo(): Function;
		vLineTo(): Function
	}

	declare class Polyline  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(points: Object, closed: any): Function;
		setShape(points: any[], closed: any): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Rect  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Shape  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any[];
		destroy(): void;
		disconnect(token: any): void;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Surface  {
		constructor(): this;
		isLoaded: boolean;
		textDir: string;
		add(shape: dojox.gfx.shape.Shape): Function;
		clear(): any;
		closeBatch(): Function;
		connect(name: any, object: any, method: any): any[];
		createCircle(circle: Object): any;
		createEllipse(ellipse: Object): any;
		createGroup(): any;
		createImage(image: Object): any;
		createLine(line: Object): any;
		createObject(shapeType: Function, rawShape: Object): any;
		createPath(path: Object): any;
		createPolyline(points: Object): any;
		createRect(rect: Object): any;
		createShape(shape: Object): any;
		createText(text: Object): any;
		createTextPath(text: Object): any;
		createViewport(): any;
		destroy(): void;
		disconnect(token: any): void;
		getBoundingBox(): any;
		getDimensions(): any;
		getEventSource(): any;
		getTextDir(): any;
		on(type: any, listener: any): any;
		openBatch(): Function;
		remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
		setDimensions(width: String, height: String): Function;
		setTextDir(newTextDir: String): void;
		whenLoaded(context: Object, method: Function): void;
		whenLoaded(context: any, method: Function): void;
		whenLoaded(context: Object, method: String): void;
		whenLoaded(context: any, method: String): void;
		onLoad(surface: dojox.gfx.shape.Surface): void
	}

	declare class Text  {
		constructor(): this;
		nodeType: string;
		textDir: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		bidiPreprocess(newShape: any): any;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		formatText(text: String, textDir: String): any;
		getBoundingBox(): Object;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getFont(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTextWidth(): number;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setFont(newFont: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class TextPath  {
		constructor(): this;
		nodeType: string;
		textDir: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		arcTo(): Function;
		bidiPreprocess(newText: any): any;
		closePath(): Function;
		connect(name: any, object: any, method: any): any;
		curveTo(): Function;
		destroy(): void;
		disconnect(token: any): any;
		formatText(text: String, textDir: String): any;
		getAbsoluteMode(): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getFont(): any;
		getLastPosition(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getText(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		hLineTo(): Function;
		lineTo(): Function;
		moveTo(): Function;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		qCurveTo(): Function;
		qSmoothCurveTo(): Function;
		removeShape(silently: boolean): Function;
		setAbsoluteMode(mode: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setFont(newFont: any): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setText(newText: any): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
		smoothCurveTo(): Function;
		vLineTo(): Function
	}

	
}

declare module 'vml_attach' {
		declare interface _bool {
		t: number,
		true: number
	}

	declare interface text_alignment {
		end: string,
		middle: string,
		start: string
	}

		declare class Circle  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Ellipse  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): any;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Image  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): any;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Line  {
		constructor(rawNode: any): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): any;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Group  {
		constructor(): this;
		nodeType: string;
		add(shape: any): Function;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		clear(): any;
		connect(name: any, object: any, method: any): any;
		createCircle(circle: Object): any;
		createEllipse(ellipse: Object): any;
		createGroup(): any;
		createImage(image: Object): any;
		createLine(line: Object): any;
		createObject(shapeType: Function, rawShape: Object): any;
		createPath(path: Object): any;
		createPolyline(points: Object): any;
		createRect(rect: Object): any;
		createShape(shape: Object): any;
		createText(text: Object): any;
		createTextPath(text: Object): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Polyline  {
		constructor(rawNode: any): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(points: Object, closed: boolean): any;
		setShape(points: any[], closed: boolean): any;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Rect  {
		constructor(): this;
		nodeType: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): any;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Shape  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Surface  {
		constructor(): this;
		isLoaded: boolean;
		textDir: string;
		add(shape: any): Function;
		clear(): any;
		closeBatch(): Function;
		connect(name: any, object: any, method: any): any;
		createCircle(circle: Object): any;
		createEllipse(ellipse: Object): any;
		createGroup(): any;
		createImage(image: Object): any;
		createLine(line: Object): any;
		createObject(shapeType: Function, rawShape: Object): any;
		createPath(path: Object): any;
		createPolyline(points: Object): any;
		createRect(rect: Object): any;
		createShape(shape: Object): any;
		createText(text: Object): any;
		createTextPath(text: Object): any;
		createViewport(): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getDimensions(): any;
		getEventSource(): any;
		getTextDir(): any;
		on(type: any, listener: any): any;
		openBatch(): Function;
		remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
		setDimensions(width: String, height: String): Function;
		setTextDir(newTextDir: String): void;
		whenLoaded(context: Object, method: Function): void;
		whenLoaded(context: any, method: Function): void;
		whenLoaded(context: Object, method: String): void;
		whenLoaded(context: any, method: String): void;
		onLoad(surface: dojox.gfx.shape.Surface): void
	}

	declare class Text  {
		constructor(rawNode: any): this;
		nodeType: string;
		textDir: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		bidiPreprocess(newShape: any): any;
		connect(name: any, object: any, method: any): any;
		destroy(): void;
		disconnect(token: any): any;
		formatText(text: String, textDir: String): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getFont(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTextWidth(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		removeShape(silently: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setFont(newFont: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): any;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	declare class Path  {
		constructor(rawNode: any): this;
		nodeType: string;
		renderers: Object;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		arcTo(): Function;
		closePath(): Function;
		connect(name: any, object: any, method: any): any;
		curveTo(): Function;
		destroy(): void;
		disconnect(token: any): any;
		getAbsoluteMode(): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getLastPosition(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		hLineTo(): Function;
		lineTo(): Function;
		moveTo(): Function;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		qCurveTo(): Function;
		qSmoothCurveTo(): Function;
		removeShape(silently: boolean): Function;
		setAbsoluteMode(mode: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
		smoothCurveTo(): Function;
		vLineTo(): Function
	}

	declare class TextPath  {
		constructor(rawNode: any): this;
		nodeType: string;
		renderers: Object;
		textDir: string;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		arcTo(): Function;
		bidiPreprocess(newText: any): any;
		closePath(): Function;
		connect(name: any, object: any, method: any): any;
		curveTo(): Function;
		destroy(): void;
		disconnect(token: any): any;
		formatText(text: String, textDir: String): any;
		getAbsoluteMode(): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getFont(): any;
		getLastPosition(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getText(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		hLineTo(): Function;
		lineTo(): Function;
		moveTo(): Function;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		qCurveTo(): Function;
		qSmoothCurveTo(): Function;
		removeShape(silently: boolean): Function;
		setAbsoluteMode(mode: boolean): Function;
		setClip(clip: Object): Function;
		setFill(fill: Object): Function;
		setFont(newFont: any): Function;
		setRawNode(rawNode: any): void;
		setShape(newShape: Object): Function;
		setStroke(stroke: Object): Function;
		setText(newText: any): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
		smoothCurveTo(): Function;
		vLineTo(): Function
	}

	
}

declare module 'dojox/gfx' {
					declare module.exports: gfx


}

declare module 'dojox/gfx.__MoveableCtorArgs' {
					declare module.exports: ___MoveableCtorArgs


}

declare module 'dojox/gfx.Circle' {
					declare module.exports: Circle


}

declare module 'dojox/gfx.Ellipse' {
					declare module.exports: Ellipse


}

declare module 'dojox/gfx/path' {
					declare module.exports: path


}

declare module 'dojox/gfx/Mover' {
					declare module.exports: Mover


}

declare module 'dojox/gfx/Moveable' {
					declare module.exports: Moveable


}

declare module 'dojox/gfx.Line' {
					declare module.exports: Line


}

declare module 'dojox/gfx.Point' {
					declare module.exports: Point


}

declare module 'dojox/gfx.Group' {
					declare module.exports: Group


}

declare module 'dojox/gfx.Polyline' {
					declare module.exports: Polyline


}

declare module 'dojox/gfx.Rect' {
					declare module.exports: Rect


}

declare module 'dojox/gfx.Rectangle' {
					declare module.exports: Rectangle


}

declare module 'dojox/gfx.Surface' {
					declare module.exports: Surface


}

declare module 'dojox/gfx.TextPath' {
					declare module.exports: TextPath


}

declare module 'dojox/gfx.Text' {
					declare module.exports: Text


}

declare module 'dojox/gfx.VectorFont' {
					declare module.exports: VectorFont


}

declare module 'dojox/gfx/VectorText' {
					declare module.exports: VectorText


}

declare module 'dojox/gfx/decompose' {
					declare module.exports: decompose


}

declare module 'dojox/gfx._vectorFontCache' {
					declare module.exports: _vectorFontCache


}

declare module 'dojox/gfx._svgFontCache' {
					declare module.exports: _svgFontCache


}

declare module 'dojox/gfx/arc' {
					declare module.exports: arc


}

declare module 'dojox/gfx/bezierutils' {
					declare module.exports: bezierutils


}

declare module 'dojox/gfx/_base' {
					declare module.exports: _base


}

declare module 'dojox/gfx/_gfxBidiSupport' {
					declare module.exports: _gfxBidiSupport


}

declare module 'dojox/gfx/canvas' {
					declare module.exports: canvas


}

declare module 'dojox/gfx/canvasWithEvents' {
					declare module.exports: canvasWithEvents


}

declare module 'dojox/gfx.defaultCircle' {
					declare module.exports: defaultCircle


}

declare module 'dojox/gfx/canvasext' {
					declare module.exports: canvasext


}

declare module 'dojox/gfx.defaultImage' {
					declare module.exports: defaultImage


}

declare module 'dojox/gfx.defaultLine' {
					declare module.exports: defaultLine


}

declare module 'dojox/gfx/canvas_attach' {
					declare module.exports: canvas_attach


}

declare module 'dojox/gfx.defaultLinearGradient' {
					declare module.exports: defaultLinearGradient


}

declare module 'dojox/gfx.defaultEllipse' {
					declare module.exports: defaultEllipse


}

declare module 'dojox/gfx.defaultFont' {
					declare module.exports: defaultFont


}

declare module 'dojox/gfx.defaultPath' {
					declare module.exports: defaultPath


}

declare module 'dojox/gfx.defaultPattern' {
					declare module.exports: defaultPattern


}

declare module 'dojox/gfx.defaultRadialGradient' {
					declare module.exports: defaultRadialGradient


}

declare module 'dojox/gfx.defaultRect' {
					declare module.exports: defaultRect


}

declare module 'dojox/gfx.defaultPolyline' {
					declare module.exports: defaultPolyline


}

declare module 'dojox/gfx.defaultStroke' {
					declare module.exports: defaultStroke


}

declare module 'dojox/gfx.defaultText' {
					declare module.exports: defaultText


}

declare module 'dojox/gfx.Fill' {
					declare module.exports: Fill


}

declare module 'dojox/gfx.defaultVectorFont' {
					declare module.exports: defaultVectorFont


}

declare module 'dojox/gfx.defaultVectorText' {
					declare module.exports: defaultVectorText


}

declare module 'dojox/gfx.defaultTextPath' {
					declare module.exports: defaultTextPath


}

declare module 'dojox/gfx/fx' {
					declare module.exports: fx


}

declare module 'dojox/gfx/gradient' {
					declare module.exports: gradient


}

declare module 'dojox/gfx.Font' {
					declare module.exports: Font


}

declare module 'dojox/gfx/gradutils' {
					declare module.exports: gradutils


}

declare module 'dojox/gfx.LinearGradient' {
					declare module.exports: LinearGradient


}

declare module 'dojox/gfx/move' {
					declare module.exports: move


}

declare module 'dojox/gfx/matrix' {
					declare module.exports: matrix


}

declare module 'dojox/gfx.Pattern' {
					declare module.exports: Pattern


}

declare module 'dojox/gfx.RadialGradient' {
					declare module.exports: RadialGradient


}

declare module 'dojox/gfx/shape' {
					declare module.exports: shape


}

declare module 'dojox/gfx/silverlight' {
					declare module.exports: silverlight


}

declare module 'dojox/gfx.Stroke' {
					declare module.exports: Stroke


}

declare module 'dojox/gfx/silverlight_attach' {
					declare module.exports: silverlight_attach


}

declare module 'dojox/gfx/svgext' {
					declare module.exports: svgext


}

declare module 'dojox/gfx/svg' {
					declare module.exports: svg


}

declare module 'dojox/gfx.vectorFontFitting' {
					declare module.exports: vectorFontFitting


}

declare module 'dojox/gfx/utils' {
					declare module.exports: utils


}

declare module 'dojox/gfx/vml' {
					declare module.exports: vml


}

declare module 'dojox/gfx/filters' {
					declare module.exports: filters


}

declare module 'dojox/gfx/registry' {
					declare module.exports: registry


}

declare module 'dojox/gfx/renderer' {
					declare module.exports: renderer


}

declare module 'dojox/gfx/svg_attach' {
					declare module.exports: svg_attach


}

declare module 'dojox/gfx/svg_attach.Ellipse' {
					declare module.exports: Ellipse


}

declare module 'dojox/gfx/svg_attach.Group' {
					declare module.exports: Group


}

declare module 'dojox/gfx/svg_attach.Circle' {
					declare module.exports: Circle


}

declare module 'dojox/gfx/svg_attach.Line' {
					declare module.exports: Line


}

declare module 'dojox/gfx/svg_attach.Image' {
					declare module.exports: Image


}

declare module 'dojox/gfx/svg_attach.Path' {
					declare module.exports: Path


}

declare module 'dojox/gfx/svg_attach.Polyline' {
					declare module.exports: Polyline


}

declare module 'dojox/gfx/svg_attach.Surface' {
					declare module.exports: Surface


}

declare module 'dojox/gfx/svg_attach.Shape' {
					declare module.exports: Shape


}

declare module 'dojox/gfx/svg_attach.Rect' {
					declare module.exports: Rect


}

declare module 'dojox/gfx/svg_attach.Text' {
					declare module.exports: Text


}

declare module 'dojox/gfx/svg_attach.TextPath' {
					declare module.exports: TextPath


}

declare module 'dojox/gfx/svg_attach.dasharray' {
					declare module.exports: dasharray


}

declare module 'dojox/gfx/svg_attach.xmlns' {
					declare module.exports: xmlns


}

declare module 'dojox/gfx/vml_attach' {
					declare module.exports: vml_attach


}

declare module 'dojox/gfx/vml_attach.Circle' {
					declare module.exports: Circle


}

declare module 'dojox/gfx/vml_attach.Group' {
					declare module.exports: Group


}

declare module 'dojox/gfx/vml_attach.Ellipse' {
					declare module.exports: Ellipse


}

declare module 'dojox/gfx/vml_attach.Image' {
					declare module.exports: Image


}

declare module 'dojox/gfx/vml_attach.Line' {
					declare module.exports: Line


}

declare module 'dojox/gfx/vml_attach.Polyline' {
					declare module.exports: Polyline


}

declare module 'dojox/gfx/vml_attach.Surface' {
					declare module.exports: Surface


}

declare module 'dojox/gfx/vml_attach.Rect' {
					declare module.exports: Rect


}

declare module 'dojox/gfx/vml_attach.Path' {
					declare module.exports: Path


}

declare module 'dojox/gfx/vml_attach.Shape' {
					declare module.exports: Shape


}

declare module 'dojox/gfx/vml_attach.Text' {
					declare module.exports: Text


}

declare module 'dojox/gfx/vml_attach.TextPath' {
					declare module.exports: TextPath


}

declare module 'dojox/gfx/vml_attach._bool' {
					declare module.exports: _bool


}

declare module 'dojox/gfx/vml_attach.text_alignment' {
					declare module.exports: text_alignment


}