

declare module 'cheap-ruler' {
	declare type BBox = [number, number, number, number] | number[];

	declare type Point = [number, number] | number[];

	declare type Line = Array<Point>;

	declare type Points = Array<Point>;

	declare type Polygon = Array<Array<Point>>;

	declare interface TemplateUnits {
		kilometers: number,
		miles: number,
		nauticalmiles: number,
		meters: number,
		metres: number,
		yards: number,
		feet: number,
		inches: number
	}

	declare interface InterfacePointOnLine {
		point: Point,
		index: number,
		t: number
	}

	declare function cheapRuler(lat: number, units?: string): CheapRuler

	declare class CheapRuler  {
		distance(a: Point, b: Point): number;
		bearing(a: Point, b: Point): number;
		destination(p: Point, dist: number, bearing: number): Point;
		lineDistance(points: Points): number;
		area(polygon: Polygon): number;
		along(line: Line, dist: number): Point;
		pointOnLine(line: Line, p: Point): InterfacePointOnLine;
		lineSlice(start: Point, stop: Point, line: Line): Line;
		lineSliceAlong(start: number, stop: number, line: Line): Line;
		bufferPoint(p: Point, buffer: number): BBox;
		bufferBBox(bbox: BBox, buffer: number): BBox;
		insideBBox(p: Point, bbox: BBox): boolean
	}

	declare module.exports: undefined


}

declare module 'cheapRuler' {
			declare function fromTile(y: number, z: number, units?: string): CheapRuler

		
}