

declare module 'angular-animate' {
					declare module.exports: undefined


}

declare module 'animate' {
		declare interface IAnimateFactory {
		(...args: any[]): IAnimateCallbackObject
	}

	declare interface IAnimateCallbackObject {
		eventFn?: (element: JQuery, doneFunction: Function, options: IAnimationOptions) => any,
		setClass?: (
		element: JQuery, addedClasses: string, removedClasses: string, doneFunction: Function, options: IAnimationOptions
	) => any,
		addClass?: (
		element: JQuery, addedClasses: string, doneFunction: Function, options: IAnimationOptions
	) => any,
		removeClass?: (
		element: JQuery, removedClasses: string, doneFunction: Function, options: IAnimationOptions
	) => any,
		enter?: (element: JQuery, doneFunction: Function, options: IAnimationOptions) => any,
		leave?: (element: JQuery, doneFunction: Function, options: IAnimationOptions) => any,
		move?: (element: JQuery, doneFunction: Function, options: IAnimationOptions) => any,
		animate?: (
		element: JQuery, fromStyles: string, toStyles: string, doneFunction: Function, options: IAnimationOptions
	) => any
	}

	declare interface IAnimationPromise {
		
	}

	declare interface IAnimateService {
		on(
		event: string, container: JQuery, callback: (element?: JQuery, phase?: string) => any
	): void,
		off(
		event: string, container?: JQuery, callback?: (element?: JQuery, phase?: string) => any
	): void,
		pin(element: JQuery, parentElement: JQuery): void,
		enabled(value?: boolean): boolean,
		enabled(element: JQuery, value?: boolean): boolean,
		cancel(animationPromise: IAnimationPromise): void,
		animate(
		element: JQuery, from: any, to: any, className?: string, options?: IAnimationOptions
	): IAnimationPromise,
		enter(
		element: JQuery, parentElement: JQuery, afterElement?: JQuery, options?: IAnimationOptions
	): IAnimationPromise,
		leave(element: JQuery, options?: IAnimationOptions): IAnimationPromise,
		move(
		element: JQuery, parentElement: JQuery, afterElement?: JQuery
	): IAnimationPromise,
		addClass(
		element: JQuery, className: string, options?: IAnimationOptions
	): IAnimationPromise,
		removeClass(
		element: JQuery, className: string, options?: IAnimationOptions
	): IAnimationPromise,
		setClass(
		element: JQuery, add: string, remove: string, options?: IAnimationOptions
	): IAnimationPromise
	}

	declare interface IAnimateProvider {
		register(name: string, factory: IAnimateFactory): void,
		classNameFilter(expression?: RegExp): RegExp
	}

	declare interface IAnimationOptions {
		event?: string,
		structural?: boolean,
		easing?: string,
		transitionStyle?: string,
		keyframeStyle?: string,
		from?: Object,
		to?: Object,
		addClass?: string,
		removeClass?: string,
		duration?: number,
		delay?: number,
		stagger?: number,
		staggerIndex?: number,
		cleanupStyles?: boolean
	}

	declare interface IAnimateCssRunner {
		start(): IAnimateCssRunnerStart,
		end(): void
	}

	declare interface IAnimateCssRunnerStart {
		done(callbackFn: (animationFinished: boolean) => void): void
	}

	declare interface IAnimateCssService {
		(element: JQuery, animateCssOptions: IAnimationOptions): IAnimateCssRunner
	}

			
}

declare module 'angular' {
		declare interface IModule {
		animation(name: string, animationFactory: angular.animate.IAnimateFactory): IModule,
		animation(name: string, inlineAnnotatedFunction: any[]): IModule,
		animation(object: Object): IModule
	}

			
}