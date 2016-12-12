

declare module 'jquery.color' {
		declare interface JQueryColor {
		red(): number,
		red(val: number): JQueryColor,
		red(val: string): JQueryColor,
		green(): number,
		green(val: number): JQueryColor,
		green(val: string): JQueryColor,
		blue(): number,
		blue(val: number): JQueryColor,
		blue(val: string): JQueryColor,
		alpha(): number,
		alpha(val: number): JQueryColor,
		alpha(val: string): JQueryColor,
		hue(): number,
		hue(val: number): JQueryColor,
		hue(val: string): JQueryColor,
		saturation(): number,
		saturation(val: number): JQueryColor,
		saturation(val: string): JQueryColor,
		lightness(): number,
		lightness(val: number): JQueryColor,
		lightness(val: string): JQueryColor,
		rgba(): number[],
		rgba(red: number, green: number, blue: number, alpha?: number): JQueryColor,
		rgba(val: RgbaColor): JQueryColor,
		rgba(vals: number[]): JQueryColor,
		hsla(): number[],
		hsla(
		hue: number, saturation: number, lightness: number, alpha?: number
	): JQueryColor,
		hsla(val: HslaColor): JQueryColor,
		hsla(vals: number[]): JQueryColor,
		toRgbaString(): string,
		toHslaString(): string,
		toHexString(includeAlpha?: boolean): string,
		transition(othercolor: JQueryColor, distance: number): JQueryColor,
		blend(othercolor: JQueryColor): void,
		is(otherColor: JQueryColor): boolean
	}

	declare interface HslaColor {
		hue?: number,
		saturation?: number,
		lightness?: number,
		alpha?: number
	}

	declare interface RgbaColor {
		red?: number,
		green?: number,
		blue?: number,
		alpha?: number
	}

	declare interface JQueryStatic {
		Color(color: HslaColor): JQueryColor,
		Color(color: RgbaColor): JQueryColor,
		Color(color: string): JQueryColor
	}

			
}