

declare module 'randomcolor' {
		declare interface RandomColorOptions {
		hue?: number | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "monochrome" | "random",
		luminosity?: "bright" | "light" | "dark" | "random",
		count?: number,
		seed?: number | string,
		format?: "hsvArray" | "hslArray" | "hsl" | "hsla" | "rgbArray" | "rgb" | "rgba" | "hex"
	}

	declare function randomColor(options?: RandomColorOptions): string

		
}