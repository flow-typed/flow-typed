

declare module 'request-promise' {
					declare module.exports: RequestAPI


}

declare module 'requestPromise' {
	declare export type OptionsWithUri = request.UriOptions & RequestPromiseOptions;

	declare export type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;

	declare export type Options = OptionsWithUri | OptionsWithUrl;

	declare interface RequestPromise {
		then<TResult>(
		onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>
	): Promise<TResult>,
		then<TResult>(
		onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void
	): Promise<TResult>,
		catch(onrejected?: (reason: any) => any | PromiseLike<any>): Promise<any>,
		catch(onrejected?: (reason: any) => void): Promise<any>,
		catch(
		type: errors.RequestErrorConstructor, onrejected?: (reason: errors.RequestError) => void
	): Promise<any>,
		catch(
		type: errors.StatusCodeErrorConstructor, onrejected?: (reason: errors.StatusCodeError) => void
	): Promise<any>,
		catch(
		type: errors.TransformErrorConstructor, onrejected?: (reason: errors.TransformError) => void
	): Promise<any>,
		finally<TResult>(handler: () => PromiseLike<TResult>): Promise<any>,
		finally<TResult>(handler: () => TResult): Promise<any>,
		promise(): Promise<any>,
		cancel(): void
	}

	declare interface RequestPromiseOptions {
		simple?: boolean,
		transform?: (
		body: any, response: http.IncomingMessage, resolveWithFullResponse?: boolean
	) => any,
		transform2xxOnly?: boolean,
		resolveWithFullResponse?: boolean
	}

			
}

declare module 'request-promise/errors' {
		declare export interface RequestError {
		cause: any,
		error: any,
		options: rp.Options,
		response: http.IncomingMessage
	}

	declare export interface RequestErrorConstructor {
		new (cause: any, options: rp.Options, response: http.IncomingMessage): RequestError,
		(cause: any, options: rp.Options, response: http.IncomingMessage): RequestError,
		prototype: RequestError
	}

	declare export interface StatusCodeError {
		statusCode: number,
		error: any,
		options: rp.Options,
		response: http.IncomingMessage
	}

	declare export interface StatusCodeErrorConstructor {
		new (
		statusCode: number, body: any, options: rp.Options, response: http.IncomingMessage
	): StatusCodeError,
		(statusCode: number, body: any, options: rp.Options, response: http.IncomingMessage): StatusCodeError,
		prototype: StatusCodeError
	}

	declare export interface TransformError {
		cause: any,
		error: any,
		options: rp.Options,
		response: http.IncomingMessage
	}

	declare export interface TransformErrorConstructor {
		new (
		cause: any, options: rp.Options, response: http.IncomingMessage
	): TransformError,
		(cause: any, options: rp.Options, response: http.IncomingMessage): TransformError,
		prototype: TransformError
	}

			
}