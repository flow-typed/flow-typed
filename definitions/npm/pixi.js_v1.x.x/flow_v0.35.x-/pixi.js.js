

declare module 'pixi.js' {
				declare class PIXI  {
		VERSION: string;
		PI_2: number;
		RAD_TO_DEG: number;
		DEG_TO_RAD: number;
		TARGET_FPMS: number;
		RENDERER_TYPE: {
		UNKNOWN: number,
		WEBGL: number,
		CANVAS: number
	};
		BLEND_MODES: {
		NORMAL: number,
		ADD: number,
		MULTIPLY: number,
		SCREEN: number,
		OVERLAY: number,
		DARKEN: number,
		LIGHTEN: number,
		COLOR_DODGE: number,
		COLOR_BURN: number,
		HARD_LIGHT: number,
		SOFT_LIGHT: number,
		DIFFERENCE: number,
		EXCLUSION: number,
		HUE: number,
		SATURATION: number,
		COLOR: number,
		LUMINOSITY: number
	};
		DRAW_MODES: {
		POINTS: number,
		LINES: number,
		LINE_LOOP: number,
		LINE_STRIP: number,
		TRIANGLES: number,
		TRIANGLE_STRIP: number,
		TRIANGLE_FAN: number
	};
		SCALE_MODES: {
		DEFAULT: number,
		LINEAR: number,
		NEAREST: number
	};
		RETINA_PREFIX: string;
		RESOLUTION: number;
		FILTER_RESOLUTION: number;
		DEFAULT_RENDER_OPTIONS: {
		view: HTMLCanvasElement,
		resolution: number,
		antialias: boolean,
		forceFXAA: boolean,
		autoResize: boolean,
		transparent: boolean,
		backgroundColor: number,
		clearBeforeRender: boolean,
		preserveDrawingBuffer: boolean,
		roundPixels: boolean
	};
		SHAPES: {
		POLY: number,
		RECT: number,
		CIRC: number,
		ELIP: number,
		RREC: number
	};
		SPRITE_BATCH_SIZE: number
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$PIXI' {
		declare export interface GraphicsRenderer {
		
	}

	declare export interface WebGLGraphicsData {
		
	}

	declare export interface HitArea {
		contains(x: number, y: number): boolean
	}

	declare export interface ParticleContainerProperties {
		scale?: boolean,
		position?: boolean,
		rotation?: boolean,
		uvs?: boolean,
		alpha?: boolean
	}

	declare export interface ParticleBuffer {
		gl: WebGLRenderingContext,
		vertSize: number,
		vertByteSize: number,
		size: number,
		dynamicProperties: any[],
		staticProperties: any[],
		staticStride: number,
		staticBuffer: any,
		staticData: any,
		dynamicStride: number,
		dynamicBuffer: any,
		dynamicData: any,
		initBuffers(): void,
		bind(): void,
		destroy(): void
	}

	declare export interface ParticleRenderer {
		
	}

	declare export interface ParticleShader {
		
	}

	declare export interface RendererOptions {
		view?: HTMLCanvasElement,
		transparent?: boolean,
		antialias?: boolean,
		autoResize?: boolean,
		resolution?: number,
		clearBeforeRendering?: boolean,
		preserveDrawingBuffer?: boolean,
		forceFXAA?: boolean,
		roundPixels?: boolean,
		backgroundColor?: number
	}

	declare export interface StencilMaskStack {
		stencilStack: any[],
		reverse: boolean,
		count: number
	}

	declare export interface Quad {
		gl: WebGLRenderingContext,
		vertices: number[],
		uvs: number[],
		colors: number[],
		indices: number[],
		vertexBuffer: WebGLBuffer,
		indexBuffer: WebGLBuffer,
		map(rect: Rectangle, rect2: Rectangle): void,
		upload(): void,
		destroy(): void
	}

	declare export interface TextStyle {
		font?: string,
		fill?: string | number,
		align?: string,
		stroke?: string | number,
		strokeThickness?: number,
		wordWrap?: boolean,
		wordWrapWidth?: number,
		lineHeight?: number,
		dropShadow?: boolean,
		dropShadowColor?: string | number,
		dropShadowAngle?: number,
		dropShadowDistance?: number,
		padding?: number,
		textBaseline?: string,
		lineJoin?: string,
		miterLimit?: number
	}

	declare export function autoDetectRenderer(
		width: number, height: number, options?: PIXI.RendererOptions, noWebGL?: boolean
	): PIXI.WebGLRenderer | PIXI.CanvasRenderer

	declare export class EventEmitter  {
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		on(event: string, fn: Function, context?: any): EventEmitter;
		once(event: string, fn: Function, context?: any): EventEmitter;
		removeListener(event: string, fn?: Function, context?: any, once?: boolean): EventEmitter;
		removeAllListeners(event?: string): EventEmitter;
		off(event: string, fn?: Function, context?: any, once?: boolean): EventEmitter;
		addListener(event: string, fn: Function, context?: any): EventEmitter
	}

	declare export class DisplayObject extends EventEmitter, interaction$InteractiveTarget {
		_originalRenderWebGL: WebGLRenderer;
		_originalRenderCanvas: CanvasRenderer;
		_originalUpdateTransform: boolean;
		_originalHitTest: any;
		_cachedSprite: any;
		_originalDestroy: any;
		cacheAsBitmap: boolean;
		_renderCachedWebGL(renderer: WebGLRenderer): void;
		_initCachedDisplayObject(renderer: WebGLRenderer): void;
		_renderCachedCanvas(renderer: CanvasRenderer): void;
		_initCachedDisplayObjectCanvas(renderer: CanvasRenderer): void;
		_getCachedBounds(): Rectangle;
		_destroyCachedDisplayObject(): void;
		_cacheAsBitmapDestroy(): void;
		_sr: number;
		_cr: number;
		_bounds: Rectangle;
		_currentBounds: Rectangle;
		_mask: Rectangle;
		_cachedObject: any;
		updateTransform(): void;
		position: Point;
		scale: Point;
		pivot: Point;
		rotation: number;
		renderable: boolean;
		alpha: number;
		visible: boolean;
		parent: Container;
		worldAlpha: number;
		worldTransform: Matrix;
		filterArea: Rectangle;
		x: number;
		y: number;
		worldVisible: boolean;
		mask: Graphics | Sprite;
		filters: AbstractFilter[];
		name: string;
		getBounds(matrix?: Matrix): Rectangle;
		getLocalBounds(): Rectangle;
		toGlobal(position: Point): Point;
		toLocal(position: Point, from?: DisplayObject): Point;
		generateTexture(
		renderer: CanvasRenderer | WebGLRenderer, scaleMode: number, resolution: number
	): Texture;
		setParent(container: Container): Container;
		setTransform(
		x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number
	): DisplayObject;
		destroy(): void;
		getChildByName(name: string): DisplayObject;
		getGlobalPosition(point: Point): Point;
		interactive: boolean;
		buttonMode: boolean;
		interactiveChildren: boolean;
		defaultCursor: string;
		hitArea: HitArea;
		on(
		event: "click", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "mousedown", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "mouseout", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "mouseover", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "mouseup", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "mouseclick", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "mouseupoutside", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "rightclick", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "rightdown", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "rightup", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "rightupoutside", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "tap", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "touchend", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "touchendoutside", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "touchmove", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(
		event: "touchstart", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(event: string, fn: Function, context?: any): EventEmitter;
		once(
		event: "click", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "mousedown", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "mouseout", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "mouseover", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "mouseup", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "mouseclick", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "mouseupoutside", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "rightclick", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "rightdown", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "rightup", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "rightupoutside", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "tap", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "touchend", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "touchendoutside", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "touchmove", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(
		event: "touchstart", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(event: string, fn: Function, context?: any): EventEmitter
	}

	declare export class Container extends DisplayObject {
		_renderWebGL(renderer: WebGLRenderer): void;
		_renderCanvas(renderer: CanvasRenderer): void;
		onChildrenChange: () => void;
		children: DisplayObject[];
		width: number;
		height: number;
		addChild(...child: DisplayObject[]): DisplayObject;
		addChildAt(child: DisplayObject, index: number): DisplayObject;
		swapChildren(child: DisplayObject, child2: DisplayObject): void;
		getChildIndex(child: DisplayObject): number;
		setChildIndex(child: DisplayObject, index: number): void;
		getChildAt(index: number): DisplayObject;
		removeChild(child: DisplayObject): DisplayObject;
		removeChildAt(index: number): DisplayObject;
		removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
		destroy(destroyChildren?: boolean): void;
		generateTexture(
		renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer, resolution?: number, scaleMode?: number
	): Texture;
		renderWebGL(renderer: WebGLRenderer): void;
		renderCanvas(renderer: CanvasRenderer): void;
		once(
		event: "added", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(event: string, fn: Function, context?: any): EventEmitter;
		once(
		event: "removed", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		once(event: string, fn: Function, context?: any): EventEmitter;
		on(
		event: "added", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(event: string, fn: Function, context?: any): EventEmitter;
		on(
		event: "removed", fn: (event: interaction.InteractionEvent) => void, context?: any
	): EventEmitter;
		on(event: string, fn: Function, context?: any): EventEmitter
	}

	declare export class GraphicsData  {
		constructor(lineWidth: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, fill: boolean, shape: Circle | Rectangle | Ellipse | Polygon): this;
		lineWidth: number;
		lineColor: number;
		lineAlpha: number;
		fillColor: number;
		fillAlpha: number;
		fill: boolean;
		shape: Circle | Rectangle | Ellipse | Polygon;
		type: number;
		clone(): GraphicsData;
		_lineTint: number;
		_fillTint: number
	}

	declare export class Graphics extends Container {
		boundsDirty: boolean;
		dirty: boolean;
		glDirty: boolean;
		fillAlpha: number;
		lineWidth: number;
		lineColor: number;
		tint: number;
		blendMode: number;
		isMask: boolean;
		boundsPadding: number;
		clone(): Graphics;
		lineStyle(lineWidth?: number, color?: number, alpha?: number): Graphics;
		moveTo(x: number, y: number): Graphics;
		lineTo(x: number, y: number): Graphics;
		quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
		bezierCurveTo(
		cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number
	): Graphics;
		arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
		arc(
		cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean
	): Graphics;
		beginFill(color: number, alpha?: number): Graphics;
		endFill(): Graphics;
		drawRect(x: number, y: number, width: number, height: number): Graphics;
		drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
		drawCircle(x: number, y: number, radius: number): Graphics;
		drawEllipse(x: number, y: number, width: number, height: number): Graphics;
		drawPolygon(path: number[] | Point[]): Graphics;
		clear(): Graphics;
		generateTexture(
		renderer: WebGLRenderer | CanvasRenderer, resolution?: number, scaleMode?: number
	): Texture;
		getBounds(matrix?: Matrix): Rectangle;
		containsPoint(point: Point): boolean;
		updateLocalBounds(): void;
		drawShape(shape: Circle | Rectangle | Ellipse | Polygon): GraphicsData
	}

	declare export class Point  {
		x: number;
		y: number;
		constructor(x?: number, y?: number): this;
		clone(): Point;
		copy(p: Point): void;
		equals(p: Point): boolean;
		set(x?: number, y?: number): void
	}

	declare export class Matrix  {
		a: number;
		b: number;
		c: number;
		d: number;
		tx: number;
		ty: number;
		fromArray(array: number[]): void;
		toArray(transpose?: boolean, out?: number[]): number[];
		apply(pos: Point, newPos?: Point): Point;
		applyInverse(pos: Point, newPos?: Point): Point;
		translate(x: number, y: number): Matrix;
		scale(x: number, y: number): Matrix;
		rotate(angle: number): Matrix;
		append(matrix: Matrix): Matrix;
		prepend(matrix: Matrix): Matrix;
		invert(): Matrix;
		identity(): Matrix;
		clone(): Matrix;
		copy(matrix: Matrix): Matrix;
		set(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
		setTransform(
		a: number, b: number, c: number, d: number, sr: number, cr: number, cy: number, sy: number, nsx: number, cs: number
	): PIXI.Matrix;
		IDENTITY: Matrix;
		TEMP_MATRIX: Matrix
	}

	declare export class Circle extends HitArea {
		constructor(x?: number, y?: number, radius?: number): this;
		x: number;
		y: number;
		radius: number;
		type: number;
		clone(): Circle;
		contains(x: number, y: number): boolean;
		getBounds(): Rectangle
	}

	declare export class Ellipse extends HitArea {
		constructor(x?: number, y?: number, width?: number, height?: number): this;
		x: number;
		y: number;
		width: number;
		height: number;
		type: number;
		clone(): Ellipse;
		contains(x: number, y: number): boolean;
		getBounds(): Rectangle
	}

	declare export class Polygon extends HitArea {
		constructor(points: Point[]): this;
		constructor(points: number[]): this;
		constructor(...points: Point[]): this;
		constructor(...points: number[]): this;
		closed: boolean;
		points: number[];
		type: number;
		clone(): Polygon;
		contains(x: number, y: number): boolean
	}

	declare export class Rectangle extends HitArea {
		constructor(x?: number, y?: number, width?: number, height?: number): this;
		x: number;
		y: number;
		width: number;
		height: number;
		type: number;
		EMPTY: Rectangle;
		clone(): Rectangle;
		contains(x: number, y: number): boolean
	}

	declare export class RoundedRectangle extends HitArea {
		constructor(x?: number, y?: number, width?: number, height?: number, radius?: number): this;
		x: number;
		y: number;
		width: number;
		height: number;
		radius: number;
		type: number;
		EMPTY: Rectangle;
		clone(): Rectangle;
		contains(x: number, y: number): boolean
	}

	declare export class ParticleContainer extends Container {
		constructor(size?: number, properties?: ParticleContainerProperties, batchSize?: number): this;
		_maxSize: number;
		_batchSize: number;
		_properties: boolean[];
		_buffers: WebGLBuffer[];
		_bufferToUpdate: number;
		onChildrenChange: (smallestChildIndex?: number) => void;
		interactiveChildren: boolean;
		blendMode: number;
		roundPixels: boolean;
		setProperties(properties: ParticleContainerProperties): void
	}

	declare export class SystemRenderer extends EventEmitter {
		_backgroundColor: number;
		_backgroundColorRgb: number[];
		_backgroundColorString: string;
		_tempDisplayObjectParent: any;
		_lastObjectRendered: DisplayObject;
		constructor(system: string, width?: number, height?: number, options?: RendererOptions): this;
		type: number;
		width: number;
		height: number;
		view: HTMLCanvasElement;
		resolution: number;
		transparent: boolean;
		autoResize: boolean;
		blendModes: any;
		preserveDrawingBuffer: boolean;
		clearBeforeRender: boolean;
		roundPixels: boolean;
		backgroundColor: number;
		render(object: DisplayObject): void;
		resize(width: number, height: number): void;
		destroy(removeView?: boolean): void
	}

	declare export class CanvasRenderer extends SystemRenderer {
		renderDisplayObject(displayObject: DisplayObject, context: CanvasRenderingContext2D): void;
		_mapBlendModes(): void;
		constructor(width?: number, height?: number, options?: RendererOptions): this;
		context: CanvasRenderingContext2D;
		refresh: boolean;
		maskManager: CanvasMaskManager;
		roundPixels: boolean;
		smoothProperty: string;
		render(object: DisplayObject): void;
		resize(w: number, h: number): void
	}

	declare export class CanvasBuffer  {
		clear(): void;
		constructor(width: number, height: number): this;
		canvas: HTMLCanvasElement;
		context: CanvasRenderingContext2D;
		width: number;
		height: number;
		resize(width: number, height: number): void;
		destroy(): void
	}

	declare export class CanvasGraphics  {
		renderGraphicsMask(graphics: Graphics, context: CanvasRenderingContext2D): void;
		updateGraphicsTint(graphics: Graphics): void;
		renderGraphics(graphics: Graphics, context: CanvasRenderingContext2D): void
	}

	declare export class CanvasMaskManager  {
		pushMask(maskData: any, renderer: WebGLRenderer | CanvasRenderer): void;
		popMask(renderer: WebGLRenderer | CanvasRenderer): void;
		destroy(): void
	}

	declare export class CanvasTinter  {
		getTintedTexture(sprite: DisplayObject, color: number): HTMLCanvasElement;
		tintWithMultiply(texture: Texture, color: number, canvas: HTMLDivElement): void;
		tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
		tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
		roundColor(color: number): number;
		cacheStepsPerColorChannel: number;
		convertTintToImage: boolean;
		vanUseMultiply: boolean;
		tintMethod: Function
	}

	declare export class WebGLRenderer extends SystemRenderer {
		_useFXAA: boolean;
		_FXAAFilter: filters.FXAAFilter;
		_contextOptions: {
		alpha: boolean,
		antiAlias: boolean,
		premultipliedAlpha: boolean,
		stencil: boolean,
		preseveDrawingBuffer: boolean
	};
		_renderTargetStack: RenderTarget[];
		_initContext(): void;
		_createContext(): void;
		handleContextLost: (event: WebGLContextEvent) => void;
		_mapGlModes(): void;
		_managedTextures: Texture[];
		constructor(width?: number, height?: number, options?: RendererOptions): this;
		drawCount: number;
		shaderManager: ShaderManager;
		maskManager: MaskManager;
		stencilManager: StencilManager;
		filterManager: FilterManager;
		blendModeManager: BlendModeManager;
		currentRenderTarget: RenderTarget;
		currentRenderer: ObjectRenderer;
		render(object: DisplayObject): void;
		renderDisplayObject(displayObject: DisplayObject, renderTarget: RenderTarget, clear: boolean): void;
		setObjectRenderer(objectRenderer: ObjectRenderer): void;
		setRenderTarget(renderTarget: RenderTarget): void;
		updateTexture(texture: BaseTexture | Texture): BaseTexture | Texture;
		destroyTexture(texture: BaseTexture | Texture, _skipRemove?: boolean): void
	}

	declare export class AbstractFilter  {
		vertexSrc: string[];
		fragmentSrc: string[];
		constructor(vertexSrc?: string | string[], fragmentSrc?: string | string[], uniforms?: any): this;
		uniforms: any;
		padding: number;
		getShader(renderer: WebGLRenderer): Shader;
		applyFilter(
		renderer: WebGLRenderer, input: RenderTarget, output: RenderTarget, clear?: boolean
	): void;
		syncUniform(uniform: WebGLUniformLocation): void
	}

	declare export class SpriteMaskFilter extends AbstractFilter {
		constructor(sprite: Sprite): this;
		maskSprite: Sprite;
		maskMatrix: Matrix;
		applyFilter(renderer: WebGLRenderbuffer, input: RenderTarget, output: RenderTarget): void;
		map: Texture;
		offset: Point
	}

	declare export class BlendModeManager extends WebGLManager {
		constructor(renderer: WebGLRenderer): this;
		setBlendMode(blendMode: number): boolean
	}

	declare export class FilterManager extends WebGLManager {
		constructor(renderer: WebGLRenderer): this;
		filterStack: any[];
		renderer: WebGLRenderer;
		texturePool: any[];
		onContextChange: () => void;
		setFilterStack(filterStack: any[]): void;
		pushFilter(target: RenderTarget, filters: any[]): void;
		popFilter(): AbstractFilter;
		getRenderTarget(clear?: boolean): RenderTarget;
		returnRenderTarget(renderTarget: RenderTarget): void;
		applyFilter(
		shader: Shader | AbstractFilter, inputTarget: RenderTarget, outputTarget: RenderTarget, clear?: boolean
	): void;
		calculateMappedMatrix(filterArea: Rectangle, sprite: Sprite, outputMatrix?: Matrix): Matrix;
		capFilterArea(filterArea: Rectangle): void;
		resize(width: number, height: number): void;
		destroy(): void
	}

	declare export class MaskManager extends WebGLManager {
		stencilStack: StencilMaskStack;
		reverse: boolean;
		count: number;
		alphaMaskPool: any[];
		pushMask(target: RenderTarget, maskData: any): void;
		popMask(target: RenderTarget, maskData: any): void;
		pushSpriteMask(target: RenderTarget, maskData: any): void;
		popSpriteMask(): void;
		pushStencilMask(target: RenderTarget, maskData: any): void;
		popStencilMask(target: RenderTarget, maskData: any): void
	}

	declare export class ShaderManager extends WebGLManager {
		_currentId: number;
		currentShader: Shader;
		constructor(renderer: WebGLRenderer): this;
		maxAttibs: number;
		attribState: any[];
		tempAttribState: any[];
		stack: any[];
		setAttribs(attribs: any[]): void;
		setShader(shader: Shader): boolean;
		destroy(): void
	}

	declare export class StencilManager extends WebGLManager {
		constructor(renderer: WebGLRenderer): this;
		setMaskStack(stencilMaskStack: StencilMaskStack): void;
		pushStencil(graphics: Graphics, webGLData: WebGLGraphicsData): void;
		bindGraphics(graphics: Graphics, webGLData: WebGLGraphicsData): void;
		popStencil(graphics: Graphics, webGLData: WebGLGraphicsData): void;
		destroy(): void;
		pushMask(maskData: any[]): void;
		popMask(maskData: any[]): void
	}

	declare export class WebGLManager  {
		onContextChange: () => void;
		constructor(renderer: WebGLRenderer): this;
		renderer: WebGLRenderer;
		destroy(): void
	}

	declare export class Shader  {
		attributes: any;
		textureCount: number;
		uniforms: any;
		_glCompile(type: any, src: any): Shader;
		constructor(shaderManager: ShaderManager, vertexSrc: string, fragmentSrc: string, uniforms: any, attributes: any): this;
		uuid: number;
		gl: WebGLRenderingContext;
		shaderManager: ShaderManager;
		program: WebGLProgram;
		vertexSrc: string;
		fragmentSrc: string;
		init(): void;
		cacheUniformLocations(keys: string[]): void;
		cacheAttributeLocations(keys: string[]): void;
		compile(): WebGLProgram;
		syncUniform(uniform: any): void;
		syncUniforms(): void;
		initSampler2D(uniform: any): void;
		destroy(): void
	}

	declare export class ComplexPrimitiveShader extends Shader {
		constructor(shaderManager: ShaderManager): this
	}

	declare export class PrimitiveShader extends Shader {
		constructor(shaderManager: ShaderManager): this
	}

	declare export class TextureShader extends Shader {
		constructor(shaderManager: ShaderManager, vertexSrc?: string, fragmentSrc?: string, customUniforms?: any, customAttributes?: any): this
	}

	declare export class ObjectRenderer extends WebGLManager {
		start(): void;
		stop(): void;
		flush(): void;
		render(object?: any): void
	}

	declare export class RenderTarget  {
		constructor(gl: WebGLRenderingContext, width: number, height: number, scaleMode: number, resolution: number, root: boolean): this;
		gl: WebGLRenderingContext;
		frameBuffer: WebGLFramebuffer;
		texture: Texture;
		size: Rectangle;
		resolution: number;
		projectionMatrix: Matrix;
		transform: Matrix;
		frame: Rectangle;
		stencilBuffer: WebGLRenderbuffer;
		stencilMaskStack: StencilMaskStack;
		filterStack: any[];
		scaleMode: number;
		root: boolean;
		clear(bind?: boolean): void;
		attachStencilBuffer(): void;
		activate(): void;
		calculateProjection(protectionFrame: Matrix): void;
		resize(width: number, height: number): void;
		destroy(): void
	}

	declare export class Sprite extends Container {
		fromFrame(frameId: string): Sprite;
		fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
		_texture: Texture;
		_width: number;
		_height: number;
		cachedTint: number;
		_onTextureUpdate(): void;
		constructor(texture?: Texture): this;
		anchor: Point;
		tint: number;
		blendMode: number;
		shader: Shader | AbstractFilter;
		texture: Texture;
		width: number;
		height: number;
		getBounds(matrix?: Matrix): Rectangle;
		getLocalBounds(): Rectangle;
		containsPoint(point: Point): boolean;
		destroy(destroyTexture?: boolean, destroyBaseTexture?: boolean): void
	}

	declare export class SpriteRenderer extends ObjectRenderer {
		renderBatch(texture: Texture, size: number, startIndex: number): void;
		vertSize: number;
		vertByteSize: number;
		size: number;
		vertices: number[];
		positions: number[];
		colors: number[];
		indices: number[];
		currentBatchSize: number;
		sprites: Sprite[];
		shader: Shader | AbstractFilter;
		render(sprite: Sprite): void;
		flush(): void;
		start(): void;
		destroy(): void
	}

	declare export class Text extends Sprite {
		fontPropertiesCache: any;
		fontPropertiesCanvas: HTMLCanvasElement;
		fontPropertiesContext: CanvasRenderingContext2D;
		_text: string;
		_style: TextStyle;
		updateText(): void;
		updateTexture(): void;
		determineFontProperties(fontStyle: TextStyle): TextStyle;
		wordWrap(text: string): boolean;
		constructor(text?: string, style?: TextStyle, resolution?: number): this;
		canvas: HTMLCanvasElement;
		context: CanvasRenderingContext2D;
		dirty: boolean;
		resolution: number;
		text: string;
		style: TextStyle;
		width: number;
		height: number
	}

	declare export class BaseTexture extends EventEmitter {
		fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: number): BaseTexture;
		fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number): BaseTexture;
		_glTextures: any;
		_sourceLoaded(): void;
		constructor(source: HTMLImageElement | HTMLCanvasElement, scaleMode?: number, resolution?: number): this;
		uuid: number;
		resolution: number;
		width: number;
		height: number;
		realWidth: number;
		realHeight: number;
		scaleMode: number;
		hasLoaded: boolean;
		isLoading: boolean;
		source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
		premultipliedAlpha: boolean;
		imageUrl: string;
		isPowerOfTwo: boolean;
		mipmap: boolean;
		update(): void;
		loadSource(source: HTMLImageElement | HTMLCanvasElement): void;
		destroy(): void;
		dispose(): void;
		updateSourceImage(newSrc: string): void;
		on(
		event: "dispose", fn: (baseTexture: BaseTexture) => void, context?: any
	): EventEmitter;
		on(
		event: "error", fn: (baseTexture: BaseTexture) => void, context?: any
	): EventEmitter;
		on(
		event: "loaded", fn: (baseTexture: BaseTexture) => void, context?: any
	): EventEmitter;
		on(
		event: "update", fn: (baseTexture: BaseTexture) => void, context?: any
	): EventEmitter;
		on(event: string, fn: Function, context?: any): EventEmitter;
		once(
		event: "dispose", fn: (baseTexture: BaseTexture) => void, context?: any
	): EventEmitter;
		once(
		event: "error", fn: (baseTexture: BaseTexture) => void, context?: any
	): EventEmitter;
		once(
		event: "loaded", fn: (baseTexture: BaseTexture) => void, context?: any
	): EventEmitter;
		once(
		event: "update", fn: (baseTexture: BaseTexture) => void, context?: any
	): EventEmitter;
		once(event: string, fn: Function, context?: any): EventEmitter
	}

	declare export class RenderTexture extends Texture {
		renderWebGL(
		displayObject: DisplayObject, matrix?: Matrix, clear?: boolean, updateTransform?: boolean
	): void;
		renderCanvas(
		displayObject: DisplayObject, matrix?: Matrix, clear?: boolean, updateTransform?: boolean
	): void;
		constructor(renderer: CanvasRenderer | WebGLRenderer, width?: number, height?: number, scaleMode?: number, resolution?: number): this;
		width: number;
		height: number;
		resolution: number;
		renderer: CanvasRenderer | WebGLRenderer;
		valid: boolean;
		render(
		displayObject: DisplayObject, matrix?: Matrix, clear?: boolean, updateTransform?: boolean
	): void;
		resize(width: number, height: number, updateBase?: boolean): void;
		clear(): void;
		destroy(): void;
		getImage(): HTMLImageElement;
		getPixels(): number[];
		getPixel(x: number, y: number): number[];
		getBase64(): string;
		getCanvas(): HTMLCanvasElement
	}

	declare export class Texture extends BaseTexture {
		fromImage(imageUrl: string, crossOrigin?: boolean, scaleMode?: number): Texture;
		fromFrame(frameId: string): Texture;
		fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number): Texture;
		fromVideo(video: HTMLVideoElement | string, scaleMode?: number): Texture;
		fromVideoUrl(videoUrl: string, scaleMode?: number): Texture;
		addTextureToCache(texture: Texture, id: string): void;
		removeTextureFromCache(id: string): Texture;
		EMPTY: Texture;
		_frame: Rectangle;
		_uvs: TextureUvs;
		onBaseTextureUpdated(baseTexture: BaseTexture): void;
		onBaseTextureLoaded(baseTexture: BaseTexture): void;
		_updateUvs(): void;
		constructor(baseTexture: BaseTexture, frame?: Rectangle, crop?: Rectangle, trim?: Rectangle, rotate?: boolean): this;
		noFrame: boolean;
		baseTexture: BaseTexture;
		trim: Rectangle;
		valid: boolean;
		requiresUpdate: boolean;
		width: number;
		height: number;
		crop: Rectangle;
		rotate: boolean;
		frame: Rectangle;
		update(): void;
		destroy(destroyBase?: boolean): void;
		clone(): Texture
	}

	declare export class TextureUvs  {
		x0: number;
		y0: number;
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		x3: number;
		y3: number;
		set(frame: Rectangle, baseFrame: Rectangle, rotate: boolean): void
	}

	declare export class VideoBaseTexture extends BaseTexture {
		fromVideo(video: HTMLVideoElement, scaleMode?: number): VideoBaseTexture;
		fromUrl(videoSrc: string | any | string[] | any[]): VideoBaseTexture;
		_loaded: boolean;
		_onUpdate(): void;
		_onPlayStart(): void;
		_onPlayStop(): void;
		_onCanPlay(): void;
		constructor(source: HTMLVideoElement, scaleMode?: number): this;
		autoUpdate: boolean;
		destroy(): void
	}

	declare export class utils  {
		uuid(): number;
		hex2rgb(hex: number, out?: number[]): number[];
		hex2string(hex: number): string;
		rgb2hex(rgb: Number[]): number;
		canUseNewCanvasBlendModel(): boolean;
		getNextPowerOfTwo(number: number): number;
		isPowerOfTwo(width: number, height: number): boolean;
		getResolutionOfUrl(url: string): number;
		sayHello(type: string): void;
		isWebGLSupported(): boolean;
		sign(n: number): number;
		TextureCache: any;
		BaseTextureCache: any
	}

	
}

declare module 'extras' {
		declare export interface BitmapTextStyle {
		font?: string | {
		name?: string,
		size?: number
	},
		align?: string,
		tint?: number
	}

		declare export class BitmapText extends Container {
		fonts: any;
		_glyphs: Sprite[];
		_font: string | {
		tint: number,
		align: string,
		name: string,
		size: number
	};
		_text: string;
		updateText(): void;
		constructor(text: string, style?: BitmapTextStyle): this;
		textWidth: number;
		textHeight: number;
		maxWidth: number;
		maxLineHeight: number;
		dirty: boolean;
		tint: number;
		align: string;
		font: string | {
		tint: number,
		align: string,
		name: string,
		size: number
	};
		text: string
	}

	declare export class MovieClip extends Sprite {
		fromFrames(frame: string[]): MovieClip;
		fromImages(images: string[]): MovieClip;
		_textures: Texture[];
		_durations: number[];
		_currentTime: number;
		update(deltaTime: number): void;
		constructor(textures: Texture[]): this;
		animationSpeed: number;
		loop: boolean;
		onComplete: () => void;
		currentFrame: number;
		playing: boolean;
		totalFrames: number;
		textures: Texture[];
		stop(): void;
		play(): void;
		gotoAndStop(frameName: number): void;
		gotoAndPlay(frameName: number): void;
		destroy(): void
	}

	declare export class TilingSprite extends Sprite {
		fromFrame(frameId: string): Sprite;
		fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
		fromFrame(frameId: string, width?: number, height?: number): TilingSprite;
		fromImage(
		imageId: string, width?: number, height?: number, crossorigin?: boolean, scaleMode?: number
	): TilingSprite;
		_tileScaleOffset: Point;
		_tilingTexture: boolean;
		_refreshTexture: boolean;
		_uvs: TextureUvs[];
		constructor(texture: Texture, width: number, height: number): this;
		tileScale: Point;
		tilePosition: Point;
		width: number;
		height: number;
		originalTexture: Texture;
		getBounds(): Rectangle;
		generateTilingTexture(
		renderer: WebGLRenderer | CanvasRenderer, texture: Texture, forcePowerOfTwo?: boolean
	): Texture;
		containsPoint(point: Point): boolean;
		destroy(): void
	}

	
}

declare module 'filters' {
				declare export class AsciiFilter extends AbstractFilter {
		size: number
	}

	declare export class BloomFilter extends AbstractFilter {
		blur: number;
		blurX: number;
		blurY: number
	}

	declare export class BlurFilter extends AbstractFilter {
		blurXFilter: BlurXFilter;
		blurYFilter: BlurYFilter;
		blur: number;
		passes: number;
		blurX: number;
		blurY: number
	}

	declare export class BlurXFilter extends AbstractFilter {
		passes: number;
		strength: number;
		blur: number
	}

	declare export class BlurYFilter extends AbstractFilter {
		passes: number;
		strength: number;
		blur: number
	}

	declare export class SmartBlurFilter extends AbstractFilter {
		
	}

	declare export class ColorMatrixFilter extends AbstractFilter {
		_loadMatrix(matrix: number[], multiply: boolean): void;
		_multiply(out: number[], a: number[], b: number[]): void;
		_colorMatrix(matrix: number[]): void;
		matrix: number[];
		brightness(b: number, multiply?: boolean): void;
		greyscale(scale: number, multiply?: boolean): void;
		blackAndWhite(multiply?: boolean): void;
		hue(rotation: number, multiply?: boolean): void;
		contrast(amount: number, multiply?: boolean): void;
		saturate(amount: number, multiply?: boolean): void;
		desaturate(multiply?: boolean): void;
		negative(multiply?: boolean): void;
		sepia(multiply?: boolean): void;
		technicolor(multiply?: boolean): void;
		polaroid(multiply?: boolean): void;
		toBGR(multiply?: boolean): void;
		kodachrome(multiply?: boolean): void;
		browni(multiply?: boolean): void;
		vintage(multiply?: boolean): void;
		colorTone(
		desaturation: number, toned: number, lightColor: string, darkColor: string, multiply?: boolean
	): void;
		night(intensity: number, multiply?: boolean): void;
		predator(amount: number, multiply?: boolean): void;
		lsd(multiply?: boolean): void;
		reset(): void
	}

	declare export class ColorStepFilter extends AbstractFilter {
		step: number
	}

	declare export class ConvolutionFilter extends AbstractFilter {
		constructor(matrix: number[], width: number, height: number): this;
		matrix: number[];
		width: number;
		height: number
	}

	declare export class CrossHatchFilter extends AbstractFilter {
		
	}

	declare export class DisplacementFilter extends AbstractFilter {
		constructor(sprite: Sprite, scale?: number): this;
		map: Texture;
		scale: Point
	}

	declare export class DotScreenFilter extends AbstractFilter {
		scale: number;
		angle: number
	}

	declare export class BlurYTintFilter extends AbstractFilter {
		blur: number
	}

	declare export class DropShadowFilter extends AbstractFilter {
		blur: number;
		blurX: number;
		blurY: number;
		color: number;
		alpha: number;
		distance: number;
		angle: number
	}

	declare export class GrayFilter extends AbstractFilter {
		gray: number
	}

	declare export class InvertFilter extends AbstractFilter {
		invert: number
	}

	declare export class NoiseFilter extends AbstractFilter {
		noise: number
	}

	declare export class PixelateFilter extends AbstractFilter {
		size: Point
	}

	declare export class RGBSplitFilter extends AbstractFilter {
		red: number;
		green: number;
		blue: number
	}

	declare export class SepiaFilter extends AbstractFilter {
		sepia: number
	}

	declare export class ShockwaveFilter extends AbstractFilter {
		center: number[];
		params: any;
		time: number
	}

	declare export class TiltShiftAxisFilter extends AbstractFilter {
		blur: number;
		gradientBlur: number;
		start: number;
		end: number;
		updateDelta(): void
	}

	declare export class TiltShiftFilter extends AbstractFilter {
		blur: number;
		gradientBlur: number;
		start: number;
		end: number
	}

	declare export class TiltShiftXFilter extends AbstractFilter {
		updateDelta(): void
	}

	declare export class TiltShiftYFilter extends AbstractFilter {
		updateDelta(): void
	}

	declare export class TwistFilter extends AbstractFilter {
		offset: Point;
		radius: number;
		angle: number
	}

	declare export class FXAAFilter extends AbstractFilter {
		applyFilter(renderer: WebGLRenderer, input: RenderTarget, output: RenderTarget): void
	}

	
}

declare module 'interaction' {
		declare export interface InteractionEvent {
		stopped: boolean,
		target: any,
		type: string,
		data: InteractionData,
		stopPropagation(): void
	}

	declare export interface InteractiveTarget {
		interactive: boolean,
		buttonMode: boolean,
		interactiveChildren: boolean,
		defaultCursor: string,
		hitArea: HitArea
	}

		declare export class InteractionData  {
		global: Point;
		target: DisplayObject;
		originalEvent: Event;
		identifier: number;
		getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point
	}

	declare export class InteractionManager  {
		interactionDOMElement: HTMLElement;
		eventsAdded: boolean;
		_tempPoint: Point;
		setTargetElement(element: HTMLElement, resolution: number): void;
		addEvents(): void;
		removeEvents(): void;
		dispatchEvent(displayObject: DisplayObject, eventString: string, eventData: any): void;
		onMouseDown: (event: Event) => void;
		processMouseDown: (displayObject: DisplayObject, hit: boolean) => void;
		onMouseUp: (event: Event) => void;
		processMouseUp: (displayObject: DisplayObject, hit: boolean) => void;
		onMouseMove: (event: Event) => void;
		processMouseMove: (displayObject: DisplayObject, hit: boolean) => void;
		onMouseOut: (event: Event) => void;
		processMouseOverOut: (displayObject: DisplayObject, hit: boolean) => void;
		onTouchStart: (event: Event) => void;
		processTouchStart: (DisplayObject: DisplayObject, hit: boolean) => void;
		onTouchEnd: (event: Event) => void;
		processTouchEnd: (displayObject: DisplayObject, hit: boolean) => void;
		onTouchMove: (event: Event) => void;
		processTouchMove: (displayObject: DisplayObject, hit: boolean) => void;
		getTouchData(touchEvent: InteractionData): InteractionData;
		returnTouchData(touchData: InteractionData): void;
		constructor(renderer: CanvasRenderer | WebGLRenderer, options?: {
		autoPreventDefault?: boolean,
		interactionFrequence?: number
	}): this;
		renderer: CanvasRenderer | WebGLRenderer;
		autoPreventDefault: boolean;
		interactionFrequency: number;
		mouse: InteractionData;
		eventData: {
		stopped: boolean,
		target: any,
		type: any,
		data: InteractionData
	};
		interactiveDataPool: InteractionData[];
		last: number;
		currentCursorStyle: string;
		resolution: number;
		update(deltaTime: number): void;
		mapPositionToPoint(point: Point, x: number, y: number): void;
		processInteractive(
		point: Point, displayObject: DisplayObject, func: (displayObject: DisplayObject, hit: boolean) => void, hitTest: boolean, interactive: boolean
	): boolean;
		destroy(): void
	}

	
}

declare module 'loaders' {
		declare export interface LoaderOptions {
		crossOrigin?: boolean,
		loadType?: number,
		xhrType?: string
	}

	declare export interface ResourceDictionary {
		[index: string]: PIXI.loaders.Resource
	}

		declare export class Loader extends EventEmitter {
		constructor(baseUrl?: string, concurrency?: number): this;
		baseUrl: string;
		progress: number;
		loading: boolean;
		resources: ResourceDictionary;
		add(name: string, url: string, options?: LoaderOptions, cb?: () => void): Loader;
		add(url: string, options?: LoaderOptions, cb?: () => void): Loader;
		add(obj: any, options?: LoaderOptions, cb?: () => void): Loader;
		on(
		event: "complete", fn: (loader: loaders.Loader, object: any) => void, context?: any
	): EventEmitter;
		on(
		event: "error", fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any
	): EventEmitter;
		on(
		event: "load", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any
	): EventEmitter;
		on(
		event: "progress", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any
	): EventEmitter;
		on(
		event: "start", fn: (loader: loaders.Loader) => void, context?: any
	): EventEmitter;
		on(event: string, fn: Function, context?: any): EventEmitter;
		once(
		event: "complete", fn: (loader: loaders.Loader, object: any) => void, context?: any
	): EventEmitter;
		once(
		event: "error", fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any
	): EventEmitter;
		once(
		event: "load", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any
	): EventEmitter;
		once(
		event: "progress", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any
	): EventEmitter;
		once(
		event: "start", fn: (loader: loaders.Loader) => void, context?: any
	): EventEmitter;
		once(event: string, fn: Function, context?: any): EventEmitter;
		before(fn: Function): Loader;
		pre(fn: Function): Loader;
		after(fn: Function): Loader;
		use(fn: Function): Loader;
		reset(): void;
		load(cb?: (loader: loaders.Loader, object: any) => void): Loader
	}

	declare export class Resource extends EventEmitter {
		LOAD_TYPE: {
		XHR: number,
		IMAGE: number,
		AUDIO: number,
		VIDEO: number
	};
		XHR_READ_STATE: {
		UNSENT: number,
		OPENED: number,
		HEADERS_RECIEVED: number,
		LOADING: number,
		DONE: number
	};
		XHR_RESPONSE_TYPE: {
		DEFAULT: number,
		BUFFER: number,
		BLOB: number,
		DOCUMENT: number,
		JSON: number,
		TEXT: number
	};
		constructor(name?: string, url?: string | string[], options?: LoaderOptions): this;
		name: string;
		texture: Texture;
		textures: Texture[];
		url: string;
		data: any;
		crossOrigin: string;
		loadType: number;
		xhrType: string;
		error: Error;
		xhr: XMLHttpRequest;
		complete(): void;
		load(cb?: () => void): void
	}

	
}

declare module 'mesh' {
		declare export interface MeshShader {
		
	}

		declare export class Mesh extends Container {
		DRAW_MODES: {
		TRIANGLE_MESH: number,
		TRIANGLES: number
	};
		constructor(texture: Texture, vertices?: number[], uvs?: number[], indices?: number[], drawMode?: number): this;
		texture: Texture;
		uvs: number[];
		vertices: number[];
		indices: number[];
		dirty: boolean;
		blendMode: number;
		canvasPadding: number;
		drawMode: number;
		shader: Shader | AbstractFilter;
		getBounds(matrix?: Matrix): Rectangle;
		containsPoint(point: Point): boolean;
		_texture: Texture;
		_renderCanvasTriangleMesh(context: CanvasRenderingContext2D): void;
		_renderCanvasTriangles(context: CanvasRenderingContext2D): void;
		_renderCanvasDrawTriangle(
		context: CanvasRenderingContext2D, vertices: number, uvs: number, index0: number, index1: number, index2: number
	): void;
		renderMeshFlat(Mesh: Mesh): void;
		_onTextureUpdate(): void
	}

	declare export class Rope extends Mesh {
		_ready: boolean;
		getTextureUvs(): TextureUvs;
		constructor(texture: Texture, points: Point[]): this;
		points: Point[];
		colors: number[];
		refresh(): void
	}

	declare export class Plane extends Mesh {
		segmentsX: number;
		segmentsY: number;
		constructor(texture: Texture, segmentsX?: number, segmentsY?: number): this
	}

	declare export class MeshRenderer extends ObjectRenderer {
		_initWebGL(mesh: Mesh): void;
		indices: number[];
		constructor(renderer: WebGLRenderer): this;
		render(mesh: Mesh): void;
		flush(): void;
		start(): void;
		destroy(): void
	}

	
}

declare module 'ticker' {
				declare export class Ticker  {
		_tick(time: number): void;
		_emitter: EventEmitter;
		_requestId: number;
		_maxElapsedMS: number;
		_requestIfNeeded(): void;
		_cancelIfNeeded(): void;
		_startIfPossible(): void;
		autoStart: boolean;
		deltaTime: number;
		elapsedMS: number;
		lastTime: number;
		speed: number;
		started: boolean;
		FPS: number;
		minFPS: number;
		add(fn: (deltaTime: number) => void, context?: any): Ticker;
		addOnce(fn: (deltaTime: number) => void, context?: any): Ticker;
		remove(fn: (deltaTime: number) => void, context?: any): Ticker;
		start(): void;
		stop(): void;
		update(): void
	}

	
}