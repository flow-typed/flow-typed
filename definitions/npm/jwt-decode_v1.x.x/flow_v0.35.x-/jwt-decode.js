import type { JwtDecodeStatic } from 'npm$namespace$JwtDecode'

declare module 'jwt-decode' {
					declare module.exports: JwtDecodeStatic


}

declare module 'npm$namespace$JwtDecode' {
		declare interface JwtDecodeStatic {
		(token: string): any
	}

			
}