

declare module 'password-hash' {
		declare export interface Options {
		algorithm?: string,
		saltLength?: number,
		iterations?: number
	}

	declare export function generate(password: string, options?: Options): string

	declare export function verify(password: string, hashedPassword: string): boolean

	declare export function isHashed(password: string): boolean

		
}