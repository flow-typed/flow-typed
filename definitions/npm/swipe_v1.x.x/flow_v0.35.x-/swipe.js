

declare module 'swipe' {
		declare interface SwipeOptions {
		startSlide?: number,
		speed?: number,
		auto?: number,
		continuous?: boolean,
		disableScroll?: boolean,
		stopPropagation?: boolean,
		callback?: (index: number, elem: HTMLElement) => void,
		transitionEnd?: (index: number, elem: HTMLElement) => void
	}

		declare class Swipe  {
		constructor(container: HTMLElement, options?: SwipeOptions): this;
		prev(): void;
		next(): void;
		getPos(): number;
		getNumSlides(): number;
		kill(): void;
		attachEvents(): void;
		setup(): void;
		slide(index: number, duration: number): void
	}

	
}