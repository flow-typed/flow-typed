import type { InteractStatic } from 'npm$namespace$Interact'

declare module 'interact' {
					
}

declare module 'npm$namespace$Interact' {
		declare interface Interactable {
		accept(): any,
		accept(newValue: Element): Interactable,
		accept(newValue: string): Interactable,
		actionChecker(): Function,
		actionChecker(checker: Function): Interactable,
		autoScroll(): any,
		autoScroll(options: boolean): Interactable,
		autoScroll(options: {
		[key: string]: any
	}): Interactable,
		context(): Node,
		defaultActionChecker(event: any): string,
		deltaSource(): string,
		deltaSource(newValue: String): Interactable,
		draggable(): boolean,
		draggable(options: boolean): Interactable,
		draggable(options: {
		[key: string]: any
	}): Interactable,
		dropCheck(event: MouseEvent): boolean,
		dropCheck(event: TouchEvent): boolean,
		dropChecker(): Function,
		dropChecker(checker: Function): Interactable,
		dropzone(): any,
		dropzone(options: boolean): Interactable,
		dropzone(options: {
		[key: string]: any
	}): Interactable,
		element(): Element,
		fire(iEvent: InteractEvent): Interactable,
		gesturable(): any,
		gesturable(options: boolean): Interactable,
		gesturable(options: {
		[key: string]: any
	}): Interactable,
		getRect(): ClientRect,
		ignoreFrom(): any,
		ignoreFrom(newValue: string): Interactable,
		ignoreFrom(newValue: Element): Interactable,
		inertia(): any,
		inertia(options: boolean): Interactable,
		inertia(options: {
		[key: string]: any
	}): Interactable,
		off(eventType: string, listener: Function, useCapture?: boolean): Interactable,
		on(eventType: string, listener: Function, useCapture?: boolean): Interactable,
		origin(): Point,
		origin(newValue: HTMLElement): Interactable,
		origin(newValue: SVGElement): Interactable,
		origin(newValue: Point): Interactable,
		preventDefault(newValue: boolean | string): Interactable,
		rectChecker(): Function,
		rectChecker(newValue: Function): Interactable,
		resizable(): Interactable,
		resizable(options: boolean): Interactable,
		resizable(options: {
		[key: string]: any
	}): Interactable,
		restrict(): Restrict,
		restrict(newValue: Restrict): Interactable,
		set(options: {
		[key: string]: any
	}): Interactable,
		snap(): any,
		snap(options: boolean): Interactable,
		snap(options: {
		[key: string]: any
	}): Interactable,
		squareResize(): boolean,
		squareResize(newValue: boolean): Interactable,
		styleCursor(): boolean,
		styleCursor(newValue: boolean): Interactable,
		unset(): InteractStatic,
		validateSetting(context: string, option: string, value: any): any
	}

	declare interface Coordinates {
		clientX: number,
		clientY: number,
		pageX: number,
		pageY: number,
		timeStamp: number
	}

	declare interface Debug {
		target: any,
		dragging: any,
		resizing: any,
		gesturing: any,
		prepared: any,
		prevCoords: Coordinates,
		downCoords: Coordinates,
		pointerIds: any[],
		pointerMoves: any[],
		addPointer: any,
		removePointer: any,
		recordPointers: any,
		inertia: InertiaStatus,
		downTime: any,
		downEvent: any,
		prevEvent: any,
		Interactable: any,
		IOptions: any,
		interactables: any,
		dropzones: any,
		pointerIsDown: any,
		defaultOptions: any,
		defaultActionChecker: any,
		actions: any,
		dragMove: any,
		resizeMove: any,
		gestureMove: any,
		pointerUp: any,
		pointerDown: any,
		pointerMove: any,
		pointerHover: any,
		events: any,
		globalEvents: any,
		delegatedEvents: any
	}

	declare interface InertiaStatus {
		active: boolean,
		target: any,
		targetElement: any,
		startEvent: any,
		pointerUp: any,
		xe: number,
		ye: number,
		duration: number,
		t0: number,
		vx0: number,
		vys: number,
		lambda_v0: number,
		one_ve_v0: number,
		i: any
	}

	declare interface Point {
		x: number,
		y: number
	}

	declare interface Restrict {
		drag?: any,
		gesture?: any,
		resize?: any,
		elementRect?: {
		[direction: string]: number
	}
	}

	declare interface InteractEvent {
		altKey: boolean,
		axes: string,
		button: number,
		clientX0: number,
		clientX: number,
		clientY0: number,
		clientY: number,
		ctrlKey: boolean,
		dt: number,
		duration: number,
		dx: number,
		dy: number,
		metaKey: boolean,
		pageX: number,
		pageY: number,
		shiftKey: boolean,
		speed: number,
		t0: number,
		target: any,
		timeStamp: number,
		type: string,
		velocityX: number,
		velocityY: number,
		x0: number,
		y0: number
	}

	declare interface TouchEvent {
		pageX: number,
		pageY: number,
		type: string
	}

	declare interface InteractStatic {
		(element: HTMLElement): Interactable,
		(element: SVGElement): Interactable,
		(element: string): Interactable,
		(element: string, {Element}: <<UNKNOWN PARAM FORMAT>>): Interactable,
		autoScroll(): any,
		autoScroll(options: boolean): InteractStatic,
		autoScroll(options: {
		[key: string]: any
	}): InteractStatic,
		currentAction(): string,
		debug(): Debug,
		deltaSource(): string,
		deltaSource(newValue: string): InteractStatic,
		dynamicDrop(): boolean,
		dynamicDrop(newValue: boolean): InteractStatic,
		enableDragging(): boolean,
		enableDragging(newValue: boolean): InteractStatic,
		enableGesturing(): boolean,
		enableGesturing(newValue: boolean): InteractStatic,
		enableResizing(): boolean,
		enableResizing(newValue: boolean): InteractStatic,
		inertia(): any,
		inertia(options: boolean): InteractStatic,
		inertia(options: {
		[key: string]: any
	}): InteractStatic,
		isSet(element: Element): boolean,
		margin(): number,
		margin(newvalue: number): InteractStatic,
		off(type: string, listener: Function, useCapture?: boolean): InteractStatic,
		on(type: string, listener: Function, useCapture?: boolean): InteractStatic,
		restrict(): Restrict,
		restrict(newValue: Restrict): InteractStatic,
		simulate(action: string, element: Element, pointerEvent?: any): InteractStatic,
		snap(): any,
		snap(options: boolean): InteractStatic,
		snap(options: {
		[key: string]: any
	}): InteractStatic,
		stop(event: Event): InteractStatic,
		styleCursor(): boolean,
		styleCursor(newValue: boolean): InteractStatic,
		supportsTouch(): boolean
	}

			
}

declare module 'interact.js' {
					declare module.exports: undefined


}