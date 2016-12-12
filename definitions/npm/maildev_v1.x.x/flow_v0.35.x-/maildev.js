

declare module 'maildev' {
		declare interface MailDevOptions {
		outgoingHost?: string,
		outgoingPass?: string,
		outgoingPort?: number,
		outgoingUser?: string,
		smtp?: number
	}

	declare interface Mail {
		id?: string,
		envelope?: Object
	}

		declare class MailDev  {
		constructor(options: MailDevOptions): this;
		deleteEmail(id: string, callback?: (error: Error) => void): void;
		deleteAllEmail(callback?: (error: Error) => void): void;
		end(callback?: (error: Error) => void): void;
		getEmail(id: string, callback?: (error: Error) => void): void;
		getRawEmail(id: string, callback?: (error: Error, readStream: fs.ReadStream) => void): void;
		getAllEmail(done: (error: Error, emails: Array<Object>) => void): void;
		listen(callback?: (error: Error) => void): void;
		on(eventName: string, callback: (email: Object) => void): void;
		relayMail(idOrMailObject: string, done: (error: Error) => void): void
	}

	declare module.exports: undefined


}