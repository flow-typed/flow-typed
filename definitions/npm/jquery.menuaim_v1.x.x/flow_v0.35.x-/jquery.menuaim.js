

declare module 'jquery.menuaim' {
		declare interface JQueryMenuAimOptions {
		activate(): void,
		deactivate(): void,
		enter(): void,
		exit(): void,
		exitMenu(): void,
		rowSelector?: string,
		submenuSelector?: string,
		submenuDirection?: string
	}

	declare interface JQuery {
		menuAim(options: JQueryMenuAimOptions): JQuery
	}

			
}