import type { color } from 'npm$namespace$dojox'

declare module 'dojox.color' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface color {
		
	}

			
}

declare module 'color' {
		declare interface Palette {
		(base: String): void
	}

	declare interface Palette {
		(base: any[]): void
	}

	declare interface Palette {
		(base: dojo._base.Color): void
	}

	declare interface Palette {
		(base: dojox.color.Palette): void
	}

		declare class MeanColorModel extends undefined$NeutralColorModel {
		constructor(startColor: dojo._base.Color, endColor?: dojo._base.Color): this;
		computeNeutral(min: number, max: number, sum: number, values: number[]): any;
		getColor(value: number): any;
		getNormalizedValue(value: number): any;
		initialize(items: Object[], colorFunc: Function): void
	}

	declare class NeutralColorModel extends undefined$SimpleColorModel {
		constructor(startColor: dojo._base.Color, endColor?: dojo._base.Color): this;
		computeNeutral(min: number, max: number, sum: number, values: number[]): void;
		getColor(value: number): any;
		getNormalizedValue(value: number): any;
		initialize(items: Object[], colorFunc: Function): void
	}

	declare class SimpleColorModel  {
		constructor(startColor: dojo._base.Color, endColor?: dojo._base.Color): this;
		getColor(value: number): any;
		getNormalizedValue(value: number): void
	}

	
}

declare module 'Palette' {
		declare interface clone {
		(): any
	}

	declare interface generate {
		(base: String, type: Function): any
	}

	declare interface generate {
		(base: dojo._base.Color, type: Function): any
	}

	declare interface generate {
		(base: String, type: String): any
	}

	declare interface generate {
		(base: dojo._base.Color, type: String): any
	}

	declare interface transform {
		(kwArgs: Object): any
	}

	declare interface generators {
		analogous(args: Object): any,
		complementary(args: Object): any,
		compound(args: Object): any,
		monochromatic(args: Object): any,
		shades(args: Object): any,
		splitComplementary(args: Object): any,
		triadic(args: Object): any
	}

			
}

declare module 'api' {
				declare class ColorModel  {
		constructor(): this;
		getColor(value: number): void;
		initialize(items: Object[], colorFunc: Function): void
	}

	
}

declare module 'dojox/color' {
					declare module.exports: color


}

declare module 'dojox/color/MeanColorModel' {
					declare module.exports: MeanColorModel


}

declare module 'dojox/color/NeutralColorModel' {
					declare module.exports: NeutralColorModel


}

declare module 'dojox/color/SimpleColorModel' {
					declare module.exports: SimpleColorModel


}

declare module 'dojox/color/Palette' {
					declare module.exports: Palette


}

declare module 'dojox/color/Palette.generators' {
					declare module.exports: generators


}

declare module 'dojox/color/api/ColorModel' {
					declare module.exports: ColorModel


}