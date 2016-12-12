

declare module 'babelify' {
			declare function Babelify(filename: string, opts?: Babelify.BabelifyOptions): Babelify.BabelifyObject

		declare module.exports: undefined


}

declare module 'Babelify' {
		declare export interface BabelifyConstructor {
		(filename: string, opts: Babelify.BabelifyOptions): Babelify.BabelifyObject
	}

	declare export interface BabelifyOptions {
		extensions?: string | string[],
		sourceMapsAbsolute?: boolean
	}

	declare export function configure(opts: Babelify.BabelifyOptions): (filename: string) => Babelify.BabelifyObject

	declare export class BabelifyObject extends stream$Transform {
		_transform(buf: string | Buffer, encoding: string, callback: () => void): void;
		_flush(callback: () => void): void
	}

	
}