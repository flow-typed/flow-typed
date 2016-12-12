

declare module 'tar' {
		declare export interface HeaderProperties {
		path?: string,
		mode?: number,
		uid?: number,
		gid?: number,
		size?: number,
		mtime?: number,
		uname?: string,
		gname?: string,
		devmaj?: number,
		devmin?: number
	}

	declare export interface ExtractOptions {
		type?: string,
		Directory?: boolean,
		path?: string,
		strip?: number
	}

	declare export interface ParseStream {
		position: number,
		_stream: stream.Stream,
		_ended: boolean,
		_streamEnd(): void,
		_process(c: Buffer): void,
		_startEntry(c: Buffer): void
	}

	declare export interface PackStream {
		writable: boolean,
		readable: boolean,
		_noProprietary: boolean,
		_global: HeaderProperties,
		_buffer: stream.Stream[],
		_currentEntry: any,
		_processing: boolean,
		_pipeRoot: stream.Stream,
		_needDrain: boolean,
		_paused: boolean,
		addGlobal(props: HeaderProperties): void,
		add(stream: stream.Stream): boolean,
		destroy(): void,
		_process(): void
	}

	declare export interface ExtractStream {
		
	}

	declare export function Parse(): ParseStream

	declare export function Pack(props?: HeaderProperties): PackStream

	declare export function Extract(path: string): ExtractStream

	declare export function Extract(opts: ExtractOptions): ExtractStream

		
}