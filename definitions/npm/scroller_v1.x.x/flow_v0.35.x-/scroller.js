

declare module 'scroller' {
		declare interface ScrollerOptions {
		scrollingX?: boolean,
		scrollingY?: boolean,
		animating?: boolean,
		animationDuration?: number,
		bouncing?: boolean,
		locking?: boolean,
		paging?: boolean,
		snapping?: boolean,
		zooming?: boolean,
		minZoom?: number,
		maxZoom?: number,
		speedMultiplier?: number
	}

	declare interface ScrollValues {
		left: number,
		top: number
	}

	declare interface ScrollValuesWithZoom {
		zoom: number
	}

		declare class Scroller  {
		constructor(callback: (left: number, top: number, zoom: number) => void, options: ScrollerOptions): this;
		setDimensions(
		clientWidth: number, clientHeight: number, contentWidth: number, contentHeight: number
	): void;
		setPosition(left: number, top: number): void;
		setSnapSize(width: number, height: number): void;
		activatePullToRefresh(
		height: number, activateCallback: Function, deactivateCallback: Function, startCallback: Function
	): void;
		finishPullToRefresh(): void;
		getValues(): ScrollValuesWithZoom;
		getScrollMax(): ScrollValues;
		zoomTo(
		level: number, animate?: boolean, originLeft?: number, originTop?: number, callback?: Function
	): void;
		zoomBy(
		factor: number, animate?: boolean, originLeft?: number, originTop?: number, callback?: Function
	): void;
		scrollTo(left?: number, top?: number, animate?: boolean, zoom?: number): void;
		scrollBy(left?: number, top?: number, animate?: boolean): void;
		doMouseZoom(wheelDelta: number, timeStamp: number, pageX: number, pageY: number): void;
		doTouchStart(touches: any[], timeStamp: number): void;
		doTouchMove(touches: any[], timeStamp: number, scale?: number): void;
		doTouchEnd(timeStamp: number): void
	}

	
}