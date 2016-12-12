

declare module 'request-promise-native' {
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
		promise(): Promise<any>,
		cancel(): void
	}

	declare interface RequestPromiseOptions {
		simple?: boolean,
		transform?: (
		body: any, response: http.IncomingMessage, resolveWithFullResponse?: boolean
	) => any,
		resolveWithFullResponse?: boolean
	}

			
}