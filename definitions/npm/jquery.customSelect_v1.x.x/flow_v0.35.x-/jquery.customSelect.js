

declare module 'jquery.customSelect' {
		declare interface JQueryCustomSelectOption {
		customClass?: string,
		mapClass?: boolean,
		mapStyle?: boolean
	}

	declare interface JQuery {
		customSelect(val: JQueryCustomSelectOption): JQuery
	}

			
}