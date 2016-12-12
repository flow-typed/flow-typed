

declare module 'jwt-simple-0.2.0' {
					
}

declare module 'jwt-simple' {
			declare export function decode(token: any, key: string, noVerify?: boolean): any

	declare export function encode(payload: any, key: string, algorithm?: string): string

		
}