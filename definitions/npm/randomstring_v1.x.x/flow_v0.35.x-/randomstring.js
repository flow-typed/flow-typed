

declare module 'randomstring' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Randomstring' {
		declare interface GenerateOptions {
		length?: number,
		readable?: boolean,
		charset?: string,
		capitalization?: string
	}

	declare function generate(options?: GenerateOptions): string

		
}