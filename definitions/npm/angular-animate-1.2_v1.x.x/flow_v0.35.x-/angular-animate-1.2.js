

declare module 'angular-animate-1.2' {
					
}

declare module 'animate' {
		declare interface IAnimateService {
		enabled(value?: boolean, element?: JQuery): boolean,
		enter(
		element: JQuery, parentElement: JQuery, afterElement?: JQuery, doneCallback?: () => void
	): void,
		leave(element: JQuery, doneCallback?: () => void): void,
		move(
		element: JQuery, parentElement: JQuery, afterElement?: JQuery, doneCallback?: () => void
	): void,
		addClass(element: JQuery, className: string, doneCallback?: () => void): void,
		removeClass(element: JQuery, className: string, doneCallback?: () => void): void,
		setClass(element: JQuery, add: string, remove: string, doneCallback?: () => void): void
	}

	declare interface IAnimateProvider {
		register(name: string, factory: () => ng.IAnimateCallbackObject): void,
		classNameFilter(expression?: RegExp): RegExp
	}

			
}