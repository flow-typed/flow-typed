

declare module 'proj4' {
		declare interface InterfaceCoordinates {
		x: number,
		y: number,
		z?: number,
		m?: number
	}

	declare interface InterfaceDatum {
		datum_type: number,
		a: number,
		b: number,
		es: number,
		ep2: number
	}

	declare interface Proj4Static {
		forward(coordinates: typeof TemplateCoordinates): Array<number>,
		inverse(coordinates: typeof TemplateCoordinates): Array<number>
	}

	declare interface InterfaceProjection {
		datum: string,
		b: number,
		rf: number,
		sphere: number,
		es: number,
		e: number,
		ep2: number,
		forward(coordinates: typeof TemplateCoordinates): Array<number>,
		inverse(coordinates: typeof TemplateCoordinates): Array<number>
	}

	declare export function Proj(srsCode: any, callback?: any): InterfaceProjection

	declare export function Point(x: number, y: number, z?: number): InterfaceCoordinates

	declare export function Point(coordinates: Array<number>): InterfaceCoordinates

	declare export function Point(coordinates: InterfaceCoordinates): InterfaceCoordinates

	declare export function Point(coordinates: string): InterfaceCoordinates

	declare export function toPoint(array: Array<number>): InterfaceCoordinates

	declare export function defs(name: string): any

	declare export function defs(name: string, projection: string): any

	declare export function defs(name: Array<Array<string>>): any

	declare export function transform(
		source: InterfaceProjection, dest: InterfaceProjection, point: typeof TemplateCoordinates
	): any

	declare export function mgrs(coordinates: Array<number>, accuracy: number): string

	declare function proj4(fromProjection: string): Proj4Static

	declare function proj4(fromProjection: string, toProjection: string): Proj4Static

	declare function proj4(fromProjection: string, coordinates: typeof TemplateCoordinates): Array<number>

	declare function proj4(
		fromProjection: string, toProjection: string, coordinates: typeof TemplateCoordinates
	): Array<number>

		declare module.exports: undefined


}