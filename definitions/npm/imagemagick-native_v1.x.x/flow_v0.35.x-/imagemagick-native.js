

declare module 'imagemagick-native' {
		declare export interface IStreamConvertOptions {
		srcFormat?: string,
		quality?: number,
		trim?: boolean,
		trimFuzz?: number,
		width?: number,
		height?: number,
		density?: number,
		resizeStyle?: string,
		gravity?: string,
		format?: string,
		filter?: string,
		blur?: number,
		strip?: boolean,
		rotate?: number,
		flip?: boolean,
		debug?: boolean,
		ignoreWarnings?: boolean
	}

	declare export interface IConvertOptions {
		srcData: Buffer,
		srcFormat?: string,
		quality?: number,
		trim?: boolean,
		trimFuzz?: number,
		width?: number,
		height?: number,
		density?: number,
		resizeStyle?: string,
		gravity?: string,
		format?: string,
		filter?: string,
		blur?: number,
		strip?: boolean,
		rotate?: number,
		flip?: boolean,
		debug?: boolean,
		ignoreWarnings?: boolean
	}

	declare export interface IIdentifyOptions {
		srcData: Buffer,
		debug?: boolean,
		ignoreWarnings?: boolean
	}

	declare export interface IIdentifyResult {
		format: string,
		width: number,
		height: number,
		depth: number,
		density: {
		width: number,
		height: number
	},
		exif: {
		orientation: number
	}
	}

	declare export interface IQuantizeColorsOptions {
		srcData: Buffer,
		colors: number,
		debug?: boolean,
		ignoreWarnings?: boolean
	}

	declare export interface IQuantizeColorsItem {
		r: number,
		g: number,
		b: number,
		hex: string
	}

	declare export interface ICompositeOptions {
		srcData: Buffer,
		compositeData: Buffer,
		gravity?: string,
		debug?: boolean,
		ignoreWarnings?: boolean
	}

	declare export interface IConstPixelsOptions {
		srcData: Buffer,
		x: number,
		y: number,
		columns: number,
		rows: number
	}

	declare export interface IConstPixelsItem {
		red: number,
		green: number,
		blue: number,
		opacity: number
	}

	declare function convert(options: IConvertOptions): Buffer

	declare function convert(options: IConvertOptions, callback: (err: any, result: Buffer) => void): void

	declare function identify(options: IIdentifyOptions): IIdentifyResult

	declare function identify(
		options: IIdentifyOptions, callback: (err: any, result: IIdentifyResult) => void
	): void

	declare function quantizeColors(options: IQuantizeColorsOptions): IQuantizeColorsItem[]

	declare function composite(options: ICompositeOptions): Buffer

	declare function composite(options: ICompositeOptions, callback: (err: any, result: Buffer) => void): void

	declare function getConstPixels(options: IConstPixelsOptions): IConstPixelsItem[]

	declare function quantumDepth(): number

	declare function version(): string

		
}

declare module 'streams' {
			declare export function convert(options: IStreamConvertOptions): stream.Transform

		
}