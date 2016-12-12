

declare module 'scroll-into-view' {
					declare module.exports: ScrollIntoView


}

declare module '___ScrollIntoView' {
	declare type callbackParamterType = "complete" | "canceled";

	declare type Callback = (type: callbackParamterType) => void;

	declare interface Settings {
		time?: number,
		ease?: (value: number) => number,
		validTarget?: (target: HTMLElement, parentsScrolled: number) => boolean,
		align?: Alignment
	}

	declare interface Alignment {
		top?: number,
		left?: number
	}

	declare interface ScrollIntoView {
		(target: HTMLElement, callback?: ___ScrollIntoView.Callback): void,
		(target: HTMLElement, settings: ___ScrollIntoView.Settings, callback?: ___ScrollIntoView.Callback): void
	}

			
}