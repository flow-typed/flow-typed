import type { MediaTypeStatic } from 'npm$namespace$ContentType'

declare module 'content-type' {
					declare module.exports: MediaTypeStatic


}

declare module 'npm$namespace$ContentType' {
		declare interface MediaType {
		type: string,
		q?: number,
		params: any,
		toString(): string
	}

	declare interface SelectOptions {
		sortAvailable?: boolean,
		sortAccepted?: boolean
	}

	declare interface MediaTypeStatic {
		new (s: string, p?: any): MediaType,
		parseMedia(type: string): MediaType,
		splitQuotedString(str: string, delimiter?: string, quote?: string): string[],
		splitContentTypes(str: string): string[],
		select(
		availableTypes: MediaType[], acceptedTypes: MediaType[], options?: SelectOptions
	): string,
		mediaCmp(a: MediaType, b: MediaType): number
	}

			
}