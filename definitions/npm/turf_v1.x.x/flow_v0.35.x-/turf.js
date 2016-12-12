

declare module 'turf' {
	declare type PropReduceCallback = (memo: any, coord: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>) => any;

	declare interface OptionsRandom {
		bbox?: Array<number>,
		num_vertices?: number,
		max_radial_length?: number
	}

	declare interface TurfStatic {
		collect(
		polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, points: GeoJSON.FeatureCollection<GeoJSON.Point>, inProperty: string, outProperty: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		along(
		line: GeoJSON.Feature<GeoJSON.LineString>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.Feature<GeoJSON.Point>,
		area(input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): number,
		bbox(bbox: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>): Array<number>,
		circle(
		center: GeoJSON.Feature<GeoJSON.Point>, radius: number, steps?: number, units?: typeof TemplateUnits
	): GeoJSON.Feature<GeoJSON.Polygon>,
		geojsonType(
		value: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>, type: string, name: string
	): void,
		propReduce(
		layer: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>, callback: PropReduceCallback, memo: any
	): any,
		coordAll(
		layer: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): Array<Array<number>>,
		tesselate(
		poly: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		bboxPolygon(bbox: Array<number>): GeoJSON.Feature<GeoJSON.Polygon>,
		bearing(
		start: GeoJSON.Feature<GeoJSON.Point>, end: GeoJSON.Feature<GeoJSON.Point>
	): number,
		center(features: GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Point>,
		centroid(
		features: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): GeoJSON.Feature<GeoJSON.Point>,
		destination(
		start: GeoJSON.Feature<GeoJSON.Point>, distance: number, bearing: number, units?: typeof TemplateUnits
	): GeoJSON.Feature<GeoJSON.Point>,
		distance(
		from: GeoJSON.Feature<GeoJSON.Point>, to: GeoJSON.Feature<GeoJSON.Point>, units?: typeof TemplateUnits
	): number,
		envelope(fc: GeoJSON.FeatureCollection<any>): GeoJSON.Feature<GeoJSON.Polygon>,
		lineDistance(
		line: GeoJSON.Feature<GeoJSON.LineString>, units?: typeof TemplateUnits
	): number,
		midpoint(
		pt1: GeoJSON.Feature<GeoJSON.Point>, pt2: GeoJSON.Feature<GeoJSON.Point>
	): GeoJSON.Feature<GeoJSON.Point>,
		pointOnSurface(
		input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): GeoJSON.Feature<any>,
		square(bbox: Array<number>): Array<number>,
		bezier(
		line: GeoJSON.Feature<GeoJSON.LineString>, resolution?: number, sharpness?: number
	): GeoJSON.Feature<GeoJSON.LineString>,
		buffer(
		feature: GeoJSON.Feature<GeoJSON.Polygon>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.Feature<GeoJSON.Polygon>,
		buffer(
		feature: GeoJSON.Feature<GeoJSON.MultiPolygon>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.Feature<GeoJSON.MultiPolygon>,
		buffer(
		feature: GeoJSON.Feature<GeoJSON.Point>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.Feature<GeoJSON.Point>,
		buffer(
		feature: GeoJSON.Feature<any>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.Feature<any>,
		buffer(
		feature: GeoJSON.FeatureCollection<GeoJSON.Polygon>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		buffer(
		feature: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>,
		buffer(
		feature: GeoJSON.FeatureCollection<GeoJSON.Point>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.FeatureCollection<GeoJSON.Point>,
		buffer(
		feature: GeoJSON.FeatureCollection<any>, distance: number, units?: typeof TemplateUnits
	): GeoJSON.FeatureCollection<any>,
		concave(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, maxEdge: number, units?: typeof TemplateUnits
	): GeoJSON.Feature<GeoJSON.Polygon>,
		convex(
		input: GeoJSON.FeatureCollection<GeoJSON.Point>
	): GeoJSON.Feature<GeoJSON.Polygon>,
		difference(
		poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.Feature<GeoJSON.Polygon>,
		intersect(
		feature1: GeoJSON.Feature<GeoJSON.Polygon>, feature2: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.Feature<GeoJSON.Point | GeoJSON.LineString | GeoJSON.Polygon>,
		intersect(
		feature1: GeoJSON.Feature<any>, feature2: GeoJSON.Feature<any>
	): GeoJSON.Feature<any>,
		simplify(
		feature: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection, tolerance: number, highQuality: boolean
	): GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection,
		union(
		poly1: GeoJSON.Feature<GeoJSON.Polygon>, poly2: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>,
		combine(fc: GeoJSON.FeatureCollection<any>): GeoJSON.FeatureCollection<any>,
		explode(
		input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): GeoJSON.FeatureCollection<GeoJSON.Point>,
		flip(
		input: GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>
	): GeoJSON.Feature<any> | GeoJSON.FeatureCollection<any>,
		kinks(
		polygon: GeoJSON.Feature<GeoJSON.Polygon>
	): GeoJSON.FeatureCollection<GeoJSON.Point>,
		lineSlice(
		point1: GeoJSON.Feature<GeoJSON.Point>, point2: GeoJSON.Feature<GeoJSON.Point>, line: GeoJSON.Feature<GeoJSON.LineString>
	): GeoJSON.Feature<GeoJSON.LineString>,
		pointOnLine(
		line: GeoJSON.Feature<GeoJSON.LineString>, point: GeoJSON.Feature<GeoJSON.Point>
	): GeoJSON.Feature<GeoJSON.Point>,
		featureCollection(features: Array<GeoJSON.Feature<any>>): GeoJSON.FeatureCollection<any>,
		feature(geometry: GeoJSON.Feature<any>, properties?: any): GeoJSON.Feature<any>,
		lineString(
		coordinates: Array<Array<number>>, properties?: any
	): GeoJSON.Feature<GeoJSON.LineString>,
		multiLineString(
		coordinates: Array<Array<Array<number>>>, properties?: any
	): GeoJSON.Feature<GeoJSON.MultiLineString>,
		point(coordinates: Array<number>, properties?: any): GeoJSON.Feature<GeoJSON.Point>,
		multiPoint(
		coordinates: Array<Array<number>>, properties?: any
	): GeoJSON.Feature<GeoJSON.MultiPoint>,
		polygon(
		coordinates: Array<Array<Array<number>>>, properties?: any
	): GeoJSON.Feature<GeoJSON.Polygon>,
		multiPolygon(
		coordinates: Array<Array<Array<Array<number>>>>, properties?: any
	): GeoJSON.Feature<GeoJSON.MultiPolygon>,
		geometryCollection(
		geometries: Array<GeoJSON.GeometryObject>, properties?: any
	): GeoJSON.GeometryCollection,
		random(
		type?: "point", count?: number, options?: OptionsRandom
	): GeoJSON.FeatureCollection<GeoJSON.Point>,
		random(
		type?: "points", count?: number, options?: OptionsRandom
	): GeoJSON.FeatureCollection<GeoJSON.Point>,
		random(
		type?: "polygon", count?: number, options?: OptionsRandom
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		random(
		type?: "polygons", count?: number, options?: OptionsRandom
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		random(
		type?: typeof TemplateType, count?: number, options?: OptionsRandom
	): GeoJSON.FeatureCollection<any>,
		sample(
		featurecollection: GeoJSON.FeatureCollection<any>, num: number
	): GeoJSON.FeatureCollection<any>,
		hexGrid(
		bbox: Array<number>, cellSize: number, units?: typeof TemplateUnits, triangles?: boolean
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		pointGrid(
		bbox: Array<number>, cellSize: number, units?: typeof TemplateUnits
	): GeoJSON.FeatureCollection<GeoJSON.Point>,
		squareGrid(
		bbox: Array<number>, cellSize: number, units?: typeof TemplateUnits
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		triangleGrid(
		bbox: Array<number>, cellSize: number, units?: typeof TemplateUnits
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		isolines(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, z: string, resolution: number, breaks: Array<number>
	): GeoJSON.FeatureCollection<GeoJSON.LineString>,
		planepoint(
		interpolatedpoint: GeoJSON.Feature<GeoJSON.Point>, triangle: GeoJSON.Feature<GeoJSON.Polygon>
	): number,
		tin(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, propertyName?: string
	): GeoJSON.FeatureCollection<GeoJSON.Polygon>,
		inside(
		point: GeoJSON.Feature<GeoJSON.Point>, polygon: GeoJSON.Feature<GeoJSON.Polygon>
	): boolean,
		tag(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>, field: string, outField: string
	): GeoJSON.FeatureCollection<GeoJSON.Point>,
		within(
		points: GeoJSON.FeatureCollection<GeoJSON.Point>, polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon>
	): GeoJSON.FeatureCollection<GeoJSON.Point>,
		nearest(
		point: GeoJSON.Feature<GeoJSON.Point>, against: GeoJSON.FeatureCollection<GeoJSON.Point>
	): GeoJSON.Feature<GeoJSON.Point>
	}

			declare module.exports: TurfStatic


}

declare module '@turf/turf' {
					declare module.exports: undefined


}

declare module '@turf/collect' {
					declare module.exports: undefined


}

declare module '@turf/along' {
					declare module.exports: undefined


}

declare module '@turf/area' {
					declare module.exports: undefined


}

declare module '@turf/bbox-polygon' {
					declare module.exports: undefined


}

declare module '@turf/bearing' {
					declare module.exports: undefined


}

declare module '@turf/center' {
					declare module.exports: undefined


}

declare module '@turf/centroid' {
					declare module.exports: undefined


}

declare module '@turf/destination' {
					declare module.exports: undefined


}

declare module '@turf/distance' {
					declare module.exports: undefined


}

declare module '@turf/envelope' {
					declare module.exports: undefined


}

declare module '@turf/line-distance' {
					declare module.exports: undefined


}

declare module '@turf/midpoint' {
					declare module.exports: undefined


}

declare module '@turf/point-on-surface' {
					declare module.exports: undefined


}

declare module '@turf/square' {
					declare module.exports: undefined


}

declare module '@turf/bezier' {
					declare module.exports: undefined


}

declare module '@turf/buffer' {
					declare module.exports: undefined


}

declare module '@turf/concave' {
					declare module.exports: undefined


}

declare module '@turf/convex' {
					declare module.exports: undefined


}

declare module '@turf/difference' {
					declare module.exports: undefined


}

declare module '@turf/intersect' {
					declare module.exports: undefined


}

declare module '@turf/simplify' {
					declare module.exports: undefined


}

declare module '@turf/union' {
					declare module.exports: undefined


}

declare module '@turf/combine' {
					declare module.exports: undefined


}

declare module '@turf/explode' {
					declare module.exports: undefined


}

declare module '@turf/flip' {
					declare module.exports: undefined


}

declare module '@turf/kinks' {
					declare module.exports: undefined


}

declare module '@turf/line-slice' {
					declare module.exports: undefined


}

declare module '@turf/point-on-line' {
					declare module.exports: undefined


}

declare module '@turf/helpers' {
					declare module.exports: undefined


}

declare module '@turf/random' {
					declare module.exports: undefined


}

declare module '@turf/sample' {
					declare module.exports: undefined


}

declare module '@turf/isolines' {
					declare module.exports: undefined


}

declare module '@turf/planepoint' {
					declare module.exports: undefined


}

declare module '@turf/tin' {
					declare module.exports: undefined


}

declare module '@turf/inside' {
					declare module.exports: undefined


}

declare module '@turf/tag' {
					declare module.exports: undefined


}

declare module '@turf/within' {
					declare module.exports: undefined


}

declare module '@turf/hex-grid' {
					declare module.exports: undefined


}

declare module '@turf/point-grid' {
					declare module.exports: undefined


}

declare module '@turf/square-grid' {
					declare module.exports: undefined


}

declare module '@turf/triangle-grid' {
					declare module.exports: undefined


}

declare module '@turf/nearest' {
					declare module.exports: undefined


}

declare module '@turf/bbox' {
					declare module.exports: undefined


}

declare module '@turf/circle' {
					declare module.exports: undefined


}

declare module '@turf/geojsonType' {
					declare module.exports: undefined


}

declare module '@turf/propReduce' {
					declare module.exports: undefined


}

declare module '@turf/coordAll' {
					declare module.exports: undefined


}

declare module '@turf/tesselate' {
					declare module.exports: undefined


}