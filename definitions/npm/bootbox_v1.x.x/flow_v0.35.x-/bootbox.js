

declare module 'bootbox' {
		declare interface BootboxBaseOptions {
		title?: string | Element,
		callback?: (result: boolean | string) => any,
		onEscape?: (() => any) | boolean,
		show?: boolean,
		backdrop?: boolean,
		closeButton?: boolean,
		animate?: boolean,
		className?: string,
		size?: string,
		buttons?: BootboxButtonMap
	}

	declare interface BootboxDialogOptions {
		message: string | Element
	}

	declare interface BootboxAlertOptions {
		callback?: () => any,
		buttons?: BootboxAlertButtonMap
	}

	declare interface BootboxConfirmOptions {
		callback: (result: boolean) => any,
		buttons?: BootboxConfirmPromptButtonMap
	}

	declare interface BootboxPromptOptions {
		title: string,
		value?: string,
		inputType?: string,
		callback: (result: string) => any,
		buttons?: BootboxConfirmPromptButtonMap
	}

	declare interface BootboxDefaultOptions {
		locale?: string,
		show?: boolean,
		backdrop?: boolean,
		closeButton?: boolean,
		animate?: boolean,
		className?: string
	}

	declare interface BootboxButton {
		label?: string,
		className?: string,
		callback?: () => any
	}

	declare interface BootboxButtonMap {
		[key: string]: BootboxButton | Function
	}

	declare interface BootboxAlertButtonMap {
		ok: BootboxButton | Function
	}

	declare interface BootboxConfirmPromptButtonMap {
		confirm: BootboxButton | Function,
		cancel: BootboxButton | Function
	}

	declare interface BootboxLocaleValues {
		OK: string,
		CANCEL: string,
		CONFIRM: string
	}

	declare interface BootboxStatic {
		alert(message: string, callback?: () => void): JQuery,
		alert(options: BootboxAlertOptions): JQuery,
		confirm(message: string, callback: (result: boolean) => void): JQuery,
		confirm(options: BootboxConfirmOptions): JQuery,
		prompt(message: string, callback: (result: string) => void): JQuery,
		prompt(options: BootboxPromptOptions): JQuery,
		dialog(message: string, callback?: (result: string) => void): JQuery,
		dialog(options: BootboxDialogOptions): JQuery,
		setDefaults(options: BootboxDefaultOptions): void,
		hideAll(): void,
		addLocale(name: string, values: BootboxLocaleValues): void,
		removeLocale(name: string): void,
		setLocale(name: string): void
	}

			declare module.exports: BootboxStatic


}