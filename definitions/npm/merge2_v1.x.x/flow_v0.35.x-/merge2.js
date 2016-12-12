

declare module 'merge2' {
		declare interface IOptions {
		end?: boolean,
		objectMode?: boolean
	}

	declare interface IMerge2Stream {
		add(
		...args: Array<NodeJS.ReadWriteStream | IMerge2Stream | Array<NodeJS.ReadWriteStream | IMerge2Stream | IOptions>>
	): IMerge2Stream
	}

	declare interface IMerge2 {
		(...args: Array<NodeJS.ReadWriteStream | IMerge2Stream | Array<NodeJS.ReadWriteStream | IMerge2Stream> | IOptions>): IMerge2Stream
	}

			declare module.exports: IMerge2


}