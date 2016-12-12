

declare module 'imap' {
		declare interface ImapOptions {
		user: string,
		password: string,
		host: string,
		port: number,
		tls: boolean
	}

	declare interface ImapBox {
		name: string,
		readOnly: boolean,
		newKeywords: boolean,
		uidvalidity: number,
		uidnext: number,
		flags: any[],
		permFlags: any[],
		persistentUIDs: boolean,
		messages: {
		total: number,
		new: number,
		unseen: number
	}
	}

	declare interface ImapChunk {
		toString(charset: string): string,
		length: number
	}

	declare interface ImapFetch {
		once(event: "end", callback: () => void): void,
		once(event: "error", callback: (error: Error) => void): void,
		once(event: string, callback: Function): void,
		on(event: "message", callback: (msg: ImapMessage, seqno: number) => void): void,
		on(event: string, callback: Function): void
	}

	declare interface ImapBodyStream {
		once(event: "end", callback: () => void): void,
		once(event: string, callback: Function): void,
		on(event: "data", callback: (chunk: ImapChunk) => void): void,
		on(event: string, callback: Function): void,
		pipe(stream: any): void
	}

	declare interface ImapMessage {
		once(event: "attributes", callback: (attributes: any) => void): void,
		once(event: string, callback: Function): void,
		on(event: "body", callback: (stream: ImapBodyStream, info: any) => void): void,
		on(event: string, callback: Function): void
	}

		declare class Imap  {
		constructor(options: ImapOptions): this;
		connect(): void;
		openBox(name: string, a: boolean, callback: (err: Error, box: ImapBox) => void): void;
		once(event: "end", callback: () => void): void;
		once(event: "error", callback: (error: Error) => void): void;
		once(a: string, callback: Function): void;
		end(): void;
		parseHeader(header: string): any;
		parseHeader(header: string): any;
		search(searchTerms: any[], callback: Function): void;
		fetch(results: any, options: {
		
	}): ImapFetch;
		seq: {
		fetch(messageSourceQuery: string, options: {
		
	}): ImapFetch
	}
	}

	declare module.exports: undefined


}