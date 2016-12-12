

declare module 'osmtogeojson' {
		declare export interface OsmToGeoJSON {
		(data: Document | OsmJSON.OsmJSONObject, options?: Options): GeoJSON.GeoJSONObject,
		toGeojson(
		data: Document | OsmJSON.OsmJSONObject, options?: Options
	): GeoJSON.GeoJSONObject
	}

	declare export interface Options {
		verbose?: boolean,
		flatProperties?: boolean,
		uninterestingTags?: {
		[tag: string]: boolean
	} | Function,
		polygonFeatures?: any | Function
	}

			declare module.exports: OsmToGeoJSON


}

declare module 'GeoJSON' {
	declare export type Coordinate2d = [number, number];

	declare export type Coordinate3d = [number, number, number];

	declare export type Coordinate = Coordinate2d | Coordinate3d;

	declare export interface GeoJSONObject {
		type: string
	}

	declare export interface Feature {
		id?: string,
		geometry: Geometry,
		properties: any
	}

	declare export interface FeatureCollection {
		features: Feature[]
	}

	declare export interface Geometry {
		coordinates: Coordinate | Coordinate[] | Coordinate[][]
	}

	declare export interface GeometryCollection {
		geometries: Geometry[]
	}

			
}

declare module 'OsmJSON' {
		declare export interface OsmJSONObject {
		elements: (Node | Way | Relationship)[]
	}

	declare export interface Element {
		type: string,
		id: number,
		tags?: {
		[name: string]: string
	},
		timestamp?: string,
		version?: number,
		changeset?: number,
		user?: string,
		uid?: number
	}

	declare export interface Node {
		lat: number,
		lon: number
	}

	declare export interface Way {
		nodes: number[]
	}

	declare export interface Relationship {
		members: Member[]
	}

	declare export interface Member {
		type: string,
		ref: number,
		role: string
	}

			
}