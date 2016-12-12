

declare module 'shortid' {
			declare export function generate(): string

	declare export function characters(string: string): string

	declare export function isValid(id: any): boolean

	declare export function worker(integer: number): void

	declare export function seed(float: number): void

		
}