

declare module 'jquery.mmenu' {
		declare interface JQuery {
		mmenu(): JQuery,
		mmenu(options: JQueryMmenu.Options): JQuery,
		mmenu(
		options: JQueryMmenu.Options, configurations: JQueryMmenu.Configurations
	): JQuery,
		data(element: "mmenu"): JQueryMmenu.API
	}

			
}

declare module 'npm$namespace$JQueryMmenu' {
		declare interface NavbarOptions {
		add?: boolean,
		title?: string,
		titleLink?: string
	}

	declare interface OnclickOptions {
		close?: boolean | any,
		preventDefault?: boolean | any,
		setSelected?: boolean | any
	}

	declare interface Options {
		extensions?: Array<Object>,
		navbar?: NavbarOptions,
		onClick?: OnclickOptions,
		slidingSubmenus?: boolean
	}

	declare interface ClassnamesConfigurations {
		divider?: string,
		inset?: string,
		panel?: string,
		selected?: string,
		vertical?: string
	}

	declare interface Configurations {
		classNames?: ClassnamesConfigurations,
		clone?: boolean,
		openingInterval?: number,
		panelNodetype?: string,
		transitionDuration?: number
	}

	declare interface API {
		bind(methodName: string, callback: (...args: any[]) => void): any,
		closeAllPanels(): JQuery,
		bind(methodName: "closeAllPanels", callback: () => void): JQuery,
		closePanel(panel: JQuery): void,
		bind(methodName: "closePanel", callback: (panel: JQuery) => void): void,
		getInstance(): void,
		bind(methodName: "getInstance", callback: () => void): void,
		init(panel: JQuery): void,
		bind(methodName: "init", callback: (panel: JQuery) => void): void,
		openPanel(panel: JQuery): void,
		bind(methodName: "openPanel", callback: (panel: JQuery) => void): void,
		setSelected(li: JQuery, selected?: boolean): void,
		bind(
		methodName: "setSelected", callback: (li: JQuery, selected?: boolean) => void
	): void,
		update(): void,
		bind(methodName: "update", callback: () => void): void
	}

			
}