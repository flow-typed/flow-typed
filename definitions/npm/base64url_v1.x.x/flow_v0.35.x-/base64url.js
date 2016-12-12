

declare module 'base64url' {
	declare type Encoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "utf16le" | "base64" | "binary" | "hex";

	declare interface IBase64Url {
		(input: string, encoding?: Encoding): string,
		(inout: Buffer): string,
		encode(input: string, encoding?: Encoding): string,
		encode(input: Buffer): string,
		decode(base64url: string, encoding?: string): string,
		toBase64(base64url: string | Buffer): string,
		fromBase64(base64: string): string,
		toBuffer(base64url: string): Buffer
	}

			declare module.exports: IBase64Url


}