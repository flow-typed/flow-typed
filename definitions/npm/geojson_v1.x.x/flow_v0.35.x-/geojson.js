

declare module 'geojson' {
					
}

declare module 'npm$namespace$GeoJSON' {
	declare export type Position = number[];

	declare export interface GeoJsonObject {
		type: string,
		bbox?: number[],
		crs?: CoordinateReferenceSystem
	}

	declare export interface GeometryObject {
		coordinates: any
	}

	declare export interface Point {
		type: "Point",
		coordinates: Position
	}

	declare export interface MultiPoint {
		type: "MultiPoint",
		coordinates: Position[]
	}

	declare export interface LineString {
		type: "LineString",
		coordinates: Position[]
	}

	declare export interface MultiLineString {
		type: "MultiLineString",
		coordinates: Position[][]
	}

	declare export interface Polygon {
		type: "Polygon",
		coordinates: Position[][]
	}

	declare export interface MultiPolygon {
		type: "MultiPolygon",
		coordinates: Position[][][]
	}

	declare export interface GeometryCollection {
		type: "GeometryCollection",
		geometries: GeometryObject[]
	}

	declare export interface Feature<T> {
		type: "Feature",
		geometry: T,
		properties: any,
		id?: string
	}

	declare export interface FeatureCollection<T> {
		type: "FeatureCollection",
		features: Feature<T>[]
	}

	declare export interface CoordinateReferenceSystem {
		type: string,
		properties: any
	}

	declare export interface NamedCoordinateReferenceSystem {
		properties: {
		name: string
	}
	}

	declare export interface LinkedCoordinateReferenceSystem {
		properties: {
		href: string,
		type: string
	}
	}

			
}