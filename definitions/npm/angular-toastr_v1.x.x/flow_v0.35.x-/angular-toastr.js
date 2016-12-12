

declare module 'angular-toastr' {
					declare module.exports: undefined


}

declare module 'toastr' {
		declare interface IToastBaseConfig {
		allowHtml?: boolean,
		closeButton?: boolean,
		closeHtml?: string,
		extendedTimeOut?: number,
		messageClass?: string,
		onHidden?: Function,
		onShown?: Function,
		onTap?: Function,
		progressBar?: boolean,
		tapToDismiss?: boolean,
		templates?: {
		toast?: string,
		progressbar?: string
	},
		timeOut?: number,
		titleClass?: string,
		toastClass?: string
	}

	declare interface IToastContainerConfig {
		autoDismiss?: boolean,
		containerId?: string,
		maxOpened?: number,
		newestOnTop?: boolean,
		positionClass?: string,
		preventDuplicates?: boolean,
		preventOpenDuplicates?: boolean,
		target?: string
	}

	declare interface IToastConfig {
		iconClasses?: {
		error?: string,
		info?: string,
		success?: string,
		warning?: string
	}
	}

	declare interface IToastrConfig {
		
	}

	declare interface IToastScope {
		message: string,
		options: IToastConfig,
		title: string,
		toastId: number,
		toastType: string
	}

	declare interface IToast {
		el: angular.IAugmentedJQuery,
		iconClass: string,
		isOpened: boolean,
		open: angular.IPromise<any>,
		scope: IToastScope,
		toastId: number
	}

	declare interface IToastOptions {
		iconClass?: string,
		target?: string
	}

	declare interface IToastrService {
		active(): number,
		clear(toast?: IToast): void,
		error(message: string, title?: string, options?: IToastOptions): IToast,
		info(message: string, title?: string, options?: IToastOptions): IToast,
		success(message: string, title?: string, options?: IToastOptions): IToast,
		warning(message: string, title?: string, options?: IToastOptions): IToast
	}

			
}