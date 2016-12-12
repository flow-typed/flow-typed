

declare module 'angular-ui-notification' {
					
}

declare module 'uiNotification' {
	declare type XPosition = "right" | "left" | "center";

	declare type YPosition = "top" | "bottom";

	declare type MessageType = "primary" | "info" | "success" | "warning" | "error";

	declare type Message = string | IMessageOptions;

	declare interface IPromise<T> {
		then<TResult>(
		successCallback: (promiseValue: T) => IPromise<TResult> | TResult, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any
	): IPromise<TResult>,
		catch<TResult>(
		onRejected: (reason: any) => IPromise<TResult> | TResult
	): IPromise<TResult>,
		finally(finallyCallback: () => any): IPromise<T>
	}

	declare interface IGlobalMessageOptions {
		delay?: number,
		startTop?: number,
		startRight?: number,
		verticalSpacing?: number,
		horizontalSpacing?: number,
		positionX?: XPosition,
		positionY?: YPosition,
		replaceMessage?: boolean,
		templateUrl?: string,
		onClose?: (element: any) => any,
		closeOnClick?: boolean,
		maxCount?: number
	}

	declare interface IMessageOptions {
		title?: string,
		message?: string,
		templateUrl?: string,
		delay?: number,
		type?: MessageType,
		positionX?: XPosition,
		positionY?: YPosition,
		replaceMessage?: boolean,
		closeOnClick?: boolean
	}

	declare interface INotificationScope {
		kill(isHard: boolean): void
	}

	declare interface INotificationProvider {
		setOptions(options: IGlobalMessageOptions): void
	}

	declare interface INotificationService {
		primary(message: Message): IPromise<INotificationScope>,
		info(message: Message): IPromise<INotificationScope>,
		success(message: Message): IPromise<INotificationScope>,
		warning(message: Message): IPromise<INotificationScope>,
		error(message: Message): IPromise<INotificationScope>,
		clearAll(): void,
		(message: Message, type?: MessageType): IPromise<INotificationScope>
	}

			
}