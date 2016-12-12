

declare module 'angular-dialog-service' {
					
}

declare module 'dialogservice' {
		declare interface IDialogOptions {
		animation?: boolean,
		backdrop?: boolean | string,
		keyboard?: boolean,
		backdropClass?: string,
		windowClass?: string,
		size?: string
	}

	declare interface IDialogService {
		error(
		header: string, msg: string, opts?: IDialogOptions
	): ng.ui.bootstrap.IModalServiceInstance,
		wait(
		header: string, msg: string, progress: number, opts?: IDialogOptions
	): ng.ui.bootstrap.IModalServiceInstance,
		notify(
		header: string, msg: string, opts?: IDialogOptions
	): ng.ui.bootstrap.IModalServiceInstance,
		confirm(
		header: string, msg: string, opts?: IDialogOptions
	): ng.ui.bootstrap.IModalServiceInstance,
		create(
		url: string, ctrlr: string, data: any, opts?: IDialogOptions
	): ng.ui.bootstrap.IModalServiceInstance
	}

			
}