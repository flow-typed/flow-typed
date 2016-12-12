

declare module 'tinycolor' {
		declare interface tinycolor {
		(color: string): tinycolorInstance,
		(color: ColorFormats.RGB): tinycolorInstance,
		(color: ColorFormats.RGBA): tinycolorInstance,
		(color: ColorFormats.HSL): tinycolorInstance,
		(color: ColorFormats.HSLA): tinycolorInstance,
		(color: ColorFormats.HSV): tinycolorInstance,
		(color: ColorFormats.HSVA): tinycolorInstance,
		fromRatio(ratio: any): tinycolorInstance,
		readability(
		firstColor: tinycolorInstance, secondColor: tinycolorInstance
	): Readable.Readable,
		isReadable(foreColor: tinycolorInstance, backColor: tinycolorInstance): boolean,
		mostReadable(
		color: tinycolorInstance, colorsToCompare: tinycolorInstance[]
	): tinycolorInstance,
		mix(
		color1: tinycolorInstance, color2: tinycolorInstance, amount?: number
	): tinycolorInstance,
		random(): tinycolorInstance,
		hexNames: {
		[key: string]: string
	},
		names: {
		[key: string]: string
	}
	}

	declare interface tinycolorInstance {
		isValid(): boolean,
		isLight(): boolean,
		isDark(): boolean,
		getFormat(): string,
		getOriginalInput(): any,
		getAlpha(): number,
		getBrightness(): number,
		setAlpha(alpha: number): tinycolorInstance,
		toHsv(): ColorFormats.HSVA,
		toHsvString(): string,
		toHsl(): ColorFormats.HSLA,
		toHslString(): string,
		toHex(): string,
		toHexString(): string,
		toHex8(): string,
		toHex8String(): string,
		toRgb(): ColorFormats.RGBA,
		toRgbString(): string,
		toPercentageRgb(): ColorFormats.RGBA,
		toPercentageRgbString(): string,
		toName(): string,
		toFilter(): string,
		toString(format?: string): string,
		lighten(amount?: number): tinycolorInstance,
		brighten(amount?: number): tinycolorInstance,
		darken(amount?: number): tinycolorInstance,
		desaturate(amount?: number): tinycolorInstance,
		saturate(amount?: number): tinycolorInstance,
		greyscale(): tinycolorInstance,
		spin(amount?: number): tinycolorInstance,
		analogous(results?: number, slices?: number): tinycolorInstance[],
		monochromatic(results?: number): tinycolorInstance[],
		splitcomplement(): tinycolorInstance[],
		triad(): tinycolorInstance[],
		tetrad(): tinycolorInstance[],
		complement(): tinycolorInstance,
		clone(): tinycolorInstance
	}

			
}

declare module 'npm$namespace$Readable' {
		declare interface Readable {
		brightness: number,
		color: number
	}

			
}

declare module 'npm$namespace$ColorFormats' {
		declare interface RGB {
		r: number,
		g: number,
		b: number
	}

	declare interface RGBA {
		a: number
	}

	declare interface HSL {
		h: number,
		s: number,
		l: number
	}

	declare interface HSLA {
		a: number
	}

	declare interface HSV {
		h: number,
		s: number,
		v: number
	}

	declare interface HSVA {
		a: number
	}

			
}

declare module 'tinycolor2' {
					declare module.exports: undefined


}