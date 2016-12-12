

declare module 'easeljs' {
		declare interface NativeMouseEvent {
		
	}

			
}

declare module 'npm$namespace$createjs' {
		declare interface SpriteSheetAnimation {
		frames: number[],
		speed: number,
		name: string,
		next: string
	}

	declare interface SpriteSheetFrame {
		image: HTMLImageElement,
		rect: Rectangle
	}

		declare export class AlphaMapFilter extends Filter {
		constructor(alphaMap: HTMLImageElement | HTMLCanvasElement): this;
		alphaMap: HTMLImageElement | HTMLCanvasElement;
		clone(): AlphaMapFilter
	}

	declare export class AlphaMaskFilter extends Filter {
		constructor(mask: HTMLImageElement | HTMLCanvasElement): this;
		mask: HTMLImageElement | HTMLCanvasElement;
		clone(): AlphaMaskFilter
	}

	declare export class Bitmap extends DisplayObject {
		constructor(imageOrUrl: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | Object | string): this;
		image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
		sourceRect: Rectangle;
		clone(): Bitmap
	}

	declare export class ScaleBitmap extends DisplayObject {
		constructor(imageOrUrl: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | Object | string, scale9Grid: Rectangle): this;
		image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
		sourceRect: Rectangle;
		drawWidth: number;
		drawHeight: number;
		scale9Grid: Rectangle;
		snapToPixel: boolean;
		setDrawSize(newWidth: number, newHeight: number): void;
		clone(): ScaleBitmap
	}

	declare export class BitmapText extends DisplayObject {
		constructor(text?: string, spriteSheet?: SpriteSheet): this;
		maxPoolSize: number;
		letterSpacing: number;
		lineHeight: number;
		spaceWidth: number;
		spriteSheet: SpriteSheet;
		text: string
	}

	declare export class BlurFilter extends Filter {
		constructor(blurX?: number, blurY?: number, quality?: number): this;
		blurX: number;
		blurY: number;
		quality: number;
		clone(): BlurFilter
	}

	declare export class ButtonHelper  {
		constructor(target: Sprite, outLabel?: string, overLabel?: string, downLabel?: string, play?: boolean, hitArea?: DisplayObject, hitLabel?: string): this;
		constructor(target: MovieClip, outLabel?: string, overLabel?: string, downLabel?: string, play?: boolean, hitArea?: DisplayObject, hitLabel?: string): this;
		downLabel: string | number;
		outLabel: string | number;
		overLabel: string | number;
		play: boolean;
		target: MovieClip | Sprite;
		enabled: boolean;
		setEnabled(value: boolean): void;
		getEnabled(): boolean;
		toString(): string
	}

	declare export class ColorFilter extends Filter {
		constructor(redMultiplier?: number, greenMultiplier?: number, blueMultiplier?: number, alphaMultiplier?: number, redOffset?: number, greenOffset?: number, blueOffset?: number, alphaOffset?: number): this;
		alphaMultiplier: number;
		alphaOffset: number;
		blueMultiplier: number;
		blueOffset: number;
		greenMultiplier: number;
		greenOffset: number;
		redMultiplier: number;
		redOffset: number;
		clone(): ColorFilter
	}

	declare export class ColorMatrix  {
		constructor(brightness?: number, contrast?: number, saturation?: number, hue?: number): this;
		adjustBrightness(value: number): ColorMatrix;
		adjustColor(
		brightness: number, contrast: number, saturation: number, hue: number
	): ColorMatrix;
		adjustContrast(value: number): ColorMatrix;
		adjustHue(value: number): ColorMatrix;
		adjustSaturation(value: number): ColorMatrix;
		clone(): ColorMatrix;
		concat(...matrix: number[]): ColorMatrix;
		concat(matrix: ColorMatrix): ColorMatrix;
		copy(...matrix: number[]): ColorMatrix;
		copy(matrix: ColorMatrix): ColorMatrix;
		reset(): ColorMatrix;
		setColor(
		brightness: number, contrast: number, saturation: number, hue: number
	): ColorMatrix;
		toArray(): number[];
		toString(): string
	}

	declare export class ColorMatrixFilter extends Filter {
		constructor(matrix: number[] | ColorMatrix): this;
		matrix: number[] | ColorMatrix;
		clone(): ColorMatrixFilter
	}

	declare export class Container extends DisplayObject {
		constructor(): this;
		children: DisplayObject[];
		mouseChildren: boolean;
		numChildren: number;
		tickChildren: boolean;
		addChild<T>(child: T): T;
		addChild<T>(child0: DisplayObject, lastChild: T): T;
		addChild<T>(child0: DisplayObject, child1: DisplayObject, lastChild: T): T;
		addChild<T>(
		child0: DisplayObject, child1: DisplayObject, child2: DisplayObject, lastChild: T
	): T;
		addChild(...children: DisplayObject[]): DisplayObject;
		addChildAt<T>(child: T, index: number): T;
		addChildAt<T>(child0: DisplayObject, lastChild: T, index: number): T;
		addChildAt<T>(
		child0: DisplayObject, child1: DisplayObject, lastChild: T, index: number
	): T;
		addChildAt(...childOrIndex: (DisplayObject | number)[]): DisplayObject;
		clone(recursive?: boolean): Container;
		contains(child: DisplayObject): boolean;
		getChildAt(index: number): DisplayObject;
		getChildByName(name: string): DisplayObject;
		getChildIndex(child: DisplayObject): number;
		getNumChildren(): number;
		getObjectsUnderPoint(x: number, y: number, mode: number): DisplayObject[];
		getObjectUnderPoint(x: number, y: number, mode: number): DisplayObject;
		removeAllChildren(): void;
		removeChild(...child: DisplayObject[]): boolean;
		removeChildAt(...index: number[]): boolean;
		setChildIndex(child: DisplayObject, index: number): void;
		sortChildren(sortFunction: (a: DisplayObject, b: DisplayObject) => number): void;
		swapChildren(child1: DisplayObject, child2: DisplayObject): void;
		swapChildrenAt(index1: number, index2: number): void
	}

	declare export class DisplayObject extends EventDispatcher {
		constructor(): this;
		alpha: number;
		cacheCanvas: HTMLCanvasElement | Object;
		cacheID: number;
		compositeOperation: string;
		cursor: string;
		filters: Filter[];
		hitArea: DisplayObject;
		id: number;
		mask: Shape;
		mouseEnabled: boolean;
		name: string;
		parent: Container;
		regX: number;
		regY: number;
		rotation: number;
		scaleX: number;
		scaleY: number;
		shadow: Shadow;
		skewX: number;
		skewY: number;
		snapToPixel: boolean;
		stage: Stage;
		suppressCrossDomainErrors: boolean;
		tickEnabled: boolean;
		transformMatrix: Matrix2D;
		visible: boolean;
		x: number;
		y: number;
		cache(x: number, y: number, width: number, height: number, scale?: number): void;
		clone(): DisplayObject;
		draw(ctx: CanvasRenderingContext2D, ignoreCache?: boolean): boolean;
		getBounds(): Rectangle;
		getCacheDataURL(): string;
		getConcatenatedDisplayProps(props?: DisplayProps): DisplayProps;
		getConcatenatedMatrix(mtx?: Matrix2D): Matrix2D;
		getMatrix(matrix?: Matrix2D): Matrix2D;
		getStage(): Stage;
		getTransformedBounds(): Rectangle;
		globalToLocal(x: number, y: number, pt?: Point | Object): Point;
		hitTest(x: number, y: number): boolean;
		isVisible(): boolean;
		localToGlobal(x: number, y: number, pt?: Point | Object): Point;
		localToLocal(x: number, y: number, target: DisplayObject, pt?: Point | Object): Point;
		set(props: Object): DisplayObject;
		setBounds(x: number, y: number, width: number, height: number): void;
		setTransform(
		x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number
	): DisplayObject;
		uncache(): void;
		updateCache(compositeOperation?: string): void;
		updateContext(ctx: CanvasRenderingContext2D): void
	}

	declare export class DisplayProps  {
		constructor(visible?: number, alpha?: number, shadow?: number, compositeOperation?: number, matrix?: number): this;
		alpha: number;
		compositeOperation: string;
		matrix: Matrix2D;
		shadow: Shadow;
		visible: boolean;
		append(
		visible: boolean, alpha: number, shadow: Shadow, compositeOperation: string, matrix?: Matrix2D
	): DisplayProps;
		clone(): DisplayProps;
		identity(): DisplayProps;
		prepend(
		visible: boolean, alpha: number, shadow: Shadow, compositeOperation: string, matrix?: Matrix2D
	): DisplayProps;
		setValues(
		visible?: boolean, alpha?: number, shadow?: number, compositeOperation?: number, matrix?: number
	): DisplayProps
	}

	declare export class DOMElement extends DisplayObject {
		constructor(htmlElement: HTMLElement): this;
		htmlElement: HTMLElement;
		clone(): DisplayObject;
		set(props: Object): DOMElement;
		setTransform(
		x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number
	): DOMElement
	}

	declare export class EaselJS  {
		buildDate: string;
		version: string
	}

	declare export class Filter  {
		constructor(): this;
		applyFilter(
		ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number
	): boolean;
		clone(): Filter;
		getBounds(): Rectangle;
		toString(): string
	}

	declare export class Graphics  {
		constructor(): this;
		BASE_64: Object;
		beginCmd: Graphics.BeginPath;
		command: Object;
		instructions: Object[];
		STROKE_CAPS_MAP: string[];
		STROKE_JOINTS_MAP: string[];
		append(command: Object, clean?: boolean): Graphics;
		arc(
		x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean
	): Graphics;
		arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
		beginBitmapFill(image: Object, repetition?: string, matrix?: Matrix2D): Graphics;
		beginBitmapStroke(image: Object, repetition?: string): Graphics;
		beginFill(color: string): Graphics;
		beginLinearGradientFill(
		colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number
	): Graphics;
		beginLinearGradientStroke(
		colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number
	): Graphics;
		beginRadialGradientFill(
		colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number
	): Graphics;
		beginRadialGradientStroke(
		colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number
	): Graphics;
		beginStroke(color: string): Graphics;
		bezierCurveTo(
		cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number
	): Graphics;
		clear(): Graphics;
		clone(): Graphics;
		closePath(): Graphics;
		curveTo(cpx: number, cpy: number, x: number, y: number): Graphics;
		decodePath(str: string): Graphics;
		draw(ctx: CanvasRenderingContext2D): void;
		drawAsPath(ctx: CanvasRenderingContext2D): void;
		drawCircle(x: number, y: number, radius: number): Graphics;
		drawEllipse(x: number, y: number, w: number, h: number): Graphics;
		drawPolyStar(
		x: number, y: number, radius: number, sides: number, pointSize: number, angle: number
	): Graphics;
		drawRect(x: number, y: number, w: number, h: number): Graphics;
		drawRoundRect(x: number, y: number, w: number, h: number, radius: number): Graphics;
		drawRoundRectComplex(
		x: number, y: number, w: number, h: number, radiusTL: number, radiusTR: number, radiusBR: number, radisBL: number
	): Graphics;
		endFill(): Graphics;
		endStroke(): Graphics;
		getHSL(hue: number, saturation: number, lightness: number, alpha?: number): string;
		getInstructions(): Object[];
		getRGB(r: number, g: number, b: number, alpha?: number): string;
		inject(callback: (data: any) => any, data: any): Graphics;
		isEmpty(): boolean;
		lineTo(x: number, y: number): Graphics;
		moveTo(x: number, y: number): Graphics;
		quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): Graphics;
		rect(x: number, y: number, w: number, h: number): Graphics;
		setStrokeStyle(
		thickness: number, caps?: string | number, joints?: string | number, miterLimit?: number, ignoreScale?: boolean
	): Graphics;
		setStrokeDash(segments?: number[], offset?: number): Graphics;
		store(): Graphics;
		toString(): string;
		unstore(): Graphics;
		a(
		x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean
	): Graphics;
		at(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
		bf(image: Object, repetition?: string, matrix?: Matrix2D): Graphics;
		bs(image: Object, repetition?: string): Graphics;
		f(color: string): Graphics;
		lf(
		colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number
	): Graphics;
		ls(
		colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number
	): Graphics;
		rf(
		colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number
	): Graphics;
		rs(
		colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number
	): Graphics;
		s(color: string): Graphics;
		bt(
		cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number
	): Graphics;
		c(): Graphics;
		cp(): Graphics;
		p(str: string): Graphics;
		dc(x: number, y: number, radius: number): Graphics;
		de(x: number, y: number, w: number, h: number): Graphics;
		dp(
		x: number, y: number, radius: number, sides: number, pointSize: number, angle: number
	): Graphics;
		dr(x: number, y: number, w: number, h: number): Graphics;
		rr(x: number, y: number, w: number, h: number, radius: number): Graphics;
		rc(
		x: number, y: number, w: number, h: number, radiusTL: number, radiusTR: number, radiusBR: number, radisBL: number
	): Graphics;
		ef(): Graphics;
		es(): Graphics;
		lt(x: number, y: number): Graphics;
		mt(x: number, y: number): Graphics;
		qt(cpx: number, cpy: number, x: number, y: number): Graphics;
		r(x: number, y: number, w: number, h: number): Graphics;
		ss(
		thickness: number, caps?: string | number, joints?: string | number, miterLimit?: number, ignoreScale?: boolean
	): Graphics;
		sd(segments?: number[], offset?: number): Graphics
	}

	declare export class Matrix2D  {
		constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): this;
		a: number;
		b: number;
		c: number;
		d: number;
		DEG_TO_RAD: number;
		identity: Matrix2D;
		tx: number;
		ty: number;
		append(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
		appendMatrix(matrix: Matrix2D): Matrix2D;
		appendTransform(
		x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number
	): Matrix2D;
		clone(): Matrix2D;
		copy(matrix: Matrix2D): Matrix2D;
		decompose(
		
	): {
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		rotation: number,
		skewX: number,
		skewY: number
	};
		decompose(target: Object): Matrix2D;
		equals(matrix: Matrix2D): boolean;
		identity(): Matrix2D;
		invert(): Matrix2D;
		isIdentity(): boolean;
		prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
		prependMatrix(matrix: Matrix2D): Matrix2D;
		prependTransform(
		x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number
	): Matrix2D;
		rotate(angle: number): Matrix2D;
		scale(x: number, y: number): Matrix2D;
		setValues(
		a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number
	): Matrix2D;
		skew(skewX: number, skewY: number): Matrix2D;
		toString(): string;
		transformPoint(x: number, y: number, pt?: Point | Object): Point;
		translate(x: number, y: number): Matrix2D
	}

	declare export class MouseEvent extends Event {
		constructor(type: string, bubbles: boolean, cancelable: boolean, stageX: number, stageY: number, nativeEvent: NativeMouseEvent, pointerID: number, primary: boolean, rawX: number, rawY: number): this;
		isTouch: boolean;
		localX: number;
		localY: number;
		nativeEvent: NativeMouseEvent;
		pointerID: number;
		primary: boolean;
		rawX: number;
		rawY: number;
		stageX: number;
		stageY: number;
		mouseMoveOutside: boolean;
		clone(): MouseEvent;
		addEventListener(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): Function;
		addEventListener(
		type: string, listener: (eventObj: Object) => void, useCapture?: boolean
	): Function;
		addEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): Object;
		addEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): Object;
		dispatchEvent(eventObj: Object | string | Event, target?: Object): boolean;
		hasEventListener(type: string): boolean;
		off(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): void;
		off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
		off(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): void;
		off(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): void;
		off(type: string, listener: Function, useCapture?: boolean): void;
		on(
		type: string, listener: (eventObj: Object) => boolean, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Function;
		on(
		type: string, listener: (eventObj: Object) => void, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Function;
		on(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Object;
		on(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Object;
		removeAllEventListeners(type?: string): void;
		removeEventListener(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): void;
		removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
		removeEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): void;
		removeEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		toString(): string;
		willTrigger(type: string): boolean
	}

	declare export class MovieClip extends Container {
		constructor(mode?: string, startPosition?: number, loop?: boolean, labels?: Object): this;
		actionsEnabled: boolean;
		autoReset: boolean;
		buildDate: string;
		currentFrame: number;
		totalFrames: number;
		currentLabel: string;
		frameBounds: Rectangle[];
		framerate: number;
		INDEPENDENT: string;
		labels: Object[];
		loop: boolean;
		mode: string;
		paused: boolean;
		SINGLE_FRAME: string;
		startPosition: number;
		SYNCHED: string;
		timeline: Timeline;
		duration: number;
		version: string;
		advance(time?: number): void;
		clone(): MovieClip;
		getCurrentLabel(): string;
		getLabels(): Object[];
		gotoAndPlay(positionOrLabel: string | number): void;
		gotoAndStop(positionOrLabel: string | number): void;
		play(): void;
		stop(): void
	}

	declare export class MovieClipPlugin  {
		tween(
		tween: Tween, prop: string, value: string | number | boolean, startValues: any[], endValues: any[], ratio: number, wait: Object, end: Object
	): void
	}

	declare export class Point  {
		constructor(x?: number, y?: number): this;
		x: number;
		y: number;
		clone(): Point;
		copy(point: Point): Point;
		setValues(x?: number, y?: number): Point;
		toString(): string
	}

	declare export class Rectangle  {
		constructor(x?: number, y?: number, width?: number, height?: number): this;
		height: number;
		width: number;
		x: number;
		y: number;
		clone(): Rectangle;
		contains(x: number, y: number, width?: number, height?: number): boolean;
		copy(rectangle: Rectangle): Rectangle;
		extend(x: number, y: number, width?: number, height?: number): Rectangle;
		intersection(rect: Rectangle): Rectangle;
		intersects(rect: Rectangle): boolean;
		isEmpty(): boolean;
		setValues(x?: number, y?: number, width?: number, height?: number): Rectangle;
		toString(): string;
		union(rect: Rectangle): Rectangle
	}

	declare export class Shadow  {
		constructor(color: string, offsetX: number, offsetY: number, blur: number): this;
		blur: number;
		color: string;
		identity: Shadow;
		offsetX: number;
		offsetY: number;
		clone(): Shadow;
		toString(): string
	}

	declare export class Shape extends DisplayObject {
		constructor(graphics?: Graphics): this;
		graphics: Graphics;
		clone(recursive?: boolean): Shape;
		set(props: Object): Shape;
		setTransform(
		x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number
	): Shape
	}

	declare export class Sprite extends DisplayObject {
		constructor(spriteSheet: SpriteSheet, frameOrAnimation?: string | number): this;
		currentAnimation: string;
		currentAnimationFrame: number;
		currentFrame: number;
		framerate: number;
		offset: number;
		paused: boolean;
		spriteSheet: SpriteSheet;
		advance(time?: number): void;
		clone(): Sprite;
		getBounds(): Rectangle;
		gotoAndPlay(frameOrAnimation: string | number): void;
		gotoAndStop(frameOrAnimation: string | number): void;
		play(): void;
		set(props: Object): Sprite;
		setTransform(
		x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number
	): Sprite;
		stop(): void
	}

	declare export class SpriteContainer extends Container {
		constructor(spriteSheet?: SpriteSheet): this;
		spriteSheet: SpriteSheet
	}

	declare export class SpriteSheet extends EventDispatcher {
		constructor(data: Object): this;
		animations: string[];
		complete: boolean;
		framerate: number;
		clone(): SpriteSheet;
		getAnimation(name: string): SpriteSheetAnimation;
		getAnimations(): string[];
		getFrame(frameIndex: number): SpriteSheetFrame;
		getFrameBounds(frameIndex: number, rectangle?: Rectangle): Rectangle;
		getNumFrames(animation: string): number
	}

	declare export class SpriteSheetBuilder extends EventDispatcher {
		constructor(): this;
		maxHeight: number;
		maxWidth: number;
		padding: number;
		progress: number;
		scale: number;
		spriteSheet: SpriteSheet;
		timeSlice: number;
		addAnimation(
		name: string, frames: number[], next?: string | boolean, frequency?: number
	): void;
		addFrame(
		source: DisplayObject, sourceRect?: Rectangle, scale?: number, setupFunction?: () => any, setupData?: Object
	): number;
		addMovieClip(
		source: MovieClip, sourceRect?: Rectangle, scale?: number, setupFunction?: () => any, setupData?: Object, labelFunction?: () => any
	): void;
		build(): SpriteSheet;
		buildAsync(timeSlice?: number): void;
		clone(): void;
		stopAsync(): void
	}

	declare export class SpriteSheetUtils  {
		addFlippedFrames(
		spriteSheet: SpriteSheet, horizontal?: boolean, vertical?: boolean, both?: boolean
	): void;
		extractFrame(spriteSheet: SpriteSheet, frameOrAnimation: number | string): HTMLImageElement;
		mergeAlpha(
		rgbImage: HTMLImageElement, alphaImage: HTMLImageElement, canvas?: HTMLCanvasElement
	): HTMLCanvasElement
	}

	declare export class SpriteStage extends Stage {
		constructor(canvas: HTMLCanvasElement | string, preserveDrawingBuffer?: boolean, antialias?: boolean): this;
		INDICES_PER_BOX: number;
		isWebGL: boolean;
		MAX_BOXES_POINTS_INCREMENT: number;
		MAX_INDEX_SIZE: number;
		NUM_VERTEX_PROPERTIES: number;
		NUM_VERTEX_PROPERTIES_PER_BOX: number;
		POINTS_PER_BOX: number;
		clearImageTexture(image: Object): void;
		updateViewport(width: number, height: number): void
	}

	declare export class Stage extends Container {
		constructor(canvas: HTMLCanvasElement | string | Object): this;
		autoClear: boolean;
		canvas: HTMLCanvasElement | Object;
		drawRect: Rectangle;
		handleEvent: Function;
		mouseInBounds: boolean;
		mouseMoveOutside: boolean;
		mouseX: number;
		mouseY: number;
		nextStage: Stage;
		preventSelection: boolean;
		snapToPixelEnabled: boolean;
		tickOnUpdate: boolean;
		clear(): void;
		clone(): Stage;
		enableDOMEvents(enable?: boolean): void;
		enableMouseOver(frequency?: number): void;
		tick(props?: Object): void;
		toDataURL(backgroundColor: string, mimeType: string): string;
		update(...arg: any[]): void
	}

	declare export class Text extends DisplayObject {
		constructor(text?: string, font?: string, color?: string): this;
		color: string;
		font: string;
		lineHeight: number;
		lineWidth: number;
		maxWidth: number;
		outline: number;
		text: string;
		textAlign: string;
		textBaseline: string;
		clone(): Text;
		getMeasuredHeight(): number;
		getMeasuredLineHeight(): number;
		getMeasuredWidth(): number;
		getMetrics(): Object;
		set(props: Object): Text;
		setTransform(
		x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number
	): Text
	}

	declare export class Ticker  {
		framerate: number;
		interval: number;
		maxDelta: number;
		paused: boolean;
		RAF: string;
		RAF_SYNCHED: string;
		TIMEOUT: string;
		timingMode: string;
		useRAF: boolean;
		getEventTime(runTime?: boolean): number;
		getFPS(): number;
		getInterval(): number;
		getMeasuredFPS(ticks?: number): number;
		getMeasuredTickTime(ticks?: number): number;
		getPaused(): boolean;
		getTicks(pauseable?: boolean): number;
		getTime(runTime?: boolean): number;
		init(): void;
		reset(): void;
		setFPS(value: number): void;
		setInterval(interval: number): void;
		setPaused(value: boolean): void;
		addEventListener(type: string, listener: Stage, useCapture?: boolean): Stage;
		addEventListener(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): Function;
		addEventListener(
		type: string, listener: (eventObj: Object) => void, useCapture?: boolean
	): Function;
		addEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): Object;
		addEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): Object;
		dispatchEvent(eventObj: Object | string | Event, target?: Object): boolean;
		hasEventListener(type: string): boolean;
		off(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): void;
		off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
		off(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): void;
		off(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): void;
		off(type: string, listener: Function, useCapture?: boolean): void;
		on(
		type: string, listener: (eventObj: Object) => boolean, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Function;
		on(
		type: string, listener: (eventObj: Object) => void, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Function;
		on(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Object;
		on(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Object;
		removeAllEventListeners(type?: string): void;
		removeEventListener(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): void;
		removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
		removeEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): void;
		removeEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		toString(): string;
		willTrigger(type: string): boolean
	}

	declare export class TickerEvent  {
		target: Object;
		type: string;
		paused: boolean;
		delta: number;
		time: number;
		runTime: number
	}

	declare export class Touch  {
		disable(stage: Stage): void;
		enable(stage: Stage, singleTouch?: boolean, allowDefault?: boolean): boolean;
		isSupported(): boolean
	}

	declare export class UID  {
		get(): number
	}

	
}

declare module 'Graphics' {
				declare export class Arc  {
		constructor(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: number): this;
		anticlockwise: number;
		endAngle: number;
		radius: number;
		startAngle: number;
		x: number;
		y: number
	}

	declare export class ArcTo  {
		constructor(x1: number, y1: number, x2: number, y2: number, radius: number): this;
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		radius: number
	}

	declare export class BeginPath  {
		
	}

	declare export class BezierCurveTo  {
		constructor(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
		cp1x: number;
		cp1y: number;
		cp2x: number;
		cp2y: number;
		x: number;
		y: number
	}

	declare export class Circle  {
		constructor(x: number, y: number, radius: number): this;
		x: number;
		y: number;
		radius: number
	}

	declare export class ClosePath  {
		
	}

	declare export class Fill  {
		constructor(style: Object, matrix?: Matrix2D): this;
		style: Object;
		matrix: Matrix2D;
		bitmap(image: HTMLImageElement, repetition?: string): Fill;
		linearGradient(
		colors: number[], ratios: number[], x0: number, y0: number, x1: number, y1: number
	): Fill;
		radialGradient(
		colors: number[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number
	): Fill
	}

	declare export class LineTo  {
		constructor(x: number, y: number): this;
		x: number;
		y: number
	}

	declare export class MoveTo  {
		constructor(x: number, y: number): this;
		x: number;
		y: number
	}

	declare export class PolyStar  {
		constructor(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): this;
		angle: number;
		pointSize: number;
		radius: number;
		sides: number;
		x: number;
		y: number
	}

	declare export class QuadraticCurveTo  {
		constructor(cpx: number, cpy: number, x: number, y: number): this;
		cpx: number;
		cpy: number;
		x: number;
		y: number
	}

	declare export class Rect  {
		constructor(x: number, y: number, w: number, h: number): this;
		x: number;
		y: number;
		w: number;
		h: number
	}

	declare export class RoundRect  {
		constructor(x: number, y: number, w: number, h: number, radiusTL: number, radiusTR: number, radiusBR: number, radiusBL: number): this;
		x: number;
		y: number;
		w: number;
		h: number;
		radiusTL: number;
		radiusTR: number;
		radiusBR: number;
		radiusBL: number
	}

	declare export class Stroke  {
		constructor(style: Object, ignoreScale: boolean): this;
		style: Object;
		ignoreScale: boolean;
		bitmap(image: HTMLImageElement, repetition?: string): Stroke;
		linearGradient(
		colors: number[], ratios: number[], x0: number, y0: number, x1: number, y1: number
	): Stroke;
		radialGradient(
		colors: number[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number
	): Stroke
	}

	declare export class StrokeStyle  {
		constructor(width: number, caps: string, joints: number, miterLimit: number): this;
		caps: string;
		joints: string;
		miterLimit: number;
		width: number
	}

	
}