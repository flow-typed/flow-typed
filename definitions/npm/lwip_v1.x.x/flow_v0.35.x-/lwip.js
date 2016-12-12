

declare module 'lwip' {
	declare type ColorObject = {
		r: number,
		g: number,
		b: number,
		a?: number
	};

	declare type Color = string | [number, number, number, number] | ColorObject;

	declare type JpegBufferParams = {
		quality?: number
	};

	declare type PngBufferParams = {
		compression?: string,
		interlaced?: boolean,
		transparency?: boolean | string
	};

	declare type GifBufferParams = {
		colors?: number,
		interlaced?: boolean,
		transparency?: boolean | string,
		threshold: number
	};

	declare interface ImageCallback {
		(err: any, image: Image): void
	}

	declare interface BufferCallback {
		(err: any, buffer: Buffer): void
	}

	declare interface Image {
		resize(width: number, callback: ImageCallback): void,
		resize(width: number, inter: string, callback: ImageCallback): void,
		resize(width: number, height: number, callback: ImageCallback): void,
		resize(width: number, height: number, inter: string, callback: ImageCallback): void,
		scale(wRatio: number, callback: ImageCallback): void,
		scale(wRatio: number, inter: string, callback: ImageCallback): void,
		scale(wRatio: number, hRatio: number, callback: ImageCallback): void,
		scale(wRatio: number, hRatio: number, inter: string, callback: ImageCallback): void,
		contain(width: number, height: number, callback: ImageCallback): void,
		contain(width: number, height: number, color: Color, callback: ImageCallback): void,
		contain(width: number, height: number, inter: string, callback: ImageCallback): void,
		contain(
		width: number, height: number, color: Color, inter: string, callback: ImageCallback
	): void,
		cover(width: number, height: number, callback: ImageCallback): void,
		cover(width: number, height: number, inter: string, callback: ImageCallback): void,
		rotate(degs: number, callback: ImageCallback): void,
		rotate(degs: number, color: Color, callback: ImageCallback): void,
		crop(
		left: number, top: number, right: number, bottom: number, callback: ImageCallback
	): void,
		crop(width: number, height: number, callback: ImageCallback): void,
		blur(sigma: number, callback: ImageCallback): void,
		sharpen(amplitude: number, callback: ImageCallback): void,
		mirror(axes: string, callback: ImageCallback): void,
		flip(axes: string, callback: ImageCallback): void,
		border(width: number, callback: ImageCallback): void,
		border(width: number, color: Color, callback: ImageCallback): void,
		pad(
		left: number, top: number, right: number, bottom: number, callback: ImageCallback
	): void,
		pad(
		left: number, top: number, right: number, bottom: number, color: Color, callback: ImageCallback
	): void,
		saturate(delta: number, callback: ImageCallback): void,
		lighten(delta: number, callback: ImageCallback): void,
		darken(delta: number, callback: ImageCallback): void,
		hue(shift: number, callback: ImageCallback): void,
		fade(delta: number, callback: ImageCallback): void,
		opacity(callback: ImageCallback): void,
		paste(left: number, top: number, img: Image, callback: ImageCallback): void,
		setPixel(left: number, top: number, color: Color, callback: ImageCallback): void,
		setMetaData(metadata: string): void,
		width(): number,
		height(): number,
		getPixel(left: number, top: number): ColorObject,
		clone(callback: ImageCallback): void,
		extract(
		left: number, top: number, right: number, bottom: number, callback: ImageCallback
	): void,
		toBuffer(format: "jpg", callback: BufferCallback): void,
		toBuffer(format: "jpg", params: JpegBufferParams, callback: BufferCallback): void,
		toBuffer(format: "png", callback: BufferCallback): void,
		toBuffer(format: "png", params: PngBufferParams, callback: BufferCallback): void,
		toBuffer(format: "gif", callback: BufferCallback): void,
		toBuffer(format: "gif", params: GifBufferParams, callback: BufferCallback): void,
		toBuffer(format: string, callback: BufferCallback): void,
		toBuffer(
		format: string, params: JpegBufferParams | PngBufferParams | GifBufferParams, callback: BufferCallback
	): void,
		writeFile(path: string, callback: ImageCallback): void,
		writeFile(
		path: string, params: JpegBufferParams | PngBufferParams | GifBufferParams, callback: ImageCallback
	): void,
		writeFile(path: string, format: "jpg", callback: ImageCallback): void,
		writeFile(
		path: string, format: "jpg", params: JpegBufferParams, callback: ImageCallback
	): void,
		writeFile(path: string, format: "png", callback: ImageCallback): void,
		writeFile(
		path: string, format: "png", params: PngBufferParams, callback: ImageCallback
	): void,
		writeFile(path: string, format: "gif", callback: ImageCallback): void,
		writeFile(
		path: string, format: "gif", params: GifBufferParams, callback: ImageCallback
	): void,
		writeFile(path: string, format: string, callback: ImageCallback): void,
		writeFile(
		path: string, format: string, params: JpegBufferParams | PngBufferParams | GifBufferParams, callback: ImageCallback
	): void,
		getMetaData<T>(): T,
		batch(): Batch
	}

	declare interface Batch {
		resize(width: number): Batch,
		resize(width: number, inter: string): Batch,
		resize(width: number, height: number): Batch,
		resize(width: number, height: number, inter: string): Batch,
		scale(wRatio: number): Batch,
		scale(wRatio: number, inter: string): Batch,
		scale(wRatio: number, hRatio: number): Batch,
		scale(wRatio: number, hRatio: number, inter: string): Batch,
		contain(width: number, height: number): Batch,
		contain(width: number, height: number, color: Color): Batch,
		contain(width: number, height: number, inter: string): Batch,
		contain(width: number, height: number, color: Color, inter: string): Batch,
		cover(width: number, height: number): Batch,
		cover(width: number, height: number, inter: string): Batch,
		rotate(degs: number): Batch,
		rotate(degs: number, color: Color): Batch,
		crop(left: number, top: number, right: number, bottom: number): Batch,
		crop(width: number, height: number): Batch,
		blur(sigma: number): Batch,
		sharpen(amplitude: number): Batch,
		mirror(axes: string): Batch,
		flip(axes: string): Batch,
		border(width: number): Batch,
		border(width: number, color: Color): Batch,
		pad(left: number, top: number, right: number, bottom: number): Batch,
		pad(left: number, top: number, right: number, bottom: number, color: Color): Batch,
		saturate(delta: number): Batch,
		lighten(delta: number): Batch,
		darken(delta: number): Batch,
		hue(shift: number): Batch,
		fade(delta: number): Batch,
		opacity(callback: ImageCallback): void,
		paste(left: number, top: number, img: Image): Batch,
		setPixel(left: number, top: number, color: Color): Batch,
		setMetaData(metadata: string): void,
		exec(callback: ImageCallback): void,
		toBuffer(format: "jpg", callback: BufferCallback): void,
		toBuffer(format: "jpg", params: JpegBufferParams, callback: BufferCallback): void,
		toBuffer(format: "png", callback: BufferCallback): void,
		toBuffer(format: "png", params: PngBufferParams, callback: BufferCallback): void,
		toBuffer(format: "gif", callback: BufferCallback): void,
		toBuffer(format: "gif", params: GifBufferParams, callback: BufferCallback): void,
		toBuffer(format: string, callback: BufferCallback): void,
		toBuffer(
		format: string, params: JpegBufferParams | PngBufferParams | GifBufferParams, callback: BufferCallback
	): void,
		writeFile(path: string, callback: ImageCallback): void,
		writeFile(
		path: string, params: JpegBufferParams | PngBufferParams | GifBufferParams, callback: ImageCallback
	): void,
		writeFile(path: string, format: "jpg", callback: ImageCallback): void,
		writeFile(
		path: string, format: "jpg", params: JpegBufferParams, callback: ImageCallback
	): void,
		writeFile(path: string, format: "png", callback: ImageCallback): void,
		writeFile(
		path: string, format: "png", params: PngBufferParams, callback: ImageCallback
	): void,
		writeFile(path: string, format: "gif", callback: ImageCallback): void,
		writeFile(
		path: string, format: "gif", params: GifBufferParams, callback: ImageCallback
	): void,
		writeFile(path: string, format: string, callback: ImageCallback): void,
		writeFile(
		path: string, format: string, params: JpegBufferParams | PngBufferParams | GifBufferParams, callback: ImageCallback
	): void
	}

	declare function open(source: string, callback: ImageCallback): void

	declare function open(source: string, type: string, callback: ImageCallback): void

	declare function open(
		source: Buffer, type: string | {
		width: number,
		height: number
	}, callback: ImageCallback
	): any

	declare function create(width: number, height: number, callback: ImageCallback): void

	declare function create(width: number, height: number, color: Color, callback: ImageCallback): void

		
}