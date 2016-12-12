

declare module 'angular-growl-v2' {
					
}

declare module 'growl' {
		declare interface IGrowlTTLConfig {
		success?: number,
		error?: number,
		warning?: number,
		info?: number
	}

	declare interface IGrowlMessageConfig {
		title?: string,
		ttl?: number,
		disableCountDown?: boolean,
		disableIcons?: boolean,
		disableCloseButton?: boolean,
		onclose?: Function,
		onopen?: Function,
		position?: string,
		referenceId?: number,
		translateMessage?: boolean,
		variables?: {
		[variable: string]: any
	}
	}

	declare interface IGrowlMessage {
		text: string,
		destroy(): void,
		setText(newText: string): void
	}

	declare interface IGrowlProvider {
		serverMessagesInterceptor: (string | IHttpInterceptorFactory)[],
		globalTimeToLive(ttl: IGrowlTTLConfig): IGrowlProvider,
		globalTimeToLive(ttl: number): IGrowlProvider,
		globalDisableCloseButton(disableCloseButton: boolean): IGrowlProvider,
		globalDisableIcons(disableIcons: boolean): IGrowlProvider,
		globalReversedOrder(reverseOrder: boolean): IGrowlProvider,
		globalDisableCountDown(disableCountDown: boolean): IGrowlProvider,
		globalInlineMessages(inline: boolean): IGrowlProvider,
		globalPosition(position: string): IGrowlProvider,
		onlyUniqueMessages(onlyUniqueMessages: boolean): IGrowlProvider,
		messagesKey(messageKey: string): IGrowlProvider,
		messageTextKey(messageTextKey: string): IGrowlProvider,
		messageTitleKey(messageTitleKey: string): IGrowlProvider,
		messageSeverityKey(messageSeverityKey: string): IGrowlProvider,
		messageVariableKey(messageVariableKey: string): IGrowlProvider
	}

	declare interface IGrowlService {
		warning(message: string): IGrowlMessage,
		warning(message: string, config: IGrowlMessageConfig): IGrowlMessage,
		error(message: string): IGrowlMessage,
		error(message: string, config: IGrowlMessageConfig): IGrowlMessage,
		info(message: string): IGrowlMessage,
		info(message: string, config: IGrowlMessageConfig): IGrowlMessage,
		success(message: string): IGrowlMessage,
		success(message: string, config: IGrowlMessageConfig): IGrowlMessage,
		general(message: string): IGrowlMessage,
		general(message: string, config: IGrowlMessageConfig): IGrowlMessage,
		general(message: string, config: IGrowlMessageConfig, severity: string): IGrowlMessage,
		onlyUnique(): boolean,
		reverseOrder(): boolean,
		inlineMessages(): boolean,
		position(): string
	}

	declare interface IGrowlMessagesService {
		initDirective(referenceId: number, limitMessages: number): angular.IDirective,
		getAllMessages(referenceId?: number): IGrowlMessage[],
		destroyAllMessages(referenceId?: number): void,
		addMessage(message: IGrowlMessage): IGrowlMessage,
		deleteMessage(message: IGrowlMessage): void
	}

			
}