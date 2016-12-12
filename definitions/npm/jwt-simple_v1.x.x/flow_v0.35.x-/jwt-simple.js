

declare module 'jwt-simple' {
			declare export function decode(token: any, key: string, noVerify?: boolean, algorithm?: string): any

	declare export function encode(payload: any, key: string, algorithm?: string, options?: any): string

		
}