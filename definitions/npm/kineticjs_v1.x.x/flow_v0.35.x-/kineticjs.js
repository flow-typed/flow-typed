

declare module 'kineticjs' {
					
}

declare module 'npm$namespace$Kinetic' {
		declare interface INode {
		cache(cacheConfig?: any): INode,
		clone(attrs: any): INode,
		destroy(): void,
		draw(): INode,
		drawBuffer(): any,
		drawScene(): any,
		getAbsoluteOpacity(): number,
		getAbsolutePosition(): Vector2d,
		getAbsoluteTransform(): any,
		getAbsoluteZIndex(): number,
		getAttrs(): any,
		getDragBounds(): any,
		getDragConstraint(): any,
		getDraggable(): boolean,
		getLayer(): any,
		getLevel(): number,
		getListening(): any,
		getName(): string,
		getOffset(): Vector2d,
		getOpacity(): number,
		getParent(): any,
		getPosition(): Vector2d,
		getRotation(): number,
		getRotationDeg(): number,
		getScale(): Vector2d,
		getScaleX(): number,
		getScaleY(): number,
		getSize(): ISize,
		getStage(): IStage,
		getTransform(): any,
		getZIndex(): number,
		hide(): void,
		isDraggable(): boolean,
		isDragging(): boolean,
		isListening(): boolean,
		move(change: {
		x: number,
		y: number
	}): void,
		moveDown(): void,
		moveTo(newContainer: IContainer): void,
		moveToBottom(): void,
		moveToTop(): void,
		moveUp(): void,
		name(): string,
		name(name: string): void,
		remove(): any,
		rotate(theta: number): void,
		rotateDeg(deg: number): void,
		on(typesStr: string, handler: (data: any) => any): void,
		off(typesStr: string): void,
		fire(typeStr: string, event?: any, bubble?: boolean): any,
		setAbsolutePosition(pos: Vector2d): void,
		setAttrs(config: any): void,
		setDefaultAttrs(config: any): void,
		setDragBounds(bounds: any): void,
		setDragConstraint(constraint: string): void,
		setDraggable(draggable: boolean): void,
		setListening(listening: boolean): void,
		setOffset(offset: Vector2d): any,
		setOpacity(opacity: any): void,
		setPosition(position: Vector2d): void,
		setRotation(theta: number): void,
		setRotationDeg(rotDeg: number): void,
		setScale(scale: Vector2d): void,
		setScaleX(scale: number): void,
		setScaleY(scale: number): void,
		setSize(size: ISize): any,
		setZIndex(zIndex: number): void,
		show(): void,
		simulate(eventType: string): void,
		toDataURL(config: any): void,
		transitionTo(config: any): void,
		width(): number,
		width(width: number): void,
		getWidth(): any,
		setWidth(width: number): void,
		height(): number,
		height(height: number): void,
		getHeight(): any,
		setHeight(height: number): any,
		id(): string,
		id(id: string): void,
		getId(): string,
		setId(id: string): void,
		x(): number,
		x(x: number): void,
		y(): number,
		y(y: number): void,
		getX(): number,
		setX(x: number): void,
		getY(): number,
		setY(y: number): void
	}

	declare interface IContainer {
		add(child: INode): any,
		clone(attrs: any): IContainer,
		destroyChildren(): IContainer,
		find(selector: string): any,
		get(selector: any): any,
		getChildren(): INode[],
		getIntersections(point: any): any,
		isAncestorOf(node: any): any,
		removeChildren(): any
	}

	declare interface IStage {
		add(layer: ILayer): any,
		clear(): any,
		getContainer(): HTMLElement,
		getContent(): HTMLElement,
		getDOM(): HTMLElement,
		getHeight(): number,
		getIntersection(pos: any): any,
		getMousePosition(evt?: Event): any,
		getPointerPosition(): Vector2d,
		getStage(): IStage,
		getTouchPosition(evt?: Event): any,
		getUserPosition(evt?: Event): any,
		getWidth(): number,
		load(JSON: any): any,
		reset(): any,
		setHeight(height: number): any,
		setWidth(width: number): any,
		toDataURL(config: any): any,
		toImage(config: any, callback: () => any): any,
		toJSON(): any
	}

	declare interface ILayer {
		afterDraw(handler: () => any): any,
		beforeDraw(handler: () => any): any,
		clear(): any,
		getCanvas(): ICanvas,
		getClearBeforeDraw(): any,
		getContext(): CanvasRenderingContext2D,
		remove(): any,
		setClearBeforeDraw(clearBeforeDraw: boolean): any,
		toDataURL(config: any): any
	}

	declare interface ICanvas {
		_canvas: HTMLCanvasElement,
		getPixelRatio(): number,
		height: number,
		setPixelRatio(pixelRatio: number): any,
		width: number
	}

	declare interface IShape {
		applyLineJoin(): void,
		drawImage(): void,
		fill(): void,
		fillText(text: string): void,
		getCanvas(): ICanvas,
		getContext(): any,
		getDrawFunc(): any,
		getFill(): string,
		getLineJoin(): any,
		getShadow(): any,
		getStroke(): any,
		getStrokeWidth(): number,
		intersects(point: any): boolean,
		setDrawFunc(drawFunc: () => any): any,
		setFill(fill: string): any,
		setLineJoin(): any,
		setShadow(config: any): any,
		setSize(size: ISize): any,
		setStroke(stroke: string): any,
		setStrokeWidth(strokeWidth: number): any,
		stroke(): any,
		strokeText(text: string): any
	}

	declare interface IRect {
		getCornerRadius(): number,
		getHeight(): number,
		getWidth(): number,
		setCornerRadius(radius: number): any,
		setHeight(height: number): any,
		setWidth(width: number): any
	}

	declare interface ICircle {
		getRadius(): number,
		setRadius(radius: number): any
	}

	declare interface IEllipse {
		getRadius(): number,
		setRadius(radius: number): any
	}

	declare interface IGroup {
		
	}

	declare interface ICollection {
		apply(method: Function, val: any): any,
		each(func: () => any): any
	}

	declare interface IImage {
		applyFilter(config: any): any,
		clearImageBuffer(): any,
		createImageBuffer(callback: () => any): any,
		getCrop(): any,
		getFilter(): any,
		getHeight(): number,
		getImage(): IImage,
		getWidth(): number,
		setCrop(config: CropConfig): any,
		setFilter(config: any): any,
		setHeight(height: number): any,
		setImage(image: IImage): any,
		setWidth(width: number): any
	}

	declare interface ILine {
		getDashArray(): any,
		getLineCap(): any,
		getPoints(): any,
		setDashArray(dashArray: any): any,
		setLineCap(lineCap: string): any,
		setPoints(can: any[]): any
	}

	declare interface IPath {
		getData(): string,
		setData(SVG: string): any
	}

	declare interface IRegularPolygon {
		getRadius(): number,
		getSides(): number,
		setRadius(radius: number): any,
		setSides(sides: number): any
	}

	declare interface ISprite {
		afterFrame(index: number, func: () => any): any,
		getAnimation(): string,
		getAnimations(): any,
		getIndex(): number,
		setAnimation(anim: string): any,
		setAnimations(animations: any): any,
		setIndex(index: number): any,
		start(): any,
		stop(): any
	}

	declare interface IStar {
		getInnerRadius(): number,
		getNumPoints(): number,
		getOuterRadius(): number,
		setInnerRadius(radius: number): any,
		setNumPoints(points: number): any,
		setOuterRadius(radius: number): any
	}

	declare interface IText {
		getAlign(): string,
		getBoxHeight(): number,
		getBoxWidth(): number,
		getFontFamily(): string,
		getFontSize(): number,
		getFontStyle(): string,
		getHeight(): number,
		getLineHeight(): number,
		getPadding(): number,
		getShadow(): any,
		getText(): string,
		getTextFill(): any,
		getTextHeight(): number,
		getTextStroke(): any,
		getTextStrokeWidth(): number,
		getTextWidth(): number,
		getWidth(): number,
		setAlign(align: string): any,
		setFontFamily(fontFamily: string): any,
		setFontSize(fontSize: number): any,
		setFontStroke(textStroke: any): any,
		setFontStyle(fontStyle: string): any,
		setHeight(height: number): any,
		setLineHeight(lineHeight: number): any,
		setPadding(padding: number): any,
		setShadow(config: any): any,
		setText(text: string): any,
		setTextFill(textFill: any): any,
		setTextStrokeWidth(textStrokeWidth: number): any,
		setWidth(width: number): any
	}

	declare interface ITextPath {
		getFontFamily(): string,
		getFontSize(): number,
		getFontStyle(): string,
		getText(): string,
		getTextFill(): any,
		getTextHeight(): number,
		getTextStroke(): any,
		getTextStrokeWidth(): number,
		getTextWidth(): number,
		setFontFamily(fontFamily: string): any,
		setFontSize(fontSize: number): any,
		setFontStroke(textStroke: any): any,
		setFontStyle(fontStyle: string): any,
		setText(text: string): any,
		setTextFill(textFill: any): any,
		setTextStrokeWidth(textStrokeWidth: number): any
	}

	declare interface IAnimation {
		start(): any,
		stop(): any
	}

	declare interface CropConfig {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare interface StageConfig {
		container: string,
		width: number,
		height: number
	}

	declare interface LayerConfig {
		clearBeforeDraw?: boolean
	}

	declare interface RectConfig {
		width?: number,
		height?: number,
		cornerRadius?: number
	}

	declare interface CircleConfig {
		radius: number
	}

	declare interface ImageConfig {
		image: any,
		width?: number,
		height?: number,
		crop?: any
	}

	declare interface SpriteConfig {
		image: any,
		animations?: any,
		animation?: any,
		frameRate?: number
	}

	declare interface TextConfig {
		text: string,
		fontSize?: number,
		fontFamily?: string,
		fontStyle?: string,
		textFill?: any,
		textStroke?: any,
		textStrokeWidth?: number,
		align?: string,
		padding?: string,
		width?: number,
		height?: number,
		lineHeight?: number,
		cornerRadius?: number
	}

	declare interface LineConfig {
		points: any,
		lineCap?: string,
		dash?: number[]
	}

	declare interface RegularPolygonConfig {
		sides: number,
		radius: number
	}

	declare interface PathConfig {
		data: string
	}

	declare interface StarConfig {
		numPoints: number,
		outerRadius: number,
		innerRadius: number
	}

	declare interface CustomConfig {
		drawFunc: () => any
	}

	declare interface DrawOptionsConfig {
		fill?: string,
		stroke?: string,
		strokeWidth?: number,
		lineJoin?: string,
		shadow?: any
	}

	declare interface Vector2d {
		x: number,
		y: number
	}

	declare interface ObjectOptionsConfig {
		x?: number,
		y?: number,
		visible?: boolean,
		listening?: boolean,
		id?: string,
		name?: string,
		opacity?: any,
		scale?: Vector2d,
		rotation?: number,
		rotationDeg?: number,
		offset?: Vector2d,
		draggable?: boolean,
		dragConstraint?: string,
		dragBounds?: any,
		dragBoundFunc?: (pos: Vector2d) => Vector2d,
		width?: number,
		height?: number
	}

	declare interface ISize {
		width: number,
		height: number
	}

			
}