

declare module 'gridfs-stream' {
			declare function g(db: any, mongo: any): g.Grid

		declare module.exports: undefined


}

declare module 'npm$namespace$GridFSStream' {
		declare export interface Range {
		startPos: number,
		endPos: number
	}

	declare export interface Options {
		_id?: string,
		filename?: string,
		mode?: string,
		range?: Range,
		chunkSize?: number,
		content_type?: string,
		root?: string,
		metadata?: any
	}

	declare export interface WriteStream {
		writable: boolean,
		name: string,
		id: string,
		options: Options,
		mode: string
	}

	declare export interface ReadStream {
		readable: boolean,
		paused: boolean
	}

			
}

declare module 'g' {
				declare export class Grid  {
		files: mongo.Collection;
		collection(name?: string): mongo.Collection;
		curCol: string;
		createWriteStream(options?: GridFSStream.Options): GridFSStream.WriteStream;
		createReadStream(options?: GridFSStream.Options): GridFSStream.ReadStream;
		createWriteStream(options?: string): GridFSStream.WriteStream;
		createReadStream(options?: string): GridFSStream.ReadStream;
		remove(options: GridFSStream.Options, callback: (err: Error) => void): void;
		exist(
		options: GridFSStream.Options, callback: (err: Error, found: boolean) => void
	): void;
		findOne(
		options: GridFSStream.Options, callback: (err: Error, record: any) => void
	): void
	}

	
}