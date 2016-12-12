

declare module 'msgpack' {
		declare interface MsgPackStatic {
		pack(data: any, toString?: boolean): any,
		unpack(data: any): any,
		worker: string,
		upload(
		url: string, option: MsgPackUploadOption, callback: MsgPackUploadCallback
	): void,
		download(
		url: string, option: MsgPackDownloadOption, callback: MsgPackDownloadCallback
	): void
	}

	declare interface MsgPackUploadOption {
		data: any,
		worker?: boolean,
		timeout?: number,
		before?: (xhr: XMLHttpRequest, option: MsgPackUploadOption) => void,
		after?: (
		xhr: XMLHttpRequest, option: MsgPackUploadOption, result: MsgPackCallbackResult
	) => void
	}

	declare interface MsgPackUploadCallback {
		(data: string, option: MsgPackUploadOption, result: MsgPackCallbackResult): void
	}

	declare interface MsgPackDownloadOption {
		worker?: boolean,
		timeout?: number,
		before?: (xhr: XMLHttpRequest, option: MsgPackDownloadOption) => void,
		after?: (
		xhr: XMLHttpRequest, option: MsgPackDownloadOption, result: MsgPackCallbackResult
	) => void
	}

	declare interface MsgPackDownloadCallback {
		(data: any, option: MsgPackDownloadCallback, result: MsgPackCallbackResult): void
	}

	declare interface MsgPackCallbackResult {
		status: number,
		ok: boolean
	}

			
}