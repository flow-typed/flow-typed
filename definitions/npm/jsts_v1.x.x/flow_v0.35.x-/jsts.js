

declare module 'jsts' {
					declare module.exports: undefined


}

declare module 'geom' {
				declare export class Coordinate  {
		constructor(x: number, y: number): this;
		constructor(c: Coordinate): this;
		x: number;
		y: number;
		z: number;
		setCoordinate(other: Coordinate): void;
		clone(): Coordinate;
		distance(p: Coordinate): number;
		equals2D(other: Coordinate): boolean;
		equals(other: Coordinate): boolean;
		compareTo(other: Coordinate): number
	}

	declare export class Envelope  {
		intersects(p1: Coordinate, p2: Coordinate, q: Coordinate): boolean;
		intersectsEnvelope(p1: Coordinate, p2: Coordinate, q1: Coordinate, q2: Coordinate): boolean;
		constructor(x1: number, x2: number, y1: number, y2: number): this;
		constructor(p1: Coordinate, p2: Coordinate): this;
		constructor(p: Coordinate): this;
		constructor(env: Envelope): this;
		minx: number;
		maxx: number;
		miny: number;
		maxy: number;
		setToNull(): void;
		isNull(): boolean;
		getHeight(): number;
		getWidth(): number;
		getMinX(): number;
		getMaxX(): number;
		getMinY(): number;
		getMaxY(): number;
		getArea(): number;
		expandToInclude(p: Coordinate): void;
		expandToInclude(x: number, y: number): void;
		expandToInclude(other: Envelope): void;
		expandBy(distance: number): void;
		expandBy(deltaX: number, deltaY: number): void;
		translate(transX: number, transY: number): void;
		centre(): Coordinate;
		intersection(env: Envelope): Envelope;
		intersects(other: Envelope): boolean;
		intersects(p: Coordinate): boolean;
		intersects(x: number, y: number): boolean;
		contains(other: Envelope): boolean;
		contains(p: Coordinate): boolean;
		contains(x: number, y: number): boolean;
		covers(x: number, y: number): boolean;
		covers(p: Coordinate): boolean;
		covers(other: Envelope): boolean;
		distance(env: Envelope): number;
		equals(other: Envelope): boolean;
		toString(): string;
		clone(): Envelope
	}

	declare export class Geometry  {
		constructor(factory?: any): this;
		envelope: Envelope;
		getFactory(): any;
		getGeometryType(): string;
		getNumGeometries(): number;
		getGeometryN(n: number): Geometry;
		getPrecisionModel(): any;
		getCoordinate(): Coordinate;
		getCoordinates(): Coordinate[];
		getNumPoints(): number;
		isSimple(): boolean;
		isValid(): boolean;
		isEmpty(): boolean;
		distance(g: Geometry): number;
		isWithinDistance(geom: Geometry, distance: number): boolean;
		isRectangle(): boolean;
		getArea(): number;
		getLength(): number;
		getCentroid(): Point;
		getInteriorPoint(): Point;
		getDimension(): number;
		getBoundary(): Geometry;
		getBoundaryDimension(): number;
		getEnvelope(): Geometry;
		getEnvelopeInternal(): Envelope;
		disjoint(g: Geometry): boolean;
		touches(g: Geometry): boolean;
		intersects(g: Geometry): boolean;
		crosses(g: Geometry): boolean;
		within(g: Geometry): boolean;
		contains(g: Geometry): boolean;
		overlaps(g: Geometry): boolean;
		covers(g: Geometry): boolean;
		coveredBy(g: Geometry): boolean;
		relate(g: Geometry, intersectionPattern: string): boolean;
		relate2(g: Geometry): any;
		equalsTopo(g: Geometry): boolean;
		equals(o: Object): boolean;
		buffer(distance: number, quadrantSegments: number, endCapStyle: number): Geometry;
		convexHull(): Geometry;
		intersection(other: Geometry): Geometry;
		union(other: Geometry): Geometry;
		difference(other: Geometry): Geometry;
		symDifference(other: Geometry): Geometry;
		equalsExact(other: Geometry, tolerance: number): boolean;
		equalsNorm(g: Geometry): boolean;
		apply(filter: any): void;
		clone(): Geometry;
		normalize(): void;
		norm(): Geometry;
		compareTo(o: Geometry): number;
		isEquivalentClass(other: Geometry): boolean;
		checkNotGeometryCollection(g: Geometry): void;
		isGeometryCollection(): boolean;
		isGeometryCollectionBase(): boolean;
		computeEnvelopeInternal(): Envelope;
		compareToSameClass(o: Geometry): number;
		compare(a: Array<any>, b: Array<any>): number;
		equal(a: Coordinate, b: Coordinate, tolerance: number): boolean;
		toString(): string
	}

	declare export class LinearRing extends LineString {
		
	}

	declare export class LineString extends Geometry {
		constructor(points: Array<Coordinate>, factory?: any): this;
		getCoordinateN(n: number): Coordinate;
		getPointN(n: number): Point;
		getStartPoint(): Point;
		getEndPoint(): Point;
		isClosed(): boolean;
		isRing(): boolean
	}

	declare export class Point extends Geometry {
		constructor(coordinate: Coordinate, factory?: any): this;
		getX(): number;
		getY(): number;
		reverse(): Point
	}

	declare export class Polygon extends Geometry {
		constructor(shell: LinearRing, holes?: Array<LinearRing>, factory?: any): this;
		getExteriorRing(): LinearRing;
		getInteriorRingN(n: number): LinearRing;
		getNumInteriorRing(): number
	}

	
}

declare module 'io' {
				declare export class GeoJSONWriter  {
		constructor(): this;
		write(geometry: geom.Geometry): Object
	}

	declare export class WKTReader  {
		constructor(geometryFactory?: any): this;
		read(wkt: string): geom.Geometry;
		reducePrecision(geometry: geom.Geometry): void
	}

	
}