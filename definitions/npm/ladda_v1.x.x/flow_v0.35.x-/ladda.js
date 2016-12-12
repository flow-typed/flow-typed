

declare module 'ladda' {
		declare interface ILaddaButton {
		start(): ILaddaButton,
		startAfter(delay: number): ILaddaButton,
		stop(): ILaddaButton,
		toggle(): ILaddaButton,
		setProgress(progress: number): ILaddaButton,
		enable(): ILaddaButton,
		disable(): ILaddaButton,
		isLoading(): boolean,
		remove(): void
	}

	declare interface ILaddaOptions {
		timeout?: number,
		callback?: (instance: ILaddaButton) => void
	}

	declare interface ILadda {
		bind(target: HTMLElement, options?: ILaddaOptions): void,
		bind(cssSelector: string, options?: ILaddaOptions): void,
		create(button: Element): ILaddaButton,
		stopAll(): void
	}

	declare interface JQuery {
		ladda(): JQuery,
		ladda(action: string): JQuery,
		ladda(action: string, options: any): JQuery
	}

	declare interface JQueryStatic {
		ladda(action: string): JQuery
	}

			declare module.exports: ILadda


}