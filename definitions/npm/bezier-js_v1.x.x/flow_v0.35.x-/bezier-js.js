

declare module 'bezier-js' {
					
}

declare module 'BezierJs' {
		declare interface Point {
		x: number,
		y: number,
		z?: number
	}

	declare interface Projection {
		t?: number,
		d?: number
	}

	declare interface Inflection {
		x: number[],
		y: number[],
		z?: number[],
		values: number[]
	}

	declare interface Offset {
		c: Point,
		n: Point
	}

	declare interface Pair {
		left: Bezier,
		right: Bezier
	}

	declare interface Split {
		span: Point[],
		_t1?: number,
		_t2?: number
	}

	declare interface MinMax {
		min: number,
		mid?: number,
		max: number,
		size?: number
	}

	declare interface BBox {
		x: MinMax,
		y: MinMax,
		z?: MinMax
	}

	declare interface Line {
		p1: Point,
		p2: Point
	}

	declare interface Arc {
		e: number,
		r: number,
		s: number
	}

	declare interface Shape {
		startcap: BezierCap,
		forward: Bezier,
		back: Bezier,
		endcap: BezierCap,
		bbox: BBox,
		intersections: (shape: Shape) => string[][] | number[][]
	}

	declare interface ABC {
		A: Point,
		B: Point,
		C: Point
	}

	declare interface Closest {
		mdist: number,
		mpos: number
	}

		declare class Bezier  {
		clockwise: boolean;
		_3d: boolean;
		_t1: number;
		_t2: number;
		_lut: Point[];
		dpoints: Point[][];
		order: number;
		points: Point[];
		dims: string[];
		dimlen: number;
		constructor(points: Point[]): this;
		constructor(coords: number[]): this;
		constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4?: number, y4?: number): this;
		constructor(p1: Point, p2: Point, p3: Point, p4?: Point): this;
		fromSVG(svgString: string): Bezier;
		getABC(n: number, S: Point, B: Point, E: Point, t: number): ABC;
		quadraticFromPoints(p1: Point, p2: Point, p3: Point, t: number): Bezier;
		cubicFromPoints(S: Point, B: Point, E: Point, t: number, d1: number): Bezier;
		getUtils(): typeof utils;
		getUtils(): typeof utils;
		valueOf(): string;
		toString(): string;
		toSVG(): string;
		update(): void;
		computedirection(): void;
		length(): number;
		getLUT(steps?: number): Point[];
		on(point: Point, error: number): number;
		project(point: Point): Projection;
		get(t: number): Point;
		point(idx: number): Point;
		compute(t: number): Point;
		raise(): Bezier;
		derivative(t: number): Point;
		inflections(): number[];
		normal(t: number): Point;
		hull(t: number): Point[];
		split(t1: number): Split;
		split(t1: number, t2: number): Bezier;
		extrema(): Inflection;
		bbox(): BBox;
		overlaps(curve: Bezier): boolean;
		offset(t: number, d?: number): Offset | Bezier[];
		simple(): boolean;
		reduce(): Bezier[];
		scale(d: Function): Bezier;
		scale(d: number): Bezier;
		outline(d1: number, d2?: number, d3?: number, d4?: number): PolyBezier;
		outlineshapes(d1: number, d2: number, curveIntersectionThreshold?: number): Shape[];
		intersects(curve: Bezier, curveIntersectionThreshold?: number): string[] | number[];
		intersects(curve: Line): string[] | number[];
		lineIntersects(line: Line): number[];
		selfintersects(curveIntersectionThreshold?: number): string[];
		curveintersects(c1: Bezier[], c2: Bezier[], curveIntersectionThreshold?: number): string[];
		arcs(errorThreshold?: number): Arc[]
	}

	declare class BezierCap extends Bezier {
		virtual: boolean
	}

	declare class PolyBezier  {
		curves: Bezier[];
		points: Point[];
		constructor(curves: Bezier[]): this;
		valueOf(): string;
		toString(): string;
		addCurve(curve: Bezier): void;
		length(): number;
		curve(idx: number): Bezier;
		bbox(): BBox;
		offset(d: number): PolyBezier
	}

	
}

declare module 'utils' {
			declare function arcfn(t: number, derivativeFn: Function): number

	declare function between(v: number, m: number, M: number): boolean

	declare function approximately(a: number, b: number, precision?: number): boolean

	declare function length(derivativeFn: Function): number

	declare function map(v: number, ds: number, de: number, ts: number, te: number): number

	declare function lerp(r: number, v1: Point, v2: Point): Point

	declare function pointToString(p: Point): string

	declare function pointsToString(points: Point[]): string

	declare function copy(obj: Object): any

	declare function angle(o: Point, v1: Point, v2: Point): number

	declare function round(v: number, d: number): number

	declare function dist(p1: Point, p2: Point): number

	declare function closest(LUT: Point[], point: Point): Closest

	declare function abcratio(t: number, n: number): number

	declare function projectionratio(t: number, n: number): number

	declare function lli8(
		x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number
	): Point

	declare function lli4(p1: Point, p2: Point, p3: Point, p4: Point): Point

	declare function lli(v1: Offset, v2: Offset): Point

	declare function makeline(p1: Point, p2: Point): Bezier

	declare function findbbox(sections: Bezier[]): BBox

	declare function shapeintersections(
		s1: Shape, bbox1: BBox, s2: Shape, bbox2: BBox, curveIntersectionThreshold?: number
	): string[][] | number[][]

	declare function makeshape(forward: Bezier, back: Bezier, curveIntersectionThreshold?: number): Shape

	declare function getminmax(curve: Bezier, d: string, list: number[]): MinMax

	declare function align(points: Point[], line: Line): Point[]

	declare function roots(points: Point[], line: Line): number[]

	declare function droots(p: number[]): number[]

	declare function inflections(points: Point[]): number[]

	declare function bboxoverlap(b1: BBox, b2: BBox): boolean

	declare function expandbox(bbox: BBox, _bbox: BBox): void

	declare function pairiteration(c1: Bezier, c2: Bezier, curveIntersectionThreshold?: number): string[]

	declare function getccenter(p1: Point, p2: Point, p3: Point): Arc

		
}