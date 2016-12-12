

declare module 'obelisk.js' {
					
}

declare module 'npm$namespace$obelisk' {
				declare export class Matrix  {
		constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): this;
		a: number;
		b: number;
		c: number;
		d: number;
		tx: number;
		ty: number
	}

	declare export class Point  {
		constructor(x?: number, y?: number): this;
		x: number;
		y: number
	}

	declare export class Point3D  {
		constructor(x?: number, y?: number, z?: number): this;
		x: number;
		y: number;
		z: number;
		toGlobalCoordinates(offset?: obelisk.Point): obelisk.Point
	}

	declare export class ColorGeom  {
		get32(color: number): number;
		applyBrightness(color: number, brightness: number, highlight?: boolean): number
	}

	declare export class ColorPattern  {
		GRASS_GREEN: number;
		YELLOW: number;
		WINE_RED: number;
		PINK: number;
		PURPLE: number;
		BLUE: number;
		GRAY: number;
		BLACK: number;
		FINE_COLORS: number[];
		getRandomComfortableColor(): number
	}

	declare export class CanvasTool  {
		getPixel(imageData: ImageData, x: number, y: number): number
	}

	declare export class CanvasManager  {
		defaultCanvas: HTMLCanvasElement;
		getDefaultCanvas(): HTMLCanvasElement;
		getNewCanvas(): HTMLCanvasElement
	}

	declare export class AbstractColor  {
		constructor(): this;
		inner: number;
		border: number;
		borderHighlight: number;
		left: number;
		right: number;
		horizontal: number;
		leftSlope: number;
		rightSlope: number
	}

	declare export class CubeColor extends AbstractColor {
		constructor(border?: number, borderHighlight?: number, left?: number, right?: number, horizontal?: number): this;
		BRIGHTNESS_GAIN: number;
		getByHorizontalColor(horizontal: number): CubeColor
	}

	declare export class PyramidColor extends AbstractColor {
		constructor(border?: number, borderHighlight?: number, left?: number, right?: number): this;
		BRIGHTNESS_GAIN: number;
		getByRightColor(horizontal: number): PyramidColor
	}

	declare export class SideColor extends AbstractColor {
		constructor(border?: number, inner?: number): this;
		BRIGHTNESS_GAIN: number;
		getByInnerColor(inner: number): SideColor
	}

	declare export class SlopeColor extends AbstractColor {
		constructor(border?: number, borderHighlight?: number, left?: number, right?: number, leftSlope?: number, rightSlope?: number): this;
		BRIGHTNESS_GAIN: number;
		getByHorizontalColor(horizontal: number): SlopeColor
	}

	declare export class AbstractDimension  {
		constructor(): this;
		xAxis: number;
		yAxis: number;
		zAxis: number;
		tall: boolean
	}

	declare export class BrickDimension extends AbstractDimension {
		constructor(xAxis?: number, yAxis?: number): this
	}

	declare export class CubeDimension extends AbstractDimension {
		constructor(xAxis?: number, yAxis?: number, zAxis?: number): this
	}

	declare export class PyramidDimension extends AbstractDimension {
		constructor(axis?: number, tall?: boolean): this
	}

	declare export class SideXDimension extends AbstractDimension {
		constructor(xAxis?: number, zAxis?: number): this
	}

	declare export class SideYDimension extends AbstractDimension {
		constructor(yAxis?: number, zAxis?: number): this
	}

	declare export class SlopeDimension extends AbstractDimension {
		constructor(xAxis?: number, yAxis?: number): this
	}

	declare export class BitmapData  {
		constructor(w: number, h: number, useDefaultCanvas?: boolean): this;
		imageData: ImageData;
		canvas: HTMLCanvasElement;
		context: CanvasRenderingContext2D;
		setPixel(posX: number, posY: number, color: number): void;
		setPixelByIndex(index: number, color: number): void;
		checkPixelAvailable(x: number, y: number): boolean;
		floodFill(posX: number, posY: number, color: number): void
	}

	declare export class PixelObject  {
		constructor(primitive: AbstractPrimitive, point3D?: Point3D): this;
		x: number;
		y: number;
		canvas: HTMLCanvasElement
	}

	declare export class PixelView  {
		constructor(canvas: HTMLCanvasElement, point?: Point): this;
		canvas: HTMLCanvasElement;
		context: CanvasRenderingContext2D;
		point: Point;
		renderObject(primitive: AbstractPrimitive, point3D?: Point3D): void;
		clear(): void
	}

	declare export class AbstractPrimitive  {
		constructor(): this;
		canvas: HTMLCanvasElement;
		w: number;
		h: number;
		dimension: AbstractDimension;
		color: AbstractColor;
		border: boolean;
		bitmapData: BitmapData;
		useDefaultCanvas: boolean;
		matrix: Matrix
	}

	declare export class Brick extends AbstractPrimitive {
		constructor(dimension?: BrickDimension, color?: SideColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	declare export class Cube extends AbstractPrimitive {
		constructor(dimension?: CubeDimension, color?: CubeColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	declare export class Pyramid extends AbstractPrimitive {
		constructor(dimension?: PyramidDimension, color?: PyramidColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	declare export class SideX extends AbstractPrimitive {
		constructor(dimension?: SideXDimension, color?: SideColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	declare export class SideY extends AbstractPrimitive {
		constructor(dimension?: SideYDimension, color?: SideColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	declare export class SlopeEast extends AbstractPrimitive {
		constructor(dimension?: SlopeDimension, color?: SlopeColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	declare export class SlopeNorth extends AbstractPrimitive {
		constructor(dimension?: SlopeDimension, color?: SlopeColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	declare export class SlopeSouth extends AbstractPrimitive {
		constructor(dimension?: SlopeDimension, color?: SlopeColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	declare export class SlopeWest extends AbstractPrimitive {
		constructor(dimension?: SlopeDimension, color?: SlopeColor, border?: boolean, useDefaultCanvas?: boolean): this
	}

	
}