import type { IAjaxFileStatic } from 'npm$namespace$JQueryAjaxFile'

declare module 'jquery.ajaxFile' {
		declare interface KnockoutBindingHandlers {
		file: KnockoutBindingHandler
	}

			
}

declare module 'npm$namespace$JQueryAjaxFile' {
		declare interface IFileData {
		name: string,
		element: HTMLInputElement
	}

	declare interface IOption {
		method?: string,
		url?: string,
		data?: any,
		files?: IFileData[],
		desiredResponseDataType?: DataType,
		timeoutInSeconds?: number
	}

	declare interface IResponseStatus {
		code: number,
		text: string,
		isSuccess: boolean
	}

	declare interface IAjaxFileResult<T> {
		error?: any,
		data?: any,
		status?: IResponseStatus
	}

	declare interface IAjaxFileResultCallback<T> {
		(result: IAjaxFileResult<T>): void
	}

	declare interface IAjaxFilePromise<T> {
		then(
		success: IAjaxFileResultCallback<T>, error?: IAjaxFileResultCallback<T>
	): IAjaxFilePromise<T>,
		done(success: IAjaxFileResultCallback<T>): IAjaxFilePromise<T>,
		fail(error: IAjaxFileResultCallback<T>): IAjaxFilePromise<T>,
		always(error: IAjaxFileResultCallback<T>): IAjaxFilePromise<T>,
		abord(): void
	}

	declare interface IAjaxFileStatic {
		DataType: typeof DataType,
		send<T>(option: IOption): IAjaxFilePromise<T>
	}

	declare interface IJQueryXHR {
		readyState: any,
		status: number,
		statusText: string,
		responseXML: Document,
		responseText: string,
		statusCode?: {
		[key: string]: any
	},
		abort(statusText?: string): void,
		setRequestHeader(header: string, value: string): void,
		getAllResponseHeaders(): string,
		getResponseHeader(header: string): string,
		beforeSend(jqXHR: IJQueryXHR, settings: JQueryAjaxSettings): any,
		dataFilter(data: any, ty: any): any,
		success(data: any, textStatus: string, jqXHR: IJQueryXHR): any,
		error(jqXHR: IJQueryXHR, textStatus: string, errorThrown: string): any,
		complete(jqXHR: IJQueryXHR, textStatus: string): any
	}

	declare interface IJQueryOption {
		type?: string,
		url?: string,
		data?: any,
		files?: IFileData[],
		dataType?: string,
		timeout?: number,
		global?: boolean,
		error(jqXHR: IJQueryXHR, textStatus: string, errorThrown: string): any,
		success(data: any, textStatus: string, jqXHR: IJQueryXHR): any,
		complete(jqXHR: IJQueryXHR, textStatus: string): any
	}

	declare interface IAjaxFileJQueryExtension {
		ajaxWithFile<T>(jqueryOption: IJQueryOption): JQueryDeferred<T>
	}

			
}

declare module 'ajaxfile' {
					declare module.exports: undefined


}

declare module 'npm$namespace$AjaxFileKnockout' {
		declare interface IFileInputWrapper {
		getElement(): HTMLInputElement,
		fileSelected(): boolean
	}

			
}