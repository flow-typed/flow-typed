

declare module 'sat' {
					declare module.exports: undefined


}

declare module 'npm$namespace$SAT' {
			declare export function pointInCircle(p: Vector, c: Circle): boolean

	declare export function pointInPolygon(p: Vector, poly: Polygon): boolean

	declare export function testCircleCircle(a: Circle, b: Circle, response?: Response): boolean

	declare export function testPolygonCircle(polygon: Polygon, circle: Circle, response?: Response): boolean

	declare export function testCirclePolygon(circle: Circle, polygon: Polygon, response?: Response): boolean

	declare export function testPolygonPolygon(a: Polygon, b: Polygon, response?: Response): boolean

	declare export class Vector  {
		constructor(x: number, y: number): this;
		x: number;
		y: number;
		copy(other: Vector): Vector;
		clone(): Vector;
		perp(): Vector;
		rotate(angle: number): Vector;
		reverse(): Vector;
		normalize(): Vector;
		add(other: Vector): Vector;
		sub(other: Vector): Vector;
		scale(x: number, y: number): Vector;
		project(other: Vector): Vector;
		projectN(other: Vector): Vector;
		reflect(axis: Vector): Vector;
		reflectN(axis: Vector): Vector;
		dot(other: Vector): number;
		len2(): number;
		len(): number
	}

	declare export class Circle  {
		constructor(pos: Vector, r: number): this;
		pos: Vector;
		r: number
	}

	declare export class Polygon  {
		constructor(pos: Vector, points: Vector[]): this;
		pos: Vector;
		points: Vector[];
		angle: number;
		offset: Vector;
		calcPoints: Vector[];
		edges: Vector[];
		normals: Vector[];
		setPoints(points: Vector[]): Polygon;
		setAngle(angle: number): Polygon;
		setOffset(offset: Vector): Polygon;
		recalc(): Polygon;
		rotate(angle: number): Polygon;
		translate(x: number, y: number): Polygon;
		getAABB(): Polygon
	}

	declare export class Box  {
		constructor(pos: Vector, width: number, height: number): this;
		pos: Vector;
		w: number;
		h: number;
		toPolygon(): Polygon
	}

	declare export class Response  {
		constructor(): this;
		a: any;
		b: any;
		overlap: number;
		overlapN: Vector;
		overlapV: Vector;
		aInB: boolean;
		bInA: boolean;
		clear(): Response
	}

	
}