

declare module 'spin' {
		declare interface SpinnerOptions {
		lines?: number,
		length?: number,
		width?: number,
		radius?: number,
		corners?: number,
		rotate?: number,
		direction?: number,
		color?: any,
		speed?: number,
		trail?: number,
		shadow?: boolean,
		hwaccel?: boolean,
		className?: string,
		zIndex?: number,
		top?: string,
		left?: string,
		scale?: number,
		opacity?: number,
		fps?: number,
		position?: string
	}

		declare class Spinner  {
		el: HTMLElement;
		constructor(options?: SpinnerOptions): this;
		spin(target?: HTMLElement): Spinner;
		stop(): Spinner;
		lines(el: HTMLElement, o: SpinnerOptions): HTMLElement;
		opacity(el: HTMLElement, i: number, val: number, o: SpinnerOptions): void
	}

	
}

declare module 'spin.js' {
					declare module.exports: undefined


}