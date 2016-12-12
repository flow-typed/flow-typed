

declare module 'bounce' {
					
}

declare module 'bounce.js' {
		declare interface Point2D {
		x: number,
		y: number
	}

	declare interface BounceOptions<T> {
		from: T,
		to: T,
		duration?: number,
		delay?: number,
		easing?: string,
		bounces?: number,
		stiffness?: number
	}

	declare interface AnimationOptions {
		loop?: boolean,
		remove?: boolean,
		onComplete?: () => void
	}

	declare interface SerailizedComponent<T> {
		type: string,
		from: T,
		to: T,
		duration: number,
		delay: number,
		easing: string,
		bounces: number,
		stiffness: number
	}

		declare class Bounce  {
		FPS: number;
		counter: number;
		isSupported(): boolean;
		constructor(): this;
		scale(options: BounceOptions<Point2D>): Bounce;
		rotate(options: BounceOptions<number>): Bounce;
		translate(options: BounceOptions<Point2D>): Bounce;
		skew(options: BounceOptions<Point2D>): Bounce;
		serialize(): SerailizedComponent<number | Point2D>[];
		deserialize(serailized: SerailizedComponent<number | Point2D>[]): Bounce;
		applyTo(element: Element, options?: AnimationOptions): void;
		applyTo(elements: Element[], options?: AnimationOptions): void;
		applyTo(elements: JQuery, options?: AnimationOptions): JQueryPromise<void>;
		define(name: string): Bounce;
		remove(): void
	}

	declare module.exports: undefined


}