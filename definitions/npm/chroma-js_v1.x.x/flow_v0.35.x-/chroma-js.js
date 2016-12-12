import type { ChromaStatic } from 'npm$namespace$Chroma'

declare module 'chroma-js' {
					declare module.exports: ChromaStatic


}

declare module 'npm$namespace$Chroma' {
		declare export interface ChromaStatic {
		(color: string): Color,
		(number: number): Color,
		(a: number, b: number, c: number, colorSpace?: string): Color,
		(a: number, b: number, c: number, d: number, colorSpace?: string): Color,
		(values: number[], colorSpace?: string): Color,
		hex(color: string): Color,
		hsl(h: number, s: number, l: number): Color,
		hsv(h: number, s: number, v: number): Color,
		lab(lightness: number, a: number, b: number, alpha?: number): Color,
		lch(l: number, c: number, h: number): Color,
		rgb(r: number, g: number, b: number): Color,
		gl(red: number, green: number, blue: number, alpha?: number): Color,
		temperature(t: number): Color,
		mix(
		col1: string | Color, col2: string | Color, f?: number, colorSpace?: string
	): Color,
		interpolate(
		col1: string | Color, col2: string | Color, f?: number, colorSpace?: string
	): Color,
		blend(col1: string, col2: string, blendMode: string): Color,
		random(): Color,
		contrast(col1: string | Color, col2: string | Color): number,
		bezier(colors: string[]): Scale,
		brewer: {
		OrRd: string[],
		PuBu: string[],
		BuPu: string[],
		Oranges: string[],
		BuGn: string[],
		YlOrBr: string[],
		YlGn: string[],
		Reds: string[],
		RdPu: string[],
		Greens: string[],
		YlGnBu: string[],
		Purples: string[],
		GnBu: string[],
		Greys: string[],
		YlOrRd: string[],
		PuRd: string[],
		Blues: string[],
		PuBuGn: string[],
		Spectral: string[],
		RdYlGn: string[],
		RdBu: string[],
		PiYG: string[],
		PRGn: string[],
		RdYlBu: string[],
		BrBG: string[],
		RdGy: string[],
		PuOr: string[],
		Set2: string[],
		Accent: string[],
		Set1: string[],
		Set3: string[],
		Dark2: string[],
		Paired: string[],
		Pastel2: string[],
		Pastel1: string[]
	},
		limits(data: number[], mode: string, c: number): number[],
		scale(name: string): Scale,
		scale(colors?: string[]): Scale,
		cubehelix(): Cubehelix,
		cmyk(c: number, m: number, y: number, k: number): Color,
		css(col: string, mode?: string): string
	}

	declare export interface Color {
		alpha(a?: number): Color,
		darken(f?: number): Color,
		brighten(f?: number): Color,
		saturate(s?: number): Color,
		desaturate(s?: number): Color,
		set(modechan: string, v: number | string): Color,
		get(modechan: string): number,
		luminance(): number,
		luminance(l: number, mode?: string): Color,
		hex(): string,
		name(): string,
		css(mode?: string): string,
		rgb(): number[],
		rgba(): number[],
		hsl(): number[],
		hsv(): number[],
		hsi(): number[],
		lab(): number[],
		lch(): number[],
		hcl(): number[],
		temperature(): number,
		gl(): number[]
	}

	declare export interface Scale {
		(c: string[]): Scale,
		(value: number): any,
		domain(d?: number[], n?: number, mode?: string): Scale,
		mode(mode: string): Scale,
		correctLightness(enable?: boolean): Scale,
		bezier(colors: string[]): Scale,
		padding(p: number | number[]): Scale,
		colors(c?: number): string[],
		classes(c: number | number[]): (t: number) => Color,
		range(arg: string[]): Scale,
		scale(): Scale,
		out(mode: string): Scale
	}

	declare export interface Cubehelix {
		start(s: number): Cubehelix,
		rotations(r: number): Cubehelix,
		gamma(g: number): Cubehelix,
		lightness(l: number[]): Cubehelix
	}

			
}