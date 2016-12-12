

declare module 'jquery.flagstrap' {
		declare interface JQuery {
		flagStrap(): void,
		flagStrap(options: jQueryFlagStrap.FlagStrapOptions): void
	}

			
}

declare module 'jQueryFlagStrap' {
		declare interface FlagStrapOptions {
		inputName: string,
		inputId?: string,
		buttonSize: string,
		buttonType: string,
		labelMargin: string,
		scrollable: boolean,
		scrollableHeight?: string,
		countries?: Object,
		placeholder: boolean | FlagStrapPlaceholderOptions,
		onSelect(value: any, element: any): void
	}

	declare interface FlagStrapStatic {
		flagStrap?: void
	}

	declare interface FlagStrapPlaceholderOptions {
		value: string,
		text: string
	}

			
}