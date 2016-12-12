

declare module 'actionSheet' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IActionSheetService {
		show(options: ShowOptions): ng.IPromise<number>,
		hide(): ng.IPromise<void>
	}

	declare export interface ShowOptions {
		title?: string,
		buttonLabels?: string[],
		addCancelButtonWithLabel?: string,
		addDestructiveButtonWithLabel?: string,
		androidEnableCancelButton?: boolean,
		winphoneEnableCancelButton?: boolean
	}

			
}