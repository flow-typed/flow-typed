

declare module 'notifyjs' {
					
}

declare module 'npm$namespace$notifyjs' {
		declare interface INotify {
		show(): void,
		destroy(): void,
		close(): void,
		onShowNotification(e: Event): void,
		onCloseNotification(): void,
		onClickNotification(): void,
		onErrorNotification(): void,
		handleEvent(e: Event): void
	}

	declare interface INotifyOption {
		body?: string,
		icon?: string,
		tag?: string,
		timeout?: number,
		notifyShow(e: Event): any,
		notifyClose?: Function,
		notifyClick?: Function,
		notifyError?: Function,
		permissionGranted?: Function,
		permissionDenied?: Function
	}

			
}