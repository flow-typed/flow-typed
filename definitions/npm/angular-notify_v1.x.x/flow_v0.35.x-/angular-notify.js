

declare module 'angular-notify' {
					
}

declare module 'cgNotify' {
		declare interface INotifyService {
		(message: string): INotify,
		(option: {
		message: string,
		templateUrl?: string,
		classes?: string,
		messageTemplate?: string,
		$scope?: ng.IScope,
		position?: string,
		duration?: number,
		container?: any
	}): INotify,
		config(
		option: {
		duration?: number,
		startTop?: number,
		verticalSpacing?: number,
		templateUrl?: string,
		position?: string,
		container?: any,
		maximumOpen?: number
	}
	): void,
		closeAll(): void
	}

	declare interface INotify {
		message: string,
		close(): void
	}

			
}