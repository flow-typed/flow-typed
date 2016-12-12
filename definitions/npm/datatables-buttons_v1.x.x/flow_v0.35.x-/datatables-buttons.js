

declare module 'datatables-buttons' {
					
}

declare module 'npm$namespace$DataTables' {
		declare export interface Settings {
		buttons?: boolean | string[] | ButtonSettings[]
	}

	declare export interface ButtonSettings {
		action?: FunctionButtonAction,
		available?: FunctionButtonAvailable,
		className?: string,
		destroy?: FunctionButtonInit,
		enabled?: boolean,
		extend?: string,
		init?: FunctionButtonInit,
		key?: string | ButtonKey,
		name?: string,
		namespace?: string,
		text?: string | ButtonText,
		titleAttr?: string,
		exportOptions?: ButtonExportOptions,
		autoPrint?: boolean,
		customize?: FunctionButtonCustomize
	}

	declare export interface FunctionButtonAvailable {
		(dt: DataTables.DataTable, config: any): boolean
	}

	declare export interface ButtonExportOptions {
		columns?: string
	}

	declare export interface ButtonKey {
		key?: string,
		shiftKey?: boolean,
		altKey?: boolean,
		ctrlKey?: boolean,
		metaKey?: boolean
	}

	declare export interface ButtonText {
		(dt: DataTables.DataTable, node: JQuery, config: any): string
	}

	declare export interface FunctionButtonInit {
		(dt: DataTables.DataTable, node: JQuery, config: any): void
	}

	declare export interface FunctionButtonAction {
		(e: any, dt: DataTables.DataTable, node: JQuery, config: any): void
	}

	declare export interface FunctionButtonCustomize {
		(win: Window): void
	}

			
}