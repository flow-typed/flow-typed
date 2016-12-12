import type { LargeLocalStorageService } from 'npm$namespace$LargeLocalStorageInterfaces'

declare module 'lls' {
					declare module.exports: LargeLocalStorageService


}

declare module 'npm$namespace$LargeLocalStorageInterfaces' {
		declare interface LargeLocalStorageService {
		new (options: Options): LargeLocalStorageService,
		initialized: Promise<number>,
		getAllAttachments(docKey?: string): Promise<Entry[]>,
		getAllAttachmentURLs(docKey?: string): Promise<Entry[]>,
		getAttachment(attachKey: string): Promise<any>,
		getAttachment(docKey: string, attachKey: string): Promise<any>,
		getAttachmentURL(attachKey: string): Promise<string>,
		getAttachmentURL(docKey: string, attachKey: string): Promise<string>,
		getCapacity(): number,
		getContents(docKey: string): Promise<any>,
		ls(docKey?: string): Promise<string[]>,
		ready(): boolean,
		revokeAttachmentURL(url: string): void,
		rm(docKey?: string): Promise<any>,
		rmAttachment(docKey: string, attachKey: string): Promise<void>,
		setAttachment(attachKey: string, attachment: any): Promise<void>,
		setAttachment(docKey: string, attachKey: string, attachment: any): Promise<void>,
		setContents(docKey: string, data: any): Promise<void>
	}

	declare interface Options {
		size: number,
		name?: string,
		forceProvider?: string
	}

	declare interface Entry {
		data: any,
		docKey: string,
		attachKey: string,
		url: string
	}

	declare interface Promise<T> {
		then<U>(
		onFulfilled?: (value: T) => U | Promise<U>, onRejected?: (error: any) => U | Promise<U>
	): Promise<U>,
		then<U>(
		onFulfilled?: (value: T) => U | Promise<U>, onRejected?: (error: any) => void
	): Promise<U>,
		catch<U>(onRejected?: (error: any) => U | Promise<U>): Promise<U>
	}

			
}