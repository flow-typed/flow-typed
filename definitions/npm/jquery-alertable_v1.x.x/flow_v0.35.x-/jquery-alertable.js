

declare module 'jquery-alertable' {
		declare interface JQueryStatic {
		alertable: Alertable
	}

	declare interface Alertable {
		alert(message: string, options?: AlertableOptions): JQueryPromise<void>,
		confirm(message: string, options?: AlertableOptions): JQueryPromise<void>,
		prompt(message: string, options?: AlertableOptions): JQueryPromise<void>,
		defaults: AlertableOptions
	}

	declare interface AlertableOptions {
		container?: string,
		html?: boolean,
		cancelButton?: string,
		okButton?: string,
		overlay?: string,
		prompt?: string,
		modal?: string,
		hide?: Function,
		show?: Function
	}

			
}