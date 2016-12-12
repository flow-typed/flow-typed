import type { ShepherdStatic } from 'npm$namespace$TetherShepherd'

declare module 'tether-shepherd' {
					
}

declare module 'npm$namespace$TetherShepherd' {
		declare interface ShepherdStatic {
		on(eventName: string, handler: Function, context?: any): any,
		off(eventName: string, handler?: Function): any,
		once(eventName: string, handler: Function, context?: any): any,
		activeTour: IShepherdTour,
		Tour: IShepherdTour
	}

	declare interface IShepherdTourOptions {
		steps?: IShepherdTourStep[],
		defaults?: IShepherdTourStepOptions
	}

	declare interface IShepherdTour {
		new (options?: IShepherdTourOptions): IShepherdTour,
		addStep(id: string, options: IShepherdTourStepOptions): IShepherdTour,
		addStep(id: string, options: IShepherdTourStep): IShepherdTour,
		getById(id: string): IShepherdTourStep,
		next(): void,
		back(): void,
		cancel(): void,
		hide(): void,
		show(): void,
		show(id: number): void,
		show(id: string): void,
		start(): void,
		getCurrentStep(): IShepherdTourStep,
		on(eventName: string, handler: Function, context?: any): any,
		off(eventName: string, handler?: Function): any,
		once(eventName: string, handler: Function, context?: any): any
	}

	declare interface IShepherdTourStep {
		show(): void,
		hide(): void,
		cancel(): void,
		complete(): void,
		scrollTo(): void,
		isOpen(): boolean,
		destroy(): void,
		on(eventName: string, handler: Function, context?: any): any,
		off(eventName: string, handler?: Function): any,
		once(eventName: string, handler: Function, context?: any): any
	}

	declare interface IShepherdTourStepOptions {
		text?: any,
		title?: string,
		attachTo?: any,
		beforeShowPromise?: any,
		classes?: string,
		buttons?: IShepherdTourButton[],
		advanceOn?: any,
		showCancelLink?: boolean,
		scrollTo?: boolean,
		when?: any,
		showOn?: () => boolean,
		tetherOptions?: any
	}

	declare interface IShepherdTourButton {
		text: string,
		classes?: string,
		action?: Function,
		events?: IShepherdTourButtonEventHash
	}

	declare interface IShepherdTourButtonEventHash {
		[Key: string]: Function
	}

	declare interface IShepherdTourAttachProperties {
		element: string,
		on: string
	}

			
}