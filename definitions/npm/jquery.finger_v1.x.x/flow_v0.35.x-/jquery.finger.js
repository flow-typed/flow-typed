

declare module 'jquery.finger' {
		declare interface JQueryFingerEventObject {
		x: number,
		y: number,
		dx: number,
		dy: number,
		adx: number,
		ady: number,
		orientation: string,
		direction: number
	}

	declare interface JQuery {
		on(
		events: "tap", handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "doubletap", handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "press", handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "drag", handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "flick", handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "tap", data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "doubletap", data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "press", data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "drag", data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "flick", data: any, handler: (eventObject: JQueryFingerEventObject, ...args: any[]) => any
	): JQuery
	}

	declare interface JQueryStatic {
		Finger: JQueryFinger.JQueryFingerOptions
	}

			
}

declare module 'npm$namespace$JQueryFinger' {
		declare export interface JQueryFingerOptions {
		pressDuration: number,
		doubleTapInterval: number,
		flickDuration: number,
		motionThreshhold: number,
		preventDefault: boolean
	}

			
}