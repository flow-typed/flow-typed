

declare module 'jquery-knob' {
		declare interface JQuery {
		knob(options?: JQueryKnob.JQueryKnobOptions): JQuery
	}

			
}

declare module 'npm$namespace$JQueryKnob' {
		declare export interface JQueryKnobOptions {
		min?: number,
		max?: number,
		step?: number,
		angleOffset?: number,
		angleArc?: number,
		stopper?: boolean,
		readOnly?: boolean,
		rotation?: string,
		cursor?: string | boolean,
		thickness?: number,
		lineCap?: string,
		width?: number,
		displayInput?: boolean,
		displayPrevious?: boolean,
		fgColor?: string,
		inputColor?: string,
		font?: string,
		fontWeight?: string,
		bgColor?: string,
		release?: (value: number) => void,
		change?: (value: number) => void,
		draw?: () => void,
		cancel?: () => void,
		format?: (value: number) => void
	}

			
}