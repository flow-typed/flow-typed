

declare module 'jquery-easy-loading' {
		declare interface JQueryStatic {
		Loading: JQueryEasyLoading.Static
	}

	declare interface JQuery {
		loading(options?: JQueryEasyLoading.Options | JQueryEasyLoading.Command): JQuery,
		Loading(options?: JQueryEasyLoading.Options): JQueryEasyLoading.LoadingObject
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$JQueryEasyLoading' {
	declare type Command = "resize" | "start" | "stop" | "toggle";

	declare interface Static {
		setDefaults(options: Options): void
	}

	declare interface LoadingObject {
		init(): void,
		createOerlay(): JQuery,
		attachMethodsToExternalEvents(): void,
		attachOptionsHandlers(): void,
		calcZIndex(): number,
		resize(): void,
		start(): void,
		stop(): void,
		active(): boolean,
		toggle(): void
	}

	declare interface Options {
		overlay?: JQuery,
		zIndex?: number,
		message?: string,
		theme?: string,
		shownClass?: string,
		hiddenClass?: string,
		stoppable?: boolean,
		start?: boolean,
		onStart?: (loading: LoadingObject) => void,
		onStop?: (loading: LoadingObject) => void,
		onClick?: Function
	}

			
}