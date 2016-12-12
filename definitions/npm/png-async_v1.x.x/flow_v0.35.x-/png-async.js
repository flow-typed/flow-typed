

declare module 'png-async' {
		declare export interface IImageOptions {
		width?: number,
		height?: number,
		fill?: boolean,
		checkCRC?: boolean,
		deflateChunkSize?: number,
		deflateLevel?: number,
		deflateStrategy?: EDeflateStrategy,
		filterType?: EFilterType
	}

	declare export function createImage(option?: IImageOptions): Image

	declare export class Image extends stream$Duplex {
		width: number;
		height: number;
		gamma: number;
		data: Buffer;
		constructor(option?: IImageOptions): this;
		pack(): Image;
		parse(data: Buffer, callback?: (err: Error, image: Image) => void): Image;
		write(data: any, cb?: any): boolean;
		end(data?: any): void;
		bitblt(
		dst: Image, sx: number, sy: number, w: number, h: number, dx: number, dy: number
	): Image
	}

	
}