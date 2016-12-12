

declare module 'angular-animate-1.3' {
					
}

declare module 'angular-animate' {
					declare module.exports: undefined


}

declare module 'animate' {
		declare interface IAnimateFactory {
		enter?: (element: ng.IAugmentedJQuery, doneFn: Function) => IAnimateCssRunner | void,
		leave?: (element: ng.IAugmentedJQuery, doneFn: Function) => IAnimateCssRunner | void,
		addClass?: (
		element: ng.IAugmentedJQuery, className: string, doneFn: Function
	) => IAnimateCssRunner | void,
		removeClass?: (
		element: ng.IAugmentedJQuery, className: string, doneFn: Function
	) => IAnimateCssRunner | void,
		setClass?: (
		element: ng.IAugmentedJQuery, className: string, doneFn: Function
	) => IAnimateCssRunner | void
	}

	declare interface IAnimateService {
		enabled(element?: JQuery, value?: boolean): boolean,
		animate(
		element: JQuery, from: any, to: any, className?: string, options?: IAnimationOptions
	): IPromise<void>,
		enter(
		element: JQuery, parentElement: JQuery, afterElement?: JQuery, options?: IAnimationOptions
	): IPromise<void>,
		leave(element: JQuery, options?: IAnimationOptions): IPromise<void>,
		move(element: JQuery, parentElement: JQuery, afterElement?: JQuery): IPromise<void>,
		addClass(
		element: JQuery, className: string, options?: IAnimationOptions
	): IPromise<void>,
		removeClass(
		element: JQuery, className: string, options?: IAnimationOptions
	): IPromise<void>,
		setClass(
		element: JQuery, add: string, remove: string, options?: IAnimationOptions
	): IPromise<void>,
		cancel(animationPromise: IPromise<void>): void
	}

	declare interface IAnimateProvider {
		register(name: string, factory: () => IAnimateCallbackObject): void,
		classNameFilter(expression?: RegExp): RegExp
	}

	declare interface IAnimationOptions {
		to?: Object,
		from?: Object,
		event?: string,
		easing?: string,
		transition?: string,
		keyframe?: string,
		addClass?: string,
		removeClass?: string,
		duration?: number,
		delay?: number,
		stagger?: number,
		staggerIndex?: number
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

declare module 'npm$namespace$angular' {
		declare interface IModule {
		animate(cssSelector: string, animateFactory: angular.animate.IAnimateFactory): IModule
	}

			
}