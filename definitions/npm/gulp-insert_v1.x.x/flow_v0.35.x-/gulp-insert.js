

declare module 'gulp-insert' {
		declare interface Transformer {
		(contents: string, file: File): string
	}

			declare module.exports: undefined


}

declare module 'Insert' {
			declare function prepend(content: string): NodeJS.ReadWriteStream

	declare function append(content: string): NodeJS.ReadWriteStream

	declare function wrap(prepend: string, append: string): NodeJS.ReadWriteStream

	declare function transform(transformer: Transformer): NodeJS.ReadWriteStream

		
}