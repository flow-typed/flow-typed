

declare module 'keytar' {
			declare export function getPassword(service: string, account: string): string

	declare export function addPassword(service: string, account: string, password: string): boolean

	declare export function deletePassword(service: string, account: string): string

	declare export function replacePassword(service: string, account: string, password: string): boolean

	declare export function findPassword(service: string): string

		
}