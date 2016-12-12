

declare module 'bcryptjs' {
			declare export function setRandomFallback(random: (random: number) => number[]): void

	declare export function genSaltSync(rounds?: number): string

	declare export function genSalt(callback: (err: Error, salt: string) => void): void

	declare export function genSalt(rounds: number, callback: (err: Error, salt: string) => void): void

	declare export function hashSync(s: string, salt?: number | string): string

	declare export function hash(
		s: string, salt: number | string, callback: (err: Error, hash: string) => void, progressCallback?: (percent: number) => void
	): void

	declare export function compareSync(s: string, hash: string): boolean

	declare export function compare(
		s: string, hash: string, callback: (err: Error, success: boolean) => void, progressCallback?: (percent: number) => void
	): void

	declare export function getRounds(hash: string): number

	declare export function getSalt(hash: string): string

		
}