

declare module 'ng-dialog' {
	declare export type IDialogService = angular.dialog.IDialogService;

	declare export type IDialogOpenResult = angular.dialog.IDialogOpenResult;

	declare export type IDialogClosePromise = angular.dialog.IDialogClosePromise;

	declare export type IDialogProvider = angular.dialog.IDialogProvider;

	declare export type IDialogScope = angular.dialog.IDialogScope;

	declare export type IDialogConfirmScope = angular.dialog.IDialogConfirmScope;

	declare export type IDialogOptions = angular.dialog.IDialogOptions;

	declare export type IDialogOpenOptions = angular.dialog.IDialogOpenOptions;

	declare export type IDialogOpenConfirmOptions = angular.dialog.IDialogOpenConfirmOptions;

				
}

declare module 'dialog' {
		declare interface IDialogService {
		getDefaults(): IDialogOptions,
		open(options: IDialogOpenOptions): IDialogOpenResult,
		openConfirm(options: IDialogOpenConfirmOptions): IPromise<any>,
		isOpen(id: string): boolean,
		close(id: string, value?: any): void,
		closeAll(value?: any): void,
		getOpenDialogs(): string[]
	}

	declare interface IDialogOpenResult {
		id: string,
		close: (value?: any) => void,
		closePromise: IPromise<IDialogClosePromise>
	}

	declare interface IDialogClosePromise {
		id: string,
		value: any
	}

	declare interface IDialogProvider {
		setDefaults(defaultOptions: IDialogOptions): void,
		setForceHtmlReload(force: boolean): void,
		setForceBodyReload(force: boolean): void
	}

	declare interface IDialogScope {
		closeThisDialog(value?: any): void,
		ngDialogData: string | {
		
	} | any[],
		ngDialogId: string
	}

	declare interface IDialogConfirmScope {
		confirm(value?: any): void
	}

	declare interface IDialogOptions {
		className?: string,
		disableAnimation?: boolean,
		overlay?: boolean,
		showClose?: boolean,
		closeByEscape?: boolean,
		closeByDocument?: boolean,
		closeByNavigation?: boolean,
		plain?: boolean,
		name?: string | number,
		preCloseCallback?: string | Function,
		cache?: boolean,
		appendTo?: string,
		trapFocus?: boolean,
		preserveFocus?: boolean,
		ariaAuto?: boolean,
		ariaRole?: string,
		ariaLabelledById?: string,
		ariaLabelledBySelector?: string,
		ariaDescribedById?: string,
		ariaDescribedBySelector?: string,
		width?: string | number
	}

	declare interface IDialogOpenOptions {
		template: string,
		controller?: string | any[] | any,
		controllerAs?: string,
		bindToController?: boolean,
		scope?: IDialogScope,
		resolve?: {
		[key: string]: string | Function
	},
		data?: string | {
		
	} | any[]
	}

	declare interface IDialogOpenConfirmOptions {
		scope?: IDialogConfirmScope
	}

			
}