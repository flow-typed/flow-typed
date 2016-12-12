

declare module 'flipsnap' {
		declare interface IFlipsnap {
		hasPrev(): boolean,
		hasNext(): boolean,
		toPrev(transitionDuration?: number): void,
		toNext(transitionDuration?: number): void,
		moveToPoint(point: number, transitionDuration?: number): void,
		refresh(): void,
		element: HTMLElement
	}

	declare interface FlipsnapStatic {
		(element: HTMLElement, opts?: FlipsnapOptions): IFlipsnap,
		(selector: string, opts?: FlipsnapOptions): IFlipsnap
	}

	declare interface FlipsnapOptions {
		maxPoint?: number,
		distance?: number,
		transitionDuration?: number,
		disableTouch?: boolean,
		disable3d?: boolean
	}

	declare interface HTMLElement {
		addEventListener(type: "fstouchstart", listener: (ev: Event) => any, useCapture?: boolean): void,
		addEventListener(
		type: "fstouchmove", listener: (ev: FlipsnapTouchMoveEvent) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "fstouchend", listener: (ev: FlipsnapTouchEndEvent) => any, useCapture?: boolean
	): void
	}

	declare interface FlipsnapTouchMoveEvent {
		delta: number,
		direction: number
	}

	declare interface FlipsnapTouchEndEvent {
		moved: boolean,
		cancelled: boolean,
		newPoint: number,
		originalPoint: number
	}

			
}