

declare module 'slick.autotooltips' {
					
}

declare module 'npm$namespace$Slick' {
		declare export interface SlickGridAutoTooltipsOption {
		enableForCells?: boolean,
		enableForHeaderCells?: boolean,
		maxToolTipLength?: number
	}

		declare export class AutoTooltips extends Plugin<Slick.SlickData> {
		constructor(option?: SlickGridAutoTooltipsOption): this
	}

	
}