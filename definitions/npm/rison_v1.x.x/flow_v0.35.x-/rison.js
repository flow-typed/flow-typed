

declare module 'rison' {
		declare interface IRison {
		encode(obj: any): string,
		encode_object<T>(obj: T): string,
		encode_array<T>(arr: T[]): string,
		encode_uri(obj: any): string,
		decode<T>(encoded: string): T,
		decode_object<T>(encoded: string): T,
		decode_array<T>(encoded: string): T[]
	}

			
}