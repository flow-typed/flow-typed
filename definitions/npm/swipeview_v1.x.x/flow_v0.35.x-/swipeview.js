

declare module 'swipeview' {
		declare interface SwipeViewEvent {
		(fn: Function): void
	}

	declare interface SwipeViewOptions {
		text?: string,
		numberOfPages?: number,
		snapThreshold?: number,
		hastyPageFlip?: boolean,
		loop?: boolean
	}

		declare class SwipeView  {
		masterPages: HTMLElement[];
		currentMasterPage: number;
		wrapper: HTMLElement;
		slider: HTMLElement;
		constructor(element: string): this;
		constructor(element: string, options: SwipeViewOptions): this;
		destroy(): void;
		refreshSize(): void;
		updatePageCount(n: number): void;
		goToPage(p: number): void;
		next(): void;
		prev(): void;
		handleEvent(e: Event): void;
		onFlip: SwipeViewEvent;
		onMoveOut: SwipeViewEvent;
		onMoveIn: SwipeViewEvent;
		onTouchStart: SwipeViewEvent;
		wrapperHeight: number
	}

	
}