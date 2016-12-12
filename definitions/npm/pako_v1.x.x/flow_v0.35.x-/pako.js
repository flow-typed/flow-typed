

declare module 'pako' {
					declare module.exports: undefined


}

declare module 'npm$namespace$pako' {
			declare export function deflate(data: Uint8Array | Array<number> | string, options?: any): string

	declare export function deflateRaw(data: Uint8Array | Array<number> | string, options?: any): string

	declare export function gzip(data: Uint8Array | Array<number> | string, options?: any): string

	declare export function inflate(data: Uint8Array | Array<number> | string, options?: any): Uint8Array

	declare export function inflate(data: Uint8Array | Array<number> | string, options?: any): Array<number>

	declare export function inflate(data: Uint8Array | Array<number> | string, options?: any): String

	declare export function inflateRaw(data: Uint8Array | Array<number> | string, options?: any): Uint8Array

	declare export function inflateRaw(data: Uint8Array | Array<number> | string, options?: any): Array<number>

	declare export function inflateRaw(data: Uint8Array | Array<number> | string, options?: any): string

	declare export function ungzip(data: Uint8Array | Array<number> | string, options?: any): Uint8Array

	declare export function ungzip(data: Uint8Array | Array<number> | string, options?: any): Array<number>

	declare export function ungzip(data: Uint8Array | Array<number> | string, options?: any): string

	declare export class Deflate  {
		constructor(options?: any): this;
		err: number;
		msg: string;
		result: Uint8Array | Array<number>;
		onData(chunk: Uint8Array | Array<number> | string): void;
		onEnd(status: number): void;
		push(
		data: Uint8Array | Array<number> | ArrayBuffer | string, mode?: number | boolean
	): boolean
	}

	declare export class Inflate  {
		constructor(options?: any): this;
		err: number;
		msg: string;
		result: Uint8Array | Array<number> | string;
		onData(chunk: Uint8Array | Array<number> | string): void;
		onEnd(status: number): void;
		push(
		data: Uint8Array | Array<number> | ArrayBuffer | string, mode?: number | boolean
	): boolean
	}

	
}