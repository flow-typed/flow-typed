

declare module 'angularjs-toaster' {
					
}

declare module 'npm$namespace$ngtoaster' {
		declare interface IToasterService {
		pop(params: IPopParams): void,
		pop(
		type?: string, title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener, toasterId?: number, showCloseButton?: boolean
	): void,
		error(params: IPopParams): void,
		error(
		title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener, toasterId?: number
	): void,
		info(params: IPopParams): void,
		info(
		title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener, toasterId?: number
	): void,
		wait(params: IPopParams): void,
		wait(
		title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener, toasterId?: number
	): void,
		success(params: IPopParams): void,
		success(
		title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener, toasterId?: number
	): void,
		warning(params: IPopParams): void,
		warning(
		title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener, toasterId?: number
	): void,
		clear(): void,
		toast: IToast
	}

	declare interface IToasterEventRegistry {
		setup(): void,
		subscribeToNewToastEvent(onNewToast: IToastEventListener): void,
		subscribeToClearToastsEvent(onClearToasts: IToastEventListener): void,
		unsubscribeToNewToastEvent(onNewToast: IToastEventListener): void,
		unsubscribeToClearToastsEvent(onClearToasts: IToastEventListener): void
	}

	declare interface IPopParams {
		toasterId?: number
	}

	declare interface IToastEventListener {
		(event: Event, toasterId: number): void
	}

	declare interface IToast {
		type?: string,
		title?: string,
		body?: string,
		timeout?: number,
		bodyOutputType?: string,
		clickHandler?: EventListener,
		showCloseButton?: boolean
	}

	declare interface IToasterConfig {
		limit?: number,
		tap-to-dismiss?: boolean,
		close-button?: boolean,
		newest-on-top?: boolean,
		time-out?: number,
		icon-classes?: IIconClasses,
		body-output-type?: string,
		body-template?: string,
		icon-class?: string,
		position-class?: string,
		title-class?: string,
		message-class?: string,
		prevent-duplicates?: boolean,
		mouseover-timer-stop?: boolean
	}

	declare interface IIconClasses {
		error: string,
		info: string,
		wait: string,
		success: string,
		warning: string
	}

			
}

declare module 'ngtoaster' {
					declare module.exports: undefined


}