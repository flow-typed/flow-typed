

declare module 'nodemailer' {
	declare export type Transport = nodemailer.Transport;

	declare export type SendMailOptions = nodemailer.SendMailOptions;

	declare export type SentMessageInfo = nodemailer.SentMessageInfo;

	declare export interface Plugin {
		(mail: SendMailOptions, callback?: (error: Error, info: SentMessageInfo) => void): void
	}

	declare export interface Transporter {
		sendMail(
		mail: SendMailOptions, callback: (error: Error, info: SentMessageInfo) => void
	): void,
		sendMail(mail: SendMailOptions): Promise<SentMessageInfo>,
		templateSender(
		template?: any, defaults?: any
	): (mailData: any, context: any) => Promise<SentMessageInfo>,
		templateSender(
		template?: any, defaults?: any, callback?: (error: Error, info: SentMessageInfo) => void
	): void,
		use(step: string, plugin: Plugin): void,
		verify(callback: (error: Error, success?: boolean) => void): void,
		verify(): Promise<void>,
		close(): void
	}

	declare export function createTransport(options?: directTransport.DirectOptions, defaults?: Object): Transporter

	declare export function createTransport(options?: smtpTransport.SmtpOptions, defaults?: Object): Transporter

	declare export function createTransport(transport: Transport, defaults?: Object): Transporter

		
}

declare module 'npm$namespace$nodemailer' {
		declare export interface AttachmentObject {
		filename?: string,
		cid?: string,
		path?: string,
		content: string | Buffer | NodeJS.ReadableStream,
		encoding?: string,
		contentType?: string,
		contentDisposition?: string
	}

	declare export interface SendMailOptions {
		from?: string,
		sender?: string,
		to?: string | string[],
		cc?: string | string[],
		bcc?: string | string[],
		replyTo?: string,
		inReplyTo?: string,
		references?: string | string[],
		subject?: string,
		text?: string | Buffer | NodeJS.ReadableStream | AttachmentObject,
		html?: string | Buffer | NodeJS.ReadableStream | AttachmentObject,
		headers?: any,
		attachments?: AttachmentObject[],
		alternatives?: AttachmentObject[],
		messageId?: string,
		date?: Date,
		encoding?: string
	}

	declare export interface SentMessageInfo {
		messageId: string,
		envelope: any,
		accepted: string[],
		rejected: string[],
		pending?: string[],
		response: string
	}

	declare export interface Transport {
		name: string,
		version: string,
		send(
		mail: SendMailOptions, callback?: (error: Error, info: SentMessageInfo) => void
	): void,
		close(): void
	}

			
}