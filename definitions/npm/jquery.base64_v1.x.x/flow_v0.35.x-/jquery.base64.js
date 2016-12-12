

declare module 'jquery.base64' {
		declare interface JQueryBase64Static {
		encode(data: string, isUTF8?: boolean): string,
		decode(data: string, isUTF8?: boolean): string
	}

	declare interface JQueryStatic {
		base64: JQueryBase64Static
	}

			
}