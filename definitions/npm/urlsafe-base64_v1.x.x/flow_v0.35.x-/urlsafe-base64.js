

declare module 'urlsafe-base64' {
			declare export function encode(buffer: Buffer): string

	declare export function decode(base64: string): Buffer

	declare export function validate(base64: string): boolean

		
}