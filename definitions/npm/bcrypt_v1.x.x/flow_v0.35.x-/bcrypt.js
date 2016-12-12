

declare module 'bcrypt' {
			declare export function genSaltSync(rounds?: number): string

	declare export function genSalt(rounds: number, callback: (err: Error, salt: string) => void): void

	declare export function genSalt(callback: (err: Error, salt: string) => void): void

	declare export function hashSync(data: any, salt: string): string

	declare export function hashSync(data: any, rounds: number): string

	declare export function hash(
		data: any, salt: string, callback: (err: Error, encrypted: string) => void
	): void

	declare export function hash(
		data: any, rounds: number, callback: (err: Error, encrypted: string) => void
	): void

	declare export function compareSync(data: any, encrypted: string): boolean

	declare export function compare(
		data: any, encrypted: string, callback: (err: Error, same: boolean) => void
	): void

	declare export function getRounds(encrypted: string): number

		
}