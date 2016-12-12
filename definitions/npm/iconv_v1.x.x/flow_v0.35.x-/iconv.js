import type { Static } from 'npm$namespace$Iconv'

declare module 'iconv' {
					
}

declare module 'npm$namespace$Iconv' {
		declare interface Static {
		new (fromEncoding: string, toEncoding: string): Iconv,
		(fromEncoding: string, toEncoding: string): Iconv
	}

	declare interface Iconv {
		writable: boolean,
		convert(input: string | Buffer, encoding?: string): Buffer,
		write(input: string | Buffer, encoding?: string): boolean,
		end(input?: string | Buffer, encoding?: string): void,
		write(buffer: Buffer | string, cb?: Function): boolean,
		write(str: string, encoding?: string, cb?: Function): boolean,
		end(): void,
		end(buffer: Buffer, cb?: Function): void,
		end(str: string, cb?: Function): void,
		end(str: string, encoding?: string, cb?: Function): void,
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T
	}

			
}