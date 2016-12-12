

declare module 'fastclick' {
		declare interface FastClickObject {
		lastTouchIdentifier: number,
		layer: Element,
		tapDelay: number,
		targetElement: any,
		touchBoundary: number,
		touchStartX: number,
		touchStartY: number,
		trackingClick: boolean,
		trackingClickStart: number,
		destroy(): void,
		determineEventType(targetElement: any): string,
		findControl(labelElement: any): any,
		focus(targetElement: any): void,
		getTargetElementFromEventTarget(eventTarget: EventTarget): any,
		needsClick(target: any): boolean,
		needsFocus(target: any): boolean
	}

	declare interface FastClickOptions {
		touchBoundary?: number,
		tapDelay?: number
	}

	declare interface FastClickStatic {
		new (layer: any, options?: FastClickOptions): FastClickObject,
		attach(layer: any, options?: FastClickOptions): FastClickObject
	}

	declare function fastclick(layer: any, options?: FastClickOptions): FastClickObject

		declare module.exports: undefined


}