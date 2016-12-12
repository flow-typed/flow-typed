

declare module 'bcrypt-nodejs' {
			declare export function genSaltSync(rounds?: number): string

	declare export function genSalt(rounds: number, callback: (error: Error, result: string) => void): void

	declare export function hashSync(data: string, salt?: string): string

	declare export function hash(
		data: string, salt: string, callback: (error: Error, result: string) => void
	): void

	declare export function hash(
		data: string, salt: string, progressCallback: () => void, callback: (error: Error, result: string) => void
	): void

	declare export function compareSync(data: string, hash: string): boolean

	declare export function compare(
		data: string, hash: string, callback: (error: Error, result: boolean) => void
	): void

	declare export function getRounds(hash: string): number

		
}