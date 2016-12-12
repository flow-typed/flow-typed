

declare module 'signature_pad' {
				declare class SignaturePad  {
		points: Array<SignaturePad.Point>;
		_lastVelocity: number;
		_lastWidth: number;
		_isEmpty: boolean;
		_mouseButtonDown: boolean;
		_ctx: CanvasRenderingContext2D;
		_canvas: HTMLCanvasElement;
		velocityFilterWeight: number;
		minWidth: number;
		maxWidth: number;
		dotSize: Function;
		penColor: string;
		backgroundColor: string;
		onEnd: Function;
		onBegin: Function;
		constructor(canvas: Element, options?: SignaturePad.SignaturePadOptions): this;
		clear(): void;
		isEmpty(): boolean;
		fromDataURL(dataUrl: string): void;
		toDataURL(): string;
		_strokeBegin(event: Event): void;
		_strokeUpdate(event: Event): void;
		_strokeDraw(point: SignaturePad.Point): void;
		_strokeEnd(event: Event): void;
		_handleMouseEvents(): void;
		_handleTouchEvents(): void;
		_reset(): void;
		_createPoint(event: Event): SignaturePad.Point;
		_addPoint(point: SignaturePad.Point): void;
		_calculateCurveControlPoints(
		point1: SignaturePad.Point, point2: SignaturePad.Point, point3: SignaturePad.Point
	): void;
		_addCurve(curve: SignaturePad.Bezier): void;
		_drawPoint(x: number, y: number, size: number): void;
		_drawCurve(curve: SignaturePad.Bezier, startWidth: number, endWidth: number): void;
		_strokeWidth(velocity: number): void
	}

	
}

declare module 'npm$namespace$SignaturePad' {
		declare interface SignaturePadOptions {
		velocityFilterWeight?: number,
		minWidth?: number,
		maxWidth?: number,
		dotSize?: Function,
		penColor?: string,
		backgroundColor?: string,
		onEnd?: Function,
		onBegin?: Function
	}

		declare class Point  {
		x: number;
		y: number;
		time: number;
		constructor(x: number, y: number, time: number): this;
		velocityFrom(start: Point): number;
		distanceTo(start: Point): number
	}

	declare class CurveControl  {
		c1: Point;
		c2: Point;
		constructor(c1: Point, c2: Point): this
	}

	declare class Bezier  {
		startPoint: Point;
		control1: CurveControl;
		control2: CurveControl;
		endPoint: Point;
		constructor(startPoint: Point, control1: Point, control2: Point, endPoint: Point): this;
		length(): number;
		_point(t: number, start: number, c1: number, c2: number, end: number): number
	}

	
}