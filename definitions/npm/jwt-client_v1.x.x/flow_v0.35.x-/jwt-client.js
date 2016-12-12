

declare module 'jwt-client' {
		declare interface JWTHeader {
		typ: string,
		alg: string
	}

	declare interface JWTObject {
		header: JWTHeader,
		claim: any,
		signature: string
	}

	declare function read(header: string): JWTObject

	declare function write(value: JWTObject): string

	declare function keep(value: JWTObject, key?: any, storate?: any): void

	declare function remember(): void

	declare function forget(): void

	declare function get(): string

	declare function validate(value: JWTObject, issuer?: any, audience?: any): boolean

		
}