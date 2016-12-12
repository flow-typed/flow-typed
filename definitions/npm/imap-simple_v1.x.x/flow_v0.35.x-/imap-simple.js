

declare module 'imap-simple' {
			declare export function connect(
		options: IMAPS.ImapSimpleOptions, callback: (err: Error, connection: IMAPS.ImapSimple) => void
	): void

	declare export function connect(options: IMAPS.ImapSimpleOptions): Promise<IMAPS.ImapSimple>

	declare export function getParts(struct: any[]): any[]

		
}

declare module 'npm$namespace$IMAPS' {
		declare export interface ImapSimpleOptions {
		imap: IMAP.Config,
		connectTimeout?: number
	}

	declare export interface MessageBodyPart {
		body: any
	}

	declare export interface Message {
		attributes: IMAP.ImapMessageAttributes,
		parts: MessageBodyPart[]
	}

		declare export class ImapSimple  {
		constructor(imap: IMAP.Connection): this;
		openBox(boxName: string, callback: (err: Error, boxName: string) => void): void;
		openBox(boxName: string): Promise<string>;
		search(
		searchCriteria: any[], fetchOptions: IMAP.FetchOptions, callback: (err: Error, messages: Message[]) => void
	): void;
		search(searchCriteria: any[], fetchOptions: IMAP.FetchOptions): Promise<Message[]>;
		end(): void;
		getPartData(message: Message, part: any, callback: (err: Error, data: any) => void): void;
		getPartData(message: Message, part: any): Promise<any>;
		addMessageLabel(
		source: string | string[], label: string | string[], callback: (err: Error) => void
	): void;
		addMessageLabel(source: string | string[], label: string | string[]): Promise<void>;
		moveMessage(
		source: string | string[], boxName: string, callback: (err: Error) => void
	): void;
		moveMessage(source: string | string[], boxName: string): Promise<void>
	}

	declare export class ConnectionTimeoutError extends Error {
		timeout: number;
		constructor(timeout: number): this
	}

	
}