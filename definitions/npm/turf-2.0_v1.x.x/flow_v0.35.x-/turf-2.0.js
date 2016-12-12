

declare module 'turf-2.0' {
					
}

declare module 'turf' {
			declare function aggregate(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, aggregations: Array<{
		aggregation: string,
		inField: string,
		outField: string
	}>
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function average(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, field: string, outField: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function count(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, countField: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function deviation(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function max(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function median(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function min(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function sum(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function variance(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inField: string, outField: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function along(
		line: GeoJSON.Feature<GeoJSON.LineString>, distance: number, units?: string
	): GeoJSON.Feature<GeoJSON.Point>

	declare function area(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): number

	declare function bboxPolygon(bbox: Array<number>): GeoJSON.Feature<GeoJSON.Polygon>

	declare function bearing(
		start: GeoJSON.Feature<GeoJSON.Point>, end: GeoJSON.Feature<GeoJSON.Point>
	): number

	declare function center(features: GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Point>

	declare function centroid(
		features: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): GeoJSON.Feature<GeoJSON.Point>

	declare function destination(
		start: GeoJSON.Feature<GeoJSON.Point>, distance: number, bearing: number, units: string
	): GeoJSON.Feature<GeoJSON.Point>

	declare function distance(
		from: GeoJSON.Feature<GeoJSON.Point>, to: GeoJSON.Feature<GeoJSON.Point>, units?: string
	): number

	declare function envelope(fc: GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Polygon>

	declare function extent(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): Array<number>

	declare function lineDistance(line: GeoJSON.Feature<GeoJSON.LineString>, units: string): number

	declare function midpoint(
		pt1: GeoJSON.Feature<GeoJSON.Point>, pt2: GeoJSON.Feature<GeoJSON.Point>
	): GeoJSON.Feature<GeoJSON.Point>

	declare function pointOnSurface(
		input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): GeoJSON.Feature<any>

	declare function size(bbox: Array<number>, factor: number): Array<number>

	declare function square(bbox: Array<number>): Array<number>

	declare function bezier(
		line: GeoJSON.Feature<GeoJSON.LineString>, resolution?: number, sharpness?: number
	): GeoJSON.Feature<GeoJSON.LineString>

	declare function buffer(
		feature: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>, distance: number, units: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon> | GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | GeoJSON.Polygon | GeoJSON.MultiPolygon

	declare function concave(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, maxEdge: number, units: string
	): GeoJSON.Feature<GeoJSON.Polygon>

	declare function convex(
		input: GeoJSON.FeatureCollection<GeoJSON.Point>
	): GeoJSON.Feature<GeoJSON.Polygon>

	declare function difference(
		poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.Feature<GeoJSON.Polygon>

	declare function intersect(
		poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiLineString> | typeof undefined

	declare function merge(
		fc: GeoJSON.FeatureCollection<GeoJSON.Polygon>
	): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>

	declare function simplify(
		feature: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection, tolerance: number, highQuality: boolean
	): GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection

	declare function union(
		poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>

	declare function combine(fc: GeoJSON.FeatureCollection<any>): GeoJSON.FeatureCollection<any>

	declare function explode(
		input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): GeoJSON.FeatureCollection<GeoJSON.Point>

	declare function flip(
		input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>

	declare function kinks(
		polygon: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.FeatureCollection<GeoJSON.Point>

	declare function lineSlice(
		point1: GeoJSON.Feature<GeoJSON.Point>, point2: GeoJSON.Feature<GeoJSON.Point>, line: GeoJSON.Feature<GeoJSON.LineString>
	): GeoJSON.Feature<GeoJSON.LineString>

	declare function pointOnLine(
		line: GeoJSON.Feature<GeoJSON.LineString>, point: GeoJSON.Feature<GeoJSON.Point>
	): GeoJSON.Feature<GeoJSON.Point>

	declare function featurecollection(features: Array<GeoJSON.Feature<any>>): GeoJSON.FeatureCollection<any>

	declare function linestring(
		coordinates: Array<Array<number>>, properties?: any
	): GeoJSON.Feature<GeoJSON.LineString>

	declare function point(coordinates: Array<number>, properties?: any): GeoJSON.Feature<GeoJSON.Point>

	declare function polygon(
		rings: Array<Array<Array<number>>>, properties?: any
	): GeoJSON.Feature<GeoJSON.Polygon>

	declare function filter(
		features: GeoJSON.FeatureCollection<any>, key: string, value: string
	): GeoJSON.FeatureCollection<any>

	declare function random(
		type?: string, count?: number, options?: {
		bbox?: Array<number>,
		num_vertices?: number,
		max_radial_length?: number
	}
	): GeoJSON.FeatureCollection<any>

	declare function remove(
		features: GeoJSON.FeatureCollection<any>, property: string, value: string
	): GeoJSON.FeatureCollection<any>

	declare function sample(
		features: GeoJSON.FeatureCollection<any>, n: number
	): GeoJSON.FeatureCollection<any>

	declare function hexGrid(
		bbox: Array<number>, cellWidth: number, units: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function isolines(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, z: string, resolution: number, breaks: Array<number>
	): GeoJSON.FeatureCollection<GeoJSON.LineString>

	declare function planepoint(
		interpolatedpoint: GeoJSON.Feature<GeoJSON.Point>, triangle: GeoJSON.Feature<GeoJSON.Polygon>
	): number

	declare function pointGrid(
		extent: Array<number>, cellWidth: number, units: string
	): GeoJSON.FeatureCollection<GeoJSON.Point>

	declare function squareGrid(
		extent: Array<number>, cellWidth: number, units: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function tin(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, propertyName?: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function triangleGrid(
		extent: Array<number>, cellWidth: number, units: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>

	declare function inside(
		point: GeoJSON.Feature<GeoJSON.Point>, polygon: GeoJSON.Feature<GeoJSON.Polygon>
	): boolean

	declare function tag(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, polyId: string, containingPolyId: string
	): GeoJSON.FeatureCollection<GeoJSON.Point>

	declare function within(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>
	): GeoJSON.FeatureCollection<GeoJSON.Point>

	declare function jenks(
		input: GeoJSON.FeatureCollection<any>, field: string, numberOfBreaks: number
	): Array<number>

	declare function nearest(
		point: GeoJSON.Feature<GeoJSON.Point>, against: GeoJSON.FeatureCollection<GeoJSON.Point>
	): GeoJSON.Feature<GeoJSON.Point>

	declare function quantile(
		input: GeoJSON.FeatureCollection<any>, field: string, percentiles: Array<number>
	): Array<number>

	declare function reclass(
		input: GeoJSON.FeatureCollection<any>, inField: string, outField: string, translations: Array<any>
	): GeoJSON.FeatureCollection<any>

		declare module.exports: undefined


}