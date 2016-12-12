

declare module 'hammerjs' {
	declare type RecognizerTuple = [RecognizerStatic] | [RecognizerStatic, RecognizerOptions] | [RecognizerStatic, RecognizerOptions, string | string[]] | [RecognizerStatic, RecognizerOptions, string | string[], (string | Recognizer) | (string | Recognizer)[]];

	declare interface HammerStatic {
		new (element: HTMLElement | SVGElement, options?: HammerOptions): HammerManager,
		defaults: HammerDefaults,
		VERSION: number,
		INPUT_START: number,
		INPUT_MOVE: number,
		INPUT_END: number,
		INPUT_CANCEL: number,
		STATE_POSSIBLE: number,
		STATE_BEGAN: number,
		STATE_CHANGED: number,
		STATE_ENDED: number,
		STATE_RECOGNIZED: number,
		STATE_CANCELLED: number,
		STATE_FAILED: number,
		DIRECTION_NONE: number,
		DIRECTION_LEFT: number,
		DIRECTION_RIGHT: number,
		DIRECTION_UP: number,
		DIRECTION_DOWN: number,
		DIRECTION_HORIZONTAL: number,
		DIRECTION_VERTICAL: number,
		DIRECTION_ALL: number,
		Manager: HammerManagerConstructor,
		Input: HammerInput,
		TouchAction: TouchAction,
		TouchInput: TouchInput,
		MouseInput: MouseInput,
		PointerEventInput: PointerEventInput,
		TouchMouseInput: TouchMouseInput,
		SingleTouchInput: SingleTouchInput,
		Recognizer: RecognizerStatic,
		AttrRecognizer: AttrRecognizerStatic,
		Tap: TapRecognizerStatic,
		Pan: PanRecognizerStatic,
		Swipe: SwipeRecognizerStatic,
		Pinch: PinchRecognizerStatic,
		Rotate: RotateRecognizerStatic,
		Press: PressRecognizerStatic,
		on(target: EventTarget, types: string, handler: Function): void,
		off(target: EventTarget, types: string, handler: Function): void,
		each(obj: any, iterator: Function, context: any): void,
		merge(dest: any, src: any): any,
		extend(dest: any, src: any, merge: boolean): any,
		inherit(child: Function, base: Function, properties: any): any,
		bindFn(fn: Function, context: any): Function,
		prefixed(obj: any, property: string): string
	}

	declare interface HammerDefaults {
		domEvents: boolean,
		enable: boolean,
		preset: RecognizerTuple[],
		touchAction: string,
		cssProps: CssProps,
		inputClass: () => void,
		inputTarget: EventTarget
	}

	declare interface CssProps {
		contentZooming: string,
		tapHighlightColor: string,
		touchCallout: string,
		touchSelect: string,
		userDrag: string,
		userSelect: string
	}

	declare interface HammerOptions {
		cssProps?: CssProps,
		domEvents?: boolean,
		enable?: boolean | ((manager: HammerManager) => boolean),
		preset?: RecognizerTuple[],
		touchAction?: string,
		recognizers?: RecognizerTuple[],
		inputClass?: () => void,
		inputTarget?: EventTarget
	}

	declare interface HammerManagerConstructor {
		new (element: EventTarget, options?: HammerOptions): HammerManager
	}

	declare interface HammerListener {
		(event: HammerInput): void
	}

	declare interface HammerManager {
		add(recogniser: Recognizer): Recognizer,
		add(recogniser: Recognizer): HammerManager,
		add(recogniser: Recognizer[]): Recognizer,
		add(recogniser: Recognizer[]): HammerManager,
		destroy(): void,
		emit(event: string, data: any): void,
		get(recogniser: Recognizer): Recognizer,
		get(recogniser: string): Recognizer,
		off(events: string, handler?: HammerListener): void,
		on(events: string, handler: HammerListener): void,
		recognize(inputData: any): void,
		remove(recogniser: Recognizer): HammerManager,
		remove(recogniser: string): HammerManager,
		set(options: HammerOptions): HammerManager,
		stop(force: boolean): void
	}

	declare interface RecognizerOptions {
		direction?: number,
		enable?: boolean | ((recognizer: Recognizer, inputData: HammerInput) => boolean),
		event?: string,
		interval?: number,
		pointers?: number,
		posThreshold?: number,
		taps?: number,
		threshold?: number,
		time?: number,
		velocity?: number
	}

	declare interface RecognizerStatic {
		new (options?: RecognizerOptions): Recognizer
	}

	declare interface Recognizer {
		defaults: any,
		canEmit(): boolean,
		canRecognizeWith(otherRecognizer: Recognizer): boolean,
		dropRecognizeWith(otherRecognizer: Recognizer): Recognizer,
		dropRecognizeWith(otherRecognizer: string): Recognizer,
		dropRequireFailure(otherRecognizer: Recognizer): Recognizer,
		dropRequireFailure(otherRecognizer: string): Recognizer,
		emit(input: HammerInput): void,
		getTouchAction(): any[],
		hasRequireFailures(): boolean,
		process(inputData: HammerInput): string,
		recognize(inputData: HammerInput): void,
		recognizeWith(otherRecognizer: Recognizer): Recognizer,
		recognizeWith(otherRecognizer: string): Recognizer,
		requireFailure(otherRecognizer: Recognizer): Recognizer,
		requireFailure(otherRecognizer: string): Recognizer,
		reset(): void,
		set(options?: RecognizerOptions): Recognizer,
		tryEmit(input: HammerInput): void
	}

	declare interface AttrRecognizerStatic {
		attrTest(input: HammerInput): boolean,
		process(input: HammerInput): any
	}

	declare interface AttrRecognizer {
		new (options?: RecognizerOptions): AttrRecognizer
	}

	declare interface PanRecognizerStatic {
		new (options?: RecognizerOptions): PanRecognizer
	}

	declare interface PanRecognizer {
		
	}

	declare interface PinchRecognizerStatic {
		new (options?: RecognizerOptions): PinchRecognizer
	}

	declare interface PinchRecognizer {
		
	}

	declare interface PressRecognizerStatic {
		new (options?: RecognizerOptions): PressRecognizer
	}

	declare interface PressRecognizer {
		
	}

	declare interface RotateRecognizerStatic {
		new (options?: RecognizerOptions): RotateRecognizer
	}

	declare interface RotateRecognizer {
		
	}

	declare interface SwipeRecognizerStatic {
		new (options?: RecognizerOptions): SwipeRecognizer
	}

	declare interface SwipeRecognizer {
		
	}

	declare interface TapRecognizerStatic {
		new (options?: RecognizerOptions): TapRecognizer
	}

	declare interface TapRecognizer {
		
	}

	declare interface HammerPoint {
		x: number,
		y: number
	}

		declare class HammerInput  {
		constructor(manager: HammerManager, callback: Function): this;
		destroy(): void;
		handler(): void;
		init(): void;
		type: string;
		deltaX: number;
		deltaY: number;
		deltaTime: number;
		distance: number;
		angle: number;
		velocityX: number;
		velocityY: number;
		velocity: number;
		direction: number;
		offsetDirection: number;
		scale: number;
		rotation: number;
		center: HammerPoint;
		srcEvent: TouchEvent | MouseEvent | PointerEvent;
		target: HTMLElement;
		pointerType: string;
		eventType: number;
		isFirst: boolean;
		isFinal: boolean;
		pointers: any[];
		changedPointers: any[];
		preventDefault: Function
	}

	declare class MouseInput extends HammerInput {
		constructor(manager: HammerManager, callback: Function): this
	}

	declare class PointerEventInput extends HammerInput {
		constructor(manager: HammerManager, callback: Function): this
	}

	declare class SingleTouchInput extends HammerInput {
		constructor(manager: HammerManager, callback: Function): this
	}

	declare class TouchInput extends HammerInput {
		constructor(manager: HammerManager, callback: Function): this
	}

	declare class TouchMouseInput extends HammerInput {
		constructor(manager: HammerManager, callback: Function): this
	}

	declare class TouchAction  {
		constructor(manager: HammerManager, value: string): this;
		compute(): string;
		preventDefaults(input: HammerInput): void;
		preventSrc(srcEvent: any): void;
		set(value: string): void;
		update(): void
	}

	declare module.exports: HammerStatic


}