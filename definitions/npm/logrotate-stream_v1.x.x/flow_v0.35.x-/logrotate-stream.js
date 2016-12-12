

declare module 'logrotate-stream' {
			declare function logrotateStream(opts: logrotateStream.Options): stream.Writable

		declare module.exports: undefined


}

declare module 'logrotateStream' {
		declare export interface Options {
		file: string,
		size: string,
		keep: number,
		compress?: boolean
	}

			
}