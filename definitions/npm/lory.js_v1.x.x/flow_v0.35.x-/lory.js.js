

declare module 'lory.js' {
		declare interface LoryStatic {
		(element: Element, options?: LoryOptions): LoryStatic,
		prev(): void,
		next(): void,
		slideTo(index: number): void,
		setup(): void,
		reset(): void
	}

	declare interface LoryOptions {
		slidesToScroll?: number,
		slideSpeed?: number,
		rewindSpeed?: number,
		snapBackSpeed?: number,
		ease?: string,
		rewind?: boolean,
		infinite?: boolean | number,
		beforeInit?: <T>() => T,
		afterInit?: <T>() => T,
		beforePrev?: <T>() => T,
		beforeNext?: <T>() => T,
		beforeTouch?: <T>() => T,
		beforeResize?: <T>() => T
	}

			
}