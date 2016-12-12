

declare module 'poly2tri' {
					
}

declare module 'npm$namespace$poly2tri' {
		declare interface IPointLike {
		x: number,
		y: number
	}

		declare class Point extends IPointLike {
		x: number;
		y: number;
		constructor(x: number, y: number): this;
		toString(): string;
		toJSON(): JSON;
		clone(): Point;
		set_zero(): Point;
		set(x: number, y: number): Point;
		negate(): Point;
		add(n: IPointLike): Point;
		sub(n: IPointLike): Point;
		mul(s: number): Point;
		length(): number;
		normalize(): number;
		equals(p: IPointLike): boolean;
		negate(p: IPointLike): Point;
		add(a: IPointLike, b: IPointLike): Point;
		sub(a: IPointLike, b: IPointLike): Point;
		mul(s: number, p: IPointLike): Point;
		cross(a: number, b: number): number;
		cross(a: IPointLike, b: number): number;
		cross(a: IPointLike, b: IPointLike): number;
		cross(a: number, b: IPointLike): number;
		toStringBase(p: IPointLike): string;
		toString(p: IPointLike): string;
		compare(a: IPointLike, b: IPointLike): number;
		equals(a: IPointLike, b: IPointLike): boolean;
		dot(a: IPointLike, b: IPointLike): number
	}

	declare class SweepContext  {
		constructor(contour: Array<IPointLike>): this;
		constructor(contour: Array<IPointLike>, options: JSON): this;
		addHole(polyline: Array<IPointLike>): SweepContext;
		addHoles(holes: Array<Array<IPointLike>>): SweepContext;
		addPoint(point: IPointLike): SweepContext;
		addPoints(point: Array<IPointLike>): SweepContext;
		triangulate(): SweepContext;
		getBoundingBox(): {
		min: IPointLike,
		max: IPointLike
	};
		getTriangles(): Array<Triangle>
	}

	declare class Triangle  {
		constructor(a: IPointLike, b: IPointLike, c: IPointLike): this;
		toString(): string;
		getPoint(index: number): IPointLike;
		getPoints(): Array<IPointLike>;
		containsPoint(point: IPointLike): boolean;
		containsPoints(p1: IPointLike, p2: IPointLike): boolean;
		isInterior(): boolean
	}

	
}