

declare module 'jquery.simplemodal' {
		declare interface JQueryStatic {
		modal: SimpleModal.Static
	}

	declare interface JQuery {
		modal: SimpleModal.JQueryExtension
	}

			
}

declare module 'npm$namespace$SimpleModal' {
		declare interface SimpleModalOptions {
		appendTo?: string,
		focus?: boolean,
		opacity?: number,
		overlayId?: string,
		overlayCss?: Object,
		containerId?: string,
		containerCss?: Object,
		dataId?: string,
		dataCss?: Object,
		minHeight?: number,
		minWidth?: number,
		maxHeight?: number,
		maxWidth?: number,
		autoResize?: boolean,
		autoPosition?: boolean,
		zIndex?: number,
		close?: boolean,
		closeHTML?: string,
		closeClass?: string,
		escClose?: boolean,
		overlayClose?: boolean,
		position?: Array<any>,
		persist?: boolean,
		modal?: boolean,
		onOpen?: (dialog: SimpleModalDialog) => void,
		onShow?: (dialog: SimpleModalDialog) => void,
		onClose?: (dialog: SimpleModalDialog) => void
	}

	declare interface SimpleModalDialog {
		overlay: JQuery,
		container: JQuery,
		data: any,
		iframe: JQuery
	}

	declare interface Static {
		defaults: SimpleModalOptions,
		(element: JQuery, options?: SimpleModalOptions): JQuery,
		(html: string, options?: SimpleModalOptions): JQuery,
		close(): void
	}

	declare interface JQueryExtension {
		(options?: SimpleModalOptions): JQuery
	}

			
}

declare module 'simplemodal' {
					declare module.exports: undefined


}