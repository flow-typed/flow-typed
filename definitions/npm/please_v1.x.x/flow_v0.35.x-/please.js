import type { Please } from 'npm$namespace$PleaseJS'

declare module 'please' {
					
}

declare module 'npm$namespace$PleaseJS' {
		declare export interface Please {
		make_color(options?: MakeColorOption): Array<string>,
		make_color(options?: MakeColorOption): Array<RGB>,
		make_color(options?: MakeColorOption): Array<HSV>,
		make_scheme(base_color: HSV, options?: MakeSchemeOption): Array<string>,
		make_scheme(base_color: HSV, options?: MakeSchemeOption): Array<RGB>,
		make_scheme(base_color: HSV, options?: MakeSchemeOption): Array<HSV>,
		NAME_to_HEX(name: string): string,
		NAME_to_RGB(name: string): RGB,
		NAME_to_HSV(name: string): HSV,
		HEX_to_RGB(hex: string): RGB,
		RGB_to_HEX(rgb: RGB): string,
		HSV_to_RGB(hsv: HSV): RGB,
		RGB_to_HSV(rgb: RGB): HSV,
		HSV_to_HEX(hsv: HSV): string,
		HEX_to_HSV(hex: string): HSV
	}

	declare export interface MakeColorOption {
		hue?: number,
		saturation?: number,
		value?: number,
		base_color?: string,
		greyscale?: boolean,
		grayscale?: boolean,
		golden?: boolean,
		full_random?: boolean,
		colors_returned?: number,
		format?: string
	}

	declare export interface MakeSchemeOption {
		scheme_type: string,
		format: string
	}

	declare export interface RGB {
		r: number,
		g: number,
		b: number
	}

	declare export interface HSV {
		h: number,
		s: number,
		v: number
	}

			
}