

declare module 'ngeohash' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ngeohash' {
	declare type GeographicBoundingBox = [number, number, number, number];

	declare type NSEW = [number, number];

	declare interface GeographicPoint {
		latitude: number,
		longitude: number
	}

	declare function encode(latitude: number, longitude: number, precision?: number): string

	declare function decode(hashstring: string): GeographicPoint

	declare function decode_bbox(hashstring: string): GeographicBoundingBox

	declare function bboxes(
		minlat: number, minlon: number, maxlat: number, maxlon: number, precision?: number
	): Array<string>

	declare function neighbor(hashstring: string, direction: NSEW): string

	declare function neighbors(hashstring: string): Array<string>

	declare function encode_int(latitude: number, longitude: number, bitDepth?: number): number

	declare function decode_int(hashinteger: number, bitDepth?: number): GeographicPoint

	declare function decode_bbox_int(hashinteger: number, bitDepth?: number): GeographicBoundingBox

	declare function bboxes_int(
		minlat: number, minlon: number, maxlat: number, maxlon: number, bitDepth?: number
	): number

	declare function neighbor_int(hashinteger: number, direction: NSEW, bitDepth?: number): number

	declare function neighbors_int(hashinteger: number, bitDepth?: number): number

		
}