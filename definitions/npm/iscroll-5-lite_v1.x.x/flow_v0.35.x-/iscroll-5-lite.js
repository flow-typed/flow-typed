

declare module 'iscroll-5-lite' {
		declare interface IScrollOptions {
		scrollX?: boolean,
		scrollY?: boolean,
		x?: number,
		y?: number,
		bounce?: boolean,
		bounceLock?: boolean,
		momentum?: boolean,
		lockDirection?: boolean,
		useTransform?: boolean,
		useTransition?: boolean
	}

		declare class IScroll  {
		constructor(element: string, options?: IScrollOptions): this;
		constructor(element: HTMLElement, options?: IScrollOptions): this;
		destroy(): void;
		refresh(): void;
		scrollTo(x: number, y: number, time?: number, relative?: boolean): void;
		scrollToElement(element: string, time?: number): void;
		scrollToElement(element: HTMLElement, time?: number): void;
		disable(): void;
		enable(): void;
		stop(): void;
		on: (type: string, fn: () => void) => void
	}

	
}