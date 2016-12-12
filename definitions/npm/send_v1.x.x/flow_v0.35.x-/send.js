

declare module 'send' {
		declare interface SendOptions {
		acceptRanges?: boolean,
		cacheControl?: boolean,
		dotfiles?: "allow" | "deny" | "ignore",
		end?: number,
		etag?: boolean,
		extensions?: string[] | string | boolean,
		index?: string[] | string | boolean,
		lastModified?: boolean,
		maxAge?: string | number,
		root?: string,
		start?: number
	}

	declare interface SendStream {
		etag(val: boolean): SendStream,
		hidden(val: boolean): SendStream,
		index(paths: string[] | string): SendStream,
		root(paths: string): SendStream,
		from(paths: string): SendStream,
		maxage(maxAge: string | number): SendStream,
		error(status: number, error?: Error): void,
		hasTrailingSlash(): boolean,
		isConditionalGET(): boolean,
		removeContentHeaderFields(): void,
		notModified(): void,
		headersAlreadySent(): void,
		isCachable(): boolean,
		onStatError(error: Error): void,
		isFresh(): boolean,
		isRangeFresh(): boolean,
		redirect(path: string): void,
		pipe(res: stream.Writable): stream.Writable,
		send(path: string, stat?: fs.Stats): void,
		sendFile(path: string): void,
		sendIndex(path: string): void,
		stream(path: string, options?: {
		
	}): void,
		type(path: string): void,
		setHeader(path: string, stat: fs.Stats): void
	}

	declare function send(
		req: stream.Readable, path: string, options?: send.SendOptions
	): send.SendStream

		declare module.exports: undefined


}