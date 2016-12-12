

declare module 'windows-1251' {
					declare module.exports: undefined


}

declare module 'npm$namespace$windows1251' {
	declare type EncoderMode = "fatal" | "html";

	declare type DecoderMode = "replacement" | "fatal";

	declare interface windows1251 {
		encode(input: string, options?: {
		mode?: EncoderMode
	}): string,
		decode(text: string, options?: {
		mode?: DecoderMode
	}): string
	}

			
}