import type { ChromaStatic } from 'npm$namespace$Chroma'

declare module 'chroma-js-0.5.6' {
					
}

declare module 'npm$namespace$Chroma' {
		declare export interface ChromaStatic {
		(color: string): Color,
		(a: number, b: number, c: number, colorSpace?: string): Color,
		(values: number[], colorSpace?: string): Color,
		color(a: number, b: number, c: number, colorSpace?: string): Color,
		contrast(color1: Color, color2: Color): number,
		contrast(color1: Color, color2: string): number,
		contrast(color1: string, color2: Color): number,
		contrast(color1: string, color2: string): number,
		css(color: string): Color,
		hex(color: string): Color,
		rgb(red: number, green: number, blue: number, alpha?: number): Color,
		hsl(hue: number, saturation: number, lightness: number, alpha?: number): Color,
		hsv(hue: number, saturation: number, value: number, alpha?: number): Color,
		lab(lightness: number, a: number, b: number, alpha?: number): Color,
		lch(lightness: number, chroma: number, hue: number, alpha?: number): Color,
		gl(red: number, green: number, blue: number, alpha?: number): Color,
		interpolate: InterpolateFunction,
		mix: InterpolateFunction,
		luminance(color: Color): number,
		luminance(color: string): number,
		scale(name: string): Scale,
		scale(colors?: string[]): Scale,
		scales: PredefinedScales
	}

	declare interface InterpolateFunction {
		(color1: Color, color2: Color, f: number, mode?: string): Color,
		(color1: Color, color2: string, f: number, mode?: string): Color,
		(color1: string, color2: Color, f: number, mode?: string): Color,
		(color1: string, color2: string, f: number, mode?: string): Color,
		bezier(colors: any[]): (t: number) => Color
	}

	declare interface PredefinedScales {
		[key: string]: Scale,
		cool: Scale,
		hot: Scale
	}

	declare export interface Color {
		new (color: string): Color,
		new (a: number, b: number, c: number, colorSpace?: string): Color,
		new (a: number, b: number, c: number, alpha: number, colorSpace?: string): Color,
		new (values: number[], colorSpace: string): Color,
		hex(): string,
		luminance(): number,
		name(): string,
		alpha(): number,
		alpha(alpha: number): Color,
		css(mode?: string): string,
		interpolate(color: Color, f: number, mode?: string): Color,
		interpolate(color: string, f: number, mode?: string): Color,
		premultiply(): Color,
		rgb(): number[],
		rgba(): number[],
		hsl(): number[],
		hsv(): number[],
		lab(): number[],
		lch(): number[],
		hsi(): number[],
		gl(): number[],
		darken(amount?: number): Color,
		darker(amount: number): Color,
		brighten(amount?: number): Color,
		brighter(amount: number): Color,
		saturate(amount?: number): Color,
		desaturate(amount?: number): Color,
		toString(): string
	}

	declare export interface Scale {
		(value: number): any,
		colors(mode?: string): any[],
		correctLightness(): boolean,
		correctLightness(enable: boolean): Scale,
		domain(): number[],
		domain(domain: number[], classes?: number, mode?: string): Scale,
		mode(colorSpace: string): Scale,
		out(mode: string): Scale,
		range(colors: string[]): Scale
	}

			
}