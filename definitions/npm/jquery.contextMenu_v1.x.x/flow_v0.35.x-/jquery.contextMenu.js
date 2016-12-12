

declare module 'jquery.contextMenu' {
		declare interface JQueryContextMenuOptions {
		selector: string,
		appendTo?: string,
		trigger?: string,
		autoHide?: boolean,
		delay?: number,
		determinePosition?: (menu: JQuery) => void,
		position?: (opt: JQuery, x: number, y: number) => void,
		positionSubmenu?: (menu: JQuery) => void,
		zIndex?: number,
		animation?: {
		duration?: number,
		show?: string,
		hide?: string
	},
		events?: {
		show?: () => void,
		hide?: () => void
	},
		callback?: (key: any, options: any) => any,
		items: any,
		reposition?: boolean,
		className?: string,
		itemClickEvent?: string
	}

	declare interface JQueryStatic {
		contextMenu(options?: JQueryContextMenuOptions): JQuery,
		contextMenu(type: string, selector?: any): JQuery
	}

	declare interface JQuery {
		contextMenu(options?: any): JQuery
	}

			
}