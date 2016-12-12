

declare module 'fabricjs' {
					
}

declare module 'fabric' {
					declare module.exports: undefined


}

declare module 'npm$namespace$fabric' {
		declare interface IDataURLOptions {
		format?: string,
		quality?: number,
		multiplier?: number,
		left?: number,
		top?: number,
		width?: number,
		height?: number
	}

	declare interface IEvent {
		e: Event,
		target?: IObject
	}

	declare interface IFillOptions {
		source: string | HTMLImageElement,
		repeat?: string,
		offsetX?: number,
		offsetY?: number
	}

	declare interface IToSVGOptions {
		suppressPreamble: boolean,
		viewBox: IViewBox,
		encoding: string
	}

	declare interface IViewBox {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare interface ICollection<T> {
		add(...object: IObject[]): T,
		insertAt(object: IObject, index: number, nonSplicing: boolean): T,
		remove(...object: IObject[]): T,
		forEachObject(
		callback: (element: IObject, index: number, array: IObject[]) => any, context?: any
	): T,
		getObjects(type?: string): IObject[],
		item(index: number): T,
		isEmpty(): boolean,
		size(): number,
		contains(object: IObject): boolean,
		complexity(): number
	}

	declare interface IObservable<T> {
		on(eventName: string, handler: (e: IEvent) => any): T,
		on(eventName: {
		[key: string]: Function
	}): T,
		trigger(eventName: string, options?: any): T,
		off(eventName?: string | any, handler?: (e: IEvent) => any): T
	}

	declare interface ICanvasAnimation<T> {
		FX_DURATION: number,
		fxCenterObjectH(
		object: IObject, callbacks?: {
		onComplete: Function,
		onChange: Function
	}
	): T,
		fxCenterObjectV(
		object: IObject, callbacks?: {
		onComplete: Function,
		onChange: Function
	}
	): T,
		fxRemove(
		object: IObject, callbacks?: {
		onComplete: Function,
		onChange: Function
	}
	): T
	}

	declare interface IObjectAnimation<T> {
		animate(property: string, value: number | string, options?: IAnimationOptions): IObject,
		animate(properties: any, options?: IAnimationOptions): IObject
	}

	declare interface IAnimationOptions {
		from?: string | number,
		duration?: number,
		onChange?: Function,
		onComplete?: Function,
		easing?: Function,
		by?: number
	}

	declare interface IColor {
		getSource(): number[],
		setSource(source: number[]): void,
		toRgb(): string,
		toRgba(): string,
		toHsl(): string,
		toHsla(): string,
		toHex(): string,
		getAlpha(): number,
		setAlpha(alpha: number): void,
		toGrayscale(): IColor,
		toBlackWhite(threshold: number): IColor,
		overlayWith(otherColor: string | IColor): IColor
	}

	declare interface IColorStatic {
		new (color?: string): IColor,
		fromRgb(color: string): IColor,
		fromRgba(color: string): IColor,
		sourceFromRgb(color: string): number[],
		fromHsl(color: string): IColor,
		fromHsla(color: string): IColor,
		sourceFromHsl(color: string): number[],
		fromHex(color: string): IColor,
		sourceFromHex(color: string): number[],
		fromSource(source: number[]): IColor,
		prototype: any
	}

	declare interface IGradientOptions {
		type?: string,
		x1?: number,
		y1?: number,
		x2?: number,
		y2?: number,
		r1?: number,
		r2?: number,
		colorStops?: any
	}

	declare interface IGradient {
		addColorStop(colorStop: any): IGradient,
		toObject(): any,
		toSVG(object: IObject, normalize?: boolean): string,
		toLive(ctx: CanvasRenderingContext2D, object?: IPathGroup): CanvasGradient
	}

	declare interface IGrandientStatic {
		new (options?: IGradientOptions): IGradient,
		fromElement(el: SVGGradientElement, instance: IObject): IGradient,
		fromObject(obj: any, options: any[]): IGradient
	}

	declare interface IIntersection {
		appendPoint(point: IPoint): void,
		appendPoints(points: IPoint[]): void
	}

	declare interface IIntersectionStatic {
		new (status?: string): void,
		intersectPolygonPolygon(points1: IPoint[], points2: IPoint[]): IIntersection,
		intersectLinePolygon(a1: IPoint, a2: IPoint, points: IPoint[]): IIntersection,
		intersectLineLine(a1: IPoint, a2: IPoint, b1: IPoint, b2: IPoint): IIntersection,
		intersectPolygonRectangle(points: IPoint[], r1: number, r2: number): IIntersection
	}

	declare interface IPatternOptions {
		repeat: string,
		offsetX: number,
		offsetY: number,
		source: string | HTMLImageElement
	}

	declare interface IPattern {
		new (options?: IPatternOptions): IPattern,
		initialise(options?: IPatternOptions): IPattern,
		toLive(ctx: CanvasRenderingContext2D): IPattern,
		toObject(): any,
		toSVG(object: IObject): string
	}

	declare interface IPatternStatic {
		new (options?: IPatternOptions): IPattern,
		prototype: any
	}

	declare interface IPoint {
		x: number,
		y: number,
		add(that: IPoint): IPoint,
		addEquals(that: IPoint): IPoint,
		scalarAdd(scalar: number): IPoint,
		scalarAddEquals(scalar: number): IPoint,
		subtract(that: IPoint): IPoint,
		subtractEquals(that: IPoint): IPoint,
		scalarSubtract(scalar: number): IPoint,
		scalarSubtractEquals(scalar: number): IPoint,
		multiply(scalar: number): IPoint,
		multiplyEquals(scalar: number): IPoint,
		divide(scalar: number): IPoint,
		divideEquals(scalar: number): IPoint,
		eq(that: IPoint): IPoint,
		lt(that: IPoint): IPoint,
		lte(that: IPoint): IPoint,
		gt(that: IPoint): IPoint,
		gte(that: IPoint): IPoint,
		lerp(that: IPoint, t: number): IPoint,
		distanceFrom(that: IPoint): number,
		midPointFrom(that: IPoint): IPoint,
		min(that: IPoint): IPoint,
		max(that: IPoint): IPoint,
		toString(): string,
		setXY(x: number, y: number): IPoint,
		setFromPoint(that: IPoint): IPoint,
		swap(that: IPoint): IPoint
	}

	declare interface IPointStatic {
		new (x: number, y: number): IPoint,
		prototype: any
	}

	declare interface IShadowOptions {
		affectStrike: boolean,
		blur: number,
		color: string,
		includeDefaultValues: boolean,
		offsetX: number,
		offsetY: number
	}

	declare interface IShadow {
		initialize(options?: IShadowOptions | string): IShadow,
		toObject(): IObject,
		toString(): string,
		toSVG(object: IObject): string,
		reOffsetsAndBlur: RegExp
	}

	declare interface IShadowStatic {
		new (options?: IShadowOptions): IShadow,
		reOffsetsAndBlur: RegExp
	}

	declare interface ICanvasDimensions {
		width: number,
		height: number
	}

	declare interface ICanvasDimensionsOptions {
		backstoreOnly?: boolean,
		cssOnly?: boolean
	}

	declare interface IStaticCanvasOptions {
		allowTouchScrolling?: boolean,
		imageSmoothingEnabled?: boolean,
		preserveObjectStacking?: boolean,
		viewportTransform?: number[],
		freeDrawingColor?: string,
		freeDrawingLineWidth?: number,
		backgroundColor?: string | IPattern,
		backgroundImage?: IImage | string,
		backgroundImageOpacity?: number,
		backgroundImageStretch?: number,
		clipTo?: (context: CanvasRenderingContext2D) => void,
		controlsAboveOverlay?: boolean,
		includeDefaultValues?: boolean,
		overlayColor?: string | IPattern,
		overlayImage?: IImage,
		overlayImageLeft?: number,
		overlayImageTop?: number,
		renderOnAddRemove?: boolean,
		stateful?: boolean
	}

	declare interface IStaticCanvas {
		calcOffset(): IStaticCanvas,
		setOverlayImage(
		image: IImage | string, callback: Function, options?: IObjectOptions
	): IStaticCanvas,
		setBackgroundImage(
		image: IImage | string, callback: Function, options?: IObjectOptions
	): IStaticCanvas,
		setOverlayColor(overlayColor: string | IPattern, callback: Function): IStaticCanvas,
		setBackgroundColor(backgroundColor: string | IPattern, callback: Function): IStaticCanvas,
		getWidth(): number,
		getHeight(): number,
		setWidth(value: number | string, options?: ICanvasDimensionsOptions): IStaticCanvas,
		setHeight(value: number | string, options?: ICanvasDimensionsOptions): IStaticCanvas,
		setDimensions(
		dimensions: ICanvasDimensions, options?: ICanvasDimensionsOptions
	): IStaticCanvas,
		getZoom(): number,
		setViewportTransform(vpt: number[]): IStaticCanvas,
		zoomToPoint(point: IPoint, value: number): IStaticCanvas,
		setZoom(value: number): IStaticCanvas,
		absolutePan(point: IPoint): IStaticCanvas,
		relativePan(point: IPoint): IStaticCanvas,
		getElement(): HTMLCanvasElement,
		getActiveObject(): IObject,
		getActiveGroup(): IGroup,
		clearContext(ctx: CanvasRenderingContext2D): IStaticCanvas,
		getContext(): CanvasRenderingContext2D,
		clear(): IStaticCanvas,
		renderAll(allOnTop?: boolean): IStaticCanvas,
		renderTop(): IStaticCanvas,
		getCenter(): {
		top: number,
		left: number
	},
		centerObjectH(object: IObject): IStaticCanvas,
		centerObjectV(object: IObject): IStaticCanvas,
		centerObject(object: IObject): IStaticCanvas,
		toDatalessJSON(propertiesToInclude?: any[]): string,
		toObject(propertiesToInclude?: any[]): any,
		toDatalessObject(propertiesToInclude?: any[]): any,
		svgViewportTransformation: boolean,
		toSVG(options: IToSVGOptions, reviver?: Function): string,
		sendToBack(object: IObject): IStaticCanvas,
		bringToFront(object: IObject): IStaticCanvas,
		sendBackwards(object: IObject): IStaticCanvas,
		bringForward(object: IObject): IStaticCanvas,
		moveTo(object: IObject, index: number): IStaticCanvas,
		dispose(): IStaticCanvas,
		toString(): string,
		toDataURL(options?: IDataURLOptions): string,
		supports(methodName: string): boolean,
		loadFromJSON(json: string | any, callback: Function, reviver?: Function): ICanvas,
		clone(callback: (canvas: IStaticCanvas) => any, properties?: any[]): void,
		cloneWithoutData(callback: (canvas: IStaticCanvas) => any): void,
		onBeforeScaleRotate(target: IObject): void,
		straightenObject(object: IObject): IStaticCanvas,
		fxStraightenObject(object: IObject): IStaticCanvas
	}

	declare interface IStaticCanvasStatic {
		new (element: HTMLCanvasElement | string, options?: ICanvasOptions): IStaticCanvas,
		EMPTY_JSON: string,
		supports(methodName: string): boolean,
		prototype: any,
		toJSON(propertiesToInclude?: any[]): string
	}

	declare interface ICanvasOptions {
		uniScaleTransform?: boolean,
		centeredScaling?: boolean,
		centeredRotation?: boolean,
		interactive?: boolean,
		selection?: boolean,
		selectionColor?: string,
		selectionDashArray?: any[],
		selectionBorderColor?: string,
		selectionLineWidth?: number,
		hoverCursor?: string,
		moveCursor?: string,
		defaultCursor?: string,
		freeDrawingCursor?: string,
		rotationCursor?: string,
		containerClass?: string,
		perPixelTargetFind?: boolean,
		targetFindTolerance?: number,
		skipTargetFind?: boolean,
		isDrawingMode?: boolean
	}

	declare interface ICanvas {
		_objects: IObject[],
		containsPoint(e: Event, target: IObject): boolean,
		deactivateAll(): ICanvas,
		deactivateAllWithDispatch(e?: Event): ICanvas,
		discardActiveGroup(e?: Event): ICanvas,
		discardActiveObject(e?: Event): ICanvas,
		drawControls(ctx: CanvasRenderingContext2D): void,
		findTarget(e: MouseEvent, skipGroup: boolean): ICanvas,
		getActiveGroup(): IGroup,
		getActiveObject(): IObject,
		getPointer(
		e: Event, ignoreZoom?: boolean, upperCanvasEl?: CanvasRenderingContext2D
	): {
		x: number,
		y: number
	},
		getSelectionContext(): CanvasRenderingContext2D,
		getSelectionElement(): HTMLCanvasElement,
		isTargetTransparent(target: IObject, x: number, y: number): boolean,
		setActiveGroup(group: IGroup, e?: Event): ICanvas,
		setActiveObject(object: IObject, e?: Event): ICanvas,
		setCursor(value: string): void,
		removeListeners(): void
	}

	declare interface ICanvasStatic {
		new (element: HTMLCanvasElement | string, options?: ICanvasOptions): ICanvas,
		EMPTY_JSON: string,
		supports(methodName: string): boolean,
		prototype: any,
		toJSON(propertiesToInclude?: any[]): string
	}

	declare interface ICircleOptions {
		radius?: number,
		startAngle?: number,
		endAngle?: number
	}

	declare interface ICircle {
		complexity(): number,
		getRadiusX(): number,
		getRadiusY(): number,
		setRadius(value: number): number,
		toObject(propertiesToInclude?: any[]): any,
		toSVG(reviver?: Function): string
	}

	declare interface ICircleStatic {
		ATTRIBUTE_NAMES: string[],
		fromElement(element: SVGElement, options: ICircleOptions): ICircle,
		fromObject(object: any): ICircle,
		new (options?: ICircleOptions): ICircle,
		prototype: any
	}

	declare interface IEllipseOptions {
		rx?: number,
		ry?: number
	}

	declare interface IEllipse {
		getRx(): number,
		getRy(): number,
		toObject(propertiesToInclude?: any[]): any,
		toSVG(reviver?: Function): string,
		complexity(): number
	}

	declare interface IEllipseStatic {
		new (options?: IEllipseOptions): IEllipse,
		ATTRIBUTE_NAMES: string[],
		fromElement(element: SVGElement, options?: IEllipseOptions): IEllipse,
		fromObject(object: any): IEllipse
	}

	declare interface IGroup {
		activateAllObjects(): IGroup,
		addWithUpdate(object: IObject): IGroup,
		containsPoint(point: IPoint): boolean,
		destroy(): IGroup,
		get(prop: string): any,
		hasMoved(): boolean,
		removeWithUpdate(object: IObject): IGroup,
		render(ctx: CanvasRenderingContext2D): void,
		remove(...object: IObject[]): IGroup,
		saveCoords(): IGroup,
		setObjectsCoords(): IGroup,
		toObject(propertiesToInclude?: any[]): any,
		toString(): string,
		toSVG(reviver?: Function): string
	}

	declare interface IGroupStatic {
		new (items?: any[], options?: IObjectOptions): IGroup,
		fromObject(object: any, callback: (group: IGroup) => any): void
	}

	declare interface IImageOptions {
		crossOrigin: string,
		alignX: string,
		alignY: string,
		meetOrSlice: string,
		filters: IBaseFilter[]
	}

	declare interface IImage {
		initialize(element?: string | HTMLImageElement, options?: IImageOptions): void,
		applyFilters(callback: Function): void,
		clone(callback?: Function, propertiesToInclude?: any[]): IObject,
		complexity(): number,
		getElement(): HTMLImageElement,
		getOriginalSize(): {
		width: number,
		height: number
	},
		getSrc(): string,
		render(ctx: CanvasRenderingContext2D, noTransform: boolean): void,
		setElement(element: HTMLImageElement, callback: Function, options: IImageOptions): IImage,
		setCrossOrigin(value: string): IImage,
		toObject(propertiesToInclude?: any[]): any,
		toString(): string,
		toSVG(reviver?: Function): string,
		setSrc(src: string, callback: Function, options: IImageOptions): IImage
	}

	declare interface IImageStatic {
		new (element: HTMLImageElement, objObjects: IObjectOptions): IImage,
		fromURL(
		url: string, callback?: (image: IImage) => any, objObjects?: IObjectOptions
	): IImage,
		fromObject(object: any, callback: (image: IImage) => {
		
	}): void,
		fromElement(element: SVGElement, callback: Function, options?: IImageOptions): void,
		prototype: any,
		CSS_CANVAS: string,
		filters: IAllFilters
	}

	declare interface ILineOptions {
		x1: number,
		x2: number,
		y1: number,
		y2: number
	}

	declare interface ILine {
		complexity(): number,
		initialize(points?: number[], options?: ILineOptions): ILine,
		toObject(propertiesToInclude: any[]): any,
		toSVG(reviver?: Function): string
	}

	declare interface ILineStatic {
		ATTRIBUTE_NAMES: string[],
		fromElement(element: SVGElement, options?: ILineOptions): ILine,
		fromObject(object: any): ILine,
		prototype: any,
		new (points?: number[], objObjects?: IObjectOptions): ILine
	}

	declare interface IObjectOptions {
		type?: string,
		originX?: string,
		originY?: string,
		top?: number,
		left?: number,
		width?: number,
		height?: number,
		scaleX?: number,
		scaleY?: number,
		flipX?: boolean,
		flipY?: boolean,
		opacity?: number,
		angle?: number,
		cornerSize?: number,
		transparentCorners?: boolean,
		hoverCursor?: string,
		padding?: number,
		borderColor?: string,
		cornerColor?: string,
		centeredScaling?: boolean,
		centeredRotation?: boolean,
		fill?: string,
		fillRule?: string,
		globalCompositeOperation?: string,
		backgroundColor?: string,
		stroke?: string,
		strokeWidth?: number,
		strokeDashArray?: any[],
		strokeLineCap?: string,
		strokeLineJoin?: string,
		strokeMiterLimit?: number,
		shadow?: IShadow | string,
		borderOpacityWhenMoving?: number,
		borderScaleFactor?: number,
		transformMatrix?: any[],
		minScaleLimit?: number,
		selectable?: boolean,
		evented?: boolean,
		visible?: boolean,
		hasControls?: boolean,
		hasBorders?: boolean,
		hasRotatingPoint?: boolean,
		rotatingPointOffset?: number,
		perPixelTargetFind?: boolean,
		includeDefaultValues?: boolean,
		clipTo?: Function,
		lockMovementX?: boolean,
		lockMovementY?: boolean,
		lockRotation?: boolean,
		lockScalingX?: boolean,
		lockScalingY?: boolean,
		lockUniScaling?: boolean,
		lockScalingFlip?: boolean,
		name?: string,
		data?: any
	}

	declare interface IObject {
		getCurrentWidth(): number,
		getCurrentHeight(): number,
		getAngle(): number,
		setAngle(value: number): IObject,
		getBorderColor(): string,
		setBorderColor(value: string): IObject,
		getBorderScaleFactor(): number,
		getCornersize(): number,
		setCornersize(value: number): IObject,
		getFill(): string,
		setFill(value: string): IObject,
		getFillRule(): string,
		setFillRule(value: string): IObject,
		getFlipX(): boolean,
		setFlipX(value: boolean): IObject,
		getFlipY(): boolean,
		setFlipY(value: boolean): IObject,
		getHeight(): number,
		setHeight(value: number): IObject,
		getLeft(): number,
		setLeft(value: number): IObject,
		getOpacity(): number,
		setOpacity(value: number): IObject,
		overlayFill: string,
		getOverlayFill(): string,
		setOverlayFill(value: string): IObject,
		getScaleX(): number,
		setScaleX(value: number): IObject,
		getScaleY(): number,
		setScaleY(value: number): IObject,
		setShadow(options: any): IObject,
		getShadow(): IObject,
		stateProperties: any[],
		getTop(): number,
		setTop(value: number): IObject,
		getWidth(): number,
		setWidth(value: number): IObject,
		setOptions(options: any): void,
		transform(ctx: CanvasRenderingContext2D, fromLeft: boolean): void,
		toObject(propertiesToInclude?: any[]): any,
		toDatalessObject(propertiesToInclude?: any[]): any,
		toString(): string,
		get(property: string): any,
		set(key: string, value: any | Function): IObject,
		set(key: any): IObject,
		toggle(property: string): IObject,
		setSourcePath(value: string): IObject,
		getViewportTransform(): boolean,
		render(ctx: CanvasRenderingContext2D, noTransform?: boolean): void,
		clone(callback: Function, propertiesToInclude?: any[]): IObject,
		cloneAsImage(callback: (image: IImage) => any): IObject,
		toDataURL(options: IDataURLOptions): string,
		isType(type: string): boolean,
		complexity(): number,
		toJSON(propertiesToInclude?: any[]): any,
		setGradient(property: string, options: IGradientOptions): IObject,
		setPatternFill(options: IFillOptions): IObject,
		setShadow(options?: string): IObject,
		setShadow(options: IShadow): IObject,
		setColor(color: string): IObject,
		setAngle(angle: number): IObject,
		rotate(angle: number): IObject,
		centerH(): void,
		centerV(): void,
		center(): void,
		remove(): IObject,
		getLocalPointer(e: Event, pointer: any): any,
		setOptions(options: any): void,
		setSourcePath(value: string): IObject,
		getSvgStyles(): string,
		getSvgTransform(): string,
		getSvgTransformMatrix(): string,
		hasStateChanged(): boolean,
		saveState(options?: {
		stateProperties: any[]
	}): IObject,
		setupState(): IObject,
		straighten(): IObject,
		fxStraighten(callbacks: {
		onComplete?: Function,
		onChange: Function
	}): IObject,
		bringForward(intersecting?: boolean): IObject,
		bringToFront(): IObject,
		sendBackwards(intersecting?: boolean): IObject,
		sendToBack(): IObject,
		moveTo(index: number): IObject,
		translateToCenterPoint(point: IPoint, originX: string, originY: string): IPoint,
		translateToOriginPoint(center: IPoint, originX: string, originY: string): IPoint,
		getCenterPoint(): IPoint,
		getPointByOrigin(): IPoint,
		toLocalPoint(point: IPoint, originX: string, originY: string): IPoint,
		setPositionByOrigin(pos: IPoint, originX: string, originY: string): void,
		adjustPosition(to: string): void,
		drawBorders(context: CanvasRenderingContext2D): IObject,
		drawCorners(context: CanvasRenderingContext2D): IObject,
		isControlVisible(controlName: string): boolean,
		setControlVisible(controlName: string, visible: boolean): IObject,
		setControlsVisibility(
		options?: {
		bl?: boolean,
		br?: boolean,
		mb?: boolean,
		ml?: boolean,
		mr?: boolean,
		mt?: boolean,
		tl?: boolean,
		tr?: boolean,
		mtr?: boolean
	}
	): IObject,
		setCoords(): IObject,
		getBoundingRect(): {
		left: number,
		top: number,
		width: number,
		height: number
	},
		isContainedWithinObject(other: IObject): boolean,
		isContainedWithinRect(pointTL: any, pointBR: any): boolean,
		containsPoint(point: IPoint): boolean,
		scale(value: number): IObject,
		scaleToHeight(value: number): IObject,
		scaleToWidth(value: number): IObject,
		intersectsWithObject(other: IObject): boolean,
		intersectsWithRect(pointTL: any, pointBR: any): boolean
	}

	declare interface IObjectStatic {
		prototype: any
	}

	declare interface IPathOptions {
		path?: any[],
		minX?: number,
		minY?: number
	}

	declare interface IPath {
		initialize(path?: any[], options?: IPathOptions): IPath,
		complexity(): number,
		render(ctx: CanvasRenderingContext2D, noTransform: boolean): void,
		toDatalessObject(propertiesToInclude?: any[]): any,
		toObject(propertiesToInclude?: any[]): any,
		toString(): string,
		toSVG(reviver?: Function): string
	}

	declare interface IPathStatic {
		fromElement(
		element: SVGElement, callback: (path: IPath) => any, options?: IPathOptions
	): void,
		fromObject(object: any, callback: (path: IPath) => any): void,
		new (path?: string | any[], options?: IPathOptions): IPath
	}

	declare interface IPathGroup {
		initialize(paths: IPath[], options?: IObjectOptions): void,
		complexity(): number,
		isSameColor(): boolean,
		render(ctx: CanvasRenderingContext2D): void,
		toDatalessObject(propertiesToInclude?: any[]): any,
		toObject(propertiesToInclude?: any[]): any,
		toString(): string,
		toSVG(reviver?: Function): string,
		getObjects(): IPath[]
	}

	declare interface IPathGroupStatic {
		fromObject(object: any): IPathGroup,
		new (paths: IPath[], options?: IObjectOptions): IPathGroup,
		fromObject(object: any, callback: (group: IPathGroup) => any): void,
		prototype: any
	}

	declare interface IPolygonOptions {
		points?: IPoint[],
		minX?: number,
		minY?: number
	}

	declare interface IPolygon {
		complexity(): number,
		toObject(propertiesToInclude?: any[]): any,
		toSVG(reviver?: Function): string
	}

	declare interface IPolygonStatic {
		ATTRIBUTE_NAMES: string[],
		fromElement(element: SVGElement, options?: IPolygonOptions): IPolygon,
		fromObject(object: any): IPolygon,
		new (
		points: {
		x: number,
		y: number
	}[], options?: IObjectOptions, skipOffset?: boolean
	): IPolygon,
		prototype: any
	}

	declare interface IPolylineOptions {
		points?: IPoint[],
		minX?: number,
		minY?: number
	}

	declare interface IPolyline {
		initialize(points: IPoint[], options?: IPolylineOptions): void,
		complexity(): number,
		toObject(propertiesToInclude?: any[]): any,
		toSVG(reviver?: Function): string
	}

	declare interface IPolylineStatic {
		ATTRIBUTE_NAMES: string[],
		fromElement(element: SVGElement, options?: IPolylineOptions): IPolyline,
		fromObject(object: any): IPolyline,
		new (points: {
		x: number,
		y: number
	}[], options?: IPolylineOptions): IPolyline,
		prototype: any
	}

	declare interface IRectOptions {
		x?: number,
		y?: number,
		rx?: number,
		ry?: number
	}

	declare interface IRect {
		initialize(points?: number[], options?: any): IRect,
		complexity(): number,
		toObject(propertiesToInclude: any[]): any,
		toSVG(reviver?: Function): string
	}

	declare interface IRectStatic {
		ATTRIBUTE_NAMES: string[],
		fromElement(element: SVGElement, options?: IRectOptions): IRect,
		fromObject(object: any): IRect,
		new (options?: IRectOptions): IRect,
		prototype: any
	}

	declare interface ITextOptions {
		fontSize?: number,
		fontWeight?: number | string,
		fontFamily?: string,
		textDecoration?: string,
		textAlign?: string,
		fontStyle?: string,
		lineHeight?: number,
		stroke?: string,
		shadow?: IShadow | string,
		textBackgroundColor?: string,
		path?: string,
		useNative?: Boolean,
		text?: string
	}

	declare interface IText {
		complexity(): number,
		toString(): string,
		render(ctx: CanvasRenderingContext2D, noTransform: boolean): void,
		toObject(propertiesToInclude?: any[]): IObject,
		toSVG(reviver?: Function): string,
		getFontSize(): number,
		setFontSize(fontSize: number): IText,
		getFontWeight(): number | string,
		setFontWeight(fontWeight: string | number): IText,
		getFontFamily(): string,
		setFontFamily(fontFamily: string): IText,
		getText(): string,
		setText(text: string): IText,
		getTextDecoration(): string,
		setTextDecoration(textDecoration: string): IText,
		getFontStyle(): string,
		setFontStyle(fontStyle: string): IText,
		getLineHeight(): number,
		setLineHeight(lineHeight: number): IText,
		getTextAlign(): string,
		setTextAlign(textAlign: string): IText,
		getTextBackgroundColor(): string,
		setTextBackgroundColor(textBackgroundColor: string): IText
	}

	declare interface ITextStatic {
		ATTRIBUTE_NAMES: string[],
		DEFAULT_SVG_FONT_SIZE: number,
		new (text: string, options?: ITextOptions): IText,
		fromElement(element: SVGElement, options?: ITextOptions): IText,
		fromObject(object: any): IText
	}

	declare interface IITextOptions {
		selectionStart?: number,
		selectionEnd?: number,
		selectionColor?: string,
		isEditing?: boolean,
		editable?: boolean,
		editingBorderColor?: string,
		cursorWidth?: number,
		cursorColor?: string,
		cursorDelay?: number,
		cursorDuration?: number,
		styles?: any,
		caching?: boolean
	}

	declare interface IIText {
		isEmptyStyles(): boolean,
		render(ctx: CanvasRenderingContext2D, noTransform: boolean): void,
		toObject(propertiesToInclude?: any[]): IObject,
		setText(value: string): IText,
		setSelectionStart(index: number): void,
		setSelectionEnd(index: number): void,
		getSelectionStyles(startIndex: number, endIndex: number): any,
		setSelectionStyles(styles: any): IText,
		renderCursorOrSelection(): void,
		get2DCursorLocation(selectionStart?: number): void,
		getCurrentCharStyle(lineIndex: number, charIndex: number): any,
		getCurrentCharFontSize(lineIndex: number, charIndex: number): number,
		getCurrentCharColor(lineIndex: number, charIndex: number): string,
		renderCursor(boundaries: any): void,
		renderSelection(chars: string[], boundaries: any): void,
		initBehavior(): void,
		initSelectedHandler(): void,
		initAddedHandler(): void,
		initRemovedHandler(): void,
		initDelayedCursor(restart: boolean): void,
		abortCursorAnimation(): void,
		selectAll(): void,
		getSelectedText(): string,
		findWordBoundaryLeft(startFrom: number): number,
		findWordBoundaryRight(startFrom: number): number,
		findLineBoundaryLeft(startFrom: number): number,
		findLineBoundaryRight(startFrom: number): number,
		getNumNewLinesInSelectedText(): number,
		searchWordBoundary(selectionStart: number, direction: number): number,
		selectWord(selectionStart: number): void,
		selectLine(selectionStart: number): void,
		enterEditing(): IIText,
		initMouseMoveHandler(): void,
		exitEditing(): IIText,
		insertChars(_chars: string, useCopiedStyle?: boolean): void,
		insertNewlineStyleObject(lineIndex: number, charIndex: number, isEndOfLine: boolean): void,
		insertCharStyleObject(lineIndex: number, charIndex: number, isEndOfLine: boolean): void,
		insertStyleObjects(_chars: string, isEndOfLine: boolean, useCopiedStyle?: boolean): void,
		shiftLineStyles(lineIndex: number, offset: number): void,
		removeStyleObject(isBeginningOfLine: boolean, index?: number): void,
		insertNewline(): void
	}

	declare interface IITextStatic {
		new (text: string, options?: IITextOptions): IIText,
		fromObject(object: any): IIText
	}

	declare interface ITriangleOptions {
		
	}

	declare interface ITriangle {
		complexity(): number,
		toSVG(reviver?: Function): string
	}

	declare interface ITriangleStatic {
		new (options?: ITriangleOptions): ITriangle,
		fromObject(object: any): ITriangle
	}

	declare interface IAllFilters {
		BaseFilter: {
		new (options?: any): IBaseFilter
	},
		Blend: {
		new (
		options?: {
		color?: string,
		mode?: string,
		alpha?: number,
		image?: IImage
	}
	): IBlendFilter,
		fromObject(object: any): IBlendFilter
	},
		Brightness: {
		new (options?: {
		brightness: number
	}): IBrightnessFilter,
		fromObject(object: any): IBrightnessFilter
	},
		Convolute: {
		new (options?: {
		opaque?: boolean,
		matrix?: number[]
	}): IConvoluteFilter,
		fromObject(object: any): IConvoluteFilter
	},
		GradientTransparency: {
		new (options?: {
		threshold?: number
	}): IGradientTransparencyFilter,
		fromObject(object: any): IGradientTransparencyFilter
	},
		Grayscale: {
		new (options?: any): IGrayscaleFilter,
		fromObject(object: any): IGrayscaleFilter
	},
		Invert: {
		new (options?: any): IInvertFilter,
		fromObject(object: any): IInvertFilter
	},
		Mask: {
		new (options?: {
		mask?: IImage,
		channel: number
	}): IMaskFilter,
		fromObject(object: any): IMaskFilter
	},
		Multiply: {
		new (options?: {
		color: string
	}): IMultiplyFilter,
		fromObject(object: any): IMultiplyFilter
	},
		Noise: {
		new (options?: {
		noise: number
	}): INoiseFilter,
		fromObject(object: any): INoiseFilter
	},
		Pixelate: {
		new (options?: {
		blocksize?: number
	}): IPixelateFilter,
		fromObject(object: any): IPixelateFilter
	},
		RemoveWhite: {
		new (options?: {
		threshold?: number,
		distance?: number
	}): IRemoveWhiteFilter,
		fromObject(object: any): IRemoveWhiteFilter
	},
		Resize: {
		new (options?: any): IResizeFilter,
		fromObject(object: any): IResizeFilter
	},
		Sepia2: {
		new (options?: any): ISepia2Filter,
		fromObject(object: any): ISepia2Filter
	},
		Sepia: {
		new (options?: any): ISepiaFilter,
		fromObject(object: any): ISepiaFilter
	},
		Tint: {
		new (options?: {
		color?: string,
		opacity?: number
	}): ITintFilter,
		fromObject(object: any): ITintFilter
	}
	}

	declare interface IBaseFilter {
		setOptions(options?: any): void,
		toObject(): any,
		toJSON(): string
	}

	declare interface IBlendFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IBrightnessFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IConvoluteFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IGradientTransparencyFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IGrayscaleFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IInvertFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IMaskFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IMultiplyFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface INoiseFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IPixelateFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IRemoveWhiteFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IResizeFilter {
		resizeType: string,
		scaleX: number,
		scaleY: number,
		lanczosLobes: number,
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface ISepiaFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface ISepia2Filter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface ITintFilter {
		applyTo(canvasEl: HTMLCanvasElement): void
	}

	declare interface IBaseBrush {
		color: string,
		width: number,
		shadow: IShadow | string,
		strokeLineCap: string,
		strokeLineJoin: string,
		strokeDashArray: any[],
		setShadow(options: string | any): IBaseBrush
	}

	declare interface ICircleBrush {
		width: number,
		drawDot(pointer: any): void,
		addPoint(pointer: any): IPoint
	}

	declare interface ISprayBrush {
		width: number,
		density: number,
		dotWidth: number,
		dotWidthVariance: number,
		randomOpacity: boolean,
		optimizeOverlapping: boolean,
		addSprayChunk(pointer: any): void
	}

	declare interface IPatternBrush {
		getPatternSrc(): HTMLCanvasElement,
		getPatternSrcFunction(): string,
		getPattern(): any,
		createPath(pathData: string): IPath
	}

	declare interface IPencilBrush {
		convertPointsToSVGPath(
		points: {
		x: number,
		y: number
	}[], minX?: number, minY?: number
	): string[],
		createPath(pathData: string): IPath
	}

	declare interface IUtilAnimationOptions {
		startValue?: number,
		endValue?: number,
		byValue: number,
		duration?: number,
		onChange?: Function,
		onComplete?: Function,
		easing?: Function
	}

	declare interface IUtilAnimation {
		animate(options?: IUtilAnimationOptions): void,
		requestAnimFrame(callback: Function): void
	}

	declare interface IUtilAminEaseFunction {
		(t: number, b: number, c: number, d: number): number
	}

	declare interface IUtilAnimEase {
		easeInBack: IUtilAminEaseFunction,
		easeInBounce: IUtilAminEaseFunction,
		easeInCirc: IUtilAminEaseFunction,
		easeInCubic: IUtilAminEaseFunction,
		easeInElastic: IUtilAminEaseFunction,
		easeInExpo: IUtilAminEaseFunction,
		easeInOutBack: IUtilAminEaseFunction,
		easeInOutBounce: IUtilAminEaseFunction,
		easeInOutCirc: IUtilAminEaseFunction,
		easeInOutCubic: IUtilAminEaseFunction,
		easeInOutElastic: IUtilAminEaseFunction,
		easeInOutExpo: IUtilAminEaseFunction,
		easeInOutQuad: IUtilAminEaseFunction,
		easeInOutQuart: IUtilAminEaseFunction,
		easeInOutQuint: IUtilAminEaseFunction,
		easeInOutSine: IUtilAminEaseFunction,
		easeInQuad: IUtilAminEaseFunction,
		easeInQuart: IUtilAminEaseFunction,
		easeInQuint: IUtilAminEaseFunction,
		easeInSine: IUtilAminEaseFunction,
		easeOutBack: IUtilAminEaseFunction,
		easeOutBounce: IUtilAminEaseFunction,
		easeOutCirc: IUtilAminEaseFunction,
		easeOutCubic: IUtilAminEaseFunction,
		easeOutElastic: IUtilAminEaseFunction,
		easeOutExpo: IUtilAminEaseFunction,
		easeOutQuad: IUtilAminEaseFunction,
		easeOutQuart: IUtilAminEaseFunction,
		easeOutQuint: IUtilAminEaseFunction,
		easeOutSine: IUtilAminEaseFunction
	}

	declare interface IUtilArc {
		drawArc(ctx: CanvasRenderingContext2D, fx: number, fy: number, coords: number[]): void,
		getBoundsOfArc(
		fx: number, fy: number, rx: number, ry: number, rot: number, large: number, sweep: number, tx: number, ty: number
	): IPoint[],
		getBoundsOfCurve(
		x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number
	): IPoint[]
	}

	declare interface IUtilDomEvent {
		getPointer(event: Event, upperCanvasEl: HTMLCanvasElement): IPoint,
		addListener(element: HTMLElement, eventName: string, handler: Function): void,
		removeListener(element: HTMLElement, eventName: string, handler: Function): void
	}

	declare interface IUtilDomMisc {
		getById(id: string | HTMLElement): HTMLElement,
		toArray(arrayLike: any): any[],
		makeElement(tagName: string, attributes?: any): HTMLElement,
		addClass(element: HTMLElement, classname: string): void,
		wrapElement(
		element: HTMLElement, wrapper: HTMLElement | string, attributes?: any
	): HTMLElement,
		getScrollLeftTop(
		element: HTMLElement, upperCanvasEl: HTMLElement
	): {
		left: number,
		right: number
	},
		getElementOffset(element: HTMLElement): {
		left: number,
		right: number
	},
		getElementStyle(elment: HTMLElement, attr: string): string,
		getScript(url: string, callback: Function): void,
		makeElementUnselectable(element: HTMLElement): HTMLElement,
		makeElementSelectable(element: HTMLElement): HTMLElement
	}

	declare interface IUtilDomRequest {
		request(
		url: string, options?: {
		method?: string,
		onComplete: Function
	}
	): XMLHttpRequest
	}

	declare interface IUtilDomStyle {
		setStyle(element: HTMLElement, styles: any): HTMLElement
	}

	declare interface IUtilArray {
		invoke(array: any[], method: string): any[],
		min(array: any[], byProperty: string): any,
		max(array: any[], byProperty: string): any
	}

	declare interface IUtilClass {
		createClass(parent: Function, properties?: any): void,
		createClass(properties?: any): void
	}

	declare interface IUtilObject {
		extend(destination: any, source: any): any,
		clone(object: any): any
	}

	declare interface IUtilString {
		camelize(string: string): string,
		capitalize(string: string, firstLetterOnly: boolean): string,
		escapeXml(string: string): string
	}

	declare interface IUtilMisc {
		removeFromArray(array: any[], value: any): any[],
		getRandomInt(min: number, max: number): number,
		degreesToRadians(degrees: number): number,
		radiansToDegrees(radians: number): number,
		rotatePoint(point: IPoint, origin: IPoint, radians: number): IPoint,
		transformPoint(p: IPoint, t: any[], ignoreOffset?: boolean): IPoint,
		invertTransform(t: any[]): any[],
		toFixed(number: number, fractionDigits: number): number,
		parseUnit(value: number | string, fontSize?: number): number | string,
		falseFunction(): boolean,
		getKlass(type: string, namespace: string): any,
		resolveNamespace(namespace: string): any,
		loadImage(
		url: string, callback: (image: HTMLImageElement) => {
		
	}, context?: any, crossOrigin?: boolean
	): void,
		enlivenObjects(
		objects: any[], callback: Function, namespace: string, reviver?: Function
	): void,
		groupSVGElements(elements: any[], options?: any, path?: any): IPathGroup,
		populateWithProperties(source: any, destination: any, properties: any): void,
		drawDashedLine(
		ctx: CanvasRenderingContext2D, x: number, y: number, x2: number, y2: number, da: any[]
	): void,
		createCanvasElement(canvasEl?: HTMLCanvasElement): HTMLCanvasElement,
		createImage(): HTMLImageElement,
		createAccessors(klass: any): any,
		clipContext(receiver: IObject, ctx: CanvasRenderingContext2D): void,
		multiplyTransformMatrices(a: any[], b: any[]): any[],
		getFunctionBody(fn: Function): string,
		isTransparent(
		ctx: CanvasRenderingContext2D, x: number, y: number, tolerance: number
	): boolean
	}

	declare interface IUtil {
		ease: IUtilAnimEase,
		array: IUtilArray,
		object: IUtilObject,
		string: IUtilString
	}

	declare function createCanvasForNode(width: number, height: number): ICanvas

	declare function createSVGRefElementsMarkup(canvas: IStaticCanvas): string

	declare function createSVGFontFacesMarkup(objects: IObject[]): string

	declare function loadSVGFromString(
		string: string, callback: (results: IObject[], options: any) => void, reviver?: Function
	): void

	declare function loadSVGFromURL(
		url: string, callback: (results: IObject[], options: any) => void, reviver?: Function
	): void

	declare function getCSSRules(doc: SVGElement): any

	declare function parseElements(elements: any[], callback: Function, options: any, reviver?: Function): void

	declare function parsePointsAttribute(points: string): any[]

	declare function parseStyleAttribute(element: SVGElement): any

	declare function parseElements(elements: any[], callback: Function, options?: any, reviver?: Function): void

	declare function parseAttributes(
		elemen: HTMLElement, attributes: string[], svgUid?: string
	): {
		[key: string]: string
	}

	declare function getGradientDefs(doc: SVGElement): {
		[key: string]: any
	}

	declare function parseFontDeclaration(value: string, oStyle: any): void

	declare function parseSVGDocument(
		doc: SVGElement, callback: (results: IObject[], options: any) => void, reviver?: Function
	): void

	declare function parseTransformAttribute(attributeValue: string): number[]

	declare function log(...values: any[]): void

	declare function warn(...values: any[]): void

		
}