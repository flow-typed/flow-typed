import type { ShapefileStatic } from 'npm$namespace$shapefile'

declare module 'shapefile' {
					declare module.exports: ShapefileStatic


}

declare module 'npm$namespace$shapefile' {
		declare interface Options {
		encoding: string,
		highWaterMark: number
	}

	declare interface Feature {
		done: boolean,
		value: GeoJSON.Feature<any>
	}

	declare interface Shapefile {
		bbox: Array<number>,
		read(): Promise<Feature>
	}

	declare interface ShapefileStatic {
		open(shp: any, dbf?: any, options?: Options): Promise<Shapefile>,
		read(
		shp: any, dbf?: any, options?: Options
	): Promise<GeoJSON.FeatureCollection<any>>
	}

			
}