import type { SweetAlertStatic } from 'npm$namespace$SweetAlert'

declare module 'sweetalert' {
					declare module.exports: SweetAlertStatic


}

declare module 'npm$namespace$SweetAlert' {
	declare type AlertType = "warning" | "error" | "success" | "info";

	declare type PromtType = "input" | "prompt";

	declare interface SettingsBase {
		text?: string,
		allowEscapeKey?: boolean,
		customClass?: string,
		allowOutsideClick?: boolean,
		showCancelButton?: boolean,
		showConfirmButton?: boolean,
		confirmButtonText?: string,
		confirmButtonColor?: string,
		cancelButtonText?: string,
		closeOnConfirm?: boolean,
		closeOnCancel?: boolean,
		imageUrl?: string,
		imageSize?: string,
		timer?: number,
		html?: boolean,
		animation?: boolean | "slide-from-top" | "slide-from-bottom" | "pop" | "none" | string,
		showLoaderOnConfirm?: boolean
	}

	declare interface AlertModalSettings {
		type?: AlertType
	}

	declare interface PromtModalSettings {
		type?: PromtType,
		inputType?: string,
		inputPlaceholder?: string,
		inputValue?: string
	}

	declare interface Settings {
		title: string
	}

	declare interface SetDefaultsSettings {
		title?: string
	}

	declare interface SweetAlertStatic {
		(title: string): void,
		(title: string, text: string): void,
		(title: string, text: string, type: AlertType | PromtType): void,
		(settings: Settings & AlertModalSettings, callback?: (isConfirm: boolean) => any): void,
		(settings: Settings & PromtModalSettings, callback?: (isConfirmOrInputValue: boolean | string) => any): void,
		setDefaults(settings: SetDefaultsSettings & AlertModalSettings & PromtModalSettings): void,
		close(): void,
		showInputError(errorMessage: string): void,
		enableButtons(): void,
		disableButtons(): void
	}

			
}