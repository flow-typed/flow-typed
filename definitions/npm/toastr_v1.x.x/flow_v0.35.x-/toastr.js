

declare module 'toastr' {
		declare interface ToastrOptions {
		showEasing?: string,
		hideEasing?: string,
		showMethod?: string,
		hideMethod?: string,
		closeButton?: boolean,
		closeHtml?: string,
		tapToDismiss?: boolean,
		toastClass?: string,
		containerId?: string,
		debug?: boolean,
		showDuration?: number,
		onShown?: () => void,
		hideDuration?: number,
		onHidden?: () => void,
		extendedTimeOut?: number,
		iconClasses?: {
		error: string,
		info: string,
		success: string,
		warning: string
	},
		iconClass?: string,
		positionClass?: string,
		backgroundpositionClass?: string,
		timeOut?: number,
		titleClass?: string,
		messageClass?: string,
		newestOnTop?: boolean,
		target?: string,
		preventDuplicates?: boolean,
		progressBar?: boolean,
		onclick?: () => void,
		allowHtml?: boolean,
		escapeHtml?: boolean
	}

	declare interface ToastrDisplayMethod {
		(message: string): JQuery,
		(message: string, title: string): JQuery,
		(message: string, title: string, overrides: ToastrOptions): JQuery
	}

	declare interface Toastr {
		clear: {
		(): void,
		(toast: JQuery): void,
		(toast: JQuery, clearOptions: {
		force: boolean
	}): void
	},
		error: ToastrDisplayMethod,
		info: ToastrDisplayMethod,
		options: ToastrOptions,
		success: ToastrDisplayMethod,
		warning: ToastrDisplayMethod,
		version: string
	}

			declare module.exports: Toastr


}