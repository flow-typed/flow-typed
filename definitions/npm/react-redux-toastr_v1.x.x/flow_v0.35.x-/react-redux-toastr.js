

declare module 'react-redux-toastr' {
		declare interface ToastrOptions {
		timeOut?: number,
		newestOnTop?: boolean,
		position?: string,
		confirmText?: ConfirmText
	}

	declare interface ConfirmText {
		okText: string,
		cancelText: string
	}

	declare interface EmitterOptions {
		icon?: string,
		timeOut?: number,
		removeOnHover?: boolean,
		removeOnClick?: boolean,
		component?: R.Component<any, any>,
		onShowComplete(): void,
		onHideComplete(): void
	}

	declare interface ToastrConfirmOptions {
		onOk(): void,
		onCancel(): void
	}

	declare interface ToastrEmitter {
		message(title: string, message: string, options?: EmitterOptions): void,
		info(title: string, message: string, options?: EmitterOptions): void,
		success(title: string, message: string, options?: EmitterOptions): void,
		warning(title: string, message: string, options?: EmitterOptions): void,
		error(title: string, message: string, options?: EmitterOptions): void,
		clean(): void,
		confirm(message: string, options: ToastrConfirmOptions): void
	}

	declare interface Actions {
		addToastrAction: Redux.Action,
		clean: Redux.Action,
		remove: Redux.Action,
		success: Redux.Action,
		info: Redux.Action,
		warning: Redux.Action,
		error: Redux.Action,
		showConfirm: Redux.Action,
		hideConfirm: Redux.Action
	}

		declare export default class ReduxToastr extends R$Component<ToastrOptions, any> {
		
	}

	
}