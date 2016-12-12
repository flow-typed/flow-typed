import type { TilebeltStatic } from 'npm$namespace$tilebelt'

declare module 'tilebelt' {
					declare module.exports: TilebeltStatic


}

declare module 'npm$namespace$tilebelt' {
		declare interface TilebeltStatic {
		tileToGeoJSON(tile: Array<number>): GeoJSON.Feature<GeoJSON.Polygon>,
		tileToBBOX(tile: Array<number>): Array<number>,
		pointToTile(lon: number, lat: number, z: number): Array<number>,
		getChildren(tile: Array<number>): Array<Array<number>>,
		getParent(tile: Array<number>): Array<number>,
		getSiblings(tile: Array<number>): Array<Array<number>>,
		hasSiblings(tile: Array<number>, tiles: Array<Array<number>>): boolean,
		hasTile(tiles: Array<Array<number>>, tile: Array<number>): boolean,
		tilesEqual(tile1: Array<number>, tile2: Array<number>): boolean,
		tileToQuadkey(tile: Array<number>): string,
		quadkeyToTile(quadkey: string): Array<number>,
		bboxToTile(bbox: Array<number>): Array<number>,
		pointToTileFraction(lon: number, lat: number, z: number): Array<number>
	}

			
}