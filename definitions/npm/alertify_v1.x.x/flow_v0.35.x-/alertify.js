import type { IAlertifyStatic } from 'npm$namespace$alertify'

declare module 'alertify' {
					
}

declare module 'npm$namespace$alertify' {
		declare interface IAlertifyStatic {
		alert(message: string, fn?: Function, cssClass?: string): IAlertifyStatic,
		confirm(message: string, fn?: Function, cssClass?: string): IAlertifyStatic,
		extend(type: string): (message: string, wait?: number) => IAlertifyStatic,
		init(): void,
		log(message: string, type?: string, wait?: number): IAlertifyStatic,
		prompt(
		message: string, fn?: Function, placeholder?: string, cssClass?: string
	): IAlertifyStatic,
		success(message: string): IAlertifyStatic,
		error(message: string): IAlertifyStatic,
		set(args: IProperties): void,
		labels: ILabels,
		debug(): void
	}

	declare interface IProperties {
		delay?: number,
		labels?: ILabels,
		buttonFocus?: string,
		buttonReverse?: boolean
	}

	declare interface ILabels {
		ok?: string,
		cancel?: string
	}

			
}