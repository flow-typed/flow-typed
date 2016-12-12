

declare module 'messenger' {
		declare interface IMessenger {
		(): Messenger,
		options: MessengerOptions
	}

	declare interface Messenger {
		post(options: MessageOptions): Message,
		hideAll(): void
	}

	declare interface Message {
		show(): void,
		hide(): void,
		cancel(): void,
		update(options: MessageOptions): void
	}

	declare interface MessageOptions {
		message: string,
		hideAfter?: number,
		hideOnNavigate?: boolean,
		id?: string,
		showCloseButton?: boolean,
		singleton?: boolean,
		theme?: string,
		type?: string
	}

	declare interface MessengerOptions {
		extraClasses?: string,
		maxMessages?: number,
		messageDefaults?: MessageOptions,
		parentLocations?: string[],
		theme?: string
	}

			
}