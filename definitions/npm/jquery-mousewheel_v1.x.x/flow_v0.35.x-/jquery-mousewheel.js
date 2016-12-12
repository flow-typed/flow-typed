

declare module 'jquery-mousewheel' {
		declare interface JQuery {
		mousewheel(
		handler: (
		eventObject: JQueryMousewheel.JQueryMousewheelEventObject, ...args: any[]
	) => any
	): JQuery,
		unmousewheel(): JQuery
	}

			
}

declare module 'npm$namespace$JQueryMousewheel' {
		declare interface JQueryMousewheelEventObject {
		deltaX: number,
		deltaY: number,
		deltaFactor: number,
		deltaMode: number,
		absDelta: number
	}

			
}