

declare module 'musicmetadata' {
			declare function mm(
		readStream: Readable, callback: (err: Error, metadata: MM.Metadata) => void
	): EventEmitter

	declare function mm(
		readStream: Readable, options: MM.Options, callback: (err: Error, metadata: MM.Metadata) => void
	): EventEmitter

		declare module.exports: undefined


}

declare module 'npm$namespace$MM' {
		declare export interface Options {
		duration?: boolean,
		fileSize?: number
	}

	declare export interface Metadata {
		artist: string[],
		album: string,
		albumartist: string[],
		title: string,
		year: string,
		track: NoOf,
		disk: NoOf,
		genre: string,
		picture: Picture[],
		duration: number
	}

	declare export interface NoOf {
		no: number,
		of: number
	}

	declare export interface Picture {
		format: string,
		data: Buffer
	}

			
}