

declare module 'gulp-if' {
		declare interface GulpIf {
		(condition: boolean, stream: NodeJS.ReadWriteStream, elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream,
		(condition: StatFilterCondition, stream: NodeJS.ReadWriteStream, elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream,
		(condition: (fs: vinyl) => boolean, stream: NodeJS.ReadWriteStream, elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream,
		(condition: RegExp, stream: NodeJS.ReadWriteStream, elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream
	}

	declare interface StatFilterCondition {
		isDirectory?: boolean,
		isFile?: boolean
	}

			declare module.exports: GulpIf


}