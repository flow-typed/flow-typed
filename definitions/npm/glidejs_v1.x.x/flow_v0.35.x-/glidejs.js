

declare module 'glidejs' {
		declare interface JQuery {
		glide(options?: JQueryGlide.IGlideOptions): JQuery
	}

			
}

declare module 'npm$namespace$JQueryGlide' {
		declare interface IGlideOptions {
		autoplay?: any,
		hoverpause?: boolean,
		circular?: boolean,
		animationDuration?: number,
		animationTimingFunc?: string,
		arrows?: any,
		arrowsWrapperClass?: string,
		arrowMainClass?: string,
		arrowRightClass?: string,
		arrowRightText?: string,
		arrowLeftClass?: string,
		arrowLeftText?: string,
		navigation?: any,
		navigationCenter?: boolean,
		navigationClass?: string,
		navigationItemClass?: string,
		navigationCurrentItemClass?: string,
		keyboard?: boolean,
		touchDistance?: any,
		beforeInit?: Function,
		afterInit?: Function,
		beforeTransition?: Function,
		afterTransition?: Function
	}

	declare interface IGlideApi {
		current(): number,
		reinit(): void,
		destroy(): void,
		play(): void,
		pause(): void,
		next(callback: Function): void,
		prev(callback: Function): void,
		jump(distance: number, callback: Function): void,
		nav(target: string): void,
		arrows(target: string): void
	}

			
}