

declare module 'FPSMeter' {
		declare interface FPSMeterOptions {
		interval?: number,
		smoothing?: number,
		show?: string,
		toggleOn?: string,
		decimals?: number,
		maxFps?: number,
		threshold?: number,
		position?: string,
		zIndex?: number,
		left?: string,
		top?: string,
		right?: string,
		bottom?: string,
		margin?: string,
		theme?: string,
		heat?: number,
		graph?: number,
		history?: number
	}

		declare class FPSMeter  {
		constructor(anchor?: HTMLElement, options?: FPSMeterOptions): this;
		options: FPSMeterOptions;
		tick(): void;
		tickStart(): void;
		pause(): FPSMeter;
		resume(): FPSMeter;
		set(name: string, value: any): FPSMeter;
		showDuration(): FPSMeter;
		showFps(): FPSMeter;
		toggle(): FPSMeter;
		hide(): FPSMeter;
		show(): FPSMeter;
		destroy(): void
	}

	
}