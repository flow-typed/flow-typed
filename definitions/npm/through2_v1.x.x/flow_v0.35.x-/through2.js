

declare module 'through2' {
	declare type TransformCallback = (err?: any, data?: any) => void;

	declare type TransformFunction = (chunk: any, enc: string, callback: TransformCallback) => void;

	declare type FlushCallback = (flushCallback: () => void) => void;

	declare export interface Through2Constructor {
		new (opts?: stream.DuplexOptions): stream.Transform,
		(opts?: stream.DuplexOptions): stream.Transform
	}

	declare function through2(transform?: TransformFunction, flush?: FlushCallback): stream.Transform

	declare function through2(
		opts?: stream.DuplexOptions, transform?: TransformFunction, flush?: FlushCallback
	): stream.Transform

	declare export function obj(transform?: TransformFunction, flush?: FlushCallback): stream.Transform

	declare export function ctor(
		opts?: stream.DuplexOptions, transfrom?: TransformFunction, flush?: FlushCallback
	): Through2Constructor

		declare module.exports: undefined


}