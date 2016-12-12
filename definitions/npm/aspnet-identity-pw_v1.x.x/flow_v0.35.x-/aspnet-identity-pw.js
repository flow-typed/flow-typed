

declare module 'aspnet-identity-pw' {
			declare export function hashPassword(password: string): string

	declare export function hashPassword(password: string, callback: (err: any, result: string) => void): void

	declare export function validatePassword(password: string, hashedPass: string): boolean

	declare export function validatePassword(
		password: string, hashedPass: string, callback: (err: any, result: boolean) => void
	): void

		
}