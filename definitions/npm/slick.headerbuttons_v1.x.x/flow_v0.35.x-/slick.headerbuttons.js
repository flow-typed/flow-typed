

declare module 'slick.headerbuttons' {
					
}

declare module 'npm$namespace$Slick' {
		declare export interface Column<T> {
		header?: Header
	}

	declare export interface Header {
		buttons: HeaderButton[]
	}

	declare export interface HeaderButton {
		command?: string,
		cssClass?: string,
		handler?: Function,
		image?: string,
		showOnHover?: boolean,
		tooltip?: string
	}

	declare export interface OnCommandEventArgs<T> {
		grid: Grid<T>,
		column: Column<T>,
		command: string,
		button: HeaderButton
	}

			
}

declare module 'Plugins' {
				declare export class HeaderButtons<T> extends Plugin<T> {
		constructor(): this;
		onCommand: Event<OnCommandEventArgs<T>>
	}

	
}