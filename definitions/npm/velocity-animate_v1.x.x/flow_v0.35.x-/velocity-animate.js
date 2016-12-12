

declare module 'velocity-animate' {
		declare interface JQuery {
		velocity(name: string, options: jquery.velocity.RegisteredEffectOptions): JQuery,
		velocity(
		options: {
		properties: jquery.velocity.Properties,
		options: jquery.velocity.Options
	}
	): JQuery,
		velocity(
		properties: jquery.velocity.Properties, options: jquery.velocity.Options
	): JQuery,
		velocity(
		properties: jquery.velocity.Properties, duration: number, easing: jquery.velocity.Easing, complete?: jquery.velocity.ElementCallback
	): JQuery,
		velocity(
		properties: jquery.velocity.Properties, duration: number, complete?: jquery.velocity.ElementCallback
	): JQuery,
		velocity(
		properties: jquery.velocity.Properties, easing: jquery.velocity.Easing, complete?: jquery.velocity.ElementCallback
	): JQuery,
		velocity(
		properties: jquery.velocity.Properties, complete?: jquery.velocity.ElementCallback
	): JQuery
	}

	declare interface JQueryStatic {
		Velocity: jquery.velocity.VelocityStatic
	}

			
}

declare module 'velocity' {
	declare type Properties = Object;

	declare type Easing = string | number[];

	declare type ElementCallback = (elements: NodeListOf<HTMLElement>) => void;

	declare type ProgressCallback = (
		elements: NodeListOf<HTMLElement>, percentComplete: number, timeRemaining: number, timeStart: number, tweenValue: number
	) => void;

	declare type EffectCall = [Properties] | [Properties, number] | [Properties, EffectCallOptions] | [Properties, number, EffectCallOptions];

	declare interface EffectCallOptions {
		delay?: any,
		easing?: any
	}

	declare interface CommonOptions {
		duration?: string | number,
		begin?: ElementCallback,
		complete?: ElementCallback,
		display?: string | boolean,
		delay?: number | boolean,
		mobileHA?: boolean,
		_cacheValues?: boolean,
		container?: JQuery,
		axis?: string,
		offset?: number
	}

	declare interface Options {
		queue?: string | boolean,
		easing?: Easing,
		progress?: ProgressCallback,
		loop?: number | boolean
	}

	declare interface RegisterEffectOptions {
		defaultDuration?: number,
		calls: EffectCall[],
		reset?: Object
	}

	declare interface RegisteredEffectOptions {
		stagger?: number,
		drag?: boolean,
		backwards?: boolean
	}

	declare interface SequenceCall {
		e: HTMLElement | JQuery,
		p: Properties,
		o: SequenceOptions
	}

	declare interface SequenceOptions {
		sequenceQueue?: boolean
	}

	declare interface VelocityStatic {
		Sequences: any,
		animate(
		options: {
		elements: NodeListOf<HTMLElement>,
		properties: Properties,
		options: Options
	}
	): any,
		animate(
		elements: HTMLElement | NodeListOf<HTMLElement>, properties: Properties, options: Options
	): any,
		RegisterEffect(name: string, options: RegisterEffectOptions): VelocityStatic,
		RunSequence(sequence: SequenceCall[]): VelocityStatic,
		hook(element: HTMLElement | JQuery, cssKey: string): string,
		hook(element: HTMLElement | JQuery, cssKey: string, cssValue: string): void
	}

			
}